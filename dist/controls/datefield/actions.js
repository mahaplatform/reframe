'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setValue = exports.setValue = function setValue(value) {
  return {
    type: 'SET_VALUE',
    value: value
  };
};

var setCurrent = exports.setCurrent = function setCurrent(month, year) {
  return {
    type: 'SET_CURRENT',
    month: month,
    year: year
  };
};

var previous = exports.previous = function previous() {
  return {
    type: 'PREVIOUS'
  };
};

var next = exports.next = function next() {
  return {
    type: 'NEXT'
  };
};

var begin = exports.begin = function begin() {
  return {
    type: 'BEGIN'
  };
};

var cancel = exports.cancel = function cancel() {
  return {
    type: 'CANCEL'
  };
};

var choose = exports.choose = function choose(value) {
  return {
    type: 'CHOOSE',
    value: value
  };
};

var clear = exports.clear = function clear() {
  return {
    type: 'CLEAR'
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsic2V0VmFsdWUiLCJ2YWx1ZSIsInR5cGUiLCJzZXRDdXJyZW50IiwibW9udGgiLCJ5ZWFyIiwicHJldmlvdXMiLCJuZXh0IiwiYmVnaW4iLCJjYW5jZWwiLCJjaG9vc2UiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSw4QkFBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDQyxVQUFNLFdBRDRCO0FBRWxDRDtBQUZrQyxHQUFaO0FBQUEsQ0FBakI7O0FBS0EsSUFBTUUsa0NBQWEsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVFDLElBQVI7QUFBQSxTQUFrQjtBQUMxQ0gsVUFBTSxhQURvQztBQUUxQ0UsZ0JBRjBDO0FBRzFDQztBQUgwQyxHQUFsQjtBQUFBLENBQW5COztBQU1BLElBQU1DLDhCQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFPO0FBQzdCSixVQUFNO0FBRHVCLEdBQVA7QUFBQSxDQUFqQjs7QUFLQSxJQUFNSyxzQkFBTyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUN6QkwsVUFBTTtBQURtQixHQUFQO0FBQUEsQ0FBYjs7QUFJQSxJQUFNTSx3QkFBUSxTQUFSQSxLQUFRO0FBQUEsU0FBTztBQUMxQk4sVUFBTTtBQURvQixHQUFQO0FBQUEsQ0FBZDs7QUFJQSxJQUFNTywwQkFBUyxTQUFUQSxNQUFTO0FBQUEsU0FBTztBQUMzQlAsVUFBTTtBQURxQixHQUFQO0FBQUEsQ0FBZjs7QUFJQSxJQUFNUSwwQkFBUyxTQUFUQSxNQUFTLENBQUNULEtBQUQ7QUFBQSxTQUFXO0FBQy9CQyxVQUFNLFFBRHlCO0FBRS9CRDtBQUYrQixHQUFYO0FBQUEsQ0FBZjs7QUFLQSxJQUFNVSx3QkFBUSxTQUFSQSxLQUFRO0FBQUEsU0FBTztBQUMxQlQsVUFBTTtBQURvQixHQUFQO0FBQUEsQ0FBZCIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldFZhbHVlID0gKHZhbHVlKSA9PiAoe1xuICB0eXBlOiAnU0VUX1ZBTFVFJyxcbiAgdmFsdWVcbn0pXG5cbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50ID0gKG1vbnRoLCB5ZWFyKSA9PiAoe1xuICB0eXBlOiAnU0VUX0NVUlJFTlQnLFxuICBtb250aCxcbiAgeWVhclxufSlcblxuZXhwb3J0IGNvbnN0IHByZXZpb3VzID0gKCkgPT4gKHtcbiAgdHlwZTogJ1BSRVZJT1VTJ1xufSlcblxuXG5leHBvcnQgY29uc3QgbmV4dCA9ICgpID0+ICh7XG4gIHR5cGU6ICdORVhUJ1xufSlcblxuZXhwb3J0IGNvbnN0IGJlZ2luID0gKCkgPT4gKHtcbiAgdHlwZTogJ0JFR0lOJ1xufSlcblxuZXhwb3J0IGNvbnN0IGNhbmNlbCA9ICgpID0+ICh7XG4gIHR5cGU6ICdDQU5DRUwnXG59KVxuXG5leHBvcnQgY29uc3QgY2hvb3NlID0gKHZhbHVlKT0+ICh7XG4gIHR5cGU6ICdDSE9PU0UnLFxuICB2YWx1ZVxufSlcblxuZXhwb3J0IGNvbnN0IGNsZWFyID0gKCkgPT4gKHtcbiAgdHlwZTogJ0NMRUFSJ1xufSlcbiJdfQ==