'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBusy = exports.isReady = exports.filtered = exports.defaults = exports.fields = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reselect = require('reselect');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _flat = require('flat');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sections = function sections(state) {
  return state.config;
};

var data = function data(state) {
  return state.data;
};

var ready = function ready(state) {
  return state.ready;
};

var busy = function busy(state) {
  return state.busy;
};

var fields = exports.fields = (0, _reselect.createSelector)(sections, function (sections) {
  return sections.reduce(function (fields, section) {
    return [].concat((0, _toConsumableArray3.default)(fields), (0, _toConsumableArray3.default)(section.fields.reduce(function (fields, field) {
      return [].concat((0, _toConsumableArray3.default)(fields), [field.type === 'fields' ? field.fields.reduce(function (fields, field) {
        return [].concat((0, _toConsumableArray3.default)(fields), [field]);
      }, []) : field]);
    }, [])));
  }, []);
});

var defaults = exports.defaults = (0, _reselect.createSelector)(fields, function (fields) {
  return fields.reduce(function (defaults, field) {
    if (field.include === false) return defaults;
    return (0, _extends5.default)({}, defaults, (0, _defineProperty3.default)({}, field.name, field.defaultValue));
  }, {});
});

var filtered = exports.filtered = (0, _reselect.createSelector)(fields, data, function (fields, data) {
  return (0, _flat.unflatten)(fields.reduce(function (entity, field) {
    if (field.include === false || field.type == 'text') return entity;
    return (0, _extends5.default)({}, entity, (0, _defineProperty3.default)({}, field.name, !_lodash2.default.isNil(_lodash2.default.get(data, field.name)) ? _lodash2.default.get(data, field.name) : null));
  }, {}));
});

var isReady = exports.isReady = (0, _reselect.createSelector)(fields, ready, function (fields, ready) {
  return fields.reduce(function (isReady, field) {
    if (!isReady) return false;
    return _lodash2.default.includes(ready, field.name);
  }, true);
});

