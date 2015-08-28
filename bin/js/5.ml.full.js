
function Dictionary(args) {
    var list = []; 
    for(var i = 0; i < args.length - 1; i += 2) {
        list.push([args[i], args[i+1]]);
    }
    return Map.apply(this, [list]);
}

Dictionary.prototype = Object.create(Map.prototype);
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
function importModule(name, callback) {
    $.getScript(name+'.js', function(data, textStatus, jqxhr) {
        callback(eval(data));
    }).fail(function(jqxhr, settings, exception) {
        callback(new Error('failed to load '+name));
    });
}
function AssocArray(args) {
    var list = []; 
    for(var i = 0; i < args.length - 1; i += 2) {
        list[args[i]] = args[i+1];
    }
    return Object.apply(this, [list]);
}

AssocArray.prototype = Object.create(Object.prototype);
String.prototype.load = function(name, callback) {
    $.get(name, function(data) {
        callback(data);
    });
}
var x;x = (21);
x = x.sin().cos().tan() .__add( Math.random());
x
