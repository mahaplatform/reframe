'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sections, callback) {
  _lodash2.default.map(sections, function (section) {
    _lodash2.default.map(section.fields, function (field) {
      if (field.type == 'fields') {
        _lodash2.default.map(field.fields, function (subfield) {
          callback(subfield);
        });
      } else {
        callback(field);
      }
    });
  });
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }