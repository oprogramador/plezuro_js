$Person = Module.create(%('name': 'Person'));
$Student = Module.create(%(
    'name': 'Student',
    'parents': [Person],
    'methods': %(
        'do' : {
            this['fields']['a'] * 2 + first
        }
    )
));
s = Student.new(%('a': 90));
s.do(1, 3, 4)
