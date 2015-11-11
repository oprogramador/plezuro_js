Package engine
==============

This is the kernel of the compiler. It is not dependent on the output language.

Classes:

* Engine - It handles the arguments of the compiler. For each pair input file -
  output files it invokes the Parser.
* Parser - It reads the input, handles the situation of an empty file, invokes
  the Tokenizer, it invokes the basic operations for each token and finally it
  writes to the output.
* Tokenizer - It divides the code into tokens by conditions given in token
  classes.
* Validator - It detects all the possible syntax errors.
