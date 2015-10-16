(function() {var a;a = (function () {return      arguments[0] .__mul( arguments[1] ).__add( arguments[2]
)});

var b;b = (function () {return      a( a((new Number(2)), (new Number(3)), (new Number(4))), (new Number(5)), (new Number(6)))
});

var c;c = (function () {return      b() .__add( b()
)}); return   c()
}).exports(typeof module !== 'undefined' ? module : null)