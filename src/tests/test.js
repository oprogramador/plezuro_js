a = require('../../bin/js/1.ml.js');
assert.equal(JSON.stringify(a), '["21318.843333333334abcabc\\nxyzuu\'bbooommmmmcvvfg\'ee\'wwwww\\"www\\nvvvww\\"ddd\\"\\nwef",43]')

a = require('../../bin/js/2.ml.js');
assert.equal(a, 22);

a = require('../../bin/js/3.ml.js');
assert.equal(a, 1024);

a = require('../../bin/js/4.ml.js');
assert.equal(JSON.stringify(a), '[14,[5,52,21212,33]]');

a = require('../../bin/js/5.ml.js');
assert.equal(a.constructor.name, 'Number');
assert.ok(a >= 0);

a = require('../../bin/js/6.ml.js');
assert.equal(JSON.stringify(a), '[[1,3,20],[]]');

a = require('../../bin/js/7.ml.js');
assert.equal(JSON.stringify(a), '[["xx","oo","pp"],null]');
assert.equal(JSON.stringify(a[1]()), '[["xx","oo","pp"],["xx","oo","pp"]]');

a = require('../../bin/js/8.ml.js');
assert.equal(a()()(), 3);

a = require('../../bin/js/9.ml.js');
assert.equal(JSON.stringify(a), '[[[["a",123],["ghj",[9,3]],[[90,3],"oo"]],[["a",123],["ghj",[9,3]],[[90,3],"oo"]]]]');

a = require('../../bin/js/10.ml.js');
assert.equal(a, 4484.833333333334);

a = require('../../bin/js/11.ml.js');
assert.equal(a, '21.75');

a = require('../../bin/js/12.ml.js');
assert.equal(a.constructor.name, 'Null');

a = require('../../bin/js/13.ml.js');
assert.equal(JSON.stringify(a), '[1,2,31313,2]');

a = require('../../bin/js/14.ml.js');
assert.equal(JSON.stringify(a), '[1,2,31313,2]');

a = require('../../bin/js/15.ml.js');
assert.equal(JSON.stringify(a), '[null,null,null]');

a = require('../../bin/js/16.ml.js');
assert.strictEqual(a.pos, 11);
assert.strictEqual(a.line, 2);
assert.strictEqual(a.file, '16.ml');
assert.strictEqual(a.dir, '/home/pierre/pierre_copy/programming/java/plezuro_js/bin/java/../../src/plezuro');

try {
    require('../../bin/js/17.ml.js');
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__OperatorAfterOperatorException');
   assert.strictEqual(e.getLineNr(), 0);
   assert.strictEqual(e.getPosition(), 4);
}

try {
    require('../../bin/js/18.ml.js');
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__ValueAfterValueException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 3);
}

try {
    require('../../bin/js/19.ml.js');
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__BracketStackException');
   assert.strictEqual(e.getLineNr(), 1);
   assert.strictEqual(e.getPosition(), 6);
}

try {
    require('../../bin/js/20.ml.js');
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__BracketStackException');
   assert.strictEqual(e.getLineNr(), 0);
   assert.strictEqual(e.getPosition(), 11);
}

try {
    require('../../bin/js/21.ml.js');
    assert.fail('should throw an exception');
} catch(e) {
   assert.strictEqual(e.constructor.name, 'mondo__invalidToken__BracketStackException');
   assert.strictEqual(e.getLineNr(), 0);
   assert.strictEqual(e.getPosition(), 13);
}
