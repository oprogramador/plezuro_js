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

import mondo.token.Token;
import mondo.token.NumberToken;
import mondo.token.DeclarationToken;
import mondo.token.WhiteSpaceToken;
import mondo.token.OperatorToken;
import mondo.token.SymbolToken;
import mondo.token.StringToken;
import mondo.token.BracketToken;
import mondo.token.CommentToken;
import mondo.token.MultiLineCommentToken;
import mondo.token.NewLineToken;

public class Tokenizer {
    private List<Token> tokenTypes = new ArrayList<Token>() {{
        add(new CommentToken());
        add(new MultiLineCommentToken());
        add(new NumberToken());
        add(new DeclarationToken());
        add(new WhiteSpaceToken());
        add(new OperatorToken());
        add(new SymbolToken());
        add(new StringToken());
        add(new BracketToken());
    }};

    private List<Token> tokens = new ArrayList<Token>();

    public List<Token> getTokens() {
        return tokens;
    }

    public Tokenizer(List<String> lines) throws InvalidTokenException {
        for(int i=0; i<lines.size(); i++) {
            int index = 0;
            while(index < lines.get(i).length()) {
                int oldIndex = index;
                for(Token tokenType: tokenTypes) {
                    Token token = tokenType.find(lines, i, index);
                    if(token != null) {
                        index = token.getEndX() + 1;
                        i = token.getEndLineNr();
                        tokens.add(token);
                        break;
                    }
                }
                if(oldIndex == index && index != lines.get(i).length()-1) throw new InvalidTokenException("Line: "+i+", index: "+index);
            }
            tokens.add(new NewLineToken(i, lines.get(i).length()));
        }
        for(Token token: tokens) System.out.println(token);
    }
}