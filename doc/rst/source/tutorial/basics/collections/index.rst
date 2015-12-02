Collections
===========

One of the indispensable features of a programming language are the collections.
Of course, Plezuro provides some sorts of it. 

====
List
====

The most basic one is the list. To create a list, you use square brackets (``[``, ``]``),
the elements are separated by a comma ``,``.
It can contain objects of different types (like list in Python, Ruby, Javascript
or PHP as well List<Object> in Java or List<object> in c♯). It implies that a list
can also contain other lists. Moreover a list can contain a self-reference (it
means one of its elements is a pointer to this list) because the lists are passed
by reference to functions and to collections.

include_vim(../../../plezuro_html/doc/list.plez)


===
Set
===

To create a set, you use dollar sign ``$`` and brackets.
This collections is like the mathematical set. Each value can be contained only once.

include_vim(../../../plezuro_html/doc/set.plez)


==========
Dictionary
==========

Basically it is a set of pairs key-value.
It is like dictionary in Python, hash in Ruby, Dictionary<object, object> in c♯ or
Map<Object, Object> in Java. However there is a notably difference between the Plezuro
dictionary and associative array in PHP or object in Javascript because in the
dictionary the order of the items does not matter and generally it is stored
using a binary tree. You write it with a hash sign ``#`` and brackets.

include_vim(../../../plezuro_html/doc/dict.plez)


=================
Associative array
=================

It is like the associative array in PHP or object in Javascript. In the version of Plezuro
compiled to Javascript the main appliance of this collection is to pass Javascript objects
to methods from libraries. You write it with a percent sign ``%`` and brackets.

include_vim(../../../plezuro_html/doc/assoc_array.plez)
