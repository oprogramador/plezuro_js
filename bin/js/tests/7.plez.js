(function() {var f;f = (function () { 
    var a;a = [(new String('xx')), (new String('oo')), (new String('pp'))];
    var b;b = (function () {return          [a, a]
    }); return      [a, b]
}); return  f.call()
}).exports(typeof module !== 'undefined' ? module : null)