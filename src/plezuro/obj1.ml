$Person = Module.create(%('name': 'Person'));
$Student = Module.create(%(
    'name': 'Student',
    'parents': [Person],
    'methods': %(
        'do' : {
            first * 2 + second
        }
    )
));
s = Student.new(%('a': 90));
s.do(1, 3, 4)
