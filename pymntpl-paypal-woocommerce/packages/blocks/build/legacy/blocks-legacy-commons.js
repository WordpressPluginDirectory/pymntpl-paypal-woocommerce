(self["webpackChunkwcPPCP"] = self["webpackChunkwcPPCP"] || []).push([["blocks-legacy-commons"],{

/***/ "./packages/blocks/assets/js/components/CVVIcon.js":
/*!*********************************************************!*\
  !*** ./packages/blocks/assets/js/components/CVVIcon.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CvvIcon)
/* harmony export */ });
function CvvIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "card-cvc-icon",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "var(--colorIconCardCvc)",
    role: "img"
  }, /*#__PURE__*/React.createElement("path", {
    opacity: ".2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.337 4A5.493 5.493 0 0013 8.5c0 1.33.472 2.55 1.257 3.5H4a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1v-.6a5.526 5.526 0 002-1.737V18a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h12.337zm6.707.293c.239.202.46.424.662.663a2.01 2.01 0 00-.662-.663z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.6 6a5.477 5.477 0 00-.578 3H1V6h12.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.5 14a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm-2.184-7.779h-.621l-1.516.77v.786l1.202-.628v3.63h.943V6.22h-.008zm1.807.629c.448 0 .762.251.762.613 0 .393-.37.668-.904.668h-.235v.668h.283c.565 0 .95.282.95.691 0 .393-.377.66-.911.66-.393 0-.786-.126-1.194-.37v.786c.44.189.88.291 1.312.291 1.029 0 1.736-.526 1.736-1.288 0-.535-.33-.967-.88-1.14.472-.157.778-.573.778-1.045 0-.738-.652-1.241-1.595-1.241a3.143 3.143 0 00-1.234.267v.77c.378-.212.763-.33 1.132-.33zm3.394 1.713c.574 0 .974.338.974.778 0 .463-.4.785-.974.785-.346 0-.707-.11-1.076-.337v.809c.385.173.778.26 1.163.26.204 0 .392-.032.573-.08a4.313 4.313 0 00.644-2.262l-.015-.33a1.807 1.807 0 00-.967-.252 3 3 0 00-.448.032V6.944h1.132a4.423 4.423 0 00-.362-.723h-1.587v2.475a3.9 3.9 0 01.943-.133z"
  }));
}

/***/ }),

/***/ "./packages/blocks/assets/js/components/PaymentMethodCard.js":
/*!*******************************************************************!*\
  !*** ./packages/blocks/assets/js/components/PaymentMethodCard.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodCard": () => (/* binding */ PaymentMethodCard)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var PaymentMethodCard = function PaymentMethodCard(_ref) {
  var label = _ref.label,
    icon = _ref.icon,
    description = _ref.description,
    onCancel = _ref.onCancel;
  return /*#__PURE__*/React.createElement("div", {
    className: 'wc-ppcp-components-payment-card__container'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'wc-ppcp-components-payment-card__card'
  }, /*#__PURE__*/React.createElement("img", {
    className: 'wc-ppcp-components-payment-card__icon',
    alt: icon.alt,
    src: icon.src
  }), /*#__PURE__*/React.createElement("div", {
    className: 'wc-ppcp-components-payment-card__description'
  }, /*#__PURE__*/React.createElement("span", null, description))), /*#__PURE__*/React.createElement("div", {
    className: 'wc-ppcp-components-payment-card-cancel__container'
  }, /*#__PURE__*/React.createElement("span", _defineProperty({
    className: 'wc-ppcp-components-payment-card-cancel__label',
    onClick: onCancel
  }, "onClick", onCancel), label)));
};

/***/ }),

/***/ "./packages/blocks/assets/js/components/PaymentMethodDescription.js":
/*!**************************************************************************!*\
  !*** ./packages/blocks/assets/js/components/PaymentMethodDescription.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaymentMethodDescription)
/* harmony export */ });
function PaymentMethodDescription(_ref) {
  var description = _ref.description;
  if (description) {
    return /*#__PURE__*/React.createElement("p", {
      className: 'wc-ppcp-payment-method__description'
    }, description);
  }
  return null;
}

/***/ }),

/***/ "./packages/blocks/assets/js/components/PaymentMethodLabel.js":
/*!********************************************************************!*\
  !*** ./packages/blocks/assets/js/components/PaymentMethodLabel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodLabel": () => (/* binding */ PaymentMethodLabel)
/* harmony export */ });
var PaymentMethodLabel = function PaymentMethodLabel(_ref) {
  var components = _ref.components,
    title = _ref.title,
    icons = _ref.icons,
    id = _ref.id;
  if (!Array.isArray(icons)) {
    icons = [icons];
  }
  var Label = components.PaymentMethodLabel,
    PaymentMethodIcons = components.PaymentMethodIcons;
  return /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-blocks-payment-method__label ".concat(id)
  }, /*#__PURE__*/React.createElement(Label, {
    text: title
  }), /*#__PURE__*/React.createElement(PaymentMethodIcons, {
    icons: icons
  }));
};

/***/ }),

/***/ "./packages/blocks/assets/js/components/fastlane-link/index.js":
/*!*********************************************************************!*\
  !*** ./packages/blocks/assets/js/components/fastlane-link/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastlaneLink": () => (/* binding */ FastlaneLink)
/* harmony export */ });
var FastlaneLink = function FastlaneLink(_ref) {
  var onClick = _ref.onClick,
    text = _ref.text,
    logo = _ref.logo;
  return /*#__PURE__*/React.createElement("div", {
    className: "fastlane-signup-link-container",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", null, text), /*#__PURE__*/React.createElement("img", {
    className: "fastlane-signup-img",
    src: logo
  }));
};

/***/ }),

/***/ "./packages/blocks/assets/js/components/fastlane-modal/index.js":
/*!**********************************************************************!*\
  !*** ./packages/blocks/assets/js/components/fastlane-modal/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastlaneModal": () => (/* binding */ FastlaneModal)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var FastlaneModal = function FastlaneModal(_ref) {
  var i18n = _ref.i18n,
    open = _ref.open,
    onClose = _ref.onClose,
    fastlane = _ref.fastlane,
    onTokenize = _ref.onTokenize,
    shippingData = _ref.shippingData;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    rendered = _useState2[0],
    setRendered = _useState2[1];
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    fastlane: fastlane,
    shippingData: shippingData
  });
  var onClick = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var paymentComponent, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              paymentComponent = currentData.current.paymentComponent;
              _context.next = 5;
              return paymentComponent.getPaymentToken();
            case 5:
              response = _context.sent;
              // call onTokenize
              onTokenize(response);

              // close modal
              onClose(true);
              setRendered(false);
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log('Error tokenizing payment method. ', _context.t0);
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentData.current = _objectSpread(_objectSpread({}, currentData.current), {}, {
      fastlane: fastlane,
      shippingData: shippingData
    });
  }, [fastlane, shippingData]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (open) {
      var _currentData$current = currentData.current,
        _fastlane = _currentData$current.fastlane,
        _shippingData = _currentData$current.shippingData;
      var needsShipping = _shippingData.needsShipping,
        shippingAddress = _shippingData.shippingAddress;
      var props = _objectSpread({}, needsShipping && {
        shippingAddress: {
          firstName: shippingAddress.first_name || '',
          lastName: shippingAddress.last_name || '',
          streetAddress: shippingAddress.address_1 || '',
          extendedAddress: shippingAddress.address_2 || '',
          locality: shippingAddress.city || '',
          region: shippingAddress.state || '',
          postalCode: shippingAddress.postcode || '',
          countryCodeAlpha2: shippingAddress.country || '',
          phoneNumber: shippingAddress.phone || ''
        }
      });
      _fastlane.FastlanePaymentComponent(props).then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(instance) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  currentData.current.paymentComponent = instance;
                  _context2.next = 3;
                  return instance.render('.wc-ppcp-fastlane-modal-body');
                case 3:
                  document.body.classList.add('fastlane-modal-open');
                  setTimeout(function () {
                    setRendered(true);
                  }, 250);
                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    } else {
      document.body.classList.remove('fastlane-modal-open');
    }
    return function () {
      return document.body.classList.remove('fastlane-modal-open');
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wc-ppcp-fastlane-overlay', {
      'active': rendered
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-fastlane-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-fastlane-modal-body"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-fastlane-modal-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    className: "wc-ppcp-fastlane-tokenize",
    onClick: onClick
  }, i18n.continue), /*#__PURE__*/React.createElement("a", {
    className: "wc-ppcp-fastlane-cancel",
    onClick: function onClick() {
      setRendered(false);
      onClose();
    }
  }, i18n.cancel))));
};

