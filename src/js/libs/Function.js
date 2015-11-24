function BooleanOper(value) {
    this.value = value;
}

Function.prototype.forEach = function() {
    var res;
    for(var i = 0; ; i++) {
        var shouldBreak = true;
        var args = []
        for(var k = 0; k < arguments.length; k++) {
            if(i < arguments[k].length) shouldBreak = false;
            args.push(i < arguments[k].length ? arguments[k][i] : new Null());
        }
        if(shouldBreak) break;

        res = this.apply(i, args);
    }
    return res;
}

Function.prototype.if = function(cmd) {
    var result = this() === true;
    if(result) cmd();
    return new BooleanOper(result);
}

BooleanOper.prototype.elif = function(cond, cmd) {
    var myres = cond() === true;
    var result = !this.value && myres;
    if(result) cmd();
    return new BooleanOper(this.value || myres);
}

BooleanOper.prototype.else = function(cmd) {
    var result = !this.value;
    if(result) cmd();
    return new BooleanOper(result);
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
    return new (this.bind.apply(this, [null].concat(arguments.toArray())));
}

Function.prototype.try = function(callback) {
    try {
        this();
    } catch(e) {
        callback.call(e);
    }
}
