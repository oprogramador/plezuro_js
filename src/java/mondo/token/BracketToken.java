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
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.function.Function;

public class BracketToken extends Token {
    private Token role;

    public BracketToken setRole(Token token) {
        role = token;
        return this;
    }

    public Token getRole() {
        return role;
    }

    public boolean isBlank() {
        return false;
    }

    public boolean isEntity() {
        return false;
    }

    static Token getOperatorBracketOpen() {
        return new BracketOpenToken().setText("(");
    }

    static Token getOperatorBracketClose() {
        return new BracketCloseToken().setText(")");
    }

    protected List<String> getPossibleTokens() {
        return new ArrayList<String>() {{
            add("[");
            add("]");
            add("(");
            add(")");
            add("{");
            add("}");
            add("#(");
            add("$(");
            add("%(");
        }};
    }

    private static String matchSet(ITokenizer tokenizer) {
        tokenizer.getMatchingCloseBracket();
        tokenizer.insertBefore(new BracketToken().setText("]"));
        return "new Set([";
    }

    private static String matchDictionary(ITokenizer tokenizer) {
        tokenizer.getMatchingCloseBracket();
        tokenizer.insertBefore(new BracketToken().setText("]"));
        return "new Dictionary([";
    }

    private static String matchAssociativeArray(ITokenizer tokenizer) {
        tokenizer.getMatchingCloseBracket();
        tokenizer.insertBefore(new BracketToken().setText("]"));
        return "new AssocArray([";
    }

    private static String matchFunctionBegin(ITokenizer tokenizer) {
        return "(function () {";
    }

    private static String matchFunctionEnd(ITokenizer tokenizer) {
        int counter = 1;
        for(Token token = tokenizer.getPreviousNotBlank(); token != null; token = tokenizer.getPreviousNotBlank()) {
            if(token.getText() == OperatorToken.getOperatorSemicolon().getText()) {
                token.setText("; return");
                break;
            }
            if(token instanceof FunctionToken) counter--;
            if(token instanceof FunctionEndToken) counter++;
            if(counter == 0) {
                tokenizer.insertAfter(new SymbolToken().setText("return "));
                break;
            }
        }
        Token next = tokenizer.getNext();
        if(next instanceof NewLineToken) next.setText(" ");
        return "})";
    }

    private Map<String, Function<ITokenizer, String>> functionMap = new HashMap<String, Function<ITokenizer, String>>() {{
        put("[", (ITokenizer t) -> "[");
        put("]", (ITokenizer t) -> "]");
        put("(", (ITokenizer t) -> "(");
        put(")", (ITokenizer t) -> ")");
        put("{", BracketToken::matchFunctionBegin);
        put("}", BracketToken::matchFunctionEnd);
        put("$(", BracketToken::matchSet);
        put("%(", BracketToken::matchAssociativeArray);
        put("#(", BracketToken::matchDictionary);
    }};

    private Map<String, Class<?>> classMap = new HashMap<String, Class<?>>() {{
        put("[", SquareBracketOpenToken.class);
        put("]", SquareBracketCloseToken.class);
        put("(", BracketOpenToken.class);
        put(")", BracketCloseToken.class);
        put("{", FunctionToken.class);
        put("}", FunctionEndToken.class);
        put("$(", BracketOpenToken.class);
        put("%(", BracketOpenToken.class);
        put("#(", BracketOpenToken.class);
    }};

    public void convert(ITokenizer tokenizer) {
        try {
            text = functionMap.get(originalText).apply(tokenizer);
        } catch(NullPointerException e) {
        }
    }

    public Token eventuallyChangeType(ITokenizer tokenizer) {
        Token previous = tokenizer.getPrevious();
        if(originalText.equals("[") && previous != null && previous.isEntity()) {
            setRole(new IndexOperatorToken());
        }
        if(classMap.containsKey(originalText)) {
            try {
                Token result = ((Token)classMap.get(originalText).newInstance()).copyAll(this);
                return result;
            } catch(InstantiationException | IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        return this;
    }
}
