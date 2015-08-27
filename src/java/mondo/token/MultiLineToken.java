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

public abstract class MultiLineToken extends Token {
    protected String getEndRegex() {
        return "";
    }

    private int endLineNr;

    public int getEndLineNr() {
        return endLineNr;
    }

    public MultiLineToken setEndLineNr(int value) {
        endLineNr = value;
        return this;
    }

    public Pattern getEndPattern() {
        return Pattern.compile(getEndRegex());
    }

    protected Token findFromRegex(List<String> lines, int lineNr, int index) {
        final int begLineNr = lineNr;
        Matcher matcher = getPattern().matcher(lines.get(lineNr));
        boolean result = matcher.find(index);
        if(result && matcher.start() == index) {
            String tokenText = lines.get(lineNr).substring(matcher.start(), matcher.end());
            for(lineNr++; lineNr < lines.size(); lineNr++) {
                matcher = getEndPattern().matcher(lines.get(lineNr));
                result = matcher.find(index);
                if(result) {
                    tokenText += "\n"+lines.get(lineNr).substring(matcher.start(), matcher.end());
                    break;
                } else {
                    tokenText += "\n"+lines.get(lineNr);
                }
            }
            Token token = ((MultiLineToken)((Token)clone())
                    .setBegX(matcher.start())
                    .setEndX(matcher.end() - 1)
                    .setOriginalText(tokenText)
                    .setText(tokenText)
                    .setLineNr(begLineNr))
                    .setEndLineNr(lineNr)
                    ;
            return token;
        }
        return null;
    }

    public String toString() {
        return "Token {"+
            "lineNr: "+lineNr+", "+
            "endLineNr: "+endLineNr+", "+
            "begX: "+begX+", "+
            "endX: "+endX+", "+
            "type: \""+getClass().getSimpleName()+"\", "+
            "originalText: \""+originalText+"\", "+
            "text: \""+text+"\""+
        "}";
    }
}
