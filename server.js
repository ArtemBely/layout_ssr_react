(()=>{"use strict";var e={684:(e,t,r)=>{const n=require("react");var o=r.n(n);const c=require("react-router-dom"),a=require("@babel/runtime/helpers/classCallCheck");var i=r.n(a);const s=require("@babel/runtime/helpers/createClass");var u=r.n(s);const l=require("@babel/runtime/helpers/inherits");var p=r.n(l);const f=require("@babel/runtime/helpers/possibleConstructorReturn");var d=r.n(f);const h=require("@babel/runtime/helpers/getPrototypeOf");var v=r.n(h);const m=[{path:"/",exact:!0,component:function(e){p()(c,e);var t,r,n=(t=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(r){var o=v()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return d()(this,e)});function c(){return i()(this,c),n.apply(this,arguments)}return u()(c,[{key:"render",value:function(){return o().createElement("p",null,"Hello")}}]),c}(o().Component)}];const y=function(e){p()(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(r){var o=v()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return d()(this,e)});function a(){return i()(this,a),n.apply(this,arguments)}return u()(a,[{key:"render",value:function(){return o().createElement("div",{className:"main_wrap"},o().createElement(c.Switch,null,m.map((function(e,t){return o().createElement(c.Route,{key:1,path:e.path,exact:e.exact,component:e.component})}))))}}]),a}(o().Component),b=require("express");var x=r.n(b);const q=require("react-dom/server"),R=require("cookie-parser");var C=r.n(R);const w=require("body-parser");var A=r.n(w);const O=require("serialize-javascript");var g=r.n(O);const E=require("express-validator");var P=r.n(E),_=x()();_.use((function(e,t,r){t.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),t.setHeader("Pragma","no-cache"),t.setHeader("Expires","0"),t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization"),r()})),_.use(x().static("public")),_.use(A().json()),_.use(A().urlencoded({extended:!1})),_.use(x().urlencoded({extended:!1})),_.use(P()()),_.use(C()()),_.get("*",(function(e,t,r){var n=m.find((function(t){return(0,c.matchPath)(e.url,t)}))||{};(n.fetchInitialData?n.fetchInitialData(e.path):Promise.resolve()).then((function(r){var n={data:r},a=(0,q.renderToString)(o().createElement(c.StaticRouter,{location:e.url,context:n},o().createElement(y,{data:r}))),i='<!DOCTYPE html>\n            <html>\n                <head>\n                  <title>collab</title>\n                  <link rel="stylesheet" type="text/css" href="../main.css">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n                      <script src=\'/bundle.js\' defer><\/script>\n                        <script>window.__INITIAL_DATA__= '.concat(g()(r),'<\/script>\n                            <title>COLLAB</title>\n                          </head>\n                        <body>\n                       <div id="app">\n                     ').concat(a,"\n                  </div>\n                </body>\n            </html>");return t.send(i)})).catch(r)})),_.use((function(e,t,r){var n=new Error("Noooo");n.status=404,r(n)})),_.listen(8888,(function(){console.log("connected!")}))},346:e=>{e.exports=require("babel-regenerator-runtime")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(346),r(684)})();