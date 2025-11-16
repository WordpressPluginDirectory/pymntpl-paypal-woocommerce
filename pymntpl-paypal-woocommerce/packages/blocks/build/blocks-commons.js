(self["webpackChunkwcPPCP"] = self["webpackChunkwcPPCP"] || []).push([["blocks-commons"],{

/***/ "./packages/blocks/assets/js/blocks/checkout/block.js":
/*!************************************************************!*\
  !*** ./packages/blocks/assets/js/blocks/checkout/block.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/block-data */ "@woocommerce/block-data");
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__);




var Block = function Block(_ref) {
  var checkoutExtensionData = _ref.checkoutExtensionData,
    extensions = _ref.extensions;
  var _dispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/notices'),
    createErrorNotice = _dispatch.createErrorNotice;
  var _dispatch2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__.PAYMENT_STORE_KEY),
    setActivePaymentMethod = _dispatch2.__internalSetActivePaymentMethod;
  var data = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__.getSetting)('ppcp_data');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (setActivePaymentMethod && data.errorMessage) {
      createErrorNotice(data.errorMessage, {
        context: 'wc/checkout'
      });
      setActivePaymentMethod('ppcp');
    }
  }, []);
  return null;
};

/***/ }),

/***/ "./packages/blocks/assets/js/blocks/checkout/frontend.js":
/*!***************************************************************!*\
  !*** ./packages/blocks/assets/js/blocks/checkout/frontend.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/blocks-checkout */ "@woocommerce/blocks-checkout");
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./packages/blocks/assets/js/blocks/checkout/block.json");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./packages/blocks/assets/js/blocks/checkout/block.js");



(0,_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0__.registerCheckoutBlock)({
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_1__,
  component: _block__WEBPACK_IMPORTED_MODULE_2__.Block
});

/***/ }),

/***/ "./packages/blocks/assets/js/blocks/fastlane/block.js":
/*!************************************************************!*\
  !*** ./packages/blocks/assets/js/blocks/fastlane/block.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/block-data */ "@woocommerce/block-data");
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./packages/blocks/assets/js/hooks/index.js");
/* harmony import */ var _payment_methods_fastlane_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../payment-methods/fastlane/hooks */ "./packages/blocks/assets/js/payment-methods/fastlane/hooks/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Block = function Block(_ref) {
  var checkoutExtensionData = _ref.checkoutExtensionData,
    extensions = _ref.extensions;
  var isInitialRender = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var queryParams = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__.getSetting)('paypalQueryParams');
  var data = extensions.wc_ppcp.fastlane;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
      var store = select(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__.CART_STORE_KEY);
      return _objectSpread({
        needsShipping: store.getNeedsShipping()
      }, store.getCustomerData());
    }),
    needsShipping = _useSelect.needsShipping,
    billingAddress = _useSelect.billingAddress;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__.CART_STORE_KEY),
    setShippingAddress = _useDispatch.setShippingAddress;
  var email = billingAddress.email;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(email),
    _useState2 = _slicedToArray(_useState, 2),
    debouncedEmail = _useState2[0],
    setDebouncedEmail = _useState2[1];
  var paypal = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useLoadPayPalScript)(queryParams);
  var fastlane = (0,_payment_methods_fastlane_hooks__WEBPACK_IMPORTED_MODULE_6__.useCreateFastlane)({
    paypal: paypal
  });
  var onError = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {}, []);
  var shippingData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      needsShipping: needsShipping,
      setShippingAddress: setShippingAddress
    };
  }, [needsShipping, setShippingAddress]);
  var _useProcessFastlane = (0,_payment_methods_fastlane_hooks__WEBPACK_IMPORTED_MODULE_6__.useProcessFastlane)({
      i18n: data.i18n,
      email: email,
      onError: onError,
      fastlane: fastlane,
      shippingData: shippingData,
      openFastlaneModal: function openFastlaneModal() {
        return null;
      }
    }),
    emails = _useProcessFastlane.emails,
    isCustomerFound = _useProcessFastlane.isCustomerFound,
    triggerAuthentication = _useProcessFastlane.triggerAuthentication;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentData.current = {
      fastlane: fastlane,
      emails: emails,
      isCustomerFound: isCustomerFound
    };
  }, [emails, fastlane, isCustomerFound]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Set a timer to update the debounced value after 500ms
    var timer = setTimeout(function () {
      setDebouncedEmail(email);
    }, 500); // Adjust debounce time as needed (500ms is common)

    // Clean up the timer if email changes before timeout completes
    return function () {
      return clearTimeout(timer);
    };
  }, [email]);

  // Effect for handling email changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _currentData$current = currentData.current,
      emails = _currentData$current.emails,
      isCustomerFound = _currentData$current.isCustomerFound;

    // If customer cancelled, don't try to authenticate.
    if (emails.includes(debouncedEmail) || isCustomerFound) {
      return;
    }
    // Don't do anything if requirements aren't met
    if (!fastlane || !triggerAuthentication || !(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.isEmail)(debouncedEmail)) {
      return;
    }

    // Only trigger on first load if fastlane_pageload is true
    if (isInitialRender.current) {
      isInitialRender.current = false;
      if (data.fastlane_pageload) {
        triggerAuthentication(debouncedEmail, false);
      }
      return;
    }
    if (data.emailDetectionEnabled) {
      // If we get here, email has changed and is valid, so trigger authentication
      triggerAuthentication(debouncedEmail, false);
    }
  }, [fastlane, debouncedEmail, triggerAuthentication]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fastlane = currentData.current.fastlane;
    if (!fastlane || !data.iconEnabled) {
      return;
    }
    var el = document.getElementById('email');
    if (el) {
      var container = document.getElementById('wc-ppcp-watermark-container');
      if (container) {
        return;
      }
      container = document.createElement('div');
      container.id = 'wc-ppcp-watermark-container';
      fastlane.FastlaneWatermarkComponent({
        includeAdditionalInfo: true
      }).then(function (component) {
        el.parentElement.append(container);
        component.render('#wc-ppcp-watermark-container');
      });
    }
  });
  return null;
};

/***/ }),

/***/ "./packages/blocks/assets/js/blocks/fastlane/frontend.js":
/*!***************************************************************!*\
  !*** ./packages/blocks/assets/js/blocks/fastlane/frontend.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/blocks-checkout */ "@woocommerce/blocks-checkout");
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./packages/blocks/assets/js/blocks/fastlane/block.json");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ "./packages/blocks/assets/js/blocks/fastlane/block.js");



(0,_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_0__.registerCheckoutBlock)({
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_1__,
  component: _block__WEBPACK_IMPORTED_MODULE_2__.Block
});

/***/ }),

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

/***/ "./packages/blocks/assets/js/data/checkout/action-types.js":
/*!*****************************************************************!*\
  !*** ./packages/blocks/assets/js/data/checkout/action-types.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES)
/* harmony export */ });
var ACTION_TYPES = {
  SET_FASTLANE: 'SET_FASTLANE',
  SET_PAYMENT_TOKEN: 'SET_PAYMENT_TOKEN',
  SET_CUSTOMER_CONTEXT: 'SET_CUSTOMER_CONTEXT',
  ADD_CANCELED_EMAIL: 'ADD_CANCELED_EMAIL'
};

/***/ }),

/***/ "./packages/blocks/assets/js/data/checkout/actions.js":
/*!************************************************************!*\
  !*** ./packages/blocks/assets/js/data/checkout/actions.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCanceledEmail": () => (/* binding */ addCanceledEmail),
/* harmony export */   "setCustomerContextId": () => (/* binding */ setCustomerContextId),
/* harmony export */   "setFastlane": () => (/* binding */ setFastlane),
/* harmony export */   "setPaymentToken": () => (/* binding */ setPaymentToken)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./packages/blocks/assets/js/data/checkout/action-types.js");

var setPaymentToken = function setPaymentToken(token) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PAYMENT_TOKEN,
    token: token
  };
};
var setFastlane = function setFastlane(fastlane) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_FASTLANE,
    fastlane: fastlane
  };
};
var setCustomerContextId = function setCustomerContextId(id) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_CUSTOMER_CONTEXT,
    id: id
  };
};
var addCanceledEmail = function addCanceledEmail(email) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ADD_CANCELED_EMAIL,
    email: email
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/data/checkout/constants.js":
/*!**************************************************************!*\
  !*** ./packages/blocks/assets/js/data/checkout/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_KEY": () => (/* binding */ STORE_KEY)
/* harmony export */ });
var STORE_KEY = 'wc-ppcp/store/checkout';

/***/ }),

/***/ "./packages/blocks/assets/js/data/checkout/index.js":
/*!**********************************************************!*\
  !*** ./packages/blocks/assets/js/data/checkout/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_KEY": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./packages/blocks/assets/js/data/checkout/constants.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./packages/blocks/assets/js/data/checkout/actions.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./packages/blocks/assets/js/data/checkout/reducers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./packages/blocks/assets/js/data/checkout/selectors.js");






var config = {
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_5__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__
};

var store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY, config);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./packages/blocks/assets/js/data/checkout/reducers.js":
/*!*************************************************************!*\
  !*** ./packages/blocks/assets/js/data/checkout/reducers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./packages/blocks/assets/js/data/checkout/action-types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_STATE = {
  token: null,
  fastlane: null,
  canceledEmails: [],
  customerContextId: null
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = state;
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_FASTLANE:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        fastlane: action.fastlane
      });
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_PAYMENT_TOKEN:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        token: action.token
      });
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.SET_CUSTOMER_CONTEXT:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        customerContextId: action.id
      });
      break;
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.ACTION_TYPES.ADD_CANCELED_EMAIL:
      newState = _objectSpread(_objectSpread({}, state), {}, {
        canceledEmails: [].concat(_toConsumableArray(state.canceledEmails), [action.email])
      });
      break;
  }
  return newState;
}

/***/ }),

/***/ "./packages/blocks/assets/js/data/checkout/selectors.js":
/*!**************************************************************!*\
  !*** ./packages/blocks/assets/js/data/checkout/selectors.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCanceledEmails": () => (/* binding */ getCanceledEmails),
/* harmony export */   "getFastlane": () => (/* binding */ getFastlane),
/* harmony export */   "getPaymentToken": () => (/* binding */ getPaymentToken),
/* harmony export */   "isCustomerFound": () => (/* binding */ isCustomerFound)
/* harmony export */ });
var getPaymentToken = function getPaymentToken(state) {
  return state.token;
};
var getFastlane = function getFastlane(state) {
  return state.fastlane;
};
var isCustomerFound = function isCustomerFound(state) {
  return !!state.customerContextId;
};
var getCanceledEmails = function getCanceledEmails(state) {
  return state.canceledEmails;
};

/***/ }),

/***/ "./packages/blocks/assets/js/data/index.js":
/*!*************************************************!*\
  !*** ./packages/blocks/assets/js/data/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_KEY": () => (/* reexport safe */ _checkout__WEBPACK_IMPORTED_MODULE_0__.STORE_KEY),
/* harmony export */   "store": () => (/* reexport safe */ _checkout__WEBPACK_IMPORTED_MODULE_0__.store)
/* harmony export */ });
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout */ "./packages/blocks/assets/js/data/checkout/index.js");


/***/ }),

