(function() {var Machine;Machine = Module.create(new AssocArray([
    (new String('name')), (new String('Machine')),
    (new String('staticFields')), new AssocArray([
        (new String('state')), (new Number(0))
    ]),
    (new String('staticMethods')), new AssocArray([
        (new String('change')), (function () {return              this['fields']['state'] = this['fields']['state'].sin() ['+']( this['fields']['state'].cos()
        )})
    ])
]));
Machine.change();
Machine.change();
Machine.change(); return  Machine['staticFields']['state']
}).exports(typeof module !== 'undefined' ? module : null)