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

import mondo.token.Token;

public class Parser {
    private List<String> lines;
    private String filename;
    private String outFilename;
    private Tokenizer tokenizer;

    public Tokenizer getTokenizer() {
        return tokenizer;
    }

    protected String getOutputFileName() {
        return outFilename == null ? filename+".js" : outFilename;
    }

    private void readFromFile() throws IOException {
        Path path = Paths.get(filename);
        Charset charset = Charset.forName("UTF-8");
        try {
            lines = Files.readAllLines(path, charset);
        } catch(IOException e) {
            throw new IOException("File "+filename+" does not exist.");
        }
    }

    private void writeToFile() throws IOException {
        try(Writer writer = new BufferedWriter(new OutputStreamWriter(
                      new FileOutputStream(getOutputFileName()), "utf-8"))) {
            for(Token token: tokenizer.getTokens()) writer.write(token.getText());
        }
    }

    private void convert() {
        for(Token token = tokenizer.hardReset(); token != null; token = tokenizer.hardNext()) {
            token.convert(tokenizer);
        }
    }

    private void eventuallyChangeTokenType(Tokenizer tokenizer) {
        tokenizer.hardReset();
        List<Token> tokens = tokenizer.getTokens();
        for(int i = 0; i < tokens.size(); i++) {
            tokens.set(i, tokens.get(i).eventuallyChangeType(tokenizer));
            tokenizer.hardNext();
        }
    }

    public Parser(String filename) throws IOException, InvalidTokenException {
        this(filename, null);
    }

    public Parser(String filename, String outFilename) throws IOException, InvalidTokenException {
        this.filename = filename;
        this.outFilename = outFilename;
        readFromFile();
        tokenizer = new Tokenizer(new File(filename), lines);
        eventuallyChangeTokenType(tokenizer);
        convert();
        writeToFile();
    }
}
