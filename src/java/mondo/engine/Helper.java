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

import mondo.token.Token;
import mondo.token.NumberToken;
import mondo.token.SymbolToken;
import mondo.token.WhiteSpaceToken;
import mondo.token.IOpen;
import mondo.token.IClose;

public class Helper {
    private void addNullBetweenSemicolonAndBracketClose(Tokenizer tokenizer) {
        for(Token token = tokenizer.hardReset(); token != null; token = tokenizer.hardNext()) {
            if(token.getOriginalText() == null || !token.getOriginalText().equals(";")) continue;
            Token next = tokenizer.getNextNotBlank();
            if(next == null || next instanceof IClose) {
                tokenizer.resetToThis();
                tokenizer.insertAfter(new SymbolToken().setOriginalText("null"));
            }
        }
    }

    private void removeComaBeforeBracketClose(Tokenizer tokenizer) {
        for(Token token = tokenizer.hardReset(); token != null; token = tokenizer.hardNext()) {
            if(token.getOriginalText() == null || !token.getOriginalText().equals(",")) continue;
            Token next = tokenizer.getNextNotBlank();
            if(next == null || next instanceof IClose) {
                tokenizer.resetToThis();
                tokenizer.replaceToken(new WhiteSpaceToken().setOriginalText(""));
            }
        }
    }

    private void addZeroBeforeMinus(Tokenizer tokenizer) {
        for(Token token = tokenizer.hardReset(); token != null; token = tokenizer.hardNext()) {
            if(!token.getOriginalText().equals("-")) continue;
            Token previous = tokenizer.getPreviousNotBlank();
            if(previous == null || previous instanceof IOpen || previous.isDelimiter()) tokenizer.insertAfter(new NumberToken().setText("0"));
        }
    }

    public Helper(Tokenizer tokenizer) {
        addZeroBeforeMinus(tokenizer);
        addNullBetweenSemicolonAndBracketClose(tokenizer);
        removeComaBeforeBracketClose(tokenizer);
    }
}
