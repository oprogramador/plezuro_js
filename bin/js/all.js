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
function BooleanOper(value) {
    this.value = value;
}

Function.prototype.if = function(cmd) {
    var result = this() === true;
    if(result) cmd();
    return new BooleanOper(result);
}

BooleanOper.prototype.elif = function(cond, cmd) {
    var myres = cond() === true;
    var result = !this.value && myres;
    if(result) cmd();
    return new BooleanOper(this.value || myres);
}

BooleanOper.prototype.else = function(cmd) {
    var result = !this.value;
    if(result) cmd();
    return new BooleanOper(result);
}

Function.prototype.do = function() {
    while(this());
}

Function.prototype.while = function(loop) {
    while(this()) {
        loop();
    }
}

Function.prototype.new = function() {
    return new (this.bind.apply(this, [null].concat(arguments.toArray())));
}

Function.prototype.try = function(callback) {
    try {
        this();
    } catch(e) {
        callback(e);
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

Object.prototype.toArray = function() {
    var that = this;
    return Object.keys(this).map(function(x) {
        return that[x];
    });
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
String.prototype.import = function() {
    return require(this.toString()).apply(null, [this.toString()].concat(arguments.toArray()));
}

String.prototype.__add = function(x) {
    return this + x;
}

String.prototype.len = function(x) {
    return this.length;
}
Error.prototype.throw = function() {
    throw this;
}
