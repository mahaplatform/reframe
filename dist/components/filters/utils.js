"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromFilterObject = undefined;

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fromFilterObject = exports.fromFilterObject = function fromFilterObject(filters) {
  Object.keys(filters).reduce(function (object, key) {
    return (0, _extends4.default)({}, object, (0, _defineProperty3.default)({}, key, _getValue(filters[key])));
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiZnJvbUZpbHRlck9iamVjdCIsImZpbHRlcnMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwib2JqZWN0Iiwia2V5IiwiX2dldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLDhDQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLE9BQUQsRUFBYTtBQUMzQ0MsU0FBT0MsSUFBUCxDQUFZRixPQUFaLEVBQXFCRyxNQUFyQixDQUE0QixVQUFDQyxNQUFELEVBQVNDLEdBQVQ7QUFBQSxzQ0FDdkJELE1BRHVCLG9DQUV6QkMsR0FGeUIsRUFFbkJDLFVBQVVOLFFBQVFLLEdBQVIsQ0FBVixDQUZtQjtBQUFBLEdBQTVCO0FBSUQsQ0FMTSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZyb21GaWx0ZXJPYmplY3QgPSAoZmlsdGVycykgPT4ge1xuICBPYmplY3Qua2V5cyhmaWx0ZXJzKS5yZWR1Y2UoKG9iamVjdCwga2V5KSA9PiAoe1xuICAgIC4uLm9iamVjdCxcbiAgICBba2V5XTogX2dldFZhbHVlKGZpbHRlcnNba2V5XSlcbiAgfSkpXG59XG4iXX0=