/***/ }),

/***/ "./packages/blocks/assets/js/components/index.js":
/*!*******************************************************!*\
  !*** ./packages/blocks/assets/js/components/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CvvIcon": () => (/* reexport safe */ _CVVIcon__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "FastlaneLink": () => (/* reexport safe */ _fastlane_link__WEBPACK_IMPORTED_MODULE_3__.FastlaneLink),
/* harmony export */   "FastlaneModal": () => (/* reexport safe */ _fastlane_modal__WEBPACK_IMPORTED_MODULE_4__.FastlaneModal),
/* harmony export */   "PaymentMethodCard": () => (/* reexport safe */ _PaymentMethodCard__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodCard),
/* harmony export */   "PaymentMethodDescription": () => (/* reexport safe */ _PaymentMethodDescription__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "PaymentMethodLabel": () => (/* reexport safe */ _PaymentMethodLabel__WEBPACK_IMPORTED_MODULE_1__.PaymentMethodLabel)
/* harmony export */ });
/* harmony import */ var _PaymentMethodCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentMethodCard */ "./packages/blocks/assets/js/components/PaymentMethodCard.js");
/* harmony import */ var _PaymentMethodLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentMethodLabel */ "./packages/blocks/assets/js/components/PaymentMethodLabel.js");
/* harmony import */ var _CVVIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CVVIcon */ "./packages/blocks/assets/js/components/CVVIcon.js");
/* harmony import */ var _fastlane_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fastlane-link */ "./packages/blocks/assets/js/components/fastlane-link/index.js");
/* harmony import */ var _fastlane_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fastlane-modal */ "./packages/blocks/assets/js/components/fastlane-modal/index.js");
/* harmony import */ var _PaymentMethodDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaymentMethodDescription */ "./packages/blocks/assets/js/components/PaymentMethodDescription.js");







/***/ }),

/***/ "./packages/blocks/assets/js/legacy/hooks/index.js":
/*!*********************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/hooks/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBreakpointWidth": () => (/* reexport safe */ _use_breakpoint_width__WEBPACK_IMPORTED_MODULE_4__.useBreakpointWidth),
/* harmony export */   "useLoadPayPalScript": () => (/* reexport safe */ _use_load_paypal_script__WEBPACK_IMPORTED_MODULE_0__.useLoadPayPalScript),
/* harmony export */   "usePaymentMethodNotices": () => (/* reexport safe */ _use_payment_method_notices__WEBPACK_IMPORTED_MODULE_2__.usePaymentMethodNotices),
/* harmony export */   "useProcessPaymentFailure": () => (/* reexport safe */ _use_process_payment_failure__WEBPACK_IMPORTED_MODULE_3__.useProcessPaymentFailure),
/* harmony export */   "useShippingEventHandlers": () => (/* reexport safe */ _use_shipping_event_handlers__WEBPACK_IMPORTED_MODULE_1__.useShippingEventHandlers)
/* harmony export */ });
/* harmony import */ var _use_load_paypal_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-load-paypal-script */ "./packages/blocks/assets/js/legacy/hooks/use-load-paypal-script.js");
/* harmony import */ var _use_shipping_event_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-shipping-event-handlers */ "./packages/blocks/assets/js/legacy/hooks/use-shipping-event-handlers.js");
/* harmony import */ var _use_payment_method_notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-payment-method-notices */ "./packages/blocks/assets/js/legacy/hooks/use-payment-method-notices.js");
/* harmony import */ var _use_process_payment_failure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-process-payment-failure */ "./packages/blocks/assets/js/legacy/hooks/use-process-payment-failure.js");
/* harmony import */ var _use_breakpoint_width__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-breakpoint-width */ "./packages/blocks/assets/js/legacy/hooks/use-breakpoint-width.js");






/***/ }),

/***/ "./packages/blocks/assets/js/legacy/hooks/use-breakpoint-width.js":
/*!************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/hooks/use-breakpoint-width.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBreakpointWidth": () => (/* binding */ useBreakpointWidth)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useBreakpointWidth = function useBreakpointWidth(_ref) {
  var width = _ref.width,
    node = _ref.node,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? 'wc-ppcp-sm__container' : _ref$className;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),
    _useState2 = _slicedToArray(_useState, 2),
    windowWidth = _useState2[0],
    setWindowWidth = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(node),
    _useState4 = _slicedToArray(_useState3, 2),
    element = _useState4[0],
    setElement = _useState4[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setElement(node);
  }, [node]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleResize = function handleResize() {
      return setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (element) {
      if (element.clientWidth <= width) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }
  }, [windowWidth, width, element]);
};

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/hooks/use-load-paypal-script.js":
/*!**************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/hooks/use-load-paypal-script.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLoadPayPalScript": () => (/* binding */ useLoadPayPalScript)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ppcp/utils */ "@ppcp/utils");
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/*
'client-id': this.getClientId(),
'components': this.settings?.components,
'currency': this.getOption('currency'),
'intent': this.getOption('intent'),
'vault': this.getOption('vault')
 */

/**
 *
 * @param params - client-id, components, currency, intent, vault
 * @returns {*}
 */
