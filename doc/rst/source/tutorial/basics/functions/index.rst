Functions
=========

To write a function, you use just the curlies (``{``, ``}``). Everything in a curly bracket is a function.
It includes also conditionals and loops. The zero argument is accessible via the keyword 'this' and
the next ones 'first', 'second' and 'third'. You have also access to the array of the arguments
using the keyword 'args'.

The function returns the value of the last statement (like in Ruby). There is no ``return`` keyword.

include_vim(../../../plezuro_html/doc/function.plez)

To count the execution time of a function, use method 'time'. The arguments passed to this method
are next passed to the function (first argument becomes zero argument, second argument becomes first
and so on).

It returns an object with fields:

* ``result`` - value returned by the function
* ``time`` - execution time in seconds

include_vim(../../../plezuro_html/doc/function_time.plez)
