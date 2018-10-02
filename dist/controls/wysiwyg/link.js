'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.linkStrategy = undefined;

var _linkifyIt = require('linkify-it');

var _linkifyIt2 = _interopRequireDefault(_linkifyIt);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tlds = require('tlds');

var _tlds2 = _interopRequireDefault(_tlds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkify = (0, _linkifyIt2.default)();
linkify.tlds(_tlds2.default);

var linkStrategy = exports.linkStrategy = function linkStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
};

var Link = exports.Link = function Link(_ref) {
  var children = _ref.children,
      contentState = _ref.contentState,
      entityKey = _ref.entityKey;

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      url = _contentState$getEnti.url;

  return _react2.default.createElement(
    'a',
    { href: url, target: '_blank' },
    children
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsibGlua2lmeSIsInRsZHMiLCJsaW5rU3RyYXRlZ3kiLCJjb250ZW50QmxvY2siLCJjYWxsYmFjayIsImNvbnRlbnRTdGF0ZSIsImZpbmRFbnRpdHlSYW5nZXMiLCJjaGFyYWN0ZXIiLCJlbnRpdHlLZXkiLCJnZXRFbnRpdHkiLCJnZXRUeXBlIiwiTGluayIsImNoaWxkcmVuIiwiZ2V0RGF0YSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSwwQkFBaEI7QUFDQUEsUUFBUUMsSUFBUixDQUFhQSxjQUFiOztBQUVPLElBQU1DLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsWUFBRCxFQUFlQyxRQUFmLEVBQXlCQyxZQUF6QixFQUEwQztBQUNwRUYsZUFBYUcsZ0JBQWIsQ0FDRSxVQUFDQyxTQUFELEVBQWU7QUFDYixRQUFNQyxZQUFZRCxVQUFVRSxTQUFWLEVBQWxCO0FBQ0EsV0FBT0QsY0FBYyxJQUFkLElBQXNCSCxhQUFhSSxTQUFiLENBQXVCRCxTQUF2QixFQUFrQ0UsT0FBbEMsT0FBZ0QsTUFBN0U7QUFDRCxHQUpILEVBS0VOLFFBTEY7QUFPRCxDQVJNOztBQVVBLElBQU1PLHNCQUFPLFNBQVBBLElBQU8sT0FBMkM7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsTUFBOUJQLFlBQThCLFFBQTlCQSxZQUE4QjtBQUFBLE1BQWhCRyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsOEJBQzdDSCxhQUFhSSxTQUFiLENBQXVCRCxTQUF2QixFQUFrQ0ssT0FBbEMsRUFENkM7QUFBQSxNQUNyREMsR0FEcUQseUJBQ3JEQSxHQURxRDs7QUFFN0QsU0FDQztBQUFBO0FBQUEsTUFBRyxNQUFPQSxHQUFWLEVBQWdCLFFBQU8sUUFBdkI7QUFDSUY7QUFESixHQUREO0FBS0QsQ0FQTSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxpbmtpZnlJdCBmcm9tICdsaW5raWZ5LWl0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHRsZHMgZnJvbSAndGxkcydcblxuY29uc3QgbGlua2lmeSA9IGxpbmtpZnlJdCgpXG5saW5raWZ5LnRsZHModGxkcylcblxuZXhwb3J0IGNvbnN0IGxpbmtTdHJhdGVneSA9IChjb250ZW50QmxvY2ssIGNhbGxiYWNrLCBjb250ZW50U3RhdGUpID0+IHtcbiAgY29udGVudEJsb2NrLmZpbmRFbnRpdHlSYW5nZXMoXG4gICAgKGNoYXJhY3RlcikgPT4ge1xuICAgICAgY29uc3QgZW50aXR5S2V5ID0gY2hhcmFjdGVyLmdldEVudGl0eSgpXG4gICAgICByZXR1cm4gZW50aXR5S2V5ICE9PSBudWxsICYmIGNvbnRlbnRTdGF0ZS5nZXRFbnRpdHkoZW50aXR5S2V5KS5nZXRUeXBlKCkgPT09ICdMSU5LJ1xuICAgIH0sXG4gICAgY2FsbGJhY2tcbiAgKVxufVxuXG5leHBvcnQgY29uc3QgTGluayA9ICh7IGNoaWxkcmVuLCBjb250ZW50U3RhdGUsIGVudGl0eUtleSB9KSA9PiB7XG4gIGNvbnN0IHsgdXJsIH0gPSBjb250ZW50U3RhdGUuZ2V0RW50aXR5KGVudGl0eUtleSkuZ2V0RGF0YSgpXG4gIHJldHVybiAoXG4gICA8YSBocmVmPXsgdXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgIHsgY2hpbGRyZW4gfVxuICAgPC9hPlxuICApXG59XG4iXX0=