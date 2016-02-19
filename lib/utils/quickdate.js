'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Quickdate = function () {
  function Quickdate() {
    _classCallCheck(this, Quickdate);
  }

  _createClass(Quickdate, null, [{
    key: 'parse',
    value: function parse(qdString) {
      var anchorDate = arguments.length <= 1 || arguments[1] === undefined ? (0, _moment2.default)() : arguments[1];

      if (_lodash2.default.startsWith(qdString, '#')) {
        // Quantized mode
        var unQuantized = qdString.slice(1);

        var qdSegments = this.getSegments(unQuantized);
        var deltas = _lodash2.default.map(qdSegments, this.parseSegment);

        // Get the point in time that's relative to the anchor date, then
        // get the beginning and end of the defined period
        var relativeTime = (0, _moment2.default)(_lodash2.default.reduce(deltas, function (time, delta) {
          time[delta[0]].apply(time, _lodash2.default.rest(delta));
          return time;
        }, (0, _moment2.default)(anchorDate)));

        var period = _lodash2.default.chain(deltas).first().last().value();

        return { start: (0, _moment2.default)(relativeTime).startOf(period), end: (0, _moment2.default)(relativeTime).endOf(period) };
      } else {
        var qdSegments = this.getSegments(qdString);
        var deltas = _lodash2.default.map(qdSegments, this.parseSegment);

        var relativeTime = (0, _moment2.default)(_lodash2.default.reduce(deltas, function (time, delta) {
          time[delta[0]].apply(time, _lodash2.default.rest(delta));
          return time;
        }, (0, _moment2.default)(anchorDate)));

        if (relativeTime.isBefore(anchorDate)) {
          return { start: relativeTime, end: anchorDate };
        } else {
          return { start: anchorDate, end: relativeTime };
        }
      }
    }
  }, {
    key: 'parseSegment',
    value: function parseSegment(seg) {
      // Get details about the segment definition
      var period = seg.slice(-1);
      var interval = seg.slice(1, -1);

      // Handle past range quickdates
      if (_lodash2.default.startsWith(seg, '-')) {
        return ['subtract', parseInt(interval, 10), period];
      }

      // Handle future range quickdates
      if (_lodash2.default.startsWith(seg, '+')) {
        return ['add', parseInt(interval, 10), period];
      }

      // Handle period-to-now range quickdates
      if (_lodash2.default.startsWith(seg, '@')) {
        return ['startOf', period];
      }
    }
  }, {
    key: 'getSegments',
    value: function getSegments(str) {
      // remove whitespace, separate on comma
      return str.replace(/\s+/gi, '').split(',');
    }
  }]);

  return Quickdate;
}();

exports.default = Quickdate;