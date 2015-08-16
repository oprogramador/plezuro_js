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

import java.util.List;

public abstract class AbstractTokenizer implements ITokenizer {
    public abstract List<Token> getTokens();
    public abstract Token resetToThis();
    public abstract Token getCurrent();
    public abstract Token getNext();
    public abstract Token getPrevious();

    public Token getNextNotBlank() {
        for(Token token = getNext(); token != null; token = getNext()) {
            if(!token.isBlank()) return token;
        }
        return null;
    }

    public Token getPreviousNotBlank() {
        for(Token token = getPrevious(); token != null; token = getPrevious()) {
            if(!token.isBlank()) return token;
        }
        return null;
    }

    public abstract void insertAfter(Token token);

    public void insertBefore(Token token) {
        getPrevious();
        insertAfter(token);
    }

    public Token getMatchingCloseBracket() {
        int counter = 1;
        for(Token token = getNext(); token != null; token = getNext()) {
            if(token.getText() == BracketToken.getOperatorBracketOpen().getText()) counter++;
            if(token.getText() == BracketToken.getOperatorBracketClose().getText()) counter--;
            if(counter == 0) return token;
        }
        return null;
    }
}