/***/ "./packages/blocks/assets/js/hooks/index.js":
/*!**************************************************!*\
  !*** ./packages/blocks/assets/js/hooks/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useApiRequests": () => (/* reexport safe */ _use_api_requests__WEBPACK_IMPORTED_MODULE_4__.useApiRequests),
/* harmony export */   "useBreakpointWidth": () => (/* reexport safe */ _use_breakpoint_width__WEBPACK_IMPORTED_MODULE_3__.useBreakpointWidth),
/* harmony export */   "useLoadPayPalScript": () => (/* reexport safe */ _use_load_paypal_script__WEBPACK_IMPORTED_MODULE_0__.useLoadPayPalScript),
/* harmony export */   "usePaymentMethodNotices": () => (/* reexport safe */ _use_payment_method_notices__WEBPACK_IMPORTED_MODULE_1__.usePaymentMethodNotices),
/* harmony export */   "useProcessPaymentFailure": () => (/* reexport safe */ _use_process_payment_failure__WEBPACK_IMPORTED_MODULE_2__.useProcessPaymentFailure)
/* harmony export */ });
/* harmony import */ var _use_load_paypal_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-load-paypal-script */ "./packages/blocks/assets/js/hooks/use-load-paypal-script.js");
/* harmony import */ var _use_payment_method_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-payment-method-notices */ "./packages/blocks/assets/js/hooks/use-payment-method-notices.js");
/* harmony import */ var _use_process_payment_failure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-process-payment-failure */ "./packages/blocks/assets/js/hooks/use-process-payment-failure.js");
/* harmony import */ var _use_breakpoint_width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-breakpoint-width */ "./packages/blocks/assets/js/hooks/use-breakpoint-width.js");
/* harmony import */ var _use_api_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-api-requests */ "./packages/blocks/assets/js/hooks/use-api-requests.js");






/***/ }),

/***/ "./packages/blocks/assets/js/hooks/use-api-requests.js":
/*!*************************************************************!*\
  !*** ./packages/blocks/assets/js/hooks/use-api-requests.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useApiRequests": () => (/* binding */ useApiRequests)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ppcp/utils */ "@ppcp/utils");
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ppcp_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./packages/blocks/assets/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useApiRequests = function useApiRequests(_ref) {
  var _ref$isExpress = _ref.isExpress,
    isExpress = _ref$isExpress === void 0 ? false : _ref$isExpress,
    paymentMethod = _ref.paymentMethod;
  var createOrder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(currentData) {
      var billing, shipping, _currentData$shouldSa, shouldSavePayment, needsShipping, shippingAddress, billingAddress, _objectSpread2, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              billing = currentData.billing, shipping = currentData.shipping, _currentData$shouldSa = currentData.shouldSavePayment, shouldSavePayment = _currentData$shouldSa === void 0 ? false : _currentData$shouldSa;
              needsShipping = shipping.needsShipping, shippingAddress = shipping.shippingAddress;
              billingAddress = billing.billingAddress;
              _context.prev = 3;
              _context.next = 6;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
                method: 'POST',
                url: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRestPath)('wc-ppcp/v1/cart/order'),
                data: _objectSpread(_objectSpread((_objectSpread2 = {
                  payment_method: paymentMethod
                }, _defineProperty(_objectSpread2, "".concat(paymentMethod, "_save_payment"), shouldSavePayment), _defineProperty(_objectSpread2, "address_provided", !isExpress && needsShipping), _defineProperty(_objectSpread2, "checkout_blocks", true), _defineProperty(_objectSpread2, "context", !isExpress ? 'checkout' : 'express'), _objectSpread2), needsShipping ? {
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
            case 6:
              response = _context.sent;
              return _context.abrupt("return", response);
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              throw _context.t0;
            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [isExpress, paymentMethod]);
  var createVaultSetupToken = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
              method: 'POST',
              url: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRestPath)('/wc-ppcp/v1/vault/setup-tokens'),
              data: {
                context: 'checkout',
                payment_method: paymentMethod
              }
            }).then(function (token) {
              return token.id;
            }).catch(function (error) {
              console.info('Error creating setup token. ', error);
              throw error;
            }));
          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [paymentMethod]);
  var onShippingChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data, actions, currentData) {
    var _data$selected_shippi;
    var shipping = currentData.shipping;
    var setSelectedRates = shipping.setSelectedRates;
    var intermediateAddress = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_2__.convertPayPalAddressToCart)((data === null || data === void 0 ? void 0 : data.shipping_address) || {}, true);
    var selectedShippingOption = (data === null || data === void 0 ? void 0 : (_data$selected_shippi = data.selected_shipping_option) === null || _data$selected_shippi === void 0 ? void 0 : _data$selected_shippi.id) || '';
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'POST',
      url: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRestPath)('wc-ppcp/v1/cart/shipping'),
      data: {
        order_id: data.orderID,
        address: intermediateAddress,
        shipping_method: (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_2__.extractShippingMethod)(selectedShippingOption),
        payment_method: paymentMethod
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
  }, [paymentMethod]);
  var createPaymentToken = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (setupTokenId) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'POST',
      path: "/wc-ppcp/v1/vault/payment-tokens",
      data: _objectSpread({
        setup_token: setupTokenId
      }, data)
    });
  }, []);
  return {
    createOrder: createOrder,
    onShippingChange: onShippingChange,
    createPaymentToken: createPaymentToken,
    createVaultSetupToken: createVaultSetupToken
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/hooks/use-breakpoint-width.js":
/*!*****************************************************************!*\
  !*** ./packages/blocks/assets/js/hooks/use-breakpoint-width.js ***!
  \*****************************************************************/
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
    if (node) {
      var _node$parentElement;
      setElement(node === null || node === void 0 ? void 0 : (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.parentElement);
    }
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

/***/ "./packages/blocks/assets/js/hooks/use-load-paypal-script.js":
/*!*******************************************************************!*\
  !*** ./packages/blocks/assets/js/hooks/use-load-paypal-script.js ***!
  \*******************************************************************/
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

/***/ "./packages/blocks/assets/js/hooks/use-payment-method-notices.js":
/*!***********************************************************************!*\
  !*** ./packages/blocks/assets/js/hooks/use-payment-method-notices.js ***!
  \***********************************************************************/
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

/***/ "./packages/blocks/assets/js/hooks/use-process-payment-failure.js":
/*!************************************************************************!*\
  !*** ./packages/blocks/assets/js/hooks/use-process-payment-failure.js ***!
  \************************************************************************/
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

/***/ "./packages/blocks/assets/js/paylater-messaging/index.js":
/*!***************************************************************!*\
  !*** ./packages/blocks/assets/js/paylater-messaging/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/blocks-checkout */ "@woocommerce/blocks-checkout");
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "./packages/blocks/assets/js/hooks/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var data = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__.getSetting)('paylaterParams');
var PayLaterMessaging = function PayLaterMessaging(_ref) {
  var cart = _ref.cart,
    extensions = _ref.extensions,
    context = _ref.context;
  var isEnabled = data.enabled;
  var el = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var cartTotals = cart.cartTotals;
  var currency = cartTotals.currency_code,
    total_price = cartTotals.total_price;
  var paypal = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useLoadPayPalScript)((0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__.getSetting)('paypalQueryParams'));
  var options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return _objectSpread({
      amount: total_price / Math.pow(10, cartTotals.currency_minor_unit),
      currency: currency,
      placement: 'payment'
    }, data.options);
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (paypal && isEnabled) {
      paypal.Messages(options).render(el.current);
    }
  }, [paypal, options, isEnabled]);
  if (isEnabled) {
    return /*#__PURE__*/React.createElement(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__.TotalsWrapper, null, /*#__PURE__*/React.createElement("div", {
      className: "wc-block-components-totals-item"
    }, /*#__PURE__*/React.createElement("div", {
      ref: el,
      className: "wc-ppcp-paylater-msg__container"
    })));
  }
  return null;
};
var render = function render() {
  return /*#__PURE__*/React.createElement(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_1__.ExperimentalOrderMeta, null, /*#__PURE__*/React.createElement(PayLaterMessaging, null));
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__.registerPlugin)('wc-ppcp', {
  render: render,
  scope: 'woocommerce-checkout'
});

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/contexts/CreditCardContext.js":
/*!*********************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/contexts/CreditCardContext.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCardContext": () => (/* binding */ CreditCardContext),
/* harmony export */   "CreditCardProvider": () => (/* binding */ CreditCardProvider)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var CreditCardContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var CreditCardProvider = function CreditCardProvider(_ref) {
  var data = _ref.data,
    children = _ref.children;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    errors = _useState2[0],
    setErrors = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    paymentMethodData = _useState4[0],
    setPaymentMethodData = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isEligible = _useState6[0],
    setIsEligible = _useState6[1];
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    paymentMethodData: paymentMethodData
  });
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
      cvv: {
        isValid: false,
        isEmpty: true,
        isRequired: true
      },
      expiry: {
        isValid: false,
        isEmpty: true,
        isRequired: true
      },
      number: {
        isValid: false,
        isEmpty: true,
        isRequired: true
      },
      name: {
        isValid: false,
        isEmpty: true,
        isRequired: !!data.cardNameRequired
      }
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    validatedFields = _useState8[0],
    setValidatedFields = _useState8[1];
  var _useState9 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    cardElement = _useState10[0],
    setCardElement = _useState10[1];
  var _useState11 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    cardFields = _useState12[0],
    setCardFields = _useState12[1];
  var cardFieldRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var addPaymentMethodData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    setPaymentMethodData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), data);
    });
    currentData.current.paymentMethodData = _objectSpread(_objectSpread({}, currentData.current.paymentMethodData), data);
  }, []);
  var getPaymentMethodData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return currentData.current.paymentMethodData;
  }, []);
  var cardFieldRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (key) {
    return function (ref) {
      if (ref) {
        cardFieldRefs.current = _objectSpread(_objectSpread({}, cardFieldRefs.current), {}, _defineProperty({}, key, ref));
      }
    };
  }, []);
  var onFieldError = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (key) {
    setErrors(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, getErrorCode(key)));
    });
  }, []);
  var onRemoveError = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (key) {
    setErrors(function (prev) {
      delete prev[key];
      return _objectSpread({}, prev);
    });
  }, []);
  var setValidatedField = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (key, field) {
    setValidatedFields(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, prev[key]), field)));
    });
  }, []);
  var _useCardFieldEvents = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useCardFieldEvents)({
      setValidatedField: setValidatedField,
      onError: onFieldError,
      onRemoveError: onRemoveError,
      cardFields: cardFields,
      cardFieldRefs: cardFieldRefs.current
    }),
    events = _useCardFieldEvents.events;
  var context = {
    i18n: data.i18n,
    events: events,
    errors: errors,
    onFieldError: onFieldError,
    cardFields: cardFields,
    cardFieldRef: cardFieldRef,
    cardFieldRefs: cardFieldRefs,
    cardElement: cardElement,
    setCardFields: setCardFields,
    setCardElement: setCardElement,
    validatedFields: validatedFields,
    isEligible: isEligible,
    setIsEligible: setIsEligible,
    paymentMethodData: paymentMethodData,
    addPaymentMethodData: addPaymentMethodData,
    getPaymentMethodData: getPaymentMethodData
  };
  return /*#__PURE__*/React.createElement(CreditCardContext.Provider, {
    value: context
  }, children);
};
var getErrorCode = function getErrorCode(key) {
  var code;
  switch (key) {
    case 'name':
      code = 'INVALID_NAME';
      break;
    case 'number':
      code = 'INVALID_NUMBER';
      break;
    case 'expiry':
      code = 'INVALID_EXPIRY';
      break;
    case 'cvv':
      code = 'INVALID_CVV';
      break;
  }
  return code;
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/contexts/index.js":
/*!*********************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/contexts/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCardContext": () => (/* reexport safe */ _CreditCardContext__WEBPACK_IMPORTED_MODULE_0__.CreditCardContext),
/* harmony export */   "CreditCardProvider": () => (/* reexport safe */ _CreditCardContext__WEBPACK_IMPORTED_MODULE_0__.CreditCardProvider)
/* harmony export */ });
/* harmony import */ var _CreditCardContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreditCardContext */ "./packages/blocks/assets/js/payment-methods/credit-card/contexts/CreditCardContext.js");


