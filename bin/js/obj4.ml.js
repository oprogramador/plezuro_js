(function() {var Animal;Animal = Module.create(new AssocArray([
    (new String('name')), (new String('Animal')),
    (new String('methods')), new AssocArray([
        (new String('init')), (function () {return              this['fields']['age'] = (new Number(0))
        }),
        (new String('say')), (function () {return              (new String('I am ')).__add(this['fields']['age']
        )}),
        (new String('older')), (function () {return              this['fields']['age']++
        })
    ])
]));
var a;a = Animal.new();
output = (new String(''));
output += a.say();
a.older();
output += a.say();
a.older();
output += a.say(); return  output
}).exports(typeof module !== 'undefined' ? module : null)