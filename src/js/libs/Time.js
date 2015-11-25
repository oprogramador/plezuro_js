if(typeof performance === 'undefined') performance = function() {}
if(typeof performance.now === 'undefined') {
    var microtime = require('microtime');
    performance.now = function() {
        return microtime.now() / 1000000;
    }
}