/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/index.js":
/*!******************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCardBreakpoints": () => (/* reexport safe */ _use_card_breakpoints__WEBPACK_IMPORTED_MODULE_2__.useCardBreakpoints),
/* harmony export */   "useCardFieldEvents": () => (/* reexport safe */ _use_card_field_events__WEBPACK_IMPORTED_MODULE_3__.useCardFieldEvents),
/* harmony export */   "useCardFormHandler": () => (/* reexport safe */ _use_card_form_handler__WEBPACK_IMPORTED_MODULE_1__.useCardFormHandler),
/* harmony export */   "useCardOptions": () => (/* reexport safe */ _use_card_options__WEBPACK_IMPORTED_MODULE_0__.useCardOptions),
/* harmony export */   "useCreatePaymentMethod": () => (/* reexport safe */ _use_create_payment_method__WEBPACK_IMPORTED_MODULE_4__.useCreatePaymentMethod),
/* harmony export */   "useManageFastlaneToken": () => (/* reexport safe */ _use_manage_fastlane_token__WEBPACK_IMPORTED_MODULE_6__.useManageFastlaneToken),
/* harmony export */   "useProcessFastlaneToken": () => (/* reexport safe */ _use_process_fastlane_token__WEBPACK_IMPORTED_MODULE_5__.useProcessFastlaneToken)
/* harmony export */ });
/* harmony import */ var _use_card_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-card-options */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-options.js");
/* harmony import */ var _use_card_form_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-card-form-handler */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-form-handler.js");
/* harmony import */ var _use_card_breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-card-breakpoints */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-breakpoints.js");
/* harmony import */ var _use_card_field_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-card-field-events */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-field-events.js");
/* harmony import */ var _use_create_payment_method__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-create-payment-method */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-create-payment-method.js");
/* harmony import */ var _use_process_fastlane_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-process-fastlane-token */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-process-fastlane-token.js");
/* harmony import */ var _use_manage_fastlane_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-manage-fastlane-token */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-manage-fastlane-token.js");








/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-breakpoints.js":
/*!*********************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-breakpoints.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCardBreakpoints": () => (/* binding */ useCardBreakpoints)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCardBreakpoints = function useCardBreakpoints() {
  var BREAKPOINTS = {
    xs: [0, 600],
    sm: [600, 900],
    md: [900, 1200],
    lg: [1200, Infinity]
  };
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    cardContainerRef = _useState2[0],
    setCardContainerRef = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (cardContainerRef) {
      var observer = new ResizeObserver(function (entries) {
        var entry = entries[0];
        var width = entry.contentRect.width;
        Object.keys(BREAKPOINTS).forEach(function (key) {
          entry.target.classList.remove("card-field-container--".concat(key));
        });
        var key = Object.keys(BREAKPOINTS).find(function (key) {
          var _BREAKPOINTS$key = _slicedToArray(BREAKPOINTS[key], 2),
            r1 = _BREAKPOINTS$key[0],
            r2 = _BREAKPOINTS$key[1];
          if (r1 < width && r2 > width) {
            return true;
          }
          return false;
        });
        if (key) {
          entry.target.classList.add("card-field-container--".concat(key));
        }
      });
      observer.observe(cardContainerRef);
      return function () {
        observer.disconnect();
      };
    }
  }, [cardContainerRef]);
  return {
    setCardContainerRef: setCardContainerRef
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-field-events.js":
/*!**********************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-field-events.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCardFieldEvents": () => (/* binding */ useCardFieldEvents)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var useCardFieldEvents = function useCardFieldEvents(_ref) {
  var onError = _ref.onError,
    onRemoveError = _ref.onRemoveError,
    setValidatedField = _ref.setValidatedField,
    cardFields = _ref.cardFields,
    cardFieldRefs = _ref.cardFieldRefs;
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    cardFields: cardFields,
    cardFieldRefs: cardFieldRefs
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentData.current = {
      cardFields: cardFields,
      cardFieldRefs: cardFieldRefs
    };
  }, [cardFields, cardFieldRefs]);
  var onBlur = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var _currentData$current = currentData.current,
      cardFields = _currentData$current.cardFields,
      cardFieldRefs = _currentData$current.cardFieldRefs;
    var fields = event.fields,
      emittedBy = event.emittedBy;
    setValidatedField(emittedBy, getField(emittedBy, fields));
    cardFields[emittedBy].removeClass('focused');
    cardFieldRefs[emittedBy].classList.remove('card-field--focused');
    var _getField = getField(emittedBy, fields),
      isValid = _getField.isValid,
      isEmpty = _getField.isEmpty;
    if (!isEmpty) {
      if (!isValid) {
        cardFieldRefs[emittedBy].classList.remove('card-field--valid');
        cardFieldRefs[emittedBy].classList.add('card-field--invalid');
        onError(emittedBy);
      }
    } else {
      cardFieldRefs[emittedBy].classList.remove('card-field--invalid');
      cardFields[emittedBy].removeClass('invalid');
      onRemoveError(emittedBy);
    }
  }, [onError, onRemoveError]);
  var onFocus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var fields = event.fields,
      emittedBy = event.emittedBy;
    var _currentData$current2 = currentData.current,
      cardFields = _currentData$current2.cardFields,
      cardFieldRefs = _currentData$current2.cardFieldRefs;
    setValidatedField(emittedBy, getField(emittedBy, fields));
    Object.keys(cardFields).forEach(function (key) {
      cardFields[key].removeClass('focused');
    });
    Object.keys(cardFieldRefs).forEach(function (key) {
      cardFieldRefs[key].classList.remove('card-field--focused');
    });
    cardFieldRefs[emittedBy].classList.add('card-field--focused');
    cardFields[emittedBy].addClass('focused');
  }, [onError, onRemoveError]);
  var onChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var fields = event.fields,
      emittedBy = event.emittedBy;
    var cardFieldRefs = currentData.current.cardFieldRefs;
    var _getField2 = getField(emittedBy, fields),
      _getField2$isEmpty = _getField2.isEmpty,
      isEmpty = _getField2$isEmpty === void 0 ? false : _getField2$isEmpty,
      _getField2$isValid = _getField2.isValid,
      isValid = _getField2$isValid === void 0 ? false : _getField2$isValid;
    setValidatedField(emittedBy, getField(emittedBy, fields));
    onRemoveError(emittedBy);
    if (isValid) {
      cardFieldRefs[emittedBy].classList.add('card-field--valid');
    } else {
      cardFieldRefs[emittedBy].classList.remove('card-field--valid');
    }
  }, [onError, onRemoveError]);
  var events = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      onBlur: onBlur,
      onFocus: onFocus,
      onChange: onChange
    };
  }, [onBlur, onFocus, onChange]);
  return {
    events: events
  };
};
var getField = function getField(key, fields) {
  var name = Object.keys(fields).find(function (name) {
    return name.toLowerCase().indexOf(key) > -1;
  });
  return fields[name];
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-fields.js":
/*!****************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-fields.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCardFields": () => (/* binding */ useCardFields)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_credit_card_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-credit-card-context */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-credit-card-context.js");


