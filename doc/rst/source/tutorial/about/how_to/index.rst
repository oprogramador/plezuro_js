How to
======

Currently the main version of the Plezuro is compiled to Javascript. In the
future it is planned to compile it to another languages (probably c, c♯, Java,
Python, Ruby and PHP, eventually Lisp and Fortran). 
It exists also an interpreted version implemented in c♯
which is not supported anymore. That version is not compatible in 100% with the
mainstream Plezuro. It is something like a prototype of the final product.

==========
Plezuro.js
==========

Using the plezuro.jar (download from
https://plezuro.herokuapp.com/downloads/plezuro.jar) executable you can compile a script from Plezuro to
Javascript. It works for entire files, not a code embedded in HTML. You can use
it within a browser, in the server side (using Node.js), for the mobile
development (using Cordova) or any other technology that uses Javascript.
Another important thing is to attach the plezuro.js (download from
https://plezuro.herokuapp.com/downloads/plezuro.js) library (in HTML for browser and
Cordova or using 'require' for Node.js). There
is an automated support for all the Javascript libraries because you can use all
the global variables from the Javascript. A variable cannot contain the dollar
sign in its name in contrary to the Javascript so using jQuery instead of a
dollar sign you should use the variable jQuery or eventually ``eval('$')``.

Basic usage of the compiler:
``plezuro.jar input.plez output.plez.js``
