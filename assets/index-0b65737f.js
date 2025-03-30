(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function u1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hp={exports:{}},Is={},Up={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qi=Symbol.for("react.element"),d1=Symbol.for("react.portal"),f1=Symbol.for("react.fragment"),p1=Symbol.for("react.strict_mode"),h1=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),g1=Symbol.for("react.context"),y1=Symbol.for("react.forward_ref"),v1=Symbol.for("react.suspense"),x1=Symbol.for("react.memo"),w1=Symbol.for("react.lazy"),ed=Symbol.iterator;function b1(e){return e===null||typeof e!="object"?null:(e=ed&&e[ed]||e["@@iterator"],typeof e=="function"?e:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gp=Object.assign,Yp={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Wp}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kp(){}Kp.prototype=Ur.prototype;function $c(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Wp}var Mc=$c.prototype=new Kp;Mc.constructor=$c;Gp(Mc,Ur.prototype);Mc.isPureReactComponent=!0;var td=Array.isArray,Xp=Object.prototype.hasOwnProperty,Rc={current:null},Qp={key:!0,ref:!0,__self:!0,__source:!0};function qp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xp.call(t,r)&&!Qp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qi,type:e,key:o,ref:s,props:i,_owner:Rc.current}}function S1(e,t){return{$$typeof:Qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qi}function k1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nd=/\/+/g;function ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?k1(""+e.key):t.toString(36)}function zo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qi:case d1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ba(s,0):r,td(i)?(n="",e!=null&&(n=e.replace(nd,"$&/")+"/"),zo(i,t,n,"",function(c){return c})):i!=null&&(jc(i)&&(i=S1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(nd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",td(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ba(o,a);s+=zo(o,t,n,l,i)}else if(l=b1(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ba(o,a++),s+=zo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function lo(e,t,n){if(e==null)return e;var r=[],i=0;return zo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function C1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Lo={transition:null},E1={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:Rc};function Zp(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:lo,forEach:function(e,t,n){lo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lo(e,function(){t++}),t},toArray:function(e){return lo(e,function(t){return t})||[]},only:function(e){if(!jc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Ur;X.Fragment=f1;X.Profiler=h1;X.PureComponent=$c;X.StrictMode=p1;X.Suspense=v1;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E1;X.act=Zp;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Rc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xp.call(t,l)&&!Qp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Qi,type:e.type,key:i,ref:o,props:r,_owner:s}};X.createContext=function(e){return e={$$typeof:g1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:m1,_context:e},e.Consumer=e};X.createElement=qp;X.createFactory=function(e){var t=qp.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:y1,render:e}};X.isValidElement=jc;X.lazy=function(e){return{$$typeof:w1,_payload:{_status:-1,_result:e},_init:C1}};X.memo=function(e,t){return{$$typeof:x1,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Lo.transition;Lo.transition={};try{e()}finally{Lo.transition=t}};X.unstable_act=Zp;X.useCallback=function(e,t){return Ge.current.useCallback(e,t)};X.useContext=function(e){return Ge.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ge.current.useEffect(e,t)};X.useId=function(){return Ge.current.useId()};X.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ge.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};X.useRef=function(e){return Ge.current.useRef(e)};X.useState=function(e){return Ge.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ge.current.useTransition()};X.version="18.3.1";Up.exports=X;var b=Up.exports;const he=u1(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1=b,T1=Symbol.for("react.element"),A1=Symbol.for("react.fragment"),$1=Object.prototype.hasOwnProperty,M1=P1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R1={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)$1.call(t,r)&&!R1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:T1,type:e,key:o,ref:s,props:i,_owner:M1.current}}Is.Fragment=A1;Is.jsx=Jp;Is.jsxs=Jp;Hp.exports=Is;var y=Hp.exports,fl={},eh={exports:{}},ot={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,N){var R=z.length;z.push(N);e:for(;0<R;){var M=R-1>>>1,_=z[M];if(0<i(_,N))z[M]=N,z[R]=_,R=M;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var N=z[0],R=z.pop();if(R!==N){z[0]=R;e:for(var M=0,_=z.length,F=_>>>1;M<F;){var Y=2*(M+1)-1,J=z[Y],se=Y+1,fe=z[se];if(0>i(J,R))se<_&&0>i(fe,J)?(z[M]=fe,z[se]=R,M=se):(z[M]=J,z[Y]=R,M=Y);else if(se<_&&0>i(fe,R))z[M]=fe,z[se]=R,M=se;else break e}}return N}function i(z,N){var R=z.sortIndex-N.sortIndex;return R!==0?R:z.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,f=3,m=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=z)r(c),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(c)}}function w(z){if(x=!1,p(z),!v)if(n(l)!==null)v=!0,Z(C);else{var N=n(c);N!==null&&oe(w,N.startTime-z)}}function C(z,N){v=!1,x&&(x=!1,g(T),T=-1),m=!0;var R=f;try{for(p(N),d=n(l);d!==null&&(!(d.expirationTime>N)||z&&!U());){var M=d.callback;if(typeof M=="function"){d.callback=null,f=d.priorityLevel;var _=M(d.expirationTime<=N);N=e.unstable_now(),typeof _=="function"?d.callback=_:d===n(l)&&r(l),p(N)}else r(l);d=n(l)}if(d!==null)var F=!0;else{var Y=n(c);Y!==null&&oe(w,Y.startTime-N),F=!1}return F}finally{d=null,f=R,m=!1}}var P=!1,E=null,T=-1,L=5,j=-1;function U(){return!(e.unstable_now()-j<L)}function K(){if(E!==null){var z=e.unstable_now();j=z;var N=!0;try{N=E(!0,z)}finally{N?G():(P=!1,E=null)}}else P=!1}var G;if(typeof h=="function")G=function(){h(K)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,Pe=Q.port2;Q.port1.onmessage=K,G=function(){Pe.postMessage(null)}}else G=function(){S(K,0)};function Z(z){E=z,P||(P=!0,G())}function oe(z,N){T=S(function(){z(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Z(C))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var R=f;f=N;try{return z()}finally{f=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,N){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var R=f;f=z;try{return N()}finally{f=R}},e.unstable_scheduleCallback=function(z,N,R){var M=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?M+R:M):R=M,z){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=R+_,z={id:u++,callback:N,priorityLevel:z,startTime:R,expirationTime:_,sortIndex:-1},R>M?(z.sortIndex=R,t(c,z),n(l)===null&&z===n(c)&&(x?(g(T),T=-1):x=!0,oe(w,R-M))):(z.sortIndex=_,t(l,z),v||m||(v=!0,Z(C))),z},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(z){var N=f;return function(){var R=f;f=N;try{return z.apply(this,arguments)}finally{f=R}}}})(nh);th.exports=nh;var j1=th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=b,rt=j1;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rh=new Set,Ai={};function Jn(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(Ai[e]=t,e=0;e<t.length;e++)rh.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=Object.prototype.hasOwnProperty,L1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},id={};function _1(e){return pl.call(id,e)?!0:pl.call(rd,e)?!1:L1.test(e)?id[e]=!0:(rd[e]=!0,!1)}function D1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N1(e,t,n,r){if(t===null||typeof t>"u"||D1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var zc=/[\-:]([a-z])/g;function Lc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zc,Lc);De[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zc,Lc);De[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zc,Lc);De[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function _c(e,t,n,r){var i=De.hasOwnProperty(t)?De[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N1(t,n,i,r)&&(n=null),r||i===null?_1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Dc=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),oh=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),Ic=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),sh=Symbol.for("react.offscreen"),od=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=od&&e[od]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Sa;function si(e){if(Sa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sa=t&&t[1]||""}return`
`+Sa+e}var ka=!1;function Ca(e,t){if(!e||ka)return"";ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ka=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?si(e):""}function I1(e){switch(e.tag){case 5:return si(e.type);case 16:return si("Lazy");case 13:return si("Suspense");case 19:return si("SuspenseList");case 0:case 2:case 15:return e=Ca(e.type,!1),e;case 11:return e=Ca(e.type.render,!1),e;case 1:return e=Ca(e.type,!0),e;default:return""}}function yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case sr:return"Portal";case hl:return"Profiler";case Dc:return"StrictMode";case ml:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oh:return(e.displayName||"Context")+".Consumer";case ih:return(e._context.displayName||"Context")+".Provider";case Nc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ic:return t=e.displayName||null,t!==null?t:yl(e.type)||"Memo";case nn:t=e._payload,e=e._init;try{return yl(e(t))}catch{}}return null}function O1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yl(t);case 8:return t===Dc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ah(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V1(e){var t=ah(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uo(e){e._valueTracker||(e._valueTracker=V1(e))}function lh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ah(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ts(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ch(e,t){t=t.checked,t!=null&&_c(e,"checked",t,!1)}function xl(e,t){ch(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&wl(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ad(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wl(e,t,n){(t!=="number"||ts(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ld(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(ai(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function uh(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,fh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $i(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F1=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){F1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function ph(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function hh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ph(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var B1=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(B1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function Oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,Cr=null,Er=null;function ud(e){if(e=Ji(e)){if(typeof Pl!="function")throw Error($(280));var t=e.stateNode;t&&(t=Hs(t),Pl(e.stateNode,e.type,t))}}function mh(e){Cr?Er?Er.push(e):Er=[e]:Cr=e}function gh(){if(Cr){var e=Cr,t=Er;if(Er=Cr=null,ud(e),t)for(e=0;e<t.length;e++)ud(t[e])}}function yh(e,t){return e(t)}function vh(){}var Ea=!1;function xh(e,t,n){if(Ea)return e(t,n);Ea=!0;try{return yh(e,t,n)}finally{Ea=!1,(Cr!==null||Er!==null)&&(vh(),gh())}}function Mi(e,t){var n=e.stateNode;if(n===null)return null;var r=Hs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Tl=!1;if(Ut)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Tl=!1}function H1(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var pi=!1,ns=null,rs=!1,Al=null,U1={onError:function(e){pi=!0,ns=e}};function W1(e,t,n,r,i,o,s,a,l){pi=!1,ns=null,H1.apply(U1,arguments)}function G1(e,t,n,r,i,o,s,a,l){if(W1.apply(this,arguments),pi){if(pi){var c=ns;pi=!1,ns=null}else throw Error($(198));rs||(rs=!0,Al=c)}}function er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dd(e){if(er(e)!==e)throw Error($(188))}function Y1(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return dd(i),e;if(o===r)return dd(i),t;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function bh(e){return e=Y1(e),e!==null?Sh(e):null}function Sh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sh(e);if(t!==null)return t;e=e.sibling}return null}var kh=rt.unstable_scheduleCallback,fd=rt.unstable_cancelCallback,K1=rt.unstable_shouldYield,X1=rt.unstable_requestPaint,Se=rt.unstable_now,Q1=rt.unstable_getCurrentPriorityLevel,Vc=rt.unstable_ImmediatePriority,Ch=rt.unstable_UserBlockingPriority,is=rt.unstable_NormalPriority,q1=rt.unstable_LowPriority,Eh=rt.unstable_IdlePriority,Os=null,Mt=null;function Z1(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Os,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:ty,J1=Math.log,ey=Math.LN2;function ty(e){return e>>>=0,e===0?32:31-(J1(e)/ey|0)|0}var po=64,ho=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function os(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=li(a):(o&=s,o!==0&&(r=li(o)))}else s=n&~i,s!==0?r=li(s):o!==0&&(r=li(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function ny(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-bt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=ny(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ph(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function Pa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function iy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Fc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function Th(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ah,Bc,$h,Mh,Rh,Ml=!1,mo=[],un=null,dn=null,fn=null,Ri=new Map,ji=new Map,sn=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ji(t),t!==null&&Bc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sy(e,t,n,r,i){switch(t){case"focusin":return un=qr(un,e,t,n,r,i),!0;case"dragenter":return dn=qr(dn,e,t,n,r,i),!0;case"mouseover":return fn=qr(fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ri.set(o,qr(Ri.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ji.set(o,qr(ji.get(o)||null,e,t,n,r,i)),!0}return!1}function jh(e){var t=On(e.target);if(t!==null){var n=er(t);if(n!==null){if(t=n.tag,t===13){if(t=wh(n),t!==null){e.blockedOn=t,Rh(e.priority,function(){$h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=Ji(n),t!==null&&Bc(t),e.blockedOn=n,!1;t.shift()}return!0}function hd(e,t,n){_o(e)&&n.delete(t)}function ay(){Ml=!1,un!==null&&_o(un)&&(un=null),dn!==null&&_o(dn)&&(dn=null),fn!==null&&_o(fn)&&(fn=null),Ri.forEach(hd),ji.forEach(hd)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ml||(Ml=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,ay)))}function zi(e){function t(i){return Zr(i,e)}if(0<mo.length){Zr(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&Zr(un,e),dn!==null&&Zr(dn,e),fn!==null&&Zr(fn,e),Ri.forEach(t),ji.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)jh(n),n.blockedOn===null&&sn.shift()}var Pr=Kt.ReactCurrentBatchConfig,ss=!0;function ly(e,t,n,r){var i=ie,o=Pr.transition;Pr.transition=null;try{ie=1,Hc(e,t,n,r)}finally{ie=i,Pr.transition=o}}function cy(e,t,n,r){var i=ie,o=Pr.transition;Pr.transition=null;try{ie=4,Hc(e,t,n,r)}finally{ie=i,Pr.transition=o}}function Hc(e,t,n,r){if(ss){var i=Rl(e,t,n,r);if(i===null)Da(e,t,r,as,n),pd(e,r);else if(sy(i,e,t,n,r))r.stopPropagation();else if(pd(e,r),t&4&&-1<oy.indexOf(e)){for(;i!==null;){var o=Ji(i);if(o!==null&&Ah(o),o=Rl(e,t,n,r),o===null&&Da(e,t,r,as,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Da(e,t,r,null,n)}}var as=null;function Rl(e,t,n,r){if(as=null,e=Oc(r),e=On(e),e!==null)if(t=er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return as=e,null}function zh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q1()){case Vc:return 1;case Ch:return 4;case is:case q1:return 16;case Eh:return 536870912;default:return 16}default:return 16}}var ln=null,Uc=null,Do=null;function Lh(){if(Do)return Do;var e,t=Uc,n=t.length,r,i="value"in ln?ln.value:ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Do=i.slice(e,1<r?1-r:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function md(){return!1}function st(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?go:md,this.isPropagationStopped=md,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=st(Wr),Zi=ve({},Wr,{view:0,detail:0}),uy=st(Zi),Ta,Aa,Jr,Vs=ve({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Ta=e.screenX-Jr.screenX,Aa=e.screenY-Jr.screenY):Aa=Ta=0,Jr=e),Ta)},movementY:function(e){return"movementY"in e?e.movementY:Aa}}),gd=st(Vs),dy=ve({},Vs,{dataTransfer:0}),fy=st(dy),py=ve({},Zi,{relatedTarget:0}),$a=st(py),hy=ve({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),my=st(hy),gy=ve({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yy=st(gy),vy=ve({},Wr,{data:0}),yd=st(vy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=by[e])?!!t[e]:!1}function Gc(){return Sy}var ky=ve({},Zi,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cy=st(ky),Ey=ve({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=st(Ey),Py=ve({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Ty=st(Py),Ay=ve({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$y=st(Ay),My=ve({},Vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=st(My),jy=[9,13,27,32],Yc=Ut&&"CompositionEvent"in window,hi=null;Ut&&"documentMode"in document&&(hi=document.documentMode);var zy=Ut&&"TextEvent"in window&&!hi,_h=Ut&&(!Yc||hi&&8<hi&&11>=hi),xd=String.fromCharCode(32),wd=!1;function Dh(e,t){switch(e){case"keyup":return jy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function Ly(e,t){switch(e){case"compositionend":return Nh(t);case"keypress":return t.which!==32?null:(wd=!0,xd);case"textInput":return e=t.data,e===xd&&wd?null:e;default:return null}}function _y(e,t){if(lr)return e==="compositionend"||!Yc&&Dh(e,t)?(e=Lh(),Do=Uc=ln=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _h&&t.locale!=="ko"?null:t.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dy[e.type]:t==="textarea"}function Ih(e,t,n,r){mh(r),t=ls(t,"onChange"),0<t.length&&(n=new Wc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Li=null;function Ny(e){Xh(e,0)}function Fs(e){var t=dr(e);if(lh(t))return e}function Iy(e,t){if(e==="change")return t}var Oh=!1;if(Ut){var Ma;if(Ut){var Ra="oninput"in document;if(!Ra){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Ra=typeof Sd.oninput=="function"}Ma=Ra}else Ma=!1;Oh=Ma&&(!document.documentMode||9<document.documentMode)}function kd(){mi&&(mi.detachEvent("onpropertychange",Vh),Li=mi=null)}function Vh(e){if(e.propertyName==="value"&&Fs(Li)){var t=[];Ih(t,Li,e,Oc(e)),xh(Ny,t)}}function Oy(e,t,n){e==="focusin"?(kd(),mi=t,Li=n,mi.attachEvent("onpropertychange",Vh)):e==="focusout"&&kd()}function Vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fs(Li)}function Fy(e,t){if(e==="click")return Fs(t)}function By(e,t){if(e==="input"||e==="change")return Fs(t)}function Hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Hy;function _i(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pl.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=Cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function Fh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bh(){for(var e=window,t=ts();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ts(e.document)}return t}function Kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uy(e){var t=Bh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fh(n.ownerDocument.documentElement,n)){if(r!==null&&Kc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ed(n,o);var s=Ed(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wy=Ut&&"documentMode"in document&&11>=document.documentMode,cr=null,jl=null,gi=null,zl=!1;function Pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zl||cr==null||cr!==ts(r)||(r=cr,"selectionStart"in r&&Kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&_i(gi,r)||(gi=r,r=ls(jl,"onSelect"),0<r.length&&(t=new Wc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},ja={},Hh={};Ut&&(Hh=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Bs(e){if(ja[e])return ja[e];if(!ur[e])return e;var t=ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hh)return ja[e]=t[n];return e}var Uh=Bs("animationend"),Wh=Bs("animationiteration"),Gh=Bs("animationstart"),Yh=Bs("transitionend"),Kh=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){Kh.set(e,t),Jn(t,[e])}for(var za=0;za<Td.length;za++){var La=Td[za],Gy=La.toLowerCase(),Yy=La[0].toUpperCase()+La.slice(1);$n(Gy,"on"+Yy)}$n(Uh,"onAnimationEnd");$n(Wh,"onAnimationIteration");$n(Gh,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Yh,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Ad(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,G1(r,t,void 0,e),e.currentTarget=null}function Xh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ad(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ad(i,a,c),o=l}}}if(rs)throw e=Al,rs=!1,Al=null,e}function ce(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Qh(t,e,2,!1),n.add(r))}function _a(e,t,n){var r=0;t&&(r|=4),Qh(n,e,r,t)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[vo]){e[vo]=!0,rh.forEach(function(n){n!=="selectionchange"&&(Ky.has(n)||_a(n,!1,e),_a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vo]||(t[vo]=!0,_a("selectionchange",!1,t))}}function Qh(e,t,n,r){switch(zh(t)){case 1:var i=ly;break;case 4:i=cy;break;default:i=Hc}n=i.bind(null,t,n,e),i=void 0,!Tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Da(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=On(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}xh(function(){var c=o,u=Oc(n),d=[];e:{var f=Kh.get(e);if(f!==void 0){var m=Wc,v=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":m=Cy;break;case"focusin":v="focus",m=$a;break;case"focusout":v="blur",m=$a;break;case"beforeblur":case"afterblur":m=$a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ty;break;case Uh:case Wh:case Gh:m=my;break;case Yh:m=$y;break;case"scroll":m=uy;break;case"wheel":m=Ry;break;case"copy":case"cut":case"paste":m=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vd}var x=(t&4)!==0,S=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var h=c,p;h!==null;){p=h;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,g!==null&&(w=Mi(h,g),w!=null&&x.push(Ni(h,w,p)))),S)break;h=h.return}0<x.length&&(f=new m(f,v,null,n,u),d.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==El&&(v=n.relatedTarget||n.fromElement)&&(On(v)||v[Wt]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?On(v):null,v!==null&&(S=er(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(x=gd,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=vd,w="onPointerLeave",g="onPointerEnter",h="pointer"),S=m==null?f:dr(m),p=v==null?f:dr(v),f=new x(w,h+"leave",m,n,u),f.target=S,f.relatedTarget=p,w=null,On(u)===c&&(x=new x(g,h+"enter",v,n,u),x.target=p,x.relatedTarget=S,w=x),S=w,m&&v)t:{for(x=m,g=v,h=0,p=x;p;p=rr(p))h++;for(p=0,w=g;w;w=rr(w))p++;for(;0<h-p;)x=rr(x),h--;for(;0<p-h;)g=rr(g),p--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=rr(x),g=rr(g)}x=null}else x=null;m!==null&&$d(d,f,m,x,!1),v!==null&&S!==null&&$d(d,S,v,x,!0)}}e:{if(f=c?dr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Iy;else if(bd(f))if(Oh)C=By;else{C=Vy;var P=Oy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Fy);if(C&&(C=C(e,c))){Ih(d,C,n,u);break e}P&&P(e,f,c),e==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&wl(f,"number",f.value)}switch(P=c?dr(c):window,e){case"focusin":(bd(P)||P.contentEditable==="true")&&(cr=P,jl=c,gi=null);break;case"focusout":gi=jl=cr=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,Pd(d,n,u);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":Pd(d,n,u)}var E;if(Yc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else lr?Dh(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(_h&&n.locale!=="ko"&&(lr||T!=="onCompositionStart"?T==="onCompositionEnd"&&lr&&(E=Lh()):(ln=u,Uc="value"in ln?ln.value:ln.textContent,lr=!0)),P=ls(c,T),0<P.length&&(T=new yd(T,e,null,n,u),d.push({event:T,listeners:P}),E?T.data=E:(E=Nh(n),E!==null&&(T.data=E)))),(E=zy?Ly(e,n):_y(e,n))&&(c=ls(c,"onBeforeInput"),0<c.length&&(u=new yd("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}Xh(d,t)})}function Ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ls(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mi(e,n),o!=null&&r.unshift(Ni(e,o,i)),o=Mi(e,t),o!=null&&r.push(Ni(e,o,i))),e=e.return}return r}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $d(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Mi(n,o),l!=null&&s.unshift(Ni(n,l,a))):i||(l=Mi(n,o),l!=null&&s.push(Ni(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xy=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function Md(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(Qy,"")}function xo(e,t,n){if(t=Md(t),Md(e)!==t&&n)throw Error($(425))}function cs(){}var Ll=null,_l=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,Rd=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof Rd<"u"?function(e){return Rd.resolve(null).then(e).catch(Jy)}:Nl;function Jy(e){setTimeout(function(){throw e})}function Na(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),$t="__reactFiber$"+Gr,Ii="__reactProps$"+Gr,Wt="__reactContainer$"+Gr,Il="__reactEvents$"+Gr,ev="__reactListeners$"+Gr,tv="__reactHandles$"+Gr;function On(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jd(e);e!==null;){if(n=e[$t])return n;e=jd(e)}return t}e=n,n=e.parentNode}return null}function Ji(e){return e=e[$t]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function Hs(e){return e[Ii]||null}var Ol=[],fr=-1;function Mn(e){return{current:e}}function de(e){0>fr||(e.current=Ol[fr],Ol[fr]=null,fr--)}function le(e,t){fr++,Ol[fr]=e.current,e.current=t}var En={},Fe=Mn(En),qe=Mn(!1),Yn=En;function Mr(e,t){var n=e.type.contextTypes;if(!n)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function us(){de(qe),de(Fe)}function zd(e,t,n){if(Fe.current!==En)throw Error($(168));le(Fe,t),le(qe,n)}function qh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,O1(e)||"Unknown",i));return ve({},n,r)}function ds(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Yn=Fe.current,le(Fe,e),le(qe,qe.current),!0}function Ld(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=qh(e,t,Yn),r.__reactInternalMemoizedMergedChildContext=e,de(qe),de(Fe),le(Fe,e)):de(qe),le(qe,n)}var It=null,Us=!1,Ia=!1;function Zh(e){It===null?It=[e]:It.push(e)}function nv(e){Us=!0,Zh(e)}function Rn(){if(!Ia&&It!==null){Ia=!0;var e=0,t=ie;try{var n=It;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Us=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),kh(Vc,Rn),i}finally{ie=t,Ia=!1}}return null}var pr=[],hr=0,fs=null,ps=0,ct=[],ut=0,Kn=null,Ot=1,Vt="";function Ln(e,t){pr[hr++]=ps,pr[hr++]=fs,fs=e,ps=t}function Jh(e,t,n){ct[ut++]=Ot,ct[ut++]=Vt,ct[ut++]=Kn,Kn=e;var r=Ot;e=Vt;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var o=32-bt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ot=1<<32-bt(t)+i|n<<i|r,Vt=o+e}else Ot=1<<o|n<<i|r,Vt=e}function Xc(e){e.return!==null&&(Ln(e,1),Jh(e,1,0))}function Qc(e){for(;e===fs;)fs=pr[--hr],pr[hr]=null,ps=pr[--hr],pr[hr]=null;for(;e===Kn;)Kn=ct[--ut],ct[ut]=null,Vt=ct[--ut],ct[ut]=null,Ot=ct[--ut],ct[ut]=null}var nt=null,tt=null,pe=!1,xt=null;function e0(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _d(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kn!==null?{id:Ot,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function Vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(pe){var t=tt;if(t){var n=t;if(!_d(e,t)){if(Vl(e))throw Error($(418));t=pn(n.nextSibling);var r=nt;t&&_d(e,t)?e0(r,n):(e.flags=e.flags&-4097|2,pe=!1,nt=e)}}else{if(Vl(e))throw Error($(418));e.flags=e.flags&-4097|2,pe=!1,nt=e}}}function Dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function wo(e){if(e!==nt)return!1;if(!pe)return Dd(e),pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=tt)){if(Vl(e))throw t0(),Error($(418));for(;t;)e0(e,t),t=pn(t.nextSibling)}if(Dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?pn(e.stateNode.nextSibling):null;return!0}function t0(){for(var e=tt;e;)e=pn(e.nextSibling)}function Rr(){tt=nt=null,pe=!1}function qc(e){xt===null?xt=[e]:xt.push(e)}var rv=Kt.ReactCurrentBatchConfig;function ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nd(e){var t=e._init;return t(e._payload)}function n0(e){function t(g,h){if(e){var p=g.deletions;p===null?(g.deletions=[h],g.flags|=16):p.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=yn(g,h),g.index=0,g.sibling=null,g}function o(g,h,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<h?(g.flags|=2,h):p):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,h,p,w){return h===null||h.tag!==6?(h=Wa(p,g.mode,w),h.return=g,h):(h=i(h,p),h.return=g,h)}function l(g,h,p,w){var C=p.type;return C===ar?u(g,h,p.props.children,w,p.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nn&&Nd(C)===h.type)?(w=i(h,p.props),w.ref=ei(g,h,p),w.return=g,w):(w=Uo(p.type,p.key,p.props,null,g.mode,w),w.ref=ei(g,h,p),w.return=g,w)}function c(g,h,p,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=Ga(p,g.mode,w),h.return=g,h):(h=i(h,p.children||[]),h.return=g,h)}function u(g,h,p,w,C){return h===null||h.tag!==7?(h=Wn(p,g.mode,w,C),h.return=g,h):(h=i(h,p),h.return=g,h)}function d(g,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Wa(""+h,g.mode,p),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case co:return p=Uo(h.type,h.key,h.props,null,g.mode,p),p.ref=ei(g,null,h),p.return=g,p;case sr:return h=Ga(h,g.mode,p),h.return=g,h;case nn:var w=h._init;return d(g,w(h._payload),p)}if(ai(h)||Xr(h))return h=Wn(h,g.mode,p,null),h.return=g,h;bo(g,h)}return null}function f(g,h,p,w){var C=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(g,h,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case co:return p.key===C?l(g,h,p,w):null;case sr:return p.key===C?c(g,h,p,w):null;case nn:return C=p._init,f(g,h,C(p._payload),w)}if(ai(p)||Xr(p))return C!==null?null:u(g,h,p,w,null);bo(g,p)}return null}function m(g,h,p,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(p)||null,a(h,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case co:return g=g.get(w.key===null?p:w.key)||null,l(h,g,w,C);case sr:return g=g.get(w.key===null?p:w.key)||null,c(h,g,w,C);case nn:var P=w._init;return m(g,h,p,P(w._payload),C)}if(ai(w)||Xr(w))return g=g.get(p)||null,u(h,g,w,C,null);bo(h,w)}return null}function v(g,h,p,w){for(var C=null,P=null,E=h,T=h=0,L=null;E!==null&&T<p.length;T++){E.index>T?(L=E,E=null):L=E.sibling;var j=f(g,E,p[T],w);if(j===null){E===null&&(E=L);break}e&&E&&j.alternate===null&&t(g,E),h=o(j,h,T),P===null?C=j:P.sibling=j,P=j,E=L}if(T===p.length)return n(g,E),pe&&Ln(g,T),C;if(E===null){for(;T<p.length;T++)E=d(g,p[T],w),E!==null&&(h=o(E,h,T),P===null?C=E:P.sibling=E,P=E);return pe&&Ln(g,T),C}for(E=r(g,E);T<p.length;T++)L=m(E,g,T,p[T],w),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?T:L.key),h=o(L,h,T),P===null?C=L:P.sibling=L,P=L);return e&&E.forEach(function(U){return t(g,U)}),pe&&Ln(g,T),C}function x(g,h,p,w){var C=Xr(p);if(typeof C!="function")throw Error($(150));if(p=C.call(p),p==null)throw Error($(151));for(var P=C=null,E=h,T=h=0,L=null,j=p.next();E!==null&&!j.done;T++,j=p.next()){E.index>T?(L=E,E=null):L=E.sibling;var U=f(g,E,j.value,w);if(U===null){E===null&&(E=L);break}e&&E&&U.alternate===null&&t(g,E),h=o(U,h,T),P===null?C=U:P.sibling=U,P=U,E=L}if(j.done)return n(g,E),pe&&Ln(g,T),C;if(E===null){for(;!j.done;T++,j=p.next())j=d(g,j.value,w),j!==null&&(h=o(j,h,T),P===null?C=j:P.sibling=j,P=j);return pe&&Ln(g,T),C}for(E=r(g,E);!j.done;T++,j=p.next())j=m(E,g,T,j.value,w),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?T:j.key),h=o(j,h,T),P===null?C=j:P.sibling=j,P=j);return e&&E.forEach(function(K){return t(g,K)}),pe&&Ln(g,T),C}function S(g,h,p,w){if(typeof p=="object"&&p!==null&&p.type===ar&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case co:e:{for(var C=p.key,P=h;P!==null;){if(P.key===C){if(C=p.type,C===ar){if(P.tag===7){n(g,P.sibling),h=i(P,p.props.children),h.return=g,g=h;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nn&&Nd(C)===P.type){n(g,P.sibling),h=i(P,p.props),h.ref=ei(g,P,p),h.return=g,g=h;break e}n(g,P);break}else t(g,P);P=P.sibling}p.type===ar?(h=Wn(p.props.children,g.mode,w,p.key),h.return=g,g=h):(w=Uo(p.type,p.key,p.props,null,g.mode,w),w.ref=ei(g,h,p),w.return=g,g=w)}return s(g);case sr:e:{for(P=p.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(g,h.sibling),h=i(h,p.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Ga(p,g.mode,w),h.return=g,g=h}return s(g);case nn:return P=p._init,S(g,h,P(p._payload),w)}if(ai(p))return v(g,h,p,w);if(Xr(p))return x(g,h,p,w);bo(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,p),h.return=g,g=h):(n(g,h),h=Wa(p,g.mode,w),h.return=g,g=h),s(g)):n(g,h)}return S}var jr=n0(!0),r0=n0(!1),hs=Mn(null),ms=null,mr=null,Zc=null;function Jc(){Zc=mr=ms=null}function eu(e){var t=hs.current;de(hs),e._currentValue=t}function Bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){ms=e,Zc=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(Zc!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(ms===null)throw Error($(308));mr=e,ms.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var Vn=null;function tu(e){Vn===null?Vn=[e]:Vn.push(e)}function i0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,tu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,tu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fc(e,n)}}function Id(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function gs(e,t,n,r){var i=e.updateQueue;rn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,m=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=ve({},d,f);break e;case 2:rn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qn|=s,e.lanes=s,e.memoizedState=d}}function Od(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var eo={},Rt=Mn(eo),Oi=Mn(eo),Vi=Mn(eo);function Fn(e){if(e===eo)throw Error($(174));return e}function ru(e,t){switch(le(Vi,t),le(Oi,e),le(Rt,eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}de(Rt),le(Rt,t)}function zr(){de(Rt),de(Oi),de(Vi)}function s0(e){Fn(Vi.current);var t=Fn(Rt.current),n=Sl(t,e.type);t!==n&&(le(Oi,e),le(Rt,n))}function iu(e){Oi.current===e&&(de(Rt),de(Oi))}var me=Mn(0);function ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oa=[];function ou(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var Oo=Kt.ReactCurrentDispatcher,Va=Kt.ReactCurrentBatchConfig,Xn=0,ye=null,Ae=null,Me=null,vs=!1,yi=!1,Fi=0,iv=0;function Ne(){throw Error($(321))}function su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function au(e,t,n,r,i,o){if(Xn=o,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?lv:cv,e=n(r,i),yi){o=0;do{if(yi=!1,Fi=0,25<=o)throw Error($(301));o+=1,Me=Ae=null,t.updateQueue=null,Oo.current=uv,e=n(r,i)}while(yi)}if(Oo.current=xs,t=Ae!==null&&Ae.next!==null,Xn=0,Me=Ae=ye=null,vs=!1,t)throw Error($(300));return e}function lu(){var e=Fi!==0;return Fi=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ye.memoizedState=Me=e:Me=Me.next=e,Me}function ht(){if(Ae===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Me===null?ye.memoizedState:Me.next;if(t!==null)Me=t,Ae=e;else{if(e===null)throw Error($(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Me===null?ye.memoizedState=Me=e:Me=Me.next=e}return Me}function Bi(e,t){return typeof t=="function"?t(e):t}function Fa(e){var t=ht(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Xn&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,ye.lanes|=u,Qn|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Ct(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ye.lanes|=o,Qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ba(e){var t=ht(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ct(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function a0(){}function l0(e,t){var n=ye,r=ht(),i=t(),o=!Ct(r.memoizedState,i);if(o&&(r.memoizedState=i,Qe=!0),r=r.queue,cu(d0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Hi(9,u0.bind(null,n,r,i,t),void 0,null),ze===null)throw Error($(349));Xn&30||c0(n,t,i)}return i}function c0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function u0(e,t,n,r){t.value=n,t.getSnapshot=r,f0(t)&&p0(e)}function d0(e,t,n){return n(function(){f0(t)&&p0(e)})}function f0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function p0(e){var t=Gt(e,1);t!==null&&St(t,e,1,-1)}function Vd(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},t.queue=e,e=e.dispatch=av.bind(null,ye,e),[t.memoizedState,e]}function Hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function h0(){return ht().memoizedState}function Vo(e,t,n,r){var i=Tt();ye.flags|=e,i.memoizedState=Hi(1|t,n,void 0,r===void 0?null:r)}function Ws(e,t,n,r){var i=ht();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var s=Ae.memoizedState;if(o=s.destroy,r!==null&&su(r,s.deps)){i.memoizedState=Hi(t,n,o,r);return}}ye.flags|=e,i.memoizedState=Hi(1|t,n,o,r)}function Fd(e,t){return Vo(8390656,8,e,t)}function cu(e,t){return Ws(2048,8,e,t)}function m0(e,t){return Ws(4,2,e,t)}function g0(e,t){return Ws(4,4,e,t)}function y0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function v0(e,t,n){return n=n!=null?n.concat([e]):null,Ws(4,4,y0.bind(null,t,e),n)}function uu(){}function x0(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&su(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function w0(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&su(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function b0(e,t,n){return Xn&21?(Ct(n,t)||(n=Ph(),ye.lanes|=n,Qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function ov(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=Va.transition;Va.transition={};try{e(!1),t()}finally{ie=n,Va.transition=r}}function S0(){return ht().memoizedState}function sv(e,t,n){var r=gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k0(e))C0(t,n);else if(n=i0(e,t,n,r),n!==null){var i=We();St(n,e,r,i),E0(n,t,r)}}function av(e,t,n){var r=gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(e))C0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ct(a,s)){var l=t.interleaved;l===null?(i.next=i,tu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=i0(e,t,i,r),n!==null&&(i=We(),St(n,e,r,i),E0(n,t,r))}}function k0(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function C0(e,t){yi=vs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fc(e,n)}}var xs={readContext:pt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},lv={readContext:pt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Fd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4194308,4,y0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sv.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Vd,useDebugValue:uu,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Vd(!1),t=e[0];return e=ov.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=Tt();if(pe){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),ze===null)throw Error($(349));Xn&30||c0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fd(d0.bind(null,r,o,e),[e]),r.flags|=2048,Hi(9,u0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Tt(),t=ze.identifierPrefix;if(pe){var n=Vt,r=Ot;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=iv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cv={readContext:pt,useCallback:x0,useContext:pt,useEffect:cu,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:w0,useReducer:Fa,useRef:h0,useState:function(){return Fa(Bi)},useDebugValue:uu,useDeferredValue:function(e){var t=ht();return b0(t,Ae.memoizedState,e)},useTransition:function(){var e=Fa(Bi)[0],t=ht().memoizedState;return[e,t]},useMutableSource:a0,useSyncExternalStore:l0,useId:S0,unstable_isNewReconciler:!1},uv={readContext:pt,useCallback:x0,useContext:pt,useEffect:cu,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:w0,useReducer:Ba,useRef:h0,useState:function(){return Ba(Bi)},useDebugValue:uu,useDeferredValue:function(e){var t=ht();return Ae===null?t.memoizedState=e:b0(t,Ae.memoizedState,e)},useTransition:function(){var e=Ba(Bi)[0],t=ht().memoizedState;return[e,t]},useMutableSource:a0,useSyncExternalStore:l0,useId:S0,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=gn(e),o=Bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(St(t,e,i,r),Io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=gn(e),o=Bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(St(t,e,i,r),Io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=gn(e),i=Bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(St(t,e,r,n),Io(t,e,r))}};function Bd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!_i(n,r)||!_i(i,o):!0}function P0(e,t,n){var r=!1,i=En,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=Ze(t)?Yn:Fe.current,r=t.contextTypes,o=(r=r!=null)?Mr(e,i):En),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},nu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=Ze(t)?Yn:Fe.current,i.context=Mr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Gs.enqueueReplaceState(i,i.state,null),gs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var n="",r=t;do n+=I1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ha(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dv=typeof WeakMap=="function"?WeakMap:Map;function T0(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bs||(bs=!0,tc=r),Wl(e,t)},n}function A0(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Wl(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ud(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ev.bind(null,e,t,n),t.then(e,e))}function Wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e)}var fv=Kt.ReactCurrentOwner,Qe=!1;function Ue(e,t,n,r){t.child=e===null?r0(t,null,n,r):jr(t,e.child,n,r)}function Yd(e,t,n,r,i){n=n.render;var o=t.ref;return Tr(t,i),r=au(e,t,n,r,o,i),n=lu(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(pe&&n&&Xc(t),t.flags|=1,Ue(e,t,r,i),t.child)}function Kd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!vu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$0(e,t,o,r,i)):(e=Uo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(s,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=yn(o,r),e.ref=t.ref,e.return=t,t.child=e}function $0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_i(o,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return Gl(e,t,n,r,i)}function M0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(yr,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(yr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(yr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(yr,et),et|=r;return Ue(e,t,i,n),t.child}function R0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Gl(e,t,n,r,i){var o=Ze(n)?Yn:Fe.current;return o=Mr(t,o),Tr(t,i),n=au(e,t,n,r,o,i),r=lu(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(pe&&r&&Xc(t),t.flags|=1,Ue(e,t,n,i),t.child)}function Xd(e,t,n,r,i){if(Ze(n)){var o=!0;ds(t)}else o=!1;if(Tr(t,i),t.stateNode===null)Fo(e,t),P0(t,n,r),Ul(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=Ze(n)?Yn:Fe.current,c=Mr(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Hd(t,s,r,c),rn=!1;var f=t.memoizedState;s.state=f,gs(t,r,s,i),l=t.memoizedState,a!==r||f!==l||qe.current||rn?(typeof u=="function"&&(Hl(t,n,u,r),l=t.memoizedState),(a=rn||Bd(t,n,a,r,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,o0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:yt(t.type,a),s.props=c,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Ze(n)?Yn:Fe.current,l=Mr(t,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Hd(t,s,r,l),rn=!1,f=t.memoizedState,s.state=f,gs(t,r,s,i);var v=t.memoizedState;a!==d||f!==v||qe.current||rn?(typeof m=="function"&&(Hl(t,n,m,r),v=t.memoizedState),(c=rn||Bd(t,n,c,r,f,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,o,i)}function Yl(e,t,n,r,i,o){R0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ld(t,n,!1),Yt(e,t,o);r=t.stateNode,fv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=jr(t,e.child,null,o),t.child=jr(t,null,a,o)):Ue(e,t,a,o),t.memoizedState=r.state,i&&Ld(t,n,!0),t.child}function j0(e){var t=e.stateNode;t.pendingContext?zd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zd(e,t.context,!1),ru(e,t.containerInfo)}function Qd(e,t,n,r,i){return Rr(),qc(i),t.flags|=256,Ue(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function z0(e,t,n){var r=t.pendingProps,i=me.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(me,i&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xs(s,r,0,null),e=Wn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xl(n),t.memoizedState=Kl,e):du(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=yn(a,o):(o=Wn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Xl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return o=e.child,e=o.sibling,r=yn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function du(e,t){return t=Xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&qc(r),jr(t,e.child,null,n),e=du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ha(Error($(422))),So(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Xs({mode:"visible",children:r.children},i,0,null),o=Wn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&jr(t,e.child,null,s),t.child.memoizedState=Xl(s),t.memoizedState=Kl,o);if(!(t.mode&1))return So(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error($(419)),r=Ha(o,r,void 0),So(e,t,s,r)}if(a=(s&e.childLanes)!==0,Qe||a){if(r=ze,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Gt(e,i),St(r,e,i,-1))}return yu(),r=Ha(Error($(421))),So(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=pn(i.nextSibling),nt=t,pe=!0,xt=null,e!==null&&(ct[ut++]=Ot,ct[ut++]=Vt,ct[ut++]=Kn,Ot=e.id,Vt=e.overflow,Kn=t),t=du(t,r.children),t.flags|=4096,t)}function qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bl(e.return,t,n)}function Ua(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function L0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ue(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qd(e,n,t);else if(e.tag===19)qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ys(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ua(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ua(t,!0,n,null,o);break;case"together":Ua(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hv(e,t,n){switch(t.tag){case 3:j0(t),Rr();break;case 5:s0(t);break;case 1:Ze(t.type)&&ds(t);break;case 4:ru(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(hs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?z0(e,t,n):(le(me,me.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);le(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return L0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,M0(e,t,n)}return Yt(e,t,n)}var _0,Ql,D0,N0;_0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};D0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(Rt.current);var o=null;switch(n){case"input":i=vl(e,i),r=vl(e,r),o=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),o=[];break;case"textarea":i=bl(e,i),r=bl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cs)}kl(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ai.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ce("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};N0=function(e,t,n,r){n!==r&&(t.flags|=4)};function ti(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mv(e,t,n){var r=t.pendingProps;switch(Qc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ze(t.type)&&us(),Ie(t),null;case 3:return r=t.stateNode,zr(),de(qe),de(Fe),ou(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(ic(xt),xt=null))),Ql(e,t),Ie(t),null;case 5:iu(t);var i=Fn(Vi.current);if(n=t.type,e!==null&&t.stateNode!=null)D0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Ie(t),null}if(e=Fn(Rt.current),wo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$t]=t,r[Ii]=o,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)ce(ci[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":sd(r,o),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ce("invalid",r);break;case"textarea":ld(r,o),ce("invalid",r)}kl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),i=["children",""+a]):Ai.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ce("scroll",r)}switch(n){case"input":uo(r),ad(r,o,!0);break;case"textarea":uo(r),cd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=cs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[$t]=t,e[Ii]=r,_0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Cl(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)ce(ci[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":sd(e,r),i=vl(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ce("invalid",e);break;case"textarea":ld(e,r),i=bl(e,r),ce("invalid",e);break;default:i=r}kl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?hh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$i(e,l):typeof l=="number"&&$i(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ai.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ce("scroll",e):l!=null&&_c(e,o,l,s))}switch(n){case"input":uo(e),ad(e,r,!1);break;case"textarea":uo(e),cd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?kr(e,!!r.multiple,o,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=cs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)N0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=Fn(Vi.current),Fn(Rt.current),wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Ie(t),null;case 13:if(de(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&tt!==null&&t.mode&1&&!(t.flags&128))t0(),Rr(),t.flags|=98560,o=!1;else if(o=wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[$t]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else xt!==null&&(ic(xt),xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?$e===0&&($e=3):yu())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return zr(),Ql(e,t),e===null&&Di(t.stateNode.containerInfo),Ie(t),null;case 10:return eu(t.type._context),Ie(t),null;case 17:return Ze(t.type)&&us(),Ie(t),null;case 19:if(de(me),o=t.memoizedState,o===null)return Ie(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ti(o,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ys(e),s!==null){for(t.flags|=128,ti(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Se()>_r&&(t.flags|=128,r=!0,ti(o,!1),t.lanes=4194304)}else{if(!r)if(e=ys(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ti(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!pe)return Ie(t),null}else 2*Se()-o.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,ti(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Se(),t.sibling=null,n=me.current,le(me,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return gu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function gv(e,t){switch(Qc(t),t.tag){case 1:return Ze(t.type)&&us(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),de(qe),de(Fe),ou(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return iu(t),null;case 13:if(de(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(me),null;case 4:return zr(),null;case 10:return eu(t.type._context),null;case 22:case 23:return gu(),null;case 24:return null;default:return null}}var ko=!1,Ve=!1,yv=typeof WeakSet=="function"?WeakSet:Set,I=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){xe(e,t,r)}}var Zd=!1;function vv(e,t){if(Ll=ss,e=Bh(),Kc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===e)break t;if(f===n&&++c===i&&(a=s),f===o&&++u===r&&(l=s),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_l={focusedElem:e,selectionRange:n},ss=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:yt(t.type,x),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(w){xe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=Zd,Zd=!1,v}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ql(t,n,o)}i=i.next}while(i!==r)}}function Ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function I0(e){var t=e.alternate;t!==null&&(e.alternate=null,I0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[Ii],delete t[Il],delete t[ev],delete t[tv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function O0(e){return e.tag===5||e.tag===3||e.tag===4}function Jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||O0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cs));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ec(e,t,n),e=e.sibling;e!==null;)ec(e,t,n),e=e.sibling}var Le=null,vt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)V0(e,t,n),n=n.sibling}function V0(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Os,n)}catch{}switch(n.tag){case 5:Ve||gr(n,t);case 6:var r=Le,i=vt;Le=null,Zt(e,t,n),Le=r,vt=i,Le!==null&&(vt?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(vt?(e=Le,n=n.stateNode,e.nodeType===8?Na(e.parentNode,n):e.nodeType===1&&Na(e,n),zi(e)):Na(Le,n.stateNode));break;case 4:r=Le,i=vt,Le=n.stateNode.containerInfo,vt=!0,Zt(e,t,n),Le=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ql(n,t,s),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Ve&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Zt(e,t,n),Ve=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yv),t.forEach(function(r){var i=Tv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,vt=!1;break e;case 3:Le=a.stateNode.containerInfo,vt=!0;break e;case 4:Le=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(Le===null)throw Error($(160));V0(o,s,i),Le=null,vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){xe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)F0(t,e),t=t.sibling}function F0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Pt(e),r&4){try{vi(3,e,e.return),Ys(3,e)}catch(x){xe(e,e.return,x)}try{vi(5,e,e.return)}catch(x){xe(e,e.return,x)}}break;case 1:gt(t,e),Pt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(gt(t,e),Pt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{$i(i,"")}catch(x){xe(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ch(i,o),Cl(a,s);var c=Cl(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?hh(i,d):u==="dangerouslySetInnerHTML"?fh(i,d):u==="children"?$i(i,d):_c(i,u,d,c)}switch(a){case"input":xl(i,o);break;case"textarea":uh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?kr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?kr(i,!!o.multiple,o.defaultValue,!0):kr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ii]=o}catch(x){xe(e,e.return,x)}}break;case 6:if(gt(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){xe(e,e.return,x)}}break;case 3:if(gt(t,e),Pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(x){xe(e,e.return,x)}break;case 4:gt(t,e),Pt(e);break;case 13:gt(t,e),Pt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hu=Se())),r&4&&ef(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(c=Ve)||u,gt(t,e),Ve=c):gt(t,e),Pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(I=e,u=e.child;u!==null;){for(d=I=u;I!==null;){switch(f=I,m=f.child,f.tag){case 0:case 11:case 14:case 15:vi(4,f,f.return);break;case 1:gr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){xe(r,n,x)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){nf(d);continue}}m!==null?(m.return=f,I=m):nf(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ph("display",s))}catch(x){xe(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){xe(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gt(t,e),Pt(e),r&4&&ef(e);break;case 21:break;default:gt(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(O0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($i(i,""),r.flags&=-33);var o=Jd(e);ec(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Jd(e);Jl(e,a,s);break;default:throw Error($(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xv(e,t,n){I=e,B0(e)}function B0(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ko;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ve;a=ko;var c=Ve;if(ko=s,(Ve=l)&&!c)for(I=i;I!==null;)s=I,l=s.child,s.tag===22&&s.memoizedState!==null?rf(i):l!==null?(l.return=s,I=l):rf(i);for(;o!==null;)I=o,B0(o),o=o.sibling;I=i,ko=a,Ve=c}tf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):tf(e)}}function tf(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||Ys(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Od(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Od(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&zi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ve||t.flags&512&&Zl(t)}catch(f){xe(t,t.return,f)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function nf(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function rf(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ys(4,t)}catch(l){xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){xe(t,i,l)}}var o=t.return;try{Zl(t)}catch(l){xe(t,o,l)}break;case 5:var s=t.return;try{Zl(t)}catch(l){xe(t,s,l)}}}catch(l){xe(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var wv=Math.ceil,ws=Kt.ReactCurrentDispatcher,fu=Kt.ReactCurrentOwner,ft=Kt.ReactCurrentBatchConfig,ee=0,ze=null,Ee=null,_e=0,et=0,yr=Mn(0),$e=0,Ui=null,Qn=0,Ks=0,pu=0,xi=null,Ke=null,hu=0,_r=1/0,Dt=null,bs=!1,tc=null,mn=null,Co=!1,cn=null,Ss=0,wi=0,nc=null,Bo=-1,Ho=0;function We(){return ee&6?Se():Bo!==-1?Bo:Bo=Se()}function gn(e){return e.mode&1?ee&2&&_e!==0?_e&-_e:rv.transition!==null?(Ho===0&&(Ho=Ph()),Ho):(e=ie,e!==0||(e=window.event,e=e===void 0?16:zh(e.type)),e):1}function St(e,t,n,r){if(50<wi)throw wi=0,nc=null,Error($(185));qi(e,n,r),(!(ee&2)||e!==ze)&&(e===ze&&(!(ee&2)&&(Ks|=n),$e===4&&an(e,_e)),Je(e,r),n===1&&ee===0&&!(t.mode&1)&&(_r=Se()+500,Us&&Rn()))}function Je(e,t){var n=e.callbackNode;ry(e,t);var r=os(e,e===ze?_e:0);if(r===0)n!==null&&fd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fd(n),t===1)e.tag===0?nv(of.bind(null,e)):Zh(of.bind(null,e)),Zy(function(){!(ee&6)&&Rn()}),n=null;else{switch(Th(r)){case 1:n=Vc;break;case 4:n=Ch;break;case 16:n=is;break;case 536870912:n=Eh;break;default:n=is}n=Q0(n,H0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function H0(e,t){if(Bo=-1,Ho=0,ee&6)throw Error($(327));var n=e.callbackNode;if(Ar()&&e.callbackNode!==n)return null;var r=os(e,e===ze?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ks(e,r);else{t=r;var i=ee;ee|=2;var o=W0();(ze!==e||_e!==t)&&(Dt=null,_r=Se()+500,Un(e,t));do try{kv();break}catch(a){U0(e,a)}while(1);Jc(),ws.current=o,ee=i,Ee!==null?t=0:(ze=null,_e=0,t=$e)}if(t!==0){if(t===2&&(i=$l(e),i!==0&&(r=i,t=rc(e,i))),t===1)throw n=Ui,Un(e,0),an(e,r),Je(e,Se()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!bv(i)&&(t=ks(e,r),t===2&&(o=$l(e),o!==0&&(r=o,t=rc(e,o))),t===1))throw n=Ui,Un(e,0),an(e,r),Je(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:_n(e,Ke,Dt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=hu+500-Se(),10<t)){if(os(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl(_n.bind(null,e,Ke,Dt),t);break}_n(e,Ke,Dt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-bt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wv(r/1960))-r,10<r){e.timeoutHandle=Nl(_n.bind(null,e,Ke,Dt),r);break}_n(e,Ke,Dt);break;case 5:_n(e,Ke,Dt);break;default:throw Error($(329))}}}return Je(e,Se()),e.callbackNode===n?H0.bind(null,e):null}function rc(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=ks(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&ic(t)),e}function ic(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function bv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ct(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~pu,t&=~Ks,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function of(e){if(ee&6)throw Error($(327));Ar();var t=os(e,0);if(!(t&1))return Je(e,Se()),null;var n=ks(e,t);if(e.tag!==0&&n===2){var r=$l(e);r!==0&&(t=r,n=rc(e,r))}if(n===1)throw n=Ui,Un(e,0),an(e,t),Je(e,Se()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Ke,Dt),Je(e,Se()),null}function mu(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(_r=Se()+500,Us&&Rn())}}function qn(e){cn!==null&&cn.tag===0&&!(ee&6)&&Ar();var t=ee;ee|=1;var n=ft.transition,r=ie;try{if(ft.transition=null,ie=1,e)return e()}finally{ie=r,ft.transition=n,ee=t,!(ee&6)&&Rn()}}function gu(){et=yr.current,de(yr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qy(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Qc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&us();break;case 3:zr(),de(qe),de(Fe),ou();break;case 5:iu(r);break;case 4:zr();break;case 13:de(me);break;case 19:de(me);break;case 10:eu(r.type._context);break;case 22:case 23:gu()}n=n.return}if(ze=e,Ee=e=yn(e.current,null),_e=et=t,$e=0,Ui=null,pu=Ks=Qn=0,Ke=xi=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Vn=null}return e}function U0(e,t){do{var n=Ee;try{if(Jc(),Oo.current=xs,vs){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vs=!1}if(Xn=0,Me=Ae=ye=null,yi=!1,Fi=0,fu.current=null,n===null||n.return===null){$e=1,Ui=t,Ee=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=_e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Wd(s);if(m!==null){m.flags&=-257,Gd(m,s,a,o,t),m.mode&1&&Ud(o,c,t),t=m,l=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Ud(o,c,t),yu();break e}l=Error($(426))}}else if(pe&&a.mode&1){var S=Wd(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Gd(S,s,a,o,t),qc(Lr(l,a));break e}}o=l=Lr(l,a),$e!==4&&($e=2),xi===null?xi=[o]:xi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=T0(o,l,t);Id(o,g);break e;case 1:a=l;var h=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mn===null||!mn.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=A0(o,a,t);Id(o,w);break e}}o=o.return}while(o!==null)}Y0(n)}catch(C){t=C,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function W0(){var e=ws.current;return ws.current=xs,e===null?xs:e}function yu(){($e===0||$e===3||$e===2)&&($e=4),ze===null||!(Qn&268435455)&&!(Ks&268435455)||an(ze,_e)}function ks(e,t){var n=ee;ee|=2;var r=W0();(ze!==e||_e!==t)&&(Dt=null,Un(e,t));do try{Sv();break}catch(i){U0(e,i)}while(1);if(Jc(),ee=n,ws.current=r,Ee!==null)throw Error($(261));return ze=null,_e=0,$e}function Sv(){for(;Ee!==null;)G0(Ee)}function kv(){for(;Ee!==null&&!K1();)G0(Ee)}function G0(e){var t=X0(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Y0(e):Ee=t,fu.current=null}function Y0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gv(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Ee=null;return}}else if(n=mv(n,t,et),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);$e===0&&($e=5)}function _n(e,t,n){var r=ie,i=ft.transition;try{ft.transition=null,ie=1,Cv(e,t,n,r)}finally{ft.transition=i,ie=r}return null}function Cv(e,t,n,r){do Ar();while(cn!==null);if(ee&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(iy(e,o),e===ze&&(Ee=ze=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,Q0(is,function(){return Ar(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ft.transition,ft.transition=null;var s=ie;ie=1;var a=ee;ee|=4,fu.current=null,vv(e,n),F0(n,e),Uy(_l),ss=!!Ll,_l=Ll=null,e.current=n,xv(n),X1(),ee=a,ie=s,ft.transition=o}else e.current=n;if(Co&&(Co=!1,cn=e,Ss=i),o=e.pendingLanes,o===0&&(mn=null),Z1(n.stateNode),Je(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bs)throw bs=!1,e=tc,tc=null,e;return Ss&1&&e.tag!==0&&Ar(),o=e.pendingLanes,o&1?e===nc?wi++:(wi=0,nc=e):wi=0,Rn(),null}function Ar(){if(cn!==null){var e=Th(Ss),t=ft.transition,n=ie;try{if(ft.transition=null,ie=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,Ss=0,ee&6)throw Error($(331));var i=ee;for(ee|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(I=c;I!==null;){var u=I;switch(u.tag){case 0:case 11:case 15:vi(8,u,o)}var d=u.child;if(d!==null)d.return=u,I=d;else for(;I!==null;){u=I;var f=u.sibling,m=u.return;if(I0(u),u===c){I=null;break}if(f!==null){f.return=m,I=f;break}I=m}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,I=g;break e}I=o.return}}var h=e.current;for(I=h;I!==null;){s=I;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,I=p;else e:for(s=h;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ys(9,a)}}catch(C){xe(a,a.return,C)}if(a===s){I=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,I=w;break e}I=a.return}}if(ee=i,Rn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Os,e)}catch{}r=!0}return r}finally{ie=n,ft.transition=t}}return!1}function sf(e,t,n){t=Lr(n,t),t=T0(e,t,1),e=hn(e,t,1),t=We(),e!==null&&(qi(e,1,t),Je(e,t))}function xe(e,t,n){if(e.tag===3)sf(e,e,n);else for(;t!==null;){if(t.tag===3){sf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=Lr(n,e),e=A0(t,e,1),t=hn(t,e,1),e=We(),t!==null&&(qi(t,1,e),Je(t,e));break}}t=t.return}}function Ev(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(_e&n)===n&&($e===4||$e===3&&(_e&130023424)===_e&&500>Se()-hu?Un(e,0):pu|=n),Je(e,t)}function K0(e,t){t===0&&(e.mode&1?(t=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):t=1);var n=We();e=Gt(e,t),e!==null&&(qi(e,t,n),Je(e,n))}function Pv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),K0(e,n)}function Tv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),K0(e,n)}var X0;X0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,hv(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,pe&&t.flags&1048576&&Jh(t,ps,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fo(e,t),e=t.pendingProps;var i=Mr(t,Fe.current);Tr(t,n),i=au(null,t,r,e,i,n);var o=lu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(o=!0,ds(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nu(t),i.updater=Gs,t.stateNode=i,i._reactInternals=t,Ul(t,r,e,n),t=Yl(null,t,r,!0,o,n)):(t.tag=0,pe&&o&&Xc(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$v(r),e=yt(r,e),i){case 0:t=Gl(null,t,r,e,n);break e;case 1:t=Xd(null,t,r,e,n);break e;case 11:t=Yd(null,t,r,e,n);break e;case 14:t=Kd(null,t,r,yt(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Gl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Xd(e,t,r,i,n);case 3:e:{if(j0(t),e===null)throw Error($(387));r=t.pendingProps,o=t.memoizedState,i=o.element,o0(e,t),gs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Lr(Error($(423)),t),t=Qd(e,t,r,n,i);break e}else if(r!==i){i=Lr(Error($(424)),t),t=Qd(e,t,r,n,i);break e}else for(tt=pn(t.stateNode.containerInfo.firstChild),nt=t,pe=!0,xt=null,n=r0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===i){t=Yt(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return s0(t),e===null&&Fl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Dl(r,i)?s=null:o!==null&&Dl(r,o)&&(t.flags|=32),R0(e,t),Ue(e,t,s,n),t.child;case 6:return e===null&&Fl(t),null;case 13:return z0(e,t,n);case 4:return ru(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Yd(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,le(hs,r._currentValue),r._currentValue=s,o!==null)if(Ct(o.value,s)){if(o.children===i.children&&!qe.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Bt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error($(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Bl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tr(t,n),i=pt(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=yt(r,t.pendingProps),i=yt(r.type,i),Kd(e,t,r,i,n);case 15:return $0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Fo(e,t),t.tag=1,Ze(r)?(e=!0,ds(t)):e=!1,Tr(t,n),P0(t,r,i),Ul(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return L0(e,t,n);case 22:return M0(e,t,n)}throw Error($(156,t.tag))};function Q0(e,t){return kh(e,t)}function Av(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new Av(e,t,n,r)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $v(e){if(typeof e=="function")return vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nc)return 11;if(e===Ic)return 14}return 2}function yn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Uo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")vu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ar:return Wn(n.children,i,o,t);case Dc:s=8,i|=8;break;case hl:return e=dt(12,n,t,i|2),e.elementType=hl,e.lanes=o,e;case ml:return e=dt(13,n,t,i),e.elementType=ml,e.lanes=o,e;case gl:return e=dt(19,n,t,i),e.elementType=gl,e.lanes=o,e;case sh:return Xs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ih:s=10;break e;case oh:s=9;break e;case Nc:s=11;break e;case Ic:s=14;break e;case nn:s=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=dt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function Xs(e,t,n,r){return e=dt(22,e,r,t),e.elementType=sh,e.lanes=n,e.stateNode={isHidden:!1},e}function Wa(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function Ga(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xu(e,t,n,r,i,o,s,a,l){return e=new Mv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(o),e}function Rv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function q0(e){if(!e)return En;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Ze(n))return qh(e,n,t)}return t}function Z0(e,t,n,r,i,o,s,a,l){return e=xu(n,r,!0,e,i,o,s,a,l),e.context=q0(null),n=e.current,r=We(),i=gn(n),o=Bt(r,i),o.callback=t??null,hn(n,o,i),e.current.lanes=i,qi(e,i,r),Je(e,r),e}function Qs(e,t,n,r){var i=t.current,o=We(),s=gn(i);return n=q0(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,s),e!==null&&(St(e,i,s,o),Io(e,i,s)),s}function Cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wu(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function jv(){return null}var J0=typeof reportError=="function"?reportError:function(e){console.error(e)};function bu(e){this._internalRoot=e}qs.prototype.render=bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Qs(e,t,null,null)};qs.prototype.unmount=bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){Qs(null,e,null,null)}),t[Wt]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&jh(e)}};function Su(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lf(){}function zv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Cs(s);o.call(c)}}var s=Z0(t,r,e,0,null,!1,!1,"",lf);return e._reactRootContainer=s,e[Wt]=s.current,Di(e.nodeType===8?e.parentNode:e),qn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Cs(l);a.call(c)}}var l=xu(e,0,!1,null,null,!1,!1,"",lf);return e._reactRootContainer=l,e[Wt]=l.current,Di(e.nodeType===8?e.parentNode:e),qn(function(){Qs(t,l,n,r)}),l}function Js(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Cs(s);a.call(l)}}Qs(t,s,e,i)}else s=zv(n,t,e,i,r);return Cs(s)}Ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(Fc(t,n|1),Je(t,Se()),!(ee&6)&&(_r=Se()+500,Rn()))}break;case 13:qn(function(){var r=Gt(e,1);if(r!==null){var i=We();St(r,e,1,i)}}),wu(e,1)}};Bc=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=We();St(t,e,134217728,n)}wu(e,134217728)}};$h=function(e){if(e.tag===13){var t=gn(e),n=Gt(e,t);if(n!==null){var r=We();St(n,e,t,r)}wu(e,t)}};Mh=function(){return ie};Rh=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Pl=function(e,t,n){switch(t){case"input":if(xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Hs(r);if(!i)throw Error($(90));lh(r),xl(r,i)}}}break;case"textarea":uh(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};yh=mu;vh=qn;var Lv={usingClientEntryPoint:!1,Events:[Ji,dr,Hs,mh,gh,mu]},ni={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_v={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bh(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||jv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Os=Eo.inject(_v),Mt=Eo}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(t))throw Error($(200));return Rv(e,t,null,n)};ot.createRoot=function(e,t){if(!Su(e))throw Error($(299));var n=!1,r="",i=J0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xu(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,Di(e.nodeType===8?e.parentNode:e),new bu(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=bh(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return qn(e)};ot.hydrate=function(e,t,n){if(!Zs(t))throw Error($(200));return Js(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Su(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=J0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Z0(t,null,e,1,n??null,i,!1,o,s),e[Wt]=t.current,Di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qs(t)};ot.render=function(e,t,n){if(!Zs(t))throw Error($(200));return Js(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Zs(e))throw Error($(40));return e._reactRootContainer?(qn(function(){Js(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};ot.unstable_batchedUpdates=mu;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zs(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Js(e,t,n,!1,r)};ot.version="18.3.1-next-f1338f8080-20240426";function em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(em)}catch(e){console.error(e)}}em(),eh.exports=ot;var Dv=eh.exports,cf=Dv;fl.createRoot=cf.createRoot,fl.hydrateRoot=cf.hydrateRoot;var je=function(){return je=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},je.apply(this,arguments)};function Dr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ue="-ms-",bi="-moz-",re="-webkit-",tm="comm",ea="rule",ku="decl",Nv="@import",nm="@keyframes",Iv="@layer",rm=Math.abs,Cu=String.fromCharCode,oc=Object.assign;function Ov(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function im(e){return e.trim()}function Nt(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function Wo(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function Nr(e,t,n){return e.slice(t,n)}function At(e){return e.length}function om(e){return e.length}function ui(e,t){return t.push(e),e}function Vv(e,t){return e.map(t).join("")}function uf(e,t){return e.filter(function(n){return!Nt(n,t)})}var ta=1,Ir=1,sm=0,mt=0,Ce=0,Yr="";function na(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ta,column:Ir,length:s,return:"",siblings:a}}function Jt(e,t){return oc(na("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ir(e){for(;e.root;)e=Jt(e.root,{children:[e]});ui(e,e.siblings)}function Fv(){return Ce}function Bv(){return Ce=mt>0?Re(Yr,--mt):0,Ir--,Ce===10&&(Ir=1,ta--),Ce}function kt(){return Ce=mt<sm?Re(Yr,mt++):0,Ir++,Ce===10&&(Ir=1,ta++),Ce}function Gn(){return Re(Yr,mt)}function Go(){return mt}function ra(e,t){return Nr(Yr,e,t)}function sc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hv(e){return ta=Ir=1,sm=At(Yr=e),mt=0,[]}function Uv(e){return Yr="",e}function Ya(e){return im(ra(mt-1,ac(e===91?e+2:e===40?e+1:e)))}function Wv(e){for(;(Ce=Gn())&&Ce<33;)kt();return sc(e)>2||sc(Ce)>3?"":" "}function Gv(e,t){for(;--t&&kt()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return ra(e,Go()+(t<6&&Gn()==32&&kt()==32))}function ac(e){for(;kt();)switch(Ce){case e:return mt;case 34:case 39:e!==34&&e!==39&&ac(Ce);break;case 40:e===41&&ac(e);break;case 92:kt();break}return mt}function Yv(e,t){for(;kt()&&e+Ce!==47+10;)if(e+Ce===42+42&&Gn()===47)break;return"/*"+ra(t,mt-1)+"*"+Cu(e===47?e:kt())}function Kv(e){for(;!sc(Gn());)kt();return ra(e,mt)}function Xv(e){return Uv(Yo("",null,null,null,[""],e=Hv(e),0,[0],e))}function Yo(e,t,n,r,i,o,s,a,l){for(var c=0,u=0,d=s,f=0,m=0,v=0,x=1,S=1,g=1,h=0,p="",w=i,C=o,P=r,E=p;S;)switch(v=h,h=kt()){case 40:if(v!=108&&Re(E,d-1)==58){Wo(E+=W(Ya(h),"&","&\f"),"&\f",rm(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:E+=Ya(h);break;case 9:case 10:case 13:case 32:E+=Wv(v);break;case 92:E+=Gv(Go()-1,7);continue;case 47:switch(Gn()){case 42:case 47:ui(Qv(Yv(kt(),Go()),t,n,l),l);break;default:E+="/"}break;case 123*x:a[c++]=At(E)*g;case 125*x:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+u:g==-1&&(E=W(E,/\f/g,"")),m>0&&At(E)-d&&ui(m>32?ff(E+";",r,n,d-1,l):ff(W(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(ui(P=df(E,t,n,c,u,i,a,p,w=[],C=[],d,o),o),h===123)if(u===0)Yo(E,t,P,P,w,o,d,a,C);else switch(f===99&&Re(E,3)===110?100:f){case 100:case 108:case 109:case 115:Yo(e,P,P,r&&ui(df(e,P,P,0,0,i,a,p,i,w=[],d,C),C),i,C,d,a,r?w:C);break;default:Yo(E,P,P,P,[""],C,0,a,C)}}c=u=m=0,x=g=1,p=E="",d=s;break;case 58:d=1+At(E),m=v;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Bv()==125)continue}switch(E+=Cu(h),h*x){case 38:g=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(At(E)-1)*g,g=1;break;case 64:Gn()===45&&(E+=Ya(kt())),f=Gn(),u=d=At(p=E+=Kv(Go())),h++;break;case 45:v===45&&At(E)==2&&(x=0)}}return o}function df(e,t,n,r,i,o,s,a,l,c,u,d){for(var f=i-1,m=i===0?o:[""],v=om(m),x=0,S=0,g=0;x<r;++x)for(var h=0,p=Nr(e,f+1,f=rm(S=s[x])),w=e;h<v;++h)(w=im(S>0?m[h]+" "+p:W(p,/&\f/g,m[h])))&&(l[g++]=w);return na(e,t,n,i===0?ea:a,l,c,u,d)}function Qv(e,t,n,r){return na(e,t,n,tm,Cu(Fv()),Nr(e,2,-2),0,r)}function ff(e,t,n,r,i){return na(e,t,n,ku,Nr(e,0,r),Nr(e,r+1,-1),r,i)}function am(e,t,n){switch(Ov(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return bi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+bi+e+ue+e+e;case 5936:switch(Re(e,t+11)){case 114:return re+e+ue+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+ue+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+ue+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+ue+e+e;case 6165:return re+e+ue+"flex-"+e+e;case 5187:return re+e+W(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+ue+"flex-$1$2")+e;case 5443:return re+e+ue+"flex-item-"+W(e,/flex-|-self/g,"")+(Nt(e,/flex-|baseline/)?"":ue+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return re+e+ue+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+ue+W(e,"shrink","negative")+e;case 5292:return re+e+ue+W(e,"basis","preferred-size")+e;case 6060:return re+"box-"+W(e,"-grow","")+re+e+ue+W(e,"grow","positive")+e;case 4554:return re+W(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Nt(e,/flex-|baseline/))return ue+"grid-column-align"+Nr(e,t)+e;break;case 2592:case 3360:return ue+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Nt(r.props,/grid-\w+-end/)})?~Wo(e+(n=n[t].value),"span",0)?e:ue+W(e,"-start","")+e+ue+"grid-row-span:"+(~Wo(n,"span",0)?Nt(n,/\d+/):+Nt(n,/\d+/)-+Nt(e,/\d+/))+";":ue+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Nt(r.props,/grid-\w+-start/)})?e:ue+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+bi+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Wo(e,"stretch",0)?am(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return ue+i+":"+o+c+(s?ue+i+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if(Re(e,t+6)===121)return W(e,":",":"+re)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Re(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+ue+"$2box$3")+e;case 100:return W(e,":",":"+ue)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function Es(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function qv(e,t,n,r){switch(e.type){case Iv:if(e.children.length)break;case Nv:case ku:return e.return=e.return||e.value;case tm:return"";case nm:return e.return=e.value+"{"+Es(e.children,r)+"}";case ea:if(!At(e.value=e.props.join(",")))return""}return At(n=Es(e.children,r))?e.return=e.value+"{"+n+"}":""}function Zv(e){var t=om(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Jv(e){return function(t){t.root||(t=t.return)&&e(t)}}function ex(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ku:e.return=am(e.value,e.length,n);return;case nm:return Es([Jt(e,{value:W(e.value,"@","@"+re)})],r);case ea:if(e.length)return Vv(n=e.props,function(i){switch(Nt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ir(Jt(e,{props:[W(i,/:(read-\w+)/,":"+bi+"$1")]})),ir(Jt(e,{props:[i]})),oc(e,{props:uf(n,r)});break;case"::placeholder":ir(Jt(e,{props:[W(i,/:(plac\w+)/,":"+re+"input-$1")]})),ir(Jt(e,{props:[W(i,/:(plac\w+)/,":"+bi+"$1")]})),ir(Jt(e,{props:[W(i,/:(plac\w+)/,ue+"input-$1")]})),ir(Jt(e,{props:[i]})),oc(e,{props:uf(n,r)});break}return""})}}var tx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Or=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lm="active",cm="data-styled-version",ia="6.1.15",Eu=`/*!sc*/
`,Ps=typeof window<"u"&&"HTMLElement"in window,nx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),rx={},oa=Object.freeze([]),Vr=Object.freeze({});function um(e,t,n){return n===void 0&&(n=Vr),e.theme!==n.theme&&e.theme||t||n.theme}var dm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ix=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ox=/(^-|-$)/g;function pf(e){return e.replace(ix,"-").replace(ox,"")}var sx=/(a)(d)/gi,Po=52,hf=function(e){return String.fromCharCode(e+(e>25?39:97))};function lc(e){var t,n="";for(t=Math.abs(e);t>Po;t=t/Po|0)n=hf(t%Po)+n;return(hf(t%Po)+n).replace(sx,"$1-$2")}var Ka,fm=5381,vr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pm=function(e){return vr(fm,e)};function Pu(e){return lc(pm(e)>>>0)}function ax(e){return e.displayName||e.name||"Component"}function Xa(e){return typeof e=="string"&&!0}var hm=typeof Symbol=="function"&&Symbol.for,mm=hm?Symbol.for("react.memo"):60115,lx=hm?Symbol.for("react.forward_ref"):60112,cx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ux={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dx=((Ka={})[lx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ka[mm]=gm,Ka);function mf(e){return("type"in(t=e)&&t.type.$$typeof)===mm?gm:"$$typeof"in e?dx[e.$$typeof]:cx;var t}var fx=Object.defineProperty,px=Object.getOwnPropertyNames,gf=Object.getOwnPropertySymbols,hx=Object.getOwnPropertyDescriptor,mx=Object.getPrototypeOf,yf=Object.prototype;function ym(e,t,n){if(typeof t!="string"){if(yf){var r=mx(t);r&&r!==yf&&ym(e,r,n)}var i=px(t);gf&&(i=i.concat(gf(t)));for(var o=mf(e),s=mf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in ux||n&&n[l]||s&&l in s||o&&l in o)){var c=hx(t,l);try{fx(e,l,c)}catch{}}}}return e}function Zn(e){return typeof e=="function"}function Tu(e){return typeof e=="object"&&"styledComponentId"in e}function Bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ts(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Wi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cc(e,t,n){if(n===void 0&&(n=!1),!n&&!Wi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=cc(e[r],t[r]);else if(Wi(t))for(var r in t)e[r]=cc(e[r],t[r]);return e}function Au(e,t){Object.defineProperty(e,"toString",{value:t})}function Pn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var gx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Pn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Eu);return n},e}(),Ko=new Map,As=new Map,Xo=1,To=function(e){if(Ko.has(e))return Ko.get(e);for(;As.has(Xo);)Xo++;var t=Xo++;return Ko.set(e,t),As.set(t,e),t},yx=function(e,t){Xo=t+1,Ko.set(e,t),As.set(t,e)},vx="style[".concat(Or,"][").concat(cm,'="').concat(ia,'"]'),xx=new RegExp("^".concat(Or,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wx=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},bx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Eu),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(xx);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(yx(u,c),wx(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},vf=function(e){for(var t=document.querySelectorAll(vx),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Or)!==lm&&(bx(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Sx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Or,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Or,lm),r.setAttribute(cm,ia);var s=Sx();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},kx=function(){function e(t){this.element=vm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Pn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Cx=function(){function e(t){this.element=vm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ex=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xf=Ps,Px={isServer:!Ps,useCSSOMInjection:!nx},$s=function(){function e(t,n,r){t===void 0&&(t=Vr),n===void 0&&(n={});var i=this;this.options=je(je({},Px),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ps&&xf&&(xf=!1,vf(this)),Au(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(d){var f=function(g){return As.get(g)}(d);if(f===void 0)return"continue";var m=o.names.get(f),v=s.getGroup(d);if(m===void 0||!m.size||v.length===0)return"continue";var x="".concat(Or,".g").concat(d,'[id="').concat(f,'"]'),S="";m!==void 0&&m.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),l+="".concat(v).concat(x,'{content:"').concat(S,'"}').concat(Eu)},u=0;u<a;u++)c(u);return l}(i)})}return e.registerId=function(t){return To(t)},e.prototype.rehydrate=function(){!this.server&&Ps&&vf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ex(i):r?new kx(i):new Cx(i)}(this.options),new gx(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(To(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(To(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(To(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Tx=/&/g,Ax=/^\s*\/\/.*$/gm;function xm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xm(n.children,t)),n})}function $x(e){var t,n,r,i=e===void 0?Vr:e,o=i.options,s=o===void 0?Vr:o,a=i.plugins,l=a===void 0?oa:a,c=function(f,m,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):f},u=l.slice();u.push(function(f){f.type===ea&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Tx,n).replace(r,c))}),s.prefix&&u.push(ex),u.push(qv);var d=function(f,m,v,x){m===void 0&&(m=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(Ax,""),g=Xv(v||m?"".concat(v," ").concat(m," { ").concat(S," }"):S);s.namespace&&(g=xm(g,s.namespace));var h=[];return Es(g,Zv(u.concat(Jv(function(p){return h.push(p)})))),h};return d.hash=l.length?l.reduce(function(f,m){return m.name||Pn(15),vr(f,m.name)},fm).toString():"",d}var Mx=new $s,uc=$x(),wm=he.createContext({shouldForwardProp:void 0,styleSheet:Mx,stylis:uc});wm.Consumer;he.createContext(void 0);function dc(){return b.useContext(wm)}var bm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=uc);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Au(this,function(){throw Pn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=uc),this.name+t.hash},e}(),Rx=function(e){return e>="A"&&e<="Z"};function wf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Rx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sm=function(e){return e==null||e===!1||e===""},km=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Sm(o)&&(Array.isArray(o)&&o.isCss||Zn(o)?r.push("".concat(wf(i),":"),o,";"):Wi(o)?r.push.apply(r,Dr(Dr(["".concat(i," {")],km(o),!1),["}"],!1)):r.push("".concat(wf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in tx||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function vn(e,t,n,r){if(Sm(e))return[];if(Tu(e))return[".".concat(e.styledComponentId)];if(Zn(e)){if(!Zn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return vn(i,t,n,r)}var o;return e instanceof bm?n?(e.inject(n,r),[e.getName(r)]):[e]:Wi(e)?km(e):Array.isArray(e)?Array.prototype.concat.apply(oa,e.map(function(s){return vn(s,t,n,r)})):[e.toString()]}function Cm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zn(n)&&!Tu(n))return!1}return!0}var jx=pm(ia),zx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cm(t),this.componentId=n,this.baseHash=vr(jx,n),this.baseStyle=r,$s.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Bn(i,this.staticRulesId);else{var o=Ts(vn(this.rules,t,n,r)),s=lc(vr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Bn(i,s),this.staticRulesId=s}else{for(var l=vr(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var f=Ts(vn(d,t,n,r));l=vr(l,f+u),c+=f}}if(c){var m=lc(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(c,".".concat(m),void 0,this.componentId)),i=Bn(i,m)}}return i},e}(),Fr=he.createContext(void 0);Fr.Consumer;function Lx(){var e=b.useContext(Fr);if(!e)throw Pn(18);return e}function _x(e){var t=he.useContext(Fr),n=b.useMemo(function(){return function(r,i){if(!r)throw Pn(14);if(Zn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Pn(8);return i?je(je({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?he.createElement(Fr.Provider,{value:n},e.children):null}var Qa={};function Dx(e,t,n){var r=Tu(e),i=e,o=!Xa(e),s=t.attrs,a=s===void 0?oa:s,l=t.componentId,c=l===void 0?function(w,C){var P=typeof w!="string"?"sc":pf(w);Qa[P]=(Qa[P]||0)+1;var E="".concat(P,"-").concat(Pu(ia+P+Qa[P]));return C?"".concat(C,"-").concat(E):E}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(w){return Xa(w)?"styled.".concat(w):"Styled(".concat(ax(w),")")}(e):u,f=t.displayName&&t.componentId?"".concat(pf(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(w,C){return x(w,C)&&S(w,C)}}else v=x}var g=new zx(n,f,r?i.componentStyle:void 0);function h(w,C){return function(P,E,T){var L=P.attrs,j=P.componentStyle,U=P.defaultProps,K=P.foldedComponentIds,G=P.styledComponentId,Q=P.target,Pe=he.useContext(Fr),Z=dc(),oe=P.shouldForwardProp||Z.shouldForwardProp,z=um(E,Pe,U)||Vr,N=function(J,se,fe){for(var A,D=je(je({},se),{className:void 0,theme:fe}),B=0;B<J.length;B+=1){var O=Zn(A=J[B])?A(D):A;for(var q in O)D[q]=q==="className"?Bn(D[q],O[q]):q==="style"?je(je({},D[q]),O[q]):O[q]}return se.className&&(D.className=Bn(D.className,se.className)),D}(L,E,z),R=N.as||Q,M={};for(var _ in N)N[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&N.theme===z||(_==="forwardedAs"?M.as=N.forwardedAs:oe&&!oe(_,R)||(M[_]=N[_]));var F=function(J,se){var fe=dc(),A=J.generateAndInjectStyles(se,fe.styleSheet,fe.stylis);return A}(j,N),Y=Bn(K,G);return F&&(Y+=" "+F),N.className&&(Y+=" "+N.className),M[Xa(R)&&!dm.has(R)?"class":"className"]=Y,T&&(M.ref=T),b.createElement(R,M)}(p,w,C)}h.displayName=d;var p=he.forwardRef(h);return p.attrs=m,p.componentStyle=g,p.displayName=d,p.shouldForwardProp=v,p.foldedComponentIds=r?Bn(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=f,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(C){for(var P=[],E=1;E<arguments.length;E++)P[E-1]=arguments[E];for(var T=0,L=P;T<L.length;T++)cc(C,L[T],!0);return C}({},i.defaultProps,w):w}}),Au(p,function(){return".".concat(p.styledComponentId)}),o&&ym(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function bf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Sf=function(e){return Object.assign(e,{isCss:!0})};function sa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Zn(e)||Wi(e))return Sf(vn(bf(oa,Dr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?vn(r):Sf(vn(bf(r,t)))}function fc(e,t,n){if(n===void 0&&(n=Vr),!t)throw Pn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,sa.apply(void 0,Dr([i],o,!1)))};return r.attrs=function(i){return fc(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fc(e,t,je(je({},n),i))},r}var Em=function(e){return fc(Dx,e)},k=Em;dm.forEach(function(e){k[e]=Em(e)});var Nx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Cm(t),$s.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ts(vn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&$s.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Ix(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=sa.apply(void 0,Dr([e],t,!1)),i="sc-global-".concat(Pu(JSON.stringify(r))),o=new Nx(r,i),s=function(l){var c=dc(),u=he.useContext(Fr),d=he.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(d,l,c.styleSheet,u,c.stylis),he.useLayoutEffect(function(){if(!c.styleSheet.server)return a(d,l,c.styleSheet,u,c.stylis),function(){return o.removeStyles(d,c.styleSheet)}},[d,l,c.styleSheet,u,c.stylis]),null};function a(l,c,u,d,f){if(o.isStatic)o.renderStyles(l,rx,u,f);else{var m=je(je({},c),{theme:um(c,d,s.defaultProps)});o.renderStyles(l,m,u,f)}}return he.memo(s)}function to(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ts(sa.apply(void 0,Dr([e],t,!1))),i=Pu(r);return new bm(i,r)}const aa=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),la=b.createContext({}),ca=b.createContext(null),ua=typeof document<"u",Kr=ua?b.useLayoutEffect:b.useEffect,Pm=b.createContext({strict:!1}),$u=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Ox="framerAppearId",Tm="data-"+$u(Ox);function Vx(e,t,n,r){const{visualElement:i}=b.useContext(la),o=b.useContext(Pm),s=b.useContext(ca),a=b.useContext(aa).reducedMotion,l=b.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;b.useInsertionEffect(()=>{c&&c.update(n,s)});const u=b.useRef(!!(n[Tm]&&!window.HandoffComplete));return Kr(()=>{c&&(c.render(),u.current&&c.animationState&&c.animationState.animateChanges())}),b.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function xr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Fx(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):xr(n)&&(n.current=r))},[t])}function Gi(e){return typeof e=="string"||Array.isArray(e)}function da(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Mu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ru=["initial",...Mu];function fa(e){return da(e.animate)||Ru.some(t=>Gi(e[t]))}function Am(e){return!!(fa(e)||e.variants)}function Bx(e,t){if(fa(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Gi(n)?n:void 0,animate:Gi(r)?r:void 0}}return e.inherit!==!1?t:{}}function Hx(e){const{initial:t,animate:n}=Bx(e,b.useContext(la));return b.useMemo(()=>({initial:t,animate:n}),[kf(t),kf(n)])}function kf(e){return Array.isArray(e)?e.join(" "):e}const Cf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yi={};for(const e in Cf)Yi[e]={isEnabled:t=>Cf[e].some(n=>!!t[n])};function Ux(e){for(const t in e)Yi[t]={...Yi[t],...e[t]}}const ju=b.createContext({}),$m=b.createContext({}),Wx=Symbol.for("motionComponentSymbol");function Gx({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Ux(e);function o(a,l){let c;const u={...b.useContext(aa),...a,layoutId:Yx(a)},{isStatic:d}=u,f=Hx(a),m=r(a,d);if(!d&&ua){f.visualElement=Vx(i,m,u,t);const v=b.useContext($m),x=b.useContext(Pm).strict;f.visualElement&&(c=f.visualElement.loadFeatures(u,x,e,v))}return b.createElement(la.Provider,{value:f},c&&f.visualElement?b.createElement(c,{visualElement:f.visualElement,...u}):null,n(i,a,Fx(m,f.visualElement,l),m,d,f.visualElement))}const s=b.forwardRef(o);return s[Wx]=i,s}function Yx({layoutId:e}){const t=b.useContext(ju).id;return t&&e!==void 0?t+"-"+e:e}function Kx(e){function t(r,i={}){return Gx(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Xx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zu(e){return typeof e!="string"||e.includes("-")?!1:!!(Xx.indexOf(e)>-1||/[A-Z]/.test(e))}const Ms={};function Qx(e){Object.assign(Ms,e)}const no=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],tr=new Set(no);function Mm(e,{layout:t,layoutId:n}){return tr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ms[e]||e==="opacity")}const Be=e=>!!(e&&e.getVelocity),qx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Zx=no.length;function Jx(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let s=0;s<Zx;s++){const a=no[s];if(e[a]!==void 0){const l=qx[a]||a;o+=`${l}(${e[a]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const Rm=e=>t=>typeof t=="string"&&t.startsWith(e),jm=Rm("--"),pc=Rm("var(--"),e2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,t2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Tn=(e,t,n)=>Math.min(Math.max(n,e),t),nr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Si={...nr,transform:e=>Tn(0,1,e)},Ao={...nr,default:1},ki=e=>Math.round(e*1e5)/1e5,pa=/(-)?([\d]*\.?[\d])+/g,zm=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,n2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ro(e){return typeof e=="string"}const io=e=>({test:t=>ro(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),en=io("deg"),jt=io("%"),H=io("px"),r2=io("vh"),i2=io("vw"),Ef={...jt,parse:e=>jt.parse(e)/100,transform:e=>jt.transform(e*100)},Pf={...nr,transform:Math.round},Lm={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,radius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,size:H,top:H,right:H,bottom:H,left:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,rotate:en,rotateX:en,rotateY:en,rotateZ:en,scale:Ao,scaleX:Ao,scaleY:Ao,scaleZ:Ao,skew:en,skewX:en,skewY:en,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:Si,originX:Ef,originY:Ef,originZ:H,zIndex:Pf,fillOpacity:Si,strokeOpacity:Si,numOctaves:Pf};function Lu(e,t,n,r){const{style:i,vars:o,transform:s,transformOrigin:a}=e;let l=!1,c=!1,u=!0;for(const d in t){const f=t[d];if(jm(d)){o[d]=f;continue}const m=Lm[d],v=t2(f,m);if(tr.has(d)){if(l=!0,s[d]=v,!u)continue;f!==(m.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,a[d]=v):i[d]=v}if(t.transform||(l||r?i.transform=Jx(e.transform,n,u,r):i.transform&&(i.transform="none")),c){const{originX:d="50%",originY:f="50%",originZ:m=0}=a;i.transformOrigin=`${d} ${f} ${m}`}}const _u=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function _m(e,t,n){for(const r in t)!Be(t[r])&&!Mm(r,n)&&(e[r]=t[r])}function o2({transformTemplate:e},t,n){return b.useMemo(()=>{const r=_u();return Lu(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function s2(e,t,n){const r=e.style||{},i={};return _m(i,r,e),Object.assign(i,o2(e,t,n)),e.transformValues?e.transformValues(i):i}function a2(e,t,n){const r={},i=s2(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const l2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Rs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||l2.has(e)}let Dm=e=>!Rs(e);function c2(e){e&&(Dm=t=>t.startsWith("on")?!Rs(t):e(t))}try{c2(require("@emotion/is-prop-valid").default)}catch{}function u2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Dm(i)||n===!0&&Rs(i)||!t&&!Rs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Tf(e,t,n){return typeof e=="string"?e:H.transform(t+n*e)}function d2(e,t,n){const r=Tf(t,e.x,e.width),i=Tf(n,e.y,e.height);return`${r} ${i}`}const f2={offset:"stroke-dashoffset",array:"stroke-dasharray"},p2={offset:"strokeDashoffset",array:"strokeDasharray"};function h2(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?f2:p2;e[o.offset]=H.transform(-r);const s=H.transform(t),a=H.transform(n);e[o.array]=`${s} ${a}`}function Du(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},u,d,f){if(Lu(e,c,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:v,dimensions:x}=e;m.transform&&(x&&(v.transform=m.transform),delete m.transform),x&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=d2(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),s!==void 0&&h2(m,s,a,l,!1)}const Nm=()=>({..._u(),attrs:{}}),Nu=e=>typeof e=="string"&&e.toLowerCase()==="svg";function m2(e,t,n,r){const i=b.useMemo(()=>{const o=Nm();return Du(o,t,{enableHardwareAcceleration:!1},Nu(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};_m(o,e.style,e),i.style={...o,...i.style}}return i}function g2(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(zu(n)?m2:a2)(r,o,s,n),u={...u2(r,typeof n=="string",e),...l,ref:i},{children:d}=r,f=b.useMemo(()=>Be(d)?d.get():d,[d]);return b.createElement(n,{...u,children:f})}}function Im(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const Om=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Vm(e,t,n,r){Im(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Om.has(i)?i:$u(i),t.attrs[i])}function Iu(e,t){const{style:n}=e,r={};for(const i in n)(Be(n[i])||t.style&&Be(t.style[i])||Mm(i,e))&&(r[i]=n[i]);return r}function Fm(e,t){const n=Iu(e,t);for(const r in e)if(Be(e[r])||Be(t[r])){const i=no.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Ou(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function oo(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const js=e=>Array.isArray(e),y2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),v2=e=>js(e)?e[e.length-1]||0:e;function Qo(e){const t=Be(e)?e.get():e;return y2(t)?t.toValue():t}function x2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:w2(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Bm=e=>(t,n)=>{const r=b.useContext(la),i=b.useContext(ca),o=()=>x2(e,t,r,i);return n?o():oo(o)};function w2(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=Qo(o[f]);let{initial:s,animate:a}=e;const l=fa(e),c=Am(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let u=n?n.initial===!1:!1;u=u||s===!1;const d=u?a:s;return d&&typeof d!="boolean"&&!da(d)&&(Array.isArray(d)?d:[d]).forEach(m=>{const v=Ou(e,m);if(!v)return;const{transitionEnd:x,transition:S,...g}=v;for(const h in g){let p=g[h];if(Array.isArray(p)){const w=u?p.length-1:0;p=p[w]}p!==null&&(i[h]=p)}for(const h in x)i[h]=x[h]}),i}const we=e=>e;class Af{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function b2(e){let t=new Af,n=new Af,r=0,i=!1,o=!1;const s=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const d=u&&i,f=d?t:n;return c&&s.add(l),f.add(l)&&d&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let c=0;c<r;c++){const u=t.order[c];u(l),s.has(u)&&(a.schedule(u),e())}i=!1,o&&(o=!1,a.process(l))}};return a}const $o=["prepare","read","update","preRender","render","postRender"],S2=40;function k2(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=$o.reduce((d,f)=>(d[f]=b2(()=>n=!0),d),{}),s=d=>o[d].process(i),a=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,S2),1),i.timestamp=d,i.isProcessing=!0,$o.forEach(s),i.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,i.isProcessing||e(a)};return{schedule:$o.reduce((d,f)=>{const m=o[f];return d[f]=(v,x=!1,S=!1)=>(n||l(),m.schedule(v,x,S)),d},{}),cancel:d=>$o.forEach(f=>o[f].cancel(d)),state:i,steps:o}}const{schedule:ne,cancel:Et,state:Te,steps:qa}=k2(typeof requestAnimationFrame<"u"?requestAnimationFrame:we,!0),C2={useVisualState:Bm({scrapeMotionValuesFromProps:Fm,createRenderState:Nm,onMount:(e,t,{renderState:n,latestValues:r})=>{ne.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ne.render(()=>{Du(n,r,{enableHardwareAcceleration:!1},Nu(t.tagName),e.transformTemplate),Vm(t,n)})}})},E2={useVisualState:Bm({scrapeMotionValuesFromProps:Iu,createRenderState:_u})};function P2(e,{forwardMotionProps:t=!1},n,r){return{...zu(e)?C2:E2,preloadedFeatures:n,useRender:g2(t),createVisualElement:r,Component:e}}function Ft(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Hm=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function ha(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const T2=e=>t=>Hm(t)&&e(t,ha(t));function Ht(e,t,n,r){return Ft(e,t,T2(n),r)}const A2=(e,t)=>n=>t(e(n)),xn=(...e)=>e.reduce(A2);function Um(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const $f=Um("dragHorizontal"),Mf=Um("dragVertical");function Wm(e){let t=!1;if(e==="y")t=Mf();else if(e==="x")t=$f();else{const n=$f(),r=Mf();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Gm(){const e=Wm(!0);return e?(e(),!1):!0}class jn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Rf(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,s)=>{if(o.pointerType==="touch"||Gm())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&ne.update(()=>a[r](o,s))};return Ht(e.current,n,i,{passive:!e.getProps()[r]})}class $2 extends jn{mount(){this.unmount=xn(Rf(this.node,!0),Rf(this.node,!1))}unmount(){}}class M2 extends jn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xn(Ft(this.node.current,"focus",()=>this.onFocus()),Ft(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Ym=(e,t)=>t?e===t?!0:Ym(e,t.parentElement):!1;function Za(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ha(n))}class R2 extends jn{constructor(){super(...arguments),this.removeStartListeners=we,this.removeEndListeners=we,this.removeAccessibleListeners=we,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Ht(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:d}=this.node.getProps();ne.update(()=>{!d&&!Ym(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Ht(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=xn(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Za("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&ne.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Ft(this.node.current,"keyup",s),Za("down",(a,l)=>{this.startPress(a,l)})},n=Ft(this.node.current,"keydown",t),r=()=>{this.isPressing&&Za("cancel",(o,s)=>this.cancelPress(o,s))},i=Ft(this.node.current,"blur",r);this.removeAccessibleListeners=xn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ne.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Gm()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ne.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Ht(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Ft(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=xn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const hc=new WeakMap,Ja=new WeakMap,j2=e=>{const t=hc.get(e.target);t&&t(e)},z2=e=>{e.forEach(j2)};function L2({root:e,...t}){const n=e||document;Ja.has(n)||Ja.set(n,{});const r=Ja.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(z2,{root:e,...t})),r[i]}function _2(e,t,n){const r=L2(t);return hc.set(e,n),r.observe(e),()=>{hc.delete(e),r.unobserve(e)}}const D2={some:0,all:1};class N2 extends jn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:D2[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return _2(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(I2(t,n))&&this.startObserver()}unmount(){}}function I2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const O2={inView:{Feature:N2},tap:{Feature:R2},focus:{Feature:M2},hover:{Feature:$2}};function Km(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function V2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function F2(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ma(e,t,n){const r=e.getProps();return Ou(r,t,n!==void 0?n:r.custom,V2(e),F2(e))}let Xm=we,ga=we;const wn=e=>e*1e3,zt=e=>e/1e3,B2={current:!1},Qm=e=>Array.isArray(e)&&typeof e[0]=="number";function qm(e){return!!(!e||typeof e=="string"&&Zm[e]||Qm(e)||Array.isArray(e)&&e.every(qm))}const di=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Zm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:di([0,.65,.55,1]),circOut:di([.55,0,1,.45]),backIn:di([.31,.01,.66,-.59]),backOut:di([.33,1.53,.69,.99])};function Jm(e){if(e)return Qm(e)?di(e):Array.isArray(e)?e.map(Jm):Zm[e]}function H2(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const c={[t]:n};l&&(c.offset=l);const u=Jm(a);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function U2(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const eg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,W2=1e-7,G2=12;function Y2(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=eg(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>W2&&++a<G2);return s}function so(e,t,n,r){if(e===t&&n===r)return we;const i=o=>Y2(o,0,1,e,n);return o=>o===0||o===1?o:eg(i(o),t,r)}const K2=so(.42,0,1,1),X2=so(0,0,.58,1),tg=so(.42,0,.58,1),Q2=e=>Array.isArray(e)&&typeof e[0]!="number",ng=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,rg=e=>t=>1-e(1-t),Vu=e=>1-Math.sin(Math.acos(e)),ig=rg(Vu),q2=ng(Vu),og=so(.33,1.53,.69,.99),Fu=rg(og),Z2=ng(Fu),J2=e=>(e*=2)<1?.5*Fu(e):.5*(2-Math.pow(2,-10*(e-1))),e5={linear:we,easeIn:K2,easeInOut:tg,easeOut:X2,circIn:Vu,circInOut:q2,circOut:ig,backIn:Fu,backInOut:Z2,backOut:og,anticipate:J2},jf=e=>{if(Array.isArray(e)){ga(e.length===4);const[t,n,r,i]=e;return so(t,n,r,i)}else if(typeof e=="string")return e5[e];return e},Bu=(e,t)=>n=>!!(ro(n)&&n2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),sg=(e,t,n)=>r=>{if(!ro(r))return r;const[i,o,s,a]=r.match(pa);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},t5=e=>Tn(0,255,e),el={...nr,transform:e=>Math.round(t5(e))},Hn={test:Bu("rgb","red"),parse:sg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+el.transform(e)+", "+el.transform(t)+", "+el.transform(n)+", "+ki(Si.transform(r))+")"};function n5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const mc={test:Bu("#"),parse:n5,transform:Hn.transform},wr={test:Bu("hsl","hue"),parse:sg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+jt.transform(ki(t))+", "+jt.transform(ki(n))+", "+ki(Si.transform(r))+")"},He={test:e=>Hn.test(e)||mc.test(e)||wr.test(e),parse:e=>Hn.test(e)?Hn.parse(e):wr.test(e)?wr.parse(e):mc.parse(e),transform:e=>ro(e)?e:e.hasOwnProperty("red")?Hn.transform(e):wr.transform(e)},ge=(e,t,n)=>-n*e+n*t+e;function tl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function r5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=tl(l,a,e+1/3),o=tl(l,a,e),s=tl(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}const nl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},i5=[mc,Hn,wr],o5=e=>i5.find(t=>t.test(e));function zf(e){const t=o5(e);let n=t.parse(e);return t===wr&&(n=r5(n)),n}const ag=(e,t)=>{const n=zf(e),r=zf(t),i={...n};return o=>(i.red=nl(n.red,r.red,o),i.green=nl(n.green,r.green,o),i.blue=nl(n.blue,r.blue,o),i.alpha=ge(n.alpha,r.alpha,o),Hn.transform(i))};function s5(e){var t,n;return isNaN(e)&&ro(e)&&(((t=e.match(pa))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(zm))===null||n===void 0?void 0:n.length)||0)>0}const lg={regex:e2,countKey:"Vars",token:"${v}",parse:we},cg={regex:zm,countKey:"Colors",token:"${c}",parse:He.parse},ug={regex:pa,countKey:"Numbers",token:"${n}",parse:nr.parse};function rl(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function zs(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&rl(n,lg),rl(n,cg),rl(n,ug),n}function dg(e){return zs(e).values}function fg(e){const{values:t,numColors:n,numVars:r,tokenised:i}=zs(e),o=t.length;return s=>{let a=i;for(let l=0;l<o;l++)l<r?a=a.replace(lg.token,s[l]):l<r+n?a=a.replace(cg.token,He.transform(s[l])):a=a.replace(ug.token,ki(s[l]));return a}}const a5=e=>typeof e=="number"?0:e;function l5(e){const t=dg(e);return fg(e)(t.map(a5))}const An={test:s5,parse:dg,createTransformer:fg,getAnimatableNone:l5},pg=(e,t)=>n=>`${n>0?t:e}`;function hg(e,t){return typeof e=="number"?n=>ge(e,t,n):He.test(e)?ag(e,t):e.startsWith("var(")?pg(e,t):gg(e,t)}const mg=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,s)=>hg(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}},c5=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=hg(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},gg=(e,t)=>{const n=An.createTransformer(t),r=zs(e),i=zs(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?xn(mg(r.values,i.values),n):pg(e,t)},Br=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Lf=(e,t)=>n=>ge(e,t,n);function u5(e){return typeof e=="number"?Lf:typeof e=="string"?He.test(e)?ag:gg:Array.isArray(e)?mg:typeof e=="object"?c5:Lf}function d5(e,t,n){const r=[],i=n||u5(e[0]),o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||we:t;a=xn(l,a)}r.push(a)}return r}function ya(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(ga(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=d5(t,r,i),a=s.length,l=c=>{let u=0;if(a>1)for(;u<e.length-2&&!(c<e[u+1]);u++);const d=Br(e[u],e[u+1],c);return s[u](d)};return n?c=>l(Tn(e[0],e[o-1],c)):l}function f5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Br(0,t,r);e.push(ge(n,1,i))}}function yg(e){const t=[0];return f5(t,e.length-1),t}function p5(e,t){return e.map(n=>n*t)}function h5(e,t){return e.map(()=>t||tg).splice(0,e.length-1)}function Ls({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Q2(r)?r.map(jf):jf(r),o={done:!1,value:t[0]},s=p5(n&&n.length===t.length?n:yg(t),e),a=ya(s,t,{ease:Array.isArray(i)?i:h5(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}function Hu(e,t){return t?e*(1e3/t):0}const m5=5;function vg(e,t,n){const r=Math.max(t-m5,0);return Hu(n-e(r),t-r)}const il=.001,g5=.01,_f=10,y5=.05,v5=1;function x5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;Xm(e<=wn(_f));let s=1-t;s=Tn(y5,v5,s),e=Tn(g5,_f,zt(e)),s<1?(i=c=>{const u=c*s,d=u*e,f=u-n,m=gc(c,s),v=Math.exp(-d);return il-f/m*v},o=c=>{const d=c*s*e,f=d*n+n,m=Math.pow(s,2)*Math.pow(c,2)*e,v=Math.exp(-d),x=gc(Math.pow(c,2),s);return(-i(c)+il>0?-1:1)*((f-m)*v)/x}):(i=c=>{const u=Math.exp(-c*e),d=(c-n)*e+1;return-il+u*d},o=c=>{const u=Math.exp(-c*e),d=(n-c)*(e*e);return u*d});const a=5/e,l=b5(i,o,a);if(e=wn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const w5=12;function b5(e,t,n){let r=n;for(let i=1;i<w5;i++)r=r-e(r)/t(r);return r}function gc(e,t){return e*Math.sqrt(1-t*t)}const S5=["duration","bounce"],k5=["stiffness","damping","mass"];function Df(e,t){return t.some(n=>e[n]!==void 0)}function C5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Df(e,k5)&&Df(e,S5)){const n=x5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function xg({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:u,velocity:d,isResolvedFromDuration:f}=C5({...r,velocity:-zt(r.velocity||0)}),m=d||0,v=l/(2*Math.sqrt(a*c)),x=o-i,S=zt(Math.sqrt(a/c)),g=Math.abs(x)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let h;if(v<1){const p=gc(S,v);h=w=>{const C=Math.exp(-v*S*w);return o-C*((m+v*S*x)/p*Math.sin(p*w)+x*Math.cos(p*w))}}else if(v===1)h=p=>o-Math.exp(-S*p)*(x+(m+S*x)*p);else{const p=S*Math.sqrt(v*v-1);h=w=>{const C=Math.exp(-v*S*w),P=Math.min(p*w,300);return o-C*((m+v*S*x)*Math.sinh(P)+p*x*Math.cosh(P))/p}}return{calculatedDuration:f&&u||null,next:p=>{const w=h(p);if(f)s.done=p>=u;else{let C=m;p!==0&&(v<1?C=vg(h,p,w):C=0);const P=Math.abs(C)<=n,E=Math.abs(o-w)<=t;s.done=P&&E}return s.value=s.done?o:w,s}}}function Nf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=e[0],f={done:!1,value:d},m=T=>a!==void 0&&T<a||l!==void 0&&T>l,v=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let x=n*t;const S=d+x,g=s===void 0?S:s(S);g!==S&&(x=g-d);const h=T=>-x*Math.exp(-T/r),p=T=>g+h(T),w=T=>{const L=h(T),j=p(T);f.done=Math.abs(L)<=c,f.value=f.done?g:j};let C,P;const E=T=>{m(f.value)&&(C=T,P=xg({keyframes:[f.value,v(f.value)],velocity:vg(p,T,f.value),damping:i,stiffness:o,restDelta:c,restSpeed:u}))};return E(0),{calculatedDuration:null,next:T=>{let L=!1;return!P&&C===void 0&&(L=!0,w(T),E(T)),C!==void 0&&T>C?P.next(T-C):(!L&&w(T),f)}}}const E5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ne.update(t,!0),stop:()=>Et(t),now:()=>Te.isProcessing?Te.timestamp:performance.now()}},If=2e4;function Of(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<If;)t+=n,r=e.next(t);return t>=If?1/0:t}const P5={decay:Nf,inertia:Nf,tween:Ls,keyframes:Ls,spring:xg};function Ki({autoplay:e=!0,delay:t=0,driver:n=E5,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:d,...f}){let m=1,v=!1,x,S;const g=()=>{S=new Promise(M=>{x=M})};g();let h;const p=P5[i]||Ls;let w;p!==Ls&&typeof r[0]!="number"&&(w=ya([0,100],r,{clamp:!1}),r=[0,100]);const C=p({...f,keyframes:r});let P;a==="mirror"&&(P=p({...f,keyframes:[...r].reverse(),velocity:-(f.velocity||0)}));let E="idle",T=null,L=null,j=null;C.calculatedDuration===null&&o&&(C.calculatedDuration=Of(C));const{calculatedDuration:U}=C;let K=1/0,G=1/0;U!==null&&(K=U+s,G=K*(o+1)-s);let Q=0;const Pe=M=>{if(L===null)return;m>0&&(L=Math.min(L,M)),m<0&&(L=Math.min(M-G/m,L)),T!==null?Q=T:Q=Math.round(M-L)*m;const _=Q-t*(m>=0?1:-1),F=m>=0?_<0:_>G;Q=Math.max(_,0),E==="finished"&&T===null&&(Q=G);let Y=Q,J=C;if(o){const D=Math.min(Q,G)/K;let B=Math.floor(D),O=D%1;!O&&D>=1&&(O=1),O===1&&B--,B=Math.min(B,o+1),!!(B%2)&&(a==="reverse"?(O=1-O,s&&(O-=s/K)):a==="mirror"&&(J=P)),Y=Tn(0,1,O)*K}const se=F?{done:!1,value:r[0]}:J.next(Y);w&&(se.value=w(se.value));let{done:fe}=se;!F&&U!==null&&(fe=m>=0?Q>=G:Q<=0);const A=T===null&&(E==="finished"||E==="running"&&fe);return d&&d(se.value),A&&z(),se},Z=()=>{h&&h.stop(),h=void 0},oe=()=>{E="idle",Z(),x(),g(),L=j=null},z=()=>{E="finished",u&&u(),Z(),x()},N=()=>{if(v)return;h||(h=n(Pe));const M=h.now();l&&l(),T!==null?L=M-T:(!L||E==="finished")&&(L=M),E==="finished"&&g(),j=L,T=null,E="running",h.start()};e&&N();const R={then(M,_){return S.then(M,_)},get time(){return zt(Q)},set time(M){M=wn(M),Q=M,T!==null||!h||m===0?T=M:L=h.now()-M/m},get duration(){const M=C.calculatedDuration===null?Of(C):C.calculatedDuration;return zt(M)},get speed(){return m},set speed(M){M===m||!h||(m=M,R.time=zt(Q))},get state(){return E},play:N,pause:()=>{E="paused",T=Q},stop:()=>{v=!0,E!=="idle"&&(E="idle",c&&c(),oe())},cancel:()=>{j!==null&&Pe(j),oe()},complete:()=>{E="finished"},sample:M=>(L=0,Pe(M))};return R}function T5(e){let t;return()=>(t===void 0&&(t=e()),t)}const A5=T5(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),$5=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Mo=10,M5=2e4,R5=(e,t)=>t.type==="spring"||e==="backgroundColor"||!qm(t.ease);function j5(e,t,{onUpdate:n,onComplete:r,...i}){if(!(A5()&&$5.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let s=!1,a,l,c=!1;const u=()=>{l=new Promise(p=>{a=p})};u();let{keyframes:d,duration:f=300,ease:m,times:v}=i;if(R5(t,i)){const p=Ki({...i,repeat:0,delay:0});let w={done:!1,value:d[0]};const C=[];let P=0;for(;!w.done&&P<M5;)w=p.sample(P),C.push(w.value),P+=Mo;v=void 0,d=C,f=P-Mo,m="linear"}const x=H2(e.owner.current,t,d,{...i,duration:f,ease:m,times:v}),S=()=>{c=!1,x.cancel()},g=()=>{c=!0,ne.update(S),a(),u()};return x.onfinish=()=>{c||(e.set(U2(d,i)),r&&r(),g())},{then(p,w){return l.then(p,w)},attachTimeline(p){return x.timeline=p,x.onfinish=null,we},get time(){return zt(x.currentTime||0)},set time(p){x.currentTime=wn(p)},get speed(){return x.playbackRate},set speed(p){x.playbackRate=p},get duration(){return zt(f)},play:()=>{s||(x.play(),Et(S))},pause:()=>x.pause(),stop:()=>{if(s=!0,x.playState==="idle")return;const{currentTime:p}=x;if(p){const w=Ki({...i,autoplay:!1});e.setWithVelocity(w.sample(p-Mo).value,w.sample(p).value,Mo)}g()},complete:()=>{c||x.finish()},cancel:g}}function z5({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:we,pause:we,stop:we,then:o=>(o(),Promise.resolve()),cancel:we,complete:we});return t?Ki({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const L5={type:"spring",stiffness:500,damping:25,restSpeed:10},_5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),D5={type:"keyframes",duration:.8},N5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},I5=(e,{keyframes:t})=>t.length>2?D5:tr.has(e)?e.startsWith("scale")?_5(t[1]):L5:N5,yc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(An.test(t)||t==="0")&&!t.startsWith("url(")),O5=new Set(["brightness","contrast","saturate","opacity"]);function V5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(pa)||[];if(!r)return e;const i=n.replace(r,"");let o=O5.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const F5=/([a-z-]*)\(.*?\)/g,vc={...An,getAnimatableNone:e=>{const t=e.match(F5);return t?t.map(V5).join(" "):e}},B5={...Lm,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:vc,WebkitFilter:vc},Uu=e=>B5[e];function wg(e,t){let n=Uu(e);return n!==vc&&(n=An),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const bg=e=>/^0[^.\s]+$/.test(e);function H5(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||bg(e)}function U5(e,t,n,r){const i=yc(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let c=0;c<o.length;c++)o[c]===null&&(o[c]=c===0?s:o[c-1]),H5(o[c])&&l.push(c),typeof o[c]=="string"&&o[c]!=="none"&&o[c]!=="0"&&(a=o[c]);if(i&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];o[u]=wg(t,a)}return o}function W5({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function Wu(e,t){return e[t]||e.default||e}const G5={skipAnimations:!1},Gu=(e,t,n,r={})=>i=>{const o=Wu(r,e)||{},s=o.delay||r.delay||0;let{elapsed:a=0}=r;a=a-wn(s);const l=U5(t,e,n,o),c=l[0],u=l[l.length-1],d=yc(e,c),f=yc(e,u);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-a,onUpdate:v=>{t.set(v),o.onUpdate&&o.onUpdate(v)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(W5(o)||(m={...m,...I5(e,m)}),m.duration&&(m.duration=wn(m.duration)),m.repeatDelay&&(m.repeatDelay=wn(m.repeatDelay)),!d||!f||B2.current||o.type===!1||G5.skipAnimations)return z5(m);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=j5(t,e,m);if(v)return v}return Ki(m)};function _s(e){return!!(Be(e)&&e.add)}const Sg=e=>/^\-?\d*\.?\d+$/.test(e);function Yu(e,t){e.indexOf(t)===-1&&e.push(t)}function Ku(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Xu{constructor(){this.subscriptions=[]}add(t){return Yu(this.subscriptions,t),()=>Ku(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Y5=e=>!isNaN(parseFloat(e)),Ci={current:void 0};class K5{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:s}=Te;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,ne.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ne.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Y5(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Xu);const r=this.events[t].add(n);return t==="change"?()=>{r(),ne.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ci.current&&Ci.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Hu(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wt(e,t){return new K5(e,t)}const kg=e=>t=>t.test(e),X5={test:e=>e==="auto",parse:e=>e},Cg=[nr,H,jt,en,i2,r2,X5],ri=e=>Cg.find(kg(e)),Q5=[...Cg,He,An],q5=e=>Q5.find(kg(e));function Z5(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,wt(n))}function J5(e,t){const n=ma(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const s in o){const a=v2(o[s]);Z5(e,s,a)}}function ew(e,t,n){var r,i;const o=Object.keys(t).filter(a=>!e.hasValue(a)),s=o.length;if(s)for(let a=0;a<s;a++){const l=o[a],c=t[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),u!=null&&(typeof u=="string"&&(Sg(u)||bg(u))?u=parseFloat(u):!q5(u)&&An.test(c)&&(u=wg(l,c)),e.addValue(l,wt(u,{owner:e})),n[l]===void 0&&(n[l]=u),u!==null&&e.setBaseTarget(l,u))}}function tw(e,t){return t?(t[e]||t.default||t).from:void 0}function nw(e,t,n){const r={};for(const i in e){const o=tw(i,t);if(o!==void 0)r[i]=o;else{const s=n.getValue(i);s&&(r[i]=s.get())}}return r}function rw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function iw(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Eg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d),m=a[d];if(!f||m===void 0||u&&rw(u,d))continue;const v={delay:n,elapsed:0,...Wu(o||{},d)};if(window.HandoffAppearAnimations){const g=e.getProps()[Tm];if(g){const h=window.HandoffAppearAnimations(g,d,f,ne);h!==null&&(v.elapsed=h,v.isHandoff=!0)}}let x=!v.isHandoff&&!iw(f,m);if(v.type==="spring"&&(f.getVelocity()||v.velocity)&&(x=!1),f.animation&&(x=!1),x)continue;f.start(Gu(d,f,m,e.shouldReduceMotion&&tr.has(d)?{type:!1}:v));const S=f.animation;_s(l)&&(l.add(d),S.then(()=>l.remove(d))),c.push(S)}return s&&Promise.all(c).then(()=>{s&&J5(e,s)}),c}function xc(e,t,n={}){const r=ma(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Eg(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:d}=i;return ow(e,t,c+l,u,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,c]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>c())}else return Promise.all([o(),s(n.delay)])}function ow(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(sw).forEach((c,u)=>{c.notify("AnimationStart",t),s.push(xc(c,t,{...o,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function sw(e,t){return e.sortNodePosition(t)}function aw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>xc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=xc(e,t,n);else{const i=typeof t=="function"?ma(e,t,n.custom):t;r=Promise.all(Eg(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const lw=[...Mu].reverse(),cw=Mu.length;function uw(e){return t=>Promise.all(t.map(({animation:n,options:r})=>aw(e,n,r)))}function dw(e){let t=uw(e);const n=pw();let r=!0;const i=(l,c)=>{const u=ma(e,c);if(u){const{transition:d,transitionEnd:f,...m}=u;l={...l,...m,...f}}return l};function o(l){t=l(e)}function s(l,c){const u=e.getProps(),d=e.getVariantContext(!0)||{},f=[],m=new Set;let v={},x=1/0;for(let g=0;g<cw;g++){const h=lw[g],p=n[h],w=u[h]!==void 0?u[h]:d[h],C=Gi(w),P=h===c?p.isActive:null;P===!1&&(x=g);let E=w===d[h]&&w!==u[h]&&C;if(E&&r&&e.manuallyAnimateOnMount&&(E=!1),p.protectedKeys={...v},!p.isActive&&P===null||!w&&!p.prevProp||da(w)||typeof w=="boolean")continue;let L=fw(p.prevProp,w)||h===c&&p.isActive&&!E&&C||g>x&&C,j=!1;const U=Array.isArray(w)?w:[w];let K=U.reduce(i,{});P===!1&&(K={});const{prevResolvedValues:G={}}=p,Q={...G,...K},Pe=Z=>{L=!0,m.has(Z)&&(j=!0,m.delete(Z)),p.needsAnimating[Z]=!0};for(const Z in Q){const oe=K[Z],z=G[Z];if(v.hasOwnProperty(Z))continue;let N=!1;js(oe)&&js(z)?N=!Km(oe,z):N=oe!==z,N?oe!==void 0?Pe(Z):m.add(Z):oe!==void 0&&m.has(Z)?Pe(Z):p.protectedKeys[Z]=!0}p.prevProp=w,p.prevResolvedValues=K,p.isActive&&(v={...v,...K}),r&&e.blockInitialAnimation&&(L=!1),L&&(!E||j)&&f.push(...U.map(Z=>({animation:Z,options:{type:h,...l}})))}if(m.size){const g={};m.forEach(h=>{const p=e.getBaseTarget(h);p!==void 0&&(g[h]=p)}),f.push({animation:g})}let S=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(f):Promise.resolve()}function a(l,c,u){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(m=>{var v;return(v=m.animationState)===null||v===void 0?void 0:v.setActive(l,c)}),n[l].isActive=c;const f=s(u,l);for(const m in n)n[m].protectedKeys={};return f}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n}}function fw(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Km(t,e):!1}function zn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function pw(){return{animate:zn(!0),whileInView:zn(),whileHover:zn(),whileTap:zn(),whileDrag:zn(),whileFocus:zn(),exit:zn()}}class hw extends jn{constructor(t){super(t),t.animationState||(t.animationState=dw(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),da(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let mw=0;class gw extends jn{constructor(){super(...arguments),this.id=mw++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const yw={animation:{Feature:hw},exit:{Feature:gw}},Vf=(e,t)=>Math.abs(e-t);function vw(e,t){const n=Vf(e.x,t.x),r=Vf(e.y,t.y);return Math.sqrt(n**2+r**2)}class Pg{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=sl(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,m=vw(d.offset,{x:0,y:0})>=3;if(!f&&!m)return;const{point:v}=d,{timestamp:x}=Te;this.history.push({...v,timestamp:x});const{onStart:S,onMove:g}=this.handlers;f||(S&&S(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=ol(f,this.transformPagePoint),ne.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:m,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=sl(d.type==="pointercancel"?this.lastMoveEventInfo:ol(f,this.transformPagePoint),this.history);this.startEvent&&m&&m(d,S),v&&v(d,S)},!Hm(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=ha(t),a=ol(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=Te;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(t,sl(a,this.history)),this.removeListeners=xn(Ht(this.contextWindow,"pointermove",this.handlePointerMove),Ht(this.contextWindow,"pointerup",this.handlePointerUp),Ht(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Et(this.updatePoint)}}function ol(e,t){return t?{point:t(e.point)}:e}function Ff(e,t){return{x:e.x-t.x,y:e.y-t.y}}function sl({point:e},t){return{point:e,delta:Ff(e,Tg(t)),offset:Ff(e,xw(t)),velocity:ww(t,.1)}}function xw(e){return e[0]}function Tg(e){return e[e.length-1]}function ww(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Tg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>wn(t)));)n--;if(!r)return{x:0,y:0};const o=zt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function it(e){return e.max-e.min}function wc(e,t=0,n=.01){return Math.abs(e-t)<=n}function Bf(e,t,n,r=.5){e.origin=r,e.originPoint=ge(t.min,t.max,e.origin),e.scale=it(n)/it(t),(wc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ge(n.min,n.max,e.origin)-e.originPoint,(wc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ei(e,t,n,r){Bf(e.x,t.x,n.x,r?r.originX:void 0),Bf(e.y,t.y,n.y,r?r.originY:void 0)}function Hf(e,t,n){e.min=n.min+t.min,e.max=e.min+it(t)}function bw(e,t,n){Hf(e.x,t.x,n.x),Hf(e.y,t.y,n.y)}function Uf(e,t,n){e.min=t.min-n.min,e.max=e.min+it(t)}function Pi(e,t,n){Uf(e.x,t.x,n.x),Uf(e.y,t.y,n.y)}function Sw(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ge(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ge(n,e,r.max):Math.min(e,n)),e}function Wf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function kw(e,{top:t,left:n,bottom:r,right:i}){return{x:Wf(e.x,n,i),y:Wf(e.y,t,r)}}function Gf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Cw(e,t){return{x:Gf(e.x,t.x),y:Gf(e.y,t.y)}}function Ew(e,t){let n=.5;const r=it(e),i=it(t);return i>r?n=Br(t.min,t.max-r,e.min):r>i&&(n=Br(e.min,e.max-i,t.min)),Tn(0,1,n)}function Pw(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const bc=.35;function Tw(e=bc){return e===!1?e=0:e===!0&&(e=bc),{x:Yf(e,"left","right"),y:Yf(e,"top","bottom")}}function Yf(e,t,n){return{min:Kf(e,t),max:Kf(e,n)}}function Kf(e,t){return typeof e=="number"?e:e[t]||0}const Xf=()=>({translate:0,scale:1,origin:0,originPoint:0}),br=()=>({x:Xf(),y:Xf()}),Qf=()=>({min:0,max:0}),ke=()=>({x:Qf(),y:Qf()});function lt(e){return[e("x"),e("y")]}function Ag({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Aw({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function $w(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function al(e){return e===void 0||e===1}function Sc({scale:e,scaleX:t,scaleY:n}){return!al(e)||!al(t)||!al(n)}function Dn(e){return Sc(e)||$g(e)||e.z||e.rotate||e.rotateX||e.rotateY}function $g(e){return qf(e.x)||qf(e.y)}function qf(e){return e&&e!=="0%"}function Ds(e,t,n){const r=e-n,i=t*r;return n+i}function Zf(e,t,n,r,i){return i!==void 0&&(e=Ds(e,i,r)),Ds(e,n,r)+t}function kc(e,t=0,n=1,r,i){e.min=Zf(e.min,t,n,r,i),e.max=Zf(e.max,t,n,r,i)}function Mg(e,{x:t,y:n}){kc(e.x,t.translate,t.scale,t.originPoint),kc(e.y,n.translate,n.scale,n.originPoint)}function Mw(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Sr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Mg(e,s)),r&&Dn(o.latestValues)&&Sr(e,o.latestValues))}t.x=Jf(t.x),t.y=Jf(t.y)}function Jf(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function on(e,t){e.min=e.min+t,e.max=e.max+t}function ep(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,s=ge(e.min,e.max,o);kc(e,t[n],t[r],s,t.scale)}const Rw=["x","scaleX","originX"],jw=["y","scaleY","originY"];function Sr(e,t){ep(e.x,t,Rw),ep(e.y,t,jw)}function Rg(e,t){return Ag($w(e.getBoundingClientRect(),t))}function zw(e,t,n){const r=Rg(e,n),{scroll:i}=t;return i&&(on(r.x,i.offset.x),on(r.y,i.offset.y)),r}const jg=({current:e})=>e?e.ownerDocument.defaultView:null,Lw=new WeakMap;class _w{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ke(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ha(u,"page").point)},o=(u,d)=>{const{drag:f,dragPropagation:m,onDragStart:v}=this.getProps();if(f&&!m&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Wm(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lt(S=>{let g=this.getAxisMotionValue(S).get()||0;if(jt.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const p=h.layout.layoutBox[S];p&&(g=it(p)*(parseFloat(g)/100))}}this.originPoint[S]=g}),v&&ne.update(()=>v(u,d),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(u,d)=>{const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:S}=d;if(m&&this.currentDirection===null){this.currentDirection=Dw(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,S),this.updateAxis("y",d.point,S),this.visualElement.render(),x&&x(u,d)},a=(u,d)=>this.stop(u,d),l=()=>lt(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Pg(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:jg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&ne.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ro(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Sw(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&xr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=kw(i.layoutBox,n):this.constraints=!1,this.elastic=Tw(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&lt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=Pw(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!xr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=zw(r,i.root,this.visualElement.getTransformPagePoint());let s=Cw(i.layout.layoutBox,o);if(n){const a=n(Aw(s));this.hasMutatedConstraints=!!a,a&&(s=Ag(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=lt(u=>{if(!Ro(u,n,this.currentDirection))return;let d=l&&l[u]||{};s&&(d={min:0,max:0});const f=i?200:1e6,m=i?40:1e7,v={type:"inertia",velocity:r?t[u]:0,bounceStiffness:f,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Gu(t,r,0,n))}stopAnimation(){lt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){lt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){lt(n=>{const{drag:r}=this.getProps();if(!Ro(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-ge(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!xr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};lt(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();i[s]=Ew({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),lt(s=>{if(!Ro(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(ge(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;Lw.set(this.visualElement,this);const t=this.visualElement.current,n=Ht(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();xr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const s=Ft(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(lt(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=bc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Ro(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Dw(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Nw extends jn{constructor(t){super(t),this.removeGroupControls=we,this.removeListeners=we,this.controls=new _w(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||we}unmount(){this.removeGroupControls(),this.removeListeners()}}const tp=e=>(t,n)=>{e&&ne.update(()=>e(t,n))};class Iw extends jn{constructor(){super(...arguments),this.removePointerDownListener=we}onPointerDown(t){this.session=new Pg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:tp(t),onStart:tp(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&ne.update(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ht(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Ow(){const e=b.useContext(ca);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();return b.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const qo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function np(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ii={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(H.test(e))e=parseFloat(e);else return e;const n=np(e,t.target.x),r=np(e,t.target.y);return`${n}% ${r}%`}},Vw={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=An.parse(e);if(i.length>5)return r;const o=An.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=ge(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}};class Fw extends he.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Qx(Bw),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),qo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||ne.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function zg(e){const[t,n]=Ow(),r=b.useContext(ju);return he.createElement(Fw,{...e,layoutGroup:r,switchLayoutGroup:b.useContext($m),isPresent:t,safeToRemove:n})}const Bw={borderRadius:{...ii,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ii,borderTopRightRadius:ii,borderBottomLeftRadius:ii,borderBottomRightRadius:ii,boxShadow:Vw},Lg=["TopLeft","TopRight","BottomLeft","BottomRight"],Hw=Lg.length,rp=e=>typeof e=="string"?parseFloat(e):e,ip=e=>typeof e=="number"||H.test(e);function Uw(e,t,n,r,i,o){i?(e.opacity=ge(0,n.opacity!==void 0?n.opacity:1,Ww(r)),e.opacityExit=ge(t.opacity!==void 0?t.opacity:1,0,Gw(r))):o&&(e.opacity=ge(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<Hw;s++){const a=`border${Lg[s]}Radius`;let l=op(t,a),c=op(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ip(l)===ip(c)?(e[a]=Math.max(ge(rp(l),rp(c),r),0),(jt.test(c)||jt.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=ge(t.rotate||0,n.rotate||0,r))}function op(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Ww=_g(0,.5,ig),Gw=_g(.5,.95,we);function _g(e,t,n){return r=>r<e?0:r>t?1:n(Br(e,t,r))}function sp(e,t){e.min=t.min,e.max=t.max}function at(e,t){sp(e.x,t.x),sp(e.y,t.y)}function ap(e,t,n,r,i){return e-=t,e=Ds(e,1/n,r),i!==void 0&&(e=Ds(e,1/i,r)),e}function Yw(e,t=0,n=1,r=.5,i,o=e,s=e){if(jt.test(t)&&(t=parseFloat(t),t=ge(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ge(o.min,o.max,r);e===o&&(a-=t),e.min=ap(e.min,t,n,a,i),e.max=ap(e.max,t,n,a,i)}function lp(e,t,[n,r,i],o,s){Yw(e,t[n],t[r],t[i],t.scale,o,s)}const Kw=["x","scaleX","originX"],Xw=["y","scaleY","originY"];function cp(e,t,n,r){lp(e.x,t,Kw,n?n.x:void 0,r?r.x:void 0),lp(e.y,t,Xw,n?n.y:void 0,r?r.y:void 0)}function up(e){return e.translate===0&&e.scale===1}function Dg(e){return up(e.x)&&up(e.y)}function Qw(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Ng(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function dp(e){return it(e.x)/it(e.y)}class qw{constructor(){this.members=[]}add(t){Yu(this.members,t),t.scheduleRender()}remove(t){if(Ku(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function fp(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(r+=`rotate(${l}deg) `),c&&(r+=`rotateX(${c}deg) `),u&&(r+=`rotateY(${u}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const Zw=(e,t)=>e.depth-t.depth;class Jw{constructor(){this.children=[],this.isDirty=!1}add(t){Yu(this.children,t),this.isDirty=!0}remove(t){Ku(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Zw),this.isDirty=!1,this.children.forEach(t)}}function eb(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Et(r),e(o-t))};return ne.read(r,!0),()=>Et(r)}function tb(e){window.MotionDebug&&window.MotionDebug.record(e)}function nb(e){return e instanceof SVGElement&&e.tagName!=="svg"}function rb(e,t,n){const r=Be(e)?e:wt(e);return r.start(Gu("",r,t,n)),r.animation}const pp=["","X","Y","Z"],ib={visibility:"hidden"},hp=1e3;let ob=0;const Nn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Ig({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=ob++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Nn.totalNodes=Nn.resolvedTargetDeltas=Nn.recalculatedProjection=0,this.nodes.forEach(lb),this.nodes.forEach(pb),this.nodes.forEach(hb),this.nodes.forEach(cb),tb(Nn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Jw)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Xu),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=nb(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let d;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=eb(f,250),qo.hasAnimatedSinceResize&&(qo.hasAnimatedSinceResize=!1,this.nodes.forEach(gp))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:m,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||xb,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=u.getProps(),h=!this.targetLayout||!Ng(this.targetLayout,v)||m,p=!f&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||p||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,p);const w={...Wu(x,"layout"),onPlay:S,onComplete:g};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||gp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Et(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mb),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(mp);return}this.isUpdating||this.nodes.forEach(db),this.isUpdating=!1,this.nodes.forEach(fb),this.nodes.forEach(sb),this.nodes.forEach(ab),this.clearAllSnapshots();const a=performance.now();Te.delta=Tn(0,1e3/60,a-Te.timestamp),Te.timestamp=a,Te.isProcessing=!0,qa.update.process(Te),qa.preRender.process(Te),qa.render.process(Te),Te.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(ub),this.sharedNodes.forEach(gb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ke(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Dg(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;s&&(a||Dn(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),wb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ke();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(on(a.x,l.offset.x),on(a.y,l.offset.y)),a}removeElementScroll(s){const a=ke();at(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:d}=c;if(c!==this.root&&u&&d.layoutScroll){if(u.isRoot){at(a,s);const{scroll:f}=this.root;f&&(on(a.x,-f.offset.x),on(a.y,-f.offset.y))}on(a.x,u.offset.x),on(a.y,u.offset.y)}}return a}applyTransform(s,a=!1){const l=ke();at(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Sr(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Dn(u.latestValues)&&Sr(l,u.latestValues)}return Dn(this.latestValues)&&Sr(l,this.latestValues),l}removeTransform(s){const a=ke();at(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Dn(c.latestValues))continue;Sc(c.latestValues)&&c.updateSnapshot();const u=ke(),d=c.measurePageBox();at(u,d),cp(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Dn(this.latestValues)&&cp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Te.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Te.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ke(),this.relativeTargetOrigin=ke(),Pi(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ke(),this.targetWithTransforms=ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),bw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):at(this.target,this.layout.layoutBox),Mg(this.target,this.targetDelta)):at(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ke(),this.relativeTargetOrigin=ke(),Pi(this.relativeTargetOrigin,this.target,m.target),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Nn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Sc(this.parent.latestValues)||$g(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Te.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;at(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,m=this.treeScale.y;Mw(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=br(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=br(),this.projectionDeltaWithTransform=br());const x=this.projectionTransform;Ei(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=fp(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==f||this.treeScale.y!==m)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Nn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ke(),m=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=m!==v,S=this.getStack(),g=!S||S.members.length<=1,h=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(vb));this.animationProgress=0;let p;this.mixTargetDelta=w=>{const C=w/1e3;yp(d.x,s.x,C),yp(d.y,s.y,C),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pi(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),yb(this.relativeTarget,this.relativeTargetOrigin,f,C),p&&Qw(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=ke()),at(p,this.relativeTarget)),x&&(this.animationValues=u,Uw(u,c,this.latestValues,C,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Et(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ne.update(()=>{qo.hasAnimatedSinceResize=!0,this.currentAnimation=rb(0,hp,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&Og(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ke();const d=it(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const f=it(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}at(a,l),Sr(a,u),Ei(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new qw),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<pp.length;u++){const d="rotate"+pp[u];l[d]&&(c[d]=l[d],s.setStaticValue(d,0))}s.render();for(const u in c)s.setStaticValue(u,c[u]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ib;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Qo(s==null?void 0:s.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Qo(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Dn(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=fp(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:m,y:v}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${v.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Ms){if(f[x]===void 0)continue;const{correct:S,applyTo:g}=Ms[x],h=c.transform==="none"?f[x]:S(f[x],d);if(g){const p=g.length;for(let w=0;w<p;w++)c[g[w]]=h}else c[x]=h}return this.options.layoutId&&(c.pointerEvents=d===this?Qo(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(mp),this.root.sharedNodes.clear()}}}function sb(e){e.updateLayout()}function ab(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?lt(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],m=it(f);f.min=r[d].min,f.max=f.min+m}):Og(o,n.layoutBox,r)&&lt(d=>{const f=s?n.measuredBox[d]:n.layoutBox[d],m=it(r[d]);f.max=f.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+m)});const a=br();Ei(a,r,n.layoutBox);const l=br();s?Ei(l,e.applyTransform(i,!0),n.measuredBox):Ei(l,r,n.layoutBox);const c=!Dg(a);let u=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:m}=d;if(f&&m){const v=ke();Pi(v,n.layoutBox,f.layoutBox);const x=ke();Pi(x,r,m.layoutBox),Ng(v,x)||(u=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function lb(e){Nn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function cb(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ub(e){e.clearSnapshot()}function mp(e){e.clearMeasurements()}function db(e){e.isLayoutDirty=!1}function fb(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function gp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function pb(e){e.resolveTargetDelta()}function hb(e){e.calcProjection()}function mb(e){e.resetRotation()}function gb(e){e.removeLeadSnapshot()}function yp(e,t,n){e.translate=ge(t.translate,0,n),e.scale=ge(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function vp(e,t,n,r){e.min=ge(t.min,n.min,r),e.max=ge(t.max,n.max,r)}function yb(e,t,n,r){vp(e.x,t.x,n.x,r),vp(e.y,t.y,n.y,r)}function vb(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const xb={duration:.45,ease:[.4,0,.1,1]},xp=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),wp=xp("applewebkit/")&&!xp("chrome/")?Math.round:we;function bp(e){e.min=wp(e.min),e.max=wp(e.max)}function wb(e){bp(e.x),bp(e.y)}function Og(e,t,n){return e==="position"||e==="preserve-aspect"&&!wc(dp(t),dp(n),.2)}const bb=Ig({attachResizeListener:(e,t)=>Ft(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ll={current:void 0},Vg=Ig({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ll.current){const e=new bb({});e.mount(window),e.setOptions({layoutScroll:!0}),ll.current=e}return ll.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Sb={pan:{Feature:Iw},drag:{Feature:Nw,ProjectionNode:Vg,MeasureLayout:zg}},kb=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Cb(e){const t=kb.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Cc(e,t,n=1){const[r,i]=Cb(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Sg(s)?parseFloat(s):s}else return pc(i)?Cc(i,t,n+1):i}function Eb(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!pc(o))return;const s=Cc(o,r);s&&i.set(s)});for(const i in t){const o=t[i];if(!pc(o))continue;const s=Cc(o,r);s&&(t[i]=s,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const Pb=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Fg=e=>Pb.has(e),Tb=e=>Object.keys(e).some(Fg),Sp=e=>e===nr||e===H,kp=(e,t)=>parseFloat(e.split(", ")[t]),Cp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return kp(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?kp(o[1],e):0}},Ab=new Set(["x","y","z"]),$b=no.filter(e=>!Ab.has(e));function Mb(e){const t=[];return $b.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Hr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Cp(4,13),y:Cp(5,14)};Hr.translateX=Hr.x;Hr.translateY=Hr.y;const Rb=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:s}=o,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{a[c]=Hr[c](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(c=>{const u=t.getValue(c);u&&u.jump(a[c]),e[c]=Hr[c](l,o)}),e},jb=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(Fg);let o=[],s=!1;const a=[];if(i.forEach(l=>{const c=e.getValue(l);if(!e.hasValue(l))return;let u=n[l],d=ri(u);const f=t[l];let m;if(js(f)){const v=f.length,x=f[0]===null?1:0;u=f[x],d=ri(u);for(let S=x;S<v&&f[S]!==null;S++)m?ga(ri(f[S])===m):m=ri(f[S])}else m=ri(f);if(d!==m)if(Sp(d)&&Sp(m)){const v=c.get();typeof v=="string"&&c.set(parseFloat(v)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&m===H&&(t[l]=f.map(parseFloat))}else d!=null&&d.transform&&(m!=null&&m.transform)&&(u===0||f===0)?u===0?c.set(m.transform(u)):t[l]=d.transform(f):(s||(o=Mb(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],c.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=Rb(t,e,a);return o.length&&o.forEach(([u,d])=>{e.getValue(u).set(d)}),e.render(),ua&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function zb(e,t,n,r){return Tb(t)?jb(e,t,n,r):{target:t,transitionEnd:r}}const Lb=(e,t,n,r)=>{const i=Eb(e,t,r);return t=i.target,r=i.transitionEnd,zb(e,t,n,r)},Ec={current:null},Bg={current:!1};function _b(){if(Bg.current=!0,!!ua)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ec.current=e.matches;e.addListener(t),t()}else Ec.current=!1}function Db(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],s=n[i];if(Be(o))e.addValue(i,o),_s(r)&&r.add(i);else if(Be(s))e.addValue(i,wt(o,{owner:e})),_s(r)&&r.remove(i);else if(s!==o)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,wt(a!==void 0?a:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Ep=new WeakMap,Hg=Object.keys(Yi),Nb=Hg.length,Pp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Ib=Ru.length;class Ob{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ne.render(this.render,!1,!0);const{latestValues:a,renderState:l}=o;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=fa(n),this.isVariantNode=Am(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const f=u[d];a[d]!==void 0&&Be(f)&&(f.set(a[d],!1),_s(c)&&c.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Ep.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Bg.current||_b(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ec.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ep.delete(this.current),this.projection&&this.projection.unmount(),Et(this.notifyUpdate),Et(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=tr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&ne.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let s,a;for(let l=0;l<Nb;l++){const c=Hg[l],{isEnabled:u,Feature:d,ProjectionNode:f,MeasureLayout:m}=Yi[c];f&&(s=f),u(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),m&&(a=m))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:m}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||d&&xr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:m})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ke()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Pp.length;r++){const i=Pp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Db(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Ib;r++){const i=Ru[r],o=this.props[i];(Gi(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=wt(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Ou(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Be(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Xu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ug extends Ob{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let s=nw(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),s&&(s=i(s))),o){ew(this,r,s);const a=Lb(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function Vb(e){return window.getComputedStyle(e)}class Fb extends Ug{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(tr.has(n)){const r=Uu(n);return r&&r.default||0}else{const r=Vb(t),i=(jm(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Rg(t,n)}build(t,n,r,i){Lu(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Iu(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Be(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Im(t,n,r,i)}}class Bb extends Ug{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(tr.has(n)){const r=Uu(n);return r&&r.default||0}return n=Om.has(n)?n:$u(n),t.getAttribute(n)}measureInstanceViewportBox(){return ke()}scrapeMotionValuesFromProps(t,n){return Fm(t,n)}build(t,n,r,i){Du(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Vm(t,n,r,i)}mount(t){this.isSVGTag=Nu(t.tagName),super.mount(t)}}const Hb=(e,t)=>zu(e)?new Bb(t,{enableHardwareAcceleration:!1}):new Fb(t,{enableHardwareAcceleration:!0}),Ub={layout:{ProjectionNode:Vg,MeasureLayout:zg}},Wb={...yw,...O2,...Sb,...Ub},V=Kx((e,t)=>P2(e,t,Wb,Hb));function Wg(){const e=b.useRef(!1);return Kr(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Gb(){const e=Wg(),[t,n]=b.useState(0),r=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>ne.postRender(r),[r]),t]}class Yb extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Kb({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:o,height:s,top:a,left:l}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),b.createElement(Yb,{isPresent:t,childRef:r,sizeRef:i},b.cloneElement(e,{ref:r}))}const cl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=oo(Xb),l=b.useId(),c=b.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u=>{a.set(u,!0);for(const d of a.values())if(!d)return;r&&r()},register:u=>(a.set(u,!1),()=>a.delete(u))}),o?void 0:[n]);return b.useMemo(()=>{a.forEach((u,d)=>a.set(d,!1))},[n]),b.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=b.createElement(Kb,{isPresent:n},e)),b.createElement(ca.Provider,{value:c},e)};function Xb(){return new Map}function Qb(e){return b.useEffect(()=>()=>e(),[])}const In=e=>e.key||"";function qb(e,t){e.forEach(n=>{const r=In(n);t.set(r,n)})}function Zb(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Lt=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=b.useContext(ju).forceRender||Gb()[0],l=Wg(),c=Zb(e);let u=c;const d=b.useRef(new Map).current,f=b.useRef(u),m=b.useRef(new Map).current,v=b.useRef(!0);if(Kr(()=>{v.current=!1,qb(c,m),f.current=u}),Qb(()=>{v.current=!0,m.clear(),d.clear()}),v.current)return b.createElement(b.Fragment,null,u.map(h=>b.createElement(cl,{key:In(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:s},h)));u=[...u];const x=f.current.map(In),S=c.map(In),g=x.length;for(let h=0;h<g;h++){const p=x[h];S.indexOf(p)===-1&&!d.has(p)&&d.set(p,void 0)}return s==="wait"&&d.size&&(u=[]),d.forEach((h,p)=>{if(S.indexOf(p)!==-1)return;const w=m.get(p);if(!w)return;const C=x.indexOf(p);let P=h;if(!P){const E=()=>{d.delete(p);const T=Array.from(m.keys()).filter(L=>!S.includes(L));if(T.forEach(L=>m.delete(L)),f.current=c.filter(L=>{const j=In(L);return j===p||T.includes(j)}),!d.size){if(l.current===!1)return;a(),r&&r()}};P=b.createElement(cl,{key:In(w),isPresent:!1,onExitComplete:E,custom:t,presenceAffectsLayout:o,mode:s},w),d.set(p,P)}u.splice(C,0,P)}),u=u.map(h=>{const p=h.key;return d.has(p)?h:b.createElement(cl,{key:In(h),isPresent:!0,presenceAffectsLayout:o,mode:s},h)}),b.createElement(b.Fragment,null,d.size?u:u.map(h=>b.cloneElement(h)))};function Qu(e){const t=oo(()=>wt(e)),{isStatic:n}=b.useContext(aa);if(n){const[,r]=b.useState(e);b.useEffect(()=>t.on("change",r),[])}return t}const Jb=e=>e&&typeof e=="object"&&e.mix,e3=e=>Jb(e)?e.mix:void 0;function t3(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],a=ya(i,o,{mixer:e3(o[0]),...s});return t?a(r):a}function Gg(e,t){const n=Qu(t()),r=()=>n.set(t());return r(),Kr(()=>{const i=()=>ne.update(r,!1,!0),o=e.map(s=>s.on("change",i));return()=>{o.forEach(s=>s()),Et(r)}}),n}function n3(e){Ci.current=[],e();const t=Gg(Ci.current,e);return Ci.current=void 0,t}function r3(e,t,n,r){if(typeof e=="function")return n3(e);const i=typeof t=="function"?t:t3(t,n,r);return Array.isArray(e)?Tp(e,i):Tp([e],([o])=>i(o))}function Tp(e,t){const n=oo(()=>[]);return Gg(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function i3(e,t={}){const{isStatic:n}=b.useContext(aa),r=b.useRef(null),i=Qu(Be(e)?e.get():e),o=()=>{r.current&&r.current.stop()};return b.useInsertionEffect(()=>i.attach((s,a)=>{if(n)return a(s);if(o(),r.current=Ki({keyframes:[i.get(),s],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:a}),!Te.isProcessing){const l=performance.now()-Te.timestamp;l<30&&(r.current.time=zt(l))}return i.get()},o),[JSON.stringify(t)]),Kr(()=>{if(Be(e))return e.on("change",s=>i.set(parseFloat(s)))},[i]),i}function o3(e,t,n){var r;if(typeof e=="string"){let i=document;t&&(ga(!!t.current),i=t.current),n?((r=n[e])!==null&&r!==void 0||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const Zo=new WeakMap;let tn;function s3(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function a3({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Zo.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return s3(e,n)}})})}function l3(e){e.forEach(a3)}function c3(){typeof ResizeObserver>"u"||(tn=new ResizeObserver(l3))}function u3(e,t){tn||c3();const n=o3(e);return n.forEach(r=>{let i=Zo.get(r);i||(i=new Set,Zo.set(r,i)),i.add(t),tn==null||tn.observe(r)}),()=>{n.forEach(r=>{const i=Zo.get(r);i==null||i.delete(t),i!=null&&i.size||tn==null||tn.unobserve(r)})}}const Jo=new Set;let Ti;function d3(){Ti=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Jo.forEach(n=>n(t))},window.addEventListener("resize",Ti)}function f3(e){return Jo.add(e),Ti||d3(),()=>{Jo.delete(e),!Jo.size&&Ti&&(Ti=void 0)}}function p3(e,t){return typeof e=="function"?f3(e):u3(e,t)}const h3=50,Ap=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),m3=()=>({time:0,x:Ap(),y:Ap()}),g3={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function $p(e,t,n,r){const i=n[t],{length:o,position:s}=g3[t],a=i.current,l=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Br(0,i.scrollLength,i.current);const c=r-l;i.velocity=c>h3?0:Hu(i.current-a,c)}function y3(e,t,n){$p(e,"x",t,n),$p(e,"y",t,n),t.time=n}function v3(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const o=r.getBoundingClientRect();n.x+=i.left-o.left,n.y+=i.top-o.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:o}=r.getBBox();n.x+=i,n.y+=o;let s=null,a=r.parentNode;for(;!s;)a.tagName==="svg"&&(s=a),a=r.parentNode;r=s}else break;return n}const x3={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Pc={start:0,center:.5,end:1};function Mp(e,t,n=0){let r=0;if(Pc[e]!==void 0&&(e=Pc[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const w3=[0,0];function b3(e,t,n,r){let i=Array.isArray(e)?e:w3,o=0,s=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Pc[e]?e:"0"]),o=Mp(i[0],n,r),s=Mp(i[1],t),o-s}const S3={x:0,y:0};function k3(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function C3(e,t,n){let{offset:r=x3.All}=n;const{target:i=e,axis:o="y"}=n,s=o==="y"?"height":"width",a=i!==e?v3(i,e):S3,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:k3(i),c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate;const d=r.length;for(let f=0;f<d;f++){const m=b3(r[f],c[s],l[s],a[o]);!u&&m!==t[o].interpolatorOffsets[f]&&(u=!0),t[o].offset[f]=m}u&&(t[o].interpolate=ya(t[o].offset,yg(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function E3(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function P3(e,t,n,r={}){return{measure:()=>E3(e,r.target,n),update:i=>{y3(e,n,i),(r.offset||r.target)&&C3(e,n,r)},notify:()=>t(n)}}const oi=new WeakMap,Rp=new WeakMap,ul=new WeakMap,jp=e=>e===document.documentElement?window:e;function T3(e,{container:t=document.documentElement,...n}={}){let r=ul.get(t);r||(r=new Set,ul.set(t,r));const i=m3(),o=P3(t,e,i,n);if(r.add(o),!oi.has(t)){const a=()=>{for(const f of r)f.measure()},l=()=>{for(const f of r)f.update(Te.timestamp)},c=()=>{for(const f of r)f.notify()},u=()=>{ne.read(a,!1,!0),ne.read(l,!1,!0),ne.update(c,!1,!0)};oi.set(t,u);const d=jp(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&Rp.set(t,p3(t,u)),d.addEventListener("scroll",u,{passive:!0})}const s=oi.get(t);return ne.read(s,!1,!0),()=>{var a;Et(s);const l=ul.get(t);if(!l||(l.delete(o),l.size))return;const c=oi.get(t);oi.delete(t),c&&(jp(t).removeEventListener("scroll",c),(a=Rp.get(t))===null||a===void 0||a(),window.removeEventListener("resize",c))}}function zp(e,t){Xm(!!(!t||t.current))}const A3=()=>({scrollX:wt(0),scrollY:wt(0),scrollXProgress:wt(0),scrollYProgress:wt(0)});function $3({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=oo(A3);return(n?Kr:b.useEffect)(()=>(zp("target",t),zp("container",e),T3(({x:s,y:a})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(a.current),i.scrollYProgress.set(a.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const M3={classical:"/assets/covers/classical_cover.jpg",rock:"/assets/covers/rock_cover.jpeg",pop:"/assets/covers/pop_cover.jpeg",electronic:"/assets/covers/electronic_cover.jpeg",jazz:"/assets/covers/jazz_cover.jpeg",ambient:"/assets/covers/ambient_cover.jpeg",soundtrack:"/assets/covers/galaxy_2.gif",hiphop:"/assets/covers/hiphop_cover.jpg"},ae={chopin:"/assets/covers/chopin.jpeg",chopin_etudes:"/assets/covers/chopin_etudes.jpeg",bach:"/assets/covers/bach.jpeg",queen:"/assets/covers/rock_cover.jpg",bonJovi:"/assets/covers/bon_jovi.jpeg",rema:"/assets/covers/rema.jpg",rosalia:"/assets/covers/rosalia.jpg",eminem:"/assets/covers/eminem.jpg",liebestraume:"/assets/covers/liebestraume.jpg",rema_calm_down:"/assets/covers/rema_calm_down.jpeg",memory_reboot:"/assets/covers/memory_reboot.jpeg"},Lp={Stan:"/assets/covers/stan.jpeg"},dl={urban_blues:"/assets/covers/urban_blues.jpeg",miss_g:"/assets/covers/miss_g.jpeg"},te={classical:"#7a1f1f",rock:"#585858",pop:"#9c27b0",electronic:"#3a1f7a",jazz:"#7a4b1f",ambient:"#2d5d2a",soundtrack:"#1f5a7a",hiphop:"#333333"},Xt=[{id:"classical-1",title:"Air on G String",artist:"Johann Sebastian Bach",album:"Orchestral Suites",genre:"classical",coverArt:ae.bach,audioSrc:"/assets/musics/single_tracks/air_on_g_string.mp3",duration:180,color:te.classical},{id:"classical-3",title:"Etude Op. 10 No. 4",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:ae.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_4.mp3",duration:120,color:te.classical},{id:"classical-4",title:"Etude Op. 25 No. 11",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:ae.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_23.mp3",duration:260,color:te.classical},{id:"classical-5",title:"Liebestraume No. 3",artist:"Franz Liszt",album:"Piano Dreams",genre:"classical",coverArt:ae.liebestraume,audioSrc:"/assets/musics/single_tracks/liebestraume_no_3.mp3",duration:295,color:te.classical},{id:"nocturne-1",title:"Nocturne Op. 9 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_1.mp3",duration:310,color:te.classical},{id:"nocturne-2",title:"Nocturne Op. 9 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_2.mp3",duration:270,color:te.classical},{id:"nocturne-3",title:"Nocturne Op. 9 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_3.mp3",duration:330,color:te.classical},{id:"nocturne-4",title:"Nocturne Op. 15 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_4.mp3",duration:305,color:te.classical},{id:"nocturne-5",title:"Nocturne Op. 15 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_5.mp3",duration:315,color:te.classical},{id:"nocturne-6",title:"Nocturne Op. 15 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_6.mp3",duration:290,color:te.classical},{id:"nocturne-7",title:"Nocturne Op. 27 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_7.mp3",duration:340,color:te.classical},{id:"nocturne-8",title:"Nocturne Op. 27 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_8.mp3",duration:320,color:te.classical},{id:"nocturne-9",title:"Nocturne Op. 32 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_9.mp3",duration:280,color:te.classical},{id:"nocturne-10",title:"Nocturne Op. 32 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_10.mp3",duration:300,color:te.classical},{id:"nocturne-11",title:"Nocturne Op. 37 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_11.mp3",duration:325,color:te.classical},{id:"nocturne-12",title:"Nocturne Op. 37 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_12.mp3",duration:310,color:te.classical},{id:"nocturne-13",title:"Nocturne Op. 48 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_13.mp3",duration:350,color:te.classical},{id:"nocturne-14",title:"Nocturne Op. 48 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_14.mp3",duration:335,color:te.classical},{id:"nocturne-15",title:"Nocturne Op. 55 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_15.mp3",duration:295,color:te.classical},{id:"nocturne-17",title:"Nocturne Op. 55 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_17.mp3",duration:330,color:te.classical},{id:"nocturne-18",title:"Nocturne Op. 62 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_18.mp3",duration:360,color:te.classical},{id:"nocturne-19",title:"Nocturne Op. 62 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_19.mp3",duration:340,color:te.classical},{id:"nocturne-20",title:"Nocturne Op. 72 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_20.mp3",duration:315,color:te.classical},{id:"rock-1",title:"Bohemian Rhapsody",artist:"Queen",album:"A Night at the Opera",genre:"rock",coverArt:M3.rock,audioSrc:"/assets/musics/single_tracks/bohemian_rhapsody.mp3",duration:355,color:te.rock},{id:"rock-2",title:"It's My Life",artist:"Bon Jovi",album:"Crush",genre:"rock",coverArt:ae.bonJovi,audioSrc:"/assets/musics/single_tracks/its_my_life.mp3",duration:224,color:te.rock},{id:"pop-1",title:"Calm Down",artist:"Rema",album:"Rave & Roses",genre:"pop",coverArt:ae.rema_calm_down,audioSrc:"/assets/musics/single_tracks/calm_down.mp3",duration:234,color:te.pop},{id:"pop-2",title:"Candy",artist:"Naoko Gushima",album:"Motomami",genre:"pop",coverArt:dl.miss_g,audioSrc:"/assets/musics/single_tracks/candy.mp3",duration:185,color:te.pop},{id:"pop-3",title:"Missing You",artist:"Naoko Gushima",album:"Love Stories",genre:"pop",coverArt:dl.urban_blues,audioSrc:"/assets/musics/single_tracks/missing_you.mp3",duration:210,color:te.pop},{id:"electronic-2",title:"Memory Reboot",artist:"Cyber Dreams",album:"Neural Network",genre:"electronic",coverArt:ae.memory_reboot,audioSrc:"/assets/musics/single_tracks/memory_reboot.mp3",duration:240,color:te.electronic},{id:"electronic-3",title:"Monochrome",artist:"Naoko Gushima",album:"Color Code",genre:"electronic",coverArt:dl.urban_blues,audioSrc:"/assets/musics/single_tracks/monochrome.mp3",duration:218,color:te.electronic},{id:"hiphop-1",title:"Stan (Instrumental)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:Lp.Stan,audioSrc:"/assets/musics/single_tracks/stan_instrumental.mp3",duration:340,color:te.hiphop},{id:"hiphop-2",title:"Stan (MIDI Version)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:Lp.Stan,audioSrc:"/assets/musics/single_tracks/stan_midi.mp3",duration:330,color:te.hiphop}];Xt.filter(e=>e.genre==="classical");Xt.filter(e=>e.genre==="rock");Xt.filter(e=>e.genre==="pop");Xt.filter(e=>e.genre==="electronic");Xt.filter(e=>e.genre==="jazz");Xt.filter(e=>e.genre==="ambient");Xt.filter(e=>e.genre==="soundtrack");Xt.filter(e=>e.genre==="hiphop");const Oe={LAST_PLAYED:"dp_last_played",PLAYBACK_STATE:"dp_playback_state",VOLUME:"dp_volume",QUEUE:"dp_queue",LAST_POSITION:"dp_last_position",PLAYBACK_HISTORY:"dp_playback_history",LAST_SESSION:"dp_last_session",USER_PREFERENCES:"dp_user_preferences"},_t={saveLastPlayed:e=>{try{e?localStorage.setItem(Oe.LAST_PLAYED,JSON.stringify({...e,timestamp:Date.now()})):localStorage.removeItem(Oe.LAST_PLAYED)}catch(t){console.warn("Failed to save last played track:",t)}},getLastPlayed:()=>{try{const e=localStorage.getItem(Oe.LAST_PLAYED);return e?JSON.parse(e):null}catch(e){return console.warn("Failed to retrieve last played track:",e),null}},savePlaybackState:e=>{try{localStorage.setItem(Oe.PLAYBACK_STATE,JSON.stringify({...e,timestamp:Date.now()}))}catch(t){console.warn("Failed to save playback state:",t)}},getPlaybackState:()=>{try{const e=localStorage.getItem(Oe.PLAYBACK_STATE);if(!e)return null;const t=JSON.parse(e);return(Date.now()-t.timestamp)/(1e3*60*60)>24&&(t.progress=0),t}catch(e){return console.warn("Failed to retrieve playback state:",e),null}},saveQueue:e=>{try{localStorage.setItem(Oe.QUEUE,JSON.stringify(e))}catch(t){console.warn("Failed to save queue:",t)}},getQueue:()=>{try{const e=localStorage.getItem(Oe.QUEUE);return e?JSON.parse(e):[]}catch(e){return console.warn("Failed to retrieve queue:",e),[]}},clearPlaybackData:()=>{try{localStorage.removeItem(Oe.LAST_PLAYED),localStorage.removeItem(Oe.PLAYBACK_STATE),localStorage.removeItem(Oe.QUEUE)}catch(e){console.warn("Failed to clear playback data:",e)}},isDataValid:(e,t=24)=>(Date.now()-e)/36e5<=t,saveToHistory:(e,t)=>{try{const n=_t.getPlaybackHistory(),r={trackId:e.id,timestamp:Date.now(),progress:t};n.tracks=[r,...n.tracks].slice(0,n.maxSize),localStorage.setItem(Oe.PLAYBACK_HISTORY,JSON.stringify(n))}catch(n){console.warn("Failed to save to playback history:",n)}},getPlaybackHistory:()=>{try{const e=localStorage.getItem(Oe.PLAYBACK_HISTORY);return e?JSON.parse(e):{tracks:[],maxSize:50}}catch(e){return console.warn("Failed to retrieve playback history:",e),{tracks:[],maxSize:50}}},startNewSession:()=>{try{const e={startTime:Date.now(),endTime:0,tracksPlayed:[]};localStorage.setItem(Oe.LAST_SESSION,JSON.stringify(e))}catch(e){console.warn("Failed to start new session:",e)}},updateSession:e=>{try{const t=localStorage.getItem(Oe.LAST_SESSION);if(t){const n=JSON.parse(t);n.tracksPlayed.includes(e)||(n.tracksPlayed.push(e),n.endTime=Date.now(),localStorage.setItem(Oe.LAST_SESSION,JSON.stringify(n)))}}catch(t){console.warn("Failed to update session:",t)}},cleanupOldData:()=>{try{const e=_t.getPlaybackHistory(),t=Date.now();e.tracks=e.tracks.filter(n=>(t-n.timestamp)/864e5<=7),localStorage.setItem(Oe.PLAYBACK_HISTORY,JSON.stringify(e))}catch(e){console.warn("Failed to cleanup old data:",e)}}},R3=()=>{const e=_t.getLastPlayed(),t=_t.getPlaybackState(),n=_t.getQueue();return{currentTrack:e||null,isPlaying:!1,volume:(t==null?void 0:t.volume)??.7,progress:(t==null?void 0:t.progress)??0,duration:(e==null?void 0:e.duration)??0,isShuffling:(t==null?void 0:t.isShuffling)??!1,repeatMode:(t==null?void 0:t.repeatMode)??"off",queue:n.length>0?n:Xt,visualizerActive:!0,equalizerActive:!0,sidebarMode:"manual",sidebarVisible:!1,isBuffering:!1,error:null,lastUserAction:Date.now(),lastSidebarInteraction:Date.now(),sidebarOpen:!1}},j3=(e,t)=>{switch(t.type){case"SET_TRACK":{const n=t.payload;return _t.saveLastPlayed(n),_t.updateSession(n.id),{...e,currentTrack:n,isPlaying:!1,progress:0,duration:n.duration||0,error:null,isBuffering:!0,lastUserAction:Date.now()}}case"PLAY":return{...e,isPlaying:!0,lastUserAction:Date.now()};case"PAUSE":return{...e,isPlaying:!1,lastUserAction:Date.now()};case"SET_VOLUME":return{...e,volume:t.payload,lastUserAction:Date.now()};case"SET_PROGRESS":{e.currentTrack&&_t.saveToHistory(e.currentTrack,t.payload);const n=isNaN(t.payload)?e.progress:t.payload;return{...e,progress:n,isBuffering:!1}}case"SET_DURATION":{const n=isNaN(t.payload)?e.duration:t.payload;return{...e,duration:n}}case"TOGGLE_SHUFFLE":return{...e,isShuffling:!e.isShuffling,lastUserAction:Date.now()};case"SET_QUEUE":return{...e,queue:[...t.payload]};case"NEXT_TRACK":{if(!e.currentTrack||!e.activeContext)return e;const n=e.activeContext.tracks,r=n.findIndex(s=>s.id===e.currentTrack.id);let i;if(e.repeatMode==="one")i=r;else if(e.repeatMode==="all")i=(r+1)%n.length;else{if(r===n.length-1)return{...e,isPlaying:!1,progress:0};i=r+1}if(e.isShuffling&&e.repeatMode!=="one"){const s=n.filter((a,l)=>l>r);if(s.length>0){const a=s[Math.floor(Math.random()*s.length)];i=n.indexOf(a)}}const o=n[i];return{...e,currentTrack:o,isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now(),queue:n}}case"PREV_TRACK":{if(!e.currentTrack||!e.activeContext)return e;const n=e.activeContext.tracks,r=n.findIndex(o=>o.id===e.currentTrack.id);let i;if(e.repeatMode==="one")i=r;else if(e.repeatMode==="all")i=(r-1+n.length)%n.length;else{if(r===0)return{...e,progress:0};i=r-1}return{...e,currentTrack:n[i],isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now()}}case"TOGGLE_VISUALIZER":return{...e,visualizerActive:!e.visualizerActive,lastUserAction:Date.now()};case"TOGGLE_EQUALIZER":return{...e,equalizerActive:!e.equalizerActive,lastUserAction:Date.now()};case"SET_BUFFERING":return{...e,isBuffering:t.payload};case"SET_ERROR":return{...e,error:t.payload,isBuffering:!1,isPlaying:!1};case"SET_SIDEBAR_MODE":return{...e,sidebarMode:t.payload,lastUserAction:Date.now(),lastSidebarInteraction:Date.now()};case"SIDEBAR_INTERACTION":return{...e,lastSidebarInteraction:Date.now()};case"USER_INTERACTION":return{...e,lastUserAction:Date.now()};case"CYCLE_REPEAT_MODE":return{...e,repeatMode:e.repeatMode==="off"?"all":e.repeatMode==="all"?"one":"off",lastUserAction:Date.now()};case"TOGGLE_SIDEBAR_VISIBILITY":{const n=!e.sidebarVisible;return console.log(`Toggling sidebar visibility from ${e.sidebarVisible} to ${n}`),e.sidebarVisible===n?e:{...e,sidebarVisible:n}}case"SET_SIDEBAR_OPEN":return{...e,sidebarOpen:t.payload};case"SET_ACTIVE_CONTEXT":return{...e,activeContext:t.payload,queue:t.payload.tracks};default:return e}},Yg=b.createContext(void 0);function z3({children:e}){const[t,n]=b.useReducer(j3,R3()),[r]=b.useState(!1);return b.useEffect(()=>{!t.currentTrack&&t.queue.length>0&&n({type:"SET_TRACK",payload:t.queue[0]})},[t.queue,t.currentTrack]),b.useEffect(()=>{_t.startNewSession(),_t.cleanupOldData()},[]),y.jsx(Yg.Provider,{value:{state:t,dispatch:n,isLoadingTracks:r},children:e})}function Qt(){const e=b.useContext(Yg);if(!e)throw new Error("useMusicContext must be used within a MusicProvider");return e}const Kg={explorerVisible:!0,explorerWidth:350,mainContentWidth:"calc(100% - 350px)",horizontalControlsExpanded:!1,sidebarVisible:!1,mobileControlsVisible:!0,mobileControlsExpanded:!1,lastInteractionTime:Date.now()},L3=(e,t)=>{switch(t.type){case"TOGGLE_EXPLORER":return{...e,explorerVisible:!e.explorerVisible,mainContentWidth:e.explorerVisible?"100%":`calc(100% - ${e.explorerWidth}px)`};case"SET_EXPLORER_WIDTH":return{...e,explorerWidth:t.payload,mainContentWidth:e.explorerVisible?`calc(100% - ${t.payload}px)`:"100%"};case"SET_CONTROLS_EXPANDED":return{...e,horizontalControlsExpanded:t.payload};case"SET_SIDEBAR_VISIBLE":return{...e,sidebarVisible:t.payload};default:return e}},Xg=b.createContext({state:Kg,dispatch:()=>null}),_3=({children:e})=>{const[t,n]=b.useReducer(L3,Kg);return y.jsx(Xg.Provider,{value:{state:t,dispatch:n},children:e})},va=()=>b.useContext(Xg),D3={id:"space-grey",name:"Space Grey",background:{primary:"rgba(28, 28, 30, 0.9)",secondary:"rgba(44, 44, 46, 0.8)",gradient:"linear-gradient(135deg, rgba(44, 44, 46, 0.9) 0%, rgba(28, 28, 30, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(44, 44, 46, 0.3)",border:"rgba(142, 142, 147, 0.2)"},player:{background:"rgba(28, 28, 30, 0.4)",controls:"rgba(44, 44, 46, 0.95)"},text:{primary:"rgba(255, 255, 255, 0.9)",secondary:"rgba(255, 255, 255, 0.6)"},ui:{primary:"#8E8E93",secondary:"#636366",accent:"#0A84FF",hover:"rgba(255, 255, 255, 0.1)"}},N3={id:"ocean-blue",name:"Ocean Blue",background:{primary:"rgba(0, 67, 112, 0.9)",secondary:"rgba(0, 92, 151, 0.8)",gradient:"linear-gradient(135deg, rgba(0, 92, 151, 0.9) 0%, rgba(0, 67, 112, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(0, 128, 201, 0.2)",border:"rgba(91, 192, 235, 0.2)"},player:{background:"rgba(0, 67, 112, 0.4)",controls:"rgba(0, 92, 151, 0.95)"},text:{primary:"rgba(255, 255, 255, 0.9)",secondary:"rgba(255, 255, 255, 0.6)"},ui:{primary:"#91D2FA",secondary:"#5BC0EB",accent:"#00A8E8",hover:"rgba(91, 192, 235, 0.2)"}},qu={id:"classical-black",name:"Classical Black",background:{primary:"rgba(0, 0, 0, 0.9)",secondary:"rgba(18, 18, 18, 0.8)",gradient:"linear-gradient(135deg, rgba(18, 18, 18, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(30, 30, 30, 0.3)",border:"rgba(45, 45, 45, 0.2)"},player:{background:"rgba(10, 10, 10, 0.4)",controls:"rgba(18, 18, 18, 0.95)"},text:{primary:"rgba(255, 255, 255, 0.9)",secondary:"rgba(255, 255, 255, 0.6)"},ui:{primary:"#AAAAAA",secondary:"#747474",accent:"#FFFFFF",hover:"rgba(255, 255, 255, 0.1)"}},I3={id:"contrast-light",name:"Contrast Light",background:{primary:"rgba(245, 245, 245, 0.9)",secondary:"rgba(235, 235, 235, 0.8)",gradient:"linear-gradient(135deg, rgba(235, 235, 235, 0.9) 0%, rgba(245, 245, 245, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(255, 255, 255, 0.3)",border:"rgba(200, 200, 200, 0.3)"},player:{background:"rgba(255, 255, 255, 0.4)",controls:"rgba(255, 255, 255, 0.95)"},text:{primary:"rgba(0, 0, 0, 0.9)",secondary:"rgba(0, 0, 0, 0.6)"},ui:{primary:"#666666",secondary:"#999999",accent:"#007AFF",hover:"rgba(0, 0, 0, 0.05)"}},O3={id:"cyber-punk",name:"Cyber Punk",background:{primary:"rgba(8, 0, 28, 0.9)",secondary:"rgba(24, 0, 50, 0.8)",gradient:"linear-gradient(135deg, rgba(24, 0, 50, 0.9) 0%, rgba(120, 0, 120, 0.6) 50%, rgba(8, 0, 28, 0.95) 100%)",blur:"10px"},explorer:{background:"rgba(120, 0, 120, 0.2)",border:"rgba(255, 0, 255, 0.2)"},player:{background:"rgba(8, 0, 28, 0.4)",controls:"rgba(24, 0, 50, 0.95)"},text:{primary:"rgba(255, 255, 255, 0.9)",secondary:"rgba(255, 255, 255, 0.6)"},ui:{primary:"#FF00FF",secondary:"#00FFFF",accent:"#FE53BB",hover:"rgba(255, 0, 255, 0.2)"}},or={"space-grey":D3,"ocean-blue":N3,"classical-black":qu,"contrast-light":I3,"cyber-punk":O3},Qg=b.createContext({currentTheme:qu,setTheme:()=>{},availableThemes:Object.values(or)}),qg=()=>b.useContext(Qg),V3=({children:e})=>{const[t,n]=b.useState(()=>{const o=localStorage.getItem("theme");return o&&or[o]?or[o]:qu}),r=o=>{or[o]&&(n(or[o]),localStorage.setItem("theme",o))},i=Object.values(or);return y.jsx(Qg.Provider,{value:{currentTheme:t,setTheme:r,availableThemes:i},children:e})},Zg={optimizeElement(e){e&&(e.style.transform="translateZ(0)",e.style.backfaceVisibility="hidden",e.style.willChange="transform, opacity")},throttle(e,t){let n=0;return(...r)=>{const i=Date.now();i-n>=t&&(n=i,e(...r))}},debounce(e,t){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}},Jg=b.forwardRef(({children:e,className:t,height:n,style:r},i)=>{var L;const o=he.useRef(null),s=b.useRef(),[a,l]=b.useState(!1),[c,u]=b.useState(!1),[d,f]=b.useState(40),[m,v]=b.useState({top:!0,bottom:!1}),[x,S]=b.useState(!1),{scrollYProgress:g}=$3({container:o,offset:["start start","end end"]}),h=i3(g,{damping:20,stiffness:300,mass:.5,restSpeed:.001}),p=Qu(1),w=r3(h,[0,1],[0,(L=o.current)!=null&&L.clientHeight?o.current.clientHeight-d:0],{clamp:!0}),C=b.useCallback(()=>{if(!o.current)return;const{clientHeight:j,scrollHeight:U}=o.current,K=j/U,G=Math.max(Math.min(K*j,j/2),40);f(G)},[]),P=b.useCallback(()=>{if(!o.current)return;const{scrollTop:j,scrollHeight:U,clientHeight:K}=o.current,G=j<=0,Q=j+K>=U-1;v({top:G,bottom:Q}),l(!0),(G||Q)&&(p.set(.98),setTimeout(()=>p.set(1),150)),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{l(!1)},150)},[p]),E=Zg.throttle(P,16);b.useEffect(()=>{const j=o.current;if(!j)return;const U=()=>E(),K=()=>C(),G=new ResizeObserver(K);return G.observe(j),j.addEventListener("scroll",U,{passive:!0}),window.addEventListener("resize",K,{passive:!0}),C(),()=>{G.disconnect(),j&&j.removeEventListener("scroll",U),window.removeEventListener("resize",K),s.current&&clearTimeout(s.current)}},[E,C]);const T=b.useCallback(j=>{if(j.preventDefault(),j.stopPropagation(),!o.current)return;u(!0);const U=j.clientY,K=o.current.scrollHeight,G=o.current.clientHeight,Q=G-d,Pe=o.current.scrollTop,Z=z=>{if(!o.current)return;const M=(z.clientY-U)/Q*(K-G);o.current.scrollTop=Math.max(0,Math.min(Pe+M,K-G))},oe=()=>{u(!1),document.removeEventListener("pointermove",Z),document.removeEventListener("pointerup",oe),document.body.style.cursor="",document.body.style.userSelect=""};document.body.style.cursor="grabbing",document.body.style.userSelect="none",document.addEventListener("pointermove",Z),document.addEventListener("pointerup",oe)},[d]);return y.jsxs(F3,{ref:i,onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:[y.jsx(B3,{ref:o,className:t,$height:n,style:{...r,transform:`scale(${p.get()})`},children:e}),y.jsx(H3,{animate:{opacity:x||a||c?1:.3,width:x||c?"10px":"6px"},transition:{duration:.2},children:y.jsx(U3,{as:V.div,style:{height:d,y:w,scale:p},animate:{opacity:a||c||x?1:.7,width:x||c?"100%":"80%",x:"-50%"},whileHover:{scale:1.05},whileTap:{scale:.95},onPointerDown:T,transition:{opacity:{duration:.2},scale:{type:"spring",stiffness:400,damping:25}},$isDragging:c,$isHovered:x,$isAtEdge:m})})]})}),F3=k.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,B3=k.div`
  height: ${e=>e.$height||"100%"};
  overflow-y: auto;
  padding-right: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transform-origin: center;
  transition: transform 0.2s ease;

  &::-webkit-scrollbar {
    display: none;
  }
`,H3=k(V.div)`
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
`,U3=k(V.div)`
  position: absolute;
  left: 50%;
  width: 80%;
  border-radius: inherit;
  background: ${e=>e.$isDragging?"linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)":e.$isHovered?"linear-gradient(135deg, #66bb6a 0%, #43a047 100%)":"linear-gradient(135deg, rgba(76, 175, 80, 0.8) 0%, rgba(67, 160, 71, 0.9) 100%)"};
  cursor: grab;
  touch-action: none;
  pointer-events: auto;
  will-change: transform, width, opacity;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:active {
    cursor: grabbing;
    background: linear-gradient(135deg, #43a047 0%, #2e7d32 100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(47, 185, 23, 0.78);
    border-radius: 1px;
    transform: translate(-50%, -50%);
    opacity: ${e=>e.$isHovered?1:0};
    transition: opacity 0.2s ease;
  }
`;Jg.displayName="CustomScrollbar";const e1="/assets/covers/default_cover_2.jpeg",bn=e=>e?(e.startsWith("http"),e):e1;var t1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_p=he.createContext&&he.createContext(t1),Sn=globalThis&&globalThis.__assign||function(){return Sn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Sn.apply(this,arguments)},W3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function n1(e){return e&&e.map(function(t,n){return he.createElement(t.tag,Sn({key:n},t.attr),n1(t.child))})}function be(e){return function(t){return he.createElement(G3,Sn({attr:Sn({},e.attr)},t),n1(e.child))}}function G3(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=W3(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),he.createElement("svg",Sn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Sn(Sn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&he.createElement("title",null,o),e.children)};return _p!==void 0?he.createElement(_p.Consumer,null,function(n){return t(n)}):t(t1)}function Y3(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"}}]})(e)}function K3(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function X3(e){return be({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function Q3(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"}}]})(e)}function q3(e){return be({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"}}]})(e)}function Z3(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function J3(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(e)}function xa(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}}]})(e)}function wa(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function eS(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}}]})(e)}function r1(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"}}]})(e)}function i1(e){return be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"}}]})(e)}function tS(e){return be({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function nS(e){return be({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"}}]})(e)}function rS(e){return be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"}}]})(e)}function o1(e){return be({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"}}]})(e)}function iS(e){return be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}},{tag:"line",attr:{x1:"11",y1:"8",x2:"11",y2:"14"}},{tag:"line",attr:{x1:"8",y1:"11",x2:"14",y2:"11"}}]})(e)}function oS(e){return be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}},{tag:"line",attr:{x1:"8",y1:"11",x2:"14",y2:"11"}}]})(e)}const sS=()=>{const{state:e,dispatch:t}=Qt(),{dispatch:n}=va(),[r,i]=b.useState(!1),[o,s]=b.useState({}),[a,l]=b.useState({field:"title",direction:"asc"}),[c,u]=b.useState({search:"",favorites:!1,minPlays:0}),[d,f]=b.useState(!0),[m,v]=b.useState(null),[x,S]=b.useState(!1),[g,h]=b.useState(window.innerWidth<=768);b.useEffect(()=>{const A=()=>{h(window.innerWidth<=768)};return window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);const[p,w]=b.useState("albums"),[C,P]=b.useState(null),[E,T]=b.useState(120),L=80,j=180,U=b.useRef(null),K=b.useRef(null),G=b.useRef(null),Q=b.useRef(null);b.useEffect(()=>{if(!Q.current)return;const A=new ResizeObserver(D=>{for(const B of D){const O=B.contentRect.width,q=B.target;O<200&&r?q.style.fontSize="1.1rem":O<300&&r?q.style.fontSize="1.3rem":q.style.fontSize=r?"1.5rem":"1.2rem"}});return A.observe(Q.current),()=>{Q.current&&A.unobserve(Q.current)}},[r]),b.useEffect(()=>{(async()=>{try{f(!0);const D=localStorage.getItem("trackStats");if(D){const B=JSON.parse(D);s(B)}}catch(D){console.error("Failed to load track stats:",D),s({}),v("Failed to load track statistics")}finally{f(!1)}})()},[]);const Pe=A=>{var D,B;try{const O={...o,[A]:{plays:(((D=o[A])==null?void 0:D.plays)||0)+1,lastPlayed:new Date,favorite:((B=o[A])==null?void 0:B.favorite)||!1}};s(O),localStorage.setItem("trackStats",JSON.stringify(O))}catch(O){console.error("Failed to update track stats:",O)}},Z=A=>{var B,O,q;const D={...o,[A]:{...o[A],favorite:!((B=o[A])!=null&&B.favorite),lastPlayed:((O=o[A])==null?void 0:O.lastPlayed)||null,plays:((q=o[A])==null?void 0:q.plays)||0}};s(D);try{localStorage.setItem("trackStats",JSON.stringify(D))}catch(qt){console.error("Failed to save favorites:",qt)}},oe=A=>[...A].sort((D,B)=>{const O=o[D.id],q=o[B.id];switch(a.field){case"title":return a.direction==="asc"?D.title.localeCompare(B.title):B.title.localeCompare(D.title);case"artist":return a.direction==="asc"?D.artist.localeCompare(B.artist):B.artist.localeCompare(D.artist);case"album":return a.direction==="asc"?D.album.localeCompare(B.album):B.album.localeCompare(D.album);case"plays":return a.direction==="asc"?((O==null?void 0:O.plays)||0)-((q==null?void 0:q.plays)||0):((q==null?void 0:q.plays)||0)-((O==null?void 0:O.plays)||0);case"lastPlayed":const qt=O!=null&&O.lastPlayed?new Date(O.lastPlayed).getTime():0,ao=q!=null&&q.lastPlayed?new Date(q.lastPlayed).getTime():0;return a.direction==="asc"?qt-ao:ao-qt;case"favorites":const Zu=(O==null?void 0:O.favorite)||!1,Ju=(q==null?void 0:q.favorite)||!1;return a.direction==="asc"?Number(Zu)-Number(Ju):Number(Ju)-Number(Zu);default:return 0}}),z=A=>A.filter(D=>{const B=o[D.id],O=c.search.toLowerCase(),q=O===""||D.title.toLowerCase().includes(O)||D.artist.toLowerCase().includes(O),qt=!c.favorites||(B==null?void 0:B.favorite),ao=((B==null?void 0:B.plays)||0)>=c.minPlays;return q&&qt&&ao});b.useEffect(()=>{n({type:"SET_EXPLORER_WIDTH",payload:60})},[]);const N=b.useCallback(()=>{const A=r;i(!A),n({type:"TOGGLE_EXPLORER"}),n(g?{type:"SET_EXPLORER_WIDTH",payload:A?70:window.innerWidth}:{type:"SET_EXPLORER_WIDTH",payload:A?110:window.innerWidth}),A&&(w("albums"),P(null))},[r,n,g]);b.useEffect(()=>{const A=D=>{var B;D.ctrlKey&&D.key==="f"&&r&&(D.preventDefault(),(B=K.current)==null||B.focus())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[r]),b.useEffect(()=>{const A=sessionStorage.getItem("explorerScrollPosition");return A&&G.current&&(G.current.scrollTop=parseInt(A)),()=>{G.current&&sessionStorage.setItem("explorerScrollPosition",G.current.scrollTop.toString())}},[]),b.useEffect(()=>{r||S(!1)},[r]);const R=[{value:"title",label:"Title"},{value:"artist",label:"Artist"},{value:"album",label:"Album"},{value:"plays",label:"Plays"},{value:"lastPlayed",label:"Last Played"},{value:"favorites",label:"Favorites"}],M=b.useRef([]);b.useEffect(()=>{const A=oe(z(e.queue));if(!A||A.length===0)return;JSON.stringify(M.current)!==JSON.stringify(A)&&(M.current=[...A],t({type:"SET_ACTIVE_CONTEXT",payload:{id:"explorer",type:"explorer",tracks:A,name:"Music Explorer",viewConfig:{sortBy:a.field,isAscending:a.direction==="asc",filterBy:c.search}}}))},[e.queue,a,c]);const _=b.useMemo(()=>{const A=new Map;return e.queue.forEach(D=>{var O;const B=`${D.album}-${D.artist}`;A.has(B)?(O=A.get(B))==null||O.tracks.push(D):A.set(B,{id:B,title:D.album,artist:D.artist,coverArt:D.coverArt,tracks:[D]})}),Array.from(A.values())},[e.queue]),F=b.useMemo(()=>[..._].sort((A,D)=>{switch(a.field){case"title":return a.direction==="asc"?A.title.localeCompare(D.title):D.title.localeCompare(A.title);case"artist":return a.direction==="asc"?A.artist.localeCompare(D.artist):D.artist.localeCompare(A.artist);default:return 0}}),[_,a]),Y=b.useMemo(()=>F.filter(A=>{const D=c.search.toLowerCase();return D===""||A.title.toLowerCase().includes(D)||A.artist.toLowerCase().includes(D)}),[F,c.search]),J=A=>{r?(P(A),w("tracks")):(i(!0),n({type:"TOGGLE_EXPLORER"}),setTimeout(()=>{P(A),w("tracks")},300))},se=()=>{w("albums"),P(null)},fe=()=>d?y.jsxs(MS,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[y.jsx(RS,{}),y.jsx("span",{children:"Loading music library..."})]}):p==="albums"?y.jsx(_S,{$isExpanded:r,$albumSize:E,children:Y.length===0?y.jsx(rk,{children:"No albums match your search criteria"}):Y.map(A=>y.jsxs(NS,{onClick:()=>J(A),$isExpanded:r,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:30,mass:.8},children:[y.jsx(DS,{$isExpanded:r,$size:E,whileHover:{scale:1.05},whileTap:{scale:.95},children:y.jsx("img",{src:bn(A.coverArt),alt:`${A.title} cover`,loading:"lazy",draggable:!1})}),r&&y.jsxs(FS,{children:[y.jsx(IS,{children:A.title}),y.jsx(OS,{children:A.artist}),y.jsxs(VS,{children:[A.tracks.length," tracks"]})]})]},A.id))}):p==="tracks"&&C?y.jsxs(y.Fragment,{children:[y.jsx(BS,{onClick:se,whileHover:{scale:1.05},whileTap:{scale:.95},children:"← Back to Albums"}),y.jsxs(HS,{children:[y.jsx(US,{children:y.jsx("img",{src:bn(C.coverArt),alt:`${C.title} cover`,draggable:!1})}),y.jsxs(WS,{children:[y.jsx(GS,{children:C.title}),y.jsx(YS,{children:C.artist}),y.jsxs(KS,{children:[C.tracks.length," tracks"]})]})]}),y.jsx(CS,{$isExpanded:r,children:oe(C.tracks).map(A=>{var D;return y.jsx(aS,{track:A,stats:o[A.id],isActive:((D=e.currentTrack)==null?void 0:D.id)===A.id,onClick:()=>{t({type:"SET_TRACK",payload:A}),t({type:"PLAY"}),Pe(A.id)},onExpand:()=>{i(!0),n({type:"TOGGLE_EXPLORER"})},onToggleFavorite:Z,onTogglePlay:()=>{t(e.isPlaying?{type:"PAUSE"}:{type:"PLAY"})}},A.id)})})]}):null;return b.useEffect(()=>{if(x){const A=document.querySelector("[data-sort-button]");A&&A.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.15)",offset:.5},{transform:"scale(1)",offset:1}],{duration:400,easing:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"})}},[x]),b.useEffect(()=>{if(!U.current)return;const A=new ResizeObserver(()=>{var B,O;r&&n({type:"SET_EXPLORER_WIDTH",payload:((O=(B=U.current)==null?void 0:B.parentElement)==null?void 0:O.clientWidth)||window.innerWidth})}),D=U.current.parentElement;return D&&A.observe(D),()=>{A.disconnect()}},[r,n]),y.jsxs(lS,{ref:U,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},$isExpanded:r,className:"explorer-container",children:[y.jsx(Op,{}),y.jsxs(wS,{$isExpanded:r,className:"header-section",children:[y.jsx(bS,{ref:Q,$isExpanded:r,animate:{scale:r?1:.9},transition:{duration:.3},children:r?p==="albums"?"Music Explorer":(C==null?void 0:C.title)||"Tracks":"DP"}),r&&p==="albums"&&y.jsxs(JS,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[y.jsx(Ip,{onClick:()=>T(Math.max(L,E-10)),disabled:E<=L,whileHover:{scale:1.1},whileTap:{scale:.95},children:y.jsx(oS,{})}),y.jsx(nk,{children:y.jsxs(XS,{onClick:A=>{const D=A.currentTarget.getBoundingClientRect(),O=(A.clientX-D.left)/D.width,q=L+O*(j-L);T(Math.round(q))},children:[y.jsx(QS,{$progress:(E-L)/(j-L)}),y.jsx(qS,{$progress:(E-L)/(j-L),drag:"x",dragConstraints:{left:0,right:0},dragElastic:0,dragMomentum:!1,onDrag:(A,D)=>{const B=A.target.parentElement;if(!B)return;const O=B.getBoundingClientRect(),q=Math.max(0,Math.min(1,(D.point.x-O.left)/O.width)),qt=L+q*(j-L);T(Math.round(qt))}})]})}),y.jsx(Ip,{onClick:()=>T(Math.min(j,E+10)),disabled:E>=j,whileHover:{scale:1.1},whileTap:{scale:.95},children:y.jsx(iS,{})})]}),y.jsx(ZS,{$isExpanded:r,children:y.jsx(SS,{$isExpanded:r,onClick:N,whileHover:{scale:1.1},whileTap:{scale:.95},"aria-label":r?"Collapse explorer":"Expand explorer",children:r?"−":"+"})})]}),m&&y.jsxs(ES,{children:[m,y.jsx(PS,{onClick:()=>window.location.reload(),children:"Retry"})]}),!m&&r&&y.jsx(Lt,{children:y.jsxs(yS,{className:"controls-section",children:[y.jsx(vS,{ref:K,value:c.search,onChange:A=>u(D=>({...D,search:A.target.value})),placeholder:p==="albums"?"Search albums...":"Search tracks..."}),y.jsxs(xS,{children:[y.jsx(Ns,{onClick:()=>S(!x),$active:x,whileHover:{scale:1.05},whileTap:{scale:.95},"data-sort-button":!0,children:y.jsx(tk,{$active:x,children:y.jsx("img",{src:"public/assets/icons/categories.png",alt:"Sort options",width:"16",height:"16",style:{objectFit:"contain"}})})}),p==="tracks"&&y.jsx(Ns,{onClick:se,$active:!1,whileHover:{scale:1.05},whileTap:{scale:.95},children:y.jsx("span",{children:"←"})})]})]})}),y.jsx(Lt,{children:x&&y.jsx(TS,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"sorting-section",children:y.jsx(AS,{children:R.map(A=>y.jsxs($S,{$isActive:a.field===A.value,onClick:()=>{a.field===A.value?l(D=>({...D,direction:D.direction==="asc"?"desc":"asc"})):l({field:A.value,direction:"asc"})},whileHover:{scale:1.02},whileTap:{scale:.98},children:[y.jsx("span",{children:A.label}),a.field===A.value&&y.jsx(V.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:a.direction==="asc"?"↑":"↓"})]},A.value))})})}),y.jsx(kS,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"content-container",children:y.jsx(Jg,{ref:G,children:fe()})}),y.jsx(Op,{})]})},aS=({track:e,stats:t,isActive:n,onClick:r,onExpand:i,onToggleFavorite:o,onTogglePlay:s})=>{const[a,l]=b.useState(!1),[c,u]=b.useState(!1),[d,f]=b.useState(!1),{state:m}=va(),{state:v}=Qt(),x=m.explorerVisible,S=b.useRef(null),g=p=>{p.stopPropagation(),t!=null&&t.favorite?S.current&&S.current.animate([{transform:"scale(1)",opacity:1,offset:0},{transform:"scale(0.8)",opacity:.5,offset:.5},{transform:"scale(1)",opacity:1,offset:1}],{duration:300,easing:"ease-out"}):(u(!0),f(!0),navigator.vibrate&&navigator.vibrate([15,10,30]),S.current&&S.current.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.5)",offset:.3},{transform:"scale(0.8)",offset:.6},{transform:"scale(1.2)",offset:.8},{transform:"scale(1)",offset:1}],{duration:600,easing:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"}),setTimeout(()=>{u(!1),f(!1)},1e3)),o(e.id)},h=b.useMemo(()=>Array.from({length:16}).map((p,w)=>({id:w,angle:w*22.5+Math.random()*10,delay:w*.02,size:3+Math.random()*5,distance:30+Math.random()*30})),[]);return y.jsxs(cS,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:30,mass:.8},onHoverStart:()=>l(!0),onHoverEnd:()=>l(!1),$isActive:n,$isExpanded:x,onClick:()=>{r(),x||i()},layout:!0,children:[y.jsxs(uS,{$isExpanded:x,$isActive:n,$isPlaying:n&&v.isPlaying,whileHover:!n||!v.isPlaying?{scale:1.05,transition:{duration:.3,ease:"easeOut"}}:{},children:[y.jsx(dS,{src:bn(e.coverArt),alt:`${e.title} cover`,$isPlaying:n&&v.isPlaying,transition:{rotate:{duration:20,ease:"linear"}},loading:"lazy",draggable:!1}),n&&y.jsx(fS,{role:"button",tabIndex:0,onClick:p=>{p.stopPropagation(),s()},onKeyPress:p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),s())},$isPlaying:v.isPlaying,initial:{opacity:0},animate:{opacity:a?1:0,scale:v.isPlaying?1.1:1},transition:{duration:.2},whileHover:{scale:1.15},whileTap:{scale:.95},children:v.isPlaying?y.jsx(xa,{size:20}):y.jsx(wa,{size:20})})]}),y.jsx(Lt,{children:x&&y.jsxs(pS,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3,delay:.1},children:[y.jsx(hS,{$isActive:n,children:e.title}),y.jsx(mS,{children:e.artist}),y.jsxs(gS,{initial:{opacity:0},animate:{opacity:a?1:0},transition:{duration:.2},children:[y.jsxs(Dp,{children:[y.jsx(Np,{children:"🎵"}),(t==null?void 0:t.plays)||0]}),(t==null?void 0:t.lastPlayed)&&y.jsxs(Dp,{children:[y.jsx(Np,{children:"🕒"}),new Date(t.lastPlayed).toLocaleDateString()]})]})]})}),y.jsx(jS,{ref:S,initial:{scale:1},animate:{scale:d?[1,1.2,1]:1,transition:{repeat:d?2:0,duration:.5}},whileHover:{scale:t!=null&&t.favorite?[1,1.2,1.1]:1.15,transition:{duration:.3,type:"spring",stiffness:300}},whileTap:{scale:.9},onClick:g,"aria-label":t!=null&&t.favorite?"Remove from favorites":"Add to favorites",$isFavorite:(t==null?void 0:t.favorite)||!1,onHoverStart:()=>l(!0),onHoverEnd:()=>l(!1),children:y.jsx(Lt,{mode:"wait",children:t!=null&&t.favorite?y.jsx(V.img,{src:"public/assets/icons/selected_later.png",alt:"Favorite",width:"20",height:"20",initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",damping:10,stiffness:200},style:{objectFit:"contain"}},"favorite"):y.jsx(V.img,{src:a?"public/assets/icons/selected.png":"public/assets/icons/add_1.png",alt:"Add to favorites",width:"20",height:"20",initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{type:"spring",damping:10,stiffness:200},style:{objectFit:"contain"}},"not-favorite")})}),y.jsx(Lt,{children:c&&y.jsxs(zS,{children:[h.map(p=>y.jsx(LS,{initial:{scale:0,opacity:1,x:0,y:0},animate:{scale:[0,1,0],opacity:[1,.8,0],x:[0,Math.cos(p.angle*(Math.PI/180))*p.distance],y:[0,Math.sin(p.angle*(Math.PI/180))*p.distance]},transition:{duration:.8,delay:p.delay,ease:[.2,.8,.2,1]},style:{width:`${p.size}px`,height:`${p.size}px`,background:p.id%3===0?"radial-gradient(circle, rgba(76, 175, 80, 0.8), rgba(76, 175, 80, 0) 70%)":p.id%3===1?"radial-gradient(circle, rgba(129, 199, 132, 0.8), rgba(129, 199, 132, 0) 70%)":"radial-gradient(circle, rgba(200, 230, 201, 0.8), rgba(200, 230, 201, 0) 70%)",boxShadow:p.id%3===0?"0 0 8px rgba(76, 175, 80, 0.8)":p.id%3===1?"0 0 8px rgba(129, 199, 132, 0.8)":"0 0 8px rgba(200, 230, 201, 0.8)"}},p.id)),y.jsx(V.div,{initial:{scale:0,opacity:0},animate:{scale:[0,3,0],opacity:[1,0]},transition:{duration:.6,ease:"easeOut"},style:{position:"absolute",width:"20px",height:"20px",borderRadius:"50%",background:"radial-gradient(circle, rgba(76, 175, 80, 0.8) 0%, rgba(129, 199, 132, 0.4) 50%, rgba(76, 175, 80, 0) 70%)",filter:"blur(2px)",transform:"translate(-50%, -50%)"}})]})})]})},lS=k(V.div).attrs(e=>({style:{width:e.$isExpanded?"100%":window.innerWidth<=768?"100px":"110px",flex:e.$isExpanded?1:"none"}}))`
  position: relative;
  height: 100%;
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1),
    height 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease,
    transform 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  border-radius: 12px;
  background: rgba(18, 18, 18, 0.4);
  box-shadow: none;
  margin-left: 10px;
  margin-right: 10px;
  isolation: isolate;

  @media (max-width: 768px) {
    position: ${e=>e.$isExpanded?"relative":"fixed"};
    top: 0;
    left: 0;
    bottom: 0;
    margin-left: 0;
    margin-right: 0;
    height: ${e=>e.$isExpanded?"100%":"100vh"};
    max-height: 100vh;
    border-radius: 0; /* Remove border radius on mobile */
    z-index: ${e=>e.$isExpanded?10:5};
  }
`,cS=k(V.div).attrs(e=>({style:{padding:e.$isExpanded?"12px":"4px",gap:e.$isExpanded?"12px":"4px",height:(e.$isExpanded,"auto"),width:e.$isExpanded?"auto":"90px",flexDirection:e.$isExpanded?"row":"column",alignItems:e.$isExpanded?"stretch":"center",justifyContent:e.$isExpanded?"flex-start":"center"}}))`
  display: flex;
  background: rgba(255, 255, 255, 0.03); /* Very subtle light background */
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  /* Add subtle hover effect */
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateZ(2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,uS=k(V.div).attrs(e=>({style:{width:e.$isExpanded?"48px":"72px",height:e.$isExpanded?"48px":"72px",borderRadius:e.$isActive&&e.$isPlaying?"50%":"8px"}}))`
  position: relative;
  overflow: visible; // Changed to visible to show glow
  flex-shrink: 0;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  perspective: 1000px;

  // Glowing edge effect
  ${e=>e.$isActive&&e.$isPlaying&&`
    &::after {
      content: '';
      position: absolute;
      inset: -2px; // Slightly larger than container
      background: conic-gradient(
        from 0deg,
        rgba(76, 175, 80, 0.8),
        rgba(76, 175, 80, 0.2),
        rgba(76, 175, 80, 0.8),
        rgba(76, 175, 80, 0.2),
        rgba(76, 175, 80, 0.8)
      );
      border-radius: 50%;
      animation: glowSpin 3s linear infinite;
      z-index: -1;
      filter: blur(4px);
    }

    @keyframes glowSpin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}

  // CD center hole
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: ${e=>e.$isActive&&e.$isPlaying?1:0};
    transition: opacity 0.3s ease;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.6); // Added glow to center hole
  }
`,dS=k(V.img).attrs(e=>({style:{borderRadius:e.$isPlaying?"50%":"8px",boxShadow:e.$isPlaying?"0 0 15px rgba(76, 175, 80, 0.3)":"none",animation:e.$isPlaying?"spin 20s linear infinite":"none",filter:e.$isPlaying?"brightness(1.1)":"none"}}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform-origin: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`,fS=k(V.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0;
  border-radius: 50%; // Match parent's circular shape
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
  }

  svg {
    opacity: ${e=>e.$isPlaying?.9:1};
    transition: opacity 0.3s ease;
  }
`,pS=k(V.div)`
  flex: 1;
  min-width: 0;
  user-select: none; // Add this to make text unselectable
`,hS=k.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.$isActive?"#4caf50":"white"};
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none; // Add this to make text unselectable
  /* Add subtle text shadow for active items instead of background color */
  text-shadow: ${e=>e.$isActive?"0 0 8px rgba(76, 175, 80, 0.3)":"none"};
`,mS=k.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none; // Add this to make text unselectable
`,gS=k(V.div)`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  user-select: none; // Add this to make stats unselectable
`,Dp=k.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
`,Np=k.span`
  font-size: 12px;
`,yS=k(V.div)`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--theme-background-gradient, rgba(0, 0, 0, 0.3));
  classname: controls-section;
`,vS=k.input.attrs({"aria-label":"Search tracks",type:"text",placeholder:"Search tracks..."})`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`,xS=k.div`
  display: flex;
  gap: 4px;
`,wS=k.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$isExpanded?"space-between":"center"};
  padding: ${e=>e.$isExpanded?"12px":"8px"};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--theme-background-gradient, rgba(18, 18, 18, 0.4));
  position: relative;
  z-index: 1;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    flex-direction: ${e=>e.$isExpanded?"row":"column"};
    height: ${e=>(e.$isExpanded,"auto")};
    padding: ${e=>e.$isExpanded?"12px":"10px"};
    justify-content: space-between;
  }
`,bS=k(V.div).attrs(e=>({style:{fontSize:e.$isExpanded?window.innerWidth<=768?"1.25rem":"1.5rem":window.innerWidth<=768?"0":"1.2rem",padding:e.$isExpanded?window.innerWidth<=768?"12px":"16px":window.innerWidth<=768?"0":"8px",opacity:!e.$isExpanded&&window.innerWidth<=768?0:1,display:!e.$isExpanded&&window.innerWidth<=768?"none":"flex"}}))`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  transition: all 0.3s ease;
  align-items: center;
  gap: 8px;
  width: ${e=>(e.$isExpanded,"auto")};
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    display: ${e=>e.$isExpanded?"flex":"none"}; // Hide completely on mobile collapsed
  }

  /* Responsive text shadow for better visibility */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`,SS=k(V.button)`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.3s ease;

  /* Add styling based on expanded state */
  transform: rotate(${e=>e.$isExpanded?"0deg":"180deg"});
  opacity: ${e=>e.$isExpanded?1:.8};

  &:hover {
    opacity: 1;
    color: ${e=>e.$isExpanded?"#4caf50":"white"};
  }
`,kS=k(V.div)`
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  background: rgba(18, 18, 18, 0.2); /* Very subtle background */
  backdrop-filter: blur(2px);
  classname: content-container;

  /* Add this to ensure proper height calculation */
  & > div {
    height: 100%;
    width: 100%;
  }
`,CS=k.div`
  padding: ${e=>e.$isExpanded?"8px":"4px"};
  display: grid;
  grid-template-columns: ${e=>e.$isExpanded?"1fr":"repeat(auto-fill, 80px)"};
  gap: ${e=>e.$isExpanded?"8px":"4px"};
  min-height: 0;
  flex: 1;
  justify-content: center;
`,ES=k.div`
  padding: 16px;
  color: #ff5252;
  text-align: center;
  background: rgba(255, 82, 82, 0.1);
  margin: 16px;
  border-radius: 8px;
`,PS=k.button`
  background: #ff5252;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    background: #ff6b6b;
  }
`,Ns=k(V.button)`
  position: relative;
  background: ${e=>e.$active?"rgba(76, 175, 80, 0.2)":"rgba(255, 255, 255, 0.1)"};
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$active?"#4caf50":"white"};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Add indicator line at bottom when active */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${e=>e.$active?"50%":"0"};
    height: 2px;
    background: #4caf50;
    transform: translateX(-50%);
    transition: width 0.3s ease;
    border-radius: 1px;
  }

  &:hover {
    background: ${e=>e.$active?"rgba(76, 175, 80, 0.3)":"rgba(255, 255, 255, 0.2)"};

    &::after {
      width: ${e=>e.$active?"80%":"40%"};
    }
  }
`,TS=k(V.div)`
  overflow: hidden;
  background: var(--theme-background-gradient, rgba(0, 0, 0, 0.3));
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-color: var(--theme-border-color, rgba(255, 255, 255, 0.1));
  padding: 8px;
  classname: sorting-section;
`,AS=k(V.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px;
  padding: 12px;
`,$S=k(V.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: ${e=>e.$isActive?"var(--theme-active-gradient, rgba(0, 0, 0, 0.4))":"var(--theme-background-gradient, rgba(0, 0, 0, 0.25))"};
  border: 1px solid
    ${e=>e.$isActive?"var(--theme-border-color, rgba(76, 175, 80, 0.3))":"rgba(255, 255, 255, 0.1)"};
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Ensure all text is consistent */
  span {
    color: white;
    position: relative;
    z-index: 2;
    font-weight: ${e=>e.$isActive?"600":"400"};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.45);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`,MS=k(V.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
`,RS=k(V.div)`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(76, 175, 80, 0.3);
  border-top-color: #4caf50;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,jS=k(V.button)`
  background: ${e=>e.$isFavorite?"rgba(76, 175, 80, 0.1)":"transparent"}; // Changed red to green
  border: none;
  border-radius: 50%;
  padding: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.9;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: ${e=>e.$isFavorite?"0 0 10px rgba(76, 175, 80, 0.4)":"none"}; // Changed red to green
  }

  &:focus-visible {
    outline: 2px solid #4caf50;
    outline-offset: 2px;
  }
`,zS=k(V.div)`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 2;
`,LS=k(V.div)`
  position: absolute;
  background: #4caf50;
  border-radius: 50%;
  transform-origin: center;
`,_S=k.div.attrs(e=>({style:{gridTemplateColumns:e.$isExpanded?`repeat(auto-fill, minmax(${e.$albumSize}px, 1fr))`:"1fr",gap:e.$isExpanded?"12px":"8px",padding:e.$isExpanded?"12px":"6px"}}))`
  display: grid;
  width: 100%;
`,DS=k(V.div)`
  width: ${e=>e.$isExpanded?`${e.$size||120}px`:"72px"};
  height: ${e=>e.$isExpanded?`${e.$size||120}px`:"72px"};
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`,NS=k(V.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: ${e=>e.$isExpanded?"6px":"4px"};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,IS=k.h3`
  margin: 0;
  font-size: 12px; // Smaller font
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 100%;
`,OS=k.p`
  margin: 2px 0 0;
  font-size: 11px; // Smaller font
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 100%;
`,VS=k.span`
  font-size: 10px; // Smaller font
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  text-align: center;
`,FS=k.div`
  width: 100%;
  padding: 6px 2px 2px;
  display: flex;
  flex-direction: column;
`,BS=k(V.button)`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  margin: 8px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`,HS=k.div`
  display: flex;
  padding: 12px;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,US=k.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,WS=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,GS=k.h2`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 700;
  color: white;
`,YS=k.p`
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,KS=k.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`,Ip=k(V.button)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #4caf50;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: rgba(255, 255, 255, 0.05);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,XS=k.div`
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  position: relative;
  overflow: visible;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);

  /* Add more tick marks for finer granularity */
  &::before,
  &::after,
  &::before ~ &::before,
  &::after ~ &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 1px;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%);
    border-radius: 1px;
    z-index: 1;
  }

  &::before {
    left: 20%;
  }
  &::after {
    left: 40%;
  }
  &::before ~ &::before {
    left: 60%;
  }
  &::after ~ &::after {
    left: 80%;
  }
`,QS=k.div.attrs(e=>({style:{width:`${e.$progress*100}%`}}))`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(76, 175, 80, 0.8),
    rgba(76, 175, 80, 0.5)
  );
  border-radius: 6px;
`,qS=k(V.div).attrs(e=>({style:{left:`${e.$progress*100}%`}}))`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: white;
  border: 2px solid var(--album-color-primary, rgba(76, 175, 80, 0.8));
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 5;
  transition: transform 0.05s ease-out, box-shadow 0.1s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 0 10px var(--album-color-primary, rgba(76, 175, 80, 0.6));
  }

  &:active {
    cursor: pointer;
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 15px var(--album-color-primary, rgba(76, 175, 80, 0.8));
  }

  &::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: var(--album-color-primary, rgba(76, 175, 80, 0.8));
    border-radius: 50%;
    opacity: 0.8;
  }
`,ZS=k.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: ${e=>e.$isExpanded?"row":"column"};
    align-items: ${e=>(e.$isExpanded,"center")};
    justify-content: ${e=>e.$isExpanded?"flex-start":"flex-end"};
    height: ${e=>(e.$isExpanded,"auto")};
    width: ${e=>e.$isExpanded?"auto":"100%"};
  }
`,JS=k(V.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--theme-background-gradient, rgba(0, 0, 0, 0.35));
  backdrop-filter: blur(10px);
  padding: 8px 12px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-color: var(--theme-border-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: visible; /* Changed from hidden to visible to show the email popup */
  classname: size-controls;
  z-index: 10; /* Ensure controls are above other elements */
`,Op=()=>{var s;const{state:e}=Qt(),[t,n]=b.useState(["#121212","#1e1e1e"]),[r,i]=b.useState(!1),o=b.useRef(null);return b.useEffect(()=>{var l;if(!((l=e.currentTrack)!=null&&l.coverArt)){i(!1);return}i(!0),(c=>{const u=new Image;u.crossOrigin="Anonymous",u.onload=()=>{const d=document.createElement("canvas"),f=d.getContext("2d");if(!f)return;d.width=u.width,d.height=u.height,f.drawImage(u,0,0,u.width,u.height);const m=f.getImageData(0,0,d.width,d.height).data,v={};for(let S=0;S<m.length;S+=40){const g=m[S],h=m[S+1],p=m[S+2],w=`#${g.toString(16).padStart(2,"0")}${h.toString(16).padStart(2,"0")}${p.toString(16).padStart(2,"0")}`;v[w]=(v[w]||0)+1}const x=Object.entries(v).sort((S,g)=>g[1]-S[1]).map(S=>S[0]);x.length>=2&&n(x.slice(0,5))},u.onerror=()=>{console.error("Failed to load image for color extraction")},u.src=c})(e.currentTrack.coverArt)},[(s=e.currentTrack)==null?void 0:s.coverArt]),b.useLayoutEffect(()=>{if(!o.current||!r||t.length<2)return;const a=o.current,l=a.getContext("2d");if(!l)return;let c,u=0;const d=()=>{const{width:m,height:v}=a.getBoundingClientRect();a.width=m,a.height=v};d(),window.addEventListener("resize",d);const f=()=>{if(!l||!a)return;l.clearRect(0,0,a.width,a.height);const m=l.createLinearGradient(0,0,a.width,a.height);m.addColorStop(0,`${t[0]}99`),m.addColorStop(.5,`${t[1]}88`),m.addColorStop(1,`${t[0]}99`),l.fillStyle=m,l.fillRect(0,0,a.width,a.height);const v=3;t.slice(0,3).forEach((x,S)=>{l.beginPath();const g=12+S*8,h=.002+S*.001;l.moveTo(0,a.height/2);for(let p=0;p<a.width;p++){const w=p/a.width,C=Math.sin(w*v*Math.PI+u*h)*g,P=a.height*.5+C+S*20;l.lineTo(p,P)}l.lineTo(a.width,a.height),l.lineTo(0,a.height),l.closePath(),l.fillStyle=`${x}33`,l.fill()}),u+=1,c=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("resize",d),cancelAnimationFrame(c)}},[t,r]),b.useEffect(()=>{if(t.length<2||!r)return;const a=t[0],l=t[1];document.documentElement.style.setProperty("--album-color-primary",a),document.documentElement.style.setProperty("--album-color-secondary",l);const c=`linear-gradient(135deg, 
      ${a}15, 
      ${l}20)`,u=`linear-gradient(135deg, 
      ${a}25, 
      ${l}30)`;document.documentElement.style.setProperty("--theme-background-gradient",c),document.documentElement.style.setProperty("--theme-active-gradient",u),document.documentElement.style.setProperty("--theme-border-color",`${a}40`);const d=()=>{[".header-section",".controls-section",".sorting-section",".filter-section",".size-controls",".content-container",".explorer-container"].forEach(x=>{document.querySelectorAll(x).forEach(g=>{const h=g;h.style.background=c,h.style.borderColor=`${a}40`,h.style.position="relative",h.style.zIndex="1",h.setAttribute("data-theme-styled","true")})}),document.querySelectorAll("[data-active='true']").forEach(x=>{const S=x;S.style.background=u,S.style.borderColor=`${a}60`,S.querySelectorAll("span").forEach(h=>{h.style.color="white",h.style.textShadow="0 1px 2px rgba(0, 0, 0, 0.6)",h.style.fontWeight="600"})})};d();const f=new MutationObserver(()=>{d()});return f.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","data-active","style"]}),()=>{f.disconnect(),document.documentElement.style.removeProperty("--album-color-primary"),document.documentElement.style.removeProperty("--album-color-secondary"),document.documentElement.style.removeProperty("--theme-background-gradient"),document.documentElement.style.removeProperty("--theme-active-gradient"),document.documentElement.style.removeProperty("--theme-border-color"),document.querySelectorAll('[data-theme-styled="true"]').forEach(v=>{const x=v;x.style.removeProperty("background"),x.style.removeProperty("border-color"),x.style.removeProperty("position"),x.style.removeProperty("z-index"),x.removeAttribute("data-theme-styled"),x.querySelectorAll("span").forEach(g=>{g.style.removeProperty("color"),g.style.removeProperty("text-shadow"),g.style.removeProperty("font-weight")})})}},[t,r]),y.jsx(ek,{ref:o,opacity:r?.85:0,initial:{opacity:0},animate:{opacity:r?.85:0},transition:{duration:1.2}})},ek=k(V.canvas).attrs(e=>({style:{opacity:e.opacity!==void 0?e.opacity:.85}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  border-radius: inherit;
`,tk=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${e=>e.$active?"rgba(76, 175, 80, 0.4)":"rgba(255, 255, 255, 0.2)"},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img {
    transition: all 0.3s ease;
    filter: ${e=>e.$active?"brightness(1.2) drop-shadow(0 0 3px rgba(76, 175, 80, 0.7))":"brightness(1)"};
  }

  ${Ns}:hover &::after {
    opacity: 1;
  }

  ${Ns}:hover & img {
    filter: ${e=>e.$active?"brightness(1.3) drop-shadow(0 0 4px rgba(76, 175, 80, 0.9))":"brightness(1.2) drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))"};
    transform: scale(1.1);
  }
`,nk=k.div`
  position: relative;
  width: 120px;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  margin-right: 8px; /* Add margin to prevent overlap with other elements */

  /* Create a slight background for better visibility */
  &::before {
    content: "";
    position: absolute;
    inset: 4px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    z-index: 0;
  }
`,rk=k.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  padding: 16px;
`;function ik(e){return be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}}]})(e)}function ok(e){return be({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"}},{tag:"path",attr:{d:"M3 3l18 18"}}]})(e)}function sk(e){return be({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"}},{tag:"path",attr:{d:"M11 11l1 -1v4"}}]})(e)}function ak(e){return be({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"}}]})(e)}const lk=k.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`,ck=k.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,uk=()=>{const e=b.useRef(null),{state:t}=Qt(),n=b.useRef(0);return b.useEffect(()=>{if(!e.current)return;const r=e.current,i=r.getContext("2d");if(!i)return;const o=window.devicePixelRatio||1,s=r.getBoundingClientRect();r.width=s.width*o,r.height=s.height*o,i.scale(o,o);const a=()=>{var m;if(!i)return;const l=((m=t.currentTrack)==null?void 0:m.color)||"#388e3c";n.current=requestAnimationFrame(a);const c=s.width,u=s.height;i.clearRect(0,0,c,u);const d=new Array(128).fill(0).map((v,x)=>{const S=t.progress*.01+x*.01;return Math.sin(S*.5)*.3+Math.sin(S*1.5)*.2+Math.sin(S*3.5)*.1}),f=i.createLinearGradient(0,0,c,u);f.addColorStop(0,`${l}40`),f.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=f,i.beginPath(),i.moveTo(0,u);for(let v=0;v<d.length;v++){const x=v/d.length*c,S=u-u*.5*(1+d[v]);i.lineTo(x,S)}i.lineTo(c,u),i.closePath(),i.fill(),i.strokeStyle=l,i.lineWidth=2,i.beginPath();for(let v=0;v<d.length;v++){const x=v/d.length*c,S=u-u*.5*(1+d[v]);v===0?i.moveTo(x,S):i.lineTo(x,S)}i.stroke()};return a(),()=>{n.current&&cancelAnimationFrame(n.current)}},[t.currentTrack,t.progress]),y.jsx(lk,{children:y.jsx(ck,{ref:e})})},dk=to`
  /* existing animation */
`,fk=to`
  /* existing animation */
`,pk=k.div.attrs({className:"dp-equalizer-container"})`
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
`,hk=k.canvas.attrs({className:"dp-equalizer-canvas"})`
  /* existing styles */
`,mk=k.div.attrs(e=>({className:"dp-equalizer-glow",style:{opacity:e.$isPlaying?.8:.2,animationDuration:`${3-e.$intensity*1.5}s`,background:`linear-gradient(90deg, transparent, ${e.$color}20, transparent)`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  animation-name: ${dk};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  background-size: 200% 200%;
  will-change: opacity, background;
`,gk=k.div.attrs(e=>({className:"dp-equalizer-flow",style:{animationDuration:`${8-e.$intensity*4}s`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: 200% 200%;
  animation-name: ${fk};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  mix-blend-mode: overlay;
  will-change: transform;
`,yk=k.div.attrs(e=>({style:{height:`${e.$height}%`,backgroundColor:e.$color}}))`
  width: 4px;
  border-radius: 2px;
  transition: height 0.1s ease;
  will-change: height;
`,vk=({isPlaying:e=!1,dominantColor:t="#4CAF50",audioRef:n,onIntensityChange:r})=>{var m;const{state:i}=Qt(),[o,s]=b.useState(Array(12).fill(10)),a=b.useRef(0),[l,c]=b.useState(0),u=b.useRef(0),d=b.useMemo(()=>{var v;return t||((v=i.currentTrack)==null?void 0:v.color)||"#388e3c"},[t,(m=i.currentTrack)==null?void 0:m.color]);b.useEffect(()=>{const v=o.reduce((x,S)=>x+S,0)/(o.length*100);c(v)},[o]),b.useEffect(()=>{r&&r(l)},[l,r]),b.useEffect(()=>{if(!i.isPlaying||!i.equalizerActive)return s(Array(12).fill(10)),()=>cancelAnimationFrame(a.current);const v=x=>{if(x-u.current<33){a.current=requestAnimationFrame(v);return}u.current=x,s(S=>{const g=S.map(p=>{const w=20+Math.random()*60;return p+(w-p)*.3});return g.some((p,w)=>Math.abs(p-S[w])>2)?g:S}),a.current=requestAnimationFrame(v)};return a.current=requestAnimationFrame(v),()=>{cancelAnimationFrame(a.current)}},[i.isPlaying,i.equalizerActive]);const f=b.useMemo(()=>o.map((v,x)=>y.jsx(yk,{$height:i.isPlaying?v:5,$color:d},x)),[o,i.isPlaying,d]);return y.jsxs(pk,{$isActive:e,$color:t,children:[y.jsx(hk,{ref:n,width:"280",height:"70"}),y.jsx(mk,{$intensity:l,$color:t,$isPlaying:e,children:y.jsx(gk,{$intensity:l,$color:t})}),f]})},xk=he.memo(vk),wk=k(V.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  z-index: 5;
  margin-left: 2px; /* Add margin to prevent slider from going too far left */
  will-change: transform, opacity;
`,bk=k(V.button).attrs(e=>({id:"music-player-volume-toggle","aria-label":e.volume===0?"Unmute":"Mute"}))`
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
`,Sk=k(V.div)`
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
`,kk=k.input.attrs({type:"range",min:"0",max:"100",step:"1",id:"music-player-volume-slider"})`
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
`,Ck=k(V.div)`
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
`,Ek=k(V.div)`
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
`,Pk=k(V.div)`
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
`,Tk=({volume:e,onVolumeChange:t,className:n})=>{const[r,i]=b.useState(!1),[o,s]=b.useState(!1),[a,l]=b.useState(e),[c,u]=b.useState(!1),d=b.useRef(null);b.useEffect(()=>{const S=g=>{d.current&&!d.current.contains(g.target)&&o&&s(!1)};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[o]);const f=()=>e===0?y.jsx(rS,{size:18,style:{opacity:.9,filter:"drop-shadow(0 0 2px rgba(255, 82, 82, 0.7))"}}):e<50?y.jsx(nS,{size:18,style:{opacity:e/100+.5,transform:`scale(${.9+e/200})`}}):y.jsx(o1,{size:18,style:{opacity:e/100+.5,transform:`scale(${.9+e/200})`}}),m=()=>{e===0?t(a>0?a:50):(l(e),t(0))},v=S=>{const g=parseInt(S.target.value,10);t(g)},x=b.useCallback(()=>{requestAnimationFrame(()=>{s(S=>!S)})},[]);return y.jsx(wk,{ref:d,className:n,onMouseEnter:()=>i(!0),onMouseLeave:()=>{i(!1),u(!1)},initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:y.jsx(Lt,{mode:"wait",initial:!1,presenceAffectsLayout:!1,children:o?y.jsxs(Sk,{initial:{opacity:0,width:"40px"},animate:{opacity:1,width:"120px"},exit:{opacity:0,width:"40px"},transition:{duration:.15,ease:"easeOut",width:{duration:.2}},children:[y.jsx("div",{style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",zIndex:2,filter:"drop-shadow(0 0 3px rgba(138, 43, 226, 0.7))"},children:f()}),y.jsx(kk,{value:e,onChange:v,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1)}),y.jsxs(Lt,{children:[c&&e>0&&y.jsxs(Ck,{$volume:e,initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:[e,"%"]},"volume-level"),e===0&&c&&y.jsx(Ek,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:"Muted"},"mute-indicator")]})]},"slider-container"):y.jsxs(bk,{volume:e,onClick:x,onDoubleClick:m,whileTap:{scale:.95},title:"Open volume slider",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.15},children:[f(),y.jsx(Pk,{$volume:e,initial:{opacity:0},animate:{opacity:e===0?0:r?.3:0},transition:{duration:.2}})]},"volume-button")})})},Ak=k.div.attrs({className:"mp-ambient-particles"})`
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
`,$k=k.div.attrs({className:"mp-visualizer-wrapper"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,s1={sidebar:.3,buttonDelay:.15,buttonTransition:.35},a1=k(V.div).attrs(e=>({className:"mp-sidebar"}))`
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
`,Mk=k.div.attrs(e=>({className:"mp-track-display"}))`
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
`,Rk=k.div.attrs(e=>({className:"mp-album-bg-color"}))`
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
`,jk=k.div.attrs({className:"mp-album-ripple-effect"})`
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
`,zk=k.div.attrs({className:"mp-album-artwork"})`
  position: relative;
  width: 220px;
  height: 220px;
  aspect-ratio: 1 / 1; /* Force square aspect ratio */
  max-width: min(calc(100% - 40px), 220px); /* Prevent oversizing */
  max-height: min(calc(100vw - 120px), 220px);
  margin: 35px auto 20px auto; /* Increase top margin from 20px to 35px */
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
    margin: 30px auto 15px auto; /* Adjusted for smaller screens */
  }

  @media (max-height: 600px) {
    width: 150px;
    height: 150px;
    margin: 25px auto 12px auto; /* Adjusted for even smaller screens */
  }

  @media (max-height: 500px) and (orientation: landscape) {
    width: 130px;
    height: 130px;
    margin: 20px auto 10px auto; /* Adjusted for landscape mode */
  }

  /* Ensure proper spacing on very small screens */
  @media (max-width: 380px) {
    margin-top: 40px; /* Increased from 25px to 40px */
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
`,Lk=k.img.attrs({className:"mp-album-image"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Vp=k.div.attrs({className:"mp-track-metadata"})`
  text-align: center;
  margin-top: 20px;
  z-index: 1;
  user-select: none; // Prevent selection

  @media (max-height: 700px) {
    margin-top: 12px;
  }
`,Fp=k.h2.attrs({className:"mp-track-title"})`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  user-select: none; // Prevent text selection

  @media (max-height: 700px) {
    font-size: 1.2rem;
    margin: 0 0 4px 0;
  }
`,Bp=k.p.attrs({className:"mp-track-artist"})`
  font-size: 1.1rem;
  color: ${e=>e.theme.textSecondary};
  margin: 0 0 5px 0;
  user-select: none; // Prevent text selection
`,_k=k.p.attrs({className:"mp-track-album"})`
  font-size: 0.9rem;
  color: ${e=>e.theme.textSecondary};
  opacity: 0.8;
  user-select: none; // Prevent text selection
`,Dk=k.div.attrs({className:"mp-playback-controls"})`
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
`,kn=k.button.attrs({className:"mp-control-button"})`
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
`,Nk=k(kn).attrs({className:"mp-play-pause-button"})`
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
`,Ik=({isPlaying:e,onPlayPause:t,onPrev:n,onNext:r})=>y.jsxs(Dk,{children:[y.jsx(kn,{onClick:n,children:y.jsx(Y3,{})}),y.jsx(Nk,{onClick:t,className:e?"playing":"paused","aria-label":e?"Pause":"Play",children:y.jsxs("div",{className:"icon-container",children:[y.jsx(wa,{className:"play-icon"}),y.jsx(xa,{className:"pause-icon"})]})}),y.jsx(kn,{onClick:r,children:y.jsx(Q3,{})})]}),Ok=k.div.attrs({className:"mp-progress-wrapper"})`
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
`,Vk=k.div.attrs({className:"mp-progress-track"})`
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
`,Fk=k.div.attrs(e=>({style:{width:e.$width}}))`
  height: 100%;
  border-radius: inherit;
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
`,Bk=k.div.attrs(e=>({style:{left:e.$position,transform:`translate(-50%, -50%) scale(${e.$visible?1:0})`,width:e.$isDragging?"18px":"12px",height:e.$isDragging?"18px":"12px",background:e.$isDragging?"white":e.theme.primary,boxShadow:e.$isDragging?`0 0 0 4px rgba(76, 175, 80, 0.3), 
         0 0 15px rgba(76, 175, 80, 0.8),
         0 0 30px rgba(76, 175, 80, 0.4)`:`0 0 0 2px rgba(76, 175, 80, 0.2), 
         0 0 8px rgba(76, 175, 80, 0.6)`}}))`
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.2s ease, box-shadow 0.2s ease,
    width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  z-index: 2;
  will-change: transform, width, height, left;

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
`,Hk=k.div.attrs({className:"mp-time-display"})`
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
`,Uk=k.div.attrs(e=>({style:{opacity:e.$visible?1:0,transform:`translateX(-50%) translateY(${e.$visible?0:10}px)`,left:e.$position,background:e.$isDragging?e.theme.primaryDark||"#2e7d32":"rgba(0, 0, 0, 0.75)",padding:e.$isDragging?"5px 10px":"4px 8px",fontSize:e.$isDragging?"0.85rem":"0.75rem",fontWeight:e.$isDragging?600:500}}))`
  position: absolute;
  bottom: ${e=>e.$isDragging?"28px":"24px"};
  color: white;
  border-radius: 6px;
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
`;class Wk{constructor(t,n){this.audioRef=t,this.dispatch=n,this.lastAction=null,this.doubleClickThreshold=300,this.debounceThreshold=150,this.playPromise=null,this.handlePlayPause=()=>{var i;if(this.shouldDebounce("playPause"))return;this.lastAction={type:"playPause",time:Date.now()};const r=this.audioRef.current;if(r)if(r.paused){this.dispatch({type:"PLAY"});try{this.playPromise=r.play(),(i=this.playPromise)==null||i.catch(o=>{console.warn("Play failed:",o),this.dispatch({type:"PAUSE"}),this.playPromise=null})}catch(o){console.warn("Play operation failed:",o),this.dispatch({type:"PAUSE"})}}else this.playPromise?this.playPromise.then(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}).catch(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}):(r.pause(),this.dispatch({type:"PAUSE"}))},this.handlePrev=()=>{if(this.shouldDebounce("prev"))return;const r=this.isDoubleClick("prev");this.lastAction={type:"prev",time:Date.now()};const i=this.audioRef.current;if(i){if(r){console.log("Double-click detected on prev button, skipping to previous track"),this.dispatch({type:"PREV_TRACK"});return}i.currentTime>3?i.currentTime=0:this.dispatch({type:"PREV_TRACK"})}},this.handleNext=()=>{if(this.shouldDebounce("next"))return;this.lastAction={type:"next",time:Date.now()},this.isDoubleClick("next")&&console.log("Double-click detected on next button"),this.dispatch({type:"NEXT_TRACK"})}}isDoubleClick(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.doubleClickThreshold:!1}shouldDebounce(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.debounceThreshold:!1}}const Gk=he.forwardRef(({isOpen:e,toggleOpen:t,setSidebarOpen:n},r)=>{var Z,oe,z,N;const{state:i,dispatch:o}=Qt(),s=b.useRef(null),a=b.useRef(null),l=b.useRef(new Wk(s,o)).current,c=l.handlePlayPause,u=l.handlePrev,d=()=>{if(i.repeatMode==="one"&&s.current){s.current.currentTime=0,s.current.play().catch(R=>console.warn("Couldn't restart track:",R));return}o({type:"NEXT_TRACK"})},f=((Z=i.currentTrack)==null?void 0:Z.color)||"#388e3c";b.useEffect(()=>{var R,M;i.isPlaying?(R=s.current)==null||R.play():(M=s.current)==null||M.pause()},[i.isPlaying,i.currentTrack]),b.useEffect(()=>{s.current&&(s.current.volume=i.volume)},[i.volume]);const m=R=>{if(R&&!isNaN(R)){const M=Math.floor(R/60),_=Math.floor(R%60);return`${M}:${_<10?"0":""}${_}`}return"0:00"},v=()=>{if(s.current){const R=s.current.currentTime,M=s.current.duration;o({type:"SET_PROGRESS",payload:R}),o({type:"SET_DURATION",payload:M})}},x=R=>{if(a.current&&s.current){const M=a.current.clientWidth,_=R.nativeEvent.offsetX,F=s.current.duration;s.current.currentTime=_/M*F}};b.useEffect(()=>{if(i.isPlaying&&s.current){const R=s.current.play();R!==void 0&&R.catch(M=>{console.warn("Failed to start playback:",M),o({type:"PAUSE"})})}else s.current&&s.current.pause()},[i.currentTrack,i.isPlaying,o]),b.useEffect(()=>{const R=()=>{var _;if((_=s.current)!=null&&_.error){console.error("Media error:",s.current.error);let F=0;const Y=3,J=()=>{if(F<Y){F++;const se=Math.pow(2,F)*1e3;console.log(`Retrying playback in ${se/1e3} seconds...`),setTimeout(()=>{s.current&&(s.current.load(),s.current.play().catch(fe=>{console.warn("Retry failed:",fe),J()}))},se)}else console.warn("All retries failed, skipping track"),d()};J()}},M=s.current;return M&&M.addEventListener("error",R),()=>{M&&M.removeEventListener("error",R)}},[]);const[S,g]=b.useState(!1),[h,p]=b.useState("0%"),[w,C]=b.useState(!1),[P,E]=b.useState(null),T=R=>{var M;if(a.current){const _=a.current.getBoundingClientRect(),F=(R.clientX-_.left)/_.width,Y=Math.max(0,Math.min(1,F))*100;if(p(`${Y.toFixed(3)}%`),(M=s.current)!=null&&M.duration){const J=Y*s.current.duration/100;E(m(J))}S||g(!0)}},L=()=>{w||g(!1)},j=R=>{C(!0),K(R)},U=R=>{if(s.current){const M=s.current.duration,_=R/100*M;return m(_)}return"0:00"},K=R=>{if(a.current){const M=a.current.getBoundingClientRect(),_=(R.clientX-M.left)/M.width,F=Math.max(0,Math.min(1,_))*100,Y=`${F}%`;if(p(Y),E(U(F)),w&&s.current){const J=s.current.duration;s.current.currentTime=F/100*J,a.current.querySelector(".mp-progress-fill")&&(a.current.querySelector(".mp-progress-fill").style.width=Y)}}},G=()=>{C(!1),setTimeout(()=>{S||g(!1)},100)};b.useEffect(()=>{const R=Y=>{if(w&&a.current){Y.preventDefault();const J=a.current.getBoundingClientRect(),se=(Y.clientX-J.left)/J.width,fe=Math.max(0,Math.min(1,se))*100;if(p(`${fe.toFixed(3)}%`),s.current){const A=s.current.duration;s.current.currentTime=fe/100*A}}};let M;const _=Y=>{w&&(Y.preventDefault(),cancelAnimationFrame(M),M=requestAnimationFrame(()=>{R(Y)}))},F=()=>{w&&(G(),cancelAnimationFrame(M))};return w&&(document.addEventListener("mousemove",_,{passive:!1}),document.addEventListener("mouseup",F)),()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",F),cancelAnimationFrame(M)}},[w]);const Q=()=>{const R=Xk(i.sidebarMode)?i.sidebarMode:"auto",M=["auto","always","manual"],F=(M.indexOf(R)+1)%M.length,Y=M[F];o({type:"SET_SIDEBAR_MODE",payload:Y})},Pe=()=>{t(),o({type:"SET_SIDEBAR_MODE",payload:"manual"}),o({type:"SIDEBAR_INTERACTION"}),o({type:"USER_INTERACTION"})};return y.jsxs(a1,{$isOpen:e,className:"player-sidebar",ref:r,initial:{right:"-280px"},animate:{right:e?0:"-280px"},transition:{duration:s1.sidebar,ease:[.34,1.56,.64,1]},children:[y.jsx(Yk,{}),y.jsxs(Kk,{onClick:Pe,"aria-label":"Close sidebar",children:[y.jsx(tS,{}),y.jsxs("div",{className:"particles",children:[y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"})]})]}),y.jsx("audio",{ref:s,src:(oe=i.currentTrack)==null?void 0:oe.audioSrc,onTimeUpdate:v,onEnded:d,onError:R=>{console.error("Audio error:",R),i.isPlaying&&(o({type:"PAUSE"}),setTimeout(()=>{d()},500))},onCanPlayThrough:()=>{i.isPlaying&&s.current&&s.current.play().catch(R=>{console.warn("Auto-play was prevented:",R),o({type:"PAUSE"})})}}),y.jsxs(Mk,{$bgColor:f,children:[y.jsx(Rk,{$bgColor:f}),i.currentTrack?y.jsxs(y.Fragment,{children:[y.jsxs(zk,{children:[y.jsx(Lk,{src:bn((z=i.currentTrack)==null?void 0:z.coverArt),alt:((N=i.currentTrack)==null?void 0:N.title)||"Album Cover"}),y.jsx(jk,{}),i.equalizerActive&&y.jsx(xk,{})]}),y.jsxs(Vp,{children:[y.jsx(Fp,{children:i.currentTrack.title}),y.jsx(Bp,{children:i.currentTrack.artist}),y.jsx(_k,{children:i.currentTrack.album})]}),y.jsx(Ik,{isPlaying:i.isPlaying,onPlayPause:c,onPrev:u,onNext:d}),y.jsxs(Ok,{children:[y.jsxs(Vk,{ref:a,onClick:x,onMouseMove:T,onMouseEnter:T,onMouseLeave:L,onMouseDown:j,children:[y.jsx(Fk,{$width:w?h:`${i.progress/i.duration*100}%`,$isDragging:w,$isPlaying:i.isPlaying}),y.jsx(Uk,{$visible:S,$position:h,$isDragging:w,children:P||m(i.progress)}),y.jsx(Bk,{$visible:S||w,$position:w||S?h:`${i.progress/i.duration*100}%`,$isDragging:w})]}),y.jsxs(Hk,{children:[y.jsx("span",{children:m(i.progress)}),y.jsx("span",{children:m(i.duration)})]})]})]}):y.jsxs(Vp,{children:[y.jsx(Fp,{children:"No track selected"}),y.jsx(Bp,{children:"Select a track to play"})]})]}),y.jsxs(qk,{children:[y.jsx(Zk,{children:y.jsx(Tk,{volume:Math.round(i.volume*100),onVolumeChange:R=>o({type:"SET_VOLUME",payload:R/100})})}),y.jsxs(Jk,{children:[y.jsx(kn,{onClick:()=>o({type:"TOGGLE_SHUFFLE"}),style:{color:i.isShuffling?"#388e3c":""},title:"Toggle shuffle mode",children:y.jsx(eS,{})}),y.jsx(t4,{onClick:()=>o({type:"CYCLE_REPEAT_MODE"}),className:`${i.repeatMode==="off"?"repeat-off":i.repeatMode==="all"?"repeat-all":"repeat-one"} ${i.repeatMode!=="off"?"active":""}`,title:`Repeat mode: ${i.repeatMode}`,"aria-label":`Repeat mode: ${i.repeatMode}`,children:y.jsxs("div",{className:"repeat-icon-container",children:[y.jsx(ok,{className:`repeat-off-icon ${i.repeatMode==="off"?"active":""}`}),y.jsx(ak,{className:`repeat-all-icon ${i.repeatMode==="all"?"active":""}`}),y.jsx(sk,{className:`repeat-one-icon ${i.repeatMode==="one"?"active":""}`}),y.jsx("span",{className:"repeat-badge",children:"1"})]})}),y.jsx(kn,{onClick:()=>o({type:"TOGGLE_VISUALIZER"}),style:{color:i.visualizerActive?"#388e3c":""},title:"Toggle visualizer",children:y.jsx(K3,{})}),y.jsx(e4,{onClick:()=>o({type:"TOGGLE_EQUALIZER"}),className:`${i.isPlaying?"playing":""} ${i.equalizerActive?"active":""}`,style:{color:i.equalizerActive?"#388e3c":""},title:"Toggle equalizer",children:y.jsx(ik,{})}),y.jsx("div",{}),y.jsxs(kn,{className:"sidebar-mode-button",onClick:Q,style:{color:(()=>{switch(i.sidebarMode){case"auto":return"rgba(76, 175, 80, 1)";case"always":return"rgba(33, 150, 243, 1)";case"manual":return"rgba(255, 152, 0, 1)";default:return"rgba(76, 175, 80, 1)"}})()},title:`Sidebar: ${i.sidebarMode} mode`,children:[i.sidebarMode==="auto"&&y.jsx(X3,{}),i.sidebarMode==="always"&&y.jsx(Z3,{}),i.sidebarMode==="manual"&&y.jsx(q3,{})]})]})]})]})}),Yk=k.div.attrs({className:"mp-sidebar-ambient-effect"})`
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
`,Kk=k.button.attrs({className:"mp-sidebar-close"})`
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
`,Xk=e=>e==="auto"||e==="always"||e==="manual",Qk=()=>{var c;const{state:e,dispatch:t}=Qt(),[n,r]=b.useState(!1),i=b.useRef(null),o=b.useRef(null);b.useRef(null),b.useEffect(()=>{const u=()=>{try{window.removeEventListener("click",u),window.removeEventListener("touchstart",u);const d=window.AudioContext||window.webkitAudioContext;if(d){const f=new d;f.state==="suspended"&&f.resume(),console.log("Audio context initialized through user interaction")}}catch(d){console.log("Audio initialization error:",d)}};return window.addEventListener("click",u),window.addEventListener("touchstart",u),()=>{window.removeEventListener("click",u),window.removeEventListener("touchstart",u)}},[]),b.useEffect(()=>{if(e.sidebarMode==="auto"){const u=m=>{const v=window.innerWidth,x=Math.min(80,v*.08);if(m.clientX>v-x&&!n&&(r(!0),t({type:"SIDEBAR_INTERACTION"})),n){const g=v-280;m.clientX<g&&r(!1)}},d=m=>{n&&o.current&&(o.current.contains(m.target)||r(!1))},f=m=>{if(n&&m.touches.length>0){const v=m.touches[0],x=window.innerWidth,S=280;v.clientX<x-S-30&&r(!1)}};return document.addEventListener("mousemove",u),document.addEventListener("click",d),document.addEventListener("touchmove",f),()=>{document.removeEventListener("mousemove",u),document.removeEventListener("click",d),document.removeEventListener("touchmove",f)}}e.sidebarMode==="always"&&r(!0)},[e.sidebarMode,n,t,o]);const s=u=>{if(u.current){const d=u.current.currentTime,f=u.current.duration;!isNaN(d)&&!isNaN(f)&&(t({type:"SET_PROGRESS",payload:d}),t({type:"SET_DURATION",payload:f}))}},a=()=>{t({type:"NEXT_TRACK"})},l=()=>{const u=!n;r(u),t({type:"SET_SIDEBAR_OPEN",payload:u}),t({type:"TOGGLE_SIDEBAR_VISIBILITY"}),e.sidebarMode!=="manual"&&t({type:"SET_SIDEBAR_MODE",payload:"manual"}),t({type:"SIDEBAR_INTERACTION"}),t({type:"USER_INTERACTION"})};return b.useEffect(()=>{const u=d=>{const f=d.target;f.tagName==="IMG"&&!f.src.includes("default_cover.jpeg")&&(console.log(`Image failed to load: ${f.src}, using default cover`),f.src=e1)};return document.addEventListener("error",u,!0),()=>{document.removeEventListener("error",u,!0)}},[]),b.useEffect(()=>{e.sidebarOpen!==void 0&&r(e.sidebarOpen)},[e.sidebarOpen]),y.jsxs(a1,{$isOpen:n,ref:o,initial:{right:"-280px"},animate:{right:n?0:"-280px"},transition:{duration:s1.sidebar,ease:[.34,1.56,.64,1]},children:[y.jsx(Ak,{}),y.jsx("audio",{ref:i,src:(c=e.currentTrack)==null?void 0:c.audioSrc,onTimeUpdate:()=>s(i),onEnded:a}),y.jsx($k,{children:e.visualizerActive&&y.jsx(uk,{})}),y.jsx(Gk,{isOpen:n,toggleOpen:l,setSidebarOpen:r,ref:o})]})},qk=k.div.attrs({className:"mp-secondary-controls"})`
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
`,Zk=k.div.attrs({className:"mp-control-group"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  padding: 0 2px;
`,Jk=k.div.attrs({className:"mp-feature-toggles"})`
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
`,e4=k(kn).attrs({className:"mp-control-button mp-equalizer-button"})`
  position: relative;

  /* Container for the animated GIF - shown when playing and active */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px; /* Smaller exact size that matches the icon */
    height: 15px; /* Smaller exact size that matches the icon */
    transform: translate(-50%, -50%);
    background-image: url("/assets/icons/equalizer_animation.gif");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
    pointer-events: none;
  }

  /* Container for the static PNG - shown when not playing but active */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px; /* Smaller exact size that matches the icon */
    height: 25px; /* Smaller exact size that matches the icon */
    transform: translate(-50%, -50%);
    background-image: url("/assets/icons/equalizer_green.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
    pointer-events: none;
  }

  /* Show animated GIF when playing and active */
  &.playing.active::before {
    opacity: 1;
  }

  /* Show static PNG when not playing but active */
  &.active:not(.playing)::after {
    opacity: 1;
  }

  /* Hide the static SVG icon when the animation is showing */
  svg {
    position: relative;
    z-index: 0;
    transition: opacity 0.2s ease;
  }

  &.active svg {
    opacity: 0;
  }

  /* Keep hover effect consistent */
  &:hover {
    color: ${e=>{var t,n;return((t=e.style)==null?void 0:t.color)||((n=e.theme)==null?void 0:n.primary)||"#4caf50"}};
  }
`,t4=k(kn).attrs({className:"mp-control-button mp-repeat-button"})`
  position: relative;
  overflow: visible;

  /* Inner content container for smooth transitions */
  .repeat-icon-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Bottom indicator showing current state */
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    height: 2px;
    width: 16px;
    background: ${e=>e.theme.primary||"#4caf50"};
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    border-radius: 2px;
    opacity: 0.9;
  }

  &.active::after {
    transform: translateX(-50%) scaleX(1);
  }

  &.repeat-one::after {
    background: #3f51b5;
    box-shadow: 0 0 4px rgba(63, 81, 181, 0.7);
  }

  &.repeat-all::after {
    background: #4caf50;
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.7);
  }

  /* Badge for repeat-one mode */
  .repeat-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    background: #3f51b5;
    color: white;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    font-size: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px rgba(63, 81, 181, 0.8);
    opacity: 0;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.2s ease;
  }

  &.repeat-one .repeat-badge {
    opacity: 1;
    transform: scale(1);
  }

  /* Icon animations */
  svg {
    position: absolute;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
    transform: scale(0.7) rotate(-30deg);
  }

  svg.active {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }

  /* Icon colors based on state */
  &.repeat-off svg.repeat-off-icon {
    color: rgba(255, 255, 255, 0.7);
  }

  &.repeat-all svg.repeat-all-icon {
    color: #4caf50;
  }

  &.repeat-one svg.repeat-one-icon {
    color: #3f51b5;
  }

  /* Hover effect */
  &:hover {
    &.repeat-off svg.repeat-off-icon {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`,n4=({isOpen:e,onToggle:t,className:n})=>y.jsxs(r4,{className:n,onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},children:[y.jsx(i4,{$isOpen:e,children:y.jsx(o4,{animate:{y:e?"0%":"-50%",rotate:e?0:-15},transition:{type:"spring",stiffness:300,damping:20}})}),y.jsx(s4,{}),y.jsx(a4,{children:y.jsx(l4,{})})]}),r4=k(V.button)`
  position: relative;
  width: 32px;
  height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`,i4=k.div`
  position: absolute;
  top: 12px;
  width: 20px;
  height: 30px;
  overflow: hidden;
  border-radius: 4px;
  opacity: ${e=>e.$isOpen?.8:1};
  transition: opacity 0.3s ease;
`,o4=k(V.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
  border-radius: 4px;
`,s4=k.div`
  width: 12px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px 2px 0 0;
`,a4=k.div`
  width: 24px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`,l4=k.div`
  position: absolute;
  inset: 1px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;class c4{constructor(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.canvas.width=100,this.canvas.height=100,this.imageCache=new Map}async extractColors(t){if(this.imageCache.has(t))return this.imageCache.get(t);try{const n=await this.loadImage(t);if(!this.ctx)throw new Error("Canvas context not available");this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(n,0,0,this.canvas.width,this.canvas.height);const i=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data,o=this.analyzePalette(i);return this.imageCache.set(t,o),o}catch(n){return console.error("Failed to extract colors:",n),this.getDefaultPalette()}}loadImage(t){return new Promise((n,r)=>{const i=new Image;i.crossOrigin="Anonymous",i.onload=()=>n(i),i.onerror=o=>r(new Error(`Failed to load image: ${t}`)),i.src=t})}analyzePalette(t){const n={},r=[],i=[],o=[];for(let v=0;v<t.length;v+=4){const x=t[v],S=t[v+1],g=t[v+2];if(t[v+3]<128)continue;const p=`${Math.floor(x/8)},${Math.floor(S/8)},${Math.floor(g/8)}`;n[p]?(n[p].count++,n[p].r=(n[p].r+x)/2,n[p].g=(n[p].g+S)/2,n[p].b=(n[p].b+g)/2):n[p]={count:0,r:x,g:S,b:g};const w=(x+S+g)/3,C=Math.max(x,S,g)-Math.min(x,S,g);w<80&&r.push([x,S,g]),w>200&&i.push([x,S,g]),C>100&&o.push([x,S,g])}const s=Object.values(n).sort((v,x)=>x.count-v.count),a=s[0]||{r:76,g:175,b:80},l=this.findDistinctColor(s,a)||{r:33,g:150,b:243},c=this.averageColors(r)||[23,23,23],u=this.averageColors(i)||[230,230,230],d=this.getMostVibrant(o)||[255,87,34],f=this.getMutedVersion(a),m=this.getComplementaryColor(a);return{primary:this.rgbToHex(a.r,a.g,a.b),secondary:this.rgbToHex(l.r,l.g,l.b),dark:this.rgbToHex(c[0],c[1],c[2]),light:this.rgbToHex(u[0],u[1],u[2]),vibrant:this.rgbToHex(d[0],d[1],d[2]),accent:this.rgbToHex(m.r,m.g,m.b),muted:this.rgbToHex(f.r,f.g,f.b)}}findDistinctColor(t,n){for(const i of t)if(this.getColorDistance(i,n)>80)return i}getColorDistance(t,n){const r=t.r-n.r,i=t.g-n.g,o=t.b-n.b;return Math.sqrt(r*r*.3+i*i*.59+o*o*.11)}averageColors(t){if(t.length===0)return null;let n=0,r=0,i=0;for(const o of t)n+=o[0],r+=o[1],i+=o[2];return[Math.round(n/t.length),Math.round(r/t.length),Math.round(i/t.length)]}getMostVibrant(t){if(t.length===0)return null;let n=t[0],r=this.getSaturation(n);for(const i of t){const o=this.getSaturation(i);o>r&&(r=o,n=i)}return n}getSaturation(t){const n=Math.max(...t),r=Math.min(...t);return n===0?0:(n-r)/n}getMutedVersion(t){return{r:Math.round(t.r*.7+128*(1-.7)),g:Math.round(t.g*.7+128*(1-.7)),b:Math.round(t.b*.7+128*(1-.7))}}getComplementaryColor(t){return{r:255-t.r,g:255-t.g,b:255-t.b}}rgbToHex(t,n,r){return`#${this.componentToHex(t)}${this.componentToHex(n)}${this.componentToHex(r)}`}componentToHex(t){const n=Math.round(t).toString(16);return n.length===1?"0"+n:n}getDefaultPalette(){return{primary:"#4CAF50",secondary:"#2196F3",accent:"#FF5722",dark:"#212121",light:"#F5F5F5",vibrant:"#E91E63",muted:"#7CB342"}}generateWaveEffects(t){return[{color:t.primary,amplitude:20,frequency:.02,speed:.5},{color:t.secondary,amplitude:15,frequency:.03,speed:.7},{color:t.accent,amplitude:10,frequency:.01,speed:.3}]}createGradientBackground(t){return`radial-gradient(circle at center, 
      ${this.hexToRgba(t.dark,.8)} 0%, 
      ${this.hexToRgba(t.dark,.9)} 70%, 
      ${this.hexToRgba(t.dark,1)} 100%)`}hexToRgba(t,n){const r=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16);return`rgba(${r}, ${i}, ${o}, ${n})`}}const es=new c4,u4=({imageUrl:e,isPlaying:t=!1,intensity:n=.5})=>{const r=b.useRef(null),i=b.useRef(null),o=b.useRef(),[s,a]=b.useState([]),[l,c]=b.useState("");b.useEffect(()=>{if(!e)return;let d=!0;return(async()=>{try{const m=await es.extractColors(e);if(!d)return;const v=es.generateWaveEffects(m);a(v);const x=es.createGradientBackground(m);c(x)}catch(m){console.error("Failed to process image colors:",m)}})(),()=>{d=!1}},[e]),b.useEffect(()=>{const d=i.current,f=r.current;if(!d||!f||s.length===0)return;const m=()=>{const{width:h,height:p}=f.getBoundingClientRect();d.width=h,d.height=p};m();const v=new ResizeObserver(Zg.throttle(m,100));v.observe(f);const x={value:0};let S=0;const g=h=>{S===0&&(S=h);const p=(h-S)/1e3;S=h,t&&(x.value+=p);const w=d.getContext("2d");w&&(w.clearRect(0,0,d.width,d.height),s.forEach((C,P)=>{u(w,C,x.value,d.width,d.height,P,n)}),o.current=requestAnimationFrame(g))};return o.current=requestAnimationFrame(g),()=>{o.current&&cancelAnimationFrame(o.current),v.disconnect()}},[s,t,n]);const u=(d,f,m,v,x,S,g)=>{const{amplitude:h,frequency:p,speed:w,color:C}=f,P=h*g*(1-S*.2),E=w*(t?1:.2),T=x*(.3+S*.15);d.beginPath(),d.moveTo(0,T);for(let j=0;j<=v;j+=1){const U=T+Math.sin(j*p+m*E)*P+Math.sin(j*p*.5+m*E*.7)*(P*.5);d.lineTo(j,U)}d.lineTo(v,x),d.lineTo(0,x),d.closePath();const L=d.createLinearGradient(0,T,0,x);L.addColorStop(0,`${C}80`),L.addColorStop(1,`${C}10`),d.fillStyle=L,d.fill()};return y.jsxs(d4,{ref:r,style:{background:l},children:[y.jsx(f4,{ref:i}),y.jsx(p4,{$isPlaying:t})]})},d4=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  transition: background 1s ease;
`,f4=k.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,p4=k.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  opacity: ${e=>e.$isPlaying?.7:.3};
  transition: opacity 0.5s ease;
  z-index: 2;
  
  animation: ${e=>e.$isPlaying?"pulse 4s infinite alternate":"none"};
  
  @keyframes pulse {
    0% {
      opacity: 0.3;
      transform: scale(1);
    }
    100% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }
`,h4=()=>{var v,x,S;const{state:e,dispatch:t}=Qt(),{state:n,dispatch:r}=va(),[i,o]=b.useState(!0),[s,a]=b.useState({primary:"#4caf50",vibrant:"#4caf50",accent:"#43a047"});b.useEffect(()=>{var g;(g=e.currentTrack)!=null&&g.coverArt&&(async()=>{var p;try{const w=bn((p=e.currentTrack)==null?void 0:p.coverArt),C=await es.extractColors(w);a({primary:C.primary,vibrant:C.vibrant,accent:C.accent})}catch(w){console.error("Failed to extract colors:",w)}})()},[e.currentTrack]);const l=b.useMemo(()=>`linear-gradient(135deg, 
      ${s.primary}22 0%, 
      ${s.vibrant}33 50%, 
      ${s.accent}22 100%)`,[s]),c=()=>{t({type:e.isPlaying?"PAUSE":"PLAY"})},u=()=>{t({type:"PREV_TRACK"})},d=()=>{t({type:"NEXT_TRACK"})},f=()=>{r({type:"TOGGLE_EXPLORER"})},m=()=>{t({type:"SET_SIDEBAR_OPEN",payload:!0}),t({type:"SET_SIDEBAR_MODE",payload:"manual"})};return b.useEffect(()=>{o(!e.sidebarOpen)},[e.sidebarOpen]),y.jsxs(y.Fragment,{children:[y.jsx(M4,{}),y.jsxs(m4,{initial:{y:100},animate:{y:0},exit:{y:100},transition:{type:"spring",damping:20},style:{background:l},children:[y.jsxs(g4,{children:[((v=e.currentTrack)==null?void 0:v.coverArt)&&y.jsx(u4,{imageUrl:bn(e.currentTrack.coverArt),isPlaying:e.isPlaying,intensity:.6}),y.jsx(y4,{$isPlaying:e.isPlaying})]}),y.jsx(v4,{children:y.jsxs(x4,{children:[y.jsxs(w4,{children:[y.jsx(A4,{isOpen:n.explorerVisible,onToggle:f}),e.currentTrack&&y.jsx(b4,{$isPlaying:e.isPlaying,children:y.jsx(S4,{src:bn(e.currentTrack.coverArt),alt:`${e.currentTrack.title} cover art`,$isPlaying:e.isPlaying})}),y.jsxs(k4,{children:[y.jsx(C4,{children:((x=e.currentTrack)==null?void 0:x.title)||"No track"}),y.jsx(E4,{children:((S=e.currentTrack)==null?void 0:S.artist)||"No artist"})]})]}),y.jsx(Lt,{children:i&&y.jsx(Ac,{onClick:m,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.05},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},$accentColor:s.primary,"aria-label":"Open sidebar player",children:y.jsx($4,{src:"/assets/icons/full_screen.png",alt:"Fullscreen"})})}),y.jsxs(P4,{children:[y.jsx(Tc,{onClick:u,"aria-label":"Previous track",children:y.jsx(r1,{})}),y.jsx(T4,{onClick:c,"aria-label":e.isPlaying?"Pause":"Play",$accentColor:s.vibrant,$isPlaying:e.isPlaying,children:e.isPlaying?y.jsx(xa,{}):y.jsx(wa,{style:{marginLeft:"2px"}})}),y.jsx(Tc,{onClick:d,"aria-label":"Next track",children:y.jsx(i1,{})})]})]})})]})]})},m4=k(V.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  z-index: 1000;
  overflow: hidden;
  height: 90px;
`,g4=k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
`,y4=k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 18, 18, 0.4);
  backdrop-filter: blur(${e=>e.$isPlaying?"8px":"16px"});
  z-index: 1;
  transition: backdrop-filter 1.2s ease;
`,v4=k.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; // Center the controls vertically now that progress is gone
`,x4=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: 100%; // Take up full height
`,w4=k.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  margin-right: 16px;
`,b4=k.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-right: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: ${e=>e.$isPlaying?"scale(1.05)":"scale(1)"};
  transition: transform 0.5s ease;
`,S4=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${e=>e.$isPlaying?"scale(1.1)":"scale(1)"};
  transition: transform 5s ease;
  animation: ${e=>e.$isPlaying?"subtlePulse 3s infinite alternate":"none"};

  @keyframes subtlePulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`,k4=k.div`
  min-width: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`,C4=k.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,E4=k.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,P4=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Tc=k.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  /* Remove focus outline and tap highlight */
  outline: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }
`,T4=k(Tc)`
  background: ${e=>e.$accentColor||"#4caf50"};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 24px;
  box-shadow: 0 2px 15px
    ${e=>e.$isPlaying?`${e.$accentColor||"#4caf50"}90`:`${e.$accentColor||"#4caf50"}50`};
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    opacity: ${e=>e.$isPlaying?.9:.7};
    transition: opacity 0.5s ease;
  }

  &:active {
    transform: scale(0.95);
    background: ${e=>e.$accentColor||"#43a047"};
  }
`,A4=k(n4)`
  margin-right: 12px;
  transform-origin: center;
  min-width: 32px;
  height: 48px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  @media (min-width: 769px) {
    display: none;
  }
`,Ac=k(V.button)`
  background: transparent; // Remove background
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 8px;
  position: relative;
  overflow: visible; // Allow icon to extend beyond button bounds

  /* Remove focus outline and tap highlight on all devices */
  outline: none;
  -webkit-tap-highlight-color: transparent;

  /* Prevent blue highlight on touch devices */
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`,$4=k.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: brightness(1.2) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
  opacity: 0.9;

  ${Ac}:hover & {
    filter: brightness(1.5) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6));
    transform: scale(1.1);
    opacity: 1;
  }

  ${Ac}:active & {
    filter: brightness(0.9) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    transform: scale(0.9);
  }
`,M4=Ix`
  /* Remove focus styles for all interactive elements in this component */
  button, 
  [role="button"],
  input,
  select,
  a {
    &:focus {
      outline: none !important;
    }
    
    /* Remove blue highlight on mobile */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
`,R4=to`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`,l1=to`
  0% {
    background-position: 200% 50%;
    opacity: 0.3;
  }
  100% {
    background-position: -200% 50%;
    opacity: 0.7;
  }
`,c1=to`
  0% { filter: brightness(1) blur(8px); }
  50% { filter: brightness(1.5) blur(12px); }
  100% { filter: brightness(1) blur(8px); }
`,Xe=(e="default")=>{const t={electronic:"#00ff99",rock:"#ff4444",jazz:"#4444ff",classical:"#ffaa00",pop:"#ff44ff",default:"#4caf50"};return t[e]||t.default},Xi=k.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.text.secondary};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({theme:e})=>e.text.primary};
    background: ${({theme:e})=>e.ui.hover};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,j4=k(Xi)`
  width: 40px;
  height: 40px;
  background: ${e=>Xe(e.$category)};
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: ${e=>`${Xe(e.$category)}ee`};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
  }
`,z4=k.div`
  width: 100%;
  height: 4px;
  background: ${({theme:e})=>e.id==="contrast-light"?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  transition: height 0.2s ease;

  &:hover {
    height: 6px;
  }
`,L4=k.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${e=>Xe(e.$category)} 0%,
    ${e=>Xe(e.$category)}cc 100%
  );
  border-radius: inherit;
  position: relative;
  width: ${e=>e.$width};
  transition: ${e=>e.$isDragging?"none":"width 0.1s linear"};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: ${l1} 2s linear infinite;
    opacity: ${e=>e.$isDragging?1:.7};
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 4px;
    height: 16px;
    background: ${e=>Xe(e.$category)};
    border-radius: 2px;
    transform: translate(50%, -50%);
    box-shadow: 0 0 10px ${e=>Xe(e.$category)}80;
    animation: ${c1} 2s ease-in-out infinite;
  }
`,_4=k.div`
  position: absolute;
  bottom: 20px;
  left: ${e=>e.$position};
  transform: translateX(-50%);
  background: ${({theme:e})=>e.id==="contrast-light"?"rgba(0, 0, 0, 0.8)":e.player.controls};
  color: ${({theme:e})=>e.text.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
  border: 1px solid
    ${({theme:e})=>e.id==="contrast-light"?"transparent":e.explorer.border};
`,D4=k.input`
  width: 100px;
  height: 4px;
  -webkit-appearance: none;
  background: ${({theme:e})=>e.id==="contrast-light"?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: ${({theme:e})=>e.id==="contrast-light"?e.ui.accent:"white"};
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  &:hover::-webkit-slider-thumb {
    transform: scale(1.2);
    box-shadow: 0 0 8px ${({theme:e})=>e.ui.accent}80;
  }
`,N4=k(V.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 24px;
  z-index: 100;

  /* Remove hover effect and keep background consistent */
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Mobile optimization */
  @media (max-width: 768px) {
    height: 64px;
    padding: 0 16px;
    gap: 16px;
  }
`,I4=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 180px;
  flex: 1;
  position: relative;
  padding: 12px;
  border-radius: 8px;
  background: transparent; // Remove the dark background

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      45deg,
      ${e=>e.theme.id==="contrast-light"?`${Xe(e.$category)}25`:`${Xe(e.$category)}15`},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,O4=k.img`
  width: 56px;
  height: 56px;
  border-radius: 4px;
  object-fit: cover;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  ${e=>e.$isPlaying&&sa`
      animation: ${R4} 3s ease-in-out infinite;

      &::before {
        content: "";
        position: absolute;
        inset: -15px;
        background: ${Xe(e.$category)};
        animation: ${c1} 3s ease-in-out infinite;
        z-index: -1;
        opacity: 0.5;
      }

      &::after {
        content: "";
        position: absolute;
        inset: -2px;
        background: linear-gradient(
          90deg,
          ${Xe(e.$category)}00,
          ${Xe(e.$category)}40,
          ${Xe(e.$category)}00
        );
        animation: ${l1} 3s linear infinite;
        border-radius: inherit;
      }
    `}

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 0 20px ${e=>Xe(e.$category)}40,
      0 0 40px ${e=>Xe(e.$category)}20;
  }
`,V4=k.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,F4=k.div`
  color: ${({theme:e})=>e.text.primary};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,B4=k.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,H4=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 2;
  max-width: 600px;
`,U4=k.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,W4=k.div`
  width: 100%;
  padding: 0 16px;
  position: relative;

  /* Add subtle ambient glow behind progress area */
  &::before {
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    top: 50%;
    height: 20px;
    background: radial-gradient(
      ellipse at center,
      ${e=>`${e.theme.primary}26`} 0%,
      transparent 70%
    );
    transform: translateY(-50%);
    filter: blur(8px);
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }
`,G4=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 180px;
  justify-content: flex-end;
  flex: 1;
`,Y4=k.div`
  color: ${({theme:e})=>e.text.secondary};
  font-size: 12px;
  margin-left: auto;
  padding-right: 16px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 4px;

  /* Highlight current time */
  span:first-child {
    color: ${({theme:e})=>e.text.primary};
  }
`,K4=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,X4=k(Xi)`
  color: rgba(255, 255, 255, ${e=>e.$isMuted?.5:.8});

  &:hover {
    color: white;
  }
`,Q4=k.div`
  position: relative;
`,q4=k(Xi)`
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`,Z4=k(V.div)`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 8px;
  background: ${({theme:e})=>e.player.controls};
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: 220px;
  z-index: 101;
  border: 1px solid ${({theme:e})=>e.explorer.border};

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    right: 12px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${({theme:e})=>e.player.controls};
  }
`,J4=k.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,eC=k(V.div)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 6px;
  border: 2px solid
    ${e=>e.$isActive?e.theme.ui.accent:"transparent"};
  background: ${e=>e.$color};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    border-color: ${e=>e.theme.ui.accent}80;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`,jo=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`},tC=e=>{var Q,Pe,Z,oe,z,N,R,M;const{state:t,dispatch:n}=Qt(),r=Lx(),i=b.useRef(null),[o,s]=b.useState(!1),a=b.useRef(null),[l,c]=b.useState(!1),[u,d]=b.useState("0px"),[f,m]=b.useState("0:00"),[v,x]=b.useState(!1),S=b.useRef(t.volume),[g,h]=b.useState(!1),p=b.useRef(null),{setTheme:w,currentTheme:C}=qg(),P=[{id:"dark",name:"Dark",color:"#121212"},{id:"light",name:"Light",color:"#f5f5f5"},{id:"space-grey",name:"Space Grey",color:"#1e2132"},{id:"ocean-blue",name:"Ocean Blue",color:"#00547a"},{id:"cyber-punk",name:"Cyberpunk",color:"#19002e"},{id:"contrast-light",name:"High Contrast",color:"#ffffff"}];b.useEffect(()=>{const _=F=>{p.current&&!p.current.contains(F.target)&&!F.target.closest('button[aria-label="Theme switcher"]')&&h(!1)};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[]);const E=()=>{n({type:t.isPlaying?"PAUSE":"PLAY"})},T=()=>{n({type:"PREV_TRACK"})},L=()=>{n({type:"NEXT_TRACK"})},j=_=>{if(!a.current||!i.current)return;const F=a.current.getBoundingClientRect(),J=(_.clientX-F.left)/F.width*i.current.duration;isNaN(J)||(d(`${_.clientX-F.left}px`),m(jo(J)),c(!0))},U=()=>{v?(n({type:"SET_VOLUME",payload:S.current}),x(!1)):(S.current=t.volume,n({type:"SET_VOLUME",payload:0}),x(!0))},K=_=>{const F=parseInt(_.target.value,10)/100;n({type:"SET_VOLUME",payload:F}),F>0&&v&&x(!1)},G=_=>{if(_.preventDefault(),s(!0),a.current&&i.current){const F=a.current.getBoundingClientRect(),J=(_.clientX-F.left)/F.width*i.current.duration;isNaN(J)||(i.current.currentTime=J,n({type:"SET_PROGRESS",payload:J}))}t.isPlaying&&i.current&&i.current.pause()};return b.useEffect(()=>{const _=Y=>{if(o&&a.current&&i.current){const J=a.current.getBoundingClientRect(),fe=Math.min(Math.max((Y.clientX-J.left)/J.width,0),1)*i.current.duration;isNaN(fe)||(i.current.currentTime=fe,n({type:"SET_PROGRESS",payload:fe}),d(`${Y.clientX-J.left}px`),m(jo(fe)))}},F=()=>{o&&(s(!1),c(!1),t.isPlaying&&i.current&&i.current.play().catch(console.error))};return o&&(document.addEventListener("mousemove",_),document.addEventListener("mouseup",F)),()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",F)}},[o,t.isPlaying,n]),y.jsxs(N4,{...e,$themeId:r.id,initial:{y:100,opacity:0},animate:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:30,mass:1}},exit:{y:100,opacity:0,transition:{duration:.2,ease:"easeInOut"}},children:[y.jsxs(I4,{$category:(Q=t.currentTrack)==null?void 0:Q.genre,children:[y.jsx(O4,{src:bn((Pe=t.currentTrack)==null?void 0:Pe.coverArt),alt:((Z=t.currentTrack)==null?void 0:Z.title)||"Album art",$isPlaying:t.isPlaying,$category:(oe=t.currentTrack)==null?void 0:oe.genre}),y.jsxs(V4,{children:[y.jsx(F4,{children:((z=t.currentTrack)==null?void 0:z.title)||"No track"}),y.jsx(B4,{children:((N=t.currentTrack)==null?void 0:N.artist)||"No artist"})]}),y.jsxs(Y4,{children:[y.jsx("span",{children:jo(t.progress)}),y.jsx("span",{children:"/"}),y.jsx("span",{children:jo(t.duration)})]})]}),y.jsxs(H4,{children:[y.jsxs(U4,{children:[y.jsx(Xi,{onClick:T,"aria-label":"Previous track",children:y.jsx(r1,{})}),y.jsx(j4,{onClick:E,"aria-label":t.isPlaying?"Pause":"Play",$isPlaying:t.isPlaying,$category:(R=t.currentTrack)==null?void 0:R.genre,children:t.isPlaying?y.jsx(xa,{}):y.jsx(wa,{})}),y.jsx(Xi,{onClick:L,"aria-label":"Next track",children:y.jsx(i1,{})})]}),y.jsx(W4,{children:y.jsxs(z4,{ref:a,onMouseDown:G,onMouseMove:j,onMouseLeave:()=>{c(!1),o||m("0:00")},children:[y.jsx(L4,{$width:`${t.progress/t.duration*100}%`,$isDragging:o,$category:(M=t.currentTrack)==null?void 0:M.genre}),(l||o)&&y.jsx(_4,{$visible:!0,$position:u,children:f})]})})]}),y.jsxs(G4,{children:[y.jsxs(K4,{children:[y.jsx(X4,{onClick:U,$isMuted:v||t.volume===0,"aria-label":v?"Unmute":"Mute",children:y.jsx(o1,{})}),y.jsx(D4,{type:"range",min:"0",max:"100",value:Math.round(t.volume*100),onChange:K,"aria-label":"Volume"})]}),y.jsxs(Q4,{children:[y.jsx(q4,{onClick:()=>h(!g),"aria-label":"Theme switcher",children:y.jsx(J3,{})}),y.jsx(Lt,{children:g&&y.jsx(Z4,{ref:p,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},children:y.jsx(J4,{children:P.map(_=>y.jsx(eC,{$isActive:C.id===_.id,$color:_.color,onClick:()=>{w(_.id),h(!1)},role:"button",tabIndex:0,onKeyPress:F=>{(F.key==="Enter"||F.key===" ")&&(w(_.id),h(!1))},"aria-label":`Switch to ${_.name} theme`,title:_.name},_.id))})})})]})]})]})},nC=()=>{const{state:e}=va(),{currentTheme:t}=qg(),[n,r]=b.useState(!1);return b.useEffect(()=>{const i=()=>{r(window.innerWidth<=768)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),y.jsx(_x,{theme:t,children:y.jsx(z3,{children:y.jsx(_3,{children:y.jsxs(iC,{children:[y.jsxs(oC,{$hasMobileControls:n,children:[e.explorerVisible&&y.jsx(sC,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},style:{width:"100%"},children:y.jsx(sS,{})}),y.jsx(aC,{children:y.jsx(Qk,{})})]}),y.jsx(lC,{children:y.jsx(Lt,{mode:"wait",children:n?y.jsx(cC,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",damping:20},children:y.jsx(h4,{})},"mobile"):y.jsx(uC,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",damping:20},children:y.jsx(tC,{})},"desktop")})})]})})})})},rC=()=>y.jsx(V3,{children:y.jsx(nC,{})}),iC=k.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.background.gradient};
`,oC=k.div`
  display: flex;
    flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 72px;
  @media (max-width: 768px) {
    height: calc(100vh - 80px); /* Adjust for mobile controls */
    padding: 0;
    margin-bottom: 90px;
  }
`,sC=k(V.div)`
  flex: 1; // Make it take all available space
  width: 100%; // Full width
  height: 94.2%;
  overflow: hidden;
  margin-top: 40px;  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;

  @media (max-width: 768px) {
    height: 100%;
    margin-top: 0;
    border-radius: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
  }
`,aC=k.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  border-radius: 12px;
`,lC=k.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
`,cC=k(V.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0;
  background: ${({theme:e})=>e.player.controls};
  backdrop-filter: blur(20px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
`,uC=k(V.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0 15px 20px;
`;fl.createRoot(document.getElementById("root")).render(y.jsx(he.StrictMode,{children:y.jsx(rC,{})}));
