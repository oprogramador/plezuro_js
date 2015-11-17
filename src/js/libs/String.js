String.prototype.import = function() {
    if(typeof require !== 'undefined') {
        return require(this.toString()).apply(this.toString(), arguments.toArray());
    } else {
        var src = this;
        function getScript() {
            var script = document.createElement('script');
            script.async = 'async';
            script.src = src;
            script.onload = function() {
                var f = eval(script.innerHTML);
                f(arguments);
            }
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        function load() {
            var req = new XMLHttpRequest();
            req.open('GET', src, true);
            var args = arguments;
            req.onreadystatechange = function() {
                if(req.readyState != 4 || req.status != 200) return;
                var f = eval(req.responseText);
                f(args);
            }
            req.send();
        }
        load(arguments);
    }
}

String.prototype.staticImport = function() {
    return imports[this.toString()].apply(this.toString(), arguments.toArray());
}

String.prototype.fromJson = function() {
    return JSON.parse(this);
}

String.prototype['+'] = function(x) {
    return this + x;
}

String.prototype['*'] = function(x) {
    var result = '';
    for(var i = 0; i < x; i++) {
        result += this;
    }
    return result;
}

String.prototype.len = function(x) {
    return this.length;
}

String.rand = function(n) {
    if(typeof n === 'undefined') n = 32;
    var template = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
    var result = '';
    for(var i = 0; i < n; i++) {
        result += template[Math.floor(Math.random() * template.length)];
    }
    return result;
}
