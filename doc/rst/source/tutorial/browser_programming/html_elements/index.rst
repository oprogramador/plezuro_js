HTML elements
=============

In HTML programming (not each web browsew programming is HTML programming
because you can use eventually Java applets, Adobe Flash or
Silverlight which are deprecated technologies) almost all you see in the
browser are the HTML elements. The exceptions include alerts and different sorts
of info from browser.

This is a powerful tool. In the desktop application development in most of
frameworks you cannot use such tool and it makes the front-end development
really harder.


========
HTML DOM
========
It stands for HTML Document Object Model. It represents a tree of objects. 

**What is an HTML element?**

It can be an atomic part of the view you see in the browser (ex. an input, a
button, a span), as well something you cannot see (because it is hidden, it has
the 0 size or it contains no text) or a tree of other elements.

**What is a tree?**

We can imagine an object tree like a real tree. Each element (node) is a place
where one branch is divided to multiple branches (in a special case still one),
a leaf (where the tree ends) or the begin of the tree (where it grows out of the
ground).

**Relations in a tree**

One element for another can be:

* child (in special case the first child)
* parent
* sibling (in special case the next sibling)
* ancestor
* offspring
* none of the above

Let us notice a child is also an offspring, as well a parent is an ancestor.


If you just know same basics of HTML, you should know the outer element is HTML.
In reality there is a child of the document which is the most outer element in
the whole HTML DOM.


**Why is it so important?**

Knowing an element, you can operate on his children, siblings, parent. You can
replace the children order, copy a subtree and so on.

**What Plezuro can do?**

* change HTML elements (ex. the text)
* add HTML elements
* remove HTML elements
* clone HTML elements
* change HTML attributes
* add HTML attributes
* remove HTML attributes
* change CSS styles
* create new HTML events

It implies some additional features. For example cloning, removing and adding an
element, you can move it.
