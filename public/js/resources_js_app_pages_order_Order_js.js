"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_pages_order_Order_js"],{

/***/ "./resources/js/app/pages/order/ClientForm.css.js":
/*!********************************************************!*\
  !*** ./resources/js/app/pages/order/ClientForm.css.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nwidth:100%;\npadding:0rem;\ntextarea{\n    width:98%;\n    min-height:50px;\n    padding:.5rem 1%;\n}\n"])));
var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nfont-size:1rem;\npadding: .5rem 1%;\nwidth:98%;\nmargin:1rem auto;\n&.half-width{\n    width:46%;\n    &.mr-1{\n        margin-right:1%;\n    }\n}\n\n\n"])));

/***/ }),

/***/ "./resources/js/app/pages/order/ClientForm.js":
/*!****************************************************!*\
  !*** ./resources/js/app/pages/order/ClientForm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ClientForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientForm.css */ "./resources/js/app/pages/order/ClientForm.css.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function ClientForm(_ref) {
  var getter = _ref.getter,
      data = _ref.data;

  var handleChange = function handleChange(e) {
    getter(_objectSpread(_objectSpread({}, data), {}, _defineProperty({}, e.target.id, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Form, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      children: "Your address details"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Input, {
      className: "half-width mr-1",
      type: "text",
      id: "name",
      placeholder: "Name",
      onChange: function onChange(e) {
        return handleChange(e);
      },
      value: data.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Input, {
      className: "half-width",
      type: "text",
      id: "surname",
      placeholder: "Surname",
      value: data.surname,
      onChange: function onChange(e) {
        return handleChange(e);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "email",
      id: "email",
      placeholder: "Email",
      value: data.email,
      onChange: function onChange(e) {
        return handleChange(e);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "text",
      id: "mobile",
      placeholder: "Contact Phone",
      value: data.mobile,
      onChange: function onChange(e) {
        return handleChange(e);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "text",
      id: "street",
      placeholder: "Street",
      value: data.street,
      onChange: function onChange(e) {
        return handleChange(e);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Input, {
      className: "half-width mr-1",
      type: "text",
      id: "post",
      placeholder: "Post code",
      value: data.post,
      onChange: function onChange(e) {
        return handleChange(e);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Input, {
      className: "half-width",
      type: "text",
      id: "city",
      placeholder: "City",
      value: data.city,
      onChange: function onChange(e) {
        return handleChange(e);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "text",
      id: "province",
      placeholder: "Province",
      value: data.province,
      onChange: function onChange(e) {
        return handleChange(e);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClientForm_css__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "text",
      id: "country",
      value: data.country,
      placeholder: "Country",
      onChange: function onChange(e) {
        return handleChange(e);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
      type: "text",
      id: "message",
      placeholder: "Your message...",
      onChange: function onChange(e) {
        return handleChange(e);
      },
      value: data.message
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(ClientForm));

/***/ }),

/***/ "./resources/js/app/pages/order/Order.css.js":
/*!***************************************************!*\
  !*** ./resources/js/app/pages/order/Order.css.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "Col": () => (/* binding */ Col)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmin-height:100vh;\nmin-width:100%;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nflex-direction:column;\nh1{\n    color:", ";\n    font-size:6rem;\n}\nmargin-bottom:5%;\nmargin-top:14vh;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.orange;
});
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nbackground:#1DF2BA;\npadding:2rem;\nwidth:70%;\ndisplay:flex;\njustify-content:space-around;\n\n"])));
var Col = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\npadding:1rem;\nwidth:50%;\nbackground-color: #fdfdfd;\ntable{\n    width:100%;\n    border-collapse: separate;\n    display:table;\n    \n}\ntable.short-summary{\n    font-size:1rem;\n    td{\n        border-bottom: 2px solid #d7d7d7;\n        font-size:1rem;\n        margin-bottom:.5rem;\n        line-height:2rem;\n    }\n}\nh3{\n    margin:1rem 0;\n}\ninput{\n    font-size:1rem;\n    margin:1rem 0;\n}\nlabel{\n    margin-left:.5rem;\n}\n.btn{\n    margin-top:10%;\n}\n.msg-info{\n    text-align:center;\n    color:", ";\n    & a{\n        color:", ";\n        &:hover{\n            color:", "; \n        }\n    }\n}\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.lightGreen;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.orange;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.green;
});

/***/ }),

/***/ "./resources/js/app/pages/order/Order.js":
/*!***********************************************!*\
  !*** ./resources/js/app/pages/order/Order.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Order_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.css */ "./resources/js/app/pages/order/Order.css.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ClientForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClientForm */ "./resources/js/app/pages/order/ClientForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/axios */ "./resources/js/app/services/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var LoginMsg = function LoginMsg() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h4", {
    className: "msg-info",
    children: ["Please ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      to: "/user-login",
      children: "login"
    }), " or place order as guest."]
  });
};

function Order(_ref) {
  var cart = _ref.cart,
      isLogged = _ref.isLogged,
      user = _ref.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    surname: '',
    email: '',
    mobile: '',
    street: '',
    post: '',
    city: '',
    province: '',
    country: '',
    message: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'),
      _useState4 = _slicedToArray(_useState3, 2),
      delivery = _useState4[0],
      setDev = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      order = _useState6[0],
      setOrder = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1'),
      _useState8 = _slicedToArray(_useState7, 2),
      payment = _useState8[0],
      setPayment = _useState8[1];

  var OrderItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return cart.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
          children: item.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
          children: ["$", item.price]
        })]
      }, item.id);
    });
  }, [cart]);
  var netto = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var sum = 0;
    cart.forEach(function (item) {
      sum += item.price * item.qty;
    });
    return sum;
  }, [cart]);

  var totalBrutto = function totalBrutto() {
    return (netto + netto * .23).toFixed(2);
  };

  var handleOrder = function handleOrder(e) {
    var value = e.target.value;
    var totalOrder = parseFloat(totalBrutto()) + parseFloat(value);
    setDev(value);
    setOrder(totalOrder.toFixed(2));
  };

  var handlePlaceorder = function handlePlaceorder() {
    var form = {
      cart: cart,
      details: data,
      netto: netto,
      brutto: totalBrutto(),
      payment: payment,
      delivery: delivery
    };
    _services_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post('/new-order', {
      order_data: JSON.stringify(form)
    }).then(function (res) {
      console.log(res.data);
    })["catch"](function (err) {
      console.log(err.response.data);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setOrder(totalBrutto);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (Object.keys(user).length > 0) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone: user.mobile
      }));
    }
  }, [user]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Order_css__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
      children: "Order summary"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Order_css__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Order_css__WEBPACK_IMPORTED_MODULE_1__.Col, {
        children: [!isLogged ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LoginMsg, {}) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ClientForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: data,
          getter: setData
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Order_css__WEBPACK_IMPORTED_MODULE_1__.Col, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            children: "Products:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("table", {
            className: "short-summary",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(OrderItems, {})
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            children: "Delivery:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "radio",
            id: "1",
            name: "delivery",
            value: "10",
            onClick: function onClick(e) {
              return handleOrder(e);
            },
            defaultChecked: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            htmlFor: "1",
            children: "DPD delivery - $10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "radio",
            id: "2",
            name: "delivery",
            value: "0",
            onClick: function onClick(e) {
              return handleOrder(e);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            htmlFor: "2",
            children: "On place - free"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            children: "Payment method:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "radio",
            id: "1",
            name: "payment",
            onClick: function onClick(e) {
              return setPayment(e.target.id);
            },
            defaultChecked: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            htmlFor: "1",
            children: "Bank transfer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "radio",
            id: "2",
            name: "payment",
            onClick: function onClick(e) {
              return setPayment(e.target.id);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            htmlFor: "2",
            children: "PayPal"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            children: "Summary:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            children: ["Total to pay: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("b", {
              children: ["$", order, " brutto"]
            }), " (with 23% VAT)"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: "btn",
            onClick: handlePlaceorder,
            children: "Place order"
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(function (state) {
  return {
    cart: state.shop.cart,
    isLogged: state.auth.isLogged,
    user: state.auth.user
  };
})(Order));

/***/ })

}]);