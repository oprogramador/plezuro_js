function Dictionary(args) {
    var list = []; 
    for(var i = 0; i < args.length - 1; i += 2) {
        list.push([args[i], args[i+1]]);
    }
    return Map.apply(this, [list]);
}

Dictionary.prototype = Object.create(Map.prototype);
