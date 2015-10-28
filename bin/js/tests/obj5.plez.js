(function() {var Animal;Animal = Module.create(new AssocArray([
    (new String('name')), (new String('Animal')),
    (new String('methods')), new AssocArray([
        (new String('init')), (function () {return              this['fields']['age'] = (new Number(0))
        }),
        (new String('say')), (function () {return              (new String('I am '))['+'](this['fields']['age']
        )}),
        (new String('~')), (function () {return              this['fields']['age']++
        }),
        (new String('+')), (function () {return              this['fields']['age'] += arguments[0]
        })
    ])
]));
var a;a = Animal.new();
output = (new String(''));
output += a.say();
a['~']();
output += a.say();
a ['+']( (new Number(3)));
output += a.say(); return  output
}).exports(typeof module !== 'undefined' ? module : null)