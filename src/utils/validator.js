import validator from 'validator'
import _ from 'lodash'

export default class Validator {
  static validationFunctions = {
    after_date: validator.isAfter,
    alpha: _.ary(validator.isAlpha, 1),
    alphanum: _.ary(validator.isAlphanumeric, 1),
    before_date: validator.isBefore,
    contains: validator.contains,
    creditcard: _.ary(validator.isCreditCard, 1),
    currency: _.ary(validator.isCurrency, 1),
    date: _.ary(validator.isDate, 1),
    decimal: _.ary(validator.isDecimal, 1),
    email: _.ary(validator.isEmail, 1),
    equal: validator.equals,
    in: validator.isIn,
    integer: _.ary(validator.isInt, 1),

    // Phenominally stupid, but we can't use "length" as a key name in an
    // object beause it'll be treated like an array instead.
    eqlength: (val, len) => validator.isLength(val, len, len),

    match: validator.matches,
    min: (val, bound) => Number(val) >= bound,
    minlength: validator.isLength,
    max: (val, bound) => Number(val) <= bound,
    maxlength: _.bind(validator.isLength, validator, _, 0, _),
    phone: val => validator.matches(val, /[0-9]{3}\-[0-9]{3}\-[0-9]{4}/gi),
    required: _.negate(_.ary(validator.isNull, 1)),
    url: _.ary(validator.isURL, 1)
  }

  static validationMessages = {
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
  }

  // Validate all the rules on a single field
  static create(spec) {
    let {message, ...rules} = spec;

    let vcFuncWrapper = function(func, arg, message, value) {
      // console.log(func, arg, message,value);
      if(func(value, arg)) {
        return {pass: true, message: null}
      }
      else {
        return {pass: false, message: _.template(message)({arg})}
      }
    }

    let validationChain = _.map(rules, (argument, validatorName) => {
      let vcFunc = _.get(this.validationFunctions, validatorName);
      let vcMessage = _.get(this.validationMessages, validatorName, this.validationMessages._default);
      return _.partial(vcFuncWrapper, vcFunc, argument, vcMessage);
    });


    return function(value) {
      return _.reduce(validationChain, (result, vcFunc) => {
        // console.log(result, vcFunc, value);
        let {pass, message} = vcFunc(value);
        let fail = !pass;

        if(message) {
          result.errors.push(message);
        }

        if(fail && result.status === 'passed') {
          result.status = 'failed';
        }
        return result;
      }, {status: 'passed', errors: []});
    }
  }
}
