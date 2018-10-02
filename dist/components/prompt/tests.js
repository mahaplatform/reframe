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

var _prompt = require('./prompt');

var _prompt2 = _interopRequireDefault(_prompt);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('prompt component', function () {

  var message = 'Are you sure?';

  var options = [{ label: 'Yes', handler: function handler() {} }, { label: 'No', handler: function handler() {} }];

  describe('actions', function () {

    it('can dispatch open', function () {

      var expected = {
        type: 'OPEN',
        message: message,
        options: options
      };

      (0, _chai.expect)(actions.open(message, options)).to.eql(expected);
    });

    it('can dispatch clear', function () {

      var expected = {
        type: 'CLOSE'
      };

      (0, _chai.expect)(actions.close()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        message: null,
        options: null,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can open prompt', function () {

      var state = {
        message: null,
        options: null,
        open: false
      };

      var action = {
        type: 'OPEN',
        message: message,
        options: options
      };

      var expected = {
        message: message,
        options: options,
        open: true
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can close prompt', function () {

      var state = {
        message: message,
        options: options,
        open: true
      };

      var action = {
        type: 'CLOSE'
      };

      var expected = {
        message: message,
        options: options,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can clear prompt', function () {

      var state = {
        message: message,
        options: options,
        open: true
      };

      var action = {
        type: 'CLEAR'
      };

      var expected = {
        message: null,
        options: null,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var prompt = (0, _enzyme.shallow)(_react2.default.createElement(_prompt2.default, null));
      (0, _chai.expect)(prompt.is('div.reframe-prompt')).to.be.true;
    });

    it('handles onClose on clicked overlay', function () {

      var onClose = (0, _sinon.spy)();
      var prompt = (0, _enzyme.shallow)(_react2.default.createElement(_prompt2.default, { onClose: onClose }));
      var overlay = prompt.childAt(0).childAt(0);
      overlay.simulate('click');
      (0, _chai.expect)(onClose.calledOnce).to.be.true;
    });

    it('handles onClose on clicked cancel', function () {

      var onClose = (0, _sinon.spy)();
      var prompt = (0, _enzyme.shallow)(_react2.default.createElement(_prompt2.default, { cancel: true, onClose: onClose }));
      var cancel = prompt.find('div.reframe-prompt-cancel');
      cancel.simulate('click');
      (0, _chai.expect)(onClose.calledOnce).to.be.true;
    });

    it('calls onClear', function (done) {

      var onClear = (0, _sinon.spy)();

      var prompt = (0, _enzyme.shallow)(_react2.default.createElement(_prompt2.default, { open: true, onClear: onClear }), { lifecycleExperimental: true });

      prompt.setProps({ open: false });

      setTimeout(function () {
        (0, _chai.expect)(onClear.calledOnce).to.be.true;
        done();
      }, 500);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwibWVzc2FnZSIsIm9wdGlvbnMiLCJsYWJlbCIsImhhbmRsZXIiLCJpdCIsImV4cGVjdGVkIiwidHlwZSIsIm9wZW4iLCJ0byIsImVxbCIsImNsb3NlIiwidW5kZWZpbmVkIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9tcHQiLCJpcyIsImJlIiwidHJ1ZSIsIm9uQ2xvc2UiLCJvdmVybGF5IiwiY2hpbGRBdCIsInNpbXVsYXRlIiwiY2FsbGVkT25jZSIsImNhbmNlbCIsImZpbmQiLCJkb25lIiwib25DbGVhciIsImxpZmVjeWNsZUV4cGVyaW1lbnRhbCIsInNldFByb3BzIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxPOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7O0FBRUFDLFNBQVMsa0JBQVQsRUFBNkIsWUFBTTs7QUFFakMsTUFBTUMsVUFBVSxlQUFoQjs7QUFFQSxNQUFNQyxVQUFVLENBQ2QsRUFBRUMsT0FBTyxLQUFULEVBQWdCQyxTQUFTLG1CQUFNLENBQUUsQ0FBakMsRUFEYyxFQUVkLEVBQUVELE9BQU8sSUFBVCxFQUFlQyxTQUFTLG1CQUFNLENBQUUsQ0FBaEMsRUFGYyxDQUFoQjs7QUFLQUosV0FBUyxTQUFULEVBQW9CLFlBQU07O0FBRXhCSyxPQUFHLG1CQUFILEVBQXdCLFlBQU07O0FBRTVCLFVBQU1DLFdBQVc7QUFDZkMsY0FBTSxNQURTO0FBRWZOLHdCQUZlO0FBR2ZDO0FBSGUsT0FBakI7O0FBTUEsd0JBQU9ILFFBQVFTLElBQVIsQ0FBYVAsT0FBYixFQUFzQkMsT0FBdEIsQ0FBUCxFQUF1Q08sRUFBdkMsQ0FBMENDLEdBQTFDLENBQThDSixRQUE5QztBQUVELEtBVkQ7O0FBWUFELE9BQUcsb0JBQUgsRUFBeUIsWUFBTTs7QUFFN0IsVUFBTUMsV0FBVztBQUNmQyxjQUFNO0FBRFMsT0FBakI7O0FBSUEs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U0FBVUksT0FBbEMsR0FBUixDQUFmO0FBQ0EsVUFBTUssU0FBU1QsT0FBT1UsSUFBUCxDQUFZLDJCQUFaLENBQWY7QUFDQUQsYUFBT0YsUUFBUCxDQUFnQixPQUFoQjtBQUNBLHdCQUFPSCxRQUFRSSxVQUFmLEVBQTJCZCxFQUEzQixDQUE4QlEsRUFBOUIsQ0FBaUNDLElBQWpDO0FBRUQsS0FSRDs7QUFVQWIsT0FBRyxlQUFILEVBQW9CLFVBQUNxQixJQUFELEVBQVU7O0FBRTVCLFVBQU1DLFVBQVUsaUJBQWhCOztBQUVBLFVBQU1aLFNBQVMscUJBQVEsOEJBQUMsZ0JBQUQsSUFBUSxNQUFPLElBQWYsRUFBc0IsU0FBVVksT0FBaEMsR0FBUixFQUFzRCxFQUFFQyx1QkFBdUIsSUFBekIsRUFBdEQsQ0FBZjs7QUFFQWIsYUFBT2MsUUFBUCxDQUFnQixFQUFFckIsTUFBTSxLQUFSLEVBQWhCOztBQUVBc0IsaUJBQVcsWUFBTTtBQUNmLDBCQUFPSCxRQUFRSixVQUFmLEVBQTJCZCxFQUEzQixDQUE4QlEsRUFBOUIsQ0FBaUNDLElBQWpDO0FBQ0FRO0FBQ0QsT0FIRCxFQUdHLEdBSEg7QUFLRCxLQWJEO0FBZUQsR0E3Q0Q7QUErQ0QsQ0F0S0QiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknXG5pbXBvcnQgeyBzaGFsbG93IH0gZnJvbSAnZW56eW1lJ1xuaW1wb3J0IHsgc3B5IH0gZnJvbSAnc2lub24nXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnXG5cbmRlc2NyaWJlKCdwcm9tcHQgY29tcG9uZW50JywgKCkgPT4ge1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSAnQXJlIHlvdSBzdXJlPydcblxuICBjb25zdCBvcHRpb25zID0gW1xuICAgIHsgbGFiZWw6ICdZZXMnLCBoYW5kbGVyOiAoKSA9PiB7fSB9LFxuICAgIHsgbGFiZWw6ICdObycsIGhhbmRsZXI6ICgpID0+IHt9IH1cbiAgXVxuXG4gIGRlc2NyaWJlKCdhY3Rpb25zJywgKCkgPT4ge1xuXG4gICAgaXQoJ2NhbiBkaXNwYXRjaCBvcGVuJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgdHlwZTogJ09QRU4nLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBvcHRpb25zXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChhY3Rpb25zLm9wZW4obWVzc2FnZSwgb3B0aW9ucykpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGRpc3BhdGNoIGNsZWFyJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgdHlwZTogJ0NMT1NFJ1xuICAgICAgfVxuXG4gICAgICBleHBlY3QoYWN0aW9ucy5jbG9zZSgpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3JlZHVjZXInLCAoKSA9PiB7XG5cbiAgICBpdCgnY2FuIHNldCBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgb3B0aW9uczogbnVsbCxcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIodW5kZWZpbmVkLCAnJykpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIG9wZW4gcHJvbXB0JywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgb3B0aW9uczogbnVsbCxcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnT1BFTicsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIoc3RhdGUsIGFjdGlvbikpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGNsb3NlIHByb21wdCcsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnQ0xPU0UnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gY2xlYXIgcHJvbXB0JywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdDTEVBUidcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgIG9wdGlvbnM6IG51bGwsXG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ2NvbXBvbmVudCcsICgpID0+IHtcblxuICAgIGl0KCdyZW5kZXJzIHdpdGggYSBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBwcm9tcHQgPSBzaGFsbG93KDxQcm9tcHQgLz4pXG4gICAgICBleHBlY3QocHJvbXB0LmlzKCdkaXYucmVmcmFtZS1wcm9tcHQnKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuXG4gICAgaXQoJ2hhbmRsZXMgb25DbG9zZSBvbiBjbGlja2VkIG92ZXJsYXknLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IG9uQ2xvc2UgPSBzcHkoKVxuICAgICAgY29uc3QgcHJvbXB0ID0gc2hhbGxvdyg8UHJvbXB0IG9uQ2xvc2U9eyBvbkNsb3NlIH0gLz4pXG4gICAgICBjb25zdCBvdmVybGF5ID0gcHJvbXB0LmNoaWxkQXQoMCkuY2hpbGRBdCgwKVxuICAgICAgb3ZlcmxheS5zaW11bGF0ZSgnY2xpY2snKVxuICAgICAgZXhwZWN0KG9uQ2xvc2UuY2FsbGVkT25jZSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICAgIGl0KCdoYW5kbGVzIG9uQ2xvc2Ugb24gY2xpY2tlZCBjYW5jZWwnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IG9uQ2xvc2UgPSBzcHkoKVxuICAgICAgY29uc3QgcHJvbXB0ID0gc2hhbGxvdyg8UHJvbXB0IGNhbmNlbD17IHRydWUgfSBvbkNsb3NlPXsgb25DbG9zZSB9IC8+KVxuICAgICAgY29uc3QgY2FuY2VsID0gcHJvbXB0LmZpbmQoJ2Rpdi5yZWZyYW1lLXByb21wdC1jYW5jZWwnKVxuICAgICAgY2FuY2VsLnNpbXVsYXRlKCdjbGljaycpXG4gICAgICBleHBlY3Qob25DbG9zZS5jYWxsZWRPbmNlKS50by5iZS50cnVlXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbGxzIG9uQ2xlYXInLCAoZG9uZSkgPT4ge1xuXG4gICAgICBjb25zdCBvbkNsZWFyID0gc3B5KClcblxuICAgICAgY29uc3QgcHJvbXB0ID0gc2hhbGxvdyg8UHJvbXB0IG9wZW49eyB0cnVlIH0gb25DbGVhcj17IG9uQ2xlYXIgfSAvPiwgeyBsaWZlY3ljbGVFeHBlcmltZW50YWw6IHRydWUgfSlcblxuICAgICAgcHJvbXB0LnNldFByb3BzKHsgb3BlbjogZmFsc2UgfSlcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV4cGVjdChvbkNsZWFyLmNhbGxlZE9uY2UpLnRvLmJlLnRydWVcbiAgICAgICAgZG9uZSgpXG4gICAgICB9LCA1MDApXG5cbiAgICB9KVxuXG4gIH0pXG5cbn0pXG4iXX0=