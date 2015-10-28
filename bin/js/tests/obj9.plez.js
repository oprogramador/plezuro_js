(function() {var Person;Person = Module.create(new AssocArray([
    (new String('name')), (new String('Person')),
    (new String('methods')), new AssocArray([
        (new String('say')), (function () {return              (new String('I am '))['+'](this['fields']['name']
        )})
    ])
]));
var p;p = Person.new(new AssocArray([(new String('name')), (new String('Adam'))]));
var output;output = (new String(''));
output += p.say() ['+']( (new String('\n')));

var Student;Student = Module.create(new AssocArray([
    (new String('name')), (new String('Student')),
    (new String('methods')), new AssocArray([
        (new String('init')), (function () {
            Person['fields']['init'].call(this, arguments[0]); return              this['fields']['notes'] = []
        }),
        (new String('say')), (function () {return              Person['fields']['say'].call(this)['+']((new String(', my notes are: ')))['+'](this['fields']['notes'].jsonStr()
        )}),
        (new String('addNote')), (function () {return              this['fields']['notes'].push(arguments[0])
        })
    ])
]));
var s;s = Student.new(new AssocArray([(new String('name')), (new String('Bob'))]));
s.addNote((new Number(5)));
output += s.say() ['+']( (new String('\n'))); return   output
}).exports(typeof module !== 'undefined' ? module : null)