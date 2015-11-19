function PlezuroVariable(x) {
    this.value = x;
}

PlezuroVariable.prototype['+'] = function(x) {
    return new PlezuroVariable(this.value['+'](x.value));
}

PlezuroVariable.prototype['-'] = function(x) {
    return new PlezuroVariable(this.value['-'](x.value));
}

PlezuroVariable.prototype['*'] = function(x) {
    return new PlezuroVariable(this.value['*'](x.value));
}

PlezuroVariable.prototype['/'] = function(x) {
    return new PlezuroVariable(this.value['/'](x.value));
}

PlezuroVariable.prototype['^'] = function(x) {
    return new PlezuroVariable(this.value['^'](x.value));
}
