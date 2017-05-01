'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('format components', function () {

  describe('default component', function () {

    it('renders with a value', function () {

      var config = {
        value: 'foo'
      };

      var format = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, config));

      (0, _chai.expect)(format.is('span')).to.be.true;
      (0, _chai.expect)(format.text()).to.equal('foo');
    });

    it('renders without a a value', function () {

      var config = {};

      var format = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, config));

      (0, _chai.expect)(format.is('span')).to.be.true;
      (0, _chai.expect)(format.text()).to.equal('');
    });
  });

  describe('status component', function () {

    it('renders with a value', function () {

      var config = {
        value: 'foo',
        format: 'status'
      };

      var format = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, config));

      (0, _chai.expect)(format.is('span.foo')).to.be.true;
      (0, _chai.expect)(format.text()).to.equal('FOO');
    });

    it('renders without a value', function () {

      var config = {
        format: 'status'
      };

      var format = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, config));

      (0, _chai.expect)(format.is('span')).to.be.true;
      (0, _chai.expect)(format.text()).to.be.empty;
    });
  });

  describe('check component', function () {

    it('renders with a value');
  });

  describe('yesno component', function () {

    it('renders with a value');
  });

  describe('currency component', function () {

    it('renders with a value');
  });

  describe('date component', function () {

    it('renders with a value');
  });

  describe('capitalize component', function () {

    it('renders with a value');
  });

  describe('email component', function () {

    it('renders with a value');
  });

  describe('link component', function () {

    it('renders with a value');
  });
});