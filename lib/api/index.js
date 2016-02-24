'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientFactory = clientFactory;
//          ///////////////////////////////////////////////////
//
//                           The API Client
//
//
//
//              Our API adapter works declaratively for the
//              most part. You'll see that we import some
//              classes called "Interceptors", which can
//              augment the capabilities of our API client.
//
//              The client has some defaults, like the path
//              to the API server, the authentication
//              headers, and the default error code.
//
//              All API methods return promises according
//              to the Promises/A+ specification.
//
//                             ~ Gotchas ~
//
//            ERRORS:
//              By default, our client treats all server
//              responses as successful, regardless of
//              status code. You need to use the errorCode
//              interceptor, as I have below, to specify
//              which codes are error codes.
//
//            WRAPPING:
//              Always wrap interceptors when you want to
//              tweak the client. If you modify clients
//              directly, you'll break things.
//
//            LINKED RESOURCES:
//              The HATEOAS interceptor requires native ES5
//              support in browsers. Shims will not work.
//
//            ERROR LOOPS:
//              If the server responds with an error code
//              less than what is specified below, our API-
//              dependent data stores will keep requesting
//              data over and over. For example, if your
//              error codes are >= 500 and the server
//              returns 401, the request will retry itself
//              forever because the API adapter does not
//              consider code 401 to be an error. Account
//              for this when writing API-dependent
//              classes.
//
//            RESOURCE IDS:
//              Make sure to convert numeric IDs into
//              strings when writing new API stuff. If you
//              try to use an int when building a path,
//              you'll get nasty weird errors. If you find
//              a strange error when using Resources, make
//              sure you're never putting anything but
//              strings into the actual request.
//
//              Suggested Reading:
//              - https://github.com/cujojs/rest
//
//                ///////////////////////////////////////
//

// These are interceptors. They wrap around the core REST library and add
// features and functionality. The basic HTTP client is extremely minimal.
// As I mentioned, it doesn't even handle errors! Sounds crazy, but it means
// we are not importing any REST complexities we don't use.

// The basic HTTP client, rest.js
var rest = require('rest');

var _ = require('lodash');
var when = require('when');
var pipeline = require('when/pipeline');

// Provides automatic detection of MIME types. Detects JSON and converts to objects/arrays.
// Documented at https://github.com/cujojs/rest/blob/master/docs/interceptors.md#mime-interceptor
var _mime = require('rest/interceptor/mime');

// Provides a prefix for all requests.
// Documented at https://github.com/cujojs/rest/blob/master/docs/interceptors.md#module-rest/interceptor/pathPrefix
var _pathPrefix = require('rest/interceptor/pathPrefix');

// Provides a default response for errors
// Documented at https://github.com/cujojs/rest/blob/master/docs/interceptors.md#module-rest/interceptor/errorCode
var _errorCode = require('rest/interceptor/errorCode');

// Adds some default things like headers
// Documented at: https://github.com/cujojs/rest/blob/master/docs/interceptors.md#default-request-interceptor
var _defaultRequest = require('rest/interceptor/defaultRequest');

// This is our API version
var apiVersion = 1;

var clientDefaults = {
  mimeType: 'application/json',
  errorCode: 404,
  pathPrefix: '',
  defaultRequest: {
    method: 'GET',
    path: '/',
    headers: { 'Content-Type': 'application/json' },
    mixin: { withCredentials: true }
  },
  resource: null
};

function clientFactory(args) {
  var _$merge = _.merge(_.clone(clientDefaults), args);

  var mimeType = _$merge.mimeType;
  var errorCode = _$merge.errorCode;
  var pathPrefix = _$merge.pathPrefix;
  var resource = _$merge.resource;
  var defaultRequest = _$merge.defaultRequest;

  if (resource !== null && !_.startsWith(resource, '/')) {
    resource = '/' + resource;
  }
  var client = rest.wrap(_mime, { accept: mimeType }).wrap(_errorCode, { code: errorCode }) // All response codes >= 404 are treated as errors/failures.
  .wrap(_pathPrefix, { prefix: pathPrefix + (resource || '') }) // Set local prefix if we're running in devmode
  .wrap(_defaultRequest, defaultRequest);
  return client;
}

function unwrapEntity(response) {
  if (!response.entity) return response;
  return response.entity;
}

var API = function API() {
  var customClient = arguments.length <= 0 || arguments[0] === undefined ? clientFactory() : arguments[0];

  this.client = customClient;
  var self = this;

  /**
   * What the hell is this?
   * It lets you bake ready-to-go functions that represent an API transaction.
   * Instead of doing, for example:
   *
   *    var request = API.load('contacts/5');
   *    request.then(function(response) {
   *      ...
   *    });
   *
   * You can write:
   *
   *    var endpoint = API.factory.load('contacts/5');
   *    var request = endpoint();
   *    request.then(function(response) {
   *      ...
   *    });
   *
   * Using `factory` will make a function that repeats a configured request.
   * You can call the function as many times as you'd like and it will redo the
   * request. The factory methods are generated dynamically, so you don't need
   * to define them manually. Simply add your methods to the API object and leave
   * this part alone. Metaprogramming FTW.
   *
   * How does this work? It picks out (with _.pick) the properties of API that have functions
   * (_.funcions) and maps those functions into a new object (_.mapValues) that mirrors
   * the main object and binds (_.partial) your arguments to a function that we give back.
   * The actual API method is not called at the invocation of any factory. It is
   * deferred until the returned function is run.
   *
   * Metaphorically, it's assembling a box containing the method you want, and instead
   * of knobs and dials to change its options, there's just one big button that says "Go."
   *
   * This is useful for providing stateless API callbacks to stores and models, because
   * they don't have to store IDs or query strings or any other information to get data.
   * They can just call a plain function no matter what.
   */

  this.factory = _.mapValues(_.pick(this, _.functions(this)), function (method) {
    return function () {
      // let arity = arguments.length;
      return _.partial(_.wrap(method, function (mthd, args) {
        // var originalArgs = _.take(arity);
        return mthd.apply(self, args);
      }), arguments);
    };
  });
};

