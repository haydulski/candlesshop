"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[935],{7935:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var r,o,i,a=t(7294),u=t(9669),c=t.n(u),l=t(6974),s=t(9756),f=t(2125);function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var h=f.default.section(r||(r=d(["\nmin-height:100vh;\nmin-width:100vw;\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n"]))),g=f.default.div(o||(o=d(["\nwidth:auto;\nmin-height:20%;\nbackground-color:",";\npadding:1rem;\nfont-size:1rem;\nborder-radius:6px;\n& input[type=submit]{\n    cursor:pointer;\n    background-color:",";\n    color:white;\n    &:hover{\n        background-color:white;\n        color:gray;\n    }\n}\n"])),(function(e){return e.theme.colors.lightGreen}),(function(e){return e.theme.colors.orange})),p=f.default.input(i||(i=d(["\nborder-radius:6px;\nmin-height:2rem;\nfont-size:1rem;\ndisplay:block;\npadding:.5rem 1rem;\nborder:1px solid lightgray;\nmargin: 1rem 0;\n"]))),m=t(8640),y=t(5893);function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const w=(0,s.$j)((function(e){return{isLogged:e.auth.isLogged}}),{setUser:m.a})((function(e){var n=e.isLogged,t=e.setUser;c().defaults.withCredentials=!0;var r=b((0,a.useState)(""),2),o=r[0],i=r[1],u=b((0,a.useState)(""),2),s=u[0],f=u[1],d=(0,l.s0)();return n?(0,y.jsx)(l.Fg,{to:"/my-account",replace:!0}):(0,y.jsx)(h,{children:(0,y.jsxs)(g,{children:[(0,y.jsx)(p,{type:"email",value:o,onChange:function(e){return i(e.target.value)},placeholder:"Your email"}),(0,y.jsx)(p,{type:"password",onChange:function(e){return f(e.target.value)},placeholder:"Password"}),(0,y.jsx)(p,{type:"submit",value:"Log in",onClick:function(){c().get("/sanctum/csrf-cookie").then((function(e){}));var e={email:o,password:s};c().post("/login",e).then((function(e){c().get("/api/v1/user").then((function(e){t(e.data),d("/my-account",{replace:!0})})).catch((function(e){d("/user-login",{replace:!0})}))})).catch((function(e){i(""),f(""),localStorage.removeItem("userId")}))}})]})})}))}}]);