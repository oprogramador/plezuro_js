Number.prototype.randStr = function() {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var res = '';
    for(var i = 0; i < this; i++) {
        res += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return res;
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