_.extend(API.prototype, {
  load: function load(endpoint) {
    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return this.client({ method: 'GET', path: endpoint, params: params });
  },

  loadJSON: function loadJSON(endpoint) {
    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // Fetch JSON out of response automatically
    return this.load(endpoint, params).entity();
  },

  get: function get(endpoint) {
    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // Alias of this.load()
    return this.load(endpoint, params);
  },

  post: function post(endpoint) {
    var payload = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
    var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    return this.client({ method: 'POST', path: endpoint, entity: payload, params: params });
  },

  patch: function patch(endpoint, payload) {
    var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    return this.client({ method: 'PATCH', path: endpoint, entity: payload, params: params });
  },

  put: function put(endpoint, payload) {
    var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    return this.client({ method: 'PUT', path: endpoint, entity: payload, params: params });
  },

  delete: function _delete(resource) {
    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return this.client({ method: 'DELETE', path: resource, params: params });
  },

  destroy: function destroy(resource) {
    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // Alias of this.delete()
    return this.delete(resource, params);
  }
});

API.Resource = function (resource, resourceDef) {
  return _.assign(Object.create(new API(clientFactory({ resource: resource }))), resourceDef);
};

API.Autopage = function (resource) {
  var pageSize = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

  var pagedAPI = new API(clientFactory({ resource: resource }));

  return {
    __proto__: pagedAPI,

    pageNumber: 0,
    pageSize: pageSize,
    totalPages: undefined,
    totalRecords: undefined,
    canLoadMore: false,
    links: {
      next: null,
      prev: null,
      first: null,
      last: null
    },
    requests: [],

    current: function current() {
      return this.loadPage(this.pageNumber);
    },

    to: function to(page) {
      return this.loadPage(page);
    },

    next: function next() {
      return this.loadPage(this.pageNumber + 1);
    },

    previous: function previous() {
      return this.loadPage(this.pageNumber - 1);
    },

    first: function first() {
      return this.loadPage(1);
    },

    last: function last() {
      // If we don't know totalPages yet, we have to figure out how many
      // records exist on a resource.
      if (this.totalPages !== undefined) {
        return this.loadPage(this.totalPages);
      } else {
        var promiseSequence = [when.lift(_.bind(this.first, this)), when.lift(_.bind(this._setPageVars, this)), when.lift(_.bind(this.last, this))];
        return pipeline(promiseSequence);
      }
    },

    hasMore: function hasMore() {
      if (this.totalPages === undefined) {
        var promiseSequence = [when.lift(_.bind(this.first, this)), when.lift(_.bind(this._setPageVars, this))];
        return true;
      } else {
        return this.pageNumber < this.totalPages;
      }
    },

    loadPage: function loadPage(num) {
      var _this = this;

      var mutate = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      // Can't go lower than page one, fella.
      if (num < 1) {
        num = 1;
      }

      // And you can't go higher than the maximum
      if (this.totalPages !== undefined && num > this.totalPages) {
        num = totalPages;
      }
      var pagedPromise = this.loadJSON(undefined, { page: num });
      pagedPromise.tap(function (_ref) {
        var numRecords = _ref.total;

        if (mutate) {
          _this.pageNumber = num;
        }
        _this.totalPages = Math.ceil(numRecords / _this.pageSize);
      });
      return pagedPromise;
    },

    count: function count() {
      var _this2 = this;

      if (this.totalRecords !== undefined) {
        return when(this.totalRecords);
      } else {
        return this._stat().then(function () {
          return _this2.totalRecords;
        });
      }
    },

    _setPageVars: function _setPageVars(_ref2) {
      var total_records = _ref2.total_records;
      var total_pages = _ref2.total_pages;
      var links = _ref2.links;
      var current_page = _ref2.current_page;

      this.pageNumber = current_page;
      this.totalPages = total_pages;
      this.links.next = links.next || null;
      this.links.prev = links.prev || null;
      this.links.first = links.first || null;
      this.links.last = links.last || null;
      this.canLoadMore = links.next == undefined;
    },

    _stat: function _stat() {
      var promiseSequence = [when.lift(_.bind(this.loadPage, this, 1, false)), when.lift(_.bind(this._setPageVars, this))];
      var p = pipeline(promiseSequence);
      p.inspect();
      return p;
    }
  };
};

exports.default = API;