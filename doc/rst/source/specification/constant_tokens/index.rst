Constant tokens
===============

A constant token means a token which has a value and its value is set hardly in
the code.

Types of constant tokens:

* Number
* String

======
Number
======

Each number is floating point. Generally it reflects the mathematical real
number.

There exist the following notations:

========================================= ====================================== =============
Name                                      Regex                                  Example
========================================= ====================================== =============
Decimal (including scientific notation)   [0-9]+(\\.[0-9]+)?(e[\\+\\-]?[0-9]+)?  1.2e45
Binary                                    0b[01]+                                0b1101
Octal                                     0[0-7]+                                072
Hexadecimal                               0x[0-9a-f]+                            0xa4f
========================================= ====================================== =============

======
String
======

It is a sequence of unicode characters of any length (the only limit is the
memory reserved for the application). The delimiter of the string is either
single ``'`` or double ``"`` quote. The special characters within the string
must be escaped with the backslash ``\``.

List of special characters:

* \\t - tabulator
* \\n - new line
* \\\\ - backslash
