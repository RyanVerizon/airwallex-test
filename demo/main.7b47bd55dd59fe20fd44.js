!function(e){function a(a){for(var n,o,i=a[0],s=a[1],c=a[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(a);m.length;)m.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,a=0;a<l.length;a++){for(var t=l[a],n=!0,i=1;i<t.length;i++){var s=t[i];0!==r[s]&&(n=!1)}n&&(l.splice(a--,1),e=o(o.s=t[0]))}return e}var n={},r={0:0},l=[];function o(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(t,n,function(a){return e[a]}.bind(null,n));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=s;l.push([110,1]),t()}({109:function(e,a,t){},110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(57);var o=()=>r.a.createElement("header",{className:"header"},r.a.createElement("a",{className:"header__logo",href:"/"},"BROCCOLI & CO."));var i=()=>r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__note"},"Made with ❤ in Shanghai"),r.a.createElement("p",{className:"footer__copyright"},"@2020 Broccoli & Co. All rights reserved.")),s=(t(9),t(1)),c=t.n(s),u=t(7),d=t.n(u);const m=e=>{let{className:a,htmlType:t,secondary:n,disabled:l,onClick:o,children:i}=e;return r.a.createElement("button",{className:d()("button",a,{"button--secondary":n}),type:t,disabled:l,onClick:o},i)};m.propTypes={className:c.a.string,htmlType:c.a.string,secondary:c.a.bool,disabled:c.a.bool,children:c.a.any,onClick:c.a.func},m.defaultProps={className:"",htmlType:"button",secondary:!1,disabled:!1,children:"",onClick:()=>{}};var p=m,f=t(58),b=t.n(f);function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(Object(t),!0).forEach((function(a){g(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function g(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const h=e=>{let{children:a}=e;return Object(n.useLayoutEffect)(()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[]),r.a.createElement("div",{className:"overlay"},a)};h.propTypes={children:c.a.element},h.defaultProps={children:null};var O=h;t(104),t(107);function E(){return(E=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const _=e=>{let{id:a,type:t,name:l,className:o,fieldClassName:i,required:s,valid:c,disabled:u,readonly:m,label:p,placeholder:f,errMessage:b,defaultMessage:v,attributes:y,defaultValue:g,onInput:h,onFocus:O,onBlur:_,onChange:j}=e;const[w,N]=Object(n.useState)(g||""),P=e=>{N(e.target.value),j(e)};return r.a.createElement("div",{className:d()("input-field","input-field--".concat(t),o,{"input-field--disabled":u,"input-field--error":!1===c,"input-field--valid":!0===c})},p?r.a.createElement("label",{htmlFor:a,className:d()("input-field__label",{"input-field__label--required":s})},p):null,r.a.createElement("div",{className:"input-field__input-container"},"textarea"===t?r.a.createElement("textarea",E({id:a,name:l,className:d()("input-field__textarea",i),disabled:u,placeholder:f,required:s,readOnly:m,onChange:P,onFocus:O,onBlur:_,value:w},y)):r.a.createElement("input",E({type:t,id:a,name:l,className:d()("input-field__input",i),disabled:u,placeholder:f,required:s,readOnly:m,onChange:P,onInput:h,onFocus:O,onBlur:_,value:w},y)),!1===c&&b?r.a.createElement("div",{className:"input-field__error-message"},b):null,!1!==c&&v?r.a.createElement("div",{className:"input-field__default-message"},v):null))};_.propTypes={id:c.a.string.isRequired,name:c.a.string.isRequired,type:c.a.string,className:c.a.string,fieldClassName:c.a.string,required:c.a.bool,valid:c.a.bool,disabled:c.a.bool,readonly:c.a.bool,label:c.a.string,placeholder:c.a.string,errMessage:c.a.oneOfType([c.a.string,c.a.element]),defaultMessage:c.a.string,attributes:c.a.object,defaultValue:c.a.oneOfType([c.a.string,c.a.number]),onInput:c.a.func,onChange:c.a.func,onFocus:c.a.func,onBlur:c.a.func},_.defaultProps={type:"text",className:null,fieldClassName:null,required:!1,valid:null,disabled:!1,readonly:!1,label:null,placeholder:null,errMessage:"",defaultMessage:null,attributes:{},defaultValue:null,onInput:()=>{},onChange:()=>{},onFocus:()=>{},onBlur:()=>{}};var j=_;const w=e=>/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(e);function N(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?N(Object(t),!0).forEach((function(a){C(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function C(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const S=e=>{let{isLoading:a,onSubmit:t,submitStatus:l}=e;const[o,i]=(e=>{const[a,t]=Object(n.useState)(e);return[a,e=>{t(y(y({},a),e))}]})({name:{value:"",valid:null},email:{value:"",valid:null},confirmEmail:{value:"",valid:null}}),s=(e,a)=>{const t="email"===a?"confirmEmail":"email";let n=w(e),r=o[t].valid;n&&o[t].value&&(n=o[t].value===e),n&&!1===r&&(r=o[t].value===e),i({[a]:{value:e,valid:n},[t]:P(P({},o[t]),{},{valid:r})})};return r.a.createElement("form",{className:"invite-modal__form",noValidate:!0,onSubmit:e=>(e.preventDefault(),!!(()=>{let e=!0;return Object.keys(o).forEach(a=>{!0!==o[a].valid&&(i({[a]:P(P({},o[a]),{},{valid:!1})}),e=!1)}),e})()&&t({name:o.name.value,email:o.email.value}))},r.a.createElement(j,{id:"name",name:"name",required:!0,valid:o.name.valid,placeholder:"name",errMessage:"Please type your name",onBlur:e=>{var a;i({name:{value:e.target.value.trim(),valid:(a=e.target.value,Boolean(a&&a.length>2))}})}}),r.a.createElement(j,{id:"email",name:"email",required:!0,valid:o.email.valid,placeholder:"Email",errMessage:w(o.email.value)?"You email doesn't match your confirm email":"Please type your email address",onBlur:e=>{s(e.target.value.trim(),"email")}}),r.a.createElement(j,{id:"confirm-email",name:"confirm-email",required:!0,valid:o.confirmEmail.valid,placeholder:"Cofirm Email",errMessage:"Your confirm email doesn't match",onBlur:e=>{s(e.target.value.trim(),"confirmEmail")}}),r.a.createElement(p,{htmlType:"submit",disabled:a},a?"Sending, please wait...":"Send"),l.errMessage?r.a.createElement("p",{className:"invite-modal__submit-error"},l.errMessage):null)};S.propTypes={isLoading:c.a.bool,submitStatus:c.a.shape({errMessage:c.a.string}),onSubmit:c.a.func.isRequired},S.defaultProps={isLoading:!1,submitStatus:{errMessage:""}};var M=S;const k=e=>{let{onClose:a}=e;return r.a.createElement("div",{className:"invite-modal__success"},r.a.createElement("p",{className:"invite-modal__success-text"},"You will be one of the first to experience Broccoli & Co. When we launch"),r.a.createElement(p,{secondary:!0,onClick:a},"OK"))};k.propTypes={onClose:c.a.func.isRequired};var q=k;const B=e=>{let{onClose:a}=e;const t=200,[l,o]=Object(n.useState)(!1),[i,s]=Object(n.useState)({code:null,errMessage:null});return r.a.createElement(O,null,r.a.createElement("div",{className:"invite-modal"},r.a.createElement("button",{className:"invite-modal__close",type:"button","aria-label":"close",onClick:a}),i.code===t?[r.a.createElement("h2",{className:"invite-modal__heading",key:"0"},"All Done!"),r.a.createElement(q,{onClose:a,key:"1"})]:[r.a.createElement("h2",{className:"invite-modal__heading",key:"0"},"Request an invite"),r.a.createElement(M,{isLoading:l,onSubmit:e=>{o(!0),b.a.post("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",e).then(()=>{s({code:t}),o(!1)}).catch(e=>{var a,t;s({code:e.code,errMessage:(null===(a=e.response)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.errorMessage)||"Unknown error, please try again"}),o(!1)})},submitStatus:i,key:"1"})]))};B.propTypes={onClose:c.a.func.isRequired};var T=B;var x=()=>{const[e,a]=Object(n.useState)(!1);return r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("h1",{className:"home__title"},"A better way",r.a.createElement("br",null),"to enjoy every day."),r.a.createElement("p",{className:"home__summary"},"Be the first to know when we launch."),r.a.createElement(p,{onClick:()=>{a(!0)}},"Request an invite")),e?r.a.createElement(T,{open:e,onClose:()=>a(!1)}):null)};var D=()=>r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement("main",null,r.a.createElement(x,null)),r.a.createElement(i,null));t(109);Object(l.render)(r.a.createElement(D,null),document.getElementById("app"))}});