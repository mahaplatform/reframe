'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var change = exports.change = function change(name, value) {
  return {
    type: 'CHANGE',
    name: name,
    value: value
  };
};

var addPanel = exports.addPanel = function addPanel(panel) {
  return {
    type: 'ADD_PANEL',
    panel: panel
  };
};

var removePanel = exports.removePanel = function removePanel() {
  return {
    type: 'REMOVE_PANEL'
  };
};

var reset = exports.reset = function reset() {
  return {
    type: 'RESET'
  };
};