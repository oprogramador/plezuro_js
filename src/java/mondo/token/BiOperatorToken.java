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

public class BiOperatorToken extends OperatorToken {
    protected List<String> getOnlyPossibleTokens() {
        return possibleTokens;
    }

    private static List<String> possibleTokens = new ArrayList<String>() {{
        add(";");
        add(",");
        add(":=");
        add("=");
        add("+=");
        add("-=");
        add("*=");
        add("/=");
        add("^=");
        add("&=");
        add("|=");
        add("%=");
        add(".=");
        add("~~");
        add("<->");
        add("<<");
        add(">>");	
        add("?");	
        add("|");	
        add("&");	
        add("<=>");	
        add(">=");	
        add(">");	
        add("<=");	
        add("<");	
        add("!=");	
        add("==");	
        add("!==");
        add("===");	
        add("=~");
        add("!~");
        add("+");
        add("-");	
        add("%");	
        add("*");
        add("/");	
        add("^");
        add("^^");
        add(".");
        add("..");
        add(":");	
    }};

    private static Map<String, Integer> operatorOrder;

    static {
        operatorOrder = new TreeMap<String, Integer>();
        for(int i = 0; i < possibleTokens.size(); i++) operatorOrder.put(possibleTokens.get(i), i); 
    }

    private static Map<String, Function<String,String>> functionMap = new HashMap<String, Function<String,String>>() {{
        put(":", (String x) -> ",");
    }};

    protected Map<String, Function<String,String>> getFunctionMap() {
        return functionMap;
    }

    private Map<String, String> operatorMethodNames = new HashMap<String, String>() {{
        put("<<", "__leftShift");
        put(">>", "__rightShift");
        put("|", "__or");
        put("&", "__and");
        put("=~", "__equiv");
        put("+", "__add");
        put("-", "__sub");
        put("%", "__mod");
        put("*", "__mul");
        put("/", "__div");
        put("^", "__pow");
        put("..", "__range");
    }};

    protected void matchOperatorMethod(ITokenizer tokenizer) {
        if(operatorMethodNames.get(tokenizer.getCurrent().getOriginalText()) == null) return;

        Integer myOrder = operatorOrder.get(tokenizer.getCurrent().getOriginalText());
        tokenizer.getCurrent().setText("."+operatorMethodNames.get(tokenizer.getCurrent().getOriginalText())+"(");
        for(Token token = tokenizer.getNextAtSameBracketLevel(); token != null; token = tokenizer.getNextAtSameBracketLevel()) {
            try {
                if(token instanceof IClose || (token instanceof BiOperatorToken && operatorOrder.get(token.getOriginalText()) <= myOrder)) {
                    tokenizer.insertBefore(BracketToken.getOperatorBracketClose());
                    return;
                }
            } catch(NullPointerException e) {
                e.printStackTrace();
                return;
            }
        }
        tokenizer.insertBefore(BracketToken.getOperatorBracketClose());
    }
}