var useLoadPayPalScript = function useLoadPayPalScript(params) {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    paypal = _useState2[0],
    setPayPal = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!paypal) {
      (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.loadPayPalSdk)(params).then(function (paypal) {
        return setPayPal(paypal);
      });
    }
  }, [paypal]);
  return paypal;
};

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/hooks/use-payment-method-notices.js":
/*!******************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/hooks/use-payment-method-notices.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePaymentMethodNotices": () => (/* binding */ usePaymentMethodNotices)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var usePaymentMethodNotices = function usePaymentMethodNotices() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    notices = _useState2[0],
    setNotices = _useState2[1];
  var addNotice = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message, options, type) {
    setNotices(function (prevNotices) {
      var _options$isDismissabl = options.isDismissable,
        isDismissable = _options$isDismissabl === void 0 ? true : _options$isDismissabl;
      var notice = {
        message: message,
        options: options,
        type: type
      };
      return [].concat(_toConsumableArray(prevNotices), [notice]);
    });
  }, []);
  var addErrorNotice = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addNotice(message, options, 'error');
  }, [addNotice]);
  var addSuccessNotice = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addNotice(message, options, 'success');
  }, [addNotice]);
  var addInfoNotice = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    addNotice(message, options, 'info');
  }, [addNotice]);
  return {
    addErrorNotice: addErrorNotice,
    addSuccessNotice: addSuccessNotice,
    addInfoNotice: addInfoNotice
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/hooks/use-process-payment-failure.js":
/*!*******************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/hooks/use-process-payment-failure.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useProcessPaymentFailure": () => (/* binding */ useProcessPaymentFailure)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var useProcessPaymentFailure = function useProcessPaymentFailure(_ref) {
  var event = _ref.event,
    responseTypes = _ref.responseTypes,
    _ref$messageContext = _ref.messageContext,
    messageContext = _ref$messageContext === void 0 ? null : _ref$messageContext,
    setPaymentData = _ref.setPaymentData;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var unsubscribe = event(function (data) {
      var _data$processingRespo, _data$processingRespo2;
      if (data !== null && data !== void 0 && (_data$processingRespo = data.processingResponse) !== null && _data$processingRespo !== void 0 && (_data$processingRespo2 = _data$processingRespo.paymentDetails) !== null && _data$processingRespo2 !== void 0 && _data$processingRespo2.ppcpErrorMessage) {
        setPaymentData(null);
        var message = data.processingResponse.paymentDetails.ppcpErrorMessage;
        return {
          type: responseTypes.ERROR,
          retry: true,
          message: message,
          messageContext: messageContext
        };
      }
      return null;
    });
    return function () {
      unsubscribe();
    };
  }, [event]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProcessPaymentFailure);

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/hooks/use-shipping-event-handlers.js":
/*!*******************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/hooks/use-shipping-event-handlers.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useShippingEventHandlers": () => (/* binding */ useShippingEventHandlers)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./packages/blocks/assets/js/utils.js");


var useShippingEventHandlers = function useShippingEventHandlers(_ref) {
  var billing = _ref.billing,
    shippingData = _ref.shippingData,
    eventRegistration = _ref.eventRegistration;
  var onShippingRateSuccess = eventRegistration.onShippingRateSuccess,
    onShippingRateFail = eventRegistration.onShippingRateFail,
    onShippingRateSelectSuccess = eventRegistration.onShippingRateSelectSuccess;
  var currentShippingData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(shippingData);
  var currentBillingData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(billing);
  var callbacks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var onShippingChangeEventHandler = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (callback) {
    callbacks.current.push(callback);
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentShippingData.current = shippingData;
    currentBillingData.current = billing;
  });
  var handleShippingChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _currentShippingData$ = currentShippingData.current,
      isSelectingRate = _currentShippingData$.isSelectingRate,
      shippingRatesLoading = _currentShippingData$.shippingRatesLoading,
      shippingRates = _currentShippingData$.shippingRates;
    if (!isSelectingRate && !shippingRatesLoading) {
      while (callbacks.current.length) {
        var callback = callbacks.current.pop();
        callback({
          success: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hasShippingOptions)(shippingRates),
          data: {
            billing: currentBillingData.current,
            shippingData: currentShippingData.current
          }
        });
      }
    }
  }, []);
  var handleShippingFail = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    while (callbacks.current.length) {
      var callback = callbacks.current.pop();
      callback({
        success: false,
        data: {
          billing: currentBillingData.current,
          shippingData: currentShippingData.current
        }
      });
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var unsubscribeShippingRateSuccess = onShippingRateSuccess(handleShippingChange);
    var unsubscribeShippingRateSelectSuccess = onShippingRateSelectSuccess(handleShippingChange);
    var unsubscribeShippingRateFail = onShippingRateFail(handleShippingFail);
    return function () {
      unsubscribeShippingRateSuccess();
      unsubscribeShippingRateSelectSuccess();
      unsubscribeShippingRateFail();
    };
  }, [onShippingRateSuccess, onShippingRateFail, onShippingRateSelectSuccess, handleShippingChange, handleShippingFail]);
  return {
    onShippingChangeEventHandler: onShippingChangeEventHandler
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/index.js":
/*!********************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePayPalFundingSources": () => (/* reexport safe */ _use_paypal_funding_sources__WEBPACK_IMPORTED_MODULE_1__.usePayPalFundingSources),
/* harmony export */   "usePayPalOptions": () => (/* reexport safe */ _use_paypal_options__WEBPACK_IMPORTED_MODULE_0__.usePayPalOptions),
/* harmony export */   "useProcessPayment": () => (/* reexport safe */ _use_process_payment__WEBPACK_IMPORTED_MODULE_2__.useProcessPayment),
/* harmony export */   "useValidateCheckout": () => (/* reexport safe */ _use_validate_checkout__WEBPACK_IMPORTED_MODULE_3__.useValidateCheckout)
/* harmony export */ });
/* harmony import */ var _use_paypal_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-paypal-options */ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-paypal-options.js");
/* harmony import */ var _use_paypal_funding_sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-paypal-funding-sources */ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-paypal-funding-sources.js");
/* harmony import */ var _use_process_payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-process-payment */ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-process-payment.js");
/* harmony import */ var _use_validate_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-validate-checkout */ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-validate-checkout.js");





/***/ }),

