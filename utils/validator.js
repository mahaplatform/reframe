'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, null, [{
    key: 'create',


    // Validate all the rules on a single field
    value: function create(spec) {
      var _this = this;

      var message = spec.message;

      var rules = _objectWithoutProperties(spec, ['message']);

      var vcFuncWrapper = function vcFuncWrapper(func, arg, message, value) {
        // console.log(func, arg, message,value);
        if (func(value, arg)) {
          return { pass: true, message: null };
        } else {
          return { pass: false, message: _lodash2.default.template(message)({ arg: arg }) };
        }
      };

      var validationChain = _lodash2.default.map(rules, function (argument, validatorName) {
        var vcFunc = _lodash2.default.get(_this.validationFunctions, validatorName);
        var vcMessage = _lodash2.default.get(_this.validationMessages, validatorName, _this.validationMessages._default);
        return _lodash2.default.partial(vcFuncWrapper, vcFunc, argument, vcMessage);
      });

      return function (value) {
        return _lodash2.default.reduce(validationChain, function (result, vcFunc) {
          // console.log(result, vcFunc, value);

          var _vcFunc = vcFunc(value);

          var pass = _vcFunc.pass;
          var message = _vcFunc.message;

          var fail = !pass;

          if (message) {
            result.errors.push(message);
          }

          if (fail && result.status === 'passed') {
            result.status = 'failed';
          }
          return result;
        }, { status: 'passed', errors: [] });
      };
    }
  }]);

  return Validator;
}();

Validator.validationFunctions = {
  after_date: _validator2.default.isAfter,
  alpha: _lodash2.default.ary(_validator2.default.isAlpha, 1),
  alphanum: _lodash2.default.ary(_validator2.default.isAlphanumeric, 1),
  before_date: _validator2.default.isBefore,
  contains: _validator2.default.contains,
  creditcard: _lodash2.default.ary(_validator2.default.isCreditCard, 1),
  currency: _lodash2.default.ary(_validator2.default.isCurrency, 1),
  date: _lodash2.default.ary(_validator2.default.isDate, 1),
  decimal: _lodash2.default.ary(_validator2.default.isDecimal, 1),
  email: _lodash2.default.ary(_validator2.default.isEmail, 1),
  equal: _validator2.default.equals,
  in: _validator2.default.isIn,
  integer: _lodash2.default.ary(_validator2.default.isInt, 1),

  // Phenominally stupid, but we can't use "length" as a key name in an
  // object beause it'll be treated like an array instead.
  eqlength: function eqlength(val, len) {
    return _validator2.default.isLength(val, len, len);
  },

  match: _validator2.default.matches,
  min: function min(val, bound) {
    return Number(val) >= bound;
  },
  minlength: _validator2.default.isLength,
  max: function max(val, bound) {
    return Number(val) <= bound;
  },
  maxlength: _lodash2.default.bind(_validator2.default.isLength, _validator2.default, _lodash2.default, 0, _lodash2.default),
  phone: function phone(val) {
    return _validator2.default.matches(val, /[0-9]{3}\-[0-9]{3}\-[0-9]{4}/gi);
  },
  required: _lodash2.default.negate(_lodash2.default.ary(_validator2.default.isNull, 1)),
  url: _lodash2.default.ary(_validator2.default.isURL, 1)
};
Validator.validationMessages = {
  _default: 'Please provide a valid entry.',

  after_date: 'Please enter a date after ${arg}.',
  alpha: 'Please use only alphabetic characters (A-Z).',
  alphanum: 'Please use only alpha-numeric characters (A-Z and 0-9).',
  before_date: 'Please enter a date before ${arg}.',
  contains: 'This entry must contain "${arg}".',
  creditcard: 'Please provide a valid credit card number.',
  currency: 'Please enter an amount of money (E.g., "$25.00")',
  date: 'Please enter a valid date',
  decimal: 'Please enter a decimal number (E.g., "1.5")',
  email: 'Please enter a valid email address',
  equal: 'This entry must be exactly "${arg}".',
  in: 'This entry must be one of ${arg}',
  integer: 'This entry must be a whole number (E.g., 5 or -7)',
  eqlength: 'This entry must be exactly ${arg} characters long.',
  match: 'This entry doesn\'t match an expected value.',
  min: 'This entry must be less than ${arg}',
  minlength: 'This entry must be at least ${arg} characters long.',
  max: 'This entry must be greater than ${arg}',
  maxlength: 'This entry must be less than ${arg} characters long.',
  phone: 'This entry must be in the format XXX-XXX-XXXX.',
  required: 'Please provide an entry here.',
  url: 'Please provide a valid URL'
};
exports.default = Validator;