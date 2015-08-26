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

package mondo.token;

import java.io.IOException;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.TreeMap;
import java.util.function.Function;

public class IndexOperatorToken extends OperatorToken {
    private Token getMatchingCloseBracket(ITokenizer tokenizer) {
        int counter = 1;
        for(Token token = tokenizer.getNext(); token != null; token = tokenizer.getNext()) {
            if(token.getOriginalText() != null && token.getOriginalText().equals("[")) counter++;
            if(token.getOriginalText() != null && token.getOriginalText().equals("]")) counter--;
            if(counter == 0) return token;
        }
        return null;
    }

    protected void matchOperatorMethod(ITokenizer tokenizer) {
        tokenizer.getCurrent().setText(".__index(");
        Token endToken = getMatchingCloseBracket(tokenizer);
        tokenizer.replaceToken(new FunctionEndToken().copyAll(endToken).setText(")"));
    }
}