/***/ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-paypal-funding-sources.js":
/*!*****************************************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-paypal-funding-sources.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePayPalFundingSources": () => (/* binding */ usePayPalFundingSources)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var usePayPalFundingSources = function usePayPalFundingSources(_ref) {
  var data = _ref.data,
    paypal = _ref.paypal,
    context = _ref.context,
    _ref$vault = _ref.vault,
    vault = _ref$vault === void 0 ? false : _ref$vault;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    sources = _useState2[0],
    setSources = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (paypal) {
      var _sources = [];
      var buttonOrder = data('buttonOrder', []);
      if (context === 'express_checkout') {
        if (data('paypalSections', []).includes(context)) {
          _sources.push(paypal.FUNDING.PAYPAL);
        }
      } else {
        _sources.push(paypal.FUNDING.PAYPAL);
      }
      if (data('payLaterEnabled') && data('payLaterSections', []).includes(context)) {
        if (vault) {
          _sources.push(paypal.FUNDING.CREDIT);
        } else {
          _sources.push(paypal.FUNDING.PAYLATER);
        }
      }
      if (data('cardEnabled') && data('creditCardSections', []).includes(context)) {
        _sources.push(paypal.FUNDING.CARD);
      }
      if (data('venmoEnabled') && data('venmoSections', []).includes(context)) {
        _sources.push(paypal.FUNDING.VENMO);
      }
      _sources.sort(function (a, b) {
        return buttonOrder.indexOf(a) < buttonOrder.indexOf(b) ? -1 : 1;
      });
      setSources([].concat(_sources));
    }
  }, [paypal]);
  return sources;
};

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-paypal-options.js":
/*!*********************************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-paypal-options.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePayPalOptions": () => (/* binding */ usePayPalOptions)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ppcp/utils */ "@ppcp/utils");
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ppcp_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./packages/blocks/assets/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var usePayPalOptions = function usePayPalOptions(_ref) {
  var isExpress = _ref.isExpress,
    paypal = _ref.paypal,
    vault = _ref.vault,
    buttonStyles = _ref.buttonStyles,
    shippingData = _ref.shippingData,
    billing = _ref.billing,
    setError = _ref.setError,
    setPaymentData = _ref.setPaymentData,
    onClick = _ref.onClick,
    onClose = _ref.onClose;
  var currentShippingData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(shippingData);
  var currentBilling = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(billing);
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    onClick: onClick,
    onClose: onClose,
    buttonState: true,
    actions: {},
    error: null
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentShippingData.current = shippingData;
    currentBilling.current = billing;
    currentData.current = _objectSpread(_objectSpread({}, currentData.current), {}, {
      onClick: onClick,
      onClose: onClose
    });
  });
  var disableButtons = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    Object.keys(currentData.current.actions).forEach(function (key) {
      currentData.current.actions[key].disable();
      currentData.current.buttonState = false;
    });
  }, []);
  var getOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (fundingSource) {
    var _currentShippingData$ = currentShippingData.current,
      needsShipping = _currentShippingData$.needsShipping,
      shippingAddress = _currentShippingData$.shippingAddress;
    var billingAddress = billing.billingData;
    var options = {
      fundingSource: fundingSource,
      style: getButtonStyle(fundingSource),
      onApprove: onApprove,
      onError: onError
    };
    if (isExpress) {
      options.onClick = function () {
        return currentData.current.onClick();
      };
      options.onCancel = function () {
        return currentData.current.onClose();
      };
    } else {
      options.onClick = function () {
        // if address is not valid, show a notification that address data must be filled out first
        if (!isExpress && !currentData.current.buttonState) {
          if (needsShipping) {
            setError(_utils__WEBPACK_IMPORTED_MODULE_3__.i18n.order_missing_address);
          } else {
            setError(_utils__WEBPACK_IMPORTED_MODULE_3__.i18n.order_missing_billing_address);
          }
        }
      };
    }
    options.onInit = function (data, actions) {
      if (!isExpress) {
        currentData.current.actions[fundingSource] = actions;
      }
    };
    if (isCheckoutFlow()) {
      options.createOrder = createOrder;
      if (isExpress && needsShipping && fundingSource !== 'venmo') {
        options.onShippingChange = onShippingChange;
      }
    } else {
      options.createBillingAgreement = createBillingAgreement;
    }
    return options;
  }, [paypal, isExpress, onApprove, onError, createOrder, createBillingAgreement, onShippingChange, setError]);
  var getButtonStyle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (fundingSource) {
    var styles = {};
    switch (fundingSource) {
      case paypal.FUNDING.PAYPAL:
        styles = buttonStyles.paypal;
        break;
      case paypal.FUNDING.PAYLATER:
        styles = buttonStyles.paylater;
        break;
      case paypal.FUNDING.CREDIT:
        var colors = ['black', 'white'];
        var color = colors.includes(buttonStyles.paylater.color) ? buttonStyles.paylater.color : 'darkblue';
        styles = _objectSpread(_objectSpread({}, buttonStyles.paylater), {}, {
          color: color
        });
        break;
      case paypal.FUNDING.CARD:
        styles = buttonStyles.card;
        if (styles.tagline) {
          delete styles.tagline;
          styles.layout = 'vertical';
        } else {
          styles.layout = 'horizontal';
          delete styles.tagline;
        }
        break;
      case paypal.FUNDING.VENMO:
        styles = buttonStyles.venmo;
        break;
    }
    return styles;
  }, [paypal, buttonStyles]);
  var isCheckoutFlow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return !vault;
  }, [vault]);
  var handleBillingToken = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(billingToken) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              return _context.abrupt("return", _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
                method: 'GET',
                path: "/wc-ppcp/v1/billing-agreement/token/".concat(billingToken)
              }));
            case 4:
              _context.prev = 4;
              _context.t0 = _context["catch"](0);
              throw _context.t0;
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 4]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  var onApprove = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, actions) {
      var paymentData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              paymentData = {
                order: {},
                orderId: data.orderID,
                billingToken: data.billingToken || '',
                billingTokenData: null
              };
              if (!data.billingToken) {
                _context2.next = 14;
                break;
              }
              _context2.prev = 2;
              _context2.next = 5;
              return handleBillingToken(data.billingToken);
            case 5:
              paymentData.billingTokenData = _context2.sent;
              setPaymentData(paymentData);
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              setError(_context2.t0);
            case 12:
              _context2.next = 15;
              break;
            case 14:
              actions.order.get().then(function (response) {
                setPaymentData(_objectSpread(_objectSpread({}, paymentData), {}, {
                  order: response
                }));
              }).catch(function (error) {
                setError(error);
              });
            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9]]);
    }));
    return function (_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }(), [setError, handleBillingToken]);
  var onShippingChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data, actions) {
    var _data$selected_shippi;
    var shippingData = currentShippingData.current;
    var setSelectedRates = shippingData.setSelectedRates;
    var intermediateAddress = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_2__.convertPayPalAddressToCart)((data === null || data === void 0 ? void 0 : data.shipping_address) || {}, true);
    var selectedShippingOption = (data === null || data === void 0 ? void 0 : (_data$selected_shippi = data.selected_shipping_option) === null || _data$selected_shippi === void 0 ? void 0 : _data$selected_shippi.id) || '';
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'POST',
      url: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRestPath)('wc-ppcp/v1/cart/shipping'),
      data: {
        order_id: data.orderID,
        address: intermediateAddress,
        shipping_method: (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_2__.extractShippingMethod)(selectedShippingOption),
        payment_method: 'ppcp'
      }
    }).then(function (response) {
      if (response.code) {
        return actions.reject();
      } else {
        return actions.resolve();
      }
    }).catch(function (error) {
      return actions.reject();
    }).finally(function () {
      if (selectedShippingOption) {
        setSelectedRates.apply(void 0, _toConsumableArray((0,_utils__WEBPACK_IMPORTED_MODULE_3__.extractShippingRateParams)(selectedShippingOption)));
      }
    });
  }, []);
  var onError = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (error) {
    var _error$message;
    if ((error === null || error === void 0 ? void 0 : (_error$message = error.message) === null || _error$message === void 0 ? void 0 : _error$message.indexOf('Window is closed')) > -1) {
      return;
    }
    if (currentData.current.error) {
      var _currentData$current$;
      if (((_currentData$current$ = currentData.current.error) === null || _currentData$current$ === void 0 ? void 0 : _currentData$current$.code) === 'validation_errors') {
        return setError(currentData.current.error.data.errors[0]);
      } else {
        return setError(currentData.current.error.message);
      }
    }
    if ((error === null || error === void 0 ? void 0 : error.code) === 'validation_errors') {
      setError(error.data.errors[0]);
    } else {
      setError(error);
    }
  }, [setError]);
  var createOrder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, actions) {
      var _currentShippingData$2, needsShipping, shippingAddress, _currentBilling$curre, billingAddress, email, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _currentShippingData$2 = currentShippingData.current, needsShipping = _currentShippingData$2.needsShipping, shippingAddress = _currentShippingData$2.shippingAddress;
              _currentBilling$curre = currentBilling.current, billingAddress = _currentBilling$curre.billingAddress, email = _currentBilling$curre.email;
              _context3.prev = 2;
              _context3.next = 5;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
                method: 'POST',
                url: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRestPath)('wc-ppcp/v1/cart/order'),
                data: _objectSpread(_objectSpread({
                  payment_method: 'ppcp',
                  address_provided: !isExpress && needsShipping,
                  checkout_blocks: true,
                  context: !isExpress ? 'checkout' : 'express'
                }, needsShipping ? {
                  shipping_first_name: shippingAddress.first_name,
                  shipping_last_name: shippingAddress.last_name,
                  shipping_address_1: shippingAddress.address_1,
                  shipping_address_2: shippingAddress.address_2,
                  shipping_postcode: shippingAddress.postcode,
                  shipping_city: shippingAddress.city,
                  shipping_state: shippingAddress.state,
                  shipping_country: shippingAddress.country
                } : null), {
                  billing_first_name: billingAddress.first_name,
                  billing_last_name: billingAddress.last_name,
                  billing_address_1: billingAddress.address_1,
                  billing_address_2: billingAddress.address_2,
                  billing_postcode: billingAddress.postcode,
                  billing_city: billingAddress.city,
                  billing_state: billingAddress.state,
                  billing_country: billingAddress.country,
                  billing_email: billingAddress.email,
                  billing_phone: billingAddress.phone,
                  billing_company: billingAddress.company
                })
              });
            case 5:
              response = _context3.sent;
              return _context3.abrupt("return", response);
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](2);
              throw _context3.t0;
            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 9]]);
    }));
    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }(), []);
  var createBillingAgreement = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data, actions) {
    var _currentShippingData$3 = currentShippingData.current,
      needsShipping = _currentShippingData$3.needsShipping,
      shippingAddress = _currentShippingData$3.shippingAddress;
    var _currentBilling$curre2 = currentBilling.current,
      billingAddress = _currentBilling$curre2.billingAddress,
      email = _currentBilling$curre2.email;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'POST',
      url: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRestPath)('/wc-ppcp/v1/billing-agreement/token'),
      data: _objectSpread(_objectSpread({
        context: !isExpress ? 'checkout' : null,
        payment_method: 'ppcp'
      }, needsShipping ? {
        shipping_first_name: shippingAddress.first_name,
        shipping_last_name: shippingAddress.last_name,
        shipping_address_1: shippingAddress.address_1,
        shipping_address_2: shippingAddress.address_2,
        shipping_postcode: shippingAddress.postcode,
        shipping_city: shippingAddress.city,
        shipping_state: shippingAddress.state,
        shipping_country: shippingAddress.country
      } : null), {
        billing_first_name: billingAddress.first_name,
        billing_last_name: billingAddress.last_name,
        billing_address_1: billingAddress.address_1,
        billing_address_2: billingAddress.address_2,
        billing_postcode: billingAddress.postcode,
        billing_city: billingAddress.city,
        billing_state: billingAddress.state,
        billing_country: billingAddress.country,
        billing_email: billingAddress.email,
        billing_phone: billingAddress.phone,
        billing_company: billingAddress.company
      })
    }).then(function (token) {
      return token;
    }).catch(function (error) {
      currentData.current.error = error;
    });
  }, [isExpress, setError]);
  return {
    getOptions: getOptions
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-process-payment.js":
/*!**********************************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-process-payment.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProcessPayment": () => (/* binding */ useProcessPayment)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ppcp/utils */ "@ppcp/utils");
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./packages/blocks/assets/js/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useProcessPayment = function useProcessPayment(_ref) {
  var isExpress = _ref.isExpress,
    onSubmit = _ref.onSubmit,
    billingAddress = _ref.billingAddress,
    shippingData = _ref.shippingData,
    onPaymentSetup = _ref.onPaymentSetup,
    responseTypes = _ref.responseTypes,
    activePaymentMethod = _ref.activePaymentMethod,
    paymentMethodId = _ref.paymentMethodId;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    paymentData = _useState2[0],
    updatePaymentData = _useState2[1];
  var currentPaymentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var currentBillingAddress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var currentShippingData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setPaymentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    var submit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (value === null || value === '') {
      updatePaymentData(null);
    } else {
      updatePaymentData(_objectSpread(_objectSpread({}, value), {}, {
        submit: submit
      }));
    }
  }, []);
  var clearPaymentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    updatePaymentData(null);
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentPaymentData.current = paymentData;
    currentBillingAddress.current = billingAddress;
    currentShippingData.current = shippingData;
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(paymentData) && paymentData.submit) {
      onSubmit();
    }
  }, [paymentData, onSubmit]);
  var convertOrderDataToAddress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (order) {
    var _order$payer, _order$payer$address, _order$purchase_units, _order$purchase_units2, _order$payer2, _order$payer3, _order$payer4, _order$payer4$phone, _order$payer4$phone$p;
    var needsShipping = currentShippingData.current.needsShipping;
    var address = {};
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(order === null || order === void 0 ? void 0 : (_order$payer = order.payer) === null || _order$payer === void 0 ? void 0 : (_order$payer$address = _order$payer.address) === null || _order$payer$address === void 0 ? void 0 : _order$payer$address.address_line_1)) {
      address = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.convertPayPalAddressToCart)(order.payer.address);
    } else if (needsShipping && !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(order === null || order === void 0 ? void 0 : (_order$purchase_units = order.purchase_units) === null || _order$purchase_units === void 0 ? void 0 : (_order$purchase_units2 = _order$purchase_units[0]) === null || _order$purchase_units2 === void 0 ? void 0 : _order$purchase_units2.shipping)) {
      var shipping = order.purchase_units[0].shipping;
      address = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.convertPayPalAddressToCart)(shipping.address);
    }
    if (order !== null && order !== void 0 && (_order$payer2 = order.payer) !== null && _order$payer2 !== void 0 && _order$payer2.name) {
      address = _objectSpread(_objectSpread({}, address), extractName(order.payer.name));
    }
    if (order !== null && order !== void 0 && (_order$payer3 = order.payer) !== null && _order$payer3 !== void 0 && _order$payer3.email_address && isExpress) {
      // only override email address if express checkout is being used
      address = _objectSpread(_objectSpread({}, address), {}, {
        email: order.payer.email_address
      });
    }
    if (order !== null && order !== void 0 && (_order$payer4 = order.payer) !== null && _order$payer4 !== void 0 && (_order$payer4$phone = _order$payer4.phone) !== null && _order$payer4$phone !== void 0 && (_order$payer4$phone$p = _order$payer4$phone.phone_number) !== null && _order$payer4$phone$p !== void 0 && _order$payer4$phone$p.national_number) {
      address = _objectSpread(_objectSpread({}, address), {}, {
        phone: order.payer.phone.phone_number.national_number
      });
    }
    return address;
  }, []);
  var convertBillingTokenToAddress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    var _data$payer_info2, _data$payer_info3, _data$payer_info4, _data$payer_info5;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'billing';
    var address = {};
    var needsShipping = currentShippingData.current.needsShipping;
    if (type === 'billing') {
      var _data$payer_info;
      if (data !== null && data !== void 0 && (_data$payer_info = data.payer_info) !== null && _data$payer_info !== void 0 && _data$payer_info.billing_address) {
        address = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.convertPayPalAddressToCart)(data.payer_info.billing_address);
      }
    } else {
      if (needsShipping && data.shipping_address) {
        address = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.convertPayPalAddressToCart)(data.shipping_address);
      }
    }
    if (data !== null && data !== void 0 && (_data$payer_info2 = data.payer_info) !== null && _data$payer_info2 !== void 0 && _data$payer_info2.first_name) {
      address = _objectSpread(_objectSpread({}, address), {}, {
        first_name: data.payer_info.first_name
      });
    }
    if (data !== null && data !== void 0 && (_data$payer_info3 = data.payer_info) !== null && _data$payer_info3 !== void 0 && _data$payer_info3.last_name) {
      address = _objectSpread(_objectSpread({}, address), {}, {
        last_name: data.payer_info.last_name
      });
    }
    if (data !== null && data !== void 0 && (_data$payer_info4 = data.payer_info) !== null && _data$payer_info4 !== void 0 && _data$payer_info4.email && isExpress) {
      address = _objectSpread(_objectSpread({}, address), {}, {
        email: data.payer_info.email
      });
    }
    if (data !== null && data !== void 0 && (_data$payer_info5 = data.payer_info) !== null && _data$payer_info5 !== void 0 && _data$payer_info5.phone) {
      address = _objectSpread(_objectSpread({}, address), {}, {
        phone: data.payer_info.phone
      });
    }
    return address;
  }, []);
  var extractName = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    var first_name, last_name;
    if (Array.isArray(name)) {
      var _name = _slicedToArray(name, 2);
      first_name = _name[0];
      last_name = _name[1];
    } else {
      first_name = name.given_name;
      last_name = name.surname;
    }
    return {
      first_name: first_name,
      last_name: last_name
    };
  }, []);
  var convertShippingAddress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (order) {
    var _order$purchase_units3, _order$purchase_units4;
    var address = {};
    if (order !== null && order !== void 0 && (_order$purchase_units3 = order.purchase_units) !== null && _order$purchase_units3 !== void 0 && (_order$purchase_units4 = _order$purchase_units3[0]) !== null && _order$purchase_units4 !== void 0 && _order$purchase_units4.shipping) {
      var _shipping$name;
      var shipping = order.purchase_units[0].shipping;
      address = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.convertPayPalAddressToCart)(shipping.address);
      if (shipping !== null && shipping !== void 0 && (_shipping$name = shipping.name) !== null && _shipping$name !== void 0 && _shipping$name.full_name) {
        var name = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.extractFullName)(shipping.name.full_name);
        address = _objectSpread(_objectSpread({}, address), extractName(name));
      }
    }
    return address;
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (activePaymentMethod === paymentMethodId) {
      var unsubscribe = onPaymentSetup(function () {
        var billingAddress = currentBillingAddress.current;
        var shippingData = currentShippingData.current;
        var shippingAddress = shippingData.shippingAddress,
          needsShipping = shippingData.needsShipping;
        var _currentPaymentData$c = currentPaymentData.current,
          orderId = _currentPaymentData$c.orderId,
          billingToken = _currentPaymentData$c.billingToken,
          _currentPaymentData$c2 = _currentPaymentData$c.billingTokenData,
          billingTokenData = _currentPaymentData$c2 === void 0 ? null : _currentPaymentData$c2,
          _currentPaymentData$c3 = _currentPaymentData$c.order,
          order = _currentPaymentData$c3 === void 0 ? {} : _currentPaymentData$c3;
        var response = {
          meta: _objectSpread({
            paymentMethodData: {
              ppcp_paypal_order_id: orderId,
              ppcp_billing_token: billingToken
            }
          }, isExpress && {
            billingAddress: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_BILLING_ADDRESS), billingAddress), convertOrderDataToAddress(order)), billingTokenData && convertBillingTokenToAddress(billingTokenData))
          })
        };
        if (needsShipping && isExpress) {
          response.meta.shippingAddress = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_SHIPPING_ADDRESS), shippingAddress), convertShippingAddress(order)), billingTokenData && convertBillingTokenToAddress(billingTokenData, 'shipping'));
        }
        return _objectSpread({
          type: responseTypes.SUCCESS
        }, response);
      });
      return function () {
        return unsubscribe();
      };
    }
  }, [isExpress, onPaymentSetup, activePaymentMethod]);
  return {
    paymentData: paymentData,
    setPaymentData: setPaymentData,
    clearPaymentData: clearPaymentData
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-validate-checkout.js":
/*!************************************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/use-validate-checkout.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useValidateCheckout": () => (/* binding */ useValidateCheckout)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./packages/blocks/assets/js/utils.js");


