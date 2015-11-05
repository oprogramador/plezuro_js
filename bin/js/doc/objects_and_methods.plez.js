(function() {var Person;Person = Module.create(new AssocArray([
    (new String('name')), (new String('Person')),
    (new String('methods')), new AssocArray([
        (new String('say')) , (function () {return              (new String('I am '))['+'](this['fields']['name'])['+']((new String(', ')))['+'](this['fields']['age'])['+']((new String(' years old'))
        )}),
        (new String('long_say')), (function () {return              (new String('Good morning, '))['+'](this.say()
        )}),
        (new String('older')), (function () {return              this['fields']['age']++
        })
    ])
]));
var adam;adam = Person.new(new AssocArray([(new String('name')), (new String('Adam')), (new String('age')), (new Number(20))]));
adam.older(); return  [adam.say(), adam.long_say()]
}).exports(typeof module !== 'undefined' ? module : null)