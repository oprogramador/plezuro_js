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
s = Student.new(%('a': 90));
s.do(1, 3, 4)
