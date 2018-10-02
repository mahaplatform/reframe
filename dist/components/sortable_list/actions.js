'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(items) {
  return {
    type: 'SET',
    items: items
  };
};

var toggle = exports.toggle = function toggle(index) {
  return {
    type: 'TOGGLE',
    index: index
  };
};

var move = exports.move = function move(from, to) {
  return {
    type: 'MOVE',
    from: from,
    to: to
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsic2V0IiwiaXRlbXMiLCJ0eXBlIiwidG9nZ2xlIiwiaW5kZXgiLCJtb3ZlIiwiZnJvbSIsInRvIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLG9CQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDN0JDLFVBQU0sS0FEdUI7QUFFN0JEO0FBRjZCLEdBQVo7QUFBQSxDQUFaOztBQUtBLElBQU1FLDBCQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaENGLFVBQU0sUUFEMEI7QUFFaENFO0FBRmdDLEdBQVo7QUFBQSxDQUFmOztBQUtBLElBQU1DLHNCQUFPLFNBQVBBLElBQU8sQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQO0FBQUEsU0FBZTtBQUNqQ0wsVUFBTSxNQUQyQjtBQUVqQ0ksY0FGaUM7QUFHakNDO0FBSGlDLEdBQWY7QUFBQSxDQUFiIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0ID0gKGl0ZW1zKSA9PiAoe1xuICB0eXBlOiAnU0VUJyxcbiAgaXRlbXNcbn0pXG5cbmV4cG9ydCBjb25zdCB0b2dnbGUgPSAoaW5kZXgpID0+ICh7XG4gIHR5cGU6ICdUT0dHTEUnLFxuICBpbmRleFxufSlcblxuZXhwb3J0IGNvbnN0IG1vdmUgPSAoZnJvbSwgdG8pID0+ICh7XG4gIHR5cGU6ICdNT1ZFJyxcbiAgZnJvbSxcbiAgdG9cbn0pXG4iXX0=