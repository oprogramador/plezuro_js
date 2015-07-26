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

import java.util.regex.Pattern;

public abstract class Token implements Cloneable {
    public abstract String getRegex();

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

    public int getLineNr() {
        return lineNr;
    }

    public Token setLineNr(int value) {
        lineNr = value;
        return this;
    }

    public String toString() {
        return "Token {lineNr: \""+lineNr+"\", type: \""+getClass().getSimpleName()+"\", originalText: \""+originalText+"\", text: \""+text+"\"}";
    }

    public Object clone() {
        try {
            return super.clone();
        } catch(CloneNotSupportedException e) {
            return null;
        }
    }
}
