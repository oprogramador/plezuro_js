require('../../bin/js/all.js');

a = '../../bin/js/1.ml.js'.import();
assert.equal(JSON.stringify(a), '["21318.843333333334abcabc\\nxyzuu\'bbooommmmmcvvfg\'ee\'wwwww\\"www\\nvvvww\\"ddd\\"\\nwef",43]')

a = '../../bin/js/2.ml.js'.import();
assert.equal(a, 22);

a = '../../bin/js/3.ml.js'.import();
assert.equal(a, 1024);

a = '../../bin/js/4.ml.js'.import();
assert.equal(JSON.stringify(a), '[14,[5,52,21212,33]]');

a = '../../bin/js/5.ml.js'.import();
assert.equal(a.constructor.name, 'Number');
assert.ok(a >= 0);

a = '../../bin/js/6.ml.js'.import();
assert.equal(JSON.stringify(a), '[[1,3,20,3],{"abc":21,"oo":[2,3]}]');

a = '../../bin/js/7.ml.js'.import();
assert.equal(JSON.stringify(a), '[["xx","oo","pp"],null]');
assert.equal(JSON.stringify(a[1]()), '[["xx","oo","pp"],["xx","oo","pp"]]');

a = '../../bin/js/8.ml.js'.import();
assert.equal(a()()(), 3);

a = '../../bin/js/9.ml.js'.import();
assert.equal(JSON.stringify(a), '[[[["a",123],["ghj",[9,3]],[[90,3],"oo"]],[["a",123],["ghj",[9,3]],[[90,3],"oo"]]]]');

a = '../../bin/js/10.ml.js'.import();
assert.equal(a, 4484.833333333334);

a = '../../bin/js/11.ml.js'.import();
assert.equal(a, '21.75');

a = '../../bin/js/12.ml.js'.import();
assert.equal(a.constructor.name, 'Null');

a = '../../bin/js/13.ml.js'.import();
assert.equal(JSON.stringify(a), '[1,2,31313,2]');

a = '../../bin/js/14.ml.js'.import();
assert.equal(JSON.stringify(a), '[1,2,31313,2]');

a = '../../bin/js/15.ml.js'.import();
assert.equal(JSON.stringify(a), '[null,null,null]');

a = '../../bin/js/16.ml.js'.import();
assert.strictEqual(a.pos, 11);
assert.strictEqual(a.line, 2);
assert.strictEqual(a.file, '16.ml');
assert.strictEqual(a.dir, '/home/pierre/pierre_copy/programming/java/plezuro_js/bin/java/../../src/plezuro');

try {
    '../../bin/js/17.ml.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__OperatorAfterOperatorException');
   assert.strictEqual(e.getLineNr(), 0);
   assert.strictEqual(e.getPosition(), 3);
}

try {
    '../../bin/js/18.ml.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__ValueAfterValueException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 3);
}

try {
    '../../bin/js/19.ml.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__BracketStackException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 6);
}

try {
    '../../bin/js/20.ml.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__BracketStackException');
   assert.strictEqual(e.getLineNr(), 0);
   assert.strictEqual(e.getPosition(), 11);
}

try {
    '../../bin/js/21.ml.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__BracketStackException');
   assert.strictEqual(e.getLineNr(), 0);
   assert.strictEqual(e.getPosition(), 13);
}

try {
    '../../bin/js/22.ml.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__OperatorAfterBracketOpenException');
   assert.strictEqual(e.getLineNr(), 2);
   assert.strictEqual(e.getPosition(), 5);
}

try {
    '../../bin/js/23.ml.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__OperatorBeforeBracketCloseException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 12);
}

try {
    '../../bin/js/24.ml.js'.import();
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__OperatorAfterBracketCloseException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 4);
}

a = '../../bin/js/26.ml.js'.import(2,9,87,7,6,777);
assert.strictEqual(JSON.stringify(a), '[["../../bin/js/26.ml.js",2,9,87,7,6,777],20,87.22222222222223]');

a = '../../bin/js/primes.ml.js'.import(100);
assert.strictEqual(a, 541);

a = '../../bin/js/27.ml.js'.import(2,9,87,7,6,777);
assert.strictEqual(JSON.stringify(a), '["wfwfwfe is not defined","blabla"]');

a = '../../bin/js/28.ml.js'.import(9);
assert.strictEqual(JSON.stringify(a), '[189,"B"]');

a = '../../bin/js/28.ml.js'.import(40);
assert.strictEqual(JSON.stringify(a), '[22,"A"]');

a = '../../bin/js/28.ml.js'.import(15);
assert.strictEqual(JSON.stringify(a), '[7,"D"]');

a = '../../bin/js/28.ml.js'.import(17);
assert.strictEqual(JSON.stringify(a), '[336,"C"]');

a = '../../bin/js/29.ml.js'.import();
assert.strictEqual(a, 112);

a = '../../bin/js/30.ml.js'.import();
assert.strictEqual(a, 24);

a = '../../bin/js/obj1.ml.js'.import();
assert.strictEqual(a, 181);

a = '../../bin/js/obj2.ml.js'.import();
assert.strictEqual(JSON.stringify(a), '[181,"a=90"]');
