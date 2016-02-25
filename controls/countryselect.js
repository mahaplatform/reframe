'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countryselect = function (_React$Component) {
  _inherits(Countryselect, _React$Component);

  function Countryselect(props) {
    _classCallCheck(this, Countryselect);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Countryselect).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Countryselect, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui fluid search selection dropdown', ref: 'control' },
        _react2.default.createElement('input', { defaultValue: this.props.defaultValue, type: 'hidden', name: 'country', onChange: this.props.onChange }),
        _react2.default.createElement('i', { className: 'dropdown icon' }),
        _react2.default.createElement(
          'div',
          { className: 'default text' },
          'Select Country'
        ),
        _react2.default.createElement(
          'div',
          { className: 'menu' },
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'us' },
            _react2.default.createElement('i', { className: 'us flag' }),
            'United States'
          ),
          _react2.default.createElement(
            'div',
            { 'data-value': '1', className: 'item' },
            '-------------'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'af' },
            _react2.default.createElement('i', { className: 'af flag' }),
            'Afghanistan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ax' },
            _react2.default.createElement('i', { className: 'ax flag' }),
            'Aland Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'al' },
            _react2.default.createElement('i', { className: 'al flag' }),
            'Albania'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'dz' },
            _react2.default.createElement('i', { className: 'dz flag' }),
            'Algeria'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'as' },
            _react2.default.createElement('i', { className: 'as flag' }),
            'American Samoa'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ad' },
            _react2.default.createElement('i', { className: 'ad flag' }),
            'Andorra'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ao' },
            _react2.default.createElement('i', { className: 'ao flag' }),
            'Angola'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ai' },
            _react2.default.createElement('i', { className: 'ai flag' }),
            'Anguilla'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ag' },
            _react2.default.createElement('i', { className: 'ag flag' }),
            'Antigua'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ar' },
            _react2.default.createElement('i', { className: 'ar flag' }),
            'Argentina'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'am' },
            _react2.default.createElement('i', { className: 'am flag' }),
            'Armenia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'aw' },
            _react2.default.createElement('i', { className: 'aw flag' }),
            'Aruba'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'au' },
            _react2.default.createElement('i', { className: 'au flag' }),
            'Australia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'at' },
            _react2.default.createElement('i', { className: 'at flag' }),
            'Austria'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'az' },
            _react2.default.createElement('i', { className: 'az flag' }),
            'Azerbaijan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bs' },
            _react2.default.createElement('i', { className: 'bs flag' }),
            'Bahamas'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bh' },
            _react2.default.createElement('i', { className: 'bh flag' }),
            'Bahrain'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bd' },
            _react2.default.createElement('i', { className: 'bd flag' }),
            'Bangladesh'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bb' },
            _react2.default.createElement('i', { className: 'bb flag' }),
            'Barbados'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'by' },
            _react2.default.createElement('i', { className: 'by flag' }),
            'Belarus'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'be' },
            _react2.default.createElement('i', { className: 'be flag' }),
            'Belgium'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bz' },
            _react2.default.createElement('i', { className: 'bz flag' }),
            'Belize'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bj' },
            _react2.default.createElement('i', { className: 'bj flag' }),
            'Benin'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bm' },
            _react2.default.createElement('i', { className: 'bm flag' }),
            'Bermuda'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bt' },
            _react2.default.createElement('i', { className: 'bt flag' }),
            'Bhutan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bo' },
            _react2.default.createElement('i', { className: 'bo flag' }),
            'Bolivia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ba' },
            _react2.default.createElement('i', { className: 'ba flag' }),
            'Bosnia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bw' },
            _react2.default.createElement('i', { className: 'bw flag' }),
            'Botswana'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bv' },
            _react2.default.createElement('i', { className: 'bv flag' }),
            'Bouvet Island'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'br' },
            _react2.default.createElement('i', { className: 'br flag' }),
            'Brazil'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'vg' },
            _react2.default.createElement('i', { className: 'vg flag' }),
            'British Virgin Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bn' },
            _react2.default.createElement('i', { className: 'bn flag' }),
            'Brunei'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bg' },
            _react2.default.createElement('i', { className: 'bg flag' }),
            'Bulgaria'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bf' },
            _react2.default.createElement('i', { className: 'bf flag' }),
            'Burkina Faso'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ar' },
            _react2.default.createElement('i', { className: 'ar flag' }),
            'Burma'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'bi' },
            _react2.default.createElement('i', { className: 'bi flag' }),
            'Burundi'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tc' },
            _react2.default.createElement('i', { className: 'tc flag' }),
            'Caicos Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'kh' },
            _react2.default.createElement('i', { className: 'kh flag' }),
            'Cambodia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cm' },
            _react2.default.createElement('i', { className: 'cm flag' }),
            'Cameroon'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ca' },
            _react2.default.createElement('i', { className: 'ca flag' }),
            'Canada'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cv' },
            _react2.default.createElement('i', { className: 'cv flag' }),
            'Cape Verde'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ky' },
            _react2.default.createElement('i', { className: 'ky flag' }),
            'Cayman Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cf' },
            _react2.default.createElement('i', { className: 'cf flag' }),
            'Central African Republic'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'td' },
            _react2.default.createElement('i', { className: 'td flag' }),
            'Chad'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cl' },
            _react2.default.createElement('i', { className: 'cl flag' }),
            'Chile'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cn' },
            _react2.default.createElement('i', { className: 'cn flag' }),
            'China'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cx' },
            _react2.default.createElement('i', { className: 'cx flag' }),
            'Christmas Island'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cc' },
            _react2.default.createElement('i', { className: 'cc flag' }),
            'Cocos Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'co' },
            _react2.default.createElement('i', { className: 'co flag' }),
            'Colombia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'km' },
            _react2.default.createElement('i', { className: 'km flag' }),
            'Comoros'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cg' },
            _react2.default.createElement('i', { className: 'cg flag' }),
            'Congo Brazzaville'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cd' },
            _react2.default.createElement('i', { className: 'cd flag' }),
            'Congo'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ck' },
            _react2.default.createElement('i', { className: 'ck flag' }),
            'Cook Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cr' },
            _react2.default.createElement('i', { className: 'cr flag' }),
            'Costa Rica'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ci' },
            _react2.default.createElement('i', { className: 'ci flag' }),
            'Cote Divoire'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'hr' },
            _react2.default.createElement('i', { className: 'hr flag' }),
            'Croatia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cu' },
            _react2.default.createElement('i', { className: 'cu flag' }),
            'Cuba'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cy' },
            _react2.default.createElement('i', { className: 'cy flag' }),
            'Cyprus'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cz' },
            _react2.default.createElement('i', { className: 'cz flag' }),
            'Czech Republic'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'dk' },
            _react2.default.createElement('i', { className: 'dk flag' }),
            'Denmark'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'dj' },
            _react2.default.createElement('i', { className: 'dj flag' }),
            'Djibouti'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'dm' },
            _react2.default.createElement('i', { className: 'dm flag' }),
            'Dominica'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'do' },
            _react2.default.createElement('i', { className: 'do flag' }),
            'Dominican Republic'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ec' },
            _react2.default.createElement('i', { className: 'ec flag' }),
            'Ecuador'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'eg' },
            _react2.default.createElement('i', { className: 'eg flag' }),
            'Egypt'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sv' },
            _react2.default.createElement('i', { className: 'sv flag' }),
            'El Salvador'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gb' },
            _react2.default.createElement('i', { className: 'gb flag' }),
            'England'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gq' },
            _react2.default.createElement('i', { className: 'gq flag' }),
            'Equatorial Guinea'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'er' },
            _react2.default.createElement('i', { className: 'er flag' }),
            'Eritrea'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ee' },
            _react2.default.createElement('i', { className: 'ee flag' }),
            'Estonia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'et' },
            _react2.default.createElement('i', { className: 'et flag' }),
            'Ethiopia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'eu' },
            _react2.default.createElement('i', { className: 'eu flag' }),
            'European Union'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'fk' },
            _react2.default.createElement('i', { className: 'fk flag' }),
            'Falkland Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'fo' },
            _react2.default.createElement('i', { className: 'fo flag' }),
            'Faroe Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'fj' },
            _react2.default.createElement('i', { className: 'fj flag' }),
            'Fiji'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'fi' },
            _react2.default.createElement('i', { className: 'fi flag' }),
            'Finland'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'fr' },
            _react2.default.createElement('i', { className: 'fr flag' }),
            'France'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gf' },
            _react2.default.createElement('i', { className: 'gf flag' }),
            'French Guiana'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pf' },
            _react2.default.createElement('i', { className: 'pf flag' }),
            'French Polynesia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tf' },
            _react2.default.createElement('i', { className: 'tf flag' }),
            'French Territories'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ga' },
            _react2.default.createElement('i', { className: 'ga flag' }),
            'Gabon'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gm' },
            _react2.default.createElement('i', { className: 'gm flag' }),
            'Gambia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ge' },
            _react2.default.createElement('i', { className: 'ge flag' }),
            'Georgia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'de' },
            _react2.default.createElement('i', { className: 'de flag' }),
            'Germany'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gh' },
            _react2.default.createElement('i', { className: 'gh flag' }),
            'Ghana'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gi' },
            _react2.default.createElement('i', { className: 'gi flag' }),
            'Gibraltar'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gr' },
            _react2.default.createElement('i', { className: 'gr flag' }),
            'Greece'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gl' },
            _react2.default.createElement('i', { className: 'gl flag' }),
            'Greenland'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gd' },
            _react2.default.createElement('i', { className: 'gd flag' }),
            'Grenada'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gp' },
            _react2.default.createElement('i', { className: 'gp flag' }),
            'Guadeloupe'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gu' },
            _react2.default.createElement('i', { className: 'gu flag' }),
            'Guam'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gt' },
            _react2.default.createElement('i', { className: 'gt flag' }),
            'Guatemala'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gw' },
            _react2.default.createElement('i', { className: 'gw flag' }),
            'Guinea-Bissau'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gn' },
            _react2.default.createElement('i', { className: 'gn flag' }),
            'Guinea'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gy' },
            _react2.default.createElement('i', { className: 'gy flag' }),
            'Guyana'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ht' },
            _react2.default.createElement('i', { className: 'ht flag' }),
            'Haiti'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'hm' },
            _react2.default.createElement('i', { className: 'hm flag' }),
            'Heard Island'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'hn' },
            _react2.default.createElement('i', { className: 'hn flag' }),
            'Honduras'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'hk' },
            _react2.default.createElement('i', { className: 'hk flag' }),
            'Hong Kong'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'hu' },
            _react2.default.createElement('i', { className: 'hu flag' }),
            'Hungary'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'is' },
            _react2.default.createElement('i', { className: 'is flag' }),
            'Iceland'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'in' },
            _react2.default.createElement('i', { className: 'in flag' }),
            'India'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'io' },
            _react2.default.createElement('i', { className: 'io flag' }),
            'Indian Ocean Territory'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'id' },
            _react2.default.createElement('i', { className: 'id flag' }),
            'Indonesia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ir' },
            _react2.default.createElement('i', { className: 'ir flag' }),
            'Iran'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'iq' },
            _react2.default.createElement('i', { className: 'iq flag' }),
            'Iraq'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ie' },
            _react2.default.createElement('i', { className: 'ie flag' }),
            'Ireland'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'il' },
            _react2.default.createElement('i', { className: 'il flag' }),
            'Israel'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'it' },
            _react2.default.createElement('i', { className: 'it flag' }),
            'Italy'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'jm' },
            _react2.default.createElement('i', { className: 'jm flag' }),
            'Jamaica'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'jp' },
            _react2.default.createElement('i', { className: 'jp flag' }),
            'Japan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'jo' },
            _react2.default.createElement('i', { className: 'jo flag' }),
            'Jordan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'kz' },
            _react2.default.createElement('i', { className: 'kz flag' }),
            'Kazakhstan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ke' },
            _react2.default.createElement('i', { className: 'ke flag' }),
            'Kenya'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ki' },
            _react2.default.createElement('i', { className: 'ki flag' }),
            'Kiribati'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'kw' },
            _react2.default.createElement('i', { className: 'kw flag' }),
            'Kuwait'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'kg' },
            _react2.default.createElement('i', { className: 'kg flag' }),
            'Kyrgyzstan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'la' },
            _react2.default.createElement('i', { className: 'la flag' }),
            'Laos'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'lv' },
            _react2.default.createElement('i', { className: 'lv flag' }),
            'Latvia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'lb' },
            _react2.default.createElement('i', { className: 'lb flag' }),
            'Lebanon'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ls' },
            _react2.default.createElement('i', { className: 'ls flag' }),
            'Lesotho'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'lr' },
            _react2.default.createElement('i', { className: 'lr flag' }),
            'Liberia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ly' },
            _react2.default.createElement('i', { className: 'ly flag' }),
            'Libya'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'li' },
            _react2.default.createElement('i', { className: 'li flag' }),
            'Liechtenstein'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'lt' },
            _react2.default.createElement('i', { className: 'lt flag' }),
            'Lithuania'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'lu' },
            _react2.default.createElement('i', { className: 'lu flag' }),
            'Luxembourg'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mo' },
            _react2.default.createElement('i', { className: 'mo flag' }),
            'Macau'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mk' },
            _react2.default.createElement('i', { className: 'mk flag' }),
            'Macedonia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mg' },
            _react2.default.createElement('i', { className: 'mg flag' }),
            'Madagascar'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mw' },
            _react2.default.createElement('i', { className: 'mw flag' }),
            'Malawi'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'my' },
            _react2.default.createElement('i', { className: 'my flag' }),
            'Malaysia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mv' },
            _react2.default.createElement('i', { className: 'mv flag' }),
            'Maldives'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ml' },
            _react2.default.createElement('i', { className: 'ml flag' }),
            'Mali'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mt' },
            _react2.default.createElement('i', { className: 'mt flag' }),
            'Malta'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mh' },
            _react2.default.createElement('i', { className: 'mh flag' }),
            'Marshall Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mq' },
            _react2.default.createElement('i', { className: 'mq flag' }),
            'Martinique'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mr' },
            _react2.default.createElement('i', { className: 'mr flag' }),
            'Mauritania'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mu' },
            _react2.default.createElement('i', { className: 'mu flag' }),
            'Mauritius'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'yt' },
            _react2.default.createElement('i', { className: 'yt flag' }),
            'Mayotte'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mx' },
            _react2.default.createElement('i', { className: 'mx flag' }),
            'Mexico'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'fm' },
            _react2.default.createElement('i', { className: 'fm flag' }),
            'Micronesia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'md' },
            _react2.default.createElement('i', { className: 'md flag' }),
            'Moldova'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mc' },
            _react2.default.createElement('i', { className: 'mc flag' }),
            'Monaco'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mn' },
            _react2.default.createElement('i', { className: 'mn flag' }),
            'Mongolia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'me' },
            _react2.default.createElement('i', { className: 'me flag' }),
            'Montenegro'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ms' },
            _react2.default.createElement('i', { className: 'ms flag' }),
            'Montserrat'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ma' },
            _react2.default.createElement('i', { className: 'ma flag' }),
            'Morocco'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mz' },
            _react2.default.createElement('i', { className: 'mz flag' }),
            'Mozambique'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'na' },
            _react2.default.createElement('i', { className: 'na flag' }),
            'Namibia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'nr' },
            _react2.default.createElement('i', { className: 'nr flag' }),
            'Nauru'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'np' },
            _react2.default.createElement('i', { className: 'np flag' }),
            'Nepal'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'an' },
            _react2.default.createElement('i', { className: 'an flag' }),
            'Netherlands Antilles'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'nl' },
            _react2.default.createElement('i', { className: 'nl flag' }),
            'Netherlands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'nc' },
            _react2.default.createElement('i', { className: 'nc flag' }),
            'New Caledonia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pg' },
            _react2.default.createElement('i', { className: 'pg flag' }),
            'New Guinea'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'nz' },
            _react2.default.createElement('i', { className: 'nz flag' }),
            'New Zealand'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ni' },
            _react2.default.createElement('i', { className: 'ni flag' }),
            'Nicaragua'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ne' },
            _react2.default.createElement('i', { className: 'ne flag' }),
            'Niger'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ng' },
            _react2.default.createElement('i', { className: 'ng flag' }),
            'Nigeria'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'nu' },
            _react2.default.createElement('i', { className: 'nu flag' }),
            'Niue'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'nf' },
            _react2.default.createElement('i', { className: 'nf flag' }),
            'Norfolk Island'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'kp' },
            _react2.default.createElement('i', { className: 'kp flag' }),
            'North Korea'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'mp' },
            _react2.default.createElement('i', { className: 'mp flag' }),
            'Northern Mariana Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'no' },
            _react2.default.createElement('i', { className: 'no flag' }),
            'Norway'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'om' },
            _react2.default.createElement('i', { className: 'om flag' }),
            'Oman'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pk' },
            _react2.default.createElement('i', { className: 'pk flag' }),
            'Pakistan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pw' },
            _react2.default.createElement('i', { className: 'pw flag' }),
            'Palau'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ps' },
            _react2.default.createElement('i', { className: 'ps flag' }),
            'Palestine'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pa' },
            _react2.default.createElement('i', { className: 'pa flag' }),
            'Panama'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'py' },
            _react2.default.createElement('i', { className: 'py flag' }),
            'Paraguay'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pe' },
            _react2.default.createElement('i', { className: 'pe flag' }),
            'Peru'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ph' },
            _react2.default.createElement('i', { className: 'ph flag' }),
            'Philippines'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pn' },
            _react2.default.createElement('i', { className: 'pn flag' }),
            'Pitcairn Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pl' },
            _react2.default.createElement('i', { className: 'pl flag' }),
            'Poland'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pt' },
            _react2.default.createElement('i', { className: 'pt flag' }),
            'Portugal'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pr' },
            _react2.default.createElement('i', { className: 'pr flag' }),
            'Puerto Rico'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'qa' },
            _react2.default.createElement('i', { className: 'qa flag' }),
            'Qatar'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 're' },
            _react2.default.createElement('i', { className: 're flag' }),
            'Reunion'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ro' },
            _react2.default.createElement('i', { className: 'ro flag' }),
            'Romania'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ru' },
            _react2.default.createElement('i', { className: 'ru flag' }),
            'Russia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'rw' },
            _react2.default.createElement('i', { className: 'rw flag' }),
            'Rwanda'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sh' },
            _react2.default.createElement('i', { className: 'sh flag' }),
            'Saint Helena'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'kn' },
            _react2.default.createElement('i', { className: 'kn flag' }),
            'Saint Kitts and Nevis'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'lc' },
            _react2.default.createElement('i', { className: 'lc flag' }),
            'Saint Lucia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'pm' },
            _react2.default.createElement('i', { className: 'pm flag' }),
            'Saint Pierre'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'vc' },
            _react2.default.createElement('i', { className: 'vc flag' }),
            'Saint Vincent'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ws' },
            _react2.default.createElement('i', { className: 'ws flag' }),
            'Samoa'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sm' },
            _react2.default.createElement('i', { className: 'sm flag' }),
            'San Marino'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'gs' },
            _react2.default.createElement('i', { className: 'gs flag' }),
            'Sandwich Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'st' },
            _react2.default.createElement('i', { className: 'st flag' }),
            'Sao Tome'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sa' },
            _react2.default.createElement('i', { className: 'sa flag' }),
            'Saudi Arabia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sn' },
            _react2.default.createElement('i', { className: 'sn flag' }),
            'Senegal'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'cs' },
            _react2.default.createElement('i', { className: 'cs flag' }),
            'Serbia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'rs' },
            _react2.default.createElement('i', { className: 'rs flag' }),
            'Serbia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sc' },
            _react2.default.createElement('i', { className: 'sc flag' }),
            'Seychelles'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sl' },
            _react2.default.createElement('i', { className: 'sl flag' }),
            'Sierra Leone'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sg' },
            _react2.default.createElement('i', { className: 'sg flag' }),
            'Singapore'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sk' },
            _react2.default.createElement('i', { className: 'sk flag' }),
            'Slovakia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'si' },
            _react2.default.createElement('i', { className: 'si flag' }),
            'Slovenia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sb' },
            _react2.default.createElement('i', { className: 'sb flag' }),
            'Solomon Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'so' },
            _react2.default.createElement('i', { className: 'so flag' }),
            'Somalia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'za' },
            _react2.default.createElement('i', { className: 'za flag' }),
            'South Africa'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'kr' },
            _react2.default.createElement('i', { className: 'kr flag' }),
            'South Korea'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'es' },
            _react2.default.createElement('i', { className: 'es flag' }),
            'Spain'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'lk' },
            _react2.default.createElement('i', { className: 'lk flag' }),
            'Sri Lanka'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sd' },
            _react2.default.createElement('i', { className: 'sd flag' }),
            'Sudan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sr' },
            _react2.default.createElement('i', { className: 'sr flag' }),
            'Suriname'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sj' },
            _react2.default.createElement('i', { className: 'sj flag' }),
            'Svalbard'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sz' },
            _react2.default.createElement('i', { className: 'sz flag' }),
            'Swaziland'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'se' },
            _react2.default.createElement('i', { className: 'se flag' }),
            'Sweden'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ch' },
            _react2.default.createElement('i', { className: 'ch flag' }),
            'Switzerland'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'sy' },
            _react2.default.createElement('i', { className: 'sy flag' }),
            'Syria'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tw' },
            _react2.default.createElement('i', { className: 'tw flag' }),
            'Taiwan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tj' },
            _react2.default.createElement('i', { className: 'tj flag' }),
            'Tajikistan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tz' },
            _react2.default.createElement('i', { className: 'tz flag' }),
            'Tanzania'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'th' },
            _react2.default.createElement('i', { className: 'th flag' }),
            'Thailand'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tl' },
            _react2.default.createElement('i', { className: 'tl flag' }),
            'Timorleste'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tg' },
            _react2.default.createElement('i', { className: 'tg flag' }),
            'Togo'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tk' },
            _react2.default.createElement('i', { className: 'tk flag' }),
            'Tokelau'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'to' },
            _react2.default.createElement('i', { className: 'to flag' }),
            'Tonga'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tt' },
            _react2.default.createElement('i', { className: 'tt flag' }),
            'Trinidad'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tn' },
            _react2.default.createElement('i', { className: 'tn flag' }),
            'Tunisia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tr' },
            _react2.default.createElement('i', { className: 'tr flag' }),
            'Turkey'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tm' },
            _react2.default.createElement('i', { className: 'tm flag' }),
            'Turkmenistan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'tv' },
            _react2.default.createElement('i', { className: 'tv flag' }),
            'Tuvalu'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ug' },
            _react2.default.createElement('i', { className: 'ug flag' }),
            'Uganda'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ua' },
            _react2.default.createElement('i', { className: 'ua flag' }),
            'Ukraine'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ae' },
            _react2.default.createElement('i', { className: 'ae flag' }),
            'United Arab Emirates'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'uy' },
            _react2.default.createElement('i', { className: 'uy flag' }),
            'Uruguay'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'um' },
            _react2.default.createElement('i', { className: 'um flag' }),
            'Us Minor Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'vi' },
            _react2.default.createElement('i', { className: 'vi flag' }),
            'Us Virgin Islands'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'uz' },
            _react2.default.createElement('i', { className: 'uz flag' }),
            'Uzbekistan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'vu' },
            _react2.default.createElement('i', { className: 'vu flag' }),
            'Vanuatu'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'va' },
            _react2.default.createElement('i', { className: 'va flag' }),
            'Vatican City'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 've' },
            _react2.default.createElement('i', { className: 've flag' }),
            'Venezuela'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'vn' },
            _react2.default.createElement('i', { className: 'vn flag' }),
            'Vietnam'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'wf' },
            _react2.default.createElement('i', { className: 'wf flag' }),
            'Wallis and Futuna'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'eh' },
            _react2.default.createElement('i', { className: 'eh flag' }),
            'Western Sahara'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'ye' },
            _react2.default.createElement('i', { className: 'ye flag' }),
            'Yemen'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'zm' },
            _react2.default.createElement('i', { className: 'zm flag' }),
            'Zambia'
          ),
          _react2.default.createElement(
            'div',
            { className: 'item', 'data-value': 'zw' },
            _react2.default.createElement('i', { className: 'zw flag' }),
            'Zimbabwe'
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.control).dropdown({
        onChange: this.handleChange.bind(this)
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return $(this.refs.control).dropdown('get value') || null;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      $(this.refs.control).dropdown('setting', 'onChange', _.noop);
      $(this.refs.control).dropdown('set selected', value);
      $(this.refs.control).dropdown('setting', 'onChange', this.handleChange.bind(this));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.props.onChange(this.props.code, event);
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      $(this.refs.control).dropdown('setting', 'onChange', _.noop);
      $(this.refs.control).dropdown('clear');
      $(this.refs.control).dropdown('setting', 'onChange', this.handleChange.bind(this));
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Countryselect;
}(_react2.default.Component);

Countryselect.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string
};
Countryselect.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  onChange: function onChange() {}
};
exports.default = Countryselect;