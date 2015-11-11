Compiler
========

The whole compiler is currenty implemented in Java.

It is divided into the following packages:

* mondo.engine - the kernel of the compiler
* mondo.invalidToken - the exception classes combined with syntax errors
  and their binding to the output language
* mondo.main - the main class and function
* mondo.token - translation of Plezuro specific tokens to the output
  language

mondo.main and mondo.engine are not dependent on the output language, on the
other hand mondo.token and mondo.invalidToken are dependent. So if you want to
write a compiler from Plezuro to other language than Javascript, you should
change only the packages mondo.token and mondo.invalidToken.

.. toctree::
  :glob:
  :titlesonly:
  :maxdepth: 1

  engine/index
  invalidToken/index
  token/index
