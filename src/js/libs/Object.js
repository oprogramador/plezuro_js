Object.prototype.__index = function(x) {
    return this[x];
}

Object.prototype.dumpl = function() {
    try {
        console.log(this);
    } catch(e) {
        print(this);
    }
    return this.toString();
}

Object.prototype.exports = function() {
    if(typeof module === 'object') module.exports = this;
    return this;
}
