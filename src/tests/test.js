require('../../bin/js/all.js');

a = '../../bin/js/tests/1.plez.js'.import();
assert.equal(JSON.stringify(a), '["21318.843333333334abcabc\\nxyzuu\'bbooommmmmcvvfg\'ee\'wwwww\\"www\\nvvvww\\"ddd\\"\\nwef",43]')

a = '../../bin/js/tests/2.plez.js'.import();
assert.equal(a, 22);

a = '../../bin/js/tests/3.plez.js'.import();
assert.equal(a, 1024);

a = '../../bin/js/tests/4.plez.js'.import();
assert.equal(JSON.stringify(a), '[14,[5,52,21212,33]]');

a = '../../bin/js/tests/5.plez.js'.import();
assert.equal(a.constructor.name, 'Number');
assert.ok(a >= 0);

a = '../../bin/js/tests/6.plez.js'.import();
assert.equal(JSON.stringify(a), '[[1,3,20,3],{"abc":21,"oo":[2,3]}]');

a = '../../bin/js/tests/7.plez.js'.import();
assert.equal(JSON.stringify(a), '[["xx","oo","pp"],null]');
assert.equal(JSON.stringify(a[1]()), '[["xx","oo","pp"],["xx","oo","pp"]]');

a = '../../bin/js/tests/8.plez.js'.import();
assert.equal(a()()(), 3);

a = '../../bin/js/tests/9.plez.js'.import();
assert.equal(JSON.stringify(a), '[[[["a",123],["ghj",[9,3]],[[90,3],"oo"]],[["a",123],["ghj",[9,3]],[[90,3],"oo"]]]]');

a = '../../bin/js/tests/10.plez.js'.import();
assert.equal(a, 4484.833333333334);

a = '../../bin/js/tests/11.plez.js'.import();
assert.equal(a, '21.75');

a = '../../bin/js/tests/12.plez.js'.import();
assert.equal(a.constructor.name, 'Null');

a = '../../bin/js/tests/13.plez.js'.import();
assert.equal(JSON.stringify(a), '[1,2,31313,2]');

a = '../../bin/js/tests/14.plez.js'.import();
assert.equal(JSON.stringify(a), '[1,2,31313,2]');

a = '../../bin/js/tests/15.plez.js'.import();
assert.equal(JSON.stringify(a), '[null,null,null]');

a = '../../bin/js/tests/16.plez.js'.import();
assert.strictEqual(a.pos, 11);
assert.strictEqual(a.line, 2);
assert.strictEqual(a.file, '16.plez');
assert.strictEqual(a.dir, __dirname.replace(/src\/tests$/, '')+'bin/java/../../src/plezuro/tests');

try {
    '../../bin/js/tests/17.plez.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__OperatorAfterOperatorException');
   assert.strictEqual(e.getLineNr(), 0);
   assert.strictEqual(e.getPosition(), 3);
}

try {
    '../../bin/js/tests/18.plez.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__ValueAfterValueException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 3);
}

try {
    '../../bin/js/tests/19.plez.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__BracketStackException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 6);
}

try {
    '../../bin/js/tests/20.plez.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__BracketStackException');
   assert.strictEqual(e.getLineNr(), 0);
   assert.strictEqual(e.getPosition(), 11);
}

try {
    '../../bin/js/tests/21.plez.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__BracketStackException');
   assert.strictEqual(e.getLineNr(), 0);
   assert.strictEqual(e.getPosition(), 13);
}

try {
    '../../bin/js/tests/22.plez.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__OperatorAfterBracketOpenException');
   assert.strictEqual(e.getLineNr(), 2);
   assert.strictEqual(e.getPosition(), 5);
}

try {
    '../../bin/js/tests/23.plez.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__OperatorBeforeBracketCloseException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 12);
}

try {
    '../../bin/js/tests/24.plez.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__OperatorAfterBracketCloseException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 4);
}

a = '../../bin/js/tests/26.plez.js'.import(2,9,87,7,6,777);
assert.strictEqual(JSON.stringify(a), '[["../../bin/js/tests/26.plez.js",2,9,87,7,6,777],20,87.22222222222223]');

a = '../../bin/js/tests/primes.plez.js'.import(100);
assert.strictEqual(a, 541);

a = '../../bin/js/tests/27.plez.js'.import(2,9,87,7,6,777);
assert.strictEqual(JSON.stringify(a), '["wfwfwfe is not defined","blabla"]');

a = '../../bin/js/tests/28.plez.js'.import(9);
assert.strictEqual(JSON.stringify(a), '[189,"B"]');

a = '../../bin/js/tests/28.plez.js'.import(40);
assert.strictEqual(JSON.stringify(a), '[22,"A"]');

a = '../../bin/js/tests/28.plez.js'.import(15);
assert.strictEqual(JSON.stringify(a), '[7,"D"]');

a = '../../bin/js/tests/28.plez.js'.import(17);
assert.strictEqual(JSON.stringify(a), '[336,"C"]');

a = '../../bin/js/tests/29.plez.js'.import();
assert.strictEqual(a, 112);

a = '../../bin/js/tests/30.plez.js'.import();
assert.strictEqual(a, 24);

a = '../../bin/js/tests/obj1.plez.js'.import();
assert.strictEqual(a, 181);

a = '../../bin/js/tests/obj2.plez.js'.import();
assert.strictEqual(JSON.stringify(a), '[181,"person a=90","student a=90","student a=90"]');

a = '../../bin/js/tests/obj2.plez.js'.import();
assert.strictEqual(JSON.stringify(a), '[181,"person a=90","student a=90","student a=90"]');

a = '../../bin/js/tests/obj3.plez.js'.import();
assert.strictEqual(JSON.stringify(a), '[181,"person a=90","student a=90","student a=90","person2 a=90","Object #<AssocArray> has no method \'say\'"]');

a = '../../bin/js/tests/31.plez.js'.import();
assert.strictEqual(a.class().name, 'Null');

a = '../../bin/js/tests/32.plez.js'.import();
assert.ok(is_undefined(a()));

a = '../../bin/js/tests/33.plez.js'.import();
assert.strictEqual(a, 7);

a = '../../bin/js/tests/34.plez.js'.import();
assert.strictEqual(a, 24);

a = '../../bin/js/tests/35.plez.js'.import();
assert.strictEqual(a, 5);

a = '../../bin/js/tests/obj4.plez.js'.import();
assert.strictEqual(a, 'I am 0I am 1I am 2');

a = '../../bin/js/tests/obj5.plez.js'.import();
assert.strictEqual(a, 'I am 0I am 1I am 4');

a = '../../bin/js/tests/obj6.plez.js'.import();
assert.strictEqual(JSON.stringify(a), '["Dog","Animal",1,"a","I am 0, dog"]');

a = '../../bin/js/tests/obj7.plez.js'.import();
assert.strictEqual(a, 1.1700876970971783);

a = '../../bin/js/tests/obj8.plez.js'.import();
assert.strictEqual(a, 1.3108557450190208);

a = '../../bin/js/tests/obj9.plez.js'.import();
assert.strictEqual(a, 'I am Adam\nI am Bob, my notes are: [5]\n');

a = '../../bin/js/tests/obj10.plez.js'.import();
assert.strictEqual(a, 'I am Adam\nI am Bob, my notes are: [4]\nI am Clint\nI am working\nI am Dane, my notes are: []\nI am working\n');
