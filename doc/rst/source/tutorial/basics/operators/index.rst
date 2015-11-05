Operators
=========

One of the important features of a programming language are operators. Technically
it would be possible to create a language before operators. However it facilities
much the syntax. For example in an expression '1+3' we have an operator '+' which
does the addition. In comparison with other languages, Plezuro has some special
operators such as the comma (',') or the semicolon (';').

An important issue in Plezuro is you cannot have any operator immediately (excluding
whitespaces and comments) before bracket (')'), square bracket (']') and curly ('}')
close. So after the last element of the list you cannot put the comma and after
the last statement of the function you cannot put the semicolon. In such a case
it would be a syntax error.

.. literalinclude:: ../../../../../../src/plezuro/doc/operators.plez


Complete list of the operators:

* single-argument operators (the operator at the left, the argument at the right)

    * "!"	
    * "&&"	
    * "**"	
    * "#"	
    * "~"
    * "=>"

* single-argument operators (the operator at the right)

    * "++"	
    * "--"

* double-argument operators (the first argument, the operator, the second argument;
  from the evaluated at the end to the evaluated at the begin)

    * ";"
    * ","
    * ":="
    * "="
    * "+="
    * "-="
    * "*="
    * "/="
    * "^="
    * "&="
    * "|="
    * "%="
    * ".="
    * "~~"
    * "<->"
    * "<<"
    * ">>"	
    * "?"	
    * "|"	
    * "&"	
    * "<=>"	
    * ">="	
    * ">"	
    * "<="	
    * "<"	
    * "!="	
    * "=="	
    * "!=="
    * "==="	
    * "=~"
    * "!~"
    * "+"
    * "-"	
    * "%"	
    * "*"
    * "/"	
    * "^"
    * "^^"
    * "."
    * ".."
    * ":"	
