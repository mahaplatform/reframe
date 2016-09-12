"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matches = matches;
function matches(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};