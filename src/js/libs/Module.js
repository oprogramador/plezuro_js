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
