(function() {var Person;Person = Module.create(new AssocArray([(new String('name')), (new String('Person'))]));
var Student;Student = Module.create(new AssocArray([(new String('name')), (new String('Student')), (new String('parents')), [Person]]));
Person.methods[(new String('do'))] = (function () {return    arguments[0][(new String('fields'))][(new String('a'))] .__add( arguments[1]
)});
s = Student.new(new AssocArray([(new String('a')), (new Number(90))])); return  s.__call((new String('do')), (new Number(3)), (new Number(4)))
}).exports(typeof module !== 'undefined' ? module : null)