'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var usec = {

    'u': 1,
    '': 1000,
    's': 1000,
    'm': 60000,
    'h': 3600000,
    'd': 86400000,
    'w': 604800000

};

function to_ms(tc, options) {

    var rollup = function rollup() {
        var prev = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var _ref = arguments[1];
        var num = _ref.num;
        var frame = _ref.frame;
        return num * usec[frame] + prev;
    };

    return tc.match(/\d+[whdmsu]?/g).map(function (s) {
        var num = '' + s.match(/\d+/),
            frame = s.substr(num.length);
        return { num: parseInt(num, 10), frame: frame };
    }).reduce(rollup, 0);
}

exports.usec = usec;
exports.to_ms = to_ms;
