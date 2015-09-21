if(typeof require === 'undefined') var require = function(name) {
    var f = function() {
        throw new Error('You cannot use '+name+' because require is not defined');
    }
    return f;
};
if(typeof Set === 'undefined') var Set = require('collections/set');
if(typeof Map === 'undefined') var Map = require('collections/map');
