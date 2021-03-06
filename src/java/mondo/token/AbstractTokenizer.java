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
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.Collections;

public abstract class AbstractTokenizer implements ITokenizer {
    protected boolean finished;

    public void finish() {
        finished = true;
    }

    public boolean isFinished() {
        return finished;
    }

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

    private static <T> void incrementMap(Map<T, Integer> map, T object) {
        if(map.containsKey(object)) map.put(object, map.get(object) + 1);
        else map.put(object, 1);
    }

    private static <T> void decrementMap(Map<T, Integer> map, T object) {
        if(map.containsKey(object)) map.put(object, map.get(object) - 1);
        else map.put(object, -1);
    }

    private static <T> boolean allEqualsZero(Map<T, Integer> map) {
        for(Integer i: map.values()) if(i != 0) return false;
        return true;
    }

    public Token getNextAtSameBracketLevel() {
        Map<Class<?>, Integer> map = new HashMap<Class<?>, Integer>();
        for(Token token = getCurrent(); token != null; token = getNextNotBlank()) {
            if(token instanceof IOpen) incrementMap(map, token.getClass());
            else if(token instanceof IClose) decrementMap(map, ((IClose)token).getOpenClass());
            if(allEqualsZero(map)) return getNextNotBlank();
        }

        return null;
    }

    public Token getMatchingCloseBracket() {
        if(!(getCurrent() instanceof IOpen)) return null;

        Class<?> neededClass = getCurrent().getClass();
        int counter = 1;
        for(Token token = getNextNotBlank(); token != null; token = getNextNotBlank()) {
            if(neededClass.isInstance(token)) counter++;
            if(token instanceof IClose && ((IClose)token).getOpenClass().equals(neededClass)) counter--;
            if(counter == 0) return token;
        }
        return null;
    }

    public List<Token> getLastGroup() {
        int counter = 0;
        List<Token> result = new ArrayList<Token>();
        for(Token token = getCurrent(); token != null; token = getPreviousNotBlank()) {
            result.add((Token)token.clone());
            if(token instanceof IClose) counter++;
            else if(token instanceof IOpen) counter--;
            if(counter == 0) break;
        }
        Token previous = getPreviousNotBlank();
        if(previous instanceof SymbolToken) result.add((Token)previous.clone());
        Collections.reverse(result);

        return result;
    }
}
