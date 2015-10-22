(function() {var x;x = (new Number(21212)) .__add( ((new Number(0.12)) .__add( ((new Number(982))))) .__div( (new Number(12)) )).__add( (new Number(3)));/*1111.222;*/
x++;
var y;y = (new String('abc')) .__add( (new String('abc\nxyz')) ).__add( (new String('uu\'bb')) ).__add( (new String('ooo')));
y += (new String('')) .__add( (new String("mmmmm")) ).__add( ((new String('cv')) .__add( (new String("vfg'ee'ww")))) ).__add( (new String("www\"www\nvvv")) ).__add( (new String('ww"ddd"')) ).__add( (new String("\n")));
y += ((new String("")) .__add( (new String('wef')) ).__add( (new String("")))) .__add( (new String('')));/*"oop\"ww" + '';*/
x+=/*blabla
qwe
qrw*/(new Number(21));
var f;f = (function () {return this.__mul((new Number(2))).__add((new Number(1)))}); return  [(new String('')).__add(x).__add(y), f.call((new Number(21)))]
}).exports(typeof module !== 'undefined' ? module : null)