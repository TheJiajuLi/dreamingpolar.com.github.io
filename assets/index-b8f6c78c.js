(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function vg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var op={exports:{}},ws={},sp={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),xg=Symbol.for("react.portal"),wg=Symbol.for("react.fragment"),Sg=Symbol.for("react.strict_mode"),kg=Symbol.for("react.profiler"),Cg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),Pg=Symbol.for("react.forward_ref"),Tg=Symbol.for("react.suspense"),Eg=Symbol.for("react.memo"),Ag=Symbol.for("react.lazy"),Pc=Symbol.iterator;function Rg(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lp=Object.assign,up={};function zr(e,t,n){this.props=e,this.context=t,this.refs=up,this.updater=n||ap}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cp(){}cp.prototype=zr.prototype;function nu(e,t,n){this.props=e,this.context=t,this.refs=up,this.updater=n||ap}var ru=nu.prototype=new cp;ru.constructor=nu;lp(ru,zr.prototype);ru.isPureReactComponent=!0;var Tc=Array.isArray,dp=Object.prototype.hasOwnProperty,iu={current:null},fp={key:!0,ref:!0,__self:!0,__source:!0};function pp(e,t,n){var r,o={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)dp.call(t,r)&&!fp.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Vi,type:e,key:s,ref:a,props:o,_owner:iu.current}}function Mg(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function _g(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ec=/\/+/g;function Xs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_g(""+e.key):t.toString(36)}function vo(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Vi:case xg:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Xs(a,0):r,Tc(o)?(n="",e!=null&&(n=e.replace(Ec,"$&/")+"/"),vo(o,t,n,"",function(c){return c})):o!=null&&(ou(o)&&(o=Mg(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ec,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Tc(e))for(var l=0;l<e.length;l++){s=e[l];var u=r+Xs(s,l);a+=vo(s,t,n,u,o)}else if(u=Rg(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=r+Xs(s,l++),a+=vo(s,t,n,u,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ki(e,t,n){if(e==null)return e;var r=[],o=0;return vo(e,r,"","",function(s){return t.call(n,s,o++)}),r}function Dg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},xo={transition:null},Lg={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:xo,ReactCurrentOwner:iu};function hp(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Ki,forEach:function(e,t,n){Ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ki(e,function(){t++}),t},toArray:function(e){return Ki(e,function(t){return t})||[]},only:function(e){if(!ou(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=zr;F.Fragment=wg;F.Profiler=kg;F.PureComponent=nu;F.StrictMode=Sg;F.Suspense=Tg;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lg;F.act=hp;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lp({},e.props),o=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=iu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)dp.call(t,u)&&!fp.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Vi,type:e.type,key:o,ref:s,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:bg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cg,_context:e},e.Consumer=e};F.createElement=pp;F.createFactory=function(e){var t=pp.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Pg,render:e}};F.isValidElement=ou;F.lazy=function(e){return{$$typeof:Ag,_payload:{_status:-1,_result:e},_init:Dg}};F.memo=function(e,t){return{$$typeof:Eg,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=xo.transition;xo.transition={};try{e()}finally{xo.transition=t}};F.unstable_act=hp;F.useCallback=function(e,t){return je.current.useCallback(e,t)};F.useContext=function(e){return je.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return je.current.useDeferredValue(e)};F.useEffect=function(e,t){return je.current.useEffect(e,t)};F.useId=function(){return je.current.useId()};F.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return je.current.useMemo(e,t)};F.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};F.useRef=function(e){return je.current.useRef(e)};F.useState=function(e){return je.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return je.current.useTransition()};F.version="18.3.1";sp.exports=F;var T=sp.exports;const oe=vg(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng=T,zg=Symbol.for("react.element"),jg=Symbol.for("react.fragment"),Vg=Object.prototype.hasOwnProperty,$g=Ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ig={key:!0,ref:!0,__self:!0,__source:!0};function mp(e,t,n){var r,o={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Vg.call(t,r)&&!Ig.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:zg,type:e,key:s,ref:a,props:o,_owner:$g.current}}ws.Fragment=jg;ws.jsx=mp;ws.jsxs=mp;op.exports=ws;var P=op.exports,Fa={},gp={exports:{}},qe={},yp={exports:{}},vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,M){var N=A.length;A.push(M);e:for(;0<N;){var D=N-1>>>1,V=A[D];if(0<o(V,M))A[D]=M,A[N]=V,N=D;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],N=A.pop();if(N!==M){A[0]=N;e:for(var D=0,V=A.length,fe=V>>>1;D<fe;){var ye=2*(D+1)-1,Ee=A[ye],ce=ye+1,Je=A[ce];if(0>o(Ee,N))ce<V&&0>o(Je,Ee)?(A[D]=Je,A[ce]=N,D=ce):(A[D]=Ee,A[ye]=N,D=ye);else if(ce<V&&0>o(Je,N))A[D]=Je,A[ce]=N,D=ce;else break e}}return M}function o(A,M){var N=A.sortIndex-M.sortIndex;return N!==0?N:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],c=[],d=1,f=null,p=3,g=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=A)r(c),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(c)}}function w(A){if(x=!1,m(A),!v)if(n(u)!==null)v=!0,G(k);else{var M=n(c);M!==null&&ge(w,M.startTime-A)}}function k(A,M){v=!1,x&&(x=!1,y(E),E=-1),g=!0;var N=p;try{for(m(M),f=n(u);f!==null&&(!(f.expirationTime>M)||A&&!W());){var D=f.callback;if(typeof D=="function"){f.callback=null,p=f.priorityLevel;var V=D(f.expirationTime<=M);M=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(u)&&r(u),m(M)}else r(u);f=n(u)}if(f!==null)var fe=!0;else{var ye=n(c);ye!==null&&ge(w,ye.startTime-M),fe=!1}return fe}finally{f=null,p=N,g=!1}}var b=!1,C=null,E=-1,_=5,j=-1;function W(){return!(e.unstable_now()-j<_)}function X(){if(C!==null){var A=e.unstable_now();j=A;var M=!0;try{M=C(!0,A)}finally{M?te():(b=!1,C=null)}}else b=!1}var te;if(typeof h=="function")te=function(){h(X)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,We=ne.port2;ne.port1.onmessage=X,te=function(){We.postMessage(null)}}else te=function(){S(X,0)};function G(A){C=A,b||(b=!0,te())}function ge(A,M){E=S(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,G(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var N=p;p=M;try{return A()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var N=p;p=A;try{return M()}finally{p=N}},e.unstable_scheduleCallback=function(A,M,N){var D=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?D+N:D):N=D,A){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=N+V,A={id:d++,callback:M,priorityLevel:A,startTime:N,expirationTime:V,sortIndex:-1},N>D?(A.sortIndex=N,t(c,A),n(u)===null&&A===n(c)&&(x?(y(E),E=-1):x=!0,ge(w,N-D))):(A.sortIndex=V,t(u,A),v||g||(v=!0,G(k))),A},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(A){var M=p;return function(){var N=p;p=M;try{return A.apply(this,arguments)}finally{p=N}}}})(vp);yp.exports=vp;var Fg=yp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og=T,Qe=Fg;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xp=new Set,mi={};function Wn(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(mi[e]=t,e=0;e<t.length;e++)xp.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=Object.prototype.hasOwnProperty,Bg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ac={},Rc={};function Ug(e){return Oa.call(Rc,e)?!0:Oa.call(Ac,e)?!1:Bg.test(e)?Rc[e]=!0:(Ac[e]=!0,!1)}function Hg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wg(e,t,n,r){if(t===null||typeof t>"u"||Hg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,o,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var su=/[\-:]([a-z])/g;function au(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(su,au);Te[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(su,au);Te[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(su,au);Te[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function lu(e,t,n,r){var o=Te.hasOwnProperty(t)?Te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wg(t,n,o,r)&&(n=null),r||o===null?Ug(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),uu=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),cu=Symbol.for("react.forward_ref"),Ua=Symbol.for("react.suspense"),Ha=Symbol.for("react.suspense_list"),du=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),kp=Symbol.for("react.offscreen"),Mc=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=Mc&&e[Mc]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,qs;function Qr(e){if(qs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qs=t&&t[1]||""}return`
`+qs+e}var Zs=!1;function Js(e,t){if(!e||Zs)return"";Zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),s=r.stack.split(`
`),a=o.length-1,l=s.length-1;1<=a&&0<=l&&o[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==s[l]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function Gg(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=Js(e.type,!1),e;case 11:return e=Js(e.type.render,!1),e;case 1:return e=Js(e.type,!0),e;default:return""}}function Wa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Zn:return"Portal";case Ba:return"Profiler";case uu:return"StrictMode";case Ua:return"Suspense";case Ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sp:return(e.displayName||"Context")+".Consumer";case wp:return(e._context.displayName||"Context")+".Provider";case cu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case du:return t=e.displayName||null,t!==null?t:Wa(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return Wa(e(t))}catch{}}return null}function Kg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wa(t);case 8:return t===uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yg(e){var t=Cp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=Yg(e))}function bp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ga(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pp(e,t){t=t.checked,t!=null&&lu(e,"checked",t,!1)}function Ka(e,t){Pp(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ya(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ya(e,t,n){(t!=="number"||Vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function mr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Xr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function Tp(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ep(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ep(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,Ap=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qg=["Webkit","ms","Moz","O"];Object.keys(ti).forEach(function(e){Qg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ti[t]=ti[e]})});function Rp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ti.hasOwnProperty(e)&&ti[e]?(""+t).trim():t+"px"}function Mp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Rp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Xg=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,t){if(t){if(Xg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Za(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,gr=null,yr=null;function zc(e){if(e=Fi(e)){if(typeof el!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Ps(t),el(e.stateNode,e.type,t))}}function _p(e){gr?yr?yr.push(e):yr=[e]:gr=e}function Dp(){if(gr){var e=gr,t=yr;if(yr=gr=null,zc(e),t)for(e=0;e<t.length;e++)zc(t[e])}}function Lp(e,t){return e(t)}function Np(){}var ea=!1;function zp(e,t,n){if(ea)return e(t,n);ea=!0;try{return Lp(e,t,n)}finally{ea=!1,(gr!==null||yr!==null)&&(Np(),Dp())}}function yi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ps(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var tl=!1;if(Vt)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){tl=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{tl=!1}function qg(e,t,n,r,o,s,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ni=!1,$o=null,Io=!1,nl=null,Zg={onError:function(e){ni=!0,$o=e}};function Jg(e,t,n,r,o,s,a,l,u){ni=!1,$o=null,qg.apply(Zg,arguments)}function e1(e,t,n,r,o,s,a,l,u){if(Jg.apply(this,arguments),ni){if(ni){var c=$o;ni=!1,$o=null}else throw Error(R(198));Io||(Io=!0,nl=c)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jc(e){if(Gn(e)!==e)throw Error(R(188))}function t1(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return jc(o),e;if(s===r)return jc(o),t;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=s;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=s;break}if(l===r){a=!0,r=o,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=o;break}if(l===r){a=!0,r=s,n=o;break}l=l.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Vp(e){return e=t1(e),e!==null?$p(e):null}function $p(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$p(e);if(t!==null)return t;e=e.sibling}return null}var Ip=Qe.unstable_scheduleCallback,Vc=Qe.unstable_cancelCallback,n1=Qe.unstable_shouldYield,r1=Qe.unstable_requestPaint,de=Qe.unstable_now,i1=Qe.unstable_getCurrentPriorityLevel,pu=Qe.unstable_ImmediatePriority,Fp=Qe.unstable_UserBlockingPriority,Fo=Qe.unstable_NormalPriority,o1=Qe.unstable_LowPriority,Op=Qe.unstable_IdlePriority,Ss=null,bt=null;function s1(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Ss,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:u1,a1=Math.log,l1=Math.LN2;function u1(e){return e>>>=0,e===0?32:31-(a1(e)/l1|0)|0}var qi=64,Zi=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=qr(l):(s&=a,s!==0&&(r=qr(s)))}else a=n&~o,a!==0?r=qr(a):s!==0&&(r=qr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),o=1<<n,r|=e[n],t&=~o;return r}function c1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-mt(s),l=1<<a,u=o[a];u===-1?(!(l&n)||l&r)&&(o[a]=c1(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bp(){var e=qi;return qi<<=1,!(qi&4194240)&&(qi=64),e}function ta(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function f1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-mt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function hu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Up(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hp,mu,Wp,Gp,Kp,il=!1,Ji=[],nn=null,rn=null,on=null,vi=new Map,xi=new Map,qt=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $c(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function Or(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Fi(t),t!==null&&mu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function h1(e,t,n,r,o){switch(t){case"focusin":return nn=Or(nn,e,t,n,r,o),!0;case"dragenter":return rn=Or(rn,e,t,n,r,o),!0;case"mouseover":return on=Or(on,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return vi.set(s,Or(vi.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,xi.set(s,Or(xi.get(s)||null,e,t,n,r,o)),!0}return!1}function Yp(e){var t=Mn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=jp(n),t!==null){e.blockedOn=t,Kp(e.priority,function(){Wp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ja=r,n.target.dispatchEvent(r),Ja=null}else return t=Fi(n),t!==null&&mu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ic(e,t,n){wo(e)&&n.delete(t)}function m1(){il=!1,nn!==null&&wo(nn)&&(nn=null),rn!==null&&wo(rn)&&(rn=null),on!==null&&wo(on)&&(on=null),vi.forEach(Ic),xi.forEach(Ic)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,il||(il=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,m1)))}function wi(e){function t(o){return Br(o,e)}if(0<Ji.length){Br(Ji[0],e);for(var n=1;n<Ji.length;n++){var r=Ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Br(nn,e),rn!==null&&Br(rn,e),on!==null&&Br(on,e),vi.forEach(t),xi.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Yp(n),n.blockedOn===null&&qt.shift()}var vr=Bt.ReactCurrentBatchConfig,Bo=!0;function g1(e,t,n,r){var o=H,s=vr.transition;vr.transition=null;try{H=1,gu(e,t,n,r)}finally{H=o,vr.transition=s}}function y1(e,t,n,r){var o=H,s=vr.transition;vr.transition=null;try{H=4,gu(e,t,n,r)}finally{H=o,vr.transition=s}}function gu(e,t,n,r){if(Bo){var o=ol(e,t,n,r);if(o===null)da(e,t,r,Uo,n),$c(e,r);else if(h1(o,e,t,n,r))r.stopPropagation();else if($c(e,r),t&4&&-1<p1.indexOf(e)){for(;o!==null;){var s=Fi(o);if(s!==null&&Hp(s),s=ol(e,t,n,r),s===null&&da(e,t,r,Uo,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else da(e,t,r,null,n)}}var Uo=null;function ol(e,t,n,r){if(Uo=null,e=fu(r),e=Mn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uo=e,null}function Qp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i1()){case pu:return 1;case Fp:return 4;case Fo:case o1:return 16;case Op:return 536870912;default:return 16}default:return 16}}var Jt=null,yu=null,So=null;function Xp(){if(So)return So;var e,t=yu,n=t.length,r,o="value"in Jt?Jt.value:Jt.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[s-r];r++);return So=o.slice(e,1<r?1-r:void 0)}function ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function Fc(){return!1}function Ze(e){function t(n,r,o,s,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eo:Fc,this.isPropagationStopped=Fc,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=Ze(jr),Ii=ae({},jr,{view:0,detail:0}),v1=Ze(Ii),na,ra,Ur,ks=ae({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(na=e.screenX-Ur.screenX,ra=e.screenY-Ur.screenY):ra=na=0,Ur=e),na)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),Oc=Ze(ks),x1=ae({},ks,{dataTransfer:0}),w1=Ze(x1),S1=ae({},Ii,{relatedTarget:0}),ia=Ze(S1),k1=ae({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=Ze(k1),b1=ae({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P1=Ze(b1),T1=ae({},jr,{data:0}),Bc=Ze(T1),E1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R1[e])?!!t[e]:!1}function xu(){return M1}var _1=ae({},Ii,{key:function(e){if(e.key){var t=E1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),D1=Ze(_1),L1=ae({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=Ze(L1),N1=ae({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),z1=Ze(N1),j1=ae({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),V1=Ze(j1),$1=ae({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I1=Ze($1),F1=[9,13,27,32],wu=Vt&&"CompositionEvent"in window,ri=null;Vt&&"documentMode"in document&&(ri=document.documentMode);var O1=Vt&&"TextEvent"in window&&!ri,qp=Vt&&(!wu||ri&&8<ri&&11>=ri),Hc=String.fromCharCode(32),Wc=!1;function Zp(e,t){switch(e){case"keyup":return F1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function B1(e,t){switch(e){case"compositionend":return Jp(t);case"keypress":return t.which!==32?null:(Wc=!0,Hc);case"textInput":return e=t.data,e===Hc&&Wc?null:e;default:return null}}function U1(e,t){if(er)return e==="compositionend"||!wu&&Zp(e,t)?(e=Xp(),So=yu=Jt=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qp&&t.locale!=="ko"?null:t.data;default:return null}}var H1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H1[e.type]:t==="textarea"}function eh(e,t,n,r){_p(r),t=Ho(t,"onChange"),0<t.length&&(n=new vu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,Si=null;function W1(e){dh(e,0)}function Cs(e){var t=rr(e);if(bp(t))return e}function G1(e,t){if(e==="change")return t}var th=!1;if(Vt){var oa;if(Vt){var sa="oninput"in document;if(!sa){var Kc=document.createElement("div");Kc.setAttribute("oninput","return;"),sa=typeof Kc.oninput=="function"}oa=sa}else oa=!1;th=oa&&(!document.documentMode||9<document.documentMode)}function Yc(){ii&&(ii.detachEvent("onpropertychange",nh),Si=ii=null)}function nh(e){if(e.propertyName==="value"&&Cs(Si)){var t=[];eh(t,Si,e,fu(e)),zp(W1,t)}}function K1(e,t,n){e==="focusin"?(Yc(),ii=t,Si=n,ii.attachEvent("onpropertychange",nh)):e==="focusout"&&Yc()}function Y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cs(Si)}function Q1(e,t){if(e==="click")return Cs(t)}function X1(e,t){if(e==="input"||e==="change")return Cs(t)}function q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:q1;function ki(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Oa.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var n=Qc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qc(n)}}function rh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ih(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vo(e.document)}return t}function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Z1(e){var t=ih(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rh(n.ownerDocument.documentElement,n)){if(r!==null&&Su(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Xc(n,s);var a=Xc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var J1=Vt&&"documentMode"in document&&11>=document.documentMode,tr=null,sl=null,oi=null,al=!1;function qc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||tr==null||tr!==Vo(r)||(r=tr,"selectionStart"in r&&Su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&ki(oi,r)||(oi=r,r=Ho(sl,"onSelect"),0<r.length&&(t=new vu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tr)))}function to(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nr={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},aa={},oh={};Vt&&(oh=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function bs(e){if(aa[e])return aa[e];if(!nr[e])return e;var t=nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oh)return aa[e]=t[n];return e}var sh=bs("animationend"),ah=bs("animationiteration"),lh=bs("animationstart"),uh=bs("transitionend"),ch=new Map,Zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){ch.set(e,t),Wn(t,[e])}for(var la=0;la<Zc.length;la++){var ua=Zc[la],ey=ua.toLowerCase(),ty=ua[0].toUpperCase()+ua.slice(1);xn(ey,"on"+ty)}xn(sh,"onAnimationEnd");xn(ah,"onAnimationIteration");xn(lh,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(uh,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function Jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,e1(r,t,void 0,e),e.currentTarget=null}function dh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&o.isPropagationStopped())break e;Jc(o,l,c),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&o.isPropagationStopped())break e;Jc(o,l,c),s=u}}}if(Io)throw e=nl,Io=!1,nl=null,e}function q(e,t){var n=t[fl];n===void 0&&(n=t[fl]=new Set);var r=e+"__bubble";n.has(r)||(fh(t,e,2,!1),n.add(r))}function ca(e,t,n){var r=0;t&&(r|=4),fh(n,e,r,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function Ci(e){if(!e[no]){e[no]=!0,xp.forEach(function(n){n!=="selectionchange"&&(ny.has(n)||ca(n,!1,e),ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,ca("selectionchange",!1,t))}}function fh(e,t,n,r){switch(Qp(t)){case 1:var o=g1;break;case 4:o=y1;break;default:o=gu}n=o.bind(null,t,n,e),o=void 0,!tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function da(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Mn(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}zp(function(){var c=s,d=fu(n),f=[];e:{var p=ch.get(e);if(p!==void 0){var g=vu,v=e;switch(e){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":g=D1;break;case"focusin":v="focus",g=ia;break;case"focusout":v="blur",g=ia;break;case"beforeblur":case"afterblur":g=ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=w1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=z1;break;case sh:case ah:case lh:g=C1;break;case uh:g=V1;break;case"scroll":g=v1;break;case"wheel":g=I1;break;case"copy":case"cut":case"paste":g=P1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Uc}var x=(t&4)!==0,S=!x&&e==="scroll",y=x?p!==null?p+"Capture":null:p;x=[];for(var h=c,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,y!==null&&(w=yi(h,y),w!=null&&x.push(bi(h,w,m)))),S)break;h=h.return}0<x.length&&(p=new g(p,v,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Ja&&(v=n.relatedTarget||n.fromElement)&&(Mn(v)||v[$t]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Mn(v):null,v!==null&&(S=Gn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(x=Oc,w="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Uc,w="onPointerLeave",y="onPointerEnter",h="pointer"),S=g==null?p:rr(g),m=v==null?p:rr(v),p=new x(w,h+"leave",g,n,d),p.target=S,p.relatedTarget=m,w=null,Mn(d)===c&&(x=new x(y,h+"enter",v,n,d),x.target=m,x.relatedTarget=S,w=x),S=w,g&&v)t:{for(x=g,y=v,h=0,m=x;m;m=Qn(m))h++;for(m=0,w=y;w;w=Qn(w))m++;for(;0<h-m;)x=Qn(x),h--;for(;0<m-h;)y=Qn(y),m--;for(;h--;){if(x===y||y!==null&&x===y.alternate)break t;x=Qn(x),y=Qn(y)}x=null}else x=null;g!==null&&ed(f,p,g,x,!1),v!==null&&S!==null&&ed(f,S,v,x,!0)}}e:{if(p=c?rr(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=G1;else if(Gc(p))if(th)k=X1;else{k=Y1;var b=K1}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Q1);if(k&&(k=k(e,c))){eh(f,k,n,d);break e}b&&b(e,p,c),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&Ya(p,"number",p.value)}switch(b=c?rr(c):window,e){case"focusin":(Gc(b)||b.contentEditable==="true")&&(tr=b,sl=c,oi=null);break;case"focusout":oi=sl=tr=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,qc(f,n,d);break;case"selectionchange":if(J1)break;case"keydown":case"keyup":qc(f,n,d)}var C;if(wu)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else er?Zp(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(qp&&n.locale!=="ko"&&(er||E!=="onCompositionStart"?E==="onCompositionEnd"&&er&&(C=Xp()):(Jt=d,yu="value"in Jt?Jt.value:Jt.textContent,er=!0)),b=Ho(c,E),0<b.length&&(E=new Bc(E,e,null,n,d),f.push({event:E,listeners:b}),C?E.data=C:(C=Jp(n),C!==null&&(E.data=C)))),(C=O1?B1(e,n):U1(e,n))&&(c=Ho(c,"onBeforeInput"),0<c.length&&(d=new Bc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}dh(f,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=yi(e,n),s!=null&&r.unshift(bi(e,s,o)),s=yi(e,t),s!=null&&r.push(bi(e,s,o))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ed(e,t,n,r,o){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,o?(u=yi(n,s),u!=null&&a.unshift(bi(n,u,l))):o||(u=yi(n,s),u!=null&&a.push(bi(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ry=/\r\n?/g,iy=/\u0000|\uFFFD/g;function td(e){return(typeof e=="string"?e:""+e).replace(ry,`
`).replace(iy,"")}function ro(e,t,n){if(t=td(t),td(e)!==t&&n)throw Error(R(425))}function Wo(){}var ll=null,ul=null;function cl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dl=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(ay)}:dl;function ay(e){setTimeout(function(){throw e})}function fa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);wi(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Vr,Pi="__reactProps$"+Vr,$t="__reactContainer$"+Vr,fl="__reactEvents$"+Vr,ly="__reactListeners$"+Vr,uy="__reactHandles$"+Vr;function Mn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rd(e);e!==null;){if(n=e[Ct])return n;e=rd(e)}return t}e=n,n=e.parentNode}return null}function Fi(e){return e=e[Ct]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Ps(e){return e[Pi]||null}var pl=[],ir=-1;function wn(e){return{current:e}}function J(e){0>ir||(e.current=pl[ir],pl[ir]=null,ir--)}function Y(e,t){ir++,pl[ir]=e.current,e.current=t}var gn={},De=wn(gn),Oe=wn(!1),$n=gn;function kr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function Go(){J(Oe),J(De)}function id(e,t,n){if(De.current!==gn)throw Error(R(168));Y(De,t),Y(Oe,n)}function ph(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,Kg(e)||"Unknown",o));return ae({},n,r)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,$n=De.current,Y(De,e),Y(Oe,Oe.current),!0}function od(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=ph(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,J(Oe),J(De),Y(De,e)):J(Oe),Y(Oe,n)}var Mt=null,Ts=!1,pa=!1;function hh(e){Mt===null?Mt=[e]:Mt.push(e)}function cy(e){Ts=!0,hh(e)}function Sn(){if(!pa&&Mt!==null){pa=!0;var e=0,t=H;try{var n=Mt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,Ts=!1}catch(o){throw Mt!==null&&(Mt=Mt.slice(e+1)),Ip(pu,Sn),o}finally{H=t,pa=!1}}return null}var or=[],sr=0,Yo=null,Qo=0,rt=[],it=0,In=null,_t=1,Dt="";function Pn(e,t){or[sr++]=Qo,or[sr++]=Yo,Yo=e,Qo=t}function mh(e,t,n){rt[it++]=_t,rt[it++]=Dt,rt[it++]=In,In=e;var r=_t;e=Dt;var o=32-mt(r)-1;r&=~(1<<o),n+=1;var s=32-mt(t)+o;if(30<s){var a=o-o%5;s=(r&(1<<a)-1).toString(32),r>>=a,o-=a,_t=1<<32-mt(t)+o|n<<o|r,Dt=s+e}else _t=1<<s|n<<o|r,Dt=e}function ku(e){e.return!==null&&(Pn(e,1),mh(e,1,0))}function Cu(e){for(;e===Yo;)Yo=or[--sr],or[sr]=null,Qo=or[--sr],or[sr]=null;for(;e===In;)In=rt[--it],rt[it]=null,Dt=rt[--it],rt[it]=null,_t=rt[--it],rt[it]=null}var Ye=null,Ke=null,ee=!1,ht=null;function gh(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Ke=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:_t,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Ke=null,!0):!1;default:return!1}}function hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ml(e){if(ee){var t=Ke;if(t){var n=t;if(!sd(e,t)){if(hl(e))throw Error(R(418));t=sn(n.nextSibling);var r=Ye;t&&sd(e,t)?gh(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ye=e)}}else{if(hl(e))throw Error(R(418));e.flags=e.flags&-4097|2,ee=!1,Ye=e}}}function ad(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function io(e){if(e!==Ye)return!1;if(!ee)return ad(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cl(e.type,e.memoizedProps)),t&&(t=Ke)){if(hl(e))throw yh(),Error(R(418));for(;t;)gh(e,t),t=sn(t.nextSibling)}if(ad(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Ye?sn(e.stateNode.nextSibling):null;return!0}function yh(){for(var e=Ke;e;)e=sn(e.nextSibling)}function Cr(){Ke=Ye=null,ee=!1}function bu(e){ht===null?ht=[e]:ht.push(e)}var dy=Bt.ReactCurrentBatchConfig;function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=o.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ld(e){var t=e._init;return t(e._payload)}function vh(e){function t(y,h){if(e){var m=y.deletions;m===null?(y.deletions=[h],y.flags|=16):m.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function o(y,h){return y=cn(y,h),y.index=0,y.sibling=null,y}function s(y,h,m){return y.index=m,e?(m=y.alternate,m!==null?(m=m.index,m<h?(y.flags|=2,h):m):(y.flags|=2,h)):(y.flags|=1048576,h)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,h,m,w){return h===null||h.tag!==6?(h=wa(m,y.mode,w),h.return=y,h):(h=o(h,m),h.return=y,h)}function u(y,h,m,w){var k=m.type;return k===Jn?d(y,h,m.props.children,w,m.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Yt&&ld(k)===h.type)?(w=o(h,m.props),w.ref=Hr(y,h,m),w.return=y,w):(w=Ro(m.type,m.key,m.props,null,y.mode,w),w.ref=Hr(y,h,m),w.return=y,w)}function c(y,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Sa(m,y.mode,w),h.return=y,h):(h=o(h,m.children||[]),h.return=y,h)}function d(y,h,m,w,k){return h===null||h.tag!==7?(h=jn(m,y.mode,w,k),h.return=y,h):(h=o(h,m),h.return=y,h)}function f(y,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=wa(""+h,y.mode,m),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yi:return m=Ro(h.type,h.key,h.props,null,y.mode,m),m.ref=Hr(y,null,h),m.return=y,m;case Zn:return h=Sa(h,y.mode,m),h.return=y,h;case Yt:var w=h._init;return f(y,w(h._payload),m)}if(Xr(h)||Ir(h))return h=jn(h,y.mode,m,null),h.return=y,h;oo(y,h)}return null}function p(y,h,m,w){var k=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:l(y,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:return m.key===k?u(y,h,m,w):null;case Zn:return m.key===k?c(y,h,m,w):null;case Yt:return k=m._init,p(y,h,k(m._payload),w)}if(Xr(m)||Ir(m))return k!==null?null:d(y,h,m,w,null);oo(y,m)}return null}function g(y,h,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(m)||null,l(h,y,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yi:return y=y.get(w.key===null?m:w.key)||null,u(h,y,w,k);case Zn:return y=y.get(w.key===null?m:w.key)||null,c(h,y,w,k);case Yt:var b=w._init;return g(y,h,m,b(w._payload),k)}if(Xr(w)||Ir(w))return y=y.get(m)||null,d(h,y,w,k,null);oo(h,w)}return null}function v(y,h,m,w){for(var k=null,b=null,C=h,E=h=0,_=null;C!==null&&E<m.length;E++){C.index>E?(_=C,C=null):_=C.sibling;var j=p(y,C,m[E],w);if(j===null){C===null&&(C=_);break}e&&C&&j.alternate===null&&t(y,C),h=s(j,h,E),b===null?k=j:b.sibling=j,b=j,C=_}if(E===m.length)return n(y,C),ee&&Pn(y,E),k;if(C===null){for(;E<m.length;E++)C=f(y,m[E],w),C!==null&&(h=s(C,h,E),b===null?k=C:b.sibling=C,b=C);return ee&&Pn(y,E),k}for(C=r(y,C);E<m.length;E++)_=g(C,y,E,m[E],w),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?E:_.key),h=s(_,h,E),b===null?k=_:b.sibling=_,b=_);return e&&C.forEach(function(W){return t(y,W)}),ee&&Pn(y,E),k}function x(y,h,m,w){var k=Ir(m);if(typeof k!="function")throw Error(R(150));if(m=k.call(m),m==null)throw Error(R(151));for(var b=k=null,C=h,E=h=0,_=null,j=m.next();C!==null&&!j.done;E++,j=m.next()){C.index>E?(_=C,C=null):_=C.sibling;var W=p(y,C,j.value,w);if(W===null){C===null&&(C=_);break}e&&C&&W.alternate===null&&t(y,C),h=s(W,h,E),b===null?k=W:b.sibling=W,b=W,C=_}if(j.done)return n(y,C),ee&&Pn(y,E),k;if(C===null){for(;!j.done;E++,j=m.next())j=f(y,j.value,w),j!==null&&(h=s(j,h,E),b===null?k=j:b.sibling=j,b=j);return ee&&Pn(y,E),k}for(C=r(y,C);!j.done;E++,j=m.next())j=g(C,y,E,j.value,w),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?E:j.key),h=s(j,h,E),b===null?k=j:b.sibling=j,b=j);return e&&C.forEach(function(X){return t(y,X)}),ee&&Pn(y,E),k}function S(y,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:e:{for(var k=m.key,b=h;b!==null;){if(b.key===k){if(k=m.type,k===Jn){if(b.tag===7){n(y,b.sibling),h=o(b,m.props.children),h.return=y,y=h;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Yt&&ld(k)===b.type){n(y,b.sibling),h=o(b,m.props),h.ref=Hr(y,b,m),h.return=y,y=h;break e}n(y,b);break}else t(y,b);b=b.sibling}m.type===Jn?(h=jn(m.props.children,y.mode,w,m.key),h.return=y,y=h):(w=Ro(m.type,m.key,m.props,null,y.mode,w),w.ref=Hr(y,h,m),w.return=y,y=w)}return a(y);case Zn:e:{for(b=m.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(y,h.sibling),h=o(h,m.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=Sa(m,y.mode,w),h.return=y,y=h}return a(y);case Yt:return b=m._init,S(y,h,b(m._payload),w)}if(Xr(m))return v(y,h,m,w);if(Ir(m))return x(y,h,m,w);oo(y,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(y,h.sibling),h=o(h,m),h.return=y,y=h):(n(y,h),h=wa(m,y.mode,w),h.return=y,y=h),a(y)):n(y,h)}return S}var br=vh(!0),xh=vh(!1),Xo=wn(null),qo=null,ar=null,Pu=null;function Tu(){Pu=ar=qo=null}function Eu(e){var t=Xo.current;J(Xo),e._currentValue=t}function gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){qo=e,Pu=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Pu!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(qo===null)throw Error(R(308));ar=e,qo.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var _n=null;function Au(e){_n===null?_n=[e]:_n.push(e)}function wh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Au(t)):(n.next=o.next,o.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,It(e,n)}return o=r.interleaved,o===null?(t.next=t,Au(r)):(t.next=o.next,o.next=t),r.interleaved=t,It(e,n)}function Co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}function ud(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var o=e.updateQueue;Qt=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?s=c:a.next=c,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=o.baseState;a=0,d=c=u=null,l=s;do{var p=l.lane,g=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(p=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(g,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(g,f,p):v,p==null)break e;f=ae({},f,p);break e;case 2:Qt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=g,u=f):d=d.next=g,a|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(d===null&&(u=f),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);On|=a,e.lanes=a,e.memoizedState=f}}function cd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var Oi={},Pt=wn(Oi),Ti=wn(Oi),Ei=wn(Oi);function Dn(e){if(e===Oi)throw Error(R(174));return e}function Mu(e,t){switch(Y(Ei,t),Y(Ti,e),Y(Pt,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xa(t,e)}J(Pt),Y(Pt,t)}function Pr(){J(Pt),J(Ti),J(Ei)}function kh(e){Dn(Ei.current);var t=Dn(Pt.current),n=Xa(t,e.type);t!==n&&(Y(Ti,e),Y(Pt,n))}function _u(e){Ti.current===e&&(J(Pt),J(Ti))}var re=wn(0);function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=[];function Du(){for(var e=0;e<ha.length;e++)ha[e]._workInProgressVersionPrimary=null;ha.length=0}var bo=Bt.ReactCurrentDispatcher,ma=Bt.ReactCurrentBatchConfig,Fn=0,se=null,ve=null,we=null,es=!1,si=!1,Ai=0,fy=0;function Ae(){throw Error(R(321))}function Lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Nu(e,t,n,r,o,s){if(Fn=s,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bo.current=e===null||e.memoizedState===null?gy:yy,e=n(r,o),si){s=0;do{if(si=!1,Ai=0,25<=s)throw Error(R(301));s+=1,we=ve=null,t.updateQueue=null,bo.current=vy,e=n(r,o)}while(si)}if(bo.current=ts,t=ve!==null&&ve.next!==null,Fn=0,we=ve=se=null,es=!1,t)throw Error(R(300));return e}function zu(){var e=Ai!==0;return Ai=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?se.memoizedState=we=e:we=we.next=e,we}function lt(){if(ve===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?se.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(R(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?se.memoizedState=we=e:we=we.next=e}return we}function Ri(e,t){return typeof t=="function"?t(e):t}function ga(e){var t=lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var l=a=null,u=null,c=s;do{var d=c.lane;if((Fn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,a=r):u=u.next=f,se.lanes|=d,On|=d}c=c.next}while(c!==null&&c!==s);u===null?a=r:u.next=l,vt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,se.lanes|=s,On|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ya(e){var t=lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do s=e(s,a.action),a=a.next;while(a!==o);vt(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ch(){}function bh(e,t){var n=se,r=lt(),o=t(),s=!vt(r.memoizedState,o);if(s&&(r.memoizedState=o,Fe=!0),r=r.queue,ju(Eh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Mi(9,Th.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error(R(349));Fn&30||Ph(n,t,o)}return o}function Ph(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Th(e,t,n,r){t.value=n,t.getSnapshot=r,Ah(t)&&Rh(e)}function Eh(e,t,n){return n(function(){Ah(t)&&Rh(e)})}function Ah(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Rh(e){var t=It(e,1);t!==null&&gt(t,e,1,-1)}function dd(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},t.queue=e,e=e.dispatch=my.bind(null,se,e),[t.memoizedState,e]}function Mi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mh(){return lt().memoizedState}function Po(e,t,n,r){var o=St();se.flags|=e,o.memoizedState=Mi(1|t,n,void 0,r===void 0?null:r)}function Es(e,t,n,r){var o=lt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var a=ve.memoizedState;if(s=a.destroy,r!==null&&Lu(r,a.deps)){o.memoizedState=Mi(t,n,s,r);return}}se.flags|=e,o.memoizedState=Mi(1|t,n,s,r)}function fd(e,t){return Po(8390656,8,e,t)}function ju(e,t){return Es(2048,8,e,t)}function _h(e,t){return Es(4,2,e,t)}function Dh(e,t){return Es(4,4,e,t)}function Lh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,n){return n=n!=null?n.concat([e]):null,Es(4,4,Lh.bind(null,t,e),n)}function Vu(){}function zh(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jh(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vh(e,t,n){return Fn&21?(vt(n,t)||(n=Bp(),se.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function py(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=ma.transition;ma.transition={};try{e(!1),t()}finally{H=n,ma.transition=r}}function $h(){return lt().memoizedState}function hy(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ih(e))Fh(t,n);else if(n=wh(e,t,n,r),n!==null){var o=ze();gt(n,e,r,o),Oh(n,t,r)}}function my(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ih(e))Fh(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(o.hasEagerState=!0,o.eagerState=l,vt(l,a)){var u=t.interleaved;u===null?(o.next=o,Au(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=wh(e,t,o,r),n!==null&&(o=ze(),gt(n,e,r,o),Oh(n,t,r))}}function Ih(e){var t=e.alternate;return e===se||t!==null&&t===se}function Fh(e,t){si=es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}var ts={readContext:at,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},gy={readContext:at,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:fd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,Lh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hy.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:dd,useDebugValue:Vu,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=dd(!1),t=e[0];return e=py.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,o=St();if(ee){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ce===null)throw Error(R(349));Fn&30||Ph(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,fd(Eh.bind(null,r,s,e),[e]),r.flags|=2048,Mi(9,Th.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=St(),t=Ce.identifierPrefix;if(ee){var n=Dt,r=_t;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yy={readContext:at,useCallback:zh,useContext:at,useEffect:ju,useImperativeHandle:Nh,useInsertionEffect:_h,useLayoutEffect:Dh,useMemo:jh,useReducer:ga,useRef:Mh,useState:function(){return ga(Ri)},useDebugValue:Vu,useDeferredValue:function(e){var t=lt();return Vh(t,ve.memoizedState,e)},useTransition:function(){var e=ga(Ri)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:bh,useId:$h,unstable_isNewReconciler:!1},vy={readContext:at,useCallback:zh,useContext:at,useEffect:ju,useImperativeHandle:Nh,useInsertionEffect:_h,useLayoutEffect:Dh,useMemo:jh,useReducer:ya,useRef:Mh,useState:function(){return ya(Ri)},useDebugValue:Vu,useDeferredValue:function(e){var t=lt();return ve===null?t.memoizedState=e:Vh(t,ve.memoizedState,e)},useTransition:function(){var e=ya(Ri)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Ch,useSyncExternalStore:bh,useId:$h,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var As={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),o=un(e),s=Nt(r,o);s.payload=t,n!=null&&(s.callback=n),t=an(e,s,o),t!==null&&(gt(t,e,o,r),Co(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),o=un(e),s=Nt(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=an(e,s,o),t!==null&&(gt(t,e,o,r),Co(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=un(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=an(e,o,r),t!==null&&(gt(t,e,r,n),Co(t,e,r))}};function pd(e,t,n,r,o,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(o,s):!0}function Bh(e,t,n){var r=!1,o=gn,s=t.contextType;return typeof s=="object"&&s!==null?s=at(s):(o=Be(t)?$n:De.current,r=t.contextTypes,s=(r=r!=null)?kr(e,o):gn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=As,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&As.enqueueReplaceState(t,t.state,null)}function vl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ru(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=at(s):(s=Be(t)?$n:De.current,o.context=kr(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(yl(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&As.enqueueReplaceState(o,o.state,null),Zo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t){try{var n="",r=t;do n+=Gg(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function va(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xy=typeof WeakMap=="function"?WeakMap:Map;function Uh(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rs||(rs=!0,Rl=r),xl(e,t)},n}function Hh(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){xl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xl(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function md(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xy;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ly.bind(null,e,t,n),t.then(e,e))}function gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var wy=Bt.ReactCurrentOwner,Fe=!1;function Ne(e,t,n,r){t.child=e===null?xh(t,null,n,r):br(t,e.child,n,r)}function vd(e,t,n,r,o){n=n.render;var s=t.ref;return xr(t,o),r=Nu(e,t,n,r,s,o),n=zu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(ee&&n&&ku(t),t.flags|=1,Ne(e,t,r,o),t.child)}function xd(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!Wu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Wh(e,t,s,r,o)):(e=Ro(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(a,r)&&e.ref===t.ref)return Ft(e,t,o)}return t.flags|=1,e=cn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Wh(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(ki(s,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Ft(e,t,o)}return wl(e,t,n,r,o)}function Gh(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(ur,Ge),Ge|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(ur,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(ur,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Y(ur,Ge),Ge|=r;return Ne(e,t,o,n),t.child}function Kh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wl(e,t,n,r,o){var s=Be(n)?$n:De.current;return s=kr(t,s),xr(t,o),n=Nu(e,t,n,r,s,o),r=zu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ft(e,t,o)):(ee&&r&&ku(t),t.flags|=1,Ne(e,t,n,o),t.child)}function wd(e,t,n,r,o){if(Be(n)){var s=!0;Ko(t)}else s=!1;if(xr(t,o),t.stateNode===null)To(e,t),Bh(t,n,r),vl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=at(c):(c=Be(n)?$n:De.current,c=kr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==c)&&hd(t,a,r,c),Qt=!1;var p=t.memoizedState;a.state=p,Zo(t,r,a,o),u=t.memoizedState,l!==r||p!==u||Oe.current||Qt?(typeof d=="function"&&(yl(t,n,d,r),u=t.memoizedState),(l=Qt||pd(t,n,l,r,p,u,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Sh(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:ft(t.type,l),a.props=c,f=t.pendingProps,p=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=at(u):(u=Be(n)?$n:De.current,u=kr(t,u));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==u)&&hd(t,a,r,u),Qt=!1,p=t.memoizedState,a.state=p,Zo(t,r,a,o);var v=t.memoizedState;l!==f||p!==v||Oe.current||Qt?(typeof g=="function"&&(yl(t,n,g,r),v=t.memoizedState),(c=Qt||pd(t,n,c,r,p,v,u)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Sl(e,t,n,r,s,o)}function Sl(e,t,n,r,o,s){Kh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&od(t,n,!1),Ft(e,t,s);r=t.stateNode,wy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=br(t,e.child,null,s),t.child=br(t,null,l,s)):Ne(e,t,l,s),t.memoizedState=r.state,o&&od(t,n,!0),t.child}function Yh(e){var t=e.stateNode;t.pendingContext?id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&id(e,t.context,!1),Mu(e,t.containerInfo)}function Sd(e,t,n,r,o){return Cr(),bu(o),t.flags|=256,Ne(e,t,n,r),t.child}var kl={dehydrated:null,treeContext:null,retryLane:0};function Cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qh(e,t,n){var r=t.pendingProps,o=re.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(re,o&1),e===null)return ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=_s(a,r,0,null),e=jn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Cl(n),t.memoizedState=kl,e):$u(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Sy(e,t,a,r,l,o,n);if(s){s=r.fallback,a=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=cn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?s=cn(l,s):(s=jn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Cl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=kl,r}return s=e.child,e=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $u(e,t){return t=_s({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function so(e,t,n,r){return r!==null&&bu(r),br(t,e.child,null,n),e=$u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sy(e,t,n,r,o,s,a){if(n)return t.flags&256?(t.flags&=-257,r=va(Error(R(422))),so(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=_s({mode:"visible",children:r.children},o,0,null),s=jn(s,o,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&br(t,e.child,null,a),t.child.memoizedState=Cl(a),t.memoizedState=kl,s);if(!(t.mode&1))return so(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(R(419)),r=va(s,r,void 0),so(e,t,a,r)}if(l=(a&e.childLanes)!==0,Fe||l){if(r=Ce,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,It(e,o),gt(r,e,o,-1))}return Hu(),r=va(Error(R(421))),so(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ny.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,Ke=sn(o.nextSibling),Ye=t,ee=!0,ht=null,e!==null&&(rt[it++]=_t,rt[it++]=Dt,rt[it++]=In,_t=e.id,Dt=e.overflow,In=t),t=$u(t,r.children),t.flags|=4096,t)}function kd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gl(e.return,t,n)}function xa(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function Xh(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Ne(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,n,t);else if(e.tag===19)kd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Jo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),xa(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Jo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}xa(t,!0,n,null,s);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ky(e,t,n){switch(t.tag){case 3:Yh(t),Cr();break;case 5:kh(t);break;case 1:Be(t.type)&&Ko(t);break;case 4:Mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Y(Xo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Qh(e,t,n):(Y(re,re.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Gh(e,t,n)}return Ft(e,t,n)}var qh,bl,Zh,Jh;qh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bl=function(){};Zh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Dn(Pt.current);var s=null;switch(n){case"input":o=Ga(e,o),r=Ga(e,r),s=[];break;case"select":o=ae({},o,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":o=Qa(e,o),r=Qa(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wo)}qa(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&q("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Jh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cy(e,t,n){var r=t.pendingProps;switch(Cu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Be(t.type)&&Go(),Re(t),null;case 3:return r=t.stateNode,Pr(),J(Oe),J(De),Du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Dl(ht),ht=null))),bl(e,t),Re(t),null;case 5:_u(t);var o=Dn(Ei.current);if(n=t.type,e!==null&&t.stateNode!=null)Zh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Re(t),null}if(e=Dn(Pt.current),io(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ct]=t,r[Pi]=s,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<Zr.length;o++)q(Zr[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":_c(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Lc(r,s),q("invalid",r)}qa(n,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ro(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ro(r.textContent,l,e),o=["children",""+l]):mi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&q("scroll",r)}switch(n){case"input":Qi(r),Dc(r,s,!0);break;case"textarea":Qi(r),Nc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ep(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ct]=t,e[Pi]=r,qh(e,t,!1,!1),t.stateNode=e;e:{switch(a=Za(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zr.length;o++)q(Zr[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":_c(e,r),o=Ga(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ae({},r,{value:void 0}),q("invalid",e);break;case"textarea":Lc(e,r),o=Qa(e,r),q("invalid",e);break;default:o=r}qa(n,o),l=o;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Mp(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ap(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&gi(e,u):typeof u=="number"&&gi(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mi.hasOwnProperty(s)?u!=null&&s==="onScroll"&&q("scroll",e):u!=null&&lu(e,s,u,a))}switch(n){case"input":Qi(e),Dc(e,r,!1);break;case"textarea":Qi(e),Nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?mr(e,!!r.multiple,s,!1):r.defaultValue!=null&&mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Jh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Dn(Ei.current),Dn(Pt.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(s=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Re(t),null;case 13:if(J(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Ke!==null&&t.mode&1&&!(t.flags&128))yh(),Cr(),t.flags|=98560,s=!1;else if(s=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(R(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[Ct]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),s=!1}else ht!==null&&(Dl(ht),ht=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?xe===0&&(xe=3):Hu())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return Pr(),bl(e,t),e===null&&Ci(t.stateNode.containerInfo),Re(t),null;case 10:return Eu(t.type._context),Re(t),null;case 17:return Be(t.type)&&Go(),Re(t),null;case 19:if(J(re),s=t.memoizedState,s===null)return Re(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Wr(s,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Jo(e),a!==null){for(t.flags|=128,Wr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}s.tail!==null&&de()>Er&&(t.flags|=128,r=!0,Wr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Jo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ee)return Re(t),null}else 2*de()-s.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Wr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=de(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Uu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function by(e,t){switch(Cu(t),t.tag){case 1:return Be(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),J(Oe),J(De),Du(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _u(t),null;case 13:if(J(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(re),null;case 4:return Pr(),null;case 10:return Eu(t.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var ao=!1,_e=!1,Py=typeof WeakSet=="function"?WeakSet:Set,L=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function Pl(e,t,n){try{n()}catch(r){le(e,t,r)}}var Cd=!1;function Ty(e,t){if(ll=Bo,e=ih(),Su(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var g;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==s||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++c===o&&(l=a),p===s&&++d===r&&(u=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ul={focusedElem:e,selectionRange:n},Bo=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:ft(t.type,x),S);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){le(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=Cd,Cd=!1,v}function ai(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&Pl(t,n,s)}o=o.next}while(o!==r)}}function Rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function e0(e){var t=e.alternate;t!==null&&(e.alternate=null,e0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Pi],delete t[fl],delete t[ly],delete t[uy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function t0(e){return e.tag===5||e.tag===3||e.tag===4}function bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||t0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function El(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wo));else if(r!==4&&(e=e.child,e!==null))for(El(e,t,n),e=e.sibling;e!==null;)El(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var be=null,pt=!1;function Wt(e,t,n){for(n=n.child;n!==null;)n0(e,t,n),n=n.sibling}function n0(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Ss,n)}catch{}switch(n.tag){case 5:_e||lr(n,t);case 6:var r=be,o=pt;be=null,Wt(e,t,n),be=r,pt=o,be!==null&&(pt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(pt?(e=be,n=n.stateNode,e.nodeType===8?fa(e.parentNode,n):e.nodeType===1&&fa(e,n),wi(e)):fa(be,n.stateNode));break;case 4:r=be,o=pt,be=n.stateNode.containerInfo,pt=!0,Wt(e,t,n),be=r,pt=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Pl(n,t,a),o=o.next}while(o!==r)}Wt(e,t,n);break;case 1:if(!_e&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,t,l)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Wt(e,t,n),_e=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function Pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Py),t.forEach(function(r){var o=zy.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,pt=!1;break e;case 3:be=l.stateNode.containerInfo,pt=!0;break e;case 4:be=l.stateNode.containerInfo,pt=!0;break e}l=l.return}if(be===null)throw Error(R(160));n0(s,a,o),be=null,pt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){le(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)r0(t,e),t=t.sibling}function r0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),wt(e),r&4){try{ai(3,e,e.return),Rs(3,e)}catch(x){le(e,e.return,x)}try{ai(5,e,e.return)}catch(x){le(e,e.return,x)}}break;case 1:dt(t,e),wt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(dt(t,e),wt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var o=e.stateNode;try{gi(o,"")}catch(x){le(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Pp(o,s),Za(l,a);var c=Za(l,s);for(a=0;a<u.length;a+=2){var d=u[a],f=u[a+1];d==="style"?Mp(o,f):d==="dangerouslySetInnerHTML"?Ap(o,f):d==="children"?gi(o,f):lu(o,d,f,c)}switch(l){case"input":Ka(o,s);break;case"textarea":Tp(o,s);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?mr(o,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?mr(o,!!s.multiple,s.defaultValue,!0):mr(o,!!s.multiple,s.multiple?[]:"",!1))}o[Pi]=s}catch(x){le(e,e.return,x)}}break;case 6:if(dt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(x){le(e,e.return,x)}}break;case 3:if(dt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(x){le(e,e.return,x)}break;case 4:dt(t,e),wt(e);break;case 13:dt(t,e),wt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Ou=de())),r&4&&Pd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(c=_e)||d,dt(t,e),_e=c):dt(t,e),wt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(p=L,g=p.child,p.tag){case 0:case 11:case 14:case 15:ai(4,p,p.return);break;case 1:lr(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){le(r,n,x)}}break;case 5:lr(p,p.return);break;case 22:if(p.memoizedState!==null){Ed(f);continue}}g!==null?(g.return=p,L=g):Ed(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Rp("display",a))}catch(x){le(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){le(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dt(t,e),wt(e),r&4&&Pd(e);break;case 21:break;default:dt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(t0(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(gi(o,""),r.flags&=-33);var s=bd(e);Al(e,s,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=bd(e);El(e,l,a);break;default:throw Error(R(161))}}catch(u){le(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ey(e,t,n){L=e,i0(e)}function i0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,s=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ao;if(!a){var l=o.alternate,u=l!==null&&l.memoizedState!==null||_e;l=ao;var c=_e;if(ao=a,(_e=u)&&!c)for(L=o;L!==null;)a=L,u=a.child,a.tag===22&&a.memoizedState!==null?Ad(o):u!==null?(u.return=a,L=u):Ad(o);for(;s!==null;)L=s,i0(s),s=s.sibling;L=o,ao=l,_e=c}Td(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,L=s):Td(e)}}function Td(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||Rs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&cd(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&wi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}_e||t.flags&512&&Tl(t)}catch(p){le(t,t.return,p)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Ed(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Ad(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rs(4,t)}catch(u){le(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){le(t,o,u)}}var s=t.return;try{Tl(t)}catch(u){le(t,s,u)}break;case 5:var a=t.return;try{Tl(t)}catch(u){le(t,a,u)}}}catch(u){le(t,t.return,u)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var Ay=Math.ceil,ns=Bt.ReactCurrentDispatcher,Iu=Bt.ReactCurrentOwner,st=Bt.ReactCurrentBatchConfig,O=0,Ce=null,me=null,Pe=0,Ge=0,ur=wn(0),xe=0,_i=null,On=0,Ms=0,Fu=0,li=null,Ie=null,Ou=0,Er=1/0,At=null,rs=!1,Rl=null,ln=null,lo=!1,en=null,is=0,ui=0,Ml=null,Eo=-1,Ao=0;function ze(){return O&6?de():Eo!==-1?Eo:Eo=de()}function un(e){return e.mode&1?O&2&&Pe!==0?Pe&-Pe:dy.transition!==null?(Ao===0&&(Ao=Bp()),Ao):(e=H,e!==0||(e=window.event,e=e===void 0?16:Qp(e.type)),e):1}function gt(e,t,n,r){if(50<ui)throw ui=0,Ml=null,Error(R(185));$i(e,n,r),(!(O&2)||e!==Ce)&&(e===Ce&&(!(O&2)&&(Ms|=n),xe===4&&Zt(e,Pe)),Ue(e,r),n===1&&O===0&&!(t.mode&1)&&(Er=de()+500,Ts&&Sn()))}function Ue(e,t){var n=e.callbackNode;d1(e,t);var r=Oo(e,e===Ce?Pe:0);if(r===0)n!==null&&Vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vc(n),t===1)e.tag===0?cy(Rd.bind(null,e)):hh(Rd.bind(null,e)),sy(function(){!(O&6)&&Sn()}),n=null;else{switch(Up(r)){case 1:n=pu;break;case 4:n=Fp;break;case 16:n=Fo;break;case 536870912:n=Op;break;default:n=Fo}n=f0(n,o0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function o0(e,t){if(Eo=-1,Ao=0,O&6)throw Error(R(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Oo(e,e===Ce?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=os(e,r);else{t=r;var o=O;O|=2;var s=a0();(Ce!==e||Pe!==t)&&(At=null,Er=de()+500,zn(e,t));do try{_y();break}catch(l){s0(e,l)}while(1);Tu(),ns.current=s,O=o,me!==null?t=0:(Ce=null,Pe=0,t=xe)}if(t!==0){if(t===2&&(o=rl(e),o!==0&&(r=o,t=_l(e,o))),t===1)throw n=_i,zn(e,0),Zt(e,r),Ue(e,de()),n;if(t===6)Zt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ry(o)&&(t=os(e,r),t===2&&(s=rl(e),s!==0&&(r=s,t=_l(e,s))),t===1))throw n=_i,zn(e,0),Zt(e,r),Ue(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Tn(e,Ie,At);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Ou+500-de(),10<t)){if(Oo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=dl(Tn.bind(null,e,Ie,At),t);break}Tn(e,Ie,At);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-mt(r);s=1<<a,a=t[a],a>o&&(o=a),r&=~s}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ay(r/1960))-r,10<r){e.timeoutHandle=dl(Tn.bind(null,e,Ie,At),r);break}Tn(e,Ie,At);break;case 5:Tn(e,Ie,At);break;default:throw Error(R(329))}}}return Ue(e,de()),e.callbackNode===n?o0.bind(null,e):null}function _l(e,t){var n=li;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=os(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Dl(t)),e}function Dl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Ry(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!vt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Fu,t&=~Ms,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function Rd(e){if(O&6)throw Error(R(327));wr();var t=Oo(e,0);if(!(t&1))return Ue(e,de()),null;var n=os(e,t);if(e.tag!==0&&n===2){var r=rl(e);r!==0&&(t=r,n=_l(e,r))}if(n===1)throw n=_i,zn(e,0),Zt(e,t),Ue(e,de()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Ie,At),Ue(e,de()),null}function Bu(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Er=de()+500,Ts&&Sn())}}function Bn(e){en!==null&&en.tag===0&&!(O&6)&&wr();var t=O;O|=1;var n=st.transition,r=H;try{if(st.transition=null,H=1,e)return e()}finally{H=r,st.transition=n,O=t,!(O&6)&&Sn()}}function Uu(){Ge=ur.current,J(ur)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,oy(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:Pr(),J(Oe),J(De),Du();break;case 5:_u(r);break;case 4:Pr();break;case 13:J(re);break;case 19:J(re);break;case 10:Eu(r.type._context);break;case 22:case 23:Uu()}n=n.return}if(Ce=e,me=e=cn(e.current,null),Pe=Ge=t,xe=0,_i=null,Fu=Ms=On=0,Ie=li=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=o,r.next=a}n.pending=r}_n=null}return e}function s0(e,t){do{var n=me;try{if(Tu(),bo.current=ts,es){for(var r=se.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}es=!1}if(Fn=0,we=ve=se=null,si=!1,Ai=0,Iu.current=null,n===null||n.return===null){xe=1,_i=t,me=null;break}e:{var s=e,a=n.return,l=n,u=t;if(t=Pe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=gd(a);if(g!==null){g.flags&=-257,yd(g,a,l,s,t),g.mode&1&&md(s,c,t),t=g,u=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){md(s,c,t),Hu();break e}u=Error(R(426))}}else if(ee&&l.mode&1){var S=gd(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),yd(S,a,l,s,t),bu(Tr(u,l));break e}}s=u=Tr(u,l),xe!==4&&(xe=2),li===null?li=[s]:li.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=Uh(s,u,t);ud(s,y);break e;case 1:l=u;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ln===null||!ln.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Hh(s,l,t);ud(s,w);break e}}s=s.return}while(s!==null)}u0(n)}catch(k){t=k,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function a0(){var e=ns.current;return ns.current=ts,e===null?ts:e}function Hu(){(xe===0||xe===3||xe===2)&&(xe=4),Ce===null||!(On&268435455)&&!(Ms&268435455)||Zt(Ce,Pe)}function os(e,t){var n=O;O|=2;var r=a0();(Ce!==e||Pe!==t)&&(At=null,zn(e,t));do try{My();break}catch(o){s0(e,o)}while(1);if(Tu(),O=n,ns.current=r,me!==null)throw Error(R(261));return Ce=null,Pe=0,xe}function My(){for(;me!==null;)l0(me)}function _y(){for(;me!==null&&!n1();)l0(me)}function l0(e){var t=d0(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?u0(e):me=t,Iu.current=null}function u0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=by(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,me=null;return}}else if(n=Cy(n,t,Ge),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);xe===0&&(xe=5)}function Tn(e,t,n){var r=H,o=st.transition;try{st.transition=null,H=1,Dy(e,t,n,r)}finally{st.transition=o,H=r}return null}function Dy(e,t,n,r){do wr();while(en!==null);if(O&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(f1(e,s),e===Ce&&(me=Ce=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,f0(Fo,function(){return wr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=st.transition,st.transition=null;var a=H;H=1;var l=O;O|=4,Iu.current=null,Ty(e,n),r0(n,e),Z1(ul),Bo=!!ll,ul=ll=null,e.current=n,Ey(n),r1(),O=l,H=a,st.transition=s}else e.current=n;if(lo&&(lo=!1,en=e,is=o),s=e.pendingLanes,s===0&&(ln=null),s1(n.stateNode),Ue(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(rs)throw rs=!1,e=Rl,Rl=null,e;return is&1&&e.tag!==0&&wr(),s=e.pendingLanes,s&1?e===Ml?ui++:(ui=0,Ml=e):ui=0,Sn(),null}function wr(){if(en!==null){var e=Up(is),t=st.transition,n=H;try{if(st.transition=null,H=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,is=0,O&6)throw Error(R(331));var o=O;for(O|=4,L=e.current;L!==null;){var s=L,a=s.child;if(L.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:ai(8,d,s)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var p=d.sibling,g=d.return;if(e0(d),d===c){L=null;break}if(p!==null){p.return=g,L=p;break}L=g}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}L=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,L=a;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ai(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,L=y;break e}L=s.return}}var h=e.current;for(L=h;L!==null;){a=L;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,L=m;else e:for(a=h;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Rs(9,l)}}catch(k){le(l,l.return,k)}if(l===a){L=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,L=w;break e}L=l.return}}if(O=o,Sn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Ss,e)}catch{}r=!0}return r}finally{H=n,st.transition=t}}return!1}function Md(e,t,n){t=Tr(n,t),t=Uh(e,t,1),e=an(e,t,1),t=ze(),e!==null&&($i(e,1,t),Ue(e,t))}function le(e,t,n){if(e.tag===3)Md(e,e,n);else for(;t!==null;){if(t.tag===3){Md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=Tr(n,e),e=Hh(t,e,1),t=an(t,e,1),e=ze(),t!==null&&($i(t,1,e),Ue(t,e));break}}t=t.return}}function Ly(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Pe&n)===n&&(xe===4||xe===3&&(Pe&130023424)===Pe&&500>de()-Ou?zn(e,0):Fu|=n),Ue(e,t)}function c0(e,t){t===0&&(e.mode&1?(t=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):t=1);var n=ze();e=It(e,t),e!==null&&($i(e,t,n),Ue(e,n))}function Ny(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),c0(e,n)}function zy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),c0(e,n)}var d0;d0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,ky(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,ee&&t.flags&1048576&&mh(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;To(e,t),e=t.pendingProps;var o=kr(t,De.current);xr(t,n),o=Nu(null,t,r,e,o,n);var s=zu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(s=!0,Ko(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ru(t),o.updater=As,t.stateNode=o,o._reactInternals=t,vl(t,r,e,n),t=Sl(null,t,r,!0,s,n)):(t.tag=0,ee&&s&&ku(t),Ne(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(To(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vy(r),e=ft(r,e),o){case 0:t=wl(null,t,r,e,n);break e;case 1:t=wd(null,t,r,e,n);break e;case 11:t=vd(null,t,r,e,n);break e;case 14:t=xd(null,t,r,ft(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),wl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),wd(e,t,r,o,n);case 3:e:{if(Yh(t),e===null)throw Error(R(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Sh(e,t),Zo(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Tr(Error(R(423)),t),t=Sd(e,t,r,n,o);break e}else if(r!==o){o=Tr(Error(R(424)),t),t=Sd(e,t,r,n,o);break e}else for(Ke=sn(t.stateNode.containerInfo.firstChild),Ye=t,ee=!0,ht=null,n=xh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===o){t=Ft(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return kh(t),e===null&&ml(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,cl(r,o)?a=null:s!==null&&cl(r,s)&&(t.flags|=32),Kh(e,t),Ne(e,t,a,n),t.child;case 6:return e===null&&ml(t),null;case 13:return Qh(e,t,n);case 4:return Mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),vd(e,t,r,o,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,a=o.value,Y(Xo,r._currentValue),r._currentValue=a,s!==null)if(vt(s.value,a)){if(s.children===o.children&&!Oe.current){t=Ft(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nt(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),gl(s.return,n,t),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(R(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),gl(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ne(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,xr(t,n),o=at(o),r=r(o),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,o=ft(r,t.pendingProps),o=ft(r.type,o),xd(e,t,r,o,n);case 15:return Wh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),To(e,t),t.tag=1,Be(r)?(e=!0,Ko(t)):e=!1,xr(t,n),Bh(t,r,o),vl(t,r,o,n),Sl(null,t,r,!0,e,n);case 19:return Xh(e,t,n);case 22:return Gh(e,t,n)}throw Error(R(156,t.tag))};function f0(e,t){return Ip(e,t)}function jy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new jy(e,t,n,r)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vy(e){if(typeof e=="function")return Wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cu)return 11;if(e===du)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,o,s){var a=2;if(r=e,typeof e=="function")Wu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jn:return jn(n.children,o,s,t);case uu:a=8,o|=8;break;case Ba:return e=ot(12,n,t,o|2),e.elementType=Ba,e.lanes=s,e;case Ua:return e=ot(13,n,t,o),e.elementType=Ua,e.lanes=s,e;case Ha:return e=ot(19,n,t,o),e.elementType=Ha,e.lanes=s,e;case kp:return _s(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wp:a=10;break e;case Sp:a=9;break e;case cu:a=11;break e;case du:a=14;break e;case Yt:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=ot(a,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function jn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function _s(e,t,n,r){return e=ot(22,e,r,t),e.elementType=kp,e.lanes=n,e.stateNode={isHidden:!1},e}function wa(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $y(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gu(e,t,n,r,o,s,a,l,u){return e=new $y(e,t,n,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ot(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ru(s),e}function Iy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function p0(e){if(!e)return gn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Be(n))return ph(e,n,t)}return t}function h0(e,t,n,r,o,s,a,l,u){return e=Gu(n,r,!0,e,o,s,a,l,u),e.context=p0(null),n=e.current,r=ze(),o=un(n),s=Nt(r,o),s.callback=t??null,an(n,s,o),e.current.lanes=o,$i(e,o,r),Ue(e,r),e}function Ds(e,t,n,r){var o=t.current,s=ze(),a=un(o);return n=p0(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(o,t,a),e!==null&&(gt(e,o,a,s),Co(e,o,a)),a}function ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){_d(e,t),(e=e.alternate)&&_d(e,t)}function Fy(){return null}var m0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}Ls.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Ds(e,t,null,null)};Ls.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){Ds(null,e,null,null)}),t[$t]=null}};function Ls(e){this._internalRoot=e}Ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&Yp(e)}};function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function Oy(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var c=ss(a);s.call(c)}}var a=h0(t,r,e,0,null,!1,!1,"",Dd);return e._reactRootContainer=a,e[$t]=a.current,Ci(e.nodeType===8?e.parentNode:e),Bn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=ss(u);l.call(c)}}var u=Gu(e,0,!1,null,null,!1,!1,"",Dd);return e._reactRootContainer=u,e[$t]=u.current,Ci(e.nodeType===8?e.parentNode:e),Bn(function(){Ds(t,u,n,r)}),u}function zs(e,t,n,r,o){var s=n._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var l=o;o=function(){var u=ss(a);l.call(u)}}Ds(t,a,e,o)}else a=Oy(n,t,e,o,r);return ss(a)}Hp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(hu(t,n|1),Ue(t,de()),!(O&6)&&(Er=de()+500,Sn()))}break;case 13:Bn(function(){var r=It(e,1);if(r!==null){var o=ze();gt(r,e,1,o)}}),Ku(e,1)}};mu=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=ze();gt(t,e,134217728,n)}Ku(e,134217728)}};Wp=function(e){if(e.tag===13){var t=un(e),n=It(e,t);if(n!==null){var r=ze();gt(n,e,t,r)}Ku(e,t)}};Gp=function(){return H};Kp=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};el=function(e,t,n){switch(t){case"input":if(Ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ps(r);if(!o)throw Error(R(90));bp(r),Ka(r,o)}}}break;case"textarea":Tp(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};Lp=Bu;Np=Bn;var By={usingClientEntryPoint:!1,Events:[Fi,rr,Ps,_p,Dp,Bu]},Gr={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uy={bundleType:Gr.bundleType,version:Gr.version,rendererPackageName:Gr.rendererPackageName,rendererConfig:Gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vp(e),e===null?null:e.stateNode},findFiberByHostInstance:Gr.findFiberByHostInstance||Fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{Ss=uo.inject(Uy),bt=uo}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(R(200));return Iy(e,t,null,n)};qe.createRoot=function(e,t){if(!Qu(e))throw Error(R(299));var n=!1,r="",o=m0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gu(e,1,!1,null,null,n,!1,r,o),e[$t]=t.current,Ci(e.nodeType===8?e.parentNode:e),new Yu(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Vp(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Bn(e)};qe.hydrate=function(e,t,n){if(!Ns(t))throw Error(R(200));return zs(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",a=m0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=h0(t,null,e,1,n??null,o,!1,s,a),e[$t]=t.current,Ci(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ls(t)};qe.render=function(e,t,n){if(!Ns(t))throw Error(R(200));return zs(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Ns(e))throw Error(R(40));return e._reactRootContainer?(Bn(function(){zs(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};qe.unstable_batchedUpdates=Bu;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ns(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return zs(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function g0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g0)}catch(e){console.error(e)}}g0(),gp.exports=qe;var Hy=gp.exports,Ld=Hy;Fa.createRoot=Ld.createRoot,Fa.hydrateRoot=Ld.hydrateRoot;var ke=function(){return ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ke.apply(this,arguments)};function Ar(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,s;r<o;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Z="-ms-",ci="-moz-",U="-webkit-",y0="comm",js="rule",Xu="decl",Wy="@import",v0="@keyframes",Gy="@layer",x0=Math.abs,qu=String.fromCharCode,Ll=Object.assign;function Ky(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function w0(e){return e.trim()}function Rt(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Mo(e,t,n){return e.indexOf(t,n)}function Se(e,t){return e.charCodeAt(t)|0}function Rr(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function S0(e){return e.length}function Jr(e,t){return t.push(e),e}function Yy(e,t){return e.map(t).join("")}function Nd(e,t){return e.filter(function(n){return!Rt(n,t)})}var Vs=1,Mr=1,k0=0,ut=0,he=0,$r="";function $s(e,t,n,r,o,s,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:s,line:Vs,column:Mr,length:a,return:"",siblings:l}}function Gt(e,t){return Ll($s("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Xn(e){for(;e.root;)e=Gt(e.root,{children:[e]});Jr(e,e.siblings)}function Qy(){return he}function Xy(){return he=ut>0?Se($r,--ut):0,Mr--,he===10&&(Mr=1,Vs--),he}function yt(){return he=ut<k0?Se($r,ut++):0,Mr++,he===10&&(Mr=1,Vs++),he}function Vn(){return Se($r,ut)}function _o(){return ut}function Is(e,t){return Rr($r,e,t)}function Nl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qy(e){return Vs=Mr=1,k0=kt($r=e),ut=0,[]}function Zy(e){return $r="",e}function ka(e){return w0(Is(ut-1,zl(e===91?e+2:e===40?e+1:e)))}function Jy(e){for(;(he=Vn())&&he<33;)yt();return Nl(e)>2||Nl(he)>3?"":" "}function ev(e,t){for(;--t&&yt()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return Is(e,_o()+(t<6&&Vn()==32&&yt()==32))}function zl(e){for(;yt();)switch(he){case e:return ut;case 34:case 39:e!==34&&e!==39&&zl(he);break;case 40:e===41&&zl(e);break;case 92:yt();break}return ut}function tv(e,t){for(;yt()&&e+he!==47+10;)if(e+he===42+42&&Vn()===47)break;return"/*"+Is(t,ut-1)+"*"+qu(e===47?e:yt())}function nv(e){for(;!Nl(Vn());)yt();return Is(e,ut)}function rv(e){return Zy(Do("",null,null,null,[""],e=qy(e),0,[0],e))}function Do(e,t,n,r,o,s,a,l,u){for(var c=0,d=0,f=a,p=0,g=0,v=0,x=1,S=1,y=1,h=0,m="",w=o,k=s,b=r,C=m;S;)switch(v=h,h=yt()){case 40:if(v!=108&&Se(C,f-1)==58){Mo(C+=I(ka(h),"&","&\f"),"&\f",x0(c?l[c-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:C+=ka(h);break;case 9:case 10:case 13:case 32:C+=Jy(v);break;case 92:C+=ev(_o()-1,7);continue;case 47:switch(Vn()){case 42:case 47:Jr(iv(tv(yt(),_o()),t,n,u),u);break;default:C+="/"}break;case 123*x:l[c++]=kt(C)*y;case 125*x:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:y==-1&&(C=I(C,/\f/g,"")),g>0&&kt(C)-f&&Jr(g>32?jd(C+";",r,n,f-1,u):jd(I(C," ","")+";",r,n,f-2,u),u);break;case 59:C+=";";default:if(Jr(b=zd(C,t,n,c,d,o,l,m,w=[],k=[],f,s),s),h===123)if(d===0)Do(C,t,b,b,w,s,f,l,k);else switch(p===99&&Se(C,3)===110?100:p){case 100:case 108:case 109:case 115:Do(e,b,b,r&&Jr(zd(e,b,b,0,0,o,l,m,o,w=[],f,k),k),o,k,f,l,r?w:k);break;default:Do(C,b,b,b,[""],k,0,l,k)}}c=d=g=0,x=y=1,m=C="",f=a;break;case 58:f=1+kt(C),g=v;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Xy()==125)continue}switch(C+=qu(h),h*x){case 38:y=d>0?1:(C+="\f",-1);break;case 44:l[c++]=(kt(C)-1)*y,y=1;break;case 64:Vn()===45&&(C+=ka(yt())),p=Vn(),d=f=kt(m=C+=nv(_o())),h++;break;case 45:v===45&&kt(C)==2&&(x=0)}}return s}function zd(e,t,n,r,o,s,a,l,u,c,d,f){for(var p=o-1,g=o===0?s:[""],v=S0(g),x=0,S=0,y=0;x<r;++x)for(var h=0,m=Rr(e,p+1,p=x0(S=a[x])),w=e;h<v;++h)(w=w0(S>0?g[h]+" "+m:I(m,/&\f/g,g[h])))&&(u[y++]=w);return $s(e,t,n,o===0?js:l,u,c,d,f)}function iv(e,t,n,r){return $s(e,t,n,y0,qu(Qy()),Rr(e,2,-2),0,r)}function jd(e,t,n,r,o){return $s(e,t,n,Xu,Rr(e,0,r),Rr(e,r+1,-1),r,o)}function C0(e,t,n){switch(Ky(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return ci+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+ci+e+Z+e+e;case 5936:switch(Se(e,t+11)){case 114:return U+e+Z+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Z+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Z+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Z+e+e;case 6165:return U+e+Z+"flex-"+e+e;case 5187:return U+e+I(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return U+e+Z+"flex-item-"+I(e,/flex-|-self/g,"")+(Rt(e,/flex-|baseline/)?"":Z+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return U+e+Z+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Z+I(e,"shrink","negative")+e;case 5292:return U+e+Z+I(e,"basis","preferred-size")+e;case 6060:return U+"box-"+I(e,"-grow","")+U+e+Z+I(e,"grow","positive")+e;case 4554:return U+I(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!Rt(e,/flex-|baseline/))return Z+"grid-column-align"+Rr(e,t)+e;break;case 2592:case 3360:return Z+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Rt(r.props,/grid-\w+-end/)})?~Mo(e+(n=n[t].value),"span",0)?e:Z+I(e,"-start","")+e+Z+"grid-row-span:"+(~Mo(n,"span",0)?Rt(n,/\d+/):+Rt(n,/\d+/)-+Rt(e,/\d+/))+";":Z+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rt(r.props,/grid-\w+-start/)})?e:Z+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+ci+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mo(e,"stretch",0)?C0(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,s,a,l,u,c){return Z+o+":"+s+c+(a?Z+o+"-span:"+(l?u:+u-+s)+c:"")+e});case 4949:if(Se(e,t+6)===121)return I(e,":",":"+U)+e;break;case 6444:switch(Se(e,Se(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(Se(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Z+"$2box$3")+e;case 100:return I(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function as(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ov(e,t,n,r){switch(e.type){case Gy:if(e.children.length)break;case Wy:case Xu:return e.return=e.return||e.value;case y0:return"";case v0:return e.return=e.value+"{"+as(e.children,r)+"}";case js:if(!kt(e.value=e.props.join(",")))return""}return kt(n=as(e.children,r))?e.return=e.value+"{"+n+"}":""}function sv(e){var t=S0(e);return function(n,r,o,s){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,s)||"";return a}}function av(e){return function(t){t.root||(t=t.return)&&e(t)}}function lv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Xu:e.return=C0(e.value,e.length,n);return;case v0:return as([Gt(e,{value:I(e.value,"@","@"+U)})],r);case js:if(e.length)return Yy(n=e.props,function(o){switch(Rt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xn(Gt(e,{props:[I(o,/:(read-\w+)/,":"+ci+"$1")]})),Xn(Gt(e,{props:[o]})),Ll(e,{props:Nd(n,r)});break;case"::placeholder":Xn(Gt(e,{props:[I(o,/:(plac\w+)/,":"+U+"input-$1")]})),Xn(Gt(e,{props:[I(o,/:(plac\w+)/,":"+ci+"$1")]})),Xn(Gt(e,{props:[I(o,/:(plac\w+)/,Z+"input-$1")]})),Xn(Gt(e,{props:[o]})),Ll(e,{props:Nd(n,r)});break}return""})}}var uv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",b0="active",P0="data-styled-version",Fs="6.1.15",Zu=`/*!sc*/
`,ls=typeof window<"u"&&"HTMLElement"in window,cv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),dv={},Os=Object.freeze([]),Dr=Object.freeze({});function T0(e,t,n){return n===void 0&&(n=Dr),e.theme!==n.theme&&e.theme||t||n.theme}var E0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pv=/(^-|-$)/g;function Vd(e){return e.replace(fv,"-").replace(pv,"")}var hv=/(a)(d)/gi,co=52,$d=function(e){return String.fromCharCode(e+(e>25?39:97))};function jl(e){var t,n="";for(t=Math.abs(e);t>co;t=t/co|0)n=$d(t%co)+n;return($d(t%co)+n).replace(hv,"$1-$2")}var Ca,A0=5381,cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},R0=function(e){return cr(A0,e)};function Ju(e){return jl(R0(e)>>>0)}function mv(e){return e.displayName||e.name||"Component"}function ba(e){return typeof e=="string"&&!0}var M0=typeof Symbol=="function"&&Symbol.for,_0=M0?Symbol.for("react.memo"):60115,gv=M0?Symbol.for("react.forward_ref"):60112,yv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},D0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xv=((Ca={})[gv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ca[_0]=D0,Ca);function Id(e){return("type"in(t=e)&&t.type.$$typeof)===_0?D0:"$$typeof"in e?xv[e.$$typeof]:yv;var t}var wv=Object.defineProperty,Sv=Object.getOwnPropertyNames,Fd=Object.getOwnPropertySymbols,kv=Object.getOwnPropertyDescriptor,Cv=Object.getPrototypeOf,Od=Object.prototype;function L0(e,t,n){if(typeof t!="string"){if(Od){var r=Cv(t);r&&r!==Od&&L0(e,r,n)}var o=Sv(t);Fd&&(o=o.concat(Fd(t)));for(var s=Id(e),a=Id(t),l=0;l<o.length;++l){var u=o[l];if(!(u in vv||n&&n[u]||a&&u in a||s&&u in s)){var c=kv(t,u);try{wv(e,u,c)}catch{}}}}return e}function Un(e){return typeof e=="function"}function ec(e){return typeof e=="object"&&"styledComponentId"in e}function Ln(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function us(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Di(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Vl(e,t,n){if(n===void 0&&(n=!1),!n&&!Di(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Vl(e[r],t[r]);else if(Di(t))for(var r in t)e[r]=Vl(e[r],t[r]);return e}function tc(e,t){Object.defineProperty(e,"toString",{value:t})}function Hn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,s=o;t>=s;)if((s<<=1)<0)throw Hn(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var s=r;s<o;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r,a=o;a<s;a++)n+="".concat(this.tag.getRule(a)).concat(Zu);return n},e}(),Lo=new Map,cs=new Map,No=1,fo=function(e){if(Lo.has(e))return Lo.get(e);for(;cs.has(No);)No++;var t=No++;return Lo.set(e,t),cs.set(t,e),t},Pv=function(e,t){No=t+1,Lo.set(e,t),cs.set(t,e)},Tv="style[".concat(_r,"][").concat(P0,'="').concat(Fs,'"]'),Ev=new RegExp("^".concat(_r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Av=function(e,t,n){for(var r,o=n.split(","),s=0,a=o.length;s<a;s++)(r=o[s])&&e.registerName(t,r)},Rv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Zu),o=[],s=0,a=r.length;s<a;s++){var l=r[s].trim();if(l){var u=l.match(Ev);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Pv(d,c),Av(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},Bd=function(e){for(var t=document.querySelectorAll(Tv),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(_r)!==b0&&(Rv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Mv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var N0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var u=Array.from(l.querySelectorAll("style[".concat(_r,"]")));return u[u.length-1]}(n),s=o!==void 0?o.nextSibling:null;r.setAttribute(_r,b0),r.setAttribute(P0,Fs);var a=Mv();return a&&r.setAttribute("nonce",a),n.insertBefore(r,s),r},_v=function(){function e(t){this.element=N0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,s=r.length;o<s;o++){var a=r[o];if(a.ownerNode===n)return a}throw Hn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Dv=function(){function e(t){this.element=N0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Lv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ud=ls,Nv={isServer:!ls,useCSSOMInjection:!cv},ds=function(){function e(t,n,r){t===void 0&&(t=Dr),n===void 0&&(n={});var o=this;this.options=ke(ke({},Nv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ls&&Ud&&(Ud=!1,Bd(this)),tc(this,function(){return function(s){for(var a=s.getTag(),l=a.length,u="",c=function(f){var p=function(y){return cs.get(y)}(f);if(p===void 0)return"continue";var g=s.names.get(p),v=a.getGroup(f);if(g===void 0||!g.size||v.length===0)return"continue";var x="".concat(_r,".g").concat(f,'[id="').concat(p,'"]'),S="";g!==void 0&&g.forEach(function(y){y.length>0&&(S+="".concat(y,","))}),u+="".concat(v).concat(x,'{content:"').concat(S,'"}').concat(Zu)},d=0;d<l;d++)c(d);return u}(o)})}return e.registerId=function(t){return fo(t)},e.prototype.rehydrate=function(){!this.server&&ls&&Bd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ke(ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Lv(o):r?new _v(o):new Dv(o)}(this.options),new bv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(fo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(fo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(fo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),zv=/&/g,jv=/^\s*\/\/.*$/gm;function z0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=z0(n.children,t)),n})}function Vv(e){var t,n,r,o=e===void 0?Dr:e,s=o.options,a=s===void 0?Dr:s,l=o.plugins,u=l===void 0?Os:l,c=function(p,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):p},d=u.slice();d.push(function(p){p.type===js&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(zv,n).replace(r,c))}),a.prefix&&d.push(lv),d.push(ov);var f=function(p,g,v,x){g===void 0&&(g=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(jv,""),y=rv(v||g?"".concat(v," ").concat(g," { ").concat(S," }"):S);a.namespace&&(y=z0(y,a.namespace));var h=[];return as(y,sv(d.concat(av(function(m){return h.push(m)})))),h};return f.hash=u.length?u.reduce(function(p,g){return g.name||Hn(15),cr(p,g.name)},A0).toString():"",f}var $v=new ds,$l=Vv(),j0=oe.createContext({shouldForwardProp:void 0,styleSheet:$v,stylis:$l});j0.Consumer;oe.createContext(void 0);function Il(){return T.useContext(j0)}var V0=function(){function e(t,n){var r=this;this.inject=function(o,s){s===void 0&&(s=$l);var a=r.name+s.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,s(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,tc(this,function(){throw Hn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$l),this.name+t.hash},e}(),Iv=function(e){return e>="A"&&e<="Z"};function Hd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Iv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $0=function(e){return e==null||e===!1||e===""},I0=function(e){var t,n,r=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!$0(s)&&(Array.isArray(s)&&s.isCss||Un(s)?r.push("".concat(Hd(o),":"),s,";"):Di(s)?r.push.apply(r,Ar(Ar(["".concat(o," {")],I0(s),!1),["}"],!1)):r.push("".concat(Hd(o),": ").concat((t=o,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in uv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function dn(e,t,n,r){if($0(e))return[];if(ec(e))return[".".concat(e.styledComponentId)];if(Un(e)){if(!Un(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return dn(o,t,n,r)}var s;return e instanceof V0?n?(e.inject(n,r),[e.getName(r)]):[e]:Di(e)?I0(e):Array.isArray(e)?Array.prototype.concat.apply(Os,e.map(function(a){return dn(a,t,n,r)})):[e.toString()]}function F0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Un(n)&&!ec(n))return!1}return!0}var Fv=R0(Fs),Ov=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&F0(t),this.componentId=n,this.baseHash=cr(Fv,n),this.baseStyle=r,ds.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Ln(o,this.staticRulesId);else{var s=us(dn(this.rules,t,n,r)),a=jl(cr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(s,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=Ln(o,a),this.staticRulesId=a}else{for(var u=cr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=us(dn(f,t,n,r));u=cr(u,p+d),c+=p}}if(c){var g=jl(u>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),o=Ln(o,g)}}return o},e}(),Li=oe.createContext(void 0);Li.Consumer;function Bv(e){var t=oe.useContext(Li),n=T.useMemo(function(){return function(r,o){if(!r)throw Hn(14);if(Un(r)){var s=r(o);return s}if(Array.isArray(r)||typeof r!="object")throw Hn(8);return o?ke(ke({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?oe.createElement(Li.Provider,{value:n},e.children):null}var Pa={};function Uv(e,t,n){var r=ec(e),o=e,s=!ba(e),a=t.attrs,l=a===void 0?Os:a,u=t.componentId,c=u===void 0?function(w,k){var b=typeof w!="string"?"sc":Vd(w);Pa[b]=(Pa[b]||0)+1;var C="".concat(b,"-").concat(Ju(Fs+b+Pa[b]));return k?"".concat(k,"-").concat(C):C}(t.displayName,t.parentComponentId):u,d=t.displayName,f=d===void 0?function(w){return ba(w)?"styled.".concat(w):"Styled(".concat(mv(w),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Vd(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(w,k){return x(w,k)&&S(w,k)}}else v=x}var y=new Ov(n,p,r?o.componentStyle:void 0);function h(w,k){return function(b,C,E){var _=b.attrs,j=b.componentStyle,W=b.defaultProps,X=b.foldedComponentIds,te=b.styledComponentId,ne=b.target,We=oe.useContext(Li),G=Il(),ge=b.shouldForwardProp||G.shouldForwardProp,A=T0(C,We,W)||Dr,M=function(Ee,ce,Je){for(var Cn,ct=ke(ke({},ce),{className:void 0,theme:Je}),Ht=0;Ht<Ee.length;Ht+=1){var et=Un(Cn=Ee[Ht])?Cn(ct):Cn;for(var Et in et)ct[Et]=Et==="className"?Ln(ct[Et],et[Et]):Et==="style"?ke(ke({},ct[Et]),et[Et]):et[Et]}return ce.className&&(ct.className=Ln(ct.className,ce.className)),ct}(_,C,A),N=M.as||ne,D={};for(var V in M)M[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&M.theme===A||(V==="forwardedAs"?D.as=M.forwardedAs:ge&&!ge(V,N)||(D[V]=M[V]));var fe=function(Ee,ce){var Je=Il(),Cn=Ee.generateAndInjectStyles(ce,Je.styleSheet,Je.stylis);return Cn}(j,M),ye=Ln(X,te);return fe&&(ye+=" "+fe),M.className&&(ye+=" "+M.className),D[ba(N)&&!E0.has(N)?"class":"className"]=ye,E&&(D.ref=E),T.createElement(N,D)}(m,w,k)}h.displayName=f;var m=oe.forwardRef(h);return m.attrs=g,m.componentStyle=y,m.displayName=f,m.shouldForwardProp=v,m.foldedComponentIds=r?Ln(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=p,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var b=[],C=1;C<arguments.length;C++)b[C-1]=arguments[C];for(var E=0,_=b;E<_.length;E++)Vl(k,_[E],!0);return k}({},o.defaultProps,w):w}}),tc(m,function(){return".".concat(m.styledComponentId)}),s&&L0(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Wd(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Gd=function(e){return Object.assign(e,{isCss:!0})};function nc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Un(e)||Di(e))return Gd(dn(Wd(Os,Ar([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?dn(r):Gd(dn(Wd(r,t)))}function Fl(e,t,n){if(n===void 0&&(n=Dr),!t)throw Hn(1,t);var r=function(o){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,n,nc.apply(void 0,Ar([o],s,!1)))};return r.attrs=function(o){return Fl(e,t,ke(ke({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Fl(e,t,ke(ke({},n),o))},r}var O0=function(e){return Fl(Uv,e)},z=O0;E0.forEach(function(e){z[e]=O0(e)});var Hv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=F0(t),ds.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var s=o(us(dn(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&ds.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Wv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=nc.apply(void 0,Ar([e],t,!1)),o="sc-global-".concat(Ju(JSON.stringify(r))),s=new Hv(r,o),a=function(u){var c=Il(),d=oe.useContext(Li),f=oe.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),oe.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,p){if(s.isStatic)s.renderStyles(u,dv,d,p);else{var g=ke(ke({},c),{theme:T0(c,f,a.defaultProps)});s.renderStyles(u,g,d,p)}}return oe.memo(a)}function B0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=us(nc.apply(void 0,Ar([e],t,!1))),o=Ju(r);return new V0(o,r)}const Gv={classical:"/assets/covers/classical_cover.jpg",rock:"/assets/covers/rock_cover.jpeg",pop:"/assets/covers/pop_cover.jpeg",electronic:"/assets/covers/electronic_cover.jpeg",jazz:"/assets/covers/jazz_cover.jpeg",ambient:"/assets/covers/ambient_cover.jpeg",soundtrack:"/assets/covers/galaxy_2.gif",hiphop:"/assets/covers/hiphop_cover.jpg"},K={chopin:"/assets/covers/chopin.jpeg",chopin_etudes:"/assets/covers/chopin_etudes.jpeg",bach:"/assets/covers/bach.jpeg",queen:"/assets/covers/rock_cover.jpg",bonJovi:"/assets/covers/bon_jovi.jpeg",rema:"/assets/covers/rema.jpg",rosalia:"/assets/covers/rosalia.jpg",eminem:"/assets/covers/eminem.jpg",liebestraume:"/assets/covers/liebestraume.jpg",rema_calm_down:"/assets/covers/rema_calm_down.jpeg",memory_reboot:"/assets/covers/memory_reboot.jpeg"},Kd={Stan:"/assets/covers/stan.jpeg"},Ta={urban_blues:"/assets/covers/urban_blues.jpeg",miss_g:"/assets/covers/miss_g.jpeg"},B={classical:"#7a1f1f",rock:"#585858",pop:"#9c27b0",electronic:"#3a1f7a",jazz:"#7a4b1f",ambient:"#2d5d2a",soundtrack:"#1f5a7a",hiphop:"#333333"},Ut=[{id:"classical-1",title:"Air on G String",artist:"Johann Sebastian Bach",album:"Orchestral Suites",genre:"classical",coverArt:K.bach,audioSrc:"/assets/musics/single_tracks/air_on_g_string.mp3",duration:180,color:B.classical},{id:"classical-3",title:"Etude Op. 10 No. 4",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:K.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_4.mp3",duration:120,color:B.classical},{id:"classical-4",title:"Etude Op. 25 No. 11",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:K.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_23.mp3",duration:260,color:B.classical},{id:"classical-5",title:"Liebestraume No. 3",artist:"Franz Liszt",album:"Piano Dreams",genre:"classical",coverArt:K.liebestraume,audioSrc:"/assets/musics/single_tracks/liebestraume_no_3.mp3",duration:295,color:B.classical},{id:"nocturne-1",title:"Nocturne Op. 9 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_1.mp3",duration:310,color:B.classical},{id:"nocturne-2",title:"Nocturne Op. 9 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_2.mp3",duration:270,color:B.classical},{id:"nocturne-3",title:"Nocturne Op. 9 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_3.mp3",duration:330,color:B.classical},{id:"nocturne-4",title:"Nocturne Op. 15 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_4.mp3",duration:305,color:B.classical},{id:"nocturne-5",title:"Nocturne Op. 15 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_5.mp3",duration:315,color:B.classical},{id:"nocturne-6",title:"Nocturne Op. 15 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_6.mp3",duration:290,color:B.classical},{id:"nocturne-7",title:"Nocturne Op. 27 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_7.mp3",duration:340,color:B.classical},{id:"nocturne-8",title:"Nocturne Op. 27 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_8.mp3",duration:320,color:B.classical},{id:"nocturne-9",title:"Nocturne Op. 32 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_9.mp3",duration:280,color:B.classical},{id:"nocturne-10",title:"Nocturne Op. 32 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_10.mp3",duration:300,color:B.classical},{id:"nocturne-11",title:"Nocturne Op. 37 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_11.mp3",duration:325,color:B.classical},{id:"nocturne-12",title:"Nocturne Op. 37 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_12.mp3",duration:310,color:B.classical},{id:"nocturne-13",title:"Nocturne Op. 48 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_13.mp3",duration:350,color:B.classical},{id:"nocturne-14",title:"Nocturne Op. 48 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_14.mp3",duration:335,color:B.classical},{id:"nocturne-15",title:"Nocturne Op. 55 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_15.mp3",duration:295,color:B.classical},{id:"nocturne-17",title:"Nocturne Op. 55 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_17.mp3",duration:330,color:B.classical},{id:"nocturne-18",title:"Nocturne Op. 62 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_18.mp3",duration:360,color:B.classical},{id:"nocturne-19",title:"Nocturne Op. 62 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_19.mp3",duration:340,color:B.classical},{id:"nocturne-20",title:"Nocturne Op. 72 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:K.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_20.mp3",duration:315,color:B.classical},{id:"rock-1",title:"Bohemian Rhapsody",artist:"Queen",album:"A Night at the Opera",genre:"rock",coverArt:Gv.rock,audioSrc:"/assets/musics/single_tracks/bohemian_rhapsody.mp3",duration:355,color:B.rock},{id:"rock-2",title:"It's My Life",artist:"Bon Jovi",album:"Crush",genre:"rock",coverArt:K.bonJovi,audioSrc:"/assets/musics/single_tracks/its_my_life.mp3",duration:224,color:B.rock},{id:"pop-1",title:"Calm Down",artist:"Rema",album:"Rave & Roses",genre:"pop",coverArt:K.rema_calm_down,audioSrc:"/assets/musics/single_tracks/calm_down.mp3",duration:234,color:B.pop},{id:"pop-2",title:"Candy",artist:"Naoko Gushima",album:"Motomami",genre:"pop",coverArt:Ta.miss_g,audioSrc:"/assets/musics/single_tracks/candy.mp3",duration:185,color:B.pop},{id:"pop-3",title:"Missing You",artist:"Naoko Gushima",album:"Love Stories",genre:"pop",coverArt:Ta.urban_blues,audioSrc:"/assets/musics/single_tracks/missing_you.mp3",duration:210,color:B.pop},{id:"electronic-2",title:"Memory Reboot",artist:"Cyber Dreams",album:"Neural Network",genre:"electronic",coverArt:K.memory_reboot,audioSrc:"/assets/musics/single_tracks/memory_reboot.mp3",duration:240,color:B.electronic},{id:"electronic-3",title:"Monochrome",artist:"Naoko Gushima",album:"Color Code",genre:"electronic",coverArt:Ta.urban_blues,audioSrc:"/assets/musics/single_tracks/monochrome.mp3",duration:218,color:B.electronic},{id:"hiphop-1",title:"Stan (Instrumental)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:Kd.Stan,audioSrc:"/assets/musics/single_tracks/stan_instrumental.mp3",duration:340,color:B.hiphop},{id:"hiphop-2",title:"Stan (MIDI Version)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:Kd.Stan,audioSrc:"/assets/musics/single_tracks/stan_midi.mp3",duration:330,color:B.hiphop}];Ut.filter(e=>e.genre==="classical");Ut.filter(e=>e.genre==="rock");Ut.filter(e=>e.genre==="pop");Ut.filter(e=>e.genre==="electronic");Ut.filter(e=>e.genre==="jazz");Ut.filter(e=>e.genre==="ambient");Ut.filter(e=>e.genre==="soundtrack");Ut.filter(e=>e.genre==="hiphop");const Kv={currentTrack:null,isPlaying:!1,volume:.7,progress:0,duration:0,isShuffling:!1,isRepeating:!1,queue:Ut,visualizerActive:!0,equalizerActive:!0,sidebarMode:"manual",isBuffering:!1,error:null,lastUserAction:Date.now(),lastSidebarInteraction:Date.now()},Yv=(e,t)=>{switch(t.type){case"SET_TRACK":return{...e,currentTrack:t.payload,isPlaying:!0,progress:0,error:null,isBuffering:!0,lastUserAction:Date.now()};case"PLAY":return{...e,isPlaying:!0,lastUserAction:Date.now()};case"PAUSE":return{...e,isPlaying:!1,lastUserAction:Date.now()};case"SET_VOLUME":return{...e,volume:t.payload,lastUserAction:Date.now()};case"SET_PROGRESS":return{...e,progress:t.payload};case"SET_DURATION":return{...e,duration:t.payload};case"TOGGLE_SHUFFLE":return{...e,isShuffling:!e.isShuffling,lastUserAction:Date.now()};case"SET_QUEUE":return{...e,queue:[...t.payload]};case"NEXT_TRACK":{if(!e.currentTrack||e.queue.length===0)return e;const r=(e.queue.findIndex(o=>o.id===e.currentTrack.id)+1)%e.queue.length;return{...e,currentTrack:e.queue[r],isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now()}}case"PREV_TRACK":{if(!e.currentTrack||e.queue.length===0)return e;if(e.progress>3)return{...e,progress:0,lastUserAction:Date.now()};const r=(e.queue.findIndex(o=>o.id===e.currentTrack.id)-1+e.queue.length)%e.queue.length;return{...e,currentTrack:e.queue[r],isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now()}}case"TOGGLE_VISUALIZER":return{...e,visualizerActive:!e.visualizerActive,lastUserAction:Date.now()};case"TOGGLE_EQUALIZER":return{...e,equalizerActive:!e.equalizerActive,lastUserAction:Date.now()};case"SET_BUFFERING":return{...e,isBuffering:t.payload};case"SET_ERROR":return{...e,error:t.payload,isBuffering:!1,isPlaying:!1};case"SET_SIDEBAR_MODE":return{...e,sidebarMode:t.payload,lastUserAction:Date.now(),lastSidebarInteraction:Date.now()};case"SIDEBAR_INTERACTION":return{...e,lastSidebarInteraction:Date.now()};case"USER_INTERACTION":return{...e,lastUserAction:Date.now()};default:return e}},U0=T.createContext(void 0);function Qv({children:e}){const[t,n]=T.useReducer(Yv,Kv),[r]=T.useState(!1);return T.useEffect(()=>{!t.currentTrack&&t.queue.length>0&&n({type:"SET_TRACK",payload:t.queue[0]})},[t.queue,t.currentTrack]),P.jsx(U0.Provider,{value:{state:t,dispatch:n,isLoadingTracks:r},children:e})}function Bi(){const e=T.useContext(U0);if(!e)throw new Error("useMusicContext must be used within a MusicProvider");return e}const H0=T.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Bs=T.createContext({}),Us=T.createContext(null),Hs=typeof document<"u",rc=Hs?T.useLayoutEffect:T.useEffect,W0=T.createContext({strict:!1}),ic=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Xv="framerAppearId",G0="data-"+ic(Xv);function qv(e,t,n,r){const{visualElement:o}=T.useContext(Bs),s=T.useContext(W0),a=T.useContext(Us),l=T.useContext(H0).reducedMotion,u=T.useRef();r=r||s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const c=u.current;T.useInsertionEffect(()=>{c&&c.update(n,a)});const d=T.useRef(!!(n[G0]&&!window.HandoffComplete));return rc(()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())}),T.useEffect(()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),c}function dr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Zv(e,t,n){return T.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):dr(n)&&(n.current=r))},[t])}function Ni(e){return typeof e=="string"||Array.isArray(e)}function Ws(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const oc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],sc=["initial",...oc];function Gs(e){return Ws(e.animate)||sc.some(t=>Ni(e[t]))}function K0(e){return!!(Gs(e)||e.variants)}function Jv(e,t){if(Gs(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ni(n)?n:void 0,animate:Ni(r)?r:void 0}}return e.inherit!==!1?t:{}}function e2(e){const{initial:t,animate:n}=Jv(e,T.useContext(Bs));return T.useMemo(()=>({initial:t,animate:n}),[Yd(t),Yd(n)])}function Yd(e){return Array.isArray(e)?e.join(" "):e}const Qd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zi={};for(const e in Qd)zi[e]={isEnabled:t=>Qd[e].some(n=>!!t[n])};function t2(e){for(const t in e)zi[t]={...zi[t],...e[t]}}const ac=T.createContext({}),Y0=T.createContext({}),n2=Symbol.for("motionComponentSymbol");function r2({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&t2(e);function s(l,u){let c;const d={...T.useContext(H0),...l,layoutId:i2(l)},{isStatic:f}=d,p=e2(l),g=r(l,f);if(!f&&Hs){p.visualElement=qv(o,g,d,t);const v=T.useContext(Y0),x=T.useContext(W0).strict;p.visualElement&&(c=p.visualElement.loadFeatures(d,x,e,v))}return T.createElement(Bs.Provider,{value:p},c&&p.visualElement?T.createElement(c,{visualElement:p.visualElement,...d}):null,n(o,l,Zv(g,p.visualElement,u),g,f,p.visualElement))}const a=T.forwardRef(s);return a[n2]=o,a}function i2({layoutId:e}){const t=T.useContext(ac).id;return t&&e!==void 0?t+"-"+e:e}function o2(e){function t(r,o={}){return r2(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const s2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lc(e){return typeof e!="string"||e.includes("-")?!1:!!(s2.indexOf(e)>-1||/[A-Z]/.test(e))}const fs={};function a2(e){Object.assign(fs,e)}const Ui=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Kn=new Set(Ui);function Q0(e,{layout:t,layoutId:n}){return Kn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!fs[e]||e==="opacity")}const He=e=>!!(e&&e.getVelocity),l2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},u2=Ui.length;function c2(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let s="";for(let a=0;a<u2;a++){const l=Ui[a];if(e[l]!==void 0){const u=l2[l]||l;s+=`${u}(${e[l]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),o?s=o(e,r?"":s):n&&r&&(s="none"),s}const X0=e=>t=>typeof t=="string"&&t.startsWith(e),q0=X0("--"),Ol=X0("var(--"),d2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,f2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,yn=(e,t,n)=>Math.min(Math.max(n,e),t),Yn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},di={...Yn,transform:e=>yn(0,1,e)},po={...Yn,default:1},fi=e=>Math.round(e*1e5)/1e5,Ks=/(-)?([\d]*\.?[\d])+/g,Z0=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,p2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Hi(e){return typeof e=="string"}const Wi=e=>({test:t=>Hi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Kt=Wi("deg"),Tt=Wi("%"),$=Wi("px"),h2=Wi("vh"),m2=Wi("vw"),Xd={...Tt,parse:e=>Tt.parse(e)/100,transform:e=>Tt.transform(e*100)},qd={...Yn,transform:Math.round},J0={borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,radius:$,borderTopLeftRadius:$,borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,size:$,top:$,right:$,bottom:$,left:$,padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,rotate:Kt,rotateX:Kt,rotateY:Kt,rotateZ:Kt,scale:po,scaleX:po,scaleY:po,scaleZ:po,skew:Kt,skewX:Kt,skewY:Kt,distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:di,originX:Xd,originY:Xd,originZ:$,zIndex:qd,fillOpacity:di,strokeOpacity:di,numOctaves:qd};function uc(e,t,n,r){const{style:o,vars:s,transform:a,transformOrigin:l}=e;let u=!1,c=!1,d=!0;for(const f in t){const p=t[f];if(q0(f)){s[f]=p;continue}const g=J0[f],v=f2(p,g);if(Kn.has(f)){if(u=!0,a[f]=v,!d)continue;p!==(g.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=v):o[f]=v}if(t.transform||(u||r?o.transform=c2(e.transform,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:g=0}=l;o.transformOrigin=`${f} ${p} ${g}`}}const cc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function em(e,t,n){for(const r in t)!He(t[r])&&!Q0(r,n)&&(e[r]=t[r])}function g2({transformTemplate:e},t,n){return T.useMemo(()=>{const r=cc();return uc(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function y2(e,t,n){const r=e.style||{},o={};return em(o,r,e),Object.assign(o,g2(e,t,n)),e.transformValues?e.transformValues(o):o}function v2(e,t,n){const r={},o=y2(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const x2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ps(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||x2.has(e)}let tm=e=>!ps(e);function w2(e){e&&(tm=t=>t.startsWith("on")?!ps(t):e(t))}try{w2(require("@emotion/is-prop-valid").default)}catch{}function S2(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(tm(o)||n===!0&&ps(o)||!t&&!ps(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function Zd(e,t,n){return typeof e=="string"?e:$.transform(t+n*e)}function k2(e,t,n){const r=Zd(t,e.x,e.width),o=Zd(n,e.y,e.height);return`${r} ${o}`}const C2={offset:"stroke-dashoffset",array:"stroke-dasharray"},b2={offset:"strokeDashoffset",array:"strokeDasharray"};function P2(e,t,n=1,r=0,o=!0){e.pathLength=1;const s=o?C2:b2;e[s.offset]=$.transform(-r);const a=$.transform(t),l=$.transform(n);e[s.array]=`${a} ${l}`}function dc(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:s,pathLength:a,pathSpacing:l=1,pathOffset:u=0,...c},d,f,p){if(uc(e,c,d,p),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:v,dimensions:x}=e;g.transform&&(x&&(v.transform=g.transform),delete g.transform),x&&(o!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=k2(x,o!==void 0?o:.5,s!==void 0?s:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),a!==void 0&&P2(g,a,l,u,!1)}const nm=()=>({...cc(),attrs:{}}),fc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function T2(e,t,n,r){const o=T.useMemo(()=>{const s=nm();return dc(s,t,{enableHardwareAcceleration:!1},fc(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};em(s,e.style,e),o.style={...s,...o.style}}return o}function E2(e=!1){return(n,r,o,{latestValues:s},a)=>{const u=(lc(n)?T2:v2)(r,s,a,n),d={...S2(r,typeof n=="string",e),...u,ref:o},{children:f}=r,p=T.useMemo(()=>He(f)?f.get():f,[f]);return T.createElement(n,{...d,children:p})}}function rm(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const im=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function om(e,t,n,r){rm(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(im.has(o)?o:ic(o),t.attrs[o])}function pc(e,t){const{style:n}=e,r={};for(const o in n)(He(n[o])||t.style&&He(t.style[o])||Q0(o,e))&&(r[o]=n[o]);return r}function sm(e,t){const n=pc(e,t);for(const r in e)if(He(e[r])||He(t[r])){const o=Ui.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function hc(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function am(e){const t=T.useRef(null);return t.current===null&&(t.current=e()),t.current}const hs=e=>Array.isArray(e),A2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),R2=e=>hs(e)?e[e.length-1]||0:e;function zo(e){const t=He(e)?e.get():e;return A2(t)?t.toValue():t}function M2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,s){const a={latestValues:_2(r,o,s,e),renderState:t()};return n&&(a.mount=l=>n(r,l,a)),a}const lm=e=>(t,n)=>{const r=T.useContext(Bs),o=T.useContext(Us),s=()=>M2(e,t,r,o);return n?s():am(s)};function _2(e,t,n,r){const o={},s=r(e,{});for(const p in s)o[p]=zo(s[p]);let{initial:a,animate:l}=e;const u=Gs(e),c=K0(e);t&&c&&!u&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?l:a;return f&&typeof f!="boolean"&&!Ws(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const v=hc(e,g);if(!v)return;const{transitionEnd:x,transition:S,...y}=v;for(const h in y){let m=y[h];if(Array.isArray(m)){const w=d?m.length-1:0;m=m[w]}m!==null&&(o[h]=m)}for(const h in x)o[h]=x[h]}),o}const ue=e=>e;class Jd{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function D2(e){let t=new Jd,n=new Jd,r=0,o=!1,s=!1;const a=new WeakSet,l={schedule:(u,c=!1,d=!1)=>{const f=d&&o,p=f?t:n;return c&&a.add(u),p.add(u)&&f&&o&&(r=t.order.length),u},cancel:u=>{n.remove(u),a.delete(u)},process:u=>{if(o){s=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let c=0;c<r;c++){const d=t.order[c];d(u),a.has(d)&&(l.schedule(d),e())}o=!1,s&&(s=!1,l.process(u))}};return l}const ho=["prepare","read","update","preRender","render","postRender"],L2=40;function N2(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},s=ho.reduce((f,p)=>(f[p]=D2(()=>n=!0),f),{}),a=f=>s[f].process(o),l=()=>{const f=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(f-o.timestamp,L2),1),o.timestamp=f,o.isProcessing=!0,ho.forEach(a),o.isProcessing=!1,n&&t&&(r=!1,e(l))},u=()=>{n=!0,r=!0,o.isProcessing||e(l)};return{schedule:ho.reduce((f,p)=>{const g=s[p];return f[p]=(v,x=!1,S=!1)=>(n||u(),g.schedule(v,x,S)),f},{}),cancel:f=>ho.forEach(p=>s[p].cancel(f)),state:o,steps:s}}const{schedule:Q,cancel:Ot,state:Me,steps:Ea}=N2(typeof requestAnimationFrame<"u"?requestAnimationFrame:ue,!0),z2={useVisualState:lm({scrapeMotionValuesFromProps:sm,createRenderState:nm,onMount:(e,t,{renderState:n,latestValues:r})=>{Q.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Q.render(()=>{dc(n,r,{enableHardwareAcceleration:!1},fc(t.tagName),e.transformTemplate),om(t,n)})}})},j2={useVisualState:lm({scrapeMotionValuesFromProps:pc,createRenderState:cc})};function V2(e,{forwardMotionProps:t=!1},n,r){return{...lc(e)?z2:j2,preloadedFeatures:n,useRender:E2(t),createVisualElement:r,Component:e}}function Lt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const um=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ys(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const $2=e=>t=>um(t)&&e(t,Ys(t));function zt(e,t,n,r){return Lt(e,t,$2(n),r)}const I2=(e,t)=>n=>t(e(n)),fn=(...e)=>e.reduce(I2);function cm(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const ef=cm("dragHorizontal"),tf=cm("dragVertical");function dm(e){let t=!1;if(e==="y")t=tf();else if(e==="x")t=ef();else{const n=ef(),r=tf();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function fm(){const e=dm(!0);return e?(e(),!1):!0}class kn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function nf(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(s,a)=>{if(s.pointerType==="touch"||fm())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t),l[r]&&Q.update(()=>l[r](s,a))};return zt(e.current,n,o,{passive:!e.getProps()[r]})}class F2 extends kn{mount(){this.unmount=fn(nf(this.node,!0),nf(this.node,!1))}unmount(){}}class O2 extends kn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=fn(Lt(this.node.current,"focus",()=>this.onFocus()),Lt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const pm=(e,t)=>t?e===t?!0:pm(e,t.parentElement):!1;function Aa(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ys(n))}class B2 extends kn{constructor(){super(...arguments),this.removeStartListeners=ue,this.removeEndListeners=ue,this.removeAccessibleListeners=ue,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=zt(window,"pointerup",(l,u)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:d,globalTapTarget:f}=this.node.getProps();Q.update(()=>{!f&&!pm(this.node.current,l.target)?d&&d(l,u):c&&c(l,u)})},{passive:!(r.onTap||r.onPointerUp)}),a=zt(window,"pointercancel",(l,u)=>this.cancelPress(l,u),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=fn(s,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const a=l=>{l.key!=="Enter"||!this.checkPressEnd()||Aa("up",(u,c)=>{const{onTap:d}=this.node.getProps();d&&Q.update(()=>d(u,c))})};this.removeEndListeners(),this.removeEndListeners=Lt(this.node.current,"keyup",a),Aa("down",(l,u)=>{this.startPress(l,u)})},n=Lt(this.node.current,"keydown",t),r=()=>{this.isPressing&&Aa("cancel",(s,a)=>this.cancelPress(s,a))},o=Lt(this.node.current,"blur",r);this.removeAccessibleListeners=fn(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Q.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!fm()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Q.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=zt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Lt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=fn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Bl=new WeakMap,Ra=new WeakMap,U2=e=>{const t=Bl.get(e.target);t&&t(e)},H2=e=>{e.forEach(U2)};function W2({root:e,...t}){const n=e||document;Ra.has(n)||Ra.set(n,{});const r=Ra.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(H2,{root:e,...t})),r[o]}function G2(e,t,n){const r=W2(t);return Bl.set(e,n),r.observe(e),()=>{Bl.delete(e),r.unobserve(e)}}const K2={some:0,all:1};class Y2 extends kn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:K2[o]},l=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(u)};return G2(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Q2(t,n))&&this.startObserver()}unmount(){}}function Q2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const X2={inView:{Feature:Y2},tap:{Feature:B2},focus:{Feature:O2},hover:{Feature:F2}};function hm(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function q2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Z2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Qs(e,t,n){const r=e.getProps();return hc(r,t,n!==void 0?n:r.custom,q2(e),Z2(e))}let J2=ue,mc=ue;const pn=e=>e*1e3,jt=e=>e/1e3,ex={current:!1},mm=e=>Array.isArray(e)&&typeof e[0]=="number";function gm(e){return!!(!e||typeof e=="string"&&ym[e]||mm(e)||Array.isArray(e)&&e.every(gm))}const ei=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ym={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ei([0,.65,.55,1]),circOut:ei([.55,0,1,.45]),backIn:ei([.31,.01,.66,-.59]),backOut:ei([.33,1.53,.69,.99])};function vm(e){if(e)return mm(e)?ei(e):Array.isArray(e)?e.map(vm):ym[e]}function tx(e,t,n,{delay:r=0,duration:o,repeat:s=0,repeatType:a="loop",ease:l,times:u}={}){const c={[t]:n};u&&(c.offset=u);const d=vm(l);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}function nx(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const xm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,rx=1e-7,ix=12;function ox(e,t,n,r,o){let s,a,l=0;do a=t+(n-t)/2,s=xm(a,r,o)-e,s>0?n=a:t=a;while(Math.abs(s)>rx&&++l<ix);return a}function Gi(e,t,n,r){if(e===t&&n===r)return ue;const o=s=>ox(s,0,1,e,n);return s=>s===0||s===1?s:xm(o(s),t,r)}const sx=Gi(.42,0,1,1),ax=Gi(0,0,.58,1),wm=Gi(.42,0,.58,1),lx=e=>Array.isArray(e)&&typeof e[0]!="number",Sm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,km=e=>t=>1-e(1-t),gc=e=>1-Math.sin(Math.acos(e)),Cm=km(gc),ux=Sm(gc),bm=Gi(.33,1.53,.69,.99),yc=km(bm),cx=Sm(yc),dx=e=>(e*=2)<1?.5*yc(e):.5*(2-Math.pow(2,-10*(e-1))),fx={linear:ue,easeIn:sx,easeInOut:wm,easeOut:ax,circIn:gc,circInOut:ux,circOut:Cm,backIn:yc,backInOut:cx,backOut:bm,anticipate:dx},rf=e=>{if(Array.isArray(e)){mc(e.length===4);const[t,n,r,o]=e;return Gi(t,n,r,o)}else if(typeof e=="string")return fx[e];return e},vc=(e,t)=>n=>!!(Hi(n)&&p2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Pm=(e,t,n)=>r=>{if(!Hi(r))return r;const[o,s,a,l]=r.match(Ks);return{[e]:parseFloat(o),[t]:parseFloat(s),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},px=e=>yn(0,255,e),Ma={...Yn,transform:e=>Math.round(px(e))},Nn={test:vc("rgb","red"),parse:Pm("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ma.transform(e)+", "+Ma.transform(t)+", "+Ma.transform(n)+", "+fi(di.transform(r))+")"};function hx(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Ul={test:vc("#"),parse:hx,transform:Nn.transform},fr={test:vc("hsl","hue"),parse:Pm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Tt.transform(fi(t))+", "+Tt.transform(fi(n))+", "+fi(di.transform(r))+")"},Le={test:e=>Nn.test(e)||Ul.test(e)||fr.test(e),parse:e=>Nn.test(e)?Nn.parse(e):fr.test(e)?fr.parse(e):Ul.parse(e),transform:e=>Hi(e)?e:e.hasOwnProperty("red")?Nn.transform(e):fr.transform(e)},ie=(e,t,n)=>-n*e+n*t+e;function _a(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function mx({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,s=0,a=0;if(!t)o=s=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,u=2*n-l;o=_a(u,l,e+1/3),s=_a(u,l,e),a=_a(u,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}const Da=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},gx=[Ul,Nn,fr],yx=e=>gx.find(t=>t.test(e));function of(e){const t=yx(e);let n=t.parse(e);return t===fr&&(n=mx(n)),n}const Tm=(e,t)=>{const n=of(e),r=of(t),o={...n};return s=>(o.red=Da(n.red,r.red,s),o.green=Da(n.green,r.green,s),o.blue=Da(n.blue,r.blue,s),o.alpha=ie(n.alpha,r.alpha,s),Nn.transform(o))};function vx(e){var t,n;return isNaN(e)&&Hi(e)&&(((t=e.match(Ks))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Z0))===null||n===void 0?void 0:n.length)||0)>0}const Em={regex:d2,countKey:"Vars",token:"${v}",parse:ue},Am={regex:Z0,countKey:"Colors",token:"${c}",parse:Le.parse},Rm={regex:Ks,countKey:"Numbers",token:"${n}",parse:Yn.parse};function La(e,{regex:t,countKey:n,token:r,parse:o}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(o)))}function ms(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&La(n,Em),La(n,Am),La(n,Rm),n}function Mm(e){return ms(e).values}function _m(e){const{values:t,numColors:n,numVars:r,tokenised:o}=ms(e),s=t.length;return a=>{let l=o;for(let u=0;u<s;u++)u<r?l=l.replace(Em.token,a[u]):u<r+n?l=l.replace(Am.token,Le.transform(a[u])):l=l.replace(Rm.token,fi(a[u]));return l}}const xx=e=>typeof e=="number"?0:e;function wx(e){const t=Mm(e);return _m(e)(t.map(xx))}const vn={test:vx,parse:Mm,createTransformer:_m,getAnimatableNone:wx},Dm=(e,t)=>n=>`${n>0?t:e}`;function Lm(e,t){return typeof e=="number"?n=>ie(e,t,n):Le.test(e)?Tm(e,t):e.startsWith("var(")?Dm(e,t):zm(e,t)}const Nm=(e,t)=>{const n=[...e],r=n.length,o=e.map((s,a)=>Lm(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=o[a](s);return n}},Sx=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Lm(e[o],t[o]));return o=>{for(const s in r)n[s]=r[s](o);return n}},zm=(e,t)=>{const n=vn.createTransformer(t),r=ms(e),o=ms(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?fn(Nm(r.values,o.values),n):Dm(e,t)},ji=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},sf=(e,t)=>n=>ie(e,t,n);function kx(e){return typeof e=="number"?sf:typeof e=="string"?Le.test(e)?Tm:zm:Array.isArray(e)?Nm:typeof e=="object"?Sx:sf}function Cx(e,t,n){const r=[],o=n||kx(e[0]),s=e.length-1;for(let a=0;a<s;a++){let l=o(e[a],e[a+1]);if(t){const u=Array.isArray(t)?t[a]||ue:t;l=fn(u,l)}r.push(l)}return r}function jm(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const s=e.length;if(mc(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Cx(t,r,o),l=a.length,u=c=>{let d=0;if(l>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const f=ji(e[d],e[d+1],c);return a[d](f)};return n?c=>u(yn(e[0],e[s-1],c)):u}function bx(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=ji(0,t,r);e.push(ie(n,1,o))}}function Px(e){const t=[0];return bx(t,e.length-1),t}function Tx(e,t){return e.map(n=>n*t)}function Ex(e,t){return e.map(()=>t||wm).splice(0,e.length-1)}function gs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=lx(r)?r.map(rf):rf(r),s={done:!1,value:t[0]},a=Tx(n&&n.length===t.length?n:Px(t),e),l=jm(a,t,{ease:Array.isArray(o)?o:Ex(t,o)});return{calculatedDuration:e,next:u=>(s.value=l(u),s.done=u>=e,s)}}function Vm(e,t){return t?e*(1e3/t):0}const Ax=5;function $m(e,t,n){const r=Math.max(t-Ax,0);return Vm(n-e(r),t-r)}const Na=.001,Rx=.01,af=10,Mx=.05,_x=1;function Dx({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,s;J2(e<=pn(af));let a=1-t;a=yn(Mx,_x,a),e=yn(Rx,af,jt(e)),a<1?(o=c=>{const d=c*a,f=d*e,p=d-n,g=Hl(c,a),v=Math.exp(-f);return Na-p/g*v},s=c=>{const f=c*a*e,p=f*n+n,g=Math.pow(a,2)*Math.pow(c,2)*e,v=Math.exp(-f),x=Hl(Math.pow(c,2),a);return(-o(c)+Na>0?-1:1)*((p-g)*v)/x}):(o=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-Na+d*f},s=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const l=5/e,u=Nx(o,s,l);if(e=pn(e),isNaN(u))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:a*2*Math.sqrt(r*c),duration:e}}}const Lx=12;function Nx(e,t,n){let r=n;for(let o=1;o<Lx;o++)r=r-e(r)/t(r);return r}function Hl(e,t){return e*Math.sqrt(1-t*t)}const zx=["duration","bounce"],jx=["stiffness","damping","mass"];function lf(e,t){return t.some(n=>e[n]!==void 0)}function Vx(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!lf(e,jx)&&lf(e,zx)){const n=Dx(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Im({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],s=e[e.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:p}=Vx({...r,velocity:-jt(r.velocity||0)}),g=f||0,v=u/(2*Math.sqrt(l*c)),x=s-o,S=jt(Math.sqrt(l/c)),y=Math.abs(x)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let h;if(v<1){const m=Hl(S,v);h=w=>{const k=Math.exp(-v*S*w);return s-k*((g+v*S*x)/m*Math.sin(m*w)+x*Math.cos(m*w))}}else if(v===1)h=m=>s-Math.exp(-S*m)*(x+(g+S*x)*m);else{const m=S*Math.sqrt(v*v-1);h=w=>{const k=Math.exp(-v*S*w),b=Math.min(m*w,300);return s-k*((g+v*S*x)*Math.sinh(b)+m*x*Math.cosh(b))/m}}return{calculatedDuration:p&&d||null,next:m=>{const w=h(m);if(p)a.done=m>=d;else{let k=g;m!==0&&(v<1?k=$m(h,m,w):k=0);const b=Math.abs(k)<=n,C=Math.abs(s-w)<=t;a.done=b&&C}return a.value=a.done?s:w,a}}}function uf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:s=500,modifyTarget:a,min:l,max:u,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},g=E=>l!==void 0&&E<l||u!==void 0&&E>u,v=E=>l===void 0?u:u===void 0||Math.abs(l-E)<Math.abs(u-E)?l:u;let x=n*t;const S=f+x,y=a===void 0?S:a(S);y!==S&&(x=y-f);const h=E=>-x*Math.exp(-E/r),m=E=>y+h(E),w=E=>{const _=h(E),j=m(E);p.done=Math.abs(_)<=c,p.value=p.done?y:j};let k,b;const C=E=>{g(p.value)&&(k=E,b=Im({keyframes:[p.value,v(p.value)],velocity:$m(m,E,p.value),damping:o,stiffness:s,restDelta:c,restSpeed:d}))};return C(0),{calculatedDuration:null,next:E=>{let _=!1;return!b&&k===void 0&&(_=!0,w(E),C(E)),k!==void 0&&E>k?b.next(E-k):(!_&&w(E),p)}}}const $x=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Q.update(t,!0),stop:()=>Ot(t),now:()=>Me.isProcessing?Me.timestamp:performance.now()}},cf=2e4;function df(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<cf;)t+=n,r=e.next(t);return t>=cf?1/0:t}const Ix={decay:uf,inertia:uf,tween:gs,keyframes:gs,spring:Im};function ys({autoplay:e=!0,delay:t=0,driver:n=$x,keyframes:r,type:o="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:l="loop",onPlay:u,onStop:c,onComplete:d,onUpdate:f,...p}){let g=1,v=!1,x,S;const y=()=>{S=new Promise(D=>{x=D})};y();let h;const m=Ix[o]||gs;let w;m!==gs&&typeof r[0]!="number"&&(w=jm([0,100],r,{clamp:!1}),r=[0,100]);const k=m({...p,keyframes:r});let b;l==="mirror"&&(b=m({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let C="idle",E=null,_=null,j=null;k.calculatedDuration===null&&s&&(k.calculatedDuration=df(k));const{calculatedDuration:W}=k;let X=1/0,te=1/0;W!==null&&(X=W+a,te=X*(s+1)-a);let ne=0;const We=D=>{if(_===null)return;g>0&&(_=Math.min(_,D)),g<0&&(_=Math.min(D-te/g,_)),E!==null?ne=E:ne=Math.round(D-_)*g;const V=ne-t*(g>=0?1:-1),fe=g>=0?V<0:V>te;ne=Math.max(V,0),C==="finished"&&E===null&&(ne=te);let ye=ne,Ee=k;if(s){const ct=Math.min(ne,te)/X;let Ht=Math.floor(ct),et=ct%1;!et&&ct>=1&&(et=1),et===1&&Ht--,Ht=Math.min(Ht,s+1),!!(Ht%2)&&(l==="reverse"?(et=1-et,a&&(et-=a/X)):l==="mirror"&&(Ee=b)),ye=yn(0,1,et)*X}const ce=fe?{done:!1,value:r[0]}:Ee.next(ye);w&&(ce.value=w(ce.value));let{done:Je}=ce;!fe&&W!==null&&(Je=g>=0?ne>=te:ne<=0);const Cn=E===null&&(C==="finished"||C==="running"&&Je);return f&&f(ce.value),Cn&&A(),ce},G=()=>{h&&h.stop(),h=void 0},ge=()=>{C="idle",G(),x(),y(),_=j=null},A=()=>{C="finished",d&&d(),G(),x()},M=()=>{if(v)return;h||(h=n(We));const D=h.now();u&&u(),E!==null?_=D-E:(!_||C==="finished")&&(_=D),C==="finished"&&y(),j=_,E=null,C="running",h.start()};e&&M();const N={then(D,V){return S.then(D,V)},get time(){return jt(ne)},set time(D){D=pn(D),ne=D,E!==null||!h||g===0?E=D:_=h.now()-D/g},get duration(){const D=k.calculatedDuration===null?df(k):k.calculatedDuration;return jt(D)},get speed(){return g},set speed(D){D===g||!h||(g=D,N.time=jt(ne))},get state(){return C},play:M,pause:()=>{C="paused",E=ne},stop:()=>{v=!0,C!=="idle"&&(C="idle",c&&c(),ge())},cancel:()=>{j!==null&&We(j),ge()},complete:()=>{C="finished"},sample:D=>(_=0,We(D))};return N}function Fx(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ox=Fx(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Bx=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),mo=10,Ux=2e4,Hx=(e,t)=>t.type==="spring"||e==="backgroundColor"||!gm(t.ease);function Wx(e,t,{onUpdate:n,onComplete:r,...o}){if(!(Ox()&&Bx.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let a=!1,l,u,c=!1;const d=()=>{u=new Promise(m=>{l=m})};d();let{keyframes:f,duration:p=300,ease:g,times:v}=o;if(Hx(t,o)){const m=ys({...o,repeat:0,delay:0});let w={done:!1,value:f[0]};const k=[];let b=0;for(;!w.done&&b<Ux;)w=m.sample(b),k.push(w.value),b+=mo;v=void 0,f=k,p=b-mo,g="linear"}const x=tx(e.owner.current,t,f,{...o,duration:p,ease:g,times:v}),S=()=>{c=!1,x.cancel()},y=()=>{c=!0,Q.update(S),l(),d()};return x.onfinish=()=>{c||(e.set(nx(f,o)),r&&r(),y())},{then(m,w){return u.then(m,w)},attachTimeline(m){return x.timeline=m,x.onfinish=null,ue},get time(){return jt(x.currentTime||0)},set time(m){x.currentTime=pn(m)},get speed(){return x.playbackRate},set speed(m){x.playbackRate=m},get duration(){return jt(p)},play:()=>{a||(x.play(),Ot(S))},pause:()=>x.pause(),stop:()=>{if(a=!0,x.playState==="idle")return;const{currentTime:m}=x;if(m){const w=ys({...o,autoplay:!1});e.setWithVelocity(w.sample(m-mo).value,w.sample(m).value,mo)}y()},complete:()=>{c||x.finish()},cancel:y}}function Gx({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:ue,pause:ue,stop:ue,then:s=>(s(),Promise.resolve()),cancel:ue,complete:ue});return t?ys({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const Kx={type:"spring",stiffness:500,damping:25,restSpeed:10},Yx=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Qx={type:"keyframes",duration:.8},Xx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qx=(e,{keyframes:t})=>t.length>2?Qx:Kn.has(e)?e.startsWith("scale")?Yx(t[1]):Kx:Xx,Wl=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(vn.test(t)||t==="0")&&!t.startsWith("url(")),Zx=new Set(["brightness","contrast","saturate","opacity"]);function Jx(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ks)||[];if(!r)return e;const o=n.replace(r,"");let s=Zx.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+o+")"}const e5=/([a-z-]*)\(.*?\)/g,Gl={...vn,getAnimatableNone:e=>{const t=e.match(e5);return t?t.map(Jx).join(" "):e}},t5={...J0,color:Le,backgroundColor:Le,outlineColor:Le,fill:Le,stroke:Le,borderColor:Le,borderTopColor:Le,borderRightColor:Le,borderBottomColor:Le,borderLeftColor:Le,filter:Gl,WebkitFilter:Gl},xc=e=>t5[e];function Fm(e,t){let n=xc(e);return n!==Gl&&(n=vn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Om=e=>/^0[^.\s]+$/.test(e);function n5(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Om(e)}function r5(e,t,n,r){const o=Wl(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const a=r.from!==void 0?r.from:e.get();let l;const u=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?a:s[c-1]),n5(s[c])&&u.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(l=s[c]);if(o&&u.length&&l)for(let c=0;c<u.length;c++){const d=u[c];s[d]=Fm(t,l)}return s}function i5({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:s,repeatType:a,repeatDelay:l,from:u,elapsed:c,...d}){return!!Object.keys(d).length}function wc(e,t){return e[t]||e.default||e}const o5={skipAnimations:!1},Sc=(e,t,n,r={})=>o=>{const s=wc(r,e)||{},a=s.delay||r.delay||0;let{elapsed:l=0}=r;l=l-pn(a);const u=r5(t,e,n,s),c=u[0],d=u[u.length-1],f=Wl(e,c),p=Wl(e,d);let g={keyframes:u,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-l,onUpdate:v=>{t.set(v),s.onUpdate&&s.onUpdate(v)},onComplete:()=>{o(),s.onComplete&&s.onComplete()}};if(i5(s)||(g={...g,...qx(e,g)}),g.duration&&(g.duration=pn(g.duration)),g.repeatDelay&&(g.repeatDelay=pn(g.repeatDelay)),!f||!p||ex.current||s.type===!1||o5.skipAnimations)return Gx(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=Wx(t,e,g);if(v)return v}return ys(g)};function vs(e){return!!(He(e)&&e.add)}const Bm=e=>/^\-?\d*\.?\d+$/.test(e);function kc(e,t){e.indexOf(t)===-1&&e.push(t)}function Cc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class bc{constructor(){this.subscriptions=[]}add(t){return kc(this.subscriptions,t),()=>Cc(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let s=0;s<o;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const s5=e=>!isNaN(parseFloat(e));class a5{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:a}=Me;this.lastUpdated!==a&&(this.timeDelta=s,this.lastUpdated=a,Q.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Q.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=s5(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new bc);const r=this.events[t].add(n);return t==="change"?()=>{r(),Q.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Vm(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Lr(e,t){return new a5(e,t)}const Um=e=>t=>t.test(e),l5={test:e=>e==="auto",parse:e=>e},Hm=[Yn,$,Tt,Kt,m2,h2,l5],Kr=e=>Hm.find(Um(e)),u5=[...Hm,Le,vn],c5=e=>u5.find(Um(e));function d5(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Lr(n))}function f5(e,t){const n=Qs(e,t);let{transitionEnd:r={},transition:o={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const a in s){const l=R2(s[a]);d5(e,a,l)}}function p5(e,t,n){var r,o;const s=Object.keys(t).filter(l=>!e.hasValue(l)),a=s.length;if(a)for(let l=0;l<a;l++){const u=s[l],c=t[u];let d=null;Array.isArray(c)&&(d=c[0]),d===null&&(d=(o=(r=n[u])!==null&&r!==void 0?r:e.readValue(u))!==null&&o!==void 0?o:t[u]),d!=null&&(typeof d=="string"&&(Bm(d)||Om(d))?d=parseFloat(d):!c5(d)&&vn.test(c)&&(d=Fm(u,c)),e.addValue(u,Lr(d,{owner:e})),n[u]===void 0&&(n[u]=d),d!==null&&e.setBaseTarget(u,d))}}function h5(e,t){return t?(t[e]||t.default||t).from:void 0}function m5(e,t,n){const r={};for(const o in e){const s=h5(o,t);if(s!==void 0)r[o]=s;else{const a=n.getValue(o);a&&(r[o]=a.get())}}return r}function g5({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function y5(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Wm(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(s=r);const c=[],d=o&&e.animationState&&e.animationState.getState()[o];for(const f in l){const p=e.getValue(f),g=l[f];if(!p||g===void 0||d&&g5(d,f))continue;const v={delay:n,elapsed:0,...wc(s||{},f)};if(window.HandoffAppearAnimations){const y=e.getProps()[G0];if(y){const h=window.HandoffAppearAnimations(y,f,p,Q);h!==null&&(v.elapsed=h,v.isHandoff=!0)}}let x=!v.isHandoff&&!y5(p,g);if(v.type==="spring"&&(p.getVelocity()||v.velocity)&&(x=!1),p.animation&&(x=!1),x)continue;p.start(Sc(f,p,g,e.shouldReduceMotion&&Kn.has(f)?{type:!1}:v));const S=p.animation;vs(u)&&(u.add(f),S.then(()=>u.remove(f))),c.push(S)}return a&&Promise.all(c).then(()=>{a&&f5(e,a)}),c}function Kl(e,t,n={}){const r=Qs(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const s=r?()=>Promise.all(Wm(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=o;return v5(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function v5(e,t,n=0,r=0,o=1,s){const a=[],l=(e.variantChildren.size-1)*r,u=o===1?(c=0)=>c*r:(c=0)=>l-c*r;return Array.from(e.variantChildren).sort(x5).forEach((c,d)=>{c.notify("AnimationStart",t),a.push(Kl(c,t,{...s,delay:n+u(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(a)}function x5(e,t){return e.sortNodePosition(t)}function w5(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(s=>Kl(e,s,n));r=Promise.all(o)}else if(typeof t=="string")r=Kl(e,t,n);else{const o=typeof t=="function"?Qs(e,t,n.custom):t;r=Promise.all(Wm(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const S5=[...oc].reverse(),k5=oc.length;function C5(e){return t=>Promise.all(t.map(({animation:n,options:r})=>w5(e,n,r)))}function b5(e){let t=C5(e);const n=T5();let r=!0;const o=(u,c)=>{const d=Qs(e,c);if(d){const{transition:f,transitionEnd:p,...g}=d;u={...u,...g,...p}}return u};function s(u){t=u(e)}function a(u,c){const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],g=new Set;let v={},x=1/0;for(let y=0;y<k5;y++){const h=S5[y],m=n[h],w=d[h]!==void 0?d[h]:f[h],k=Ni(w),b=h===c?m.isActive:null;b===!1&&(x=y);let C=w===f[h]&&w!==d[h]&&k;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),m.protectedKeys={...v},!m.isActive&&b===null||!w&&!m.prevProp||Ws(w)||typeof w=="boolean")continue;let _=P5(m.prevProp,w)||h===c&&m.isActive&&!C&&k||y>x&&k,j=!1;const W=Array.isArray(w)?w:[w];let X=W.reduce(o,{});b===!1&&(X={});const{prevResolvedValues:te={}}=m,ne={...te,...X},We=G=>{_=!0,g.has(G)&&(j=!0,g.delete(G)),m.needsAnimating[G]=!0};for(const G in ne){const ge=X[G],A=te[G];if(v.hasOwnProperty(G))continue;let M=!1;hs(ge)&&hs(A)?M=!hm(ge,A):M=ge!==A,M?ge!==void 0?We(G):g.add(G):ge!==void 0&&g.has(G)?We(G):m.protectedKeys[G]=!0}m.prevProp=w,m.prevResolvedValues=X,m.isActive&&(v={...v,...X}),r&&e.blockInitialAnimation&&(_=!1),_&&(!C||j)&&p.push(...W.map(G=>({animation:G,options:{type:h,...u}})))}if(g.size){const y={};g.forEach(h=>{const m=e.getBaseTarget(h);m!==void 0&&(y[h]=m)}),p.push({animation:y})}let S=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(p):Promise.resolve()}function l(u,c,d){var f;if(n[u].isActive===c)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(u,c)}),n[u].isActive=c;const p=a(d,u);for(const g in n)n[g].protectedKeys={};return p}return{animateChanges:a,setActive:l,setAnimateFunction:s,getState:()=>n}}function P5(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!hm(t,e):!1}function bn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function T5(){return{animate:bn(!0),whileInView:bn(),whileHover:bn(),whileTap:bn(),whileDrag:bn(),whileFocus:bn(),exit:bn()}}class E5 extends kn{constructor(t){super(t),t.animationState||(t.animationState=b5(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Ws(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let A5=0;class R5 extends kn{constructor(){super(...arguments),this.id=A5++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const s=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const M5={animation:{Feature:E5},exit:{Feature:R5}},ff=(e,t)=>Math.abs(e-t);function _5(e,t){const n=ff(e.x,t.x),r=ff(e.y,t.y);return Math.sqrt(n**2+r**2)}class Gm{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=ja(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=_5(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:v}=f,{timestamp:x}=Me;this.history.push({...v,timestamp:x});const{onStart:S,onMove:y}=this.handlers;p||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=za(p,this.transformPagePoint),Q.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=ja(f.type==="pointercancel"?this.lastMoveEventInfo:za(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,S),v&&v(f,S)},!um(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const a=Ys(t),l=za(a,this.transformPagePoint),{point:u}=l,{timestamp:c}=Me;this.history=[{...u,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,ja(l,this.history)),this.removeListeners=fn(zt(this.contextWindow,"pointermove",this.handlePointerMove),zt(this.contextWindow,"pointerup",this.handlePointerUp),zt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ot(this.updatePoint)}}function za(e,t){return t?{point:t(e.point)}:e}function pf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ja({point:e},t){return{point:e,delta:pf(e,Km(t)),offset:pf(e,D5(t)),velocity:L5(t,.1)}}function D5(e){return e[0]}function Km(e){return e[e.length-1]}function L5(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=Km(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>pn(t)));)n--;if(!r)return{x:0,y:0};const s=jt(o.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(o.x-r.x)/s,y:(o.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Xe(e){return e.max-e.min}function Yl(e,t=0,n=.01){return Math.abs(e-t)<=n}function hf(e,t,n,r=.5){e.origin=r,e.originPoint=ie(t.min,t.max,e.origin),e.scale=Xe(n)/Xe(t),(Yl(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ie(n.min,n.max,e.origin)-e.originPoint,(Yl(e.translate)||isNaN(e.translate))&&(e.translate=0)}function pi(e,t,n,r){hf(e.x,t.x,n.x,r?r.originX:void 0),hf(e.y,t.y,n.y,r?r.originY:void 0)}function mf(e,t,n){e.min=n.min+t.min,e.max=e.min+Xe(t)}function N5(e,t,n){mf(e.x,t.x,n.x),mf(e.y,t.y,n.y)}function gf(e,t,n){e.min=t.min-n.min,e.max=e.min+Xe(t)}function hi(e,t,n){gf(e.x,t.x,n.x),gf(e.y,t.y,n.y)}function z5(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ie(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ie(n,e,r.max):Math.min(e,n)),e}function yf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function j5(e,{top:t,left:n,bottom:r,right:o}){return{x:yf(e.x,n,o),y:yf(e.y,t,r)}}function vf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function V5(e,t){return{x:vf(e.x,t.x),y:vf(e.y,t.y)}}function $5(e,t){let n=.5;const r=Xe(e),o=Xe(t);return o>r?n=ji(t.min,t.max-r,e.min):r>o&&(n=ji(e.min,e.max-o,t.min)),yn(0,1,n)}function I5(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ql=.35;function F5(e=Ql){return e===!1?e=0:e===!0&&(e=Ql),{x:xf(e,"left","right"),y:xf(e,"top","bottom")}}function xf(e,t,n){return{min:wf(e,t),max:wf(e,n)}}function wf(e,t){return typeof e=="number"?e:e[t]||0}const Sf=()=>({translate:0,scale:1,origin:0,originPoint:0}),pr=()=>({x:Sf(),y:Sf()}),kf=()=>({min:0,max:0}),pe=()=>({x:kf(),y:kf()});function nt(e){return[e("x"),e("y")]}function Ym({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function O5({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function B5(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Va(e){return e===void 0||e===1}function Xl({scale:e,scaleX:t,scaleY:n}){return!Va(e)||!Va(t)||!Va(n)}function En(e){return Xl(e)||Qm(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Qm(e){return Cf(e.x)||Cf(e.y)}function Cf(e){return e&&e!=="0%"}function xs(e,t,n){const r=e-n,o=t*r;return n+o}function bf(e,t,n,r,o){return o!==void 0&&(e=xs(e,o,r)),xs(e,n,r)+t}function ql(e,t=0,n=1,r,o){e.min=bf(e.min,t,n,r,o),e.max=bf(e.max,t,n,r,o)}function Xm(e,{x:t,y:n}){ql(e.x,t.translate,t.scale,t.originPoint),ql(e.y,n.translate,n.scale,n.originPoint)}function U5(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let s,a;for(let l=0;l<o;l++){s=n[l],a=s.projectionDelta;const u=s.instance;u&&u.style&&u.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&hr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Xm(e,a)),r&&En(s.latestValues)&&hr(e,s.latestValues))}t.x=Pf(t.x),t.y=Pf(t.y)}function Pf(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Xt(e,t){e.min=e.min+t,e.max=e.max+t}function Tf(e,t,[n,r,o]){const s=t[o]!==void 0?t[o]:.5,a=ie(e.min,e.max,s);ql(e,t[n],t[r],a,t.scale)}const H5=["x","scaleX","originX"],W5=["y","scaleY","originY"];function hr(e,t){Tf(e.x,t,H5),Tf(e.y,t,W5)}function qm(e,t){return Ym(B5(e.getBoundingClientRect(),t))}function G5(e,t,n){const r=qm(e,n),{scroll:o}=t;return o&&(Xt(r.x,o.offset.x),Xt(r.y,o.offset.y)),r}const Zm=({current:e})=>e?e.ownerDocument.defaultView:null,K5=new WeakMap;class Y5{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ys(d,"page").point)},s=(d,f)=>{const{drag:p,dragPropagation:g,onDragStart:v}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=dm(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nt(S=>{let y=this.getAxisMotionValue(S).get()||0;if(Tt.test(y)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[S];m&&(y=Xe(m)*(parseFloat(y)/100))}}this.originPoint[S]=y}),v&&Q.update(()=>v(d,f),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:v,onDrag:x}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:S}=f;if(g&&this.currentDirection===null){this.currentDirection=Q5(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),x&&x(d,f)},l=(d,f)=>this.stop(d,f),u=()=>nt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Gm(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Zm(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:s}=this.getProps();s&&Q.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!go(t,o,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=z5(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&dr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=j5(o.layoutBox,n):this.constraints=!1,this.elastic=F5(r),s!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&nt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=I5(o.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!dr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const s=G5(r,o.root,this.visualElement.getTransformPagePoint());let a=V5(o.layout.layoutBox,s);if(n){const l=n(O5(a));this.hasMutatedConstraints=!!l,l&&(a=Ym(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),u=this.constraints||{},c=nt(d=>{if(!go(d,n,this.currentDirection))return;let f=u&&u[d]||{};a&&(f={min:0,max:0});const p=o?200:1e6,g=o?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,v)});return Promise.all(c).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Sc(t,r,0,n))}stopAnimation(){nt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){nt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){nt(n=>{const{drag:r}=this.getProps();if(!go(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,s=this.getAxisMotionValue(n);if(o&&o.layout){const{min:a,max:l}=o.layout.layoutBox[n];s.set(t[n]-ie(a,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!dr(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};nt(a=>{const l=this.getAxisMotionValue(a);if(l){const u=l.get();o[a]=$5({min:u,max:u},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),nt(a=>{if(!go(a,t,null))return;const l=this.getAxisMotionValue(a),{min:u,max:c}=this.constraints[a];l.set(ie(u,c,o[a]))})}addListeners(){if(!this.visualElement.current)return;K5.set(this.visualElement,this);const t=this.visualElement.current,n=zt(t,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();dr(u)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,s=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const a=Lt(window,"resize",()=>this.scalePositionWithinConstraints()),l=o.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(nt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:s=!1,dragElastic:a=Ql,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:s,dragElastic:a,dragMomentum:l}}}function go(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Q5(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class X5 extends kn{constructor(t){super(t),this.removeGroupControls=ue,this.removeListeners=ue,this.controls=new Y5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ue}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ef=e=>(t,n)=>{e&&Q.update(()=>e(t,n))};class q5 extends kn{constructor(){super(...arguments),this.removePointerDownListener=ue}onPointerDown(t){this.session=new Gm(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zm(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Ef(t),onStart:Ef(n),onMove:r,onEnd:(s,a)=>{delete this.session,o&&Q.update(()=>o(s,a))}}}mount(){this.removePointerDownListener=zt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Z5(){const e=T.useContext(Us);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=T.useId();return T.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const jo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Af(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Yr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if($.test(e))e=parseFloat(e);else return e;const n=Af(e,t.target.x),r=Af(e,t.target.y);return`${n}% ${r}%`}},J5={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=vn.parse(e);if(o.length>5)return r;const s=vn.createTransformer(e),a=typeof o[0]!="number"?1:0,l=n.x.scale*t.x,u=n.y.scale*t.y;o[0+a]/=l,o[1+a]/=u;const c=ie(l,u,.5);return typeof o[2+a]=="number"&&(o[2+a]/=c),typeof o[3+a]=="number"&&(o[3+a]/=c),s(o)}};class ew extends oe.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:s}=t;a2(tw),s&&(n.group&&n.group.add(s),r&&r.register&&o&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),jo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,o||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||Q.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Jm(e){const[t,n]=Z5(),r=T.useContext(ac);return oe.createElement(ew,{...e,layoutGroup:r,switchLayoutGroup:T.useContext(Y0),isPresent:t,safeToRemove:n})}const tw={borderRadius:{...Yr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Yr,borderTopRightRadius:Yr,borderBottomLeftRadius:Yr,borderBottomRightRadius:Yr,boxShadow:J5},eg=["TopLeft","TopRight","BottomLeft","BottomRight"],nw=eg.length,Rf=e=>typeof e=="string"?parseFloat(e):e,Mf=e=>typeof e=="number"||$.test(e);function rw(e,t,n,r,o,s){o?(e.opacity=ie(0,n.opacity!==void 0?n.opacity:1,iw(r)),e.opacityExit=ie(t.opacity!==void 0?t.opacity:1,0,ow(r))):s&&(e.opacity=ie(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<nw;a++){const l=`border${eg[a]}Radius`;let u=_f(t,l),c=_f(n,l);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||Mf(u)===Mf(c)?(e[l]=Math.max(ie(Rf(u),Rf(c),r),0),(Tt.test(c)||Tt.test(u))&&(e[l]+="%")):e[l]=c}(t.rotate||n.rotate)&&(e.rotate=ie(t.rotate||0,n.rotate||0,r))}function _f(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const iw=tg(0,.5,Cm),ow=tg(.5,.95,ue);function tg(e,t,n){return r=>r<e?0:r>t?1:n(ji(e,t,r))}function Df(e,t){e.min=t.min,e.max=t.max}function tt(e,t){Df(e.x,t.x),Df(e.y,t.y)}function Lf(e,t,n,r,o){return e-=t,e=xs(e,1/n,r),o!==void 0&&(e=xs(e,1/o,r)),e}function sw(e,t=0,n=1,r=.5,o,s=e,a=e){if(Tt.test(t)&&(t=parseFloat(t),t=ie(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=ie(s.min,s.max,r);e===s&&(l-=t),e.min=Lf(e.min,t,n,l,o),e.max=Lf(e.max,t,n,l,o)}function Nf(e,t,[n,r,o],s,a){sw(e,t[n],t[r],t[o],t.scale,s,a)}const aw=["x","scaleX","originX"],lw=["y","scaleY","originY"];function zf(e,t,n,r){Nf(e.x,t,aw,n?n.x:void 0,r?r.x:void 0),Nf(e.y,t,lw,n?n.y:void 0,r?r.y:void 0)}function jf(e){return e.translate===0&&e.scale===1}function ng(e){return jf(e.x)&&jf(e.y)}function uw(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function rg(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Vf(e){return Xe(e.x)/Xe(e.y)}class cw{constructor(){this.members=[]}add(t){kc(this.members,t),t.scheduleRender()}remove(t){if(Cc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const s=this.members[o];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $f(e,t,n){let r="";const o=e.x.translate/t.x,s=e.y.translate/t.y;if((o||s)&&(r=`translate3d(${o}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:u,rotateX:c,rotateY:d}=n;u&&(r+=`rotate(${u}deg) `),c&&(r+=`rotateX(${c}deg) `),d&&(r+=`rotateY(${d}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const dw=(e,t)=>e.depth-t.depth;class fw{constructor(){this.children=[],this.isDirty=!1}add(t){kc(this.children,t),this.isDirty=!0}remove(t){Cc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(dw),this.isDirty=!1,this.children.forEach(t)}}function pw(e,t){const n=performance.now(),r=({timestamp:o})=>{const s=o-n;s>=t&&(Ot(r),e(s-t))};return Q.read(r,!0),()=>Ot(r)}function hw(e){window.MotionDebug&&window.MotionDebug.record(e)}function mw(e){return e instanceof SVGElement&&e.tagName!=="svg"}function gw(e,t,n){const r=He(e)?e:Lr(e);return r.start(Sc("",r,t,n)),r.animation}const If=["","X","Y","Z"],yw={visibility:"hidden"},Ff=1e3;let vw=0;const An={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function ig({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(a={},l=t==null?void 0:t()){this.id=vw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,An.totalNodes=An.resolvedTargetDeltas=An.recalculatedProjection=0,this.nodes.forEach(Sw),this.nodes.forEach(Tw),this.nodes.forEach(Ew),this.nodes.forEach(kw),hw(An)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new fw)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new bc),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const u=this.eventHandlers.get(a);u&&u.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=mw(a),this.instance=a;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=pw(p,250),jo.hasAnimatedSinceResize&&(jo.hasAnimatedSinceResize=!1,this.nodes.forEach(Bf))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||Dw,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=d.getProps(),h=!this.targetLayout||!rg(this.targetLayout,v)||g,m=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const w={...wc(x,"layout"),onPlay:S,onComplete:y};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else p||Bf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ot(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Aw),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:u}=this.options;if(l===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Of);return}this.isUpdating||this.nodes.forEach(bw),this.isUpdating=!1,this.nodes.forEach(Pw),this.nodes.forEach(xw),this.nodes.forEach(ww),this.clearAllSnapshots();const l=performance.now();Me.delta=yn(0,1e3/60,l-Me.timestamp),Me.timestamp=l,Me.isProcessing=!0,Ea.update.process(Me),Ea.preRender.process(Me),Ea.render.process(Me),Me.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Cw),this.sharedNodes.forEach(Rw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Q.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Q.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const a=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!ng(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;a&&(l||En(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let u=this.removeElementScroll(l);return a&&(u=this.removeTransform(u)),Lw(u),{animationId:this.root.animationId,measuredBox:l,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return pe();const l=a.measureViewportBox(),{scroll:u}=this.root;return u&&(Xt(l.x,u.offset.x),Xt(l.y,u.offset.y)),l}removeElementScroll(a){const l=pe();tt(l,a);for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;if(c!==this.root&&d&&f.layoutScroll){if(d.isRoot){tt(l,a);const{scroll:p}=this.root;p&&(Xt(l.x,-p.offset.x),Xt(l.y,-p.offset.y))}Xt(l.x,d.offset.x),Xt(l.y,d.offset.y)}}return l}applyTransform(a,l=!1){const u=pe();tt(u,a);for(let c=0;c<this.path.length;c++){const d=this.path[c];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&hr(u,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),En(d.latestValues)&&hr(u,d.latestValues)}return En(this.latestValues)&&hr(u,this.latestValues),u}removeTransform(a){const l=pe();tt(l,a);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!En(c.latestValues))continue;Xl(c.latestValues)&&c.updateSnapshot();const d=pe(),f=c.measurePageBox();tt(d,f),zf(l,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return En(this.latestValues)&&zf(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Me.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var l;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==u;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Me.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),hi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=pe(),this.targetWithTransforms=pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),N5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):tt(this.target,this.layout.layoutBox),Xm(this.target,this.targetDelta)):tt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),hi(this.relativeTargetOrigin,this.target,g.target),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}An.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Xl(this.parent.latestValues)||Qm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const l=this.getLead(),u=!!this.resumingFrom||this!==l;let c=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(c=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Me.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;tt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;U5(this.layoutCorrected,this.treeScale,this.path,u),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:v}=l;if(!v){this.projectionTransform&&(this.projectionDelta=pr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=pr(),this.projectionDeltaWithTransform=pr());const x=this.projectionTransform;pi(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=$f(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),An.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,l=!1){const u=this.snapshot,c=u?u.latestValues:{},d={...this.latestValues},f=pr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=pe(),g=u?u.source:void 0,v=this.layout?this.layout.source:void 0,x=g!==v,S=this.getStack(),y=!S||S.members.length<=1,h=!!(x&&!y&&this.options.crossfade===!0&&!this.path.some(_w));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const k=w/1e3;Uf(f.x,a.x,k),Uf(f.y,a.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(hi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Mw(this.relativeTarget,this.relativeTargetOrigin,p,k),m&&uw(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=pe()),tt(m,this.relativeTarget)),x&&(this.animationValues=d,rw(d,c,this.latestValues,k,h,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ot(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Q.update(()=>{jo.hasAnimatedSinceResize=!0,this.currentAnimation=gw(0,Ff,{...a,onUpdate:l=>{this.mixTargetDelta(l),a.onUpdate&&a.onUpdate(l)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ff),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:u,layout:c,latestValues:d}=a;if(!(!l||!u||!c)){if(this!==a&&this.layout&&c&&og(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||pe();const f=Xe(this.layout.layoutBox.x);u.x.min=a.target.x.min,u.x.max=u.x.min+f;const p=Xe(this.layout.layoutBox.y);u.y.min=a.target.y.min,u.y.max=u.y.min+p}tt(l,u),hr(l,d),pi(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new cw),this.sharedNodes.get(a).add(l);const c=l.options.initialPromotionConfig;l.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:l}=this.options;return l?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:l}=this.options;return l?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:u}=a;if((u.rotate||u.rotateX||u.rotateY||u.rotateZ)&&(l=!0),!l)return;const c={};for(let d=0;d<If.length;d++){const f="rotate"+If[d];u[f]&&(c[f]=u[f],a.setStaticValue(f,0))}a.render();for(const d in c)a.setStaticValue(d,c[d]);a.scheduleRender()}getProjectionStyles(a){var l,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return yw;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=zo(a==null?void 0:a.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=zo(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!En(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=$f(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:g,y:v}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in fs){if(p[x]===void 0)continue;const{correct:S,applyTo:y}=fs[x],h=c.transform==="none"?p[x]:S(p[x],f);if(y){const m=y.length;for(let w=0;w<m;w++)c[y[w]]=h}else c[x]=h}return this.options.layoutId&&(c.pointerEvents=f===this?zo(a==null?void 0:a.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Of),this.root.sharedNodes.clear()}}}function xw(e){e.updateLayout()}function ww(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?nt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],g=Xe(p);p.min=r[f].min,p.max=p.min+g}):og(s,n.layoutBox,r)&&nt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],g=Xe(r[f]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const l=pr();pi(l,r,n.layoutBox);const u=pr();a?pi(u,e.applyTransform(o,!0),n.measuredBox):pi(u,r,n.layoutBox);const c=!ng(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const v=pe();hi(v,n.layoutBox,p.layoutBox);const x=pe();hi(x,r,g.layoutBox),rg(v,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:u,layoutDelta:l,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Sw(e){An.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function kw(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Cw(e){e.clearSnapshot()}function Of(e){e.clearMeasurements()}function bw(e){e.isLayoutDirty=!1}function Pw(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Bf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Tw(e){e.resolveTargetDelta()}function Ew(e){e.calcProjection()}function Aw(e){e.resetRotation()}function Rw(e){e.removeLeadSnapshot()}function Uf(e,t,n){e.translate=ie(t.translate,0,n),e.scale=ie(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Hf(e,t,n,r){e.min=ie(t.min,n.min,r),e.max=ie(t.max,n.max,r)}function Mw(e,t,n,r){Hf(e.x,t.x,n.x,r),Hf(e.y,t.y,n.y,r)}function _w(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Dw={duration:.45,ease:[.4,0,.1,1]},Wf=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Gf=Wf("applewebkit/")&&!Wf("chrome/")?Math.round:ue;function Kf(e){e.min=Gf(e.min),e.max=Gf(e.max)}function Lw(e){Kf(e.x),Kf(e.y)}function og(e,t,n){return e==="position"||e==="preserve-aspect"&&!Yl(Vf(t),Vf(n),.2)}const Nw=ig({attachResizeListener:(e,t)=>Lt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$a={current:void 0},sg=ig({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$a.current){const e=new Nw({});e.mount(window),e.setOptions({layoutScroll:!0}),$a.current=e}return $a.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),zw={pan:{Feature:q5},drag:{Feature:X5,ProjectionNode:sg,MeasureLayout:Jm}},jw=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Vw(e){const t=jw.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Zl(e,t,n=1){const[r,o]=Vw(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return Bm(a)?parseFloat(a):a}else return Ol(o)?Zl(o,t,n+1):o}function $w(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const s=o.get();if(!Ol(s))return;const a=Zl(s,r);a&&o.set(a)});for(const o in t){const s=t[o];if(!Ol(s))continue;const a=Zl(s,r);a&&(t[o]=a,n||(n={}),n[o]===void 0&&(n[o]=s))}return{target:t,transitionEnd:n}}const Iw=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),ag=e=>Iw.has(e),Fw=e=>Object.keys(e).some(ag),Yf=e=>e===Yn||e===$,Qf=(e,t)=>parseFloat(e.split(", ")[t]),Xf=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return Qf(o[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?Qf(s[1],e):0}},Ow=new Set(["x","y","z"]),Bw=Ui.filter(e=>!Ow.has(e));function Uw(e){const t=[];return Bw.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Nr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Xf(4,13),y:Xf(5,14)};Nr.translateX=Nr.x;Nr.translateY=Nr.y;const Hw=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,s=getComputedStyle(o),{display:a}=s,l={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{l[c]=Nr[c](r,s)}),t.render();const u=t.measureViewportBox();return n.forEach(c=>{const d=t.getValue(c);d&&d.jump(l[c]),e[c]=Nr[c](u,s)}),e},Ww=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(ag);let s=[],a=!1;const l=[];if(o.forEach(u=>{const c=e.getValue(u);if(!e.hasValue(u))return;let d=n[u],f=Kr(d);const p=t[u];let g;if(hs(p)){const v=p.length,x=p[0]===null?1:0;d=p[x],f=Kr(d);for(let S=x;S<v&&p[S]!==null;S++)g?mc(Kr(p[S])===g):g=Kr(p[S])}else g=Kr(p);if(f!==g)if(Yf(f)&&Yf(g)){const v=c.get();typeof v=="string"&&c.set(parseFloat(v)),typeof p=="string"?t[u]=parseFloat(p):Array.isArray(p)&&g===$&&(t[u]=p.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(d===0||p===0)?d===0?c.set(g.transform(d)):t[u]=f.transform(p):(a||(s=Uw(e),a=!0),l.push(u),r[u]=r[u]!==void 0?r[u]:t[u],c.jump(p))}),l.length){const u=l.indexOf("height")>=0?window.pageYOffset:null,c=Hw(t,e,l);return s.length&&s.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),Hs&&u!==null&&window.scrollTo({top:u}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function Gw(e,t,n,r){return Fw(t)?Ww(e,t,n,r):{target:t,transitionEnd:r}}const Kw=(e,t,n,r)=>{const o=$w(e,t,r);return t=o.target,r=o.transitionEnd,Gw(e,t,n,r)},Jl={current:null},lg={current:!1};function Yw(){if(lg.current=!0,!!Hs)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Jl.current=e.matches;e.addListener(t),t()}else Jl.current=!1}function Qw(e,t,n){const{willChange:r}=t;for(const o in t){const s=t[o],a=n[o];if(He(s))e.addValue(o,s),vs(r)&&r.add(o);else if(He(a))e.addValue(o,Lr(s,{owner:e})),vs(r)&&r.remove(o);else if(a!==s)if(e.hasValue(o)){const l=e.getValue(o);!l.hasAnimated&&l.set(s)}else{const l=e.getStaticValue(o);e.addValue(o,Lr(l!==void 0?l:s,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const qf=new WeakMap,ug=Object.keys(zi),Xw=ug.length,Zf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],qw=sc.length;class Zw{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Q.render(this.render,!1,!0);const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.isControllingVariants=Gs(n),this.isVariantNode=K0(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const p=d[f];l[f]!==void 0&&He(p)&&(p.set(l[f],!1),vs(c)&&c.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,qf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),lg.current||Yw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Jl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){qf.delete(this.current),this.projection&&this.projection.unmount(),Ot(this.notifyUpdate),Ot(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Kn.has(t),o=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Q.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,s){let a,l;for(let u=0;u<Xw;u++){const c=ug[u],{isEnabled:d,Feature:f,ProjectionNode:p,MeasureLayout:g}=zi[c];p&&(a=p),d(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),g&&(l=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:d,dragConstraints:f,layoutScroll:p,layoutRoot:g}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:!!d||f&&dr(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:g})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Zf.length;r++){const o=Zf[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const s=t["on"+o];s&&(this.propEventSubscriptions[o]=this.on(o,s))}this.prevMotionValues=Qw(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<qw;r++){const o=sc[r],s=this.props[o];(Ni(s)||s===!1)&&(n[o]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Lr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=hc(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!He(s)?s:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new bc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class cg extends Zw{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},s){let a=m5(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),a&&(a=o(a))),s){p5(this,r,a);const l=Kw(this,r,a,n);n=l.transitionEnd,r=l.target}return{transition:t,transitionEnd:n,...r}}}function Jw(e){return window.getComputedStyle(e)}class e3 extends cg{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Kn.has(n)){const r=xc(n);return r&&r.default||0}else{const r=Jw(t),o=(q0(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return qm(t,n)}build(t,n,r,o){uc(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return pc(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;He(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){rm(t,n,r,o)}}class t3 extends cg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Kn.has(n)){const r=xc(n);return r&&r.default||0}return n=im.has(n)?n:ic(n),t.getAttribute(n)}measureInstanceViewportBox(){return pe()}scrapeMotionValuesFromProps(t,n){return sm(t,n)}build(t,n,r,o){dc(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){om(t,n,r,o)}mount(t){this.isSVGTag=fc(t.tagName),super.mount(t)}}const n3=(e,t)=>lc(e)?new t3(t,{enableHardwareAcceleration:!1}):new e3(t,{enableHardwareAcceleration:!0}),r3={layout:{ProjectionNode:sg,MeasureLayout:Jm}},i3={...M5,...X2,...zw,...r3},xt=o2((e,t)=>V2(e,t,i3,n3));function dg(){const e=T.useRef(!1);return rc(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function o3(){const e=dg(),[t,n]=T.useState(0),r=T.useCallback(()=>{e.current&&n(t+1)},[t]);return[T.useCallback(()=>Q.postRender(r),[r]),t]}class s3 extends T.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function a3({children:e,isPresent:t}){const n=T.useId(),r=T.useRef(null),o=T.useRef({width:0,height:0,top:0,left:0});return T.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:u}=o.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),T.createElement(s3,{isPresent:t,childRef:r,sizeRef:o},T.cloneElement(e,{ref:r}))}const Ia=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:s,mode:a})=>{const l=am(l3),u=T.useId(),c=T.useMemo(()=>({id:u,initial:t,isPresent:n,custom:o,onExitComplete:d=>{l.set(d,!0);for(const f of l.values())if(!f)return;r&&r()},register:d=>(l.set(d,!1),()=>l.delete(d))}),s?void 0:[n]);return T.useMemo(()=>{l.forEach((d,f)=>l.set(f,!1))},[n]),T.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),a==="popLayout"&&(e=T.createElement(a3,{isPresent:n},e)),T.createElement(Us.Provider,{value:c},e)};function l3(){return new Map}function u3(e){return T.useEffect(()=>()=>e(),[])}const Rn=e=>e.key||"";function c3(e,t){e.forEach(n=>{const r=Rn(n);t.set(r,n)})}function d3(e){const t=[];return T.Children.forEach(e,n=>{T.isValidElement(n)&&t.push(n)}),t}const eu=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:s=!0,mode:a="sync"})=>{const l=T.useContext(ac).forceRender||o3()[0],u=dg(),c=d3(e);let d=c;const f=T.useRef(new Map).current,p=T.useRef(d),g=T.useRef(new Map).current,v=T.useRef(!0);if(rc(()=>{v.current=!1,c3(c,g),p.current=d}),u3(()=>{v.current=!0,g.clear(),f.clear()}),v.current)return T.createElement(T.Fragment,null,d.map(h=>T.createElement(Ia,{key:Rn(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:a},h)));d=[...d];const x=p.current.map(Rn),S=c.map(Rn),y=x.length;for(let h=0;h<y;h++){const m=x[h];S.indexOf(m)===-1&&!f.has(m)&&f.set(m,void 0)}return a==="wait"&&f.size&&(d=[]),f.forEach((h,m)=>{if(S.indexOf(m)!==-1)return;const w=g.get(m);if(!w)return;const k=x.indexOf(m);let b=h;if(!b){const C=()=>{f.delete(m);const E=Array.from(g.keys()).filter(_=>!S.includes(_));if(E.forEach(_=>g.delete(_)),p.current=c.filter(_=>{const j=Rn(_);return j===m||E.includes(j)}),!f.size){if(u.current===!1)return;l(),r&&r()}};b=T.createElement(Ia,{key:Rn(w),isPresent:!1,onExitComplete:C,custom:t,presenceAffectsLayout:s,mode:a},w),f.set(m,b)}d.splice(k,0,b)}),d=d.map(h=>{const m=h.key;return f.has(m)?h:T.createElement(Ia,{key:Rn(h),isPresent:!0,presenceAffectsLayout:s,mode:a},h)}),T.createElement(T.Fragment,null,f.size?d:d.map(h=>T.cloneElement(h)))};var fg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jf=oe.createContext&&oe.createContext(fg),hn=globalThis&&globalThis.__assign||function(){return hn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},hn.apply(this,arguments)},f3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function pg(e){return e&&e.map(function(t,n){return oe.createElement(t.tag,hn({key:n},t.attr),pg(t.child))})}function $e(e){return function(t){return oe.createElement(p3,hn({attr:hn({},e.attr)},t),pg(e.child))}}function p3(e){var t=function(n){var r=e.attr,o=e.size,s=e.title,a=f3(e,["attr","size","title"]),l=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),oe.createElement("svg",hn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:hn(hn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&oe.createElement("title",null,s),e.children)};return Jf!==void 0?oe.createElement(Jf.Consumer,null,function(n){return t(n)}):t(fg)}function h3(e){return $e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"}}]})(e)}function m3(e){return $e({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function g3(e){return $e({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function y3(e){return $e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"}}]})(e)}function v3(e){return $e({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"}}]})(e)}function x3(e){return $e({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function hg(e){return $e({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}}]})(e)}function mg(e){return $e({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function w3(e){return $e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}}]})(e)}function S3(e){return $e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"}}]})(e)}function k3(e){return $e({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function C3(e){return $e({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"}}]})(e)}function b3(e){return $e({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"}}]})(e)}function P3(e){return $e({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"}}]})(e)}function T3(e){return $e({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}}]})(e)}var yo=function(e,t){return e<t?-1:e>t?1:0},ep=function(e){return e.reduce(function(t,n){return t+n},0)},E3=function(){function e(n){this.colors=n}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(n){return n},e}(),A3=function(){function e(s,a,l){return(s<<10)+(a<<5)+l}function t(s){var a=[],l=!1;function u(){a.sort(s),l=!0}return{push:function(c){a.push(c),l=!1},peek:function(c){return l||u(),c===void 0&&(c=a.length-1),a[c]},pop:function(){return l||u(),a.pop()},size:function(){return a.length},map:function(c){return a.map(c)},debug:function(){return l||u(),a}}}function n(s,a,l,u,c,d,f){var p=this;p.r1=s,p.r2=a,p.g1=l,p.g2=u,p.b1=c,p.b2=d,p.histo=f}function r(){this.vboxes=new t(function(s,a){return yo(s.vbox.count()*s.vbox.volume(),a.vbox.count()*a.vbox.volume())})}function o(s,a){if(a.count()){var l=a.r2-a.r1+1,u=a.g2-a.g1+1,c=Math.max.apply(null,[l,u,a.b2-a.b1+1]);if(a.count()==1)return[a.copy()];var d,f,p,g,v=0,x=[],S=[];if(c==l)for(d=a.r1;d<=a.r2;d++){for(g=0,f=a.g1;f<=a.g2;f++)for(p=a.b1;p<=a.b2;p++)g+=s[e(d,f,p)]||0;x[d]=v+=g}else if(c==u)for(d=a.g1;d<=a.g2;d++){for(g=0,f=a.r1;f<=a.r2;f++)for(p=a.b1;p<=a.b2;p++)g+=s[e(f,d,p)]||0;x[d]=v+=g}else for(d=a.b1;d<=a.b2;d++){for(g=0,f=a.r1;f<=a.r2;f++)for(p=a.g1;p<=a.g2;p++)g+=s[e(f,p,d)]||0;x[d]=v+=g}return x.forEach(function(y,h){S[h]=v-y}),function(y){var h,m,w,k,b,C=y+"1",E=y+"2",_=0;for(d=a[C];d<=a[E];d++)if(x[d]>v/2){for(w=a.copy(),k=a.copy(),b=(h=d-a[C])<=(m=a[E]-d)?Math.min(a[E]-1,~~(d+m/2)):Math.max(a[C],~~(d-1-h/2));!x[b];)b++;for(_=S[b];!_&&x[b-1];)_=S[--b];return w[E]=b,k[C]=w[E]+1,[w,k]}}(c==l?"r":c==u?"g":"b")}}return n.prototype={volume:function(s){var a=this;return a._volume&&!s||(a._volume=(a.r2-a.r1+1)*(a.g2-a.g1+1)*(a.b2-a.b1+1)),a._volume},count:function(s){var a=this,l=a.histo;if(!a._count_set||s){var u,c,d,f=0;for(u=a.r1;u<=a.r2;u++)for(c=a.g1;c<=a.g2;c++)for(d=a.b1;d<=a.b2;d++)f+=l[e(u,c,d)]||0;a._count=f,a._count_set=!0}return a._count},copy:function(){var s=this;return new n(s.r1,s.r2,s.g1,s.g2,s.b1,s.b2,s.histo)},avg:function(s){var a=this,l=a.histo;if(!a._avg||s){var u,c,d,f,p=0,g=0,v=0,x=0;if(a.r1===a.r2&&a.g1===a.g2&&a.b1===a.b2)a._avg=[a.r1<<3,a.g1<<3,a.b1<<3];else{for(c=a.r1;c<=a.r2;c++)for(d=a.g1;d<=a.g2;d++)for(f=a.b1;f<=a.b2;f++)p+=u=l[e(c,d,f)]||0,g+=u*(c+.5)*8,v+=u*(d+.5)*8,x+=u*(f+.5)*8;a._avg=p?[~~(g/p),~~(v/p),~~(x/p)]:[~~(8*(a.r1+a.r2+1)/2),~~(8*(a.g1+a.g2+1)/2),~~(8*(a.b1+a.b2+1)/2)]}}return a._avg},contains:function(s){var a=this,l=s[0]>>3;return gval=s[1]>>3,bval=s[2]>>3,l>=a.r1&&l<=a.r2&&gval>=a.g1&&gval<=a.g2&&bval>=a.b1&&bval<=a.b2}},r.prototype={push:function(s){this.vboxes.push({vbox:s,color:s.avg()})},palette:function(){return this.vboxes.map(function(s){return s.color})},size:function(){return this.vboxes.size()},map:function(s){for(var a=this.vboxes,l=0;l<a.size();l++)if(a.peek(l).vbox.contains(s))return a.peek(l).color;return this.nearest(s)},nearest:function(s){for(var a,l,u,c=this.vboxes,d=0;d<c.size();d++)((l=Math.sqrt(Math.pow(s[0]-c.peek(d).color[0],2)+Math.pow(s[1]-c.peek(d).color[1],2)+Math.pow(s[2]-c.peek(d).color[2],2)))<a||a===void 0)&&(a=l,u=c.peek(d).color);return u},forcebw:function(){var s=this.vboxes;s.sort(function(c,d){return yo(ep(c.color),ep(d.color))});var a=s[0].color;a[0]<5&&a[1]<5&&a[2]<5&&(s[0].color=[0,0,0]);var l=s.length-1,u=s[l].color;u[0]>251&&u[1]>251&&u[2]>251&&(s[l].color=[255,255,255])}},{quantize:function(s,a){if(!Number.isInteger(a)||a<1||a>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!s.length||a<2||a>256||!s.length||a<2||a>256)return!1;for(var l=[],u=new Set,c=0;c<s.length;c++){var d=s[c],f=d.join(",");u.has(f)||(u.add(f),l.push(d))}if(l.length<=a)return new E3(l);var p=function(h){var m,w=new Array(32768);return h.forEach(function(k){m=e(k[0]>>3,k[1]>>3,k[2]>>3),w[m]=(w[m]||0)+1}),w}(s);p.forEach(function(){});var g=function(h,m){var w,k,b,C=1e6,E=0,_=1e6,j=0,W=1e6,X=0;return h.forEach(function(te){(w=te[0]>>3)<C?C=w:w>E&&(E=w),(k=te[1]>>3)<_?_=k:k>j&&(j=k),(b=te[2]>>3)<W?W=b:b>X&&(X=b)}),new n(C,E,_,j,W,X,m)}(s,p),v=new t(function(h,m){return yo(h.count(),m.count())});function x(h,m){for(var w,k=h.size(),b=0;b<1e3;){if(k>=m||b++>1e3)return;if((w=h.pop()).count()){var C=o(p,w),E=C[0],_=C[1];if(!E)return;h.push(E),_&&(h.push(_),k++)}else h.push(w),b++}}v.push(g),x(v,.75*a);for(var S=new t(function(h,m){return yo(h.count()*h.volume(),m.count()*m.volume())});v.size();)S.push(v.pop());x(S,a);for(var y=new r;S.size();)y.push(S.pop());return y}}}().quantize,gg=function(e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=e.naturalWidth,this.height=this.canvas.height=e.naturalHeight,this.context.drawImage(e,0,0,this.width,this.height)};gg.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var qn=function(){};qn.prototype.getColor=function(e,t){return t===void 0&&(t=10),this.getPalette(e,5,t)[0]},qn.prototype.getPalette=function(e,t,n){var r=function(l){var u=l.colorCount,c=l.quality;if(u!==void 0&&Number.isInteger(u)){if(u===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");u=Math.max(u,2),u=Math.min(u,20)}else u=10;return(c===void 0||!Number.isInteger(c)||c<1)&&(c=10),{colorCount:u,quality:c}}({colorCount:t,quality:n}),o=new gg(e),s=function(l,u,c){for(var d,f,p,g,v,x=l,S=[],y=0;y<u;y+=c)f=x[0+(d=4*y)],p=x[d+1],g=x[d+2],((v=x[d+3])===void 0||v>=125)&&(f>250&&p>250&&g>250||S.push([f,p,g]));return S}(o.getImageData().data,o.width*o.height,r.quality),a=A3(s,r.colorCount);return a?a.palette():null},qn.prototype.getColorFromUrl=function(e,t,n){var r=this,o=document.createElement("img");o.addEventListener("load",function(){var s=r.getPalette(o,5,n);t(s[0],e)}),o.src=e},qn.prototype.getImageData=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){if(this.status==200){var r=new Uint8Array(this.response);i=r.length;for(var o=new Array(i),s=0;s<r.length;s++)o[s]=String.fromCharCode(r[s]);var a=o.join(""),l=window.btoa(a);t("data:image/png;base64,"+l)}},n.send()},qn.prototype.getColorAsync=function(e,t,n){var r=this;this.getImageData(e,function(o){var s=document.createElement("img");s.addEventListener("load",function(){var a=r.getPalette(s,5,n);t(a[0],this)}),s.src=o})};const R3=e=>{const[t,n]=T.useState("#388e3c");return T.useEffect(()=>{if(!e)return;const r=new Image,o=new qn;r.crossOrigin="Anonymous",r.src=e,r.onload=()=>{try{const s=o.getColor(r),a=M3(s[0],s[1],s[2]);n(a)}catch(s){console.error("Color extraction error:",s),n(tp(e))}},r.onerror=()=>{console.warn("Image failed to load:",e),n(tp(e))}},[e]),t},tp=e=>e.includes("forest")?"#2d5d2a":e.includes("electronic")?"#3a1f7a":e.includes("jazz")?"#7a4b1f":e.includes("classical")?"#7a1f1f":e.includes("rock")?"#585858":"#388e3c",M3=(e,t,n)=>"#"+[e,t,n].map(r=>{const o=r.toString(16);return o.length===1?"0"+o:o}).join(""),_3=z.div`
  width: 100%;
  max-width: 800px;
  background: ${e=>e.theme.surfaceLight};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: relative;
`,D3=z.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: ${e=>e.theme.text};
`,L3=z.div`
  display: flex;
  margin-bottom: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 10px;
`,N3=z.button`
  padding: 8px 16px;
  border-radius: 20px;
  margin-right: 10px;
  background: ${e=>e.$active?e.theme.primary:"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.$active?e.theme.buttonText:e.theme.textSecondary};
  font-size: 14px;
  font-weight: ${e=>e.$active?"bold":"normal"};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${e=>e.$active?e.theme.primary:"rgba(255, 255, 255, 0.15)"};
  }
`,z3=z.div`
  max-height: 400px;
  overflow-y: auto;
  margin: 0 -10px;
  padding: 0 10px;
`,j3=z(xt.div)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 10px;
  background: ${e=>e.$active?"rgba(255, 255, 255, 0.1)":"transparent"};
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }
`,V3=z.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 15px;
  position: relative;
  background: ${e=>e.$color||e.theme.primary};
  flex-shrink: 0;
`,$3=z.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,I3=z.div`
  flex: 1;
`,F3=z.div`
  font-weight: ${e=>e.$active?"bold":"normal"};
  color: ${e=>e.theme.text};
  font-size: 0.95rem;
`,O3=z.div`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.85rem;
  margin-top: 5px;
  display: flex;
`,B3=z.span`
  margin-right: 10px;
`,U3=z.span`
  color: ${e=>e.theme.textSecondary};
`,H3=z.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$active?e.theme.primary:"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.$active?e.theme.buttonText:e.theme.text};
  margin-left: 10px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: ${e=>e.$active?e.theme.primaryHover:e.theme.primary};
    color: ${e=>e.theme.buttonText};
  }

  svg {
    font-size: 0.9rem;
  }
`,W3=z.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${e=>e.theme.text};
  font-size: 0.95rem;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: ${e=>e.theme.primary};
    box-shadow: 0 0 0 2px ${e=>e.theme.primary}40;
  }

  &::placeholder {
    color: ${e=>e.theme.textSecondary};
    opacity: 0.7;
  }
`,G3=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?"0":""}${n}`},K3=()=>{const{state:e,dispatch:t}=Bi(),[n,r]=T.useState("all"),[o,s]=T.useState(""),a=["all",...new Set(e.queue.map(c=>c.genre))],l=e.queue.filter(c=>{const d=n==="all"||c.genre===n,f=o===""||c.title.toLowerCase().includes(o.toLowerCase())||c.artist.toLowerCase().includes(o.toLowerCase());return d&&f}),u=c=>{var d;((d=e.currentTrack)==null?void 0:d.id)===c.id?t({type:e.isPlaying?"PAUSE":"PLAY"}):(t({type:"SET_TRACK",payload:c}),setTimeout(()=>{t({type:"PLAY"})},100))};return P.jsxs(_3,{children:[P.jsx(D3,{children:"Music Explorer"}),P.jsx(W3,{type:"text",placeholder:"Search tracks, artists...",value:o,onChange:c=>s(c.target.value)}),P.jsx(L3,{children:a.map(c=>P.jsx(N3,{$active:n===c,onClick:()=>r(c),children:c.charAt(0).toUpperCase()+c.slice(1)},c))}),P.jsx(z3,{children:l.map(c=>{var d,f;return P.jsx(Y3,{track:c,isActive:((d=e.currentTrack)==null?void 0:d.id)===c.id,isPlaying:e.isPlaying&&((f=e.currentTrack)==null?void 0:f.id)===c.id,onClick:()=>u(c)},c.id)})})]})},Y3=({track:e,isActive:t,isPlaying:n,onClick:r})=>{const o=R3(e.coverArt);return P.jsxs(j3,{$active:t,onClick:r,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[P.jsx(V3,{$color:e.color||o,children:e.coverArt&&P.jsx($3,{src:e.coverArt,alt:e.title})}),P.jsxs(I3,{children:[P.jsx(F3,{$active:t,children:e.title}),P.jsxs(O3,{children:[P.jsx(B3,{children:e.artist}),P.jsx(U3,{children:G3(e.duration)})]})]}),P.jsx(H3,{$active:t,onClick:s=>{s.stopPropagation(),r()},children:n?P.jsx(hg,{}):P.jsx(mg,{})})]})},Q3=z.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`,X3=z.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,q3=()=>{const e=T.useRef(null),{state:t}=Bi(),n=T.useRef(0);return T.useEffect(()=>{if(!e.current)return;const r=e.current,o=r.getContext("2d");if(!o)return;const s=window.devicePixelRatio||1,a=r.getBoundingClientRect();r.width=a.width*s,r.height=a.height*s,o.scale(s,s);const l=()=>{var g;if(!o)return;const u=((g=t.currentTrack)==null?void 0:g.color)||"#388e3c";n.current=requestAnimationFrame(l);const c=a.width,d=a.height;o.clearRect(0,0,c,d);const f=new Array(128).fill(0).map((v,x)=>{const S=t.progress*.01+x*.01;return Math.sin(S*.5)*.3+Math.sin(S*1.5)*.2+Math.sin(S*3.5)*.1}),p=o.createLinearGradient(0,0,c,d);p.addColorStop(0,`${u}40`),p.addColorStop(1,"rgba(0, 0, 0, 0)"),o.fillStyle=p,o.beginPath(),o.moveTo(0,d);for(let v=0;v<f.length;v++){const x=v/f.length*c,S=d-d*.5*(1+f[v]);o.lineTo(x,S)}o.lineTo(c,d),o.closePath(),o.fill(),o.strokeStyle=u,o.lineWidth=2,o.beginPath();for(let v=0;v<f.length;v++){const x=v/f.length*c,S=d-d*.5*(1+f[v]);v===0?o.moveTo(x,S):o.lineTo(x,S)}o.stroke()};return l(),()=>{n.current&&cancelAnimationFrame(n.current)}},[t.currentTrack,t.progress]),P.jsx(Q3,{children:P.jsx(X3,{ref:e})})},Z3=B0`
  /* existing animation */
`,J3=B0`
  /* existing animation */
`,eS=z.div.attrs({className:"dp-equalizer-container"})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
`,tS=z.canvas.attrs({className:"dp-equalizer-canvas"})`
  /* existing styles */
`,nS=z.div.attrs(e=>({className:"dp-equalizer-glow",style:{opacity:e.$isPlaying?.8:.2,animationDuration:`${3-e.$intensity*1.5}s`,background:`linear-gradient(90deg, transparent, ${e.$color}20, transparent)`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  animation-name: ${Z3};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  background-size: 200% 200%;
  will-change: opacity, background;
`,rS=z.div.attrs(e=>({className:"dp-equalizer-flow",style:{animationDuration:`${8-e.$intensity*4}s`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: 200% 200%;
  animation-name: ${J3};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  mix-blend-mode: overlay;
  will-change: transform;
`,iS=z.div.attrs(e=>({style:{height:`${e.$height}%`,backgroundColor:e.$color}}))`
  width: 4px;
  border-radius: 2px;
  transition: height 0.1s ease;
  will-change: height;
`,oS=({isPlaying:e=!1,dominantColor:t="#4CAF50",audioRef:n,onIntensityChange:r})=>{var g;const{state:o}=Bi(),[s,a]=T.useState(Array(12).fill(10)),l=T.useRef(0),[u,c]=T.useState(0),d=T.useRef(0),f=T.useMemo(()=>{var v;return t||((v=o.currentTrack)==null?void 0:v.color)||"#388e3c"},[t,(g=o.currentTrack)==null?void 0:g.color]);T.useEffect(()=>{const v=s.reduce((x,S)=>x+S,0)/(s.length*100);c(v)},[s]),T.useEffect(()=>{r&&r(u)},[u,r]),T.useEffect(()=>{if(!o.isPlaying||!o.equalizerActive)return a(Array(12).fill(10)),()=>cancelAnimationFrame(l.current);const v=x=>{if(x-d.current<33){l.current=requestAnimationFrame(v);return}d.current=x,a(S=>{const y=S.map(m=>{const w=20+Math.random()*60;return m+(w-m)*.3});return y.some((m,w)=>Math.abs(m-S[w])>2)?y:S}),l.current=requestAnimationFrame(v)};return l.current=requestAnimationFrame(v),()=>{cancelAnimationFrame(l.current)}},[o.isPlaying,o.equalizerActive]);const p=T.useMemo(()=>s.map((v,x)=>P.jsx(iS,{$height:o.isPlaying?v:5,$color:f},x)),[s,o.isPlaying,f]);return P.jsxs(eS,{$isActive:e,$color:t,children:[P.jsx(tS,{ref:n,width:"280",height:"70"}),P.jsx(nS,{$intensity:u,$color:t,$isPlaying:e,children:P.jsx(rS,{$intensity:u,$color:t})}),p]})},sS=oe.memo(oS),yg="/assets/covers/default_cover_2.jpeg",aS=e=>e?(e.startsWith("http"),e):yg,lS=z(xt.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  z-index: 5;
  margin-left: 2px; /* Add margin to prevent slider from going too far left */
  will-change: transform, opacity;
`,uS=z(xt.button).attrs(e=>({id:"music-player-volume-toggle","aria-label":e.volume===0?"Unmute":"Mute"}))`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  left: 15px;
  transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  will-change: transform, opacity;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/assets/covers/galaxy_2.gif");
    background-size: cover;
    background-position: center;
    opacity: 0.9; /* Increased opacity as requested */
    z-index: -1;
    border-radius: 50%;
    animation: gentleBackgroundBreathing 6s infinite ease-in-out;
  }

  &:hover {
    color: rgb(255, 255, 255);
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.7);

    &::before {
      opacity: 0; /* Make background image completely transparent on hover */
      transition: opacity 0.5s ease;
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(138, 43, 226, 0.7);
    box-shadow: 0 0 0 4px rgba(138, 43, 226, 0.3);
  }

  svg {
    filter: drop-shadow(0 0 5px rgba(138, 43, 226, 0.9));
    z-index: 1;
    transition: transform 0.3s ease, filter 0.3s ease;
    animation: iconPulse 3s infinite ease-in-out;

    /* Enhanced SVG styles */
    fill: rgba(255, 255, 255, 0.95);
    stroke: rgba(138, 43, 226, 0.3);
    stroke-width: 0.5px;
    transform-origin: center;
  }

  &:hover svg {
    transform: scale(1.1);
    filter: drop-shadow(0 0 8px rgba(147, 112, 219, 1));
    animation: iconPulseHover 3s infinite ease-in-out;
    fill: white;
    stroke: rgba(138, 43, 226, 0.5);
    stroke-width: 1px;
  }

  /* Replace the green glow with a cosmic blue/purple theme */
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(138, 43, 226, 0.4) 0%,
      rgba(147, 112, 219, 0.2) 40%,
      transparent 80%
    );
    opacity: 0;
    transition: all 0.4s ease;
    transform: scale(0.85);
    z-index: 0;
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1.05);
    box-shadow: inset 0 0 15px rgba(147, 112, 219, 0.5),
      0 0 20px rgba(138, 43, 226, 0.6);
    animation: pulseGlow 3s infinite ease-in-out;
  }

  /* Create breathing animations */
  @keyframes gentleBackgroundBreathing {
    0% {
      opacity: 0.8;
      filter: brightness(0.9) saturate(1.1);
    }
    25% {
      opacity: 0.85;
      filter: brightness(1) saturate(1.15);
    }
    50% {
      opacity: 0.95;
      filter: brightness(1.1) saturate(1.2);
    }
    75% {
      opacity: 0.85;
      filter: brightness(1) saturate(1.15);
    }
    100% {
      opacity: 0.8;
      filter: brightness(0.9) saturate(1.1);
    }
  }

  @keyframes pulseGlow {
    0% {
      opacity: 0.7;
      box-shadow: inset 0 0 15px rgba(147, 112, 219, 0.2),
        0 0 15px rgba(88, 101, 242, 0.3);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.3) 0%,
        rgba(147, 112, 219, 0.15) 40%,
        transparent 80%
      );
      filter: brightness(0.92) hue-rotate(-5deg);
    }
    25% {
      opacity: 0.8;
      box-shadow: inset 0 0 17px rgba(147, 112, 219, 0.3),
        0 0 18px rgba(88, 101, 242, 0.4);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.35) 0%,
        rgba(147, 112, 219, 0.18) 40%,
        transparent 80%
      );
      filter: brightness(1) hue-rotate(-2deg);
    }
    50% {
      opacity: 0.9;
      box-shadow: inset 0 0 20px rgba(147, 112, 219, 0.4),
        0 0 22px rgba(88, 101, 242, 0.5);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.4) 0%,
        rgba(147, 112, 219, 0.2) 40%,
        transparent 80%
      );
      filter: brightness(1.08) hue-rotate(3deg);
    }
    75% {
      opacity: 0.8;
      box-shadow: inset 0 0 17px rgba(147, 112, 219, 0.3),
        0 0 18px rgba(88, 101, 242, 0.4);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.35) 0%,
        rgba(147, 112, 219, 0.18) 40%,
        transparent 80%
      );
      filter: brightness(1) hue-rotate(-2deg);
    }
    100% {
      opacity: 0.7;
      box-shadow: inset 0 0 15px rgba(147, 112, 219, 0.2),
        0 0 15px rgba(88, 101, 242, 0.3);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.3) 0%,
        rgba(147, 112, 219, 0.15) 40%,
        transparent 80%
      );
      filter: brightness(0.92) hue-rotate(-5deg);
    }
  }

  @keyframes iconPulse {
    0% {
      filter: drop-shadow(0 0 3px rgba(147, 112, 219, 0.6));
      transform: scale(1);
    }
    33% {
      filter: drop-shadow(0 0 4px rgba(138, 43, 226, 0.7));
      transform: scale(1.05);
    }
    66% {
      filter: drop-shadow(0 0 5px rgba(138, 43, 226, 0.8));
      transform: scale(1);
    }
    100% {
      filter: drop-shadow(0 0 3px rgba(147, 112, 219, 0.6));
      transform: scale(1);
    }
  }

  @keyframes iconPulseHover {
    0% {
      filter: drop-shadow(0 0 5px rgba(147, 112, 219, 0.8));
      transform: scale(1.1);
    }
    33% {
      filter: drop-shadow(0 0 6px rgba(138, 43, 226, 0.85));
      transform: scale(1.15);
    }
    66% {
      filter: drop-shadow(0 0 7px rgba(138, 43, 226, 0.9));
      transform: scale(1.1);
    }
    100% {
      filter: drop-shadow(0 0 5px rgba(147, 112, 219, 0.8));
      transform: scale(1.1);
    }
  }
`,cS=z(xt.div)`
  position: absolute;
  width: 120px;
  height: 36px;
  background: rgba(10, 10, 10, 0.95);
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 0 12px 0 30px;
  left: 30px;
  transform: translateX(-15%);
  z-index: 10;
  position: absolute;
  top: 0;
  will-change: transform, opacity, width;
  backdrop-filter: blur(10px);

  /* Enhanced cosmic border effect */
  border: 1px solid rgba(138, 43, 226, 0.4);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5),
    inset 0 0 2px rgba(138, 43, 226, 0.4), 0 0 10px rgba(138, 43, 226, 0.3),
    inset 0 0 8px rgba(138, 43, 226, 0.2), 0 0 20px rgba(147, 112, 219, 0.2);

  /* Animated gradient border */
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      rgba(138, 43, 226, 0.5),
      rgba(147, 112, 219, 0.5),
      rgba(88, 101, 242, 0.5),
      rgba(138, 43, 226, 0.5)
    );
    border-radius: 19px;
    z-index: -1;
    animation: borderGlow 3s linear infinite;
    filter: blur(8px);
    opacity: 0.5;
  }

  /* Star Trek-like scanning line effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(147, 112, 219, 0.2),
      rgba(138, 43, 226, 0.4),
      rgba(147, 112, 219, 0.2),
      transparent
    );
    border-radius: inherit;
    z-index: 1;
    animation: scanLine 2s linear infinite;
    pointer-events: none;
  }

  /* Volume icon container enhancement */
  .icon-container {
    position: absolute;
    left: 3px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(10, 10, 10, 0.5);
    border-radius: 50%;
    box-shadow: inset 0 0 5px rgba(138, 43, 226, 0.3),
      0 0 10px rgba(138, 43, 226, 0.2);
  }

  @keyframes borderGlow {
    0% {
      filter: blur(8px) hue-rotate(0deg);
    }
    50% {
      filter: blur(10px) hue-rotate(180deg);
    }
    100% {
      filter: blur(8px) hue-rotate(360deg);
    }
  }

  /* Hover state enhancement */
  &:hover {
    &::before {
      opacity: 0.7;
      filter: blur(6px);
    }
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6),
      inset 0 0 4px rgba(138, 43, 226, 0.6), 0 0 15px rgba(138, 43, 226, 0.4),
      inset 0 0 12px rgba(138, 43, 226, 0.3), 0 0 25px rgba(147, 112, 219, 0.3);
  }
`,dS=z.input.attrs({type:"range",min:"0",max:"100",step:"1",id:"music-player-volume-slider"})`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${e=>`linear-gradient(
    to right,
    rgba(138, 43, 226, 0.8) 0%,
    rgba(147, 112, 219, 0.8) ${e.value}%,
    rgba(255, 255, 255, 0.2) ${e.value}%,
    rgba(255, 255, 255, 0.2) 100%
  )`};
  outline: none;
  position: relative;
  z-index: 1;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #8a2be2; /* Changed to blueviolet */
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.7);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid rgba(255, 255, 255, 0.9);
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    background: #9370db; /* Changed to medium purple */
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.9);
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #8a2be2; /* Changed to blueviolet */
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.7);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid rgba(255, 255, 255, 0.9);
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.1);
    background: #9370db; /* Changed to medium purple */
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.9);
  }

  &:focus-visible {
    outline: 2px solid rgba(138, 43, 226, 0.7);
  }
`,fS=z(xt.div)`
  position: absolute;
  top: -25px;
  left: ${e=>e.$volume}%;
  transform: translateX(-50%);
  background: rgba(10, 10, 10, 0.9);
  color: #8a2be2; /* Changed to blueviolet */
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  border: 1px solid rgba(138, 43, 226, 0.3);
  font-weight: 600;
  z-index: 2;
`,pS=z(xt.div)`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 10, 10, 0.9);
  color: #ff5252;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  border: 1px solid rgba(255, 82, 82, 0.3);
  font-weight: 600;
  z-index: 2;
`,hS=z(xt.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  pointer-events: none;
  opacity: ${e=>e.$volume===0?0:.3};
  z-index: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid rgba(138, 43, 226, 0.7);
    animation: waveEffect 3s infinite ease-out;
  }

  &::after {
    animation-delay: 1.5s;
  }

  @keyframes waveEffect {
    0% {
      width: 110%;
      height: 110%;
      opacity: 0.7;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }
`,mS=({volume:e,onVolumeChange:t,className:n})=>{const[r,o]=T.useState(!1),[s,a]=T.useState(!1),[l,u]=T.useState(e),[c,d]=T.useState(!1),f=T.useRef(null);T.useEffect(()=>{const S=y=>{f.current&&!f.current.contains(y.target)&&s&&a(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[s]);const p=()=>e===0?P.jsx(b3,{size:18,style:{opacity:.9,filter:"drop-shadow(0 0 2px rgba(255, 82, 82, 0.7))"}}):e<50?P.jsx(C3,{size:18,style:{opacity:e/100+.5,transform:`scale(${.9+e/200})`}}):P.jsx(P3,{size:18,style:{opacity:e/100+.5,transform:`scale(${.9+e/200})`}}),g=()=>{e===0?t(l>0?l:50):(u(e),t(0))},v=S=>{const y=parseInt(S.target.value,10);t(y)},x=T.useCallback(()=>{requestAnimationFrame(()=>{a(S=>!S)})},[]);return P.jsx(lS,{ref:f,className:n,onMouseEnter:()=>o(!0),onMouseLeave:()=>{o(!1),d(!1)},initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:P.jsx(eu,{mode:"wait",initial:!1,presenceAffectsLayout:!1,children:s?P.jsxs(cS,{initial:{opacity:0,width:"40px"},animate:{opacity:1,width:"120px"},exit:{opacity:0,width:"40px"},transition:{duration:.15,ease:"easeOut",width:{duration:.2}},children:[P.jsx("div",{style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",zIndex:2,filter:"drop-shadow(0 0 3px rgba(138, 43, 226, 0.7))"},children:p()}),P.jsx(dS,{value:e,onChange:v,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1)}),P.jsxs(eu,{children:[c&&e>0&&P.jsxs(fS,{$volume:e,initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:[e,"%"]},"volume-level"),e===0&&c&&P.jsx(pS,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:"Muted"},"mute-indicator")]})]},"slider-container"):P.jsxs(uS,{volume:e,onClick:x,onDoubleClick:g,whileTap:{scale:.95},title:"Open volume slider",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.15},children:[p(),P.jsx(hS,{$volume:e,initial:{opacity:0},animate:{opacity:e===0?0:r?.3:0},transition:{duration:.2}})]},"volume-button")})})},gS=z.div.attrs({className:"mp-root-container"})`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
  user-select: none; // Add this line to prevent text selection throughout the app

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 25%,
      rgba(76, 175, 80, 0.4) 50%,
      rgba(56, 142, 60, 0.2) 75%,
      transparent 100%
    );
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
    animation: flowLeft 8s infinite linear;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 25%,
      rgba(76, 175, 80, 0.4) 50%,
      rgba(56, 142, 60, 0.2) 75%,
      transparent 100%
    );
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
    animation: flowRight 8s infinite linear;
  }

  @keyframes flowLeft {
    0% {
      background-position: 0% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  @keyframes flowRight {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 0% 0;
    }
  }
`,yS=z.div.attrs({className:"mp-content-area"})`
  flex: 1;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 25%,
      rgba(76, 175, 80, 0.4) 50%,
      rgba(56, 142, 60, 0.2) 75%,
      transparent 100%
    );
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
  }

  &::before {
    left: 0;
    animation: flowUp 12s infinite linear;
  }

  &::after {
    right: 0;
    animation: flowDown 12s infinite linear;
  }

  @keyframes flowUp {
    0% {
      background-position: 0 200%;
    }
    100% {
      background-position: 0 0;
    }
  }

  @keyframes flowDown {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 200%;
    }
  }

  @media (max-width: 600px) {
    padding: 15px 10px;
  }
`,vS=z.div.attrs({className:"mp-ambient-particles"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(76, 175, 80, 0.6);
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.8), 0 0 20px rgba(76, 175, 80, 0.4);
    opacity: 0;
  }

  &::before {
    top: 10%;
    left: 10%;
    animation: floatParticle1 15s infinite ease-in-out;
  }

  &::after {
    bottom: 20%;
    right: 15%;
    animation: floatParticle2 18s infinite ease-in-out;
  }

  @keyframes floatParticle1 {
    0%,
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    25% {
      transform: translate(30vw, 20vh);
      opacity: 0.7;
    }
    50% {
      transform: translate(60vw, 10vh);
      opacity: 0.3;
    }
    75% {
      transform: translate(80vw, 30vh);
      opacity: 0.6;
    }
  }

  @keyframes floatParticle2 {
    0%,
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    25% {
      transform: translate(-20vw, -10vh);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50vw, -30vh);
      opacity: 0.8;
    }
    75% {
      transform: translate(-70vw, -5vh);
      opacity: 0.4;
    }
  }
`,xS=z.div.attrs({className:"mp-visualizer-wrapper"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,tu={sidebar:.3,buttonDelay:.15,buttonTransition:.35},wS=z(xt.div).attrs(e=>({className:"mp-sidebar"}))`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 280px;
  max-width: ${e=>e.$isOpen?"85vw":"75vw"}; // Increase max width when open
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(56, 142, 60, 0.1);
  overflow: hidden; // Important for containing the animated line

  /* Animated divider line with water-like effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 20%,
      rgba(76, 175, 80, 0.6) 50%,
      rgba(56, 142, 60, 0.2) 80%,
      transparent 100%
    );
    animation: waterFlowAnimation 3s ease-in-out infinite;
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
  }

  /* Animated glow effect */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 5px;
    height: 150px;
    transform: translateY(-50%);
    background: radial-gradient(
      ellipse at left,
      rgba(76, 175, 80, 0.6) 0%,
      transparent 70%
    );
    filter: blur(5px);
    animation: pulseGlow 2s ease-in-out infinite;
  }

  @keyframes waterFlowAnimation {
    0% {
      background-position: 0 0%;
      background-size: 100% 100%;
    }
    25% {
      background-size: 100% 90%;
    }
    50% {
      background-position: 0 100%;
      background-size: 100% 110%;
    }
    75% {
      background-size: 100% 90%;
    }
    100% {
      background-position: 0 0%;
      background-size: 100% 100%;
    }
  }

  @keyframes pulseGlow {
    0%,
    100% {
      opacity: 0.7;
      height: 150px;
    }
    50% {
      opacity: 0.9;
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    width: 260px;
  }

  @media (max-width: 380px) {
    width: 100%; /* Full width sidebar for very small screens */
    max-width: none;
    border-left: none;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    /* Special treatment for landscape orientation on small devices */
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;

    & > div:first-of-type {
      grid-column: 1;
    }

    & > div:last-of-type {
      grid-column: 2;
      padding-left: 0;
    }
  }
`,SS=z(xt.div).attrs({className:"mp-sidebar-trigger"})`
  position: fixed;
  right: 0;
  top: 50%;
  width: 4px;
  height: 100px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(76, 175, 80, 0.3) 20%,
    rgba(76, 175, 80, 0.7) 50%,
    rgba(76, 175, 80, 0.3) 80%,
    transparent 100%
  );
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  cursor: pointer;
  z-index: 999;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(76, 175, 80, 0.4);
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.7), 0 0 20px rgba(76, 175, 80, 0.4);
    opacity: 0.6;
    animation: waterBounce 2.5s ease-in-out infinite;
  }

  @keyframes waterBounce {
    0%,
    100% {
      transform: scaleY(1);
      opacity: 0.6;
    }
    50% {
      transform: scaleY(1.2) translateY(-5px);
      opacity: 0.8;
    }
  }

  @media (max-width: 380px) {
    height: 120px;

    &::before {
      opacity: 0.8;
    }
  }
`,kS=z.div.attrs(e=>({className:"mp-track-display"}))`
  padding: 30px;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${e=>e.$bgColor?`linear-gradient(45deg, ${e.$bgColor}40, ${e.theme.background})`:e.theme.background};
  overflow: hidden;

  @media (max-width: 380px) {
    padding: 20px 15px;
  }

  @media (max-height: 600px) {
    padding: 15px 10px;
    justify-content: flex-start;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    padding: 10px;
    justify-content: center;

    & > div {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`,CS=z.div.attrs(e=>({className:"mp-album-bg-color"}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: ${e=>e.$bgColor||"transparent"};
  z-index: 0;
  filter: blur(50px);
  transition: background 0.5s ease;
`,bS=z.div.attrs({className:"mp-album-ripple-effect"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
    border: 2px solid rgba(76, 175, 80, 0.3);
    transform: translate(-50%, -50%) scale(0);
    animation: rippleEffect 5s infinite ease-out;
  }

  &::after {
    animation-delay: 2.5s;
  }

  @keyframes rippleEffect {
    0% {
      transform: translate(-50%, -50%) scale(0.3);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
  }
`,PS=z.div.attrs({className:"mp-album-artwork"})`
  position: relative;
  width: 220px;
  height: 220px;
  aspect-ratio: 1 / 1; /* Force square aspect ratio */
  max-width: min(calc(100% - 40px), 220px); /* Prevent oversizing */
  max-height: min(calc(100vw - 120px), 220px);
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 1;
  user-select: none;
  transform: translateZ(0); /* Hardware acceleration */
  backface-visibility: hidden; /* Prevent flickering */
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;

  /* Enhanced hover effect container */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.15) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
    pointer-events: none;
  }

  /* Container for the album art image with enhanced hover */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform-origin: center;
    will-change: transform;
  }

  /* Hover effects */
  &:hover {
    transform: scale(1.02) translateZ(0);
    box-shadow: 0 25px 35px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.15);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.15);
    }
  }

  /* Active state for click/touch feedback */
  &:active {
    transform: scale(0.98) translateZ(0);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

    img {
      transform: scale(1.08);
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  }

  /* Maintain minimum size */
  @media (max-width: 280px) {
    width: 120px;
    height: 120px;
    min-width: 120px;
    min-height: 120px;
  }

  /* Container sizing rules for different screen sizes */
  @media (max-height: 700px) {
    width: 180px;
    height: 180px;
    margin: 15px auto;
  }

  @media (max-height: 600px) {
    width: 150px;
    height: 150px;
    margin: 12px auto;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    width: 130px;
    height: 130px;
    margin: 10px auto;
  }

  /* Ensure proper spacing on very small screens */
  @media (max-width: 380px) {
    margin-top: 25px;
    margin-bottom: 15px;
  }

  /* Enhanced visual appearance with subtle inner shadow */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: inherit;
    pointer-events: none;
    z-index: 3;
  }

  /* Loading state */
  &.loading::before {
    opacity: 1;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.1;
    }
  }
`,TS=z.img.attrs({className:"mp-album-image"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,np=z.div.attrs({className:"mp-track-metadata"})`
  text-align: center;
  margin-top: 20px;
  z-index: 1;
  user-select: none; // Prevent selection

  @media (max-height: 700px) {
    margin-top: 12px;
  }
`,rp=z.h2.attrs({className:"mp-track-title"})`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  user-select: none; // Prevent text selection

  @media (max-height: 700px) {
    font-size: 1.2rem;
    margin: 0 0 4px 0;
  }
`,ip=z.p.attrs({className:"mp-track-artist"})`
  font-size: 1.1rem;
  color: ${e=>e.theme.textSecondary};
  margin: 0 0 5px 0;
  user-select: none; // Prevent text selection
`,ES=z.p.attrs({className:"mp-track-album"})`
  font-size: 0.9rem;
  color: ${e=>e.theme.textSecondary};
  opacity: 0.8;
  user-select: none; // Prevent text selection
`,AS=z.div.attrs({className:"mp-playback-controls"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  gap: 15px;
  z-index: 1;
  padding: 8px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    border: 1px solid rgba(76, 175, 80, 0.3);
    box-shadow: inset 0 0 10px rgba(76, 175, 80, 0.1);
    pointer-events: none;
  }

  @media (max-height: 700px) {
    margin-top: 15px;
    gap: 10px;
  }

  @media (max-height: 600px) {
    margin-top: 10px;
    padding: 6px;
  }

  @media (max-width: 380px) {
    width: 90%;
    justify-content: space-around;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    margin-top: 5px;
    padding: 5px;
  }
`,tn=z.button.attrs({className:"mp-control-button"})`
  background: transparent;
  border: none;
  color: ${e=>e.theme.text};
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, color 0.2s ease;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    color: ${e=>e.theme.primary};
    transform: scale(1.1);
  }

  @media (max-width: 380px) {
    min-width: 44px;
    min-height: 44px;
    padding: 10px;
  }
`,RS=z(tn).attrs({className:"mp-play-pause-button"})`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${e=>e.theme.primary};
  color: white;
  font-size: 1.4rem;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.3s ease, box-shadow 0.3s ease;

  /* Glowing background effect */
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: ${e=>e.theme.primary};
    opacity: 0.4;
    z-index: -1;
    animation: pulse 2s infinite ease-out;
    transition: all 0.3s ease;
  }

  /* Inner progress ring */
  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top-color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: rotate 1.5s linear infinite;
  }

  /* Show progress ring when playing */
  &.playing::after {
    opacity: 0.7;
  }

  /* Base states styling */
  &.playing {
    background: ${e=>e.theme.primaryDark||"#388e3c"};
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.7);
  }

  &.paused {
    background: ${e=>e.theme.primary};
  }

  /* Icon container for smooth transitions */
  .icon-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Icon transitions */
  .play-icon,
  .pause-icon {
    position: absolute;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity;
  }

  /* When playing, hide play icon and show pause icon */
  &.playing .play-icon {
    opacity: 0;
    transform: scale(0.5) rotate(-90deg);
  }

  &.playing .pause-icon {
    opacity: 1;
    transform: scale(1);
  }

  /* When paused, hide pause icon and show play icon */
  &.paused .play-icon {
    opacity: 1;
    transform: scale(1);
  }

  &.paused .pause-icon {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 25px rgba(76, 175, 80, 0.8);

    &::before {
      animation: pulse 1s infinite ease-out;
      opacity: 0.6;
    }

    &.playing {
      background: ${e=>e.theme.primaryDark||"#2e7d32"};
    }

    &.paused {
      background: ${e=>e.theme.primaryHover||"#43a047"};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.5;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-height: 700px) {
    width: 46px;
    height: 46px;
    font-size: 1.2rem;
  }
`,MS=({isPlaying:e,onPlayPause:t,onPrev:n,onNext:r})=>P.jsxs(AS,{children:[P.jsx(tn,{onClick:n,children:P.jsx(h3,{})}),P.jsx(RS,{onClick:t,className:e?"playing":"paused","aria-label":e?"Pause":"Play",children:P.jsxs("div",{className:"icon-container",children:[P.jsx(mg,{className:"play-icon"}),P.jsx(hg,{className:"pause-icon"})]})}),P.jsx(tn,{onClick:r,children:P.jsx(y3,{})})]}),_S=z.div.attrs({className:"mp-progress-wrapper"})`
  width: 100%;
  margin-top: 25px;
  padding: 0 15px;
  z-index: 1;
  position: relative;

  /* Add subtle ambient glow behind progress area */
  &::before {
    content: "";
    position: absolute;
    left: 15px;
    right: 15px;
    top: 50%;
    height: 20px;
    background: radial-gradient(
      ellipse at center,
      rgba(76, 175, 80, 0.15) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    transform: translateY(-50%);
    filter: blur(8px);
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }

  @media (max-height: 700px) {
    margin-top: 15px;
  }
`,DS=z.div.attrs({className:"mp-progress-track"})`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  margin: 8px 0; // Add space for click area
  padding: 0.9px 0; // Create larger hit area while maintaining visual size
  box-sizing: content-box; // Ensure padding doesn't affect visual size

  &:hover {
    height: 5px;
    background: rgba(255, 255, 255, 0.18);
  }

  /* Track shine effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`,LS=z.div.attrs(()=>({className:"mp-progress-fill"}))`
  height: 100%;
  border-radius: inherit;
  width: ${e=>e.$width};
  position: relative;
  transition: width ${e=>e.$isDragging?"0s":"0.08s"} linear;
  background: linear-gradient(
    90deg,
    ${e=>e.theme.primary} 0%,
    ${e=>e.theme.primaryHover||"#43a047"} 100%
  );

  /* Shimmer effect - only active when music is playing */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(43, 167, 103, 0.87) 50%,
      transparent 100%
    );
    opacity: 0;
    animation: ${e=>e.$isPlaying?"shimmer 3s infinite":"none"};
    pointer-events: none;
  }

  @keyframes shimmer {
    0%,
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
    }
  }
`,NS=z.div.attrs(()=>({className:"mp-progress-handle"}))`
  position: absolute;
  top: 50%;
  left: ${e=>e.$position};
  width: ${e=>e.$isDragging?"18px":"12px"};
  height: ${e=>e.$isDragging?"18px":"12px"};
  background: ${e=>e.$isDragging?"white":e.theme.primary};
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(${e=>e.$visible?1:0});
  box-shadow: ${e=>e.$isDragging?`0 0 0 4px rgba(76, 175, 80, 0.3), 
       0 0 15px rgba(76, 175, 80, 0.8),
       0 0 30px rgba(76, 175, 80, 0.4)`:`0 0 0 2px rgba(76, 175, 80, 0.2), 
       0 0 8px rgba(76, 175, 80, 0.6)`};
  /* Remove transition delays during active interaction */
  transition: ${e=>e.$isDragging?"transform 0.05s linear, background-color 0.1s ease, box-shadow 0.1s ease":"transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease, box-shadow 0.2s ease, width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"};
  pointer-events: none;
  z-index: 2;
  will-change: transform, width, height, left; /* Optimize for animation performance */

  /* Maintain other styles unchanged */
  /* Inner dot for enhanced visual presence */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${e=>e.$isDragging?"6px":"4px"};
    height: ${e=>e.$isDragging?"6px":"4px"};
    background: white;
    border-radius: 50%;
    opacity: ${e=>e.$isDragging?.9:.7};
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  }

  /* Focus ring for enhanced visibility during interaction */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${e=>e.$isDragging?"28px":"20px"};
    height: ${e=>e.$isDragging?"28px":"20px"};
    transform: translate(-50%, -50%)
      scale(${e=>e.$isDragging?1:.7});
    opacity: ${e=>e.$isDragging?.6:0};
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.3) 0%,
      transparent 70%
    );
    transition: opacity 0.3s ease, transform 0.2s ease;
    pointer-events: none;
  }

  /* Advanced pulse effect during dragging */
  animation: ${e=>e.$isDragging?"advancedPulse 2s infinite cubic-bezier(0.66, 0, 0.34, 1)":"none"};
`,zS=z.div.attrs({className:"mp-time-display"})`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${e=>e.theme.textSecondary};
  margin-top: 10px;
  user-select: none;
  letter-spacing: 0.5px;
  font-weight: 500;
  opacity: 0.9;
  padding: 0 2px;

  /* Apply subtle highlight to current time */
  span:first-child {
    color: ${e=>e.theme.primary};
    opacity: 0.95;
  }
`,jS=z.div.attrs(()=>({className:"mp-time-tooltip"}))`
  position: absolute;
  bottom: ${e=>e.$isDragging?"28px":"24px"};
  left: ${e=>e.$position};
  transform: translateX(-50%)
    translateY(${e=>e.$visible?"0":"10px"});
  background: ${e=>e.$isDragging?e.theme.primaryDark||"#2e7d32":"rgba(0, 0, 0, 0.75)"};
  color: white;
  padding: ${e=>e.$isDragging?"5px 10px":"4px 8px"};
  border-radius: 6px;
  font-size: ${e=>e.$isDragging?"0.85rem":"0.75rem"};
  font-weight: ${e=>e.$isDragging?"600":"500"};
  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity 0.15s ease, transform 0.15s ease,
    background-color 0.2s ease, padding 0.2s ease;
  pointer-events: none;
  z-index: 3;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  user-select: none; /* Add this line to prevent text selection */

  /* Subtle pointer tip */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid
      ${e=>e.$isDragging?e.theme.primaryDark||"#2e7d32":"rgba(0, 0, 0, 0.75)"};
    transition: border-top-color 0.2s ease;
  }
`;class VS{constructor(t,n){this.audioRef=t,this.dispatch=n,this.lastAction=null,this.doubleClickThreshold=300,this.debounceThreshold=150,this.playPromise=null,this.handlePlayPause=()=>{var o;if(this.shouldDebounce("playPause"))return;this.lastAction={type:"playPause",time:Date.now()};const r=this.audioRef.current;if(r)if(r.paused){this.dispatch({type:"PLAY"});try{this.playPromise=r.play(),(o=this.playPromise)==null||o.catch(s=>{console.warn("Play failed:",s),this.dispatch({type:"PAUSE"}),this.playPromise=null})}catch(s){console.warn("Play operation failed:",s),this.dispatch({type:"PAUSE"})}}else this.playPromise?this.playPromise.then(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}).catch(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}):(r.pause(),this.dispatch({type:"PAUSE"}))},this.handlePrev=()=>{if(this.shouldDebounce("prev"))return;const r=this.isDoubleClick("prev");this.lastAction={type:"prev",time:Date.now()};const o=this.audioRef.current;if(o){if(r){console.log("Double-click detected on prev button, skipping to previous track"),this.dispatch({type:"PREV_TRACK"});return}o.currentTime>3?o.currentTime=0:this.dispatch({type:"PREV_TRACK"})}},this.handleNext=()=>{if(this.shouldDebounce("next"))return;this.lastAction={type:"next",time:Date.now()},this.isDoubleClick("next")&&console.log("Double-click detected on next button"),this.dispatch({type:"NEXT_TRACK"})}}isDoubleClick(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.doubleClickThreshold:!1}shouldDebounce(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.debounceThreshold:!1}}const $S=oe.forwardRef(({isOpen:e,toggleOpen:t},n)=>{var ne,We,G,ge;const{state:r,dispatch:o}=Bi(),s=T.useRef(null),a=T.useRef(null),l=T.useRef(new VS(s,o)).current,u=l.handlePlayPause,c=l.handlePrev,d=l.handleNext,f=((ne=r.currentTrack)==null?void 0:ne.color)||"#388e3c";T.useEffect(()=>{var A,M;r.isPlaying?(A=s.current)==null||A.play():(M=s.current)==null||M.pause()},[r.isPlaying,r.currentTrack]),T.useEffect(()=>{s.current&&(s.current.volume=r.volume)},[r.volume]);const p=A=>{if(A&&!isNaN(A)){const M=Math.floor(A/60),N=Math.floor(A%60);return`${M}:${N<10?"0":""}${N}`}return"0:00"},g=()=>{if(s.current){const A=s.current.currentTime,M=s.current.duration;o({type:"SET_PROGRESS",payload:A}),o({type:"SET_DURATION",payload:M})}},v=A=>{if(a.current&&s.current){const M=a.current.clientWidth,N=A.nativeEvent.offsetX,D=s.current.duration;s.current.currentTime=N/M*D}};T.useEffect(()=>{if(r.isPlaying&&s.current){const A=s.current.play();A!==void 0&&A.catch(M=>{console.warn("Failed to start playback:",M),o({type:"PAUSE"})})}else s.current&&s.current.pause()},[r.currentTrack,r.isPlaying,o]),T.useEffect(()=>{const A=()=>{var N;if((N=s.current)!=null&&N.error){console.error("Media error:",s.current.error);let D=0;const V=3,fe=()=>{if(D<V){D++;const ye=Math.pow(2,D)*1e3;console.log(`Retrying playback in ${ye/1e3} seconds...`),setTimeout(()=>{s.current&&(s.current.load(),s.current.play().catch(Ee=>{console.warn("Retry failed:",Ee),fe()}))},ye)}else console.warn("All retries failed, skipping track"),d()};fe()}},M=s.current;return M&&M.addEventListener("error",A),()=>{M&&M.removeEventListener("error",A)}},[]);const[x,S]=T.useState(!1),[y,h]=T.useState("0%"),[m,w]=T.useState(!1),[k,b]=T.useState(null),C=A=>{var M;if(a.current){const N=a.current.getBoundingClientRect(),D=(A.clientX-N.left)/N.width,V=Math.max(0,Math.min(1,D))*100;if(h(`${V.toFixed(3)}%`),(M=s.current)!=null&&M.duration){const fe=V*s.current.duration/100;b(p(fe))}x||S(!0)}},E=()=>{m||S(!1)},_=A=>{w(!0),W(A)},j=A=>{if(s.current){const M=s.current.duration,N=A/100*M;return p(N)}return"0:00"},W=A=>{if(a.current){const M=a.current.getBoundingClientRect(),N=(A.clientX-M.left)/M.width,D=Math.max(0,Math.min(1,N))*100,V=`${D}%`;if(h(V),b(j(D)),m&&s.current){const fe=s.current.duration;s.current.currentTime=D/100*fe,a.current.querySelector(".mp-progress-fill")&&(a.current.querySelector(".mp-progress-fill").style.width=V)}}},X=()=>{w(!1),setTimeout(()=>{x||S(!1)},100)};T.useEffect(()=>{const A=V=>{if(m&&a.current){V.preventDefault();const fe=a.current.getBoundingClientRect(),ye=(V.clientX-fe.left)/fe.width,Ee=Math.max(0,Math.min(1,ye))*100;if(h(`${Ee.toFixed(3)}%`),s.current){const ce=s.current.duration;s.current.currentTime=Ee/100*ce}}};let M;const N=V=>{m&&(V.preventDefault(),cancelAnimationFrame(M),M=requestAnimationFrame(()=>{A(V)}))},D=()=>{m&&(X(),cancelAnimationFrame(M))};return m&&(document.addEventListener("mousemove",N,{passive:!1}),document.addEventListener("mouseup",D)),()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",D),cancelAnimationFrame(M)}},[m]);const te=()=>{const A=OS(r.sidebarMode)?r.sidebarMode:"auto",M=["auto","always","manual"],D=(M.indexOf(A)+1)%M.length,V=M[D];o({type:"SET_SIDEBAR_MODE",payload:V})};return P.jsxs(wS,{$isOpen:e,className:"player-sidebar",ref:n,initial:{right:"-280px"},animate:{right:e?0:"-280px"},transition:{duration:tu.sidebar,ease:[.34,1.56,.64,1]},children:[P.jsx(IS,{}),P.jsxs(FS,{onClick:t,"aria-label":"Close music player",children:[P.jsx(k3,{}),P.jsxs("div",{className:"particles",children:[P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"}),P.jsx("div",{className:"particle"})]})]}),P.jsx("audio",{ref:s,src:(We=r.currentTrack)==null?void 0:We.audioSrc,onTimeUpdate:g,onEnded:d,onError:A=>{console.error("Audio error:",A),r.isPlaying&&(o({type:"PAUSE"}),setTimeout(()=>{d()},500))},onCanPlayThrough:()=>{r.isPlaying&&s.current&&s.current.play().catch(A=>{console.warn("Auto-play was prevented:",A),o({type:"PAUSE"})})}}),P.jsxs(kS,{$bgColor:f,children:[P.jsx(CS,{$bgColor:f}),r.currentTrack?P.jsxs(P.Fragment,{children:[P.jsxs(PS,{children:[P.jsx(TS,{src:aS((G=r.currentTrack)==null?void 0:G.coverArt),alt:((ge=r.currentTrack)==null?void 0:ge.title)||"Album Cover"}),P.jsx(bS,{}),r.equalizerActive&&P.jsx(sS,{})]}),P.jsxs(np,{children:[P.jsx(rp,{children:r.currentTrack.title}),P.jsx(ip,{children:r.currentTrack.artist}),P.jsx(ES,{children:r.currentTrack.album})]}),P.jsx(MS,{isPlaying:r.isPlaying,onPlayPause:u,onPrev:c,onNext:d}),P.jsxs(_S,{children:[P.jsxs(DS,{ref:a,onClick:v,onMouseMove:C,onMouseEnter:C,onMouseLeave:E,onMouseDown:_,children:[P.jsx(LS,{$width:m?y:`${r.progress/r.duration*100}%`,$isDragging:m,$isPlaying:r.isPlaying}),P.jsx(jS,{$visible:x,$position:y,$isDragging:m,children:k||p(r.progress)}),P.jsx(NS,{$visible:x||m,$position:m||x?y:`${r.progress/r.duration*100}%`,$isDragging:m})]}),P.jsxs(zS,{children:[P.jsx("span",{children:p(r.progress)}),P.jsx("span",{children:p(r.duration)})]})]})]}):P.jsxs(np,{children:[P.jsx(rp,{children:"No track selected"}),P.jsx(ip,{children:"Select a track to play"})]})]}),P.jsxs(US,{children:[P.jsx(HS,{children:P.jsx(mS,{volume:Math.round(r.volume*100),onVolumeChange:A=>o({type:"SET_VOLUME",payload:A/100})})}),P.jsxs(WS,{children:[P.jsx(tn,{onClick:()=>o({type:"TOGGLE_SHUFFLE"}),style:{color:r.isShuffling?"#388e3c":""},title:"Toggle shuffle mode",children:P.jsx(w3,{})}),P.jsxs(tn,{onClick:()=>o({type:"TOGGLE_REPEAT"}),style:{color:r.isRepeating?"#388e3c":"",position:"relative"},title:"Toggle repeat mode",children:[P.jsx(S3,{}),r.isRepeating&&P.jsx(xt.span,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:.7},style:{position:"absolute",top:"-3px",right:"-3px",width:"6px",height:"6px",background:"#388e3c",borderRadius:"50%",boxShadow:"0 0 4px rgba(76, 175, 80, 0.8)"}})]}),P.jsx(tn,{onClick:()=>o({type:"TOGGLE_VISUALIZER"}),style:{color:r.visualizerActive?"#388e3c":""},title:"Toggle visualizer",children:P.jsx(m3,{})}),P.jsx(GS,{onClick:()=>o({type:"TOGGLE_EQUALIZER"}),className:`${r.isPlaying?"playing":""} ${r.equalizerActive?"active":""}`,style:{color:r.equalizerActive?"#388e3c":""},title:"Toggle equalizer",children:P.jsx(T3,{})}),P.jsx("div",{}),P.jsxs(tn,{className:"sidebar-mode-button",onClick:te,style:{color:(()=>{switch(r.sidebarMode){case"auto":return"rgba(76, 175, 80, 1)";case"always":return"rgba(33, 150, 243, 1)";case"manual":return"rgba(255, 152, 0, 1)";default:return"rgba(76, 175, 80, 1)"}})()},title:`Sidebar: ${r.sidebarMode} mode`,children:[r.sidebarMode==="auto"&&P.jsx(g3,{}),r.sidebarMode==="always"&&P.jsx(x3,{}),r.sidebarMode==="manual"&&P.jsx(v3,{})]})]})]})]})}),IS=z.div.attrs({className:"mp-sidebar-ambient-effect"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.1) 0%,
      rgba(76, 175, 80, 0) 70%
    );
    opacity: 0.7;
    animation: rotateGradient 15s infinite linear;
  }

  @keyframes rotateGradient {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,FS=z.button.attrs({className:"mp-sidebar-close"})`
  position: absolute;
  top: ${e=>e.theme.isMobile?"10px":"15px"};
  right: ${e=>e.theme.isMobile?"10px":"15px"};
  width: ${e=>e.theme.isMobile?"40px":"36px"};
  height: ${e=>e.theme.isMobile?"40px":"36px"};
  border: none;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: ${e=>e.theme.isMobile?"1.7rem":"1.5rem"};
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Galaxy background when hovered - Fix the path by removing 'public/' */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
    border-radius: 50%;
  }

  /* Outer glow effect */
  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(76, 175, 80, 0.7) 0%,
      rgba(76, 175, 80, 0) 70%
    );
    opacity: 0;
    z-index: -2;
    transition: opacity 0.3s ease;
  }

  /* X icon styling */
  svg {
    width: 18px;
    height: 18px;
    stroke-width: 2px;
    transition: color 0.3s ease, filter 0.3s ease;
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
  }

  /* Particle container */
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  /* Particle styling - now with 12 particles instead of 6 */
  .particle {
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.8), 0 0 12px rgba(76, 175, 80, 0.4);
  }

  /* Different size particles for more dynamic look */
  .particle:nth-child(3n + 1) {
    width: 2px;
    height: 2px;
    background: rgba(76, 175, 80, 1);
  }

  .particle:nth-child(3n + 2) {
    width: 3px;
    height: 3px;
    background: rgba(120, 200, 80, 0.9);
  }

  .particle:nth-child(3n + 3) {
    width: 4px;
    height: 4px;
    background: rgba(60, 220, 130, 0.85);
  }

  /* Hover state */
  &:hover {
    color: white;
    background: rgba(0, 0, 0, 0.4);

    &::before {
      opacity: 0.9;
    }

    &::after {
      opacity: 0.7;
      animation: pulseGlow 1.5s infinite alternate;
    }

    svg {
      filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
    }

    /* Particle explosion animations with improved timing */
    .particle:nth-child(1) {
      animation: particleFly1 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
    .particle:nth-child(2) {
      animation: particleFly2 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.05s;
    }
    .particle:nth-child(3) {
      animation: particleFly3 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.1s;
    }
    .particle:nth-child(4) {
      animation: particleFly4 0.75s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.05s;
    }
    .particle:nth-child(5) {
      animation: particleFly5 0.85s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.15s;
    }
    .particle:nth-child(6) {
      animation: particleFly6 0.95s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.1s;
    }
    .particle:nth-child(7) {
      animation: particleFly7 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.15s;
    }
    .particle:nth-child(8) {
      animation: particleFly8 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
    .particle:nth-child(9) {
      animation: particleFly9 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.1s;
    }
    .particle:nth-child(10) {
      animation: particleFly10 0.75s cubic-bezier(0.215, 0.61, 0.355, 1)
        forwards 0.05s;
    }
    .particle:nth-child(11) {
      animation: particleFly11 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
    .particle:nth-child(12) {
      animation: particleFly12 0.85s cubic-bezier(0.215, 0.61, 0.355, 1)
        forwards 0.15s;
    }
  }

  /* Active/pressed state with particle implosion effect */
  &:active {
    transform: scale(0.9);

    &::before {
      opacity: 1;
    }

    .particle {
      animation: particleImplosion 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        forwards !important;
    }
  }

  /* Improved keyframes for more dynamic particle movements */
  @keyframes particleFly1 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-28px, -22px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly2 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(25px, -20px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly3 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(22px, 25px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly4 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-26px, 18px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly5 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(0, -32px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly6 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(8px, 30px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly7 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-35px, 5px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly8 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(32px, 8px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly9 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-15px, -28px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly10 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-18px, 25px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly11 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(22px, -15px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly12 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(12px, 32px) scale(0);
      opacity: 0;
    }
  }

  /* Implosion effect when button is clicked */
  @keyframes particleImplosion {
    0% {
      transform: translate(-50%, -50%) scale(1)
        translate(var(--tx, 0), var(--ty, 0));
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0) translate(0, 0);
      opacity: 0;
    }
  }

  @keyframes pulseGlow {
    0% {
      opacity: 0.5;
      transform: scale(0.95);
    }
    100% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
`,OS=e=>e==="auto"||e==="always"||e==="manual",BS=()=>{var d;const{state:e,dispatch:t}=Bi(),[n,r]=T.useState(!1),o=T.useRef(null),s=T.useRef(null),a=T.useRef(null);T.useState(0),T.useEffect(()=>{(()=>{try{const p=window.AudioContext||window.webkitAudioContext;if(p){const x=new p,S=x.createOscillator(),y=x.createGain();y.gain.value=.001,S.connect(y),y.connect(x.destination),S.start(0),S.stop(.001)}const g=new Audio;g.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA",g.volume=.01;const v=g.play();v!==void 0&&v.catch(x=>{console.log("Auto audio initialization failed:",x);const S=()=>{g.play().catch(y=>console.log("Manual audio init failed:",y)),document.removeEventListener("click",S),document.removeEventListener("touchstart",S)};document.addEventListener("click",S,{once:!0}),document.addEventListener("touchstart",S,{once:!0})})}catch(p){console.warn("Audio initialization error:",p)}})()},[]),T.useEffect(()=>{if(e.sidebarMode==="auto"){const f=v=>{const x=window.innerWidth,S=Math.min(80,x*.08);if(v.clientX>x-S&&!n&&(r(!0),t({type:"SIDEBAR_INTERACTION"})),n){const h=x-280;v.clientX<h&&r(!1)}},p=v=>{n&&s.current&&(s.current.contains(v.target)||r(!1))},g=v=>{if(n&&v.touches.length>0){const x=v.touches[0],S=window.innerWidth,y=280;x.clientX<S-y-30&&r(!1)}};return document.addEventListener("mousemove",f),document.addEventListener("click",p),document.addEventListener("touchmove",g),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("click",p),document.removeEventListener("touchmove",g)}}e.sidebarMode==="always"&&r(!0)},[e.sidebarMode,n,t,s]);const l=f=>{if(f.current){const p=f.current.currentTime,g=f.current.duration;!isNaN(p)&&!isNaN(g)&&(t({type:"SET_PROGRESS",payload:p}),t({type:"SET_DURATION",payload:g}))}},u=()=>{t({type:"NEXT_TRACK"})},c=()=>{e.sidebarMode==="manual"?(r(!n),t({type:"SIDEBAR_INTERACTION"})):(t({type:"SET_SIDEBAR_MODE",payload:"manual"}),r(!n),t({type:"SIDEBAR_INTERACTION"}))};return T.useEffect(()=>{const f=p=>{const g=p.target;g.tagName==="IMG"&&!g.src.includes("default_cover.jpeg")&&(console.log(`Image failed to load: ${g.src}, using default cover`),g.src=yg)};return document.addEventListener("error",f,!0),()=>{document.removeEventListener("error",f,!0)}},[]),P.jsxs(gS,{children:[P.jsx(vS,{}),P.jsx("audio",{ref:o,src:(d=e.currentTrack)==null?void 0:d.audioSrc,onTimeUpdate:()=>l(o),onEnded:u,preload:"auto"}),P.jsxs(yS,{children:[P.jsx(xS,{children:e.visualizerActive&&P.jsx(q3,{})}),P.jsx(xt.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:P.jsx(K3,{})})]}),P.jsx(eu,{children:!n&&P.jsx(SS,{ref:a,onClick:c,initial:{opacity:0,scaleY:.7},animate:{opacity:.8,scaleY:1},exit:{opacity:0,scaleY:.7},transition:{duration:tu.buttonTransition,delay:tu.buttonDelay,ease:[.2,.8,.2,1.2]},style:{transformOrigin:"center"}})}),P.jsx($S,{isOpen:n,toggleOpen:c,ref:s})]})},US=z.div.attrs({className:"mp-secondary-controls"})`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 15px;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1;
  user-select: none;

  @media (max-height: 700px) {
    padding: 15px 10px;
    gap: 10px;
  }
`,HS=z.div.attrs({className:"mp-control-group"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  padding: 0 2px;
`,WS=z.div.attrs({className:"mp-feature-toggles"})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;

  /* Add specific styling for sidebar mode button */
  .sidebar-mode-button {
    grid-column: 3; /* Place in last column */
    grid-row: 2; /* Place in second row */
    justify-self: center;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(2, 1fr);

    .sidebar-mode-button {
      grid-column: 2;
      grid-row: 2;
    }
  }
`,GS=z(tn).attrs({className:"mp-control-button mp-equalizer-button"})`
  position: relative;

  /* Container for the gif background - properly sized */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px; /* Smaller exact size that matches the icon */
    height: 20px; /* Smaller exact size that matches the icon */
    transform: translate(-50%, -50%);
    background-image: url("/assets/covers/equalizer_animation.gif");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
    pointer-events: none;
  }

  /* Show gif background only when playing and button is active */
  &.playing.active::before {
    opacity: 1;
  }

  /* Hide the static SVG icon when the animation is showing */
  svg {
    position: relative;
    z-index: 0;
    transition: opacity 0.2s ease;
  }

  &.playing.active svg {
    opacity: 0;
  }

  /* Keep hover effect consistent */
  &:hover {
    color: ${e=>{var t,n;return((t=e.style)==null?void 0:t.color)||((n=e.theme)==null?void 0:n.primary)||"#4caf50"}};
  }

  /* Add this to your component */
  &:hover {
    color: ${e=>{var t,n;return((t=e.style)==null?void 0:t.color)||((n=e.theme)==null?void 0:n.primary)||"#4caf50"}};
  }
`,KS=Wv`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({theme:e})=>e.background};
    color: ${({theme:e})=>e.text};
    line-height: 1.5;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: inherit;
    color: inherit;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  input, select {
    font-family: inherit;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  /* Dreaming Polar Semantic Classes */
  .dp-player-container {
    /* Additional styling that complements your styled components */
  }
  
  .dp-album-cover {
    /* Additional styling */
  }
  
  .dp-control-btn {
    /* Additional styling */
  }
  
  .dp-equalizer-container {
    /* Additional styling */
  }
  
  /* Accessibility improvements */
  .dp-player-container:focus-within {
    outline: 2px solid rgba(76, 175, 80, 0.5);
  }
  
  .dp-control-btn:focus {
    outline: 2px solid rgba(76, 175, 80, 0.5);
  }
  
  /* Animation classes */
  .pulse {
    animation: pulse 2s infinite ease-in-out;
  }
  
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
  
  /* Responsive classes */
  @media (max-width: 768px) {
    .dp-player-container {
      /* Mobile-specific adjustments */
    }
  }
`,YS={name:"forest",primary:"#2d5d2a",secondary:"#3b8c37",accent:"#68bf63",background:"#0f1d0e",surface:"#182f17",text:"#ffffff",textSecondary:"#c0c0c0",error:"#e57373",success:"#81c784"},QS=()=>P.jsxs(Bv,{theme:YS,children:[P.jsx(KS,{}),P.jsx(Qv,{children:P.jsx(BS,{})})]});Fa.createRoot(document.getElementById("root")).render(P.jsx(oe.StrictMode,{children:P.jsx(QS,{})}));
