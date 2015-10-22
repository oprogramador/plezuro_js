$Person = Module.create(%(
    'name': 'Person',
    'methods': %(
        'do' : {
            this['fields']['a'] * 2 + first
        }
    )
));
$Student = Module.create(%(
    'name': 'Student',
    'parents': [Person]
));
student = Student.new(%('a': 90));
$x = student.do(1, 3, 4);
Person.addMethod('say', {
    'person a='+this['fields']['a']
});
$y = student.say;
Student.addMethod('say', {
    'student a='+this['fields']['a']
});
$z = student.say;
Person.addMethod('say', {
    'person2 a='+this['fields']['a']
});
$z1 = student.say;
Student.removeMethod('say');
$z2 = student.say;
Person.removeMethod('say');
$msg;
{
    student.say
}.try({
    msg = this['message']
});
[x, y, z, z1, z2, msg]
