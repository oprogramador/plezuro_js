function Import() {
    var res;
    var shouldLoad = true;

    function importModule(name) {
        if(shouldLoad) $.get(name+'.js', function(data) {
            res = eval(data);
        }).fail(function(data) {
            res = new Error('failed to load '+name);  
        });
        shouldLoad = false;

        if(res === undefined) setTimeout(importModule, 50);
        return res;
    }

    this.importModule = importModule;
}
