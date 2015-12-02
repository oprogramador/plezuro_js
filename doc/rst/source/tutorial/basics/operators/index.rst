Operators
=========

One of the important features of a programming language are operators. Technically
it would be possible to create a language without operators. However it facilities
much the syntax. For example in an expression ``1+3`` we have an operator ``+`` which
does the addition. In comparison with other languages, Plezuro has some special
operators such as the comma ``,`` or the semicolon ``;``.

An important issue in Plezuro is you cannot have any operator immediately (excluding
whitespaces and comments) before bracket ``)``, square bracket ``]`` and curly ``}``
close. So after the last element of the list you cannot put the comma and after
the last statement of the function you cannot put the semicolon. In such a case
it would be a syntax error.

The action of an operator depends of the type of the zero argument. It behaves in
the same way like the method call. It is possible to change the operators action
in the runtime (even you can cause that 2+2 produce another result than 4 so it
is not recommended to change it in abundance).

Generally we can specify some main actions of the operators (ex. for numbers and strings).

====================== ========== ================ =============== ==============
Type of left argument  Operator   Action           Example         Result
====================== ========== ================ =============== ==============
Number                 ``+``      addition         ``1+4``         ``5``
Number                 ``-``      subtraction      ``4-7``         ``-3``
Number                 ``*``      multiplication   ``8.5*2``       ``17``
Number                 ``/``      division         ``1/4``         ``0.25``
Number                 ``^``      power            ``4^3``         ``64``
Number                 ``%``      modulo           ``7%3``         ``1``
String                 ``+``      concatenation    ``'a'+'b'``     ``'ab'``
String                 ``*``      multiplication   ``'a'\*3``      ``'aaa'``
List                   ``+``      concatenation    ``[2,3]+[1]``   ``[2,3,1]``
List                   ``*``      multiplication   ``[2,3]*2``     ``[2,3,2,3]``
====================== ========== ================ =============== ==============

include_vim(../../../plezuro_html/doc/operators.plez)

There are also some composite operators which are a syntactic sugar, ex. ``a += b`` means
``a = a + b``.

Complete list of composite operators:

* ``+=``
* ``-=``
* ``*=``
* ``/=``
* ``^=``
* ``&=``
* ``|=``
* ``%=``
* ``.=``

Complete list of the operators:

* single-argument operators (the operator at the left, the argument at the right)

    * ``!``	
    * ``&&``	
    * ``**``	
    * ``#``	
    * ``~``
    * ``=>``

* single-argument operators (the operator at the right)

    * ``++``	
    * ``--``

* double-argument operators (the zero argument, the operator, the first argument;
  from the evaluated at the end to the evaluated at the begin)

    * ``;``
    * ``,``
    * ``:=``
    * ``=``
    * ``+=``
    * ``-=``
    * ``*=``
    * ``=``
    * ``^=``
    * ``&=``
    * ``|=``
    * ``%=``
    * ``.=``
    * ``~~``
    * ``<->``
    * ``<<``
    * ``>>``	
    * ``?``	
    * ``|``	
    * ``&``	
    * ``<=>``	
    * ``>=``	
    * ``>``	
    * ``<=``	
    * ``<``	
    * ``!=``	
    * ``==``	
    * ``!==``
    * ``===``	
    * ``=~``
    * ``!~``
    * ``+``
    * ``-``	
    * ``%``	
    * ``*``
    * ``/``	
    * ``^``
    * ``^^``
    * ``.``
    * ``..``
    * ``:``	
