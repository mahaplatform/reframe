'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _collection = require('./collection');

var _collection2 = _interopRequireDefault(_collection);

var _control = require('./control');

var _control2 = _interopRequireDefault(_control);

var _details = require('./details');

var _details2 = _interopRequireDefault(_details);

var _drawer = require('./drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _flash = require('./flash');

var _flash2 = _interopRequireDefault(_flash);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _format = require('./format');

var _format2 = _interopRequireDefault(_format);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

var _infinite = require('./infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _platform = require('./platform');

var _platform2 = _interopRequireDefault(_platform);

var _prompt = require('./prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _tasks = require('./tasks');

var _tasks2 = _interopRequireDefault(_tasks);

var _textarea = require('./textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _textfield = require('./textfield');

var _textfield2 = _interopRequireDefault(_textfield);

var _tray = require('./tray');

var _tray2 = _interopRequireDefault(_tray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Checkbox: _checkbox2.default,
  Collection: _collection2.default,
  Control: _control2.default,
  Details: _details2.default,
  Drawer: _drawer2.default,
  Flash: _flash2.default,
  Form: _form2.default,
  Format: _format2.default,
  History: _history2.default,
  Infinite: _infinite2.default,
  Modal: _modal2.default,
  Platform: _platform2.default,
  Prompt: _prompt2.default,
  Table: _table2.default,
  Tasks: _tasks2.default,
  Textarea: _textarea2.default,
  Textfield: _textfield2.default,
  Tray: _tray2.default
};


Object.keys(exports.default).map(function (key) {
  exports[key] = exports.default[key];
});