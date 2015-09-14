Function.prototype.if = function(cmd) {
    var result = this();
    if(result) cmd();
}

Function.prototype.do = function() {
    while(this());
}

Function.prototype.while = function(loop) {
    while(this()) {
        loop();
    }
}

Function.prototype.new = function() {
    return Object.create(this.prototype);
}

Function.prototype.try = function(callback) {
    try {
        this();
    } catch(e) {
        callback(e);
    }
}
