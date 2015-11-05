(function() {var x;x = (new String('abc'));
var dict;dict = new Dictionary([
  x, [(new Number(4)), (new Number(5))],
  (new String('def')), (new Number(49)),
  (new String('ghj')), (new String('ooo'))
]); return  dict.get(x)
}).exports(typeof module !== 'undefined' ? module : null)