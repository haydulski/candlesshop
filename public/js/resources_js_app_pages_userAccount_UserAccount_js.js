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
var Column = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nwidth:50%;\nmargin:3rem;\nbackground:lightgray;\nborder-radius:6px;\nmin-height:30%;\npadding:2rem;\nh3{\n    font-size:2rem;\n}\n&.second{\n    padding-top:4rem;\n}\np {\n    margin:1rem 0;\n}\n"])));

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
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/axios */ "./resources/js/app/services/axios.js");
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/authActions */ "./resources/js/app/redux/actions/authActions.js");
/* harmony import */ var _UserAccount_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserAccount.css */ "./resources/js/app/pages/userAccount/UserAccount.css.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function UserAccount(_ref) {
  var user = _ref.user,
      setUser = _ref.setUser,
      logoutUser = _ref.logoutUser;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

  var getDetails = function getDetails() {
    _services_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('/user').then(function (response) {
      setUser(response.data);
    })["catch"](function (err) {
      navigate('/user-login', {
        replace: true
      });
    });
  };

  var logoutAction = function logoutAction() {
    logoutUser();
    navigate('/user-login', {
      replace: true
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user.length === 0) {
      console.log('work');
      getDetails();
    }
  }, [setUser]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_UserAccount_css__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_UserAccount_css__WEBPACK_IMPORTED_MODULE_4__.Column, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
        children: "My account"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
        children: [user.name, " ", user.surname]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: ["Mobile: ", user.mobile]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: ["Email: ", user.email]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        children: ["User id: ", user.id]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: "btn btn-secondary",
        onClick: logoutAction,
        children: "Log out"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_UserAccount_css__WEBPACK_IMPORTED_MODULE_4__.Column, {
      className: "second",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        children: "My shoppings:"
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    user: state.auth.user
  };
}, {
  setUser: _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_3__.setUser,
  logoutUser: _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_3__.logoutUser
})(UserAccount));

/***/ }),

/***/ "./resources/js/app/redux/actions/authActions.js":
/*!*******************************************************!*\
  !*** ./resources/js/app/redux/actions/authActions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUser": () => (/* binding */ setUser),
/* harmony export */   "logoutUser": () => (/* binding */ logoutUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/auth */ "./resources/js/app/enums/auth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var setUser = function setUser(data) {
  return function (dispatch) {
    dispatch({
      type: _enums_auth__WEBPACK_IMPORTED_MODULE_1__.USER_LOAD.USER_LOAD_REQUEST
    });

    try {
      dispatch({
        type: _enums_auth__WEBPACK_IMPORTED_MODULE_1__.USER_LOAD.USER_LOAD_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: _enums_auth__WEBPACK_IMPORTED_MODULE_1__.USER_LOAD.USER_LOAD_FAILURE
      });
    }
  };
};
var logoutUser = function logoutUser() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              localStorage.removeItem('userId');
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/logout');

            case 4:
              dispatch({
                type: _enums_auth__WEBPACK_IMPORTED_MODULE_1__.USER_LOGOUT.USER_LOGOUT_SUCCESS
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              dispatch({
                type: _enums_auth__WEBPACK_IMPORTED_MODULE_1__.USER_LOGOUT.USER_LOGOUT_FAILURE
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ })

}]);