if(typeof Set === 'undefined') var Set = require('collections/set');
if(typeof Map === 'undefined') var Map = require('collections/map');
function Dictionary(args) {
    var list = []; 
    for(var i = 0; i < args.length - 1; i += 2) {
        list.push([args[i], args[i+1]]);
    }
    return Map.apply(this, [list]);
}

Dictionary.prototype = Object.create(Map.prototype);
Array.prototype.len = function(x) {
    return this.length;
}
Function.prototype.if = function(cmd) {
    var result = this();
    if(result) cmd();
}

Function.prototype.do = function() {
    while(this());
}

Function.prototype.while = function(loop) {
    while(this()) {
        loop();
    }
}
Number.prototype.sin = function() {
    return Math.sin(this);
}

Number.prototype.cos = function() {
    return Math.cos(this);
}

Number.prototype.tan = function() {
    return Math.tan(this);
}

Number.prototype.__add = function(x) {
    return this + x;
}

Number.prototype.__sub = function(x) {
    return this - x;
}

Number.prototype.__mul = function(x) {
    return this * x;
}

Number.prototype.__div = function(x) {
    return this / x;
}

Number.prototype.__mod = function(x) {
    return this % x;
}

Number.prototype.__pow = function(x) {
    return Math.pow(this, x);
}

Number.prototype.__incr = function() {
    return this;
}
Object.prototype.__index = function(x) {
    return this[x];
}

Object.prototype.dumpl = function() {
    try {
        console.log(this);
    } catch(e) {
        print(this);
    }
    return this.toString();
}

Object.prototype.exports = function(module) {
    if(typeof module === 'object' && module !== null) module.exports = this;
    return this;
}

Object.prototype.class = function() {
    return this.constructor;
}
function Null() {

}
function AssocArray(args) {
    var list = []; 
    for(var i = 0; i < args.length - 1; i += 2) {
        list[args[i]] = args[i+1];
    }
    return Object.apply(this, [list]);
}

AssocArray.prototype = Object.create(Object.prototype);
function InvalidTokenException(filename, lineNr, position, message) {
    Error.apply(this, [message]);

    function getFilename() {
        return filename;
    }

    function getLineNr() {
        return lineNr;
    }

    function getPosition() {
        return position;
    }

    this.getFilename = getFilename;
    this.getLineNr = getLineNr;
    this.getPosition = getPosition;
}

InvalidTokenException.prototype = Object.create(Error.prototype);
InvalidTokenException.prototype.constructor = InvalidTokenException;

InvalidTokenException.create = function(className, filename, lineNr, position, message) {
    var constructor;

    function init() {
        if(!/^[A-Za-z_][A-Za-z_0-9]*Exception$/.test(className)) throw new Error('invalid class name: '+className);
        eval( 'constructor = function ' + className + ' () {' +
            'InvalidTokenException.apply(this, [filename, lineNr, position, message]);' +
        '}' );
        constructor.prototype = Object.create(InvalidTokenException.prototype);
        constructor.prototype.constructor = constructor;
    }

    init();
    return new constructor();
}
String.prototype.load = function(name, callback) {
    $.get(name, function(data) {
        callback(data);
    });
}

String.prototype.import = function() {
    return require(this.toString());
}

String.prototype.__add = function(x) {
    return this + x;
}

String.prototype.len = function(x) {
    return this.length;
}
