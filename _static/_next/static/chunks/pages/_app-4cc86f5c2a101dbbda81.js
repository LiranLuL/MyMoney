(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1752:function(t,e,r){t.exports=r(2594)},6032:function(t,e,r){"use strict";r.d(e,{bZ:function(){return p},rU:function(){return O},$j:function(){return m}});var n=r(4942);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=r(7294),c=r(1163),s=r(6618),a=r(5893);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t){var e=t.id,r=t.fade,o=(0,c.useRouter)(),l=(0,u.useState)([]),p=l[0],d=l[1];function h(t){if(r){var e=f(f({},t),{},{fade:!0});d((function(r){return r.map((function(r){return r===t?e:r}))})),setTimeout((function(){d((function(t){return t.filter((function(t){return t!==e}))}))}),250)}else d((function(e){return e.filter((function(e){return e!==t}))}))}function v(t){var e;if(t){var r=["alert","alert-dismissable"],o=(e={},(0,n.Z)(e,s.NK.Success,"alert-success"),(0,n.Z)(e,s.NK.Error,"alert-danger"),(0,n.Z)(e,s.NK.Info,"alert-info"),(0,n.Z)(e,s.NK.Warning,"alert-warning"),e);return r.push(o[t.type]),t.fade&&r.push("fade"),r.join(" ")}}return(0,u.useEffect)((function(){var t=s.Ak.onAlert(e).subscribe((function(t){t.message?(d((function(e){return[].concat(i(e),[t])})),t.autoClose&&setTimeout((function(){return h(t)}),3e3)):d((function(t){var e=t.filter((function(t){return t.keepAfterRouteChange}));return e.forEach((function(t){return delete t.keepAfterRouteChange})),e}))})),r=function(){setTimeout((function(){return s.Ak.clear(e)}))};return o.events.on("routeChangeStart",r),function(){t.unsubscribe(),o.events.off("routeChangeStart",r)}}),[]),p.length?(0,a.jsx)("div",{style:{position:"absolute",left:"25%",minWidth:"50vw",zIndex:"2"},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"m-3",children:p.map((function(t,e){return(0,a.jsxs)("div",{className:v(t),children:[(0,a.jsx)("a",{className:"close",onClick:function(){return h(t)},children:"\xd7"}),(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:t.message}})]},e)}))})})}):null}p.defaultProps={id:"default-alert",fade:!0};var d=r(3366);function h(t,e){if(null==t)return{};var r,n,o=(0,d.Z)(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var v=r(1664),b=["href","children"];function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t){var e=t.href,r=t.children,n=h(t,b);return(0,a.jsx)(v.default,{href:e,children:(0,a.jsx)("a",g(g({},n),{},{children:r}))})}function m(){return(0,a.jsx)("div",{style:{position:"absolute",top:"47vh",left:"47vw"},className:"text-center text-dark p-3",children:(0,a.jsx)("span",{className:"spinner-border spinner-border-lg align-center "})})}},2167:function(t,e,r){"use strict";var n=r(3038);e.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},u=r(1063),c=r(4651),s=r(7426);var a={};function l(t,e,r,n){if(t&&u.isLocalURL(e)){t.prefetch(e,r,n).catch((function(t){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:t&&t.locale;a[e+"%"+r+(o?"%"+o:"")]=!0}}var f=function(t){var e,r=!1!==t.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var e=u.resolveHref(o,t.href,!0),r=n(e,2),i=r[0],c=r[1];return{href:i,as:t.as?u.resolveHref(o,t.as):c||i}}),[o,t.href,t.as]),p=f.href,d=f.as,h=t.children,v=t.replace,b=t.shallow,y=t.scroll,g=t.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var O=(e=i.default.Children.only(h))&&"object"===typeof e&&e.ref,m=s.useIntersection({rootMargin:"200px"}),w=n(m,2),j=w[0],_=w[1],S=i.default.useCallback((function(t){j(t),O&&("function"===typeof O?O(t):"object"===typeof O&&(O.current=t))}),[O,j]);i.default.useEffect((function(){var t=_&&r&&u.isLocalURL(p),e="undefined"!==typeof g?g:o&&o.locale,n=a[p+"%"+d+(e?"%"+e:"")];t&&!n&&l(o,p,d,{locale:e})}),[d,p,_,g,r,o]);var P={ref:S,onClick:function(t){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(t),t.defaultPrevented||function(t,e,r,n,o,i,c,s){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&u.isLocalURL(r))&&(t.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),e[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:c}))}(t,o,p,d,v,b,y,g)},onMouseEnter:function(t){u.isLocalURL(p)&&(e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(t),l(o,p,d,{priority:!0}))}};if(t.passHref||"a"===e.type&&!("href"in e.props)){var x="undefined"!==typeof g?g:o&&o.locale,E=o&&o.isLocaleDomain&&u.getDomainLocale(d,x,o&&o.locales,o&&o.domainLocales);P.href=E||u.addBasePath(u.addLocale(d,x,o&&o.defaultLocale))}return i.default.cloneElement(e,P)};e.default=f},7426:function(t,e,r){"use strict";var n=r(3038);Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,r=t.disabled||!u,s=o.useRef(),a=o.useState(!1),l=n(a,2),f=l[0],p=l[1],d=o.useCallback((function(t){s.current&&(s.current(),s.current=void 0),r||f||t&&t.tagName&&(s.current=function(t,e,r){var n=function(t){var e=t.rootMargin||"",r=c.get(e);if(r)return r;var n=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=n.get(t.target),r=t.isIntersecting||t.intersectionRatio>0;e&&r&&e(r)}))}),t);return c.set(e,r={id:e,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,u=n.elements;return u.set(t,e),i.observe(t),function(){u.delete(t),i.unobserve(t),0===u.size&&(i.disconnect(),c.delete(o))}}(t,(function(t){return t&&p(t)}),{rootMargin:e}))}),[r,e,f]);return o.useEffect((function(){if(!u&&!f){var t=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(t)}}}),[f]),[d,f]};var o=r(7294),i=r(3447),u="undefined"!==typeof IntersectionObserver;var c=new Map},7672:function(t,e,r){"use strict";r.r(e);var n=r(4942),o=r(9008),i=r(7294),u=r(1163),c=(r(3146),r(6618)),s=r(6032),a=r(5893);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(t){var e=t.Component,r=t.pageProps,n=(0,u.useRouter)(),l=(0,i.useState)(null),p=(l[0],l[1]),d=(0,i.useState)(!1),h=d[0],v=d[1];function b(t){p(c.W4.userValue);var e=t.split("?")[0];c.W4.userValue||["/account/login","/account/register"].includes(e)?v(!0):(v(!1),n.push({pathname:"/account/login",query:{returnUrl:n.asPath}}))}return(0,i.useEffect)((function(){b(n.asPath);var t=function(){return v(!1)};return n.events.on("routeChangeStart",t),n.events.on("routeChangeComplete",b),function(){n.events.off("routeChangeStart",t),n.events.off("routeChangeComplete",b)}}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.default,{children:[(0,a.jsx)("title",{children:"My Money"}),(0,a.jsx)("link",{href:"//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",rel:"stylesheet"})]}),(0,a.jsxs)("div",{className:"app-container",style:{backgroundColor:"#0f0e17"},children:[(0,a.jsx)(s.bZ,{}),h&&(0,a.jsx)(e,f({},r))]})]})}},6618:function(t,e,r){"use strict";r.d(e,{NK:function(){return F},Ak:function(){return J},W4:function(){return lt}});var n=r(4942),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)};function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}Object.create;function u(t){var e="function"===typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function s(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t}Object.create;function a(t){return"function"===typeof t}function l(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var f=l((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function p(t,e){if(t){var r=t.indexOf(e);0<=r&&t.splice(r,1)}}var d=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}return t.prototype.unsubscribe=function(){var t,e,r,n,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var l=u(i),p=l.next();!p.done;p=l.next()){p.value.remove(this)}}catch(O){t={error:O}}finally{try{p&&!p.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}else i.remove(this);var d=this.initialTeardown;if(a(d))try{d()}catch(m){o=m instanceof f?m.errors:[m]}var h=this._teardowns;if(h){this._teardowns=null;try{for(var v=u(h),y=v.next();!y.done;y=v.next()){var g=y.value;try{b(g)}catch(w){o=null!==o&&void 0!==o?o:[],w instanceof f?o=s(s([],c(o)),c(w.errors)):o.push(w)}}}catch(j){r={error:j}}finally{try{y&&!y.done&&(n=v.return)&&n.call(v)}finally{if(r)throw r.error}}}if(o)throw new f(o)}},t.prototype.add=function(e){var r;if(e&&e!==this)if(this.closed)b(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=null!==(r=this._teardowns)&&void 0!==r?r:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&p(e,t)},t.prototype.remove=function(e){var r=this._teardowns;r&&p(r,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),h=d.EMPTY;function v(t){return t instanceof d||t&&"closed"in t&&a(t.remove)&&a(t.add)&&a(t.unsubscribe)}function b(t){a(t)?t():t.unsubscribe()}var y={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},g={setTimeout:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=g.delegate;return((null===r||void 0===r?void 0:r.setTimeout)||setTimeout).apply(void 0,s([],c(t)))},clearTimeout:function(t){var e=g.delegate;return((null===e||void 0===e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function O(t){g.setTimeout((function(){var e=y.onUnhandledError;if(!e)throw t;e(t)}))}function m(){}var w=j("C",void 0,void 0);function j(t,e,r){return{kind:t,value:e,error:r}}var _=null;function S(t){if(y.useDeprecatedSynchronousErrorHandling){var e=!_;if(e&&(_={errorThrown:!1,error:null}),t(),e){var r=_,n=r.errorThrown,o=r.error;if(_=null,n)throw o}}else t()}function P(t){y.useDeprecatedSynchronousErrorHandling&&_&&(_.errorThrown=!0,_.error=t)}var x=function(t){function e(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,v(e)&&e.add(r)):r.destination=T,r}return i(e,t),e.create=function(t,e,r){return new E(t,e,r)},e.prototype.next=function(t){this.isStopped?D(function(t){return j("N",t,void 0)}(t),this):this._next(t)},e.prototype.error=function(t){this.isStopped?D(function(t){return j("E",void 0,t)}(t),this):(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped?D(w,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(d),E=function(t){function e(e,r,n){var o,i=t.call(this)||this;if(a(e))o=e;else if(e){var u;o=e.next,r=e.error,n=e.complete,i&&y.useDeprecatedNextContext?(u=Object.create(e)).unsubscribe=function(){return i.unsubscribe()}:u=e,o=null===o||void 0===o?void 0:o.bind(u),r=null===r||void 0===r?void 0:r.bind(u),n=null===n||void 0===n?void 0:n.bind(u)}return i.destination={next:o?C(o,i):m,error:C(null!==r&&void 0!==r?r:k,i),complete:n?C(n,i):m},i}return i(e,t),e}(x);function C(t,e){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];try{t.apply(void 0,s([],c(e)))}catch(n){y.useDeprecatedSynchronousErrorHandling?P(n):O(n)}}}function k(t){throw t}function D(t,e){var r=y.onStoppedNotification;r&&g.setTimeout((function(){return r(t,e)}))}var T={closed:!0,next:m,error:k,complete:m},N="function"===typeof Symbol&&Symbol.observable||"@@observable";function I(t){return t}function A(t){return 0===t.length?I:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var M=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n,o=this,i=(n=t)&&n instanceof x||function(t){return t&&a(t.next)&&a(t.error)&&a(t.complete)}(n)&&v(n)?t:new E(t,e,r);return S((function(){var t=o,e=t.operator,r=t.source;i.add(e?e.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=L(e))((function(e,n){var o;o=r.subscribe((function(e){try{t(e)}catch(r){n(r),null===o||void 0===o||o.unsubscribe()}}),n,e)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[N]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return A(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=L(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function L(t){var e;return null!==(e=null!==t&&void 0!==t?t:y.Promise)&&void 0!==e?e:Promise}var U=l((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),Z=function(t){function e(){var e=t.call(this)||this;return e.closed=!1,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return i(e,t),e.prototype.lift=function(t){var e=new R(this,this);return e.operator=t,e},e.prototype._throwIfClosed=function(){if(this.closed)throw new U},e.prototype.next=function(t){var e=this;S((function(){var r,n;if(e._throwIfClosed(),!e.isStopped){var o=e.observers.slice();try{for(var i=u(o),c=i.next();!c.done;c=i.next()){c.value.next(t)}}catch(s){r={error:s}}finally{try{c&&!c.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}}}))},e.prototype.error=function(t){var e=this;S((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var r=e.observers;r.length;)r.shift().error(t)}}))},e.prototype.complete=function(){var t=this;S((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}}))},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var e=this,r=e.hasError,n=e.isStopped,o=e.observers;return r||n?h:(o.push(t),new d((function(){return p(o,t)})))},e.prototype._checkFinalizedStatuses=function(t){var e=this,r=e.hasError,n=e.thrownError,o=e.isStopped;r?t.error(n):o&&t.complete()},e.prototype.asObservable=function(){var t=new M;return t.source=this,t},e.create=function(t,e){return new R(t,e)},e}(M),R=function(t){function e(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return i(e,t),e.prototype.next=function(t){var e,r;null===(r=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===r||r.call(e,t)},e.prototype.error=function(t){var e,r;null===(r=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===r||r.call(e,t)},e.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},e.prototype._subscribe=function(t){var e,r;return null!==(r=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==r?r:h},e}(Z);function K(t){return function(e){if(function(t){return a(null===t||void 0===t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}var W=function(t){function e(e,r,n,o,i){var u=t.call(this,e)||this;return u.onFinalize=i,u._next=r?function(t){try{r(t)}catch(n){e.error(n)}}:t.prototype._next,u._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,u._complete=n?function(){try{n()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,u}return i(e,t),e.prototype.unsubscribe=function(){var e,r=this.closed;t.prototype.unsubscribe.call(this),!r&&(null===(e=this.onFinalize)||void 0===e||e.call(this))},e}(x);function H(t,e){return K((function(r,n){var o=0;r.subscribe(new W(n,(function(r){return t.call(e,r,o++)&&n.next(r)})))}))}function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var J={onAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;return B.asObservable().pipe(H((function(e){return e&&e.id===t})))},success:function(t,e){X(V(V({},e),{},{type:F.Success,message:t}))},error:function(t,e){X(V(V({},e),{},{type:F.Error,message:t}))},info:function(t,e){X(V(V({},e),{},{type:F.Info,message:t}))},warn:function(t,e){X(V(V({},e),{},{type:F.Warning,message:t}))},alert:X,clear:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;B.next({id:t})}},F={Success:"Success",Error:"Error",Info:"Info",Warning:"Warning"},B=new Z,q="default-alert";function X(t){t.id=t.id||q,t.autoClose=void 0===t.autoClose||t.autoClose,B.next(t)}var Y=function(t){function e(e){var r=t.call(this)||this;return r._value=e,r}return i(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(e){var r=t.prototype._subscribe.call(this,e);return!r.closed&&e.next(this._value),r},e.prototype.getValue=function(){var t=this,e=t.hasError,r=t.thrownError,n=t._value;if(e)throw r;return this._throwIfClosed(),n},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(Z),$=r(1752),G=r(1163);function Q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function tt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var et=(0,$.default)().publicRuntimeConfig,rt={get:function(t){var e={method:"GET",headers:nt(t)};return fetch(t,e).then(ot)},post:function(t,e){var r={method:"POST",headers:tt({"Content-Type":"application/json"},nt(t)),credentials:"include",body:JSON.stringify(e)};return fetch(t,r).then(ot)},put:function(t,e){var r={method:"PUT",headers:tt({"Content-Type":"application/json"},nt(t)),body:JSON.stringify(e)};return fetch(t,r).then(ot)},delete:function(t){var e={method:"DELETE",headers:nt(t)};return fetch(t,e).then(ot)}};function nt(t){var e=lt.userValue,r=e&&e.token,n=t.startsWith(et.apiUrl);return r&&n?{Authorization:"Bearer ".concat(e.token)}:{}}function ot(t){return t.text().then((function(e){var r=e&&JSON.parse(e);if(!t.ok){[401,403].includes(t.status)&&lt.userValue&&lt.logout();var n=r&&r.message||t.statusText;return Promise.reject(n)}return r}))}function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ut(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ct=(0,$.default)().publicRuntimeConfig,st="".concat(ct.apiUrl,"/users"),at=new Y(JSON.parse(localStorage.getItem("user"))),lt={user:at.asObservable(),get userValue(){return at.value},login:function(t,e){return rt.post("".concat(st,"/authenticate"),{username:t,password:e}).then((function(t){return at.next(t),localStorage.setItem("user",JSON.stringify(t)),t}))},logout:function(){localStorage.removeItem("user"),at.next(null),G.default.push("/account/login")},register:function(t){return rt.post("".concat(st,"/register"),t)},getAll:function(){return rt.get(st)},getById:function(t){return rt.get("".concat(st,"/").concat(t))},update:function(t,e){return rt.put("".concat(st,"/").concat(t),e).then((function(r){if(t===at.value.id){var n=ut(ut({},at.value),e);localStorage.setItem("user",JSON.stringify(n)),at.next(n)}return r}))},delete:function(t){return rt.delete("".concat(st,"/").concat(t))}}},1780:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7672)}])},3146:function(){},9008:function(t,e,r){t.exports=r(639)},1664:function(t,e,r){t.exports=r(2167)},1163:function(t,e,r){t.exports=r(4651)},4942:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return n}})},3366:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,{Z:function(){return n}})}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(1780),e(4651)}));var r=t.O();_N_E=r}]);