var useValidateCheckout = function useValidateCheckout(_ref) {
  var isExpress = _ref.isExpress,
    paymentData = _ref.paymentData,
    onCheckoutValidation = _ref.onCheckoutValidation;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isExpress) {
      var unsubscribe = onCheckoutValidation(function () {
        // validate that the order has been created.
        if (!(paymentData !== null && paymentData !== void 0 && paymentData.orderId)) {
          return {
            type: 'failure',
            errorMessage: _utils__WEBPACK_IMPORTED_MODULE_1__.i18n.order_button_click
          };
        }
        return true;
      });
      return unsubscribe;
    }
  }, [isExpress, paymentData]);
};

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/payment-methods/paypal/index.js":
/*!**************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/payment-methods/paypal/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _simple_paypal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-paypal */ "./packages/blocks/assets/js/legacy/payment-methods/paypal/simple-paypal.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./packages/blocks/assets/js/legacy/hooks/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./packages/blocks/assets/js/legacy/payment-methods/paypal/hooks/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components */ "./packages/blocks/assets/js/components/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./packages/blocks/assets/js/legacy/payment-methods/paypal/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils */ "./packages/blocks/assets/js/utils.js");
var _excluded = ["context"],
  _excluded2 = ["isExpress", "context", "billing", "shippingData", "eventRegistration", "emitResponse", "onError", "onClick", "onClose", "onSubmit", "activePaymentMethod", "paymentMethodId"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var getData = function getData(key) {
  var data = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)(key);
  return function (key) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!data.hasOwnProperty(key)) {
      data[key] = defaultValue;
    }
    return data[key];
  };
};
var data = getData('ppcp_data');
var generalData = getData('ppcpGeneralData');
var isExpressEnabled = function isExpressEnabled() {
  var sections = ['paypalSections', 'payLaterSections', 'creditCardSections', 'venmoSections'];
  for (var _i = 0, _sections = sections; _i < _sections.length; _i++) {
    var section = _sections[_i];
    if (data(section, []).includes('express_checkout')) {
      return true;
    }
  }
  return false;
};
var isCartEnabled = function isCartEnabled() {
  return data('paypalSections').includes('cart');
};
var ExpressPaymentMethod = function ExpressPaymentMethod(_ref) {
  var _ref$context = _ref.context,
    context = _ref$context === void 0 ? 'express_checkout' : _ref$context,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(PayPalPaymentMethod, _extends({
    context: context,
    isExpress: true,
    paymentMethodId: "paymentplugins_ppcp_express"
  }, props));
};
var PayPalPaymentMethod = function PayPalPaymentMethod(_ref2) {
  var _ref2$isExpress = _ref2.isExpress,
    isExpress = _ref2$isExpress === void 0 ? false : _ref2$isExpress,
    context = _ref2.context,
    billing = _ref2.billing,
    shippingData = _ref2.shippingData,
    eventRegistration = _ref2.eventRegistration,
    emitResponse = _ref2.emitResponse,
    onError = _ref2.onError,
    onClick = _ref2.onClick,
    onClose = _ref2.onClose,
    onSubmit = _ref2.onSubmit,
    activePaymentMethod = _ref2.activePaymentMethod,
    paymentMethodId = _ref2.paymentMethodId,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var queryParams = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)('paypalQueryParams');
  var vault = queryParams.vault === 'true';
  var billingAddress = billing.billingAddress;
  var onPaymentSetup = eventRegistration.onPaymentSetup,
    onCheckoutFail = eventRegistration.onCheckoutFail,
    onCheckoutValidation = eventRegistration.onCheckoutValidation;
  var responseTypes = emitResponse.responseTypes,
    noticeContexts = emitResponse.noticeContexts;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    buttonsContainer = _useState2[0],
    setButtonsContainer = _useState2[1];
  var _dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/notices'),
    createErrorNotice = _dispatch.createErrorNotice;
  (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useBreakpointWidth)({
    width: 375,
    node: buttonsContainer
  });
  if (!isExpress) {
    onError = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (error) {
      createErrorNotice(error !== null && error !== void 0 && error.message ? error.message : error, {
        context: noticeContexts.PAYMENTS
      });
    }, []);
  }
  var setButtonContainerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (el) {
    var _el$parentElement;
    setButtonsContainer(el === null || el === void 0 ? void 0 : (_el$parentElement = el.parentElement) === null || _el$parentElement === void 0 ? void 0 : _el$parentElement.parentElement);
  }, []);
  var _useProcessPayment = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useProcessPayment)({
      isExpress: isExpress,
      onSubmit: onSubmit,
      billingAddress: billingAddress,
      shippingData: shippingData,
      onPaymentSetup: onPaymentSetup,
      responseTypes: responseTypes,
      activePaymentMethod: activePaymentMethod,
      paymentMethodId: paymentMethodId
    }),
    paymentData = _useProcessPayment.paymentData,
    setPaymentData = _useProcessPayment.setPaymentData,
    clearPaymentData = _useProcessPayment.clearPaymentData;
  (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useProcessPaymentFailure)({
    event: onCheckoutFail,
    responseTypes: responseTypes,
    messageContext: noticeContexts.PAYMENTS,
    setPaymentData: setPaymentData
  });
  (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.useValidateCheckout)({
    isExpress: isExpress,
    onCheckoutValidation: onCheckoutValidation,
    paymentData: paymentData
  });
  var paypal = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useLoadPayPalScript)(queryParams);
  var _usePayPalOptions = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.usePayPalOptions)({
      isExpress: isExpress,
      paypal: paypal,
      vault: vault,
      intent: queryParams.intent,
      buttonStyles: data('buttons'),
      billing: billing,
      shippingData: shippingData,
      eventRegistration: eventRegistration,
      setError: onError,
      setPaymentData: setPaymentData,
      onClick: onClick,
      onClose: onClose
    }),
    getOptions = _usePayPalOptions.getOptions;
  var sources = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__.usePayPalFundingSources)({
    data: data,
    paypal: paypal,
    context: context,
    vault: vault
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var paymentData = data('paymentData');
    if (paymentData && paymentData.order) {
      setPaymentData(paymentData, false);
    }
  }, []);
  if (!isExpress && paymentData) {
    if (paymentData.billingTokenData) {
      return /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.PaymentMethodCard, {
        description: paymentData.billingTokenData.payer_info.email,
        icon: data('icons').find(function (icon) {
          return icon.id === 'paypal_simple';
        }),
        label: _utils__WEBPACK_IMPORTED_MODULE_9__.i18n.cancel,
        onCancel: clearPaymentData
      });
    }
    return /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.PaymentMethodCard, {
      description: paymentData.order.payer.email_address,
      icon: data('icons').find(function (icon) {
        return icon.id === 'paypal_simple';
      }),
      label: _utils__WEBPACK_IMPORTED_MODULE_9__.i18n.cancel,
      onCancel: clearPaymentData
    });
  }
  if (paypal && sources) {
    var Button = paypal.Buttons.driver("react", {
      React: React,
      ReactDOM: ReactDOM
    });
    var BUTTONS = sources.map(function (source) {
      var options = getOptions(source);
      var button = paypal.Buttons(options);
      return button.isEligible() ? /*#__PURE__*/React.createElement(Button, _extends({
        key: source
      }, options)) : null;
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "wc-ppcp-paypal__buttons",
      ref: setButtonContainerRef
    }, BUTTONS);
  }
  return null;
};
var PaymentMethodLabel = function PaymentMethodLabel(_ref3) {
  var components = _ref3.components,
    title = _ref3.title,
    icons = _ref3.icons,
    id = _ref3.id;
  if (!Array.isArray(icons)) {
    icons = [icons];
  }
  var Label = components.PaymentMethodLabel,
    PaymentMethodIcons = components.PaymentMethodIcons;
  return /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-blocks-payment-method__label ".concat(id)
  }, /*#__PURE__*/React.createElement(Label, {
    text: title
  }), /*#__PURE__*/React.createElement(PaymentMethodIcons, {
    icons: icons
  }));
};
var context = 'express_checkout';
if ((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isCartPage)()) {
  context = 'cart';
}
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerExpressPaymentMethod)({
  name: 'paymentplugins_ppcp_express',
  gatewayId: 'ppcp',
  paymentMethodId: 'ppcp',
  canMakePayment: function canMakePayment() {
    return !(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isAdminOnly)() && ((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isCartPage)() && isCartEnabled() || (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isCheckoutPage)() && isExpressEnabled());
  },
  content: /*#__PURE__*/React.createElement(ExpressPaymentMethod, {
    context: context
  }),
  edit: /*#__PURE__*/React.createElement(ExpressPaymentMethod, {
    context: context
  }),
  supports: {
    features: data('features')
  }
});
if (data('placeOrderButtonEnabled')) {
  (0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
    name: 'ppcp',
    label: /*#__PURE__*/React.createElement(PaymentMethodLabel, {
      id: "ppcp",
      title: data('title'),
      icons: data('icons').find(function (icon) {
        return icon.id === 'paypal';
      })
    }),
    ariaLabel: 'PayPal',
    canMakePayment: function canMakePayment() {
      return !(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isAdminOnly)() && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isCheckoutPage)();
    },
    content: /*#__PURE__*/React.createElement(_simple_paypal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: data
    }),
    edit: /*#__PURE__*/React.createElement(_simple_paypal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: data
    }),
    placeOrderButtonLabel: data('i18n').buttonLabel,
    supports: {
      showSavedCards: false,
      showSaveOption: false,
      features: data('features')
    }
  });
} else {
  (0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerPaymentMethod)({
    name: 'ppcp',
    label: /*#__PURE__*/React.createElement(PaymentMethodLabel, {
      id: "ppcp",
      title: data('title'),
      icons: data('icons').find(function (icon) {
        return icon.id === 'paypal';
      })
    }),
    ariaLabel: 'PayPal',
    canMakePayment: function canMakePayment() {
      return !(0,_utils__WEBPACK_IMPORTED_MODULE_9__.isAdminOnly)() && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isCheckoutPage)();
    },
    content: /*#__PURE__*/React.createElement(PayPalPaymentMethod, {
      context: 'checkout',
      paymentMethodId: 'ppcp'
    }),
    edit: /*#__PURE__*/React.createElement(PayPalPaymentMethod, {
      context: 'checkout',
      paymentMethodId: 'ppcp'
    }),
    supports: {
      showSavedCards: false,
      showSaveOption: false,
      features: data('features')
    }
  });
}

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/payment-methods/paypal/simple-paypal.js":
/*!**********************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/payment-methods/paypal/simple-paypal.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ "./packages/blocks/assets/js/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./packages/blocks/assets/js/utils.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./packages/blocks/assets/js/legacy/hooks/index.js");
var _excluded = ["data", "eventRegistration", "activePaymentMethod", "emitResponse"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var SimplePayPal = function SimplePayPal(props) {
  return /*#__PURE__*/React.createElement(PayPalRedirectNotice, props);
};
var PayPalRedirectNotice = function PayPalRedirectNotice(_ref) {
  var data = _ref.data,
    eventRegistration = _ref.eventRegistration,
    activePaymentMethod = _ref.activePaymentMethod,
    emitResponse = _ref.emitResponse,
    props = _objectWithoutProperties(_ref, _excluded);
  var onPaymentSetup = eventRegistration.onPaymentSetup,
    onCheckoutFail = eventRegistration.onCheckoutFail;
  var responseTypes = emitResponse.responseTypes,
    noticeContexts = emitResponse.noticeContexts;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(data('paymentData')),
    _useState2 = _slicedToArray(_useState, 2),
    paymentData = _useState2[0],
    setPaymentData = _useState2[1];
  var clearPaymentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setPaymentData(null);
  }, []);
  (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useProcessPaymentFailure)({
    event: onCheckoutFail,
    responseTypes: responseTypes,
    messageContext: noticeContexts.CHECKOUT,
    setPaymentData: setPaymentData
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (activePaymentMethod === 'ppcp' && paymentData) {
      var unsubscribe = onPaymentSetup(function () {
        var _paymentData$orderId = paymentData.orderId,
          orderId = _paymentData$orderId === void 0 ? '' : _paymentData$orderId,
          _paymentData$billingT = paymentData.billingToken,
          billingToken = _paymentData$billingT === void 0 ? '' : _paymentData$billingT;
        var response = {
          meta: {
            paymentMethodData: {
              ppcp_paypal_order_id: orderId,
              ppcp_billing_token: billingToken
            }
          }
        };
        return _objectSpread({
          type: responseTypes.SUCCESS
        }, response);
      });
      return unsubscribe;
    }
  }, [paymentData, responseTypes, onPaymentSetup, activePaymentMethod]);
  if (paymentData && paymentData !== null && paymentData !== void 0 && paymentData.order) {
    if (paymentData.billingTokenData) {
      return /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.PaymentMethodCard, {
        description: paymentData.billingTokenData.payer_info.email,
        icon: data('icons').find(function (icon) {
          return icon.id === 'paypal_simple';
        }),
        label: _utils__WEBPACK_IMPORTED_MODULE_2__.i18n.cancel,
        onCancel: clearPaymentData
      });
    }
    return /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.PaymentMethodCard, {
      description: paymentData.order.payer.email_address,
      icon: data('icons').find(function (icon) {
        return icon.id === 'paypal_simple';
      }),
      label: _utils__WEBPACK_IMPORTED_MODULE_2__.i18n.cancel,
      onCancel: clearPaymentData
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-popup__container"
  }, /*#__PURE__*/React.createElement("img", {
    src: data('redirectIcon')
  }), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: data('i18n').redirectText
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimplePayPal);

