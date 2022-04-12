"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_components_products-grid_ProductsGrid_js"],{

/***/ "./resources/js/app/components/products-grid/ProductsGrid.css.js":
/*!***********************************************************************!*\
  !*** ./resources/js/app/components/products-grid/ProductsGrid.css.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\ndisplay:flex;\njustify-content:space-between;\nwidth:100%;\nflex-wrap:wrap;\n"])));
var Product = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nwidth:", ";\ntext-align:left;\nmargin-top:2rem;\n& img{\n    width: 90%;\nheight: 400px;\nobject-fit: cover;\n}\n& p.title{\n    font-size:1.75rem;\n    font-weight:bold;\n    color:", "\n}\n& p.price{\n    font-size:1.75rem;\n    font-weight:medium;\n    color:", "\n}\n"])), function (_ref) {
  var width = _ref.width;
  return width;
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return color =  true ? theme.colors.green : 0;
}, function (_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme;
  return color =  true ? theme.colors.green : 0;
});

/***/ }),

/***/ "./resources/js/app/components/products-grid/ProductsGrid.js":
/*!*******************************************************************!*\
  !*** ./resources/js/app/components/products-grid/ProductsGrid.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ProductsGrid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsGrid.css */ "./resources/js/app/components/products-grid/ProductsGrid.css.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function ProductsGrid(_ref) {
  var width = _ref.width,
      color = _ref.color,
      mode = _ref.mode,
      products = _ref.products,
      limit = _ref.limit,
      catName = _ref.catName;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, [products]);

  var filterByDateProducts = function filterByDateProducts() {
    var filtered = products;
    filtered.sort(function compare(a, b) {
      var dateA = new Date(a.created_at);
      var dateB = new Date(b.created_at);
      return dateB - dateA;
    });
    return filtered;
  };

  var filterByPriceProducts = function filterByPriceProducts() {
    var filtered = products;
    filtered.sort(function compare(a, b) {
      var dateA = parseFloat(a.price);
      var dateB = parseFloat(b.price);
      return dateB > dateA;
    });
    return filtered;
  };

  var filterByCats = function filterByCats() {
    var filtered = [];
    products.forEach(function (prod) {
      var isTrue = prod.categories.find(function (cat) {
        return cat.slug === catName;
      });

      if (isTrue !== undefined) {
        filtered.push(prod);
      }
    });
    console.log(filtered);
    return filtered;
  };

  var filterAction = function filterAction(action) {
    switch (action) {
      case 'best':
        return filterByPriceProducts();

      case 'newest':
        return filterByDateProducts();

      case 'category':
        return filterByCats();

      default:
        return products;
    }
  };

  var showProducts = function showProducts(type) {
    var filtered = filterAction(type);

    if (Object.keys(filtered).length !== 0) {
      var container = [];
      filtered.forEach(function (el, key) {
        if (key < parseInt(limit)) {
          container.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ProductsGrid_css__WEBPACK_IMPORTED_MODULE_1__.Product, {
            width: width,
            color: color,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: el.picture !== null ? '/storage/' + el.picture : '/storage/product_pictures/10.jpg',
              alt: "product img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
              to: '/products/' + el.slug,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "title",
                children: el.title
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              className: "price",
              children: ["$ ", el.price]
            })]
          }, key));
        }
      });
      return container;
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ProductsGrid_css__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: products ? showProducts(mode) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: "loading..."
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(function (state) {
  return {
    products: state.productsState.products
  };
})(ProductsGrid));

/***/ })

}]);