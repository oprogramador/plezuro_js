RegExp.prototype["=~"] = function(x) {
    return this.test(x);
}
