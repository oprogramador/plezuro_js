(function() {var Vector;Vector = Module.create(new AssocArray([
    (new String('name')), (new String('Vector')),
    (new String('methods')), new AssocArray([
        (new String('list')), (function () {return              this['fields']['list']
        }),
        (new String('+')), (function () {
            var result;result = [];
            var i;i = (new Number(0));
            var a;a = this;
            var b;b = arguments[0];
            (function () {
                result.push(a.list()[i] ['+']( b.list()[i]));
                i++; return                  i < a.list().len()
            }).do(); return              Vector.new(new AssocArray([(new String('list')), result]))
        })
    ])
]));
var a;a = Vector.new(new AssocArray([(new String('list')), [(new Number(3)), (new Number(4)), (new Number(9))]]));
var b;b = Vector.new(new AssocArray([(new String('list')), [(new Number(6)), (new Number(0)), (new Number(9))]])); return  a['+'](b
)}).exports(typeof module !== 'undefined' ? module : null)