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

public class BracketOpenToken extends BracketToken implements IOpen {
    private boolean insertFunctionCallEventually(ITokenizer tokenizer) {
        tokenizer.resetToThis();
        Token previous = tokenizer.getPreviousNotBlank();
        if(previous == null || previous instanceof IOpen || previous instanceof OperatorToken) return false;

        Token preprevious = tokenizer.getPreviousNotBlank();
        if(preprevious != null && preprevious.getText() == ".") return false;

        tokenizer.resetToThis();
        tokenizer.insertBefore(new SymbolToken().setText(".call"));
        return true;
    }

    protected void doConvert(ITokenizer tokenizer) {
        super.doConvert(tokenizer);
        tokenizer.resetToThis();
        insertFunctionCallEventually(tokenizer);
    }
}
