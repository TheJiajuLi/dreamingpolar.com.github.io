(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function Sg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lp={exports:{}},Ss={},up={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Symbol.for("react.element"),kg=Symbol.for("react.portal"),Cg=Symbol.for("react.fragment"),Pg=Symbol.for("react.strict_mode"),Tg=Symbol.for("react.profiler"),Eg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),Ag=Symbol.for("react.forward_ref"),Rg=Symbol.for("react.suspense"),_g=Symbol.for("react.memo"),Mg=Symbol.for("react.lazy"),Pc=Symbol.iterator;function Dg(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dp=Object.assign,fp={};function Lr(e,t,n){this.props=e,this.context=t,this.refs=fp,this.updater=n||cp}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pp(){}pp.prototype=Lr.prototype;function nu(e,t,n){this.props=e,this.context=t,this.refs=fp,this.updater=n||cp}var ru=nu.prototype=new pp;ru.constructor=nu;dp(ru,Lr.prototype);ru.isPureReactComponent=!0;var Tc=Array.isArray,hp=Object.prototype.hasOwnProperty,iu={current:null},mp={key:!0,ref:!0,__self:!0,__source:!0};function gp(e,t,n){var r,o={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)hp.call(t,r)&&!mp.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:$i,type:e,key:s,ref:a,props:o,_owner:iu.current}}function Ng(e,t){return{$$typeof:$i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===$i}function Lg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ec=/\/+/g;function qs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lg(""+e.key):t.toString(36)}function xo(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case $i:case kg:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+qs(a,0):r,Tc(o)?(n="",e!=null&&(n=e.replace(Ec,"$&/")+"/"),xo(o,t,n,"",function(c){return c})):o!=null&&(ou(o)&&(o=Ng(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ec,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Tc(e))for(var l=0;l<e.length;l++){s=e[l];var u=r+qs(s,l);a+=xo(s,t,n,u,o)}else if(u=Dg(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=r+qs(s,l++),a+=xo(s,t,n,u,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Yi(e,t,n){if(e==null)return e;var r=[],o=0;return xo(e,r,"","",function(s){return t.call(n,s,o++)}),r}function zg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},wo={transition:null},$g={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:wo,ReactCurrentOwner:iu};function yp(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Yi,forEach:function(e,t,n){Yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yi(e,function(){t++}),t},toArray:function(e){return Yi(e,function(t){return t})||[]},only:function(e){if(!ou(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Lr;O.Fragment=Cg;O.Profiler=Tg;O.PureComponent=nu;O.StrictMode=Pg;O.Suspense=Rg;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$g;O.act=yp;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dp({},e.props),o=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=iu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)hp.call(t,u)&&!mp.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:$i,type:e.type,key:o,ref:s,props:r,_owner:a}};O.createContext=function(e){return e={$$typeof:bg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Eg,_context:e},e.Consumer=e};O.createElement=gp;O.createFactory=function(e){var t=gp.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Ag,render:e}};O.isValidElement=ou;O.lazy=function(e){return{$$typeof:Mg,_payload:{_status:-1,_result:e},_init:zg}};O.memo=function(e,t){return{$$typeof:_g,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=wo.transition;wo.transition={};try{e()}finally{wo.transition=t}};O.unstable_act=yp;O.useCallback=function(e,t){return $e.current.useCallback(e,t)};O.useContext=function(e){return $e.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};O.useEffect=function(e,t){return $e.current.useEffect(e,t)};O.useId=function(){return $e.current.useId()};O.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return $e.current.useMemo(e,t)};O.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};O.useRef=function(e){return $e.current.useRef(e)};O.useState=function(e){return $e.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return $e.current.useTransition()};O.version="18.3.1";up.exports=O;var E=up.exports;const fe=Sg(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg=E,Vg=Symbol.for("react.element"),Ig=Symbol.for("react.fragment"),Og=Object.prototype.hasOwnProperty,Fg=jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bg={key:!0,ref:!0,__self:!0,__source:!0};function vp(e,t,n){var r,o={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Og.call(t,r)&&!Bg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Vg,type:e,key:s,ref:a,props:o,_owner:Fg.current}}Ss.Fragment=Ig;Ss.jsx=vp;Ss.jsxs=vp;lp.exports=Ss;var T=lp.exports,Fa={},xp={exports:{}},Ze={},wp={exports:{}},Sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,A){var _=M.length;M.push(A);e:for(;0<_;){var D=_-1>>>1,j=M[D];if(0<o(j,A))M[D]=A,M[_]=j,_=D;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var A=M[0],_=M.pop();if(_!==A){M[0]=_;e:for(var D=0,j=M.length,K=j>>>1;D<K;){var te=2*(D+1)-1,be=M[te],ne=te+1,Ve=M[ne];if(0>o(be,_))ne<j&&0>o(Ve,be)?(M[D]=Ve,M[ne]=_,D=ne):(M[D]=be,M[te]=_,D=te);else if(ne<j&&0>o(Ve,_))M[D]=Ve,M[ne]=_,D=ne;else break e}}return A}function o(M,A){var _=M.sortIndex-A.sortIndex;return _!==0?_:M.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],c=[],d=1,f=null,p=3,g=!1,v=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=M)r(c),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(c)}}function w(M){if(x=!1,m(M),!v)if(n(u)!==null)v=!0,G(S);else{var A=n(c);A!==null&&ye(w,A.startTime-M)}}function S(M,A){v=!1,x&&(x=!1,y(b),b=-1),g=!0;var _=p;try{for(m(A),f=n(u);f!==null&&(!(f.expirationTime>A)||M&&!W());){var D=f.callback;if(typeof D=="function"){f.callback=null,p=f.priorityLevel;var j=D(f.expirationTime<=A);A=e.unstable_now(),typeof j=="function"?f.callback=j:f===n(u)&&r(u),m(A)}else r(u);f=n(u)}if(f!==null)var K=!0;else{var te=n(c);te!==null&&ye(w,te.startTime-A),K=!1}return K}finally{f=null,p=_,g=!1}}var P=!1,C=null,b=-1,N=5,$=-1;function W(){return!(e.unstable_now()-$<N)}function q(){if(C!==null){var M=e.unstable_now();$=M;var A=!0;try{A=C(!0,M)}finally{A?ie():(P=!1,C=null)}}else P=!1}var ie;if(typeof h=="function")ie=function(){h(q)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,Ge=oe.port2;oe.port1.onmessage=q,ie=function(){Ge.postMessage(null)}}else ie=function(){k(q,0)};function G(M){C=M,P||(P=!0,ie())}function ye(M,A){b=k(function(){M(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,G(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var _=p;p=A;try{return M()}finally{p=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,A){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var _=p;p=M;try{return A()}finally{p=_}},e.unstable_scheduleCallback=function(M,A,_){var D=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?D+_:D):_=D,M){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=_+j,M={id:d++,callback:A,priorityLevel:M,startTime:_,expirationTime:j,sortIndex:-1},_>D?(M.sortIndex=_,t(c,M),n(u)===null&&M===n(c)&&(x?(y(b),b=-1):x=!0,ye(w,_-D))):(M.sortIndex=j,t(u,M),v||g||(v=!0,G(S))),M},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(M){var A=p;return function(){var _=p;p=A;try{return M.apply(this,arguments)}finally{p=_}}}})(Sp);wp.exports=Sp;var Ug=wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg=E,Xe=Ug;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kp=new Set,hi={};function Hn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(hi[e]=t,e=0;e<t.length;e++)kp.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ba=Object.prototype.hasOwnProperty,Wg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bc={},Ac={};function Gg(e){return Ba.call(Ac,e)?!0:Ba.call(bc,e)?!1:Wg.test(e)?Ac[e]=!0:(bc[e]=!0,!1)}function Kg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yg(e,t,n,r){if(t===null||typeof t>"u"||Kg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var su=/[\-:]([a-z])/g;function au(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(su,au);Ee[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(su,au);Ee[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(su,au);Ee[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function lu(e,t,n,r){var o=Ee.hasOwnProperty(t)?Ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yg(t,n,o,r)&&(n=null),r||o===null?Gg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=Hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qi=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),uu=Symbol.for("react.strict_mode"),Ua=Symbol.for("react.profiler"),Cp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),cu=Symbol.for("react.forward_ref"),Ha=Symbol.for("react.suspense"),Wa=Symbol.for("react.suspense_list"),du=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),Tp=Symbol.for("react.offscreen"),Rc=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Zs;function Yr(e){if(Zs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zs=t&&t[1]||""}return`
`+Zs+e}var Js=!1;function ea(e,t){if(!e||Js)return"";Js=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),s=r.stack.split(`
`),a=o.length-1,l=s.length-1;1<=a&&0<=l&&o[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==s[l]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Js=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function Qg(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1),e;case 11:return e=ea(e.type.render,!1),e;case 1:return e=ea(e.type,!0),e;default:return""}}function Ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case qn:return"Portal";case Ua:return"Profiler";case uu:return"StrictMode";case Ha:return"Suspense";case Wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pp:return(e.displayName||"Context")+".Consumer";case Cp:return(e._context.displayName||"Context")+".Provider";case cu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case du:return t=e.displayName||null,t!==null?t:Ga(e.type)||"Memo";case Kt:t=e._payload,e=e._init;try{return Ga(e(t))}catch{}}return null}function Xg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ga(t);case 8:return t===uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qg(e){var t=Ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=qg(e))}function bp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ka(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ap(e,t){t=t.checked,t!=null&&lu(e,"checked",t,!1)}function Ya(e,t){Ap(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qa(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qa(e,t,n){(t!=="number"||Vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Qr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function Rp(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _p(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_p(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Mp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zg=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){Zg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function Dp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function Np(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Dp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Jg=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Za(e,t){if(t){if(Jg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ja(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var el=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,mr=null,gr=null;function Lc(e){if(e=Ii(e)){if(typeof tl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Es(t),tl(e.stateNode,e.type,t))}}function Lp(e){mr?gr?gr.push(e):gr=[e]:mr=e}function zp(){if(mr){var e=mr,t=gr;if(gr=mr=null,Lc(e),t)for(e=0;e<t.length;e++)Lc(t[e])}}function $p(e,t){return e(t)}function jp(){}var ta=!1;function Vp(e,t,n){if(ta)return e(t,n);ta=!0;try{return $p(e,t,n)}finally{ta=!1,(mr!==null||gr!==null)&&(jp(),zp())}}function gi(e,t){var n=e.stateNode;if(n===null)return null;var r=Es(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var nl=!1;if($t)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){nl=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{nl=!1}function e1(e,t,n,r,o,s,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ti=!1,Io=null,Oo=!1,rl=null,t1={onError:function(e){ti=!0,Io=e}};function n1(e,t,n,r,o,s,a,l,u){ti=!1,Io=null,e1.apply(t1,arguments)}function r1(e,t,n,r,o,s,a,l,u){if(n1.apply(this,arguments),ti){if(ti){var c=Io;ti=!1,Io=null}else throw Error(R(198));Oo||(Oo=!0,rl=c)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ip(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(Wn(e)!==e)throw Error(R(188))}function i1(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return zc(o),e;if(s===r)return zc(o),t;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=s;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=s;break}if(l===r){a=!0,r=o,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=o;break}if(l===r){a=!0,r=s,n=o;break}l=l.sibling}if(!a)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Op(e){return e=i1(e),e!==null?Fp(e):null}function Fp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fp(e);if(t!==null)return t;e=e.sibling}return null}var Bp=Xe.unstable_scheduleCallback,$c=Xe.unstable_cancelCallback,o1=Xe.unstable_shouldYield,s1=Xe.unstable_requestPaint,pe=Xe.unstable_now,a1=Xe.unstable_getCurrentPriorityLevel,pu=Xe.unstable_ImmediatePriority,Up=Xe.unstable_UserBlockingPriority,Fo=Xe.unstable_NormalPriority,l1=Xe.unstable_LowPriority,Hp=Xe.unstable_IdlePriority,ks=null,Ct=null;function u1(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ks,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:f1,c1=Math.log,d1=Math.LN2;function f1(e){return e>>>=0,e===0?32:31-(c1(e)/d1|0)|0}var Zi=64,Ji=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Xr(l):(s&=a,s!==0&&(r=Xr(s)))}else a=n&~o,a!==0?r=Xr(a):s!==0&&(r=Xr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),o=1<<n,r|=e[n],t&=~o;return r}function p1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-mt(s),l=1<<a,u=o[a];u===-1?(!(l&n)||l&r)&&(o[a]=p1(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wp(){var e=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function m1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-mt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function hu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Gp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kp,mu,Yp,Qp,Xp,ol=!1,eo=[],tn=null,nn=null,rn=null,yi=new Map,vi=new Map,Xt=[],g1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function Or(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Ii(t),t!==null&&mu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function y1(e,t,n,r,o){switch(t){case"focusin":return tn=Or(tn,e,t,n,r,o),!0;case"dragenter":return nn=Or(nn,e,t,n,r,o),!0;case"mouseover":return rn=Or(rn,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return yi.set(s,Or(yi.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,vi.set(s,Or(vi.get(s)||null,e,t,n,r,o)),!0}return!1}function qp(e){var t=Rn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ip(n),t!==null){e.blockedOn=t,Xp(e.priority,function(){Yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);el=r,n.target.dispatchEvent(r),el=null}else return t=Ii(n),t!==null&&mu(t),e.blockedOn=n,!1;t.shift()}return!0}function Vc(e,t,n){So(e)&&n.delete(t)}function v1(){ol=!1,tn!==null&&So(tn)&&(tn=null),nn!==null&&So(nn)&&(nn=null),rn!==null&&So(rn)&&(rn=null),yi.forEach(Vc),vi.forEach(Vc)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,ol||(ol=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,v1)))}function xi(e){function t(o){return Fr(o,e)}if(0<eo.length){Fr(eo[0],e);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&Fr(tn,e),nn!==null&&Fr(nn,e),rn!==null&&Fr(rn,e),yi.forEach(t),vi.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)qp(n),n.blockedOn===null&&Xt.shift()}var yr=Ft.ReactCurrentBatchConfig,Uo=!0;function x1(e,t,n,r){var o=H,s=yr.transition;yr.transition=null;try{H=1,gu(e,t,n,r)}finally{H=o,yr.transition=s}}function w1(e,t,n,r){var o=H,s=yr.transition;yr.transition=null;try{H=4,gu(e,t,n,r)}finally{H=o,yr.transition=s}}function gu(e,t,n,r){if(Uo){var o=sl(e,t,n,r);if(o===null)fa(e,t,r,Ho,n),jc(e,r);else if(y1(o,e,t,n,r))r.stopPropagation();else if(jc(e,r),t&4&&-1<g1.indexOf(e)){for(;o!==null;){var s=Ii(o);if(s!==null&&Kp(s),s=sl(e,t,n,r),s===null&&fa(e,t,r,Ho,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else fa(e,t,r,null,n)}}var Ho=null;function sl(e,t,n,r){if(Ho=null,e=fu(r),e=Rn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ip(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function Zp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a1()){case pu:return 1;case Up:return 4;case Fo:case l1:return 16;case Hp:return 536870912;default:return 16}default:return 16}}var Jt=null,yu=null,ko=null;function Jp(){if(ko)return ko;var e,t=yu,n=t.length,r,o="value"in Jt?Jt.value:Jt.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[s-r];r++);return ko=o.slice(e,1<r?1-r:void 0)}function Co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function Ic(){return!1}function Je(e){function t(n,r,o,s,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?to:Ic,this.isPropagationStopped=Ic,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=Je(zr),Vi=ue({},zr,{view:0,detail:0}),S1=Je(Vi),ra,ia,Br,Cs=ue({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(ra=e.screenX-Br.screenX,ia=e.screenY-Br.screenY):ia=ra=0,Br=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:ia}}),Oc=Je(Cs),k1=ue({},Cs,{dataTransfer:0}),C1=Je(k1),P1=ue({},Vi,{relatedTarget:0}),oa=Je(P1),T1=ue({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),E1=Je(T1),b1=ue({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A1=Je(b1),R1=ue({},zr,{data:0}),Fc=Je(R1),_1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=D1[e])?!!t[e]:!1}function xu(){return N1}var L1=ue({},Vi,{key:function(e){if(e.key){var t=_1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?M1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z1=Je(L1),$1=ue({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bc=Je($1),j1=ue({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),V1=Je(j1),I1=ue({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),O1=Je(I1),F1=ue({},Cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B1=Je(F1),U1=[9,13,27,32],wu=$t&&"CompositionEvent"in window,ni=null;$t&&"documentMode"in document&&(ni=document.documentMode);var H1=$t&&"TextEvent"in window&&!ni,eh=$t&&(!wu||ni&&8<ni&&11>=ni),Uc=String.fromCharCode(32),Hc=!1;function th(e,t){switch(e){case"keyup":return U1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function W1(e,t){switch(e){case"compositionend":return nh(t);case"keypress":return t.which!==32?null:(Hc=!0,Uc);case"textInput":return e=t.data,e===Uc&&Hc?null:e;default:return null}}function G1(e,t){if(Jn)return e==="compositionend"||!wu&&th(e,t)?(e=Jp(),ko=yu=Jt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eh&&t.locale!=="ko"?null:t.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!K1[e.type]:t==="textarea"}function rh(e,t,n,r){Lp(r),t=Wo(t,"onChange"),0<t.length&&(n=new vu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ri=null,wi=null;function Y1(e){hh(e,0)}function Ps(e){var t=nr(e);if(bp(t))return e}function Q1(e,t){if(e==="change")return t}var ih=!1;if($t){var sa;if($t){var aa="oninput"in document;if(!aa){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),aa=typeof Gc.oninput=="function"}sa=aa}else sa=!1;ih=sa&&(!document.documentMode||9<document.documentMode)}function Kc(){ri&&(ri.detachEvent("onpropertychange",oh),wi=ri=null)}function oh(e){if(e.propertyName==="value"&&Ps(wi)){var t=[];rh(t,wi,e,fu(e)),Vp(Y1,t)}}function X1(e,t,n){e==="focusin"?(Kc(),ri=t,wi=n,ri.attachEvent("onpropertychange",oh)):e==="focusout"&&Kc()}function q1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(wi)}function Z1(e,t){if(e==="click")return Ps(t)}function J1(e,t){if(e==="input"||e==="change")return Ps(t)}function ey(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:ey;function Si(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ba.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qc(e,t){var n=Yc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yc(n)}}function sh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ah(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vo(e.document)}return t}function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ty(e){var t=ah(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sh(n.ownerDocument.documentElement,n)){if(r!==null&&Su(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Qc(n,s);var a=Qc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ny=$t&&"documentMode"in document&&11>=document.documentMode,er=null,al=null,ii=null,ll=!1;function Xc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ll||er==null||er!==Vo(r)||(r=er,"selectionStart"in r&&Su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ii&&Si(ii,r)||(ii=r,r=Wo(al,"onSelect"),0<r.length&&(t=new vu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function no(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},la={},lh={};$t&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ts(e){if(la[e])return la[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lh)return la[e]=t[n];return e}var uh=Ts("animationend"),ch=Ts("animationiteration"),dh=Ts("animationstart"),fh=Ts("transitionend"),ph=new Map,qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){ph.set(e,t),Hn(t,[e])}for(var ua=0;ua<qc.length;ua++){var ca=qc[ua],ry=ca.toLowerCase(),iy=ca[0].toUpperCase()+ca.slice(1);vn(ry,"on"+iy)}vn(uh,"onAnimationEnd");vn(ch,"onAnimationIteration");vn(dh,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(fh,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Zc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,r1(r,t,void 0,e),e.currentTarget=null}function hh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&o.isPropagationStopped())break e;Zc(o,l,c),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&o.isPropagationStopped())break e;Zc(o,l,c),s=u}}}if(Oo)throw e=rl,Oo=!1,rl=null,e}function Z(e,t){var n=t[pl];n===void 0&&(n=t[pl]=new Set);var r=e+"__bubble";n.has(r)||(mh(t,e,2,!1),n.add(r))}function da(e,t,n){var r=0;t&&(r|=4),mh(n,e,r,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[ro]){e[ro]=!0,kp.forEach(function(n){n!=="selectionchange"&&(oy.has(n)||da(n,!1,e),da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,da("selectionchange",!1,t))}}function mh(e,t,n,r){switch(Zp(t)){case 1:var o=x1;break;case 4:o=w1;break;default:o=gu}n=o.bind(null,t,n,e),o=void 0,!nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fa(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Rn(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Vp(function(){var c=s,d=fu(n),f=[];e:{var p=ph.get(e);if(p!==void 0){var g=vu,v=e;switch(e){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":g=z1;break;case"focusin":v="focus",g=oa;break;case"focusout":v="blur",g=oa;break;case"beforeblur":case"afterblur":g=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=V1;break;case uh:case ch:case dh:g=E1;break;case fh:g=O1;break;case"scroll":g=S1;break;case"wheel":g=B1;break;case"copy":case"cut":case"paste":g=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Bc}var x=(t&4)!==0,k=!x&&e==="scroll",y=x?p!==null?p+"Capture":null:p;x=[];for(var h=c,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,y!==null&&(w=gi(h,y),w!=null&&x.push(Ci(h,w,m)))),k)break;h=h.return}0<x.length&&(p=new g(p,v,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==el&&(v=n.relatedTarget||n.fromElement)&&(Rn(v)||v[jt]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?Rn(v):null,v!==null&&(k=Wn(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(x=Oc,w="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Bc,w="onPointerLeave",y="onPointerEnter",h="pointer"),k=g==null?p:nr(g),m=v==null?p:nr(v),p=new x(w,h+"leave",g,n,d),p.target=k,p.relatedTarget=m,w=null,Rn(d)===c&&(x=new x(y,h+"enter",v,n,d),x.target=m,x.relatedTarget=k,w=x),k=w,g&&v)t:{for(x=g,y=v,h=0,m=x;m;m=Yn(m))h++;for(m=0,w=y;w;w=Yn(w))m++;for(;0<h-m;)x=Yn(x),h--;for(;0<m-h;)y=Yn(y),m--;for(;h--;){if(x===y||y!==null&&x===y.alternate)break t;x=Yn(x),y=Yn(y)}x=null}else x=null;g!==null&&Jc(f,p,g,x,!1),v!==null&&k!==null&&Jc(f,k,v,x,!0)}}e:{if(p=c?nr(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var S=Q1;else if(Wc(p))if(ih)S=J1;else{S=q1;var P=X1}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Z1);if(S&&(S=S(e,c))){rh(f,S,n,d);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Qa(p,"number",p.value)}switch(P=c?nr(c):window,e){case"focusin":(Wc(P)||P.contentEditable==="true")&&(er=P,al=c,ii=null);break;case"focusout":ii=al=er=null;break;case"mousedown":ll=!0;break;case"contextmenu":case"mouseup":case"dragend":ll=!1,Xc(f,n,d);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":Xc(f,n,d)}var C;if(wu)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Jn?th(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(eh&&n.locale!=="ko"&&(Jn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Jn&&(C=Jp()):(Jt=d,yu="value"in Jt?Jt.value:Jt.textContent,Jn=!0)),P=Wo(c,b),0<P.length&&(b=new Fc(b,e,null,n,d),f.push({event:b,listeners:P}),C?b.data=C:(C=nh(n),C!==null&&(b.data=C)))),(C=H1?W1(e,n):G1(e,n))&&(c=Wo(c,"onBeforeInput"),0<c.length&&(d=new Fc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}hh(f,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=gi(e,n),s!=null&&r.unshift(Ci(e,s,o)),s=gi(e,t),s!=null&&r.push(Ci(e,s,o))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jc(e,t,n,r,o){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,o?(u=gi(n,s),u!=null&&a.unshift(Ci(n,u,l))):o||(u=gi(n,s),u!=null&&a.push(Ci(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var sy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace(sy,`
`).replace(ay,"")}function io(e,t,n){if(t=ed(t),ed(e)!==t&&n)throw Error(R(425))}function Go(){}var ul=null,cl=null;function dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fl=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(e){return td.resolve(null).then(e).catch(cy)}:fl;function cy(e){setTimeout(function(){throw e})}function pa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),xi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);xi(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),kt="__reactFiber$"+$r,Pi="__reactProps$"+$r,jt="__reactContainer$"+$r,pl="__reactEvents$"+$r,dy="__reactListeners$"+$r,fy="__reactHandles$"+$r;function Rn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nd(e);e!==null;){if(n=e[kt])return n;e=nd(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[kt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Es(e){return e[Pi]||null}var hl=[],rr=-1;function xn(e){return{current:e}}function ee(e){0>rr||(e.current=hl[rr],hl[rr]=null,rr--)}function Q(e,t){rr++,hl[rr]=e.current,e.current=t}var mn={},De=xn(mn),Fe=xn(!1),jn=mn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function Ko(){ee(Fe),ee(De)}function rd(e,t,n){if(De.current!==mn)throw Error(R(168));Q(De,t),Q(Fe,n)}function gh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,Xg(e)||"Unknown",o));return ue({},n,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,jn=De.current,Q(De,e),Q(Fe,Fe.current),!0}function id(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=gh(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,ee(Fe),ee(De),Q(De,e)):ee(Fe),Q(Fe,n)}var Rt=null,bs=!1,ha=!1;function yh(e){Rt===null?Rt=[e]:Rt.push(e)}function py(e){bs=!0,yh(e)}function wn(){if(!ha&&Rt!==null){ha=!0;var e=0,t=H;try{var n=Rt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,bs=!1}catch(o){throw Rt!==null&&(Rt=Rt.slice(e+1)),Bp(pu,wn),o}finally{H=t,ha=!1}}return null}var ir=[],or=0,Qo=null,Xo=0,rt=[],it=0,Vn=null,_t=1,Mt="";function Pn(e,t){ir[or++]=Xo,ir[or++]=Qo,Qo=e,Xo=t}function vh(e,t,n){rt[it++]=_t,rt[it++]=Mt,rt[it++]=Vn,Vn=e;var r=_t;e=Mt;var o=32-mt(r)-1;r&=~(1<<o),n+=1;var s=32-mt(t)+o;if(30<s){var a=o-o%5;s=(r&(1<<a)-1).toString(32),r>>=a,o-=a,_t=1<<32-mt(t)+o|n<<o|r,Mt=s+e}else _t=1<<s|n<<o|r,Mt=e}function ku(e){e.return!==null&&(Pn(e,1),vh(e,1,0))}function Cu(e){for(;e===Qo;)Qo=ir[--or],ir[or]=null,Xo=ir[--or],ir[or]=null;for(;e===Vn;)Vn=rt[--it],rt[it]=null,Mt=rt[--it],rt[it]=null,_t=rt[--it],rt[it]=null}var Qe=null,Ye=null,re=!1,ht=null;function xh(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ye=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:_t,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ye=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gl(e){if(re){var t=Ye;if(t){var n=t;if(!od(e,t)){if(ml(e))throw Error(R(418));t=on(n.nextSibling);var r=Qe;t&&od(e,t)?xh(r,n):(e.flags=e.flags&-4097|2,re=!1,Qe=e)}}else{if(ml(e))throw Error(R(418));e.flags=e.flags&-4097|2,re=!1,Qe=e}}}function sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function oo(e){if(e!==Qe)return!1;if(!re)return sd(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dl(e.type,e.memoizedProps)),t&&(t=Ye)){if(ml(e))throw wh(),Error(R(418));for(;t;)xh(e,t),t=on(t.nextSibling)}if(sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Qe?on(e.stateNode.nextSibling):null;return!0}function wh(){for(var e=Ye;e;)e=on(e.nextSibling)}function kr(){Ye=Qe=null,re=!1}function Pu(e){ht===null?ht=[e]:ht.push(e)}var hy=Ft.ReactCurrentBatchConfig;function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=o.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ad(e){var t=e._init;return t(e._payload)}function Sh(e){function t(y,h){if(e){var m=y.deletions;m===null?(y.deletions=[h],y.flags|=16):m.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function o(y,h){return y=un(y,h),y.index=0,y.sibling=null,y}function s(y,h,m){return y.index=m,e?(m=y.alternate,m!==null?(m=m.index,m<h?(y.flags|=2,h):m):(y.flags|=2,h)):(y.flags|=1048576,h)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,h,m,w){return h===null||h.tag!==6?(h=Sa(m,y.mode,w),h.return=y,h):(h=o(h,m),h.return=y,h)}function u(y,h,m,w){var S=m.type;return S===Zn?d(y,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Kt&&ad(S)===h.type)?(w=o(h,m.props),w.ref=Ur(y,h,m),w.return=y,w):(w=_o(m.type,m.key,m.props,null,y.mode,w),w.ref=Ur(y,h,m),w.return=y,w)}function c(y,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=ka(m,y.mode,w),h.return=y,h):(h=o(h,m.children||[]),h.return=y,h)}function d(y,h,m,w,S){return h===null||h.tag!==7?(h=zn(m,y.mode,w,S),h.return=y,h):(h=o(h,m),h.return=y,h)}function f(y,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Sa(""+h,y.mode,m),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qi:return m=_o(h.type,h.key,h.props,null,y.mode,m),m.ref=Ur(y,null,h),m.return=y,m;case qn:return h=ka(h,y.mode,m),h.return=y,h;case Kt:var w=h._init;return f(y,w(h._payload),m)}if(Qr(h)||Vr(h))return h=zn(h,y.mode,m,null),h.return=y,h;so(y,h)}return null}function p(y,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(y,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qi:return m.key===S?u(y,h,m,w):null;case qn:return m.key===S?c(y,h,m,w):null;case Kt:return S=m._init,p(y,h,S(m._payload),w)}if(Qr(m)||Vr(m))return S!==null?null:d(y,h,m,w,null);so(y,m)}return null}function g(y,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(m)||null,l(h,y,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qi:return y=y.get(w.key===null?m:w.key)||null,u(h,y,w,S);case qn:return y=y.get(w.key===null?m:w.key)||null,c(h,y,w,S);case Kt:var P=w._init;return g(y,h,m,P(w._payload),S)}if(Qr(w)||Vr(w))return y=y.get(m)||null,d(h,y,w,S,null);so(h,w)}return null}function v(y,h,m,w){for(var S=null,P=null,C=h,b=h=0,N=null;C!==null&&b<m.length;b++){C.index>b?(N=C,C=null):N=C.sibling;var $=p(y,C,m[b],w);if($===null){C===null&&(C=N);break}e&&C&&$.alternate===null&&t(y,C),h=s($,h,b),P===null?S=$:P.sibling=$,P=$,C=N}if(b===m.length)return n(y,C),re&&Pn(y,b),S;if(C===null){for(;b<m.length;b++)C=f(y,m[b],w),C!==null&&(h=s(C,h,b),P===null?S=C:P.sibling=C,P=C);return re&&Pn(y,b),S}for(C=r(y,C);b<m.length;b++)N=g(C,y,b,m[b],w),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?b:N.key),h=s(N,h,b),P===null?S=N:P.sibling=N,P=N);return e&&C.forEach(function(W){return t(y,W)}),re&&Pn(y,b),S}function x(y,h,m,w){var S=Vr(m);if(typeof S!="function")throw Error(R(150));if(m=S.call(m),m==null)throw Error(R(151));for(var P=S=null,C=h,b=h=0,N=null,$=m.next();C!==null&&!$.done;b++,$=m.next()){C.index>b?(N=C,C=null):N=C.sibling;var W=p(y,C,$.value,w);if(W===null){C===null&&(C=N);break}e&&C&&W.alternate===null&&t(y,C),h=s(W,h,b),P===null?S=W:P.sibling=W,P=W,C=N}if($.done)return n(y,C),re&&Pn(y,b),S;if(C===null){for(;!$.done;b++,$=m.next())$=f(y,$.value,w),$!==null&&(h=s($,h,b),P===null?S=$:P.sibling=$,P=$);return re&&Pn(y,b),S}for(C=r(y,C);!$.done;b++,$=m.next())$=g(C,y,b,$.value,w),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?b:$.key),h=s($,h,b),P===null?S=$:P.sibling=$,P=$);return e&&C.forEach(function(q){return t(y,q)}),re&&Pn(y,b),S}function k(y,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qi:e:{for(var S=m.key,P=h;P!==null;){if(P.key===S){if(S=m.type,S===Zn){if(P.tag===7){n(y,P.sibling),h=o(P,m.props.children),h.return=y,y=h;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Kt&&ad(S)===P.type){n(y,P.sibling),h=o(P,m.props),h.ref=Ur(y,P,m),h.return=y,y=h;break e}n(y,P);break}else t(y,P);P=P.sibling}m.type===Zn?(h=zn(m.props.children,y.mode,w,m.key),h.return=y,y=h):(w=_o(m.type,m.key,m.props,null,y.mode,w),w.ref=Ur(y,h,m),w.return=y,y=w)}return a(y);case qn:e:{for(P=m.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(y,h.sibling),h=o(h,m.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=ka(m,y.mode,w),h.return=y,y=h}return a(y);case Kt:return P=m._init,k(y,h,P(m._payload),w)}if(Qr(m))return v(y,h,m,w);if(Vr(m))return x(y,h,m,w);so(y,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(y,h.sibling),h=o(h,m),h.return=y,y=h):(n(y,h),h=Sa(m,y.mode,w),h.return=y,y=h),a(y)):n(y,h)}return k}var Cr=Sh(!0),kh=Sh(!1),qo=xn(null),Zo=null,sr=null,Tu=null;function Eu(){Tu=sr=Zo=null}function bu(e){var t=qo.current;ee(qo),e._currentValue=t}function yl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){Zo=e,Tu=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Tu!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(Zo===null)throw Error(R(308));sr=e,Zo.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var _n=null;function Au(e){_n===null?_n=[e]:_n.push(e)}function Ch(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Au(t)):(n.next=o.next,o.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Vt(e,n)}return o=r.interleaved,o===null?(t.next=t,Au(r)):(t.next=o.next,o.next=t),r.interleaved=t,Vt(e,n)}function Po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}function ld(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jo(e,t,n,r){var o=e.updateQueue;Yt=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?s=c:a.next=c,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=o.baseState;a=0,d=c=u=null,l=s;do{var p=l.lane,g=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(p=t,g=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(g,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(g,f,p):v,p==null)break e;f=ue({},f,p);break e;case 2:Yt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else g={eventTime:g,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=g,u=f):d=d.next=g,a|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(d===null&&(u=f),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);On|=a,e.lanes=a,e.memoizedState=f}}function ud(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var Oi={},Pt=xn(Oi),Ti=xn(Oi),Ei=xn(Oi);function Mn(e){if(e===Oi)throw Error(R(174));return e}function _u(e,t){switch(Q(Ei,t),Q(Ti,e),Q(Pt,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qa(t,e)}ee(Pt),Q(Pt,t)}function Pr(){ee(Pt),ee(Ti),ee(Ei)}function Th(e){Mn(Ei.current);var t=Mn(Pt.current),n=qa(t,e.type);t!==n&&(Q(Ti,e),Q(Pt,n))}function Mu(e){Ti.current===e&&(ee(Pt),ee(Ti))}var se=xn(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function Du(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var To=Ft.ReactCurrentDispatcher,ga=Ft.ReactCurrentBatchConfig,In=0,le=null,ve=null,we=null,ts=!1,oi=!1,bi=0,my=0;function Ae(){throw Error(R(321))}function Nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Lu(e,t,n,r,o,s){if(In=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?xy:wy,e=n(r,o),oi){s=0;do{if(oi=!1,bi=0,25<=s)throw Error(R(301));s+=1,we=ve=null,t.updateQueue=null,To.current=Sy,e=n(r,o)}while(oi)}if(To.current=ns,t=ve!==null&&ve.next!==null,In=0,we=ve=le=null,ts=!1,t)throw Error(R(300));return e}function zu(){var e=bi!==0;return bi=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=e:we=we.next=e,we}function lt(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?le.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(R(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?le.memoizedState=we=e:we=we.next=e}return we}function Ai(e,t){return typeof t=="function"?t(e):t}function ya(e){var t=lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var l=a=null,u=null,c=s;do{var d=c.lane;if((In&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,a=r):u=u.next=f,le.lanes|=d,On|=d}c=c.next}while(c!==null&&c!==s);u===null?a=r:u.next=l,vt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,le.lanes|=s,On|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function va(e){var t=lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do s=e(s,a.action),a=a.next;while(a!==o);vt(s,t.memoizedState)||(Oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Eh(){}function bh(e,t){var n=le,r=lt(),o=t(),s=!vt(r.memoizedState,o);if(s&&(r.memoizedState=o,Oe=!0),r=r.queue,$u(_h.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Ri(9,Rh.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error(R(349));In&30||Ah(n,t,o)}return o}function Ah(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rh(e,t,n,r){t.value=n,t.getSnapshot=r,Mh(t)&&Dh(e)}function _h(e,t,n){return n(function(){Mh(t)&&Dh(e)})}function Mh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Dh(e){var t=Vt(e,1);t!==null&&gt(t,e,1,-1)}function cd(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:e},t.queue=e,e=e.dispatch=vy.bind(null,le,e),[t.memoizedState,e]}function Ri(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nh(){return lt().memoizedState}function Eo(e,t,n,r){var o=wt();le.flags|=e,o.memoizedState=Ri(1|t,n,void 0,r===void 0?null:r)}function As(e,t,n,r){var o=lt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var a=ve.memoizedState;if(s=a.destroy,r!==null&&Nu(r,a.deps)){o.memoizedState=Ri(t,n,s,r);return}}le.flags|=e,o.memoizedState=Ri(1|t,n,s,r)}function dd(e,t){return Eo(8390656,8,e,t)}function $u(e,t){return As(2048,8,e,t)}function Lh(e,t){return As(4,2,e,t)}function zh(e,t){return As(4,4,e,t)}function $h(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jh(e,t,n){return n=n!=null?n.concat([e]):null,As(4,4,$h.bind(null,t,e),n)}function ju(){}function Vh(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ih(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oh(e,t,n){return In&21?(vt(n,t)||(n=Wp(),le.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function gy(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=ga.transition;ga.transition={};try{e(!1),t()}finally{H=n,ga.transition=r}}function Fh(){return lt().memoizedState}function yy(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bh(e))Uh(t,n);else if(n=Ch(e,t,n,r),n!==null){var o=ze();gt(n,e,r,o),Hh(n,t,r)}}function vy(e,t,n){var r=ln(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bh(e))Uh(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(o.hasEagerState=!0,o.eagerState=l,vt(l,a)){var u=t.interleaved;u===null?(o.next=o,Au(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Ch(e,t,o,r),n!==null&&(o=ze(),gt(n,e,r,o),Hh(n,t,r))}}function Bh(e){var t=e.alternate;return e===le||t!==null&&t===le}function Uh(e,t){oi=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}var ns={readContext:at,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},xy={readContext:at,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:dd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,$h.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yy.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:cd,useDebugValue:ju,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=cd(!1),t=e[0];return e=gy.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=wt();if(re){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ce===null)throw Error(R(349));In&30||Ah(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,dd(_h.bind(null,r,s,e),[e]),r.flags|=2048,Ri(9,Rh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=wt(),t=Ce.identifierPrefix;if(re){var n=Mt,r=_t;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=my++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wy={readContext:at,useCallback:Vh,useContext:at,useEffect:$u,useImperativeHandle:jh,useInsertionEffect:Lh,useLayoutEffect:zh,useMemo:Ih,useReducer:ya,useRef:Nh,useState:function(){return ya(Ai)},useDebugValue:ju,useDeferredValue:function(e){var t=lt();return Oh(t,ve.memoizedState,e)},useTransition:function(){var e=ya(Ai)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:bh,useId:Fh,unstable_isNewReconciler:!1},Sy={readContext:at,useCallback:Vh,useContext:at,useEffect:$u,useImperativeHandle:jh,useInsertionEffect:Lh,useLayoutEffect:zh,useMemo:Ih,useReducer:va,useRef:Nh,useState:function(){return va(Ai)},useDebugValue:ju,useDeferredValue:function(e){var t=lt();return ve===null?t.memoizedState=e:Oh(t,ve.memoizedState,e)},useTransition:function(){var e=va(Ai)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:bh,useId:Fh,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rs={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),o=ln(e),s=Nt(r,o);s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,o),t!==null&&(gt(t,e,o,r),Po(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),o=ln(e),s=Nt(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,o),t!==null&&(gt(t,e,o,r),Po(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=ln(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=sn(e,o,r),t!==null&&(gt(t,e,r,n),Po(t,e,r))}};function fd(e,t,n,r,o,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Si(n,r)||!Si(o,s):!0}function Wh(e,t,n){var r=!1,o=mn,s=t.contextType;return typeof s=="object"&&s!==null?s=at(s):(o=Be(t)?jn:De.current,r=t.contextTypes,s=(r=r!=null)?Sr(e,o):mn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function pd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function xl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ru(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=at(s):(s=Be(t)?jn:De.current,o.context=Sr(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(vl(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Rs.enqueueReplaceState(o,o.state,null),Jo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t){try{var n="",r=t;do n+=Qg(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function xa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function Gh(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){is||(is=!0,_l=r),wl(e,t)},n}function Kh(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){wl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wl(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function hd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ky;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$y.bind(null,e,t,n),t.then(e,e))}function md(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var Cy=Ft.ReactCurrentOwner,Oe=!1;function Le(e,t,n,r){t.child=e===null?kh(t,null,n,r):Cr(t,e.child,n,r)}function yd(e,t,n,r,o){n=n.render;var s=t.ref;return vr(t,o),r=Lu(e,t,n,r,s,o),n=zu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(re&&n&&ku(t),t.flags|=1,Le(e,t,r,o),t.child)}function vd(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!Wu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Yh(e,t,s,r,o)):(e=_o(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Si,n(a,r)&&e.ref===t.ref)return It(e,t,o)}return t.flags|=1,e=un(s,r),e.ref=t.ref,e.return=t,t.child=e}function Yh(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(Si(s,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,It(e,t,o)}return Sl(e,t,n,r,o)}function Qh(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(lr,Ke),Ke|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(lr,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(lr,Ke),Ke|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Q(lr,Ke),Ke|=r;return Le(e,t,o,n),t.child}function Xh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sl(e,t,n,r,o){var s=Be(n)?jn:De.current;return s=Sr(t,s),vr(t,o),n=Lu(e,t,n,r,s,o),r=zu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(re&&r&&ku(t),t.flags|=1,Le(e,t,n,o),t.child)}function xd(e,t,n,r,o){if(Be(n)){var s=!0;Yo(t)}else s=!1;if(vr(t,o),t.stateNode===null)bo(e,t),Wh(t,n,r),xl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=at(c):(c=Be(n)?jn:De.current,c=Sr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==c)&&pd(t,a,r,c),Yt=!1;var p=t.memoizedState;a.state=p,Jo(t,r,a,o),u=t.memoizedState,l!==r||p!==u||Fe.current||Yt?(typeof d=="function"&&(vl(t,n,d,r),u=t.memoizedState),(l=Yt||fd(t,n,l,r,p,u,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ph(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:ft(t.type,l),a.props=c,f=t.pendingProps,p=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=at(u):(u=Be(n)?jn:De.current,u=Sr(t,u));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==u)&&pd(t,a,r,u),Yt=!1,p=t.memoizedState,a.state=p,Jo(t,r,a,o);var v=t.memoizedState;l!==f||p!==v||Fe.current||Yt?(typeof g=="function"&&(vl(t,n,g,r),v=t.memoizedState),(c=Yt||fd(t,n,c,r,p,v,u)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return kl(e,t,n,r,s,o)}function kl(e,t,n,r,o,s){Xh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&id(t,n,!1),It(e,t,s);r=t.stateNode,Cy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Cr(t,e.child,null,s),t.child=Cr(t,null,l,s)):Le(e,t,l,s),t.memoizedState=r.state,o&&id(t,n,!0),t.child}function qh(e){var t=e.stateNode;t.pendingContext?rd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rd(e,t.context,!1),_u(e,t.containerInfo)}function wd(e,t,n,r,o){return kr(),Pu(o),t.flags|=256,Le(e,t,n,r),t.child}var Cl={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zh(e,t,n){var r=t.pendingProps,o=se.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(se,o&1),e===null)return gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ds(a,r,0,null),e=zn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Pl(n),t.memoizedState=Cl,e):Vu(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Py(e,t,a,r,l,o,n);if(s){s=r.fallback,a=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=un(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?s=un(l,s):(s=zn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Pl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Cl,r}return s=e.child,e=s.sibling,r=un(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vu(e,t){return t=Ds({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&Pu(r),Cr(t,e.child,null,n),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Py(e,t,n,r,o,s,a){if(n)return t.flags&256?(t.flags&=-257,r=xa(Error(R(422))),ao(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Ds({mode:"visible",children:r.children},o,0,null),s=zn(s,o,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Cr(t,e.child,null,a),t.child.memoizedState=Pl(a),t.memoizedState=Cl,s);if(!(t.mode&1))return ao(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(R(419)),r=xa(s,r,void 0),ao(e,t,a,r)}if(l=(a&e.childLanes)!==0,Oe||l){if(r=Ce,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Vt(e,o),gt(r,e,o,-1))}return Hu(),r=xa(Error(R(421))),ao(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jy.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,Ye=on(o.nextSibling),Qe=t,re=!0,ht=null,e!==null&&(rt[it++]=_t,rt[it++]=Mt,rt[it++]=Vn,_t=e.id,Mt=e.overflow,Vn=t),t=Vu(t,r.children),t.flags|=4096,t)}function Sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yl(e.return,t,n)}function wa(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function Jh(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Le(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,n,t);else if(e.tag===19)Sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),wa(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&es(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}wa(t,!0,n,null,s);break;case"together":wa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ty(e,t,n){switch(t.tag){case 3:qh(t),kr();break;case 5:Th(t);break;case 1:Be(t.type)&&Yo(t);break;case 4:_u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Q(qo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Zh(e,t,n):(Q(se,se.current&1),e=It(e,t,n),e!==null?e.sibling:null);Q(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Qh(e,t,n)}return It(e,t,n)}var em,Tl,tm,nm;em=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tl=function(){};tm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Mn(Pt.current);var s=null;switch(n){case"input":o=Ka(e,o),r=Ka(e,r),s=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":o=Xa(e,o),r=Xa(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}Za(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(hi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(hi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Z("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};nm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ey(e,t,n){var r=t.pendingProps;switch(Cu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Be(t.type)&&Ko(),Re(t),null;case 3:return r=t.stateNode,Pr(),ee(Fe),ee(De),Du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Nl(ht),ht=null))),Tl(e,t),Re(t),null;case 5:Mu(t);var o=Mn(Ei.current);if(n=t.type,e!==null&&t.stateNode!=null)tm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Re(t),null}if(e=Mn(Pt.current),oo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[kt]=t,r[Pi]=s,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<qr.length;o++)Z(qr[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":_c(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Dc(r,s),Z("invalid",r)}Za(n,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&io(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&io(r.textContent,l,e),o=["children",""+l]):hi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Z("scroll",r)}switch(n){case"input":Xi(r),Mc(r,s,!0);break;case"textarea":Xi(r),Nc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Go)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_p(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[kt]=t,e[Pi]=r,em(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ja(n,r),n){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<qr.length;o++)Z(qr[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":_c(e,r),o=Ka(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Dc(e,r),o=Xa(e,r),Z("invalid",e);break;default:o=r}Za(n,o),l=o;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Np(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mp(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&mi(e,u):typeof u=="number"&&mi(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hi.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Z("scroll",e):u!=null&&lu(e,s,u,a))}switch(n){case"input":Xi(e),Mc(e,r,!1);break;case"textarea":Xi(e),Nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?hr(e,!!r.multiple,s,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)nm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Mn(Ei.current),Mn(Pt.current),oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(s=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Re(t),null;case 13:if(ee(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ye!==null&&t.mode&1&&!(t.flags&128))wh(),kr(),t.flags|=98560,s=!1;else if(s=oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(R(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[kt]=t}else kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),s=!1}else ht!==null&&(Nl(ht),ht=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?xe===0&&(xe=3):Hu())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return Pr(),Tl(e,t),e===null&&ki(t.stateNode.containerInfo),Re(t),null;case 10:return bu(t.type._context),Re(t),null;case 17:return Be(t.type)&&Ko(),Re(t),null;case 19:if(ee(se),s=t.memoizedState,s===null)return Re(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Hr(s,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=es(e),a!==null){for(t.flags|=128,Hr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&pe()>Er&&(t.flags|=128,r=!0,Hr(s,!1),t.lanes=4194304)}else{if(!r)if(e=es(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!re)return Re(t),null}else 2*pe()-s.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Hr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=pe(),t.sibling=null,n=se.current,Q(se,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Uu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function by(e,t){switch(Cu(t),t.tag){case 1:return Be(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),ee(Fe),ee(De),Du(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mu(t),null;case 13:if(ee(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(se),null;case 4:return Pr(),null;case 10:return bu(t.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var lo=!1,Me=!1,Ay=typeof WeakSet=="function"?WeakSet:Set,L=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function El(e,t,n){try{n()}catch(r){ce(e,t,r)}}var kd=!1;function Ry(e,t){if(ul=Uo,e=ah(),Su(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var g;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==s||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++c===o&&(l=a),p===s&&++d===r&&(u=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cl={focusedElem:e,selectionRange:n},Uo=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,k=v.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?x:ft(t.type,x),k);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=kd,kd=!1,v}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&El(t,n,s)}o=o.next}while(o!==r)}}function _s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rm(e){var t=e.alternate;t!==null&&(e.alternate=null,rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Pi],delete t[pl],delete t[dy],delete t[fy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function im(e){return e.tag===5||e.tag===3||e.tag===4}function Cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var Pe=null,pt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)om(e,t,n),n=n.sibling}function om(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ks,n)}catch{}switch(n.tag){case 5:Me||ar(n,t);case 6:var r=Pe,o=pt;Pe=null,Ht(e,t,n),Pe=r,pt=o,Pe!==null&&(pt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(pt?(e=Pe,n=n.stateNode,e.nodeType===8?pa(e.parentNode,n):e.nodeType===1&&pa(e,n),xi(e)):pa(Pe,n.stateNode));break;case 4:r=Pe,o=pt,Pe=n.stateNode.containerInfo,pt=!0,Ht(e,t,n),Pe=r,pt=o;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&El(n,t,a),o=o.next}while(o!==r)}Ht(e,t,n);break;case 1:if(!Me&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ce(n,t,l)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Ht(e,t,n),Me=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function Pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ay),t.forEach(function(r){var o=Vy.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,pt=!1;break e;case 3:Pe=l.stateNode.containerInfo,pt=!0;break e;case 4:Pe=l.stateNode.containerInfo,pt=!0;break e}l=l.return}if(Pe===null)throw Error(R(160));om(s,a,o),Pe=null,pt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){ce(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sm(t,e),t=t.sibling}function sm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),xt(e),r&4){try{si(3,e,e.return),_s(3,e)}catch(x){ce(e,e.return,x)}try{si(5,e,e.return)}catch(x){ce(e,e.return,x)}}break;case 1:dt(t,e),xt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(dt(t,e),xt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var o=e.stateNode;try{mi(o,"")}catch(x){ce(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ap(o,s),Ja(l,a);var c=Ja(l,s);for(a=0;a<u.length;a+=2){var d=u[a],f=u[a+1];d==="style"?Np(o,f):d==="dangerouslySetInnerHTML"?Mp(o,f):d==="children"?mi(o,f):lu(o,d,f,c)}switch(l){case"input":Ya(o,s);break;case"textarea":Rp(o,s);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?hr(o,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?hr(o,!!s.multiple,s.defaultValue,!0):hr(o,!!s.multiple,s.multiple?[]:"",!1))}o[Pi]=s}catch(x){ce(e,e.return,x)}}break;case 6:if(dt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(x){ce(e,e.return,x)}}break;case 3:if(dt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(t.containerInfo)}catch(x){ce(e,e.return,x)}break;case 4:dt(t,e),xt(e);break;case 13:dt(t,e),xt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Fu=pe())),r&4&&Pd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(c=Me)||d,dt(t,e),Me=c):dt(t,e),xt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(p=L,g=p.child,p.tag){case 0:case 11:case 14:case 15:si(4,p,p.return);break;case 1:ar(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ce(r,n,x)}}break;case 5:ar(p,p.return);break;case 22:if(p.memoizedState!==null){Ed(f);continue}}g!==null?(g.return=p,L=g):Ed(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Dp("display",a))}catch(x){ce(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){ce(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dt(t,e),xt(e),r&4&&Pd(e);break;case 21:break;default:dt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(im(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(mi(o,""),r.flags&=-33);var s=Cd(e);Rl(e,s,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Cd(e);Al(e,l,a);break;default:throw Error(R(161))}}catch(u){ce(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _y(e,t,n){L=e,am(e)}function am(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,s=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||lo;if(!a){var l=o.alternate,u=l!==null&&l.memoizedState!==null||Me;l=lo;var c=Me;if(lo=a,(Me=u)&&!c)for(L=o;L!==null;)a=L,u=a.child,a.tag===22&&a.memoizedState!==null?bd(o):u!==null?(u.return=a,L=u):bd(o);for(;s!==null;)L=s,am(s),s=s.sibling;L=o,lo=l,Me=c}Td(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,L=s):Td(e)}}function Td(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||_s(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ud(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ud(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&xi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Me||t.flags&512&&bl(t)}catch(p){ce(t,t.return,p)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Ed(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function bd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_s(4,t)}catch(u){ce(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ce(t,o,u)}}var s=t.return;try{bl(t)}catch(u){ce(t,s,u)}break;case 5:var a=t.return;try{bl(t)}catch(u){ce(t,a,u)}}}catch(u){ce(t,t.return,u)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var My=Math.ceil,rs=Ft.ReactCurrentDispatcher,Iu=Ft.ReactCurrentOwner,st=Ft.ReactCurrentBatchConfig,F=0,Ce=null,ge=null,Te=0,Ke=0,lr=xn(0),xe=0,_i=null,On=0,Ms=0,Ou=0,ai=null,Ie=null,Fu=0,Er=1/0,bt=null,is=!1,_l=null,an=null,uo=!1,en=null,os=0,li=0,Ml=null,Ao=-1,Ro=0;function ze(){return F&6?pe():Ao!==-1?Ao:Ao=pe()}function ln(e){return e.mode&1?F&2&&Te!==0?Te&-Te:hy.transition!==null?(Ro===0&&(Ro=Wp()),Ro):(e=H,e!==0||(e=window.event,e=e===void 0?16:Zp(e.type)),e):1}function gt(e,t,n,r){if(50<li)throw li=0,Ml=null,Error(R(185));ji(e,n,r),(!(F&2)||e!==Ce)&&(e===Ce&&(!(F&2)&&(Ms|=n),xe===4&&qt(e,Te)),Ue(e,r),n===1&&F===0&&!(t.mode&1)&&(Er=pe()+500,bs&&wn()))}function Ue(e,t){var n=e.callbackNode;h1(e,t);var r=Bo(e,e===Ce?Te:0);if(r===0)n!==null&&$c(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$c(n),t===1)e.tag===0?py(Ad.bind(null,e)):yh(Ad.bind(null,e)),uy(function(){!(F&6)&&wn()}),n=null;else{switch(Gp(r)){case 1:n=pu;break;case 4:n=Up;break;case 16:n=Fo;break;case 536870912:n=Hp;break;default:n=Fo}n=mm(n,lm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lm(e,t){if(Ao=-1,Ro=0,F&6)throw Error(R(327));var n=e.callbackNode;if(xr()&&e.callbackNode!==n)return null;var r=Bo(e,e===Ce?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ss(e,r);else{t=r;var o=F;F|=2;var s=cm();(Ce!==e||Te!==t)&&(bt=null,Er=pe()+500,Ln(e,t));do try{Ly();break}catch(l){um(e,l)}while(1);Eu(),rs.current=s,F=o,ge!==null?t=0:(Ce=null,Te=0,t=xe)}if(t!==0){if(t===2&&(o=il(e),o!==0&&(r=o,t=Dl(e,o))),t===1)throw n=_i,Ln(e,0),qt(e,r),Ue(e,pe()),n;if(t===6)qt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Dy(o)&&(t=ss(e,r),t===2&&(s=il(e),s!==0&&(r=s,t=Dl(e,s))),t===1))throw n=_i,Ln(e,0),qt(e,r),Ue(e,pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Tn(e,Ie,bt);break;case 3:if(qt(e,r),(r&130023424)===r&&(t=Fu+500-pe(),10<t)){if(Bo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=fl(Tn.bind(null,e,Ie,bt),t);break}Tn(e,Ie,bt);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-mt(r);s=1<<a,a=t[a],a>o&&(o=a),r&=~s}if(r=o,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*My(r/1960))-r,10<r){e.timeoutHandle=fl(Tn.bind(null,e,Ie,bt),r);break}Tn(e,Ie,bt);break;case 5:Tn(e,Ie,bt);break;default:throw Error(R(329))}}}return Ue(e,pe()),e.callbackNode===n?lm.bind(null,e):null}function Dl(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=ss(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Nl(t)),e}function Nl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Dy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!vt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~Ou,t&=~Ms,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function Ad(e){if(F&6)throw Error(R(327));xr();var t=Bo(e,0);if(!(t&1))return Ue(e,pe()),null;var n=ss(e,t);if(e.tag!==0&&n===2){var r=il(e);r!==0&&(t=r,n=Dl(e,r))}if(n===1)throw n=_i,Ln(e,0),qt(e,t),Ue(e,pe()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Ie,bt),Ue(e,pe()),null}function Bu(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Er=pe()+500,bs&&wn())}}function Fn(e){en!==null&&en.tag===0&&!(F&6)&&xr();var t=F;F|=1;var n=st.transition,r=H;try{if(st.transition=null,H=1,e)return e()}finally{H=r,st.transition=n,F=t,!(F&6)&&wn()}}function Uu(){Ke=lr.current,ee(lr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ly(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:Pr(),ee(Fe),ee(De),Du();break;case 5:Mu(r);break;case 4:Pr();break;case 13:ee(se);break;case 19:ee(se);break;case 10:bu(r.type._context);break;case 22:case 23:Uu()}n=n.return}if(Ce=e,ge=e=un(e.current,null),Te=Ke=t,xe=0,_i=null,Ou=Ms=On=0,Ie=ai=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=o,r.next=a}n.pending=r}_n=null}return e}function um(e,t){do{var n=ge;try{if(Eu(),To.current=ns,ts){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ts=!1}if(In=0,we=ve=le=null,oi=!1,bi=0,Iu.current=null,n===null||n.return===null){xe=1,_i=t,ge=null;break}e:{var s=e,a=n.return,l=n,u=t;if(t=Te,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=md(a);if(g!==null){g.flags&=-257,gd(g,a,l,s,t),g.mode&1&&hd(s,c,t),t=g,u=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){hd(s,c,t),Hu();break e}u=Error(R(426))}}else if(re&&l.mode&1){var k=md(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),gd(k,a,l,s,t),Pu(Tr(u,l));break e}}s=u=Tr(u,l),xe!==4&&(xe=2),ai===null?ai=[s]:ai.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=Gh(s,u,t);ld(s,y);break e;case 1:l=u;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(an===null||!an.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Kh(s,l,t);ld(s,w);break e}}s=s.return}while(s!==null)}fm(n)}catch(S){t=S,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function cm(){var e=rs.current;return rs.current=ns,e===null?ns:e}function Hu(){(xe===0||xe===3||xe===2)&&(xe=4),Ce===null||!(On&268435455)&&!(Ms&268435455)||qt(Ce,Te)}function ss(e,t){var n=F;F|=2;var r=cm();(Ce!==e||Te!==t)&&(bt=null,Ln(e,t));do try{Ny();break}catch(o){um(e,o)}while(1);if(Eu(),F=n,rs.current=r,ge!==null)throw Error(R(261));return Ce=null,Te=0,xe}function Ny(){for(;ge!==null;)dm(ge)}function Ly(){for(;ge!==null&&!o1();)dm(ge)}function dm(e){var t=hm(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?fm(e):ge=t,Iu.current=null}function fm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=by(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ge=null;return}}else if(n=Ey(n,t,Ke),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);xe===0&&(xe=5)}function Tn(e,t,n){var r=H,o=st.transition;try{st.transition=null,H=1,zy(e,t,n,r)}finally{st.transition=o,H=r}return null}function zy(e,t,n,r){do xr();while(en!==null);if(F&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(m1(e,s),e===Ce&&(ge=Ce=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,mm(Fo,function(){return xr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=st.transition,st.transition=null;var a=H;H=1;var l=F;F|=4,Iu.current=null,Ry(e,n),sm(n,e),ty(cl),Uo=!!ul,cl=ul=null,e.current=n,_y(n),s1(),F=l,H=a,st.transition=s}else e.current=n;if(uo&&(uo=!1,en=e,os=o),s=e.pendingLanes,s===0&&(an=null),u1(n.stateNode),Ue(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(is)throw is=!1,e=_l,_l=null,e;return os&1&&e.tag!==0&&xr(),s=e.pendingLanes,s&1?e===Ml?li++:(li=0,Ml=e):li=0,wn(),null}function xr(){if(en!==null){var e=Gp(os),t=st.transition,n=H;try{if(st.transition=null,H=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,os=0,F&6)throw Error(R(331));var o=F;for(F|=4,L=e.current;L!==null;){var s=L,a=s.child;if(L.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:si(8,d,s)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var p=d.sibling,g=d.return;if(rm(d),d===c){L=null;break}if(p!==null){p.return=g,L=p;break}L=g}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}L=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,L=a;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:si(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,L=y;break e}L=s.return}}var h=e.current;for(L=h;L!==null;){a=L;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,L=m;else e:for(a=h;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_s(9,l)}}catch(S){ce(l,l.return,S)}if(l===a){L=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,L=w;break e}L=l.return}}if(F=o,wn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ks,e)}catch{}r=!0}return r}finally{H=n,st.transition=t}}return!1}function Rd(e,t,n){t=Tr(n,t),t=Gh(e,t,1),e=sn(e,t,1),t=ze(),e!==null&&(ji(e,1,t),Ue(e,t))}function ce(e,t,n){if(e.tag===3)Rd(e,e,n);else for(;t!==null;){if(t.tag===3){Rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=Tr(n,e),e=Kh(t,e,1),t=sn(t,e,1),e=ze(),t!==null&&(ji(t,1,e),Ue(t,e));break}}t=t.return}}function $y(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Te&n)===n&&(xe===4||xe===3&&(Te&130023424)===Te&&500>pe()-Fu?Ln(e,0):Ou|=n),Ue(e,t)}function pm(e,t){t===0&&(e.mode&1?(t=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):t=1);var n=ze();e=Vt(e,t),e!==null&&(ji(e,t,n),Ue(e,n))}function jy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pm(e,n)}function Vy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),pm(e,n)}var hm;hm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,Ty(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,re&&t.flags&1048576&&vh(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var o=Sr(t,De.current);vr(t,n),o=Lu(null,t,r,e,o,n);var s=zu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(s=!0,Yo(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ru(t),o.updater=Rs,t.stateNode=o,o._reactInternals=t,xl(t,r,e,n),t=kl(null,t,r,!0,s,n)):(t.tag=0,re&&s&&ku(t),Le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Oy(r),e=ft(r,e),o){case 0:t=Sl(null,t,r,e,n);break e;case 1:t=xd(null,t,r,e,n);break e;case 11:t=yd(null,t,r,e,n);break e;case 14:t=vd(null,t,r,ft(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),Sl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),xd(e,t,r,o,n);case 3:e:{if(qh(t),e===null)throw Error(R(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Ph(e,t),Jo(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=Tr(Error(R(423)),t),t=wd(e,t,r,n,o);break e}else if(r!==o){o=Tr(Error(R(424)),t),t=wd(e,t,r,n,o);break e}else for(Ye=on(t.stateNode.containerInfo.firstChild),Qe=t,re=!0,ht=null,n=kh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===o){t=It(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Th(t),e===null&&gl(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,dl(r,o)?a=null:s!==null&&dl(r,s)&&(t.flags|=32),Xh(e,t),Le(e,t,a,n),t.child;case 6:return e===null&&gl(t),null;case 13:return Zh(e,t,n);case 4:return _u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),yd(e,t,r,o,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,a=o.value,Q(qo,r._currentValue),r._currentValue=a,s!==null)if(vt(s.value,a)){if(s.children===o.children&&!Fe.current){t=It(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nt(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yl(s.return,n,t),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(R(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yl(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,vr(t,n),o=at(o),r=r(o),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,o=ft(r,t.pendingProps),o=ft(r.type,o),vd(e,t,r,o,n);case 15:return Yh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),bo(e,t),t.tag=1,Be(r)?(e=!0,Yo(t)):e=!1,vr(t,n),Wh(t,r,o),xl(t,r,o,n),kl(null,t,r,!0,e,n);case 19:return Jh(e,t,n);case 22:return Qh(e,t,n)}throw Error(R(156,t.tag))};function mm(e,t){return Bp(e,t)}function Iy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Iy(e,t,n,r)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oy(e){if(typeof e=="function")return Wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cu)return 11;if(e===du)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _o(e,t,n,r,o,s){var a=2;if(r=e,typeof e=="function")Wu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zn:return zn(n.children,o,s,t);case uu:a=8,o|=8;break;case Ua:return e=ot(12,n,t,o|2),e.elementType=Ua,e.lanes=s,e;case Ha:return e=ot(13,n,t,o),e.elementType=Ha,e.lanes=s,e;case Wa:return e=ot(19,n,t,o),e.elementType=Wa,e.lanes=s,e;case Tp:return Ds(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cp:a=10;break e;case Pp:a=9;break e;case cu:a=11;break e;case du:a=14;break e;case Kt:a=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=ot(a,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function zn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function Ds(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Tp,e.lanes=n,e.stateNode={isHidden:!1},e}function Sa(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function ka(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fy(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gu(e,t,n,r,o,s,a,l,u){return e=new Fy(e,t,n,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ot(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ru(s),e}function By(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gm(e){if(!e)return mn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Be(n))return gh(e,n,t)}return t}function ym(e,t,n,r,o,s,a,l,u){return e=Gu(n,r,!0,e,o,s,a,l,u),e.context=gm(null),n=e.current,r=ze(),o=ln(n),s=Nt(r,o),s.callback=t??null,sn(n,s,o),e.current.lanes=o,ji(e,o,r),Ue(e,r),e}function Ns(e,t,n,r){var o=t.current,s=ze(),a=ln(o);return n=gm(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(o,t,a),e!==null&&(gt(e,o,a,s),Po(e,o,a)),a}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){_d(e,t),(e=e.alternate)&&_d(e,t)}function Uy(){return null}var vm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}Ls.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Ns(e,t,null,null)};Ls.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Ns(null,e,null,null)}),t[jt]=null}};function Ls(e){this._internalRoot=e}Ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&qp(e)}};function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function Hy(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var c=as(a);s.call(c)}}var a=ym(t,r,e,0,null,!1,!1,"",Md);return e._reactRootContainer=a,e[jt]=a.current,ki(e.nodeType===8?e.parentNode:e),Fn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=as(u);l.call(c)}}var u=Gu(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=u,e[jt]=u.current,ki(e.nodeType===8?e.parentNode:e),Fn(function(){Ns(t,u,n,r)}),u}function $s(e,t,n,r,o){var s=n._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var l=o;o=function(){var u=as(a);l.call(u)}}Ns(t,a,e,o)}else a=Hy(n,t,e,o,r);return as(a)}Kp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(hu(t,n|1),Ue(t,pe()),!(F&6)&&(Er=pe()+500,wn()))}break;case 13:Fn(function(){var r=Vt(e,1);if(r!==null){var o=ze();gt(r,e,1,o)}}),Ku(e,1)}};mu=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=ze();gt(t,e,134217728,n)}Ku(e,134217728)}};Yp=function(e){if(e.tag===13){var t=ln(e),n=Vt(e,t);if(n!==null){var r=ze();gt(n,e,t,r)}Ku(e,t)}};Qp=function(){return H};Xp=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};tl=function(e,t,n){switch(t){case"input":if(Ya(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Es(r);if(!o)throw Error(R(90));bp(r),Ya(r,o)}}}break;case"textarea":Rp(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};$p=Bu;jp=Fn;var Wy={usingClientEntryPoint:!1,Events:[Ii,nr,Es,Lp,zp,Bu]},Wr={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gy={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Op(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{ks=co.inject(Gy),Ct=co}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wy;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(R(200));return By(e,t,null,n)};Ze.createRoot=function(e,t){if(!Qu(e))throw Error(R(299));var n=!1,r="",o=vm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gu(e,1,!1,null,null,n,!1,r,o),e[jt]=t.current,ki(e.nodeType===8?e.parentNode:e),new Yu(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Op(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Fn(e)};Ze.hydrate=function(e,t,n){if(!zs(t))throw Error(R(200));return $s(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",a=vm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ym(t,null,e,1,n??null,o,!1,s,a),e[jt]=t.current,ki(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ls(t)};Ze.render=function(e,t,n){if(!zs(t))throw Error(R(200));return $s(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!zs(e))throw Error(R(40));return e._reactRootContainer?(Fn(function(){$s(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Bu;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zs(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return $s(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function xm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xm)}catch(e){console.error(e)}}xm(),xp.exports=Ze;var Ky=xp.exports,Dd=Ky;Fa.createRoot=Dd.createRoot,Fa.hydrateRoot=Dd.hydrateRoot;var ke=function(){return ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ke.apply(this,arguments)};function br(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,s;r<o;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var J="-ms-",ui="-moz-",U="-webkit-",wm="comm",js="rule",Xu="decl",Yy="@import",Sm="@keyframes",Qy="@layer",km=Math.abs,qu=String.fromCharCode,Ll=Object.assign;function Xy(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function Cm(e){return e.trim()}function At(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Mo(e,t,n){return e.indexOf(t,n)}function Se(e,t){return e.charCodeAt(t)|0}function Ar(e,t,n){return e.slice(t,n)}function St(e){return e.length}function Pm(e){return e.length}function Zr(e,t){return t.push(e),e}function qy(e,t){return e.map(t).join("")}function Nd(e,t){return e.filter(function(n){return!At(n,t)})}var Vs=1,Rr=1,Tm=0,ut=0,me=0,jr="";function Is(e,t,n,r,o,s,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:s,line:Vs,column:Rr,length:a,return:"",siblings:l}}function Wt(e,t){return Ll(Is("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Qn(e){for(;e.root;)e=Wt(e.root,{children:[e]});Zr(e,e.siblings)}function Zy(){return me}function Jy(){return me=ut>0?Se(jr,--ut):0,Rr--,me===10&&(Rr=1,Vs--),me}function yt(){return me=ut<Tm?Se(jr,ut++):0,Rr++,me===10&&(Rr=1,Vs++),me}function $n(){return Se(jr,ut)}function Do(){return ut}function Os(e,t){return Ar(jr,e,t)}function zl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ev(e){return Vs=Rr=1,Tm=St(jr=e),ut=0,[]}function tv(e){return jr="",e}function Ca(e){return Cm(Os(ut-1,$l(e===91?e+2:e===40?e+1:e)))}function nv(e){for(;(me=$n())&&me<33;)yt();return zl(e)>2||zl(me)>3?"":" "}function rv(e,t){for(;--t&&yt()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return Os(e,Do()+(t<6&&$n()==32&&yt()==32))}function $l(e){for(;yt();)switch(me){case e:return ut;case 34:case 39:e!==34&&e!==39&&$l(me);break;case 40:e===41&&$l(e);break;case 92:yt();break}return ut}function iv(e,t){for(;yt()&&e+me!==47+10;)if(e+me===42+42&&$n()===47)break;return"/*"+Os(t,ut-1)+"*"+qu(e===47?e:yt())}function ov(e){for(;!zl($n());)yt();return Os(e,ut)}function sv(e){return tv(No("",null,null,null,[""],e=ev(e),0,[0],e))}function No(e,t,n,r,o,s,a,l,u){for(var c=0,d=0,f=a,p=0,g=0,v=0,x=1,k=1,y=1,h=0,m="",w=o,S=s,P=r,C=m;k;)switch(v=h,h=yt()){case 40:if(v!=108&&Se(C,f-1)==58){Mo(C+=I(Ca(h),"&","&\f"),"&\f",km(c?l[c-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:C+=Ca(h);break;case 9:case 10:case 13:case 32:C+=nv(v);break;case 92:C+=rv(Do()-1,7);continue;case 47:switch($n()){case 42:case 47:Zr(av(iv(yt(),Do()),t,n,u),u);break;default:C+="/"}break;case 123*x:l[c++]=St(C)*y;case 125*x:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+d:y==-1&&(C=I(C,/\f/g,"")),g>0&&St(C)-f&&Zr(g>32?zd(C+";",r,n,f-1,u):zd(I(C," ","")+";",r,n,f-2,u),u);break;case 59:C+=";";default:if(Zr(P=Ld(C,t,n,c,d,o,l,m,w=[],S=[],f,s),s),h===123)if(d===0)No(C,t,P,P,w,s,f,l,S);else switch(p===99&&Se(C,3)===110?100:p){case 100:case 108:case 109:case 115:No(e,P,P,r&&Zr(Ld(e,P,P,0,0,o,l,m,o,w=[],f,S),S),o,S,f,l,r?w:S);break;default:No(C,P,P,P,[""],S,0,l,S)}}c=d=g=0,x=y=1,m=C="",f=a;break;case 58:f=1+St(C),g=v;default:if(x<1){if(h==123)--x;else if(h==125&&x++==0&&Jy()==125)continue}switch(C+=qu(h),h*x){case 38:y=d>0?1:(C+="\f",-1);break;case 44:l[c++]=(St(C)-1)*y,y=1;break;case 64:$n()===45&&(C+=Ca(yt())),p=$n(),d=f=St(m=C+=ov(Do())),h++;break;case 45:v===45&&St(C)==2&&(x=0)}}return s}function Ld(e,t,n,r,o,s,a,l,u,c,d,f){for(var p=o-1,g=o===0?s:[""],v=Pm(g),x=0,k=0,y=0;x<r;++x)for(var h=0,m=Ar(e,p+1,p=km(k=a[x])),w=e;h<v;++h)(w=Cm(k>0?g[h]+" "+m:I(m,/&\f/g,g[h])))&&(u[y++]=w);return Is(e,t,n,o===0?js:l,u,c,d,f)}function av(e,t,n,r){return Is(e,t,n,wm,qu(Zy()),Ar(e,2,-2),0,r)}function zd(e,t,n,r,o){return Is(e,t,n,Xu,Ar(e,0,r),Ar(e,r+1,-1),r,o)}function Em(e,t,n){switch(Xy(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return ui+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+ui+e+J+e+e;case 5936:switch(Se(e,t+11)){case 114:return U+e+J+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+J+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+J+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+J+e+e;case 6165:return U+e+J+"flex-"+e+e;case 5187:return U+e+I(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return U+e+J+"flex-item-"+I(e,/flex-|-self/g,"")+(At(e,/flex-|baseline/)?"":J+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return U+e+J+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+J+I(e,"shrink","negative")+e;case 5292:return U+e+J+I(e,"basis","preferred-size")+e;case 6060:return U+"box-"+I(e,"-grow","")+U+e+J+I(e,"grow","positive")+e;case 4554:return U+I(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!At(e,/flex-|baseline/))return J+"grid-column-align"+Ar(e,t)+e;break;case 2592:case 3360:return J+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,At(r.props,/grid-\w+-end/)})?~Mo(e+(n=n[t].value),"span",0)?e:J+I(e,"-start","")+e+J+"grid-row-span:"+(~Mo(n,"span",0)?At(n,/\d+/):+At(n,/\d+/)-+At(e,/\d+/))+";":J+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return At(r.props,/grid-\w+-start/)})?e:J+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(St(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+ui+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mo(e,"stretch",0)?Em(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,s,a,l,u,c){return J+o+":"+s+c+(a?J+o+"-span:"+(l?u:+u-+s)+c:"")+e});case 4949:if(Se(e,t+6)===121)return I(e,":",":"+U)+e;break;case 6444:switch(Se(e,Se(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(Se(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+J+"$2box$3")+e;case 100:return I(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function ls(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function lv(e,t,n,r){switch(e.type){case Qy:if(e.children.length)break;case Yy:case Xu:return e.return=e.return||e.value;case wm:return"";case Sm:return e.return=e.value+"{"+ls(e.children,r)+"}";case js:if(!St(e.value=e.props.join(",")))return""}return St(n=ls(e.children,r))?e.return=e.value+"{"+n+"}":""}function uv(e){var t=Pm(e);return function(n,r,o,s){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,s)||"";return a}}function cv(e){return function(t){t.root||(t=t.return)&&e(t)}}function dv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Xu:e.return=Em(e.value,e.length,n);return;case Sm:return ls([Wt(e,{value:I(e.value,"@","@"+U)})],r);case js:if(e.length)return qy(n=e.props,function(o){switch(At(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qn(Wt(e,{props:[I(o,/:(read-\w+)/,":"+ui+"$1")]})),Qn(Wt(e,{props:[o]})),Ll(e,{props:Nd(n,r)});break;case"::placeholder":Qn(Wt(e,{props:[I(o,/:(plac\w+)/,":"+U+"input-$1")]})),Qn(Wt(e,{props:[I(o,/:(plac\w+)/,":"+ui+"$1")]})),Qn(Wt(e,{props:[I(o,/:(plac\w+)/,J+"input-$1")]})),Qn(Wt(e,{props:[o]})),Ll(e,{props:Nd(n,r)});break}return""})}}var fv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",bm="active",Am="data-styled-version",Fs="6.1.15",Zu=`/*!sc*/
`,us=typeof window<"u"&&"HTMLElement"in window,pv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),hv={},Bs=Object.freeze([]),Mr=Object.freeze({});function Rm(e,t,n){return n===void 0&&(n=Mr),e.theme!==n.theme&&e.theme||t||n.theme}var _m=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gv=/(^-|-$)/g;function $d(e){return e.replace(mv,"-").replace(gv,"")}var yv=/(a)(d)/gi,fo=52,jd=function(e){return String.fromCharCode(e+(e>25?39:97))};function jl(e){var t,n="";for(t=Math.abs(e);t>fo;t=t/fo|0)n=jd(t%fo)+n;return(jd(t%fo)+n).replace(yv,"$1-$2")}var Pa,Mm=5381,ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Dm=function(e){return ur(Mm,e)};function Ju(e){return jl(Dm(e)>>>0)}function vv(e){return e.displayName||e.name||"Component"}function Ta(e){return typeof e=="string"&&!0}var Nm=typeof Symbol=="function"&&Symbol.for,Lm=Nm?Symbol.for("react.memo"):60115,xv=Nm?Symbol.for("react.forward_ref"):60112,wv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kv=((Pa={})[xv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pa[Lm]=zm,Pa);function Vd(e){return("type"in(t=e)&&t.type.$$typeof)===Lm?zm:"$$typeof"in e?kv[e.$$typeof]:wv;var t}var Cv=Object.defineProperty,Pv=Object.getOwnPropertyNames,Id=Object.getOwnPropertySymbols,Tv=Object.getOwnPropertyDescriptor,Ev=Object.getPrototypeOf,Od=Object.prototype;function $m(e,t,n){if(typeof t!="string"){if(Od){var r=Ev(t);r&&r!==Od&&$m(e,r,n)}var o=Pv(t);Id&&(o=o.concat(Id(t)));for(var s=Vd(e),a=Vd(t),l=0;l<o.length;++l){var u=o[l];if(!(u in Sv||n&&n[u]||a&&u in a||s&&u in s)){var c=Tv(t,u);try{Cv(e,u,c)}catch{}}}}return e}function Bn(e){return typeof e=="function"}function ec(e){return typeof e=="object"&&"styledComponentId"in e}function Dn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function cs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Mi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Vl(e,t,n){if(n===void 0&&(n=!1),!n&&!Mi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Vl(e[r],t[r]);else if(Mi(t))for(var r in t)e[r]=Vl(e[r],t[r]);return e}function tc(e,t){Object.defineProperty(e,"toString",{value:t})}function Un(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,s=o;t>=s;)if((s<<=1)<0)throw Un(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var s=r;s<o;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r,a=o;a<s;a++)n+="".concat(this.tag.getRule(a)).concat(Zu);return n},e}(),Lo=new Map,ds=new Map,zo=1,po=function(e){if(Lo.has(e))return Lo.get(e);for(;ds.has(zo);)zo++;var t=zo++;return Lo.set(e,t),ds.set(t,e),t},Av=function(e,t){zo=t+1,Lo.set(e,t),ds.set(t,e)},Rv="style[".concat(_r,"][").concat(Am,'="').concat(Fs,'"]'),_v=new RegExp("^".concat(_r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mv=function(e,t,n){for(var r,o=n.split(","),s=0,a=o.length;s<a;s++)(r=o[s])&&e.registerName(t,r)},Dv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Zu),o=[],s=0,a=r.length;s<a;s++){var l=r[s].trim();if(l){var u=l.match(_v);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Av(d,c),Mv(e,d,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},Fd=function(e){for(var t=document.querySelectorAll(Rv),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(_r)!==bm&&(Dv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Nv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var u=Array.from(l.querySelectorAll("style[".concat(_r,"]")));return u[u.length-1]}(n),s=o!==void 0?o.nextSibling:null;r.setAttribute(_r,bm),r.setAttribute(Am,Fs);var a=Nv();return a&&r.setAttribute("nonce",a),n.insertBefore(r,s),r},Lv=function(){function e(t){this.element=jm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,s=r.length;o<s;o++){var a=r[o];if(a.ownerNode===n)return a}throw Un(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),zv=function(){function e(t){this.element=jm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$v=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Bd=us,jv={isServer:!us,useCSSOMInjection:!pv},fs=function(){function e(t,n,r){t===void 0&&(t=Mr),n===void 0&&(n={});var o=this;this.options=ke(ke({},jv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&us&&Bd&&(Bd=!1,Fd(this)),tc(this,function(){return function(s){for(var a=s.getTag(),l=a.length,u="",c=function(f){var p=function(y){return ds.get(y)}(f);if(p===void 0)return"continue";var g=s.names.get(p),v=a.getGroup(f);if(g===void 0||!g.size||v.length===0)return"continue";var x="".concat(_r,".g").concat(f,'[id="').concat(p,'"]'),k="";g!==void 0&&g.forEach(function(y){y.length>0&&(k+="".concat(y,","))}),u+="".concat(v).concat(x,'{content:"').concat(k,'"}').concat(Zu)},d=0;d<l;d++)c(d);return u}(o)})}return e.registerId=function(t){return po(t)},e.prototype.rehydrate=function(){!this.server&&us&&Fd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ke(ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new $v(o):r?new Lv(o):new zv(o)}(this.options),new bv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(po(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(po(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(po(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Vv=/&/g,Iv=/^\s*\/\/.*$/gm;function Vm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Vm(n.children,t)),n})}function Ov(e){var t,n,r,o=e===void 0?Mr:e,s=o.options,a=s===void 0?Mr:s,l=o.plugins,u=l===void 0?Bs:l,c=function(p,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):p},d=u.slice();d.push(function(p){p.type===js&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Vv,n).replace(r,c))}),a.prefix&&d.push(dv),d.push(lv);var f=function(p,g,v,x){g===void 0&&(g=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(Iv,""),y=sv(v||g?"".concat(v," ").concat(g," { ").concat(k," }"):k);a.namespace&&(y=Vm(y,a.namespace));var h=[];return ls(y,uv(d.concat(cv(function(m){return h.push(m)})))),h};return f.hash=u.length?u.reduce(function(p,g){return g.name||Un(15),ur(p,g.name)},Mm).toString():"",f}var Fv=new fs,Il=Ov(),Im=fe.createContext({shouldForwardProp:void 0,styleSheet:Fv,stylis:Il});Im.Consumer;fe.createContext(void 0);function Ol(){return E.useContext(Im)}var Om=function(){function e(t,n){var r=this;this.inject=function(o,s){s===void 0&&(s=Il);var a=r.name+s.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,s(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,tc(this,function(){throw Un(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Il),this.name+t.hash},e}(),Bv=function(e){return e>="A"&&e<="Z"};function Ud(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Bv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Fm=function(e){return e==null||e===!1||e===""},Bm=function(e){var t,n,r=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!Fm(s)&&(Array.isArray(s)&&s.isCss||Bn(s)?r.push("".concat(Ud(o),":"),s,";"):Mi(s)?r.push.apply(r,br(br(["".concat(o," {")],Bm(s),!1),["}"],!1)):r.push("".concat(Ud(o),": ").concat((t=o,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in fv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cn(e,t,n,r){if(Fm(e))return[];if(ec(e))return[".".concat(e.styledComponentId)];if(Bn(e)){if(!Bn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var o=e(t);return cn(o,t,n,r)}var s;return e instanceof Om?n?(e.inject(n,r),[e.getName(r)]):[e]:Mi(e)?Bm(e):Array.isArray(e)?Array.prototype.concat.apply(Bs,e.map(function(a){return cn(a,t,n,r)})):[e.toString()]}function Um(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bn(n)&&!ec(n))return!1}return!0}var Uv=Dm(Fs),Hv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Um(t),this.componentId=n,this.baseHash=ur(Uv,n),this.baseStyle=r,fs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Dn(o,this.staticRulesId);else{var s=cs(cn(this.rules,t,n,r)),a=jl(ur(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(s,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=Dn(o,a),this.staticRulesId=a}else{for(var u=ur(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=cs(cn(f,t,n,r));u=ur(u,p+d),c+=p}}if(c){var g=jl(u>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),o=Dn(o,g)}}return o},e}(),Di=fe.createContext(void 0);Di.Consumer;function Wv(e){var t=fe.useContext(Di),n=E.useMemo(function(){return function(r,o){if(!r)throw Un(14);if(Bn(r)){var s=r(o);return s}if(Array.isArray(r)||typeof r!="object")throw Un(8);return o?ke(ke({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?fe.createElement(Di.Provider,{value:n},e.children):null}var Ea={};function Gv(e,t,n){var r=ec(e),o=e,s=!Ta(e),a=t.attrs,l=a===void 0?Bs:a,u=t.componentId,c=u===void 0?function(w,S){var P=typeof w!="string"?"sc":$d(w);Ea[P]=(Ea[P]||0)+1;var C="".concat(P,"-").concat(Ju(Fs+P+Ea[P]));return S?"".concat(S,"-").concat(C):C}(t.displayName,t.parentComponentId):u,d=t.displayName,f=d===void 0?function(w){return Ta(w)?"styled.".concat(w):"Styled(".concat(vv(w),")")}(e):d,p=t.displayName&&t.componentId?"".concat($d(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(w,S){return x(w,S)&&k(w,S)}}else v=x}var y=new Hv(n,p,r?o.componentStyle:void 0);function h(w,S){return function(P,C,b){var N=P.attrs,$=P.componentStyle,W=P.defaultProps,q=P.foldedComponentIds,ie=P.styledComponentId,oe=P.target,Ge=fe.useContext(Di),G=Ol(),ye=P.shouldForwardProp||G.shouldForwardProp,M=Rm(C,Ge,W)||Mr,A=function(be,ne,Ve){for(var kn,ct=ke(ke({},ne),{className:void 0,theme:Ve}),Ut=0;Ut<be.length;Ut+=1){var et=Bn(kn=be[Ut])?kn(ct):kn;for(var Et in et)ct[Et]=Et==="className"?Dn(ct[Et],et[Et]):Et==="style"?ke(ke({},ct[Et]),et[Et]):et[Et]}return ne.className&&(ct.className=Dn(ct.className,ne.className)),ct}(N,C,M),_=A.as||oe,D={};for(var j in A)A[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&A.theme===M||(j==="forwardedAs"?D.as=A.forwardedAs:ye&&!ye(j,_)||(D[j]=A[j]));var K=function(be,ne){var Ve=Ol(),kn=be.generateAndInjectStyles(ne,Ve.styleSheet,Ve.stylis);return kn}($,A),te=Dn(q,ie);return K&&(te+=" "+K),A.className&&(te+=" "+A.className),D[Ta(_)&&!_m.has(_)?"class":"className"]=te,b&&(D.ref=b),E.createElement(_,D)}(m,w,S)}h.displayName=f;var m=fe.forwardRef(h);return m.attrs=g,m.componentStyle=y,m.displayName=f,m.shouldForwardProp=v,m.foldedComponentIds=r?Dn(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=p,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var P=[],C=1;C<arguments.length;C++)P[C-1]=arguments[C];for(var b=0,N=P;b<N.length;b++)Vl(S,N[b],!0);return S}({},o.defaultProps,w):w}}),tc(m,function(){return".".concat(m.styledComponentId)}),s&&$m(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Hd(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Wd=function(e){return Object.assign(e,{isCss:!0})};function Fi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Bn(e)||Mi(e))return Wd(cn(Hd(Bs,br([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?cn(r):Wd(cn(Hd(r,t)))}function Fl(e,t,n){if(n===void 0&&(n=Mr),!t)throw Un(1,t);var r=function(o){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,n,Fi.apply(void 0,br([o],s,!1)))};return r.attrs=function(o){return Fl(e,t,ke(ke({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Fl(e,t,ke(ke({},n),o))},r}var Hm=function(e){return Fl(Gv,e)},z=Hm;_m.forEach(function(e){z[e]=Hm(e)});var Kv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Um(t),fs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var s=o(cs(cn(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&fs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Yv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Fi.apply(void 0,br([e],t,!1)),o="sc-global-".concat(Ju(JSON.stringify(r))),s=new Kv(r,o),a=function(u){var c=Ol(),d=fe.useContext(Di),f=fe.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&l(f,u,c.styleSheet,d,c.stylis),fe.useLayoutEffect(function(){if(!c.styleSheet.server)return l(f,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,f,p){if(s.isStatic)s.renderStyles(u,hv,d,p);else{var g=ke(ke({},c),{theme:Rm(c,f,a.defaultProps)});s.renderStyles(u,g,d,p)}}return fe.memo(a)}function Wm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cs(Fi.apply(void 0,br([e],t,!1))),o=Ju(r);return new Om(o,r)}const Qv={classical:"/assets/covers/classical_cover.jpg",rock:"/assets/covers/rock_cover.jpeg",pop:"/assets/covers/pop_cover.jpeg",electronic:"/assets/covers/electronic_cover.jpeg",jazz:"/assets/covers/jazz_cover.jpeg",ambient:"/assets/covers/ambient_cover.jpeg",soundtrack:"/assets/covers/galaxy_2.gif",hiphop:"/assets/covers/hiphop_cover.jpg"},Y={chopin:"/assets/covers/chopin.jpeg",chopin_etudes:"/assets/covers/chopin_etudes.jpeg",bach:"/assets/covers/bach.jpeg",queen:"/assets/covers/rock_cover.jpg",bonJovi:"/assets/covers/bon_jovi.jpeg",rema:"/assets/covers/rema.jpg",rosalia:"/assets/covers/rosalia.jpg",eminem:"/assets/covers/eminem.jpg",liebestraume:"/assets/covers/liebestraume.jpg",rema_calm_down:"/assets/covers/rema_calm_down.jpeg",memory_reboot:"/assets/covers/memory_reboot.jpeg"},Gd={Stan:"/assets/covers/stan.jpeg"},ba={urban_blues:"/assets/covers/urban_blues.jpeg",miss_g:"/assets/covers/miss_g.jpeg"},B={classical:"#7a1f1f",rock:"#585858",pop:"#9c27b0",electronic:"#3a1f7a",jazz:"#7a4b1f",ambient:"#2d5d2a",soundtrack:"#1f5a7a",hiphop:"#333333"},Bt=[{id:"classical-1",title:"Air on G String",artist:"Johann Sebastian Bach",album:"Orchestral Suites",genre:"classical",coverArt:Y.bach,audioSrc:"/assets/musics/single_tracks/air_on_g_string.mp3",duration:180,color:B.classical},{id:"classical-3",title:"Etude Op. 10 No. 4",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:Y.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_4.mp3",duration:120,color:B.classical},{id:"classical-4",title:"Etude Op. 25 No. 11",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:Y.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_23.mp3",duration:260,color:B.classical},{id:"classical-5",title:"Liebestraume No. 3",artist:"Franz Liszt",album:"Piano Dreams",genre:"classical",coverArt:Y.liebestraume,audioSrc:"/assets/musics/single_tracks/liebestraume_no_3.mp3",duration:295,color:B.classical},{id:"nocturne-1",title:"Nocturne Op. 9 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_1.mp3",duration:310,color:B.classical},{id:"nocturne-2",title:"Nocturne Op. 9 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_2.mp3",duration:270,color:B.classical},{id:"nocturne-3",title:"Nocturne Op. 9 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_3.mp3",duration:330,color:B.classical},{id:"nocturne-4",title:"Nocturne Op. 15 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_4.mp3",duration:305,color:B.classical},{id:"nocturne-5",title:"Nocturne Op. 15 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_5.mp3",duration:315,color:B.classical},{id:"nocturne-6",title:"Nocturne Op. 15 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_6.mp3",duration:290,color:B.classical},{id:"nocturne-7",title:"Nocturne Op. 27 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_7.mp3",duration:340,color:B.classical},{id:"nocturne-8",title:"Nocturne Op. 27 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_8.mp3",duration:320,color:B.classical},{id:"nocturne-9",title:"Nocturne Op. 32 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_9.mp3",duration:280,color:B.classical},{id:"nocturne-10",title:"Nocturne Op. 32 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_10.mp3",duration:300,color:B.classical},{id:"nocturne-11",title:"Nocturne Op. 37 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_11.mp3",duration:325,color:B.classical},{id:"nocturne-12",title:"Nocturne Op. 37 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_12.mp3",duration:310,color:B.classical},{id:"nocturne-13",title:"Nocturne Op. 48 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_13.mp3",duration:350,color:B.classical},{id:"nocturne-14",title:"Nocturne Op. 48 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_14.mp3",duration:335,color:B.classical},{id:"nocturne-15",title:"Nocturne Op. 55 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_15.mp3",duration:295,color:B.classical},{id:"nocturne-17",title:"Nocturne Op. 55 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_17.mp3",duration:330,color:B.classical},{id:"nocturne-18",title:"Nocturne Op. 62 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_18.mp3",duration:360,color:B.classical},{id:"nocturne-19",title:"Nocturne Op. 62 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_19.mp3",duration:340,color:B.classical},{id:"nocturne-20",title:"Nocturne Op. 72 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Y.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_20.mp3",duration:315,color:B.classical},{id:"rock-1",title:"Bohemian Rhapsody",artist:"Queen",album:"A Night at the Opera",genre:"rock",coverArt:Qv.rock,audioSrc:"/assets/musics/single_tracks/bohemian_rhapsody.mp3",duration:355,color:B.rock},{id:"rock-2",title:"It's My Life",artist:"Bon Jovi",album:"Crush",genre:"rock",coverArt:Y.bonJovi,audioSrc:"/assets/musics/single_tracks/its_my_life.mp3",duration:224,color:B.rock},{id:"pop-1",title:"Calm Down",artist:"Rema",album:"Rave & Roses",genre:"pop",coverArt:Y.rema_calm_down,audioSrc:"/assets/musics/single_tracks/calm_down.mp3",duration:234,color:B.pop},{id:"pop-2",title:"Candy",artist:"Naoko Gushima",album:"Motomami",genre:"pop",coverArt:ba.miss_g,audioSrc:"/assets/musics/single_tracks/candy.mp3",duration:185,color:B.pop},{id:"pop-3",title:"Missing You",artist:"Naoko Gushima",album:"Love Stories",genre:"pop",coverArt:ba.urban_blues,audioSrc:"/assets/musics/single_tracks/missing_you.mp3",duration:210,color:B.pop},{id:"electronic-2",title:"Memory Reboot",artist:"Cyber Dreams",album:"Neural Network",genre:"electronic",coverArt:Y.memory_reboot,audioSrc:"/assets/musics/single_tracks/memory_reboot.mp3",duration:240,color:B.electronic},{id:"electronic-3",title:"Monochrome",artist:"Naoko Gushima",album:"Color Code",genre:"electronic",coverArt:ba.urban_blues,audioSrc:"/assets/musics/single_tracks/monochrome.mp3",duration:218,color:B.electronic},{id:"hiphop-1",title:"Stan (Instrumental)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:Gd.Stan,audioSrc:"/assets/musics/single_tracks/stan_instrumental.mp3",duration:340,color:B.hiphop},{id:"hiphop-2",title:"Stan (MIDI Version)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:Gd.Stan,audioSrc:"/assets/musics/single_tracks/stan_midi.mp3",duration:330,color:B.hiphop}];Bt.filter(e=>e.genre==="classical");Bt.filter(e=>e.genre==="rock");Bt.filter(e=>e.genre==="pop");Bt.filter(e=>e.genre==="electronic");Bt.filter(e=>e.genre==="jazz");Bt.filter(e=>e.genre==="ambient");Bt.filter(e=>e.genre==="soundtrack");Bt.filter(e=>e.genre==="hiphop");const Xv={currentTrack:null,isPlaying:!1,volume:.7,progress:0,duration:0,isShuffling:!1,isRepeating:!1,isRepeatingOne:!1,queue:Bt,visualizerActive:!0,equalizerActive:!0,sidebarMode:"auto",isBuffering:!1,error:null,lastUserAction:Date.now(),lastSidebarInteraction:Date.now()},qv=(e,t)=>{switch(t.type){case"SET_TRACK":return{...e,currentTrack:t.payload,isPlaying:!0,progress:0,error:null,isBuffering:!0,lastUserAction:Date.now()};case"PLAY":return{...e,isPlaying:!0,lastUserAction:Date.now()};case"PAUSE":return{...e,isPlaying:!1,lastUserAction:Date.now()};case"SET_VOLUME":return{...e,volume:t.payload,lastUserAction:Date.now()};case"SET_PROGRESS":return{...e,progress:t.payload};case"SET_DURATION":return{...e,duration:t.payload};case"TOGGLE_SHUFFLE":return{...e,isShuffling:!e.isShuffling,lastUserAction:Date.now()};case"TOGGLE_REPEAT":return{...e,isRepeating:!e.isRepeating,isRepeatingOne:e.isRepeating?e.isRepeatingOne:!1,lastUserAction:Date.now()};case"TOGGLE_REPEAT_ONE":return{...e,isRepeatingOne:!e.isRepeatingOne,isRepeating:e.isRepeatingOne?e.isRepeating:!1,lastUserAction:Date.now()};case"SET_QUEUE":return{...e,queue:[...t.payload]};case"NEXT_TRACK":{if(!e.currentTrack||e.queue.length===0)return e;const r=(e.queue.findIndex(o=>o.id===e.currentTrack.id)+1)%e.queue.length;return{...e,currentTrack:e.queue[r],isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now()}}case"PREV_TRACK":{if(!e.currentTrack||e.queue.length===0)return e;if(e.progress>3)return{...e,progress:0,lastUserAction:Date.now()};const r=(e.queue.findIndex(o=>o.id===e.currentTrack.id)-1+e.queue.length)%e.queue.length;return{...e,currentTrack:e.queue[r],isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now()}}case"TOGGLE_VISUALIZER":return{...e,visualizerActive:!e.visualizerActive,lastUserAction:Date.now()};case"TOGGLE_EQUALIZER":return{...e,equalizerActive:!e.equalizerActive,lastUserAction:Date.now()};case"SET_BUFFERING":return{...e,isBuffering:t.payload};case"SET_ERROR":return{...e,error:t.payload,isBuffering:!1,isPlaying:!1};case"SET_SIDEBAR_MODE":return{...e,sidebarMode:t.payload,lastUserAction:Date.now(),lastSidebarInteraction:Date.now()};case"SIDEBAR_INTERACTION":return{...e,lastSidebarInteraction:Date.now()};case"USER_INTERACTION":return{...e,lastUserAction:Date.now()};default:return e}},Gm=E.createContext(void 0);function Zv({children:e}){const[t,n]=E.useReducer(qv,Xv),[r,o]=E.useState(!1);return E.useEffect(()=>{!t.currentTrack&&t.queue.length>0&&n({type:"SET_TRACK",payload:t.queue[0]})},[t.queue,t.currentTrack]),T.jsx(Gm.Provider,{value:{state:t,dispatch:n,isLoadingTracks:r},children:e})}function Bi(){const e=E.useContext(Gm);if(!e)throw new Error("useMusicContext must be used within a MusicProvider");return e}const Km=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Us=E.createContext({}),Hs=E.createContext(null),Ws=typeof document<"u",nc=Ws?E.useLayoutEffect:E.useEffect,Ym=E.createContext({strict:!1}),rc=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Jv="framerAppearId",Qm="data-"+rc(Jv);function e2(e,t,n,r){const{visualElement:o}=E.useContext(Us),s=E.useContext(Ym),a=E.useContext(Hs),l=E.useContext(Km).reducedMotion,u=E.useRef();r=r||s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const c=u.current;E.useInsertionEffect(()=>{c&&c.update(n,a)});const d=E.useRef(!!(n[Qm]&&!window.HandoffComplete));return nc(()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())}),E.useEffect(()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),c}function cr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function t2(e,t,n){return E.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):cr(n)&&(n.current=r))},[t])}function Ni(e){return typeof e=="string"||Array.isArray(e)}function Gs(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ic=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],oc=["initial",...ic];function Ks(e){return Gs(e.animate)||oc.some(t=>Ni(e[t]))}function Xm(e){return!!(Ks(e)||e.variants)}function n2(e,t){if(Ks(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ni(n)?n:void 0,animate:Ni(r)?r:void 0}}return e.inherit!==!1?t:{}}function r2(e){const{initial:t,animate:n}=n2(e,E.useContext(Us));return E.useMemo(()=>({initial:t,animate:n}),[Kd(t),Kd(n)])}function Kd(e){return Array.isArray(e)?e.join(" "):e}const Yd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Li={};for(const e in Yd)Li[e]={isEnabled:t=>Yd[e].some(n=>!!t[n])};function i2(e){for(const t in e)Li[t]={...Li[t],...e[t]}}const sc=E.createContext({}),qm=E.createContext({}),o2=Symbol.for("motionComponentSymbol");function s2({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&i2(e);function s(l,u){let c;const d={...E.useContext(Km),...l,layoutId:a2(l)},{isStatic:f}=d,p=r2(l),g=r(l,f);if(!f&&Ws){p.visualElement=e2(o,g,d,t);const v=E.useContext(qm),x=E.useContext(Ym).strict;p.visualElement&&(c=p.visualElement.loadFeatures(d,x,e,v))}return E.createElement(Us.Provider,{value:p},c&&p.visualElement?E.createElement(c,{visualElement:p.visualElement,...d}):null,n(o,l,t2(g,p.visualElement,u),g,f,p.visualElement))}const a=E.forwardRef(s);return a[o2]=o,a}function a2({layoutId:e}){const t=E.useContext(sc).id;return t&&e!==void 0?t+"-"+e:e}function l2(e){function t(r,o={}){return s2(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const u2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ac(e){return typeof e!="string"||e.includes("-")?!1:!!(u2.indexOf(e)>-1||/[A-Z]/.test(e))}const ps={};function c2(e){Object.assign(ps,e)}const Ui=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Gn=new Set(Ui);function Zm(e,{layout:t,layoutId:n}){return Gn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ps[e]||e==="opacity")}const He=e=>!!(e&&e.getVelocity),d2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},f2=Ui.length;function p2(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let s="";for(let a=0;a<f2;a++){const l=Ui[a];if(e[l]!==void 0){const u=d2[l]||l;s+=`${u}(${e[l]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),o?s=o(e,r?"":s):n&&r&&(s="none"),s}const Jm=e=>t=>typeof t=="string"&&t.startsWith(e),e0=Jm("--"),Bl=Jm("var(--"),h2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,m2=(e,t)=>t&&typeof e=="number"?t.transform(e):e,gn=(e,t,n)=>Math.min(Math.max(n,e),t),Kn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ci={...Kn,transform:e=>gn(0,1,e)},ho={...Kn,default:1},di=e=>Math.round(e*1e5)/1e5,Ys=/(-)?([\d]*\.?[\d])+/g,t0=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,g2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Hi(e){return typeof e=="string"}const Wi=e=>({test:t=>Hi(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Gt=Wi("deg"),Tt=Wi("%"),V=Wi("px"),y2=Wi("vh"),v2=Wi("vw"),Qd={...Tt,parse:e=>Tt.parse(e)/100,transform:e=>Tt.transform(e*100)},Xd={...Kn,transform:Math.round},n0={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,radius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,size:V,top:V,right:V,bottom:V,left:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,rotate:Gt,rotateX:Gt,rotateY:Gt,rotateZ:Gt,scale:ho,scaleX:ho,scaleY:ho,scaleZ:ho,skew:Gt,skewX:Gt,skewY:Gt,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:ci,originX:Qd,originY:Qd,originZ:V,zIndex:Xd,fillOpacity:ci,strokeOpacity:ci,numOctaves:Xd};function lc(e,t,n,r){const{style:o,vars:s,transform:a,transformOrigin:l}=e;let u=!1,c=!1,d=!0;for(const f in t){const p=t[f];if(e0(f)){s[f]=p;continue}const g=n0[f],v=m2(p,g);if(Gn.has(f)){if(u=!0,a[f]=v,!d)continue;p!==(g.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=v):o[f]=v}if(t.transform||(u||r?o.transform=p2(e.transform,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:g=0}=l;o.transformOrigin=`${f} ${p} ${g}`}}const uc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function r0(e,t,n){for(const r in t)!He(t[r])&&!Zm(r,n)&&(e[r]=t[r])}function x2({transformTemplate:e},t,n){return E.useMemo(()=>{const r=uc();return lc(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function w2(e,t,n){const r=e.style||{},o={};return r0(o,r,e),Object.assign(o,x2(e,t,n)),e.transformValues?e.transformValues(o):o}function S2(e,t,n){const r={},o=w2(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const k2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function hs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||k2.has(e)}let i0=e=>!hs(e);function C2(e){e&&(i0=t=>t.startsWith("on")?!hs(t):e(t))}try{C2(require("@emotion/is-prop-valid").default)}catch{}function P2(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(i0(o)||n===!0&&hs(o)||!t&&!hs(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function qd(e,t,n){return typeof e=="string"?e:V.transform(t+n*e)}function T2(e,t,n){const r=qd(t,e.x,e.width),o=qd(n,e.y,e.height);return`${r} ${o}`}const E2={offset:"stroke-dashoffset",array:"stroke-dasharray"},b2={offset:"strokeDashoffset",array:"strokeDasharray"};function A2(e,t,n=1,r=0,o=!0){e.pathLength=1;const s=o?E2:b2;e[s.offset]=V.transform(-r);const a=V.transform(t),l=V.transform(n);e[s.array]=`${a} ${l}`}function cc(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:s,pathLength:a,pathSpacing:l=1,pathOffset:u=0,...c},d,f,p){if(lc(e,c,d,p),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:v,dimensions:x}=e;g.transform&&(x&&(v.transform=g.transform),delete g.transform),x&&(o!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=T2(x,o!==void 0?o:.5,s!==void 0?s:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),a!==void 0&&A2(g,a,l,u,!1)}const o0=()=>({...uc(),attrs:{}}),dc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function R2(e,t,n,r){const o=E.useMemo(()=>{const s=o0();return cc(s,t,{enableHardwareAcceleration:!1},dc(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};r0(s,e.style,e),o.style={...s,...o.style}}return o}function _2(e=!1){return(n,r,o,{latestValues:s},a)=>{const u=(ac(n)?R2:S2)(r,s,a,n),d={...P2(r,typeof n=="string",e),...u,ref:o},{children:f}=r,p=E.useMemo(()=>He(f)?f.get():f,[f]);return E.createElement(n,{...d,children:p})}}function s0(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const a0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function l0(e,t,n,r){s0(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(a0.has(o)?o:rc(o),t.attrs[o])}function fc(e,t){const{style:n}=e,r={};for(const o in n)(He(n[o])||t.style&&He(t.style[o])||Zm(o,e))&&(r[o]=n[o]);return r}function u0(e,t){const n=fc(e,t);for(const r in e)if(He(e[r])||He(t[r])){const o=Ui.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function pc(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function c0(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const ms=e=>Array.isArray(e),M2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),D2=e=>ms(e)?e[e.length-1]||0:e;function $o(e){const t=He(e)?e.get():e;return M2(t)?t.toValue():t}function N2({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,s){const a={latestValues:L2(r,o,s,e),renderState:t()};return n&&(a.mount=l=>n(r,l,a)),a}const d0=e=>(t,n)=>{const r=E.useContext(Us),o=E.useContext(Hs),s=()=>N2(e,t,r,o);return n?s():c0(s)};function L2(e,t,n,r){const o={},s=r(e,{});for(const p in s)o[p]=$o(s[p]);let{initial:a,animate:l}=e;const u=Ks(e),c=Xm(e);t&&c&&!u&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?l:a;return f&&typeof f!="boolean"&&!Gs(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const v=pc(e,g);if(!v)return;const{transitionEnd:x,transition:k,...y}=v;for(const h in y){let m=y[h];if(Array.isArray(m)){const w=d?m.length-1:0;m=m[w]}m!==null&&(o[h]=m)}for(const h in x)o[h]=x[h]}),o}const de=e=>e;class Zd{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function z2(e){let t=new Zd,n=new Zd,r=0,o=!1,s=!1;const a=new WeakSet,l={schedule:(u,c=!1,d=!1)=>{const f=d&&o,p=f?t:n;return c&&a.add(u),p.add(u)&&f&&o&&(r=t.order.length),u},cancel:u=>{n.remove(u),a.delete(u)},process:u=>{if(o){s=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let c=0;c<r;c++){const d=t.order[c];d(u),a.has(d)&&(l.schedule(d),e())}o=!1,s&&(s=!1,l.process(u))}};return l}const mo=["prepare","read","update","preRender","render","postRender"],$2=40;function j2(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},s=mo.reduce((f,p)=>(f[p]=z2(()=>n=!0),f),{}),a=f=>s[f].process(o),l=()=>{const f=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(f-o.timestamp,$2),1),o.timestamp=f,o.isProcessing=!0,mo.forEach(a),o.isProcessing=!1,n&&t&&(r=!1,e(l))},u=()=>{n=!0,r=!0,o.isProcessing||e(l)};return{schedule:mo.reduce((f,p)=>{const g=s[p];return f[p]=(v,x=!1,k=!1)=>(n||u(),g.schedule(v,x,k)),f},{}),cancel:f=>mo.forEach(p=>s[p].cancel(f)),state:o,steps:s}}const{schedule:X,cancel:Ot,state:_e,steps:Aa}=j2(typeof requestAnimationFrame<"u"?requestAnimationFrame:de,!0),V2={useVisualState:d0({scrapeMotionValuesFromProps:u0,createRenderState:o0,onMount:(e,t,{renderState:n,latestValues:r})=>{X.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),X.render(()=>{cc(n,r,{enableHardwareAcceleration:!1},dc(t.tagName),e.transformTemplate),l0(t,n)})}})},I2={useVisualState:d0({scrapeMotionValuesFromProps:fc,createRenderState:uc})};function O2(e,{forwardMotionProps:t=!1},n,r){return{...ac(e)?V2:I2,preloadedFeatures:n,useRender:_2(t),createVisualElement:r,Component:e}}function Dt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const f0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Qs(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const F2=e=>t=>f0(t)&&e(t,Qs(t));function Lt(e,t,n,r){return Dt(e,t,F2(n),r)}const B2=(e,t)=>n=>t(e(n)),dn=(...e)=>e.reduce(B2);function p0(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Jd=p0("dragHorizontal"),ef=p0("dragVertical");function h0(e){let t=!1;if(e==="y")t=ef();else if(e==="x")t=Jd();else{const n=Jd(),r=ef();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function m0(){const e=h0(!0);return e?(e(),!1):!0}class Sn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function tf(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(s,a)=>{if(s.pointerType==="touch"||m0())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t),l[r]&&X.update(()=>l[r](s,a))};return Lt(e.current,n,o,{passive:!e.getProps()[r]})}class U2 extends Sn{mount(){this.unmount=dn(tf(this.node,!0),tf(this.node,!1))}unmount(){}}class H2 extends Sn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=dn(Dt(this.node.current,"focus",()=>this.onFocus()),Dt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const g0=(e,t)=>t?e===t?!0:g0(e,t.parentElement):!1;function Ra(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Qs(n))}class W2 extends Sn{constructor(){super(...arguments),this.removeStartListeners=de,this.removeEndListeners=de,this.removeAccessibleListeners=de,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=Lt(window,"pointerup",(l,u)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:d,globalTapTarget:f}=this.node.getProps();X.update(()=>{!f&&!g0(this.node.current,l.target)?d&&d(l,u):c&&c(l,u)})},{passive:!(r.onTap||r.onPointerUp)}),a=Lt(window,"pointercancel",(l,u)=>this.cancelPress(l,u),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=dn(s,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const a=l=>{l.key!=="Enter"||!this.checkPressEnd()||Ra("up",(u,c)=>{const{onTap:d}=this.node.getProps();d&&X.update(()=>d(u,c))})};this.removeEndListeners(),this.removeEndListeners=Dt(this.node.current,"keyup",a),Ra("down",(l,u)=>{this.startPress(l,u)})},n=Dt(this.node.current,"keydown",t),r=()=>{this.isPressing&&Ra("cancel",(s,a)=>this.cancelPress(s,a))},o=Dt(this.node.current,"blur",r);this.removeAccessibleListeners=dn(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&X.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!m0()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&X.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Lt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Dt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=dn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Ul=new WeakMap,_a=new WeakMap,G2=e=>{const t=Ul.get(e.target);t&&t(e)},K2=e=>{e.forEach(G2)};function Y2({root:e,...t}){const n=e||document;_a.has(n)||_a.set(n,{});const r=_a.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(K2,{root:e,...t})),r[o]}function Q2(e,t,n){const r=Y2(t);return Ul.set(e,n),r.observe(e),()=>{Ul.delete(e),r.unobserve(e)}}const X2={some:0,all:1};class q2 extends Sn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:X2[o]},l=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=c?d:f;p&&p(u)};return Q2(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Z2(t,n))&&this.startObserver()}unmount(){}}function Z2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const J2={inView:{Feature:q2},tap:{Feature:W2},focus:{Feature:H2},hover:{Feature:U2}};function y0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ex(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function tx(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Xs(e,t,n){const r=e.getProps();return pc(r,t,n!==void 0?n:r.custom,ex(e),tx(e))}let nx=de,hc=de;const fn=e=>e*1e3,zt=e=>e/1e3,rx={current:!1},v0=e=>Array.isArray(e)&&typeof e[0]=="number";function x0(e){return!!(!e||typeof e=="string"&&w0[e]||v0(e)||Array.isArray(e)&&e.every(x0))}const Jr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,w0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jr([0,.65,.55,1]),circOut:Jr([.55,0,1,.45]),backIn:Jr([.31,.01,.66,-.59]),backOut:Jr([.33,1.53,.69,.99])};function S0(e){if(e)return v0(e)?Jr(e):Array.isArray(e)?e.map(S0):w0[e]}function ix(e,t,n,{delay:r=0,duration:o,repeat:s=0,repeatType:a="loop",ease:l,times:u}={}){const c={[t]:n};u&&(c.offset=u);const d=S0(l);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}function ox(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const k0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,sx=1e-7,ax=12;function lx(e,t,n,r,o){let s,a,l=0;do a=t+(n-t)/2,s=k0(a,r,o)-e,s>0?n=a:t=a;while(Math.abs(s)>sx&&++l<ax);return a}function Gi(e,t,n,r){if(e===t&&n===r)return de;const o=s=>lx(s,0,1,e,n);return s=>s===0||s===1?s:k0(o(s),t,r)}const ux=Gi(.42,0,1,1),cx=Gi(0,0,.58,1),C0=Gi(.42,0,.58,1),dx=e=>Array.isArray(e)&&typeof e[0]!="number",P0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,T0=e=>t=>1-e(1-t),mc=e=>1-Math.sin(Math.acos(e)),E0=T0(mc),fx=P0(mc),b0=Gi(.33,1.53,.69,.99),gc=T0(b0),px=P0(gc),hx=e=>(e*=2)<1?.5*gc(e):.5*(2-Math.pow(2,-10*(e-1))),mx={linear:de,easeIn:ux,easeInOut:C0,easeOut:cx,circIn:mc,circInOut:fx,circOut:E0,backIn:gc,backInOut:px,backOut:b0,anticipate:hx},nf=e=>{if(Array.isArray(e)){hc(e.length===4);const[t,n,r,o]=e;return Gi(t,n,r,o)}else if(typeof e=="string")return mx[e];return e},yc=(e,t)=>n=>!!(Hi(n)&&g2.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),A0=(e,t,n)=>r=>{if(!Hi(r))return r;const[o,s,a,l]=r.match(Ys);return{[e]:parseFloat(o),[t]:parseFloat(s),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},gx=e=>gn(0,255,e),Ma={...Kn,transform:e=>Math.round(gx(e))},Nn={test:yc("rgb","red"),parse:A0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ma.transform(e)+", "+Ma.transform(t)+", "+Ma.transform(n)+", "+di(ci.transform(r))+")"};function yx(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Hl={test:yc("#"),parse:yx,transform:Nn.transform},dr={test:yc("hsl","hue"),parse:A0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Tt.transform(di(t))+", "+Tt.transform(di(n))+", "+di(ci.transform(r))+")"},Ne={test:e=>Nn.test(e)||Hl.test(e)||dr.test(e),parse:e=>Nn.test(e)?Nn.parse(e):dr.test(e)?dr.parse(e):Hl.parse(e),transform:e=>Hi(e)?e:e.hasOwnProperty("red")?Nn.transform(e):dr.transform(e)},ae=(e,t,n)=>-n*e+n*t+e;function Da(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function vx({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,s=0,a=0;if(!t)o=s=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,u=2*n-l;o=Da(u,l,e+1/3),s=Da(u,l,e),a=Da(u,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}const Na=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},xx=[Hl,Nn,dr],wx=e=>xx.find(t=>t.test(e));function rf(e){const t=wx(e);let n=t.parse(e);return t===dr&&(n=vx(n)),n}const R0=(e,t)=>{const n=rf(e),r=rf(t),o={...n};return s=>(o.red=Na(n.red,r.red,s),o.green=Na(n.green,r.green,s),o.blue=Na(n.blue,r.blue,s),o.alpha=ae(n.alpha,r.alpha,s),Nn.transform(o))};function Sx(e){var t,n;return isNaN(e)&&Hi(e)&&(((t=e.match(Ys))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(t0))===null||n===void 0?void 0:n.length)||0)>0}const _0={regex:h2,countKey:"Vars",token:"${v}",parse:de},M0={regex:t0,countKey:"Colors",token:"${c}",parse:Ne.parse},D0={regex:Ys,countKey:"Numbers",token:"${n}",parse:Kn.parse};function La(e,{regex:t,countKey:n,token:r,parse:o}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(o)))}function gs(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&La(n,_0),La(n,M0),La(n,D0),n}function N0(e){return gs(e).values}function L0(e){const{values:t,numColors:n,numVars:r,tokenised:o}=gs(e),s=t.length;return a=>{let l=o;for(let u=0;u<s;u++)u<r?l=l.replace(_0.token,a[u]):u<r+n?l=l.replace(M0.token,Ne.transform(a[u])):l=l.replace(D0.token,di(a[u]));return l}}const kx=e=>typeof e=="number"?0:e;function Cx(e){const t=N0(e);return L0(e)(t.map(kx))}const yn={test:Sx,parse:N0,createTransformer:L0,getAnimatableNone:Cx},z0=(e,t)=>n=>`${n>0?t:e}`;function $0(e,t){return typeof e=="number"?n=>ae(e,t,n):Ne.test(e)?R0(e,t):e.startsWith("var(")?z0(e,t):V0(e,t)}const j0=(e,t)=>{const n=[...e],r=n.length,o=e.map((s,a)=>$0(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=o[a](s);return n}},Px=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=$0(e[o],t[o]));return o=>{for(const s in r)n[s]=r[s](o);return n}},V0=(e,t)=>{const n=yn.createTransformer(t),r=gs(e),o=gs(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?dn(j0(r.values,o.values),n):z0(e,t)},zi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},of=(e,t)=>n=>ae(e,t,n);function Tx(e){return typeof e=="number"?of:typeof e=="string"?Ne.test(e)?R0:V0:Array.isArray(e)?j0:typeof e=="object"?Px:of}function Ex(e,t,n){const r=[],o=n||Tx(e[0]),s=e.length-1;for(let a=0;a<s;a++){let l=o(e[a],e[a+1]);if(t){const u=Array.isArray(t)?t[a]||de:t;l=dn(u,l)}r.push(l)}return r}function I0(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const s=e.length;if(hc(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Ex(t,r,o),l=a.length,u=c=>{let d=0;if(l>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const f=zi(e[d],e[d+1],c);return a[d](f)};return n?c=>u(gn(e[0],e[s-1],c)):u}function bx(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=zi(0,t,r);e.push(ae(n,1,o))}}function Ax(e){const t=[0];return bx(t,e.length-1),t}function Rx(e,t){return e.map(n=>n*t)}function _x(e,t){return e.map(()=>t||C0).splice(0,e.length-1)}function ys({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=dx(r)?r.map(nf):nf(r),s={done:!1,value:t[0]},a=Rx(n&&n.length===t.length?n:Ax(t),e),l=I0(a,t,{ease:Array.isArray(o)?o:_x(t,o)});return{calculatedDuration:e,next:u=>(s.value=l(u),s.done=u>=e,s)}}function O0(e,t){return t?e*(1e3/t):0}const Mx=5;function F0(e,t,n){const r=Math.max(t-Mx,0);return O0(n-e(r),t-r)}const za=.001,Dx=.01,sf=10,Nx=.05,Lx=1;function zx({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,s;nx(e<=fn(sf));let a=1-t;a=gn(Nx,Lx,a),e=gn(Dx,sf,zt(e)),a<1?(o=c=>{const d=c*a,f=d*e,p=d-n,g=Wl(c,a),v=Math.exp(-f);return za-p/g*v},s=c=>{const f=c*a*e,p=f*n+n,g=Math.pow(a,2)*Math.pow(c,2)*e,v=Math.exp(-f),x=Wl(Math.pow(c,2),a);return(-o(c)+za>0?-1:1)*((p-g)*v)/x}):(o=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-za+d*f},s=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const l=5/e,u=jx(o,s,l);if(e=fn(e),isNaN(u))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:a*2*Math.sqrt(r*c),duration:e}}}const $x=12;function jx(e,t,n){let r=n;for(let o=1;o<$x;o++)r=r-e(r)/t(r);return r}function Wl(e,t){return e*Math.sqrt(1-t*t)}const Vx=["duration","bounce"],Ix=["stiffness","damping","mass"];function af(e,t){return t.some(n=>e[n]!==void 0)}function Ox(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!af(e,Ix)&&af(e,Vx)){const n=zx(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function B0({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],s=e[e.length-1],a={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:p}=Ox({...r,velocity:-zt(r.velocity||0)}),g=f||0,v=u/(2*Math.sqrt(l*c)),x=s-o,k=zt(Math.sqrt(l/c)),y=Math.abs(x)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let h;if(v<1){const m=Wl(k,v);h=w=>{const S=Math.exp(-v*k*w);return s-S*((g+v*k*x)/m*Math.sin(m*w)+x*Math.cos(m*w))}}else if(v===1)h=m=>s-Math.exp(-k*m)*(x+(g+k*x)*m);else{const m=k*Math.sqrt(v*v-1);h=w=>{const S=Math.exp(-v*k*w),P=Math.min(m*w,300);return s-S*((g+v*k*x)*Math.sinh(P)+m*x*Math.cosh(P))/m}}return{calculatedDuration:p&&d||null,next:m=>{const w=h(m);if(p)a.done=m>=d;else{let S=g;m!==0&&(v<1?S=F0(h,m,w):S=0);const P=Math.abs(S)<=n,C=Math.abs(s-w)<=t;a.done=P&&C}return a.value=a.done?s:w,a}}}function lf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:s=500,modifyTarget:a,min:l,max:u,restDelta:c=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},g=b=>l!==void 0&&b<l||u!==void 0&&b>u,v=b=>l===void 0?u:u===void 0||Math.abs(l-b)<Math.abs(u-b)?l:u;let x=n*t;const k=f+x,y=a===void 0?k:a(k);y!==k&&(x=y-f);const h=b=>-x*Math.exp(-b/r),m=b=>y+h(b),w=b=>{const N=h(b),$=m(b);p.done=Math.abs(N)<=c,p.value=p.done?y:$};let S,P;const C=b=>{g(p.value)&&(S=b,P=B0({keyframes:[p.value,v(p.value)],velocity:F0(m,b,p.value),damping:o,stiffness:s,restDelta:c,restSpeed:d}))};return C(0),{calculatedDuration:null,next:b=>{let N=!1;return!P&&S===void 0&&(N=!0,w(b),C(b)),S!==void 0&&b>S?P.next(b-S):(!N&&w(b),p)}}}const Fx=e=>{const t=({timestamp:n})=>e(n);return{start:()=>X.update(t,!0),stop:()=>Ot(t),now:()=>_e.isProcessing?_e.timestamp:performance.now()}},uf=2e4;function cf(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<uf;)t+=n,r=e.next(t);return t>=uf?1/0:t}const Bx={decay:lf,inertia:lf,tween:ys,keyframes:ys,spring:B0};function vs({autoplay:e=!0,delay:t=0,driver:n=Fx,keyframes:r,type:o="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:l="loop",onPlay:u,onStop:c,onComplete:d,onUpdate:f,...p}){let g=1,v=!1,x,k;const y=()=>{k=new Promise(D=>{x=D})};y();let h;const m=Bx[o]||ys;let w;m!==ys&&typeof r[0]!="number"&&(w=I0([0,100],r,{clamp:!1}),r=[0,100]);const S=m({...p,keyframes:r});let P;l==="mirror"&&(P=m({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let C="idle",b=null,N=null,$=null;S.calculatedDuration===null&&s&&(S.calculatedDuration=cf(S));const{calculatedDuration:W}=S;let q=1/0,ie=1/0;W!==null&&(q=W+a,ie=q*(s+1)-a);let oe=0;const Ge=D=>{if(N===null)return;g>0&&(N=Math.min(N,D)),g<0&&(N=Math.min(D-ie/g,N)),b!==null?oe=b:oe=Math.round(D-N)*g;const j=oe-t*(g>=0?1:-1),K=g>=0?j<0:j>ie;oe=Math.max(j,0),C==="finished"&&b===null&&(oe=ie);let te=oe,be=S;if(s){const ct=Math.min(oe,ie)/q;let Ut=Math.floor(ct),et=ct%1;!et&&ct>=1&&(et=1),et===1&&Ut--,Ut=Math.min(Ut,s+1),!!(Ut%2)&&(l==="reverse"?(et=1-et,a&&(et-=a/q)):l==="mirror"&&(be=P)),te=gn(0,1,et)*q}const ne=K?{done:!1,value:r[0]}:be.next(te);w&&(ne.value=w(ne.value));let{done:Ve}=ne;!K&&W!==null&&(Ve=g>=0?oe>=ie:oe<=0);const kn=b===null&&(C==="finished"||C==="running"&&Ve);return f&&f(ne.value),kn&&M(),ne},G=()=>{h&&h.stop(),h=void 0},ye=()=>{C="idle",G(),x(),y(),N=$=null},M=()=>{C="finished",d&&d(),G(),x()},A=()=>{if(v)return;h||(h=n(Ge));const D=h.now();u&&u(),b!==null?N=D-b:(!N||C==="finished")&&(N=D),C==="finished"&&y(),$=N,b=null,C="running",h.start()};e&&A();const _={then(D,j){return k.then(D,j)},get time(){return zt(oe)},set time(D){D=fn(D),oe=D,b!==null||!h||g===0?b=D:N=h.now()-D/g},get duration(){const D=S.calculatedDuration===null?cf(S):S.calculatedDuration;return zt(D)},get speed(){return g},set speed(D){D===g||!h||(g=D,_.time=zt(oe))},get state(){return C},play:A,pause:()=>{C="paused",b=oe},stop:()=>{v=!0,C!=="idle"&&(C="idle",c&&c(),ye())},cancel:()=>{$!==null&&Ge($),ye()},complete:()=>{C="finished"},sample:D=>(N=0,Ge(D))};return _}function Ux(e){let t;return()=>(t===void 0&&(t=e()),t)}const Hx=Ux(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Wx=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),go=10,Gx=2e4,Kx=(e,t)=>t.type==="spring"||e==="backgroundColor"||!x0(t.ease);function Yx(e,t,{onUpdate:n,onComplete:r,...o}){if(!(Hx()&&Wx.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let a=!1,l,u,c=!1;const d=()=>{u=new Promise(m=>{l=m})};d();let{keyframes:f,duration:p=300,ease:g,times:v}=o;if(Kx(t,o)){const m=vs({...o,repeat:0,delay:0});let w={done:!1,value:f[0]};const S=[];let P=0;for(;!w.done&&P<Gx;)w=m.sample(P),S.push(w.value),P+=go;v=void 0,f=S,p=P-go,g="linear"}const x=ix(e.owner.current,t,f,{...o,duration:p,ease:g,times:v}),k=()=>{c=!1,x.cancel()},y=()=>{c=!0,X.update(k),l(),d()};return x.onfinish=()=>{c||(e.set(ox(f,o)),r&&r(),y())},{then(m,w){return u.then(m,w)},attachTimeline(m){return x.timeline=m,x.onfinish=null,de},get time(){return zt(x.currentTime||0)},set time(m){x.currentTime=fn(m)},get speed(){return x.playbackRate},set speed(m){x.playbackRate=m},get duration(){return zt(p)},play:()=>{a||(x.play(),Ot(k))},pause:()=>x.pause(),stop:()=>{if(a=!0,x.playState==="idle")return;const{currentTime:m}=x;if(m){const w=vs({...o,autoplay:!1});e.setWithVelocity(w.sample(m-go).value,w.sample(m).value,go)}y()},complete:()=>{c||x.finish()},cancel:y}}function Qx({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:de,pause:de,stop:de,then:s=>(s(),Promise.resolve()),cancel:de,complete:de});return t?vs({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const Xx={type:"spring",stiffness:500,damping:25,restSpeed:10},qx=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Zx={type:"keyframes",duration:.8},Jx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ew=(e,{keyframes:t})=>t.length>2?Zx:Gn.has(e)?e.startsWith("scale")?qx(t[1]):Xx:Jx,Gl=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(yn.test(t)||t==="0")&&!t.startsWith("url(")),tw=new Set(["brightness","contrast","saturate","opacity"]);function nw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ys)||[];if(!r)return e;const o=n.replace(r,"");let s=tw.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+o+")"}const rw=/([a-z-]*)\(.*?\)/g,Kl={...yn,getAnimatableNone:e=>{const t=e.match(rw);return t?t.map(nw).join(" "):e}},iw={...n0,color:Ne,backgroundColor:Ne,outlineColor:Ne,fill:Ne,stroke:Ne,borderColor:Ne,borderTopColor:Ne,borderRightColor:Ne,borderBottomColor:Ne,borderLeftColor:Ne,filter:Kl,WebkitFilter:Kl},vc=e=>iw[e];function U0(e,t){let n=vc(e);return n!==Kl&&(n=yn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const H0=e=>/^0[^.\s]+$/.test(e);function ow(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||H0(e)}function sw(e,t,n,r){const o=Gl(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const a=r.from!==void 0?r.from:e.get();let l;const u=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?a:s[c-1]),ow(s[c])&&u.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(l=s[c]);if(o&&u.length&&l)for(let c=0;c<u.length;c++){const d=u[c];s[d]=U0(t,l)}return s}function aw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:s,repeatType:a,repeatDelay:l,from:u,elapsed:c,...d}){return!!Object.keys(d).length}function xc(e,t){return e[t]||e.default||e}const lw={skipAnimations:!1},wc=(e,t,n,r={})=>o=>{const s=xc(r,e)||{},a=s.delay||r.delay||0;let{elapsed:l=0}=r;l=l-fn(a);const u=sw(t,e,n,s),c=u[0],d=u[u.length-1],f=Gl(e,c),p=Gl(e,d);let g={keyframes:u,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-l,onUpdate:v=>{t.set(v),s.onUpdate&&s.onUpdate(v)},onComplete:()=>{o(),s.onComplete&&s.onComplete()}};if(aw(s)||(g={...g,...ew(e,g)}),g.duration&&(g.duration=fn(g.duration)),g.repeatDelay&&(g.repeatDelay=fn(g.repeatDelay)),!f||!p||rx.current||s.type===!1||lw.skipAnimations)return Qx(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=Yx(t,e,g);if(v)return v}return vs(g)};function xs(e){return!!(He(e)&&e.add)}const W0=e=>/^\-?\d*\.?\d+$/.test(e);function Sc(e,t){e.indexOf(t)===-1&&e.push(t)}function kc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Cc{constructor(){this.subscriptions=[]}add(t){return Sc(this.subscriptions,t),()=>kc(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let s=0;s<o;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const uw=e=>!isNaN(parseFloat(e));class cw{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:a}=_e;this.lastUpdated!==a&&(this.timeDelta=s,this.lastUpdated=a,X.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>X.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=uw(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Cc);const r=this.events[t].add(n);return t==="change"?()=>{r(),X.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?O0(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Dr(e,t){return new cw(e,t)}const G0=e=>t=>t.test(e),dw={test:e=>e==="auto",parse:e=>e},K0=[Kn,V,Tt,Gt,v2,y2,dw],Gr=e=>K0.find(G0(e)),fw=[...K0,Ne,yn],pw=e=>fw.find(G0(e));function hw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Dr(n))}function mw(e,t){const n=Xs(e,t);let{transitionEnd:r={},transition:o={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const a in s){const l=D2(s[a]);hw(e,a,l)}}function gw(e,t,n){var r,o;const s=Object.keys(t).filter(l=>!e.hasValue(l)),a=s.length;if(a)for(let l=0;l<a;l++){const u=s[l],c=t[u];let d=null;Array.isArray(c)&&(d=c[0]),d===null&&(d=(o=(r=n[u])!==null&&r!==void 0?r:e.readValue(u))!==null&&o!==void 0?o:t[u]),d!=null&&(typeof d=="string"&&(W0(d)||H0(d))?d=parseFloat(d):!pw(d)&&yn.test(c)&&(d=U0(u,c)),e.addValue(u,Dr(d,{owner:e})),n[u]===void 0&&(n[u]=d),d!==null&&e.setBaseTarget(u,d))}}function yw(e,t){return t?(t[e]||t.default||t).from:void 0}function vw(e,t,n){const r={};for(const o in e){const s=yw(o,t);if(s!==void 0)r[o]=s;else{const a=n.getValue(o);a&&(r[o]=a.get())}}return r}function xw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ww(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Y0(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(s=r);const c=[],d=o&&e.animationState&&e.animationState.getState()[o];for(const f in l){const p=e.getValue(f),g=l[f];if(!p||g===void 0||d&&xw(d,f))continue;const v={delay:n,elapsed:0,...xc(s||{},f)};if(window.HandoffAppearAnimations){const y=e.getProps()[Qm];if(y){const h=window.HandoffAppearAnimations(y,f,p,X);h!==null&&(v.elapsed=h,v.isHandoff=!0)}}let x=!v.isHandoff&&!ww(p,g);if(v.type==="spring"&&(p.getVelocity()||v.velocity)&&(x=!1),p.animation&&(x=!1),x)continue;p.start(wc(f,p,g,e.shouldReduceMotion&&Gn.has(f)?{type:!1}:v));const k=p.animation;xs(u)&&(u.add(f),k.then(()=>u.remove(f))),c.push(k)}return a&&Promise.all(c).then(()=>{a&&mw(e,a)}),c}function Yl(e,t,n={}){const r=Xs(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const s=r?()=>Promise.all(Y0(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=o;return Sw(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(n.delay)])}function Sw(e,t,n=0,r=0,o=1,s){const a=[],l=(e.variantChildren.size-1)*r,u=o===1?(c=0)=>c*r:(c=0)=>l-c*r;return Array.from(e.variantChildren).sort(kw).forEach((c,d)=>{c.notify("AnimationStart",t),a.push(Yl(c,t,{...s,delay:n+u(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(a)}function kw(e,t){return e.sortNodePosition(t)}function Cw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(s=>Yl(e,s,n));r=Promise.all(o)}else if(typeof t=="string")r=Yl(e,t,n);else{const o=typeof t=="function"?Xs(e,t,n.custom):t;r=Promise.all(Y0(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Pw=[...ic].reverse(),Tw=ic.length;function Ew(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Cw(e,n,r)))}function bw(e){let t=Ew(e);const n=Rw();let r=!0;const o=(u,c)=>{const d=Xs(e,c);if(d){const{transition:f,transitionEnd:p,...g}=d;u={...u,...g,...p}}return u};function s(u){t=u(e)}function a(u,c){const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],g=new Set;let v={},x=1/0;for(let y=0;y<Tw;y++){const h=Pw[y],m=n[h],w=d[h]!==void 0?d[h]:f[h],S=Ni(w),P=h===c?m.isActive:null;P===!1&&(x=y);let C=w===f[h]&&w!==d[h]&&S;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),m.protectedKeys={...v},!m.isActive&&P===null||!w&&!m.prevProp||Gs(w)||typeof w=="boolean")continue;let N=Aw(m.prevProp,w)||h===c&&m.isActive&&!C&&S||y>x&&S,$=!1;const W=Array.isArray(w)?w:[w];let q=W.reduce(o,{});P===!1&&(q={});const{prevResolvedValues:ie={}}=m,oe={...ie,...q},Ge=G=>{N=!0,g.has(G)&&($=!0,g.delete(G)),m.needsAnimating[G]=!0};for(const G in oe){const ye=q[G],M=ie[G];if(v.hasOwnProperty(G))continue;let A=!1;ms(ye)&&ms(M)?A=!y0(ye,M):A=ye!==M,A?ye!==void 0?Ge(G):g.add(G):ye!==void 0&&g.has(G)?Ge(G):m.protectedKeys[G]=!0}m.prevProp=w,m.prevResolvedValues=q,m.isActive&&(v={...v,...q}),r&&e.blockInitialAnimation&&(N=!1),N&&(!C||$)&&p.push(...W.map(G=>({animation:G,options:{type:h,...u}})))}if(g.size){const y={};g.forEach(h=>{const m=e.getBaseTarget(h);m!==void 0&&(y[h]=m)}),p.push({animation:y})}let k=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(p):Promise.resolve()}function l(u,c,d){var f;if(n[u].isActive===c)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(u,c)}),n[u].isActive=c;const p=a(d,u);for(const g in n)n[g].protectedKeys={};return p}return{animateChanges:a,setActive:l,setAnimateFunction:s,getState:()=>n}}function Aw(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!y0(t,e):!1}function Cn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Rw(){return{animate:Cn(!0),whileInView:Cn(),whileHover:Cn(),whileTap:Cn(),whileDrag:Cn(),whileFocus:Cn(),exit:Cn()}}class _w extends Sn{constructor(t){super(t),t.animationState||(t.animationState=bw(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Gs(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Mw=0;class Dw extends Sn{constructor(){super(...arguments),this.id=Mw++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const s=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Nw={animation:{Feature:_w},exit:{Feature:Dw}},df=(e,t)=>Math.abs(e-t);function Lw(e,t){const n=df(e.x,t.x),r=df(e.y,t.y);return Math.sqrt(n**2+r**2)}class Q0{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=ja(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=Lw(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:v}=f,{timestamp:x}=_e;this.history.push({...v,timestamp:x});const{onStart:k,onMove:y}=this.handlers;p||(k&&k(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=$a(p,this.transformPagePoint),X.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=ja(f.type==="pointercancel"?this.lastMoveEventInfo:$a(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,k),v&&v(f,k)},!f0(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const a=Qs(t),l=$a(a,this.transformPagePoint),{point:u}=l,{timestamp:c}=_e;this.history=[{...u,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,ja(l,this.history)),this.removeListeners=dn(Lt(this.contextWindow,"pointermove",this.handlePointerMove),Lt(this.contextWindow,"pointerup",this.handlePointerUp),Lt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ot(this.updatePoint)}}function $a(e,t){return t?{point:t(e.point)}:e}function ff(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ja({point:e},t){return{point:e,delta:ff(e,X0(t)),offset:ff(e,zw(t)),velocity:$w(t,.1)}}function zw(e){return e[0]}function X0(e){return e[e.length-1]}function $w(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=X0(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>fn(t)));)n--;if(!r)return{x:0,y:0};const s=zt(o.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(o.x-r.x)/s,y:(o.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function qe(e){return e.max-e.min}function Ql(e,t=0,n=.01){return Math.abs(e-t)<=n}function pf(e,t,n,r=.5){e.origin=r,e.originPoint=ae(t.min,t.max,e.origin),e.scale=qe(n)/qe(t),(Ql(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ae(n.min,n.max,e.origin)-e.originPoint,(Ql(e.translate)||isNaN(e.translate))&&(e.translate=0)}function fi(e,t,n,r){pf(e.x,t.x,n.x,r?r.originX:void 0),pf(e.y,t.y,n.y,r?r.originY:void 0)}function hf(e,t,n){e.min=n.min+t.min,e.max=e.min+qe(t)}function jw(e,t,n){hf(e.x,t.x,n.x),hf(e.y,t.y,n.y)}function mf(e,t,n){e.min=t.min-n.min,e.max=e.min+qe(t)}function pi(e,t,n){mf(e.x,t.x,n.x),mf(e.y,t.y,n.y)}function Vw(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ae(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ae(n,e,r.max):Math.min(e,n)),e}function gf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Iw(e,{top:t,left:n,bottom:r,right:o}){return{x:gf(e.x,n,o),y:gf(e.y,t,r)}}function yf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Ow(e,t){return{x:yf(e.x,t.x),y:yf(e.y,t.y)}}function Fw(e,t){let n=.5;const r=qe(e),o=qe(t);return o>r?n=zi(t.min,t.max-r,e.min):r>o&&(n=zi(e.min,e.max-o,t.min)),gn(0,1,n)}function Bw(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Xl=.35;function Uw(e=Xl){return e===!1?e=0:e===!0&&(e=Xl),{x:vf(e,"left","right"),y:vf(e,"top","bottom")}}function vf(e,t,n){return{min:xf(e,t),max:xf(e,n)}}function xf(e,t){return typeof e=="number"?e:e[t]||0}const wf=()=>({translate:0,scale:1,origin:0,originPoint:0}),fr=()=>({x:wf(),y:wf()}),Sf=()=>({min:0,max:0}),he=()=>({x:Sf(),y:Sf()});function nt(e){return[e("x"),e("y")]}function q0({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Hw({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Ww(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Va(e){return e===void 0||e===1}function ql({scale:e,scaleX:t,scaleY:n}){return!Va(e)||!Va(t)||!Va(n)}function En(e){return ql(e)||Z0(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Z0(e){return kf(e.x)||kf(e.y)}function kf(e){return e&&e!=="0%"}function ws(e,t,n){const r=e-n,o=t*r;return n+o}function Cf(e,t,n,r,o){return o!==void 0&&(e=ws(e,o,r)),ws(e,n,r)+t}function Zl(e,t=0,n=1,r,o){e.min=Cf(e.min,t,n,r,o),e.max=Cf(e.max,t,n,r,o)}function J0(e,{x:t,y:n}){Zl(e.x,t.translate,t.scale,t.originPoint),Zl(e.y,n.translate,n.scale,n.originPoint)}function Gw(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let s,a;for(let l=0;l<o;l++){s=n[l],a=s.projectionDelta;const u=s.instance;u&&u.style&&u.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&pr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,J0(e,a)),r&&En(s.latestValues)&&pr(e,s.latestValues))}t.x=Pf(t.x),t.y=Pf(t.y)}function Pf(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Qt(e,t){e.min=e.min+t,e.max=e.max+t}function Tf(e,t,[n,r,o]){const s=t[o]!==void 0?t[o]:.5,a=ae(e.min,e.max,s);Zl(e,t[n],t[r],a,t.scale)}const Kw=["x","scaleX","originX"],Yw=["y","scaleY","originY"];function pr(e,t){Tf(e.x,t,Kw),Tf(e.y,t,Yw)}function eg(e,t){return q0(Ww(e.getBoundingClientRect(),t))}function Qw(e,t,n){const r=eg(e,n),{scroll:o}=t;return o&&(Qt(r.x,o.offset.x),Qt(r.y,o.offset.y)),r}const tg=({current:e})=>e?e.ownerDocument.defaultView:null,Xw=new WeakMap;class qw{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=he(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Qs(d,"page").point)},s=(d,f)=>{const{drag:p,dragPropagation:g,onDragStart:v}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=h0(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nt(k=>{let y=this.getAxisMotionValue(k).get()||0;if(Tt.test(y)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[k];m&&(y=qe(m)*(parseFloat(y)/100))}}this.originPoint[k]=y}),v&&X.update(()=>v(d,f),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:v,onDrag:x}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:k}=f;if(g&&this.currentDirection===null){this.currentDirection=Zw(k),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,k),this.updateAxis("y",f.point,k),this.visualElement.render(),x&&x(d,f)},l=(d,f)=>this.stop(d,f),u=()=>nt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Q0(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:tg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:s}=this.getProps();s&&X.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!yo(t,o,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=Vw(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&cr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=Iw(o.layoutBox,n):this.constraints=!1,this.elastic=Uw(r),s!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&nt(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=Bw(o.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!cr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const s=Qw(r,o.root,this.visualElement.getTransformPagePoint());let a=Ow(o.layout.layoutBox,s);if(n){const l=n(Hw(a));this.hasMutatedConstraints=!!l,l&&(a=q0(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),u=this.constraints||{},c=nt(d=>{if(!yo(d,n,this.currentDirection))return;let f=u&&u[d]||{};a&&(f={min:0,max:0});const p=o?200:1e6,g=o?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,v)});return Promise.all(c).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(wc(t,r,0,n))}stopAnimation(){nt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){nt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){nt(n=>{const{drag:r}=this.getProps();if(!yo(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,s=this.getAxisMotionValue(n);if(o&&o.layout){const{min:a,max:l}=o.layout.layoutBox[n];s.set(t[n]-ae(a,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!cr(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};nt(a=>{const l=this.getAxisMotionValue(a);if(l){const u=l.get();o[a]=Fw({min:u,max:u},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),nt(a=>{if(!yo(a,t,null))return;const l=this.getAxisMotionValue(a),{min:u,max:c}=this.constraints[a];l.set(ae(u,c,o[a]))})}addListeners(){if(!this.visualElement.current)return;Xw.set(this.visualElement,this);const t=this.visualElement.current,n=Lt(t,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();cr(u)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,s=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const a=Dt(window,"resize",()=>this.scalePositionWithinConstraints()),l=o.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(nt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:s=!1,dragElastic:a=Xl,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:s,dragElastic:a,dragMomentum:l}}}function yo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Zw(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Jw extends Sn{constructor(t){super(t),this.removeGroupControls=de,this.removeListeners=de,this.controls=new qw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||de}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ef=e=>(t,n)=>{e&&X.update(()=>e(t,n))};class e5 extends Sn{constructor(){super(...arguments),this.removePointerDownListener=de}onPointerDown(t){this.session=new Q0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:tg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Ef(t),onStart:Ef(n),onMove:r,onEnd:(s,a)=>{delete this.session,o&&X.update(()=>o(s,a))}}}mount(){this.removePointerDownListener=Lt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function t5(){const e=E.useContext(Hs);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=E.useId();return E.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const jo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function bf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Kr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(V.test(e))e=parseFloat(e);else return e;const n=bf(e,t.target.x),r=bf(e,t.target.y);return`${n}% ${r}%`}},n5={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=yn.parse(e);if(o.length>5)return r;const s=yn.createTransformer(e),a=typeof o[0]!="number"?1:0,l=n.x.scale*t.x,u=n.y.scale*t.y;o[0+a]/=l,o[1+a]/=u;const c=ae(l,u,.5);return typeof o[2+a]=="number"&&(o[2+a]/=c),typeof o[3+a]=="number"&&(o[3+a]/=c),s(o)}};class r5 extends fe.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:s}=t;c2(i5),s&&(n.group&&n.group.add(s),r&&r.register&&o&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),jo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,o||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||X.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ng(e){const[t,n]=t5(),r=E.useContext(sc);return fe.createElement(r5,{...e,layoutGroup:r,switchLayoutGroup:E.useContext(qm),isPresent:t,safeToRemove:n})}const i5={borderRadius:{...Kr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Kr,borderTopRightRadius:Kr,borderBottomLeftRadius:Kr,borderBottomRightRadius:Kr,boxShadow:n5},rg=["TopLeft","TopRight","BottomLeft","BottomRight"],o5=rg.length,Af=e=>typeof e=="string"?parseFloat(e):e,Rf=e=>typeof e=="number"||V.test(e);function s5(e,t,n,r,o,s){o?(e.opacity=ae(0,n.opacity!==void 0?n.opacity:1,a5(r)),e.opacityExit=ae(t.opacity!==void 0?t.opacity:1,0,l5(r))):s&&(e.opacity=ae(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<o5;a++){const l=`border${rg[a]}Radius`;let u=_f(t,l),c=_f(n,l);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||Rf(u)===Rf(c)?(e[l]=Math.max(ae(Af(u),Af(c),r),0),(Tt.test(c)||Tt.test(u))&&(e[l]+="%")):e[l]=c}(t.rotate||n.rotate)&&(e.rotate=ae(t.rotate||0,n.rotate||0,r))}function _f(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const a5=ig(0,.5,E0),l5=ig(.5,.95,de);function ig(e,t,n){return r=>r<e?0:r>t?1:n(zi(e,t,r))}function Mf(e,t){e.min=t.min,e.max=t.max}function tt(e,t){Mf(e.x,t.x),Mf(e.y,t.y)}function Df(e,t,n,r,o){return e-=t,e=ws(e,1/n,r),o!==void 0&&(e=ws(e,1/o,r)),e}function u5(e,t=0,n=1,r=.5,o,s=e,a=e){if(Tt.test(t)&&(t=parseFloat(t),t=ae(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=ae(s.min,s.max,r);e===s&&(l-=t),e.min=Df(e.min,t,n,l,o),e.max=Df(e.max,t,n,l,o)}function Nf(e,t,[n,r,o],s,a){u5(e,t[n],t[r],t[o],t.scale,s,a)}const c5=["x","scaleX","originX"],d5=["y","scaleY","originY"];function Lf(e,t,n,r){Nf(e.x,t,c5,n?n.x:void 0,r?r.x:void 0),Nf(e.y,t,d5,n?n.y:void 0,r?r.y:void 0)}function zf(e){return e.translate===0&&e.scale===1}function og(e){return zf(e.x)&&zf(e.y)}function f5(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function sg(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function $f(e){return qe(e.x)/qe(e.y)}class p5{constructor(){this.members=[]}add(t){Sc(this.members,t),t.scheduleRender()}remove(t){if(kc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const s=this.members[o];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jf(e,t,n){let r="";const o=e.x.translate/t.x,s=e.y.translate/t.y;if((o||s)&&(r=`translate3d(${o}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:u,rotateX:c,rotateY:d}=n;u&&(r+=`rotate(${u}deg) `),c&&(r+=`rotateX(${c}deg) `),d&&(r+=`rotateY(${d}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const h5=(e,t)=>e.depth-t.depth;class m5{constructor(){this.children=[],this.isDirty=!1}add(t){Sc(this.children,t),this.isDirty=!0}remove(t){kc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(h5),this.isDirty=!1,this.children.forEach(t)}}function g5(e,t){const n=performance.now(),r=({timestamp:o})=>{const s=o-n;s>=t&&(Ot(r),e(s-t))};return X.read(r,!0),()=>Ot(r)}function y5(e){window.MotionDebug&&window.MotionDebug.record(e)}function v5(e){return e instanceof SVGElement&&e.tagName!=="svg"}function x5(e,t,n){const r=He(e)?e:Dr(e);return r.start(wc("",r,t,n)),r.animation}const Vf=["","X","Y","Z"],w5={visibility:"hidden"},If=1e3;let S5=0;const bn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function ag({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(a={},l=t==null?void 0:t()){this.id=S5++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,bn.totalNodes=bn.resolvedTargetDeltas=bn.recalculatedProjection=0,this.nodes.forEach(P5),this.nodes.forEach(R5),this.nodes.forEach(_5),this.nodes.forEach(T5),y5(bn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new m5)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Cc),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const u=this.eventHandlers.get(a);u&&u.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=v5(a),this.instance=a;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=g5(p,250),jo.hasAnimatedSinceResize&&(jo.hasAnimatedSinceResize=!1,this.nodes.forEach(Ff))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||z5,{onLayoutAnimationStart:k,onLayoutAnimationComplete:y}=d.getProps(),h=!this.targetLayout||!sg(this.targetLayout,v)||g,m=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const w={...xc(x,"layout"),onPlay:k,onComplete:y};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else p||Ff(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ot(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(M5),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:l,layout:u}=this.options;if(l===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Of);return}this.isUpdating||this.nodes.forEach(b5),this.isUpdating=!1,this.nodes.forEach(A5),this.nodes.forEach(k5),this.nodes.forEach(C5),this.clearAllSnapshots();const l=performance.now();_e.delta=gn(0,1e3/60,l-_e.timestamp),_e.timestamp=l,_e.isProcessing=!0,Aa.update.process(_e),Aa.preRender.process(_e),Aa.render.process(_e),_e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(E5),this.sharedNodes.forEach(D5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,X.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){X.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=he(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const a=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!og(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;a&&(l||En(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let u=this.removeElementScroll(l);return a&&(u=this.removeTransform(u)),$5(u),{animationId:this.root.animationId,measuredBox:l,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return he();const l=a.measureViewportBox(),{scroll:u}=this.root;return u&&(Qt(l.x,u.offset.x),Qt(l.y,u.offset.y)),l}removeElementScroll(a){const l=he();tt(l,a);for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;if(c!==this.root&&d&&f.layoutScroll){if(d.isRoot){tt(l,a);const{scroll:p}=this.root;p&&(Qt(l.x,-p.offset.x),Qt(l.y,-p.offset.y))}Qt(l.x,d.offset.x),Qt(l.y,d.offset.y)}}return l}applyTransform(a,l=!1){const u=he();tt(u,a);for(let c=0;c<this.path.length;c++){const d=this.path[c];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&pr(u,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),En(d.latestValues)&&pr(u,d.latestValues)}return En(this.latestValues)&&pr(u,this.latestValues),u}removeTransform(a){const l=he();tt(l,a);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!En(c.latestValues))continue;ql(c.latestValues)&&c.updateSnapshot();const d=he(),f=c.measurePageBox();tt(d,f),Lf(l,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return En(this.latestValues)&&Lf(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var l;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==u;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=_e.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=he(),this.relativeTargetOrigin=he(),pi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=he(),this.targetWithTransforms=he()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),jw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):tt(this.target,this.layout.layoutBox),J0(this.target,this.targetDelta)):tt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=he(),this.relativeTargetOrigin=he(),pi(this.relativeTargetOrigin,this.target,g.target),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}bn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ql(this.parent.latestValues)||Z0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const l=this.getLead(),u=!!this.resumingFrom||this!==l;let c=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(c=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===_e.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;tt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;Gw(this.layoutCorrected,this.treeScale,this.path,u),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:v}=l;if(!v){this.projectionTransform&&(this.projectionDelta=fr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=fr(),this.projectionDeltaWithTransform=fr());const x=this.projectionTransform;fi(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=jf(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),bn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,l=!1){const u=this.snapshot,c=u?u.latestValues:{},d={...this.latestValues},f=fr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=he(),g=u?u.source:void 0,v=this.layout?this.layout.source:void 0,x=g!==v,k=this.getStack(),y=!k||k.members.length<=1,h=!!(x&&!y&&this.options.crossfade===!0&&!this.path.some(L5));this.animationProgress=0;let m;this.mixTargetDelta=w=>{const S=w/1e3;Bf(f.x,a.x,S),Bf(f.y,a.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),N5(this.relativeTarget,this.relativeTargetOrigin,p,S),m&&f5(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=he()),tt(m,this.relativeTarget)),x&&(this.animationValues=d,s5(d,c,this.latestValues,S,h,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ot(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=X.update(()=>{jo.hasAnimatedSinceResize=!0,this.currentAnimation=x5(0,If,{...a,onUpdate:l=>{this.mixTargetDelta(l),a.onUpdate&&a.onUpdate(l)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(If),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:u,layout:c,latestValues:d}=a;if(!(!l||!u||!c)){if(this!==a&&this.layout&&c&&lg(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||he();const f=qe(this.layout.layoutBox.x);u.x.min=a.target.x.min,u.x.max=u.x.min+f;const p=qe(this.layout.layoutBox.y);u.y.min=a.target.y.min,u.y.max=u.y.min+p}tt(l,u),pr(l,d),fi(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new p5),this.sharedNodes.get(a).add(l);const c=l.options.initialPromotionConfig;l.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:l}=this.options;return l?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:l}=this.options;return l?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:u}=a;if((u.rotate||u.rotateX||u.rotateY||u.rotateZ)&&(l=!0),!l)return;const c={};for(let d=0;d<Vf.length;d++){const f="rotate"+Vf[d];u[f]&&(c[f]=u[f],a.setStaticValue(f,0))}a.render();for(const d in c)a.setStaticValue(d,c[d]);a.scheduleRender()}getProjectionStyles(a){var l,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return w5;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=$o(a==null?void 0:a.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=$o(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!En(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=jf(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:g,y:v}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in ps){if(p[x]===void 0)continue;const{correct:k,applyTo:y}=ps[x],h=c.transform==="none"?p[x]:k(p[x],f);if(y){const m=y.length;for(let w=0;w<m;w++)c[y[w]]=h}else c[x]=h}return this.options.layoutId&&(c.pointerEvents=f===this?$o(a==null?void 0:a.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Of),this.root.sharedNodes.clear()}}}function k5(e){e.updateLayout()}function C5(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?nt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],g=qe(p);p.min=r[f].min,p.max=p.min+g}):lg(s,n.layoutBox,r)&&nt(f=>{const p=a?n.measuredBox[f]:n.layoutBox[f],g=qe(r[f]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const l=fr();fi(l,r,n.layoutBox);const u=fr();a?fi(u,e.applyTransform(o,!0),n.measuredBox):fi(u,r,n.layoutBox);const c=!og(l);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const v=he();pi(v,n.layoutBox,p.layoutBox);const x=he();pi(x,r,g.layoutBox),sg(v,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:u,layoutDelta:l,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function P5(e){bn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function T5(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function E5(e){e.clearSnapshot()}function Of(e){e.clearMeasurements()}function b5(e){e.isLayoutDirty=!1}function A5(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ff(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function R5(e){e.resolveTargetDelta()}function _5(e){e.calcProjection()}function M5(e){e.resetRotation()}function D5(e){e.removeLeadSnapshot()}function Bf(e,t,n){e.translate=ae(t.translate,0,n),e.scale=ae(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Uf(e,t,n,r){e.min=ae(t.min,n.min,r),e.max=ae(t.max,n.max,r)}function N5(e,t,n,r){Uf(e.x,t.x,n.x,r),Uf(e.y,t.y,n.y,r)}function L5(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const z5={duration:.45,ease:[.4,0,.1,1]},Hf=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Wf=Hf("applewebkit/")&&!Hf("chrome/")?Math.round:de;function Gf(e){e.min=Wf(e.min),e.max=Wf(e.max)}function $5(e){Gf(e.x),Gf(e.y)}function lg(e,t,n){return e==="position"||e==="preserve-aspect"&&!Ql($f(t),$f(n),.2)}const j5=ag({attachResizeListener:(e,t)=>Dt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ia={current:void 0},ug=ag({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ia.current){const e=new j5({});e.mount(window),e.setOptions({layoutScroll:!0}),Ia.current=e}return Ia.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),V5={pan:{Feature:e5},drag:{Feature:Jw,ProjectionNode:ug,MeasureLayout:ng}},I5=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function O5(e){const t=I5.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Jl(e,t,n=1){const[r,o]=O5(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return W0(a)?parseFloat(a):a}else return Bl(o)?Jl(o,t,n+1):o}function F5(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const s=o.get();if(!Bl(s))return;const a=Jl(s,r);a&&o.set(a)});for(const o in t){const s=t[o];if(!Bl(s))continue;const a=Jl(s,r);a&&(t[o]=a,n||(n={}),n[o]===void 0&&(n[o]=s))}return{target:t,transitionEnd:n}}const B5=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),cg=e=>B5.has(e),U5=e=>Object.keys(e).some(cg),Kf=e=>e===Kn||e===V,Yf=(e,t)=>parseFloat(e.split(", ")[t]),Qf=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return Yf(o[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?Yf(s[1],e):0}},H5=new Set(["x","y","z"]),W5=Ui.filter(e=>!H5.has(e));function G5(e){const t=[];return W5.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Nr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Qf(4,13),y:Qf(5,14)};Nr.translateX=Nr.x;Nr.translateY=Nr.y;const K5=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,s=getComputedStyle(o),{display:a}=s,l={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(c=>{l[c]=Nr[c](r,s)}),t.render();const u=t.measureViewportBox();return n.forEach(c=>{const d=t.getValue(c);d&&d.jump(l[c]),e[c]=Nr[c](u,s)}),e},Y5=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(cg);let s=[],a=!1;const l=[];if(o.forEach(u=>{const c=e.getValue(u);if(!e.hasValue(u))return;let d=n[u],f=Gr(d);const p=t[u];let g;if(ms(p)){const v=p.length,x=p[0]===null?1:0;d=p[x],f=Gr(d);for(let k=x;k<v&&p[k]!==null;k++)g?hc(Gr(p[k])===g):g=Gr(p[k])}else g=Gr(p);if(f!==g)if(Kf(f)&&Kf(g)){const v=c.get();typeof v=="string"&&c.set(parseFloat(v)),typeof p=="string"?t[u]=parseFloat(p):Array.isArray(p)&&g===V&&(t[u]=p.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(d===0||p===0)?d===0?c.set(g.transform(d)):t[u]=f.transform(p):(a||(s=G5(e),a=!0),l.push(u),r[u]=r[u]!==void 0?r[u]:t[u],c.jump(p))}),l.length){const u=l.indexOf("height")>=0?window.pageYOffset:null,c=K5(t,e,l);return s.length&&s.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),Ws&&u!==null&&window.scrollTo({top:u}),{target:c,transitionEnd:r}}else return{target:t,transitionEnd:r}};function Q5(e,t,n,r){return U5(t)?Y5(e,t,n,r):{target:t,transitionEnd:r}}const X5=(e,t,n,r)=>{const o=F5(e,t,r);return t=o.target,r=o.transitionEnd,Q5(e,t,n,r)},eu={current:null},dg={current:!1};function q5(){if(dg.current=!0,!!Ws)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>eu.current=e.matches;e.addListener(t),t()}else eu.current=!1}function Z5(e,t,n){const{willChange:r}=t;for(const o in t){const s=t[o],a=n[o];if(He(s))e.addValue(o,s),xs(r)&&r.add(o);else if(He(a))e.addValue(o,Dr(s,{owner:e})),xs(r)&&r.remove(o);else if(a!==s)if(e.hasValue(o)){const l=e.getValue(o);!l.hasAnimated&&l.set(s)}else{const l=e.getStaticValue(o);e.addValue(o,Dr(l!==void 0?l:s,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const Xf=new WeakMap,fg=Object.keys(Li),J5=fg.length,qf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],eS=oc.length;class tS{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>X.render(this.render,!1,!0);const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.isControllingVariants=Ks(n),this.isVariantNode=Xm(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const p=d[f];l[f]!==void 0&&He(p)&&(p.set(l[f],!1),xs(c)&&c.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Xf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),dg.current||q5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:eu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Xf.delete(this.current),this.projection&&this.projection.unmount(),Ot(this.notifyUpdate),Ot(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=Gn.has(t),o=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&X.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,s){let a,l;for(let u=0;u<J5;u++){const c=fg[u],{isEnabled:d,Feature:f,ProjectionNode:p,MeasureLayout:g}=Li[c];p&&(a=p),d(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),g&&(l=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:d,dragConstraints:f,layoutScroll:p,layoutRoot:g}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:!!d||f&&cr(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:g})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):he()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<qf.length;r++){const o=qf[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const s=t["on"+o];s&&(this.propEventSubscriptions[o]=this.on(o,s))}this.prevMotionValues=Z5(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<eS;r++){const o=oc[r],s=this.props[o];(Ni(s)||s===!1)&&(n[o]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Dr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=pc(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!He(s)?s:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Cc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class pg extends tS{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},s){let a=vw(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),a&&(a=o(a))),s){gw(this,r,a);const l=X5(this,r,a,n);n=l.transitionEnd,r=l.target}return{transition:t,transitionEnd:n,...r}}}function nS(e){return window.getComputedStyle(e)}class rS extends pg{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(Gn.has(n)){const r=vc(n);return r&&r.default||0}else{const r=nS(t),o=(e0(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return eg(t,n)}build(t,n,r,o){lc(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return fc(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;He(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){s0(t,n,r,o)}}class iS extends pg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Gn.has(n)){const r=vc(n);return r&&r.default||0}return n=a0.has(n)?n:rc(n),t.getAttribute(n)}measureInstanceViewportBox(){return he()}scrapeMotionValuesFromProps(t,n){return u0(t,n)}build(t,n,r,o){cc(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){l0(t,n,r,o)}mount(t){this.isSVGTag=dc(t.tagName),super.mount(t)}}const oS=(e,t)=>ac(e)?new iS(t,{enableHardwareAcceleration:!1}):new rS(t,{enableHardwareAcceleration:!0}),sS={layout:{ProjectionNode:ug,MeasureLayout:ng}},aS={...Nw,...J2,...V5,...sS},Ki=l2((e,t)=>O2(e,t,aS,oS));function hg(){const e=E.useRef(!1);return nc(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function lS(){const e=hg(),[t,n]=E.useState(0),r=E.useCallback(()=>{e.current&&n(t+1)},[t]);return[E.useCallback(()=>X.postRender(r),[r]),t]}class uS extends E.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function cS({children:e,isPresent:t}){const n=E.useId(),r=E.useRef(null),o=E.useRef({width:0,height:0,top:0,left:0});return E.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:u}=o.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),E.createElement(uS,{isPresent:t,childRef:r,sizeRef:o},E.cloneElement(e,{ref:r}))}const Oa=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:s,mode:a})=>{const l=c0(dS),u=E.useId(),c=E.useMemo(()=>({id:u,initial:t,isPresent:n,custom:o,onExitComplete:d=>{l.set(d,!0);for(const f of l.values())if(!f)return;r&&r()},register:d=>(l.set(d,!1),()=>l.delete(d))}),s?void 0:[n]);return E.useMemo(()=>{l.forEach((d,f)=>l.set(f,!1))},[n]),E.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),a==="popLayout"&&(e=E.createElement(cS,{isPresent:n},e)),E.createElement(Hs.Provider,{value:c},e)};function dS(){return new Map}function fS(e){return E.useEffect(()=>()=>e(),[])}const An=e=>e.key||"";function pS(e,t){e.forEach(n=>{const r=An(n);t.set(r,n)})}function hS(e){const t=[];return E.Children.forEach(e,n=>{E.isValidElement(n)&&t.push(n)}),t}const mS=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:s=!0,mode:a="sync"})=>{const l=E.useContext(sc).forceRender||lS()[0],u=hg(),c=hS(e);let d=c;const f=E.useRef(new Map).current,p=E.useRef(d),g=E.useRef(new Map).current,v=E.useRef(!0);if(nc(()=>{v.current=!1,pS(c,g),p.current=d}),fS(()=>{v.current=!0,g.clear(),f.clear()}),v.current)return E.createElement(E.Fragment,null,d.map(h=>E.createElement(Oa,{key:An(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:a},h)));d=[...d];const x=p.current.map(An),k=c.map(An),y=x.length;for(let h=0;h<y;h++){const m=x[h];k.indexOf(m)===-1&&!f.has(m)&&f.set(m,void 0)}return a==="wait"&&f.size&&(d=[]),f.forEach((h,m)=>{if(k.indexOf(m)!==-1)return;const w=g.get(m);if(!w)return;const S=x.indexOf(m);let P=h;if(!P){const C=()=>{f.delete(m);const b=Array.from(g.keys()).filter(N=>!k.includes(N));if(b.forEach(N=>g.delete(N)),p.current=c.filter(N=>{const $=An(N);return $===m||b.includes($)}),!f.size){if(u.current===!1)return;l(),r&&r()}};P=E.createElement(Oa,{key:An(w),isPresent:!1,onExitComplete:C,custom:t,presenceAffectsLayout:s,mode:a},w),f.set(m,P)}d.splice(S,0,P)}),d=d.map(h=>{const m=h.key;return f.has(m)?h:E.createElement(Oa,{key:An(h),isPresent:!0,presenceAffectsLayout:s,mode:a},h)}),E.createElement(E.Fragment,null,f.size?d:d.map(h=>E.cloneElement(h)))};var mg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Zf=fe.createContext&&fe.createContext(mg),pn=globalThis&&globalThis.__assign||function(){return pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},pn.apply(this,arguments)},gS=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function gg(e){return e&&e.map(function(t,n){return fe.createElement(t.tag,pn({key:n},t.attr),gg(t.child))})}function We(e){return function(t){return fe.createElement(yS,pn({attr:pn({},e.attr)},t),gg(e.child))}}function yS(e){var t=function(n){var r=e.attr,o=e.size,s=e.title,a=gS(e,["attr","size","title"]),l=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),fe.createElement("svg",pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:pn(pn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&fe.createElement("title",null,s),e.children)};return Zf!==void 0?fe.createElement(Zf.Consumer,null,function(n){return t(n)}):t(mg)}function vS(e){return We({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"}}]})(e)}function xS(e){return We({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function Jf(e){return We({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(e)}function wS(e){return We({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"}}]})(e)}function ep(e){return We({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"}}]})(e)}function tp(e){return We({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function yg(e){return We({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}}]})(e)}function vg(e){return We({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function SS(e){return We({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}}]})(e)}function kS(e){return We({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"}}]})(e)}function CS(e){return We({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function PS(e){return We({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"}}]})(e)}function TS(e){return We({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"}}]})(e)}function ES(e){return We({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}}]})(e)}var vo=function(e,t){return e<t?-1:e>t?1:0},np=function(e){return e.reduce(function(t,n){return t+n},0)},bS=function(){function e(n){this.colors=n}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(n){return n},e}(),AS=function(){function e(s,a,l){return(s<<10)+(a<<5)+l}function t(s){var a=[],l=!1;function u(){a.sort(s),l=!0}return{push:function(c){a.push(c),l=!1},peek:function(c){return l||u(),c===void 0&&(c=a.length-1),a[c]},pop:function(){return l||u(),a.pop()},size:function(){return a.length},map:function(c){return a.map(c)},debug:function(){return l||u(),a}}}function n(s,a,l,u,c,d,f){var p=this;p.r1=s,p.r2=a,p.g1=l,p.g2=u,p.b1=c,p.b2=d,p.histo=f}function r(){this.vboxes=new t(function(s,a){return vo(s.vbox.count()*s.vbox.volume(),a.vbox.count()*a.vbox.volume())})}function o(s,a){if(a.count()){var l=a.r2-a.r1+1,u=a.g2-a.g1+1,c=Math.max.apply(null,[l,u,a.b2-a.b1+1]);if(a.count()==1)return[a.copy()];var d,f,p,g,v=0,x=[],k=[];if(c==l)for(d=a.r1;d<=a.r2;d++){for(g=0,f=a.g1;f<=a.g2;f++)for(p=a.b1;p<=a.b2;p++)g+=s[e(d,f,p)]||0;x[d]=v+=g}else if(c==u)for(d=a.g1;d<=a.g2;d++){for(g=0,f=a.r1;f<=a.r2;f++)for(p=a.b1;p<=a.b2;p++)g+=s[e(f,d,p)]||0;x[d]=v+=g}else for(d=a.b1;d<=a.b2;d++){for(g=0,f=a.r1;f<=a.r2;f++)for(p=a.g1;p<=a.g2;p++)g+=s[e(f,p,d)]||0;x[d]=v+=g}return x.forEach(function(y,h){k[h]=v-y}),function(y){var h,m,w,S,P,C=y+"1",b=y+"2",N=0;for(d=a[C];d<=a[b];d++)if(x[d]>v/2){for(w=a.copy(),S=a.copy(),P=(h=d-a[C])<=(m=a[b]-d)?Math.min(a[b]-1,~~(d+m/2)):Math.max(a[C],~~(d-1-h/2));!x[P];)P++;for(N=k[P];!N&&x[P-1];)N=k[--P];return w[b]=P,S[C]=w[b]+1,[w,S]}}(c==l?"r":c==u?"g":"b")}}return n.prototype={volume:function(s){var a=this;return a._volume&&!s||(a._volume=(a.r2-a.r1+1)*(a.g2-a.g1+1)*(a.b2-a.b1+1)),a._volume},count:function(s){var a=this,l=a.histo;if(!a._count_set||s){var u,c,d,f=0;for(u=a.r1;u<=a.r2;u++)for(c=a.g1;c<=a.g2;c++)for(d=a.b1;d<=a.b2;d++)f+=l[e(u,c,d)]||0;a._count=f,a._count_set=!0}return a._count},copy:function(){var s=this;return new n(s.r1,s.r2,s.g1,s.g2,s.b1,s.b2,s.histo)},avg:function(s){var a=this,l=a.histo;if(!a._avg||s){var u,c,d,f,p=0,g=0,v=0,x=0;if(a.r1===a.r2&&a.g1===a.g2&&a.b1===a.b2)a._avg=[a.r1<<3,a.g1<<3,a.b1<<3];else{for(c=a.r1;c<=a.r2;c++)for(d=a.g1;d<=a.g2;d++)for(f=a.b1;f<=a.b2;f++)p+=u=l[e(c,d,f)]||0,g+=u*(c+.5)*8,v+=u*(d+.5)*8,x+=u*(f+.5)*8;a._avg=p?[~~(g/p),~~(v/p),~~(x/p)]:[~~(8*(a.r1+a.r2+1)/2),~~(8*(a.g1+a.g2+1)/2),~~(8*(a.b1+a.b2+1)/2)]}}return a._avg},contains:function(s){var a=this,l=s[0]>>3;return gval=s[1]>>3,bval=s[2]>>3,l>=a.r1&&l<=a.r2&&gval>=a.g1&&gval<=a.g2&&bval>=a.b1&&bval<=a.b2}},r.prototype={push:function(s){this.vboxes.push({vbox:s,color:s.avg()})},palette:function(){return this.vboxes.map(function(s){return s.color})},size:function(){return this.vboxes.size()},map:function(s){for(var a=this.vboxes,l=0;l<a.size();l++)if(a.peek(l).vbox.contains(s))return a.peek(l).color;return this.nearest(s)},nearest:function(s){for(var a,l,u,c=this.vboxes,d=0;d<c.size();d++)((l=Math.sqrt(Math.pow(s[0]-c.peek(d).color[0],2)+Math.pow(s[1]-c.peek(d).color[1],2)+Math.pow(s[2]-c.peek(d).color[2],2)))<a||a===void 0)&&(a=l,u=c.peek(d).color);return u},forcebw:function(){var s=this.vboxes;s.sort(function(c,d){return vo(np(c.color),np(d.color))});var a=s[0].color;a[0]<5&&a[1]<5&&a[2]<5&&(s[0].color=[0,0,0]);var l=s.length-1,u=s[l].color;u[0]>251&&u[1]>251&&u[2]>251&&(s[l].color=[255,255,255])}},{quantize:function(s,a){if(!Number.isInteger(a)||a<1||a>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!s.length||a<2||a>256||!s.length||a<2||a>256)return!1;for(var l=[],u=new Set,c=0;c<s.length;c++){var d=s[c],f=d.join(",");u.has(f)||(u.add(f),l.push(d))}if(l.length<=a)return new bS(l);var p=function(h){var m,w=new Array(32768);return h.forEach(function(S){m=e(S[0]>>3,S[1]>>3,S[2]>>3),w[m]=(w[m]||0)+1}),w}(s);p.forEach(function(){});var g=function(h,m){var w,S,P,C=1e6,b=0,N=1e6,$=0,W=1e6,q=0;return h.forEach(function(ie){(w=ie[0]>>3)<C?C=w:w>b&&(b=w),(S=ie[1]>>3)<N?N=S:S>$&&($=S),(P=ie[2]>>3)<W?W=P:P>q&&(q=P)}),new n(C,b,N,$,W,q,m)}(s,p),v=new t(function(h,m){return vo(h.count(),m.count())});function x(h,m){for(var w,S=h.size(),P=0;P<1e3;){if(S>=m||P++>1e3)return;if((w=h.pop()).count()){var C=o(p,w),b=C[0],N=C[1];if(!b)return;h.push(b),N&&(h.push(N),S++)}else h.push(w),P++}}v.push(g),x(v,.75*a);for(var k=new t(function(h,m){return vo(h.count()*h.volume(),m.count()*m.volume())});v.size();)k.push(v.pop());x(k,a);for(var y=new r;k.size();)y.push(k.pop());return y}}}().quantize,xg=function(e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=e.naturalWidth,this.height=this.canvas.height=e.naturalHeight,this.context.drawImage(e,0,0,this.width,this.height)};xg.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var Xn=function(){};Xn.prototype.getColor=function(e,t){return t===void 0&&(t=10),this.getPalette(e,5,t)[0]},Xn.prototype.getPalette=function(e,t,n){var r=function(l){var u=l.colorCount,c=l.quality;if(u!==void 0&&Number.isInteger(u)){if(u===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");u=Math.max(u,2),u=Math.min(u,20)}else u=10;return(c===void 0||!Number.isInteger(c)||c<1)&&(c=10),{colorCount:u,quality:c}}({colorCount:t,quality:n}),o=new xg(e),s=function(l,u,c){for(var d,f,p,g,v,x=l,k=[],y=0;y<u;y+=c)f=x[0+(d=4*y)],p=x[d+1],g=x[d+2],((v=x[d+3])===void 0||v>=125)&&(f>250&&p>250&&g>250||k.push([f,p,g]));return k}(o.getImageData().data,o.width*o.height,r.quality),a=AS(s,r.colorCount);return a?a.palette():null},Xn.prototype.getColorFromUrl=function(e,t,n){var r=this,o=document.createElement("img");o.addEventListener("load",function(){var s=r.getPalette(o,5,n);t(s[0],e)}),o.src=e},Xn.prototype.getImageData=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){if(this.status==200){var r=new Uint8Array(this.response);i=r.length;for(var o=new Array(i),s=0;s<r.length;s++)o[s]=String.fromCharCode(r[s]);var a=o.join(""),l=window.btoa(a);t("data:image/png;base64,"+l)}},n.send()},Xn.prototype.getColorAsync=function(e,t,n){var r=this;this.getImageData(e,function(o){var s=document.createElement("img");s.addEventListener("load",function(){var a=r.getPalette(s,5,n);t(a[0],this)}),s.src=o})};const RS=e=>{const[t,n]=E.useState("#388e3c");return E.useEffect(()=>{if(!e)return;const r=new Image,o=new Xn;r.crossOrigin="Anonymous",r.src=e,r.onload=()=>{try{const s=o.getColor(r),a=_S(s[0],s[1],s[2]);n(a)}catch(s){console.error("Color extraction error:",s),n(rp(e))}},r.onerror=()=>{console.warn("Image failed to load:",e),n(rp(e))}},[e]),t},rp=e=>e.includes("forest")?"#2d5d2a":e.includes("electronic")?"#3a1f7a":e.includes("jazz")?"#7a4b1f":e.includes("classical")?"#7a1f1f":e.includes("rock")?"#585858":"#388e3c",_S=(e,t,n)=>"#"+[e,t,n].map(r=>{const o=r.toString(16);return o.length===1?"0"+o:o}).join(""),MS=z.div`
  width: 100%;
  max-width: 800px;
  background: ${e=>e.theme.surfaceLight};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: relative;
`,DS=z.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: ${e=>e.theme.text};
`,NS=z.div`
  display: flex;
  margin-bottom: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 10px;
`,LS=z.button`
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
`,zS=z.div`
  max-height: 400px;
  overflow-y: auto;
  margin: 0 -10px;
  padding: 0 10px;
`,$S=z(Ki.div)`
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
`,jS=z.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 15px;
  position: relative;
  background: ${e=>e.$color||e.theme.primary};
  flex-shrink: 0;
`,VS=z.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,IS=z.div`
  flex: 1;
`,OS=z.div`
  font-weight: ${e=>e.$active?"bold":"normal"};
  color: ${e=>e.theme.text};
  font-size: 0.95rem;
`,FS=z.div`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.85rem;
  margin-top: 5px;
  display: flex;
`,BS=z.span`
  margin-right: 10px;
`,US=z.span`
  color: ${e=>e.theme.textSecondary};
`,HS=z.button`
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
`,WS=z.input`
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
`,GS=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?"0":""}${n}`},KS=()=>{const{state:e,dispatch:t}=Bi(),[n,r]=E.useState("all"),[o,s]=E.useState(""),a=["all",...new Set(e.queue.map(c=>c.genre))],l=e.queue.filter(c=>{const d=n==="all"||c.genre===n,f=o===""||c.title.toLowerCase().includes(o.toLowerCase())||c.artist.toLowerCase().includes(o.toLowerCase());return d&&f}),u=c=>{var d;((d=e.currentTrack)==null?void 0:d.id)===c.id?t({type:e.isPlaying?"PAUSE":"PLAY"}):(t({type:"SET_TRACK",payload:c}),setTimeout(()=>{t({type:"PLAY"})},100))};return T.jsxs(MS,{children:[T.jsx(DS,{children:"Music Explorer"}),T.jsx(WS,{type:"text",placeholder:"Search tracks, artists...",value:o,onChange:c=>s(c.target.value)}),T.jsx(NS,{children:a.map(c=>T.jsx(LS,{$active:n===c,onClick:()=>r(c),children:c.charAt(0).toUpperCase()+c.slice(1)},c))}),T.jsx(zS,{children:l.map(c=>{var d,f;return T.jsx(YS,{track:c,isActive:((d=e.currentTrack)==null?void 0:d.id)===c.id,isPlaying:e.isPlaying&&((f=e.currentTrack)==null?void 0:f.id)===c.id,onClick:()=>u(c)},c.id)})})]})},YS=({track:e,isActive:t,isPlaying:n,onClick:r})=>{const o=RS(e.coverArt);return T.jsxs($S,{$active:t,onClick:r,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[T.jsx(jS,{$color:e.color||o,children:e.coverArt&&T.jsx(VS,{src:e.coverArt,alt:e.title})}),T.jsxs(IS,{children:[T.jsx(OS,{$active:t,children:e.title}),T.jsxs(FS,{children:[T.jsx(BS,{children:e.artist}),T.jsx(US,{children:GS(e.duration)})]})]}),T.jsx(HS,{$active:t,onClick:s=>{s.stopPropagation(),r()},children:n?T.jsx(yg,{}):T.jsx(vg,{})})]})},QS=z.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`,XS=z.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,qS=()=>{const e=E.useRef(null),{state:t}=Bi(),n=E.useRef(0);return E.useEffect(()=>{if(!e.current)return;const r=e.current,o=r.getContext("2d");if(!o)return;const s=window.devicePixelRatio||1,a=r.getBoundingClientRect();r.width=a.width*s,r.height=a.height*s,o.scale(s,s);const l=()=>{var g;if(!o)return;const u=((g=t.currentTrack)==null?void 0:g.color)||"#388e3c";n.current=requestAnimationFrame(l);const c=a.width,d=a.height;o.clearRect(0,0,c,d);const f=new Array(128).fill(0).map((v,x)=>{const k=t.progress*.01+x*.01;return Math.sin(k*.5)*.3+Math.sin(k*1.5)*.2+Math.sin(k*3.5)*.1}),p=o.createLinearGradient(0,0,c,d);p.addColorStop(0,`${u}40`),p.addColorStop(1,"rgba(0, 0, 0, 0)"),o.fillStyle=p,o.beginPath(),o.moveTo(0,d);for(let v=0;v<f.length;v++){const x=v/f.length*c,k=d-d*.5*(1+f[v]);o.lineTo(x,k)}o.lineTo(c,d),o.closePath(),o.fill(),o.strokeStyle=u,o.lineWidth=2,o.beginPath();for(let v=0;v<f.length;v++){const x=v/f.length*c,k=d-d*.5*(1+f[v]);v===0?o.moveTo(x,k):o.lineTo(x,k)}o.stroke()};return l(),()=>{n.current&&cancelAnimationFrame(n.current)}},[t.currentTrack,t.progress]),T.jsx(QS,{children:T.jsx(XS,{ref:e})})},ZS=Wm`
  /* existing animation */
`,JS=Wm`
  /* existing animation */
`,ek=z.div.attrs({className:"dp-equalizer-container"})`
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
`,tk=z.canvas.attrs({className:"dp-equalizer-canvas"})`
  /* existing styles */
`,nk=z.div.attrs({className:"dp-equalizer-glow"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  opacity: ${e=>e.$isPlaying?.8:.2};

  /* Use the css helper for the pulse animation */
  animation: ${e=>Fi`
      ${ZS} ${3-e.$intensity*1.5}s infinite ease-in-out
    `};

  background: linear-gradient(
    90deg,
    transparent,
    ${e=>e.$color}20,
    transparent
  );
  background-size: 200% 200%;
`,rk=z.div.attrs({className:"dp-equalizer-flow"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: 200% 200%;
  /* Use the css helper for the flow animation */
  animation: ${e=>Fi`
      ${JS} ${8-e.$intensity*4}s infinite linear
    `};
  mix-blend-mode: overlay;
`,ik=z.div`
  width: 4px;
  height: ${e=>e.$height}%;
  background-color: ${e=>e.$color};
  border-radius: 2px;
  transition: height 0.1s ease;
`,ok=({isPlaying:e=!1,dominantColor:t="#4CAF50",audioRef:n,onIntensityChange:r})=>{var f;const{state:o}=Bi(),[s,a]=E.useState(Array(12).fill(10)),l=E.useRef(0),[u,c]=E.useState(0);E.useEffect(()=>{if(!o.isPlaying||!o.equalizerActive){a(Array(12).fill(10));return}const p=()=>{a(g=>g.map(v=>{const x=20+Math.random()*60;return v+(x-v)*.3})),l.current=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(l.current)}},[o.isPlaying,o.equalizerActive]),E.useEffect(()=>{r&&r(u)},[u,r]);const d=t||((f=o.currentTrack)==null?void 0:f.color)||"#388e3c";return T.jsxs(ek,{$isActive:e,$color:t,children:[T.jsx(tk,{ref:n,width:"280",height:"70"}),T.jsx(nk,{$intensity:u,$color:t,$isPlaying:e,children:T.jsx(rk,{$intensity:u,$color:t})}),s.map((p,g)=>T.jsx(ik,{$height:o.isPlaying?p:5,$color:d},g))]})},wg="/assets/covers/default_cover_2.jpeg",sk=e=>e?(e.startsWith("http"),e):wg,ak=z.div.attrs({className:"mp-root-container"})`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);

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
`,lk=z.div.attrs({className:"mp-content-area"})`
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
`,uk=z.div.attrs({className:"mp-ambient-particles"})`
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
`,ck=z.div.attrs({className:"mp-visualizer-wrapper"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,tu={sidebar:.3,buttonDelay:.15,buttonTransition:.35},dk=z(Ki.div).attrs(e=>({className:"mp-sidebar"}))`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 280px;
  max-width: 75vw;
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
`;z.button`
  position: fixed;
  right: ${e=>e.$isOpen?"330px":"20px"};
  top: 20px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: ${e=>e.theme.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.5), 0 0 20px rgba(76, 175, 80, 0.3);
  transform: scale(${e=>e.$isOpen?1:.9});

  &:hover {
    transform: scale(1.1);
    background: ${e=>e.theme.primaryHover};
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.7), 0 0 30px rgba(76, 175, 80, 0.4);
  }

  @media (max-width: 600px) {
    right: ${e=>e.$isOpen?"290px":"10px"};
    width: 40px;
    height: 40px;
    top: 10px;
  }
`;const fk=z(Ki.div).attrs({className:"mp-sidebar-trigger"})`
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
`,pk=z.div.attrs(e=>({className:"mp-track-display"}))`
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
`,hk=z.div.attrs(e=>({className:"mp-album-bg-color"}))`
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
`,mk=z.div.attrs({className:"mp-album-ripple-effect"})`
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
`,gk=z.div.attrs({className:"mp-album-artwork"})`
  position: relative;
  width: 220px;
  height: 220px;
  max-width: calc(100% - 40px);
  max-height: calc(100vw - 120px);
  margin: 40px auto 15px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
  z-index: 1;
  user-select: none; // Prevent selection

  @media (max-height: 700px) {
    width: 180px;
    height: 180px;
    margin: 30px auto 10px;
  }

  @media (max-height: 600px) {
    width: 140px;
    height: 140px;
    margin: 15px auto 10px;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    width: 120px;
    height: 120px;
    margin: 5px auto;
  }

  @media (max-width: 380px) {
    margin-top: 60px; /* Extra space for the control buttons at the top */
  }
`,yk=z.img.attrs({className:"mp-album-image"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,ip=z.div.attrs({className:"mp-track-metadata"})`
  text-align: center;
  margin-top: 20px;
  z-index: 1;
  user-select: none; // Prevent selection

  @media (max-height: 700px) {
    margin-top: 12px;
  }
`,op=z.h2.attrs({className:"mp-track-title"})`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 6px 0;

  @media (max-height: 700px) {
    font-size: 1.2rem;
    margin: 0 0 4px 0;
  }
`,sp=z.p.attrs({className:"mp-track-artist"})`
  font-size: 1.1rem;
  color: ${e=>e.theme.textSecondary};
  margin: 0 0 5px 0;
`,vk=z.p.attrs({className:"mp-track-album"})`
  font-size: 0.9rem;
  color: ${e=>e.theme.textSecondary};
  opacity: 0.8;
`,xk=z.div.attrs({className:"mp-playback-controls"})`
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
`,Zt=z.button.attrs({className:"mp-control-button"})`
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
`,wk=z(Zt).attrs({className:"mp-play-pause-button"})`
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
`,Sk=({isPlaying:e,onPlayPause:t,onPrev:n,onNext:r})=>T.jsxs(xk,{children:[T.jsx(Zt,{onClick:n,children:T.jsx(vS,{})}),T.jsx(wk,{onClick:t,className:e?"playing":"paused","aria-label":e?"Pause":"Play",children:T.jsxs("div",{className:"icon-container",children:[T.jsx(vg,{className:"play-icon"}),T.jsx(yg,{className:"pause-icon"})]})}),T.jsx(Zt,{onClick:r,children:T.jsx(wS,{})})]}),kk=z.div.attrs({className:"mp-progress-wrapper"})`
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
`,Ck=z.div.attrs({className:"mp-progress-track"})`
  width: 100%;
  height: 6px;
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
`,Pk=z.div.attrs(e=>({className:"mp-progress-fill"}))`
  height: 100%;
  border-radius: inherit;
  width: ${e=>e.$width};
  position: relative;
  /* Faster transition during dragging for immediate visual feedback */
  transition: width ${e=>e.$isDragging?"0s":"0.08s"} linear;

  /* Enhanced gradient for filled progress */
  background: linear-gradient(
    90deg,
    ${e=>e.theme.primary} 0%,
    ${e=>e.theme.primaryHover||"#43a047"} 100%
  );

  /* Add real-time fill effect that follows cursor position */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    height: 100%;
    width: 5px;
    background: ${e=>e.theme.primaryHover||"#43a047"};
    filter: blur(3px);
    opacity: ${e=>e.$isDragging?1:0};
    border-radius: 0 6px 6px 0;
  }

  /* Add shimmering effect on the progress bar */
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
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    opacity: 0;
    animation: shimmer 3s infinite;
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
`,Tk=z.div.attrs(e=>({className:"mp-progress-handle"}))`
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
`,Ek=z.div.attrs({className:"mp-time-display"})`
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
`,bk=z.div.attrs(e=>({className:"mp-time-tooltip"}))`
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
`;class Ak{constructor(t,n){this.audioRef=t,this.dispatch=n,this.lastAction=null,this.doubleClickThreshold=300,this.debounceThreshold=150,this.playPromise=null,this.handlePlayPause=()=>{var o;if(this.shouldDebounce("playPause"))return;this.lastAction={type:"playPause",time:Date.now()};const r=this.audioRef.current;if(r)if(r.paused){this.dispatch({type:"PLAY"});try{this.playPromise=r.play(),(o=this.playPromise)==null||o.catch(s=>{console.warn("Play failed:",s),this.dispatch({type:"PAUSE"}),this.playPromise=null})}catch(s){console.warn("Play operation failed:",s),this.dispatch({type:"PAUSE"})}}else this.playPromise?this.playPromise.then(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}).catch(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}):(r.pause(),this.dispatch({type:"PAUSE"}))},this.handlePrev=()=>{if(this.shouldDebounce("prev"))return;const r=this.isDoubleClick("prev");this.lastAction={type:"prev",time:Date.now()};const o=this.audioRef.current;if(o){if(r){console.log("Double-click detected on prev button, skipping to previous track"),this.dispatch({type:"PREV_TRACK"});return}o.currentTime>3?o.currentTime=0:this.dispatch({type:"PREV_TRACK"})}},this.handleNext=()=>{if(this.shouldDebounce("next"))return;this.lastAction={type:"next",time:Date.now()},this.isDoubleClick("next")&&console.log("Double-click detected on next button"),this.dispatch({type:"NEXT_TRACK"})}}isDoubleClick(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.doubleClickThreshold:!1}shouldDebounce(t){return this.lastAction?this.lastAction.type===t&&Date.now()-this.lastAction.time<this.debounceThreshold:!1}}const Rk=fe.forwardRef(({isOpen:e,toggleOpen:t},n)=>{var Ge,G,ye,M;const{state:r,dispatch:o}=Bi(),s=E.useRef(null),a=E.useRef(null),l=E.useRef(new Ak(s,o)).current,u=l.handlePlayPause,c=l.handlePrev,d=l.handleNext;r.isPlaying;const f=((Ge=r.currentTrack)==null?void 0:Ge.color)||"#388e3c";E.useEffect(()=>{var A,_;r.isPlaying?(A=s.current)==null||A.play():(_=s.current)==null||_.pause()},[r.isPlaying,r.currentTrack]),E.useEffect(()=>{s.current&&(s.current.volume=r.volume)},[r.volume]);const p=A=>{if(A&&!isNaN(A)){const _=Math.floor(A/60),D=Math.floor(A%60);return`${_}:${D<10?"0":""}${D}`}return"0:00"},g=()=>{if(s.current){const A=s.current.currentTime,_=s.current.duration;o({type:"SET_PROGRESS",payload:A}),o({type:"SET_DURATION",payload:_})}},v=A=>{if(a.current&&s.current){const _=a.current.clientWidth,D=A.nativeEvent.offsetX,j=s.current.duration;s.current.currentTime=D/_*j}},x=A=>{const _=parseFloat(A.target.value);o({type:"SET_VOLUME",payload:_})};E.useEffect(()=>{if(r.isPlaying&&s.current){const A=s.current.play();A!==void 0&&A.catch(_=>{console.warn("Failed to start playback:",_),o({type:"PAUSE"})})}else s.current&&s.current.pause()},[r.currentTrack,r.isPlaying,o]),E.useEffect(()=>{const A=()=>{var D;if((D=s.current)!=null&&D.error){console.error("Media error:",s.current.error);let j=0;const K=3,te=()=>{if(j<K){j++;const be=Math.pow(2,j)*1e3;console.log(`Retrying playback in ${be/1e3} seconds...`),setTimeout(()=>{s.current&&(s.current.load(),s.current.play().catch(ne=>{console.warn("Retry failed:",ne),te()}))},be)}else console.warn("All retries failed, skipping track"),d()};te()}},_=s.current;return _&&_.addEventListener("error",A),()=>{_&&_.removeEventListener("error",A)}},[]);const[k,y]=E.useState(!1),[h,m]=E.useState("0%"),[w,S]=E.useState(!1),[P,C]=E.useState(null),b=A=>{var _;if(a.current){const D=a.current.getBoundingClientRect(),j=(A.clientX-D.left)/D.width,K=Math.max(0,Math.min(1,j))*100;if(m(`${K.toFixed(3)}%`),(_=s.current)!=null&&_.duration){const te=K*s.current.duration/100;C(p(te))}k||y(!0)}},N=()=>{w||y(!1)},$=A=>{S(!0),q(A)},W=A=>{if(s.current){const _=s.current.duration,D=A/100*_;return p(D)}return"0:00"},q=A=>{if(a.current){const _=a.current.getBoundingClientRect(),D=(A.clientX-_.left)/_.width,j=Math.max(0,Math.min(1,D))*100,K=`${j}%`;if(m(K),C(W(j)),w&&s.current){const te=s.current.duration;s.current.currentTime=j/100*te,a.current.querySelector(".mp-progress-fill")&&(a.current.querySelector(".mp-progress-fill").style.width=K)}}},ie=()=>{S(!1),setTimeout(()=>{k||y(!1)},100)};E.useEffect(()=>{const A=K=>{if(w&&a.current){K.preventDefault();const te=a.current.getBoundingClientRect(),be=(K.clientX-te.left)/te.width,ne=Math.max(0,Math.min(1,be))*100;if(m(`${ne.toFixed(3)}%`),s.current){const Ve=s.current.duration;s.current.currentTime=ne/100*Ve}}};let _;const D=K=>{w&&(K.preventDefault(),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{A(K)}))},j=()=>{w&&(ie(),cancelAnimationFrame(_))};return w&&(document.addEventListener("mousemove",D,{passive:!1}),document.addEventListener("mouseup",j)),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",j),cancelAnimationFrame(_)}},[w]);const oe=()=>{const A=ap(r.sidebarMode)?r.sidebarMode:"auto",_=["auto","always","manual"],j=(_.indexOf(A)+1)%_.length,K=_[j];o({type:"SET_SIDEBAR_MODE",payload:K})};return T.jsxs(dk,{$isOpen:e,className:"player-sidebar",ref:n,initial:{right:"-280px"},animate:{right:e?0:"-280px"},transition:{duration:tu.sidebar,ease:[.34,1.56,.64,1]},children:[T.jsx(_k,{}),T.jsxs(jk,{onClick:oe,$mode:ap(r.sidebarMode)?r.sidebarMode:"auto","aria-label":"Change sidebar mode",title:r.sidebarMode==="auto"?"Auto-hide mode: Sidebar appears when mouse is near edge":r.sidebarMode==="always"?"Always visible mode: Sidebar stays open":"Manual control mode: You control when sidebar opens",children:[r.sidebarMode==="auto"&&T.jsxs(T.Fragment,{children:[T.jsx(Jf,{}),T.jsx("span",{children:"Auto-hide"})]}),r.sidebarMode==="always"&&T.jsxs(T.Fragment,{children:[T.jsx(tp,{}),T.jsx("span",{children:"Always visible"})]}),r.sidebarMode==="manual"&&T.jsxs(T.Fragment,{children:[T.jsx(ep,{}),T.jsx("span",{children:"Manual control"})]})]}),T.jsxs(Mk,{onClick:t,"aria-label":"Close music player",children:[T.jsx(CS,{}),T.jsxs("div",{className:"particles",children:[T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"}),T.jsx("div",{className:"particle"})]})]}),T.jsx("audio",{ref:s,src:(G=r.currentTrack)==null?void 0:G.audioSrc,onTimeUpdate:g,onEnded:d,onError:A=>{console.error("Audio error:",A),r.isPlaying&&(o({type:"PAUSE"}),setTimeout(()=>{d()},500))},onCanPlayThrough:()=>{r.isPlaying&&s.current&&s.current.play().catch(A=>{console.warn("Auto-play was prevented:",A),o({type:"PAUSE"})})}}),T.jsxs(pk,{$bgColor:f,children:[T.jsx(hk,{$bgColor:f}),r.currentTrack?T.jsxs(T.Fragment,{children:[T.jsxs(gk,{children:[T.jsx(yk,{src:sk((ye=r.currentTrack)==null?void 0:ye.coverArt),alt:((M=r.currentTrack)==null?void 0:M.title)||"Album Cover"}),T.jsx(mk,{}),r.equalizerActive&&T.jsx(ok,{})]}),T.jsxs(ip,{children:[T.jsx(op,{children:r.currentTrack.title}),T.jsx(sp,{children:r.currentTrack.artist}),T.jsx(vk,{children:r.currentTrack.album})]}),T.jsx(Sk,{isPlaying:r.isPlaying,onPlayPause:u,onPrev:c,onNext:d}),T.jsxs(kk,{children:[T.jsxs(Ck,{ref:a,onClick:v,onMouseMove:b,onMouseEnter:b,onMouseLeave:N,onMouseDown:$,children:[T.jsx(Pk,{$width:w?h:`${r.progress/r.duration*100}%`,$isDragging:w}),T.jsx(bk,{$visible:k,$position:h,$isDragging:w,children:P||p(r.progress)}),T.jsx(Tk,{$visible:k||w,$position:w||k?h:`${r.progress/r.duration*100}%`,$isDragging:w})]}),T.jsxs(Ek,{children:[T.jsx("span",{children:p(r.progress)}),T.jsx("span",{children:p(r.duration)})]})]})]}):T.jsxs(ip,{children:[T.jsx(op,{children:"No track selected"}),T.jsx(sp,{children:"Select a track to play"})]})]}),T.jsxs(Nk,{children:[T.jsxs(Lk,{children:[r.volume===0?T.jsx(PS,{}):T.jsx(TS,{}),T.jsx(zk,{value:r.volume,onChange:x})]}),T.jsxs($k,{children:[T.jsx(Zt,{onClick:()=>o({type:"TOGGLE_SHUFFLE"}),style:{color:r.isShuffling?"#388e3c":""},children:T.jsx(SS,{})}),T.jsxs(Zt,{onClick:oe,style:{color:(()=>{switch(r.sidebarMode){case"auto":return"rgba(76, 175, 80, 1)";case"always":return"rgba(33, 150, 243, 1)";case"manual":return"rgba(255, 152, 0, 1)";default:return"rgba(76, 175, 80, 1)"}})()},title:(()=>{switch(r.sidebarMode){case"auto":return"Auto-hide mode";case"always":return"Always visible mode";case"manual":return"Manual control mode";default:return"Auto-hide mode"}})(),children:[r.sidebarMode==="auto"&&T.jsx(Jf,{}),r.sidebarMode==="always"&&T.jsx(tp,{}),r.sidebarMode==="manual"&&T.jsx(ep,{})]}),T.jsx(Zt,{onClick:()=>o({type:"TOGGLE_REPEAT"}),style:{color:r.isRepeating?"#388e3c":""},children:T.jsx(kS,{})}),T.jsx(Zt,{onClick:()=>o({type:"TOGGLE_EQUALIZER"}),style:{color:r.equalizerActive?"#388e3c":""},children:T.jsx(ES,{})}),T.jsx(Zt,{onClick:()=>o({type:"TOGGLE_VISUALIZER"}),style:{color:r.visualizerActive?"#388e3c":""},children:T.jsx(xS,{})})]})]})]})}),_k=z.div.attrs({className:"mp-sidebar-ambient-effect"})`
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
`,Mk=z.button.attrs({className:"mp-sidebar-close"})`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 36px;
  height: 36px;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
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
`;z.div.attrs(e=>({className:"mp-mode-indicator"}))`
  position: absolute;
  top: 20px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  color: ${e=>{switch(e.$mode){case"auto":return"rgba(76, 175, 80, 1)";case"always":return"rgba(33, 150, 243, 1)";case"manual":return"rgba(255, 152, 0, 1)";default:return"rgba(76, 175, 80, 1)"}}};
  font-size: 0.75rem;
  user-select: none;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 10;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  span.mode-name {
    display: none;
  }

  &:hover span.mode-name {
    display: inline;
  }

  @media (max-width: 380px) {
    padding: 6px 10px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;const ap=e=>e==="auto"||e==="always"||e==="manual",Dk=()=>{var p;const{state:e,dispatch:t}=Bi(),[n,r]=E.useState(!1),[o,s]=E.useState(!0),a=E.useRef(null),l=E.useRef(null),u=E.useRef(null);E.useState(0),E.useEffect(()=>{(()=>{try{const v=window.AudioContext||window.webkitAudioContext;if(v){const y=new v,h=y.createOscillator(),m=y.createGain();m.gain.value=.001,h.connect(m),m.connect(y.destination),h.start(0),h.stop(.001)}const x=new Audio;x.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA",x.volume=.01;const k=x.play();k!==void 0&&k.catch(y=>{console.log("Auto audio initialization failed:",y);const h=()=>{x.play().catch(m=>console.log("Manual audio init failed:",m)),document.removeEventListener("click",h),document.removeEventListener("touchstart",h)};document.addEventListener("click",h,{once:!0}),document.addEventListener("touchstart",h,{once:!0})})}catch(v){console.warn("Audio initialization error:",v)}})()},[]),E.useEffect(()=>{if(o){if(e.sidebarMode==="auto"){const g=k=>{const y=window.innerWidth,h=Math.min(80,y*.08);if(k.clientX>y-h&&!n&&(r(!0),t({type:"SIDEBAR_INTERACTION"})),n){const w=y-280;k.clientX<w&&r(!1)}},v=k=>{n&&l.current&&(l.current.contains(k.target)||r(!1))},x=k=>{if(n&&k.touches.length>0){const y=k.touches[0],h=window.innerWidth,m=280;y.clientX<h-m-30&&r(!1)}};return document.addEventListener("mousemove",g),document.addEventListener("click",v),document.addEventListener("touchmove",x),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("click",v),document.removeEventListener("touchmove",x)}}e.sidebarMode==="always"&&r(!0)}},[e.sidebarMode,n,o,t,l]);const c=g=>{if(g.current){const v=g.current.currentTime,x=g.current.duration;!isNaN(v)&&!isNaN(x)&&(t({type:"SET_PROGRESS",payload:v}),t({type:"SET_DURATION",payload:x}))}},d=()=>{t({type:"NEXT_TRACK"})},f=()=>{e.sidebarMode==="manual"?(r(!n),t({type:"SIDEBAR_INTERACTION"})):(t({type:"SET_SIDEBAR_MODE",payload:"manual"}),r(!n),t({type:"SIDEBAR_INTERACTION"}))};return E.useEffect(()=>{const g=v=>{const x=v.target;x.tagName==="IMG"&&!x.src.includes("default_cover.jpeg")&&(console.log(`Image failed to load: ${x.src}, using default cover`),x.src=wg)};return document.addEventListener("error",g,!0),()=>{document.removeEventListener("error",g,!0)}},[]),T.jsxs(ak,{children:[T.jsx(uk,{}),T.jsx("audio",{ref:a,src:(p=e.currentTrack)==null?void 0:p.audioSrc,onTimeUpdate:()=>c(a),onEnded:d,preload:"auto"}),T.jsxs(lk,{children:[T.jsx(ck,{children:e.visualizerActive&&T.jsx(qS,{})}),T.jsx(Ki.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:T.jsx(KS,{})})]}),T.jsx(mS,{children:!n&&o&&T.jsx(fk,{ref:u,onClick:f,initial:{opacity:0,scaleY:.7},animate:{opacity:.8,scaleY:1},exit:{opacity:0,scaleY:.7},transition:{duration:tu.buttonTransition,delay:tu.buttonDelay,ease:[.2,.8,.2,1.2]},style:{transformOrigin:"center"}})}),T.jsx(Rk,{isOpen:n,toggleOpen:f,ref:l})]})};z(Ki.button).attrs(e=>({className:"mp-sidebar-mode-toggle"}))`
  position: fixed;
  bottom: 80px;
  right: ${e=>e.$isOpen?"290px":"20px"};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid
    ${e=>{switch(e.$mode){case"auto":return"rgba(76, 175, 80, 0.7)";case"always":return"rgba(33, 150, 243, 0.7)";case"manual":return"rgba(255, 152, 0, 0.7)";default:return"rgba(76, 175, 80, 0.7)"}}};
  color: ${e=>{switch(e.$mode){case"auto":return"rgba(76, 175, 80, 1)";case"always":return"rgba(33, 150, 243, 1)";case"manual":return"rgba(255, 152, 0, 1)";default:return"rgba(76, 175, 80, 1)"}}};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 990;
  font-weight: bold;
  transition: none; /* Remove default transitions, we'll use framer-motion */

  svg {
    width: 18px;
    height: 18px;
    transform-origin: center;
  }

  @media (max-width: 600px) {
    bottom: 30px;
    width: 36px;
    height: 36px;
  }

  @media (max-width: 380px) {
    bottom: 25px;
    right: ${e=>e.$mode==="always"?"auto":"20px"};
    left: ${e=>e.$mode==="always"?"20px":"auto"};
    width: 36px;
    height: 36px;
  }

  @media (max-height: 500px) {
    bottom: 20px;
  }
`;z.div.attrs(e=>({className:"mp-cover-glow-effect"}))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    rgba(76, 175, 80, ${e=>e.$intensity*.3}) 0%,
    transparent 70%
  );
  opacity: ${e=>e.$isPlaying?1:0};
  transition: opacity 0.3s ease, background 0.3s ease;
  mix-blend-mode: overlay;
`;const Nk=z.div.attrs({className:"mp-secondary-controls"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1;
  user-select: none;

  @media (max-height: 700px) {
    padding: 15px 20px;
  }

  @media (max-height: 600px) {
    padding: 10px 15px;
  }
`,Lk=z.div.attrs({className:"mp-volume-control"})`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.textSecondary};

  svg {
    font-size: 16px;
  }
`,zk=z.input.attrs({className:"mp-volume-slider",type:"range",min:"0",max:"1",step:"0.01"})`
  -webkit-appearance: none;
  width: 80px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  opacity: 0.8;
  transition: opacity 0.2s;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${e=>e.theme.primary};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${e=>e.theme.primary};
    cursor: pointer;
    border: none;
  }

  &:hover {
    opacity: 1;
  }
`,$k=z.div.attrs({className:"mp-feature-toggles"})`
  display: flex;
  align-items: center;
  gap: 8px;
`,jk=z.button.attrs(e=>({className:"mp-mode-control",type:"button"}))`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: none;
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.25);
  color: ${e=>{switch(e.$mode){case"auto":return"rgba(76, 175, 80, 1)";case"always":return"rgba(33, 150, 243, 1)";case"manual":return"rgba(255, 152, 0, 1)";default:return"rgba(76, 175, 80, 1)"}}};
  font-size: 0.8rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px
      ${e=>{switch(e.$mode){case"auto":return"rgba(76, 175, 80, 0.3)";case"always":return"rgba(33, 150, 243, 0.3)";case"manual":return"rgba(255, 152, 0, 0.3)";default:return"rgba(76, 175, 80, 0.3)"}}};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 14px;
    height: 14px;
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
  }

  span {
    white-space: nowrap;
  }

  /* Subtle particle effect when clicked */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>{switch(e.$mode){case"auto":return"rgba(76, 175, 80, 0.2)";case"always":return"rgba(33, 150, 243, 0.2)";case"manual":return"rgba(255, 152, 0, 0.2)";default:return"rgba(76, 175, 80, 0.2)"}}};
    border-radius: 18px;
    opacity: 0;
    transform: scale(1.2);
    pointer-events: none;
  }

  &:active::after {
    animation: modeButtonPulse 0.5s ease-out;
  }

  @keyframes modeButtonPulse {
    0% {
      opacity: 0.7;
      transform: scale(0.8);
    }
    70% {
      opacity: 0;
      transform: scale(1.5);
    }
    100% {
      opacity: 0;
      transform: scale(1.5);
    }
  }
`,Vk=Yv`
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
`,Ik={name:"forest",primary:"#2d5d2a",secondary:"#3b8c37",accent:"#68bf63",background:"#0f1d0e",surface:"#182f17",text:"#ffffff",textSecondary:"#c0c0c0",error:"#e57373",success:"#81c784"},Ok=()=>T.jsxs(Wv,{theme:Ik,children:[T.jsx(Vk,{}),T.jsx(Zv,{children:T.jsx(Dk,{})})]});Fa.createRoot(document.getElementById("root")).render(T.jsx(fe.StrictMode,{children:T.jsx(Ok,{})}));
