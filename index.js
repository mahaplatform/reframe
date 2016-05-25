"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tools = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("./collection/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reframe = function () {
  function Reframe() {
    _classCallCheck(this, Reframe);
  }

  _createClass(Reframe, null, [{
    key: "confirm",
    value: function confirm() {
      console.log("Congratulations, Reframe is working.");
    }
  }]);

  return Reframe;
}();

exports.default = Reframe;

var Tools = exports.Tools = function () {
  function Tools() {
    _classCallCheck(this, Tools);
  }

  _createClass(Tools, null, [{
    key: "purgeTableVisibility",
    value: function purgeTableVisibility() {
      _index2.default.purgeVisibility();
    }
  }]);

  return Tools;
}();