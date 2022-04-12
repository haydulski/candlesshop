"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_pages_category_Category_js"],{

/***/ "./resources/js/app/pages/category/Category.css.js":
/*!*********************************************************!*\
  !*** ./resources/js/app/pages/category/Category.css.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _imgs_main_page_header_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../imgs/main-page-header.jpg */ "./resources/js/app/imgs/main-page-header.jpg");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\npadding:10% 8%;\ntext-align:center;\nh1{\n    color:", ";\n    text-transform: capitalize;\n}\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.main;
});

/***/ }),

/***/ "./resources/js/app/pages/category/Category.js":
/*!*****************************************************!*\
  !*** ./resources/js/app/pages/category/Category.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Category_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.css */ "./resources/js/app/pages/category/Category.css.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var ProductsGrid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_app_components_products-grid_ProductsGrid_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/products-grid/ProductsGrid */ "./resources/js/app/components/products-grid/ProductsGrid.js"));
});

function Category() {
  console.log('work');

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
      slug = _useParams.slug;

  var catTitle = slug.split('-');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Category_css__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      children: catTitle[0]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: "\u0141adowanie..."
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProductsGrid, {
        width: "33%",
        mode: "category",
        limit: "50",
        color: "orange",
        catName: slug
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);

/***/ })

}]);