var useCardFields = function useCardFields(_ref) {
  var data = _ref.data,
    paypal = _ref.paypal,
    options = _ref.options;
  var _useCreditCardContext = (0,_use_credit_card_context__WEBPACK_IMPORTED_MODULE_1__.useCreditCardContext)(),
    cardFields = _useCreditCardContext.cardFields,
    cardFieldRefs = _useCreditCardContext.cardFieldRefs,
    setCardElement = _useCreditCardContext.setCardElement,
    setCardFields = _useCreditCardContext.setCardFields,
    setIsEligible = _useCreditCardContext.setIsEligible;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (paypal && options) {
      var cardElement = paypal.CardFields(options);
      if (cardElement.isEligible()) {
        var name = cardElement.NameField(data.fields.name);
        var number = cardElement.NumberField(data.fields.number);
        var expiry = cardElement.ExpiryField(data.fields.expiry);
        var cvv = cardElement.CVVField(data.fields.cvv);
        setCardElement(cardElement);
        setCardFields({
          name: name,
          number: number,
          expiry: expiry,
          cvv: cvv
        });
      } else {
        setIsEligible(false);
      }
    }
  }, [paypal, options]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    Object.keys(cardFields).map(function (key) {
      var field = cardFields[key];
      if (cardFieldRefs.current[key]) {
        field.render(cardFieldRefs.current[key]);
      }
    });
  }, [cardFields, cardFieldRefs]);
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-form-handler.js":
/*!**********************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-form-handler.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCardFormHandler": () => (/* binding */ useCardFormHandler)
/* harmony export */ });
/* harmony import */ var _use_card_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-card-fields */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-fields.js");
/* harmony import */ var _use_card_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-card-options */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-options.js");
/* harmony import */ var _use_create_payment_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-create-payment-method */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-create-payment-method.js");
/* harmony import */ var _use_credit_card_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-credit-card-context */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-credit-card-context.js");
var _excluded = ["data", "paypal"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var useCardFormHandler = function useCardFormHandler(_ref) {
  var _extensions$wc_ppcp;
  var data = _ref.data,
    paypal = _ref.paypal,
    props = _objectWithoutProperties(_ref, _excluded);
  var billing = props.billing,
    cartData = props.cartData,
    shippingData = props.shippingData,
    emitResponse = props.emitResponse,
    eventRegistration = props.eventRegistration,
    shouldSavePayment = props.shouldSavePayment;
  var extensions = cartData.extensions;
  var needsSetupToken = (extensions === null || extensions === void 0 ? void 0 : (_extensions$wc_ppcp = extensions.wc_ppcp) === null || _extensions$wc_ppcp === void 0 ? void 0 : _extensions$wc_ppcp.needsSetupToken) || false;
  var onPaymentSetup = eventRegistration.onPaymentSetup,
    onCheckoutValidation = eventRegistration.onCheckoutValidation;
  var _useCardOptions = (0,_use_card_options__WEBPACK_IMPORTED_MODULE_1__.useCardOptions)({
      data: data,
      billing: billing,
      shippingData: shippingData,
      needsSetupToken: needsSetupToken,
      shouldSavePayment: shouldSavePayment
    }),
    options = _useCardOptions.options;
  (0,_use_card_fields__WEBPACK_IMPORTED_MODULE_0__.useCardFields)({
    data: data,
    paypal: paypal,
    options: options
  });
  (0,_use_create_payment_method__WEBPACK_IMPORTED_MODULE_2__.useCreatePaymentMethod)({
    billing: billing,
    emitResponse: emitResponse,
    onPaymentSetup: onPaymentSetup,
    needsSetupToken: needsSetupToken
  });
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-options.js":
/*!*****************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-card-options.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCardOptions": () => (/* binding */ useCardOptions)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks */ "./packages/blocks/assets/js/hooks/index.js");
/* harmony import */ var _use_credit_card_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-credit-card-context */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-credit-card-context.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var useCardOptions = function useCardOptions(_ref) {
  var data = _ref.data,
    billing = _ref.billing,
    shippingData = _ref.shippingData,
    needsSetupToken = _ref.needsSetupToken,
    shouldSavePayment = _ref.shouldSavePayment;
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    billing: billing,
    shipping: shippingData,
    shouldSavePayment: shouldSavePayment
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentData.current = {
      billing: billing,
      shipping: shippingData,
      shouldSavePayment: shouldSavePayment
    };
  }, [billing, shippingData, shouldSavePayment]);
  var _useApiRequests = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useApiRequests)({
      paymentMethod: 'ppcp_card'
    }),
    _createOrder = _useApiRequests.createOrder,
    createPaymentToken = _useApiRequests.createPaymentToken,
    _createVaultSetupToken = _useApiRequests.createVaultSetupToken;
  var _useCreditCardContext = (0,_use_credit_card_context__WEBPACK_IMPORTED_MODULE_2__.useCreditCardContext)(),
    events = _useCreditCardContext.events,
    addPaymentMethodData = _useCreditCardContext.addPaymentMethodData;
  var options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var options = _objectSpread(_objectSpread({
      fundingSource: 'card',
      style: data.styles,
      inputEvents: events,
      onApprove: function onApprove(data) {
        if (data.vaultSetupToken) {
          return createPaymentToken(data.vaultSetupToken).then(function (response) {
            addPaymentMethodData({
              orderId: data.orderID || '',
              paymentTokenId: response.id
            });
          });
        } else {
          addPaymentMethodData({
            orderId: data.orderID || '',
            paymentTokenId: ''
          });
        }
      },
      createOrder: function createOrder() {
        return _createOrder(currentData.current);
      }
    }, needsSetupToken && {
      createOrder: null,
      createVaultSetupToken: function createVaultSetupToken() {
        return _createVaultSetupToken.apply(void 0, arguments);
      }
    }), {}, {
      onError: function onError(error) {}
    });
    return options;
  }, [events, needsSetupToken, addPaymentMethodData]);
  return {
    options: options
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-create-payment-method.js":
/*!**************************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-create-payment-method.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreatePaymentMethod": () => (/* binding */ useCreatePaymentMethod)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_credit_card_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-credit-card-context */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-credit-card-context.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var useCreatePaymentMethod = function useCreatePaymentMethod(_ref) {
  var billing = _ref.billing,
    emitResponse = _ref.emitResponse,
    onPaymentSetup = _ref.onPaymentSetup,
    needsSetupToken = _ref.needsSetupToken;
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var _useCreditCardContext = (0,_use_credit_card_context__WEBPACK_IMPORTED_MODULE_1__.useCreditCardContext)(),
    i18n = _useCreditCardContext.i18n,
    onFieldError = _useCreditCardContext.onFieldError,
    cardElement = _useCreditCardContext.cardElement,
    cardFields = _useCreditCardContext.cardFields,
    validatedFields = _useCreditCardContext.validatedFields,
    paymentMethodData = _useCreditCardContext.paymentMethodData,
    getPaymentMethodData = _useCreditCardContext.getPaymentMethodData;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentData.current = {
      billing: billing,
      cardFields: cardFields,
      cardElement: cardElement,
      emitResponse: emitResponse,
      validatedFields: validatedFields,
      paymentMethodData: paymentMethodData
    };
  }, [billing, cardElement, cardFields, emitResponse, validatedFields, paymentMethodData]);
  var validateCreditCardFields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _currentData$current = currentData.current,
      cardFields = _currentData$current.cardFields,
      validatedFields = _currentData$current.validatedFields;
    if (!Object.keys(validatedFields).length) {
      Object.keys(cardFields).forEach(function (key) {
        if (validatedFields[key].isRequired) {
          onFieldError(key);
          cardFields[key].addClass('invalid');
        }
      });
      throw new Error(i18n.incomplete_form);
    }
    var isCardFormValid = true;
    Object.keys(validatedFields).forEach(function (key) {
      var _validatedFields$key = validatedFields[key],
        isValid = _validatedFields$key.isValid,
        isEmpty = _validatedFields$key.isEmpty,
        isRequired = _validatedFields$key.isRequired;
      if (isRequired && (!isValid || isEmpty)) {
        onFieldError(key);
        cardFields[key].addClass('invalid');
        isCardFormValid = false;
      }
    });
    if (!isCardFormValid) {
      throw new Error(i18n.incomplete_form);
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var unsubscribe = onPaymentSetup( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _currentData$current2, billing, cardElement, emitResponse, billingAddress, _getPaymentMethodData, _getPaymentMethodData2, orderId, _getPaymentMethodData3, paymentTokenId, message;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _currentData$current2 = currentData.current, billing = _currentData$current2.billing, cardElement = _currentData$current2.cardElement, emitResponse = _currentData$current2.emitResponse;
              billingAddress = billing.billingAddress;
              _context.prev = 2;
              _context.next = 5;
              return validateCreditCardFields();
            case 5:
              _context.next = 7;
              return cardElement.submit(_objectSpread({}, !needsSetupToken && {
                billingAddress: {
                  addressLine1: billingAddress.address_1 || '',
                  addressLine2: billingAddress.address_2 || '',
                  adminArea1: billingAddress.state || '',
                  adminArea2: billingAddress.city || '',
                  postalCode: billingAddress.postcode || '',
                  countryCode: billingAddress.country || ''
                }
              }));
            case 7:
              _getPaymentMethodData = getPaymentMethodData(), _getPaymentMethodData2 = _getPaymentMethodData.orderId, orderId = _getPaymentMethodData2 === void 0 ? '' : _getPaymentMethodData2, _getPaymentMethodData3 = _getPaymentMethodData.paymentTokenId, paymentTokenId = _getPaymentMethodData3 === void 0 ? '' : _getPaymentMethodData3;
              return _context.abrupt("return", {
                type: emitResponse.responseTypes.SUCCESS,
                meta: {
                  paymentMethodData: {
                    ppcp_card_payment_token: paymentTokenId,
                    ppcp_card_paypal_order_id: orderId
                  }
                }
              });
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              message = (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) || '';
              if (_context.t0 !== null && _context.t0 !== void 0 && _context.t0.message && ['INVALID_NUMBER', 'INVALID_EXPIRY', 'INVALID_CVV'].includes(_context.t0.message)) {
                message = i18n.incomplete_form;
              }
              return _context.abrupt("return", {
                type: emitResponse.responseTypes.ERROR,
                message: message,
                messageContext: emitResponse.noticeContexts.PAYMENTS
              });
            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    })));
    return unsubscribe;
  }, [i18n, onPaymentSetup, needsSetupToken, getPaymentMethodData, validateCreditCardFields]);
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-credit-card-context.js":
/*!************************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-credit-card-context.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreditCardContext": () => (/* binding */ useCreditCardContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts */ "./packages/blocks/assets/js/payment-methods/credit-card/contexts/index.js");


