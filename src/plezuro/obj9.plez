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
s.addNote(5);
output += s.say + '\n';

output
