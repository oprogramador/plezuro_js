try {
    require('../../bin/js/plezuro.js');

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
    assert.ok(Object.isUndefined(a()));

    a = '../../bin/js/tests/33.plez.js'.import();
    assert.strictEqual(a, 7);

    a = '../../bin/js/tests/34.plez.js'.import();
    assert.strictEqual(a, 24);

    a = '../../bin/js/tests/35.plez.js'.import();
    assert.strictEqual(a, 5);

    try {
        a = '../../bin/js/tests/36.plez.js'.import();
        assert.strictEqual(a, 5);
    } catch(e) {
       assert.strictEqual(e.constructor.name, 'mondo__invalidToken__NonExistentTokenException');
       assert.strictEqual(e.getLineNr(), 0);
       assert.strictEqual(e.getPosition(), 0);
    }

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

    a = '../../bin/js/tests/37.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[1.2e+44,1.78e-21,90000,4.52e-98,13,0,17,1,189,5,3,62186,59,4.14448124890176e-62]');

    a = '../../bin/js/tests/38.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '["ąóœęππœæπœæóø@łweцущцишушщкуصثخهلهخىﻻصثخﻻص",42]');

    a = '../../bin/js/tests/39.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '["abcdabcdabcd",[1,2,5,3,4],[1,2,5,3,4,1,2,5,3,4]]');

    a = '../../bin/js/tests/40.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[32,32]');

    a = '../../bin/js/tests/42.plez.js'.import();
    assert.strictEqual(a, false);

    a = '../../bin/js/tests/43.plez.js'.import();
    assert.strictEqual(a[0].length, 32);
    assert.strictEqual(a[1].length, 10);
    assert.strictEqual(a[2].length, 56);

    a = '../../bin/js/tests/44.plez.js'.import();
    assert.strictEqual(a[0].toString(), '/[a-z]/');
    assert.strictEqual(JSON.stringify(a), '[{},true,true,false,true,false,true,false,true,true,false,true,true,true,true,false,true,false,true,true,true,false,true,true]');

    a = '../../bin/js/tests/45.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '["\\\\","a\\\\","\\\\b","c\\\\d","e\\t","e\'fg","\\\\","\\t","o\\\\","\\\\r","s\\"s"]');

    try {
        '../../bin/js/tests/46.plez.js'.import();
        assert.fail('should throw an exception');
    } catch(e) {
       assert.strictEqual(e.constructor.name, 'mondo__invalidToken__NonExistentTokenException');
       assert.strictEqual(e.getLineNr(), 0);
       assert.strictEqual(e.getPosition(), 17);
    }

    try {
        '../../bin/js/tests/47.plez.js'.import();
        assert.fail('should throw an exception');
    } catch(e) {
       assert.strictEqual(e.constructor.name, 'mondo__invalidToken__NonExistentTokenException');
       assert.strictEqual(e.getLineNr(), 0);
       assert.strictEqual(e.getPosition(), 21);
    }

    try {
        '../../bin/js/tests/48.plez.js'.import();
        assert.fail('should throw an exception');
    } catch(e) {
       assert.strictEqual(e.constructor.name, 'mondo__invalidToken__ValueAfterValueException');
       assert.strictEqual(e.getLineNr(), 1);
       assert.strictEqual(e.getPosition(), 9);
    }

    a = '../../bin/js/tests/49.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[-22,-1,2,-40]');

    a = '../../bin/js/tests/50.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[91,34,11,3,5,20,100,6]');

    a = '../../bin/js/tests/51.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[4,"oioioioioioioioioi",[2,9,31],{}]');
    assert.strictEqual(a[3].constructor.name, 'Null');

    a = '../../bin/js/tests/52.plez.js'.import();
    assert.strictEqual(a.constructor.name, 'Null');

    a = '../../bin/js/tests/53.plez.js'.import();
    assert.strictEqual(a.constructor.name, 'Null');

    a = '../../bin/js/tests/54.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[[12,90,93,24],[-3,2,22,31,999]]');

    a = '../../bin/js/tests/55.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[46,[0,1,2,3]]');

    a = '../../bin/js/tests/56.plez.js'.import();
    assert.strictEqual(a, 'ba');

    a = '../../bin/js/tests/57.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[[19,22,5],[[0,2,90,0,{},4],[1,9,11,{},{},2],[2,{},30,{},{},{}]]]');

    a = '../../bin/js/tests/58.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[[[0,1],[1,8],[2,15],[3,22],[4,29]],[[0,1],[1,2],[2,3],[3,4]]]');

    a = '../../bin/js/tests/59.plez.js'.import();
    assert.strictEqual(a.result(), 21);
    assert.ok(a.time() < 1e-3);
    assert.ok(a.time() > 1e-7);

    a = '../../bin/js/tests/60.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]');

    a = '../../bin/js/tests/61.plez.js'.import();
    assert.strictEqual(JSON.stringify(a), '[[true,true,true,false,true,false,false,false],[true,false,true]]');
} catch(e) {
    if(e.constructor.name === 'AssertionError') throw e;
    console.log(e.constructor.name);
    console.log(e.getFilename());
    console.log(e.getLineNr());
    console.log(e.getPosition());
}
