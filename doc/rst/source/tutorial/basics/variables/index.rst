Variables
=========

Probably the most basic feature of a programing language are the variables. What
is it? The variable is a block of a program memory that you can change at the
runtime. You can assign it to a symbol and it works like the mathematics. The
only difference is a variable can change his value. For example ``$x = 2 + 5;
$y = x * 2``.

In the Plezuro like in the majority of the programming languages a variable name
can begin with a letter or an underscore ``_`` and the next characters of the
name can be a letter, an underscore or a digit. The case of the characters
matters (like in c, Java, Python and so on, differently from SQL and HTML). You
can use only the ASCII letters. It is for the readability (it would be extremely
strange if someone used Arabic, Chinese characters or some mix of them). The
recommended style of the naming all the variables (including functions and
modules) is the camelcase (ex. ```aVeryInterestingVariable```).


===========
Declaration
===========

Before we can use any variable, we have to declare it. It is pretty simple, just write the name of the variable and the dollar sign ('$') immediately before it.
In next occurrences of a variable, you should write it without the dollar sign.


=====
Scope
=====

The scope of a variable is limited within the curlies (``{``, ``}``) which are used
for the function (even a conditional or a loop it is used an inner function). So if
you want to use a variable across multiple functions, you have to declare it in a
propriate place.


=======================
What can be a variable?
=======================

In Plezuro there is dynamic typing like in other dynamic languages such as Python, Ruby or Javascript. Also everything is a variable (including functions and modules).
So a variable can change its type in the runtime. For example at the first it is
a number, then a list and finally a function.


include_vim(../../../plezuro_html/doc/variables.plez)
