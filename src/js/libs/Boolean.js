Boolean.prototype['?'] = function(pair) {
    return this.toString() === 'true' ? pair.key : pair.value;
}

Boolean.prototype['&'] = function(condition) {
    return this.toString() === 'true' && condition;
}

Boolean.prototype['|'] = function(condition) {
    return this.toString() === 'true' || condition;
}
