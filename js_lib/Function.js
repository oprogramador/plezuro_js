Function.prototype.if = function(cmd) {
    var result = this();
    if(result) cmd();
}
