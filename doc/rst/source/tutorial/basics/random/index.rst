Random
======

In computing it is useful for many purposes to generate random numbers
and random strings.
For example, when you write a computer player to a game or in a web
application to generate registration links, local or web addresses
and so on.

In Plezuro it is quite easy. For a random number you do not have to invoke any function
or method (however later it is compiled to a method invocation).
Just write the 'rand' keyword and you will obtain a number from the uniform
distribution between 0 and 1.

To generate a random string, use ``String.rand``. The first parameter specifies
the length of the result, its default value is 32. The result is composed from
letters, digits and underscores.

include_vim(../../../plezuro_html/doc/rand.plez)
