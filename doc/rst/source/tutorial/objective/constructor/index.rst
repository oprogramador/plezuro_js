Constructor
===========

Technically it would be possible to create an object without constructor. You could
initialize all the fields with one or multiple methods (using the builder pattern).
Eventually after that you could freeze the entire object or some of its fields.

However for readability of the source code, it is a good idea to use constructors.
What is exactly the constructor? It is a method that is invoked immediately after
the memory allocation for the object. It is very explicit in Objective C when you
at first allocate the memory and later you initialize it (for most cases it is in the
same line).

In Plezuro the constructor is a method with the name 'init'. Such a method is called
automatically after the object creation.

===================
Default constructor
===================

However when you do not write any constructor, there exists a constructor that
is invoked. It is called the default constructor. What does it exactly do? It 
invokes the constructors of all the parent modules. When a module does not have
any explicit parents it inherits from the BasicModule so in such a situation
the constructor of the BasicModule is called - it creates the fields of the object
from the associative array which is passed as the first argument.

include_vim(../../../plezuro_html/doc/constructor.plez)
