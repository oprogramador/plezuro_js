Modules
=======

A module is in the same time a class, a namespace and a static module. The
module determines the type of a variable. Each variable is associated with a
module (built-in or created by a Plezuro developer). Therefore the module
determines the action in a method or operator calling.

===========
Constructor
===========

Always after an object creation the constructor is called. Its name is 'init'.


===========
Inheritance
===========

A module can inherit from multiple other modules. The relation of the
inheritance is transitive not equal. It means a module cannot inherit from
itself and an ancestor of a module cannot be in the same time its offspring.
The inheritance includes methods and operators (neither static fields nor static
methods). It is possible to override what is inherited. When a module does not
inherit explicitly, it inherits from the Module.BasicModule which is ancestor of
all the modules.
