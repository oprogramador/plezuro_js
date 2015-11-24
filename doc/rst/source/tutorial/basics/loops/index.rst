Loops
=====

Loops look like conditional expressions. You use a method of the function type.

One of the loops provided in Plezuro is 'while'. At the beginning you write a function
which returned value determines if the function being the first argument of the 'while'
method is executed. After the first iteration the conditional function is executed again.
Execution of the first argument function depends on the value from conditional function
and so on.

.. literalinclude:: ../../../../../../src/plezuro/doc/loop.plez

Another maybe simpler loop is 'do'. You write the conditional function. The execution
of the loop depends on the value returned by this function. So it iterates as long as the
function returns true.

.. literalinclude:: ../../../../../../src/plezuro/doc/do.plez

Next one is 'each'. It is used to iterate a list. In the inner function the zero argument
is the index of the current element and the first one is the element.

.. literalinclude:: ../../../../../../src/plezuro/doc/each.plez
