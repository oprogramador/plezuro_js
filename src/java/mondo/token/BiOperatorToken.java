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
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
import java.util.TreeMap;
import java.util.function.Function;

public class BiOperatorToken extends OperatorToken {
    private int order = -1;

    public BiOperatorToken setOrder(int value) {
        order = value;
        return this;
    }

    public int getOrder() {
        if(order != -1) return order;
        return operatorOrder.get(originalText);
    }

    protected List<String> getOnlyPossibleTokens() {
        return possibleTokens;
    }

    public boolean isArithmetic() {
        return arithmeticTokens.contains(originalText);
    }

    public boolean isAllowedAtBegin() {
        return tokensAllowedAtBegin.contains(originalText);
    }

    public boolean isDelimiter() {
        return delimiterTokens.contains(originalText);
    }

    private static Set<String> delimiterTokens = new HashSet<String>() {{
        add(";");
        add(",");
    }};

    private static Set<String> tokensAllowedAtBegin = new HashSet<String>() {{
        add("+");
        add("-");	
    }};

    private static Set<String> compositeOperators = new HashSet<String>() {{
        add("+=");
        add("-=");
        add("*=");
        add("/=");
        add("^=");
        add("&=");
        add("|=");
        add("%=");
        add(".=");
    }};

    private static Set<String> arithmeticTokens = new HashSet<String>() {{
        add("+");
        add("-");	
        add("%");	
        add("*");
        add("/");	
        add("^");
        add(".");
    }};

    private static int getOrderMaxNumber() {
        return possibleTokens.size() * 2;
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
    }};

    protected Map<String, Function<String,String>> getFunctionMap() {
        return functionMap;
    }

    private List<String> operatorsToOverload = new ArrayList<String>() {{
        add("<<");
        add(">>");
        add("|");
        add("&");
        add("=~");
        add("!~");
        add("+");
        add("-");
        add("%");
        add("*");
        add("/");
        add("^");
        add("..");
        add(":");	
        add("?");	
    }};

    void replaceComposeOperator(ITokenizer tokenizer) {
        String operator = tokenizer.getCurrent().getOriginalText();
        operator = operator.substring(0, operator.length() - 1);
        tokenizer.getCurrent().setText("=");
        tokenizer.getPreviousNotBlank();
        List<Token> group = tokenizer.getLastGroup();
        tokenizer.resetToThis();
        for(Token token: group) tokenizer.insertAfter(token);
        tokenizer.insertAfter(((BiOperatorToken)new BiOperatorToken().setOriginalText(operator)).setOrder(getOrder()));
    }

    public void preConvert(ITokenizer tokenizer) {
        if(compositeOperators.contains(tokenizer.getCurrent().getOriginalText())) replaceComposeOperator(tokenizer);
    }

    protected void matchOperatorMethod(ITokenizer tokenizer) {
        if(!operatorsToOverload.contains(tokenizer.getCurrent().getOriginalText())) return;

        Integer myOrder = ((BiOperatorToken)tokenizer.getCurrent()).getOrder();
        tokenizer.getCurrent().setText("['"+tokenizer.getCurrent().getOriginalText()+"'](");
        for(Token token = tokenizer.getNextAtSameBracketLevel(); token != null; token = tokenizer.getNextAtSameBracketLevel()) {
            try {
                if(token instanceof IClose || (token instanceof BiOperatorToken && ((BiOperatorToken)token).getOrder() <= myOrder)) {
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
