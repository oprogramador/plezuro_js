function Dictionary() {
    var list = []; 
    for(var i = 0; i < arguments.length; i ++) {
        list.push([arguments[i].key, arguments[i].value]);
    }
    return new Map(list);
}

Dictionary.prototype = Object.create(Map.prototype);
