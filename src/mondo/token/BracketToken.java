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
    protected List<String> getPossibleTokens() {
        return new ArrayList<String>() {{
            add("[");
            add("]");
            add("(");
            add(")");
            add("{");
            add("}");
        }};
    }

    private Map<String, Function<String,String>> functionMap = new HashMap<String, Function<String,String>>() {{
        put("{", (String x) -> "function() { return (");
        put("}", (String x) -> "); }");
    }};

    public void convert() {
        try {
            text = functionMap.get(originalText).apply(originalText);
        } catch(NullPointerException e) {
        }
    }
}
