Inheritance
===========

To write an object-oriented code except of classes (in Plezuro modules)
it is needed to use inheritance and polymorphism. In Plezuro there is
multiple inheritance like in Python, it is also similar to multiple
inheritance in c++ with virtual method binding. Why multiple inheritance?
It is just more similar to the real life. For example, the dog is in the same
time a pet and a carnivore.

How does it work? Is is pretty simple, when you invoke a method on an object, if
there exists such a method directly in the module of this object, this method is
called. Otherwise it is a method from one of the parents of the module (the
order of finding a method is the same as the order of declaring the parents in
the module. The algorithm of finding a method is recursive. When no method is
found, an exception is thrown. It is as you can see it. However in reality in
the moment of the module creation all the methods are binded (direct ones and
inherited ones), it is for the performance.

What about the polymorphism? Plezuro like other dynamic languages has a duck
typing. So you can invoke a method with a specific name from an object, not
knowing the module of the object. On the other hand, you can use the multiple
inheritance. You can create a module with a specific method and you can use objects of this module in
other methods or functions.

=======================
Calling a parent method
=======================

One of useful features is the possibility of the calling a parent method. The
syntax is similar to the Python because in the case of multiple inheritance, you
have to specify from which parent you want to call a method. It is also possible
to call a method from a super-parent and even from any other class because of
duck typing. You write a parent module name, the double colon ``::``, the method
name and the 'this' keyword as the zero argument.


include_vim(../../../plezuro_html/doc/inheritance.plez)
