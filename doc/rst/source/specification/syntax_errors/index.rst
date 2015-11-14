Syntax errors
=============

Because of the very simple syntax there are very few syntax errors. Even
conditionals and loops are created with the methods invoking so syntax errors are
possible to occur where the tokens does not match in a proper way.


============================
How to handle syntax errors?
============================

In Plezuro there are no fatal errors. Each error is an exception. When a script
containing a syntax error is imported, it should throw an exception. A compiler
should create an output script (or a function in a script where the scripts are
joint altogether in the output) which throws an exception.


===========================
Total list of syntax errors
===========================

============================================ ====================================== =====================
Name                                         Occurrence                             Examples
============================================ ====================================== =====================
BracketStackException                        a bracket is not closed,               (2 + 3

                                             closing of another type of bracket,    (3 + 1 + [)]

                                             abundant bracket closing               4 + 5)

NonExistentTokenException                    a token of not existing type           $αβγ = 21

OperatorAfterBracketCloseException           neither operator nor another bracket   $x=[2] "oo"
                                             closing after bracket closing

OperatorAfterBracketOpenException            not proper operator after bracket      \* 43
                                             opening or begin of a script

OperatorAfterOperatorException               an operator after another one          2 + * 5 
                                             (although there are exceptions)

OperatorBeforeBracketCloseException          an operator before bracket closing     (2 + 3 -)

ValueAfterValueException                     a constant token after another one     3 + * 
============================================ ====================================== =====================
