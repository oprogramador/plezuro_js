(function() {/* number*/
var a;a = (new Number(34));

/* string*/
var b;b = (new String('abc'));

/* list*/
var c;c = [a, b];

/* associative array*/
var d; return d = new AssocArray([(new String('a')), a, (new String('b')), b])
}).exports(typeof module !== 'undefined' ? module : null)