var useCreditCardContext = function useCreditCardContext() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__.CreditCardContext);
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-manage-fastlane-token.js":
/*!**************************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-manage-fastlane-token.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useManageFastlaneToken": () => (/* binding */ useManageFastlaneToken)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/block-data */ "@woocommerce/block-data");
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ppcp_block_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ppcp/block-data */ "@ppcp/block-data");
/* harmony import */ var _ppcp_block_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ppcp/utils */ "@ppcp/utils");
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ppcp_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_checkout_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/checkout/actions */ "./packages/blocks/assets/js/data/checkout/actions.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var useManageFastlaneToken = function useManageFastlaneToken(_ref) {
  var fastlane = _ref.fastlane;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_3__.STORE_KEY),
    setPaymentToken = _useDispatch.setPaymentToken,
    setCustomerContextId = _useDispatch.setCustomerContextId;
  var _useDispatch2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_2__.CART_STORE_KEY),
    setBillingAddress = _useDispatch2.setBillingAddress;
  var _useDispatch3 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('core/notices'),
    createErrorNotice = _useDispatch3.createErrorNotice;
  var onCancel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setPaymentToken(null);
    setCustomerContextId(null);
  }, []);
  var onChangePaymentMethod = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$fastlane$profi, selectedCard, selectionChanged, _selectedCard$payment, _selectedCard$payment2, _selectedCard$payment3, _selectedCard$payment4, name, billingAddress, address, fullName;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fastlane.profile.showCardSelector();
          case 3:
            _yield$fastlane$profi = _context.sent;
            selectedCard = _yield$fastlane$profi.selectedCard;
            selectionChanged = _yield$fastlane$profi.selectionChanged;
            if (selectedCard && selectionChanged) {
              setPaymentToken(selectedCard);
              if (selectedCard !== null && selectedCard !== void 0 && (_selectedCard$payment = selectedCard.paymentSource) !== null && _selectedCard$payment !== void 0 && (_selectedCard$payment2 = _selectedCard$payment.card) !== null && _selectedCard$payment2 !== void 0 && _selectedCard$payment2.billingAddress) {
                _selectedCard$payment3 = selectedCard.paymentSource.card, _selectedCard$payment4 = _selectedCard$payment3.name, name = _selectedCard$payment4 === void 0 ? '' : _selectedCard$payment4, billingAddress = _selectedCard$payment3.billingAddress;
                address = billingAddress;
                fullName = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_4__.extractFullName)(name);
                setBillingAddress({
                  first_name: fullName[0],
                  last_name: fullName[1],
                  address_1: address === null || address === void 0 ? void 0 : address.addressLine1,
                  address_2: address === null || address === void 0 ? void 0 : address.addressLine2,
                  city: (address === null || address === void 0 ? void 0 : address.adminArea2) || '',
                  state: (address === null || address === void 0 ? void 0 : address.adminArea1) || '',
                  postcode: (address === null || address === void 0 ? void 0 : address.postalCode) || '',
                  country: (address === null || address === void 0 ? void 0 : address.countryCode) || ''
                });
              }
            }
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            createErrorNotice(_context.t0.message, {
              id: 'wc-ppcp-tokenize-error',
              context: 'wc/checkout/payments'
            });
          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  })), [fastlane]);
  return {
    onCancel: onCancel,
    onChangePaymentMethod: onChangePaymentMethod
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-process-fastlane-token.js":
/*!***************************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-process-fastlane-token.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProcessFastlaneToken": () => (/* binding */ useProcessFastlaneToken)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks */ "./packages/blocks/assets/js/hooks/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var useProcessFastlaneToken = function useProcessFastlaneToken(_ref) {
  var token = _ref.token,
    emitResponse = _ref.emitResponse,
    onPaymentSetup = _ref.onPaymentSetup,
    needsSetupToken = _ref.needsSetupToken,
    shouldSavePayment = _ref.shouldSavePayment;
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    token: token
  });
  var _useApiRequests = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useApiRequests)({
      paymentMethod: 'ppcp_card'
    }),
    createPaymentToken = _useApiRequests.createPaymentToken;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentData.current = {
      token: token,
      emitResponse: emitResponse,
      shouldSavePayment: shouldSavePayment
    };
  }, [token, emitResponse, shouldSavePayment]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var unsubscribe = onPaymentSetup( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _currentData$current, token, emitResponse, shouldSavePayment;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _currentData$current = currentData.current, token = _currentData$current.token, emitResponse = _currentData$current.emitResponse, shouldSavePayment = _currentData$current.shouldSavePayment;
              _context.prev = 1;
              if (!needsSetupToken) {
                _context.next = 6;
                break;
              }
              _context.next = 5;
              return createPaymentToken(token.id, {
                fastlane: true
              });
            case 5:
              token = _context.sent;
            case 6:
              return _context.abrupt("return", {
                type: emitResponse.responseTypes.SUCCESS,
                meta: {
                  paymentMethodData: {
                    ppcp_card_payment_token: token.id,
                    ppcp_card_paypal_order_id: '',
                    ppcp_card_save_payment: shouldSavePayment
                  }
                }
              });
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", {
                type: emitResponse.responseTypes.ERROR,
                message: _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message,
                messageContext: emitResponse.noticeContexts.PAYMENTS
              });
            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    })));
    return unsubscribe;
  }, [onPaymentSetup, needsSetupToken, createPaymentToken]);
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/index.js":
/*!************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ppcp_block_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ppcp/block-data */ "@ppcp/block-data");
/* harmony import */ var _ppcp_block_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @woocommerce/blocks-checkout */ "@woocommerce/blocks-checkout");
/* harmony import */ var _woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./packages/blocks/assets/js/utils.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks */ "./packages/blocks/assets/js/hooks/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components */ "./packages/blocks/assets/js/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contexts */ "./packages/blocks/assets/js/payment-methods/credit-card/contexts/index.js");
/* harmony import */ var _hooks_use_credit_card_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/use-credit-card-context */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/use-credit-card-context.js");
/* harmony import */ var _tokenized_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tokenized-card */ "./packages/blocks/assets/js/payment-methods/credit-card/tokenized-card.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
var _excluded = ["data", "paypal"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var data = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__.getSetting)('ppcp_card_data');
var PaymentMethodComponent = function PaymentMethodComponent(props) {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalOpen = _useState2[0],
    setModalOpen = _useState2[1];
  var queryParams = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_3__.getSetting)('paypalQueryParams');
  var billing = props.billing,
    shippingData = props.shippingData;
  var email = billing.billingAddress.email;
  var paypal = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useLoadPayPalScript)(queryParams);
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_4__.STORE_KEY),
    setPaymentToken = _useDispatch.setPaymentToken;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
      var store = select(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_4__.STORE_KEY);
      return {
        emails: store.getCanceledEmails(),
        fastlane: store.getFastlane(),
        paymentToken: store.getPaymentToken(),
        customerFound: store.isCustomerFound()
      };
    }),
    emails = _useSelect.emails,
    fastlane = _useSelect.fastlane,
    paymentToken = _useSelect.paymentToken,
    customerFound = _useSelect.customerFound;
  var onTokenize = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (token) {
    setPaymentToken(token);
  }, []);
  var showSignup = data.showSignup && !emails.includes(email);
  if (paymentToken) {
    return /*#__PURE__*/React.createElement(_tokenized_card__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
      data: data,
      token: paymentToken,
      fastlane: fastlane,
      customerFound: customerFound
    }, props));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, showSignup && fastlane && /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.FastlaneLink, {
    text: data.i18n.fastlane_signup,
    logo: data.fastlane_logo,
    onClick: function onClick() {
      return setModalOpen(true);
    }
  }), fastlane && /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.FastlaneModal, {
    i18n: data.i18n,
    open: modalOpen,
    onClose: function onClose() {
      return setModalOpen(false);
    },
    fastlane: fastlane,
    shippingData: shippingData,
    onTokenize: onTokenize
  }), /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.PaymentMethodDescription, {
    description: data.description
  }), /*#__PURE__*/React.createElement(_contexts__WEBPACK_IMPORTED_MODULE_10__.CreditCardProvider, {
    data: data
  }, /*#__PURE__*/React.createElement(CreditCardForm, _extends({
    data: data,
    paypal: paypal
  }, props))));
};
var CreditCardForm = function CreditCardForm(_ref) {
  var data = _ref.data,
    paypal = _ref.paypal,
    props = _objectWithoutProperties(_ref, _excluded);
  var i18n = data.i18n,
    cardHolderNameEnabled = data.cardHolderNameEnabled;
  var _useCreditCardContext = (0,_hooks_use_credit_card_context__WEBPACK_IMPORTED_MODULE_11__.useCreditCardContext)(),
    errors = _useCreditCardContext.errors,
    isEligible = _useCreditCardContext.isEligible;
  var _useCardBreakpoints = (0,_hooks__WEBPACK_IMPORTED_MODULE_9__.useCardBreakpoints)(),
    setCardContainerRef = _useCardBreakpoints.setCardContainerRef;
  (0,_hooks__WEBPACK_IMPORTED_MODULE_9__.useCardFormHandler)(_objectSpread({
    data: data,
    paypal: paypal
  }, props));
  if (!isEligible) {
    return /*#__PURE__*/React.createElement(_woocommerce_blocks_checkout__WEBPACK_IMPORTED_MODULE_5__.StoreNotice, {
      status: 'warning',
      isDismissible: false
    }, (0,_utils__WEBPACK_IMPORTED_MODULE_6__.isUserAdmin)() ? i18n.cardsNotAvailableAdmin : i18n.cardsNotAvailable);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: 'wc-ppcp-card-payment-method__container wc-payment-form',
    ref: setCardContainerRef
  }, cardHolderNameEnabled && /*#__PURE__*/React.createElement("div", {
    className: "ppcp-card-fields--container card-name-field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ppcp-card-field--container card-name-field"
  }, /*#__PURE__*/React.createElement(CardField, {
    id: "ppcp-card-name",
    name: 'name',
    label: i18n.cardHolderLabel
  }), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: 'name',
    errors: errors
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ppcp-card-fields--container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ppcp-card-field--container card-number-field"
  }, /*#__PURE__*/React.createElement(CardField, {
    id: "ppcp-card-number",
    name: 'number',
    label: i18n.cardNumberLabel
  }), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: 'number',
    errors: errors
  })), /*#__PURE__*/React.createElement("div", {
    className: "ppcp-card-field--container card-exp-field"
  }, /*#__PURE__*/React.createElement(CardField, {
    id: "ppcp-card-exp",
    name: 'expiry',
    label: i18n.cardExpiryLabel
  }), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: 'expiry',
    errors: errors
  })), /*#__PURE__*/React.createElement("div", {
    className: "ppcp-card-field--container card-cvv-field"
  }, /*#__PURE__*/React.createElement(CardField, {
    id: 'ppcp-card-cvv',
    name: 'cvv',
    label: i18n.cardCvvLabel
  }, /*#__PURE__*/React.createElement("div", {
    className: "ppcp-card-cvv-icon"
  }, /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.CvvIcon, null))), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: 'cvv',
    errors: errors
  }))));
};
var CardField = function CardField(_ref2) {
  var id = _ref2.id,
    name = _ref2.name,
    label = _ref2.label,
    children = _ref2.children;
  var _useCreditCardContext2 = (0,_hooks_use_credit_card_context__WEBPACK_IMPORTED_MODULE_11__.useCreditCardContext)(),
    errors = _useCreditCardContext2.errors,
    cardFieldRef = _useCreditCardContext2.cardFieldRef;
  var hasError = function hasError(key, errors) {
    return _typeof(errors) === 'object' && errors.hasOwnProperty(key);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "ppcp-card-field--label"
  }, label), /*#__PURE__*/React.createElement("div", {
    id: id,
    ref: cardFieldRef(name),
    className: classnames__WEBPACK_IMPORTED_MODULE_13___default()({
      'card-field--invalid': hasError(name, errors)
    })
  }, children));
};
var ErrorMessage = function ErrorMessage(_ref3) {
  var name = _ref3.name,
    errors = _ref3.errors;
  if (errors !== null && errors !== void 0 && errors[name]) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ppcp-card-field-error",
      "data-parent": "ppcp-card-exp"
    }, data.i18n.error_codes[errors[name]]);
  }
  return null;
};
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_2__.registerPaymentMethod)({
  name: 'ppcp_card',
  ariaLabel: 'Credit/Debit Cards',
  label: /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.PaymentMethodLabel, {
    id: 'ppcp_card',
    title: data.title,
    icons: data.icon
  }),
  canMakePayment: function canMakePayment() {
    return !(0,_utils__WEBPACK_IMPORTED_MODULE_6__.isAdminOnly)();
  },
  content: /*#__PURE__*/React.createElement(PaymentMethodComponent, {
    data: data
  }),
  edit: /*#__PURE__*/React.createElement(PaymentMethodComponent, {
    data: data
  }),
  placeOrderButtonLabel: data.i18n.buttonLabel,
  supports: {
    showSavedCards: true,
    showSaveOption: data.showSaveOption,
    features: data.features
  }
});

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/credit-card/tokenized-card.js":
/*!*********************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/credit-card/tokenized-card.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TokenizedCard)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ppcp/utils */ "@ppcp/utils");
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./packages/blocks/assets/js/payment-methods/credit-card/hooks/index.js");
var _excluded = ["data", "token", "fastlane", "customerFound"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function TokenizedCard(_ref) {
  var _extensions$wc_ppcp;
  var data = _ref.data,
    token = _ref.token,
    fastlane = _ref.fastlane,
    customerFound = _ref.customerFound,
    props = _objectWithoutProperties(_ref, _excluded);
  var i18n = data.i18n,
    icons = data.icons,
    payment_format = data.payment_format;
  var cartData = props.cartData,
    emitResponse = props.emitResponse,
    eventRegistration = props.eventRegistration,
    shouldSavePayment = props.shouldSavePayment;
  var onPaymentSetup = eventRegistration.onPaymentSetup;
  var extensions = cartData.extensions;
  var needsSetupToken = (extensions === null || extensions === void 0 ? void 0 : (_extensions$wc_ppcp = extensions.wc_ppcp) === null || _extensions$wc_ppcp === void 0 ? void 0 : _extensions$wc_ppcp.needsSetupToken) || false;
  var card = token.paymentSource.card;
  card = _objectSpread(_objectSpread({}, card), {}, {
    brand: card.brand,
    last4: card.lastDigits,
    expiry: card.expiry
  });
  (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useProcessFastlaneToken)({
    token: token,
    emitResponse: emitResponse,
    onPaymentSetup: onPaymentSetup,
    needsSetupToken: needsSetupToken,
    shouldSavePayment: shouldSavePayment
  });
  var _useManageFastlaneTok = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useManageFastlaneToken)({
      fastlane: fastlane
    }),
    onCancel = _useManageFastlaneTok.onCancel,
    onChangePaymentMethod = _useManageFastlaneTok.onChangePaymentMethod;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('wc-ppcp-tokenized-card', {
      'has-customer-context': customerFound
    })
  }, /*#__PURE__*/React.createElement(CardIcon, {
    icons: icons,
    brand: card.brand.toLowerCase()
  }), /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-tokenized-card-format"
  }, (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.formatPaymentMethod)(payment_format, card)), /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-tokenized-card-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "wc-ppcp-tokenized-card-cancel",
    onClick: onCancel
  }, i18n.cancel), customerFound && /*#__PURE__*/React.createElement("a", {
    className: "wc-ppcp-tokenized-card-change",
    onClick: onChangePaymentMethod
  }, i18n.change)));
}
var CardIcon = function CardIcon(_ref2) {
  var icons = _ref2.icons,
    brand = _ref2.brand;
  var src = '';
  if (icons[brand]) {
    src = icons[brand];
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-tokenized-card-icon-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: src
  }));
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/fastlane/express-payment-component.js":
/*!*****************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/fastlane/express-payment-component.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpressPaymentComponent)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "./packages/blocks/assets/js/hooks/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./packages/blocks/assets/js/payment-methods/fastlane/hooks/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./packages/blocks/assets/js/components/index.js");
var _excluded = ["data"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function ExpressPaymentComponent(_ref) {
  var data = _ref.data,
    props = _objectWithoutProperties(_ref, _excluded);
  var billing = props.billing,
    cartData = props.cartData,
    shippingData = props.shippingData,
    setExpressPaymentError = props.setExpressPaymentError;
  var billingAddress = billing.billingAddress;
  var email = billingAddress.email;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    buttonRef = _useState2[0],
    setButtonRef = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openModal = _useState4[0],
    setOpenModal = _useState4[1];
  var resolveRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var promiseRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var queryParams = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('paypalQueryParams');
  var openFastlaneModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    promiseRef.current = new Promise(function (resolve) {
      resolveRef.current = resolve;
    });
    setOpenModal(true);
    return promiseRef.current;
  }, []);
  var onClose = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    setOpenModal(false);
    if (!skip) {
      resolveRef.current(null);
    }
  }, []);
  var onTokenize = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data) {
    resolveRef.current(data);
  }, []);
  var paypal = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useLoadPayPalScript)(queryParams);
  var fastlane = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useCreateFastlane)({
    paypal: paypal
  });
  var _useProcessFastlane = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useProcessFastlane)({
      i18n: data.i18n,
      email: email,
      onError: setExpressPaymentError,
      fastlane: fastlane,
      shippingData: shippingData,
      openFastlaneModal: openFastlaneModal
    }),
    onClick = _useProcessFastlane.onClick,
    processing = _useProcessFastlane.processing;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(props.components.LoadingMask, {
    isLoading: processing
  }, /*#__PURE__*/React.createElement("button", {
    id: "wc-ppcp-fastlane-checkout",
    className: 'wc-ppcp-fastlane-button',
    ref: setButtonRef,
    disabled: openModal || processing,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("img", {
    className: 'wc-ppcp-fastlane-icon',
    src: data.icon_url
  }))), /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_4__.FastlaneModal, {
    i18n: data.i18n,
    open: openModal,
    onClose: onClose,
    fastlane: fastlane,
    onTokenize: onTokenize,
    shippingData: shippingData
  }));
}

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/fastlane/hooks/index.js":
/*!***************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/fastlane/hooks/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateFastlane": () => (/* reexport safe */ _use_create_fastlane__WEBPACK_IMPORTED_MODULE_0__.useCreateFastlane),
/* harmony export */   "useProcessFastlane": () => (/* reexport safe */ _use_process_fastlane__WEBPACK_IMPORTED_MODULE_1__.useProcessFastlane)
/* harmony export */ });
/* harmony import */ var _use_create_fastlane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-create-fastlane */ "./packages/blocks/assets/js/payment-methods/fastlane/hooks/use-create-fastlane.js");
/* harmony import */ var _use_process_fastlane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-process-fastlane */ "./packages/blocks/assets/js/payment-methods/fastlane/hooks/use-process-fastlane.js");



