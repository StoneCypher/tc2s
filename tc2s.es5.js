'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ref2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var basis = {

  's': 1,
  'm': 60,
  'h': 3600,
  'd': 86400,
  'w': 604800

};

function extend_basis(extension) {
  var specials = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];


  var new_basis = {};
  Object.keys(basis).map(function (k) {
    return new_basis[k] = basis[k] * extension;
  });

  specials.map(function (_ref) {
    var key = _ref.key;
    var val = _ref.val;
    return new_basis[key] = val;
  });

  return new_basis;
}

var basis_usec = extend_basis(1000, [(_ref2 = { key: 'u', val: 1 }, _defineProperty(_ref2, 'key', ''), _defineProperty(_ref2, 'val', 1000), _ref2)]),
    basis_60frames = extend_basis(60, [{ key: '', val: 1 }]);

function to_tick(tc, tick_speed) {
  var specials = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];


  var code_chart = extend_basis(tick_speed, specials),
      rollup = function rollup() {
    var prev = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var _ref3 = arguments[1];
    var num = _ref3.num;
    var frame = _ref3.frame;
    return num * code_chart[frame] + prev;
  };

  return tc.match(/\d+[whdmsu]?/g).map(function (s) {
    var num = '' + s.match(/\d+/),
        frame = s.substr(num.length);
    return { num: parseInt(num, 10), frame: frame };
  }).reduce(rollup, 0);
}

function to_ms(tc) {
  var _ref4;

  return to_tick(tc, 1000, [(_ref4 = { key: 'u', val: 1 }, _defineProperty(_ref4, 'key', ''), _defineProperty(_ref4, 'val', 1000), _ref4)]);
}

function to_60frames(tc) {
  return to_tick(tc, 60, [{ key: '', val: 1 }]);
}

exports.basis = basis;
exports.basis_usec = basis_usec;
exports.basis_60frames = basis_60frames;
exports.to_tick = to_tick;
exports.to_ms = to_ms;
exports.to_60frames = to_60frames;
