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
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.charset.Charset;

public class Parser {
    private List<String> lines;
    private String filename;

    private void readFromFile() throws IOException {
        Path path = Paths.get(filename);
        Charset charset = Charset.forName("UTF-8");
        try {
            lines = Files.readAllLines(path, charset);
        } catch(IOException e) {
            throw new IOException("File "+filename+" does nor exist.");
        }
    }

    public Parser(String filename) throws IOException {
        this.filename = filename;
        readFromFile();
        new Tokenizer(lines);
    }
}
