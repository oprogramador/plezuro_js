(function() {var Person;Person = Module.create(new AssocArray([
  (new String('name')), (new String('Person')),
  (new String('methods')), new AssocArray([
      (new String('init')), (function () {
          this['fields']['age'] = (new Number(0)); return            this['fields']['name'] = arguments[0]
      }),
      (new String('say')), (function () {return            (new String('I am '))['+'](this['fields']['name'])['+']((new String(', ')))['+'](this['fields']['age'])['+']((new String(' years old'))
      )})
  ])
]));
var adam;adam = Person.new((new String('Adam'))); return  adam.say()
}).exports(typeof module !== 'undefined' ? module : null)