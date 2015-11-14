Symbols
=======

A symbol means a name given by a programmer to anything in the program
(dependently on the language it can be variable, function, class, structure,
union, trait, module, interface etc.). In Plezuro everything is a variable
so each symbol represents a variable.

The rules of the variable naming:

#. The first character must be an ASCII letter or the underscore ('_').
#. The next characters must be an ASCII letter, the underscore or a digit.


===========
Declaration
===========

Eeach symbol must be declared at the first use in the source file. The declaration contains the
dollar sign ``$`` and the name of the symbol.


============
Class fields
============

Class field (or module field) contains the name of the module, the double colon
``::`` and the name of the field (the same rules like for the symbol).


=============
Object fields
=============

Object field (or module field) contains the at character ``@``
and the name of the field (the same rules like for the symbol).
