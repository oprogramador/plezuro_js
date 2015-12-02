jQuery
======

jQuery is a powerful Javascript library which gives you all the browser features
that are not included in the pure Javascript and which makes the code shorter and
more readable.

The main features:

* DOM element selection
* DOM manipulation
* events
* AJAX
* control of the asynchronous processing
* extensibility
* multi-browser support

Theoretically jQuery works in the same way in all the browsers. In reality some
differences are possible, for example the selector uses the
document.querySelectorAll which behaves a little bit differently depending on
the browser.

To use this library in Plezuro, be aware of:

* The most common use in Javascript is based on the ``$`` variable. In Plezuro it
  breaks the rules of the variable naming so you can access to the jQuery with the
  ``jQuery`` variable or eventually using ``eval('$')``.
* You must pass the proper variable as the first argument of ``jQuery`` function,
  not as the zero argument.
* In Plezuro everything is an object but jQuery selector must be a true
  Javascript string, so you must invoke the ``toString`` method.


.. literalinclude:: ../../../../../../src/plezuro/doc/web/jQuery/index.html
  :language: html
  :caption: jQuery/index.html

jQuery/main.plez
include_vim(../../../plezuro_html/doc/web/jQuery/main.plez)


Fortunately, there is a simpler way to call jQuery in Plezuro using a special
binding. Then you use the ``_jQ`` function and the code looks in the following
way:

jQuery_binding/main.plez
include_vim(../../../plezuro_html/doc/web/jQuery_binding/main.plez)
