"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_pages_main_Main_js"],{

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
var Product = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nwidth:", ";\ntext-align:left;\nmargin-top:2rem;\n& img{\n    width: 90%;\nheight: 400px;\nobject-fit: cover;\n}\n& p.title{\n    font-size:1.75rem;\n    font-weight:bold;\n    color:", "\n}\n& p.price{\n    font-size:1.75rem;\n    font-weight:medium;\n    color:", "\n}\n@media(max-width:", "){\n    width:50%;\n}\n@media(max-width:", "){\n    width:100%;\n}\n"])), function (_ref) {
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
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.rwd.xl;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.rwd.md;
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/Loader */ "./resources/js/app/components/loader/Loader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








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
          container.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ProductsGrid_css__WEBPACK_IMPORTED_MODULE_1__.Product, {
            width: width,
            color: color,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: el.picture !== null ? '/storage/' + el.picture : '/storage/product_pictures/10.jpg',
              alt: "product img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
              to: '/products/' + el.slug,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "title",
                children: el.title
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
              className: "price",
              children: ["$ ", el.price]
            })]
          }, key));
        }
      });
      return container;
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ProductsGrid_css__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: products ? showProducts(mode) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_loader_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {})
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(function (state) {
  return {
    products: state.productsState.products
  };
})(ProductsGrid));

/***/ }),

/***/ "./resources/js/app/pages/main/Main.css.js":
/*!*************************************************!*\
  !*** ./resources/js/app/pages/main/Main.css.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Heading": () => (/* binding */ Heading),
/* harmony export */   "Slider": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _imgs_main_page_header_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../imgs/main-page-header.jpg */ "./resources/js/app/imgs/main-page-header.jpg");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmin-height:100vh;\nmin-width:100vw;\nbackground-image:url(", ");\nbackground-position:center;\nbackground-size:cover;\nbackground-repeat:no-repeat;\nposition:realtive;\n\n"])), _imgs_main_page_header_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nfont-size:10rem;\ncolor:", ";\ntext-transform:uppercase;\nfont-weight:500;\nposition:absolute;\ntop:40%;\nleft:8%;\ntransform:translateY(-50%);\n@media(max-width:", "){\n    font-size:5rem;\n}\n@media(max-width:", "){\n    font-size:3rem;\n}\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.main;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.rwd.xl;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.rwd.md;
});
var Slider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\nposition:relative;\nmin-height:100vh;\n@media(max-width:", "){\n    position:initial;\n}\n& section.slide{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    @media(max-width:", "){\n        position:initial;\n        padding:5rem 0;\n    }\n}\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.rwd.xl;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.rwd.xl;
});

/***/ }),

/***/ "./resources/js/app/pages/main/Main.js":
/*!*********************************************!*\
  !*** ./resources/js/app/pages/main/Main.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Main_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.css.js */ "./resources/js/app/pages/main/Main.css.js");
/* harmony import */ var _Section1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section1.js */ "./resources/js/app/pages/main/Section1.js");
/* harmony import */ var _Section2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section2.js */ "./resources/js/app/pages/main/Section2.js");
/* harmony import */ var _Section3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Section3.js */ "./resources/js/app/pages/main/Section3.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var Main = function Main() {
  var pageTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var slides = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var title = gsap_all__WEBPACK_IMPORTED_MODULE_6__.gsap.timeline();
  var sliderAnimation = gsap_all__WEBPACK_IMPORTED_MODULE_6__.gsap.timeline();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // page titl
    if (window.matchMedia("(min-width:1024px)").matches) {
      gsap_all__WEBPACK_IMPORTED_MODULE_6__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger);
      title.from(pageTitle.current, 0.4, {
        x: -200,
        delay: .5,
        duration: .5,
        opacity: 0
      }); // slider 

      sliderAnimation.from('.slide.slide1', {
        xPercent: -100,
        opacity: 0.6
      }).from('.slide.slide2', {
        xPercent: 100,
        opacity: 0.6
      });
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger.create({
        animation: sliderAnimation,
        trigger: '.main-slider',
        start: "top -50px",
        end: "+=4000",
        // snap: 1 / 2,
        scrub: 2,
        pin: true,
        anticipaePin: 1
      });
      return function () {
        sliderAnimation.kill();
        title.kill();
      };
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Main_css_js__WEBPACK_IMPORTED_MODULE_1__.Container, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Main_css_js__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        ref: pageTitle,
        children: ["candles", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "shop"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Main_css_js__WEBPACK_IMPORTED_MODULE_1__.Slider, {
      className: "main-slider",
      useRef: slides,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Section1_js__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Section2_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Section3_js__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./resources/js/app/pages/main/Section1.css.js":
/*!*****************************************************!*\
  !*** ./resources/js/app/pages/main/Section1.css.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Row": () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmin-height:100vh;\n"])));
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\npadding:0 8%;\n& h2{\n    padding-top:10%;\n    margin-bottom:5%;\n    font-size: 3rem;\n    color:", ";\n}\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.green;
});

/***/ }),