/***/ }),

/***/ "./packages/blocks/assets/js/utils.js":
/*!********************************************!*\
  !*** ./packages/blocks/assets/js/utils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_BILLING_ADDRESS": () => (/* binding */ DEFAULT_BILLING_ADDRESS),
/* harmony export */   "DEFAULT_SHIPPING_ADDRESS": () => (/* binding */ DEFAULT_SHIPPING_ADDRESS),
/* harmony export */   "extractShippingRateParams": () => (/* binding */ extractShippingRateParams),
/* harmony export */   "getRestPath": () => (/* binding */ getRestPath),
/* harmony export */   "getSelectedShippingOptionId": () => (/* binding */ getSelectedShippingOptionId),
/* harmony export */   "getShippingOptionId": () => (/* binding */ getShippingOptionId),
/* harmony export */   "hasShippingOptions": () => (/* binding */ hasShippingOptions),
/* harmony export */   "i18n": () => (/* binding */ i18n),
/* harmony export */   "isAdminOnly": () => (/* binding */ isAdminOnly),
/* harmony export */   "isCartPage": () => (/* binding */ isCartPage),
/* harmony export */   "isCheckoutPage": () => (/* binding */ isCheckoutPage),
/* harmony export */   "isUserAdmin": () => (/* binding */ isUserAdmin),
/* harmony export */   "removeNumberPrecision": () => (/* binding */ removeNumberPrecision)
/* harmony export */ });
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ppcp/utils */ "@ppcp/utils");
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ppcp_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var getShippingOptionId = function getShippingOptionId(packageId, rateId) {
  return "".concat(packageId, ":").concat(rateId);
};
var getSelectedShippingOptionId = function getSelectedShippingOptionId(shippingRates) {
  var shippingOption = '';
  shippingRates.forEach(function (shippingPackage, idx) {
    shippingPackage.shipping_rates.forEach(function (rate) {
      if (rate.selected) {
        shippingOption = getShippingOptionId(idx, rate.rate_id);
      }
    });
  });
  return shippingOption;
};
var extractShippingRateParams = function extractShippingRateParams(id) {
  var result = id.match(_ppcp_utils__WEBPACK_IMPORTED_MODULE_0__.SHIPPING_OPTION_REGEX);
  if (result) {
    var packageIdx = result[1],
      rate = result[2];
    return [rate, packageIdx];
  }
  return [];
};
var removeNumberPrecision = function removeNumberPrecision(value, unit) {
  return value / Math.pow(10, unit);
};
var hasShippingOptions = function hasShippingOptions(shippingRates) {
  return shippingRates.map(function (rate) {
    return (rate === null || rate === void 0 ? void 0 : rate.shipping_rates.length) > 0;
  }).filter(Boolean).length > 0;
};

