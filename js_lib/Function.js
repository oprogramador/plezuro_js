Function.prototype.if = function(cmd) {
    var result = this();
    if(result) cmd();
}

Function.prototype.do = function() {
    while(this());
}
