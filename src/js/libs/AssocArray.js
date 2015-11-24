function AssocArray() {
    for(var i = 0; i < arguments.length; i ++) {
        this[arguments[i].key] = arguments[i].value;
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
