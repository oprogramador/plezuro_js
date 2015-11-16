Magic constants
===============

Each compiler (and even interpreter) of Plezuro must provide the following magic constants:

* __pos__ - the horizontal position in a line (counting from 0, it is position
  where the token begins)

* __line__ - the line number in a source file (counting from 0)

* __file__ - the name of the source file

* __dir__ - the real directory of the source file

It is recommended to replace these keywords with constant strings in the output
code. There is no recommendation in the intermediate code. __dir__ does not have
to return the canonical form of the path (all the subdirectories from the
highest level to the lowest (ex.
'/home/user/programming/plezuro/my_plezuro_project')) but must return a valid real Unix path (ex.
'/home/user/programming/something/project/../../plezuro/my_plezuro_project').

Even for not Unix systems the path must be in the Unix notation (with slashes).

