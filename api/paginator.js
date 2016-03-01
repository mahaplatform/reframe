'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paginator = function Paginator(_ref) {
  var _ref$pageQueryParamet = _ref.pageQueryParameter;
  var pageQueryParameter = _ref$pageQueryParamet === undefined ? 'page' : _ref$pageQueryParamet;

  _classCallCheck(this, Paginator);

  this.pageQueryParameter = pageQueryParameter;
};

exports.default = Paginator;