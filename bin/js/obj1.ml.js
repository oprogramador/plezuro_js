(function() {var Person;Person = Module.__call('create', new AssocArray([(new String('name')), (new String('Person'))])));
var Student;Student = Module.__call('create', new AssocArray([(new String('name')), (new String('Student')), (new String('parents')), [Person]])));
Person[(new String('methods'))][(new String('do'))] = (function () {return    arguments[0][(new String('fields'))][(new String('a'))] .__add( arguments[1]
)});
var s;s = Student.__call('new', new AssocArray([(new String('a')), (new Number(90))]))); return  s.__call('do', (new Number(3)), (new Number(4)))
)}).exports(typeof module !== 'undefined' ? module : null)