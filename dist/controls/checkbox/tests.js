'use strict';

require('jsdom-global/register');

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('checkbox', function () {

  describe('component', function () {

    it('renders with a default state', function () {

      var control = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      (0, _chai.expect)(control.is('div.reframe-checkbox')).to.be.true;

      var checkbox = control.childAt(0);
      (0, _chai.expect)(checkbox.is('div.ui.checkbox')).to.be.true;

      var icon = checkbox.childAt(0);
      (0, _chai.expect)(icon.is('i.toggle.off.icon')).to.be.true;
    });

    it('renders with a disabled state', function () {

      var control = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { disabled: true }));
      (0, _chai.expect)(control.find('div.checkbox').is('.disabled')).to.be.true;
    });

    it('renders with a on state', function () {

      var control = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { defaultValue: true }), { lifecycleExperimental: true });
      (0, _chai.expect)(control.find('i').is('i.toggle.on.icon')).to.be.true;
    });

    it('handles click', function () {

      var control = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      (0, _chai.expect)(control.find('i').is('i.toggle.off.icon')).to.be.true;
      control.find('i').simulate('click');
      (0, _chai.expect)(control.find('i').is('i.toggle.on.icon')).to.be.true;
    });

    it('calls onReady', function () {

      var onReady = (0, _sinon.spy)();
      (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { onReady: onReady }), { lifecycleExperimental: true });
      (0, _chai.expect)(onReady.calledOnce).to.be.true;
    });

    it('calls onChange', function () {

      var onChange = (0, _sinon.spy)();
      var control = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { onChange: onChange }), { lifecycleExperimental: true });
      (0, _chai.expect)(onChange.called).to.be.false;
      control.find('i').simulate('click');
      (0, _chai.expect)(onChange.callCount).to.eql(1);
      (0, _chai.expect)(onChange.getCall(0).args[0]).to.be.true;
      control.find('i').simulate('click');
      (0, _chai.expect)(onChange.callCount).to.eql(2);
      (0, _chai.expect)(onChange.getCall(1).args[0]).to.be.false;
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImNvbnRyb2wiLCJpcyIsInRvIiwiYmUiLCJ0cnVlIiwiY2hlY2tib3giLCJjaGlsZEF0IiwiaWNvbiIsImZpbmQiLCJsaWZlY3ljbGVFeHBlcmltZW50YWwiLCJzaW11bGF0ZSIsIm9uUmVhZHkiLCJjYWxsZWRPbmNlIiwib25DaGFuZ2UiLCJjYWxsZWQiLCJmYWxzZSIsImNhbGxDb3VudCIsImVxbCIsImdldENhbGwiLCJhcmdzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBQSxTQUFTLFVBQVQsRUFBcUIsWUFBTTs7QUFFekJBLFdBQVMsV0FBVCxFQUFzQixZQUFNOztBQUUxQkMsT0FBRyw4QkFBSCxFQUFtQyxZQUFNOztBQUV2QyxVQUFNQyxVQUFVLHFCQUFRLDhCQUFDLGVBQUQsT0FBUixDQUFoQjtBQUNBLHdCQUFPQSxRQUFRQyxFQUFSLENBQVcsc0JBQVgsQ0FBUCxFQUEyQ0MsRUFBM0MsQ0FBOENDLEVBQTlDLENBQWlEQyxJQUFqRDs7QUFFQSxVQUFNQyxXQUFXTCxRQUFRTSxPQUFSLENBQWdCLENBQWhCLENBQWpCO0FBQ0Esd0JBQU9ELFNBQVNKLEVBQVQsQ0FBWSxpQkFBWixDQUFQLEVBQXVDQyxFQUF2QyxDQUEwQ0MsRUFBMUMsQ0FBNkNDLElBQTdDOztBQUVBLFVBQU1HLE9BQU9GLFNBQVNDLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBYjtBQUNBLHdCQUFPQyxLQUFLTixFQUFMLENBQVEsbUJBQVIsQ0FBUCxFQUFxQ0MsRUFBckMsQ0FBd0NDLEVBQXhDLENBQTJDQyxJQUEzQztBQUVELEtBWEQ7O0FBYUFMLE9BQUcsK0JBQUgsRUFBb0MsWUFBTTs7QUFFeEMsVUFBTUMsVUFBVSxxQkFBUSw4QkFBQyxlQUFELElBQVUsVUFBVyxJQUFyQixHQUFSLENBQWhCO0FBQ0Esd0JBQU9BLFFBQVFRLElBQVIsQ0FBYSxjQUFiLEVBQTZCUCxFQUE3QixDQUFnQyxXQUFoQyxDQUFQLEVBQXFEQyxFQUFyRCxDQUF3REMsRUFBeEQsQ0FBMkRDLElBQTNEO0FBRUQsS0FMRDs7QUFRQUwsT0FBRyx5QkFBSCxFQUE4QixZQUFNOztBQUVsQyxVQUFNQyxVQUFVLHFCQUFRLDhCQUFDLGVBQUQsSUFBVSxjQUFlLElBQXpCLEdBQVIsRUFBNEMsRUFBRVMsdUJBQXVCLElBQXpCLEVBQTVDLENBQWhCO0FBQ0Esd0JBQU9ULFFBQVFRLElBQVIsQ0FBYSxHQUFiLEVBQWtCUCxFQUFsQixDQUFxQixrQkFBckIsQ0FBUCxFQUFpREMsRUFBakQsQ0FBb0RDLEVBQXBELENBQXVEQyxJQUF2RDtBQUVELEtBTEQ7O0FBT0FMLE9BQUcsZUFBSCxFQUFvQixZQUFNOztBQUV4QixVQUFNQyxVQUFVLHFCQUFRLDhCQUFDLGVBQUQsT0FBUixDQUFoQjtBQUNBLHdCQUFPQSxRQUFRUSxJQUFSLENBQWEsR0FBYixFQUFrQlAsRUFBbEIsQ0FBcUIsbUJBQXJCLENBQVAsRUFBa0RDLEVBQWxELENBQXFEQyxFQUFyRCxDQUF3REMsSUFBeEQ7QUFDQUosY0FBUVEsSUFBUixDQUFhLEdBQWIsRUFBa0JFLFFBQWxCLENBQTJCLE9BQTNCO0FBQ0Esd0JBQU9WLFFBQVFRLElBQVIsQ0FBYSxHQUFiLEVBQWtCUCxFQUFsQixDQUFxQixrQkFBckIsQ0FBUCxFQUFpREMsRUFBakQsQ0FBb0RDLEVBQXBELENBQXVEQyxJQUF2RDtBQUVELEtBUEQ7O0FBU0FMLE9BQUcsZUFBSCxFQUFvQixZQUFNOztBQUV4QixVQUFNWSxVQUFVLGlCQUFoQjtBQUNBLDJCQUFRLDhCQUFDLGVBQUQsSUFBVSxTQUFVQSxPQUFwQixHQUFSLEVBQTBDLEVBQUVGLHVCQUF1QixJQUF6QixFQUExQztBQUNBLHdCQUFPRSxRQUFRQyxVQUFmLEVBQTJCVixFQUEzQixDQUE4QkMsRUFBOUIsQ0FBaUNDLElBQWpDO0FBRUQsS0FORDs7QUFRQUwsT0FBRyxnQkFBSCxFQUFxQixZQUFNOztBQUV6QixVQUFNYyxXQUFXLGlCQUFqQjtBQUNBLFVBQU1iLFVBQVUscUJBQVEsOEJBQUMsZUFBRCxJQUFVLFVBQVdhLFFBQXJCLEdBQVIsRUFBNEMsRUFBRUosdUJBQXVCLElBQXpCLEVBQTVDLENBQWhCO0FBQ0Esd0JBQU9JLFNBQVNDLE1BQWhCLEVBQXdCWixFQUF4QixDQUEyQkMsRUFBM0IsQ0FBOEJZLEtBQTlCO0FBQ0FmLGNBQVFRLElBQVIsQ0FBYSxHQUFiLEVBQWtCRSxRQUFsQixDQUEyQixPQUEzQjtBQUNBLHdCQUFPRyxTQUFTRyxTQUFoQixFQUEyQmQsRUFBM0IsQ0FBOEJlLEdBQTlCLENBQWtDLENBQWxDO0FBQ0Esd0JBQU9KLFNBQVNLLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0JDLElBQXBCLENBQXlCLENBQXpCLENBQVAsRUFBb0NqQixFQUFwQyxDQUF1Q0MsRUFBdkMsQ0FBMENDLElBQTFDO0FBQ0FKLGNBQVFRLElBQVIsQ0FBYSxHQUFiLEVBQWtCRSxRQUFsQixDQUEyQixPQUEzQjtBQUNBLHdCQUFPRyxTQUFTRyxTQUFoQixFQUEyQmQsRUFBM0IsQ0FBOEJlLEdBQTlCLENBQWtDLENBQWxDO0FBQ0Esd0JBQU9KLFNBQVNLLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0JDLElBQXBCLENBQXlCLENBQXpCLENBQVAsRUFBb0NqQixFQUFwQyxDQUF1Q0MsRUFBdkMsQ0FBMENZLEtBQTFDO0FBRUQsS0FaRDtBQWNELEdBN0REO0FBK0RELENBakVEIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2pzZG9tLWdsb2JhbC9yZWdpc3RlcidcbmltcG9ydCB7IHNoYWxsb3cgfSBmcm9tICdlbnp5bWUnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3NweSB9IGZyb20gJ3Npbm9uJ1xuXG5kZXNjcmliZSgnY2hlY2tib3gnLCAoKSA9PiB7XG5cbiAgZGVzY3JpYmUoJ2NvbXBvbmVudCcsICgpID0+IHtcblxuICAgIGl0KCdyZW5kZXJzIHdpdGggYSBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBjb250cm9sID0gc2hhbGxvdyg8Q2hlY2tib3ggLz4pXG4gICAgICBleHBlY3QoY29udHJvbC5pcygnZGl2LnJlZnJhbWUtY2hlY2tib3gnKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBjaGVja2JveCA9IGNvbnRyb2wuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KGNoZWNrYm94LmlzKCdkaXYudWkuY2hlY2tib3gnKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBpY29uID0gY2hlY2tib3guY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KGljb24uaXMoJ2kudG9nZ2xlLm9mZi5pY29uJykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZGlzYWJsZWQgc3RhdGUnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBzaGFsbG93KDxDaGVja2JveCBkaXNhYmxlZD17IHRydWUgfSAvPilcbiAgICAgIGV4cGVjdChjb250cm9sLmZpbmQoJ2Rpdi5jaGVja2JveCcpLmlzKCcuZGlzYWJsZWQnKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuXG4gICAgaXQoJ3JlbmRlcnMgd2l0aCBhIG9uIHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBjb250cm9sID0gc2hhbGxvdyg8Q2hlY2tib3ggZGVmYXVsdFZhbHVlPXsgdHJ1ZSB9IC8+LCB7IGxpZmVjeWNsZUV4cGVyaW1lbnRhbDogdHJ1ZSB9KVxuICAgICAgZXhwZWN0KGNvbnRyb2wuZmluZCgnaScpLmlzKCdpLnRvZ2dsZS5vbi5pY29uJykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgnaGFuZGxlcyBjbGljaycsICgpID0+IHtcblxuICAgICAgY29uc3QgY29udHJvbCA9IHNoYWxsb3coPENoZWNrYm94IC8+KVxuICAgICAgZXhwZWN0KGNvbnRyb2wuZmluZCgnaScpLmlzKCdpLnRvZ2dsZS5vZmYuaWNvbicpKS50by5iZS50cnVlXG4gICAgICBjb250cm9sLmZpbmQoJ2knKS5zaW11bGF0ZSgnY2xpY2snKVxuICAgICAgZXhwZWN0KGNvbnRyb2wuZmluZCgnaScpLmlzKCdpLnRvZ2dsZS5vbi5pY29uJykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgnY2FsbHMgb25SZWFkeScsICgpID0+IHtcblxuICAgICAgY29uc3Qgb25SZWFkeSA9IHNweSgpXG4gICAgICBzaGFsbG93KDxDaGVja2JveCBvblJlYWR5PXsgb25SZWFkeSB9IC8+LCB7IGxpZmVjeWNsZUV4cGVyaW1lbnRhbDogdHJ1ZSB9KVxuICAgICAgZXhwZWN0KG9uUmVhZHkuY2FsbGVkT25jZSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICAgIGl0KCdjYWxscyBvbkNoYW5nZScsICgpID0+IHtcblxuICAgICAgY29uc3Qgb25DaGFuZ2UgPSBzcHkoKVxuICAgICAgY29uc3QgY29udHJvbCA9IHNoYWxsb3coPENoZWNrYm94IG9uQ2hhbmdlPXsgb25DaGFuZ2UgfSAvPiwgeyBsaWZlY3ljbGVFeHBlcmltZW50YWw6IHRydWUgfSlcbiAgICAgIGV4cGVjdChvbkNoYW5nZS5jYWxsZWQpLnRvLmJlLmZhbHNlXG4gICAgICBjb250cm9sLmZpbmQoJ2knKS5zaW11bGF0ZSgnY2xpY2snKVxuICAgICAgZXhwZWN0KG9uQ2hhbmdlLmNhbGxDb3VudCkudG8uZXFsKDEpXG4gICAgICBleHBlY3Qob25DaGFuZ2UuZ2V0Q2FsbCgwKS5hcmdzWzBdKS50by5iZS50cnVlXG4gICAgICBjb250cm9sLmZpbmQoJ2knKS5zaW11bGF0ZSgnY2xpY2snKVxuICAgICAgZXhwZWN0KG9uQ2hhbmdlLmNhbGxDb3VudCkudG8uZXFsKDIpXG4gICAgICBleHBlY3Qob25DaGFuZ2UuZ2V0Q2FsbCgxKS5hcmdzWzBdKS50by5iZS5mYWxzZVxuXG4gICAgfSlcblxuICB9KVxuXG59KVxuIl19