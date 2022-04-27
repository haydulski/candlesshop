"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_pages_auth_Login_js"],{

/***/ "./resources/js/app/pages/auth/Login.css.js":
/*!**************************************************!*\
  !*** ./resources/js/app/pages/auth/Login.css.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormSection": () => (/* binding */ FormSection),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var FormSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmin-height:100vh;\nmin-width:100vw;\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n"])));
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nwidth:auto;\nmin-height:20%;\nbackground-color:", ";\npadding:1rem;\nfont-size:1rem;\nborder-radius:6px;\n& input[type=submit]{\n    cursor:pointer;\n    background-color:", ";\n    color:white;\n    &:hover{\n        background-color:white;\n        color:gray;\n    }\n}\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.lightGreen;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.orange;
});
var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\nborder-radius:6px;\nmin-height:2rem;\nfont-size:1rem;\ndisplay:block;\npadding:.5rem 1rem;\nborder:1px solid lightgray;\nmargin: 1rem 0;\n"])));

/***/ }),

/***/ "./resources/js/app/pages/auth/Login.js":
/*!**********************************************!*\
  !*** ./resources/js/app/pages/auth/Login.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.css */ "./resources/js/app/pages/auth/Login.css.js");
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/authActions */ "./resources/js/app/redux/actions/authActions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Login(_ref) {
  var isLogged = _ref.isLogged,
      setUser = _ref.setUser;
  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.withCredentials) = true;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

  var handleLogin = function handleLogin() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/sanctum/csrf-cookie').then(function (response) {});
    var user1 = {
      email: email,
      password: password
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/login', user1).then(function (response) {
      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/v1/user').then(function (response) {
        setUser(response.data);
        history('/my-account', {
          replace: true
        });
      })["catch"](function (err) {
        history('/user-login', {
          replace: true
        });
      });
    })["catch"](function (err) {
      setEmail('');
      setPassword('');
      localStorage.removeItem('userId');
    });
  };

  return isLogged ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Navigate, {
    to: "/my-account",
    replace: true
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Login_css__WEBPACK_IMPORTED_MODULE_3__.FormSection, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Login_css__WEBPACK_IMPORTED_MODULE_3__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Login_css__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "email",
        value: email,
        onChange: function onChange(e) {
          return setEmail(e.target.value);
        },
        placeholder: "Your email"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Login_css__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "password",
        onChange: function onChange(e) {
          return setPassword(e.target.value);
        },
        placeholder: "Password"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Login_css__WEBPACK_IMPORTED_MODULE_3__.Input, {
        type: "submit",
        value: "Log in",
        onClick: handleLogin
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(function (state) {
  return {
    isLogged: state.auth.isLogged
  };
}, {
  setUser: _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_4__.setUser
})(Login));

/***/ })

}]);