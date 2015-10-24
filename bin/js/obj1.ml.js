(function() {var Person;Person = Module.create(new AssocArray([
    (new String('name')), (new String('Person')),
    (new String('methods')), new AssocArray([
        (new String('do')) , (function () {return              this[(new String('fields'))][(new String('a'))] ['*']( (new Number(2)) )['+']( arguments[0]
        )})
    ])
]));
var Student;Student = Module.create(new AssocArray([
    (new String('name')), (new String('Student')),
    (new String('parents')), [Person]
]));
s = Student.new(new AssocArray([(new String('a')), (new Number(90))])); return  s.do((new Number(1)), (new Number(3)), (new Number(4)))
}).exports(typeof module !== 'undefined' ? module : null)