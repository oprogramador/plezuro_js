Storage
=======

In programming almost all the time you need to store some data. Part of it is
more durable and other part less.

In web browser programming you can use the following types of storage:

* Durable unless the page is reloaded or closed:

  * HTML DOM
  * Javascript memory

* More durable:

  * localStorage
  * sessionStorage
  * indexedDB
  * cookies

Naturally, in Plezuro you have the full access to all of them. Moreover there is
easy memory sharing between Plezuro and Javascript with global variables or
object fields (public as well private).


.. literalinclude:: ../../../../../../src/plezuro/doc/web/storage/index.html
  :language: html
  :caption: storage/index.html

storage/main.plez
include_vim(../../../plezuro_html/doc/web/storage/main.plez)
