'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var begin = exports.begin = function begin() {
  return {
    type: 'BEGIN'
  };
};

var end = exports.end = function end() {
  return {
    type: 'END'
  };
};

var type = exports.type = function type(q) {
  return {
    type: 'TYPE',
    q: q
  };
};

var abort = exports.abort = function abort() {
  return {
    type: 'ABORT'
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYmVnaW4iLCJ0eXBlIiwiZW5kIiwicSIsImFib3J0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLHdCQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUFPO0FBQzFCQyxVQUFNO0FBRG9CLEdBQVA7QUFBQSxDQUFkOztBQUlBLElBQU1DLG9CQUFNLFNBQU5BLEdBQU07QUFBQSxTQUFPO0FBQ3hCRCxVQUFNO0FBRGtCLEdBQVA7QUFBQSxDQUFaOztBQUlBLElBQU1BLHNCQUFPLFNBQVBBLElBQU8sQ0FBQ0UsQ0FBRDtBQUFBLFNBQU87QUFDekJGLFVBQU0sTUFEbUI7QUFFekJFO0FBRnlCLEdBQVA7QUFBQSxDQUFiOztBQUtBLElBQU1DLHdCQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUFPO0FBQzFCSCxVQUFNO0FBRG9CLEdBQVA7QUFBQSxDQUFkIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmVnaW4gPSAoKSA9PiAoe1xuICB0eXBlOiAnQkVHSU4nXG59KVxuXG5leHBvcnQgY29uc3QgZW5kID0gKCkgPT4gKHtcbiAgdHlwZTogJ0VORCdcbn0pXG5cbmV4cG9ydCBjb25zdCB0eXBlID0gKHEpPT4gKHtcbiAgdHlwZTogJ1RZUEUnLFxuICBxXG59KVxuXG5leHBvcnQgY29uc3QgYWJvcnQgPSAoKSA9PiAoe1xuICB0eXBlOiAnQUJPUlQnXG59KVxuIl19