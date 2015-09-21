function AssocArray(args) {
    for(var i = 0; i < args.length - 1; i += 2) {
        this[args[i]] = args[i+1];
    }
}

AssocArray.prototype = Object.create(Object.prototype);
AssocArray.prototype.constructor = AssocArray;

AssocArray.prototype.toJSON = function() {
    var keys = Object.keys(this);
    var res = {}
    for(var i = 0; i < keys.length; i++) {
        res[keys[i]] = this[keys[i]];
    }
    return res;
}
