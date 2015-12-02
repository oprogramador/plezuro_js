Output
======

You can use the standard Javascript ways to output:

* printing into an alert box, using ``window.alert()``
* printing into the HTML output using ``document.write()``
* printing into an HTML element, using ``element.innerHTML=``
* printing into the browser console, using ``console.log()``

However recommended is the Plezuro way using ``dumpl`` method.

It looks like Javascript but be aware ex. ``alert()`` without
``window`` will not work unless you pass the ``window`` variable as the zero
argument. This is because the zero argument in Plezuro is treated like this
object.

include_vim(../../../plezuro_html/doc/web/output/main.plez)
