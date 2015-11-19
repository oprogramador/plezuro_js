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

public class NumberToken extends Token {
    public boolean isBlank() {
        return false;
    }

    public boolean isEntity() {
        return true;
    }

    public String getRegex() {
        return "-?((0x[0-9a-f]+)|(0b[01]+)|(0[0-7]+)|([0-9]+(\\.[0-9]+)?(e[\\+\\-]?[0-9]+)?))";
    }

    private String binToHex(String text) {
        String result = "";
        for(int i = text.length() - 1; i >= 0; i -= 4) {
            int digit = text.charAt(i) - '0';
            if(i - 1 >= 0) digit += 2 * (text.charAt(i - 1) - '0');
            if(i - 2 >= 0) digit += 4 * (text.charAt(i - 2) - '0');
            if(i - 3 >= 0) digit += 8 * (text.charAt(i - 3) - '0');
            result = (char)(digit < 10 ? '0' + digit : 'a' + digit - 10) + result;
        }
        return result;
    }

    protected void eventuallyConvertBinary() {
        if(getText().length() < 3 || getText().charAt(1) != 'b') return;
        
        setText("0x"+binToHex(getText().substring(2)));
    }

    protected void doConvert(ITokenizer tokenizer) {
        eventuallyConvertBinary();
        tokenizer.insertBefore(BracketToken.getOperatorBracketOpen().setText("(new Number("));
        tokenizer.resetToThis();
        tokenizer.insertAfter(BracketToken.getOperatorBracketClose().setText("))"));
    }
}
