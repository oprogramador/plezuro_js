$Person = Module.create(%('name': 'Person'));
$Student = Module.create(%('name': 'Student', 'parents': [Person]));
Person['methods']['do'] = {
  @['a'] + first
};
$s = Student.new(%('a': 90));
s.do(3, 4)
