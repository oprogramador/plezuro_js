Magic constants
================

Similar to PHP and Ruby, Plezuro has the magic constants. What is it and
why to use it? It is something a little bit like a variable and a little bit
like a constant. Its value depends on the place where it is used.

So we have the following magic constants:

* __pos__ - the horizontal position in a line (counting from 0, it is the position
  where the keyword begins)

* __line__ - the line number in a source file (counting from 0)

* __file__ - the name of the source file

* __dir__ - the real directory of the source file

include_vim(../../../plezuro_html/doc/magic_constants.plez)
