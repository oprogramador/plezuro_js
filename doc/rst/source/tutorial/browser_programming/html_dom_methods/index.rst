HTML DOM methods and events
===========================

After previous chapters you are able to create any HTML document statically with
``doument.write``. But probably you wonder to create an interactive app. For
example after button pressing an input will change its value.


======================
How to get an element?
======================

You can use the standard Javascript methods in Plezuro. Eventually you can use
some methods from external libraries such like jQuery.


**document.getElementById**

It returns the element with matching 'id' attribute. Remember if you include
your script in the HEAD section, the elements are not loaded so you cannot
immediately get any element, in this case you should use the proper event.


**document.getElementsByTagName**

It returns the collection of all the elements of the tag name specified as the first
argument. For example ``document.getElementsByTagName('div')`` will return the
collection of all divs in the document.


**document.getElementsByName**

The collection of all the elements with the value of 'name' attribute
specified as the first argument.


**document.getElementsByClassName**

The collection of all the elements with the value of 'class' attribute
specified as the first argument.


**document.getElementsByTagNameNS**

Similar to getElementsByTagName but the first argument specifies the name of
the namespace and the second one the tag name. It is used rather in XML DOM.


**document.querySelector**

It returns the first element that matches the CSS selector in the first
argument. For example ``document.querySelector('table button')`` will return the
first button in the first table that contain a button.


**document.querySelectorAll**

It returns the collection of all the elements that match to the given CSS selector.


===========================
How to operate on elements?
===========================

**innerHTML**

It is the simplest way to change the content of an element, it just inserts any
HTML into the element. For example ``element['innerHTML'] =
'<button>OK</button>'``.


**setAttribute**

For example ``element.setAttribute('name', 'age')``


**style**

You can change the CSS style. You can use the CSS name with a hyphen ``-``
as well the camelcase. For example
``element['style']['backgroundColor'] = 'red'``


**document.createElement**

You can create an element. The first argument specifies the tag name. For
example, to create a div, you write ``document.createElement('div')``.


**document.appendChild**

When you have just created an element you can add it to another element either
existing in the HTML DOM or not.


**document.removeChild**

You can remove an element specified as the first argument.


**document.replaceChild**

You can replace an element passed as the first argument to an element passed as
the second argument.


**document.createTextNode**

You can create a text node with the value specified as the first argument and
then append such a node to an element.


==========================
How to listen to en event?
==========================

To provide some interaction it is useful to listen to the events. We can detect
among others: a mouse click, a key pressing, a document being loaded, a document
mutation, an object mutation, browser window resizing.

You can see the full list of events for Firefox on
https://developer.mozilla.org/en-US/docs/Web/Events, or for any browser on
http://www.w3schools.com/tags/ref_eventattributes.asp.

Let us enumerate the most important ones.


**onclick**

It fires after the mouse click (pressing and releasing the mouse button). For
example ``element['onclick'] = { this['parentNode'].removeChild(this); null }``


**onkeydown**

It fires after a key being pressed.


**onkeypress**

It fires when a key is being pressed (even multiple times).


**onkeyup**

It fires after a key being released.


.. literalinclude:: ../../../../../../src/plezuro/doc/web/dom_methods/index.html
  :language: html
  :caption: dom_methods/index.html

dom_methods/main.plez
include_vim(../../../plezuro_html/doc/web/dom_methods/main.plez)
