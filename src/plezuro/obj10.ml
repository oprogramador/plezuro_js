$Person = Module.create(%(
    'name': 'Person',
    'methods': %(
        'say': {
            'I am '+@name
        }
    )
));
$p = Person.new(%('name': 'Adam'));
$output = '';
output += p.say + '\n';

$Student = Module.create(%(
    'name': 'Student',
    'parents': [Person],
    'methods': %(
        'init': {
            Person::init(this, first);
            @notes = []
        },
        'say': {
            Person::say(this)+', my notes are: '+@notes.jsonStr
        },
        'addNote': {
            @notes.push(first)
        }
    )
));
$s = Student.new(%('name': 'Bob'));
s.addNote(4);
output += s.say + '\n';

$Worker = Module.create(%(
    'name': 'Worker',
    'parents': [Person],
    'methods': %(
        'work': {
            'I am working'
        }
    )
));
$w = Worker.new(%('name': 'Clint'));
output += w.say + '\n';
output += w.work + '\n';

$WorkingStudent = Module.create(%(
    'name': 'WorkingStudent',
    'parents': [Student, Worker]
));
$ws = WorkingStudent.new(%('name': 'Dane'));
output += ws.say + '\n';
output += ws.work + '\n';

output
