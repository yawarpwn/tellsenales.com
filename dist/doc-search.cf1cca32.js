import{d as a,l as _,h as f,p as m,x as h,P as y}from"./chunks/preact.module.0b8ca6e8.js";import{y as A,A as W,s as D}from"./chunks/hooks.module.58270b13.js";import{a as $,A as I,g as L,P as V}from"./chunks/autocomplete.22566cf0.js";import{o as c}from"./chunks/jsxRuntime.module.4e005c74.js";/* empty css                          */function M(e,t){for(var o in t)e[o]=t[o];return e}function b(e,t){for(var o in e)if(o!=="__source"&&!(o in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function g(e){this.props=e}(g.prototype=new a).isPureReactComponent=!0,g.prototype.shouldComponentUpdate=function(e,t){return b(this.props,e)||b(this.state,t)};var k=_.__b;_.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),k&&k(e)};var B=_.__e;_.__e=function(e,t,o,r){if(e.then){for(var i,n=t;n=n.__;)if((i=n.__c)&&i.__c)return t.__e==null&&(t.__e=o.__e,t.__k=o.__k),i.__c(e,t)}B(e,t,o,r)};var C=_.unmount;function E(e,t,o){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=M({},e)).__c!=null&&(e.__c.__P===o&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return E(r,t,o)})),e}function U(e,t,o){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return U(r,t,o)}),e.__c&&e.__c.__P===t&&(e.__e&&o.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=o)),e}function d(){this.__u=0,this.t=null,this.__b=null}function R(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function s(){this.u=null,this.o=null}_.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),C&&C(e)},(d.prototype=new a).__c=function(e,t){var o=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(o);var i=R(r.__v),n=!1,u=function(){n||(n=!0,o.__R=null,i?i(l):l())};o.__R=u;var l=function(){if(!--r.__u){if(r.state.__a){var p=r.state.__a;r.__v.__k[0]=U(p,p.__c.__P,p.__c.__O)}var v;for(r.setState({__a:r.__b=null});v=r.t.pop();)v.forceUpdate()}},w=t.__h===!0;r.__u++||w||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(u,u)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=E(this.__b,o,r.__O=r.__P)}this.__b=null}var i=t.__a&&f(m,null,e.fallback);return i&&(i.__h=null),[f(m,null,t.__a?null:e.children),i]};var P=function(e,t,o){if(++o[1]===o[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(o=e.u;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;e.u=o=o[2]}};function H(e){return this.getChildContext=function(){return e.context},e.children}function T(e){var t=this,o=e.i;t.componentWillUnmount=function(){y(null,t.l),t.l=null,t.i=null},t.i&&t.i!==o&&t.componentWillUnmount(),e.__v?(t.l||(t.i=o,t.l={nodeType:1,parentNode:o,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),y(f(H,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function j(e,t){var o=f(T,{__v:e,i:t});return o.containerInfo=t,o}(s.prototype=new a).__a=function(e){var t=this,o=R(t.__v),r=t.o.get(e);return r[0]++,function(i){var n=function(){t.props.revealOrder?(r.push(i),P(t,e,r)):i()};o?o(n):n()}},s.prototype.render=function(e){this.u=null,this.o=new Map;var t=h(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var o=t.length;o--;)this.o.set(t[o],this.u=[1,0,this.u]);return e.children},s.prototype.componentDidUpdate=s.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,o){P(e,o,t)})};var q=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,z=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,F=typeof document<"u",Z=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};a.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(a.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var O=_.event;function G(){}function J(){return this.cancelBubble}function K(){return this.defaultPrevented}_.event=function(e){return O&&(e=O(e)),e.persist=G,e.isPropagationStopped=J,e.isDefaultPrevented=K,e.nativeEvent=e};var N={configurable:!0,get:function(){return this.class}},S=_.vnode;_.vnode=function(e){var t=e.type,o=e.props,r=o;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var n in r={},o){var u=o[n];F&&n==="children"&&t==="noscript"||n==="value"&&"defaultValue"in o&&u==null||(n==="defaultValue"&&"value"in o&&o.value==null?n="value":n==="download"&&u===!0?u="":/ondoubleclick/i.test(n)?n="ondblclick":/^onchange(textarea|input)/i.test(n+t)&&!Z(o.type)?n="oninput":/^onfocus$/i.test(n)?n="onfocusin":/^onblur$/i.test(n)?n="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(n)?n=n.toLowerCase():i&&z.test(n)?n=n.replace(/[A-Z0-9]/g,"-$&").toLowerCase():u===null&&(u=void 0),/^oninput$/i.test(n)&&(n=n.toLowerCase(),r[n]&&(n="oninputCapture")),r[n]=u)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=h(o.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=h(o.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),e.props=r,o.class!=o.className&&(N.enumerable="className"in o,o.className!=null&&(r.class=o.className),Object.defineProperty(r,"className",N))}e.$$typeof=q,S&&S(e)};var x=_.__r;_.__r=function(e){x&&x(e),e.__c};const X=$("EVPE0RYU8N","14bdd4985f3b412d4dd6ffb765545816");function Y({onClose:e}){return c("div",{className:"DocSearch-Container",onClick:t=>{t.target===t.currentTarget&&e()},children:c("div",{className:"DocSearch-Modal",children:c(I,{openOnFocus:!0,getSources:({query:t})=>[{sourceId:"products",getItems(){return L({searchClient:X,queries:[{indexName:"tellsenales-seguridad",query:t}]})},templates:{item({item:o,components:r}){return c(V,{hit:o,components:r})}}}]})})})}function ne(){const[e,t]=A(!1),o=W(document.querySelector("#docsearch-search-button")),r=()=>{t(!0)},i=()=>{t(!1)};return D(()=>(o.current?.addEventListener("click",r),()=>o.current?.removeEventListener("click",r)),[t]),e?j(c(Y,{onClose:i}),document.body):null}export{ne as default};
