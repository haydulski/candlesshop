"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52],{7052:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r,c,i=n(7294),o=n(2125);function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var a=o.default.div(r||(r=u(["\ndisplay:flex;\njustify-content:space-between;\nwidth:100%;\nflex-wrap:wrap;\n"]))),s=o.default.div(c||(c=u(["\nwidth:",";\ntext-align:left;\nmargin-top:2rem;\n& img{\n    width: 90%;\nheight: 400px;\nobject-fit: cover;\n}\n& p.title{\n    font-size:1.75rem;\n    font-weight:bold;\n    color:","\n}\n& p.price{\n    font-size:1.75rem;\n    font-weight:medium;\n    color:","\n}\n@media(max-width:","){\n    width:50%;\n}\n@media(max-width:","){\n    width:100%;\n}\n"])),(function(e){return e.width}),(function(e){e.color;return e.theme.colors.green}),(function(e){e.color;return e.theme.colors.green}),(function(e){return e.theme.rwd.xl}),(function(e){return e.theme.rwd.md})),l=n(9711),d=n(9756),f=n(2902),p=n(5893);const h=(0,d.$j)((function(e){return{products:e.productsState.products}}))((function(e){var t=e.width,n=e.color,r=e.mode,c=e.products,o=e.limit,u=e.catName;(0,i.useEffect)((function(){}),[c]);var d=function(e){switch(e){case"best":return(t=c).sort((function(e,t){var n=parseFloat(e.price);return parseFloat(t.price)>n})),t;case"newest":return function(){var e=c;return e.sort((function(e,t){var n=new Date(e.created_at);return new Date(t.created_at)-n})),e}();case"category":return function(){var e=[];return c.forEach((function(t){void 0!==t.categories.find((function(e){return e.slug===u}))&&e.push(t)})),console.log(e),e}();default:return c}var t};return(0,p.jsx)(a,{children:c?function(e){var r=d(e);if(0!==Object.keys(r).length){var c=[];return r.forEach((function(e,r){r<parseInt(o)&&c.push((0,p.jsxs)(s,{width:t,color:n,children:[(0,p.jsx)("img",{src:null!==e.picture?"/storage/"+e.picture:"/storage/product_pictures/10.jpg",alt:"product img"}),(0,p.jsx)(l.rU,{to:"/products/"+e.slug,children:(0,p.jsx)("p",{className:"title",children:e.title})}),(0,p.jsxs)("p",{className:"price",children:["$ ",e.price]})]},r))})),c}}(r):(0,p.jsx)(f.Z,{})})}))}}]);