(function() {var Person;Person = Module.create(new AssocArray([
    (new String('name')), (new String('Person')),
    (new String('methods')), new AssocArray([
        (new String('do')) , (function () {return              this[(new String('fields'))][(new String('a'))] .__mul( (new Number(2)) ).__add( arguments[0]
        )})
    ])
]));
var Student;Student = Module.create(new AssocArray([
    (new String('name')), (new String('Student')),
    (new String('parents')), [Person]
]));
s = Student.new(new AssocArray([(new String('a')), (new Number(90))]));
var x;x = s.do((new Number(1)), (new Number(3)), (new Number(4)));
Person.addMethod((new String('say')), (function () {return      (new String('a=')).__add(this[(new String('fields'))][(new String('a'))]
)}));
y = s.say(); return  [x, y]
}).exports(typeof module !== 'undefined' ? module : null)