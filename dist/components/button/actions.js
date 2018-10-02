'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var request = exports.request = function request(_ref) {
  var method = _ref.method,
      endpoint = _ref.endpoint,
      body = _ref.body,
      onSuccess = _ref.onSuccess,
      onFailure = _ref.onFailure;
  return {
    type: 'API_REQUEST',
    method: method,
    endpoint: endpoint,
    body: body,
    request: 'REQUEST_REQUEST',
    success: 'REQUEST_SUCCESS',
    failure: 'REQUEST_FAILURE',
    onSuccess: onSuccess,
    onFailure: onFailure
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicmVxdWVzdCIsIm1ldGhvZCIsImVuZHBvaW50IiwiYm9keSIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsInR5cGUiLCJzdWNjZXNzIiwiZmFpbHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSw0QkFBVSxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0MsUUFBWCxRQUFXQSxRQUFYO0FBQUEsTUFBcUJDLElBQXJCLFFBQXFCQSxJQUFyQjtBQUFBLE1BQTJCQyxTQUEzQixRQUEyQkEsU0FBM0I7QUFBQSxNQUFzQ0MsU0FBdEMsUUFBc0NBLFNBQXRDO0FBQUEsU0FBdUQ7QUFDNUVDLFVBQU0sYUFEc0U7QUFFNUVMLGtCQUY0RTtBQUc1RUMsc0JBSDRFO0FBSTVFQyxjQUo0RTtBQUs1RUgsYUFBUyxpQkFMbUU7QUFNNUVPLGFBQVMsaUJBTm1FO0FBTzVFQyxhQUFTLGlCQVBtRTtBQVE1RUosd0JBUjRFO0FBUzVFQztBQVQ0RSxHQUF2RDtBQUFBLENBQWhCIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVxdWVzdCA9ICh7IG1ldGhvZCwgZW5kcG9pbnQsIGJvZHksIG9uU3VjY2Vzcywgb25GYWlsdXJlIH0pID0+ICh7XG4gIHR5cGU6ICdBUElfUkVRVUVTVCcsXG4gIG1ldGhvZCxcbiAgZW5kcG9pbnQsXG4gIGJvZHksXG4gIHJlcXVlc3Q6ICdSRVFVRVNUX1JFUVVFU1QnLFxuICBzdWNjZXNzOiAnUkVRVUVTVF9TVUNDRVNTJyxcbiAgZmFpbHVyZTogJ1JFUVVFU1RfRkFJTFVSRScsXG4gIG9uU3VjY2VzcyxcbiAgb25GYWlsdXJlXG59KVxuIl19