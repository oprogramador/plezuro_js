function Module(params) {
}

(function() {
    var BasicModule = new Module;

    BasicModule.name = 'BasicModule';
    BasicModule.namespace = null;
    BasicModule.parents = [];
    BasicModule.staticFields = {};
    BasicModule.methods = {
        init: function(obj, params) {
            obj.fields = params;
        }
    }
    BasicModule.children = [];

    Module.BasicModule = BasicModule;
})();

Module.init = function(that, params) {
    function init() {
        params = params || {};
        that.name = params.name;
        that.parents = params.parents || [Module.BasicModule];
        that.namespace = params.namespace || Module.BasicModule || that;
        that.staticFields = params.staticFields || {};
        that.staticMethods = params.staticMethods || {};
        that.methods = params.methods || {};
        if(!that.methods.init) that.methods.init = function(obj, params) {
            for(var i = 0; i < that.parents.length; i++) {
                that.parents[i].methods.init(obj, params);
            }
        }
        that.children = [];

        bindToParents();
        bindToNamespace();
        createPrototype();
    }

    function createPrototype() {
      for(var key in that.methods) {
          that.prototype[key] = that.methods[key];
      }
    }

    function bindToParents() {
        for(var i = 0; i < that.parents.length; i++) {
            that.parents[i].children.push(that);
        }
    }

    function bindToNamespace() {
        that.namespace.staticFields[that.name] = that;
    }

    init();
}

Module.create = function(params) {
    var module = function(){};
    Module.init(module, params);
    return module;
}

Module.prototype.new = function() {
    var args = Array.prototype.slice.call(arguments);
    var that = this;
    var object = new this;
    object.getMyClass = function() { return that; }
    args.unshift(object);
    if(this.methods.init) this.methods.init.apply(null, args);
    return object;
}

Module.prototype.findMethod = function(name) {
    if(typeof(this.methods[name]) !== 'undefined') return this.methods[name];
    for(var i = 0; i < this.parents.length; i++) {
        var result = this.parents[i].findMethod(name);
        if(result !== null) return result;
    }
    return null;
}
