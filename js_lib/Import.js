function importModule(name, callback) {
    $.getScript(name+'.js', function(data, textStatus, jqxhr) {
        callback(eval(data));
    }).fail(function(jqxhr, settings, exception) {
        callback(new Error('failed to load '+name));
    });
}
