"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_pages_cart_CartPage_js"],{

/***/ "./resources/js/app/pages/cart/CartPage.css.js":
/*!*****************************************************!*\
  !*** ./resources/js/app/pages/cart/CartPage.css.js ***!
  \*****************************************************/
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


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nmin-height:100vh;\nmin-width:100%;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nflex-direction:column;\nh1{\n    color:", ";\n    font-size:6rem;\n}\nmargin-bottom:5%;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.orange;
});
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nbackground:#1DF2BA;\npadding:2rem;\nwidth:70%;\ndisplay:flex;\njustify-content:space-around;\n\n"])));
var Col = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\npadding:1rem;\nwidth:100%;\nbackground-color: #fdfdfd;\ntable{\n    width:100%;\n    border-collapse: separate;\n    border-radius: 5px;\n    display:table;\n    thead{\n        padding:1rem;\n        margin-bottom:1rem;\n    }\n    th{\n        text-align:left;\n        line-height:4rem;\n        box-shadow:0px 4px 3px -2px rgba(0,0,0,.04);\n        font-size:1.2rem;\n        color:gray;\n    }\n    td{\n        border-bottom: 1px solid #fdfdfd;\n        line-height:2rem;\n        font-size:1.2rem;\n        img{\n            width:100px;\n            height:100px;\n            object-fit:cover;\n        }\n    }\n    button{\n        background:red;\n        padding:.5rem 1rem;\n        color:white;\n        font-weight:700;\n        font-size:1.2rem;\n        cursor:pointer;\n        border:none;\n        &:hover{\n            background:", ";\n        }\n    }\n}\ntable.summary{\n    width:30%;\n    margin:5% 16% 0 auto;\n    border-top: 4px solid lightgray;\n    td:nth-child(1){\n        font-weight:bold;\n    }\n}\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.orange;
});

/***/ }),

/***/ "./resources/js/app/pages/cart/CartPage.js":
/*!*************************************************!*\
  !*** ./resources/js/app/pages/cart/CartPage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CartPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartPage.css */ "./resources/js/app/pages/cart/CartPage.css.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/shopActions */ "./resources/js/app/redux/actions/shopActions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function CartPage(_ref) {
  var cart = _ref.cart,
      removeFromCart = _ref.removeFromCart;

  var handleRemove = function handleRemove(id) {
    removeFromCart(cart, id);
  };

  var CartItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return cart.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: '/storage/' + item.photo,
            alt: "product picture"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
            children: item.title
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
          children: ["$", item.price]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          children: item.qty
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
          children: ["$", item.qty * item.price]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            onClick: function onClick() {
              return handleRemove(item.id);
            },
            children: "x"
          })
        })]
      }, item.id);
    });
  }, [cart]);
  var totalNetto = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var sum = 0;
    cart.forEach(function (item) {
      sum += item.price * item.qty;
    });
    return sum;
  }, [cart]);
  var totalBrutto = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (totalNetto + totalNetto * .23).toFixed(2);
  }, [totalNetto]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_CartPage_css__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
      children: "Your cart"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CartPage_css__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_CartPage_css__WEBPACK_IMPORTED_MODULE_1__.Col, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                children: "Title"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                children: "Price"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                children: "Qty"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                children: "Total"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                children: "Remove item"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CartItems, {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("table", {
          className: "summary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                children: "Total price netto:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
                children: ["$", totalNetto]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                children: "Tax:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                children: "23%"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                children: "Total price brutto:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
                children: ["$", totalBrutto]
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CartPage_css__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        to: "/order",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "btn btn-primary",
          children: "Go to Order"
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(function (state) {
  return {
    cart: state.shop.cart
  };
}, {
  removeFromCart: _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__.removeFromCart
})(CartPage));

/***/ })

}]);