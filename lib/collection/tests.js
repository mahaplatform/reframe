'use strict';

require('jsdom-global/register');

var _enzyme = require('enzyme');

var _collection = require('./collection');

var _collection2 = _interopRequireDefault(_collection);

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('collection', function () {

  describe('component', function () {

    it('renders with a default state', function () {

      var collection = (0, _enzyme.shallow)(_react2.default.createElement(_collection2.default, null));
      (0, _chai.expect)(collection.is('div.reframe-collection')).to.be.true;
    });
  });
});