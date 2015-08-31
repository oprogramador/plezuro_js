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
import java.io.File;

public abstract class Token implements Cloneable {
    public abstract boolean isBlank();

    public boolean isEntity() {
        if(isBlank()) return false;
        throw new UnsupportedOperationException();
    }

    protected String getRegex() {
        throw new UnsupportedOperationException();
    }

    protected List<String> getPossibleTokens() {
        throw new UnsupportedOperationException();
    }

    public final void convert(ITokenizer tokenizer) {
        if(tokenizer.isFinished()) return;
        if(getOriginalText() != null && getText().equals(getOriginalText())) doConvert(tokenizer);
        tokenizer.resetToThis();
        if(tokenizer.getNext() == null) {
            tokenizer.resetToThis();
            tokenizer.insertAfter(OperatorToken.getOperatorDot());
            tokenizer.insertAfter(new SymbolToken().setText("exports"));
            tokenizer.insertAfter(BracketToken.getOperatorBracketOpen());
            tokenizer.insertAfter(new SymbolToken().setText("typeof module !== 'undefined' ? module : null"));
            tokenizer.insertAfter(BracketToken.getOperatorBracketClose());
            tokenizer.finish();
        }
    }

    protected void doConvert(ITokenizer tokenizer) {
    }

    public Token eventuallyChangeType(ITokenizer tokenizer) {
        return this;
    }

    protected String originalText;
    protected String text;
    protected File file;
    protected int lineNr, begX, endX;

    public String getFileName() {
        return file.getName();
    }

    public String getDirName() {
        return file.getParentFile().getAbsolutePath();
    }

    public Token setFile(File value) {
        file = value;
        return this;
    }

    public int getBegX() {
        return begX;
    }

    public Token setBegX(int value) {
       begX = value;
       return this;
    }

    public int getEndX() {
        return endX;
    }

    public Token setEndX(int value) {
       endX = value;
       return this;
    }

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

    public Token find(List<String> lines, int lineNr, int index) {
        try {
            return findFromRegex(lines, lineNr, index);
        } catch(UnsupportedOperationException e) {
            return findFromList(lines, lineNr, index);
        }
    }

    protected Token findFromList(List<String> lines, int lineNr, int index) {
        Token result = null;
        for(String tokenText: getPossibleTokens()) {
            if((result == null || tokenText.length() > result.getOriginalText().length()) && lines.get(lineNr).indexOf(tokenText, index) == index) {
                result = getObjectOfSuitableSubclass(tokenText)
                        .setBegX(index)
                        .setEndX(index + tokenText.length() - 1)
                        .setOriginalText(tokenText)
                        .setText(tokenText)
                        .setLineNr(lineNr)
                        ;
            }
        }
        return result;
    }

    protected Token findFromRegex(List<String> lines, int lineNr, int index) {
        Matcher matcher = getPattern().matcher(lines.get(lineNr));
        boolean result = matcher.find(index);
        if(result && matcher.start() == index) {
            String tokenText = lines.get(lineNr).substring(matcher.start(), matcher.end());
            Token token = getObjectOfSuitableSubclass(tokenText)
                    .setBegX(matcher.start())
                    .setEndX(matcher.end() - 1)
                    .setOriginalText(tokenText)
                    .setText(tokenText)
                    .setLineNr(lineNr)
                    ;
            return token;
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

    public int getEndLineNr() {
        return getLineNr();
    }

    public String toString() {
        return "Token {"+
            "lineNr: "+lineNr+", "+
            "begX: "+begX+", "+
            "endX: "+endX+", "+
            "type: \""+getClass().getSimpleName()+"\", "+
            "originalText: \""+originalText+"\", "+
            "text: \""+text+"\""+
        "}";
    }

    public Token getObjectOfSuitableSubclass(String tokenText) {
        return (Token)clone();
    }

    public Token copyAll(Token token) {
        setBegX(token.begX);
        setEndX(token.endX);
        setLineNr(token.lineNr);
        setOriginalText(token.originalText);
        setText(token.text);
        setFile(token.file);
        return this;
    }

    public Object clone() {
        try {
            return super.clone();
        } catch(CloneNotSupportedException e) {
            return null;
        }
    }
}
