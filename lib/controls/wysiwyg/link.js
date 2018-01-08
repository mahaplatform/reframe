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