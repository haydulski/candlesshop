"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_pages_singleProduct_SingleProduct_js"],{

/***/ "./resources/js/app/pages/singleProduct/SingleProduct.css.js":
/*!*******************************************************************!*\
  !*** ./resources/js/app/pages/singleProduct/SingleProduct.css.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "CounterInput": () => (/* binding */ CounterInput)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nwidth:100%;\ndisplay:flex;\npadding:10% 8% 5%;\n.product-details{\n    width:50%;\n    padding:0 5%;\n    h1 {\n        margin:0;\n        color: ", "\n    }\n    h2{\n        font-size: 3rem;\n        margin-bottom:2rem;\n    }\n    p{\n        font-size:2rem;\n        margin:2rem 0;\n        color: ", "\n    }\n    .btn{\n        padding:.5rem 1rem;\n        font-size:1.5rem;\n        font-weight:700;\n        background-color: ", ";\n        color:white;\n        border:none;\n        &:hover{\n            background-color: ", ";\n        }\n    }\n}\n.main-img{\n    width:50%;\n    img {\n        width:80%;\n        height:auto;\n        object-fit:cover;\n    }\n}\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.orange;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.green;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.orange;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.lightGreen;
});
var Description = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nfont-size:1.2rem !important;\nwidth:80%;\n"])));
var CounterInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay:flex;\nwidth:12rem;\nheight:2rem;\nmargin:2rem 0;\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ndiv.minus,div.plus{\n    width:33%;\n    background:#eee;\n    border:1px solid #ebebeb;\n    cursor:pointer;\n    color:black;\n    line-height:2rem;\n    text-align:center;\n    font-weight:bold;\n}\ninput{\n    width:33%;\n    background:#eee;\n    -moz-appearance: textfield;\n    background:white;\n    text-align:center;\n    font-weight:bold;\n}\n"])));

/***/ }),

/***/ "./resources/js/app/pages/singleProduct/SingleProduct.js":
/*!***************************************************************!*\
  !*** ./resources/js/app/pages/singleProduct/SingleProduct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/shopActions */ "./resources/js/app/redux/actions/shopActions.js");
/* harmony import */ var _SingleProduct_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SingleProduct.css */ "./resources/js/app/pages/singleProduct/SingleProduct.css.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function SingleProduct(_ref) {
  var products = _ref.products,
      cart = _ref.cart,
      addProductToCart = _ref.addProductToCart;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      slug = _useParams.slug;

  var search = products.find(function (el) {
    return el.slug === slug;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(search),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      counter = _useState4[0],
      setCounter = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    search = products.find(function (el) {
      return el.slug === slug;
    });
    setProduct(search);
  }, [products]);

  var handleCart = function handleCart() {
    var prod = {
      id: product.id,
      title: product.title,
      price: product.price,
      photo: product.picture,
      qty: counter
    };
    addProductToCart(cart, prod);
  };

  return product === null || product === undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: "\u0141adowanie..."
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_SingleProduct_css__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "main-img",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: '/storage/' + product.picture,
        alt: "Picture of product"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "product-details",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        children: product.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h2", {
        children: ["$", product.price]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: ["Available: ", product.stock_qty]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_SingleProduct_css__WEBPACK_IMPORTED_MODULE_3__.CounterInput, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "minus",
          onClick: function onClick() {
            return setCounter(counter > 1 ? counter - 1 : 1);
          },
          children: "-"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
          type: "number",
          name: "order_qty",
          step: "1",
          min: "1",
          max: "10",
          id: "order_qty",
          value: counter,
          readOnly: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "plus",
          onClick: function onClick() {
            return setCounter(counter < 10 ? counter + 1 : 10);
          },
          children: "+"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        className: "btn btn-secondary",
        onClick: handleCart,
        children: "Add to cart"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SingleProduct_css__WEBPACK_IMPORTED_MODULE_3__.Description, {
        children: product.description
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(function (state) {
  return {
    products: state.productsState.products,
    cart: state.shop.cart
  };
}, {
  addProductToCart: _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_2__.addProductToCart
})(SingleProduct));

/***/ })

}]);