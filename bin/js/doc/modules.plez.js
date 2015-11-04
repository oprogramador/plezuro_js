(function() {var Person;Person = Module.create(new AssocArray([
    (new String('name')), (new String('Person')),
    (new String('methods')), new AssocArray([
        (new String('do')) , (function () {return              this['fields']['a'] ['*']( (new Number(2)) )['+']( arguments[0]
        )})
    ])
]));
var Student;Student = Module.create(new AssocArray([
    (new String('name')), (new String('Student')),
    (new String('parents')), [Person]
]));
var s;s = Student.new(new AssocArray([(new String('a')), (new Number(14))])); return  s.do((new Number(5)))
}).exports(typeof module !== 'undefined' ? module : null)