function InvalidTokenException(lineNr, position, message) {
    Error.apply(this, [message]);

    function getLineNr() {
        return lineNr;
    }

    function getPosition() {
        return position;
    }


    this.getLineNr = getLineNr;
    this.getPosition = getPosition;
}

InvalidTokenException.prototype = Object.create(Error.prototype);
InvalidTokenException.prototype.constructor = InvalidTokenException;

InvalidTokenException.create = function(className, lineNr, position, message) {
    var constructor;

    function init() {
        if(!/^[A-Za-z_][A-Za-z_0-9]*Exception$/.test(className)) throw new Error('invalid class name');
        eval( 'constructor = function ' + className + ' () {' +
            'InvalidTokenException.apply(this, [lineNr, position, message]);' +
        '}' );
        constructor.prototype = Object.create(InvalidTokenException.prototype);
        constructor.prototype.constructor = constructor;
    }

    init();
    return new constructor();
}