/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/fastlane/hooks/use-create-fastlane.js":
/*!*****************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/fastlane/hooks/use-create-fastlane.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateFastlane": () => (/* binding */ useCreateFastlane)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ppcp_block_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ppcp/block-data */ "@ppcp/block-data");
/* harmony import */ var _ppcp_block_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_2__);



var useCreateFastlane = function useCreateFastlane(_ref) {
  var paypal = _ref.paypal;
  var fastlane = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
    return select(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY).getFastlane();
  });
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_2__.STORE_KEY),
    setFastlane = _useDispatch.setFastlane;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (paypal && paypal.Fastlane) {
      paypal.Fastlane().then(function (result) {
        setFastlane(result);
      });
    }
  }, [paypal]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setFastlane(fastlane);
  }, []);
  return fastlane;
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/fastlane/hooks/use-process-fastlane.js":
/*!******************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/fastlane/hooks/use-process-fastlane.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProcessFastlane": () => (/* binding */ useProcessFastlane)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/block-data */ "@woocommerce/block-data");
/* harmony import */ var _woocommerce_block_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ppcp_block_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ppcp/block-data */ "@ppcp/block-data");
/* harmony import */ var _ppcp_block_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ppcp/utils */ "@ppcp/utils");
/* harmony import */ var _ppcp_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ppcp_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_checkout_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/checkout/selectors */ "./packages/blocks/assets/js/data/checkout/selectors.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useProcessFastlane = function useProcessFastlane(_ref) {
  var i18n = _ref.i18n,
    email = _ref.email,
    onError = _ref.onError,
    fastlane = _ref.fastlane,
    buttonRef = _ref.buttonRef,
    shippingData = _ref.shippingData,
    openFastlaneModal = _ref.openFastlaneModal;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    processing = _useState2[0],
    setProcessing = _useState2[1];
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    email: email,
    fastlane: fastlane,
    buttonRef: buttonRef,
    onError: onError,
    shippingData: shippingData
  });
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
      var store = select(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_4__.STORE_KEY);
      return {
        emails: store.getCanceledEmails(),
        isCustomerFound: store.isCustomerFound()
      };
    }),
    emails = _useSelect.emails,
    isCustomerFound = _useSelect.isCustomerFound;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_3__.CART_STORE_KEY),
    setBillingAddress = _useDispatch.setBillingAddress;
  var _useDispatch2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_ppcp_block_data__WEBPACK_IMPORTED_MODULE_4__.STORE_KEY),
    setPaymentToken = _useDispatch2.setPaymentToken,
    addCanceledEmail = _useDispatch2.addCanceledEmail,
    setCustomerContextId = _useDispatch2.setCustomerContextId;
  var _useDispatch3 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_woocommerce_block_data__WEBPACK_IMPORTED_MODULE_3__.PAYMENT_STORE_KEY),
    setActivePaymentMethod = _useDispatch3.__internalSetActivePaymentMethod;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentData.current = _objectSpread(_objectSpread({}, currentData.current), {}, {
      email: email,
      onError: onError,
      fastlane: fastlane,
      buttonRef: buttonRef,
      shippingData: shippingData
    });
  }, [email, onError, fastlane, buttonRef, shippingData]);
  var removeEmptyValues = function removeEmptyValues(obj) {
    var result = Object.fromEntries(Object.entries(obj).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        _ = _ref3[0],
        value = _ref3[1];
      return value !== undefined && value !== null && value !== '';
    }));
    return result;
  };
  var updateShippingAddress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (address) {
    var shippingData = currentData.current.shippingData;
    var setShippingAddress = shippingData.setShippingAddress;
    setShippingAddress(removeEmptyValues({
      first_name: (address === null || address === void 0 ? void 0 : address.firstName) || '',
      last_name: address === null || address === void 0 ? void 0 : address.lastName,
      address_1: address === null || address === void 0 ? void 0 : address.addressLine1,
      address_2: address === null || address === void 0 ? void 0 : address.addressLine2,
      city: (address === null || address === void 0 ? void 0 : address.adminArea2) || '',
      state: (address === null || address === void 0 ? void 0 : address.adminArea1) || '',
      postcode: (address === null || address === void 0 ? void 0 : address.postalCode) || '',
      country: (address === null || address === void 0 ? void 0 : address.countryCode) || '',
      phone: (address === null || address === void 0 ? void 0 : address.phoneNumber) || ''
    }));
  }, []);
  var updateBillingAddress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (address) {
    setBillingAddress(removeEmptyValues({
      first_name: (address === null || address === void 0 ? void 0 : address.firstName) || '',
      last_name: address === null || address === void 0 ? void 0 : address.lastName,
      address_1: address === null || address === void 0 ? void 0 : address.addressLine1,
      address_2: address === null || address === void 0 ? void 0 : address.addressLine2,
      city: (address === null || address === void 0 ? void 0 : address.adminArea2) || '',
      state: (address === null || address === void 0 ? void 0 : address.adminArea1) || '',
      postcode: (address === null || address === void 0 ? void 0 : address.postalCode) || '',
      country: (address === null || address === void 0 ? void 0 : address.countryCode) || '',
      phone: (address === null || address === void 0 ? void 0 : address.phoneNumber) || ''
    }));
  }, [setBillingAddress]);
  var scrollToElement = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (selector) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var el = document.querySelector(selector);
    if (!el) {
      return;
    }
    var rect = el.getBoundingClientRect();
    var scrollPosition = rect.top + window.scrollY - offset;
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: scrollPosition
    });
  }, []);
  var triggerAuthentication = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(email) {
      var showSignup,
        _currentData$current,
        fastlane,
        shippingData,
        needsShipping,
        profile,
        identity,
        _yield$identity$looku,
        customerContextId,
        _yield$identity$trigg,
        profileData,
        authenticationState,
        _card$paymentSource,
        _card$paymentSource$c,
        name,
        card,
        shippingAddress,
        _selectedAddress$phon,
        _yield$profile$showSh,
        selectedAddress,
        _shippingAddress,
        token,
        _token$paymentSource,
        _token$paymentSource$,
        address,
        _name,
        a,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              showSignup = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
              _currentData$current = currentData.current, fastlane = _currentData$current.fastlane, shippingData = _currentData$current.shippingData;
              needsShipping = shippingData.needsShipping;
              profile = fastlane.profile, identity = fastlane.identity;
              _context.prev = 4;
              setProcessing(true);
              _context.next = 8;
              return identity.lookupCustomerByEmail(email);
            case 8:
              _yield$identity$looku = _context.sent;
              customerContextId = _yield$identity$looku.customerContextId;
              if (!customerContextId) {
                _context.next = 41;
                break;
              }
              _context.next = 13;
              return identity.triggerAuthenticationFlow(customerContextId);
            case 13:
              _yield$identity$trigg = _context.sent;
              profileData = _yield$identity$trigg.profileData;
              authenticationState = _yield$identity$trigg.authenticationState;
              if (!(authenticationState === 'canceled')) {
                _context.next = 21;
                break;
              }
              addCanceledEmail(email);
              setCustomerContextId(null);
              _context.next = 39;
              break;
            case 21:
              if (!(authenticationState === 'succeeded')) {
                _context.next = 39;
                break;
              }
              name = profileData.name, card = profileData.card, shippingAddress = profileData.shippingAddress;
              setCustomerContextId(customerContextId);
              if (!needsShipping) {
                _context.next = 35;
                break;
              }
              _context.next = 27;
              return profile.showShippingAddressSelector();
            case 27:
              _yield$profile$showSh = _context.sent;
              selectedAddress = _yield$profile$showSh.selectedAddress;
              if (selectedAddress) {
                _context.next = 33;
                break;
              }
              addCanceledEmail(email);
              setCustomerContextId(null);
              return _context.abrupt("return");
            case 33:
              shippingAddress = _objectSpread(_objectSpread(_objectSpread({}, selectedAddress.name), selectedAddress.address), (selectedAddress === null || selectedAddress === void 0 ? void 0 : (_selectedAddress$phon = selectedAddress.phoneNumber) === null || _selectedAddress$phon === void 0 ? void 0 : _selectedAddress$phon.nationalNumber) && {
                phoneNumber: selectedAddress.phoneNumber.nationalNumber
              });
              updateShippingAddress(shippingAddress);
            case 35:
              if (card !== null && card !== void 0 && (_card$paymentSource = card.paymentSource) !== null && _card$paymentSource !== void 0 && (_card$paymentSource$c = _card$paymentSource.card) !== null && _card$paymentSource$c !== void 0 && _card$paymentSource$c.billingAddress) {
                updateBillingAddress(_objectSpread(_objectSpread(_objectSpread({}, name), card.paymentSource.card.billingAddress), {}, {
                  phoneNumber: ((_shippingAddress = shippingAddress) === null || _shippingAddress === void 0 ? void 0 : _shippingAddress.phoneNumber) || null
                }));
              }
              setPaymentToken(card);
              setActivePaymentMethod('ppcp_card');
              scrollToElement('#radio-control-wc-payment-method-options-ppcp_card');
            case 39:
              _context.next = 47;
              break;
            case 41:
              if (!showSignup) {
                _context.next = 47;
                break;
              }
              setCustomerContextId(null);
              // display the Fastlane modal
              _context.next = 45;
              return openFastlaneModal();
            case 45:
              token = _context.sent;
              if (token) {
                if (token !== null && token !== void 0 && (_token$paymentSource = token.paymentSource) !== null && _token$paymentSource !== void 0 && (_token$paymentSource$ = _token$paymentSource.card) !== null && _token$paymentSource$ !== void 0 && _token$paymentSource$.billingAddress) {
                  address = token.paymentSource.card.billingAddress;
                  _name = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_5__.extractFullName)(token.paymentSource.card.name || '');
                  if (token.paymentSource.card.billingAddress.toPpSdkType) {
                    address = _objectSpread({
                      firstName: _name[0],
                      lastName: _name[1]
                    }, token.paymentSource.card.billingAddress.toPpSdkType());
                  } else {
                    a = token.paymentSource.card.billingAddress;
                    address = _objectSpread({
                      firstName: _name[0],
                      lastName: _name[1]
                    }, {
                      addressLine1: a.streetAddress,
                      addressLine2: a.extendedAddress,
                      postalCode: a.postalCode,
                      adminArea2: a.locality,
                      adminArea1: a.region,
                      countryCode: a.countryCodeAlpha2
                    });
                    if (needsShipping) {
                      updateShippingAddress(address);
                    }
                  }
                  updateBillingAddress(address);
                }
                setPaymentToken(token);
                setActivePaymentMethod('ppcp_card');
                scrollToElement('#radio-control-wc-payment-method-options-ppcp_card');
              }
            case 47:
              _context.next = 52;
              break;
            case 49:
              _context.prev = 49;
              _context.t0 = _context["catch"](4);
              console.info(_context.t0);
            case 52:
              _context.prev = 52;
              setProcessing(false);
              return _context.finish(52);
            case 55:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 49, 52, 55]]);
    }));
    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }(), []);
  var onClick = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var _currentData$current2, email, onError;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _currentData$current2 = currentData.current, email = _currentData$current2.email, onError = _currentData$current2.onError;
              if (email) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return", onError(i18n.email_empty));
            case 4:
              if ((0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.isEmail)(email)) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return", onError(i18n.email_invalid));
            case 6:
              _context2.next = 8;
              return triggerAuthentication(email);
            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }(), [scrollToElement, openFastlaneModal, updateBillingAddress, updateShippingAddress, triggerAuthentication]);
  return {
    emails: emails,
    onClick: onClick,
    processing: processing,
    isCustomerFound: isCustomerFound,
    triggerAuthentication: triggerAuthentication
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/fastlane/index.js":
/*!*********************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/fastlane/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @woocommerce/blocks-registry */ "@woocommerce/blocks-registry");
/* harmony import */ var _woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _express_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express-payment-component */ "./packages/blocks/assets/js/payment-methods/fastlane/express-payment-component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./packages/blocks/assets/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var data = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('ppcp_fastlane_data');
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_0__.registerExpressPaymentMethod)({
  name: 'ppcp_fastlane',
  canMakePayment: function () {
    var _canMakePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isAdminOnly)() && (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isCheckoutPage)());
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    function canMakePayment() {
      return _canMakePayment.apply(this, arguments);
    }
    return canMakePayment;
  }(),
  content: /*#__PURE__*/React.createElement(_express_payment_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data
  }),
  edit: /*#__PURE__*/React.createElement(_express_payment_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data
  }),
  supports: {
    features: data.features
  }
});

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/paypal/hooks/index.js":
/*!*************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/paypal/hooks/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePayPalFundingSources": () => (/* reexport safe */ _use_paypal_funding_sources__WEBPACK_IMPORTED_MODULE_1__.usePayPalFundingSources),
/* harmony export */   "usePayPalOptions": () => (/* reexport safe */ _use_paypal_options__WEBPACK_IMPORTED_MODULE_0__.usePayPalOptions),
/* harmony export */   "useProcessPayment": () => (/* reexport safe */ _use_process_payment__WEBPACK_IMPORTED_MODULE_2__.useProcessPayment),
/* harmony export */   "useValidateCheckout": () => (/* reexport safe */ _use_validate_checkout__WEBPACK_IMPORTED_MODULE_3__.useValidateCheckout)
/* harmony export */ });
/* harmony import */ var _use_paypal_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-paypal-options */ "./packages/blocks/assets/js/payment-methods/paypal/hooks/use-paypal-options.js");
/* harmony import */ var _use_paypal_funding_sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-paypal-funding-sources */ "./packages/blocks/assets/js/payment-methods/paypal/hooks/use-paypal-funding-sources.js");
/* harmony import */ var _use_process_payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-process-payment */ "./packages/blocks/assets/js/payment-methods/paypal/hooks/use-process-payment.js");
/* harmony import */ var _use_validate_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-validate-checkout */ "./packages/blocks/assets/js/payment-methods/paypal/hooks/use-validate-checkout.js");





