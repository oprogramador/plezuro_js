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
import java.util.Stack;
import java.util.EmptyStackException;
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
import mondo.invalidToken.ValueAfterValueException;
import mondo.invalidToken.BracketStackException;
import mondo.token.Token;
import mondo.token.IOpen;
import mondo.token.IClose;
import mondo.token.OperatorToken;
import mondo.token.BiOperatorToken;

public class Validator {
    private Tokenizer tokenizer;

    private void checkForOperatorAfterOperator() throws InvalidTokenException {
        for(Token token = tokenizer.hardReset(); token != null; ) {
            Token next = tokenizer.getNextNotBlank();
            if(next == null) return;
            if(token instanceof BiOperatorToken && next instanceof BiOperatorToken) {
                if(!((BiOperatorToken)token).isArithmetic() || !((BiOperatorToken)token).isAllowedAtBegin()) {
                    throw InvalidTokenException.create(OperatorAfterOperatorException.class, next.getFullFilename(), next.getLineNr(), next.getBegX());
                }
            }
            token = next;
        }
    }

    private void checkValueAfterValue() throws InvalidTokenException {
        for(Token token = tokenizer.hardReset(); token != null; ) {
            Token next = tokenizer.getNextNotBlank();
            if(next == null) return;
            if(token.isEntity() && next.isEntity()) {
                throw InvalidTokenException.create(ValueAfterValueException.class, next.getFullFilename(), next.getLineNr(), next.getBegX());
            }
            token = next;
        }
    }

    private void checkBracketStack() throws InvalidTokenException {
        Stack<Token> stack = new Stack<Token>();
        for(Token token = tokenizer.hardReset(); token != null; token = tokenizer.getNextNotBlank()) {
            if(token instanceof IOpen) {
                stack.push(token);
            } else if(token instanceof IClose) {
                try {
                    Token pop = stack.pop();
                    if(((IClose)token).getOpenClass() != pop.getClass()) {
                        throw InvalidTokenException.create(
                                BracketStackException.class,
                                token.getFullFilename(),
                                token.getLineNr(),
                                token.getBegX(),
                                "unexpected "+token.getOriginalText()
                                );
                    } 
                } catch(EmptyStackException e) {
                    throw InvalidTokenException.create(
                            BracketStackException.class,
                            token.getFullFilename(),
                            token.getLineNr(),
                            token.getBegX(),
                            "empty bracket stack - unexpected "+token.getOriginalText()
                            );
                }
            }
        }
        if(!stack.empty()) {
            Token token = tokenizer.getPrevious();
            throw InvalidTokenException.create(
                    BracketStackException.class,
                    token.getFullFilename(),
                    token.getLineNr(),
                    token.getBegX(),
                    "not empty bracket stack at the end"
                    );
        }
    }

    public Validator(Tokenizer tokenizer) throws InvalidTokenException {
        this.tokenizer = tokenizer;

        checkForOperatorAfterOperator();
        checkValueAfterValue();
        checkBracketStack();
    }
}
