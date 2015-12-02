Regex
=====

Beside of imperative programming (as it is in Plezuro), there exist also other programming paradigms.
It means you can do the same staff in totally different ways. It can sound a little bit complicated
but it often makes hard problems easy.

One of these paradigms is the regex (regular expression). It looks like a normal text but there are
included some special characters which can mean one of multiple characters, a repetition of a string
and so on. It is really useful for web forms validation (ex. postcode, name, date).

Dependently on the engine, regular expressions behave in different ways.
Currently Plezuro uses predefined regex engines so in the version compiled to Javascript the rules
are the same as in Javascript. You can learn it from http://www.w3schools.com/jsref/jsref_obj_regexp.asp .

The syntax is the following: ``r`` and the text in single or double quotes. For a single quote inside
the single quotes, write it twice and the same in the case of a double quote inside double quotes
(ex. ``r"ab""cd"``, ``r'ef''gh'``).

For testing a regex (checking if a string matches to a specific regex), use the ``=~`` operator.
(The order does not matter, either string - operator - regex or regex - operator - string.)
There exists also an operator which negates it ``!~``.

include_vim(../../../plezuro_html/doc/regex.plez)
