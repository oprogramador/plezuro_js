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

package mondo.invalidToken;

import java.util.List;
import java.util.ArrayList;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

import mondo.token.Token;
import mondo.token.SymbolToken;

public class InvalidTokenException extends Exception {
    public static InvalidTokenException create(Class<?> aClass, String filename, int lineNr, int position, String extraMessage) {
        try {
            Constructor<?> constructor = aClass.getConstructor(); 
            InvalidTokenException result = ((InvalidTokenException)constructor.newInstance())
                .setLineNr(lineNr)
                .setPosition(position)
                .setFilename(filename)
                .setExtraMessage(extraMessage)
                ;
            return result;
        } catch(NoSuchMethodException | InstantiationException | IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
            return new InvalidTokenException("something occurred in "+filename+" at line "+lineNr+", position "+position);
        }
    }

    public static InvalidTokenException create(Class<?> aClass, String filename, int lineNr, int position) {
        return create(aClass, filename, lineNr, position, "");
    }

    private int lineNr;
    private int position;
    private String filename;
    private String extraMessage;

    public List<Token> getTokens() {
        String className = this.getClass().getName().replace(".", "__");
        return new ArrayList<Token>() {{
            add(new SymbolToken().setText("throw InvalidTokenException.create('"+className+"', '"+filename+"', "+lineNr+", "+position+", '"+getMessage()+"');"));
        }};
    }

    public String getExtraMessage() {
        return extraMessage;
    }

    public InvalidTokenException setExtraMessage(String value) {
        extraMessage = value;
        return this;
    }

    public String getFilename() {
        return filename;
    }

    public InvalidTokenException setFilename(String value) {
        filename = value;
        return this;
    }

    public int getLineNr() {
        return lineNr;
    }

    public InvalidTokenException setLineNr(int value) {
        lineNr = value;
        return this;
    }

    public int getPosition() {
        return position;
    }

    public InvalidTokenException setPosition(int value) {
        position = value;
        return this;
    }

    public String getMessage() {
        return this.getClass()+" in "+filename+" at line "+lineNr+", position "+position+(extraMessage == "" ? "" : ", message: "+extraMessage);
    }

    public InvalidTokenException(String msg) {
        super(msg);
    }

    protected InvalidTokenException() {
        super("");
    }
}
