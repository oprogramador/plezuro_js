String.prototype.import = function() {
    return require(this.toString()).apply(null, [this.toString()].concat(arguments.toArray()));
}

String.prototype.__add = function(x) {
    return this + x;
}

String.prototype.len = function(x) {
    return this.length;
}
