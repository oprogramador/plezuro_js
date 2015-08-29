String.prototype.load = function(name, callback) {
    $.get(name, function(data) {
        callback(data);
    });
}

String.prototype.__add = function(x) {
    return this + x;
}

String.prototype.len = function(x) {
    return this.length;
}
