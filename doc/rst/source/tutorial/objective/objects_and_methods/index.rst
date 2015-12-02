Objects and methods
===================

The main purpose of creating a module is to use it as a template
to creating objects and to call methods from the objects. When you
call a method, the object is accessible via the keyword 'this' and like
in the function invocation you can use the keywords 'first', 'second', 'third'
and 'args'.

=============
Object fields
=============

To access an object field, you use the at sign ``@`` and the field name. The fields can be created
in the constructor when the object is created or later in any method.

=======================
Method from method call
=======================

To call a method from another method, you write the 'this' keyword, the dot ``.`` and the
method name. Like in the methods calling from outer objects you can omit the bracket when it is
no arguments.

Be aware that when you have an inner function (ex. a loop), the keyword 'this' has a different meaning.
It is the zero argument of the inner function. In the same way the object fields
work.

include_vim(../../../plezuro_html/doc/objects_and_methods.plez)
