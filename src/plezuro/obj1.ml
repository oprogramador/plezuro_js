$Person = Module.create(%('name': 'Person'));
$Student = Module.create(%('name': 'Student', 'parents': [Person]));
Person.methods['do'] = {
  this['fields']['a'] + first
};
s = Student.new(%('a': 90));
s.__call('do', 3, 4)
