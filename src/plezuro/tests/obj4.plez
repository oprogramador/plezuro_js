$Animal = Module.create(%(
    'name': 'Animal',
    'methods': %(
        'init': {
            @age = 0
        },
        'say': {
            'I am '+@age
        },
        'older': {
            @age++
        }
    )
));
$a = Animal.new;
output = '';
output += a.say;
a.older;
output += a.say;
a.older;
output += a.say;
output
