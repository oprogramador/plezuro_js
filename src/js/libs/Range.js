function Range(a, b, c) {
    this.begin = a;
    if(typeof c === 'undefined') {
        this.step = 1;
        this.end = b;
    } else {
        this.step = b;
        this.end = c;
    }
}

Range.prototype['..'] = function(x) {
    return new Range(this.begin, this.end, x);
}

Range.prototype.each = function(f) {
    var n = (this.end - this.begin) / (this.step) + 1;
    var res;
    for(var i = 0, x = this.begin; x <= this.end; i++, x += this.step) {
        res = f.call(i, x);
    }
    return res;
}
