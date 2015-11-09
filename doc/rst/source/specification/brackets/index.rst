Brackets
========

There exist following types of the brackets:

=========== ============ ==================================
Opening     Closing      Usage
=========== ============ ==================================
(           )            ordering of operators
[           ]            list creation, element access
{           }            function
$(          )            set creation
#(          )            dictionary creation
%(          )            associative array creation
=========== ============ ==================================

The general rules between the brackets:

#. Each bracket has to be closed.
#. Closing a bracket without previous opening of it throws an exception.
#. Stack rule: each bracket opening is pushed to the stack, bracket closing
   causes popping from the stack, when the popped element does not match to the
   bracket closing, an exception is thrown.
