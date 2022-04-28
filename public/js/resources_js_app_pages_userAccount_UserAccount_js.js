"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_pages_userAccount_UserAccount_js"],{

/***/ "./resources/js/app/pages/userAccount/UserAccount.css.js":
/*!***************************************************************!*\
  !*** ./resources/js/app/pages/userAccount/UserAccount.css.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Column": () => (/* binding */ Column)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmin-height:30vh;\nmin-width:100%;\ndisplay:flex;\njustify-contant:center;\npadding-top:10vh;\n\n"])));
var Column = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nwidth:50%;\nmargin:3rem;\nbackground:lightgray;\nborder-radius:6px;\nmin-height:30%;\npadding:2rem;\nh3{\n    font-size:2rem;\n}\n&.second{\n    padding-top:4rem;\n    ul{\n        list-style:none;\n        margin-top:3rem;\n        li{\n            line-height:2rem;\n        }\n    }\n}\np {\n    margin:1rem 0;\n}\n"])));

/***/ }),

/***/ "./resources/js/app/pages/userAccount/UserAccount.js":
/*!***********************************************************!*\
  !*** ./resources/js/app/pages/userAccount/UserAccount.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/authActions */ "./resources/js/app/redux/actions/authActions.js");
/* harmony import */ var _UserAccount_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserAccount.css */ "./resources/js/app/pages/userAccount/UserAccount.css.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var orderStatusName = function orderStatusName(id) {
  switch (id) {
    case 1:
      return 'New';

    case 2:
      return 'Checkout';

    case 3:
      return 'Paid';

    case 4:
      return 'Failed';

    case 5:
      return 'Shipped';

    case 6:
      return 'Delivered';

    case 7:
      return 'Returned';

    case 8:
      return 'Complete';

    default:
      return 'Undefined';
  }
};

function UserAccount(_ref) {
  var user = _ref.user,
      logoutUser = _ref.logoutUser;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();

  var logoutAction = function logoutAction() {
    logoutUser();
    navigate('/', {
      replace: true
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_UserAccount_css__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_UserAccount_css__WEBPACK_IMPORTED_MODULE_3__.Column, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        children: "My account"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h2", {
        children: [user.name, " ", user.surname]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: ["Mobile: ", user.mobile]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: ["Email: ", user.email]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: ["User id: ", user.id]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: "btn btn-secondary",
        onClick: logoutAction,
        children: "Log out"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_UserAccount_css__WEBPACK_IMPORTED_MODULE_3__.Column, {
      className: "second",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
        children: "My shoppings:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
        children: user.orders.map(function (order, key) {
          var date = new Date(order['created_at']);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
            children: [date.toISOString().split('T')[0], " - Order id: ", order['id'], ", status: ", orderStatusName(order['status'])]
          }, key);
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    user: state.auth.user
  };
}, {
  logoutUser: _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_2__.logoutUser
})(UserAccount));

/***/ })

}]);