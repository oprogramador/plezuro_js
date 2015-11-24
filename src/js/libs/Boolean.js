Boolean.prototype['?'] = function(pair) {
    return this.toString() === 'true' ? pair.key : pair.value;
}
