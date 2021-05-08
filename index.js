(function webpackUniversalModuleDefinition(root, factory) {
  //CommonJS2 Comment
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  //AMD Comment
  else if (typeof define === 'function' && define.amd) define([], factory);
  //CommonJS Comment
  else if (typeof exports === 'object') exports['imgur'] = factory();
  //Root Comment
  else root['imgur'] = factory();
})(
  (() => {
    if (typeof self !== 'undefined') {
      return self;
    } else if (typeof window !== 'undefined') {
      return window;
    } else if (typeof global !== 'undefined') {
      return global;
    } else {
      return Function('return this')();
    }
  })(),
  function () {
    return /******/ (() => {
      // webpackBootstrap
      /******/ var __webpack_modules__ = {
        /***/ './node_modules/array-filter/index.js':
          /*!********************************************!*\
  !*** ./node_modules/array-filter/index.js ***!
  \********************************************/
          /***/ (module) => {
            /**
             * Array#filter.
             *
             * @param {Array} arr
             * @param {Function} fn
             * @param {Object=} self
             * @return {Array}
             * @throw TypeError
             */
            module.exports = function (arr, fn, self) {
              if (arr.filter) return arr.filter(fn, self);
              if (void 0 === arr || null === arr) throw new TypeError();
              if ('function' != typeof fn) throw new TypeError();
              var ret = [];

              for (var i = 0; i < arr.length; i++) {
                if (!hasOwn.call(arr, i)) continue;
                var val = arr[i];
                if (fn.call(self, val, i, arr)) ret.push(val);
              }

              return ret;
            };

            var hasOwn = Object.prototype.hasOwnProperty;

            /***/
          },

        /***/ './node_modules/assert/build/assert.js':
          /*!*********************************************!*\
  !*** ./node_modules/assert/build/assert.js ***!
  \*********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';
            /* provided dependency */ var process = __webpack_require__(
              /*! process/browser */ './node_modules/process/browser.js'
            );
            /* provided dependency */ var console = __webpack_require__(
              /*! console-browserify */ './node_modules/console-browserify/index.js'
            );
            // Currently in sync with Node.js lib/assert.js
            // https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
            // Originally from narwhal.js (http://narwhaljs.org)
            // Copyright (c) 2009 Thomas Robinson <280north.com>
            //
            // Permission is hereby granted, free of charge, to any person obtaining a copy
            // of this software and associated documentation files (the 'Software'), to
            // deal in the Software without restriction, including without limitation the
            // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
            // sell copies of the Software, and to permit persons to whom the Software is
            // furnished to do so, subject to the following conditions:
            //
            // The above copyright notice and this permission notice shall be included in
            // all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            // AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

            function _typeof(obj) {
              if (
                typeof Symbol === 'function' &&
                typeof Symbol.iterator === 'symbol'
              ) {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };
              }

              return _typeof(obj);
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
              }
            }

            var _require = __webpack_require__(
                /*! ./internal/errors */ './node_modules/assert/build/internal/errors.js'
              ),
              _require$codes = _require.codes,
              ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT,
              ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
              ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE,
              ERR_INVALID_RETURN_VALUE =
                _require$codes.ERR_INVALID_RETURN_VALUE,
              ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;

            var AssertionError = __webpack_require__(
              /*! ./internal/assert/assertion_error */ './node_modules/assert/build/internal/assert/assertion_error.js'
            );

            var _require2 = __webpack_require__(
                /*! util/ */ './node_modules/util/util.js'
              ),
              inspect = _require2.inspect;

            var _require$types = __webpack_require__(
                /*! util/ */ './node_modules/util/util.js'
              ).types,
              isPromise = _require$types.isPromise,
              isRegExp = _require$types.isRegExp;

            var objectAssign = Object.assign
              ? Object.assign
              : __webpack_require__(
                  /*! es6-object-assign */ './node_modules/es6-object-assign/index.js'
                ).assign;
            var objectIs = Object.is
              ? Object.is
              : __webpack_require__(
                  /*! object-is */ './node_modules/object-is/index.js'
                );
            var errorCache = new Map();
            var isDeepEqual;
            var isDeepStrictEqual;
            var parseExpressionAt;
            var findNodeAround;
            var decoder;

            function lazyLoadComparison() {
              var comparison = __webpack_require__(
                /*! ./internal/util/comparisons */ './node_modules/assert/build/internal/util/comparisons.js'
              );

              isDeepEqual = comparison.isDeepEqual;
              isDeepStrictEqual = comparison.isDeepStrictEqual;
            } // Escape control characters but not \n and \t to keep the line breaks and
            // indentation intact.
            // eslint-disable-next-line no-control-regex

            var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
            var meta = [
              '\\u0000',
              '\\u0001',
              '\\u0002',
              '\\u0003',
              '\\u0004',
              '\\u0005',
              '\\u0006',
              '\\u0007',
              '\\b',
              '',
              '',
              '\\u000b',
              '\\f',
              '',
              '\\u000e',
              '\\u000f',
              '\\u0010',
              '\\u0011',
              '\\u0012',
              '\\u0013',
              '\\u0014',
              '\\u0015',
              '\\u0016',
              '\\u0017',
              '\\u0018',
              '\\u0019',
              '\\u001a',
              '\\u001b',
              '\\u001c',
              '\\u001d',
              '\\u001e',
              '\\u001f',
            ];

            var escapeFn = function escapeFn(str) {
              return meta[str.charCodeAt(0)];
            };

            var warned = false; // The assert module provides functions that throw
            // AssertionError's when particular conditions are not met. The
            // assert module must conform to the following interface.

            var assert = (module.exports = ok);
            var NO_EXCEPTION_SENTINEL = {}; // All of the following functions must throw an AssertionError
            // when a corresponding condition is not met, with a message that
            // may be undefined if not provided. All assertion methods provide
            // both the actual and expected values to the assertion error for
            // display purposes.

            function innerFail(obj) {
              if (obj.message instanceof Error) throw obj.message;
              throw new AssertionError(obj);
            }

            function fail(actual, expected, message, operator, stackStartFn) {
              var argsLen = arguments.length;
              var internalMessage;

              if (argsLen === 0) {
                internalMessage = 'Failed';
              } else if (argsLen === 1) {
                message = actual;
                actual = undefined;
              } else {
                if (warned === false) {
                  warned = true;
                  var warn = process.emitWarning
                    ? process.emitWarning
                    : console.warn.bind(console);
                  warn(
                    'assert.fail() with more than one argument is deprecated. ' +
                      'Please use assert.strictEqual() instead or only pass a message.',
                    'DeprecationWarning',
                    'DEP0094'
                  );
                }

                if (argsLen === 2) operator = '!=';
              }

              if (message instanceof Error) throw message;
              var errArgs = {
                actual: actual,
                expected: expected,
                operator: operator === undefined ? 'fail' : operator,
                stackStartFn: stackStartFn || fail,
              };

              if (message !== undefined) {
                errArgs.message = message;
              }

              var err = new AssertionError(errArgs);

              if (internalMessage) {
                err.message = internalMessage;
                err.generatedMessage = true;
              }

              throw err;
            }

            assert.fail = fail; // The AssertionError is defined in internal/error.

            assert.AssertionError = AssertionError;

            function innerOk(fn, argLen, value, message) {
              if (!value) {
                var generatedMessage = false;

                if (argLen === 0) {
                  generatedMessage = true;
                  message = 'No value argument passed to `assert.ok()`';
                } else if (message instanceof Error) {
                  throw message;
                }

                var err = new AssertionError({
                  actual: value,
                  expected: true,
                  message: message,
                  operator: '==',
                  stackStartFn: fn,
                });
                err.generatedMessage = generatedMessage;
                throw err;
              }
            } // Pure assertion tests whether a value is truthy, as determined
            // by !!value.

            function ok() {
              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              innerOk.apply(void 0, [ok, args.length].concat(args));
            }

            assert.ok = ok; // The equality assertion tests shallow, coercive equality with ==.

            /* eslint-disable no-restricted-properties */

            assert.equal = function equal(actual, expected, message) {
              if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
              } // eslint-disable-next-line eqeqeq

              if (actual != expected) {
                innerFail({
                  actual: actual,
                  expected: expected,
                  message: message,
                  operator: '==',
                  stackStartFn: equal,
                });
              }
            }; // The non-equality assertion tests for whether two objects are not
            // equal with !=.

            assert.notEqual = function notEqual(actual, expected, message) {
              if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
              } // eslint-disable-next-line eqeqeq

              if (actual == expected) {
                innerFail({
                  actual: actual,
                  expected: expected,
                  message: message,
                  operator: '!=',
                  stackStartFn: notEqual,
                });
              }
            }; // The equivalence assertion tests a deep equality relation.

            assert.deepEqual = function deepEqual(actual, expected, message) {
              if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
              }

              if (isDeepEqual === undefined) lazyLoadComparison();

              if (!isDeepEqual(actual, expected)) {
                innerFail({
                  actual: actual,
                  expected: expected,
                  message: message,
                  operator: 'deepEqual',
                  stackStartFn: deepEqual,
                });
              }
            }; // The non-equivalence assertion tests for any deep inequality.

            assert.notDeepEqual = function notDeepEqual(
              actual,
              expected,
              message
            ) {
              if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
              }

              if (isDeepEqual === undefined) lazyLoadComparison();

              if (isDeepEqual(actual, expected)) {
                innerFail({
                  actual: actual,
                  expected: expected,
                  message: message,
                  operator: 'notDeepEqual',
                  stackStartFn: notDeepEqual,
                });
              }
            };
            /* eslint-enable */

            assert.deepStrictEqual = function deepStrictEqual(
              actual,
              expected,
              message
            ) {
              if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
              }

              if (isDeepEqual === undefined) lazyLoadComparison();

              if (!isDeepStrictEqual(actual, expected)) {
                innerFail({
                  actual: actual,
                  expected: expected,
                  message: message,
                  operator: 'deepStrictEqual',
                  stackStartFn: deepStrictEqual,
                });
              }
            };

            assert.notDeepStrictEqual = notDeepStrictEqual;

            function notDeepStrictEqual(actual, expected, message) {
              if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
              }

              if (isDeepEqual === undefined) lazyLoadComparison();

              if (isDeepStrictEqual(actual, expected)) {
                innerFail({
                  actual: actual,
                  expected: expected,
                  message: message,
                  operator: 'notDeepStrictEqual',
                  stackStartFn: notDeepStrictEqual,
                });
              }
            }

            assert.strictEqual = function strictEqual(
              actual,
              expected,
              message
            ) {
              if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
              }

              if (!objectIs(actual, expected)) {
                innerFail({
                  actual: actual,
                  expected: expected,
                  message: message,
                  operator: 'strictEqual',
                  stackStartFn: strictEqual,
                });
              }
            };

            assert.notStrictEqual = function notStrictEqual(
              actual,
              expected,
              message
            ) {
              if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
              }

              if (objectIs(actual, expected)) {
                innerFail({
                  actual: actual,
                  expected: expected,
                  message: message,
                  operator: 'notStrictEqual',
                  stackStartFn: notStrictEqual,
                });
              }
            };

            var Comparison = function Comparison(obj, keys, actual) {
              var _this = this;

              _classCallCheck(this, Comparison);

              keys.forEach(function (key) {
                if (key in obj) {
                  if (
                    actual !== undefined &&
                    typeof actual[key] === 'string' &&
                    isRegExp(obj[key]) &&
                    obj[key].test(actual[key])
                  ) {
                    _this[key] = actual[key];
                  } else {
                    _this[key] = obj[key];
                  }
                }
              });
            };

            function compareExceptionKey(
              actual,
              expected,
              key,
              message,
              keys,
              fn
            ) {
              if (
                !(key in actual) ||
                !isDeepStrictEqual(actual[key], expected[key])
              ) {
                if (!message) {
                  // Create placeholder objects to create a nice output.
                  var a = new Comparison(actual, keys);
                  var b = new Comparison(expected, keys, actual);
                  var err = new AssertionError({
                    actual: a,
                    expected: b,
                    operator: 'deepStrictEqual',
                    stackStartFn: fn,
                  });
                  err.actual = actual;
                  err.expected = expected;
                  err.operator = fn.name;
                  throw err;
                }

                innerFail({
                  actual: actual,
                  expected: expected,
                  message: message,
                  operator: fn.name,
                  stackStartFn: fn,
                });
              }
            }

            function expectedException(actual, expected, msg, fn) {
              if (typeof expected !== 'function') {
                if (isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.

                if (arguments.length === 2) {
                  throw new ERR_INVALID_ARG_TYPE(
                    'expected',
                    ['Function', 'RegExp'],
                    expected
                  );
                } // Handle primitives properly.

                if (_typeof(actual) !== 'object' || actual === null) {
                  var err = new AssertionError({
                    actual: actual,
                    expected: expected,
                    message: msg,
                    operator: 'deepStrictEqual',
                    stackStartFn: fn,
                  });
                  err.operator = fn.name;
                  throw err;
                }

                var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
                // as well.

                if (expected instanceof Error) {
                  keys.push('name', 'message');
                } else if (keys.length === 0) {
                  throw new ERR_INVALID_ARG_VALUE(
                    'error',
                    expected,
                    'may not be an empty object'
                  );
                }

                if (isDeepEqual === undefined) lazyLoadComparison();
                keys.forEach(function (key) {
                  if (
                    typeof actual[key] === 'string' &&
                    isRegExp(expected[key]) &&
                    expected[key].test(actual[key])
                  ) {
                    return;
                  }

                  compareExceptionKey(actual, expected, key, msg, keys, fn);
                });
                return true;
              } // Guard instanceof against arrow functions as they don't have a prototype.

              if (
                expected.prototype !== undefined &&
                actual instanceof expected
              ) {
                return true;
              }

              if (Error.isPrototypeOf(expected)) {
                return false;
              }

              return expected.call({}, actual) === true;
            }

            function getActual(fn) {
              if (typeof fn !== 'function') {
                throw new ERR_INVALID_ARG_TYPE('fn', 'Function', fn);
              }

              try {
                fn();
              } catch (e) {
                return e;
              }

              return NO_EXCEPTION_SENTINEL;
            }

            function checkIsPromise(obj) {
              // Accept native ES6 promises and promises that are implemented in a similar
              // way. Do not accept thenables that use a function as `obj` and that have no
              // `catch` handler.
              // TODO: thenables are checked up until they have the correct methods,
              // but according to documentation, the `then` method should receive
              // the `fulfill` and `reject` arguments as well or it may be never resolved.
              return (
                isPromise(obj) ||
                (obj !== null &&
                  _typeof(obj) === 'object' &&
                  typeof obj.then === 'function' &&
                  typeof obj.catch === 'function')
              );
            }

            function waitForActual(promiseFn) {
              return Promise.resolve().then(function () {
                var resultPromise;

                if (typeof promiseFn === 'function') {
                  // Return a rejected promise if `promiseFn` throws synchronously.
                  resultPromise = promiseFn(); // Fail in case no promise is returned.

                  if (!checkIsPromise(resultPromise)) {
                    throw new ERR_INVALID_RETURN_VALUE(
                      'instance of Promise',
                      'promiseFn',
                      resultPromise
                    );
                  }
                } else if (checkIsPromise(promiseFn)) {
                  resultPromise = promiseFn;
                } else {
                  throw new ERR_INVALID_ARG_TYPE(
                    'promiseFn',
                    ['Function', 'Promise'],
                    promiseFn
                  );
                }

                return Promise.resolve()
                  .then(function () {
                    return resultPromise;
                  })
                  .then(function () {
                    return NO_EXCEPTION_SENTINEL;
                  })
                  .catch(function (e) {
                    return e;
                  });
              });
            }

            function expectsError(stackStartFn, actual, error, message) {
              if (typeof error === 'string') {
                if (arguments.length === 4) {
                  throw new ERR_INVALID_ARG_TYPE(
                    'error',
                    ['Object', 'Error', 'Function', 'RegExp'],
                    error
                  );
                }

                if (_typeof(actual) === 'object' && actual !== null) {
                  if (actual.message === error) {
                    throw new ERR_AMBIGUOUS_ARGUMENT(
                      'error/message',
                      'The error message "'.concat(
                        actual.message,
                        '" is identical to the message.'
                      )
                    );
                  }
                } else if (actual === error) {
                  throw new ERR_AMBIGUOUS_ARGUMENT(
                    'error/message',
                    'The error "'.concat(
                      actual,
                      '" is identical to the message.'
                    )
                  );
                }

                message = error;
                error = undefined;
              } else if (
                error != null &&
                _typeof(error) !== 'object' &&
                typeof error !== 'function'
              ) {
                throw new ERR_INVALID_ARG_TYPE(
                  'error',
                  ['Object', 'Error', 'Function', 'RegExp'],
                  error
                );
              }

              if (actual === NO_EXCEPTION_SENTINEL) {
                var details = '';

                if (error && error.name) {
                  details += ' ('.concat(error.name, ')');
                }

                details += message ? ': '.concat(message) : '.';
                var fnType =
                  stackStartFn.name === 'rejects' ? 'rejection' : 'exception';
                innerFail({
                  actual: undefined,
                  expected: error,
                  operator: stackStartFn.name,
                  message: 'Missing expected '.concat(fnType).concat(details),
                  stackStartFn: stackStartFn,
                });
              }

              if (
                error &&
                !expectedException(actual, error, message, stackStartFn)
              ) {
                throw actual;
              }
            }

            function expectsNoError(stackStartFn, actual, error, message) {
              if (actual === NO_EXCEPTION_SENTINEL) return;

              if (typeof error === 'string') {
                message = error;
                error = undefined;
              }

              if (!error || expectedException(actual, error)) {
                var details = message ? ': '.concat(message) : '.';
                var fnType =
                  stackStartFn.name === 'doesNotReject'
                    ? 'rejection'
                    : 'exception';
                innerFail({
                  actual: actual,
                  expected: error,
                  operator: stackStartFn.name,
                  message:
                    'Got unwanted '.concat(fnType).concat(details, '\n') +
                    'Actual message: "'.concat(actual && actual.message, '"'),
                  stackStartFn: stackStartFn,
                });
              }

              throw actual;
            }

            assert.throws = function throws(promiseFn) {
              for (
                var _len2 = arguments.length,
                  args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                  _key2 = 1;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2 - 1] = arguments[_key2];
              }

              expectsError.apply(
                void 0,
                [throws, getActual(promiseFn)].concat(args)
              );
            };

            assert.rejects = function rejects(promiseFn) {
              for (
                var _len3 = arguments.length,
                  args = new Array(_len3 > 1 ? _len3 - 1 : 0),
                  _key3 = 1;
                _key3 < _len3;
                _key3++
              ) {
                args[_key3 - 1] = arguments[_key3];
              }

              return waitForActual(promiseFn).then(function (result) {
                return expectsError.apply(
                  void 0,
                  [rejects, result].concat(args)
                );
              });
            };

            assert.doesNotThrow = function doesNotThrow(fn) {
              for (
                var _len4 = arguments.length,
                  args = new Array(_len4 > 1 ? _len4 - 1 : 0),
                  _key4 = 1;
                _key4 < _len4;
                _key4++
              ) {
                args[_key4 - 1] = arguments[_key4];
              }

              expectsNoError.apply(
                void 0,
                [doesNotThrow, getActual(fn)].concat(args)
              );
            };

            assert.doesNotReject = function doesNotReject(fn) {
              for (
                var _len5 = arguments.length,
                  args = new Array(_len5 > 1 ? _len5 - 1 : 0),
                  _key5 = 1;
                _key5 < _len5;
                _key5++
              ) {
                args[_key5 - 1] = arguments[_key5];
              }

              return waitForActual(fn).then(function (result) {
                return expectsNoError.apply(
                  void 0,
                  [doesNotReject, result].concat(args)
                );
              });
            };

            assert.ifError = function ifError(err) {
              if (err !== null && err !== undefined) {
                var message = 'ifError got unwanted exception: ';

                if (
                  _typeof(err) === 'object' &&
                  typeof err.message === 'string'
                ) {
                  if (err.message.length === 0 && err.constructor) {
                    message += err.constructor.name;
                  } else {
                    message += err.message;
                  }
                } else {
                  message += inspect(err);
                }

                var newErr = new AssertionError({
                  actual: err,
                  expected: null,
                  operator: 'ifError',
                  message: message,
                  stackStartFn: ifError,
                }); // Make sure we actually have a stack trace!

                var origStack = err.stack;

                if (typeof origStack === 'string') {
                  // This will remove any duplicated frames from the error frames taken
                  // from within `ifError` and add the original error frames to the newly
                  // created ones.
                  var tmp2 = origStack.split('\n');
                  tmp2.shift(); // Filter all frames existing in err.stack.

                  var tmp1 = newErr.stack.split('\n');

                  for (var i = 0; i < tmp2.length; i++) {
                    // Find the first occurrence of the frame.
                    var pos = tmp1.indexOf(tmp2[i]);

                    if (pos !== -1) {
                      // Only keep new frames.
                      tmp1 = tmp1.slice(0, pos);
                      break;
                    }
                  }

                  newErr.stack = ''
                    .concat(tmp1.join('\n'), '\n')
                    .concat(tmp2.join('\n'));
                }

                throw newErr;
              }
            }; // Expose a strict only variant of assert

            function strict() {
              for (
                var _len6 = arguments.length,
                  args = new Array(_len6),
                  _key6 = 0;
                _key6 < _len6;
                _key6++
              ) {
                args[_key6] = arguments[_key6];
              }

              innerOk.apply(void 0, [strict, args.length].concat(args));
            }

            assert.strict = objectAssign(strict, assert, {
              equal: assert.strictEqual,
              deepEqual: assert.deepStrictEqual,
              notEqual: assert.notStrictEqual,
              notDeepEqual: assert.notDeepStrictEqual,
            });
            assert.strict.strict = assert.strict;

            /***/
          },

        /***/ './node_modules/assert/build/internal/assert/assertion_error.js':
          /*!**********************************************************************!*\
  !*** ./node_modules/assert/build/internal/assert/assertion_error.js ***!
  \**********************************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';
            /* provided dependency */ var process = __webpack_require__(
              /*! process/browser */ './node_modules/process/browser.js'
            );
            // Currently in sync with Node.js lib/internal/assert/assertion_error.js
            // https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c

            function _objectSpread(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                var ownKeys = Object.keys(source);

                if (typeof Object.getOwnPropertySymbols === 'function') {
                  ownKeys = ownKeys.concat(
                    Object.getOwnPropertySymbols(source).filter(function (sym) {
                      return Object.getOwnPropertyDescriptor(
                        source,
                        sym
                      ).enumerable;
                    })
                  );
                }

                ownKeys.forEach(function (key) {
                  _defineProperty(target, key, source[key]);
                });
              }

              return target;
            }

            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: true,
                  configurable: true,
                  writable: true,
                });
              } else {
                obj[key] = value;
              }

              return obj;
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
              }
            }

            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }

            function _possibleConstructorReturn(self, call) {
              if (
                call &&
                (_typeof(call) === 'object' || typeof call === 'function')
              ) {
                return call;
              }

              return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              }

              return self;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              }

              subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: true,
                    configurable: true,
                  },
                }
              );
              if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _wrapNativeSuper(Class) {
              var _cache = typeof Map === 'function' ? new Map() : undefined;

              _wrapNativeSuper = function _wrapNativeSuper(Class) {
                if (Class === null || !_isNativeFunction(Class)) return Class;

                if (typeof Class !== 'function') {
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                }

                if (typeof _cache !== 'undefined') {
                  if (_cache.has(Class)) return _cache.get(Class);

                  _cache.set(Class, Wrapper);
                }

                function Wrapper() {
                  return _construct(
                    Class,
                    arguments,
                    _getPrototypeOf(this).constructor
                  );
                }

                Wrapper.prototype = Object.create(Class.prototype, {
                  constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true,
                  },
                });
                return _setPrototypeOf(Wrapper, Class);
              };

              return _wrapNativeSuper(Class);
            }

            function isNativeReflectConstruct() {
              if (typeof Reflect === 'undefined' || !Reflect.construct)
                return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === 'function') return true;

              try {
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                );
                return true;
              } catch (e) {
                return false;
              }
            }

            function _construct(Parent, args, Class) {
              if (isNativeReflectConstruct()) {
                _construct = Reflect.construct;
              } else {
                _construct = function _construct(Parent, args, Class) {
                  var a = [null];
                  a.push.apply(a, args);
                  var Constructor = Function.bind.apply(Parent, a);
                  var instance = new Constructor();
                  if (Class) _setPrototypeOf(instance, Class.prototype);
                  return instance;
                };
              }

              return _construct.apply(null, arguments);
            }

            function _isNativeFunction(fn) {
              return Function.toString.call(fn).indexOf('[native code]') !== -1;
            }

            function _setPrototypeOf(o, p) {
              _setPrototypeOf =
                Object.setPrototypeOf ||
                function _setPrototypeOf(o, p) {
                  o.__proto__ = p;
                  return o;
                };

              return _setPrototypeOf(o, p);
            }

            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                  };
              return _getPrototypeOf(o);
            }

            function _typeof(obj) {
              if (
                typeof Symbol === 'function' &&
                typeof Symbol.iterator === 'symbol'
              ) {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };
              }

              return _typeof(obj);
            }

            var _require = __webpack_require__(
                /*! util/ */ './node_modules/util/util.js'
              ),
              inspect = _require.inspect;

            var _require2 = __webpack_require__(
                /*! ../errors */ './node_modules/assert/build/internal/errors.js'
              ),
              ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

            function endsWith(str, search, this_len) {
              if (this_len === undefined || this_len > str.length) {
                this_len = str.length;
              }

              return (
                str.substring(this_len - search.length, this_len) === search
              );
            } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

            function repeat(str, count) {
              count = Math.floor(count);
              if (str.length == 0 || count == 0) return '';
              var maxCount = str.length * count;
              count = Math.floor(Math.log(count) / Math.log(2));

              while (count) {
                str += str;
                count--;
              }

              str += str.substring(0, maxCount - str.length);
              return str;
            }

            var blue = '';
            var green = '';
            var red = '';
            var white = '';
            var kReadableOperator = {
              deepStrictEqual: 'Expected values to be strictly deep-equal:',
              strictEqual: 'Expected values to be strictly equal:',
              strictEqualObject:
                'Expected "actual" to be reference-equal to "expected":',
              deepEqual: 'Expected values to be loosely deep-equal:',
              equal: 'Expected values to be loosely equal:',
              notDeepStrictEqual:
                'Expected "actual" not to be strictly deep-equal to:',
              notStrictEqual: 'Expected "actual" to be strictly unequal to:',
              notStrictEqualObject:
                'Expected "actual" not to be reference-equal to "expected":',
              notDeepEqual:
                'Expected "actual" not to be loosely deep-equal to:',
              notEqual: 'Expected "actual" to be loosely unequal to:',
              notIdentical: 'Values identical but not reference-equal:',
            }; // Comparing short primitives should just show === / !== instead of using the
            // diff.

            var kMaxShortLength = 10;

            function copyError(source) {
              var keys = Object.keys(source);
              var target = Object.create(Object.getPrototypeOf(source));
              keys.forEach(function (key) {
                target[key] = source[key];
              });
              Object.defineProperty(target, 'message', {
                value: source.message,
              });
              return target;
            }

            function inspectValue(val) {
              // The util.inspect default values could be changed. This makes sure the
              // error messages contain the necessary information nevertheless.
              return inspect(val, {
                compact: false,
                customInspect: false,
                depth: 1000,
                maxArrayLength: Infinity,
                // Assert compares only enumerable properties (with a few exceptions).
                showHidden: false,
                // Having a long line as error is better than wrapping the line for
                // comparison for now.
                // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
                // have meta information about the inspected properties (i.e., know where
                // in what line the property starts and ends).
                breakLength: Infinity,
                // Assert does not detect proxies currently.
                showProxy: false,
                sorted: true,
                // Inspect getters as we also check them when comparing entries.
                getters: true,
              });
            }

            function createErrDiff(actual, expected, operator) {
              var other = '';
              var res = '';
              var lastPos = 0;
              var end = '';
              var skipped = false;
              var actualInspected = inspectValue(actual);
              var actualLines = actualInspected.split('\n');
              var expectedLines = inspectValue(expected).split('\n');
              var i = 0;
              var indicator = ''; // In case both values are objects explicitly mark them as not reference equal
              // for the `strictEqual` operator.

              if (
                operator === 'strictEqual' &&
                _typeof(actual) === 'object' &&
                _typeof(expected) === 'object' &&
                actual !== null &&
                expected !== null
              ) {
                operator = 'strictEqualObject';
              } // If "actual" and "expected" fit on a single line and they are not strictly
              // equal, check further special handling.

              if (
                actualLines.length === 1 &&
                expectedLines.length === 1 &&
                actualLines[0] !== expectedLines[0]
              ) {
                var inputLength =
                  actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
                // kMaxShortLength and if neither is an object and at least one of them is
                // not `zero`, use the strict equal comparison to visualize the output.

                if (inputLength <= kMaxShortLength) {
                  if (
                    (_typeof(actual) !== 'object' || actual === null) &&
                    (_typeof(expected) !== 'object' || expected === null) &&
                    (actual !== 0 || expected !== 0)
                  ) {
                    // -0 === +0
                    return (
                      ''.concat(kReadableOperator[operator], '\n\n') +
                      ''
                        .concat(actualLines[0], ' !== ')
                        .concat(expectedLines[0], '\n')
                    );
                  }
                } else if (operator !== 'strictEqualObject') {
                  // If the stderr is a tty and the input length is lower than the current
                  // columns per line, add a mismatch indicator below the output. If it is
                  // not a tty, use a default value of 80 characters.
                  var maxLength =
                    process.stderr && process.stderr.isTTY
                      ? process.stderr.columns
                      : 80;

                  if (inputLength < maxLength) {
                    while (actualLines[0][i] === expectedLines[0][i]) {
                      i++;
                    } // Ignore the first characters.

                    if (i > 2) {
                      // Add position indicator for the first mismatch in case it is a
                      // single line and the input length is less than the column length.
                      indicator = '\n  '.concat(repeat(' ', i), '^');
                      i = 0;
                    }
                  }
                }
              } // Remove all ending lines that match (this optimizes the output for
              // readability by reducing the number of total changed lines).

              var a = actualLines[actualLines.length - 1];
              var b = expectedLines[expectedLines.length - 1];

              while (a === b) {
                if (i++ < 2) {
                  end = '\n  '.concat(a).concat(end);
                } else {
                  other = a;
                }

                actualLines.pop();
                expectedLines.pop();
                if (actualLines.length === 0 || expectedLines.length === 0)
                  break;
                a = actualLines[actualLines.length - 1];
                b = expectedLines[expectedLines.length - 1];
              }

              var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
              // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })

              if (maxLines === 0) {
                // We have to get the result again. The lines were all removed before.
                var _actualLines = actualInspected.split('\n'); // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.

                if (_actualLines.length > 30) {
                  _actualLines[26] = ''.concat(blue, '...').concat(white);

                  while (_actualLines.length > 27) {
                    _actualLines.pop();
                  }
                }

                return ''
                  .concat(kReadableOperator.notIdentical, '\n\n')
                  .concat(_actualLines.join('\n'), '\n');
              }

              if (i > 3) {
                end = '\n'.concat(blue, '...').concat(white).concat(end);
                skipped = true;
              }

              if (other !== '') {
                end = '\n  '.concat(other).concat(end);
                other = '';
              }

              var printedLines = 0;
              var msg =
                kReadableOperator[operator] +
                '\n'
                  .concat(green, '+ actual')
                  .concat(white, ' ')
                  .concat(red, '- expected')
                  .concat(white);
              var skippedMsg = ' '
                .concat(blue, '...')
                .concat(white, ' Lines skipped');

              for (i = 0; i < maxLines; i++) {
                // Only extra expected lines exist
                var cur = i - lastPos;

                if (actualLines.length < i + 1) {
                  // If the last diverging line is more than one line above and the
                  // current line is at least line three, add some of the former lines and
                  // also add dots to indicate skipped entries.
                  if (cur > 1 && i > 2) {
                    if (cur > 4) {
                      res += '\n'.concat(blue, '...').concat(white);
                      skipped = true;
                    } else if (cur > 3) {
                      res += '\n  '.concat(expectedLines[i - 2]);
                      printedLines++;
                    }

                    res += '\n  '.concat(expectedLines[i - 1]);
                    printedLines++;
                  } // Mark the current line as the last diverging one.

                  lastPos = i; // Add the expected line to the cache.

                  other += '\n'
                    .concat(red, '-')
                    .concat(white, ' ')
                    .concat(expectedLines[i]);
                  printedLines++; // Only extra actual lines exist
                } else if (expectedLines.length < i + 1) {
                  // If the last diverging line is more than one line above and the
                  // current line is at least line three, add some of the former lines and
                  // also add dots to indicate skipped entries.
                  if (cur > 1 && i > 2) {
                    if (cur > 4) {
                      res += '\n'.concat(blue, '...').concat(white);
                      skipped = true;
                    } else if (cur > 3) {
                      res += '\n  '.concat(actualLines[i - 2]);
                      printedLines++;
                    }

                    res += '\n  '.concat(actualLines[i - 1]);
                    printedLines++;
                  } // Mark the current line as the last diverging one.

                  lastPos = i; // Add the actual line to the result.

                  res += '\n'
                    .concat(green, '+')
                    .concat(white, ' ')
                    .concat(actualLines[i]);
                  printedLines++; // Lines diverge
                } else {
                  var expectedLine = expectedLines[i];
                  var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
                  // a trailing comma. In that case it is actually identical and we should
                  // mark it as such.

                  var divergingLines =
                    actualLine !== expectedLine &&
                    (!endsWith(actualLine, ',') ||
                      actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
                  // add a comma at the end of the actual line. Otherwise the output could
                  // look weird as in:
                  //
                  //   [
                  //     1         // No comma at the end!
                  // +   2
                  //   ]
                  //

                  if (
                    divergingLines &&
                    endsWith(expectedLine, ',') &&
                    expectedLine.slice(0, -1) === actualLine
                  ) {
                    divergingLines = false;
                    actualLine += ',';
                  }

                  if (divergingLines) {
                    // If the last diverging line is more than one line above and the
                    // current line is at least line three, add some of the former lines and
                    // also add dots to indicate skipped entries.
                    if (cur > 1 && i > 2) {
                      if (cur > 4) {
                        res += '\n'.concat(blue, '...').concat(white);
                        skipped = true;
                      } else if (cur > 3) {
                        res += '\n  '.concat(actualLines[i - 2]);
                        printedLines++;
                      }

                      res += '\n  '.concat(actualLines[i - 1]);
                      printedLines++;
                    } // Mark the current line as the last diverging one.

                    lastPos = i; // Add the actual line to the result and cache the expected diverging
                    // line so consecutive diverging lines show up as +++--- and not +-+-+-.

                    res += '\n'
                      .concat(green, '+')
                      .concat(white, ' ')
                      .concat(actualLine);
                    other += '\n'
                      .concat(red, '-')
                      .concat(white, ' ')
                      .concat(expectedLine);
                    printedLines += 2; // Lines are identical
                  } else {
                    // Add all cached information to the result before adding other things
                    // and reset the cache.
                    res += other;
                    other = ''; // If the last diverging line is exactly one line above or if it is the
                    // very first line, add the line to the result.

                    if (cur === 1 || i === 0) {
                      res += '\n  '.concat(actualLine);
                      printedLines++;
                    }
                  }
                } // Inspected object to big (Show ~20 rows max)

                if (printedLines > 20 && i < maxLines - 2) {
                  return (
                    ''
                      .concat(msg)
                      .concat(skippedMsg, '\n')
                      .concat(res, '\n')
                      .concat(blue, '...')
                      .concat(white)
                      .concat(other, '\n') +
                    ''.concat(blue, '...').concat(white)
                  );
                }
              }

              return ''
                .concat(msg)
                .concat(skipped ? skippedMsg : '', '\n')
                .concat(res)
                .concat(other)
                .concat(end)
                .concat(indicator);
            }

            var AssertionError = /*#__PURE__*/ (function (_Error) {
              _inherits(AssertionError, _Error);

              function AssertionError(options) {
                var _this;

                _classCallCheck(this, AssertionError);

                if (_typeof(options) !== 'object' || options === null) {
                  throw new ERR_INVALID_ARG_TYPE('options', 'Object', options);
                }

                var message = options.message,
                  operator = options.operator,
                  stackStartFn = options.stackStartFn;
                var actual = options.actual,
                  expected = options.expected;
                var limit = Error.stackTraceLimit;
                Error.stackTraceLimit = 0;

                if (message != null) {
                  _this = _possibleConstructorReturn(
                    this,
                    _getPrototypeOf(AssertionError).call(this, String(message))
                  );
                } else {
                  if (process.stderr && process.stderr.isTTY) {
                    // Reset on each call to make sure we handle dynamically set environment
                    // variables correct.
                    if (
                      process.stderr &&
                      process.stderr.getColorDepth &&
                      process.stderr.getColorDepth() !== 1
                    ) {
                      blue = '\x1B[34m';
                      green = '\x1B[32m';
                      white = '\x1B[39m';
                      red = '\x1B[31m';
                    } else {
                      blue = '';
                      green = '';
                      white = '';
                      red = '';
                    }
                  } // Prevent the error stack from being visible by duplicating the error
                  // in a very close way to the original in case both sides are actually
                  // instances of Error.

                  if (
                    _typeof(actual) === 'object' &&
                    actual !== null &&
                    _typeof(expected) === 'object' &&
                    expected !== null &&
                    'stack' in actual &&
                    actual instanceof Error &&
                    'stack' in expected &&
                    expected instanceof Error
                  ) {
                    actual = copyError(actual);
                    expected = copyError(expected);
                  }

                  if (
                    operator === 'deepStrictEqual' ||
                    operator === 'strictEqual'
                  ) {
                    _this = _possibleConstructorReturn(
                      this,
                      _getPrototypeOf(AssertionError).call(
                        this,
                        createErrDiff(actual, expected, operator)
                      )
                    );
                  } else if (
                    operator === 'notDeepStrictEqual' ||
                    operator === 'notStrictEqual'
                  ) {
                    // In case the objects are equal but the operator requires unequal, show
                    // the first object and say A equals B
                    var base = kReadableOperator[operator];
                    var res = inspectValue(actual).split('\n'); // In case "actual" is an object, it should not be reference equal.

                    if (
                      operator === 'notStrictEqual' &&
                      _typeof(actual) === 'object' &&
                      actual !== null
                    ) {
                      base = kReadableOperator.notStrictEqualObject;
                    } // Only remove lines in case it makes sense to collapse those.
                    // TODO: Accept env to always show the full error.

                    if (res.length > 30) {
                      res[26] = ''.concat(blue, '...').concat(white);

                      while (res.length > 27) {
                        res.pop();
                      }
                    } // Only print a single input.

                    if (res.length === 1) {
                      _this = _possibleConstructorReturn(
                        this,
                        _getPrototypeOf(AssertionError).call(
                          this,
                          ''.concat(base, ' ').concat(res[0])
                        )
                      );
                    } else {
                      _this = _possibleConstructorReturn(
                        this,
                        _getPrototypeOf(AssertionError).call(
                          this,
                          ''.concat(base, '\n\n').concat(res.join('\n'), '\n')
                        )
                      );
                    }
                  } else {
                    var _res = inspectValue(actual);

                    var other = '';
                    var knownOperators = kReadableOperator[operator];

                    if (
                      operator === 'notDeepEqual' ||
                      operator === 'notEqual'
                    ) {
                      _res = ''
                        .concat(kReadableOperator[operator], '\n\n')
                        .concat(_res);

                      if (_res.length > 1024) {
                        _res = ''.concat(_res.slice(0, 1021), '...');
                      }
                    } else {
                      other = ''.concat(inspectValue(expected));

                      if (_res.length > 512) {
                        _res = ''.concat(_res.slice(0, 509), '...');
                      }

                      if (other.length > 512) {
                        other = ''.concat(other.slice(0, 509), '...');
                      }

                      if (operator === 'deepEqual' || operator === 'equal') {
                        _res = ''
                          .concat(knownOperators, '\n\n')
                          .concat(_res, '\n\nshould equal\n\n');
                      } else {
                        other = ' '.concat(operator, ' ').concat(other);
                      }
                    }

                    _this = _possibleConstructorReturn(
                      this,
                      _getPrototypeOf(AssertionError).call(
                        this,
                        ''.concat(_res).concat(other)
                      )
                    );
                  }
                }

                Error.stackTraceLimit = limit;
                _this.generatedMessage = !message;
                Object.defineProperty(_assertThisInitialized(_this), 'name', {
                  value: 'AssertionError [ERR_ASSERTION]',
                  enumerable: false,
                  writable: true,
                  configurable: true,
                });
                _this.code = 'ERR_ASSERTION';
                _this.actual = actual;
                _this.expected = expected;
                _this.operator = operator;

                if (Error.captureStackTrace) {
                  // eslint-disable-next-line no-restricted-syntax
                  Error.captureStackTrace(
                    _assertThisInitialized(_this),
                    stackStartFn
                  );
                } // Create error message including the error code in the name.

                _this.stack; // Reset the name.

                _this.name = 'AssertionError';
                return _possibleConstructorReturn(_this);
              }

              _createClass(AssertionError, [
                {
                  key: 'toString',
                  value: function toString() {
                    return ''
                      .concat(this.name, ' [')
                      .concat(this.code, ']: ')
                      .concat(this.message);
                  },
                },
                {
                  key: inspect.custom,
                  value: function value(recurseTimes, ctx) {
                    // This limits the `actual` and `expected` property default inspection to
                    // the minimum depth. Otherwise those values would be too verbose compared
                    // to the actual error message which contains a combined view of these two
                    // input values.
                    return inspect(
                      this,
                      _objectSpread({}, ctx, {
                        customInspect: false,
                        depth: 0,
                      })
                    );
                  },
                },
              ]);

              return AssertionError;
            })(_wrapNativeSuper(Error));

            module.exports = AssertionError;

            /***/
          },

        /***/ './node_modules/assert/build/internal/errors.js':
          /*!******************************************************!*\
  !*** ./node_modules/assert/build/internal/errors.js ***!
  \******************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';
            // Currently in sync with Node.js lib/internal/errors.js
            // https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f

            /* eslint node-core/documented-errors: "error" */

            /* eslint node-core/alphabetize-errors: "error" */

            /* eslint node-core/prefer-util-format-errors: "error" */
            // The whole point behind this internal module is to allow Node.js to no
            // longer be forced to treat every error message change as a semver-major
            // change. The NodeError classes here all expose a `code` property whose
            // value statically and permanently identifies the error. While the error
            // message may change, the code should not.

            function _typeof(obj) {
              if (
                typeof Symbol === 'function' &&
                typeof Symbol.iterator === 'symbol'
              ) {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };
              }

              return _typeof(obj);
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
              }
            }

            function _possibleConstructorReturn(self, call) {
              if (
                call &&
                (_typeof(call) === 'object' || typeof call === 'function')
              ) {
                return call;
              }

              return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              }

              return self;
            }

            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                  };
              return _getPrototypeOf(o);
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              }

              subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: true,
                    configurable: true,
                  },
                }
              );
              if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
              _setPrototypeOf =
                Object.setPrototypeOf ||
                function _setPrototypeOf(o, p) {
                  o.__proto__ = p;
                  return o;
                };

              return _setPrototypeOf(o, p);
            }

            var codes = {}; // Lazy loaded

            var assert;
            var util;

            function createErrorType(code, message, Base) {
              if (!Base) {
                Base = Error;
              }

              function getMessage(arg1, arg2, arg3) {
                if (typeof message === 'string') {
                  return message;
                } else {
                  return message(arg1, arg2, arg3);
                }
              }

              var NodeError = /*#__PURE__*/ (function (_Base) {
                _inherits(NodeError, _Base);

                function NodeError(arg1, arg2, arg3) {
                  var _this;

                  _classCallCheck(this, NodeError);

                  _this = _possibleConstructorReturn(
                    this,
                    _getPrototypeOf(NodeError).call(
                      this,
                      getMessage(arg1, arg2, arg3)
                    )
                  );
                  _this.code = code;
                  return _this;
                }

                return NodeError;
              })(Base);

              codes[code] = NodeError;
            } // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js

            function oneOf(expected, thing) {
              if (Array.isArray(expected)) {
                var len = expected.length;
                expected = expected.map(function (i) {
                  return String(i);
                });

                if (len > 2) {
                  return (
                    'one of '
                      .concat(thing, ' ')
                      .concat(expected.slice(0, len - 1).join(', '), ', or ') +
                    expected[len - 1]
                  );
                } else if (len === 2) {
                  return 'one of '
                    .concat(thing, ' ')
                    .concat(expected[0], ' or ')
                    .concat(expected[1]);
                } else {
                  return 'of '.concat(thing, ' ').concat(expected[0]);
                }
              } else {
                return 'of '.concat(thing, ' ').concat(String(expected));
              }
            } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

            function startsWith(str, search, pos) {
              return (
                str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search
              );
            } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

            function endsWith(str, search, this_len) {
              if (this_len === undefined || this_len > str.length) {
                this_len = str.length;
              }

              return (
                str.substring(this_len - search.length, this_len) === search
              );
            } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

            function includes(str, search, start) {
              if (typeof start !== 'number') {
                start = 0;
              }

              if (start + search.length > str.length) {
                return false;
              } else {
                return str.indexOf(search, start) !== -1;
              }
            }

            createErrorType(
              'ERR_AMBIGUOUS_ARGUMENT',
              'The "%s" argument is ambiguous. %s',
              TypeError
            );
            createErrorType(
              'ERR_INVALID_ARG_TYPE',
              function (name, expected, actual) {
                if (assert === undefined)
                  assert = __webpack_require__(
                    /*! ../assert */ './node_modules/assert/build/assert.js'
                  );
                assert(typeof name === 'string', "'name' must be a string"); // determiner: 'must be' or 'must not be'

                var determiner;

                if (
                  typeof expected === 'string' &&
                  startsWith(expected, 'not ')
                ) {
                  determiner = 'must not be';
                  expected = expected.replace(/^not /, '');
                } else {
                  determiner = 'must be';
                }

                var msg;

                if (endsWith(name, ' argument')) {
                  // For cases like 'first argument'
                  msg = 'The '
                    .concat(name, ' ')
                    .concat(determiner, ' ')
                    .concat(oneOf(expected, 'type'));
                } else {
                  var type = includes(name, '.') ? 'property' : 'argument';
                  msg = 'The "'
                    .concat(name, '" ')
                    .concat(type, ' ')
                    .concat(determiner, ' ')
                    .concat(oneOf(expected, 'type'));
                } // TODO(BridgeAR): Improve the output by showing `null` and similar.

                msg += '. Received type '.concat(_typeof(actual));
                return msg;
              },
              TypeError
            );
            createErrorType(
              'ERR_INVALID_ARG_VALUE',
              function (name, value) {
                var reason =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : 'is invalid';
                if (util === undefined)
                  util = __webpack_require__(
                    /*! util/ */ './node_modules/util/util.js'
                  );
                var inspected = util.inspect(value);

                if (inspected.length > 128) {
                  inspected = ''.concat(inspected.slice(0, 128), '...');
                }

                return "The argument '"
                  .concat(name, "' ")
                  .concat(reason, '. Received ')
                  .concat(inspected);
              },
              TypeError,
              RangeError
            );
            createErrorType(
              'ERR_INVALID_RETURN_VALUE',
              function (input, name, value) {
                var type;

                if (value && value.constructor && value.constructor.name) {
                  type = 'instance of '.concat(value.constructor.name);
                } else {
                  type = 'type '.concat(_typeof(value));
                }

                return (
                  'Expected '
                    .concat(input, ' to be returned from the "')
                    .concat(name, '"') + ' function but got '.concat(type, '.')
                );
              },
              TypeError
            );
            createErrorType(
              'ERR_MISSING_ARGS',
              function () {
                for (
                  var _len = arguments.length, args = new Array(_len), _key = 0;
                  _key < _len;
                  _key++
                ) {
                  args[_key] = arguments[_key];
                }

                if (assert === undefined)
                  assert = __webpack_require__(
                    /*! ../assert */ './node_modules/assert/build/assert.js'
                  );
                assert(
                  args.length > 0,
                  'At least one arg needs to be specified'
                );
                var msg = 'The ';
                var len = args.length;
                args = args.map(function (a) {
                  return '"'.concat(a, '"');
                });

                switch (len) {
                  case 1:
                    msg += ''.concat(args[0], ' argument');
                    break;

                  case 2:
                    msg += ''
                      .concat(args[0], ' and ')
                      .concat(args[1], ' arguments');
                    break;

                  default:
                    msg += args.slice(0, len - 1).join(', ');
                    msg += ', and '.concat(args[len - 1], ' arguments');
                    break;
                }

                return ''.concat(msg, ' must be specified');
              },
              TypeError
            );
            module.exports.codes = codes;

            /***/
          },

        /***/ './node_modules/assert/build/internal/util/comparisons.js':
          /*!****************************************************************!*\
  !*** ./node_modules/assert/build/internal/util/comparisons.js ***!
  \****************************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';
            // Currently in sync with Node.js lib/internal/util/comparisons.js
            // https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9

            function _slicedToArray(arr, i) {
              return (
                _arrayWithHoles(arr) ||
                _iterableToArrayLimit(arr, i) ||
                _nonIterableRest()
              );
            }

            function _nonIterableRest() {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              );
            }

            function _iterableToArrayLimit(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (
                  var _i = arr[Symbol.iterator](), _s;
                  !(_n = (_s = _i.next()).done);
                  _n = true
                ) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i['return'] != null) _i['return']();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
            }

            function _typeof(obj) {
              if (
                typeof Symbol === 'function' &&
                typeof Symbol.iterator === 'symbol'
              ) {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };
              }

              return _typeof(obj);
            }

            var regexFlagsSupported = /a/g.flags !== undefined;

            var arrayFromSet = function arrayFromSet(set) {
              var array = [];
              set.forEach(function (value) {
                return array.push(value);
              });
              return array;
            };

            var arrayFromMap = function arrayFromMap(map) {
              var array = [];
              map.forEach(function (value, key) {
                return array.push([key, value]);
              });
              return array;
            };

            var objectIs = Object.is
              ? Object.is
              : __webpack_require__(
                  /*! object-is */ './node_modules/object-is/index.js'
                );
            var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols
              : function () {
                  return [];
                };
            var numberIsNaN = Number.isNaN
              ? Number.isNaN
              : __webpack_require__(
                  /*! is-nan */ './node_modules/is-nan/index.js'
                );

            function uncurryThis(f) {
              return f.call.bind(f);
            }

            var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
            var propertyIsEnumerable = uncurryThis(
              Object.prototype.propertyIsEnumerable
            );
            var objectToString = uncurryThis(Object.prototype.toString);

            var _require$types = __webpack_require__(
                /*! util/ */ './node_modules/util/util.js'
              ).types,
              isAnyArrayBuffer = _require$types.isAnyArrayBuffer,
              isArrayBufferView = _require$types.isArrayBufferView,
              isDate = _require$types.isDate,
              isMap = _require$types.isMap,
              isRegExp = _require$types.isRegExp,
              isSet = _require$types.isSet,
              isNativeError = _require$types.isNativeError,
              isBoxedPrimitive = _require$types.isBoxedPrimitive,
              isNumberObject = _require$types.isNumberObject,
              isStringObject = _require$types.isStringObject,
              isBooleanObject = _require$types.isBooleanObject,
              isBigIntObject = _require$types.isBigIntObject,
              isSymbolObject = _require$types.isSymbolObject,
              isFloat32Array = _require$types.isFloat32Array,
              isFloat64Array = _require$types.isFloat64Array;

            function isNonIndex(key) {
              if (key.length === 0 || key.length > 10) return true;

              for (var i = 0; i < key.length; i++) {
                var code = key.charCodeAt(i);
                if (code < 48 || code > 57) return true;
              } // The maximum size for an array is 2 ** 32 -1.

              return key.length === 10 && key >= Math.pow(2, 32);
            }

            function getOwnNonIndexProperties(value) {
              return Object.keys(value)
                .filter(isNonIndex)
                .concat(
                  objectGetOwnPropertySymbols(value).filter(
                    Object.prototype.propertyIsEnumerable.bind(value)
                  )
                );
            } // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
            // original notice:

            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */

            function compare(a, b) {
              if (a === b) {
                return 0;
              }

              var x = a.length;
              var y = b.length;

              for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                if (a[i] !== b[i]) {
                  x = a[i];
                  y = b[i];
                  break;
                }
              }

              if (x < y) {
                return -1;
              }

              if (y < x) {
                return 1;
              }

              return 0;
            }

            var ONLY_ENUMERABLE = undefined;
            var kStrict = true;
            var kLoose = false;
            var kNoIterator = 0;
            var kIsArray = 1;
            var kIsSet = 2;
            var kIsMap = 3; // Check if they have the same source and flags

            function areSimilarRegExps(a, b) {
              return regexFlagsSupported
                ? a.source === b.source && a.flags === b.flags
                : RegExp.prototype.toString.call(a) ===
                    RegExp.prototype.toString.call(b);
            }

            function areSimilarFloatArrays(a, b) {
              if (a.byteLength !== b.byteLength) {
                return false;
              }

              for (var offset = 0; offset < a.byteLength; offset++) {
                if (a[offset] !== b[offset]) {
                  return false;
                }
              }

              return true;
            }

            function areSimilarTypedArrays(a, b) {
              if (a.byteLength !== b.byteLength) {
                return false;
              }

              return (
                compare(
                  new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
                  new Uint8Array(b.buffer, b.byteOffset, b.byteLength)
                ) === 0
              );
            }

            function areEqualArrayBuffers(buf1, buf2) {
              return (
                buf1.byteLength === buf2.byteLength &&
                compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0
              );
            }

            function isEqualBoxedPrimitive(val1, val2) {
              if (isNumberObject(val1)) {
                return (
                  isNumberObject(val2) &&
                  objectIs(
                    Number.prototype.valueOf.call(val1),
                    Number.prototype.valueOf.call(val2)
                  )
                );
              }

              if (isStringObject(val1)) {
                return (
                  isStringObject(val2) &&
                  String.prototype.valueOf.call(val1) ===
                    String.prototype.valueOf.call(val2)
                );
              }

              if (isBooleanObject(val1)) {
                return (
                  isBooleanObject(val2) &&
                  Boolean.prototype.valueOf.call(val1) ===
                    Boolean.prototype.valueOf.call(val2)
                );
              }

              if (isBigIntObject(val1)) {
                return (
                  isBigIntObject(val2) &&
                  BigInt.prototype.valueOf.call(val1) ===
                    BigInt.prototype.valueOf.call(val2)
                );
              }

              return (
                isSymbolObject(val2) &&
                Symbol.prototype.valueOf.call(val1) ===
                  Symbol.prototype.valueOf.call(val2)
              );
            } // Notes: Type tags are historical [[Class]] properties that can be set by
            // FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
            // and retrieved using Object.prototype.toString.call(obj) in JS
            // See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
            // for a list of tags pre-defined in the spec.
            // There are some unspecified tags in the wild too (e.g. typed array tags).
            // Since tags can be altered, they only serve fast failures
            //
            // Typed arrays and buffers are checked by comparing the content in their
            // underlying ArrayBuffer. This optimization requires that it's
            // reasonable to interpret their underlying memory in the same way,
            // which is checked by comparing their type tags.
            // (e.g. a Uint8Array and a Uint16Array with the same memory content
            // could still be different because they will be interpreted differently).
            //
            // For strict comparison, objects should have
            // a) The same built-in type tags
            // b) The same prototypes.

            function innerDeepEqual(val1, val2, strict, memos) {
              // All identical values are equivalent, as determined by ===.
              if (val1 === val2) {
                if (val1 !== 0) return true;
                return strict ? objectIs(val1, val2) : true;
              } // Check more closely if val1 and val2 are equal.

              if (strict) {
                if (_typeof(val1) !== 'object') {
                  return (
                    typeof val1 === 'number' &&
                    numberIsNaN(val1) &&
                    numberIsNaN(val2)
                  );
                }

                if (
                  _typeof(val2) !== 'object' ||
                  val1 === null ||
                  val2 === null
                ) {
                  return false;
                }

                if (
                  Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)
                ) {
                  return false;
                }
              } else {
                if (val1 === null || _typeof(val1) !== 'object') {
                  if (val2 === null || _typeof(val2) !== 'object') {
                    // eslint-disable-next-line eqeqeq
                    return val1 == val2;
                  }

                  return false;
                }

                if (val2 === null || _typeof(val2) !== 'object') {
                  return false;
                }
              }

              var val1Tag = objectToString(val1);
              var val2Tag = objectToString(val2);

              if (val1Tag !== val2Tag) {
                return false;
              }

              if (Array.isArray(val1)) {
                // Check for sparse arrays and general fast path
                if (val1.length !== val2.length) {
                  return false;
                }

                var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
                var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);

                if (keys1.length !== keys2.length) {
                  return false;
                }

                return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
              } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
              // wan't to early return out of the rest of the checks. However we can check
              // if the second value is one of these values and the first isn't.

              if (val1Tag === '[object Object]') {
                // return keyCheck(val1, val2, strict, memos, kNoIterator);
                if (
                  (!isMap(val1) && isMap(val2)) ||
                  (!isSet(val1) && isSet(val2))
                ) {
                  return false;
                }
              }

              if (isDate(val1)) {
                if (
                  !isDate(val2) ||
                  Date.prototype.getTime.call(val1) !==
                    Date.prototype.getTime.call(val2)
                ) {
                  return false;
                }
              } else if (isRegExp(val1)) {
                if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
                  return false;
                }
              } else if (isNativeError(val1) || val1 instanceof Error) {
                // Do not compare the stack as it might differ even though the error itself
                // is otherwise identical.
                if (val1.message !== val2.message || val1.name !== val2.name) {
                  return false;
                }
              } else if (isArrayBufferView(val1)) {
                if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
                  if (!areSimilarFloatArrays(val1, val2)) {
                    return false;
                  }
                } else if (!areSimilarTypedArrays(val1, val2)) {
                  return false;
                } // Buffer.compare returns true, so val1.length === val2.length. If they both
                // only contain numeric keys, we don't need to exam further than checking
                // the symbols.

                var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);

                var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);

                if (_keys.length !== _keys2.length) {
                  return false;
                }

                return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
              } else if (isSet(val1)) {
                if (!isSet(val2) || val1.size !== val2.size) {
                  return false;
                }

                return keyCheck(val1, val2, strict, memos, kIsSet);
              } else if (isMap(val1)) {
                if (!isMap(val2) || val1.size !== val2.size) {
                  return false;
                }

                return keyCheck(val1, val2, strict, memos, kIsMap);
              } else if (isAnyArrayBuffer(val1)) {
                if (!areEqualArrayBuffers(val1, val2)) {
                  return false;
                }
              } else if (
                isBoxedPrimitive(val1) &&
                !isEqualBoxedPrimitive(val1, val2)
              ) {
                return false;
              }

              return keyCheck(val1, val2, strict, memos, kNoIterator);
            }

            function getEnumerables(val, keys) {
              return keys.filter(function (k) {
                return propertyIsEnumerable(val, k);
              });
            }

            function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
              // For all remaining Object pairs, including Array, objects and Maps,
              // equivalence is determined by having:
              // a) The same number of owned enumerable properties
              // b) The same set of keys/indexes (although not necessarily the same order)
              // c) Equivalent values for every corresponding key/index
              // d) For Sets and Maps, equal contents
              // Note: this accounts for both named and indexed properties on Arrays.
              if (arguments.length === 5) {
                aKeys = Object.keys(val1);
                var bKeys = Object.keys(val2); // The pair must have the same number of owned properties.

                if (aKeys.length !== bKeys.length) {
                  return false;
                }
              } // Cheap key test

              var i = 0;

              for (; i < aKeys.length; i++) {
                if (!hasOwnProperty(val2, aKeys[i])) {
                  return false;
                }
              }

              if (strict && arguments.length === 5) {
                var symbolKeysA = objectGetOwnPropertySymbols(val1);

                if (symbolKeysA.length !== 0) {
                  var count = 0;

                  for (i = 0; i < symbolKeysA.length; i++) {
                    var key = symbolKeysA[i];

                    if (propertyIsEnumerable(val1, key)) {
                      if (!propertyIsEnumerable(val2, key)) {
                        return false;
                      }

                      aKeys.push(key);
                      count++;
                    } else if (propertyIsEnumerable(val2, key)) {
                      return false;
                    }
                  }

                  var symbolKeysB = objectGetOwnPropertySymbols(val2);

                  if (
                    symbolKeysA.length !== symbolKeysB.length &&
                    getEnumerables(val2, symbolKeysB).length !== count
                  ) {
                    return false;
                  }
                } else {
                  var _symbolKeysB = objectGetOwnPropertySymbols(val2);

                  if (
                    _symbolKeysB.length !== 0 &&
                    getEnumerables(val2, _symbolKeysB).length !== 0
                  ) {
                    return false;
                  }
                }
              }

              if (
                aKeys.length === 0 &&
                (iterationType === kNoIterator ||
                  (iterationType === kIsArray && val1.length === 0) ||
                  val1.size === 0)
              ) {
                return true;
              } // Use memos to handle cycles.

              if (memos === undefined) {
                memos = {
                  val1: new Map(),
                  val2: new Map(),
                  position: 0,
                };
              } else {
                // We prevent up to two map.has(x) calls by directly retrieving the value
                // and checking for undefined. The map can only contain numbers, so it is
                // safe to check for undefined only.
                var val2MemoA = memos.val1.get(val1);

                if (val2MemoA !== undefined) {
                  var val2MemoB = memos.val2.get(val2);

                  if (val2MemoB !== undefined) {
                    return val2MemoA === val2MemoB;
                  }
                }

                memos.position++;
              }

              memos.val1.set(val1, memos.position);
              memos.val2.set(val2, memos.position);
              var areEq = objEquiv(
                val1,
                val2,
                strict,
                aKeys,
                memos,
                iterationType
              );
              memos.val1.delete(val1);
              memos.val2.delete(val2);
              return areEq;
            }

            function setHasEqualElement(set, val1, strict, memo) {
              // Go looking.
              var setValues = arrayFromSet(set);

              for (var i = 0; i < setValues.length; i++) {
                var val2 = setValues[i];

                if (innerDeepEqual(val1, val2, strict, memo)) {
                  // Remove the matching element to make sure we do not check that again.
                  set.delete(val2);
                  return true;
                }
              }

              return false;
            } // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
            // Sadly it is not possible to detect corresponding values properly in case the
            // type is a string, number, bigint or boolean. The reason is that those values
            // can match lots of different string values (e.g., 1n == '+00001').

            function findLooseMatchingPrimitives(prim) {
              switch (_typeof(prim)) {
                case 'undefined':
                  return null;

                case 'object':
                  // Only pass in null as object!
                  return undefined;

                case 'symbol':
                  return false;

                case 'string':
                  prim = +prim;
                // Loose equal entries exist only if the string is possible to convert to
                // a regular number and not NaN.
                // Fall through

                case 'number':
                  if (numberIsNaN(prim)) {
                    return false;
                  }
              }

              return true;
            }

            function setMightHaveLoosePrim(a, b, prim) {
              var altValue = findLooseMatchingPrimitives(prim);
              if (altValue != null) return altValue;
              return b.has(altValue) && !a.has(altValue);
            }

            function mapMightHaveLoosePrim(a, b, prim, item, memo) {
              var altValue = findLooseMatchingPrimitives(prim);

              if (altValue != null) {
                return altValue;
              }

              var curB = b.get(altValue);

              if (
                (curB === undefined && !b.has(altValue)) ||
                !innerDeepEqual(item, curB, false, memo)
              ) {
                return false;
              }

              return (
                !a.has(altValue) && innerDeepEqual(item, curB, false, memo)
              );
            }

            function setEquiv(a, b, strict, memo) {
              // This is a lazily initiated Set of entries which have to be compared
              // pairwise.
              var set = null;
              var aValues = arrayFromSet(a);

              for (var i = 0; i < aValues.length; i++) {
                var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
                // heavy sets but it is a minor slow down for primitives. As they are fast
                // to check this improves the worst case scenario instead.

                if (_typeof(val) === 'object' && val !== null) {
                  if (set === null) {
                    set = new Set();
                  } // If the specified value doesn't exist in the second set its an not null
                  // object (or non strict only: a not matching primitive) we'll need to go
                  // hunting for something thats deep-(strict-)equal to it. To make this
                  // O(n log n) complexity we have to copy these values in a new set first.

                  set.add(val);
                } else if (!b.has(val)) {
                  if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.

                  if (!setMightHaveLoosePrim(a, b, val)) {
                    return false;
                  }

                  if (set === null) {
                    set = new Set();
                  }

                  set.add(val);
                }
              }

              if (set !== null) {
                var bValues = arrayFromSet(b);

                for (var _i = 0; _i < bValues.length; _i++) {
                  var _val = bValues[_i]; // We have to check if a primitive value is already
                  // matching and only if it's not, go hunting for it.

                  if (_typeof(_val) === 'object' && _val !== null) {
                    if (!setHasEqualElement(set, _val, strict, memo))
                      return false;
                  } else if (
                    !strict &&
                    !a.has(_val) &&
                    !setHasEqualElement(set, _val, strict, memo)
                  ) {
                    return false;
                  }
                }

                return set.size === 0;
              }

              return true;
            }

            function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
              // To be able to handle cases like:
              //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
              // ... we need to consider *all* matching keys, not just the first we find.
              var setValues = arrayFromSet(set);

              for (var i = 0; i < setValues.length; i++) {
                var key2 = setValues[i];

                if (
                  innerDeepEqual(key1, key2, strict, memo) &&
                  innerDeepEqual(item1, map.get(key2), strict, memo)
                ) {
                  set.delete(key2);
                  return true;
                }
              }

              return false;
            }

            function mapEquiv(a, b, strict, memo) {
              var set = null;
              var aEntries = arrayFromMap(a);

              for (var i = 0; i < aEntries.length; i++) {
                var _aEntries$i = _slicedToArray(aEntries[i], 2),
                  key = _aEntries$i[0],
                  item1 = _aEntries$i[1];

                if (_typeof(key) === 'object' && key !== null) {
                  if (set === null) {
                    set = new Set();
                  }

                  set.add(key);
                } else {
                  // By directly retrieving the value we prevent another b.has(key) check in
                  // almost all possible cases.
                  var item2 = b.get(key);

                  if (
                    (item2 === undefined && !b.has(key)) ||
                    !innerDeepEqual(item1, item2, strict, memo)
                  ) {
                    if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
                    // keys.

                    if (!mapMightHaveLoosePrim(a, b, key, item1, memo))
                      return false;

                    if (set === null) {
                      set = new Set();
                    }

                    set.add(key);
                  }
                }
              }

              if (set !== null) {
                var bEntries = arrayFromMap(b);

                for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
                  var _bEntries$_i = _slicedToArray(bEntries[_i2], 2),
                    key = _bEntries$_i[0],
                    item = _bEntries$_i[1];

                  if (_typeof(key) === 'object' && key !== null) {
                    if (!mapHasEqualEntry(set, a, key, item, strict, memo))
                      return false;
                  } else if (
                    !strict &&
                    (!a.has(key) ||
                      !innerDeepEqual(a.get(key), item, false, memo)) &&
                    !mapHasEqualEntry(set, a, key, item, false, memo)
                  ) {
                    return false;
                  }
                }

                return set.size === 0;
              }

              return true;
            }

            function objEquiv(a, b, strict, keys, memos, iterationType) {
              // Sets and maps don't have their entries accessible via normal object
              // properties.
              var i = 0;

              if (iterationType === kIsSet) {
                if (!setEquiv(a, b, strict, memos)) {
                  return false;
                }
              } else if (iterationType === kIsMap) {
                if (!mapEquiv(a, b, strict, memos)) {
                  return false;
                }
              } else if (iterationType === kIsArray) {
                for (; i < a.length; i++) {
                  if (hasOwnProperty(a, i)) {
                    if (
                      !hasOwnProperty(b, i) ||
                      !innerDeepEqual(a[i], b[i], strict, memos)
                    ) {
                      return false;
                    }
                  } else if (hasOwnProperty(b, i)) {
                    return false;
                  } else {
                    // Array is sparse.
                    var keysA = Object.keys(a);

                    for (; i < keysA.length; i++) {
                      var key = keysA[i];

                      if (
                        !hasOwnProperty(b, key) ||
                        !innerDeepEqual(a[key], b[key], strict, memos)
                      ) {
                        return false;
                      }
                    }

                    if (keysA.length !== Object.keys(b).length) {
                      return false;
                    }

                    return true;
                  }
                }
              } // The pair must have equivalent values for every corresponding key.
              // Possibly expensive deep test:

              for (i = 0; i < keys.length; i++) {
                var _key = keys[i];

                if (!innerDeepEqual(a[_key], b[_key], strict, memos)) {
                  return false;
                }
              }

              return true;
            }

            function isDeepEqual(val1, val2) {
              return innerDeepEqual(val1, val2, kLoose);
            }

            function isDeepStrictEqual(val1, val2) {
              return innerDeepEqual(val1, val2, kStrict);
            }

            module.exports = {
              isDeepEqual: isDeepEqual,
              isDeepStrictEqual: isDeepStrictEqual,
            };

            /***/
          },

        /***/ './node_modules/available-typed-arrays/index.js':
          /*!******************************************************!*\
  !*** ./node_modules/available-typed-arrays/index.js ***!
  \******************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var filter = __webpack_require__(
              /*! array-filter */ './node_modules/array-filter/index.js'
            );

            module.exports = function availableTypedArrays() {
              return filter(
                [
                  'BigInt64Array',
                  'BigUint64Array',
                  'Float32Array',
                  'Float64Array',
                  'Int16Array',
                  'Int32Array',
                  'Int8Array',
                  'Uint16Array',
                  'Uint32Array',
                  'Uint8Array',
                  'Uint8ClampedArray',
                ],
                function (typedArray) {
                  return (
                    typeof __webpack_require__.g[typedArray] === 'function'
                  );
                }
              );
            };

            /***/
          },

        /***/ './node_modules/axios/index.js':
          /*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = __webpack_require__(
              /*! ./lib/axios */ './node_modules/axios/lib/axios.js'
            );

            /***/
          },

        /***/ './node_modules/axios/lib/adapters/xhr.js':
          /*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./../utils */ './node_modules/axios/lib/utils.js'
            );

            var settle = __webpack_require__(
              /*! ./../core/settle */ './node_modules/axios/lib/core/settle.js'
            );

            var cookies = __webpack_require__(
              /*! ./../helpers/cookies */ './node_modules/axios/lib/helpers/cookies.js'
            );

            var buildURL = __webpack_require__(
              /*! ./../helpers/buildURL */ './node_modules/axios/lib/helpers/buildURL.js'
            );

            var buildFullPath = __webpack_require__(
              /*! ../core/buildFullPath */ './node_modules/axios/lib/core/buildFullPath.js'
            );

            var parseHeaders = __webpack_require__(
              /*! ./../helpers/parseHeaders */ './node_modules/axios/lib/helpers/parseHeaders.js'
            );

            var isURLSameOrigin = __webpack_require__(
              /*! ./../helpers/isURLSameOrigin */ './node_modules/axios/lib/helpers/isURLSameOrigin.js'
            );

            var createError = __webpack_require__(
              /*! ../core/createError */ './node_modules/axios/lib/core/createError.js'
            );

            module.exports = function xhrAdapter(config) {
              return new Promise(function dispatchXhrRequest(resolve, reject) {
                var requestData = config.data;
                var requestHeaders = config.headers;

                if (utils.isFormData(requestData)) {
                  delete requestHeaders['Content-Type']; // Let the browser set it
                }

                var request = new XMLHttpRequest(); // HTTP basic authentication

                if (config.auth) {
                  var username = config.auth.username || '';
                  var password = config.auth.password
                    ? unescape(encodeURIComponent(config.auth.password))
                    : '';
                  requestHeaders.Authorization =
                    'Basic ' + btoa(username + ':' + password);
                }

                var fullPath = buildFullPath(config.baseURL, config.url);
                request.open(
                  config.method.toUpperCase(),
                  buildURL(fullPath, config.params, config.paramsSerializer),
                  true
                ); // Set the request timeout in MS

                request.timeout = config.timeout; // Listen for ready state

                request.onreadystatechange = function handleLoad() {
                  if (!request || request.readyState !== 4) {
                    return;
                  } // The request errored out and we didn't get a response, this will be
                  // handled by onerror instead
                  // With one exception: request that using file: protocol, most browsers
                  // will return status as 0 even though it's a successful request

                  if (
                    request.status === 0 &&
                    !(
                      request.responseURL &&
                      request.responseURL.indexOf('file:') === 0
                    )
                  ) {
                    return;
                  } // Prepare the response

                  var responseHeaders =
                    'getAllResponseHeaders' in request
                      ? parseHeaders(request.getAllResponseHeaders())
                      : null;
                  var responseData =
                    !config.responseType || config.responseType === 'text'
                      ? request.responseText
                      : request.response;
                  var response = {
                    data: responseData,
                    status: request.status,
                    statusText: request.statusText,
                    headers: responseHeaders,
                    config: config,
                    request: request,
                  };
                  settle(resolve, reject, response); // Clean up request

                  request = null;
                }; // Handle browser request cancellation (as opposed to a manual cancellation)

                request.onabort = function handleAbort() {
                  if (!request) {
                    return;
                  }

                  reject(
                    createError(
                      'Request aborted',
                      config,
                      'ECONNABORTED',
                      request
                    )
                  ); // Clean up request

                  request = null;
                }; // Handle low level network errors

                request.onerror = function handleError() {
                  // Real errors are hidden from us by the browser
                  // onerror should only fire if it's a network error
                  reject(createError('Network Error', config, null, request)); // Clean up request

                  request = null;
                }; // Handle timeout

                request.ontimeout = function handleTimeout() {
                  var timeoutErrorMessage =
                    'timeout of ' + config.timeout + 'ms exceeded';

                  if (config.timeoutErrorMessage) {
                    timeoutErrorMessage = config.timeoutErrorMessage;
                  }

                  reject(
                    createError(
                      timeoutErrorMessage,
                      config,
                      'ECONNABORTED',
                      request
                    )
                  ); // Clean up request

                  request = null;
                }; // Add xsrf header
                // This is only done if running in a standard browser environment.
                // Specifically not if we're in a web worker, or react-native.

                if (utils.isStandardBrowserEnv()) {
                  // Add xsrf header
                  var xsrfValue =
                    (config.withCredentials || isURLSameOrigin(fullPath)) &&
                    config.xsrfCookieName
                      ? cookies.read(config.xsrfCookieName)
                      : undefined;

                  if (xsrfValue) {
                    requestHeaders[config.xsrfHeaderName] = xsrfValue;
                  }
                } // Add headers to the request

                if ('setRequestHeader' in request) {
                  utils.forEach(
                    requestHeaders,
                    function setRequestHeader(val, key) {
                      if (
                        typeof requestData === 'undefined' &&
                        key.toLowerCase() === 'content-type'
                      ) {
                        // Remove Content-Type if data is undefined
                        delete requestHeaders[key];
                      } else {
                        // Otherwise add header to the request
                        request.setRequestHeader(key, val);
                      }
                    }
                  );
                } // Add withCredentials to request if needed

                if (!utils.isUndefined(config.withCredentials)) {
                  request.withCredentials = !!config.withCredentials;
                } // Add responseType to request if needed

                if (config.responseType) {
                  try {
                    request.responseType = config.responseType;
                  } catch (e) {
                    // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                    // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                    if (config.responseType !== 'json') {
                      throw e;
                    }
                  }
                } // Handle progress if needed

                if (typeof config.onDownloadProgress === 'function') {
                  request.addEventListener(
                    'progress',
                    config.onDownloadProgress
                  );
                } // Not all browsers support upload events

                if (
                  typeof config.onUploadProgress === 'function' &&
                  request.upload
                ) {
                  request.upload.addEventListener(
                    'progress',
                    config.onUploadProgress
                  );
                }

                if (config.cancelToken) {
                  // Handle cancellation
                  config.cancelToken.promise.then(function onCanceled(cancel) {
                    if (!request) {
                      return;
                    }

                    request.abort();
                    reject(cancel); // Clean up request

                    request = null;
                  });
                }

                if (!requestData) {
                  requestData = null;
                } // Send the request

                request.send(requestData);
              });
            };

            /***/
          },

        /***/ './node_modules/axios/lib/axios.js':
          /*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./utils */ './node_modules/axios/lib/utils.js'
            );

            var bind = __webpack_require__(
              /*! ./helpers/bind */ './node_modules/axios/lib/helpers/bind.js'
            );

            var Axios = __webpack_require__(
              /*! ./core/Axios */ './node_modules/axios/lib/core/Axios.js'
            );

            var mergeConfig = __webpack_require__(
              /*! ./core/mergeConfig */ './node_modules/axios/lib/core/mergeConfig.js'
            );

            var defaults = __webpack_require__(
              /*! ./defaults */ './node_modules/axios/lib/defaults.js'
            );
            /**
             * Create an instance of Axios
             *
             * @param {Object} defaultConfig The default config for the instance
             * @return {Axios} A new instance of Axios
             */

            function createInstance(defaultConfig) {
              var context = new Axios(defaultConfig);
              var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

              utils.extend(instance, Axios.prototype, context); // Copy context to instance

              utils.extend(instance, context);
              return instance;
            } // Create the default instance to be exported

            var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

            axios.Axios = Axios; // Factory for creating new instances

            axios.create = function create(instanceConfig) {
              return createInstance(
                mergeConfig(axios.defaults, instanceConfig)
              );
            }; // Expose Cancel & CancelToken

            axios.Cancel = __webpack_require__(
              /*! ./cancel/Cancel */ './node_modules/axios/lib/cancel/Cancel.js'
            );
            axios.CancelToken = __webpack_require__(
              /*! ./cancel/CancelToken */ './node_modules/axios/lib/cancel/CancelToken.js'
            );
            axios.isCancel = __webpack_require__(
              /*! ./cancel/isCancel */ './node_modules/axios/lib/cancel/isCancel.js'
            ); // Expose all/spread

            axios.all = function all(promises) {
              return Promise.all(promises);
            };

            axios.spread = __webpack_require__(
              /*! ./helpers/spread */ './node_modules/axios/lib/helpers/spread.js'
            ); // Expose isAxiosError

            axios.isAxiosError = __webpack_require__(
              /*! ./helpers/isAxiosError */ './node_modules/axios/lib/helpers/isAxiosError.js'
            );
            module.exports = axios; // Allow use of default import syntax in TypeScript

            module.exports.default = axios;

            /***/
          },

        /***/ './node_modules/axios/lib/cancel/Cancel.js':
          /*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
          /***/ (module) => {
            'use strict';

            /**
             * A `Cancel` is an object that is thrown when an operation is canceled.
             *
             * @class
             * @param {string=} message The message.
             */

            function Cancel(message) {
              this.message = message;
            }

            Cancel.prototype.toString = function toString() {
              return 'Cancel' + (this.message ? ': ' + this.message : '');
            };

            Cancel.prototype.__CANCEL__ = true;
            module.exports = Cancel;

            /***/
          },

        /***/ './node_modules/axios/lib/cancel/CancelToken.js':
          /*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var Cancel = __webpack_require__(
              /*! ./Cancel */ './node_modules/axios/lib/cancel/Cancel.js'
            );
            /**
             * A `CancelToken` is an object that can be used to request cancellation of an operation.
             *
             * @class
             * @param {Function} executor The executor function.
             */

            function CancelToken(executor) {
              if (typeof executor !== 'function') {
                throw new TypeError('executor must be a function.');
              }

              var resolvePromise;
              this.promise = new Promise(function promiseExecutor(resolve) {
                resolvePromise = resolve;
              });
              var token = this;
              executor(function cancel(message) {
                if (token.reason) {
                  // Cancellation has already been requested
                  return;
                }

                token.reason = new Cancel(message);
                resolvePromise(token.reason);
              });
            }
            /**
             * Throws a `Cancel` if cancellation has been requested.
             */

            CancelToken.prototype.throwIfRequested = function throwIfRequested() {
              if (this.reason) {
                throw this.reason;
              }
            };
            /**
             * Returns an object that contains a new `CancelToken` and a function that, when called,
             * cancels the `CancelToken`.
             */

            CancelToken.source = function source() {
              var cancel;
              var token = new CancelToken(function executor(c) {
                cancel = c;
              });
              return {
                token: token,
                cancel: cancel,
              };
            };

            module.exports = CancelToken;

            /***/
          },

        /***/ './node_modules/axios/lib/cancel/isCancel.js':
          /*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
          /***/ (module) => {
            'use strict';

            module.exports = function isCancel(value) {
              return !!(value && value.__CANCEL__);
            };

            /***/
          },

        /***/ './node_modules/axios/lib/core/Axios.js':
          /*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./../utils */ './node_modules/axios/lib/utils.js'
            );

            var buildURL = __webpack_require__(
              /*! ../helpers/buildURL */ './node_modules/axios/lib/helpers/buildURL.js'
            );

            var InterceptorManager = __webpack_require__(
              /*! ./InterceptorManager */ './node_modules/axios/lib/core/InterceptorManager.js'
            );

            var dispatchRequest = __webpack_require__(
              /*! ./dispatchRequest */ './node_modules/axios/lib/core/dispatchRequest.js'
            );

            var mergeConfig = __webpack_require__(
              /*! ./mergeConfig */ './node_modules/axios/lib/core/mergeConfig.js'
            );
            /**
             * Create a new instance of Axios
             *
             * @param {Object} instanceConfig The default config for the instance
             */

            function Axios(instanceConfig) {
              this.defaults = instanceConfig;
              this.interceptors = {
                request: new InterceptorManager(),
                response: new InterceptorManager(),
              };
            }
            /**
             * Dispatch a request
             *
             * @param {Object} config The config specific for this request (merged with this.defaults)
             */

            Axios.prototype.request = function request(config) {
              /*eslint no-param-reassign:0*/
              // Allow for axios('example/url'[, config]) a la fetch API
              if (typeof config === 'string') {
                config = arguments[1] || {};
                config.url = arguments[0];
              } else {
                config = config || {};
              }

              config = mergeConfig(this.defaults, config); // Set config.method

              if (config.method) {
                config.method = config.method.toLowerCase();
              } else if (this.defaults.method) {
                config.method = this.defaults.method.toLowerCase();
              } else {
                config.method = 'get';
              } // Hook up interceptors middleware

              var chain = [dispatchRequest, undefined];
              var promise = Promise.resolve(config);
              this.interceptors.request.forEach(
                function unshiftRequestInterceptors(interceptor) {
                  chain.unshift(interceptor.fulfilled, interceptor.rejected);
                }
              );
              this.interceptors.response.forEach(
                function pushResponseInterceptors(interceptor) {
                  chain.push(interceptor.fulfilled, interceptor.rejected);
                }
              );

              while (chain.length) {
                promise = promise.then(chain.shift(), chain.shift());
              }

              return promise;
            };

            Axios.prototype.getUri = function getUri(config) {
              config = mergeConfig(this.defaults, config);
              return buildURL(
                config.url,
                config.params,
                config.paramsSerializer
              ).replace(/^\?/, '');
            }; // Provide aliases for supported request methods

            utils.forEach(
              ['delete', 'get', 'head', 'options'],
              function forEachMethodNoData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, config) {
                  return this.request(
                    mergeConfig(config || {}, {
                      method: method,
                      url: url,
                      data: (config || {}).data,
                    })
                  );
                };
              }
            );
            utils.forEach(
              ['post', 'put', 'patch'],
              function forEachMethodWithData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, data, config) {
                  return this.request(
                    mergeConfig(config || {}, {
                      method: method,
                      url: url,
                      data: data,
                    })
                  );
                };
              }
            );
            module.exports = Axios;

            /***/
          },

        /***/ './node_modules/axios/lib/core/InterceptorManager.js':
          /*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./../utils */ './node_modules/axios/lib/utils.js'
            );

            function InterceptorManager() {
              this.handlers = [];
            }
            /**
             * Add a new interceptor to the stack
             *
             * @param {Function} fulfilled The function to handle `then` for a `Promise`
             * @param {Function} rejected The function to handle `reject` for a `Promise`
             *
             * @return {Number} An ID used to remove interceptor later
             */

            InterceptorManager.prototype.use = function use(
              fulfilled,
              rejected
            ) {
              this.handlers.push({
                fulfilled: fulfilled,
                rejected: rejected,
              });
              return this.handlers.length - 1;
            };
            /**
             * Remove an interceptor from the stack
             *
             * @param {Number} id The ID that was returned by `use`
             */

            InterceptorManager.prototype.eject = function eject(id) {
              if (this.handlers[id]) {
                this.handlers[id] = null;
              }
            };
            /**
             * Iterate over all the registered interceptors
             *
             * This method is particularly useful for skipping over any
             * interceptors that may have become `null` calling `eject`.
             *
             * @param {Function} fn The function to call for each interceptor
             */

            InterceptorManager.prototype.forEach = function forEach(fn) {
              utils.forEach(this.handlers, function forEachHandler(h) {
                if (h !== null) {
                  fn(h);
                }
              });
            };

            module.exports = InterceptorManager;

            /***/
          },

        /***/ './node_modules/axios/lib/core/buildFullPath.js':
          /*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var isAbsoluteURL = __webpack_require__(
              /*! ../helpers/isAbsoluteURL */ './node_modules/axios/lib/helpers/isAbsoluteURL.js'
            );

            var combineURLs = __webpack_require__(
              /*! ../helpers/combineURLs */ './node_modules/axios/lib/helpers/combineURLs.js'
            );
            /**
             * Creates a new URL by combining the baseURL with the requestedURL,
             * only when the requestedURL is not already an absolute URL.
             * If the requestURL is absolute, this function returns the requestedURL untouched.
             *
             * @param {string} baseURL The base URL
             * @param {string} requestedURL Absolute or relative URL to combine
             * @returns {string} The combined full path
             */

            module.exports = function buildFullPath(baseURL, requestedURL) {
              if (baseURL && !isAbsoluteURL(requestedURL)) {
                return combineURLs(baseURL, requestedURL);
              }

              return requestedURL;
            };

            /***/
          },

        /***/ './node_modules/axios/lib/core/createError.js':
          /*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var enhanceError = __webpack_require__(
              /*! ./enhanceError */ './node_modules/axios/lib/core/enhanceError.js'
            );
            /**
             * Create an Error with the specified message, config, error code, request and response.
             *
             * @param {string} message The error message.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The created error.
             */

            module.exports = function createError(
              message,
              config,
              code,
              request,
              response
            ) {
              var error = new Error(message);
              return enhanceError(error, config, code, request, response);
            };

            /***/
          },

        /***/ './node_modules/axios/lib/core/dispatchRequest.js':
          /*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./../utils */ './node_modules/axios/lib/utils.js'
            );

            var transformData = __webpack_require__(
              /*! ./transformData */ './node_modules/axios/lib/core/transformData.js'
            );

            var isCancel = __webpack_require__(
              /*! ../cancel/isCancel */ './node_modules/axios/lib/cancel/isCancel.js'
            );

            var defaults = __webpack_require__(
              /*! ../defaults */ './node_modules/axios/lib/defaults.js'
            );
            /**
             * Throws a `Cancel` if cancellation has been requested.
             */

            function throwIfCancellationRequested(config) {
              if (config.cancelToken) {
                config.cancelToken.throwIfRequested();
              }
            }
            /**
             * Dispatch a request to the server using the configured adapter.
             *
             * @param {object} config The config that is to be used for the request
             * @returns {Promise} The Promise to be fulfilled
             */

            module.exports = function dispatchRequest(config) {
              throwIfCancellationRequested(config); // Ensure headers exist

              config.headers = config.headers || {}; // Transform request data

              config.data = transformData(
                config.data,
                config.headers,
                config.transformRequest
              ); // Flatten headers

              config.headers = utils.merge(
                config.headers.common || {},
                config.headers[config.method] || {},
                config.headers
              );
              utils.forEach(
                ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                function cleanHeaderConfig(method) {
                  delete config.headers[method];
                }
              );
              var adapter = config.adapter || defaults.adapter;
              return adapter(config).then(
                function onAdapterResolution(response) {
                  throwIfCancellationRequested(config); // Transform response data

                  response.data = transformData(
                    response.data,
                    response.headers,
                    config.transformResponse
                  );
                  return response;
                },
                function onAdapterRejection(reason) {
                  if (!isCancel(reason)) {
                    throwIfCancellationRequested(config); // Transform response data

                    if (reason && reason.response) {
                      reason.response.data = transformData(
                        reason.response.data,
                        reason.response.headers,
                        config.transformResponse
                      );
                    }
                  }

                  return Promise.reject(reason);
                }
              );
            };

            /***/
          },

        /***/ './node_modules/axios/lib/core/enhanceError.js':
          /*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
          /***/ (module) => {
            'use strict';

            /**
             * Update an Error with the specified config, error code, and response.
             *
             * @param {Error} error The error to update.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The error.
             */

            module.exports = function enhanceError(
              error,
              config,
              code,
              request,
              response
            ) {
              error.config = config;

              if (code) {
                error.code = code;
              }

              error.request = request;
              error.response = response;
              error.isAxiosError = true;

              error.toJSON = function toJSON() {
                return {
                  // Standard
                  message: this.message,
                  name: this.name,
                  // Microsoft
                  description: this.description,
                  number: this.number,
                  // Mozilla
                  fileName: this.fileName,
                  lineNumber: this.lineNumber,
                  columnNumber: this.columnNumber,
                  stack: this.stack,
                  // Axios
                  config: this.config,
                  code: this.code,
                };
              };

              return error;
            };

            /***/
          },

        /***/ './node_modules/axios/lib/core/mergeConfig.js':
          /*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ../utils */ './node_modules/axios/lib/utils.js'
            );
            /**
             * Config-specific merge-function which creates a new config-object
             * by merging two configuration objects together.
             *
             * @param {Object} config1
             * @param {Object} config2
             * @returns {Object} New object resulting from merging config2 to config1
             */

            module.exports = function mergeConfig(config1, config2) {
              // eslint-disable-next-line no-param-reassign
              config2 = config2 || {};
              var config = {};
              var valueFromConfig2Keys = ['url', 'method', 'data'];
              var mergeDeepPropertiesKeys = [
                'headers',
                'auth',
                'proxy',
                'params',
              ];
              var defaultToConfig2Keys = [
                'baseURL',
                'transformRequest',
                'transformResponse',
                'paramsSerializer',
                'timeout',
                'timeoutMessage',
                'withCredentials',
                'adapter',
                'responseType',
                'xsrfCookieName',
                'xsrfHeaderName',
                'onUploadProgress',
                'onDownloadProgress',
                'decompress',
                'maxContentLength',
                'maxBodyLength',
                'maxRedirects',
                'transport',
                'httpAgent',
                'httpsAgent',
                'cancelToken',
                'socketPath',
                'responseEncoding',
              ];
              var directMergeKeys = ['validateStatus'];

              function getMergedValue(target, source) {
                if (
                  utils.isPlainObject(target) &&
                  utils.isPlainObject(source)
                ) {
                  return utils.merge(target, source);
                } else if (utils.isPlainObject(source)) {
                  return utils.merge({}, source);
                } else if (utils.isArray(source)) {
                  return source.slice();
                }

                return source;
              }

              function mergeDeepProperties(prop) {
                if (!utils.isUndefined(config2[prop])) {
                  config[prop] = getMergedValue(config1[prop], config2[prop]);
                } else if (!utils.isUndefined(config1[prop])) {
                  config[prop] = getMergedValue(undefined, config1[prop]);
                }
              }

              utils.forEach(
                valueFromConfig2Keys,
                function valueFromConfig2(prop) {
                  if (!utils.isUndefined(config2[prop])) {
                    config[prop] = getMergedValue(undefined, config2[prop]);
                  }
                }
              );
              utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
              utils.forEach(
                defaultToConfig2Keys,
                function defaultToConfig2(prop) {
                  if (!utils.isUndefined(config2[prop])) {
                    config[prop] = getMergedValue(undefined, config2[prop]);
                  } else if (!utils.isUndefined(config1[prop])) {
                    config[prop] = getMergedValue(undefined, config1[prop]);
                  }
                }
              );
              utils.forEach(directMergeKeys, function merge(prop) {
                if (prop in config2) {
                  config[prop] = getMergedValue(config1[prop], config2[prop]);
                } else if (prop in config1) {
                  config[prop] = getMergedValue(undefined, config1[prop]);
                }
              });
              var axiosKeys = valueFromConfig2Keys
                .concat(mergeDeepPropertiesKeys)
                .concat(defaultToConfig2Keys)
                .concat(directMergeKeys);
              var otherKeys = Object.keys(config1)
                .concat(Object.keys(config2))
                .filter(function filterAxiosKeys(key) {
                  return axiosKeys.indexOf(key) === -1;
                });
              utils.forEach(otherKeys, mergeDeepProperties);
              return config;
            };

            /***/
          },

        /***/ './node_modules/axios/lib/core/settle.js':
          /*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var createError = __webpack_require__(
              /*! ./createError */ './node_modules/axios/lib/core/createError.js'
            );
            /**
             * Resolve or reject a Promise based on response status.
             *
             * @param {Function} resolve A function that resolves the promise.
             * @param {Function} reject A function that rejects the promise.
             * @param {object} response The response.
             */

            module.exports = function settle(resolve, reject, response) {
              var validateStatus = response.config.validateStatus;

              if (
                !response.status ||
                !validateStatus ||
                validateStatus(response.status)
              ) {
                resolve(response);
              } else {
                reject(
                  createError(
                    'Request failed with status code ' + response.status,
                    response.config,
                    null,
                    response.request,
                    response
                  )
                );
              }
            };

            /***/
          },

        /***/ './node_modules/axios/lib/core/transformData.js':
          /*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./../utils */ './node_modules/axios/lib/utils.js'
            );
            /**
             * Transform the data for a request or a response
             *
             * @param {Object|String} data The data to be transformed
             * @param {Array} headers The headers for the request or response
             * @param {Array|Function} fns A single function or Array of functions
             * @returns {*} The resulting transformed data
             */

            module.exports = function transformData(data, headers, fns) {
              /*eslint no-param-reassign:0*/
              utils.forEach(fns, function transform(fn) {
                data = fn(data, headers);
              });
              return data;
            };

            /***/
          },

        /***/ './node_modules/axios/lib/defaults.js':
          /*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';
            /* provided dependency */ var process = __webpack_require__(
              /*! process/browser */ './node_modules/process/browser.js'
            );

            var utils = __webpack_require__(
              /*! ./utils */ './node_modules/axios/lib/utils.js'
            );

            var normalizeHeaderName = __webpack_require__(
              /*! ./helpers/normalizeHeaderName */ './node_modules/axios/lib/helpers/normalizeHeaderName.js'
            );

            var DEFAULT_CONTENT_TYPE = {
              'Content-Type': 'application/x-www-form-urlencoded',
            };

            function setContentTypeIfUnset(headers, value) {
              if (
                !utils.isUndefined(headers) &&
                utils.isUndefined(headers['Content-Type'])
              ) {
                headers['Content-Type'] = value;
              }
            }

            function getDefaultAdapter() {
              var adapter;

              if (typeof XMLHttpRequest !== 'undefined') {
                // For browsers use XHR adapter
                adapter = __webpack_require__(
                  /*! ./adapters/xhr */ './node_modules/axios/lib/adapters/xhr.js'
                );
              } else if (
                typeof process !== 'undefined' &&
                Object.prototype.toString.call(process) === '[object process]'
              ) {
                // For node use HTTP adapter
                adapter = __webpack_require__(
                  /*! ./adapters/http */ './node_modules/axios/lib/adapters/xhr.js'
                );
              }

              return adapter;
            }

            var defaults = {
              adapter: getDefaultAdapter(),
              transformRequest: [
                function transformRequest(data, headers) {
                  normalizeHeaderName(headers, 'Accept');
                  normalizeHeaderName(headers, 'Content-Type');

                  if (
                    utils.isFormData(data) ||
                    utils.isArrayBuffer(data) ||
                    utils.isBuffer(data) ||
                    utils.isStream(data) ||
                    utils.isFile(data) ||
                    utils.isBlob(data)
                  ) {
                    return data;
                  }

                  if (utils.isArrayBufferView(data)) {
                    return data.buffer;
                  }

                  if (utils.isURLSearchParams(data)) {
                    setContentTypeIfUnset(
                      headers,
                      'application/x-www-form-urlencoded;charset=utf-8'
                    );
                    return data.toString();
                  }

                  if (utils.isObject(data)) {
                    setContentTypeIfUnset(
                      headers,
                      'application/json;charset=utf-8'
                    );
                    return JSON.stringify(data);
                  }

                  return data;
                },
              ],
              transformResponse: [
                function transformResponse(data) {
                  /*eslint no-param-reassign:0*/
                  if (typeof data === 'string') {
                    try {
                      data = JSON.parse(data);
                    } catch (e) {
                      /* Ignore */
                    }
                  }

                  return data;
                },
              ],

              /**
               * A timeout in milliseconds to abort a request. If set to 0 (default) a
               * timeout is not created.
               */
              timeout: 0,
              xsrfCookieName: 'XSRF-TOKEN',
              xsrfHeaderName: 'X-XSRF-TOKEN',
              maxContentLength: -1,
              maxBodyLength: -1,
              validateStatus: function validateStatus(status) {
                return status >= 200 && status < 300;
              },
            };
            defaults.headers = {
              common: {
                Accept: 'application/json, text/plain, */*',
              },
            };
            utils.forEach(
              ['delete', 'get', 'head'],
              function forEachMethodNoData(method) {
                defaults.headers[method] = {};
              }
            );
            utils.forEach(
              ['post', 'put', 'patch'],
              function forEachMethodWithData(method) {
                defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
              }
            );
            module.exports = defaults;

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/bind.js':
          /*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
          /***/ (module) => {
            'use strict';

            module.exports = function bind(fn, thisArg) {
              return function wrap() {
                var args = new Array(arguments.length);

                for (var i = 0; i < args.length; i++) {
                  args[i] = arguments[i];
                }

                return fn.apply(thisArg, args);
              };
            };

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/buildURL.js':
          /*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./../utils */ './node_modules/axios/lib/utils.js'
            );

            function encode(val) {
              return encodeURIComponent(val)
                .replace(/%3A/gi, ':')
                .replace(/%24/g, '$')
                .replace(/%2C/gi, ',')
                .replace(/%20/g, '+')
                .replace(/%5B/gi, '[')
                .replace(/%5D/gi, ']');
            }
            /**
             * Build a URL by appending params to the end
             *
             * @param {string} url The base of the url (e.g., http://www.google.com)
             * @param {object} [params] The params to be appended
             * @returns {string} The formatted url
             */

            module.exports = function buildURL(url, params, paramsSerializer) {
              /*eslint no-param-reassign:0*/
              if (!params) {
                return url;
              }

              var serializedParams;

              if (paramsSerializer) {
                serializedParams = paramsSerializer(params);
              } else if (utils.isURLSearchParams(params)) {
                serializedParams = params.toString();
              } else {
                var parts = [];
                utils.forEach(params, function serialize(val, key) {
                  if (val === null || typeof val === 'undefined') {
                    return;
                  }

                  if (utils.isArray(val)) {
                    key = key + '[]';
                  } else {
                    val = [val];
                  }

                  utils.forEach(val, function parseValue(v) {
                    if (utils.isDate(v)) {
                      v = v.toISOString();
                    } else if (utils.isObject(v)) {
                      v = JSON.stringify(v);
                    }

                    parts.push(encode(key) + '=' + encode(v));
                  });
                });
                serializedParams = parts.join('&');
              }

              if (serializedParams) {
                var hashmarkIndex = url.indexOf('#');

                if (hashmarkIndex !== -1) {
                  url = url.slice(0, hashmarkIndex);
                }

                url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
              }

              return url;
            };

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/combineURLs.js':
          /*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
          /***/ (module) => {
            'use strict';

            /**
             * Creates a new URL by combining the specified URLs
             *
             * @param {string} baseURL The base URL
             * @param {string} relativeURL The relative URL
             * @returns {string} The combined URL
             */

            module.exports = function combineURLs(baseURL, relativeURL) {
              return relativeURL
                ? baseURL.replace(/\/+$/, '') +
                    '/' +
                    relativeURL.replace(/^\/+/, '')
                : baseURL;
            };

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/cookies.js':
          /*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./../utils */ './node_modules/axios/lib/utils.js'
            );

            module.exports = utils.isStandardBrowserEnv() // Standard browser envs support document.cookie
              ? (function standardBrowserEnv() {
                  return {
                    write: function write(
                      name,
                      value,
                      expires,
                      path,
                      domain,
                      secure
                    ) {
                      var cookie = [];
                      cookie.push(name + '=' + encodeURIComponent(value));

                      if (utils.isNumber(expires)) {
                        cookie.push(
                          'expires=' + new Date(expires).toGMTString()
                        );
                      }

                      if (utils.isString(path)) {
                        cookie.push('path=' + path);
                      }

                      if (utils.isString(domain)) {
                        cookie.push('domain=' + domain);
                      }

                      if (secure === true) {
                        cookie.push('secure');
                      }

                      document.cookie = cookie.join('; ');
                    },
                    read: function read(name) {
                      var match = document.cookie.match(
                        new RegExp('(^|;\\s*)(' + name + ')=([^;]*)')
                      );
                      return match ? decodeURIComponent(match[3]) : null;
                    },
                    remove: function remove(name) {
                      this.write(name, '', Date.now() - 86400000);
                    },
                  };
                })() // Non standard browser env (web workers, react-native) lack needed support.
              : (function nonStandardBrowserEnv() {
                  return {
                    write: function write() {},
                    read: function read() {
                      return null;
                    },
                    remove: function remove() {},
                  };
                })();

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/isAbsoluteURL.js':
          /*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
          /***/ (module) => {
            'use strict';

            /**
             * Determines whether the specified URL is absolute
             *
             * @param {string} url The URL to test
             * @returns {boolean} True if the specified URL is absolute, otherwise false
             */

            module.exports = function isAbsoluteURL(url) {
              // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
              // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
              // by any combination of letters, digits, plus, period, or hyphen.
              return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
            };

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/isAxiosError.js':
          /*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
          /***/ (module) => {
            'use strict';

            /**
             * Determines whether the payload is an error thrown by Axios
             *
             * @param {*} payload The value to test
             * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
             */

            module.exports = function isAxiosError(payload) {
              return (
                typeof payload === 'object' && payload.isAxiosError === true
              );
            };

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/isURLSameOrigin.js':
          /*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./../utils */ './node_modules/axios/lib/utils.js'
            );

            module.exports = utils.isStandardBrowserEnv() // Standard browser envs have full support of the APIs needed to test
              ? // whether the request URL is of the same origin as current location.
                (function standardBrowserEnv() {
                  var msie = /(msie|trident)/i.test(navigator.userAgent);
                  var urlParsingNode = document.createElement('a');
                  var originURL;
                  /**
                   * Parse a URL to discover it's components
                   *
                   * @param {String} url The URL to be parsed
                   * @returns {Object}
                   */

                  function resolveURL(url) {
                    var href = url;

                    if (msie) {
                      // IE needs attribute set twice to normalize properties
                      urlParsingNode.setAttribute('href', href);
                      href = urlParsingNode.href;
                    }

                    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

                    return {
                      href: urlParsingNode.href,
                      protocol: urlParsingNode.protocol
                        ? urlParsingNode.protocol.replace(/:$/, '')
                        : '',
                      host: urlParsingNode.host,
                      search: urlParsingNode.search
                        ? urlParsingNode.search.replace(/^\?/, '')
                        : '',
                      hash: urlParsingNode.hash
                        ? urlParsingNode.hash.replace(/^#/, '')
                        : '',
                      hostname: urlParsingNode.hostname,
                      port: urlParsingNode.port,
                      pathname:
                        urlParsingNode.pathname.charAt(0) === '/'
                          ? urlParsingNode.pathname
                          : '/' + urlParsingNode.pathname,
                    };
                  }

                  originURL = resolveURL(window.location.href);
                  /**
                   * Determine if a URL shares the same origin as the current location
                   *
                   * @param {String} requestURL The URL to test
                   * @returns {boolean} True if URL shares the same origin, otherwise false
                   */

                  return function isURLSameOrigin(requestURL) {
                    var parsed = utils.isString(requestURL)
                      ? resolveURL(requestURL)
                      : requestURL;
                    return (
                      parsed.protocol === originURL.protocol &&
                      parsed.host === originURL.host
                    );
                  };
                })() // Non standard browser envs (web workers, react-native) lack needed support.
              : (function nonStandardBrowserEnv() {
                  return function isURLSameOrigin() {
                    return true;
                  };
                })();

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/normalizeHeaderName.js':
          /*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ../utils */ './node_modules/axios/lib/utils.js'
            );

            module.exports = function normalizeHeaderName(
              headers,
              normalizedName
            ) {
              utils.forEach(headers, function processHeader(value, name) {
                if (
                  name !== normalizedName &&
                  name.toUpperCase() === normalizedName.toUpperCase()
                ) {
                  headers[normalizedName] = value;
                  delete headers[name];
                }
              });
            };

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/parseHeaders.js':
          /*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var utils = __webpack_require__(
              /*! ./../utils */ './node_modules/axios/lib/utils.js'
            ); // Headers whose duplicates are ignored by node
            // c.f. https://nodejs.org/api/http.html#http_message_headers

            var ignoreDuplicateOf = [
              'age',
              'authorization',
              'content-length',
              'content-type',
              'etag',
              'expires',
              'from',
              'host',
              'if-modified-since',
              'if-unmodified-since',
              'last-modified',
              'location',
              'max-forwards',
              'proxy-authorization',
              'referer',
              'retry-after',
              'user-agent',
            ];
            /**
             * Parse headers into an object
             *
             * ```
             * Date: Wed, 27 Aug 2014 08:58:49 GMT
             * Content-Type: application/json
             * Connection: keep-alive
             * Transfer-Encoding: chunked
             * ```
             *
             * @param {String} headers Headers needing to be parsed
             * @returns {Object} Headers parsed into an object
             */

            module.exports = function parseHeaders(headers) {
              var parsed = {};
              var key;
              var val;
              var i;

              if (!headers) {
                return parsed;
              }

              utils.forEach(headers.split('\n'), function parser(line) {
                i = line.indexOf(':');
                key = utils.trim(line.substr(0, i)).toLowerCase();
                val = utils.trim(line.substr(i + 1));

                if (key) {
                  if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                    return;
                  }

                  if (key === 'set-cookie') {
                    parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                      val,
                    ]);
                  } else {
                    parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                  }
                }
              });
              return parsed;
            };

            /***/
          },

        /***/ './node_modules/axios/lib/helpers/spread.js':
          /*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
          /***/ (module) => {
            'use strict';

            /**
             * Syntactic sugar for invoking a function and expanding an array for arguments.
             *
             * Common use case would be to use `Function.prototype.apply`.
             *
             *  ```js
             *  function f(x, y, z) {}
             *  var args = [1, 2, 3];
             *  f.apply(null, args);
             *  ```
             *
             * With `spread` this example can be re-written.
             *
             *  ```js
             *  spread(function(x, y, z) {})([1, 2, 3]);
             *  ```
             *
             * @param {Function} callback
             * @returns {Function}
             */

            module.exports = function spread(callback) {
              return function wrap(arr) {
                return callback.apply(null, arr);
              };
            };

            /***/
          },

        /***/ './node_modules/axios/lib/utils.js':
          /*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var bind = __webpack_require__(
              /*! ./helpers/bind */ './node_modules/axios/lib/helpers/bind.js'
            );
            /*global toString:true*/
            // utils is a library of generic helper functions non-specific to axios

            var toString = Object.prototype.toString;
            /**
             * Determine if a value is an Array
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Array, otherwise false
             */

            function isArray(val) {
              return toString.call(val) === '[object Array]';
            }
            /**
             * Determine if a value is undefined
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if the value is undefined, otherwise false
             */

            function isUndefined(val) {
              return typeof val === 'undefined';
            }
            /**
             * Determine if a value is a Buffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Buffer, otherwise false
             */

            function isBuffer(val) {
              return (
                val !== null &&
                !isUndefined(val) &&
                val.constructor !== null &&
                !isUndefined(val.constructor) &&
                typeof val.constructor.isBuffer === 'function' &&
                val.constructor.isBuffer(val)
              );
            }
            /**
             * Determine if a value is an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an ArrayBuffer, otherwise false
             */

            function isArrayBuffer(val) {
              return toString.call(val) === '[object ArrayBuffer]';
            }
            /**
             * Determine if a value is a FormData
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an FormData, otherwise false
             */

            function isFormData(val) {
              return typeof FormData !== 'undefined' && val instanceof FormData;
            }
            /**
             * Determine if a value is a view on an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
             */

            function isArrayBufferView(val) {
              var result;

              if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
                result = ArrayBuffer.isView(val);
              } else {
                result = val && val.buffer && val.buffer instanceof ArrayBuffer;
              }

              return result;
            }
            /**
             * Determine if a value is a String
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a String, otherwise false
             */

            function isString(val) {
              return typeof val === 'string';
            }
            /**
             * Determine if a value is a Number
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Number, otherwise false
             */

            function isNumber(val) {
              return typeof val === 'number';
            }
            /**
             * Determine if a value is an Object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Object, otherwise false
             */

            function isObject(val) {
              return val !== null && typeof val === 'object';
            }
            /**
             * Determine if a value is a plain Object
             *
             * @param {Object} val The value to test
             * @return {boolean} True if value is a plain Object, otherwise false
             */

            function isPlainObject(val) {
              if (toString.call(val) !== '[object Object]') {
                return false;
              }

              var prototype = Object.getPrototypeOf(val);
              return prototype === null || prototype === Object.prototype;
            }
            /**
             * Determine if a value is a Date
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Date, otherwise false
             */

            function isDate(val) {
              return toString.call(val) === '[object Date]';
            }
            /**
             * Determine if a value is a File
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a File, otherwise false
             */

            function isFile(val) {
              return toString.call(val) === '[object File]';
            }
            /**
             * Determine if a value is a Blob
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Blob, otherwise false
             */

            function isBlob(val) {
              return toString.call(val) === '[object Blob]';
            }
            /**
             * Determine if a value is a Function
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Function, otherwise false
             */

            function isFunction(val) {
              return toString.call(val) === '[object Function]';
            }
            /**
             * Determine if a value is a Stream
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Stream, otherwise false
             */

            function isStream(val) {
              return isObject(val) && isFunction(val.pipe);
            }
            /**
             * Determine if a value is a URLSearchParams object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a URLSearchParams object, otherwise false
             */

            function isURLSearchParams(val) {
              return (
                typeof URLSearchParams !== 'undefined' &&
                val instanceof URLSearchParams
              );
            }
            /**
             * Trim excess whitespace off the beginning and end of a string
             *
             * @param {String} str The String to trim
             * @returns {String} The String freed of excess whitespace
             */

            function trim(str) {
              return str.replace(/^\s*/, '').replace(/\s*$/, '');
            }
            /**
             * Determine if we're running in a standard browser environment
             *
             * This allows axios to run in a web worker, and react-native.
             * Both environments support XMLHttpRequest, but not fully standard globals.
             *
             * web workers:
             *  typeof window -> undefined
             *  typeof document -> undefined
             *
             * react-native:
             *  navigator.product -> 'ReactNative'
             * nativescript
             *  navigator.product -> 'NativeScript' or 'NS'
             */

            function isStandardBrowserEnv() {
              if (
                typeof navigator !== 'undefined' &&
                (navigator.product === 'ReactNative' ||
                  navigator.product === 'NativeScript' ||
                  navigator.product === 'NS')
              ) {
                return false;
              }

              return (
                typeof window !== 'undefined' && typeof document !== 'undefined'
              );
            }
            /**
             * Iterate over an Array or an Object invoking a function for each item.
             *
             * If `obj` is an Array callback will be called passing
             * the value, index, and complete array for each item.
             *
             * If 'obj' is an Object callback will be called passing
             * the value, key, and complete object for each property.
             *
             * @param {Object|Array} obj The object to iterate
             * @param {Function} fn The callback to invoke for each item
             */

            function forEach(obj, fn) {
              // Don't bother if no value provided
              if (obj === null || typeof obj === 'undefined') {
                return;
              } // Force an array if not already something iterable

              if (typeof obj !== 'object') {
                /*eslint no-param-reassign:0*/
                obj = [obj];
              }

              if (isArray(obj)) {
                // Iterate over array values
                for (var i = 0, l = obj.length; i < l; i++) {
                  fn.call(null, obj[i], i, obj);
                }
              } else {
                // Iterate over object keys
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    fn.call(null, obj[key], key, obj);
                  }
                }
              }
            }
            /**
             * Accepts varargs expecting each argument to be an object, then
             * immutably merges the properties of each object and returns result.
             *
             * When multiple objects contain the same key the later object in
             * the arguments list will take precedence.
             *
             * Example:
             *
             * ```js
             * var result = merge({foo: 123}, {foo: 456});
             * console.log(result.foo); // outputs 456
             * ```
             *
             * @param {Object} obj1 Object to merge
             * @returns {Object} Result of all merge properties
             */

            function merge() {
              /* obj1, obj2, obj3, ... */
              var result = {};

              function assignValue(val, key) {
                if (isPlainObject(result[key]) && isPlainObject(val)) {
                  result[key] = merge(result[key], val);
                } else if (isPlainObject(val)) {
                  result[key] = merge({}, val);
                } else if (isArray(val)) {
                  result[key] = val.slice();
                } else {
                  result[key] = val;
                }
              }

              for (var i = 0, l = arguments.length; i < l; i++) {
                forEach(arguments[i], assignValue);
              }

              return result;
            }
            /**
             * Extends object a by mutably adding to it the properties of object b.
             *
             * @param {Object} a The object to be extended
             * @param {Object} b The object to copy properties from
             * @param {Object} thisArg The object to bind function to
             * @return {Object} The resulting value of object a
             */

            function extend(a, b, thisArg) {
              forEach(b, function assignValue(val, key) {
                if (thisArg && typeof val === 'function') {
                  a[key] = bind(val, thisArg);
                } else {
                  a[key] = val;
                }
              });
              return a;
            }
            /**
             * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
             *
             * @param {string} content with BOM
             * @return {string} content value without BOM
             */

            function stripBOM(content) {
              if (content.charCodeAt(0) === 0xfeff) {
                content = content.slice(1);
              }

              return content;
            }

            module.exports = {
              isArray: isArray,
              isArrayBuffer: isArrayBuffer,
              isBuffer: isBuffer,
              isFormData: isFormData,
              isArrayBufferView: isArrayBufferView,
              isString: isString,
              isNumber: isNumber,
              isObject: isObject,
              isPlainObject: isPlainObject,
              isUndefined: isUndefined,
              isDate: isDate,
              isFile: isFile,
              isBlob: isBlob,
              isFunction: isFunction,
              isStream: isStream,
              isURLSearchParams: isURLSearchParams,
              isStandardBrowserEnv: isStandardBrowserEnv,
              forEach: forEach,
              merge: merge,
              extend: extend,
              trim: trim,
              stripBOM: stripBOM,
            };

            /***/
          },

        /***/ './dist/esm/album/getAlbum.js':
          /*!************************************!*\
  !*** ./dist/esm/album/getAlbum.js ***!
  \************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ getAlbum: () => /* binding */ getAlbum,
              /* harmony export */
            });
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ../common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ../common/utils */ './dist/esm/common/utils.js'
            );

            async function getAlbum(client, albumHash) {
              const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.ALBUM_ENDPOINT}/${albumHash}`;
              return (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(
                await client.request({
                  url,
                })
              );
            }

            /***/
          },

        /***/ './dist/esm/album/index.js':
          /*!*********************************!*\
  !*** ./dist/esm/album/index.js ***!
  \*********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ getAlbum: () =>
                /* reexport safe */ _getAlbum__WEBPACK_IMPORTED_MODULE_0__.getAlbum,
              /* harmony export */
            });
            /* harmony import */ var _getAlbum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ./getAlbum */ './dist/esm/album/getAlbum.js'
            );

            /***/
          },

        /***/ './dist/esm/client.js':
          /*!****************************!*\
  !*** ./dist/esm/client.js ***!
  \****************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ ImgurClient: () => /* binding */ ImgurClient,
              /* harmony export */
            });
            /* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! events */ './node_modules/events/events.js'
            );
            /* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
              events__WEBPACK_IMPORTED_MODULE_0__
            );
            /* harmony import */ var _getAuthorizationHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ./getAuthorizationHeader */ './dist/esm/getAuthorizationHeader.js'
            );
            /* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ./image */ './dist/esm/image/index.js'
            );
            /* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! ./gallery */ './dist/esm/gallery/index.js'
            );
            /* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              /*! ./album */ './dist/esm/album/index.js'
            );
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              /*! ./common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              /*! axios */ './node_modules/axios/index.js'
            );
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
              axios__WEBPACK_IMPORTED_MODULE_6__
            );

            const USERAGENT =
              'imgur/next (https://github.com/kaimallea/node-imgur)';

            class ImgurClient extends events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
              constructor(credentials) {
                super();
                this.credentials = credentials;
                this.plainFetcher = axios__WEBPACK_IMPORTED_MODULE_6___default().create(
                  {
                    baseURL:
                      _common_endpoints__WEBPACK_IMPORTED_MODULE_5__.IMGUR_API_PREFIX,
                    headers: {
                      'user-agent': USERAGENT,
                    },
                    responseType: 'json',
                  }
                );
                this.fetcher = axios__WEBPACK_IMPORTED_MODULE_6___default().create(
                  {
                    baseURL:
                      _common_endpoints__WEBPACK_IMPORTED_MODULE_5__.IMGUR_API_PREFIX,
                    headers: {
                      'user-agent': USERAGENT,
                    },
                    responseType: 'json',
                  }
                );
                this.fetcher.interceptors.request.use(
                  async (config) => {
                    config.headers = config.headers ? config.headers : {};
                    config.headers.authorization = await (0,
                    _getAuthorizationHeader__WEBPACK_IMPORTED_MODULE_1__.getAuthorizationHeader)(
                      this
                    );
                    return config;
                  },
                  (e) => Promise.reject(e)
                );
              }

              plainRequest(options) {
                return this.plainFetcher(options);
              }

              request(options = {}) {
                return this.fetcher(options);
              }

              deleteImage(imageHash) {
                return (0, _image__WEBPACK_IMPORTED_MODULE_2__.deleteImage)(
                  this,
                  imageHash
                );
              }

              favoriteImage(imageHash) {
                return (0, _image__WEBPACK_IMPORTED_MODULE_2__.favoriteImage)(
                  this,
                  imageHash
                );
              }

              getAlbum(albumHash) {
                return (0, _album__WEBPACK_IMPORTED_MODULE_4__.getAlbum)(
                  this,
                  albumHash
                );
              }

              getGallery(options) {
                return (0, _gallery__WEBPACK_IMPORTED_MODULE_3__.getGallery)(
                  this,
                  options
                );
              }

              getSubredditGallery(options) {
                return (0,
                _gallery__WEBPACK_IMPORTED_MODULE_3__.getSubredditGallery)(
                  this,
                  options
                );
              }

              searchGallery(options) {
                return (0, _gallery__WEBPACK_IMPORTED_MODULE_3__.searchGallery)(
                  this,
                  options
                );
              }

              getImage(imageHash) {
                return (0, _image__WEBPACK_IMPORTED_MODULE_2__.getImage)(
                  this,
                  imageHash
                );
              }

              updateImage(payload) {
                return (0, _image__WEBPACK_IMPORTED_MODULE_2__.updateImage)(
                  this,
                  payload
                );
              }

              upload(payload) {
                return (0, _image__WEBPACK_IMPORTED_MODULE_2__.upload)(
                  this,
                  payload
                );
              }
            }

            /***/
          },

        /***/ './dist/esm/common/endpoints.js':
          /*!**************************************!*\
  !*** ./dist/esm/common/endpoints.js ***!
  \**************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ IMGUR_API_PREFIX: () =>
                /* binding */ IMGUR_API_PREFIX,
              /* harmony export */ API_VERSION: () => /* binding */ API_VERSION,
              /* harmony export */ AUTHORIZE_ENDPOINT: () =>
                /* binding */ AUTHORIZE_ENDPOINT,
              /* harmony export */ ALBUM_ENDPOINT: () =>
                /* binding */ ALBUM_ENDPOINT,
              /* harmony export */ IMAGE_ENDPOINT: () =>
                /* binding */ IMAGE_ENDPOINT,
              /* harmony export */ UPLOAD_ENDPOINT: () =>
                /* binding */ UPLOAD_ENDPOINT,
              /* harmony export */ GALLERY_ENDPOINT: () =>
                /* binding */ GALLERY_ENDPOINT,
              /* harmony export */ SUBREDDIT_GALLERY_ENDPOINT: () =>
                /* binding */ SUBREDDIT_GALLERY_ENDPOINT,
              /* harmony export */ SEARCH_GALLERY_ENDPOINT: () =>
                /* binding */ SEARCH_GALLERY_ENDPOINT,
              /* harmony export */
            });
            const IMGUR_API_PREFIX = 'https://api.imgur.com';
            const API_VERSION = '3';
            const AUTHORIZE_ENDPOINT = 'oauth2/authorize';
            const ALBUM_ENDPOINT = `${API_VERSION}/album`;
            const IMAGE_ENDPOINT = `${API_VERSION}/image`;
            const UPLOAD_ENDPOINT = `${API_VERSION}/upload`;
            const GALLERY_ENDPOINT = `${API_VERSION}/gallery`;
            const SUBREDDIT_GALLERY_ENDPOINT = `${API_VERSION}/gallery/r`;
            const SEARCH_GALLERY_ENDPOINT = `${API_VERSION}/gallery/search`;

            /***/
          },

        /***/ './dist/esm/common/types.js':
          /*!**********************************!*\
  !*** ./dist/esm/common/types.js ***!
  \**********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ isAccessToken: () =>
                /* binding */ isAccessToken,
              /* harmony export */ isClientId: () => /* binding */ isClientId,
              /* harmony export */ isLogin: () => /* binding */ isLogin,
              /* harmony export */
            });
            function isAccessToken(arg) {
              return arg.accessToken !== undefined;
            }
            function isClientId(arg) {
              return arg.clientId !== undefined;
            }
            function isLogin(arg) {
              return (
                arg.clientId !== undefined &&
                arg.username !== undefined &&
                arg.password !== undefined
              );
            }

            /***/
          },

        /***/ './dist/esm/common/utils.js':
          /*!**********************************!*\
  !*** ./dist/esm/common/utils.js ***!
  \**********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ isBase64: () => /* binding */ isBase64,
              /* harmony export */ isImageUrl: () => /* binding */ isImageUrl,
              /* harmony export */ isStream: () => /* binding */ isStream,
              /* harmony export */ getSource: () => /* binding */ getSource,
              /* harmony export */ createForm: () => /* binding */ createForm,
              /* harmony export */ getImgurApiResponseFromResponse: () =>
                /* binding */ getImgurApiResponseFromResponse,
              /* harmony export */
            });
            /* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! form-data */ './node_modules/form-data/lib/browser.js'
            );
            /* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
              form_data__WEBPACK_IMPORTED_MODULE_0__
            );

            function isBase64(payload) {
              if (typeof payload === 'string') {
                return false;
              }

              return (
                typeof payload.base64 !== 'undefined' &&
                payload.type === 'base64'
              );
            }
            function isImageUrl(payload) {
              if (typeof payload === 'string') {
                return true;
              }

              return (
                typeof payload.image !== 'undefined' && payload.type === 'url'
              );
            }
            function isStream(payload) {
              if (typeof payload === 'string') {
                return false;
              }

              return typeof payload.stream !== 'undefined';
            } // TODO: Refactor this to be a unique name of some kind (a hash?)

            function getSource(payload) {
              if (typeof payload === 'string') {
                return payload;
              }

              if (isBase64(payload)) {
                return 'payload.base64';
              } else if (isStream(payload)) {
                return 'payload.stream';
              } else {
                return payload.image;
              }
            }
            function createForm(payload) {
              const form = new (form_data__WEBPACK_IMPORTED_MODULE_0___default())();

              if (typeof payload === 'string') {
                form.append('image', payload);
                return form;
              }

              for (const [key, value] of Object.entries(payload)) {
                const supportedUploadObjectTypes = ['base64', 'stream'];

                if (supportedUploadObjectTypes.indexOf(key) !== -1) {
                  if (supportedUploadObjectTypes.indexOf(payload.type) !== -1) {
                    form.append(key, payload);
                  }
                } else {
                  form.append(key, value);
                }
              }

              return form;
            }
            function getImgurApiResponseFromResponse(response) {
              if (
                typeof response.data?.status !== 'undefined' &&
                typeof response.data?.success !== 'undefined'
              ) {
                return response.data;
              }

              return {
                data: response.data,
                status: response.status,
                // TODO: determine the success of the call?
                success: true,
              };
            }

            /***/
          },

        /***/ './dist/esm/gallery/getGallery.js':
          /*!****************************************!*\
  !*** ./dist/esm/gallery/getGallery.js ***!
  \****************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ constructGalleryUrl: () =>
                /* binding */ constructGalleryUrl,
              /* harmony export */ getGallery: () => /* binding */ getGallery,
              /* harmony export */
            });
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ../common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! url */ './node_modules/url/url.js'
            );
            /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ../common/utils */ './dist/esm/common/utils.js'
            );

            const defaultOptions = {
              section: 'hot',
              sort: 'viral',
            };
            function constructGalleryUrl(options) {
              const mergedOptions = Object.assign({}, defaultOptions, options);
              let uri = `${mergedOptions.section}`;

              if (mergedOptions.sort) {
                uri += `/${mergedOptions.sort}`;
              }

              if (mergedOptions.section === 'top' && mergedOptions.window) {
                uri += `/${mergedOptions.window}`;
              }

              if (mergedOptions.page) {
                uri += `/${mergedOptions.page}`;
              }

              const url = new url__WEBPACK_IMPORTED_MODULE_1__.URL(
                `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMGUR_API_PREFIX}/${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.GALLERY_ENDPOINT}/${uri}`
              );

              if (mergedOptions.showViral !== undefined) {
                url.searchParams.append(
                  'showViral',
                  mergedOptions.showViral.toString()
                );
              }

              if (mergedOptions.mature !== undefined) {
                url.searchParams.append(
                  'mature',
                  mergedOptions.mature.toString()
                );
              }

              if (mergedOptions.album_previews !== undefined) {
                url.searchParams.append(
                  'album_previews',
                  mergedOptions.album_previews.toString()
                );
              }

              return url;
            }
            async function getGallery(client, options = defaultOptions) {
              const { pathname } = constructGalleryUrl(options); // since we're using prefixUrl with got, we have to remove the starting slash or it'll throw

              const finalPathname = pathname.slice(1);
              return (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_2__.getImgurApiResponseFromResponse)(
                await client.request({
                  url: finalPathname,
                })
              );
            }

            /***/
          },

        /***/ './dist/esm/gallery/getSubredditGallery.js':
          /*!*************************************************!*\
  !*** ./dist/esm/gallery/getSubredditGallery.js ***!
  \*************************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ constructSubredditGalleryUrl: () =>
                /* binding */ constructSubredditGalleryUrl,
              /* harmony export */ getSubredditGallery: () =>
                /* binding */ getSubredditGallery,
              /* harmony export */
            });
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ../common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! url */ './node_modules/url/url.js'
            );
            /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ../common/utils */ './dist/esm/common/utils.js'
            );

            function constructSubredditGalleryUrl(options) {
              let uri = `${options.subreddit}`;

              if (options.sort) {
                uri += `/${options.sort}`;
              }

              if (options.sort === 'top' && options.window) {
                uri += `/${options.window}`;
              }

              if (options.page) {
                uri += `/${options.page}`;
              }

              const url = new url__WEBPACK_IMPORTED_MODULE_1__.URL(
                `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMGUR_API_PREFIX}/${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.SUBREDDIT_GALLERY_ENDPOINT}/${uri}`
              );
              return url;
            }
            async function getSubredditGallery(client, options) {
              const { pathname } = constructSubredditGalleryUrl(options); // since we're using prefixUrl with got, we have to remove the starting slash or it'll throw

              const finalPathname = pathname.slice(1);
              return (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_2__.getImgurApiResponseFromResponse)(
                await client.request({
                  url: finalPathname,
                })
              );
            }

            /***/
          },

        /***/ './dist/esm/gallery/index.js':
          /*!***********************************!*\
  !*** ./dist/esm/gallery/index.js ***!
  \***********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ constructGalleryUrl: () =>
                /* reexport safe */ _getGallery__WEBPACK_IMPORTED_MODULE_0__.constructGalleryUrl,
              /* harmony export */ getGallery: () =>
                /* reexport safe */ _getGallery__WEBPACK_IMPORTED_MODULE_0__.getGallery,
              /* harmony export */ constructSubredditGalleryUrl: () =>
                /* reexport safe */ _getSubredditGallery__WEBPACK_IMPORTED_MODULE_1__.constructSubredditGalleryUrl,
              /* harmony export */ getSubredditGallery: () =>
                /* reexport safe */ _getSubredditGallery__WEBPACK_IMPORTED_MODULE_1__.getSubredditGallery,
              /* harmony export */ constructSearchGalleryUrl: () =>
                /* reexport safe */ _searchGallery__WEBPACK_IMPORTED_MODULE_2__.constructSearchGalleryUrl,
              /* harmony export */ searchGallery: () =>
                /* reexport safe */ _searchGallery__WEBPACK_IMPORTED_MODULE_2__.searchGallery,
              /* harmony export */
            });
            /* harmony import */ var _getGallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ./getGallery */ './dist/esm/gallery/getGallery.js'
            );
            /* harmony import */ var _getSubredditGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ./getSubredditGallery */ './dist/esm/gallery/getSubredditGallery.js'
            );
            /* harmony import */ var _searchGallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ./searchGallery */ './dist/esm/gallery/searchGallery.js'
            );

            /***/
          },

        /***/ './dist/esm/gallery/searchGallery.js':
          /*!*******************************************!*\
  !*** ./dist/esm/gallery/searchGallery.js ***!
  \*******************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ constructSearchGalleryUrl: () =>
                /* binding */ constructSearchGalleryUrl,
              /* harmony export */ searchGallery: () =>
                /* binding */ searchGallery,
              /* harmony export */
            });
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ../common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ../common/utils */ './dist/esm/common/utils.js'
            );
            /* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! url */ './node_modules/url/url.js'
            );

            const advancedParameters = [
              'q_all',
              'q_any',
              'q_exactly',
              'q_not',
              'q_type',
              'q_size_px',
            ];
            function constructSearchGalleryUrl(options) {
              let uri = '';

              if (options.sort) {
                uri += `/${options.sort}`;
              }

              if (options.sort === 'top' && options.window) {
                uri += `/${options.window}`;
              }

              if (options.page) {
                uri += `/${options.page}`;
              }

              const url = new url__WEBPACK_IMPORTED_MODULE_2__.URL(
                `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMGUR_API_PREFIX}/${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.SEARCH_GALLERY_ENDPOINT}${uri}`
              );
              advancedParameters.forEach((param) => {
                if (options[param]?.length) {
                  url.searchParams.append(param, options[param]);
                }
              });

              if (!url.search) {
                const query = options.q || options.query;

                if (!query) {
                  throw new Error('No query was provided');
                }

                url.searchParams.append('q', query);
              }

              return url;
            }
            async function searchGallery(client, options) {
              const { pathname } = constructSearchGalleryUrl(options); // since we're using prefixUrl with got, we have to remove the starting slash or it'll throw

              const finalPathname = pathname.slice(1);
              return (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(
                await client.request({
                  url: finalPathname,
                })
              );
            }

            /***/
          },

        /***/ './dist/esm/getAuthorizationHeader.js':
          /*!********************************************!*\
  !*** ./dist/esm/getAuthorizationHeader.js ***!
  \********************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ getAuthorizationHeader: () =>
                /* binding */ getAuthorizationHeader,
              /* harmony export */
            });
            /* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ./common/types */ './dist/esm/common/types.js'
            );
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ./common/endpoints */ './dist/esm/common/endpoints.js'
            );

            async function getAuthorizationHeader(client) {
              if (
                (0, _common_types__WEBPACK_IMPORTED_MODULE_0__.isAccessToken)(
                  client.credentials
                )
              ) {
                return `Bearer ${client.credentials.accessToken}`;
              }

              if (
                (0, _common_types__WEBPACK_IMPORTED_MODULE_0__.isClientId)(
                  client.credentials
                ) &&
                !(0, _common_types__WEBPACK_IMPORTED_MODULE_0__.isLogin)(
                  client.credentials
                )
              ) {
                return `Client-ID ${client.credentials.clientId}`;
              }

              const { clientId, username, password } = client.credentials;
              const options = {
                url:
                  _common_endpoints__WEBPACK_IMPORTED_MODULE_1__.AUTHORIZE_ENDPOINT,
                baseURL:
                  _common_endpoints__WEBPACK_IMPORTED_MODULE_1__.IMGUR_API_PREFIX,
                params: {
                  client_id: clientId,
                  response_type: 'token',
                },
              };
              let response = await client.plainRequest(options);
              const cookies = Array.isArray(response.headers['set-cookie'])
                ? response.headers['set-cookie'][0]
                : response.headers['set-cookie'];

              if (!cookies) {
                throw new Error('No cookies were set during authorization');
              }

              const matches = cookies.match('(^|;)[s]*authorize_token=([^;]*)');

              if (!matches || matches.length < 3) {
                throw new Error('Unable to find authorize_token cookie');
              }

              const authorizeToken = matches[2];
              options.method = 'POST';
              options.data = {
                username,
                password,
                allow: authorizeToken,
              };
              options.followRedirect = false;
              options.headers = {
                cookie: `authorize_token=${authorizeToken}`,
              };
              response = await client.plainRequest(options);
              const location = response.headers.location;

              if (!location) {
                throw new Error('Unable to parse location');
              }

              const token = JSON.parse(
                '{"' +
                  decodeURI(location.slice(location.indexOf('#') + 1))
                    .replace(/"/g, '\\"')
                    .replace(/&/g, '","')
                    .replace(/=/g, '":"') +
                  '"}'
              );
              const accessToken = token.access_token;
              client.credentials.accessToken = accessToken;
              return `Bearer ${accessToken}`;
            }

            /***/
          },

        /***/ './dist/esm/image/deleteImage.js':
          /*!***************************************!*\
  !*** ./dist/esm/image/deleteImage.js ***!
  \***************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ deleteImage: () => /* binding */ deleteImage,
              /* harmony export */
            });
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ../common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ../common/utils */ './dist/esm/common/utils.js'
            );

            async function deleteImage(client, imageHash) {
              const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${imageHash}`;
              return (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(
                await client.request({
                  url,
                  method: 'DELETE',
                })
              );
            }

            /***/
          },

        /***/ './dist/esm/image/favoriteImage.js':
          /*!*****************************************!*\
  !*** ./dist/esm/image/favoriteImage.js ***!
  \*****************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ favoriteImage: () =>
                /* binding */ favoriteImage,
              /* harmony export */
            });
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ../common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ../common/utils */ './dist/esm/common/utils.js'
            );

            async function favoriteImage(client, imageHash) {
              const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${imageHash}/favorite`;
              return (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(
                await client.request({
                  url,
                  method: 'POST',
                })
              );
            }

            /***/
          },

        /***/ './dist/esm/image/getImage.js':
          /*!************************************!*\
  !*** ./dist/esm/image/getImage.js ***!
  \************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ getImage: () => /* binding */ getImage,
              /* harmony export */
            });
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ../common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ../common/utils */ './dist/esm/common/utils.js'
            );

            async function getImage(client, imageHash) {
              const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${imageHash}`;
              return (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(
                await client.request({
                  url,
                })
              );
            }

            /***/
          },

        /***/ './dist/esm/image/index.js':
          /*!*********************************!*\
  !*** ./dist/esm/image/index.js ***!
  \*********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ deleteImage: () =>
                /* reexport safe */ _deleteImage__WEBPACK_IMPORTED_MODULE_0__.deleteImage,
              /* harmony export */ favoriteImage: () =>
                /* reexport safe */ _favoriteImage__WEBPACK_IMPORTED_MODULE_1__.favoriteImage,
              /* harmony export */ getImage: () =>
                /* reexport safe */ _getImage__WEBPACK_IMPORTED_MODULE_2__.getImage,
              /* harmony export */ updateImage: () =>
                /* reexport safe */ _updateImage__WEBPACK_IMPORTED_MODULE_3__.updateImage,
              /* harmony export */ upload: () =>
                /* reexport safe */ _upload__WEBPACK_IMPORTED_MODULE_4__.upload,
              /* harmony export */
            });
            /* harmony import */ var _deleteImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ./deleteImage */ './dist/esm/image/deleteImage.js'
            );
            /* harmony import */ var _favoriteImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ./favoriteImage */ './dist/esm/image/favoriteImage.js'
            );
            /* harmony import */ var _getImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ./getImage */ './dist/esm/image/getImage.js'
            );
            /* harmony import */ var _updateImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! ./updateImage */ './dist/esm/image/updateImage.js'
            );
            /* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              /*! ./upload */ './dist/esm/image/upload.js'
            );

            /***/
          },

        /***/ './dist/esm/image/updateImage.js':
          /*!***************************************!*\
  !*** ./dist/esm/image/updateImage.js ***!
  \***************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ updateImage: () => /* binding */ updateImage,
              /* harmony export */
            });
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ../common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ../common/utils */ './dist/esm/common/utils.js'
            );

            function isValidUpdatePayload(p) {
              return (
                typeof p.title === 'string' || typeof p.description === 'string'
              );
            }

            async function updateImage(client, payload) {
              if (Array.isArray(payload)) {
                const promises = payload.map((p) => {
                  if (!isValidUpdatePayload(p)) {
                    throw new Error(
                      'Update requires a title and/or description'
                    );
                  }

                  const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${p.imageHash}`;
                  const form = (0,
                  _common_utils__WEBPACK_IMPORTED_MODULE_1__.createForm)(p);
                  /* eslint no-async-promise-executor: 0 */

                  return new Promise(async function (resolve) {
                    return resolve(
                      (0,
                      _common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(
                        await client.request({
                          url,
                          method: 'POST',
                          data: form, // resolveBodyOnly: true,
                        })
                      )
                    );
                  });
                });
                return await Promise.all(promises);
              }

              if (!isValidUpdatePayload(payload)) {
                throw new Error('Update requires a title and/or description');
              }

              const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${payload.imageHash}`;
              const form = (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_1__.createForm)(payload);
              return (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(
                await client.request({
                  url,
                  method: 'POST',
                  data: form, // resolveBodyOnly: true,
                })
              );
            }

            /***/
          },

        /***/ './dist/esm/image/upload.js':
          /*!**********************************!*\
  !*** ./dist/esm/image/upload.js ***!
  \**********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ upload: () => /* binding */ upload,
              /* harmony export */
            });
            /* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ../common/utils */ './dist/esm/common/utils.js'
            );
            /* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ../common/endpoints */ './dist/esm/common/endpoints.js'
            );
            /* provided dependency */ var console = __webpack_require__(
              /*! console-browserify */ './node_modules/console-browserify/index.js'
            );

            async function upload(client, payload) {
              if (Array.isArray(payload)) {
                const promises = payload.map((p) => {
                  const form = (0,
                  _common_utils__WEBPACK_IMPORTED_MODULE_0__.createForm)(p);
                  /* eslint no-async-promise-executor: 0 */

                  return new Promise(async (resolve) => {
                    resolve(
                      (0,
                      _common_utils__WEBPACK_IMPORTED_MODULE_0__.getImgurApiResponseFromResponse)(
                        await client.request({
                          url:
                            _common_endpoints__WEBPACK_IMPORTED_MODULE_1__.UPLOAD_ENDPOINT,
                          method: 'POST',
                          data: form,
                          onUploadProgress: (progressEvent) => {
                            console.log({
                              progressEvent,
                            });
                            client.emit('uploadProgress', { ...progressEvent });
                          },
                        })
                      )
                    );
                  });
                });
                return await Promise.all(promises);
              }

              const form = (0,
              _common_utils__WEBPACK_IMPORTED_MODULE_0__.createForm)(payload); // const id = Date.now.toString();

              const request = await client.request({
                url:
                  _common_endpoints__WEBPACK_IMPORTED_MODULE_1__.UPLOAD_ENDPOINT,
                method: 'POST',
                data: form,
                onUploadProgress: (progressEvent) => {
                  console.log({
                    progressEvent,
                  });
                  client.emit('uploadProgress', { ...progressEvent });
                },
              });
              return Promise.resolve(
                (0,
                _common_utils__WEBPACK_IMPORTED_MODULE_0__.getImgurApiResponseFromResponse)(
                  request
                )
              );
            }

            /***/
          },

        /***/ './node_modules/call-bind/callBound.js':
          /*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var GetIntrinsic = __webpack_require__(
              /*! get-intrinsic */ './node_modules/get-intrinsic/index.js'
            );

            var callBind = __webpack_require__(
              /*! ./ */ './node_modules/call-bind/index.js'
            );

            var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

            module.exports = function callBoundIntrinsic(name, allowMissing) {
              var intrinsic = GetIntrinsic(name, !!allowMissing);

              if (
                typeof intrinsic === 'function' &&
                $indexOf(name, '.prototype.') > -1
              ) {
                return callBind(intrinsic);
              }

              return intrinsic;
            };

            /***/
          },

        /***/ './node_modules/call-bind/index.js':
          /*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var bind = __webpack_require__(
              /*! function-bind */ './node_modules/function-bind/index.js'
            );

            var GetIntrinsic = __webpack_require__(
              /*! get-intrinsic */ './node_modules/get-intrinsic/index.js'
            );

            var $apply = GetIntrinsic('%Function.prototype.apply%');
            var $call = GetIntrinsic('%Function.prototype.call%');
            var $reflectApply =
              GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
            var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
            var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
            var $max = GetIntrinsic('%Math.max%');

            if ($defineProperty) {
              try {
                $defineProperty({}, 'a', {
                  value: 1,
                });
              } catch (e) {
                // IE 8 has a broken defineProperty
                $defineProperty = null;
              }
            }

            module.exports = function callBind(originalFunction) {
              var func = $reflectApply(bind, $call, arguments);

              if ($gOPD && $defineProperty) {
                var desc = $gOPD(func, 'length');

                if (desc.configurable) {
                  // original length, plus the receiver, minus any additional arguments (after the receiver)
                  $defineProperty(func, 'length', {
                    value:
                      1 +
                      $max(0, originalFunction.length - (arguments.length - 1)),
                  });
                }
              }

              return func;
            };

            var applyBind = function applyBind() {
              return $reflectApply(bind, $apply, arguments);
            };

            if ($defineProperty) {
              $defineProperty(module.exports, 'apply', {
                value: applyBind,
              });
            } else {
              module.exports.apply = applyBind;
            }

            /***/
          },

        /***/ './node_modules/console-browserify/index.js':
          /*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            /*global window, global*/
            var util = __webpack_require__(
              /*! util */ './node_modules/util/util.js'
            );

            var assert = __webpack_require__(
              /*! assert */ './node_modules/assert/build/assert.js'
            );

            function now() {
              return new Date().getTime();
            }

            var slice = Array.prototype.slice;
            var console;
            var times = {};

            if (
              typeof __webpack_require__.g !== 'undefined' &&
              __webpack_require__.g.console
            ) {
              console = __webpack_require__.g.console;
            } else if (typeof window !== 'undefined' && window.console) {
              console = window.console;
            } else {
              console = {};
            }

            var functions = [
              [log, 'log'],
              [info, 'info'],
              [warn, 'warn'],
              [error, 'error'],
              [time, 'time'],
              [timeEnd, 'timeEnd'],
              [trace, 'trace'],
              [dir, 'dir'],
              [consoleAssert, 'assert'],
            ];

            for (var i = 0; i < functions.length; i++) {
              var tuple = functions[i];
              var f = tuple[0];
              var name = tuple[1];

              if (!console[name]) {
                console[name] = f;
              }
            }

            module.exports = console;

            function log() {}

            function info() {
              console.log.apply(console, arguments);
            }

            function warn() {
              console.log.apply(console, arguments);
            }

            function error() {
              console.warn.apply(console, arguments);
            }

            function time(label) {
              times[label] = now();
            }

            function timeEnd(label) {
              var time = times[label];

              if (!time) {
                throw new Error('No such label: ' + label);
              }

              delete times[label];
              var duration = now() - time;
              console.log(label + ': ' + duration + 'ms');
            }

            function trace() {
              var err = new Error();
              err.name = 'Trace';
              err.message = util.format.apply(null, arguments);
              console.error(err.stack);
            }

            function dir(object) {
              console.log(util.inspect(object) + '\n');
            }

            function consoleAssert(expression) {
              if (!expression) {
                var arr = slice.call(arguments, 1);
                assert.ok(false, util.format.apply(null, arr));
              }
            }

            /***/
          },

        /***/ './node_modules/define-properties/index.js':
          /*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var keys = __webpack_require__(
              /*! object-keys */ './node_modules/object-keys/index.js'
            );

            var hasSymbols =
              typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
            var toStr = Object.prototype.toString;
            var concat = Array.prototype.concat;
            var origDefineProperty = Object.defineProperty;

            var isFunction = function (fn) {
              return (
                typeof fn === 'function' &&
                toStr.call(fn) === '[object Function]'
              );
            };

            var arePropertyDescriptorsSupported = function () {
              var obj = {};

              try {
                origDefineProperty(obj, 'x', {
                  enumerable: false,
                  value: obj,
                }); // eslint-disable-next-line no-unused-vars, no-restricted-syntax

                for (var _ in obj) {
                  // jscs:ignore disallowUnusedVariables
                  return false;
                }

                return obj.x === obj;
              } catch (e) {
                /* this is IE 8. */
                return false;
              }
            };

            var supportsDescriptors =
              origDefineProperty && arePropertyDescriptorsSupported();

            var defineProperty = function (object, name, value, predicate) {
              if (name in object && (!isFunction(predicate) || !predicate())) {
                return;
              }

              if (supportsDescriptors) {
                origDefineProperty(object, name, {
                  configurable: true,
                  enumerable: false,
                  value: value,
                  writable: true,
                });
              } else {
                object[name] = value;
              }
            };

            var defineProperties = function (object, map) {
              var predicates = arguments.length > 2 ? arguments[2] : {};
              var props = keys(map);

              if (hasSymbols) {
                props = concat.call(props, Object.getOwnPropertySymbols(map));
              }

              for (var i = 0; i < props.length; i += 1) {
                defineProperty(
                  object,
                  props[i],
                  map[props[i]],
                  predicates[props[i]]
                );
              }
            };

            defineProperties.supportsDescriptors = !!supportsDescriptors;
            module.exports = defineProperties;

            /***/
          },

        /***/ './node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js':
          /*!**********************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js ***!
  \**********************************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var GetIntrinsic = __webpack_require__(
              /*! get-intrinsic */ './node_modules/get-intrinsic/index.js'
            );

            var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');

            if ($gOPD) {
              try {
                $gOPD([], 'length');
              } catch (e) {
                // IE 8 has a broken gOPD
                $gOPD = null;
              }
            }

            module.exports = $gOPD;

            /***/
          },

        /***/ './node_modules/es6-object-assign/index.js':
          /*!*************************************************!*\
  !*** ./node_modules/es6-object-assign/index.js ***!
  \*************************************************/
          /***/ (module) => {
            'use strict';
            /**
             * Code refactored from Mozilla Developer Network:
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
             */

            function assign(target, firstSource) {
              if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
              }

              var to = Object(target);

              for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];

                if (nextSource === undefined || nextSource === null) {
                  continue;
                }

                var keysArray = Object.keys(Object(nextSource));

                for (
                  var nextIndex = 0, len = keysArray.length;
                  nextIndex < len;
                  nextIndex++
                ) {
                  var nextKey = keysArray[nextIndex];
                  var desc = Object.getOwnPropertyDescriptor(
                    nextSource,
                    nextKey
                  );

                  if (desc !== undefined && desc.enumerable) {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }

              return to;
            }

            function polyfill() {
              if (!Object.assign) {
                Object.defineProperty(Object, 'assign', {
                  enumerable: false,
                  configurable: true,
                  writable: true,
                  value: assign,
                });
              }
            }

            module.exports = {
              assign: assign,
              polyfill: polyfill,
            };

            /***/
          },

        /***/ './node_modules/events/events.js':
          /*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';
            /* provided dependency */ var console = __webpack_require__(
              /*! console-browserify */ './node_modules/console-browserify/index.js'
            );
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            var R = typeof Reflect === 'object' ? Reflect : null;
            var ReflectApply =
              R && typeof R.apply === 'function'
                ? R.apply
                : function ReflectApply(target, receiver, args) {
                    return Function.prototype.apply.call(
                      target,
                      receiver,
                      args
                    );
                  };
            var ReflectOwnKeys;

            if (R && typeof R.ownKeys === 'function') {
              ReflectOwnKeys = R.ownKeys;
            } else if (Object.getOwnPropertySymbols) {
              ReflectOwnKeys = function ReflectOwnKeys(target) {
                return Object.getOwnPropertyNames(target).concat(
                  Object.getOwnPropertySymbols(target)
                );
              };
            } else {
              ReflectOwnKeys = function ReflectOwnKeys(target) {
                return Object.getOwnPropertyNames(target);
              };
            }

            function ProcessEmitWarning(warning) {
              if (console && console.warn) console.warn(warning);
            }

            var NumberIsNaN =
              Number.isNaN ||
              function NumberIsNaN(value) {
                return value !== value;
              };

            function EventEmitter() {
              EventEmitter.init.call(this);
            }

            module.exports = EventEmitter;
            module.exports.once = once; // Backwards-compat with node 0.10.x

            EventEmitter.EventEmitter = EventEmitter;
            EventEmitter.prototype._events = undefined;
            EventEmitter.prototype._eventsCount = 0;
            EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
            // added to it. This is a useful default which helps finding memory leaks.

            var defaultMaxListeners = 10;

            function checkListener(listener) {
              if (typeof listener !== 'function') {
                throw new TypeError(
                  'The "listener" argument must be of type Function. Received type ' +
                    typeof listener
                );
              }
            }

            Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
              enumerable: true,
              get: function () {
                return defaultMaxListeners;
              },
              set: function (arg) {
                if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
                  throw new RangeError(
                    'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                      arg +
                      '.'
                  );
                }

                defaultMaxListeners = arg;
              },
            });

            EventEmitter.init = function () {
              if (
                this._events === undefined ||
                this._events === Object.getPrototypeOf(this)._events
              ) {
                this._events = Object.create(null);
                this._eventsCount = 0;
              }

              this._maxListeners = this._maxListeners || undefined;
            }; // Obviously not all Emitters should be limited to 10. This function allows
            // that to be increased. Set to zero for unlimited.

            EventEmitter.prototype.setMaxListeners = function setMaxListeners(
              n
            ) {
              if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
                throw new RangeError(
                  'The value of "n" is out of range. It must be a non-negative number. Received ' +
                    n +
                    '.'
                );
              }

              this._maxListeners = n;
              return this;
            };

            function _getMaxListeners(that) {
              if (that._maxListeners === undefined)
                return EventEmitter.defaultMaxListeners;
              return that._maxListeners;
            }

            EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
              return _getMaxListeners(this);
            };

            EventEmitter.prototype.emit = function emit(type) {
              var args = [];

              for (var i = 1; i < arguments.length; i++)
                args.push(arguments[i]);

              var doError = type === 'error';
              var events = this._events;
              if (events !== undefined)
                doError = doError && events.error === undefined;
              else if (!doError) return false; // If there is no 'error' event listener then throw.

              if (doError) {
                var er;
                if (args.length > 0) er = args[0];

                if (er instanceof Error) {
                  // Note: The comments on the `throw` lines are intentional, they show
                  // up in Node's output if this results in an unhandled exception.
                  throw er; // Unhandled 'error' event
                } // At least give some kind of context to the user

                var err = new Error(
                  'Unhandled error.' + (er ? ' (' + er.message + ')' : '')
                );
                err.context = er;
                throw err; // Unhandled 'error' event
              }

              var handler = events[type];
              if (handler === undefined) return false;

              if (typeof handler === 'function') {
                ReflectApply(handler, this, args);
              } else {
                var len = handler.length;
                var listeners = arrayClone(handler, len);

                for (var i = 0; i < len; ++i)
                  ReflectApply(listeners[i], this, args);
              }

              return true;
            };

            function _addListener(target, type, listener, prepend) {
              var m;
              var events;
              var existing;
              checkListener(listener);
              events = target._events;

              if (events === undefined) {
                events = target._events = Object.create(null);
                target._eventsCount = 0;
              } else {
                // To avoid recursion in the case that type === "newListener"! Before
                // adding it to the listeners, first emit "newListener".
                if (events.newListener !== undefined) {
                  target.emit(
                    'newListener',
                    type,
                    listener.listener ? listener.listener : listener
                  ); // Re-assign `events` because a newListener handler could have caused the
                  // this._events to be assigned to a new object

                  events = target._events;
                }

                existing = events[type];
              }

              if (existing === undefined) {
                // Optimize the case of one listener. Don't need the extra array object.
                existing = events[type] = listener;
                ++target._eventsCount;
              } else {
                if (typeof existing === 'function') {
                  // Adding the second element, need to change to array.
                  existing = events[type] = prepend
                    ? [listener, existing]
                    : [existing, listener]; // If we've already got an array, just append.
                } else if (prepend) {
                  existing.unshift(listener);
                } else {
                  existing.push(listener);
                } // Check for listener leak

                m = _getMaxListeners(target);

                if (m > 0 && existing.length > m && !existing.warned) {
                  existing.warned = true; // No error code for this since it is a Warning
                  // eslint-disable-next-line no-restricted-syntax

                  var w = new Error(
                    'Possible EventEmitter memory leak detected. ' +
                      existing.length +
                      ' ' +
                      String(type) +
                      ' listeners ' +
                      'added. Use emitter.setMaxListeners() to ' +
                      'increase limit'
                  );
                  w.name = 'MaxListenersExceededWarning';
                  w.emitter = target;
                  w.type = type;
                  w.count = existing.length;
                  ProcessEmitWarning(w);
                }
              }

              return target;
            }

            EventEmitter.prototype.addListener = function addListener(
              type,
              listener
            ) {
              return _addListener(this, type, listener, false);
            };

            EventEmitter.prototype.on = EventEmitter.prototype.addListener;

            EventEmitter.prototype.prependListener = function prependListener(
              type,
              listener
            ) {
              return _addListener(this, type, listener, true);
            };

            function onceWrapper() {
              if (!this.fired) {
                this.target.removeListener(this.type, this.wrapFn);
                this.fired = true;
                if (arguments.length === 0)
                  return this.listener.call(this.target);
                return this.listener.apply(this.target, arguments);
              }
            }

            function _onceWrap(target, type, listener) {
              var state = {
                fired: false,
                wrapFn: undefined,
                target: target,
                type: type,
                listener: listener,
              };
              var wrapped = onceWrapper.bind(state);
              wrapped.listener = listener;
              state.wrapFn = wrapped;
              return wrapped;
            }

            EventEmitter.prototype.once = function once(type, listener) {
              checkListener(listener);
              this.on(type, _onceWrap(this, type, listener));
              return this;
            };

            EventEmitter.prototype.prependOnceListener = function prependOnceListener(
              type,
              listener
            ) {
              checkListener(listener);
              this.prependListener(type, _onceWrap(this, type, listener));
              return this;
            }; // Emits a 'removeListener' event if and only if the listener was removed.

            EventEmitter.prototype.removeListener = function removeListener(
              type,
              listener
            ) {
              var list, events, position, i, originalListener;
              checkListener(listener);
              events = this._events;
              if (events === undefined) return this;
              list = events[type];
              if (list === undefined) return this;

              if (list === listener || list.listener === listener) {
                if (--this._eventsCount === 0)
                  this._events = Object.create(null);
                else {
                  delete events[type];
                  if (events.removeListener)
                    this.emit(
                      'removeListener',
                      type,
                      list.listener || listener
                    );
                }
              } else if (typeof list !== 'function') {
                position = -1;

                for (i = list.length - 1; i >= 0; i--) {
                  if (list[i] === listener || list[i].listener === listener) {
                    originalListener = list[i].listener;
                    position = i;
                    break;
                  }
                }

                if (position < 0) return this;
                if (position === 0) list.shift();
                else {
                  spliceOne(list, position);
                }
                if (list.length === 1) events[type] = list[0];
                if (events.removeListener !== undefined)
                  this.emit(
                    'removeListener',
                    type,
                    originalListener || listener
                  );
              }

              return this;
            };

            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

            EventEmitter.prototype.removeAllListeners = function removeAllListeners(
              type
            ) {
              var listeners, events, i;
              events = this._events;
              if (events === undefined) return this; // not listening for removeListener, no need to emit

              if (events.removeListener === undefined) {
                if (arguments.length === 0) {
                  this._events = Object.create(null);
                  this._eventsCount = 0;
                } else if (events[type] !== undefined) {
                  if (--this._eventsCount === 0)
                    this._events = Object.create(null);
                  else delete events[type];
                }

                return this;
              } // emit removeListener for all listeners on all events

              if (arguments.length === 0) {
                var keys = Object.keys(events);
                var key;

                for (i = 0; i < keys.length; ++i) {
                  key = keys[i];
                  if (key === 'removeListener') continue;
                  this.removeAllListeners(key);
                }

                this.removeAllListeners('removeListener');
                this._events = Object.create(null);
                this._eventsCount = 0;
                return this;
              }

              listeners = events[type];

              if (typeof listeners === 'function') {
                this.removeListener(type, listeners);
              } else if (listeners !== undefined) {
                // LIFO order
                for (i = listeners.length - 1; i >= 0; i--) {
                  this.removeListener(type, listeners[i]);
                }
              }

              return this;
            };

            function _listeners(target, type, unwrap) {
              var events = target._events;
              if (events === undefined) return [];
              var evlistener = events[type];
              if (evlistener === undefined) return [];
              if (typeof evlistener === 'function')
                return unwrap
                  ? [evlistener.listener || evlistener]
                  : [evlistener];
              return unwrap
                ? unwrapListeners(evlistener)
                : arrayClone(evlistener, evlistener.length);
            }

            EventEmitter.prototype.listeners = function listeners(type) {
              return _listeners(this, type, true);
            };

            EventEmitter.prototype.rawListeners = function rawListeners(type) {
              return _listeners(this, type, false);
            };

            EventEmitter.listenerCount = function (emitter, type) {
              if (typeof emitter.listenerCount === 'function') {
                return emitter.listenerCount(type);
              } else {
                return listenerCount.call(emitter, type);
              }
            };

            EventEmitter.prototype.listenerCount = listenerCount;

            function listenerCount(type) {
              var events = this._events;

              if (events !== undefined) {
                var evlistener = events[type];

                if (typeof evlistener === 'function') {
                  return 1;
                } else if (evlistener !== undefined) {
                  return evlistener.length;
                }
              }

              return 0;
            }

            EventEmitter.prototype.eventNames = function eventNames() {
              return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
            };

            function arrayClone(arr, n) {
              var copy = new Array(n);

              for (var i = 0; i < n; ++i) copy[i] = arr[i];

              return copy;
            }

            function spliceOne(list, index) {
              for (; index + 1 < list.length; index++)
                list[index] = list[index + 1];

              list.pop();
            }

            function unwrapListeners(arr) {
              var ret = new Array(arr.length);

              for (var i = 0; i < ret.length; ++i) {
                ret[i] = arr[i].listener || arr[i];
              }

              return ret;
            }

            function once(emitter, name) {
              return new Promise(function (resolve, reject) {
                function errorListener(err) {
                  emitter.removeListener(name, resolver);
                  reject(err);
                }

                function resolver() {
                  if (typeof emitter.removeListener === 'function') {
                    emitter.removeListener('error', errorListener);
                  }

                  resolve([].slice.call(arguments));
                }

                eventTargetAgnosticAddListener(emitter, name, resolver, {
                  once: true,
                });

                if (name !== 'error') {
                  addErrorHandlerIfEventEmitter(emitter, errorListener, {
                    once: true,
                  });
                }
              });
            }

            function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
              if (typeof emitter.on === 'function') {
                eventTargetAgnosticAddListener(
                  emitter,
                  'error',
                  handler,
                  flags
                );
              }
            }

            function eventTargetAgnosticAddListener(
              emitter,
              name,
              listener,
              flags
            ) {
              if (typeof emitter.on === 'function') {
                if (flags.once) {
                  emitter.once(name, listener);
                } else {
                  emitter.on(name, listener);
                }
              } else if (typeof emitter.addEventListener === 'function') {
                // EventTarget does not have `error` event semantics like Node
                // EventEmitters, we do not listen for `error` events here.
                emitter.addEventListener(name, function wrapListener(arg) {
                  // IE does not have builtin `{ once: true }` support so we
                  // have to do it manually.
                  if (flags.once) {
                    emitter.removeEventListener(name, wrapListener);
                  }

                  listener(arg);
                });
              } else {
                throw new TypeError(
                  'The "emitter" argument must be of type EventEmitter. Received type ' +
                    typeof emitter
                );
              }
            }

            /***/
          },

        /***/ './node_modules/foreach/index.js':
          /*!***************************************!*\
  !*** ./node_modules/foreach/index.js ***!
  \***************************************/
          /***/ (module) => {
            var hasOwn = Object.prototype.hasOwnProperty;
            var toString = Object.prototype.toString;

            module.exports = function forEach(obj, fn, ctx) {
              if (toString.call(fn) !== '[object Function]') {
                throw new TypeError('iterator must be a function');
              }

              var l = obj.length;

              if (l === +l) {
                for (var i = 0; i < l; i++) {
                  fn.call(ctx, obj[i], i, obj);
                }
              } else {
                for (var k in obj) {
                  if (hasOwn.call(obj, k)) {
                    fn.call(ctx, obj[k], k, obj);
                  }
                }
              }
            };

            /***/
          },

        /***/ './node_modules/form-data/lib/browser.js':
          /*!***********************************************!*\
  !*** ./node_modules/form-data/lib/browser.js ***!
  \***********************************************/
          /***/ (module) => {
            /* eslint-env browser */
            module.exports =
              typeof self == 'object' ? self.FormData : window.FormData;

            /***/
          },

        /***/ './node_modules/function-bind/implementation.js':
          /*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
          /***/ (module) => {
            'use strict';

            /* eslint no-invalid-this: 1 */

            var ERROR_MESSAGE =
              'Function.prototype.bind called on incompatible ';
            var slice = Array.prototype.slice;
            var toStr = Object.prototype.toString;
            var funcType = '[object Function]';

            module.exports = function bind(that) {
              var target = this;

              if (
                typeof target !== 'function' ||
                toStr.call(target) !== funcType
              ) {
                throw new TypeError(ERROR_MESSAGE + target);
              }

              var args = slice.call(arguments, 1);
              var bound;

              var binder = function () {
                if (this instanceof bound) {
                  var result = target.apply(
                    this,
                    args.concat(slice.call(arguments))
                  );

                  if (Object(result) === result) {
                    return result;
                  }

                  return this;
                } else {
                  return target.apply(that, args.concat(slice.call(arguments)));
                }
              };

              var boundLength = Math.max(0, target.length - args.length);
              var boundArgs = [];

              for (var i = 0; i < boundLength; i++) {
                boundArgs.push('$' + i);
              }

              bound = Function(
                'binder',
                'return function (' +
                  boundArgs.join(',') +
                  '){ return binder.apply(this,arguments); }'
              )(binder);

              if (target.prototype) {
                var Empty = function Empty() {};

                Empty.prototype = target.prototype;
                bound.prototype = new Empty();
                Empty.prototype = null;
              }

              return bound;
            };

            /***/
          },

        /***/ './node_modules/function-bind/index.js':
          /*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var implementation = __webpack_require__(
              /*! ./implementation */ './node_modules/function-bind/implementation.js'
            );

            module.exports = Function.prototype.bind || implementation;

            /***/
          },

        /***/ './node_modules/get-intrinsic/index.js':
          /*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var undefined;
            var $SyntaxError = SyntaxError;
            var $Function = Function;
            var $TypeError = TypeError; // eslint-disable-next-line consistent-return

            var getEvalledConstructor = function (expressionSyntax) {
              try {
                return $Function(
                  '"use strict"; return (' + expressionSyntax + ').constructor;'
                )();
              } catch (e) {}
            };

            var $gOPD = Object.getOwnPropertyDescriptor;

            if ($gOPD) {
              try {
                $gOPD({}, '');
              } catch (e) {
                $gOPD = null; // this is IE 8, which has a broken gOPD
              }
            }

            var throwTypeError = function () {
              throw new $TypeError();
            };

            var ThrowTypeError = $gOPD
              ? (function () {
                  try {
                    // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
                    arguments.callee; // IE 8 does not throw here

                    return throwTypeError;
                  } catch (calleeThrows) {
                    try {
                      // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
                      return $gOPD(arguments, 'callee').get;
                    } catch (gOPDthrows) {
                      return throwTypeError;
                    }
                  }
                })()
              : throwTypeError;

            var hasSymbols = __webpack_require__(
              /*! has-symbols */ './node_modules/has-symbols/index.js'
            )();

            var getProto =
              Object.getPrototypeOf ||
              function (x) {
                return x.__proto__;
              }; // eslint-disable-line no-proto

            var needsEval = {};
            var TypedArray =
              typeof Uint8Array === 'undefined'
                ? undefined
                : getProto(Uint8Array);
            var INTRINSICS = {
              '%AggregateError%':
                typeof AggregateError === 'undefined'
                  ? undefined
                  : AggregateError,
              '%Array%': Array,
              '%ArrayBuffer%':
                typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
              '%ArrayIteratorPrototype%': hasSymbols
                ? getProto([][Symbol.iterator]())
                : undefined,
              '%AsyncFromSyncIteratorPrototype%': undefined,
              '%AsyncFunction%': needsEval,
              '%AsyncGenerator%': needsEval,
              '%AsyncGeneratorFunction%': needsEval,
              '%AsyncIteratorPrototype%': needsEval,
              '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
              '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
              '%Boolean%': Boolean,
              '%DataView%':
                typeof DataView === 'undefined' ? undefined : DataView,
              '%Date%': Date,
              '%decodeURI%': decodeURI,
              '%decodeURIComponent%': decodeURIComponent,
              '%encodeURI%': encodeURI,
              '%encodeURIComponent%': encodeURIComponent,
              '%Error%': Error,
              '%eval%': eval,
              // eslint-disable-line no-eval
              '%EvalError%': EvalError,
              '%Float32Array%':
                typeof Float32Array === 'undefined' ? undefined : Float32Array,
              '%Float64Array%':
                typeof Float64Array === 'undefined' ? undefined : Float64Array,
              '%FinalizationRegistry%':
                typeof FinalizationRegistry === 'undefined'
                  ? undefined
                  : FinalizationRegistry,
              '%Function%': $Function,
              '%GeneratorFunction%': needsEval,
              '%Int8Array%':
                typeof Int8Array === 'undefined' ? undefined : Int8Array,
              '%Int16Array%':
                typeof Int16Array === 'undefined' ? undefined : Int16Array,
              '%Int32Array%':
                typeof Int32Array === 'undefined' ? undefined : Int32Array,
              '%isFinite%': isFinite,
              '%isNaN%': isNaN,
              '%IteratorPrototype%': hasSymbols
                ? getProto(getProto([][Symbol.iterator]()))
                : undefined,
              '%JSON%': typeof JSON === 'object' ? JSON : undefined,
              '%Map%': typeof Map === 'undefined' ? undefined : Map,
              '%MapIteratorPrototype%':
                typeof Map === 'undefined' || !hasSymbols
                  ? undefined
                  : getProto(new Map()[Symbol.iterator]()),
              '%Math%': Math,
              '%Number%': Number,
              '%Object%': Object,
              '%parseFloat%': parseFloat,
              '%parseInt%': parseInt,
              '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
              '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
              '%RangeError%': RangeError,
              '%ReferenceError%': ReferenceError,
              '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
              '%RegExp%': RegExp,
              '%Set%': typeof Set === 'undefined' ? undefined : Set,
              '%SetIteratorPrototype%':
                typeof Set === 'undefined' || !hasSymbols
                  ? undefined
                  : getProto(new Set()[Symbol.iterator]()),
              '%SharedArrayBuffer%':
                typeof SharedArrayBuffer === 'undefined'
                  ? undefined
                  : SharedArrayBuffer,
              '%String%': String,
              '%StringIteratorPrototype%': hasSymbols
                ? getProto(''[Symbol.iterator]())
                : undefined,
              '%Symbol%': hasSymbols ? Symbol : undefined,
              '%SyntaxError%': $SyntaxError,
              '%ThrowTypeError%': ThrowTypeError,
              '%TypedArray%': TypedArray,
              '%TypeError%': $TypeError,
              '%Uint8Array%':
                typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
              '%Uint8ClampedArray%':
                typeof Uint8ClampedArray === 'undefined'
                  ? undefined
                  : Uint8ClampedArray,
              '%Uint16Array%':
                typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
              '%Uint32Array%':
                typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
              '%URIError%': URIError,
              '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
              '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
              '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
            };

            var doEval = function doEval(name) {
              var value;

              if (name === '%AsyncFunction%') {
                value = getEvalledConstructor('async function () {}');
              } else if (name === '%GeneratorFunction%') {
                value = getEvalledConstructor('function* () {}');
              } else if (name === '%AsyncGeneratorFunction%') {
                value = getEvalledConstructor('async function* () {}');
              } else if (name === '%AsyncGenerator%') {
                var fn = doEval('%AsyncGeneratorFunction%');

                if (fn) {
                  value = fn.prototype;
                }
              } else if (name === '%AsyncIteratorPrototype%') {
                var gen = doEval('%AsyncGenerator%');

                if (gen) {
                  value = getProto(gen.prototype);
                }
              }

              INTRINSICS[name] = value;
              return value;
            };

            var LEGACY_ALIASES = {
              '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
              '%ArrayPrototype%': ['Array', 'prototype'],
              '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
              '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
              '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
              '%ArrayProto_values%': ['Array', 'prototype', 'values'],
              '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
              '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
              '%AsyncGeneratorPrototype%': [
                'AsyncGeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%BooleanPrototype%': ['Boolean', 'prototype'],
              '%DataViewPrototype%': ['DataView', 'prototype'],
              '%DatePrototype%': ['Date', 'prototype'],
              '%ErrorPrototype%': ['Error', 'prototype'],
              '%EvalErrorPrototype%': ['EvalError', 'prototype'],
              '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
              '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
              '%FunctionPrototype%': ['Function', 'prototype'],
              '%Generator%': ['GeneratorFunction', 'prototype'],
              '%GeneratorPrototype%': [
                'GeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
              '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
              '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
              '%JSONParse%': ['JSON', 'parse'],
              '%JSONStringify%': ['JSON', 'stringify'],
              '%MapPrototype%': ['Map', 'prototype'],
              '%NumberPrototype%': ['Number', 'prototype'],
              '%ObjectPrototype%': ['Object', 'prototype'],
              '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
              '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
              '%PromisePrototype%': ['Promise', 'prototype'],
              '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
              '%Promise_all%': ['Promise', 'all'],
              '%Promise_reject%': ['Promise', 'reject'],
              '%Promise_resolve%': ['Promise', 'resolve'],
              '%RangeErrorPrototype%': ['RangeError', 'prototype'],
              '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
              '%RegExpPrototype%': ['RegExp', 'prototype'],
              '%SetPrototype%': ['Set', 'prototype'],
              '%SharedArrayBufferPrototype%': [
                'SharedArrayBuffer',
                'prototype',
              ],
              '%StringPrototype%': ['String', 'prototype'],
              '%SymbolPrototype%': ['Symbol', 'prototype'],
              '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
              '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
              '%TypeErrorPrototype%': ['TypeError', 'prototype'],
              '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
              '%Uint8ClampedArrayPrototype%': [
                'Uint8ClampedArray',
                'prototype',
              ],
              '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
              '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
              '%URIErrorPrototype%': ['URIError', 'prototype'],
              '%WeakMapPrototype%': ['WeakMap', 'prototype'],
              '%WeakSetPrototype%': ['WeakSet', 'prototype'],
            };

            var bind = __webpack_require__(
              /*! function-bind */ './node_modules/function-bind/index.js'
            );

            var hasOwn = __webpack_require__(
              /*! has */ './node_modules/has/src/index.js'
            );

            var $concat = bind.call(Function.call, Array.prototype.concat);
            var $spliceApply = bind.call(
              Function.apply,
              Array.prototype.splice
            );
            var $replace = bind.call(Function.call, String.prototype.replace);
            var $strSlice = bind.call(Function.call, String.prototype.slice);
            /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */

            var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var reEscapeChar = /\\(\\)?/g;
            /** Used to match backslashes in property paths. */

            var stringToPath = function stringToPath(string) {
              var first = $strSlice(string, 0, 1);
              var last = $strSlice(string, -1);

              if (first === '%' && last !== '%') {
                throw new $SyntaxError(
                  'invalid intrinsic syntax, expected closing `%`'
                );
              } else if (last === '%' && first !== '%') {
                throw new $SyntaxError(
                  'invalid intrinsic syntax, expected opening `%`'
                );
              }

              var result = [];
              $replace(
                string,
                rePropName,
                function (match, number, quote, subString) {
                  result[result.length] = quote
                    ? $replace(subString, reEscapeChar, '$1')
                    : number || match;
                }
              );
              return result;
            };
            /* end adaptation */

            var getBaseIntrinsic = function getBaseIntrinsic(
              name,
              allowMissing
            ) {
              var intrinsicName = name;
              var alias;

              if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
                alias = LEGACY_ALIASES[intrinsicName];
                intrinsicName = '%' + alias[0] + '%';
              }

              if (hasOwn(INTRINSICS, intrinsicName)) {
                var value = INTRINSICS[intrinsicName];

                if (value === needsEval) {
                  value = doEval(intrinsicName);
                }

                if (typeof value === 'undefined' && !allowMissing) {
                  throw new $TypeError(
                    'intrinsic ' +
                      name +
                      ' exists, but is not available. Please file an issue!'
                  );
                }

                return {
                  alias: alias,
                  name: intrinsicName,
                  value: value,
                };
              }

              throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
            };

            module.exports = function GetIntrinsic(name, allowMissing) {
              if (typeof name !== 'string' || name.length === 0) {
                throw new $TypeError(
                  'intrinsic name must be a non-empty string'
                );
              }

              if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
                throw new $TypeError(
                  '"allowMissing" argument must be a boolean'
                );
              }

              var parts = stringToPath(name);
              var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
              var intrinsic = getBaseIntrinsic(
                '%' + intrinsicBaseName + '%',
                allowMissing
              );
              var intrinsicRealName = intrinsic.name;
              var value = intrinsic.value;
              var skipFurtherCaching = false;
              var alias = intrinsic.alias;

              if (alias) {
                intrinsicBaseName = alias[0];
                $spliceApply(parts, $concat([0, 1], alias));
              }

              for (var i = 1, isOwn = true; i < parts.length; i += 1) {
                var part = parts[i];
                var first = $strSlice(part, 0, 1);
                var last = $strSlice(part, -1);

                if (
                  (first === '"' ||
                    first === "'" ||
                    first === '`' ||
                    last === '"' ||
                    last === "'" ||
                    last === '`') &&
                  first !== last
                ) {
                  throw new $SyntaxError(
                    'property names with quotes must have matching quotes'
                  );
                }

                if (part === 'constructor' || !isOwn) {
                  skipFurtherCaching = true;
                }

                intrinsicBaseName += '.' + part;
                intrinsicRealName = '%' + intrinsicBaseName + '%';

                if (hasOwn(INTRINSICS, intrinsicRealName)) {
                  value = INTRINSICS[intrinsicRealName];
                } else if (value != null) {
                  if (!(part in value)) {
                    if (!allowMissing) {
                      throw new $TypeError(
                        'base intrinsic for ' +
                          name +
                          ' exists, but the property is not available.'
                      );
                    }

                    return void undefined;
                  }

                  if ($gOPD && i + 1 >= parts.length) {
                    var desc = $gOPD(value, part);
                    isOwn = !!desc; // By convention, when a data property is converted to an accessor
                    // property to emulate a data property that does not suffer from
                    // the override mistake, that accessor's getter is marked with
                    // an `originalValue` property. Here, when we detect this, we
                    // uphold the illusion by pretending to see that original data
                    // property, i.e., returning the value rather than the getter
                    // itself.

                    if (
                      isOwn &&
                      'get' in desc &&
                      !('originalValue' in desc.get)
                    ) {
                      value = desc.get;
                    } else {
                      value = value[part];
                    }
                  } else {
                    isOwn = hasOwn(value, part);
                    value = value[part];
                  }

                  if (isOwn && !skipFurtherCaching) {
                    INTRINSICS[intrinsicRealName] = value;
                  }
                }
              }

              return value;
            };

            /***/
          },

        /***/ './node_modules/has-symbols/index.js':
          /*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var origSymbol = typeof Symbol !== 'undefined' && Symbol;

            var hasSymbolSham = __webpack_require__(
              /*! ./shams */ './node_modules/has-symbols/shams.js'
            );

            module.exports = function hasNativeSymbols() {
              if (typeof origSymbol !== 'function') {
                return false;
              }

              if (typeof Symbol !== 'function') {
                return false;
              }

              if (typeof origSymbol('foo') !== 'symbol') {
                return false;
              }

              if (typeof Symbol('bar') !== 'symbol') {
                return false;
              }

              return hasSymbolSham();
            };

            /***/
          },

        /***/ './node_modules/has-symbols/shams.js':
          /*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
          /***/ (module) => {
            'use strict';

            /* eslint complexity: [2, 18], max-statements: [2, 33] */

            module.exports = function hasSymbols() {
              if (
                typeof Symbol !== 'function' ||
                typeof Object.getOwnPropertySymbols !== 'function'
              ) {
                return false;
              }

              if (typeof Symbol.iterator === 'symbol') {
                return true;
              }

              var obj = {};
              var sym = Symbol('test');
              var symObj = Object(sym);

              if (typeof sym === 'string') {
                return false;
              }

              if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
                return false;
              }

              if (
                Object.prototype.toString.call(symObj) !== '[object Symbol]'
              ) {
                return false;
              } // temp disabled per https://github.com/ljharb/object.assign/issues/17
              // if (sym instanceof Symbol) { return false; }
              // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
              // if (!(symObj instanceof Symbol)) { return false; }
              // if (typeof Symbol.prototype.toString !== 'function') { return false; }
              // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

              var symVal = 42;
              obj[sym] = symVal;

              for (sym in obj) {
                return false;
              } // eslint-disable-line no-restricted-syntax, no-unreachable-loop

              if (
                typeof Object.keys === 'function' &&
                Object.keys(obj).length !== 0
              ) {
                return false;
              }

              if (
                typeof Object.getOwnPropertyNames === 'function' &&
                Object.getOwnPropertyNames(obj).length !== 0
              ) {
                return false;
              }

              var syms = Object.getOwnPropertySymbols(obj);

              if (syms.length !== 1 || syms[0] !== sym) {
                return false;
              }

              if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
                return false;
              }

              if (typeof Object.getOwnPropertyDescriptor === 'function') {
                var descriptor = Object.getOwnPropertyDescriptor(obj, sym);

                if (
                  descriptor.value !== symVal ||
                  descriptor.enumerable !== true
                ) {
                  return false;
                }
              }

              return true;
            };

            /***/
          },

        /***/ './node_modules/has/src/index.js':
          /*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var bind = __webpack_require__(
              /*! function-bind */ './node_modules/function-bind/index.js'
            );

            module.exports = bind.call(
              Function.call,
              Object.prototype.hasOwnProperty
            );

            /***/
          },

        /***/ './node_modules/inherits/inherits_browser.js':
          /*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
          /***/ (module) => {
            if (typeof Object.create === 'function') {
              // implementation from standard node.js 'util' module
              module.exports = function inherits(ctor, superCtor) {
                if (superCtor) {
                  ctor.super_ = superCtor;
                  ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                      value: ctor,
                      enumerable: false,
                      writable: true,
                      configurable: true,
                    },
                  });
                }
              };
            } else {
              // old school shim for old browsers
              module.exports = function inherits(ctor, superCtor) {
                if (superCtor) {
                  ctor.super_ = superCtor;

                  var TempCtor = function () {};

                  TempCtor.prototype = superCtor.prototype;
                  ctor.prototype = new TempCtor();
                  ctor.prototype.constructor = ctor;
                }
              };
            }

            /***/
          },

        /***/ './node_modules/is-arguments/index.js':
          /*!********************************************!*\
  !*** ./node_modules/is-arguments/index.js ***!
  \********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var hasToStringTag =
              typeof Symbol === 'function' &&
              typeof Symbol.toStringTag === 'symbol';

            var callBound = __webpack_require__(
              /*! call-bind/callBound */ './node_modules/call-bind/callBound.js'
            );

            var $toString = callBound('Object.prototype.toString');

            var isStandardArguments = function isArguments(value) {
              if (
                hasToStringTag &&
                value &&
                typeof value === 'object' &&
                Symbol.toStringTag in value
              ) {
                return false;
              }

              return $toString(value) === '[object Arguments]';
            };

            var isLegacyArguments = function isArguments(value) {
              if (isStandardArguments(value)) {
                return true;
              }

              return (
                value !== null &&
                typeof value === 'object' &&
                typeof value.length === 'number' &&
                value.length >= 0 &&
                $toString(value) !== '[object Array]' &&
                $toString(value.callee) === '[object Function]'
              );
            };

            var supportsStandardArguments = (function () {
              return isStandardArguments(arguments);
            })();

            isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

            module.exports = supportsStandardArguments
              ? isStandardArguments
              : isLegacyArguments;

            /***/
          },

        /***/ './node_modules/is-generator-function/index.js':
          /*!*****************************************************!*\
  !*** ./node_modules/is-generator-function/index.js ***!
  \*****************************************************/
          /***/ (module) => {
            'use strict';

            var toStr = Object.prototype.toString;
            var fnToStr = Function.prototype.toString;
            var isFnRegex = /^\s*(?:function)?\*/;
            var hasToStringTag =
              typeof Symbol === 'function' &&
              typeof Symbol.toStringTag === 'symbol';
            var getProto = Object.getPrototypeOf;

            var getGeneratorFunc = function () {
              // eslint-disable-line consistent-return
              if (!hasToStringTag) {
                return false;
              }

              try {
                return Function('return function*() {}')();
              } catch (e) {}
            };

            var generatorFunc = getGeneratorFunc();
            var GeneratorFunction =
              getProto && generatorFunc ? getProto(generatorFunc) : false;

            module.exports = function isGeneratorFunction(fn) {
              if (typeof fn !== 'function') {
                return false;
              }

              if (isFnRegex.test(fnToStr.call(fn))) {
                return true;
              }

              if (!hasToStringTag) {
                var str = toStr.call(fn);
                return str === '[object GeneratorFunction]';
              }

              return getProto && getProto(fn) === GeneratorFunction;
            };

            /***/
          },

        /***/ './node_modules/is-nan/implementation.js':
          /*!***********************************************!*\
  !*** ./node_modules/is-nan/implementation.js ***!
  \***********************************************/
          /***/ (module) => {
            'use strict';

            /* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

            module.exports = function isNaN(value) {
              return value !== value;
            };

            /***/
          },

        /***/ './node_modules/is-nan/index.js':
          /*!**************************************!*\
  !*** ./node_modules/is-nan/index.js ***!
  \**************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var callBind = __webpack_require__(
              /*! call-bind */ './node_modules/call-bind/index.js'
            );

            var define = __webpack_require__(
              /*! define-properties */ './node_modules/define-properties/index.js'
            );

            var implementation = __webpack_require__(
              /*! ./implementation */ './node_modules/is-nan/implementation.js'
            );

            var getPolyfill = __webpack_require__(
              /*! ./polyfill */ './node_modules/is-nan/polyfill.js'
            );

            var shim = __webpack_require__(
              /*! ./shim */ './node_modules/is-nan/shim.js'
            );

            var polyfill = callBind(getPolyfill(), Number);
            /* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

            define(polyfill, {
              getPolyfill: getPolyfill,
              implementation: implementation,
              shim: shim,
            });
            module.exports = polyfill;

            /***/
          },

        /***/ './node_modules/is-nan/polyfill.js':
          /*!*****************************************!*\
  !*** ./node_modules/is-nan/polyfill.js ***!
  \*****************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var implementation = __webpack_require__(
              /*! ./implementation */ './node_modules/is-nan/implementation.js'
            );

            module.exports = function getPolyfill() {
              if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) {
                return Number.isNaN;
              }

              return implementation;
            };

            /***/
          },

        /***/ './node_modules/is-nan/shim.js':
          /*!*************************************!*\
  !*** ./node_modules/is-nan/shim.js ***!
  \*************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var define = __webpack_require__(
              /*! define-properties */ './node_modules/define-properties/index.js'
            );

            var getPolyfill = __webpack_require__(
              /*! ./polyfill */ './node_modules/is-nan/polyfill.js'
            );
            /* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

            module.exports = function shimNumberIsNaN() {
              var polyfill = getPolyfill();
              define(Number, {
                isNaN: polyfill,
              }, {
                isNaN: function testIsNaN() {
                  return Number.isNaN !== polyfill;
                },
              });
              return polyfill;
            };

            /***/
          },

        /***/ './node_modules/is-typed-array/index.js':
          /*!**********************************************!*\
  !*** ./node_modules/is-typed-array/index.js ***!
  \**********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var forEach = __webpack_require__(
              /*! foreach */ './node_modules/foreach/index.js'
            );

            var availableTypedArrays = __webpack_require__(
              /*! available-typed-arrays */ './node_modules/available-typed-arrays/index.js'
            );

            var callBound = __webpack_require__(
              /*! call-bind/callBound */ './node_modules/call-bind/callBound.js'
            );

            var $toString = callBound('Object.prototype.toString');

            var hasSymbols = __webpack_require__(
              /*! has-symbols */ './node_modules/has-symbols/index.js'
            )();

            var hasToStringTag =
              hasSymbols && typeof Symbol.toStringTag === 'symbol';
            var typedArrays = availableTypedArrays();

            var $indexOf =
              callBound('Array.prototype.indexOf', true) ||
              function indexOf(array, value) {
                for (var i = 0; i < array.length; i += 1) {
                  if (array[i] === value) {
                    return i;
                  }
                }

                return -1;
              };

            var $slice = callBound('String.prototype.slice');
            var toStrTags = {};

            var gOPD = __webpack_require__(
              /*! es-abstract/helpers/getOwnPropertyDescriptor */ './node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js'
            );

            var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');

            if (hasToStringTag && gOPD && getPrototypeOf) {
              forEach(typedArrays, function (typedArray) {
                var arr = new __webpack_require__.g[typedArray]();

                if (!(Symbol.toStringTag in arr)) {
                  throw new EvalError(
                    'this engine has support for Symbol.toStringTag, but ' +
                      typedArray +
                      ' does not have the property! Please report this.'
                  );
                }

                var proto = getPrototypeOf(arr);
                var descriptor = gOPD(proto, Symbol.toStringTag);

                if (!descriptor) {
                  var superProto = getPrototypeOf(proto);
                  descriptor = gOPD(superProto, Symbol.toStringTag);
                }

                toStrTags[typedArray] = descriptor.get;
              });
            }

            var tryTypedArrays = function tryAllTypedArrays(value) {
              var anyTrue = false;
              forEach(toStrTags, function (getter, typedArray) {
                if (!anyTrue) {
                  try {
                    anyTrue = getter.call(value) === typedArray;
                  } catch (e) {
                    /**/
                  }
                }
              });
              return anyTrue;
            };

            module.exports = function isTypedArray(value) {
              if (!value || typeof value !== 'object') {
                return false;
              }

              if (!hasToStringTag) {
                var tag = $slice($toString(value), 8, -1);
                return $indexOf(typedArrays, tag) > -1;
              }

              if (!gOPD) {
                return false;
              }

              return tryTypedArrays(value);
            };

            /***/
          },

        /***/ './node_modules/object-is/implementation.js':
          /*!**************************************************!*\
  !*** ./node_modules/object-is/implementation.js ***!
  \**************************************************/
          /***/ (module) => {
            'use strict';

            var numberIsNaN = function (value) {
              return value !== value;
            };

            module.exports = function is(a, b) {
              if (a === 0 && b === 0) {
                return 1 / a === 1 / b;
              }

              if (a === b) {
                return true;
              }

              if (numberIsNaN(a) && numberIsNaN(b)) {
                return true;
              }

              return false;
            };

            /***/
          },

        /***/ './node_modules/object-is/index.js':
          /*!*****************************************!*\
  !*** ./node_modules/object-is/index.js ***!
  \*****************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var define = __webpack_require__(
              /*! define-properties */ './node_modules/define-properties/index.js'
            );

            var callBind = __webpack_require__(
              /*! call-bind */ './node_modules/call-bind/index.js'
            );

            var implementation = __webpack_require__(
              /*! ./implementation */ './node_modules/object-is/implementation.js'
            );

            var getPolyfill = __webpack_require__(
              /*! ./polyfill */ './node_modules/object-is/polyfill.js'
            );

            var shim = __webpack_require__(
              /*! ./shim */ './node_modules/object-is/shim.js'
            );

            var polyfill = callBind(getPolyfill(), Object);
            define(polyfill, {
              getPolyfill: getPolyfill,
              implementation: implementation,
              shim: shim,
            });
            module.exports = polyfill;

            /***/
          },

        /***/ './node_modules/object-is/polyfill.js':
          /*!********************************************!*\
  !*** ./node_modules/object-is/polyfill.js ***!
  \********************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var implementation = __webpack_require__(
              /*! ./implementation */ './node_modules/object-is/implementation.js'
            );

            module.exports = function getPolyfill() {
              return typeof Object.is === 'function'
                ? Object.is
                : implementation;
            };

            /***/
          },

        /***/ './node_modules/object-is/shim.js':
          /*!****************************************!*\
  !*** ./node_modules/object-is/shim.js ***!
  \****************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var getPolyfill = __webpack_require__(
              /*! ./polyfill */ './node_modules/object-is/polyfill.js'
            );

            var define = __webpack_require__(
              /*! define-properties */ './node_modules/define-properties/index.js'
            );

            module.exports = function shimObjectIs() {
              var polyfill = getPolyfill();
              define(Object, {
                is: polyfill,
              }, {
                is: function testObjectIs() {
                  return Object.is !== polyfill;
                },
              });
              return polyfill;
            };

            /***/
          },

        /***/ './node_modules/object-keys/implementation.js':
          /*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var keysShim;

            if (!Object.keys) {
              // modified from https://github.com/es-shims/es5-shim
              var has = Object.prototype.hasOwnProperty;
              var toStr = Object.prototype.toString;

              var isArgs = __webpack_require__(
                /*! ./isArguments */ './node_modules/object-keys/isArguments.js'
              ); // eslint-disable-line global-require

              var isEnumerable = Object.prototype.propertyIsEnumerable;
              var hasDontEnumBug = !isEnumerable.call(
                {
                  toString: null,
                },
                'toString'
              );
              var hasProtoEnumBug = isEnumerable.call(function () {},
              'prototype');
              var dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor',
              ];

              var equalsConstructorPrototype = function (o) {
                var ctor = o.constructor;
                return ctor && ctor.prototype === o;
              };

              var excludedKeys = {
                $applicationCache: true,
                $console: true,
                $external: true,
                $frame: true,
                $frameElement: true,
                $frames: true,
                $innerHeight: true,
                $innerWidth: true,
                $onmozfullscreenchange: true,
                $onmozfullscreenerror: true,
                $outerHeight: true,
                $outerWidth: true,
                $pageXOffset: true,
                $pageYOffset: true,
                $parent: true,
                $scrollLeft: true,
                $scrollTop: true,
                $scrollX: true,
                $scrollY: true,
                $self: true,
                $webkitIndexedDB: true,
                $webkitStorageInfo: true,
                $window: true,
              };

              var hasAutomationEqualityBug = (function () {
                /* global window */
                if (typeof window === 'undefined') {
                  return false;
                }

                for (var k in window) {
                  try {
                    if (
                      !excludedKeys['$' + k] &&
                      has.call(window, k) &&
                      window[k] !== null &&
                      typeof window[k] === 'object'
                    ) {
                      try {
                        equalsConstructorPrototype(window[k]);
                      } catch (e) {
                        return true;
                      }
                    }
                  } catch (e) {
                    return true;
                  }
                }

                return false;
              })();

              var equalsConstructorPrototypeIfNotBuggy = function (o) {
                /* global window */
                if (
                  typeof window === 'undefined' ||
                  !hasAutomationEqualityBug
                ) {
                  return equalsConstructorPrototype(o);
                }

                try {
                  return equalsConstructorPrototype(o);
                } catch (e) {
                  return false;
                }
              };

              keysShim = function keys(object) {
                var isObject = object !== null && typeof object === 'object';
                var isFunction = toStr.call(object) === '[object Function]';
                var isArguments = isArgs(object);
                var isString =
                  isObject && toStr.call(object) === '[object String]';
                var theKeys = [];

                if (!isObject && !isFunction && !isArguments) {
                  throw new TypeError('Object.keys called on a non-object');
                }

                var skipProto = hasProtoEnumBug && isFunction;

                if (isString && object.length > 0 && !has.call(object, 0)) {
                  for (var i = 0; i < object.length; ++i) {
                    theKeys.push(String(i));
                  }
                }

                if (isArguments && object.length > 0) {
                  for (var j = 0; j < object.length; ++j) {
                    theKeys.push(String(j));
                  }
                } else {
                  for (var name in object) {
                    if (
                      !(skipProto && name === 'prototype') &&
                      has.call(object, name)
                    ) {
                      theKeys.push(String(name));
                    }
                  }
                }

                if (hasDontEnumBug) {
                  var skipConstructor = equalsConstructorPrototypeIfNotBuggy(
                    object
                  );

                  for (var k = 0; k < dontEnums.length; ++k) {
                    if (
                      !(skipConstructor && dontEnums[k] === 'constructor') &&
                      has.call(object, dontEnums[k])
                    ) {
                      theKeys.push(dontEnums[k]);
                    }
                  }
                }

                return theKeys;
              };
            }

            module.exports = keysShim;

            /***/
          },

        /***/ './node_modules/object-keys/index.js':
          /*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var slice = Array.prototype.slice;

            var isArgs = __webpack_require__(
              /*! ./isArguments */ './node_modules/object-keys/isArguments.js'
            );

            var origKeys = Object.keys;
            var keysShim = origKeys
              ? function keys(o) {
                  return origKeys(o);
                }
              : __webpack_require__(
                  /*! ./implementation */ './node_modules/object-keys/implementation.js'
                );
            var originalKeys = Object.keys;

            keysShim.shim = function shimObjectKeys() {
              if (Object.keys) {
                var keysWorksWithArguments = (function () {
                  // Safari 5.0 bug
                  var args = Object.keys(arguments);
                  return args && args.length === arguments.length;
                })(1, 2);

                if (!keysWorksWithArguments) {
                  Object.keys = function keys(object) {
                    // eslint-disable-line func-name-matching
                    if (isArgs(object)) {
                      return originalKeys(slice.call(object));
                    }

                    return originalKeys(object);
                  };
                }
              } else {
                Object.keys = keysShim;
              }

              return Object.keys || keysShim;
            };

            module.exports = keysShim;

            /***/
          },

        /***/ './node_modules/object-keys/isArguments.js':
          /*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
          /***/ (module) => {
            'use strict';

            var toStr = Object.prototype.toString;

            module.exports = function isArguments(value) {
              var str = toStr.call(value);
              var isArgs = str === '[object Arguments]';

              if (!isArgs) {
                isArgs =
                  str !== '[object Array]' &&
                  value !== null &&
                  typeof value === 'object' &&
                  typeof value.length === 'number' &&
                  value.length >= 0 &&
                  toStr.call(value.callee) === '[object Function]';
              }

              return isArgs;
            };

            /***/
          },

        /***/ './node_modules/process/browser.js':
          /*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
          /***/ (module) => {
            // shim for using process in browser
            var process = (module.exports = {}); // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.

            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
              throw new Error('setTimeout has not been defined');
            }

            function defaultClearTimeout() {
              throw new Error('clearTimeout has not been defined');
            }

            (function () {
              try {
                if (typeof setTimeout === 'function') {
                  cachedSetTimeout = setTimeout;
                } else {
                  cachedSetTimeout = defaultSetTimout;
                }
              } catch (e) {
                cachedSetTimeout = defaultSetTimout;
              }

              try {
                if (typeof clearTimeout === 'function') {
                  cachedClearTimeout = clearTimeout;
                } else {
                  cachedClearTimeout = defaultClearTimeout;
                }
              } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
              }
            })();

            function runTimeout(fun) {
              if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
              } // if setTimeout wasn't available but was latter defined

              if (
                (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
                setTimeout
              ) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
              }

              try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
              } catch (e) {
                try {
                  // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                  return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                  // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                  return cachedSetTimeout.call(this, fun, 0);
                }
              }
            }

            function runClearTimeout(marker) {
              if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
              } // if clearTimeout wasn't available but was latter defined

              if (
                (cachedClearTimeout === defaultClearTimeout ||
                  !cachedClearTimeout) &&
                clearTimeout
              ) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
              }

              try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
              } catch (e) {
                try {
                  // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                  return cachedClearTimeout.call(null, marker);
                } catch (e) {
                  // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                  // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                  return cachedClearTimeout.call(this, marker);
                }
              }
            }

            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
              if (!draining || !currentQueue) {
                return;
              }

              draining = false;

              if (currentQueue.length) {
                queue = currentQueue.concat(queue);
              } else {
                queueIndex = -1;
              }

              if (queue.length) {
                drainQueue();
              }
            }

            function drainQueue() {
              if (draining) {
                return;
              }

              var timeout = runTimeout(cleanUpNextTick);
              draining = true;
              var len = queue.length;

              while (len) {
                currentQueue = queue;
                queue = [];

                while (++queueIndex < len) {
                  if (currentQueue) {
                    currentQueue[queueIndex].run();
                  }
                }

                queueIndex = -1;
                len = queue.length;
              }

              currentQueue = null;
              draining = false;
              runClearTimeout(timeout);
            }

            process.nextTick = function (fun) {
              var args = new Array(arguments.length - 1);

              if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                  args[i - 1] = arguments[i];
                }
              }

              queue.push(new Item(fun, args));

              if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
              }
            }; // v8 likes predictible objects

            function Item(fun, array) {
              this.fun = fun;
              this.array = array;
            }

            Item.prototype.run = function () {
              this.fun.apply(null, this.array);
            };

            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues

            process.versions = {};

            function noop() {}

            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;

            process.listeners = function (name) {
              return [];
            };

            process.binding = function (name) {
              throw new Error('process.binding is not supported');
            };

            process.cwd = function () {
              return '/';
            };

            process.chdir = function (dir) {
              throw new Error('process.chdir is not supported');
            };

            process.umask = function () {
              return 0;
            };

            /***/
          },

        /***/ './node_modules/querystring/decode.js':
          /*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
          /***/ (module) => {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.
            // If obj.hasOwnProperty has been overridden, then calling
            // obj.hasOwnProperty(prop) will break.
            // See: https://github.com/joyent/node/issues/1707

            function hasOwnProperty(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            }

            module.exports = function (qs, sep, eq, options) {
              sep = sep || '&';
              eq = eq || '=';
              var obj = {};

              if (typeof qs !== 'string' || qs.length === 0) {
                return obj;
              }

              var regexp = /\+/g;
              qs = qs.split(sep);
              var maxKeys = 1000;

              if (options && typeof options.maxKeys === 'number') {
                maxKeys = options.maxKeys;
              }

              var len = qs.length; // maxKeys <= 0 means that we should not limit keys count

              if (maxKeys > 0 && len > maxKeys) {
                len = maxKeys;
              }

              for (var i = 0; i < len; ++i) {
                var x = qs[i].replace(regexp, '%20'),
                  idx = x.indexOf(eq),
                  kstr,
                  vstr,
                  k,
                  v;

                if (idx >= 0) {
                  kstr = x.substr(0, idx);
                  vstr = x.substr(idx + 1);
                } else {
                  kstr = x;
                  vstr = '';
                }

                k = decodeURIComponent(kstr);
                v = decodeURIComponent(vstr);

                if (!hasOwnProperty(obj, k)) {
                  obj[k] = v;
                } else if (Array.isArray(obj[k])) {
                  obj[k].push(v);
                } else {
                  obj[k] = [obj[k], v];
                }
              }

              return obj;
            };

            /***/
          },

        /***/ './node_modules/querystring/encode.js':
          /*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
          /***/ (module) => {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            var stringifyPrimitive = function (v) {
              switch (typeof v) {
                case 'string':
                  return v;

                case 'boolean':
                  return v ? 'true' : 'false';

                case 'number':
                  return isFinite(v) ? v : '';

                default:
                  return '';
              }
            };

            module.exports = function (obj, sep, eq, name) {
              sep = sep || '&';
              eq = eq || '=';

              if (obj === null) {
                obj = undefined;
              }

              if (typeof obj === 'object') {
                return Object.keys(obj)
                  .map(function (k) {
                    var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

                    if (Array.isArray(obj[k])) {
                      return obj[k]
                        .map(function (v) {
                          return ks + encodeURIComponent(stringifyPrimitive(v));
                        })
                        .join(sep);
                    } else {
                      return (
                        ks + encodeURIComponent(stringifyPrimitive(obj[k]))
                      );
                    }
                  })
                  .join(sep);
              }

              if (!name) return '';
              return (
                encodeURIComponent(stringifyPrimitive(name)) +
                eq +
                encodeURIComponent(stringifyPrimitive(obj))
              );
            };

            /***/
          },

        /***/ './node_modules/querystring/index.js':
          /*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
          /***/ (__unused_webpack_module, exports, __webpack_require__) => {
            'use strict';

            exports.decode = exports.parse = __webpack_require__(
              /*! ./decode */ './node_modules/querystring/decode.js'
            );
            exports.encode = exports.stringify = __webpack_require__(
              /*! ./encode */ './node_modules/querystring/encode.js'
            );

            /***/
          },

        /***/ './node_modules/url/node_modules/punycode/punycode.js':
          /*!************************************************************!*\
  !*** ./node_modules/url/node_modules/punycode/punycode.js ***!
  \************************************************************/
          /***/ function (module, exports, __webpack_require__) {
            /* module decorator */ module = __webpack_require__.nmd(module);
            var __WEBPACK_AMD_DEFINE_RESULT__; /*! https://mths.be/punycode v1.3.2 by @mathias */
            (function (root) {
              /** Detect free variables */
              var freeExports = true && exports && !exports.nodeType && exports;
              var freeModule = true && module && !module.nodeType && module;
              var freeGlobal =
                typeof __webpack_require__.g == 'object' &&
                __webpack_require__.g;

              if (
                freeGlobal.global === freeGlobal ||
                freeGlobal.window === freeGlobal ||
                freeGlobal.self === freeGlobal
              ) {
                root = freeGlobal;
              }
              /**
               * The `punycode` object.
               * @name punycode
               * @type Object
               */

              var punycode,
                /** Highest positive signed 32-bit float value */
                maxInt = 2147483647,
                // aka. 0x7FFFFFFF or 2^31-1

                /** Bootstring parameters */
                base = 36,
                tMin = 1,
                tMax = 26,
                skew = 38,
                damp = 700,
                initialBias = 72,
                initialN = 128,
                // 0x80
                delimiter = '-',
                // '\x2D'

                /** Regular expressions */
                regexPunycode = /^xn--/,
                regexNonASCII = /[^\x20-\x7E]/,
                // unprintable ASCII chars + non-ASCII chars
                regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
                // RFC 3490 separators

                /** Error messages */
                errors = {
                  overflow: 'Overflow: input needs wider integers to process',
                  'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                  'invalid-input': 'Invalid input',
                },
                /** Convenience shortcuts */
                baseMinusTMin = base - tMin,
                floor = Math.floor,
                stringFromCharCode = String.fromCharCode,
                /** Temporary variable */
                key;
              /*--------------------------------------------------------------------------*/

              /**
               * A generic error utility function.
               * @private
               * @param {String} type The error type.
               * @returns {Error} Throws a `RangeError` with the applicable error message.
               */

              function error(type) {
                throw RangeError(errors[type]);
              }
              /**
               * A generic `Array#map` utility function.
               * @private
               * @param {Array} array The array to iterate over.
               * @param {Function} callback The function that gets called for every array
               * item.
               * @returns {Array} A new array of values returned by the callback function.
               */

              function map(array, fn) {
                var length = array.length;
                var result = [];

                while (length--) {
                  result[length] = fn(array[length]);
                }

                return result;
              }
              /**
               * A simple `Array#map`-like wrapper to work with domain name strings or email
               * addresses.
               * @private
               * @param {String} domain The domain name or email address.
               * @param {Function} callback The function that gets called for every
               * character.
               * @returns {Array} A new string of characters returned by the callback
               * function.
               */

              function mapDomain(string, fn) {
                var parts = string.split('@');
                var result = '';

                if (parts.length > 1) {
                  // In email addresses, only the domain name should be punycoded. Leave
                  // the local part (i.e. everything up to `@`) intact.
                  result = parts[0] + '@';
                  string = parts[1];
                } // Avoid `split(regex)` for IE8 compatibility. See #17.

                string = string.replace(regexSeparators, '\x2E');
                var labels = string.split('.');
                var encoded = map(labels, fn).join('.');
                return result + encoded;
              }
              /**
               * Creates an array containing the numeric code points of each Unicode
               * character in the string. While JavaScript uses UCS-2 internally,
               * this function will convert a pair of surrogate halves (each of which
               * UCS-2 exposes as separate characters) into a single code point,
               * matching UTF-16.
               * @see `punycode.ucs2.encode`
               * @see <https://mathiasbynens.be/notes/javascript-encoding>
               * @memberOf punycode.ucs2
               * @name decode
               * @param {String} string The Unicode input string (UCS-2).
               * @returns {Array} The new array of code points.
               */

              function ucs2decode(string) {
                var output = [],
                  counter = 0,
                  length = string.length,
                  value,
                  extra;

                while (counter < length) {
                  value = string.charCodeAt(counter++);

                  if (value >= 0xd800 && value <= 0xdbff && counter < length) {
                    // high surrogate, and there is a next character
                    extra = string.charCodeAt(counter++);

                    if ((extra & 0xfc00) == 0xdc00) {
                      // low surrogate
                      output.push(
                        ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000
                      );
                    } else {
                      // unmatched surrogate; only append this code unit, in case the next
                      // code unit is the high surrogate of a surrogate pair
                      output.push(value);
                      counter--;
                    }
                  } else {
                    output.push(value);
                  }
                }

                return output;
              }
              /**
               * Creates a string based on an array of numeric code points.
               * @see `punycode.ucs2.decode`
               * @memberOf punycode.ucs2
               * @name encode
               * @param {Array} codePoints The array of numeric code points.
               * @returns {String} The new Unicode string (UCS-2).
               */

              function ucs2encode(array) {
                return map(array, function (value) {
                  var output = '';

                  if (value > 0xffff) {
                    value -= 0x10000;
                    output += stringFromCharCode(
                      ((value >>> 10) & 0x3ff) | 0xd800
                    );
                    value = 0xdc00 | (value & 0x3ff);
                  }

                  output += stringFromCharCode(value);
                  return output;
                }).join('');
              }
              /**
               * Converts a basic code point into a digit/integer.
               * @see `digitToBasic()`
               * @private
               * @param {Number} codePoint The basic numeric code point value.
               * @returns {Number} The numeric value of a basic code point (for use in
               * representing integers) in the range `0` to `base - 1`, or `base` if
               * the code point does not represent a value.
               */

              function basicToDigit(codePoint) {
                if (codePoint - 48 < 10) {
                  return codePoint - 22;
                }

                if (codePoint - 65 < 26) {
                  return codePoint - 65;
                }

                if (codePoint - 97 < 26) {
                  return codePoint - 97;
                }

                return base;
              }
              /**
               * Converts a digit/integer into a basic code point.
               * @see `basicToDigit()`
               * @private
               * @param {Number} digit The numeric value of a basic code point.
               * @returns {Number} The basic code point whose value (when used for
               * representing integers) is `digit`, which needs to be in the range
               * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
               * used; else, the lowercase form is used. The behavior is undefined
               * if `flag` is non-zero and `digit` has no uppercase form.
               */

              function digitToBasic(digit, flag) {
                //  0..25 map to ASCII a..z or A..Z
                // 26..35 map to ASCII 0..9
                return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
              }
              /**
               * Bias adaptation function as per section 3.4 of RFC 3492.
               * http://tools.ietf.org/html/rfc3492#section-3.4
               * @private
               */

              function adapt(delta, numPoints, firstTime) {
                var k = 0;
                delta = firstTime ? floor(delta / damp) : delta >> 1;
                delta += floor(delta / numPoints);

                for (
                  ;
                  /* no initialization */
                  delta > (baseMinusTMin * tMax) >> 1;
                  k += base
                ) {
                  delta = floor(delta / baseMinusTMin);
                }

                return floor(
                  k + ((baseMinusTMin + 1) * delta) / (delta + skew)
                );
              }
              /**
               * Converts a Punycode string of ASCII-only symbols to a string of Unicode
               * symbols.
               * @memberOf punycode
               * @param {String} input The Punycode string of ASCII-only symbols.
               * @returns {String} The resulting string of Unicode symbols.
               */

              function decode(input) {
                // Don't use UCS-2
                var output = [],
                  inputLength = input.length,
                  out,
                  i = 0,
                  n = initialN,
                  bias = initialBias,
                  basic,
                  j,
                  index,
                  oldi,
                  w,
                  k,
                  digit,
                  t,
                  /** Cached calculation results */
                  baseMinusT; // Handle the basic code points: let `basic` be the number of input code
                // points before the last delimiter, or `0` if there is none, then copy
                // the first basic code points to the output.

                basic = input.lastIndexOf(delimiter);

                if (basic < 0) {
                  basic = 0;
                }

                for (j = 0; j < basic; ++j) {
                  // if it's not a basic code point
                  if (input.charCodeAt(j) >= 0x80) {
                    error('not-basic');
                  }

                  output.push(input.charCodeAt(j));
                } // Main decoding loop: start just after the last delimiter if any basic code
                // points were copied; start at the beginning otherwise.

                for (
                  index = basic > 0 ? basic + 1 : 0;
                  index < inputLength;

                ) /* no final expression */
                {
                  // `index` is the index of the next character to be consumed.
                  // Decode a generalized variable-length integer into `delta`,
                  // which gets added to `i`. The overflow checking is easier
                  // if we increase `i` as we go, then subtract off its starting
                  // value at the end to obtain `delta`.
                  for (
                    oldi = i, w = 1, k = base;
                    ;
                    /* no condition */
                    k += base
                  ) {
                    if (index >= inputLength) {
                      error('invalid-input');
                    }

                    digit = basicToDigit(input.charCodeAt(index++));

                    if (digit >= base || digit > floor((maxInt - i) / w)) {
                      error('overflow');
                    }

                    i += digit * w;
                    t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

                    if (digit < t) {
                      break;
                    }

                    baseMinusT = base - t;

                    if (w > floor(maxInt / baseMinusT)) {
                      error('overflow');
                    }

                    w *= baseMinusT;
                  }

                  out = output.length + 1;
                  bias = adapt(i - oldi, out, oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
                  // incrementing `n` each time, so we'll fix that now:

                  if (floor(i / out) > maxInt - n) {
                    error('overflow');
                  }

                  n += floor(i / out);
                  i %= out; // Insert `n` at position `i` of the output

                  output.splice(i++, 0, n);
                }

                return ucs2encode(output);
              }
              /**
               * Converts a string of Unicode symbols (e.g. a domain name label) to a
               * Punycode string of ASCII-only symbols.
               * @memberOf punycode
               * @param {String} input The string of Unicode symbols.
               * @returns {String} The resulting Punycode string of ASCII-only symbols.
               */

              function encode(input) {
                var n,
                  delta,
                  handledCPCount,
                  basicLength,
                  bias,
                  j,
                  m,
                  q,
                  k,
                  t,
                  currentValue,
                  output = [],
                  /** `inputLength` will hold the number of code points in `input`. */
                  inputLength,
                  /** Cached calculation results */
                  handledCPCountPlusOne,
                  baseMinusT,
                  qMinusT; // Convert the input in UCS-2 to Unicode

                input = ucs2decode(input); // Cache the length

                inputLength = input.length; // Initialize the state

                n = initialN;
                delta = 0;
                bias = initialBias; // Handle the basic code points

                for (j = 0; j < inputLength; ++j) {
                  currentValue = input[j];

                  if (currentValue < 0x80) {
                    output.push(stringFromCharCode(currentValue));
                  }
                }

                handledCPCount = basicLength = output.length; // `handledCPCount` is the number of code points that have been handled;
                // `basicLength` is the number of basic code points.
                // Finish the basic string - if it is not empty - with a delimiter

                if (basicLength) {
                  output.push(delimiter);
                } // Main encoding loop:

                while (handledCPCount < inputLength) {
                  // All non-basic code points < n have been handled already. Find the next
                  // larger one:
                  for (m = maxInt, j = 0; j < inputLength; ++j) {
                    currentValue = input[j];

                    if (currentValue >= n && currentValue < m) {
                      m = currentValue;
                    }
                  } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
                  // but guard against overflow

                  handledCPCountPlusOne = handledCPCount + 1;

                  if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                    error('overflow');
                  }

                  delta += (m - n) * handledCPCountPlusOne;
                  n = m;

                  for (j = 0; j < inputLength; ++j) {
                    currentValue = input[j];

                    if (currentValue < n && ++delta > maxInt) {
                      error('overflow');
                    }

                    if (currentValue == n) {
                      // Represent delta as a generalized variable-length integer
                      for (
                        q = delta, k = base;
                        ;
                        /* no condition */
                        k += base
                      ) {
                        t =
                          k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

                        if (q < t) {
                          break;
                        }

                        qMinusT = q - t;
                        baseMinusT = base - t;
                        output.push(
                          stringFromCharCode(
                            digitToBasic(t + (qMinusT % baseMinusT), 0)
                          )
                        );
                        q = floor(qMinusT / baseMinusT);
                      }

                      output.push(stringFromCharCode(digitToBasic(q, 0)));
                      bias = adapt(
                        delta,
                        handledCPCountPlusOne,
                        handledCPCount == basicLength
                      );
                      delta = 0;
                      ++handledCPCount;
                    }
                  }

                  ++delta;
                  ++n;
                }

                return output.join('');
              }
              /**
               * Converts a Punycode string representing a domain name or an email address
               * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
               * it doesn't matter if you call it on a string that has already been
               * converted to Unicode.
               * @memberOf punycode
               * @param {String} input The Punycoded domain name or email address to
               * convert to Unicode.
               * @returns {String} The Unicode representation of the given Punycode
               * string.
               */

              function toUnicode(input) {
                return mapDomain(input, function (string) {
                  return regexPunycode.test(string)
                    ? decode(string.slice(4).toLowerCase())
                    : string;
                });
              }
              /**
               * Converts a Unicode string representing a domain name or an email address to
               * Punycode. Only the non-ASCII parts of the domain name will be converted,
               * i.e. it doesn't matter if you call it with a domain that's already in
               * ASCII.
               * @memberOf punycode
               * @param {String} input The domain name or email address to convert, as a
               * Unicode string.
               * @returns {String} The Punycode representation of the given domain name or
               * email address.
               */

              function toASCII(input) {
                return mapDomain(input, function (string) {
                  return regexNonASCII.test(string)
                    ? 'xn--' + encode(string)
                    : string;
                });
              }
              /*--------------------------------------------------------------------------*/

              /** Define the public API */

              punycode = {
                /**
                 * A string representing the current Punycode.js version number.
                 * @memberOf punycode
                 * @type String
                 */
                version: '1.3.2',

                /**
                 * An object of methods to convert from JavaScript's internal character
                 * representation (UCS-2) to Unicode code points, and back.
                 * @see <https://mathiasbynens.be/notes/javascript-encoding>
                 * @memberOf punycode
                 * @type Object
                 */
                ucs2: {
                  decode: ucs2decode,
                  encode: ucs2encode,
                },
                decode: decode,
                encode: encode,
                toASCII: toASCII,
                toUnicode: toUnicode,
              };
              /** Expose `punycode` */
              // Some AMD build optimizers, like r.js, check for specific condition patterns
              // like the following:

              if (true) {
                !((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                  return punycode;
                }.call(exports, __webpack_require__, exports, module)),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
              } else {
              }
            })(this);

            /***/
          },

        /***/ './node_modules/url/url.js':
          /*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
          /***/ (__unused_webpack_module, exports, __webpack_require__) => {
            'use strict';
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            var punycode = __webpack_require__(
              /*! punycode */ './node_modules/url/node_modules/punycode/punycode.js'
            );

            var util = __webpack_require__(
              /*! ./util */ './node_modules/url/util.js'
            );

            exports.parse = urlParse;
            exports.resolve = urlResolve;
            exports.resolveObject = urlResolveObject;
            exports.format = urlFormat;
            exports.Url = Url;

            function Url() {
              this.protocol = null;
              this.slashes = null;
              this.auth = null;
              this.host = null;
              this.port = null;
              this.hostname = null;
              this.hash = null;
              this.search = null;
              this.query = null;
              this.pathname = null;
              this.path = null;
              this.href = null;
            } // Reference: RFC 3986, RFC 1808, RFC 2396
            // define these here so at least they only have to be
            // compiled once on the first module load.

            var protocolPattern = /^([a-z0-9.+-]+:)/i,
              portPattern = /:[0-9]*$/,
              // Special case for a simple path URL
              simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
              // RFC 2396: characters reserved for delimiting URLs.
              // We actually just auto-escape these.
              delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
              // RFC 2396: characters not allowed for various reasons.
              unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
              // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
              autoEscape = ["'"].concat(unwise),
              // Characters that are never ever allowed in a hostname.
              // Note that any invalid chars are also handled, but these
              // are the ones that are *expected* to be seen, so we fast-path
              // them.
              nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
              hostEndingChars = ['/', '?', '#'],
              hostnameMaxLen = 255,
              hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
              hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
              // protocols that can allow "unsafe" and "unwise" chars.
              unsafeProtocol = {
                javascript: true,
                'javascript:': true,
              },
              // protocols that never have a hostname.
              hostlessProtocol = {
                javascript: true,
                'javascript:': true,
              },
              // protocols that always contain a // bit.
              slashedProtocol = {
                http: true,
                https: true,
                ftp: true,
                gopher: true,
                file: true,
                'http:': true,
                'https:': true,
                'ftp:': true,
                'gopher:': true,
                'file:': true,
              },
              querystring = __webpack_require__(
                /*! querystring */ './node_modules/querystring/index.js'
              );

            function urlParse(url, parseQueryString, slashesDenoteHost) {
              if (url && util.isObject(url) && url instanceof Url) return url;
              var u = new Url();
              u.parse(url, parseQueryString, slashesDenoteHost);
              return u;
            }

            Url.prototype.parse = function (
              url,
              parseQueryString,
              slashesDenoteHost
            ) {
              if (!util.isString(url)) {
                throw new TypeError(
                  "Parameter 'url' must be a string, not " + typeof url
                );
              } // Copy chrome, IE, opera backslash-handling behavior.
              // Back slashes before the query string get converted to forward slashes
              // See: https://code.google.com/p/chromium/issues/detail?id=25916

              var queryIndex = url.indexOf('?'),
                splitter =
                  queryIndex !== -1 && queryIndex < url.indexOf('#')
                    ? '?'
                    : '#',
                uSplit = url.split(splitter),
                slashRegex = /\\/g;
              uSplit[0] = uSplit[0].replace(slashRegex, '/');
              url = uSplit.join(splitter);
              var rest = url; // trim before proceeding.
              // This is to support parse stuff like "  http://foo.com  \n"

              rest = rest.trim();

              if (!slashesDenoteHost && url.split('#').length === 1) {
                // Try fast path regexp
                var simplePath = simplePathPattern.exec(rest);

                if (simplePath) {
                  this.path = rest;
                  this.href = rest;
                  this.pathname = simplePath[1];

                  if (simplePath[2]) {
                    this.search = simplePath[2];

                    if (parseQueryString) {
                      this.query = querystring.parse(this.search.substr(1));
                    } else {
                      this.query = this.search.substr(1);
                    }
                  } else if (parseQueryString) {
                    this.search = '';
                    this.query = {};
                  }

                  return this;
                }
              }

              var proto = protocolPattern.exec(rest);

              if (proto) {
                proto = proto[0];
                var lowerProto = proto.toLowerCase();
                this.protocol = lowerProto;
                rest = rest.substr(proto.length);
              } // figure out if it's got a host
              // user@server is *always* interpreted as a hostname, and url
              // resolution will treat //foo/bar as host=foo,path=bar because that's
              // how the browser resolves relative URLs.

              if (
                slashesDenoteHost ||
                proto ||
                rest.match(/^\/\/[^@\/]+@[^@\/]+/)
              ) {
                var slashes = rest.substr(0, 2) === '//';

                if (slashes && !(proto && hostlessProtocol[proto])) {
                  rest = rest.substr(2);
                  this.slashes = true;
                }
              }

              if (
                !hostlessProtocol[proto] &&
                (slashes || (proto && !slashedProtocol[proto]))
              ) {
                // there's a hostname.
                // the first instance of /, ?, ;, or # ends the host.
                //
                // If there is an @ in the hostname, then non-host chars *are* allowed
                // to the left of the last @ sign, unless some host-ending character
                // comes *before* the @-sign.
                // URLs are obnoxious.
                //
                // ex:
                // http://a@b@c/ => user:a@b host:c
                // http://a@b?@c => user:a host:c path:/?@c
                // v0.12 TODO(isaacs): This is not quite how Chrome does things.
                // Review our test case against browsers more comprehensively.
                // find the first instance of any hostEndingChars
                var hostEnd = -1;

                for (var i = 0; i < hostEndingChars.length; i++) {
                  var hec = rest.indexOf(hostEndingChars[i]);
                  if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
                    hostEnd = hec;
                } // at this point, either we have an explicit point where the
                // auth portion cannot go past, or the last @ char is the decider.

                var auth, atSign;

                if (hostEnd === -1) {
                  // atSign can be anywhere.
                  atSign = rest.lastIndexOf('@');
                } else {
                  // atSign must be in auth portion.
                  // http://a@b/c@d => host:b auth:a path:/c@d
                  atSign = rest.lastIndexOf('@', hostEnd);
                } // Now we have a portion which is definitely the auth.
                // Pull that off.

                if (atSign !== -1) {
                  auth = rest.slice(0, atSign);
                  rest = rest.slice(atSign + 1);
                  this.auth = decodeURIComponent(auth);
                } // the host is the remaining to the left of the first non-host char

                hostEnd = -1;

                for (var i = 0; i < nonHostChars.length; i++) {
                  var hec = rest.indexOf(nonHostChars[i]);
                  if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
                    hostEnd = hec;
                } // if we still have not hit it, then the entire thing is a host.

                if (hostEnd === -1) hostEnd = rest.length;
                this.host = rest.slice(0, hostEnd);
                rest = rest.slice(hostEnd); // pull out port.

                this.parseHost(); // we've indicated that there is a hostname,
                // so even if it's empty, it has to be present.

                this.hostname = this.hostname || ''; // if hostname begins with [ and ends with ]
                // assume that it's an IPv6 address.

                var ipv6Hostname =
                  this.hostname[0] === '[' &&
                  this.hostname[this.hostname.length - 1] === ']'; // validate a little.

                if (!ipv6Hostname) {
                  var hostparts = this.hostname.split(/\./);

                  for (var i = 0, l = hostparts.length; i < l; i++) {
                    var part = hostparts[i];
                    if (!part) continue;

                    if (!part.match(hostnamePartPattern)) {
                      var newpart = '';

                      for (var j = 0, k = part.length; j < k; j++) {
                        if (part.charCodeAt(j) > 127) {
                          // we replace non-ASCII char with a temporary placeholder
                          // we need this to make sure size of hostname is not
                          // broken by replacing non-ASCII by nothing
                          newpart += 'x';
                        } else {
                          newpart += part[j];
                        }
                      } // we test again with ASCII char only

                      if (!newpart.match(hostnamePartPattern)) {
                        var validParts = hostparts.slice(0, i);
                        var notHost = hostparts.slice(i + 1);
                        var bit = part.match(hostnamePartStart);

                        if (bit) {
                          validParts.push(bit[1]);
                          notHost.unshift(bit[2]);
                        }

                        if (notHost.length) {
                          rest = '/' + notHost.join('.') + rest;
                        }

                        this.hostname = validParts.join('.');
                        break;
                      }
                    }
                  }
                }

                if (this.hostname.length > hostnameMaxLen) {
                  this.hostname = '';
                } else {
                  // hostnames are always lower case.
                  this.hostname = this.hostname.toLowerCase();
                }

                if (!ipv6Hostname) {
                  // IDNA Support: Returns a punycoded representation of "domain".
                  // It only converts parts of the domain name that
                  // have non-ASCII characters, i.e. it doesn't matter if
                  // you call it with a domain that already is ASCII-only.
                  this.hostname = punycode.toASCII(this.hostname);
                }

                var p = this.port ? ':' + this.port : '';
                var h = this.hostname || '';
                this.host = h + p;
                this.href += this.host; // strip [ and ] from the hostname
                // the host field still retains them, though

                if (ipv6Hostname) {
                  this.hostname = this.hostname.substr(
                    1,
                    this.hostname.length - 2
                  );

                  if (rest[0] !== '/') {
                    rest = '/' + rest;
                  }
                }
              } // now rest is set to the post-host stuff.
              // chop off any delim chars.

              if (!unsafeProtocol[lowerProto]) {
                // First, make 100% sure that any "autoEscape" chars get
                // escaped, even if encodeURIComponent doesn't think they
                // need to be.
                for (var i = 0, l = autoEscape.length; i < l; i++) {
                  var ae = autoEscape[i];
                  if (rest.indexOf(ae) === -1) continue;
                  var esc = encodeURIComponent(ae);

                  if (esc === ae) {
                    esc = escape(ae);
                  }

                  rest = rest.split(ae).join(esc);
                }
              } // chop off from the tail first.

              var hash = rest.indexOf('#');

              if (hash !== -1) {
                // got a fragment string.
                this.hash = rest.substr(hash);
                rest = rest.slice(0, hash);
              }

              var qm = rest.indexOf('?');

              if (qm !== -1) {
                this.search = rest.substr(qm);
                this.query = rest.substr(qm + 1);

                if (parseQueryString) {
                  this.query = querystring.parse(this.query);
                }

                rest = rest.slice(0, qm);
              } else if (parseQueryString) {
                // no query string, but parseQueryString still requested
                this.search = '';
                this.query = {};
              }

              if (rest) this.pathname = rest;

              if (
                slashedProtocol[lowerProto] &&
                this.hostname &&
                !this.pathname
              ) {
                this.pathname = '/';
              } //to support http.request

              if (this.pathname || this.search) {
                var p = this.pathname || '';
                var s = this.search || '';
                this.path = p + s;
              } // finally, reconstruct the href based on what has been validated.

              this.href = this.format();
              return this;
            }; // format a parsed object into a url string

            function urlFormat(obj) {
              // ensure it's an object, and not a string url.
              // If it's an obj, this is a no-op.
              // this way, you can call url_format() on strings
              // to clean up potentially wonky urls.
              if (util.isString(obj)) obj = urlParse(obj);
              if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
              return obj.format();
            }

            Url.prototype.format = function () {
              var auth = this.auth || '';

              if (auth) {
                auth = encodeURIComponent(auth);
                auth = auth.replace(/%3A/i, ':');
                auth += '@';
              }

              var protocol = this.protocol || '',
                pathname = this.pathname || '',
                hash = this.hash || '',
                host = false,
                query = '';

              if (this.host) {
                host = auth + this.host;
              } else if (this.hostname) {
                host =
                  auth +
                  (this.hostname.indexOf(':') === -1
                    ? this.hostname
                    : '[' + this.hostname + ']');

                if (this.port) {
                  host += ':' + this.port;
                }
              }

              if (
                this.query &&
                util.isObject(this.query) &&
                Object.keys(this.query).length
              ) {
                query = querystring.stringify(this.query);
              }

              var search = this.search || (query && '?' + query) || '';
              if (protocol && protocol.substr(-1) !== ':') protocol += ':'; // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
              // unless they had them to begin with.

              if (
                this.slashes ||
                ((!protocol || slashedProtocol[protocol]) && host !== false)
              ) {
                host = '//' + (host || '');
                if (pathname && pathname.charAt(0) !== '/')
                  pathname = '/' + pathname;
              } else if (!host) {
                host = '';
              }

              if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
              if (search && search.charAt(0) !== '?') search = '?' + search;
              pathname = pathname.replace(/[?#]/g, function (match) {
                return encodeURIComponent(match);
              });
              search = search.replace('#', '%23');
              return protocol + host + pathname + search + hash;
            };

            function urlResolve(source, relative) {
              return urlParse(source, false, true).resolve(relative);
            }

            Url.prototype.resolve = function (relative) {
              return this.resolveObject(
                urlParse(relative, false, true)
              ).format();
            };

            function urlResolveObject(source, relative) {
              if (!source) return relative;
              return urlParse(source, false, true).resolveObject(relative);
            }

            Url.prototype.resolveObject = function (relative) {
              if (util.isString(relative)) {
                var rel = new Url();
                rel.parse(relative, false, true);
                relative = rel;
              }

              var result = new Url();
              var tkeys = Object.keys(this);

              for (var tk = 0; tk < tkeys.length; tk++) {
                var tkey = tkeys[tk];
                result[tkey] = this[tkey];
              } // hash is always overridden, no matter what.
              // even href="" will remove it.

              result.hash = relative.hash; // if the relative url is empty, then there's nothing left to do here.

              if (relative.href === '') {
                result.href = result.format();
                return result;
              } // hrefs like //foo/bar always cut to the protocol.

              if (relative.slashes && !relative.protocol) {
                // take everything except the protocol from relative
                var rkeys = Object.keys(relative);

                for (var rk = 0; rk < rkeys.length; rk++) {
                  var rkey = rkeys[rk];
                  if (rkey !== 'protocol') result[rkey] = relative[rkey];
                } //urlParse appends trailing / to urls like http://www.example.com

                if (
                  slashedProtocol[result.protocol] &&
                  result.hostname &&
                  !result.pathname
                ) {
                  result.path = result.pathname = '/';
                }

                result.href = result.format();
                return result;
              }

              if (relative.protocol && relative.protocol !== result.protocol) {
                // if it's a known url protocol, then changing
                // the protocol does weird things
                // first, if it's not file:, then we MUST have a host,
                // and if there was a path
                // to begin with, then we MUST have a path.
                // if it is file:, then the host is dropped,
                // because that's known to be hostless.
                // anything else is assumed to be absolute.
                if (!slashedProtocol[relative.protocol]) {
                  var keys = Object.keys(relative);

                  for (var v = 0; v < keys.length; v++) {
                    var k = keys[v];
                    result[k] = relative[k];
                  }

                  result.href = result.format();
                  return result;
                }

                result.protocol = relative.protocol;

                if (!relative.host && !hostlessProtocol[relative.protocol]) {
                  var relPath = (relative.pathname || '').split('/');

                  while (relPath.length && !(relative.host = relPath.shift()));

                  if (!relative.host) relative.host = '';
                  if (!relative.hostname) relative.hostname = '';
                  if (relPath[0] !== '') relPath.unshift('');
                  if (relPath.length < 2) relPath.unshift('');
                  result.pathname = relPath.join('/');
                } else {
                  result.pathname = relative.pathname;
                }

                result.search = relative.search;
                result.query = relative.query;
                result.host = relative.host || '';
                result.auth = relative.auth;
                result.hostname = relative.hostname || relative.host;
                result.port = relative.port; // to support http.request

                if (result.pathname || result.search) {
                  var p = result.pathname || '';
                  var s = result.search || '';
                  result.path = p + s;
                }

                result.slashes = result.slashes || relative.slashes;
                result.href = result.format();
                return result;
              }

              var isSourceAbs =
                  result.pathname && result.pathname.charAt(0) === '/',
                isRelAbs =
                  relative.host ||
                  (relative.pathname && relative.pathname.charAt(0) === '/'),
                mustEndAbs =
                  isRelAbs || isSourceAbs || (result.host && relative.pathname),
                removeAllDots = mustEndAbs,
                srcPath = (result.pathname && result.pathname.split('/')) || [],
                relPath =
                  (relative.pathname && relative.pathname.split('/')) || [],
                psychotic =
                  result.protocol && !slashedProtocol[result.protocol]; // if the url is a non-slashed url, then relative
              // links like ../.. should be able
              // to crawl up to the hostname, as well.  This is strange.
              // result.protocol has already been set by now.
              // Later on, put the first path part into the host field.

              if (psychotic) {
                result.hostname = '';
                result.port = null;

                if (result.host) {
                  if (srcPath[0] === '') srcPath[0] = result.host;
                  else srcPath.unshift(result.host);
                }

                result.host = '';

                if (relative.protocol) {
                  relative.hostname = null;
                  relative.port = null;

                  if (relative.host) {
                    if (relPath[0] === '') relPath[0] = relative.host;
                    else relPath.unshift(relative.host);
                  }

                  relative.host = null;
                }

                mustEndAbs =
                  mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
              }

              if (isRelAbs) {
                // it's absolute.
                result.host =
                  relative.host || relative.host === ''
                    ? relative.host
                    : result.host;
                result.hostname =
                  relative.hostname || relative.hostname === ''
                    ? relative.hostname
                    : result.hostname;
                result.search = relative.search;
                result.query = relative.query;
                srcPath = relPath; // fall through to the dot-handling below.
              } else if (relPath.length) {
                // it's relative
                // throw away the existing file, and take the new path instead.
                if (!srcPath) srcPath = [];
                srcPath.pop();
                srcPath = srcPath.concat(relPath);
                result.search = relative.search;
                result.query = relative.query;
              } else if (!util.isNullOrUndefined(relative.search)) {
                // just pull out the search.
                // like href='?foo'.
                // Put this after the other two cases because it simplifies the booleans
                if (psychotic) {
                  result.hostname = result.host = srcPath.shift(); //occationaly the auth can get stuck only in host
                  //this especially happens in cases like
                  //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

                  var authInHost =
                    result.host && result.host.indexOf('@') > 0
                      ? result.host.split('@')
                      : false;

                  if (authInHost) {
                    result.auth = authInHost.shift();
                    result.host = result.hostname = authInHost.shift();
                  }
                }

                result.search = relative.search;
                result.query = relative.query; //to support http.request

                if (
                  !util.isNull(result.pathname) ||
                  !util.isNull(result.search)
                ) {
                  result.path =
                    (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
                }

                result.href = result.format();
                return result;
              }

              if (!srcPath.length) {
                // no path at all.  easy.
                // we've already handled the other stuff above.
                result.pathname = null; //to support http.request

                if (result.search) {
                  result.path = '/' + result.search;
                } else {
                  result.path = null;
                }

                result.href = result.format();
                return result;
              } // if a url ENDs in . or .., then it must get a trailing slash.
              // however, if it ends in anything else non-slashy,
              // then it must NOT get a trailing slash.

              var last = srcPath.slice(-1)[0];
              var hasTrailingSlash =
                ((result.host || relative.host || srcPath.length > 1) &&
                  (last === '.' || last === '..')) ||
                last === ''; // strip single dots, resolve double dots to parent dir
              // if the path tries to go above the root, `up` ends up > 0

              var up = 0;

              for (var i = srcPath.length; i >= 0; i--) {
                last = srcPath[i];

                if (last === '.') {
                  srcPath.splice(i, 1);
                } else if (last === '..') {
                  srcPath.splice(i, 1);
                  up++;
                } else if (up) {
                  srcPath.splice(i, 1);
                  up--;
                }
              } // if the path is allowed to go above the root, restore leading ..s

              if (!mustEndAbs && !removeAllDots) {
                for (; up--; up) {
                  srcPath.unshift('..');
                }
              }

              if (
                mustEndAbs &&
                srcPath[0] !== '' &&
                (!srcPath[0] || srcPath[0].charAt(0) !== '/')
              ) {
                srcPath.unshift('');
              }

              if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
                srcPath.push('');
              }

              var isAbsolute =
                srcPath[0] === '' ||
                (srcPath[0] && srcPath[0].charAt(0) === '/'); // put the host back

              if (psychotic) {
                result.hostname = result.host = isAbsolute
                  ? ''
                  : srcPath.length
                  ? srcPath.shift()
                  : ''; //occationaly the auth can get stuck only in host
                //this especially happens in cases like
                //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

                var authInHost =
                  result.host && result.host.indexOf('@') > 0
                    ? result.host.split('@')
                    : false;

                if (authInHost) {
                  result.auth = authInHost.shift();
                  result.host = result.hostname = authInHost.shift();
                }
              }

              mustEndAbs = mustEndAbs || (result.host && srcPath.length);

              if (mustEndAbs && !isAbsolute) {
                srcPath.unshift('');
              }

              if (!srcPath.length) {
                result.pathname = null;
                result.path = null;
              } else {
                result.pathname = srcPath.join('/');
              } //to support request.http

              if (
                !util.isNull(result.pathname) ||
                !util.isNull(result.search)
              ) {
                result.path =
                  (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
              }

              result.auth = relative.auth || result.auth;
              result.slashes = result.slashes || relative.slashes;
              result.href = result.format();
              return result;
            };

            Url.prototype.parseHost = function () {
              var host = this.host;
              var port = portPattern.exec(host);

              if (port) {
                port = port[0];

                if (port !== ':') {
                  this.port = port.substr(1);
                }

                host = host.substr(0, host.length - port.length);
              }

              if (host) this.hostname = host;
            };

            /***/
          },

        /***/ './node_modules/url/util.js':
          /*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
          /***/ (module) => {
            'use strict';

            module.exports = {
              isString: function (arg) {
                return typeof arg === 'string';
              },
              isObject: function (arg) {
                return typeof arg === 'object' && arg !== null;
              },
              isNull: function (arg) {
                return arg === null;
              },
              isNullOrUndefined: function (arg) {
                return arg == null;
              },
            };

            /***/
          },

        /***/ './node_modules/util/support/isBufferBrowser.js':
          /*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
          /***/ (module) => {
            module.exports = function isBuffer(arg) {
              return (
                arg &&
                typeof arg === 'object' &&
                typeof arg.copy === 'function' &&
                typeof arg.fill === 'function' &&
                typeof arg.readUInt8 === 'function'
              );
            };

            /***/
          },

        /***/ './node_modules/util/support/types.js':
          /*!********************************************!*\
  !*** ./node_modules/util/support/types.js ***!
  \********************************************/
          /***/ (__unused_webpack_module, exports, __webpack_require__) => {
            'use strict';
            // Currently in sync with Node.js lib/internal/util/types.js
            // https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9

            var isArgumentsObject = __webpack_require__(
              /*! is-arguments */ './node_modules/is-arguments/index.js'
            );

            var isGeneratorFunction = __webpack_require__(
              /*! is-generator-function */ './node_modules/is-generator-function/index.js'
            );

            var whichTypedArray = __webpack_require__(
              /*! which-typed-array */ './node_modules/which-typed-array/index.js'
            );

            var isTypedArray = __webpack_require__(
              /*! is-typed-array */ './node_modules/is-typed-array/index.js'
            );

            function uncurryThis(f) {
              return f.call.bind(f);
            }

            var BigIntSupported = typeof BigInt !== 'undefined';
            var SymbolSupported = typeof Symbol !== 'undefined';
            var ObjectToString = uncurryThis(Object.prototype.toString);
            var numberValue = uncurryThis(Number.prototype.valueOf);
            var stringValue = uncurryThis(String.prototype.valueOf);
            var booleanValue = uncurryThis(Boolean.prototype.valueOf);

            if (BigIntSupported) {
              var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
            }

            if (SymbolSupported) {
              var symbolValue = uncurryThis(Symbol.prototype.valueOf);
            }

            function checkBoxedPrimitive(value, prototypeValueOf) {
              if (typeof value !== 'object') {
                return false;
              }

              try {
                prototypeValueOf(value);
                return true;
              } catch (e) {
                return false;
              }
            }

            exports.isArgumentsObject = isArgumentsObject;
            exports.isGeneratorFunction = isGeneratorFunction;
            exports.isTypedArray = isTypedArray; // Taken from here and modified for better browser support
            // https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js

            function isPromise(input) {
              return (
                (typeof Promise !== 'undefined' && input instanceof Promise) ||
                (input !== null &&
                  typeof input === 'object' &&
                  typeof input.then === 'function' &&
                  typeof input.catch === 'function')
              );
            }

            exports.isPromise = isPromise;

            function isArrayBufferView(value) {
              if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
                return ArrayBuffer.isView(value);
              }

              return isTypedArray(value) || isDataView(value);
            }

            exports.isArrayBufferView = isArrayBufferView;

            function isUint8Array(value) {
              return whichTypedArray(value) === 'Uint8Array';
            }

            exports.isUint8Array = isUint8Array;

            function isUint8ClampedArray(value) {
              return whichTypedArray(value) === 'Uint8ClampedArray';
            }

            exports.isUint8ClampedArray = isUint8ClampedArray;

            function isUint16Array(value) {
              return whichTypedArray(value) === 'Uint16Array';
            }

            exports.isUint16Array = isUint16Array;

            function isUint32Array(value) {
              return whichTypedArray(value) === 'Uint32Array';
            }

            exports.isUint32Array = isUint32Array;

            function isInt8Array(value) {
              return whichTypedArray(value) === 'Int8Array';
            }

            exports.isInt8Array = isInt8Array;

            function isInt16Array(value) {
              return whichTypedArray(value) === 'Int16Array';
            }

            exports.isInt16Array = isInt16Array;

            function isInt32Array(value) {
              return whichTypedArray(value) === 'Int32Array';
            }

            exports.isInt32Array = isInt32Array;

            function isFloat32Array(value) {
              return whichTypedArray(value) === 'Float32Array';
            }

            exports.isFloat32Array = isFloat32Array;

            function isFloat64Array(value) {
              return whichTypedArray(value) === 'Float64Array';
            }

            exports.isFloat64Array = isFloat64Array;

            function isBigInt64Array(value) {
              return whichTypedArray(value) === 'BigInt64Array';
            }

            exports.isBigInt64Array = isBigInt64Array;

            function isBigUint64Array(value) {
              return whichTypedArray(value) === 'BigUint64Array';
            }

            exports.isBigUint64Array = isBigUint64Array;

            function isMapToString(value) {
              return ObjectToString(value) === '[object Map]';
            }

            isMapToString.working =
              typeof Map !== 'undefined' && isMapToString(new Map());

            function isMap(value) {
              if (typeof Map === 'undefined') {
                return false;
              }

              return isMapToString.working
                ? isMapToString(value)
                : value instanceof Map;
            }

            exports.isMap = isMap;

            function isSetToString(value) {
              return ObjectToString(value) === '[object Set]';
            }

            isSetToString.working =
              typeof Set !== 'undefined' && isSetToString(new Set());

            function isSet(value) {
              if (typeof Set === 'undefined') {
                return false;
              }

              return isSetToString.working
                ? isSetToString(value)
                : value instanceof Set;
            }

            exports.isSet = isSet;

            function isWeakMapToString(value) {
              return ObjectToString(value) === '[object WeakMap]';
            }

            isWeakMapToString.working =
              typeof WeakMap !== 'undefined' &&
              isWeakMapToString(new WeakMap());

            function isWeakMap(value) {
              if (typeof WeakMap === 'undefined') {
                return false;
              }

              return isWeakMapToString.working
                ? isWeakMapToString(value)
                : value instanceof WeakMap;
            }

            exports.isWeakMap = isWeakMap;

            function isWeakSetToString(value) {
              return ObjectToString(value) === '[object WeakSet]';
            }

            isWeakSetToString.working =
              typeof WeakSet !== 'undefined' &&
              isWeakSetToString(new WeakSet());

            function isWeakSet(value) {
              return isWeakSetToString(value);
            }

            exports.isWeakSet = isWeakSet;

            function isArrayBufferToString(value) {
              return ObjectToString(value) === '[object ArrayBuffer]';
            }

            isArrayBufferToString.working =
              typeof ArrayBuffer !== 'undefined' &&
              isArrayBufferToString(new ArrayBuffer());

            function isArrayBuffer(value) {
              if (typeof ArrayBuffer === 'undefined') {
                return false;
              }

              return isArrayBufferToString.working
                ? isArrayBufferToString(value)
                : value instanceof ArrayBuffer;
            }

            exports.isArrayBuffer = isArrayBuffer;

            function isDataViewToString(value) {
              return ObjectToString(value) === '[object DataView]';
            }

            isDataViewToString.working =
              typeof ArrayBuffer !== 'undefined' &&
              typeof DataView !== 'undefined' &&
              isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));

            function isDataView(value) {
              if (typeof DataView === 'undefined') {
                return false;
              }

              return isDataViewToString.working
                ? isDataViewToString(value)
                : value instanceof DataView;
            }

            exports.isDataView = isDataView;

            function isSharedArrayBufferToString(value) {
              return ObjectToString(value) === '[object SharedArrayBuffer]';
            }

            isSharedArrayBufferToString.working =
              typeof SharedArrayBuffer !== 'undefined' &&
              isSharedArrayBufferToString(new SharedArrayBuffer());

            function isSharedArrayBuffer(value) {
              if (typeof SharedArrayBuffer === 'undefined') {
                return false;
              }

              return isSharedArrayBufferToString.working
                ? isSharedArrayBufferToString(value)
                : value instanceof SharedArrayBuffer;
            }

            exports.isSharedArrayBuffer = isSharedArrayBuffer;

            function isAsyncFunction(value) {
              return ObjectToString(value) === '[object AsyncFunction]';
            }

            exports.isAsyncFunction = isAsyncFunction;

            function isMapIterator(value) {
              return ObjectToString(value) === '[object Map Iterator]';
            }

            exports.isMapIterator = isMapIterator;

            function isSetIterator(value) {
              return ObjectToString(value) === '[object Set Iterator]';
            }

            exports.isSetIterator = isSetIterator;

            function isGeneratorObject(value) {
              return ObjectToString(value) === '[object Generator]';
            }

            exports.isGeneratorObject = isGeneratorObject;

            function isWebAssemblyCompiledModule(value) {
              return ObjectToString(value) === '[object WebAssembly.Module]';
            }

            exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

            function isNumberObject(value) {
              return checkBoxedPrimitive(value, numberValue);
            }

            exports.isNumberObject = isNumberObject;

            function isStringObject(value) {
              return checkBoxedPrimitive(value, stringValue);
            }

            exports.isStringObject = isStringObject;

            function isBooleanObject(value) {
              return checkBoxedPrimitive(value, booleanValue);
            }

            exports.isBooleanObject = isBooleanObject;

            function isBigIntObject(value) {
              return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
            }

            exports.isBigIntObject = isBigIntObject;

            function isSymbolObject(value) {
              return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
            }

            exports.isSymbolObject = isSymbolObject;

            function isBoxedPrimitive(value) {
              return (
                isNumberObject(value) ||
                isStringObject(value) ||
                isBooleanObject(value) ||
                isBigIntObject(value) ||
                isSymbolObject(value)
              );
            }

            exports.isBoxedPrimitive = isBoxedPrimitive;

            function isAnyArrayBuffer(value) {
              return (
                typeof Uint8Array !== 'undefined' &&
                (isArrayBuffer(value) || isSharedArrayBuffer(value))
              );
            }

            exports.isAnyArrayBuffer = isAnyArrayBuffer;
            ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(
              function (method) {
                Object.defineProperty(exports, method, {
                  enumerable: false,
                  value: function () {
                    throw new Error(method + ' is not supported in userland');
                  },
                });
              }
            );

            /***/
          },

        /***/ './node_modules/util/util.js':
          /*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
          /***/ (__unused_webpack_module, exports, __webpack_require__) => {
            /* provided dependency */ var process = __webpack_require__(
              /*! process/browser */ './node_modules/process/browser.js'
            );
            /* provided dependency */ var console = __webpack_require__(
              /*! console-browserify */ './node_modules/console-browserify/index.js'
            );
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.
            var getOwnPropertyDescriptors =
              Object.getOwnPropertyDescriptors ||
              function getOwnPropertyDescriptors(obj) {
                var keys = Object.keys(obj);
                var descriptors = {};

                for (var i = 0; i < keys.length; i++) {
                  descriptors[keys[i]] = Object.getOwnPropertyDescriptor(
                    obj,
                    keys[i]
                  );
                }

                return descriptors;
              };

            var formatRegExp = /%[sdj%]/g;

            exports.format = function (f) {
              if (!isString(f)) {
                var objects = [];

                for (var i = 0; i < arguments.length; i++) {
                  objects.push(inspect(arguments[i]));
                }

                return objects.join(' ');
              }

              var i = 1;
              var args = arguments;
              var len = args.length;
              var str = String(f).replace(formatRegExp, function (x) {
                if (x === '%%') return '%';
                if (i >= len) return x;

                switch (x) {
                  case '%s':
                    return String(args[i++]);

                  case '%d':
                    return Number(args[i++]);

                  case '%j':
                    try {
                      return JSON.stringify(args[i++]);
                    } catch (_) {
                      return '[Circular]';
                    }

                  default:
                    return x;
                }
              });

              for (var x = args[i]; i < len; x = args[++i]) {
                if (isNull(x) || !isObject(x)) {
                  str += ' ' + x;
                } else {
                  str += ' ' + inspect(x);
                }
              }

              return str;
            }; // Mark that a method should not be used.
            // Returns a modified function which warns once by default.
            // If --no-deprecation is set, then it is a no-op.

            exports.deprecate = function (fn, msg) {
              if (
                typeof process !== 'undefined' &&
                process.noDeprecation === true
              ) {
                return fn;
              } // Allow for deprecating things in the process of starting up.

              if (typeof process === 'undefined') {
                return function () {
                  return exports.deprecate(fn, msg).apply(this, arguments);
                };
              }

              var warned = false;

              function deprecated() {
                if (!warned) {
                  if (process.throwDeprecation) {
                    throw new Error(msg);
                  } else if (process.traceDeprecation) {
                    console.trace(msg);
                  } else {
                    console.error(msg);
                  }

                  warned = true;
                }

                return fn.apply(this, arguments);
              }

              return deprecated;
            };

            var debugs = {};
            var debugEnvRegex = /^$/;

            if (process.env.NODE_DEBUG) {
              var debugEnv = process.env.NODE_DEBUG;
              debugEnv = debugEnv
                .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
                .replace(/\*/g, '.*')
                .replace(/,/g, '$|^')
                .toUpperCase();
              debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
            }

            exports.debuglog = function (set) {
              set = set.toUpperCase();

              if (!debugs[set]) {
                if (debugEnvRegex.test(set)) {
                  var pid = process.pid;

                  debugs[set] = function () {
                    var msg = exports.format.apply(exports, arguments);
                    console.error('%s %d: %s', set, pid, msg);
                  };
                } else {
                  debugs[set] = function () {};
                }
              }

              return debugs[set];
            };
            /**
             * Echos the value of a value. Trys to print the value out
             * in the best way possible given the different types.
             *
             * @param {Object} obj The object to print out.
             * @param {Object} opts Optional options object that alters the output.
             */

            /* legacy: obj, showHidden, depth, colors*/

            function inspect(obj, opts) {
              // default options
              var ctx = {
                seen: [],
                stylize: stylizeNoColor,
              }; // legacy...

              if (arguments.length >= 3) ctx.depth = arguments[2];
              if (arguments.length >= 4) ctx.colors = arguments[3];

              if (isBoolean(opts)) {
                // legacy...
                ctx.showHidden = opts;
              } else if (opts) {
                // got an "options" object
                exports._extend(ctx, opts);
              } // set default options

              if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
              if (isUndefined(ctx.depth)) ctx.depth = 2;
              if (isUndefined(ctx.colors)) ctx.colors = false;
              if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
              if (ctx.colors) ctx.stylize = stylizeWithColor;
              return formatValue(ctx, obj, ctx.depth);
            }

            exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

            inspect.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39],
            }; // Don't use 'blue' not visible on cmd.exe

            inspect.styles = {
              special: 'cyan',
              number: 'yellow',
              boolean: 'yellow',
              undefined: 'grey',
              null: 'bold',
              string: 'green',
              date: 'magenta',
              // "name": intentionally not styling
              regexp: 'red',
            };

            function stylizeWithColor(str, styleType) {
              var style = inspect.styles[styleType];

              if (style) {
                return (
                  '\u001b[' +
                  inspect.colors[style][0] +
                  'm' +
                  str +
                  '\u001b[' +
                  inspect.colors[style][1] +
                  'm'
                );
              } else {
                return str;
              }
            }

            function stylizeNoColor(str, styleType) {
              return str;
            }

            function arrayToHash(array) {
              var hash = {};
              array.forEach(function (val, idx) {
                hash[val] = true;
              });
              return hash;
            }

            function formatValue(ctx, value, recurseTimes) {
              // Provide a hook for user-specified inspect functions.
              // Check that value is an object with an inspect function on it
              if (
                ctx.customInspect &&
                value &&
                isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
                value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
                !(value.constructor && value.constructor.prototype === value)
              ) {
                var ret = value.inspect(recurseTimes, ctx);

                if (!isString(ret)) {
                  ret = formatValue(ctx, ret, recurseTimes);
                }

                return ret;
              } // Primitive types cannot have properties

              var primitive = formatPrimitive(ctx, value);

              if (primitive) {
                return primitive;
              } // Look up the keys of the object.

              var keys = Object.keys(value);
              var visibleKeys = arrayToHash(keys);

              if (ctx.showHidden) {
                keys = Object.getOwnPropertyNames(value);
              } // IE doesn't make error fields non-enumerable
              // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx

              if (
                isError(value) &&
                (keys.indexOf('message') >= 0 ||
                  keys.indexOf('description') >= 0)
              ) {
                return formatError(value);
              } // Some type of object without properties can be shortcutted.

              if (keys.length === 0) {
                if (isFunction(value)) {
                  var name = value.name ? ': ' + value.name : '';
                  return ctx.stylize('[Function' + name + ']', 'special');
                }

                if (isRegExp(value)) {
                  return ctx.stylize(
                    RegExp.prototype.toString.call(value),
                    'regexp'
                  );
                }

                if (isDate(value)) {
                  return ctx.stylize(
                    Date.prototype.toString.call(value),
                    'date'
                  );
                }

                if (isError(value)) {
                  return formatError(value);
                }
              }

              var base = '',
                array = false,
                braces = ['{', '}']; // Make Array say that they are Array

              if (isArray(value)) {
                array = true;
                braces = ['[', ']'];
              } // Make functions say that they are functions

              if (isFunction(value)) {
                var n = value.name ? ': ' + value.name : '';
                base = ' [Function' + n + ']';
              } // Make RegExps say that they are RegExps

              if (isRegExp(value)) {
                base = ' ' + RegExp.prototype.toString.call(value);
              } // Make dates with properties first say the date

              if (isDate(value)) {
                base = ' ' + Date.prototype.toUTCString.call(value);
              } // Make error with message first say the error

              if (isError(value)) {
                base = ' ' + formatError(value);
              }

              if (keys.length === 0 && (!array || value.length == 0)) {
                return braces[0] + base + braces[1];
              }

              if (recurseTimes < 0) {
                if (isRegExp(value)) {
                  return ctx.stylize(
                    RegExp.prototype.toString.call(value),
                    'regexp'
                  );
                } else {
                  return ctx.stylize('[Object]', 'special');
                }
              }

              ctx.seen.push(value);
              var output;

              if (array) {
                output = formatArray(
                  ctx,
                  value,
                  recurseTimes,
                  visibleKeys,
                  keys
                );
              } else {
                output = keys.map(function (key) {
                  return formatProperty(
                    ctx,
                    value,
                    recurseTimes,
                    visibleKeys,
                    key,
                    array
                  );
                });
              }

              ctx.seen.pop();
              return reduceToSingleString(output, base, braces);
            }

            function formatPrimitive(ctx, value) {
              if (isUndefined(value))
                return ctx.stylize('undefined', 'undefined');

              if (isString(value)) {
                var simple =
                  "'" +
                  JSON.stringify(value)
                    .replace(/^"|"$/g, '')
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"') +
                  "'";
                return ctx.stylize(simple, 'string');
              }

              if (isNumber(value)) return ctx.stylize('' + value, 'number');
              if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

              if (isNull(value)) return ctx.stylize('null', 'null');
            }

            function formatError(value) {
              return '[' + Error.prototype.toString.call(value) + ']';
            }

            function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
              var output = [];

              for (var i = 0, l = value.length; i < l; ++i) {
                if (hasOwnProperty(value, String(i))) {
                  output.push(
                    formatProperty(
                      ctx,
                      value,
                      recurseTimes,
                      visibleKeys,
                      String(i),
                      true
                    )
                  );
                } else {
                  output.push('');
                }
              }

              keys.forEach(function (key) {
                if (!key.match(/^\d+$/)) {
                  output.push(
                    formatProperty(
                      ctx,
                      value,
                      recurseTimes,
                      visibleKeys,
                      key,
                      true
                    )
                  );
                }
              });
              return output;
            }

            function formatProperty(
              ctx,
              value,
              recurseTimes,
              visibleKeys,
              key,
              array
            ) {
              var name, str, desc;
              desc = Object.getOwnPropertyDescriptor(value, key) || {
                value: value[key],
              };

              if (desc.get) {
                if (desc.set) {
                  str = ctx.stylize('[Getter/Setter]', 'special');
                } else {
                  str = ctx.stylize('[Getter]', 'special');
                }
              } else {
                if (desc.set) {
                  str = ctx.stylize('[Setter]', 'special');
                }
              }

              if (!hasOwnProperty(visibleKeys, key)) {
                name = '[' + key + ']';
              }

              if (!str) {
                if (ctx.seen.indexOf(desc.value) < 0) {
                  if (isNull(recurseTimes)) {
                    str = formatValue(ctx, desc.value, null);
                  } else {
                    str = formatValue(ctx, desc.value, recurseTimes - 1);
                  }

                  if (str.indexOf('\n') > -1) {
                    if (array) {
                      str = str
                        .split('\n')
                        .map(function (line) {
                          return '  ' + line;
                        })
                        .join('\n')
                        .substr(2);
                    } else {
                      str =
                        '\n' +
                        str
                          .split('\n')
                          .map(function (line) {
                            return '   ' + line;
                          })
                          .join('\n');
                    }
                  }
                } else {
                  str = ctx.stylize('[Circular]', 'special');
                }
              }

              if (isUndefined(name)) {
                if (array && key.match(/^\d+$/)) {
                  return str;
                }

                name = JSON.stringify('' + key);

                if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                  name = name.substr(1, name.length - 2);
                  name = ctx.stylize(name, 'name');
                } else {
                  name = name
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'");
                  name = ctx.stylize(name, 'string');
                }
              }

              return name + ': ' + str;
            }

            function reduceToSingleString(output, base, braces) {
              var numLinesEst = 0;
              var length = output.reduce(function (prev, cur) {
                numLinesEst++;
                if (cur.indexOf('\n') >= 0) numLinesEst++;
                return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
              }, 0);

              if (length > 60) {
                return (
                  braces[0] +
                  (base === '' ? '' : base + '\n ') +
                  ' ' +
                  output.join(',\n  ') +
                  ' ' +
                  braces[1]
                );
              }

              return (
                braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1]
              );
            } // NOTE: These type checking functions intentionally don't use `instanceof`
            // because it is fragile and can be easily faked with `Object.create()`.

            exports.types = __webpack_require__(
              /*! ./support/types */ './node_modules/util/support/types.js'
            );

            function isArray(ar) {
              return Array.isArray(ar);
            }

            exports.isArray = isArray;

            function isBoolean(arg) {
              return typeof arg === 'boolean';
            }

            exports.isBoolean = isBoolean;

            function isNull(arg) {
              return arg === null;
            }

            exports.isNull = isNull;

            function isNullOrUndefined(arg) {
              return arg == null;
            }

            exports.isNullOrUndefined = isNullOrUndefined;

            function isNumber(arg) {
              return typeof arg === 'number';
            }

            exports.isNumber = isNumber;

            function isString(arg) {
              return typeof arg === 'string';
            }

            exports.isString = isString;

            function isSymbol(arg) {
              return typeof arg === 'symbol';
            }

            exports.isSymbol = isSymbol;

            function isUndefined(arg) {
              return arg === void 0;
            }

            exports.isUndefined = isUndefined;

            function isRegExp(re) {
              return isObject(re) && objectToString(re) === '[object RegExp]';
            }

            exports.isRegExp = isRegExp;
            exports.types.isRegExp = isRegExp;

            function isObject(arg) {
              return typeof arg === 'object' && arg !== null;
            }

            exports.isObject = isObject;

            function isDate(d) {
              return isObject(d) && objectToString(d) === '[object Date]';
            }

            exports.isDate = isDate;
            exports.types.isDate = isDate;

            function isError(e) {
              return (
                isObject(e) &&
                (objectToString(e) === '[object Error]' || e instanceof Error)
              );
            }

            exports.isError = isError;
            exports.types.isNativeError = isError;

            function isFunction(arg) {
              return typeof arg === 'function';
            }

            exports.isFunction = isFunction;

            function isPrimitive(arg) {
              return (
                arg === null ||
                typeof arg === 'boolean' ||
                typeof arg === 'number' ||
                typeof arg === 'string' ||
                typeof arg === 'symbol' || // ES6 symbol
                typeof arg === 'undefined'
              );
            }

            exports.isPrimitive = isPrimitive;
            exports.isBuffer = __webpack_require__(
              /*! ./support/isBuffer */ './node_modules/util/support/isBufferBrowser.js'
            );

            function objectToString(o) {
              return Object.prototype.toString.call(o);
            }

            function pad(n) {
              return n < 10 ? '0' + n.toString(10) : n.toString(10);
            }

            var months = [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ]; // 26 Feb 16:19:34

            function timestamp() {
              var d = new Date();
              var time = [
                pad(d.getHours()),
                pad(d.getMinutes()),
                pad(d.getSeconds()),
              ].join(':');
              return [d.getDate(), months[d.getMonth()], time].join(' ');
            } // log is just a thin wrapper to console.log that prepends a timestamp

            exports.log = function () {
              console.log(
                '%s - %s',
                timestamp(),
                exports.format.apply(exports, arguments)
              );
            };
            /**
             * Inherit the prototype methods from one constructor into another.
             *
             * The Function.prototype.inherits from lang.js rewritten as a standalone
             * function (not on Function.prototype). NOTE: If this file is to be loaded
             * during bootstrapping this function needs to be rewritten using some native
             * functions as prototype setup using normal JavaScript does not work as
             * expected during bootstrapping (see mirror.js in r114903).
             *
             * @param {function} ctor Constructor function which needs to inherit the
             *     prototype.
             * @param {function} superCtor Constructor function to inherit prototype from.
             */

            exports.inherits = __webpack_require__(
              /*! inherits */ './node_modules/inherits/inherits_browser.js'
            );

            exports._extend = function (origin, add) {
              // Don't do anything if add isn't an object
              if (!add || !isObject(add)) return origin;
              var keys = Object.keys(add);
              var i = keys.length;

              while (i--) {
                origin[keys[i]] = add[keys[i]];
              }

              return origin;
            };

            function hasOwnProperty(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            }

            var kCustomPromisifiedSymbol =
              typeof Symbol !== 'undefined'
                ? Symbol('util.promisify.custom')
                : undefined;

            exports.promisify = function promisify(original) {
              if (typeof original !== 'function')
                throw new TypeError(
                  'The "original" argument must be of type Function'
                );

              if (
                kCustomPromisifiedSymbol &&
                original[kCustomPromisifiedSymbol]
              ) {
                var fn = original[kCustomPromisifiedSymbol];

                if (typeof fn !== 'function') {
                  throw new TypeError(
                    'The "util.promisify.custom" argument must be of type Function'
                  );
                }

                Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                  value: fn,
                  enumerable: false,
                  writable: false,
                  configurable: true,
                });
                return fn;
              }

              function fn() {
                var promiseResolve, promiseReject;
                var promise = new Promise(function (resolve, reject) {
                  promiseResolve = resolve;
                  promiseReject = reject;
                });
                var args = [];

                for (var i = 0; i < arguments.length; i++) {
                  args.push(arguments[i]);
                }

                args.push(function (err, value) {
                  if (err) {
                    promiseReject(err);
                  } else {
                    promiseResolve(value);
                  }
                });

                try {
                  original.apply(this, args);
                } catch (err) {
                  promiseReject(err);
                }

                return promise;
              }

              Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
              if (kCustomPromisifiedSymbol)
                Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                  value: fn,
                  enumerable: false,
                  writable: false,
                  configurable: true,
                });
              return Object.defineProperties(
                fn,
                getOwnPropertyDescriptors(original)
              );
            };

            exports.promisify.custom = kCustomPromisifiedSymbol;

            function callbackifyOnRejected(reason, cb) {
              // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
              // Because `null` is a special error value in callbacks which means "no error
              // occurred", we error-wrap so the callback consumer can distinguish between
              // "the promise rejected with null" or "the promise fulfilled with undefined".
              if (!reason) {
                var newReason = new Error(
                  'Promise was rejected with a falsy value'
                );
                newReason.reason = reason;
                reason = newReason;
              }

              return cb(reason);
            }

            function callbackify(original) {
              if (typeof original !== 'function') {
                throw new TypeError(
                  'The "original" argument must be of type Function'
                );
              } // We DO NOT return the promise as it gives the user a false sense that
              // the promise is actually somehow related to the callback's execution
              // and that the callback throwing will reject the promise.

              function callbackified() {
                var args = [];

                for (var i = 0; i < arguments.length; i++) {
                  args.push(arguments[i]);
                }

                var maybeCb = args.pop();

                if (typeof maybeCb !== 'function') {
                  throw new TypeError(
                    'The last argument must be of type Function'
                  );
                }

                var self = this;

                var cb = function () {
                  return maybeCb.apply(self, arguments);
                }; // In true node style we process the callback on `nextTick` with all the
                // implications (stack, `uncaughtException`, `async_hooks`)

                original.apply(this, args).then(
                  function (ret) {
                    process.nextTick(cb.bind(null, null, ret));
                  },
                  function (rej) {
                    process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
                  }
                );
              }

              Object.setPrototypeOf(
                callbackified,
                Object.getPrototypeOf(original)
              );
              Object.defineProperties(
                callbackified,
                getOwnPropertyDescriptors(original)
              );
              return callbackified;
            }

            exports.callbackify = callbackify;

            /***/
          },

        /***/ './node_modules/which-typed-array/index.js':
          /*!*************************************************!*\
  !*** ./node_modules/which-typed-array/index.js ***!
  \*************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            var forEach = __webpack_require__(
              /*! foreach */ './node_modules/foreach/index.js'
            );

            var availableTypedArrays = __webpack_require__(
              /*! available-typed-arrays */ './node_modules/available-typed-arrays/index.js'
            );

            var callBound = __webpack_require__(
              /*! call-bind/callBound */ './node_modules/call-bind/callBound.js'
            );

            var $toString = callBound('Object.prototype.toString');

            var hasSymbols = __webpack_require__(
              /*! has-symbols */ './node_modules/has-symbols/index.js'
            )();

            var hasToStringTag =
              hasSymbols && typeof Symbol.toStringTag === 'symbol';
            var typedArrays = availableTypedArrays();
            var $slice = callBound('String.prototype.slice');
            var toStrTags = {};

            var gOPD = __webpack_require__(
              /*! es-abstract/helpers/getOwnPropertyDescriptor */ './node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js'
            );

            var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');

            if (hasToStringTag && gOPD && getPrototypeOf) {
              forEach(typedArrays, function (typedArray) {
                if (typeof __webpack_require__.g[typedArray] === 'function') {
                  var arr = new __webpack_require__.g[typedArray]();

                  if (!(Symbol.toStringTag in arr)) {
                    throw new EvalError(
                      'this engine has support for Symbol.toStringTag, but ' +
                        typedArray +
                        ' does not have the property! Please report this.'
                    );
                  }

                  var proto = getPrototypeOf(arr);
                  var descriptor = gOPD(proto, Symbol.toStringTag);

                  if (!descriptor) {
                    var superProto = getPrototypeOf(proto);
                    descriptor = gOPD(superProto, Symbol.toStringTag);
                  }

                  toStrTags[typedArray] = descriptor.get;
                }
              });
            }

            var tryTypedArrays = function tryAllTypedArrays(value) {
              var foundName = false;
              forEach(toStrTags, function (getter, typedArray) {
                if (!foundName) {
                  try {
                    var name = getter.call(value);

                    if (name === typedArray) {
                      foundName = name;
                    }
                  } catch (e) {}
                }
              });
              return foundName;
            };

            var isTypedArray = __webpack_require__(
              /*! is-typed-array */ './node_modules/is-typed-array/index.js'
            );

            module.exports = function whichTypedArray(value) {
              if (!isTypedArray(value)) {
                return false;
              }

              if (!hasToStringTag) {
                return $slice($toString(value), 8, -1);
              }

              return tryTypedArrays(value);
            };

            /***/
          },

        /******/
      }; // The module cache
      /************************************************************************/
      /******/ /******/ var __webpack_module_cache__ = {}; // The require function
      /******/
      /******/ /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
          /******/ return cachedModule.exports;
          /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
          /******/ id: moduleId,
          /******/ loaded: false,
          /******/ exports: {},
          /******/
        }); // Execute the module function
        /******/
        /******/ /******/ __webpack_modules__[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        ); // Flag the module as loaded
        /******/
        /******/ /******/ module.loaded = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
      } /* webpack/runtime/compat get default export */
      /******/
      /************************************************************************/
      /******/ /******/ (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = (module) => {
          /******/ var getter =
            module && module.__esModule
              ? /******/ () => module['default']
              : /******/ () => module;
          /******/ __webpack_require__.d(getter, { a: getter });
          /******/ return getter;
          /******/
        };
        /******/
      })(); /* webpack/runtime/define property getters */
      /******/
      /******/ /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
          /******/ for (var key in definition) {
            /******/ if (
              __webpack_require__.o(definition, key) &&
              !__webpack_require__.o(exports, key)
            ) {
              /******/ Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key],
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })(); /* webpack/runtime/global */
      /******/
      /******/ /******/ (() => {
        /******/ __webpack_require__.g = (function () {
          /******/ if (typeof globalThis === 'object') return globalThis;
          /******/ try {
            /******/ return this || new Function('return this')();
            /******/
          } catch (e) {
            /******/ if (typeof window === 'object') return window;
            /******/
          }
          /******/
        })();
        /******/
      })(); /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      /******/ /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) =>
          Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
      })(); /* webpack/runtime/make namespace object */
      /******/
      /******/ /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
          /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module',
            });
            /******/
          }
          /******/ Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          /******/
        };
        /******/
      })(); /* webpack/runtime/node module decorator */
      /******/
      /******/ /******/ (() => {
        /******/ __webpack_require__.nmd = (module) => {
          /******/ module.paths = [];
          /******/ if (!module.children) module.children = [];
          /******/ return module;
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be in strict mode.
      (() => {
        'use strict';
        /*!***************************!*\
  !*** ./dist/esm/index.js ***!
  \***************************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ImgurClient: () =>
            /* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_0__.ImgurClient,
          /* harmony export */
        });
        /* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./client */ './dist/esm/client.js'
        );
      })();

      __webpack_exports__ = __webpack_exports__.default;
      /******/ return __webpack_exports__;
      /******/
    })();
  }
);
//# sourceMappingURL=index.js.map
