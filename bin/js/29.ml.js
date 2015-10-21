(function() {var a;a = (function () {return      this .__mul( arguments[0] ).__add( arguments[1]
)});

var b;b = (function () {return      a.call( a.call((new Number(2)), (new Number(3)), (new Number(4))), (new Number(5)), (new Number(6)))
});

var c;c = (function () {return      b.call() .__add( b.call()
)}); return   c.call()
}).exports(typeof module !== 'undefined' ? module : null)