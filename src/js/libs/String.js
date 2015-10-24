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

String.prototype.fromJson = function() {
    return JSON.parse(this);
}

String.prototype['+'] = function(x) {
    return this + x;
}

String.prototype.len = function(x) {
    return this.length;
}