/***/ "./resources/js/app/pages/main/Section1.js":
/*!*************************************************!*\
  !*** ./resources/js/app/pages/main/Section1.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Section1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section1.css */ "./resources/js/app/pages/main/Section1.css.js");
/* harmony import */ var _components_products_grid_ProductsGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/products-grid/ProductsGrid */ "./resources/js/app/components/products-grid/ProductsGrid.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Section1() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Section1_css__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Section1_css__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
        children: ["Newest", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "products"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Section1_css__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_products_grid_ProductsGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: "33%",
        color: "green",
        mode: "newest",
        limit: "3"
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section1);

/***/ }),

/***/ "./resources/js/app/pages/main/Section2.css.js":
/*!*****************************************************!*\
  !*** ./resources/js/app/pages/main/Section2.css.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Row": () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _imgs_section2_bg_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../imgs/section2-bg-img.jpg */ "./resources/js/app/imgs/section2-bg-img.jpg");
/* harmony import */ var _imgs_section2_banner_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../imgs/section2-banner.jpg */ "./resources/js/app/imgs/section2-banner.jpg");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmin-height:100vh;\nbackground-image:url(", ");\nbackground-size:cover;\nbackground-position:center;\ndisplay:flex;\nalign-items:center;\n"])), _imgs_section2_bg_img_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\npadding:0 8%;\nmin-height:50vh;\nbackground-image:url(", ");\nbackground-size:cover;\nbackground-position:center;\nwidth:100%;\n& h2{\n    padding-top:5vh;\n    margin-bottom:5%;\n    font-size: 3rem;\n    color:white;\n}\n"])), _imgs_section2_banner_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/app/pages/main/Section2.js":
/*!*************************************************!*\
  !*** ./resources/js/app/pages/main/Section2.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Section2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section2.css */ "./resources/js/app/pages/main/Section2.css.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Section2() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Section2_css__WEBPACK_IMPORTED_MODULE_1__.Container, {
    className: "slide slide1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Section2_css__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
        children: ["Get cool", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "offers"]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section2);

/***/ }),

/***/ "./resources/js/app/pages/main/Section3.css.js":
/*!*****************************************************!*\
  !*** ./resources/js/app/pages/main/Section3.css.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Row": () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmin-height:100vh;\nbackground:white;\n"])));
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\npadding:0 8%;\n& h2{\n    padding-top:10%;\n    margin-bottom:5%;\n    font-size: 3rem;\n    color:", ";\n}\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.green;
});

/***/ }),

/***/ "./resources/js/app/pages/main/Section3.js":
/*!*************************************************!*\
  !*** ./resources/js/app/pages/main/Section3.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Section3_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section3.css */ "./resources/js/app/pages/main/Section3.css.js");
/* harmony import */ var _components_products_grid_ProductsGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/products-grid/ProductsGrid */ "./resources/js/app/components/products-grid/ProductsGrid.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Section3() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Section3_css__WEBPACK_IMPORTED_MODULE_1__.Container, {
    className: "slide slide2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Section3_css__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h2", {
        children: ["Best", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "sellers"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Section3_css__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_products_grid_ProductsGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: "33%",
        color: "orange",
        mode: "best",
        limit: "3"
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section3);

/***/ }),

/***/ "./resources/js/app/imgs/section2-banner.jpg":
/*!***************************************************!*\
  !*** ./resources/js/app/imgs/section2-banner.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/section2-banner.jpg?5da39cef1c80b963313c1b70c2366bda");

/***/ }),

/***/ "./resources/js/app/imgs/section2-bg-img.jpg":
/*!***************************************************!*\
  !*** ./resources/js/app/imgs/section2-bg-img.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/section2-bg-img.jpg?1588d7ac8953909b3181c53b52766555");

/***/ })

}]);