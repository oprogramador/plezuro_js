if(typeof require === 'undefined') var require = function(name) {
    var f = function() {
        throw new Error('You cannot use '+name+' because require is not defined');
    }
    return f;
};
if(typeof Set === 'undefined') var Set = require('collections/set');
if(typeof Map === 'undefined') var Map = require('collections/map');
function Dictionary(args) {
    var list = []; 
    for(var i = 0; i < args.length - 1; i += 2) {
        list.push([args[i], args[i+1]]);
    }
    return Map.apply(this, [list]);
}

Dictionary.prototype = Object.create(Map.prototype);
Array.prototype.len = function(x) {
    return this.length;
}

Array.prototype.each = function(f) {
    var res;
    for(var i = 0; i < this.length; i++) {
        res = f(this[i]);
    }
    return res;
}
function Module(params) {
}

(function() {
    function mergeObject(a, b) {
        var keys = Object.keys(b);
        for(var i = 0; i < keys.length; i++) {
            a[keys[i]] = b[keys[i]];
        }
        return a;
    }

    function mergeObjects() {
        var result = {};
        for(var i = 0; i < arguments.length; i++) {
            var object = arguments[i];
            var keys = Object.keys(object);
            for(var k = 0; k < keys.length; k++) {
                result[keys[k]] = object[keys[k]];
            }
        }
        return result;
    }

    function copyObject(ob) {
        var result = {}
        var keys = Object.keys(ob);
        for(var i = 0; i < keys.length; i++) {
            result[keys[i]] = ob[keys[i]];
        }
        return result;
    }

    (function() {
        var BasicModule = new Module;

        BasicModule.className = 'BasicModule';
        BasicModule.namespace = null;
        BasicModule.parents = [];
        BasicModule.fields = {};
        BasicModule.staticMethods = {};
        BasicModule.methods = {
            init: function(params) {
                if(!this.fields) this.fields = {}
                mergeObject(this.fields, params);
            }
        }
        BasicModule.children = [];
        addMethodsToModule(BasicModule);

        Module.BasicModule = BasicModule;
    })();

    Module.init = function(that, params) {
        function init() {
            params = params || {};
            that.className = params.name;
            that.parents = params.parents || [Module.BasicModule];
            that.namespace = params.namespace || Module.BasicModule || that;
            that.fields = params.staticFields || {};
            that.staticMethods = params.staticMethods || {};
            that.methods = params.methods || {};
            if(!that.methods.init) that.methods.init = function(params) {
                for(var i = 0; i < that.parents.length; i++) {
                    that.parents[i].methods.init.call(this, params);
                }
            }
            that.children = [];

            bindToParents();
            bindToNamespace();
            createPrototype();
            createStaticMethods();
            mergeObject(that.fields, that.staticMethods);
            mergeObject(that.fields, that.methods);
        }

        function createStaticMethods() {
            for(var key in that.staticMethods) {
                that[key] = that.staticMethods[key];
            }
        }

        function createPrototype() {
            that.allMethods = {};
            for(var i = 0; i < that.parents.length; i++) {
                for(var key in that.parents[i].methods) {
                    that.allMethods[key] = that.parents[i].methods[key];
                }
            }
            for(var key in that.methods) {
                that.allMethods[key] = that.methods[key];
            }
            for(var key in that.allMethods) {
                that.prototype[key] = that.allMethods[key];
            }
        }

        function bindToParents() {
            for(var i = 0; i < that.parents.length; i++) {
                that.parents[i].children.push(that);
            }
        }

        function bindToNamespace() {
            that.namespace.fields[that.className] = that;
        }

        init();
    }

    function addMethodsToModule (module) {
        module.new = function() {
            var args = Array.prototype.slice.call(arguments);
            var that = this;
            var object = new this;
            object.getMyClass = function() { return that; }
            object.fields = {};
            if(this.methods.init) this.methods.init.apply(object, args);
            return object;
        }
        module.findMethod = function(name) {
            if(typeof(module.methods[name]) !== 'undefined') return module.methods[name];
            for(var i = 0; i < module.parents.length; i++) {
                var result = module.parents[i].findMethod(name);
                if(result !== null) return result;
            }
            return null;
        }
        module.addMethod = function(name, method) {
            transmitInheritance(module, name, method);
            module.methods[name] = method;
            
            function transmitInheritance(mod, name, method) {
                if(typeof mod.methods[name] !== 'undefined') return false;
                mod.allMethods[name] = method;
                mod.prototype[name] = method;
                for(var i = 0; i < mod.children.length; i++) {
                    transmitInheritance(mod.children[i], name, method);
                }
                return true;
            }
        }
        module.removeMethod = function(name) {
            delete module.methods[name];
            method = module.findMethod(name);
            if(method === null) {
                transmitInheritance(module, name);
            } else {
                module.addMethod(name, method);
                delete module.methods[name];
            }
            
            function transmitInheritance(mod, name) {
                if(typeof mod.methods[name] !== 'undefined') return false;
                delete mod.allMethods[name];
                delete mod.prototype[name];
                for(var i = 0; i < mod.children.length; i++) {
                    transmitInheritance(mod.children[i], name);
                }
                return true;
            }
        }
    }

    Module.create = function(params) {
        var module = function(){};
        Module.init(module, params);
        addMethodsToModule(module);

        return module;
    }
})();
function BooleanOper(value) {
    this.value = value;
}

