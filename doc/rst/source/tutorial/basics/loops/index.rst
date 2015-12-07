Loops
=====

Loops look like conditional expressions. You use a method of the function type.

=====
while
=====

At the beginning you write a function
which returned value determines if the function being the first argument of the 'while'
method is executed. After the first iteration the conditional function is executed again.
Execution of the first argument function depends on the value from conditional function
and so on.

include_vim(../../../plezuro_html/doc/loop.plez)

==
do
==

You write the conditional function. The execution
of the loop depends on the value returned by this function. So it iterates as long as the
function returns true.

include_vim(../../../plezuro_html/doc/do.plez)

====
each
====

It is used to iterate a list. In the inner function the zero argument
is the index of the current element and the first one is the element.

include_vim(../../../plezuro_html/doc/each.plez)

=======
foreach
=======

The zero argument is the function and the next ones
are lists (number of arguments is unlimited). In each iteration the arguments of the inner
function are constructed from the index and the elements of these lists at the position
of the index. The iteration lasts until we
go to the last element of the longest list. If one from the lists has finished, we obtain
the ``null`` value at the appropriate place.

include_vim(../../../plezuro_html/doc/forEach.plez)

=====
times
=====

Use it when you want to repeat a procedure for specific number of times. It is simpler
than other loops. The zero argument is the number (of times) and the first one is the
function which obtains the iteration number starting from 0 as its zero argument.

include_vim(../../../plezuro_html/doc/times.plez)
