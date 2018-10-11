'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _dynamic = require('./dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('search component', function () {

  describe('actions', function () {

    it('can dispatch type', function () {

      var expected = {
        type: 'QUERY',
        q: 'foo'
      };

      (0, _chai.expect)(actions.query('foo')).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        q: ''
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can query', function () {

      var state = {
        q: ''
      };

      var action = {
        type: 'QUERY',
        q: 'foo'
      };

      var expected = {
        q: 'foo'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('search component', function () {

    it('renders with a static state', function () {

      var search = (0, _enzyme.shallow)(_react2.default.createElement(_search2.default, null));
      (0, _chai.expect)(search.is('Options')).to.be.true;
    });

    it('renders with a dynamic state', function () {

      var context = {
        store: {}
      };

      var search = (0, _enzyme.shallow)(_react2.default.createElement(_search2.default, { endpoint: '/a/b/c' }));
      (0, _chai.expect)(search.is('div.reframe-search')).to.be.true;

      var header = search.childAt(0);
      (0, _chai.expect)(header.is('div.reframe-search-header')).to.be.true;

      var body = search.childAt(1);
      (0, _chai.expect)(body.is('div.reframe-search-body')).to.be.true;
    });
  });

  describe('dynamic component', function () {

    it('does not render without records', function () {

      var dynamic = (0, _enzyme.shallow)(_react2.default.createElement(_dynamic2.default, null));
      (0, _chai.expect)(dynamic.type()).to.be.null;
    });

    it('does renders options without records', function () {

      var records = [{ id: 1, name: 'foo' }];

      var dynamic = (0, _enzyme.shallow)(_react2.default.createElement(_dynamic2.default, { records: records }));
      (0, _chai.expect)(dynamic.is('Options')).to.be.true;
    });
  });

  describe('options component', function () {

    it('does not render without records', function () {

      var dynamic = (0, _enzyme.shallow)(_react2.default.createElement(_dynamic2.default, null));
      (0, _chai.expect)(dynamic.type()).to.be.null;
    });
  });
});