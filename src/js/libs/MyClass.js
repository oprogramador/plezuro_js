function MyClass(params) {
  var that = this;

  function init() {
    params = params || {};
    that.name = params.name || 'Global';
    that.parents = params.parents || [];
    that.namespace = params.namespace || MyClass.Global || that;
    that.staticFields = params.staticFields || {};
    that.staticMethods = params.staticMethods || {};
    that.methods = params.methods || {};
    that.children = [];

    bindToParents();
    bindToNamespace();
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

MyClass.Global = new MyClass;

MyClass.prototype.findMethod = function(name) {
  //if(typeof(
}
