RegExp.prototype["=~"] = function(x) {
    return this.test(x);
}

RegExp.prototype["!~"] = function(x) {
    return !this.test(x);
}
