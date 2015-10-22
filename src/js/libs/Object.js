Object.prototype.__index = function(x) {
    return this[x];
}

Object.prototype.keys = function() {
    return Object.keys(this);
}

Object.prototype.has = function(x) {
    return typeof this[x] !== 'undefined';
}

Object.prototype.jsonStr = function(x) {
    return JSON.stringify(this);
}

Object.prototype.callM = function() {
    var args = arguments.toArray();
    if(args.length < 1) return undefined;

    var methodName = args.shift();
    if(typeof methodName !== 'string') return undefined;

    var f = this[methodName];
    if(typeof f !== 'function') return undefined;

    return f.apply(this, args);
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

Object.prototype.remove = function(x) {
    delete this[x];
}

Object.prototype.__call = function(methodName) {
  var args = Array.prototype.slice.call(arguments);
  var method = this.getMyClass().findMethod(methodName);
  return method.apply(this, args);
}

Object.is_null = function(x) {
    return x === null;
}

is_null = Object.is_null;

Object.is_undefined = function(x) {
    return typeof x === 'undefined';
}

is_undefined = Object.is_undefined;
