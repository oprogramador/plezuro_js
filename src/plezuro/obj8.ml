$Machine = Module.create(%(
    'name': 'Machine',
    'staticFields': %(
        'state': 0
    ),
    'staticMethods': %(
        'change': {
            @state = @state.sin + @state.cos
        },
        'doubleChange': {
            this.change;
            this.change
        }
    )
));
Machine.doubleChange;
Machine.doubleChange;
Machine::state
