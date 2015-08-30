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

public class OperatorToken extends Token {
    public boolean isBlank() {
        return false;
    }

    public boolean isEntity() {
        return false;
    }

    static Token getOperatorDot() {
        return new OperatorToken().setText(".");
    }

    static Token getOperatorSemicolon() {
        return new OperatorToken().setText(";");
    }

    private static List<OperatorToken> activeSubtypes = new ArrayList<OperatorToken>() {{
        add(new BiOperatorToken());
        add(new UniOperatorToken());
    }};
    private static List<String> possibleTokens;

    static {
        possibleTokens = new ArrayList<String>();
        for(OperatorToken token: activeSubtypes) possibleTokens.addAll(token.getOnlyPossibleTokens());
    }

    protected List<String> getPossibleTokens() {
        return possibleTokens;
    }

    protected List<String> getOnlyPossibleTokens() {
        return new ArrayList<String>();
    }

    protected Map<String, Function<String,String>> getFunctionMap() {
        return new HashMap<String, Function<String,String>>();
    }

    protected void matchOperatorMethod(ITokenizer tokenizer) {
    }

    protected void doConvert(ITokenizer tokenizer) {
        try {
            text = getFunctionMap().get(originalText).apply(originalText);
        } catch(NullPointerException e) {
            matchOperatorMethod(tokenizer);
        }
    }

    public Token getObjectOfSuitableSubclass(String tokenText) {
        for(OperatorToken token: activeSubtypes) if(token.getOnlyPossibleTokens().contains(tokenText)) return (Token)token.clone();
        return new OperatorToken();
    }
}
