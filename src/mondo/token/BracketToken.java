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
    public boolean isBlank() {
        return false;
    }

    static Token getOperatorBracketOpen() {
        return new BracketToken().setText("(");
    }

    static Token getOperatorBracketClose() {
        return new BracketToken().setText(")");
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
        tokenizer.getCurrent().setRole(new FunctionToken());
        return "(function () {";
    }

    private static String matchFunctionEnd(ITokenizer tokenizer) {
        tokenizer.getCurrent().setRole(new FunctionEndToken());
        int counter = 1;
        for(Token token = tokenizer.getPrevious(); token != null; token = tokenizer.getPrevious()) {
            if(token.getText() == OperatorToken.getOperatorSemicolon().getText()) {
                token.setText("; return");
                break;
            }
            if(token.getRole() instanceof FunctionToken) counter--;
            if(token.getRole() instanceof FunctionEndToken) counter++;
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
        put("{", BracketToken::matchFunctionBegin);
        put("}", BracketToken::matchFunctionEnd);
        put("$(", BracketToken::matchSet);
        put("%(", BracketToken::matchAssociativeArray);
        put("#(", BracketToken::matchDictionary);
    }};

    public void convert(ITokenizer tokenizer) {
        try {
            text = functionMap.get(originalText).apply(tokenizer);
        } catch(NullPointerException e) {
        }
    }
}