Function.prototype.if = function(cmd) {
    var result = this() === true;
    if(result) cmd();
    return new BooleanOper(result);
}

BooleanOper.prototype.elif = function(cond, cmd) {
    var myres = cond() === true;
    var result = !this.value && myres;
    if(result) cmd();
    return new BooleanOper(this.value || myres);
}

BooleanOper.prototype.else = function(cmd) {
    var result = !this.value;
    if(result) cmd();
    return new BooleanOper(result);
}

Function.prototype.do = function() {
    while(this());
}

Function.prototype.while = function(loop) {
    while(this()) {
        loop();
    }
}

Function.prototype.new = function() {
    return new (this.bind.apply(this, [null].concat(arguments.toArray())));
}

Function.prototype.try = function(callback) {
    try {
        this();
    } catch(e) {
        callback.call(e);
    }
}
Number.prototype.randStr = function() {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var res = '';
    for(var i = 0; i < this; i++) {
        res += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return res;
}

Number.prototype.sin = function() {
    return Math.sin(this);
}

Number.prototype.cos = function() {
    return Math.cos(this);
}

Number.prototype.tan = function() {
    return Math.tan(this);
}

Number.prototype['+'] = function(x) {
    return this + x;
}

Number.prototype['-'] = function(x) {
    return this - x;
}

Number.prototype['*'] = function(x) {
    return this * x;
}

Number.prototype['/'] = function(x) {
    return this / x;
}

Number.prototype['%'] = function(x) {
    return this % x;
}

Number.prototype['^'] = function(x) {
    return Math.pow(this, x);
}
Object.prototype.__index = function(x) {
    return this[x];
}

Object.prototype.keys = function() {
    return Object.keys(this);
}

Object.prototype.has = function(x) {
    return typeof this[x] !== 'undefined';
}

Object.prototype.jsonStr = function(x) {
    return JSON.stringify(this);
}

Object.prototype.callM = function() {
    var args = arguments.toArray();
    if(args.length < 1) return undefined;

    var methodName = args.shift();
    if(typeof methodName !== 'string') return undefined;

    var f = this[methodName];
    if(typeof f !== 'function') return undefined;

    return f.apply(this, args);
}

Object.prototype.dumpl = function() {
    try {
        console.log(this);
    } catch(e) {
        print(this);
    }
    return this.toString();
}

Object.prototype.exports = function(module) {
    if(typeof module === 'object' && module !== null) module.exports = this;
    return this;
}

Object.prototype.class = function() {
    return this.constructor;
}

Object.prototype.toArray = function() {
    var that = this;
    return Object.keys(this).map(function(x) {
        return that[x];
    });
}

Object.prototype.remove = function(x) {
    delete this[x];
}

Object.prototype.__call = function(methodName) {
  var args = Array.prototype.slice.call(arguments);
  var method = this.getMyClass().findMethod(methodName);
  return method.apply(this, args);
}

Object.is_null = function(x) {
    return x === null;
}

is_null = Object.is_null;

Object.is_undefined = function(x) {
    return typeof x === 'undefined';
}

is_undefined = Object.is_undefined;
function Null() {

}
function AssocArray(args) {
    for(var i = 0; i < args.length - 1; i += 2) {
        this[args[i]] = args[i+1];
    }
}

AssocArray.prototype = Object.create(Object.prototype);
AssocArray.prototype.constructor = AssocArray;

AssocArray.prototype.toJSON = function() {
    var keys = Object.keys(this);
    var res = {}
    for(var i = 0; i < keys.length; i++) {
        res[keys[i]] = this[keys[i]];
    }
    return res;
}
function InvalidTokenException(filename, lineNr, position, message) {
    Error.apply(this, [message]);

    function getFilename() {
        return filename;
    }

    function getLineNr() {
        return lineNr;
    }

    function getPosition() {
        return position;
    }

    this.getFilename = getFilename;
    this.getLineNr = getLineNr;
    this.getPosition = getPosition;
}

InvalidTokenException.prototype = Object.create(Error.prototype);
InvalidTokenException.prototype.constructor = InvalidTokenException;

InvalidTokenException.create = function(className, filename, lineNr, position, message) {
    var constructor;

    function init() {
        if(!/^[A-Za-z_][A-Za-z_0-9]*Exception$/.test(className)) throw new Error('invalid class name: '+className);
        eval( 'constructor = function ' + className + ' () {' +
            'InvalidTokenException.apply(this, [filename, lineNr, position, message]);' +
        '}' );
        constructor.prototype = Object.create(InvalidTokenException.prototype);
        constructor.prototype.constructor = constructor;
    }

    init();
    return new constructor();
}
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
Set.prototype.len = function() {
    return this.length;
}
Error.prototype.throw = function() {
    throw this;
}
