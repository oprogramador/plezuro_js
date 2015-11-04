(function() {var x;x = (new Number(4));
var a;a = [x, x];
var b;b = [x, a, (new Number(1)), [(new String('abc')), (new Number(56))]];
b[(new Number(0))] = b; return  b
}).exports(typeof module !== 'undefined' ? module : null)