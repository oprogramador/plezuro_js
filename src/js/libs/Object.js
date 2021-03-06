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
        console.log(this.toString());
    } catch(e) {
        print(this.toString());
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

Object.prototype[':'] = function(x) {
    return new Pair(this, x);
}

Object.isNull = function(x) {
    return x === null;
}

Object.isUndefined = function(x) {
    return typeof x === 'undefined';
}

var _jQ = function() {
    return jQuery(this.constructor.name === 'String' ? this.toString(): this);
}
