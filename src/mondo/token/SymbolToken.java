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

    public String getRegex() {
        return "[A-Za-z_]+[A-Za-z_0-9]*";
    }

    private Map<String, Function<String,String>> functionMap = new HashMap<String, Function<String,String>>() {{
        put("args", (String x) -> "arguments");
    }};

    private boolean insertBracketAfterEventually(ITokenizer tokenizer) {
        //if(getText().equals("do")) {
            //System.out.println("yes");
            //System.out.println("current="+tokenizer.getCurrent());
            //System.out.println("previous="+tokenizer.getPreviousNotBlank());
            //System.out.println("previous="+tokenizer.getPreviousNotBlank());
        //}
        if(tokenizer.getPreviousNotBlank().getText() != OperatorToken.getOperatorDot().getText()) return false;

        tokenizer.resetToThis();
        if(tokenizer.getNextNotBlank().getText() == BracketToken.getOperatorBracketOpen().getText()) return false;

        tokenizer.resetToThis();
        tokenizer.insertAfter(BracketToken.getOperatorBracketOpen());
        tokenizer.insertAfter(BracketToken.getOperatorBracketClose());
        return true;
    }

    public void convert(ITokenizer tokenizer) {
        try {
            insertBracketAfterEventually(tokenizer);
            text = functionMap.get(originalText).apply(originalText);
        } catch(NullPointerException e) {
            //e.printStackTrace();
        }
    }
}
