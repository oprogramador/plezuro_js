Dynamic module change
=====================

======================
Method addition/change
======================

Except of creating a method during a module creation you can add dynamically new
methods to a module later. We could say 'at the runtime' but this term is not
suitable to the Plezuro because in this language everything is at the runtime.
The new method is visible in the direct objects of this module (even created before the
addition of a new method) as well in the objects of the child modules. You can
achieve that using the method 'addMethod'.


===============
Method removing
===============

It is even possible to remove a method. Nonetheless do not do it without any reason. To do it,
use the method 'removeMethod'.


include_vim(../../../plezuro_html/doc/dynamic_module_change.plez)
