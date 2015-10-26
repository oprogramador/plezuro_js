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
            Animal::nr++;
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
    'namespace': Animals,
    'methods': %(
        'types': {
            ['a', 'b', 'c']
        },
        'say': {
            Animal::say(this)+', dog'
        }
    )
));
$dog = Dog.new;
[Object.keys(Animals['staticFields']), Animal::nr, dog.types[0], dog.say]