/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/paypal/hooks/use-paypal-funding-sources.js":
/*!**********************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/paypal/hooks/use-paypal-funding-sources.js ***!
  \**********************************************************************************************/
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

/***/ "./packages/blocks/assets/js/payment-methods/paypal/hooks/use-paypal-options.js":
/*!**************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/paypal/hooks/use-paypal-options.js ***!
  \**************************************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./packages/blocks/assets/js/utils.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks */ "./packages/blocks/assets/js/hooks/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var usePayPalOptions = function usePayPalOptions(_ref) {
  var isExpress = _ref.isExpress,
    paypal = _ref.paypal,
    needsSetupToken = _ref.needsSetupToken,
    buttonStyles = _ref.buttonStyles,
    shippingData = _ref.shippingData,
    billing = _ref.billing,
    setError = _ref.setError,
    setPaymentData = _ref.setPaymentData,
    onClick = _ref.onClick,
    onClose = _ref.onClose,
    buttonsContainer = _ref.buttonsContainer;
  var currentShippingData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(shippingData);
  var currentBilling = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(billing);
  var currentData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    onClick: onClick,
    onClose: onClose,
    buttonState: true,
    actions: {},
    error: null,
    billing: billing,
    shipping: shippingData,
    buttonsContainer: buttonsContainer
  });
  var _useApiRequests = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useApiRequests)({
      isExpress: isExpress,
      paymentMethod: 'ppcp'
    }),
    createOrder = _useApiRequests.createOrder,
    onShippingChange = _useApiRequests.onShippingChange,
    createPaymentToken = _useApiRequests.createPaymentToken,
    createVaultSetupToken = _useApiRequests.createVaultSetupToken;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentShippingData.current = shippingData;
    currentBilling.current = billing;
    currentData.current = _objectSpread(_objectSpread({}, currentData.current), {}, {
      shipping: shippingData,
      billing: billing,
      onClick: onClick,
      onClose: onClose,
      buttonsContainer: buttonsContainer
    });
  });
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
  var onApprove = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, actions) {
      var paymentData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              paymentData = {
                order: {},
                orderId: data.orderID,
                vaultSetupToken: data.vaultSetupToken || ''
              };
              if (data.vaultSetupToken) {
                createPaymentToken(data.vaultSetupToken).then(function (response) {
                  setPaymentData(_objectSpread(_objectSpread({}, paymentData), {}, {
                    paymentToken: response
                  }));
                }).finally(function () {
                  currentData.current.buttonsContainer.classList.remove('disabled');
                });
              } else {
                actions.order.get().then(function (response) {
                  setPaymentData(_objectSpread(_objectSpread({}, paymentData), {}, {
                    order: response
                  }));
                }).catch(function (error) {
                  setError(error);
                });
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }(), [setError]);
  var onError = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (error) {
    var _error$message;
    var buttonsContainer = currentData.current.buttonsContainer;
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
    buttonsContainer.classList.remove('disabled');
  }, [setError]);
  var getOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (fundingSource) {
    var needsShipping = currentShippingData.current.needsShipping;
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
      options.onCancel = function () {
        currentData.current.buttonsContainer.classList.remove('disabled');
      };
    }
    options.onInit = function (data, actions) {
      if (!isExpress) {
        currentData.current.actions[fundingSource] = actions;
      }
    };
    if (!needsSetupToken) {
      options.createOrder = function (data, actions) {
        return createOrder(currentData.current);
      };
    } else {
      options.createVaultSetupToken = function () {
        var buttonsContainer = currentData.current.buttonsContainer;
        buttonsContainer.classList.add('disabled');
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return createVaultSetupToken.apply(void 0, args.concat([currentData.current]));
      };
    }
    if (isExpress && needsShipping && fundingSource !== 'venmo') {
      options.onShippingChange = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return onShippingChange.apply(void 0, args.concat([currentData.current]));
      };
    }
    return options;
  }, [paypal, isExpress, createOrder, createVaultSetupToken, onApprove, onError, createOrder, onShippingChange, needsSetupToken, setError]);
  return {
    getOptions: getOptions
  };
};

/***/ }),

