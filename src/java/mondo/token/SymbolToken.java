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

public class SymbolToken extends Token {
    public boolean isBlank() {
        return false;
    }

    public boolean isEntity() {
        return true;
    }

    public String getRegex() {
        return "[A-Za-z_]+[A-Za-z_0-9]*";
    }

    private Map<String, Function<String,String>> functionMap = new HashMap<String, Function<String,String>>() {{
        put("args", (String x) -> "([this].concat(Array.prototype.slice.call(arguments)))");
        put("this", (String x) -> "this");
        put("first", (String x) -> "arguments[0]");
        put("second", (String x) -> "arguments[1]");
        put("third", (String x) -> "arguments[2]");
        put("rand", (String x) -> "Math.random()");
        put("null", (String x) -> "new Null()");
    }};

    private Map<String, Function<Token,String>> tokenFunctionMap = new HashMap<String, Function<Token,String>>() {{
        put("__line__", (Token t) -> "("+t.getLineNr()+")");
        put("__pos__", (Token t) -> "("+t.getBegX()+")");
        put("__file__", (Token t) -> "\""+t.getFilename()+"\"");
        put("__dir__", (Token t) -> "\""+t.getDirName()+"\"");
    }};

    private boolean insertFunctionCallEventually(ITokenizer tokenizer) {
        tokenizer.resetToThis();
        Token previous = tokenizer.getPreviousNotBlank();
        tokenizer.resetToThis();
        Token next = tokenizer.getNextNotBlank();
        if(previous == null || previous.getText() == OperatorToken.getOperatorDot().getText() || !(next instanceof BracketOpenToken)) return false;

        tokenizer.resetToThis();
        tokenizer.insertAfter(new SymbolToken().setText(".call"));
        return true;
    }

    private boolean insertBracketAfterEventually(ITokenizer tokenizer) {
        tokenizer.resetToThis();
        Token previous = tokenizer.getPreviousNotBlank();
        if(previous == null || previous.getText() != OperatorToken.getOperatorDot().getText()) return false;

        tokenizer.resetToThis();
        Token next = tokenizer.getNextNotBlank();
        if(next != null && !(next instanceof OperatorToken || next instanceof IClose)) return false;

        tokenizer.resetToThis();
        tokenizer.insertAfter(BracketToken.getOperatorBracketOpen());
        tokenizer.insertAfter(BracketToken.getOperatorBracketClose());
        return true;
    }

    protected void doConvert(ITokenizer tokenizer) {
        insertBracketAfterEventually(tokenizer);
        insertFunctionCallEventually(tokenizer);
        try {
            text = functionMap.get(originalText).apply(originalText);
        } catch(NullPointerException e) {
            try {
                text = tokenFunctionMap.get(originalText).apply(this);
            } catch(NullPointerException ee) {
            }
        }
    }
}
