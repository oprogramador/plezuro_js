Objects and methods
===================

The main purpose of creating a module is you to use it as a template
to creating objects and to call methods from the objects. When you
call a method the object is accessible via the keyword 'this' and like
in function invocation you can use the keywords 'first', 'second', 'third'
and 'args'.

=============
Object fields
=============

To access an object field, you use the at sign ('@') and the field name. The fields can be created
in the constructor when the object is created or later in any method.

=======================
Method from method call
=======================

To call a method from another method, you write the 'this' keyword, the dot ('.') and and the
method name. Like in calling methods from outer objects you can omit the bracket when it is
no arguments.

.. literalinclude:: ../../../../../../src/plezuro/doc/objects_and_methods.plez
