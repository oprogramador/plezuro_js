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

package mondo.engine;

import java.util.List;
import java.util.ArrayList;
import java.util.regex.Matcher;

import mondo.token.Token;
import mondo.token.NumberToken;

public class Tokenizer {
    private List<Token> tokenTypes = new ArrayList<Token>() {{
        add(new NumberToken());
    }};

    private List<Token> tokens = new ArrayList<Token>();

    public Tokenizer(List<String> lines) {
        for(int i=0; i<lines.size(); i++) addTokensFromLine(lines.get(i));
    }

    private void addTokensFromLine(String line) {
        System.out.println(line);
    }
}
