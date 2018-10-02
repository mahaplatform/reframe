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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImNvbGxlY3Rpb24iLCJpcyIsInRvIiwiYmUiLCJ0cnVlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVMsWUFBVCxFQUF1QixZQUFNOztBQUUzQkEsV0FBUyxXQUFULEVBQXNCLFlBQU07O0FBRTFCQyxPQUFHLDhCQUFILEVBQW1DLFlBQU07O0FBRXZDLFVBQU1DLGFBQWEscUJBQVEsOEJBQUMsb0JBQUQsT0FBUixDQUFuQjtBQUNBLHdCQUFPQSxXQUFXQyxFQUFYLENBQWMsd0JBQWQsQ0FBUCxFQUFnREMsRUFBaEQsQ0FBbURDLEVBQW5ELENBQXNEQyxJQUF0RDtBQUVELEtBTEQ7QUFPRCxHQVREO0FBV0QsQ0FiRCIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdqc2RvbS1nbG9iYWwvcmVnaXN0ZXInXG5pbXBvcnQgeyBzaGFsbG93IH0gZnJvbSAnZW56eW1lJ1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi9jb2xsZWN0aW9uJ1xuaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSAnY2hhaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbidcblxuZGVzY3JpYmUoJ2NvbGxlY3Rpb24nLCAoKSA9PiB7XG5cbiAgZGVzY3JpYmUoJ2NvbXBvbmVudCcsICgpID0+IHtcblxuICAgIGl0KCdyZW5kZXJzIHdpdGggYSBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBjb2xsZWN0aW9uID0gc2hhbGxvdyg8Q29sbGVjdGlvbiAvPilcbiAgICAgIGV4cGVjdChjb2xsZWN0aW9uLmlzKCdkaXYucmVmcmFtZS1jb2xsZWN0aW9uJykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgfSlcblxufSlcbiJdfQ==