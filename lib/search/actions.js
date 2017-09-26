'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var query = exports.query = function query(q) {
  return {
    type: 'QUERY',
    q: q
  };
};