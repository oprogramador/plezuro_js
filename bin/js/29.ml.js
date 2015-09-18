(function() {var a;a = (function () {return      arguments[0] .__mul( arguments[1] ).__add( arguments[2]
)});

var b;b = (function () {return      a( a((2), (3), (4)), (5), (6))
});

var c;c = (function () {return      b() .__add( b()
)}); return   c()
}).exports(typeof module !== 'undefined' ? module : null)