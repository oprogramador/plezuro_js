String.prototype.load = function(name, callback) {
    $.get(name, function(data) {
        callback(data);
    });
}
