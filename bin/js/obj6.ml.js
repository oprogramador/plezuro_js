(function() {var Animals;Animals = Module.create(new AssocArray([
    (new String('name')), (new String('Animals'))
]));
var Animal;Animal = Module.create(new AssocArray([
    (new String('name')), (new String('Animal')),
    (new String('namespace')), Animals,
    (new String('staticFields')), new AssocArray([
        (new String('nr')), (new Number(0))
    ]),
    (new String('methods')), new AssocArray([
        (new String('init')), (function () {
            Animal['staticFields']['nr']++; return              this['fields']['age'] = (new Number(0))
        }),
        (new String('say')), (function () {return              (new String('I am '))['+'](this['fields']['age']
        )}),
        (new String('older')), (function () {return              this['fields']['age']++
        })
    ])
]));
var Dog;Dog = Module.create(new AssocArray([
    (new String('name')), (new String('Dog')),
    (new String('parents')), [Animal],
    (new String('namespace')), Animals,
    (new String('methods')), new AssocArray([
        (new String('types')), (function () {return              [(new String('a')), (new String('b')), (new String('c'))]
        }),
        (new String('say')), (function () {return              Animal['staticFields']['say'].call(this)['+']((new String(', dog'))
        )})
    ])
]));
var dog;dog = Dog.new(); return  [Object.keys(Animals[(new String('staticFields'))]), Animal['staticFields']['nr'], dog.types()[(new Number(0))], dog.say()]
}).exports(typeof module !== 'undefined' ? module : null)