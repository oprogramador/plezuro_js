/*
 * Copyright 2015 pierre (Piotr Sroczkowski) <pierre.github@gmail.com>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */

package mondo.engine;

import java.util.List;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.io.File;

import mondo.invalidToken.InvalidTokenException;
import mondo.invalidToken.NonExistentTokenException;
import mondo.token.AbstractTokenizer;
import mondo.token.Token;
import mondo.token.NumberToken;
import mondo.token.DeclarationToken;
import mondo.token.ClassFieldToken;
import mondo.token.ObjectFieldToken;
import mondo.token.WhiteSpaceToken;
import mondo.token.OperatorToken;
import mondo.token.SymbolToken;
import mondo.token.StringToken;
import mondo.token.RegexToken;
import mondo.token.BracketToken;
import mondo.token.CommentToken;
import mondo.token.MultiLineCommentToken;
import mondo.token.NewLineToken;

public class Tokenizer extends AbstractTokenizer {
    private List<Token> tokenTypes = new ArrayList<Token>() {{
        add(new CommentToken());
        add(new MultiLineCommentToken());
        add(new RegexToken());
        add(new BracketToken());
        add(new NumberToken());
        add(new DeclarationToken());
        add(new ClassFieldToken());
        add(new ObjectFieldToken());
        add(new WhiteSpaceToken());
        add(new OperatorToken());
        add(new SymbolToken());
        add(new StringToken());
    }};

    private List<Token> tokens = new ArrayList<Token>();

    private int hardTokenIndex = 0;
    private int tokenIndex = 0;

    Token hardNext() {
        hardTokenIndex++;
        tokenIndex = hardTokenIndex;
        if(tokenIndex < tokens.size()) return tokens.get(tokenIndex);
        return null;
    }

    public Token hardReset() {
        finished = false;
        hardTokenIndex = 0;
        tokenIndex = hardTokenIndex;
        if(tokens.size() < 1) return null;
        return tokens.get(tokenIndex);
    }

    public Token reset() {
        tokenIndex = 0;
        if(tokens.size() < 1) return null;
        return tokens.get(tokenIndex);
    }

    public Token resetToThis() {
        tokenIndex = hardTokenIndex;
        return tokens.get(tokenIndex);
    }

    public Token getCurrent() {
        if(tokenIndex < tokens.size()) return tokens.get(tokenIndex);
        return null;
    }

    public Token getNext() {
        tokenIndex++;
        if(tokenIndex < tokens.size()) return tokens.get(tokenIndex);
        return null;
    }

    public Token getPrevious() {
        tokenIndex--;
        if(tokenIndex >= 0) return tokens.get(tokenIndex);
        return null;
    }

    public void insertAfter(Token token) {
        tokens.add(tokenIndex + 1, token);
        if(tokenIndex + 1 <= hardTokenIndex) hardTokenIndex++;
        tokenIndex++;
    }

    public List<Token> getTokens() {
        return tokens;
    }

    public void replaceToken(Token token) {
        tokens.set(tokenIndex, token);
    }

    public Tokenizer(File file, List<String> lines) throws InvalidTokenException {
        Token.setStaticFilename(file.getAbsolutePath());
        for(int i=0; i<lines.size(); i++) {
            int index = 0;
            while(index < lines.get(i).length()) {
                int oldIndex = index;
                for(Token tokenType: tokenTypes) {
                    Token token = tokenType.setFile(file).find(lines, i, index);
                    if(token != null) {
                        index = token.getEndX() + 1;
                        i = token.getEndLineNr();
                        tokens.add(token);
                        break;
                    }
                }
                if(oldIndex == index && index != lines.get(i).length()-1) {
                    throw InvalidTokenException.create(NonExistentTokenException.class, file.getAbsolutePath(), i, index);
                }
            }
            tokens.add(new NewLineToken(i, lines.get(i).length()).setFile(file));
        }
    }
}
