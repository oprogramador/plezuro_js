Modules
=======

Modules are in the same time classes and namespaces. You can use a module to create an object,
you can use it statically (like static fields and methods in Java) and you can assign other
modules as static fields creating namespaces. Of course you can create multiple classes in the
same source file, however it is recommended to write exactly one module in one file.

To create a module, you write 'Module.create' and you pass one argument to this method
which is an associative array containing module name (field 'name'), module namespace (field
'namespace', the methods (field 'methods'), the parent modules (field 'parents') - the modules
from which our module inherits the methods. There are also some other fields that you can
pass.

You can create an object of a module using the 'new' method.

include_vim(../../../plezuro_html/doc/modules.plez)
