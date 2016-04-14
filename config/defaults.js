'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultPalette = {
  red: '#db2828',
  orange: '#f2711c',
  yellow: '#b58105',
  olive: '#8abc1e',
  green: '#1ebc30',
  teal: '#10a3a3',
  blue: '#2185d0',
  violet: '#6435c9',
  purple: '#a333c8',
  pink: '#e03997',
  brown: '#a5673f',
  black: '#1b1c1d'
}; // Here is the default configuration options for a Reframe application. These are meged into
// the configurations provided by the user at runtime.

exports.default = {
  theme: {
    palette: defaultPalette
  },
  ui: {
    messages: {
      error: {
        colorClass: 'red',
        color: defaultPalette.red,
        backgroundColor: (0, _color2.default)(defaultPalette.red).lighten(0.5).hexString()
      }
    }
  }
};