/**
 * Returns a rest route in ajax form given a route path.
 * @param path
 * @returns {*}
 */
var getRestPath = function getRestPath(path) {
  var _getSetting, _getSetting$ajaxRestP;
  path = path.replace(/^\//, '');
  return (_getSetting = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('ppcpGeneralData')) === null || _getSetting === void 0 ? void 0 : (_getSetting$ajaxRestP = _getSetting.ajaxRestPath) === null || _getSetting$ajaxRestP === void 0 ? void 0 : _getSetting$ajaxRestP.replace('%s', path);
};
var isUserAdmin = function isUserAdmin() {
  var _getSetting2;
  return (_getSetting2 = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('ppcpGeneralData')) === null || _getSetting2 === void 0 ? void 0 : _getSetting2.isAdmin;
};
var getLocaleFields = function getLocaleFields(country) {
  var countryLocale = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('countryLocale', {});
  var localeFields = _objectSpread({}, countryLocale.default);
  if (country && countryLocale.hasOwnProperty(country)) {
    localeFields = Object.entries(countryLocale[country]).reduce(function (locale, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      locale[key] = _objectSpread(_objectSpread({}, locale[key]), value);
      return locale;
    }, localeFields);
  }
  return localeFields;
};

/**
 * Returns true if the provided value is empty.
 * @param value
 * @returns {boolean}
 */
var isEmpty = function isEmpty(value) {
  if (typeof value === 'string') {
    return value.length == 0 || value == '';
  }
  if (Array.isArray(value)) {
    return array.length == 0;
  }
  if (_typeof(value) === 'object') {
    return Object.keys(value).length == 0;
  }
  if (typeof value === 'undefined') {
    return true;
  }
  return true;
};
var isCartPage = function isCartPage() {
  return (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('ppcpGeneralData').context === 'cart';
};
var isCheckoutPage = function isCheckoutPage() {
  return (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('ppcpGeneralData').context === 'checkout';
};
var isAdminOnly = function isAdminOnly() {
  return (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('ppcpGeneralData').adminOnly === true;
};
var DEFAULT_SHIPPING_ADDRESS = {
  'first_name': '',
  'last_name': '',
  'company': '',
  'address_1': '',
  'address_2': '',
  'city': '',
  'state': '',
  'postcode': '',
  'country': '',
  'phone': ''
};
var DEFAULT_BILLING_ADDRESS = _objectSpread(_objectSpread({}, DEFAULT_SHIPPING_ADDRESS), {}, {
  'email': ''
});
var i18n = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('ppcpGeneralData').i18n;

/***/ }),

/***/ "./packages/blocks/assets/js/legacy/payment-methods/paypal/styles.scss":
/*!*****************************************************************************!*\
  !*** ./packages/blocks/assets/js/legacy/payment-methods/paypal/styles.scss ***!
  \*****************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

}]);
//# sourceMappingURL=blocks-legacy-commons.js.map