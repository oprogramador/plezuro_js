Random numbers
==============

In computing it is useful for many purposes to generate random numbers.
For example, when you write a computer player to a game or in a web
application to generate registration links, local or web addreses
and so on.

In Plezuro it is quite easy. You do not have to invoke any function
or method (however later it is compiled to a method invokation).
Just write the 'rand' keyword and you will obtain a number from the uniform
distribution between 0 and 1.

.. literalinclude:: ../../../../../../src/plezuro/doc/rand.plez
