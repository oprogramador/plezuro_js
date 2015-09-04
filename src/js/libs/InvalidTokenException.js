function InvalidTokenException(className, lineNr, position, message) {
    var constructor;

    function init() {
        constructor = function(msg) {
            return new Error(msg);
        }
        constructor.prototype = Object.create(InvalidTokenException.prototype);
        Object.defineProperty(constructor, 'name', {value: className});
    }

    function getLineNr() {
        return lineNr;
    }

    function getPosition() {
        return position;
    }

    init();

    this.getLineNr = getLineNr;
    this.getPosition = getPosition;

    return new constructor(message);
}

//InvalidTokenException.prototype = Object.create(Error.prototype);
