Array.prototype.len = function(x) {
    return this.length;
}

Array.prototype.each = function(f) {
    var res;
    for(var i = 0; i < this.length; i++) {
        res = f(this[i]);
    }
    return res;
}

Array.prototype['+'] = function(x) {
    return this.concat(x);
}

Array.prototype['*'] = function(x) {
    var result = [];
    for(var i = 0; i < x; i++) {
        result = Array.prototype['+'].call(result, this);
    }
    return result;
}
