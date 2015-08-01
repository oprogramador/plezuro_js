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
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public abstract class Token implements Cloneable {
    protected String getRegex() {
        return "";
    }

    protected ITokenMatcher findParticular(List<String> lines, int lineNr, int index) {
        return null;
    }

    protected String originalText;
    protected String text;
    protected int lineNr;

    public String getOriginalText() {
        return originalText;
    }

    public String getText() {
        return text;
    }

    public Token setOriginalText(String value) {
        originalText = value;
        return this;
    }

    public Token setText(String value) {
        text = value;
        return this;
    }

    public Pattern getPattern() {
        return Pattern.compile(getRegex());
    }

    protected ITokenMatcher createITokenMatcher(Token token, int lineNr, int end) {
        return new ITokenMatcher() {
            public Token getToken() {
                return token;
            }

            public int getEndLineNr() {
                return lineNr;
            }

            public int end() {
                return end;
            }
        };
    }

    public ITokenMatcher find(List<String> lines, int lineNr, int index) {
        ITokenMatcher tokenResult = findParticular(lines, lineNr, index);
        if(tokenResult != null) return tokenResult;

        Matcher matcher = getPattern().matcher(lines.get(lineNr));
        boolean result = matcher.find(index);
        if(result && matcher.start() == index) {
            String tokenText = lines.get(lineNr).substring(matcher.start(), matcher.end());
            final Token token = ((Token)clone())
                    .setOriginalText(tokenText)
                    .setText(tokenText)
                    .setLineNr(lineNr)
                    ;
            return createITokenMatcher(token, lineNr, matcher.end());
        }
        return null;
    }

    public int getLineNr() {
        return lineNr;
    }

    public Token setLineNr(int value) {
        lineNr = value;
        return this;
    }

    public String toString() {
        return "Token {"+
            "lineNr: "+lineNr+", "+
            "type: \""+getClass().getSimpleName()+"\", "+
            "originalText: \""+originalText+"\", "+
            "text: \""+text+"\""+
        "}";
    }

    public Object clone() {
        try {
            return super.clone();
        } catch(CloneNotSupportedException e) {
            return null;
        }
    }
}
