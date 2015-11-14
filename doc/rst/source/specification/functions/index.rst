Functions
=========

A function is a set of operations that can be executed in any moment at the
runtime. A function takes any number of arguments which are accessible with the
following keywords:

* this - zero argument
* first - first argument
* second - second argument
* third - third argument
* args - the list of the arguments

In case of an inner function the arguments of the outer one are hidden by those
of the inner one.

Each function returns a value. The type is not specified. They are two ways to
return a value:

* explicitly - with the ``return`` keyword
* implicitly - the last expression is returned


=======
Methods
=======

A method works in the same way as a function. The only difference is the object
(variable before the dot sign) is passed as the zero argument and the next
arguments are numbered from 1. In method calling when there is no arguments
(except for this object) the bracket after the method name is not required.


=======
Scripts
=======

Even the scripts behave in the same manner as a function. They take arguments
(the access in the same way) and they return a value.
