(function() {var Machine;Machine = Module.create(new AssocArray([
    (new String('name')), (new String('Machine')),
    (new String('staticFields')), new AssocArray([
        (new String('state')), (new Number(0))
    ]),
    (new String('staticMethods')), new AssocArray([
        (new String('change')), (function () {return              this['fields']['state'] = this['fields']['state'].sin() ['+']( this['fields']['state'].cos()
        )}),
        (new String('doubleChange')), (function () {
            this.change(); return              this.change()
        })
    ])
]));
Machine.doubleChange();
Machine.doubleChange(); return  Machine['fields']['state']

}).exports(typeof module !== 'undefined' ? module : null)