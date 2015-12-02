AJAX
====

AJAX stands for Asynchronous Javascript and XML. It is a set of web development
techniques to create asynchronous web applications. Nonetheless XML is not
necessary in AJAX, it can be any sort of data (JSON, CSV, HTML, CSS, images,
Javascript). AJAX is almost always associated with a serwer-side programming (a
server response dependent on the request). Technically it is always true because
you send a request and a server in regard to it returns a response. However not
always a script in a language such as PHP, Python or Ruby is needed. Server can
also return some static data (ex. images) according to their path. The best
example is the Apache 2 server.

From a client-side
developper point of view it enables the communication with the server without
page reloading. For example you would like to store some data on the server for
security reasons, check if a data provided by the user matches that on the
server or download some content dynamically (HTML, CSS, images, other Javascripts) that
would be enormous if downloaded fully.

Probably the best way to make an AJAX request is using jQuery at reasons of
browser compatibility and code readability.


.. literalinclude:: ../../../../../../src/plezuro/doc/web/ajax/index.html
  :language: html
  :caption: ajax/index.html

ajax/main.plez
include_vim(../../../plezuro_html/doc/web/ajax/main.plez)
