$Animals = Module.create(%(
    'name': 'Animals'
));
$Animal = Module.create(%(
    'name': 'Animal',
    'namespace': Animals,
    'staticFields': %(
        'nr': 0
    ),
    'methods': %(
        'init': {
            Animal['staticFields']['nr']++;
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
$Dog = Module.create(%(
    'name': 'Dog',
    'parents': [Animal],
    'methods': %(
        'types': {
            ['a', 'b', 'c']
        }
    )
));
$dog = Dog.new;
[Object.keys(Animals['staticFields']), Animal['staticFields']['nr'], dog.types[0], dog.say]
