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
import mondo.token.ITokenMatcher;
import mondo.token.NumberToken;
import mondo.token.DeclarationToken;
import mondo.token.WhiteSpaceToken;
import mondo.token.OperatorToken;
import mondo.token.SymbolToken;
import mondo.token.StringToken;
import mondo.token.BracketToken;
import mondo.token.CommentToken;

public class Tokenizer {
    private List<Token> tokenTypes = new ArrayList<Token>() {{
        add(new CommentToken());
        add(new NumberToken());
        add(new DeclarationToken());
        add(new WhiteSpaceToken());
        add(new OperatorToken());
        add(new SymbolToken());
        add(new StringToken());
        add(new BracketToken());
    }};

    private List<Token> tokens = new ArrayList<Token>();

    public Tokenizer(List<String> lines) throws InvalidTokenException {
        for(int i=0; i<lines.size(); i++) {
            String line = lines.get(i);
            int index = 0;
            while(index < line.length()) {
                int oldIndex = index;
                for(Token tokenType: tokenTypes) {
                    ITokenMatcher tokenMatcher = tokenType.find(lines, i, index);
                    if(tokenMatcher != null) {
                        index = tokenMatcher.end();
                        i = tokenMatcher.getEndLineNr();
                        tokens.add(tokenMatcher.getToken());
                        break;
                    }
                }
                if(oldIndex == index && index != line.length()-1) throw new InvalidTokenException("Line: "+i);
            }
        }
        for(Token token: tokens) System.out.println(token);
    }
}
