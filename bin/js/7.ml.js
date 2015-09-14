(function() {var f;f = (function () { 
    var a;a = ['xx', 'oo', 'pp'];
    var b;b = (function () {return          [a, a]
    }); return     [a, b]
}); return f()
}).exports(typeof module !== 'undefined' ? module : null)