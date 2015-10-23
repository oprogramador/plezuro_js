(function() {var Person;Person = Module.create(new AssocArray([
    (new String('name')), (new String('Person')),
    (new String('methods')), new AssocArray([
        (new String('do')) , (function () {return              this['fields']['a'] .__mul( (new Number(2)) ).__add( arguments[0]
        )})
    ])
]));
var Student;Student = Module.create(new AssocArray([
    (new String('name')), (new String('Student')),
    (new String('parents')), [Person]
]));
student = Student.new(new AssocArray([(new String('a')), (new Number(90))]));
var x;x = student.do((new Number(1)), (new Number(3)), (new Number(4)));
Person.addMethod((new String('say')), (function () {return      (new String('person a=')).__add(this[(new String('fields'))][(new String('a'))]
)}));
var y;y = student.say();
Student.addMethod((new String('say')), (function () {return      (new String('student a=')).__add(this[(new String('fields'))][(new String('a'))]
)}));
var z;z = student.say();
Person.addMethod((new String('say')), (function () {return      (new String('person2 a=')).__add(this[(new String('fields'))][(new String('a'))]
)}));
var z1;z1 = student.say();
Student.removeMethod((new String('say')));
var z2;z2 = student.say();
Person.removeMethod((new String('say')));
var msg;msg;
(function () {return      student.say()
}).try((function () {return      msg = this[(new String('message'))]
})); return  [x, y, z, z1, z2, msg]
}).exports(typeof module !== 'undefined' ? module : null)