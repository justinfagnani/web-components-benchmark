!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t){return"string"==typeof t?t.split(/([_A-Z])/).reduce((t,e,r)=>{return`${t}${t&&r%2!=0?"-":""}${(e="_"===e?"":e).toLowerCase()}`}):t}r.r(e);const o=t=>null==t;function i(t){t=t||{};const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e}var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};const c={bubbles:!0,cancelable:!0,composed:!1};const p=(t=HTMLElement)=>(class extends t{childrenUpdated(){super.childrenUpdated&&super.childrenUpdated(),this.props&&this.props.hasOwnProperty("children")&&(this.props={children:this.children})}connectedCallback(){if(super.connectedCallback&&super.connectedCallback(),this.childrenUpdated){const t=this.childrenUpdated.bind(this);this._mo=new MutationObserver(t),this._mo.observe(this,{childList:!0}),t()}}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._mo&&this._mo.disconnect()}}),l=(t=HTMLElement)=>(class extends t{get context(){if(this._context)return this._context;let t=this;for(;t=t.parentNode||t.host;)if("context"in t)return t.context;return{}}set context(t){this._context=t}}),a=(t=HTMLElement)=>(class extends t{connectedCallback(){this.connecting&&this.connecting(),super.connectedCallback&&super.connectedCallback(),this.connected&&this.connected()}disconnectedCallback(){this.disconnecting&&this.disconnecting(),super.disconnectedCallback&&super.disconnectedCallback(),this.disconnected&&this.disconnected()}});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};function f(t,e){const{attribute:r}=e,o="object"==typeof r?u({},r):{source:r,target:r};return!0===o.source&&(o.source=n(t)),!0===o.target&&(o.target=n(t)),o}function d(t){return t}const b=new Map;function h(t){const e=t||{},r=function({constructor:t},r){const n=function(t,e){const{coerce:r,default:n,deserialize:o,serialize:i}=e;return{attribute:f(t,e),coerce:r||d,default:n,deserialize:o||d,serialize:i||d}}(r,e);t.hasOwnProperty("_propsNormalized")||(t._propsNormalized={}),t._propsNormalized[r]=n;const{attribute:{source:o,target:i}}=n;o&&(t._observedAttributes.push(o),t._attributeToPropertyMap[o]=r,o!==i&&(t._attributeToAttributeMap[o]=i)),Object.defineProperty(t.prototype,r,{configurable:!0,get(){const t=this._props[r];return null==t?n.default:t},set(t){const{attribute:{target:e},serialize:o}=n;if(e){const r=o?o(t):t;null==r?this.removeAttribute(e):this.setAttribute(e,r)}this._props[r]=n.coerce(t),this.triggerUpdate()}})};return Object.keys(e).forEach(t=>r[t]=e[t]),r}const y=(t=HTMLElement)=>{var e,r;return r=e=class extends t{constructor(...t){var e;return e=super(...t),this._prevProps={},this._prevState={},this._props={},this._state={},e}static get observedAttributes(){return function(t){if(t.hasOwnProperty("_propsNormalized"))return;const{props:e}=t;i(e).forEach(r=>{let n=e[r]||e.any;b.has(n)&&(n=b.get(n)),"function"!=typeof n&&(n=h(n)),n({constructor:t},r)})}(this),this._observedAttributes.concat(super.observedAttributes||[])}static get props(){return this._props}static set props(t){this._props=t}get props(){return i(this.constructor.props).reduce((t,e)=>(t[e]=this[e],t),{})}set props(t){const e=this.constructor.props;i(t).forEach(r=>r in e&&(this[r]=t[r]))}get state(){return this._state}set state(t){this._state=t,this.triggerUpdate()}attributeChangedCallback(t,e,r){const{_attributeToAttributeMap:n,_attributeToPropertyMap:o,_propsNormalized:i}=this.constructor;super.attributeChangedCallback&&super.attributeChangedCallback(t,e,r);const s=o[t];if(s){const t=i[s];if(t){const{default:e,deserialize:n}=t,o=n?n(r):r;this._props[s]=null==o?e:o,this.triggerUpdate()}}const c=n[t];c&&(null==r?this.removeAttribute(c):this.setAttribute(c,r))}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.triggerUpdate()}shouldUpdate(){return!0}triggerUpdate(){var t;this._updating||(this._updating=!0,t=(()=>{const{_prevProps:t,_prevState:e}=this;this.updating&&this.updating(t,e),this.updated&&this.shouldUpdate(t,e)&&this.updated(t,e),this._prevProps=this.props,this._prevState=this.state,this._updating=!1}),window.Promise?Promise.resolve().then(t):setTimeout(t))}},e._attributeToAttributeMap={},e._attributeToPropertyMap={},e._observedAttributes=[],e._props={},r},{parse:g,stringify:_}=JSON,m=Object.freeze({source:!0}),x=t=>o(t)?0:Number(t),w=h({attribute:m}),v=h({attribute:m,coerce:t=>Array.isArray(t)?t:o(t)?null:[t],default:Object.freeze([]),deserialize:g,serialize:_}),k=h({attribute:m,coerce:Boolean,default:!1,deserialize:t=>!o(t),serialize:t=>t?"":null}),S=h({attribute:m,default:0,coerce:x,deserialize:x,serialize:t=>o(t)?null:String(Number(t))}),z=h({attribute:m,default:Object.freeze({}),deserialize:g,serialize:_}),O=h({attribute:m,default:"",coerce:String,serialize:t=>o(t)?null:String(t)});b.set(Array,v),b.set(Boolean,k),b.set(Number,S),b.set(Object,z),b.set(String,O);const j={any:w,array:v,boolean:k,number:S,object:z,string:O},C=(t=HTMLElement)=>(class extends t{get renderRoot(){return super.renderRoot||((t=this)._shadowRoot||(t._shadowRoot=t.shadowRoot||t.attachShadow({mode:"open"})));var t}renderer(t,e){super.renderer?super.renderer(t,e):t.innerHTML=e()||""}updated(t,e){super.updated&&super.updated(t,e),this.rendering&&this.rendering(),this.renderer(this.renderRoot,()=>this.render&&this.render(this)),this.rendered&&this.rendered()}});var T=function(){},M={},R=[],U=[];function P(t,e){var r,n,o,i,s=U;for(i=arguments.length;i-- >2;)R.push(arguments[i]);for(e&&null!=e.children&&(R.length||R.push(e.children),delete e.children);R.length;)if((n=R.pop())&&void 0!==n.pop)for(i=n.length;i--;)R.push(n[i]);else"boolean"==typeof n&&(n=null),(o="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(o=!1)),o&&r?s[s.length-1]+=n:s===U?s=[n]:s.push(n),r=o;var c=new T;return c.nodeName=t,c.children=s,c.attributes=null==e?void 0:e,c.key=null==e?void 0:e.key,void 0!==M.vnode&&M.vnode(c),c}function E(t,e){for(var r in e)t[r]=e[r];return t}function N(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}var A="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var B=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,H=[];function L(t){!t._dirty&&(t._dirty=!0)&&1==H.push(t)&&(M.debounceRendering||A)(W)}function W(){for(var t;t=H.pop();)t._dirty&&it(t)}function V(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function $(t){var e=E({},t.attributes);e.children=t.children;var r=t.nodeName.defaultProps;if(void 0!==r)for(var n in r)void 0===e[n]&&(e[n]=r[n]);return e}function D(t){var e=t.parentNode;e&&e.removeChild(t)}function J(t,e,r,n,o){if("className"===e&&(e="class"),"key"===e)   ;else if("ref"===e)N(r,null),N(n,t);else if("class"!==e||o)if("style"===e){if(n&&"string"!=typeof n&&"string"!=typeof r||(t.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof r)for(var i in r)i in n||(t.style[i]="");for(var i in n)t.style[i]="number"==typeof n[i]&&!1===B.test(i)?n[i]+"px":n[i]}}else if("dangerouslySetInnerHTML"===e)n&&(t.innerHTML=n.__html||"");else if("o"==e[0]&&"n"==e[1]){var s=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),n?r||t.addEventListener(e,F,s):t.removeEventListener(e,F,s),(t._listeners||(t._listeners={}))[e]=n}else if("list"!==e&&"type"!==e&&!o&&e in t){try{t[e]=null==n?"":n}catch(t){}null!=n&&!1!==n||"spellcheck"==e||t.removeAttribute(e)}else{var c=o&&e!==(e=e.replace(/^xlink:?/,""));null==n||!1===n?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof n&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):t.setAttribute(e,n))}else t.className=n||""}function F(t){return this._listeners[t.type](M.event&&M.event(t)||t)}var Z=[],G=0,K=!1,q=!1;function Q(){for(var t;t=Z.shift();)M.afterMount&&M.afterMount(t),t.componentDidMount&&t.componentDidMount()}function X(t,e,r,n,o,i){G++||(K=null!=o&&void 0!==o.ownerSVGElement,q=null!=t&&!("__preactattr_"in t));var s=Y(t,e,r,n,i);return o&&s.parentNode!==o&&o.appendChild(s),--G||(q=!1,i||Q()),s}function Y(t,e,r,n,o){var i=t,s=K;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),I(t,!0))),i.__preactattr_=!0,i;var c,p,l=e.nodeName;if("function"==typeof l)return function(t,e,r,n){var o=t&&t._component,i=o,s=t,c=o&&t._componentConstructor===e.nodeName,p=c,l=$(e);for(;o&&!p&&(o=o._parentComponent);)p=o.constructor===e.nodeName;o&&p&&(!n||o._component)?(ot(o,l,3,r,n),t=o.base):(i&&!c&&(st(i),t=s=null),o=rt(e.nodeName,l,r),t&&!o.nextBase&&(o.nextBase=t,s=null),ot(o,l,1,r,n),t=o.base,s&&t!==s&&(s._component=null,I(s,!1)));return t}(t,e,r,n);if(K="svg"===l||"foreignObject"!==l&&K,l=String(l),(!t||!V(t,l))&&(c=l,(p=K?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c)).normalizedNodeName=c,i=p,t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),I(t,!0)}var a=i.firstChild,u=i.__preactattr_,f=e.children;if(null==u){u=i.__preactattr_={};for(var d=i.attributes,b=d.length;b--;)u[d[b].name]=d[b].value}return!q&&f&&1===f.length&&"string"==typeof f[0]&&null!=a&&void 0!==a.splitText&&null==a.nextSibling?a.nodeValue!=f[0]&&(a.nodeValue=f[0]):(f&&f.length||null!=a)&&function(t,e,r,n,o){var i,s,c,p,l,a=t.childNodes,u=[],f={},d=0,b=0,h=a.length,y=0,g=e?e.length:0;if(0!==h)for(var _=0;_<h;_++){var m=a[_],x=m.__preactattr_,w=g&&x?m._component?m._component.__key:x.key:null;null!=w?(d++,f[w]=m):(x||(void 0!==m.splitText?!o||m.nodeValue.trim():o))&&(u[y++]=m)}if(0!==g)for(var _=0;_<g;_++){p=e[_],l=null;var w=p.key;if(null!=w)d&&void 0!==f[w]&&(l=f[w],f[w]=void 0,d--);else if(b<y)for(i=b;i<y;i++)if(void 0!==u[i]&&(v=s=u[i],S=o,"string"==typeof(k=p)||"number"==typeof k?void 0!==v.splitText:"string"==typeof k.nodeName?!v._componentConstructor&&V(v,k.nodeName):S||v._componentConstructor===k.nodeName)){l=s,u[i]=void 0,i===y-1&&y--,i===b&&b++;break}l=Y(l,p,r,n),c=a[_],l&&l!==t&&l!==c&&(null==c?t.appendChild(l):l===c.nextSibling?D(c):t.insertBefore(l,c))}var v,k,S;if(d)for(var _ in f)void 0!==f[_]&&I(f[_],!1);for(;b<=y;)void 0!==(l=u[y--])&&I(l,!1)}(i,f,r,n,q||null!=u.dangerouslySetInnerHTML),function(t,e,r){var n;for(n in r)e&&null!=e[n]||null==r[n]||J(t,n,r[n],r[n]=void 0,K);for(n in e)"children"===n||"innerHTML"===n||n in r&&e[n]===("value"===n||"checked"===n?t[n]:r[n])||J(t,n,r[n],r[n]=e[n],K)}(i,e.attributes,u),K=s,i}function I(t,e){var r=t._component;r?st(r):(null!=t.__preactattr_&&N(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||D(t),tt(t))}function tt(t){for(t=t.lastChild;t;){var e=t.previousSibling;I(t,!0),t=e}}var et=[];function rt(t,e,r){var n,o=et.length;for(t.prototype&&t.prototype.render?(n=new t(e,r),ct.call(n,e,r)):((n=new ct(e,r)).constructor=t,n.render=nt);o--;)if(et[o].constructor===t)return n.nextBase=et[o].nextBase,et.splice(o,1),n;return n}function nt(t,e,r){return this.constructor(t,r)}function ot(t,e,r,n,o){t._disable||(t._disable=!0,t.__ref=e.ref,t.__key=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,n)),n&&n!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=n),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==r&&(1!==r&&!1===M.syncComponentUpdates&&t.base?L(t):it(t,1,o)),N(t.__ref,t))}function it(t,e,r,n){if(!t._disable){var o,i,s,c=t.props,p=t.state,l=t.context,a=t.prevProps||c,u=t.prevState||p,f=t.prevContext||l,d=t.base,b=t.nextBase,h=d||b,y=t._component,g=!1,_=f;if(t.constructor.getDerivedStateFromProps&&(p=E(E({},p),t.constructor.getDerivedStateFromProps(c,p)),t.state=p),d&&(t.props=a,t.state=u,t.context=f,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,p,l)?g=!0:t.componentWillUpdate&&t.componentWillUpdate(c,p,l),t.props=c,t.state=p,t.context=l),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!g){o=t.render(c,p,l),t.getChildContext&&(l=E(E({},l),t.getChildContext())),d&&t.getSnapshotBeforeUpdate&&(_=t.getSnapshotBeforeUpdate(a,u));var m,x,w=o&&o.nodeName;if("function"==typeof w){var v=$(o);(i=y)&&i.constructor===w&&v.key==i.__key?ot(i,v,1,l,!1):(m=i,t._component=i=rt(w,v,l),i.nextBase=i.nextBase||b,i._parentComponent=t,ot(i,v,0,l,!1),it(i,1,r,!0)),x=i.base}else s=h,(m=y)&&(s=t._component=null),(h||1===e)&&(s&&(s._component=null),x=X(s,o,l,r||!d,h&&h.parentNode,!0));if(h&&x!==h&&i!==y){var k=h.parentNode;k&&x!==k&&(k.replaceChild(x,h),m||(h._component=null,I(h,!1)))}if(m&&st(m),t.base=x,x&&!n){for(var S=t,z=t;z=z._parentComponent;)(S=z).base=x;x._component=S,x._componentConstructor=S.constructor}}for(!d||r?Z.push(t):g||(t.componentDidUpdate&&t.componentDidUpdate(a,u,_),M.afterUpdate&&M.afterUpdate(t));t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);G||n||Q()}}function st(t){M.beforeUnmount&&M.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var r=t._component;r?st(r):e&&(null!=e.__preactattr_&&N(e.__preactattr_.ref,null),t.nextBase=e,D(e),et.push(t),tt(e)),N(t.__ref,null)}function ct(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{},this._renderCallbacks=[]}function pt(t,e,r){return X(r,t,{},!1,e,!1)}E(ct.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=E(E({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this._renderCallbacks.push(e),L(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),it(this,2)},render:function(){}});var lt={h:P,createElement:P,cloneElement:function(t,e){return P(t.nodeName,E(E({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)},createRef:function(){return{}},Component:ct,render:pt,rerender:W,options:M};function at(t){return"string"==typeof t?t.split(/([_A-Z])/).reduce(function(t,e,r){return""+t+(t&&r%2!=0?"-":"")+(e="_"===e?"":e).toLowerCase()}):t}var ut=function(t){return null==t};function ft(t,e){return(-1===t.indexOf("-")?"x-"+t:t)+(e?"-"+e:"")}function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"element";t=at(t);for(var e=0;customElements.get(ft(t,e));)++e;return ft(t,e)}Object.assign;var bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}}();ht=Object,yt=ht.getPrototypeOf||function(t){return t.__proto__},gt=ht.setPrototypeOf||function(t,e){return t.__proto__=e,t},_t="object"===("undefined"==typeof Reflect?"undefined":bt(Reflect))?Reflect.construct:function(t,e,r){var n,o=[null];return o.push.apply(o,e),n=t.bind.apply(t,o),gt(new n,r.prototype)};var ht,yt,gt,_t,mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}}();!function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},r=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},n="object"===("undefined"==typeof Reflect?"undefined":mt(Reflect))?Reflect.construct:function(t,e,n){var o,i=[null];return i.push.apply(i,e),o=t.bind.apply(t,i),r(new o,n.prototype)}}(Object);var xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}}();(function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},r=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},n="object"===("undefined"==typeof Reflect?"undefined":xt(Reflect))?Reflect.construct:function(t,e,n){var o,i=[null];return i.push.apply(i,e),o=t.bind.apply(t,i),r(new o,n.prototype)}})(Object),function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}}();var wt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},r=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},n="object"===("undefined"==typeof Reflect?"undefined":vt(Reflect))?Reflect.construct:function(t,e,n){var o,i=[null];return i.push.apply(i,e),o=t.bind.apply(t,i),r(new o,n.prototype)}}(Object);function kt(t,e){var r=e.attribute,n="object"===(void 0===r?"undefined":vt(r))?wt({},r):{source:r,target:r};return!0===n.source&&(n.source=at(t)),!0===n.target&&(n.target=at(t)),n}function St(t){return t}var zt=new Map;function Ot(t){var e=t||{},r=function(t,r){var n=t.constructor,o=function(t,e){var r=e.coerce,n=e.default,o=e.deserialize,i=e.serialize;return{attribute:kt(t,e),coerce:r||St,default:n,deserialize:o||St,serialize:i||St}}(r,e);n.hasOwnProperty("_propsNormalized")||(n._propsNormalized={}),n._propsNormalized[r]=o;var i=o.attribute,s=i.source,c=i.target;s&&(n._observedAttributes.push(s),n._attributeToPropertyMap[s]=r,s!==c&&(n._attributeToAttributeMap[s]=c)),Object.defineProperty(n.prototype,r,{configurable:!0,get:function(){var t=this._props[r];return null==t?o.default:t},set:function(t){var e=o.attribute.target,n=o.serialize;if(e){var i=n?n(t):t;null==i?this.removeAttribute(e):this.setAttribute(e,i)}this._props[r]=o.coerce(t),this.triggerUpdate()}})};return Object.keys(e).forEach(function(t){return r[t]=e[t]}),r}var jt=JSON.parse,Ct=JSON.stringify,Tt=Object.freeze({source:!0}),Mt=function(t){return ut(t)?0:Number(t)},Rt=(Ot({attribute:Tt}),Ot({attribute:Tt,coerce:function(t){return Array.isArray(t)?t:ut(t)?null:[t]},default:Object.freeze([]),deserialize:jt,serialize:Ct})),Ut=Ot({attribute:Tt,coerce:Boolean,default:!1,deserialize:function(t){return!ut(t)},serialize:function(t){return t?"":null}}),Pt=Ot({attribute:Tt,default:0,coerce:Mt,deserialize:Mt,serialize:function(t){return ut(t)?null:String(Number(t))}}),Et=Ot({attribute:Tt,default:Object.freeze({}),deserialize:jt,serialize:Ct}),Nt=Ot({attribute:Tt,default:"",coerce:String,serialize:function(t){return ut(t)?null:String(t)}});zt.set(Array,Rt),zt.set(Boolean,Ut),zt.set(Number,Pt),zt.set(Object,Et),zt.set(String,Nt);var At="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}}();!function(t){var e=t.getPrototypeOf||function(t){return t.__proto__},r=t.setPrototypeOf||function(t,e){return t.__proto__=e,t},n="object"===("undefined"==typeof Reflect?"undefined":At(Reflect))?Reflect.construct:function(t,e,n){var o,i=[null];return i.push.apply(i,e),o=t.bind.apply(t,i),r(new o,n.prototype)}}(Object);var Bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};const Ht="__preactNodeName";let Lt;function Wt(t){let e=t.nodeName;if(e&&e.prototype instanceof HTMLElement){if(!e[Ht]){const t=e.name;customElements.define(e[Ht]=dt(t),class extends e{})}t.nodeName=e[Ht]}return t}const Vt=((t=HTMLElement)=>(class extends t{constructor(...t){var e;return e=super(...t),this.__events={},e}static get observedAttributes(){return(this.events||[]).forEach(t=>{const e=`on${t[0].toUpperCase()+t.substring(1)}`;Object.defineProperty(this.prototype,e,{get(){return this.__events[t]||(this[e]=(()=>{})),this.__events[t]},set(e){this.__events[t]=(r=>{e(r),function(t,e,r){const n=s({},c,r);let o;"composed"in CustomEvent.prototype?o=new CustomEvent(e,n):((o=document.createEvent("CustomEvent")).initCustomEvent(e,n.bubbles,n.cancelable,n.detail),Object.defineProperty(o,"composed",{value:n.composed})),t.dispatchEvent(o)}(this,t,{detail:r})}),this.triggerUpdate&&this.triggerUpdate()}})}),super.observedAttributes}}))(((t=HTMLElement)=>a(p(l(y(C(t||HTMLElement))))))(((t=HTMLElement)=>(class extends t{get props(){return Bt({},super.props,{children:P("slot",null)})}renderer(t,e){Lt=lt.options.vnode,lt.options.vnode=Wt,this._renderRoot=t,this._preactDom=pt(e(),t,this._preactDom||t.childNodes[0]),lt.options.vnode=Lt}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._preactDom=pt(null,this._renderRoot,this._preactDom),this._renderRoot=null}}))()));class $t extends Vt{constructor(...t){var e;return e=super(...t),this.state={value:""},this.handleInput=(t=>{this.state={value:t.target.value}}),this.handleSubmit=(t=>{t.preventDefault(),this.state.value&&(this.onSubmit({value:this.state.value}),this.state={value:""})}),e}render({handleInput:t,handleSubmit:e}){return P("div",null,P("style",null,"\n          :host {\n            display: block;\n          }\n\n          form {\n            position: relative;\n            font-size: 24px;\n            border-bottom: 1px solid #ededed;\n          }\n\n          input {\n            padding: 16px 16px 16px 60px;\n            border: none;\n            background: rgba(0, 0, 0, 0.003);\n            position: relative;\n            margin: 0;\n            width: 100%;\n            font-size: 24px;\n            font-family: inherit;\n            font-weight: inherit;\n            line-height: 1.4em;\n            border: 0;\n            outline: none;\n            color: inherit;\n            padding: 6px;\n            border: 1px solid #CCC;\n            box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n            box-sizing: border-box;\n          }\n        "),P("form",{onSubmit:e},P("input",{value:this.state.value,type:"text",placeholder:"What needs to be done?",onInput:t})))}}$t.events=["submit"];class Dt extends Vt{constructor(...t){var e;return e=super(...t),this.handleCheck=(t=>{this.onCheck({index:this.index,value:t.target.checked})}),this.handleRemove=(()=>{this.onRemove({index:this.index})}),e}render({checked:t,handleCheck:e,handleRemove:r}){return P("div",null,P("style",null,'\n          :host {\n            display: block;\n          }\n\n          li {\n            font-size: 24px;\n            display: block;\n            position: relative;\n            border-bottom: 1px solid #ededed;\n          }\n\n          li input {\n            text-align: center;\n            width: 40px;\n            /* auto, since non-WebKit browsers doesn\'t support input styling */\n            height: auto;\n            position: absolute;\n            top: 9px;\n            bottom: 0;\n            margin: auto 0;\n            border: none;\n            /* Mobile Safari */\n            -webkit-appearance: none;\n            appearance: none;\n          }\n\n          li input:after {\n            content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\');\n          }\n\n          li input:checked:after {\n            content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\');\n          }\n\n          li label {\n            white-space: pre;\n            word-break: break-word;\n            padding: 15px 60px 15px 15px;\n            margin-left: 45px;\n            display: block;\n            line-height: 1.2;\n            transition: color 0.4s;\n          }\n\n          li.completed label {\n            color: #d9d9d9;\n            text-decoration: line-through;\n          }\n\n          li button,\n          li input[type="checkbox"] {\n            outline: none;\n          }\n\n          li button {\n            margin: 0;\n            padding: 0;\n            border: 0;\n            background: none;\n            font-size: 100%;\n            vertical-align: baseline;\n            font-family: inherit;\n            font-weight: inherit;\n            color: inherit;\n            -webkit-appearance: none;\n            appearance: none;\n            -webkit-font-smoothing: antialiased;\n            -moz-font-smoothing: antialiased;\n            font-smoothing: antialiased;\n          }\n\n          li button {\n            position: absolute;\n            top: 0;\n            right: 10px;\n            bottom: 0;\n            width: 40px;\n            height: 40px;\n            margin: auto 0;\n            font-size: 30px;\n            color: #cc9a9a;\n            margin-bottom: 11px;\n            transition: color 0.2s ease-out;\n          }\n\n          li button:hover {\n            color: #af5b5e;\n          }\n        '),P("li",{class:t?"completed":""},P("input",{type:"checkbox",checked:t,onChange:e}),P("label",null,P("slot",null)),P("button",{onClick:r},"x")))}}Dt.events=["check","remove"],Dt.props={checked:j.boolean,index:j.number},customElements.define("my-todo",class extends Vt{constructor(...t){var e;return e=super(...t),this.state={list:[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]},this.handleCheck=(t=>{this.state.list[t.detail.index].checked=t.detail.value,this.state=this.state}),this.handleRemove=(t=>{this.state={list:this.state.list.filter((e,r)=>r!==t.detail.index)}}),this.handleSubmit=(t=>{this.state={list:[...this.state.list,{text:t.detail.value,checked:!1}]}}),e}render({handleCheck:t,handleRemove:e,handleSubmit:r}){return P("div",null,P("style",null,"\n          :host {\n            display: block;\n          }\n\n          h1 {\n            font-size: 60px;\n            font-weight: 100;\n            text-align: center;\n            color: rgba(175, 47, 47, 0.15);\n          }\n\n          section {\n            background: #fff;\n            margin: 130px 0 40px 0;\n            position: relative;\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n          }\n\n          #list-container {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n            border-top: 1px solid #e6e6e6;\n          }\n        "),P("h1",null,"SkateJS & Preact"),P("section",null,P("todo-input",{onSubmit:r}),P("ul",{id:"list-container"},this.state.list.map(({checked:r,text:n},o)=>P("todo-item",{checked:r,index:o,onCheck:t,onRemove:e},n)))))}}),customElements.define("todo-input",$t),customElements.define("todo-item",Dt)}]);