/***/ "./packages/blocks/assets/js/payment-methods/paypal/hooks/use-process-payment.js":
/*!***************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/paypal/hooks/use-process-payment.js ***!
  \***************************************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./packages/blocks/assets/js/utils.js");
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
  var convertPaymentTokenToAddress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (paymentToken) {
    var _data$shipping, _data$phone, _data$phone$phone_num;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'billing';
    var result = {};
    var data = paymentToken.payment_source.paypal;
    var needsShipping = currentShippingData.current.needsShipping;
    if (type === 'billing') {
      var _data$name, _data$name2;
      if (data !== null && data !== void 0 && (_data$name = data.name) !== null && _data$name !== void 0 && _data$name.given_name) {
        result = _objectSpread(_objectSpread({}, result), {}, {
          first_name: data.name.given_name
        });
      }
      if (data !== null && data !== void 0 && (_data$name2 = data.name) !== null && _data$name2 !== void 0 && _data$name2.surname) {
        result = _objectSpread(_objectSpread({}, result), {}, {
          last_name: data.name.surname
        });
      }
    }
    if (needsShipping && (_data$shipping = data.shipping) !== null && _data$shipping !== void 0 && _data$shipping.address) {
      var _data$shipping2, _data$shipping2$name;
      result = _objectSpread(_objectSpread({}, result), (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.convertPayPalAddressToCart)(data.shipping.address));
      if (type === 'shipping' && (_data$shipping2 = data.shipping) !== null && _data$shipping2 !== void 0 && (_data$shipping2$name = _data$shipping2.name) !== null && _data$shipping2$name !== void 0 && _data$shipping2$name.full_name) {
        var name = (0,_ppcp_utils__WEBPACK_IMPORTED_MODULE_1__.extractFullName)(data.shipping.name.full_name);
        result = _objectSpread(_objectSpread({}, result), extractName(name));
      }
    }
    if (data !== null && data !== void 0 && data.email_address && isExpress) {
      result = _objectSpread(_objectSpread({}, result), {}, {
        email: data.email_address
      });
    }
    if (data !== null && data !== void 0 && (_data$phone = data.phone) !== null && _data$phone !== void 0 && (_data$phone$phone_num = _data$phone.phone_number) !== null && _data$phone$phone_num !== void 0 && _data$phone$phone_num.national_number) {
      result = _objectSpread(_objectSpread({}, result), {}, {
        phone: data.phone.phone_number.national_number
      });
    }
    return result;
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
          _currentPaymentData$c2 = _currentPaymentData$c.paymentToken,
          paymentToken = _currentPaymentData$c2 === void 0 ? null : _currentPaymentData$c2,
          _currentPaymentData$c3 = _currentPaymentData$c.order,
          order = _currentPaymentData$c3 === void 0 ? {} : _currentPaymentData$c3;
        var response = {
          meta: _objectSpread({
            paymentMethodData: {
              ppcp_paypal_order_id: orderId,
              ppcp_payment_token: (paymentToken === null || paymentToken === void 0 ? void 0 : paymentToken.id) || ''
            }
          }, isExpress && {
            billingAddress: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_BILLING_ADDRESS), billingAddress), convertOrderDataToAddress(order)), paymentToken && convertPaymentTokenToAddress(paymentToken))
          })
        };
        if (needsShipping && isExpress) {
          response.meta.shippingAddress = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_SHIPPING_ADDRESS), shippingAddress), convertShippingAddress(order)), paymentToken && convertPaymentTokenToAddress(paymentToken, 'shipping'));
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

/***/ "./packages/blocks/assets/js/payment-methods/paypal/hooks/use-validate-checkout.js":
/*!*****************************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/paypal/hooks/use-validate-checkout.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useValidateCheckout": () => (/* binding */ useValidateCheckout)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./packages/blocks/assets/js/utils.js");


var useValidateCheckout = function useValidateCheckout(_ref) {
  var isExpress = _ref.isExpress,
    paymentData = _ref.paymentData,
    emitResponse = _ref.emitResponse,
    onCheckoutValidation = _ref.onCheckoutValidation;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isExpress) {
      var unsubscribe = onCheckoutValidation(function () {
        // validate that the order has been created.
        if (!(paymentData !== null && paymentData !== void 0 && paymentData.orderId) && !(paymentData !== null && paymentData !== void 0 && paymentData.paymentToken)) {
          return {
            type: emitResponse.responseTypes.FAIL,
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

/***/ "./packages/blocks/assets/js/payment-methods/paypal/index.js":
/*!*******************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/paypal/index.js ***!
  \*******************************************************************/
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
/* harmony import */ var _simple_paypal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-paypal */ "./packages/blocks/assets/js/payment-methods/paypal/simple-paypal.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./packages/blocks/assets/js/hooks/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./packages/blocks/assets/js/payment-methods/paypal/hooks/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components */ "./packages/blocks/assets/js/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./packages/blocks/assets/js/utils.js");
var _excluded = ["context"];
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
  var _extensions$wc_ppcp;
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
    cartData = _ref2.cartData;
  var queryParams = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_2__.getSetting)('paypalQueryParams');
  var vault = queryParams.vault === 'true';
  var billingAddress = billing.billingAddress;
  var onPaymentSetup = eventRegistration.onPaymentSetup,
    onCheckoutFail = eventRegistration.onCheckoutFail,
    onCheckoutValidation = eventRegistration.onCheckoutValidation;
  var responseTypes = emitResponse.responseTypes,
    noticeContexts = emitResponse.noticeContexts;
  var extensions = cartData.extensions;
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
    setButtonsContainer(el);
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
    emitResponse: emitResponse,
    paymentData: paymentData,
    onCheckoutValidation: onCheckoutValidation
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
      onClose: onClose,
      needsSetupToken: (extensions === null || extensions === void 0 ? void 0 : (_extensions$wc_ppcp = extensions.wc_ppcp) === null || _extensions$wc_ppcp === void 0 ? void 0 : _extensions$wc_ppcp.needsSetupToken) || false,
      buttonsContainer: buttonsContainer
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (paypal && sources && buttonsContainer) {
      sources.forEach(function (source) {
        var button = paypal.Buttons(getOptions(source));
        if (button.isEligible()) {
          button.render(buttonsContainer);
        }
      });
    }
  }, [paypal, sources, buttonsContainer]);
  if (!isExpress && paymentData) {
    if (paymentData.paymentToken) {
      var _paymentData$paymentT, _paymentData$paymentT2, _paymentData$paymentT3;
      return /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.PaymentMethodCard, {
        description: (_paymentData$paymentT = paymentData.paymentToken) === null || _paymentData$paymentT === void 0 ? void 0 : (_paymentData$paymentT2 = _paymentData$paymentT.payment_source) === null || _paymentData$paymentT2 === void 0 ? void 0 : (_paymentData$paymentT3 = _paymentData$paymentT2.paypal) === null || _paymentData$paymentT3 === void 0 ? void 0 : _paymentData$paymentT3.email_address,
        icon: data('icons').find(function (icon) {
          return icon.id === 'paypal_simple';
        }),
        label: _utils__WEBPACK_IMPORTED_MODULE_8__.i18n.cancel,
        onCancel: clearPaymentData
      });
    }
    return /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.PaymentMethodCard, {
      description: paymentData.order.payer.email_address,
      icon: data('icons').find(function (icon) {
        return icon.id === 'paypal_simple';
      }),
      label: _utils__WEBPACK_IMPORTED_MODULE_8__.i18n.cancel,
      onCancel: clearPaymentData
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, !isExpress && /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.PaymentMethodDescription, {
    description: data('description')
  }), /*#__PURE__*/React.createElement("div", {
    className: "wc-ppcp-paypal__buttons",
    ref: setButtonContainerRef
  }));
};
var context = 'express_checkout';
if ((0,_utils__WEBPACK_IMPORTED_MODULE_8__.isCartPage)()) {
  context = 'cart';
}
(0,_woocommerce_blocks_registry__WEBPACK_IMPORTED_MODULE_1__.registerExpressPaymentMethod)({
  name: 'paymentplugins_ppcp_express',
  gatewayId: 'ppcp',
  paymentMethodId: 'ppcp',
  canMakePayment: function canMakePayment() {
    return !(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isAdminOnly)() && ((0,_utils__WEBPACK_IMPORTED_MODULE_8__.isCartPage)() && isCartEnabled() || (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isCheckoutPage)() && isExpressEnabled());
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
    label: /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.PaymentMethodLabel, {
      id: "ppcp",
      title: data('title'),
      icons: data('icons').find(function (icon) {
        return icon.id === 'paypal';
      })
    }),
    ariaLabel: 'PayPal',
    canMakePayment: function canMakePayment() {
      return !(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isAdminOnly)() && (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isCheckoutPage)();
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
    label: /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.PaymentMethodLabel, {
      id: "ppcp",
      title: data('title'),
      icons: data('icons').find(function (icon) {
        return icon.id === 'paypal';
      })
    }),
    ariaLabel: 'PayPal',
    canMakePayment: function canMakePayment() {
      return !(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isAdminOnly)() && (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isCheckoutPage)();
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

/***/ "./packages/blocks/assets/js/payment-methods/paypal/simple-paypal.js":
/*!***************************************************************************!*\
  !*** ./packages/blocks/assets/js/payment-methods/paypal/simple-paypal.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @woocommerce/settings */ "@woocommerce/settings");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./packages/blocks/assets/js/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./packages/blocks/assets/js/utils.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ "./packages/blocks/assets/js/hooks/index.js");
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





var data = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_1__.getSetting)('ppcp_data');
var SimplePayPal = function SimplePayPal(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PaymentMethodDescription, {
    description: data.description
  }), /*#__PURE__*/React.createElement(PayPalRedirectNotice, props));
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
  (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useProcessPaymentFailure)({
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
      return /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PaymentMethodCard, {
        description: paymentData.billingTokenData.payer_info.email,
        icon: data('icons').find(function (icon) {
          return icon.id === 'paypal_simple';
        }),
        label: _utils__WEBPACK_IMPORTED_MODULE_3__.i18n.cancel,
        onCancel: clearPaymentData
      });
    }
    return /*#__PURE__*/React.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PaymentMethodCard, {
      description: paymentData.order.payer.email_address,
      icon: data('icons').find(function (icon) {
        return icon.id === 'paypal_simple';
      }),
      label: _utils__WEBPACK_IMPORTED_MODULE_3__.i18n.cancel,
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


/***/ }),

/***/ "./packages/blocks/assets/js/blocks/checkout/block.json":
/*!**************************************************************!*\
  !*** ./packages/blocks/assets/js/blocks/checkout/block.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"wc-ppcp/checkout-block","version":"2.0.0","title":"PayPal checkout block","category":"woocommerce","description":"Adds an invisible block to the checkout page.","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-fields-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"textdomain":"pymntpl-paypal-woocommerce"}');

/***/ }),

/***/ "./packages/blocks/assets/js/blocks/fastlane/block.json":
/*!**************************************************************!*\
  !*** ./packages/blocks/assets/js/blocks/fastlane/block.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"wc-ppcp/fastlane-block","version":"2.0.0","title":"PayPal Fastlane block","category":"woocommerce","description":"Adds an invisible Fastlane block to the checkout page.","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-fields-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"textdomain":"pymntpl-paypal-woocommerce"}');

/***/ })

}]);
//# sourceMappingURL=blocks-commons.js.map