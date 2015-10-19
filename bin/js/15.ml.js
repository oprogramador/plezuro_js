(function() {var x;x = (new Number(12));
var y;y = (new String('ddd'));
var z;z = [x, y]; return  [x.__call('class'), y.__call('class'), z.__call('class')]
}).exports(typeof module !== 'undefined' ? module : null)