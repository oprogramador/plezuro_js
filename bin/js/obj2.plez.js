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
student = Student.new(new AssocArray([(new String('a')), (new Number(90))]));
var x;x = student.do((new Number(1)), (new Number(3)), (new Number(4)));
Person.addMethod((new String('say')), (function () {return      (new String('person a='))['+'](this[(new String('fields'))][(new String('a'))]
)}));
y = student.say();
Student.addMethod((new String('say')), (function () {return      (new String('student a='))['+'](this[(new String('fields'))][(new String('a'))]
)}));
z = student.say();
Person.addMethod((new String('say')), (function () {return      (new String('person2 a='))['+'](this[(new String('fields'))][(new String('a'))]
)}));
z1 = student.say(); return  [x, y, z, z1]
}).exports(typeof module !== 'undefined' ? module : null)