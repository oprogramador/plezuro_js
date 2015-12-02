Conditions
==========

At first, you should write the condition (function that return a boolean value). Then write '.if' and in brackets and curlies
write the expression that will be executed when this expression is true. It is just a method of the function type.
Then you can use methods 'elif' and 'else' which are not required.

include_vim(../../../plezuro_html/doc/conditions.plez)

There is moreover another possibility. You can use two operators: ``:`` which create a pair and ``?`` which dependently
on a boolean value on the left side returns the key or the value of a pair on the right side. In other languages it is one operator
``? :`` but Plezuro does not have operators divided into two separate tokens.

include_vim(../../../plezuro_html/doc/simple_conditions.plez)
