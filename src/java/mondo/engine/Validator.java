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
import java.io.File;
import java.io.IOException;
import java.io.Writer;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.charset.Charset;

import mondo.invalidToken.InvalidTokenException;
import mondo.invalidToken.OperatorAfterOperatorException;
import mondo.token.Token;
import mondo.token.OperatorToken;

public class Validator {
    private Tokenizer tokenizer;

    private void checkForOperatorAfterOperator() throws InvalidTokenException {
        for(Token token = tokenizer.hardReset(); token != null; ) {
            Token next = tokenizer.getNext();
            if(token instanceof OperatorToken && next instanceof OperatorToken) {
                throw InvalidTokenException.create(OperatorAfterOperatorException.class, next.getFullFilename(), next.getLineNr(), next.getBegX());
            }
            token = next;
        }
    }

    public Validator(Tokenizer tokenizer) throws InvalidTokenException {
        this.tokenizer = tokenizer;

        checkForOperatorAfterOperator();
    }
}
