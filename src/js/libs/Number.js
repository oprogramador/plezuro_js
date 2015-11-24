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

Number.prototype.floor = function() {
    return Math.floor(this);
}

Number.prototype['+'] = function(x) {
    return this + x;
}

Number.prototype['-'] = function(x) {
    return this - x;
}

Number.prototype['*'] = function(x) {
    return this * x;
}

Number.prototype['/'] = function(x) {
    return this / x;
}

Number.prototype['%'] = function(x) {
    return this % x;
}

Number.prototype['^'] = function(x) {
    return Math.pow(this, x);
}

Number.prototype['..'] = function(x) {
    return new Range(this, x);
}