var isBusy = exports.isBusy = (0, _reselect.createSelector)(busy, function (busy) {
  return busy.length > 0;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsic2VjdGlvbnMiLCJzdGF0ZSIsImNvbmZpZyIsImRhdGEiLCJyZWFkeSIsImJ1c3kiLCJmaWVsZHMiLCJyZWR1Y2UiLCJzZWN0aW9uIiwiZmllbGQiLCJ0eXBlIiwiZGVmYXVsdHMiLCJpbmNsdWRlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsImZpbHRlcmVkIiwiZW50aXR5IiwiXyIsImlzTmlsIiwiZ2V0IiwiaXNSZWFkeSIsImluY2x1ZGVzIiwiaXNCdXN5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQVNDLE1BQU1DLE1BQWY7QUFBQSxDQUFqQjs7QUFFQSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxTQUFTRixNQUFNRSxJQUFmO0FBQUEsQ0FBYjs7QUFFQSxJQUFNQyxRQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUFTSCxNQUFNRyxLQUFmO0FBQUEsQ0FBZDs7QUFFQSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxTQUFTSixNQUFNSSxJQUFmO0FBQUEsQ0FBYjs7QUFFTyxJQUFNQywwQkFBUyw4QkFDcEJOLFFBRG9CLEVBRXBCLFVBQUNBLFFBQUQ7QUFBQSxTQUFjQSxTQUFTTyxNQUFULENBQWdCLFVBQUNELE1BQUQsRUFBU0UsT0FBVDtBQUFBLHNEQUN6QkYsTUFEeUIsb0NBRXpCRSxRQUFRRixNQUFSLENBQWVDLE1BQWYsQ0FBc0IsVUFBQ0QsTUFBRCxFQUFTRyxLQUFUO0FBQUEsd0RBQ3BCSCxNQURvQixJQUV0QkcsTUFBTUMsSUFBTixLQUFlLFFBQWhCLEdBQTRCRCxNQUFNSCxNQUFOLENBQWFDLE1BQWIsQ0FBb0IsVUFBQ0QsTUFBRCxFQUFTRyxLQUFUO0FBQUEsMERBQzNDSCxNQUQyQyxJQUU5Q0csS0FGOEM7QUFBQSxPQUFwQixFQUd6QixFQUh5QixDQUE1QixHQUdTQSxLQUxjO0FBQUEsS0FBdEIsRUFNQSxFQU5BLENBRnlCO0FBQUEsR0FBaEIsRUFTWCxFQVRXLENBQWQ7QUFBQSxDQUZvQixDQUFmOztBQWNBLElBQU1FLDhCQUFXLDhCQUN0QkwsTUFEc0IsRUFFdEIsVUFBQ0EsTUFBRDtBQUFBLFNBQVlBLE9BQU9DLE1BQVAsQ0FBYyxVQUFDSSxRQUFELEVBQVdGLEtBQVgsRUFBcUI7QUFDN0MsUUFBR0EsTUFBTUcsT0FBTixLQUFrQixLQUFyQixFQUE0QixPQUFPRCxRQUFQO0FBQzVCLHNDQUNLQSxRQURMLG9DQUVHRixNQUFNSSxJQUZULEVBRWdCSixNQUFNSyxZQUZ0QjtBQUlELEdBTlcsRUFNVCxFQU5TLENBQVo7QUFBQSxDQUZzQixDQUFqQjs7QUFXQSxJQUFNQyw4QkFBVyw4QkFDdEJULE1BRHNCLEVBRXRCSCxJQUZzQixFQUd0QixVQUFDRyxNQUFELEVBQVNILElBQVQ7QUFBQSxTQUFrQixxQkFBVUcsT0FBT0MsTUFBUCxDQUFjLFVBQUNTLE1BQUQsRUFBU1AsS0FBVCxFQUFtQjtBQUMzRCxRQUFHQSxNQUFNRyxPQUFOLEtBQWtCLEtBQWxCLElBQTJCSCxNQUFNQyxJQUFOLElBQWMsTUFBNUMsRUFBb0QsT0FBT00sTUFBUDtBQUNwRCxzQ0FDS0EsTUFETCxvQ0FFR1AsTUFBTUksSUFGVCxFQUVnQixDQUFDSSxpQkFBRUMsS0FBRixDQUFRRCxpQkFBRUUsR0FBRixDQUFNaEIsSUFBTixFQUFZTSxNQUFNSSxJQUFsQixDQUFSLENBQUQsR0FBb0NJLGlCQUFFRSxHQUFGLENBQU1oQixJQUFOLEVBQVlNLE1BQU1JLElBQWxCLENBQXBDLEdBQThELElBRjlFO0FBSUQsR0FOMkIsRUFNekIsRUFOeUIsQ0FBVixDQUFsQjtBQUFBLENBSHNCLENBQWpCOztBQVlBLElBQU1PLDRCQUFVLDhCQUNyQmQsTUFEcUIsRUFFckJGLEtBRnFCLEVBR3JCLFVBQUNFLE1BQUQsRUFBU0YsS0FBVDtBQUFBLFNBQW1CRSxPQUFPQyxNQUFQLENBQWMsVUFBQ2EsT0FBRCxFQUFVWCxLQUFWLEVBQW9CO0FBQ25ELFFBQUcsQ0FBQ1csT0FBSixFQUFhLE9BQU8sS0FBUDtBQUNiLFdBQU9ILGlCQUFFSSxRQUFGLENBQVdqQixLQUFYLEVBQWtCSyxNQUFNSSxJQUF4QixDQUFQO0FBQ0QsR0FIa0IsRUFHaEIsSUFIZ0IsQ0FBbkI7QUFBQSxDQUhxQixDQUFoQjs7QUFTQSxJQUFNUywwQkFBUyw4QkFDcEJqQixJQURvQixFQUVwQixVQUFDQSxJQUFEO0FBQUEsU0FBVUEsS0FBS2tCLE1BQUwsR0FBYyxDQUF4QjtBQUFBLENBRm9CLENBQWYiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyB1bmZsYXR0ZW4gfSBmcm9tICdmbGF0J1xuXG5jb25zdCBzZWN0aW9ucyA9IHN0YXRlID0+IHN0YXRlLmNvbmZpZ1xuXG5jb25zdCBkYXRhID0gc3RhdGUgPT4gc3RhdGUuZGF0YVxuXG5jb25zdCByZWFkeSA9IHN0YXRlID0+IHN0YXRlLnJlYWR5XG5cbmNvbnN0IGJ1c3kgPSBzdGF0ZSA9PiBzdGF0ZS5idXN5XG5cbmV4cG9ydCBjb25zdCBmaWVsZHMgPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VjdGlvbnMsXG4gIChzZWN0aW9ucykgPT4gc2VjdGlvbnMucmVkdWNlKChmaWVsZHMsIHNlY3Rpb24pID0+IFtcbiAgICAuLi5maWVsZHMsXG4gICAgLi4uc2VjdGlvbi5maWVsZHMucmVkdWNlKChmaWVsZHMsIGZpZWxkKSA9PiBbXG4gICAgICAuLi5maWVsZHMsXG4gICAgICAoZmllbGQudHlwZSA9PT0gJ2ZpZWxkcycpID8gZmllbGQuZmllbGRzLnJlZHVjZSgoZmllbGRzLCBmaWVsZCkgPT4gW1xuICAgICAgICAuLi5maWVsZHMsXG4gICAgICAgIGZpZWxkXG4gICAgICBdLCBbXSkgOiBmaWVsZFxuICAgIF0sIFtdKVxuICBdLCBbXSlcbilcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRzID0gY3JlYXRlU2VsZWN0b3IoXG4gIGZpZWxkcyxcbiAgKGZpZWxkcykgPT4gZmllbGRzLnJlZHVjZSgoZGVmYXVsdHMsIGZpZWxkKSA9PiB7XG4gICAgaWYoZmllbGQuaW5jbHVkZSA9PT0gZmFsc2UpIHJldHVybiBkZWZhdWx0c1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0cyxcbiAgICAgIFtmaWVsZC5uYW1lXTogZmllbGQuZGVmYXVsdFZhbHVlXG4gICAgfVxuICB9LCB7fSlcbilcblxuZXhwb3J0IGNvbnN0IGZpbHRlcmVkID0gY3JlYXRlU2VsZWN0b3IoXG4gIGZpZWxkcyxcbiAgZGF0YSxcbiAgKGZpZWxkcywgZGF0YSkgPT4gdW5mbGF0dGVuKGZpZWxkcy5yZWR1Y2UoKGVudGl0eSwgZmllbGQpID0+IHtcbiAgICBpZihmaWVsZC5pbmNsdWRlID09PSBmYWxzZSB8fCBmaWVsZC50eXBlID09ICd0ZXh0JykgcmV0dXJuIGVudGl0eVxuICAgIHJldHVybiB7XG4gICAgICAuLi5lbnRpdHksXG4gICAgICBbZmllbGQubmFtZV06ICFfLmlzTmlsKF8uZ2V0KGRhdGEsIGZpZWxkLm5hbWUpKSA/IF8uZ2V0KGRhdGEsIGZpZWxkLm5hbWUpIDogbnVsbFxuICAgIH1cbiAgfSwge30pKVxuKVxuXG5leHBvcnQgY29uc3QgaXNSZWFkeSA9IGNyZWF0ZVNlbGVjdG9yKFxuICBmaWVsZHMsXG4gIHJlYWR5LFxuICAoZmllbGRzLCByZWFkeSkgPT4gZmllbGRzLnJlZHVjZSgoaXNSZWFkeSwgZmllbGQpID0+IHtcbiAgICBpZighaXNSZWFkeSkgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIF8uaW5jbHVkZXMocmVhZHksIGZpZWxkLm5hbWUpXG4gIH0sIHRydWUpXG4pXG5cbmV4cG9ydCBjb25zdCBpc0J1c3kgPSBjcmVhdGVTZWxlY3RvcihcbiAgYnVzeSxcbiAgKGJ1c3kpID0+IGJ1c3kubGVuZ3RoID4gMFxuKVxuIl19