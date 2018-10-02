'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtered = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _reselect = require('reselect');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filtersSelector = function filtersSelector(state, props) {
  return props.filters;
};

var resultsSelector = function resultsSelector(state, props) {
  return state.results;
};

var filtered = exports.filtered = (0, _reselect.createSelector)(filtersSelector, resultsSelector, function (filters, results) {
  return Object.keys(results).reduce(function (filtered, key) {
    return (0, _extends4.default)({}, filtered, (0, _defineProperty3.default)({}, key, _getValue(filters, results, key)));
  }, {});
});

var _getValue = function _getValue(filters, results, key) {
  var field = _lodash2.default.find(filters, { name: key });
  if (!field) return null;
  var value = results[key];
  if (field.type === 'daterange') return { $dr: value.key };
  if (_lodash2.default.isArray(value)) return { $in: value.map(function (item) {
      return item.key;
    }) };
  if (_lodash2.default.isPlainObject(value)) return { $eq: value.key };
  return { $eq: value };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiZmlsdGVyc1NlbGVjdG9yIiwic3RhdGUiLCJwcm9wcyIsImZpbHRlcnMiLCJyZXN1bHRzU2VsZWN0b3IiLCJyZXN1bHRzIiwiZmlsdGVyZWQiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwia2V5IiwiX2dldFZhbHVlIiwiZmllbGQiLCJfIiwiZmluZCIsIm5hbWUiLCJ2YWx1ZSIsInR5cGUiLCIkZHIiLCJpc0FycmF5IiwiJGluIiwibWFwIiwiaXRlbSIsImlzUGxhaW5PYmplY3QiLCIkZXEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFNBQWtCQSxNQUFNQyxPQUF4QjtBQUFBLENBQXhCOztBQUVBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0gsS0FBRCxFQUFRQyxLQUFSO0FBQUEsU0FBa0JELE1BQU1JLE9BQXhCO0FBQUEsQ0FBeEI7O0FBRU8sSUFBTUMsOEJBQVcsOEJBQ3RCTixlQURzQixFQUV0QkksZUFGc0IsRUFHdEIsVUFBQ0QsT0FBRCxFQUFVRSxPQUFWO0FBQUEsU0FBc0JFLE9BQU9DLElBQVAsQ0FBWUgsT0FBWixFQUFxQkksTUFBckIsQ0FBNEIsVUFBQ0gsUUFBRCxFQUFXSSxHQUFYO0FBQUEsc0NBQzdDSixRQUQ2QyxvQ0FFL0NJLEdBRitDLEVBRXpDQyxVQUFVUixPQUFWLEVBQW1CRSxPQUFuQixFQUE0QkssR0FBNUIsQ0FGeUM7QUFBQSxHQUE1QixFQUdsQixFQUhrQixDQUF0QjtBQUFBLENBSHNCLENBQWpCOztBQVNQLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDUixPQUFELEVBQVVFLE9BQVYsRUFBbUJLLEdBQW5CLEVBQTJCO0FBQzNDLE1BQU1FLFFBQVFDLGlCQUFFQyxJQUFGLENBQU9YLE9BQVAsRUFBZ0IsRUFBRVksTUFBTUwsR0FBUixFQUFoQixDQUFkO0FBQ0EsTUFBRyxDQUFDRSxLQUFKLEVBQVcsT0FBTyxJQUFQO0FBQ1gsTUFBTUksUUFBUVgsUUFBUUssR0FBUixDQUFkO0FBQ0EsTUFBR0UsTUFBTUssSUFBTixLQUFlLFdBQWxCLEVBQStCLE9BQU8sRUFBRUMsS0FBS0YsTUFBTU4sR0FBYixFQUFQO0FBQy9CLE1BQUdHLGlCQUFFTSxPQUFGLENBQVVILEtBQVYsQ0FBSCxFQUFxQixPQUFPLEVBQUVJLEtBQUtKLE1BQU1LLEdBQU4sQ0FBVTtBQUFBLGFBQVFDLEtBQUtaLEdBQWI7QUFBQSxLQUFWLENBQVAsRUFBUDtBQUNyQixNQUFHRyxpQkFBRVUsYUFBRixDQUFnQlAsS0FBaEIsQ0FBSCxFQUEyQixPQUFPLEVBQUVRLEtBQUtSLE1BQU1OLEdBQWIsRUFBUDtBQUMzQixTQUFPLEVBQUVjLEtBQUtSLEtBQVAsRUFBUDtBQUNELENBUkQiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IGZpbHRlcnNTZWxlY3RvciA9IChzdGF0ZSwgcHJvcHMpID0+IHByb3BzLmZpbHRlcnNcblxuY29uc3QgcmVzdWx0c1NlbGVjdG9yID0gKHN0YXRlLCBwcm9wcykgPT4gc3RhdGUucmVzdWx0c1xuXG5leHBvcnQgY29uc3QgZmlsdGVyZWQgPSBjcmVhdGVTZWxlY3RvcihcbiAgZmlsdGVyc1NlbGVjdG9yLFxuICByZXN1bHRzU2VsZWN0b3IsXG4gIChmaWx0ZXJzLCByZXN1bHRzKSA9PiBPYmplY3Qua2V5cyhyZXN1bHRzKS5yZWR1Y2UoKGZpbHRlcmVkLCBrZXkpID0+ICh7XG4gICAgLi4uZmlsdGVyZWQsXG4gICAgW2tleV06IF9nZXRWYWx1ZShmaWx0ZXJzLCByZXN1bHRzLCBrZXkpXG4gIH0pLCB7IH0pXG4pXG5cbmNvbnN0IF9nZXRWYWx1ZSA9IChmaWx0ZXJzLCByZXN1bHRzLCBrZXkpID0+IHtcbiAgY29uc3QgZmllbGQgPSBfLmZpbmQoZmlsdGVycywgeyBuYW1lOiBrZXkgfSlcbiAgaWYoIWZpZWxkKSByZXR1cm4gbnVsbFxuICBjb25zdCB2YWx1ZSA9IHJlc3VsdHNba2V5XVxuICBpZihmaWVsZC50eXBlID09PSAnZGF0ZXJhbmdlJykgcmV0dXJuIHsgJGRyOiB2YWx1ZS5rZXkgfVxuICBpZihfLmlzQXJyYXkodmFsdWUpKSByZXR1cm4geyAkaW46IHZhbHVlLm1hcChpdGVtID0+IGl0ZW0ua2V5KSB9XG4gIGlmKF8uaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHJldHVybiB7ICRlcTogdmFsdWUua2V5IH1cbiAgcmV0dXJuIHsgJGVxOiB2YWx1ZSB9XG59XG4iXX0=