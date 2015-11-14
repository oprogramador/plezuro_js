Functions
=========

To write a function, you use just the curlies (``{``, ``}``). Everything in a curly bracket is a function.
It includes also conditionals and loops. The zero argument is accessible via the keyword 'this' and
the next ones 'first', 'second' and 'third'. You have also access to the array of the arguments
using the keyword 'args'.

You can return a value with 'return' keyword. When in function execution no previous value has been returned,
it returns the value of the last statement (like in Ruby).

.. literalinclude:: ../../../../../../src/plezuro/doc/function.plez
