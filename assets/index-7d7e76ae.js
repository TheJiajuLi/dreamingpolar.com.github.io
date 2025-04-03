function b5(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function T5(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wx={exports:{}},Uu={},qx={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=Symbol.for("react.element"),S5=Symbol.for("react.portal"),A5=Symbol.for("react.fragment"),k5=Symbol.for("react.strict_mode"),C5=Symbol.for("react.profiler"),I5=Symbol.for("react.provider"),P5=Symbol.for("react.context"),R5=Symbol.for("react.forward_ref"),D5=Symbol.for("react.suspense"),V5=Symbol.for("react.memo"),N5=Symbol.for("react.lazy"),Ty=Symbol.iterator;function M5(t){return t===null||typeof t!="object"?null:(t=Ty&&t[Ty]||t["@@iterator"],typeof t=="function"?t:null)}var Gx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kx=Object.assign,Qx={};function so(t,e,n){this.props=t,this.context=e,this.refs=Qx,this.updater=n||Gx}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yx(){}Yx.prototype=so.prototype;function om(t,e,n){this.props=t,this.context=e,this.refs=Qx,this.updater=n||Gx}var am=om.prototype=new Yx;am.constructor=om;Kx(am,so.prototype);am.isPureReactComponent=!0;var Sy=Array.isArray,Xx=Object.prototype.hasOwnProperty,lm={current:null},Jx={key:!0,ref:!0,__self:!0,__source:!0};function Zx(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xx.call(e,r)&&!Jx.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ol,type:t,key:s,ref:o,props:i,_owner:lm.current}}function L5(t,e){return{$$typeof:ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cm(t){return typeof t=="object"&&t!==null&&t.$$typeof===ol}function O5(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ay=/\/+/g;function ch(t,e){return typeof t=="object"&&t!==null&&t.key!=null?O5(""+t.key):e.toString(36)}function yc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ol:case S5:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ch(o,0):r,Sy(i)?(n="",t!=null&&(n=t.replace(Ay,"$&/")+"/"),yc(i,e,n,"",function(u){return u})):i!=null&&(cm(i)&&(i=L5(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ay,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sy(t))for(var a=0;a<t.length;a++){s=t[a];var c=r+ch(s,a);o+=yc(s,e,n,c,i)}else if(c=M5(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=r+ch(s,a++),o+=yc(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fl(t,e,n){if(t==null)return t;var r=[],i=0;return yc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function j5(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},vc={transition:null},F5={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:vc,ReactCurrentOwner:lm};function e_(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Fl,forEach:function(t,e,n){Fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fl(t,function(){e++}),e},toArray:function(t){return Fl(t,function(e){return e})||[]},only:function(t){if(!cm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=so;ce.Fragment=A5;ce.Profiler=C5;ce.PureComponent=om;ce.StrictMode=k5;ce.Suspense=D5;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F5;ce.act=e_;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Kx({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Xx.call(e,c)&&!Jx.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ol,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:P5,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:I5,_context:t},t.Consumer=t};ce.createElement=Zx;ce.createFactory=function(t){var e=Zx.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:R5,render:t}};ce.isValidElement=cm;ce.lazy=function(t){return{$$typeof:N5,_payload:{_status:-1,_result:t},_init:j5}};ce.memo=function(t,e){return{$$typeof:V5,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=vc.transition;vc.transition={};try{t()}finally{vc.transition=e}};ce.unstable_act=e_;ce.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ce.useContext=function(t){return Mt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ce.useId=function(){return Mt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ce.useRef=function(t){return Mt.current.useRef(t)};ce.useState=function(t){return Mt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Mt.current.useTransition()};ce.version="18.3.1";qx.exports=ce;var I=qx.exports;const Ce=T5(I),$5=b5({__proto__:null,default:Ce},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B5=I,z5=Symbol.for("react.element"),U5=Symbol.for("react.fragment"),H5=Object.prototype.hasOwnProperty,W5=B5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q5={key:!0,ref:!0,__self:!0,__source:!0};function t_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)H5.call(e,r)&&!q5.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:z5,type:t,key:s,ref:o,props:i,_owner:W5.current}}Uu.Fragment=U5;Uu.jsx=t_;Uu.jsxs=t_;Wx.exports=Uu;var y=Wx.exports,yf={},n_={exports:{}},nn={},r_={exports:{}},i_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var F=z.length;z.push(G);e:for(;0<F;){var $=F-1>>>1,K=z[$];if(0<i(K,G))z[$]=G,z[F]=K,F=$;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],F=z.pop();if(F!==G){z[0]=F;e:for(var $=0,K=z.length,te=K>>>1;$<te;){var he=2*($+1)-1,ye=z[he],Se=he+1,Me=z[Se];if(0>i(ye,F))Se<K&&0>i(Me,ye)?(z[$]=Me,z[Se]=F,$=Se):(z[$]=ye,z[he]=F,$=he);else if(Se<K&&0>i(Me,F))z[$]=Me,z[Se]=F,$=Se;else break e}}return G}function i(z,G){var F=z.sortIndex-G.sortIndex;return F!==0?F:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],d=1,h=null,p=3,g=!1,_=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=z)r(u),G.sortIndex=G.expirationTime,e(c,G);else break;G=n(u)}}function P(z){if(b=!1,w(z),!_)if(n(c)!==null)_=!0,X(O);else{var G=n(u);G!==null&&ee(P,G.startTime-z)}}function O(z,G){_=!1,b&&(b=!1,x(E),E=-1),g=!0;var F=p;try{for(w(G),h=n(c);h!==null&&(!(h.expirationTime>G)||z&&!D());){var $=h.callback;if(typeof $=="function"){h.callback=null,p=h.priorityLevel;var K=$(h.expirationTime<=G);G=t.unstable_now(),typeof K=="function"?h.callback=K:h===n(c)&&r(c),w(G)}else r(c);h=n(c)}if(h!==null)var te=!0;else{var he=n(u);he!==null&&ee(P,he.startTime-G),te=!1}return te}finally{h=null,p=F,g=!1}}var N=!1,T=null,E=-1,A=5,C=-1;function D(){return!(t.unstable_now()-C<A)}function M(){if(T!==null){var z=t.unstable_now();C=z;var G=!0;try{G=T(!0,z)}finally{G?R():(N=!1,T=null)}}else N=!1}var R;if(typeof v=="function")R=function(){v(M)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,J=W.port2;W.port1.onmessage=M,R=function(){J.postMessage(null)}}else R=function(){k(M,0)};function X(z){T=z,N||(N=!0,R())}function ee(z,G){E=k(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,X(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var F=p;p=G;try{return z()}finally{p=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=p;p=z;try{return G()}finally{p=F}},t.unstable_scheduleCallback=function(z,G,F){var $=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?$+F:$):F=$,z){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=F+K,z={id:d++,callback:G,priorityLevel:z,startTime:F,expirationTime:K,sortIndex:-1},F>$?(z.sortIndex=F,e(u,z),n(c)===null&&z===n(u)&&(b?(x(E),E=-1):b=!0,ee(P,F-$))):(z.sortIndex=K,e(c,z),_||g||(_=!0,X(O))),z},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(z){var G=p;return function(){var F=p;p=G;try{return z.apply(this,arguments)}finally{p=F}}}})(i_);r_.exports=i_;var G5=r_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K5=I,en=G5;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s_=new Set,Ca={};function Wi(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(Ca[t]=e,t=0;t<e.length;t++)s_.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vf=Object.prototype.hasOwnProperty,Q5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ky={},Cy={};function Y5(t){return vf.call(Cy,t)?!0:vf.call(ky,t)?!1:Q5.test(t)?Cy[t]=!0:(ky[t]=!0,!1)}function X5(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J5(t,e,n,r){if(e===null||typeof e>"u"||X5(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var um=/[\-:]([a-z])/g;function dm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(um,dm);gt[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(um,dm);gt[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(um,dm);gt[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hm(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J5(e,n,i,r)&&(n=null),r||i===null?Y5(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dr=K5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$l=Symbol.for("react.element"),ds=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),fm=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),o_=Symbol.for("react.provider"),a_=Symbol.for("react.context"),pm=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),_f=Symbol.for("react.suspense_list"),mm=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),l_=Symbol.for("react.offscreen"),Iy=Symbol.iterator;function Vo(t){return t===null||typeof t!="object"?null:(t=Iy&&t[Iy]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,uh;function Yo(t){if(uh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uh=e&&e[1]||""}return`
`+uh+t}var dh=!1;function hh(t,e){if(!t||dh)return"";dh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{dh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yo(t):""}function Z5(t){switch(t.tag){case 5:return Yo(t.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return t=hh(t.type,!1),t;case 11:return t=hh(t.type.render,!1),t;case 1:return t=hh(t.type,!0),t;default:return""}}function Ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case ds:return"Portal";case wf:return"Profiler";case fm:return"StrictMode";case xf:return"Suspense";case _f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a_:return(t.displayName||"Context")+".Consumer";case o_:return(t._context.displayName||"Context")+".Provider";case pm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mm:return e=t.displayName||null,e!==null?e:Ef(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Ef(t(e))}catch{}}return null}function ek(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(e);case 8:return e===fm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tk(t){var e=c_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bl(t){t._valueTracker||(t._valueTracker=tk(t))}function u_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=c_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bf(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Py(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d_(t,e){e=e.checked,e!=null&&hm(t,"checked",e,!1)}function Tf(t,e){d_(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sf(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ry(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sf(t,e,n){(e!=="number"||Hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function Cs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Xo(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function h_(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function f_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?f_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zl,p_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zl=zl||document.createElement("div"),zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nk=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){nk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function m_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function g_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=m_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rk=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cf(t,e){if(e){if(rk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function If(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pf=null;function gm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rf=null,Is=null,Ps=null;function Ny(t){if(t=cl(t)){if(typeof Rf!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Ku(e),Rf(t.stateNode,t.type,e))}}function y_(t){Is?Ps?Ps.push(t):Ps=[t]:Is=t}function v_(){if(Is){var t=Is,e=Ps;if(Ps=Is=null,Ny(t),e)for(t=0;t<e.length;t++)Ny(e[t])}}function w_(t,e){return t(e)}function x_(){}var fh=!1;function __(t,e,n){if(fh)return t(e,n);fh=!0;try{return w_(t,e,n)}finally{fh=!1,(Is!==null||Ps!==null)&&(x_(),v_())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var r=Ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var Df=!1;if(nr)try{var No={};Object.defineProperty(No,"passive",{get:function(){Df=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Df=!1}function ik(t,e,n,r,i,s,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var oa=!1,Wc=null,qc=!1,Vf=null,sk={onError:function(t){oa=!0,Wc=t}};function ok(t,e,n,r,i,s,o,a,c){oa=!1,Wc=null,ik.apply(sk,arguments)}function ak(t,e,n,r,i,s,o,a,c){if(ok.apply(this,arguments),oa){if(oa){var u=Wc;oa=!1,Wc=null}else throw Error(H(198));qc||(qc=!0,Vf=u)}}function qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function My(t){if(qi(t)!==t)throw Error(H(188))}function lk(t){var e=t.alternate;if(!e){if(e=qi(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return My(i),t;if(s===r)return My(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function b_(t){return t=lk(t),t!==null?T_(t):null}function T_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T_(t);if(e!==null)return e;t=t.sibling}return null}var S_=en.unstable_scheduleCallback,Ly=en.unstable_cancelCallback,ck=en.unstable_shouldYield,uk=en.unstable_requestPaint,Ge=en.unstable_now,dk=en.unstable_getCurrentPriorityLevel,ym=en.unstable_ImmediatePriority,A_=en.unstable_UserBlockingPriority,Gc=en.unstable_NormalPriority,hk=en.unstable_LowPriority,k_=en.unstable_IdlePriority,Hu=null,On=null;function fk(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Hu,t,void 0,(t.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:gk,pk=Math.log,mk=Math.LN2;function gk(t){return t>>>=0,t===0?32:31-(pk(t)/mk|0)|0}var Ul=64,Hl=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Jo(a):(s&=o,s!==0&&(r=Jo(s)))}else o=n&~i,o!==0?r=Jo(o):s!==0&&(r=Jo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-An(e),i=1<<n,r|=t[n],e&=~i;return r}function yk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-An(s),a=1<<o,c=i[o];c===-1?(!(a&n)||a&r)&&(i[o]=yk(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function Nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C_(){var t=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),t}function ph(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-An(e),t[e]=n}function wk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-An(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-An(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function I_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P_,wm,R_,D_,V_,Mf=!1,Wl=[],Rr=null,Dr=null,Vr=null,Ra=new Map,Da=new Map,Tr=[],xk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oy(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function Mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=cl(e),e!==null&&wm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _k(t,e,n,r,i){switch(e){case"focusin":return Rr=Mo(Rr,t,e,n,r,i),!0;case"dragenter":return Dr=Mo(Dr,t,e,n,r,i),!0;case"mouseover":return Vr=Mo(Vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ra.set(s,Mo(Ra.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Da.set(s,Mo(Da.get(s)||null,t,e,n,r,i)),!0}return!1}function N_(t){var e=_i(t.target);if(e!==null){var n=qi(e);if(n!==null){if(e=n.tag,e===13){if(e=E_(n),e!==null){t.blockedOn=e,V_(t.priority,function(){R_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pf=r,n.target.dispatchEvent(r),Pf=null}else return e=cl(n),e!==null&&wm(e),t.blockedOn=n,!1;e.shift()}return!0}function jy(t,e,n){wc(t)&&n.delete(e)}function Ek(){Mf=!1,Rr!==null&&wc(Rr)&&(Rr=null),Dr!==null&&wc(Dr)&&(Dr=null),Vr!==null&&wc(Vr)&&(Vr=null),Ra.forEach(jy),Da.forEach(jy)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,Ek)))}function Va(t){function e(i){return Lo(i,t)}if(0<Wl.length){Lo(Wl[0],t);for(var n=1;n<Wl.length;n++){var r=Wl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&Lo(Rr,t),Dr!==null&&Lo(Dr,t),Vr!==null&&Lo(Vr,t),Ra.forEach(e),Da.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)N_(n),n.blockedOn===null&&Tr.shift()}var Rs=dr.ReactCurrentBatchConfig,Qc=!0;function bk(t,e,n,r){var i=Ee,s=Rs.transition;Rs.transition=null;try{Ee=1,xm(t,e,n,r)}finally{Ee=i,Rs.transition=s}}function Tk(t,e,n,r){var i=Ee,s=Rs.transition;Rs.transition=null;try{Ee=4,xm(t,e,n,r)}finally{Ee=i,Rs.transition=s}}function xm(t,e,n,r){if(Qc){var i=Lf(t,e,n,r);if(i===null)Th(t,e,r,Yc,n),Oy(t,r);else if(_k(i,t,e,n,r))r.stopPropagation();else if(Oy(t,r),e&4&&-1<xk.indexOf(t)){for(;i!==null;){var s=cl(i);if(s!==null&&P_(s),s=Lf(t,e,n,r),s===null&&Th(t,e,r,Yc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Th(t,e,r,null,n)}}var Yc=null;function Lf(t,e,n,r){if(Yc=null,t=gm(r),t=_i(t),t!==null)if(e=qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yc=t,null}function M_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dk()){case ym:return 1;case A_:return 4;case Gc:case hk:return 16;case k_:return 536870912;default:return 16}default:return 16}}var kr=null,_m=null,xc=null;function L_(){if(xc)return xc;var t,e=_m,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xc=i.slice(t,1<r?1-r:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function Fy(){return!1}function rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ql:Fy,this.isPropagationStopped=Fy,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Em=rn(oo),ll=Fe({},oo,{view:0,detail:0}),Sk=rn(ll),mh,gh,Oo,Wu=Fe({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(mh=t.screenX-Oo.screenX,gh=t.screenY-Oo.screenY):gh=mh=0,Oo=t),mh)},movementY:function(t){return"movementY"in t?t.movementY:gh}}),$y=rn(Wu),Ak=Fe({},Wu,{dataTransfer:0}),kk=rn(Ak),Ck=Fe({},ll,{relatedTarget:0}),yh=rn(Ck),Ik=Fe({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),Pk=rn(Ik),Rk=Fe({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dk=rn(Rk),Vk=Fe({},oo,{data:0}),By=rn(Vk),Nk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ok(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lk[t])?!!e[t]:!1}function bm(){return Ok}var jk=Fe({},ll,{key:function(t){if(t.key){var e=Nk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bm,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fk=rn(jk),$k=Fe({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zy=rn($k),Bk=Fe({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bm}),zk=rn(Bk),Uk=Fe({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hk=rn(Uk),Wk=Fe({},Wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qk=rn(Wk),Gk=[9,13,27,32],Tm=nr&&"CompositionEvent"in window,aa=null;nr&&"documentMode"in document&&(aa=document.documentMode);var Kk=nr&&"TextEvent"in window&&!aa,O_=nr&&(!Tm||aa&&8<aa&&11>=aa),Uy=String.fromCharCode(32),Hy=!1;function j_(t,e){switch(t){case"keyup":return Gk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function Qk(t,e){switch(t){case"compositionend":return F_(e);case"keypress":return e.which!==32?null:(Hy=!0,Uy);case"textInput":return t=e.data,t===Uy&&Hy?null:t;default:return null}}function Yk(t,e){if(fs)return t==="compositionend"||!Tm&&j_(t,e)?(t=L_(),xc=_m=kr=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O_&&e.locale!=="ko"?null:e.data;default:return null}}var Xk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xk[t.type]:e==="textarea"}function $_(t,e,n,r){y_(r),e=Xc(e,"onChange"),0<e.length&&(n=new Em("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var la=null,Na=null;function Jk(t){X_(t,0)}function qu(t){var e=gs(t);if(u_(e))return t}function Zk(t,e){if(t==="change")return e}var B_=!1;if(nr){var vh;if(nr){var wh="oninput"in document;if(!wh){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),wh=typeof qy.oninput=="function"}vh=wh}else vh=!1;B_=vh&&(!document.documentMode||9<document.documentMode)}function Gy(){la&&(la.detachEvent("onpropertychange",z_),Na=la=null)}function z_(t){if(t.propertyName==="value"&&qu(Na)){var e=[];$_(e,Na,t,gm(t)),__(Jk,e)}}function eC(t,e,n){t==="focusin"?(Gy(),la=e,Na=n,la.attachEvent("onpropertychange",z_)):t==="focusout"&&Gy()}function tC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qu(Na)}function nC(t,e){if(t==="click")return qu(e)}function rC(t,e){if(t==="input"||t==="change")return qu(e)}function iC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:iC;function Ma(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vf.call(e,i)||!In(t[i],e[i]))return!1}return!0}function Ky(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qy(t,e){var n=Ky(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ky(n)}}function U_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function H_(){for(var t=window,e=Hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hc(t.document)}return e}function Sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sC(t){var e=H_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U_(n.ownerDocument.documentElement,n)){if(r!==null&&Sm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qy(n,s);var o=Qy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oC=nr&&"documentMode"in document&&11>=document.documentMode,ps=null,Of=null,ca=null,jf=!1;function Yy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jf||ps==null||ps!==Hc(r)||(r=ps,"selectionStart"in r&&Sm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Ma(ca,r)||(ca=r,r=Xc(Of,"onSelect"),0<r.length&&(e=new Em("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ps)))}function Gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},xh={},W_={};nr&&(W_=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Gu(t){if(xh[t])return xh[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in W_)return xh[t]=e[n];return t}var q_=Gu("animationend"),G_=Gu("animationiteration"),K_=Gu("animationstart"),Q_=Gu("transitionend"),Y_=new Map,Xy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(t,e){Y_.set(t,e),Wi(e,[t])}for(var _h=0;_h<Xy.length;_h++){var Eh=Xy[_h],aC=Eh.toLowerCase(),lC=Eh[0].toUpperCase()+Eh.slice(1);ri(aC,"on"+lC)}ri(q_,"onAnimationEnd");ri(G_,"onAnimationIteration");ri(K_,"onAnimationStart");ri("dblclick","onDoubleClick");ri("focusin","onFocus");ri("focusout","onBlur");ri(Q_,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function Jy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ak(r,e,void 0,t),t.currentTarget=null}function X_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;Jy(i,a,u),s=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;Jy(i,a,u),s=c}}}if(qc)throw t=Vf,qc=!1,Vf=null,t}function Pe(t,e){var n=e[Uf];n===void 0&&(n=e[Uf]=new Set);var r=t+"__bubble";n.has(r)||(J_(e,t,2,!1),n.add(r))}function bh(t,e,n){var r=0;e&&(r|=4),J_(n,t,r,e)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[Kl]){t[Kl]=!0,s_.forEach(function(n){n!=="selectionchange"&&(cC.has(n)||bh(n,!1,t),bh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Kl]||(e[Kl]=!0,bh("selectionchange",!1,e))}}function J_(t,e,n,r){switch(M_(e)){case 1:var i=bk;break;case 4:i=Tk;break;default:i=xm}n=i.bind(null,e,n,t),i=void 0,!Df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Th(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_i(a),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}a=a.parentNode}}r=r.return}__(function(){var u=s,d=gm(n),h=[];e:{var p=Y_.get(t);if(p!==void 0){var g=Em,_=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":g=Fk;break;case"focusin":_="focus",g=yh;break;case"focusout":_="blur",g=yh;break;case"beforeblur":case"afterblur":g=yh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$y;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=kk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=zk;break;case q_:case G_:case K_:g=Pk;break;case Q_:g=Hk;break;case"scroll":g=Sk;break;case"wheel":g=qk;break;case"copy":case"cut":case"paste":g=Dk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zy}var b=(e&4)!==0,k=!b&&t==="scroll",x=b?p!==null?p+"Capture":null:p;b=[];for(var v=u,w;v!==null;){w=v;var P=w.stateNode;if(w.tag===5&&P!==null&&(w=P,x!==null&&(P=Pa(v,x),P!=null&&b.push(Oa(v,P,w)))),k)break;v=v.return}0<b.length&&(p=new g(p,_,null,n,d),h.push({event:p,listeners:b}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Pf&&(_=n.relatedTarget||n.fromElement)&&(_i(_)||_[rr]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?_i(_):null,_!==null&&(k=qi(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(b=$y,P="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(b=zy,P="onPointerLeave",x="onPointerEnter",v="pointer"),k=g==null?p:gs(g),w=_==null?p:gs(_),p=new b(P,v+"leave",g,n,d),p.target=k,p.relatedTarget=w,P=null,_i(d)===u&&(b=new b(x,v+"enter",_,n,d),b.target=w,b.relatedTarget=k,P=b),k=P,g&&_)t:{for(b=g,x=_,v=0,w=b;w;w=is(w))v++;for(w=0,P=x;P;P=is(P))w++;for(;0<v-w;)b=is(b),v--;for(;0<w-v;)x=is(x),w--;for(;v--;){if(b===x||x!==null&&b===x.alternate)break t;b=is(b),x=is(x)}b=null}else b=null;g!==null&&Zy(h,p,g,b,!1),_!==null&&k!==null&&Zy(h,k,_,b,!0)}}e:{if(p=u?gs(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var O=Zk;else if(Wy(p))if(B_)O=rC;else{O=tC;var N=eC}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=nC);if(O&&(O=O(t,u))){$_(h,O,n,d);break e}N&&N(t,p,u),t==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&Sf(p,"number",p.value)}switch(N=u?gs(u):window,t){case"focusin":(Wy(N)||N.contentEditable==="true")&&(ps=N,Of=u,ca=null);break;case"focusout":ca=Of=ps=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,Yy(h,n,d);break;case"selectionchange":if(oC)break;case"keydown":case"keyup":Yy(h,n,d)}var T;if(Tm)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else fs?j_(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(O_&&n.locale!=="ko"&&(fs||E!=="onCompositionStart"?E==="onCompositionEnd"&&fs&&(T=L_()):(kr=d,_m="value"in kr?kr.value:kr.textContent,fs=!0)),N=Xc(u,E),0<N.length&&(E=new By(E,t,null,n,d),h.push({event:E,listeners:N}),T?E.data=T:(T=F_(n),T!==null&&(E.data=T)))),(T=Kk?Qk(t,n):Yk(t,n))&&(u=Xc(u,"onBeforeInput"),0<u.length&&(d=new By("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=T))}X_(h,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Pa(t,n),s!=null&&r.unshift(Oa(t,s,i)),s=Pa(t,e),s!=null&&r.push(Oa(t,s,i))),t=t.return}return r}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Pa(n,s),c!=null&&o.unshift(Oa(n,c,a))):i||(c=Pa(n,s),c!=null&&o.push(Oa(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uC=/\r\n?/g,dC=/\u0000|\uFFFD/g;function ev(t){return(typeof t=="string"?t:""+t).replace(uC,`
`).replace(dC,"")}function Ql(t,e,n){if(e=ev(e),ev(t)!==e&&n)throw Error(H(425))}function Jc(){}var Ff=null,$f=null;function Bf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,hC=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(t){return tv.resolve(null).then(t).catch(pC)}:zf;function pC(t){setTimeout(function(){throw t})}function Sh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Va(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),Mn="__reactFiber$"+ao,ja="__reactProps$"+ao,rr="__reactContainer$"+ao,Uf="__reactEvents$"+ao,mC="__reactListeners$"+ao,gC="__reactHandles$"+ao;function _i(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rr]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nv(t);t!==null;){if(n=t[Mn])return n;t=nv(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[Mn]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Ku(t){return t[ja]||null}var Hf=[],ys=-1;function ii(t){return{current:t}}function Ve(t){0>ys||(t.current=Hf[ys],Hf[ys]=null,ys--)}function ke(t,e){ys++,Hf[ys]=t.current,t.current=e}var Yr={},kt=ii(Yr),$t=ii(!1),Vi=Yr;function Os(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(t){return t=t.childContextTypes,t!=null}function Zc(){Ve($t),Ve(kt)}function rv(t,e,n){if(kt.current!==Yr)throw Error(H(168));ke(kt,e),ke($t,n)}function Z_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,ek(t)||"Unknown",i));return Fe({},n,r)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,Vi=kt.current,ke(kt,t),ke($t,$t.current),!0}function iv(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=Z_(t,e,Vi),r.__reactInternalMemoizedMergedChildContext=t,Ve($t),Ve(kt),ke(kt,t)):Ve($t),ke($t,n)}var Qn=null,Qu=!1,Ah=!1;function e2(t){Qn===null?Qn=[t]:Qn.push(t)}function yC(t){Qu=!0,e2(t)}function si(){if(!Ah&&Qn!==null){Ah=!0;var t=0,e=Ee;try{var n=Qn;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qn=null,Qu=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(t+1)),S_(ym,si),i}finally{Ee=e,Ah=!1}}return null}var vs=[],ws=0,tu=null,nu=0,an=[],ln=0,Ni=null,Yn=1,Xn="";function pi(t,e){vs[ws++]=nu,vs[ws++]=tu,tu=t,nu=e}function t2(t,e,n){an[ln++]=Yn,an[ln++]=Xn,an[ln++]=Ni,Ni=t;var r=Yn;t=Xn;var i=32-An(r)-1;r&=~(1<<i),n+=1;var s=32-An(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-An(e)+i|n<<i|r,Xn=s+t}else Yn=1<<s|n<<i|r,Xn=t}function Am(t){t.return!==null&&(pi(t,1),t2(t,1,0))}function km(t){for(;t===tu;)tu=vs[--ws],vs[ws]=null,nu=vs[--ws],vs[ws]=null;for(;t===Ni;)Ni=an[--ln],an[ln]=null,Xn=an[--ln],an[ln]=null,Yn=an[--ln],an[ln]=null}var Xt=null,Qt=null,Ne=!1,bn=null;function n2(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xt=t,Qt=null,!0):!1;default:return!1}}function Wf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qf(t){if(Ne){var e=Qt;if(e){var n=e;if(!sv(t,e)){if(Wf(t))throw Error(H(418));e=Nr(n.nextSibling);var r=Xt;e&&sv(t,e)?n2(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Xt=t)}}else{if(Wf(t))throw Error(H(418));t.flags=t.flags&-4097|2,Ne=!1,Xt=t}}}function ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xt=t}function Yl(t){if(t!==Xt)return!1;if(!Ne)return ov(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bf(t.type,t.memoizedProps)),e&&(e=Qt)){if(Wf(t))throw r2(),Error(H(418));for(;e;)n2(t,e),e=Nr(e.nextSibling)}if(ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Xt?Nr(t.stateNode.nextSibling):null;return!0}function r2(){for(var t=Qt;t;)t=Nr(t.nextSibling)}function js(){Qt=Xt=null,Ne=!1}function Cm(t){bn===null?bn=[t]:bn.push(t)}var vC=dr.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Xl(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function av(t){var e=t._init;return e(t._payload)}function i2(t){function e(x,v){if(t){var w=x.deletions;w===null?(x.deletions=[v],x.flags|=16):w.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=jr(x,v),x.index=0,x.sibling=null,x}function s(x,v,w){return x.index=w,t?(w=x.alternate,w!==null?(w=w.index,w<v?(x.flags|=2,v):w):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function a(x,v,w,P){return v===null||v.tag!==6?(v=Vh(w,x.mode,P),v.return=x,v):(v=i(v,w),v.return=x,v)}function c(x,v,w,P){var O=w.type;return O===hs?d(x,v,w.props.children,P,w.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===_r&&av(O)===v.type)?(P=i(v,w.props),P.ref=jo(x,v,w),P.return=x,P):(P=Cc(w.type,w.key,w.props,null,x.mode,P),P.ref=jo(x,v,w),P.return=x,P)}function u(x,v,w,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Nh(w,x.mode,P),v.return=x,v):(v=i(v,w.children||[]),v.return=x,v)}function d(x,v,w,P,O){return v===null||v.tag!==7?(v=Ii(w,x.mode,P,O),v.return=x,v):(v=i(v,w),v.return=x,v)}function h(x,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vh(""+v,x.mode,w),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $l:return w=Cc(v.type,v.key,v.props,null,x.mode,w),w.ref=jo(x,null,v),w.return=x,w;case ds:return v=Nh(v,x.mode,w),v.return=x,v;case _r:var P=v._init;return h(x,P(v._payload),w)}if(Xo(v)||Vo(v))return v=Ii(v,x.mode,w,null),v.return=x,v;Xl(x,v)}return null}function p(x,v,w,P){var O=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return O!==null?null:a(x,v,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $l:return w.key===O?c(x,v,w,P):null;case ds:return w.key===O?u(x,v,w,P):null;case _r:return O=w._init,p(x,v,O(w._payload),P)}if(Xo(w)||Vo(w))return O!==null?null:d(x,v,w,P,null);Xl(x,w)}return null}function g(x,v,w,P,O){if(typeof P=="string"&&P!==""||typeof P=="number")return x=x.get(w)||null,a(v,x,""+P,O);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case $l:return x=x.get(P.key===null?w:P.key)||null,c(v,x,P,O);case ds:return x=x.get(P.key===null?w:P.key)||null,u(v,x,P,O);case _r:var N=P._init;return g(x,v,w,N(P._payload),O)}if(Xo(P)||Vo(P))return x=x.get(w)||null,d(v,x,P,O,null);Xl(v,P)}return null}function _(x,v,w,P){for(var O=null,N=null,T=v,E=v=0,A=null;T!==null&&E<w.length;E++){T.index>E?(A=T,T=null):A=T.sibling;var C=p(x,T,w[E],P);if(C===null){T===null&&(T=A);break}t&&T&&C.alternate===null&&e(x,T),v=s(C,v,E),N===null?O=C:N.sibling=C,N=C,T=A}if(E===w.length)return n(x,T),Ne&&pi(x,E),O;if(T===null){for(;E<w.length;E++)T=h(x,w[E],P),T!==null&&(v=s(T,v,E),N===null?O=T:N.sibling=T,N=T);return Ne&&pi(x,E),O}for(T=r(x,T);E<w.length;E++)A=g(T,x,E,w[E],P),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?E:A.key),v=s(A,v,E),N===null?O=A:N.sibling=A,N=A);return t&&T.forEach(function(D){return e(x,D)}),Ne&&pi(x,E),O}function b(x,v,w,P){var O=Vo(w);if(typeof O!="function")throw Error(H(150));if(w=O.call(w),w==null)throw Error(H(151));for(var N=O=null,T=v,E=v=0,A=null,C=w.next();T!==null&&!C.done;E++,C=w.next()){T.index>E?(A=T,T=null):A=T.sibling;var D=p(x,T,C.value,P);if(D===null){T===null&&(T=A);break}t&&T&&D.alternate===null&&e(x,T),v=s(D,v,E),N===null?O=D:N.sibling=D,N=D,T=A}if(C.done)return n(x,T),Ne&&pi(x,E),O;if(T===null){for(;!C.done;E++,C=w.next())C=h(x,C.value,P),C!==null&&(v=s(C,v,E),N===null?O=C:N.sibling=C,N=C);return Ne&&pi(x,E),O}for(T=r(x,T);!C.done;E++,C=w.next())C=g(T,x,E,C.value,P),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?E:C.key),v=s(C,v,E),N===null?O=C:N.sibling=C,N=C);return t&&T.forEach(function(M){return e(x,M)}),Ne&&pi(x,E),O}function k(x,v,w,P){if(typeof w=="object"&&w!==null&&w.type===hs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case $l:e:{for(var O=w.key,N=v;N!==null;){if(N.key===O){if(O=w.type,O===hs){if(N.tag===7){n(x,N.sibling),v=i(N,w.props.children),v.return=x,x=v;break e}}else if(N.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===_r&&av(O)===N.type){n(x,N.sibling),v=i(N,w.props),v.ref=jo(x,N,w),v.return=x,x=v;break e}n(x,N);break}else e(x,N);N=N.sibling}w.type===hs?(v=Ii(w.props.children,x.mode,P,w.key),v.return=x,x=v):(P=Cc(w.type,w.key,w.props,null,x.mode,P),P.ref=jo(x,v,w),P.return=x,x=P)}return o(x);case ds:e:{for(N=w.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(x,v.sibling),v=i(v,w.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=Nh(w,x.mode,P),v.return=x,x=v}return o(x);case _r:return N=w._init,k(x,v,N(w._payload),P)}if(Xo(w))return _(x,v,w,P);if(Vo(w))return b(x,v,w,P);Xl(x,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,w),v.return=x,x=v):(n(x,v),v=Vh(w,x.mode,P),v.return=x,x=v),o(x)):n(x,v)}return k}var Fs=i2(!0),s2=i2(!1),ru=ii(null),iu=null,xs=null,Im=null;function Pm(){Im=xs=iu=null}function Rm(t){var e=ru.current;Ve(ru),t._currentValue=e}function Gf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){iu=t,Im=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(Im!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(iu===null)throw Error(H(308));xs=t,iu.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Ei=null;function Dm(t){Ei===null?Ei=[t]:Ei.push(t)}function o2(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Dm(e)):(n.next=i.next,i.next=n),e.interleaved=n,ir(t,r)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function Vm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ir(t,n)}return i=r.interleaved,i===null?(e.next=e,Dm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ir(t,n)}function Ec(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}function lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,r){var i=t.updateQueue;Er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(s!==null){var h=i.baseState;o=0,d=u=c=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,b=a;switch(p=e,g=n,b.tag){case 1:if(_=b.payload,typeof _=="function"){h=_.call(g,h,p);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=b.payload,p=typeof _=="function"?_.call(g,h,p):_,p==null)break e;h=Fe({},h,p);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,c=h):d=d.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Li|=o,t.lanes=o,t.memoizedState=h}}function cv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var ul={},jn=ii(ul),Fa=ii(ul),$a=ii(ul);function bi(t){if(t===ul)throw Error(H(174));return t}function Nm(t,e){switch(ke($a,e),ke(Fa,t),ke(jn,ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kf(e,t)}Ve(jn),ke(jn,e)}function $s(){Ve(jn),Ve(Fa),Ve($a)}function l2(t){bi($a.current);var e=bi(jn.current),n=kf(e,t.type);e!==n&&(ke(Fa,t),ke(jn,n))}function Mm(t){Fa.current===t&&(Ve(jn),Ve(Fa))}var Le=ii(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kh=[];function Lm(){for(var t=0;t<kh.length;t++)kh[t]._workInProgressVersionPrimary=null;kh.length=0}var bc=dr.ReactCurrentDispatcher,Ch=dr.ReactCurrentBatchConfig,Mi=0,je=null,tt=null,st=null,au=!1,ua=!1,Ba=0,wC=0;function _t(){throw Error(H(321))}function Om(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function jm(t,e,n,r,i,s){if(Mi=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bc.current=t===null||t.memoizedState===null?bC:TC,t=n(r,i),ua){s=0;do{if(ua=!1,Ba=0,25<=s)throw Error(H(301));s+=1,st=tt=null,e.updateQueue=null,bc.current=SC,t=n(r,i)}while(ua)}if(bc.current=lu,e=tt!==null&&tt.next!==null,Mi=0,st=tt=je=null,au=!1,e)throw Error(H(300));return t}function Fm(){var t=Ba!==0;return Ba=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?je.memoizedState=st=t:st=st.next=t,st}function mn(){if(tt===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=st===null?je.memoizedState:st.next;if(e!==null)st=e,tt=t;else{if(t===null)throw Error(H(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},st===null?je.memoizedState=st=t:st=st.next=t}return st}function za(t,e){return typeof e=="function"?e(t):e}function Ih(t){var e=mn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=tt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,c=null,u=s;do{var d=u.lane;if((Mi&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,o=r):c=c.next=h,je.lanes|=d,Li|=d}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=a,In(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,je.lanes|=s,Li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ph(t){var e=mn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function c2(){}function u2(t,e){var n=je,r=mn(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,$m(f2.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Ua(9,h2.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(H(349));Mi&30||d2(n,e,i)}return i}function d2(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function h2(t,e,n,r){e.value=n,e.getSnapshot=r,p2(e)&&m2(t)}function f2(t,e,n){return n(function(){p2(e)&&m2(t)})}function p2(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function m2(t){var e=ir(t,1);e!==null&&kn(e,t,1,-1)}function uv(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=EC.bind(null,je,t),[e.memoizedState,t]}function Ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function g2(){return mn().memoizedState}function Tc(t,e,n,r){var i=Vn();je.flags|=t,i.memoizedState=Ua(1|e,n,void 0,r===void 0?null:r)}function Yu(t,e,n,r){var i=mn();r=r===void 0?null:r;var s=void 0;if(tt!==null){var o=tt.memoizedState;if(s=o.destroy,r!==null&&Om(r,o.deps)){i.memoizedState=Ua(e,n,s,r);return}}je.flags|=t,i.memoizedState=Ua(1|e,n,s,r)}function dv(t,e){return Tc(8390656,8,t,e)}function $m(t,e){return Yu(2048,8,t,e)}function y2(t,e){return Yu(4,2,t,e)}function v2(t,e){return Yu(4,4,t,e)}function w2(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function x2(t,e,n){return n=n!=null?n.concat([t]):null,Yu(4,4,w2.bind(null,e,t),n)}function Bm(){}function _2(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Om(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function E2(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Om(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function b2(t,e,n){return Mi&21?(In(n,e)||(n=C_(),je.lanes|=n,Li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function xC(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Ch.transition;Ch.transition={};try{t(!1),e()}finally{Ee=n,Ch.transition=r}}function T2(){return mn().memoizedState}function _C(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S2(t))A2(e,n);else if(n=o2(t,e,n,r),n!==null){var i=Nt();kn(n,t,r,i),k2(n,e,r)}}function EC(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S2(t))A2(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,In(a,o)){var c=e.interleaved;c===null?(i.next=i,Dm(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=o2(t,e,i,r),n!==null&&(i=Nt(),kn(n,t,r,i),k2(n,e,r))}}function S2(t){var e=t.alternate;return t===je||e!==null&&e===je}function A2(t,e){ua=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function k2(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}var lu={readContext:pn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},bC={readContext:pn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:dv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4194308,4,w2.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tc(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_C.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:uv,useDebugValue:Bm,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=uv(!1),e=t[0];return t=xC.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=Vn();if(Ne){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),lt===null)throw Error(H(349));Mi&30||d2(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dv(f2.bind(null,r,s,t),[t]),r.flags|=2048,Ua(9,h2.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=lt.identifierPrefix;if(Ne){var n=Xn,r=Yn;n=(r&~(1<<32-An(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TC={readContext:pn,useCallback:_2,useContext:pn,useEffect:$m,useImperativeHandle:x2,useInsertionEffect:y2,useLayoutEffect:v2,useMemo:E2,useReducer:Ih,useRef:g2,useState:function(){return Ih(za)},useDebugValue:Bm,useDeferredValue:function(t){var e=mn();return b2(e,tt.memoizedState,t)},useTransition:function(){var t=Ih(za)[0],e=mn().memoizedState;return[t,e]},useMutableSource:c2,useSyncExternalStore:u2,useId:T2,unstable_isNewReconciler:!1},SC={readContext:pn,useCallback:_2,useContext:pn,useEffect:$m,useImperativeHandle:x2,useInsertionEffect:y2,useLayoutEffect:v2,useMemo:E2,useReducer:Ph,useRef:g2,useState:function(){return Ph(za)},useDebugValue:Bm,useDeferredValue:function(t){var e=mn();return tt===null?e.memoizedState=t:b2(e,tt.memoizedState,t)},useTransition:function(){var t=Ph(za)[0],e=mn().memoizedState;return[t,e]},useMutableSource:c2,useSyncExternalStore:u2,useId:T2,unstable_isNewReconciler:!1};function _n(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xu={isMounted:function(t){return(t=t._reactInternals)?qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Or(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(kn(e,t,i,r),Ec(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Or(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(kn(e,t,i,r),Ec(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=Or(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mr(t,i,r),e!==null&&(kn(e,t,r,n),Ec(e,t,r))}};function hv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,r)||!Ma(i,s):!0}function C2(t,e,n){var r=!1,i=Yr,s=e.contextType;return typeof s=="object"&&s!==null?s=pn(s):(i=Bt(e)?Vi:kt.current,r=e.contextTypes,s=(r=r!=null)?Os(t,i):Yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function fv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xu.enqueueReplaceState(e,e.state,null)}function Qf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pn(s):(s=Bt(e)?Vi:kt.current,i.context=Os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xu.enqueueReplaceState(i,i.state,null),su(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",r=e;do n+=Z5(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Rh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AC=typeof WeakMap=="function"?WeakMap:Map;function I2(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,op=r),Yf(t,e)},n}function P2(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yf(t,e),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$C.bind(null,t,e,n),e.then(t,t))}function mv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var kC=dr.ReactCurrentOwner,Ft=!1;function Vt(t,e,n,r){e.child=t===null?s2(e,null,n,r):Fs(e,t.child,n,r)}function yv(t,e,n,r,i){n=n.render;var s=e.ref;return Ds(e,i),r=jm(t,e,n,r,s,i),n=Fm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sr(t,e,i)):(Ne&&n&&Am(e),e.flags|=1,Vt(t,e,r,i),e.child)}function vv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Qm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,R2(t,e,s,r,i)):(t=Cc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(o,r)&&t.ref===e.ref)return sr(t,e,i)}return e.flags|=1,t=jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function R2(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ma(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,sr(t,e,i)}return Xf(t,e,n,r,i)}function D2(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Es,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(Es,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(Es,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(Es,Kt),Kt|=r;return Vt(t,e,i,n),e.child}function V2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xf(t,e,n,r,i){var s=Bt(n)?Vi:kt.current;return s=Os(e,s),Ds(e,i),n=jm(t,e,n,r,s,i),r=Fm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sr(t,e,i)):(Ne&&r&&Am(e),e.flags|=1,Vt(t,e,n,i),e.child)}function wv(t,e,n,r,i){if(Bt(n)){var s=!0;eu(e)}else s=!1;if(Ds(e,i),e.stateNode===null)Sc(t,e),C2(e,n,r),Qf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=pn(u):(u=Bt(n)?Vi:kt.current,u=Os(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==u)&&fv(e,o,r,u),Er=!1;var p=e.memoizedState;o.state=p,su(e,r,o,i),c=e.memoizedState,a!==r||p!==c||$t.current||Er?(typeof d=="function"&&(Kf(e,n,d,r),c=e.memoizedState),(a=Er||hv(e,n,a,r,p,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a2(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_n(e.type,a),o.props=u,h=e.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=pn(c):(c=Bt(n)?Vi:kt.current,c=Os(e,c));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==c)&&fv(e,o,r,c),Er=!1,p=e.memoizedState,o.state=p,su(e,r,o,i);var _=e.memoizedState;a!==h||p!==_||$t.current||Er?(typeof g=="function"&&(Kf(e,n,g,r),_=e.memoizedState),(u=Er||hv(e,n,u,r,p,_,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Jf(t,e,n,r,s,i)}function Jf(t,e,n,r,i,s){V2(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&iv(e,n,!1),sr(t,e,s);r=e.stateNode,kC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=r.state,i&&iv(e,n,!0),e.child}function N2(t){var e=t.stateNode;e.pendingContext?rv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rv(t,e.context,!1),Nm(t,e.containerInfo)}function xv(t,e,n,r,i){return js(),Cm(i),e.flags|=256,Vt(t,e,n,r),e.child}var Zf={dehydrated:null,treeContext:null,retryLane:0};function ep(t){return{baseLanes:t,cachePool:null,transitions:null}}function M2(t,e,n){var r=e.pendingProps,i=Le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Le,i&1),t===null)return qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ed(o,r,0,null),t=Ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ep(n),e.memoizedState=Zf,t):zm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return CC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=jr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=Ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ep(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zf,r}return s=t.child,t=s.sibling,r=jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zm(t,e){return e=ed({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Jl(t,e,n,r){return r!==null&&Cm(r),Fs(e,t.child,null,n),t=zm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Rh(Error(H(422))),Jl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ed({mode:"visible",children:r.children},i,0,null),s=Ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=ep(o),e.memoizedState=Zf,s);if(!(e.mode&1))return Jl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=Rh(s,r,void 0),Jl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ir(t,i),kn(r,t,i,-1))}return Km(),r=Rh(Error(H(421))),Jl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=Nr(i.nextSibling),Xt=e,Ne=!0,bn=null,t!==null&&(an[ln++]=Yn,an[ln++]=Xn,an[ln++]=Ni,Yn=t.id,Xn=t.overflow,Ni=e),e=zm(e,r.children),e.flags|=4096,e)}function _v(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gf(t.return,e,n)}function Dh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function L2(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Vt(t,e,r.children,n),r=Le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_v(t,n,e);else if(t.tag===19)_v(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dh(e,!0,n,null,s);break;case"together":Dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IC(t,e,n){switch(e.tag){case 3:N2(e),js();break;case 5:l2(e);break;case 1:Bt(e.type)&&eu(e);break;case 4:Nm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(ru,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Le,Le.current&1),e.flags|=128,null):n&e.child.childLanes?M2(t,e,n):(ke(Le,Le.current&1),t=sr(t,e,n),t!==null?t.sibling:null);ke(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return L2(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,D2(t,e,n)}return sr(t,e,n)}var O2,tp,j2,F2;O2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tp=function(){};j2=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,bi(jn.current);var s=null;switch(n){case"input":i=bf(t,i),r=bf(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=Af(t,i),r=Af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jc)}Cf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Pe("scroll",t),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};F2=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fo(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function PC(t,e,n){var r=e.pendingProps;switch(km(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Bt(e.type)&&Zc(),Et(e),null;case 3:return r=e.stateNode,$s(),Ve($t),Ve(kt),Lm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&(cp(bn),bn=null))),tp(t,e),Et(e),null;case 5:Mm(e);var i=bi($a.current);if(n=e.type,t!==null&&e.stateNode!=null)j2(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Et(e),null}if(t=bi(jn.current),Yl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mn]=e,r[ja]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Zo.length;i++)Pe(Zo[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Py(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":Dy(r,s),Pe("invalid",r)}Cf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ql(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ql(r.textContent,a,t),i=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Bl(r),Ry(r,s,!0);break;case"textarea":Bl(r),Vy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=f_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mn]=e,t[ja]=r,O2(t,e,!1,!1),e.stateNode=t;e:{switch(o=If(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zo.length;i++)Pe(Zo[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":Py(t,r),i=bf(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":Dy(t,r),i=Af(t,r),Pe("invalid",t);break;default:i=r}Cf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?g_(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&p_(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ia(t,c):typeof c=="number"&&Ia(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Pe("scroll",t):c!=null&&hm(t,s,c,o))}switch(n){case"input":Bl(t),Ry(t,r,!1);break;case"textarea":Bl(t),Vy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)F2(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=bi($a.current),bi(jn.current),Yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(s=r.nodeValue!==n)&&(t=Xt,t!==null))switch(t.tag){case 3:Ql(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ql(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return Et(e),null;case 13:if(Ve(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Qt!==null&&e.mode&1&&!(e.flags&128))r2(),js(),e.flags|=98560,s=!1;else if(s=Yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[Mn]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else bn!==null&&(cp(bn),bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Le.current&1?nt===0&&(nt=3):Km())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return $s(),tp(t,e),t===null&&La(e.stateNode.containerInfo),Et(e),null;case 10:return Rm(e.type._context),Et(e),null;case 17:return Bt(e.type)&&Zc(),Et(e),null;case 19:if(Ve(Le),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fo(s,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ou(t),o!==null){for(e.flags|=128,Fo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Le,Le.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ge()>zs&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304)}else{if(!r)if(t=ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return Et(e),null}else 2*Ge()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ge(),e.sibling=null,n=Le.current,ke(Le,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return Gm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function RC(t,e){switch(km(e),e.tag){case 1:return Bt(e.type)&&Zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),Ve($t),Ve(kt),Lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mm(e),null;case 13:if(Ve(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ve(Le),null;case 4:return $s(),null;case 10:return Rm(e.type._context),null;case 22:case 23:return Gm(),null;case 24:return null;default:return null}}var Zl=!1,St=!1,DC=typeof WeakSet=="function"?WeakSet:Set,Q=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function np(t,e,n){try{n()}catch(r){ze(t,e,r)}}var Ev=!1;function VC(t,e){if(Ff=Qc,t=H_(),Sm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,d=0,h=t,p=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(c=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===t)break t;if(p===n&&++u===i&&(a=o),p===s&&++d===r&&(c=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for($f={focusedElem:t,selectionRange:n},Qc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var b=_.memoizedProps,k=_.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?b:_n(e.type,b),k);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(P){ze(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return _=Ev,Ev=!1,_}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&np(e,n,s)}i=i.next}while(i!==r)}}function Ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $2(t){var e=t.alternate;e!==null&&(t.alternate=null,$2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[ja],delete e[Uf],delete e[mC],delete e[gC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B2(t){return t.tag===5||t.tag===3||t.tag===4}function bv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jc));else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}function sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sp(t,e,n),t=t.sibling;t!==null;)sp(t,e,n),t=t.sibling}var dt=null,En=!1;function yr(t,e,n){for(n=n.child;n!==null;)z2(t,e,n),n=n.sibling}function z2(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Hu,n)}catch{}switch(n.tag){case 5:St||_s(n,e);case 6:var r=dt,i=En;dt=null,yr(t,e,n),dt=r,En=i,dt!==null&&(En?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(En?(t=dt,n=n.stateNode,t.nodeType===8?Sh(t.parentNode,n):t.nodeType===1&&Sh(t,n),Va(t)):Sh(dt,n.stateNode));break;case 4:r=dt,i=En,dt=n.stateNode.containerInfo,En=!0,yr(t,e,n),dt=r,En=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&np(n,e,o),i=i.next}while(i!==r)}yr(t,e,n);break;case 1:if(!St&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,e,a)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,yr(t,e,n),St=r):yr(t,e,n);break;default:yr(t,e,n)}}function Tv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DC),e.forEach(function(r){var i=zC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dt=a.stateNode,En=!1;break e;case 3:dt=a.stateNode.containerInfo,En=!0;break e;case 4:dt=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(dt===null)throw Error(H(160));z2(s,o,i),dt=null,En=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ze(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U2(e,t),e=e.sibling}function U2(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Dn(t),r&4){try{da(3,t,t.return),Ju(3,t)}catch(b){ze(t,t.return,b)}try{da(5,t,t.return)}catch(b){ze(t,t.return,b)}}break;case 1:xn(e,t),Dn(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(xn(e,t),Dn(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{Ia(i,"")}catch(b){ze(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&d_(i,s),If(a,o);var u=If(a,s);for(o=0;o<c.length;o+=2){var d=c[o],h=c[o+1];d==="style"?g_(i,h):d==="dangerouslySetInnerHTML"?p_(i,h):d==="children"?Ia(i,h):hm(i,d,h,u)}switch(a){case"input":Tf(i,s);break;case"textarea":h_(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Cs(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Cs(i,!!s.multiple,s.defaultValue,!0):Cs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ja]=s}catch(b){ze(t,t.return,b)}}break;case 6:if(xn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){ze(t,t.return,b)}}break;case 3:if(xn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(b){ze(t,t.return,b)}break;case 4:xn(e,t),Dn(t);break;case 13:xn(e,t),Dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wm=Ge())),r&4&&Tv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(St=(u=St)||d,xn(e,t),St=u):xn(e,t),Dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(h=Q=d;Q!==null;){switch(p=Q,g=p.child,p.tag){case 0:case 11:case 14:case 15:da(4,p,p.return);break;case 1:_s(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(b){ze(r,n,b)}}break;case 5:_s(p,p.return);break;case 22:if(p.memoizedState!==null){Av(h);continue}}g!==null?(g.return=p,Q=g):Av(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=m_("display",o))}catch(b){ze(t,t.return,b)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(b){ze(t,t.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:xn(e,t),Dn(t),r&4&&Tv(t);break;case 21:break;default:xn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B2(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ia(i,""),r.flags&=-33);var s=bv(t);sp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bv(t);ip(t,a,o);break;default:throw Error(H(161))}}catch(c){ze(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NC(t,e,n){Q=t,H2(t)}function H2(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zl;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||St;a=Zl;var u=St;if(Zl=o,(St=c)&&!u)for(Q=i;Q!==null;)o=Q,c=o.child,o.tag===22&&o.memoizedState!==null?kv(i):c!==null?(c.return=o,Q=c):kv(i);for(;s!==null;)Q=s,H2(s),s=s.sibling;Q=i,Zl=a,St=u}Sv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Sv(t)}}function Sv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||Ju(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Va(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}St||e.flags&512&&rp(e)}catch(p){ze(e,e.return,p)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Av(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function kv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ju(4,e)}catch(c){ze(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){ze(e,i,c)}}var s=e.return;try{rp(e)}catch(c){ze(e,s,c)}break;case 5:var o=e.return;try{rp(e)}catch(c){ze(e,o,c)}}}catch(c){ze(e,e.return,c)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var MC=Math.ceil,cu=dr.ReactCurrentDispatcher,Um=dr.ReactCurrentOwner,dn=dr.ReactCurrentBatchConfig,me=0,lt=null,Xe=null,pt=0,Kt=0,Es=ii(0),nt=0,Ha=null,Li=0,Zu=0,Hm=0,ha=null,Ot=null,Wm=0,zs=1/0,Gn=null,uu=!1,op=null,Lr=null,ec=!1,Cr=null,du=0,fa=0,ap=null,Ac=-1,kc=0;function Nt(){return me&6?Ge():Ac!==-1?Ac:Ac=Ge()}function Or(t){return t.mode&1?me&2&&pt!==0?pt&-pt:vC.transition!==null?(kc===0&&(kc=C_()),kc):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:M_(t.type)),t):1}function kn(t,e,n,r){if(50<fa)throw fa=0,ap=null,Error(H(185));al(t,n,r),(!(me&2)||t!==lt)&&(t===lt&&(!(me&2)&&(Zu|=n),nt===4&&Sr(t,pt)),zt(t,r),n===1&&me===0&&!(e.mode&1)&&(zs=Ge()+500,Qu&&si()))}function zt(t,e){var n=t.callbackNode;vk(t,e);var r=Kc(t,t===lt?pt:0);if(r===0)n!==null&&Ly(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ly(n),e===1)t.tag===0?yC(Cv.bind(null,t)):e2(Cv.bind(null,t)),fC(function(){!(me&6)&&si()}),n=null;else{switch(I_(r)){case 1:n=ym;break;case 4:n=A_;break;case 16:n=Gc;break;case 536870912:n=k_;break;default:n=Gc}n=J2(n,W2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W2(t,e){if(Ac=-1,kc=0,me&6)throw Error(H(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var r=Kc(t,t===lt?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hu(t,r);else{e=r;var i=me;me|=2;var s=G2();(lt!==t||pt!==e)&&(Gn=null,zs=Ge()+500,Ci(t,e));do try{jC();break}catch(a){q2(t,a)}while(1);Pm(),cu.current=s,me=i,Xe!==null?e=0:(lt=null,pt=0,e=nt)}if(e!==0){if(e===2&&(i=Nf(t),i!==0&&(r=i,e=lp(t,i))),e===1)throw n=Ha,Ci(t,0),Sr(t,r),zt(t,Ge()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!LC(i)&&(e=hu(t,r),e===2&&(s=Nf(t),s!==0&&(r=s,e=lp(t,s))),e===1))throw n=Ha,Ci(t,0),Sr(t,r),zt(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:mi(t,Ot,Gn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=Wm+500-Ge(),10<e)){if(Kc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zf(mi.bind(null,t,Ot,Gn),e);break}mi(t,Ot,Gn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-An(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MC(r/1960))-r,10<r){t.timeoutHandle=zf(mi.bind(null,t,Ot,Gn),r);break}mi(t,Ot,Gn);break;case 5:mi(t,Ot,Gn);break;default:throw Error(H(329))}}}return zt(t,Ge()),t.callbackNode===n?W2.bind(null,t):null}function lp(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(Ci(t,e).flags|=256),t=hu(t,e),t!==2&&(e=Ot,Ot=n,e!==null&&cp(e)),t}function cp(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function LC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~Hm,e&=~Zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-An(e),r=1<<n;t[n]=-1,e&=~r}}function Cv(t){if(me&6)throw Error(H(327));Vs();var e=Kc(t,0);if(!(e&1))return zt(t,Ge()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var r=Nf(t);r!==0&&(e=r,n=lp(t,r))}if(n===1)throw n=Ha,Ci(t,0),Sr(t,e),zt(t,Ge()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mi(t,Ot,Gn),zt(t,Ge()),null}function qm(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(zs=Ge()+500,Qu&&si())}}function Oi(t){Cr!==null&&Cr.tag===0&&!(me&6)&&Vs();var e=me;me|=1;var n=dn.transition,r=Ee;try{if(dn.transition=null,Ee=1,t)return t()}finally{Ee=r,dn.transition=n,me=e,!(me&6)&&si()}}function Gm(){Kt=Es.current,Ve(Es)}function Ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hC(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(km(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zc();break;case 3:$s(),Ve($t),Ve(kt),Lm();break;case 5:Mm(r);break;case 4:$s();break;case 13:Ve(Le);break;case 19:Ve(Le);break;case 10:Rm(r.type._context);break;case 22:case 23:Gm()}n=n.return}if(lt=t,Xe=t=jr(t.current,null),pt=Kt=e,nt=0,Ha=null,Hm=Zu=Li=0,Ot=ha=null,Ei!==null){for(e=0;e<Ei.length;e++)if(n=Ei[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ei=null}return t}function q2(t,e){do{var n=Xe;try{if(Pm(),bc.current=lu,au){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}au=!1}if(Mi=0,st=tt=je=null,ua=!1,Ba=0,Um.current=null,n===null||n.return===null){nt=1,Ha=e,Xe=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=pt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=mv(o);if(g!==null){g.flags&=-257,gv(g,o,a,s,e),g.mode&1&&pv(s,u,e),e=g,c=u;var _=e.updateQueue;if(_===null){var b=new Set;b.add(c),e.updateQueue=b}else _.add(c);break e}else{if(!(e&1)){pv(s,u,e),Km();break e}c=Error(H(426))}}else if(Ne&&a.mode&1){var k=mv(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),gv(k,o,a,s,e),Cm(Bs(c,a));break e}}s=c=Bs(c,a),nt!==4&&(nt=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=I2(s,c,e);lv(s,x);break e;case 1:a=c;var v=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Lr===null||!Lr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=P2(s,a,e);lv(s,P);break e}}s=s.return}while(s!==null)}Q2(n)}catch(O){e=O,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(1)}function G2(){var t=cu.current;return cu.current=lu,t===null?lu:t}function Km(){(nt===0||nt===3||nt===2)&&(nt=4),lt===null||!(Li&268435455)&&!(Zu&268435455)||Sr(lt,pt)}function hu(t,e){var n=me;me|=2;var r=G2();(lt!==t||pt!==e)&&(Gn=null,Ci(t,e));do try{OC();break}catch(i){q2(t,i)}while(1);if(Pm(),me=n,cu.current=r,Xe!==null)throw Error(H(261));return lt=null,pt=0,nt}function OC(){for(;Xe!==null;)K2(Xe)}function jC(){for(;Xe!==null&&!ck();)K2(Xe)}function K2(t){var e=X2(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?Q2(t):Xe=e,Um.current=null}function Q2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RC(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Xe=null;return}}else if(n=PC(n,e,Kt),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);nt===0&&(nt=5)}function mi(t,e,n){var r=Ee,i=dn.transition;try{dn.transition=null,Ee=1,FC(t,e,n,r)}finally{dn.transition=i,Ee=r}return null}function FC(t,e,n,r){do Vs();while(Cr!==null);if(me&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wk(t,s),t===lt&&(Xe=lt=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ec||(ec=!0,J2(Gc,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dn.transition,dn.transition=null;var o=Ee;Ee=1;var a=me;me|=4,Um.current=null,VC(t,n),U2(n,t),sC($f),Qc=!!Ff,$f=Ff=null,t.current=n,NC(n),uk(),me=a,Ee=o,dn.transition=s}else t.current=n;if(ec&&(ec=!1,Cr=t,du=i),s=t.pendingLanes,s===0&&(Lr=null),fk(n.stateNode),zt(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uu)throw uu=!1,t=op,op=null,t;return du&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===ap?fa++:(fa=0,ap=t):fa=0,si(),null}function Vs(){if(Cr!==null){var t=I_(du),e=dn.transition,n=Ee;try{if(dn.transition=null,Ee=16>t?16:t,Cr===null)var r=!1;else{if(t=Cr,Cr=null,du=0,me&6)throw Error(H(331));var i=me;for(me|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(Q=u;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:da(8,d,s)}var h=d.child;if(h!==null)h.return=d,Q=h;else for(;Q!==null;){d=Q;var p=d.sibling,g=d.return;if($2(d),d===u){Q=null;break}if(p!==null){p.return=g,Q=p;break}Q=g}}}var _=s.alternate;if(_!==null){var b=_.child;if(b!==null){_.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,Q=x;break e}Q=s.return}}var v=t.current;for(Q=v;Q!==null;){o=Q;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,Q=w;else e:for(o=v;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ju(9,a)}}catch(O){ze(a,a.return,O)}if(a===o){Q=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,Q=P;break e}Q=a.return}}if(me=i,si(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Hu,t)}catch{}r=!0}return r}finally{Ee=n,dn.transition=e}}return!1}function Iv(t,e,n){e=Bs(n,e),e=I2(t,e,1),t=Mr(t,e,1),e=Nt(),t!==null&&(al(t,1,e),zt(t,e))}function ze(t,e,n){if(t.tag===3)Iv(t,t,n);else for(;e!==null;){if(e.tag===3){Iv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){t=Bs(n,t),t=P2(e,t,1),e=Mr(e,t,1),t=Nt(),e!==null&&(al(e,1,t),zt(e,t));break}}e=e.return}}function $C(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(pt&n)===n&&(nt===4||nt===3&&(pt&130023424)===pt&&500>Ge()-Wm?Ci(t,0):Hm|=n),zt(t,e)}function Y2(t,e){e===0&&(t.mode&1?(e=Hl,Hl<<=1,!(Hl&130023424)&&(Hl=4194304)):e=1);var n=Nt();t=ir(t,e),t!==null&&(al(t,e,n),zt(t,n))}function BC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y2(t,n)}function zC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),Y2(t,n)}var X2;X2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,IC(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,Ne&&e.flags&1048576&&t2(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sc(t,e),t=e.pendingProps;var i=Os(e,kt.current);Ds(e,n),i=jm(null,e,r,t,i,n);var s=Fm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(s=!0,eu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vm(e),i.updater=Xu,e.stateNode=i,i._reactInternals=e,Qf(e,r,t,n),e=Jf(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&Am(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HC(r),t=_n(r,t),i){case 0:e=Xf(null,e,r,t,n);break e;case 1:e=wv(null,e,r,t,n);break e;case 11:e=yv(null,e,r,t,n);break e;case 14:e=vv(null,e,r,_n(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Xf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),wv(t,e,r,i,n);case 3:e:{if(N2(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a2(t,e),su(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bs(Error(H(423)),e),e=xv(t,e,r,n,i);break e}else if(r!==i){i=Bs(Error(H(424)),e),e=xv(t,e,r,n,i);break e}else for(Qt=Nr(e.stateNode.containerInfo.firstChild),Xt=e,Ne=!0,bn=null,n=s2(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),r===i){e=sr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return l2(e),t===null&&qf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bf(r,i)?o=null:s!==null&&Bf(r,s)&&(e.flags|=32),V2(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&qf(e),null;case 13:return M2(t,e,n);case 4:return Nm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fs(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),yv(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(ru,r._currentValue),r._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===i.children&&!$t.current){e=sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Zn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Gf(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ds(e,n),i=pn(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=_n(r,e.pendingProps),i=_n(r.type,i),vv(t,e,r,i,n);case 15:return R2(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Sc(t,e),e.tag=1,Bt(r)?(t=!0,eu(e)):t=!1,Ds(e,n),C2(e,r,i),Qf(e,r,i,n),Jf(null,e,r,!0,t,n);case 19:return L2(t,e,n);case 22:return D2(t,e,n)}throw Error(H(156,e.tag))};function J2(t,e){return S_(t,e)}function UC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new UC(t,e,n,r)}function Qm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HC(t){if(typeof t=="function")return Qm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pm)return 11;if(t===mm)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Qm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Ii(n.children,i,s,e);case fm:o=8,i|=8;break;case wf:return t=un(12,n,e,i|2),t.elementType=wf,t.lanes=s,t;case xf:return t=un(13,n,e,i),t.elementType=xf,t.lanes=s,t;case _f:return t=un(19,n,e,i),t.elementType=_f,t.lanes=s,t;case l_:return ed(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o_:o=10;break e;case a_:o=9;break e;case pm:o=11;break e;case mm:o=14;break e;case _r:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ii(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function ed(t,e,n,r){return t=un(22,t,r,e),t.elementType=l_,t.lanes=n,t.stateNode={isHidden:!1},t}function Vh(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function Nh(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ph(0),this.expirationTimes=ph(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ph(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ym(t,e,n,r,i,s,o,a,c){return t=new WC(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vm(s),t}function qC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Z2(t){if(!t)return Yr;t=t._reactInternals;e:{if(qi(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(Bt(n))return Z_(t,n,e)}return e}function eE(t,e,n,r,i,s,o,a,c){return t=Ym(n,r,!0,t,i,s,o,a,c),t.context=Z2(null),n=t.current,r=Nt(),i=Or(n),s=Zn(r,i),s.callback=e??null,Mr(n,s,i),t.current.lanes=i,al(t,i,r),zt(t,r),t}function td(t,e,n,r){var i=e.current,s=Nt(),o=Or(i);return n=Z2(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mr(i,e,o),t!==null&&(kn(t,i,o,s),Ec(t,i,o)),o}function fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xm(t,e){Pv(t,e),(t=t.alternate)&&Pv(t,e)}function GC(){return null}var tE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jm(t){this._internalRoot=t}nd.prototype.render=Jm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));td(t,e,null,null)};nd.prototype.unmount=Jm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Oi(function(){td(null,t,null,null)}),e[rr]=null}};function nd(t){this._internalRoot=t}nd.prototype.unstable_scheduleHydration=function(t){if(t){var e=D_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&N_(t)}};function Zm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rv(){}function KC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=fu(o);s.call(u)}}var o=eE(e,r,t,0,null,!1,!1,"",Rv);return t._reactRootContainer=o,t[rr]=o.current,La(t.nodeType===8?t.parentNode:t),Oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fu(c);a.call(u)}}var c=Ym(t,0,!1,null,null,!1,!1,"",Rv);return t._reactRootContainer=c,t[rr]=c.current,La(t.nodeType===8?t.parentNode:t),Oi(function(){td(e,c,n,r)}),c}function id(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var c=fu(o);a.call(c)}}td(e,o,t,i)}else o=KC(n,e,t,i,r);return fu(o)}P_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(vm(e,n|1),zt(e,Ge()),!(me&6)&&(zs=Ge()+500,si()))}break;case 13:Oi(function(){var r=ir(t,1);if(r!==null){var i=Nt();kn(r,t,1,i)}}),Xm(t,1)}};wm=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=Nt();kn(e,t,134217728,n)}Xm(t,134217728)}};R_=function(t){if(t.tag===13){var e=Or(t),n=ir(t,e);if(n!==null){var r=Nt();kn(n,t,e,r)}Xm(t,e)}};D_=function(){return Ee};V_=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};Rf=function(t,e,n){switch(e){case"input":if(Tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ku(r);if(!i)throw Error(H(90));u_(r),Tf(r,i)}}}break;case"textarea":h_(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};w_=qm;x_=Oi;var QC={usingClientEntryPoint:!1,Events:[cl,gs,Ku,y_,v_,qm]},$o={findFiberByHostInstance:_i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YC={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b_(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||GC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Hu=tc.inject(YC),On=tc}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QC;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zm(e))throw Error(H(200));return qC(t,e,null,n)};nn.createRoot=function(t,e){if(!Zm(t))throw Error(H(299));var n=!1,r="",i=tE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ym(t,1,!1,null,null,n,!1,r,i),t[rr]=e.current,La(t.nodeType===8?t.parentNode:t),new Jm(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=b_(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return Oi(t)};nn.hydrate=function(t,e,n){if(!rd(e))throw Error(H(200));return id(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!Zm(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=eE(e,null,t,1,n??null,i,!1,s,o),t[rr]=e.current,La(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nd(e)};nn.render=function(t,e,n){if(!rd(e))throw Error(H(200));return id(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!rd(t))throw Error(H(40));return t._reactRootContainer?(Oi(function(){id(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};nn.unstable_batchedUpdates=qm;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rd(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return id(t,e,n,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";function nE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nE)}catch(t){console.error(t)}}nE(),n_.exports=nn;var XC=n_.exports,Dv=XC;yf.createRoot=Dv.createRoot,yf.hydrateRoot=Dv.hydrateRoot;var at=function(){return at=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},at.apply(this,arguments)};function Us(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Re="-ms-",pa="-moz-",_e="-webkit-",rE="comm",sd="rule",eg="decl",JC="@import",iE="@keyframes",ZC="@layer",sE=Math.abs,tg=String.fromCharCode,up=Object.assign;function eI(t,e){return ot(t,0)^45?(((e<<2^ot(t,0))<<2^ot(t,1))<<2^ot(t,2))<<2^ot(t,3):0}function oE(t){return t.trim()}function Kn(t,e){return(t=e.exec(t))?t[0]:t}function le(t,e,n){return t.replace(e,n)}function Ic(t,e,n){return t.indexOf(e,n)}function ot(t,e){return t.charCodeAt(e)|0}function Hs(t,e,n){return t.slice(e,n)}function Nn(t){return t.length}function aE(t){return t.length}function ea(t,e){return e.push(t),t}function tI(t,e){return t.map(e).join("")}function Vv(t,e){return t.filter(function(n){return!Kn(n,e)})}var od=1,Ws=1,lE=0,gn=0,Ye=0,lo="";function ad(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:od,column:Ws,length:o,return:"",siblings:a}}function vr(t,e){return up(ad("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ss(t){for(;t.root;)t=vr(t.root,{children:[t]});ea(t,t.siblings)}function nI(){return Ye}function rI(){return Ye=gn>0?ot(lo,--gn):0,Ws--,Ye===10&&(Ws=1,od--),Ye}function Cn(){return Ye=gn<lE?ot(lo,gn++):0,Ws++,Ye===10&&(Ws=1,od++),Ye}function Pi(){return ot(lo,gn)}function Pc(){return gn}function ld(t,e){return Hs(lo,t,e)}function dp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function iI(t){return od=Ws=1,lE=Nn(lo=t),gn=0,[]}function sI(t){return lo="",t}function Mh(t){return oE(ld(gn-1,hp(t===91?t+2:t===40?t+1:t)))}function oI(t){for(;(Ye=Pi())&&Ye<33;)Cn();return dp(t)>2||dp(Ye)>3?"":" "}function aI(t,e){for(;--e&&Cn()&&!(Ye<48||Ye>102||Ye>57&&Ye<65||Ye>70&&Ye<97););return ld(t,Pc()+(e<6&&Pi()==32&&Cn()==32))}function hp(t){for(;Cn();)switch(Ye){case t:return gn;case 34:case 39:t!==34&&t!==39&&hp(Ye);break;case 40:t===41&&hp(t);break;case 92:Cn();break}return gn}function lI(t,e){for(;Cn()&&t+Ye!==47+10;)if(t+Ye===42+42&&Pi()===47)break;return"/*"+ld(e,gn-1)+"*"+tg(t===47?t:Cn())}function cI(t){for(;!dp(Pi());)Cn();return ld(t,gn)}function uI(t){return sI(Rc("",null,null,null,[""],t=iI(t),0,[0],t))}function Rc(t,e,n,r,i,s,o,a,c){for(var u=0,d=0,h=o,p=0,g=0,_=0,b=1,k=1,x=1,v=0,w="",P=i,O=s,N=r,T=w;k;)switch(_=v,v=Cn()){case 40:if(_!=108&&ot(T,h-1)==58){Ic(T+=le(Mh(v),"&","&\f"),"&\f",sE(u?a[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:T+=Mh(v);break;case 9:case 10:case 13:case 32:T+=oI(_);break;case 92:T+=aI(Pc()-1,7);continue;case 47:switch(Pi()){case 42:case 47:ea(dI(lI(Cn(),Pc()),e,n,c),c);break;default:T+="/"}break;case 123*b:a[u++]=Nn(T)*x;case 125*b:case 59:case 0:switch(v){case 0:case 125:k=0;case 59+d:x==-1&&(T=le(T,/\f/g,"")),g>0&&Nn(T)-h&&ea(g>32?Mv(T+";",r,n,h-1,c):Mv(le(T," ","")+";",r,n,h-2,c),c);break;case 59:T+=";";default:if(ea(N=Nv(T,e,n,u,d,i,a,w,P=[],O=[],h,s),s),v===123)if(d===0)Rc(T,e,N,N,P,s,h,a,O);else switch(p===99&&ot(T,3)===110?100:p){case 100:case 108:case 109:case 115:Rc(t,N,N,r&&ea(Nv(t,N,N,0,0,i,a,w,i,P=[],h,O),O),i,O,h,a,r?P:O);break;default:Rc(T,N,N,N,[""],O,0,a,O)}}u=d=g=0,b=x=1,w=T="",h=o;break;case 58:h=1+Nn(T),g=_;default:if(b<1){if(v==123)--b;else if(v==125&&b++==0&&rI()==125)continue}switch(T+=tg(v),v*b){case 38:x=d>0?1:(T+="\f",-1);break;case 44:a[u++]=(Nn(T)-1)*x,x=1;break;case 64:Pi()===45&&(T+=Mh(Cn())),p=Pi(),d=h=Nn(w=T+=cI(Pc())),v++;break;case 45:_===45&&Nn(T)==2&&(b=0)}}return s}function Nv(t,e,n,r,i,s,o,a,c,u,d,h){for(var p=i-1,g=i===0?s:[""],_=aE(g),b=0,k=0,x=0;b<r;++b)for(var v=0,w=Hs(t,p+1,p=sE(k=o[b])),P=t;v<_;++v)(P=oE(k>0?g[v]+" "+w:le(w,/&\f/g,g[v])))&&(c[x++]=P);return ad(t,e,n,i===0?sd:a,c,u,d,h)}function dI(t,e,n,r){return ad(t,e,n,rE,tg(nI()),Hs(t,2,-2),0,r)}function Mv(t,e,n,r,i){return ad(t,e,n,eg,Hs(t,0,r),Hs(t,r+1,-1),r,i)}function cE(t,e,n){switch(eI(t,e)){case 5103:return _e+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _e+t+t;case 4789:return pa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+t+pa+t+Re+t+t;case 5936:switch(ot(t,e+11)){case 114:return _e+t+Re+le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return _e+t+Re+le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return _e+t+Re+le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return _e+t+Re+t+t;case 6165:return _e+t+Re+"flex-"+t+t;case 5187:return _e+t+le(t,/(\w+).+(:[^]+)/,_e+"box-$1$2"+Re+"flex-$1$2")+t;case 5443:return _e+t+Re+"flex-item-"+le(t,/flex-|-self/g,"")+(Kn(t,/flex-|baseline/)?"":Re+"grid-row-"+le(t,/flex-|-self/g,""))+t;case 4675:return _e+t+Re+"flex-line-pack"+le(t,/align-content|flex-|-self/g,"")+t;case 5548:return _e+t+Re+le(t,"shrink","negative")+t;case 5292:return _e+t+Re+le(t,"basis","preferred-size")+t;case 6060:return _e+"box-"+le(t,"-grow","")+_e+t+Re+le(t,"grow","positive")+t;case 4554:return _e+le(t,/([^-])(transform)/g,"$1"+_e+"$2")+t;case 6187:return le(le(le(t,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),t,"")+t;case 5495:case 3959:return le(t,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return le(le(t,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_e+t+t;case 4200:if(!Kn(t,/flex-|baseline/))return Re+"grid-column-align"+Hs(t,e)+t;break;case 2592:case 3360:return Re+le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Kn(r.props,/grid-\w+-end/)})?~Ic(t+(n=n[e].value),"span",0)?t:Re+le(t,"-start","")+t+Re+"grid-row-span:"+(~Ic(n,"span",0)?Kn(n,/\d+/):+Kn(n,/\d+/)-+Kn(t,/\d+/))+";":Re+le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Kn(r.props,/grid-\w+-start/)})?t:Re+le(le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return le(t,/(.+)-inline(.+)/,_e+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nn(t)-1-e>6)switch(ot(t,e+1)){case 109:if(ot(t,e+4)!==45)break;case 102:return le(t,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+pa+(ot(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ic(t,"stretch",0)?cE(le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,c,u){return Re+i+":"+s+u+(o?Re+i+"-span:"+(a?c:+c-+s)+u:"")+t});case 4949:if(ot(t,e+6)===121)return le(t,":",":"+_e)+t;break;case 6444:switch(ot(t,ot(t,14)===45?18:11)){case 120:return le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_e+(ot(t,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+Re+"$2box$3")+t;case 100:return le(t,":",":"+Re)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(t,"scroll-","scroll-snap-")+t}return t}function pu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function hI(t,e,n,r){switch(t.type){case ZC:if(t.children.length)break;case JC:case eg:return t.return=t.return||t.value;case rE:return"";case iE:return t.return=t.value+"{"+pu(t.children,r)+"}";case sd:if(!Nn(t.value=t.props.join(",")))return""}return Nn(n=pu(t.children,r))?t.return=t.value+"{"+n+"}":""}function fI(t){var e=aE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function pI(t){return function(e){e.root||(e=e.return)&&t(e)}}function mI(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case eg:t.return=cE(t.value,t.length,n);return;case iE:return pu([vr(t,{value:le(t.value,"@","@"+_e)})],r);case sd:if(t.length)return tI(n=t.props,function(i){switch(Kn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ss(vr(t,{props:[le(i,/:(read-\w+)/,":"+pa+"$1")]})),ss(vr(t,{props:[i]})),up(t,{props:Vv(n,r)});break;case"::placeholder":ss(vr(t,{props:[le(i,/:(plac\w+)/,":"+_e+"input-$1")]})),ss(vr(t,{props:[le(i,/:(plac\w+)/,":"+pa+"$1")]})),ss(vr(t,{props:[le(i,/:(plac\w+)/,Re+"input-$1")]})),ss(vr(t,{props:[i]})),up(t,{props:Vv(n,r)});break}return""})}}var gI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",uE="active",dE="data-styled-version",cd="6.1.17",ng=`/*!sc*/
`,mu=typeof window<"u"&&"HTMLElement"in window,yI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),vI={},ud=Object.freeze([]),Gs=Object.freeze({});function hE(t,e,n){return n===void 0&&(n=Gs),t.theme!==n.theme&&t.theme||e||n.theme}var fE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xI=/(^-|-$)/g;function Lv(t){return t.replace(wI,"-").replace(xI,"")}var _I=/(a)(d)/gi,nc=52,Ov=function(t){return String.fromCharCode(t+(t>25?39:97))};function fp(t){var e,n="";for(e=Math.abs(t);e>nc;e=e/nc|0)n=Ov(e%nc)+n;return(Ov(e%nc)+n).replace(_I,"$1-$2")}var Lh,pE=5381,bs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},mE=function(t){return bs(pE,t)};function rg(t){return fp(mE(t)>>>0)}function EI(t){return t.displayName||t.name||"Component"}function Oh(t){return typeof t=="string"&&!0}var gE=typeof Symbol=="function"&&Symbol.for,yE=gE?Symbol.for("react.memo"):60115,bI=gE?Symbol.for("react.forward_ref"):60112,TI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},SI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},AI=((Lh={})[bI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lh[yE]=vE,Lh);function jv(t){return("type"in(e=t)&&e.type.$$typeof)===yE?vE:"$$typeof"in t?AI[t.$$typeof]:TI;var e}var kI=Object.defineProperty,CI=Object.getOwnPropertyNames,Fv=Object.getOwnPropertySymbols,II=Object.getOwnPropertyDescriptor,PI=Object.getPrototypeOf,$v=Object.prototype;function wE(t,e,n){if(typeof e!="string"){if($v){var r=PI(e);r&&r!==$v&&wE(t,r,n)}var i=CI(e);Fv&&(i=i.concat(Fv(e)));for(var s=jv(t),o=jv(e),a=0;a<i.length;++a){var c=i[a];if(!(c in SI||n&&n[c]||o&&c in o||s&&c in s)){var u=II(e,c);try{kI(t,c,u)}catch{}}}}return t}function ji(t){return typeof t=="function"}function ig(t){return typeof t=="object"&&"styledComponentId"in t}function Ti(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function gu(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Wa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function pp(t,e,n){if(n===void 0&&(n=!1),!n&&!Wa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=pp(t[r],e[r]);else if(Wa(e))for(var r in e)t[r]=pp(t[r],e[r]);return t}function sg(t,e){Object.defineProperty(t,"toString",{value:e})}function Xr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var RI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Xr(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),c=(o=0,n.length);o<c;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(ng);return n},t}(),Dc=new Map,yu=new Map,Vc=1,rc=function(t){if(Dc.has(t))return Dc.get(t);for(;yu.has(Vc);)Vc++;var e=Vc++;return Dc.set(t,e),yu.set(e,t),e},DI=function(t,e){Vc=e+1,Dc.set(t,e),yu.set(e,t)},VI="style[".concat(qs,"][").concat(dE,'="').concat(cd,'"]'),NI=new RegExp("^".concat(qs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),MI=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},LI=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(ng),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var c=a.match(NI);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(DI(d,u),MI(t,d,c[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Bv=function(t){for(var e=document.querySelectorAll(VI),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(qs)!==uE&&(LI(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function OI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var c=Array.from(a.querySelectorAll("style[".concat(qs,"]")));return c[c.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(qs,uE),r.setAttribute(dE,cd);var o=OI();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},jI=function(){function t(e){this.element=xE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Xr(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),FI=function(){function t(e){this.element=xE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),$I=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),zv=mu,BI={isServer:!mu,useCSSOMInjection:!yI},vu=function(){function t(e,n,r){e===void 0&&(e=Gs),n===void 0&&(n={});var i=this;this.options=at(at({},BI),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&mu&&zv&&(zv=!1,Bv(this)),sg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,c="",u=function(h){var p=function(x){return yu.get(x)}(h);if(p===void 0)return"continue";var g=s.names.get(p),_=o.getGroup(h);if(g===void 0||!g.size||_.length===0)return"continue";var b="".concat(qs,".g").concat(h,'[id="').concat(p,'"]'),k="";g!==void 0&&g.forEach(function(x){x.length>0&&(k+="".concat(x,","))}),c+="".concat(_).concat(b,'{content:"').concat(k,'"}').concat(ng)},d=0;d<a;d++)u(d);return c}(i)})}return t.registerId=function(e){return rc(e)},t.prototype.rehydrate=function(){!this.server&&mu&&Bv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(at(at({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new $I(i):r?new jI(i):new FI(i)}(this.options),new RI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(rc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(rc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(rc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),zI=/&/g,UI=/^\s*\/\/.*$/gm;function _E(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_E(n.children,e)),n})}function HI(t){var e,n,r,i=t===void 0?Gs:t,s=i.options,o=s===void 0?Gs:s,a=i.plugins,c=a===void 0?ud:a,u=function(p,g,_){return _.startsWith(n)&&_.endsWith(n)&&_.replaceAll(n,"").length>0?".".concat(e):p},d=c.slice();d.push(function(p){p.type===sd&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(zI,n).replace(r,u))}),o.prefix&&d.push(mI),d.push(hI);var h=function(p,g,_,b){g===void 0&&(g=""),_===void 0&&(_=""),b===void 0&&(b="&"),e=b,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(UI,""),x=uI(_||g?"".concat(_," ").concat(g," { ").concat(k," }"):k);o.namespace&&(x=_E(x,o.namespace));var v=[];return pu(x,fI(d.concat(pI(function(w){return v.push(w)})))),v};return h.hash=c.length?c.reduce(function(p,g){return g.name||Xr(15),bs(p,g.name)},pE).toString():"",h}var WI=new vu,mp=HI(),EE=Ce.createContext({shouldForwardProp:void 0,styleSheet:WI,stylis:mp});EE.Consumer;Ce.createContext(void 0);function gp(){return I.useContext(EE)}var bE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=mp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,sg(this,function(){throw Xr(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=mp),this.name+e.hash},t}(),qI=function(t){return t>="A"&&t<="Z"};function Uv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;qI(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var TE=function(t){return t==null||t===!1||t===""},SE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!TE(s)&&(Array.isArray(s)&&s.isCss||ji(s)?r.push("".concat(Uv(i),":"),s,";"):Wa(s)?r.push.apply(r,Us(Us(["".concat(i," {")],SE(s),!1),["}"],!1)):r.push("".concat(Uv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in gI||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Fr(t,e,n,r){if(TE(t))return[];if(ig(t))return[".".concat(t.styledComponentId)];if(ji(t)){if(!ji(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Fr(i,e,n,r)}var s;return t instanceof bE?n?(t.inject(n,r),[t.getName(r)]):[t]:Wa(t)?SE(t):Array.isArray(t)?Array.prototype.concat.apply(ud,t.map(function(o){return Fr(o,e,n,r)})):[t.toString()]}function AE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ji(n)&&!ig(n))return!1}return!0}var GI=mE(cd),KI=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&AE(e),this.componentId=n,this.baseHash=bs(GI,n),this.baseStyle=r,vu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ti(i,this.staticRulesId);else{var s=gu(Fr(this.rules,e,n,r)),o=fp(bs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ti(i,o),this.staticRulesId=o}else{for(var c=bs(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var p=gu(Fr(h,e,n,r));c=bs(c,p+d),u+=p}}if(u){var g=fp(c>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Ti(i,g)}}return i},t}(),Ks=Ce.createContext(void 0);Ks.Consumer;function QI(){var t=I.useContext(Ks);if(!t)throw Xr(18);return t}function kE(t){var e=Ce.useContext(Ks),n=I.useMemo(function(){return function(r,i){if(!r)throw Xr(14);if(ji(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Xr(8);return i?at(at({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?Ce.createElement(Ks.Provider,{value:n},t.children):null}var jh={};function YI(t,e,n){var r=ig(t),i=t,s=!Oh(t),o=e.attrs,a=o===void 0?ud:o,c=e.componentId,u=c===void 0?function(P,O){var N=typeof P!="string"?"sc":Lv(P);jh[N]=(jh[N]||0)+1;var T="".concat(N,"-").concat(rg(cd+N+jh[N]));return O?"".concat(O,"-").concat(T):T}(e.displayName,e.parentComponentId):c,d=e.displayName,h=d===void 0?function(P){return Oh(P)?"styled.".concat(P):"Styled(".concat(EI(P),")")}(t):d,p=e.displayName&&e.componentId?"".concat(Lv(e.displayName),"-").concat(e.componentId):e.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(r&&i.shouldForwardProp){var b=i.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;_=function(P,O){return b(P,O)&&k(P,O)}}else _=b}var x=new KI(n,p,r?i.componentStyle:void 0);function v(P,O){return function(N,T,E){var A=N.attrs,C=N.componentStyle,D=N.defaultProps,M=N.foldedComponentIds,R=N.styledComponentId,W=N.target,J=Ce.useContext(Ks),X=gp(),ee=N.shouldForwardProp||X.shouldForwardProp,z=hE(T,J,D)||Gs,G=function(ye,Se,Me){for(var vn,Ht=at(at({},Se),{className:void 0,theme:Me}),Wt=0;Wt<ye.length;Wt+=1){var ct=ji(vn=ye[Wt])?vn(Ht):vn;for(var qt in ct)Ht[qt]=qt==="className"?Ti(Ht[qt],ct[qt]):qt==="style"?at(at({},Ht[qt]),ct[qt]):ct[qt]}return Se.className&&(Ht.className=Ti(Ht.className,Se.className)),Ht}(A,T,z),F=G.as||W,$={};for(var K in G)G[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&G.theme===z||(K==="forwardedAs"?$.as=G.forwardedAs:ee&&!ee(K,F)||($[K]=G[K]));var te=function(ye,Se){var Me=gp(),vn=ye.generateAndInjectStyles(Se,Me.styleSheet,Me.stylis);return vn}(C,G),he=Ti(M,R);return te&&(he+=" "+te),G.className&&(he+=" "+G.className),$[Oh(F)&&!fE.has(F)?"class":"className"]=he,E&&($.ref=E),I.createElement(F,$)}(w,P,O)}v.displayName=h;var w=Ce.forwardRef(v);return w.attrs=g,w.componentStyle=x,w.displayName=h,w.shouldForwardProp=_,w.foldedComponentIds=r?Ti(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=p,w.target=r?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(O){for(var N=[],T=1;T<arguments.length;T++)N[T-1]=arguments[T];for(var E=0,A=N;E<A.length;E++)pp(O,A[E],!0);return O}({},i.defaultProps,P):P}}),sg(w,function(){return".".concat(w.styledComponentId)}),s&&wE(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Hv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Wv=function(t){return Object.assign(t,{isCss:!0})};function Qs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ji(t)||Wa(t))return Wv(Fr(Hv(ud,Us([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Fr(r):Wv(Fr(Hv(r,e)))}function yp(t,e,n){if(n===void 0&&(n=Gs),!e)throw Xr(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Qs.apply(void 0,Us([i],s,!1)))};return r.attrs=function(i){return yp(t,e,at(at({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return yp(t,e,at(at({},n),i))},r}var CE=function(t){return yp(YI,t)},V=CE;fE.forEach(function(t){V[t]=CE(t)});var XI=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=AE(e),vu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(gu(Fr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&vu.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function IE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Qs.apply(void 0,Us([t],e,!1)),i="sc-global-".concat(rg(JSON.stringify(r))),s=new XI(r,i),o=function(c){var u=gp(),d=Ce.useContext(Ks),h=Ce.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,c,u.styleSheet,d,u.stylis),Ce.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,c,u.styleSheet,d,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,c,u.styleSheet,d,u.stylis]),null};function a(c,u,d,h,p){if(s.isStatic)s.renderStyles(c,vI,d,p);else{var g=at(at({},u),{theme:hE(u,h,o.defaultProps)});s.renderStyles(c,g,d,p)}}return Ce.memo(o)}function co(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=gu(Qs.apply(void 0,Us([t],e,!1))),i=rg(r);return new bE(i,r)}const dd=I.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),hd=I.createContext({}),fd=I.createContext(null),pd=typeof document<"u",uo=pd?I.useLayoutEffect:I.useEffect,PE=I.createContext({strict:!1}),og=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),JI="framerAppearId",RE="data-"+og(JI);function ZI(t,e,n,r){const{visualElement:i}=I.useContext(hd),s=I.useContext(PE),o=I.useContext(fd),a=I.useContext(dd).reducedMotion,c=I.useRef();r=r||s.renderer,!c.current&&r&&(c.current=r(t,{visualState:e,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=c.current;I.useInsertionEffect(()=>{u&&u.update(n,o)});const d=I.useRef(!!(n[RE]&&!window.HandoffComplete));return uo(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),I.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function Ts(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function eP(t,e,n){return I.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Ts(n)&&(n.current=r))},[e])}function qa(t){return typeof t=="string"||Array.isArray(t)}function md(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const ag=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lg=["initial",...ag];function gd(t){return md(t.animate)||lg.some(e=>qa(t[e]))}function DE(t){return!!(gd(t)||t.variants)}function tP(t,e){if(gd(t)){const{initial:n,animate:r}=t;return{initial:n===!1||qa(n)?n:void 0,animate:qa(r)?r:void 0}}return t.inherit!==!1?e:{}}function nP(t){const{initial:e,animate:n}=tP(t,I.useContext(hd));return I.useMemo(()=>({initial:e,animate:n}),[qv(e),qv(n)])}function qv(t){return Array.isArray(t)?t.join(" "):t}const Gv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ga={};for(const t in Gv)Ga[t]={isEnabled:e=>Gv[t].some(n=>!!e[n])};function rP(t){for(const e in t)Ga[e]={...Ga[e],...t[e]}}const cg=I.createContext({}),VE=I.createContext({}),iP=Symbol.for("motionComponentSymbol");function sP({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&rP(t);function s(a,c){let u;const d={...I.useContext(dd),...a,layoutId:oP(a)},{isStatic:h}=d,p=nP(a),g=r(a,h);if(!h&&pd){p.visualElement=ZI(i,g,d,e);const _=I.useContext(VE),b=I.useContext(PE).strict;p.visualElement&&(u=p.visualElement.loadFeatures(d,b,t,_))}return I.createElement(hd.Provider,{value:p},u&&p.visualElement?I.createElement(u,{visualElement:p.visualElement,...d}):null,n(i,a,eP(g,p.visualElement,c),g,h,p.visualElement))}const o=I.forwardRef(s);return o[iP]=i,o}function oP({layoutId:t}){const e=I.useContext(cg).id;return e&&t!==void 0?e+"-"+t:t}function aP(t){function e(r,i={}){return sP(t(r,i))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,i)=>(n.has(i)||n.set(i,e(i)),n.get(i))})}const lP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ug(t){return typeof t!="string"||t.includes("-")?!1:!!(lP.indexOf(t)>-1||/[A-Z]/.test(t))}const wu={};function cP(t){Object.assign(wu,t)}const dl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Gi=new Set(dl);function NE(t,{layout:e,layoutId:n}){return Gi.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!wu[t]||t==="opacity")}const Ct=t=>!!(t&&t.getVelocity),uP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},dP=dl.length;function hP(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<dP;o++){const a=dl[o];if(t[a]!==void 0){const c=uP[a]||a;s+=`${c}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(t,r?"":s):n&&r&&(s="none"),s}const ME=t=>e=>typeof e=="string"&&e.startsWith(t),LE=ME("--"),vp=ME("var(--"),fP=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,pP=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Jr=(t,e,n)=>Math.min(Math.max(n,t),e),Ki={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ma={...Ki,transform:t=>Jr(0,1,t)},ic={...Ki,default:1},ga=t=>Math.round(t*1e5)/1e5,yd=/(-)?([\d]*\.?[\d])+/g,OE=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,mP=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function hl(t){return typeof t=="string"}const fl=t=>({test:e=>hl(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),wr=fl("deg"),Fn=fl("%"),re=fl("px"),gP=fl("vh"),yP=fl("vw"),Kv={...Fn,parse:t=>Fn.parse(t)/100,transform:t=>Fn.transform(t*100)},Qv={...Ki,transform:Math.round},jE={borderWidth:re,borderTopWidth:re,borderRightWidth:re,borderBottomWidth:re,borderLeftWidth:re,borderRadius:re,radius:re,borderTopLeftRadius:re,borderTopRightRadius:re,borderBottomRightRadius:re,borderBottomLeftRadius:re,width:re,maxWidth:re,height:re,maxHeight:re,size:re,top:re,right:re,bottom:re,left:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,rotate:wr,rotateX:wr,rotateY:wr,rotateZ:wr,scale:ic,scaleX:ic,scaleY:ic,scaleZ:ic,skew:wr,skewX:wr,skewY:wr,distance:re,translateX:re,translateY:re,translateZ:re,x:re,y:re,z:re,perspective:re,transformPerspective:re,opacity:ma,originX:Kv,originY:Kv,originZ:re,zIndex:Qv,fillOpacity:ma,strokeOpacity:ma,numOctaves:Qv};function dg(t,e,n,r){const{style:i,vars:s,transform:o,transformOrigin:a}=t;let c=!1,u=!1,d=!0;for(const h in e){const p=e[h];if(LE(h)){s[h]=p;continue}const g=jE[h],_=pP(p,g);if(Gi.has(h)){if(c=!0,o[h]=_,!d)continue;p!==(g.default||0)&&(d=!1)}else h.startsWith("origin")?(u=!0,a[h]=_):i[h]=_}if(e.transform||(c||r?i.transform=hP(t.transform,n,d,r):i.transform&&(i.transform="none")),u){const{originX:h="50%",originY:p="50%",originZ:g=0}=a;i.transformOrigin=`${h} ${p} ${g}`}}const hg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function FE(t,e,n){for(const r in e)!Ct(e[r])&&!NE(r,n)&&(t[r]=e[r])}function vP({transformTemplate:t},e,n){return I.useMemo(()=>{const r=hg();return dg(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function wP(t,e,n){const r=t.style||{},i={};return FE(i,r,t),Object.assign(i,vP(t,e,n)),t.transformValues?t.transformValues(i):i}function xP(t,e,n){const r={},i=wP(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r}const _P=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function xu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||_P.has(t)}let $E=t=>!xu(t);function EP(t){t&&($E=e=>e.startsWith("on")?!xu(e):t(e))}try{EP(require("@emotion/is-prop-valid").default)}catch{}function bP(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||($E(i)||n===!0&&xu(i)||!e&&!xu(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function Yv(t,e,n){return typeof t=="string"?t:re.transform(e+n*t)}function TP(t,e,n){const r=Yv(e,t.x,t.width),i=Yv(n,t.y,t.height);return`${r} ${i}`}const SP={offset:"stroke-dashoffset",array:"stroke-dasharray"},AP={offset:"strokeDashoffset",array:"strokeDasharray"};function kP(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?SP:AP;t[s.offset]=re.transform(-r);const o=re.transform(e),a=re.transform(n);t[s.array]=`${o} ${a}`}function fg(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},d,h,p){if(dg(t,u,d,p),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:g,style:_,dimensions:b}=t;g.transform&&(b&&(_.transform=g.transform),delete g.transform),b&&(i!==void 0||s!==void 0||_.transform)&&(_.transformOrigin=TP(b,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(g.x=e),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),o!==void 0&&kP(g,o,a,c,!1)}const BE=()=>({...hg(),attrs:{}}),pg=t=>typeof t=="string"&&t.toLowerCase()==="svg";function CP(t,e,n,r){const i=I.useMemo(()=>{const s=BE();return fg(s,e,{enableHardwareAcceleration:!1},pg(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};FE(s,t.style,t),i.style={...s,...i.style}}return i}function IP(t=!1){return(n,r,i,{latestValues:s},o)=>{const c=(ug(n)?CP:xP)(r,s,o,n),d={...bP(r,typeof n=="string",t),...c,ref:i},{children:h}=r,p=I.useMemo(()=>Ct(h)?h.get():h,[h]);return I.createElement(n,{...d,children:p})}}function zE(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const UE=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function HE(t,e,n,r){zE(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(UE.has(i)?i:og(i),e.attrs[i])}function mg(t,e){const{style:n}=t,r={};for(const i in n)(Ct(n[i])||e.style&&Ct(e.style[i])||NE(i,t))&&(r[i]=n[i]);return r}function WE(t,e){const n=mg(t,e);for(const r in t)if(Ct(t[r])||Ct(e[r])){const i=dl.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=t[r]}return n}function gg(t,e,n,r={},i={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,i)),e}function pl(t){const e=I.useRef(null);return e.current===null&&(e.current=t()),e.current}const _u=t=>Array.isArray(t),PP=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),RP=t=>_u(t)?t[t.length-1]||0:t;function Nc(t){const e=Ct(t)?t.get():t;return PP(e)?e.toValue():e}function DP({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,i,s){const o={latestValues:VP(r,i,s,t),renderState:e()};return n&&(o.mount=a=>n(r,a,o)),o}const qE=t=>(e,n)=>{const r=I.useContext(hd),i=I.useContext(fd),s=()=>DP(t,e,r,i);return n?s():pl(s)};function VP(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=Nc(s[p]);let{initial:o,animate:a}=t;const c=gd(t),u=DE(t);e&&u&&!c&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const h=d?a:o;return h&&typeof h!="boolean"&&!md(h)&&(Array.isArray(h)?h:[h]).forEach(g=>{const _=gg(t,g);if(!_)return;const{transitionEnd:b,transition:k,...x}=_;for(const v in x){let w=x[v];if(Array.isArray(w)){const P=d?w.length-1:0;w=w[P]}w!==null&&(i[v]=w)}for(const v in b)i[v]=b[v]}),i}const Ue=t=>t;class Xv{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function NP(t){let e=new Xv,n=new Xv,r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(c,u=!1,d=!1)=>{const h=d&&i,p=h?e:n;return u&&o.add(c),p.add(c)&&h&&i&&(r=e.order.length),c},cancel:c=>{n.remove(c),o.delete(c)},process:c=>{if(i){s=!0;return}if(i=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let u=0;u<r;u++){const d=e.order[u];d(c),o.has(d)&&(a.schedule(d),t())}i=!1,s&&(s=!1,a.process(c))}};return a}const sc=["prepare","read","update","preRender","render","postRender"],MP=40;function LP(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=sc.reduce((h,p)=>(h[p]=NP(()=>n=!0),h),{}),o=h=>s[h].process(i),a=()=>{const h=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(h-i.timestamp,MP),1),i.timestamp=h,i.isProcessing=!0,sc.forEach(o),i.isProcessing=!1,n&&e&&(r=!1,t(a))},c=()=>{n=!0,r=!0,i.isProcessing||t(a)};return{schedule:sc.reduce((h,p)=>{const g=s[p];return h[p]=(_,b=!1,k=!1)=>(n||c(),g.schedule(_,b,k)),h},{}),cancel:h=>sc.forEach(p=>s[p].cancel(h)),state:i,steps:s}}const{schedule:xe,cancel:Pn,state:et,steps:Fh}=LP(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ue,!0),OP={useVisualState:qE({scrapeMotionValuesFromProps:WE,createRenderState:BE,onMount:(t,e,{renderState:n,latestValues:r})=>{xe.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),xe.render(()=>{fg(n,r,{enableHardwareAcceleration:!1},pg(e.tagName),t.transformTemplate),HE(e,n)})}})},jP={useVisualState:qE({scrapeMotionValuesFromProps:mg,createRenderState:hg})};function FP(t,{forwardMotionProps:e=!1},n,r){return{...ug(t)?OP:jP,preloadedFeatures:n,useRender:IP(e),createVisualElement:r,Component:t}}function Jn(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const GE=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function vd(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const $P=t=>e=>GE(e)&&t(e,vd(e));function er(t,e,n,r){return Jn(t,e,$P(n),r)}const BP=(t,e)=>n=>e(t(n)),$r=(...t)=>t.reduce(BP);function KE(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Jv=KE("dragHorizontal"),Zv=KE("dragVertical");function QE(t){let e=!1;if(t==="y")e=Zv();else if(t==="x")e=Jv();else{const n=Jv(),r=Zv();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function YE(){const t=QE(!0);return t?(t(),!1):!0}class oi{constructor(e){this.isMounted=!1,this.node=e}update(){}}function e1(t,e){const n="pointer"+(e?"enter":"leave"),r="onHover"+(e?"Start":"End"),i=(s,o)=>{if(s.pointerType==="touch"||YE())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[r]&&xe.update(()=>a[r](s,o))};return er(t.current,n,i,{passive:!t.getProps()[r]})}class zP extends oi{mount(){this.unmount=$r(e1(this.node,!0),e1(this.node,!1))}unmount(){}}class UP extends oi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$r(Jn(this.node.current,"focus",()=>this.onFocus()),Jn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const XE=(t,e)=>e?t===e?!0:XE(t,e.parentElement):!1;function $h(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,vd(n))}class HP extends oi{constructor(){super(...arguments),this.removeStartListeners=Ue,this.removeEndListeners=Ue,this.removeAccessibleListeners=Ue,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=er(window,"pointerup",(a,c)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:h}=this.node.getProps();xe.update(()=>{!h&&!XE(this.node.current,a.target)?d&&d(a,c):u&&u(a,c)})},{passive:!(r.onTap||r.onPointerUp)}),o=er(window,"pointercancel",(a,c)=>this.cancelPress(a,c),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=$r(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||$h("up",(c,u)=>{const{onTap:d}=this.node.getProps();d&&xe.update(()=>d(c,u))})};this.removeEndListeners(),this.removeEndListeners=Jn(this.node.current,"keyup",o),$h("down",(a,c)=>{this.startPress(a,c)})},n=Jn(this.node.current,"keydown",e),r=()=>{this.isPressing&&$h("cancel",(s,o)=>this.cancelPress(s,o))},i=Jn(this.node.current,"blur",r);this.removeAccessibleListeners=$r(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&xe.update(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!YE()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&xe.update(()=>r(e,n))}mount(){const e=this.node.getProps(),n=er(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=Jn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=$r(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const wp=new WeakMap,Bh=new WeakMap,WP=t=>{const e=wp.get(t.target);e&&e(t)},qP=t=>{t.forEach(WP)};function GP({root:t,...e}){const n=t||document;Bh.has(n)||Bh.set(n,{});const r=Bh.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(qP,{root:t,...e})),r[i]}function KP(t,e,n){const r=GP(e);return wp.set(t,n),r.observe(t),()=>{wp.delete(t),r.unobserve(t)}}const QP={some:0,all:1};class YP extends oi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:QP[i]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),p=u?d:h;p&&p(c)};return KP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(XP(e,n))&&this.startObserver()}unmount(){}}function XP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const JP={inView:{Feature:YP},tap:{Feature:HP},focus:{Feature:UP},hover:{Feature:zP}};function JE(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function ZP(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function eR(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function wd(t,e,n){const r=t.getProps();return gg(r,e,n!==void 0?n:r.custom,ZP(t),eR(t))}let ZE=Ue,xd=Ue;const Br=t=>t*1e3,$n=t=>t/1e3,tR={current:!1},eb=t=>Array.isArray(t)&&typeof t[0]=="number";function tb(t){return!!(!t||typeof t=="string"&&nb[t]||eb(t)||Array.isArray(t)&&t.every(tb))}const ta=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,nb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ta([0,.65,.55,1]),circOut:ta([.55,0,1,.45]),backIn:ta([.31,.01,.66,-.59]),backOut:ta([.33,1.53,.69,.99])};function rb(t){if(t)return eb(t)?ta(t):Array.isArray(t)?t.map(rb):nb[t]}function nR(t,e,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:c}={}){const u={[e]:n};c&&(u.offset=c);const d=rb(a);return Array.isArray(d)&&(u.easing=d),t.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function rR(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}const ib=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,iR=1e-7,sR=12;function oR(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=ib(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>iR&&++a<sR);return o}function ml(t,e,n,r){if(t===e&&n===r)return Ue;const i=s=>oR(s,0,1,t,n);return s=>s===0||s===1?s:ib(i(s),e,r)}const aR=ml(.42,0,1,1),lR=ml(0,0,.58,1),sb=ml(.42,0,.58,1),cR=t=>Array.isArray(t)&&typeof t[0]!="number",ob=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ab=t=>e=>1-t(1-e),yg=t=>1-Math.sin(Math.acos(t)),lb=ab(yg),uR=ob(yg),cb=ml(.33,1.53,.69,.99),vg=ab(cb),dR=ob(vg),hR=t=>(t*=2)<1?.5*vg(t):.5*(2-Math.pow(2,-10*(t-1))),fR={linear:Ue,easeIn:aR,easeInOut:sb,easeOut:lR,circIn:yg,circInOut:uR,circOut:lb,backIn:vg,backInOut:dR,backOut:cb,anticipate:hR},t1=t=>{if(Array.isArray(t)){xd(t.length===4);const[e,n,r,i]=t;return ml(e,n,r,i)}else if(typeof t=="string")return fR[t];return t},wg=(t,e)=>n=>!!(hl(n)&&mP.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),ub=(t,e,n)=>r=>{if(!hl(r))return r;const[i,s,o,a]=r.match(yd);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},pR=t=>Jr(0,255,t),zh={...Ki,transform:t=>Math.round(pR(t))},Si={test:wg("rgb","red"),parse:ub("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+zh.transform(t)+", "+zh.transform(e)+", "+zh.transform(n)+", "+ga(ma.transform(r))+")"};function mR(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const xp={test:wg("#"),parse:mR,transform:Si.transform},Ss={test:wg("hsl","hue"),parse:ub("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Fn.transform(ga(e))+", "+Fn.transform(ga(n))+", "+ga(ma.transform(r))+")"},Dt={test:t=>Si.test(t)||xp.test(t)||Ss.test(t),parse:t=>Si.test(t)?Si.parse(t):Ss.test(t)?Ss.parse(t):xp.parse(t),transform:t=>hl(t)?t:t.hasOwnProperty("red")?Si.transform(t):Ss.transform(t)},Oe=(t,e,n)=>-n*t+n*e+t;function Uh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function gR({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;i=Uh(c,a,t+1/3),s=Uh(c,a,t),o=Uh(c,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const Hh=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},yR=[xp,Si,Ss],vR=t=>yR.find(e=>e.test(t));function n1(t){const e=vR(t);let n=e.parse(t);return e===Ss&&(n=gR(n)),n}const db=(t,e)=>{const n=n1(t),r=n1(e),i={...n};return s=>(i.red=Hh(n.red,r.red,s),i.green=Hh(n.green,r.green,s),i.blue=Hh(n.blue,r.blue,s),i.alpha=Oe(n.alpha,r.alpha,s),Si.transform(i))};function wR(t){var e,n;return isNaN(t)&&hl(t)&&(((e=t.match(yd))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(OE))===null||n===void 0?void 0:n.length)||0)>0}const hb={regex:fP,countKey:"Vars",token:"${v}",parse:Ue},fb={regex:OE,countKey:"Colors",token:"${c}",parse:Dt.parse},pb={regex:yd,countKey:"Numbers",token:"${n}",parse:Ki.parse};function Wh(t,{regex:e,countKey:n,token:r,parse:i}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,r),t.values.push(...s.map(i)))}function Eu(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Wh(n,hb),Wh(n,fb),Wh(n,pb),n}function mb(t){return Eu(t).values}function gb(t){const{values:e,numColors:n,numVars:r,tokenised:i}=Eu(t),s=e.length;return o=>{let a=i;for(let c=0;c<s;c++)c<r?a=a.replace(hb.token,o[c]):c<r+n?a=a.replace(fb.token,Dt.transform(o[c])):a=a.replace(pb.token,ga(o[c]));return a}}const xR=t=>typeof t=="number"?0:t;function _R(t){const e=mb(t);return gb(t)(e.map(xR))}const Zr={test:wR,parse:mb,createTransformer:gb,getAnimatableNone:_R},yb=(t,e)=>n=>`${n>0?e:t}`;function vb(t,e){return typeof t=="number"?n=>Oe(t,e,n):Dt.test(t)?db(t,e):t.startsWith("var(")?yb(t,e):xb(t,e)}const wb=(t,e)=>{const n=[...t],r=n.length,i=t.map((s,o)=>vb(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},ER=(t,e)=>{const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=vb(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},xb=(t,e)=>{const n=Zr.createTransformer(e),r=Eu(t),i=Eu(e);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?$r(wb(r.values,i.values),n):yb(t,e)},Ys=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},r1=(t,e)=>n=>Oe(t,e,n);function bR(t){return typeof t=="number"?r1:typeof t=="string"?Dt.test(t)?db:xb:Array.isArray(t)?wb:typeof t=="object"?ER:r1}function TR(t,e,n){const r=[],i=n||bR(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const c=Array.isArray(e)?e[o]||Ue:e;a=$r(c,a)}r.push(a)}return r}function _d(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(xd(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=TR(e,r,i),a=o.length,c=u=>{let d=0;if(a>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const h=Ys(t[d],t[d+1],u);return o[d](h)};return n?u=>c(Jr(t[0],t[s-1],u)):c}function SR(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=Ys(0,e,r);t.push(Oe(n,1,i))}}function _b(t){const e=[0];return SR(e,t.length-1),e}function AR(t,e){return t.map(n=>n*e)}function kR(t,e){return t.map(()=>e||sb).splice(0,t.length-1)}function bu({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=cR(r)?r.map(t1):t1(r),s={done:!1,value:e[0]},o=AR(n&&n.length===e.length?n:_b(e),t),a=_d(o,e,{ease:Array.isArray(i)?i:kR(e,i)});return{calculatedDuration:t,next:c=>(s.value=a(c),s.done=c>=t,s)}}function xg(t,e){return e?t*(1e3/e):0}const CR=5;function Eb(t,e,n){const r=Math.max(e-CR,0);return xg(n-t(r),e-r)}const qh=.001,IR=.01,i1=10,PR=.05,RR=1;function DR({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,s;ZE(t<=Br(i1));let o=1-e;o=Jr(PR,RR,o),t=Jr(IR,i1,$n(t)),o<1?(i=u=>{const d=u*o,h=d*t,p=d-n,g=_p(u,o),_=Math.exp(-h);return qh-p/g*_},s=u=>{const h=u*o*t,p=h*n+n,g=Math.pow(o,2)*Math.pow(u,2)*t,_=Math.exp(-h),b=_p(Math.pow(u,2),o);return(-i(u)+qh>0?-1:1)*((p-g)*_)/b}):(i=u=>{const d=Math.exp(-u*t),h=(u-n)*t+1;return-qh+d*h},s=u=>{const d=Math.exp(-u*t),h=(n-u)*(t*t);return d*h});const a=5/t,c=NR(i,s,a);if(t=Br(t),isNaN(c))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:t}}}const VR=12;function NR(t,e,n){let r=n;for(let i=1;i<VR;i++)r=r-t(r)/e(r);return r}function _p(t,e){return t*Math.sqrt(1-e*e)}const MR=["duration","bounce"],LR=["stiffness","damping","mass"];function s1(t,e){return e.some(n=>t[n]!==void 0)}function OR(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!s1(t,LR)&&s1(t,MR)){const n=DR(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function bb({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],s=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=OR({...r,velocity:-$n(r.velocity||0)}),g=h||0,_=c/(2*Math.sqrt(a*u)),b=s-i,k=$n(Math.sqrt(a/u)),x=Math.abs(b)<5;n||(n=x?.01:2),e||(e=x?.005:.5);let v;if(_<1){const w=_p(k,_);v=P=>{const O=Math.exp(-_*k*P);return s-O*((g+_*k*b)/w*Math.sin(w*P)+b*Math.cos(w*P))}}else if(_===1)v=w=>s-Math.exp(-k*w)*(b+(g+k*b)*w);else{const w=k*Math.sqrt(_*_-1);v=P=>{const O=Math.exp(-_*k*P),N=Math.min(w*P,300);return s-O*((g+_*k*b)*Math.sinh(N)+w*b*Math.cosh(N))/w}}return{calculatedDuration:p&&d||null,next:w=>{const P=v(w);if(p)o.done=w>=d;else{let O=g;w!==0&&(_<1?O=Eb(v,w,P):O=0);const N=Math.abs(O)<=n,T=Math.abs(s-P)<=e;o.done=N&&T}return o.value=o.done?s:P,o}}}function o1({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:c,restDelta:u=.5,restSpeed:d}){const h=t[0],p={done:!1,value:h},g=E=>a!==void 0&&E<a||c!==void 0&&E>c,_=E=>a===void 0?c:c===void 0||Math.abs(a-E)<Math.abs(c-E)?a:c;let b=n*e;const k=h+b,x=o===void 0?k:o(k);x!==k&&(b=x-h);const v=E=>-b*Math.exp(-E/r),w=E=>x+v(E),P=E=>{const A=v(E),C=w(E);p.done=Math.abs(A)<=u,p.value=p.done?x:C};let O,N;const T=E=>{g(p.value)&&(O=E,N=bb({keyframes:[p.value,_(p.value)],velocity:Eb(w,E,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return T(0),{calculatedDuration:null,next:E=>{let A=!1;return!N&&O===void 0&&(A=!0,P(E),T(E)),O!==void 0&&E>O?N.next(E-O):(!A&&P(E),p)}}}const jR=t=>{const e=({timestamp:n})=>t(n);return{start:()=>xe.update(e,!0),stop:()=>Pn(e),now:()=>et.isProcessing?et.timestamp:performance.now()}},a1=2e4;function l1(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<a1;)e+=n,r=t.next(e);return e>=a1?1/0:e}const FR={decay:o1,inertia:o1,tween:bu,keyframes:bu,spring:bb};function Ka({autoplay:t=!0,delay:e=0,driver:n=jR,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:c,onStop:u,onComplete:d,onUpdate:h,...p}){let g=1,_=!1,b,k;const x=()=>{k=new Promise($=>{b=$})};x();let v;const w=FR[i]||bu;let P;w!==bu&&typeof r[0]!="number"&&(P=_d([0,100],r,{clamp:!1}),r=[0,100]);const O=w({...p,keyframes:r});let N;a==="mirror"&&(N=w({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let T="idle",E=null,A=null,C=null;O.calculatedDuration===null&&s&&(O.calculatedDuration=l1(O));const{calculatedDuration:D}=O;let M=1/0,R=1/0;D!==null&&(M=D+o,R=M*(s+1)-o);let W=0;const J=$=>{if(A===null)return;g>0&&(A=Math.min(A,$)),g<0&&(A=Math.min($-R/g,A)),E!==null?W=E:W=Math.round($-A)*g;const K=W-e*(g>=0?1:-1),te=g>=0?K<0:K>R;W=Math.max(K,0),T==="finished"&&E===null&&(W=R);let he=W,ye=O;if(s){const Ht=Math.min(W,R)/M;let Wt=Math.floor(Ht),ct=Ht%1;!ct&&Ht>=1&&(ct=1),ct===1&&Wt--,Wt=Math.min(Wt,s+1),!!(Wt%2)&&(a==="reverse"?(ct=1-ct,o&&(ct-=o/M)):a==="mirror"&&(ye=N)),he=Jr(0,1,ct)*M}const Se=te?{done:!1,value:r[0]}:ye.next(he);P&&(Se.value=P(Se.value));let{done:Me}=Se;!te&&D!==null&&(Me=g>=0?W>=R:W<=0);const vn=E===null&&(T==="finished"||T==="running"&&Me);return h&&h(Se.value),vn&&z(),Se},X=()=>{v&&v.stop(),v=void 0},ee=()=>{T="idle",X(),b(),x(),A=C=null},z=()=>{T="finished",d&&d(),X(),b()},G=()=>{if(_)return;v||(v=n(J));const $=v.now();c&&c(),E!==null?A=$-E:(!A||T==="finished")&&(A=$),T==="finished"&&x(),C=A,E=null,T="running",v.start()};t&&G();const F={then($,K){return k.then($,K)},get time(){return $n(W)},set time($){$=Br($),W=$,E!==null||!v||g===0?E=$:A=v.now()-$/g},get duration(){const $=O.calculatedDuration===null?l1(O):O.calculatedDuration;return $n($)},get speed(){return g},set speed($){$===g||!v||(g=$,F.time=$n(W))},get state(){return T},play:G,pause:()=>{T="paused",E=W},stop:()=>{_=!0,T!=="idle"&&(T="idle",u&&u(),ee())},cancel:()=>{C!==null&&J(C),ee()},complete:()=>{T="finished"},sample:$=>(A=0,J($))};return F}function $R(t){let e;return()=>(e===void 0&&(e=t()),e)}const BR=$R(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),zR=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),oc=10,UR=2e4,HR=(t,e)=>e.type==="spring"||t==="backgroundColor"||!tb(e.ease);function WR(t,e,{onUpdate:n,onComplete:r,...i}){if(!(BR()&&zR.has(e)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,c,u=!1;const d=()=>{c=new Promise(w=>{a=w})};d();let{keyframes:h,duration:p=300,ease:g,times:_}=i;if(HR(e,i)){const w=Ka({...i,repeat:0,delay:0});let P={done:!1,value:h[0]};const O=[];let N=0;for(;!P.done&&N<UR;)P=w.sample(N),O.push(P.value),N+=oc;_=void 0,h=O,p=N-oc,g="linear"}const b=nR(t.owner.current,e,h,{...i,duration:p,ease:g,times:_}),k=()=>{u=!1,b.cancel()},x=()=>{u=!0,xe.update(k),a(),d()};return b.onfinish=()=>{u||(t.set(rR(h,i)),r&&r(),x())},{then(w,P){return c.then(w,P)},attachTimeline(w){return b.timeline=w,b.onfinish=null,Ue},get time(){return $n(b.currentTime||0)},set time(w){b.currentTime=Br(w)},get speed(){return b.playbackRate},set speed(w){b.playbackRate=w},get duration(){return $n(p)},play:()=>{o||(b.play(),Pn(k))},pause:()=>b.pause(),stop:()=>{if(o=!0,b.playState==="idle")return;const{currentTime:w}=b;if(w){const P=Ka({...i,autoplay:!1});t.setWithVelocity(P.sample(w-oc).value,P.sample(w).value,oc)}x()},complete:()=>{u||b.finish()},cancel:x}}function qR({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const i=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Ue,pause:Ue,stop:Ue,then:s=>(s(),Promise.resolve()),cancel:Ue,complete:Ue});return e?Ka({keyframes:[0,1],duration:0,delay:e,onComplete:i}):i()}const GR={type:"spring",stiffness:500,damping:25,restSpeed:10},KR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),QR={type:"keyframes",duration:.8},YR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XR=(t,{keyframes:e})=>e.length>2?QR:Gi.has(t)?t.startsWith("scale")?KR(e[1]):GR:YR,Ep=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Zr.test(e)||e==="0")&&!e.startsWith("url(")),JR=new Set(["brightness","contrast","saturate","opacity"]);function ZR(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(yd)||[];if(!r)return t;const i=n.replace(r,"");let s=JR.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const e4=/([a-z-]*)\(.*?\)/g,bp={...Zr,getAnimatableNone:t=>{const e=t.match(e4);return e?e.map(ZR).join(" "):t}},t4={...jE,color:Dt,backgroundColor:Dt,outlineColor:Dt,fill:Dt,stroke:Dt,borderColor:Dt,borderTopColor:Dt,borderRightColor:Dt,borderBottomColor:Dt,borderLeftColor:Dt,filter:bp,WebkitFilter:bp},_g=t=>t4[t];function Tb(t,e){let n=_g(t);return n!==bp&&(n=Zr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Sb=t=>/^0[^.\s]+$/.test(t);function n4(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||Sb(t)}function r4(t,e,n,r){const i=Ep(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:t.get();let a;const c=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),n4(s[u])&&c.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(a=s[u]);if(i&&c.length&&a)for(let u=0;u<c.length;u++){const d=c[u];s[d]=Tb(e,a)}return s}function i4({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:c,elapsed:u,...d}){return!!Object.keys(d).length}function Eg(t,e){return t[e]||t.default||t}const s4={skipAnimations:!1},bg=(t,e,n,r={})=>i=>{const s=Eg(r,t)||{},o=s.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Br(o);const c=r4(e,t,n,s),u=c[0],d=c[c.length-1],h=Ep(t,u),p=Ep(t,d);let g={keyframes:c,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:_=>{e.set(_),s.onUpdate&&s.onUpdate(_)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(i4(s)||(g={...g,...XR(t,g)}),g.duration&&(g.duration=Br(g.duration)),g.repeatDelay&&(g.repeatDelay=Br(g.repeatDelay)),!h||!p||tR.current||s.type===!1||s4.skipAnimations)return qR(g);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const _=WR(e,t,g);if(_)return _}return Ka(g)};function Tu(t){return!!(Ct(t)&&t.add)}const Ab=t=>/^\-?\d*\.?\d+$/.test(t);function Tg(t,e){t.indexOf(e)===-1&&t.push(e)}function Sg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Ag{constructor(){this.subscriptions=[]}add(e){return Tg(this.subscriptions,e),()=>Sg(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const o4=t=>!isNaN(parseFloat(t)),ya={current:void 0};class a4{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=et;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,xe.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>xe.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=o4(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Ag);const r=this.events[e].add(n);return e==="change"?()=>{r(),xe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return ya.current&&ya.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?xg(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Tn(t,e){return new a4(t,e)}const kb=t=>e=>e.test(t),l4={test:t=>t==="auto",parse:t=>t},Cb=[Ki,re,Fn,wr,yP,gP,l4],Bo=t=>Cb.find(kb(t)),c4=[...Cb,Dt,Zr],u4=t=>c4.find(kb(t));function d4(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Tn(n))}function h4(t,e){const n=wd(t,e);let{transitionEnd:r={},transition:i={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=RP(s[o]);d4(t,o,a)}}function f4(t,e,n){var r,i;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const c=s[a],u=e[c];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(r=n[c])!==null&&r!==void 0?r:t.readValue(c))!==null&&i!==void 0?i:e[c]),d!=null&&(typeof d=="string"&&(Ab(d)||Sb(d))?d=parseFloat(d):!u4(d)&&Zr.test(u)&&(d=Tb(c,u)),t.addValue(c,Tn(d,{owner:t})),n[c]===void 0&&(n[c]=d),d!==null&&t.setBaseTarget(c,d))}}function p4(t,e){return e?(e[t]||e.default||e).from:void 0}function m4(t,e,n){const r={};for(const i in t){const s=p4(i,e);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function g4({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function y4(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function Ib(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const c=t.getValue("willChange");r&&(s=r);const u=[],d=i&&t.animationState&&t.animationState.getState()[i];for(const h in a){const p=t.getValue(h),g=a[h];if(!p||g===void 0||d&&g4(d,h))continue;const _={delay:n,elapsed:0,...Eg(s||{},h)};if(window.HandoffAppearAnimations){const x=t.getProps()[RE];if(x){const v=window.HandoffAppearAnimations(x,h,p,xe);v!==null&&(_.elapsed=v,_.isHandoff=!0)}}let b=!_.isHandoff&&!y4(p,g);if(_.type==="spring"&&(p.getVelocity()||_.velocity)&&(b=!1),p.animation&&(b=!1),b)continue;p.start(bg(h,p,g,t.shouldReduceMotion&&Gi.has(h)?{type:!1}:_));const k=p.animation;Tu(c)&&(c.add(h),k.then(()=>c.remove(h))),u.push(k)}return o&&Promise.all(u).then(()=>{o&&h4(t,o)}),u}function Tp(t,e,n={}){const r=wd(t,e,n.custom);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(Ib(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=i;return v4(t,e,u+c,d,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function v4(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(t.variantChildren).sort(w4).forEach((u,d)=>{u.notify("AnimationStart",e),o.push(Tp(u,e,{...s,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function w4(t,e){return t.sortNodePosition(e)}function x4(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>Tp(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=Tp(t,e,n);else{const i=typeof e=="function"?wd(t,e,n.custom):e;r=Promise.all(Ib(t,i,n))}return r.then(()=>t.notify("AnimationComplete",e))}const _4=[...ag].reverse(),E4=ag.length;function b4(t){return e=>Promise.all(e.map(({animation:n,options:r})=>x4(t,n,r)))}function T4(t){let e=b4(t);const n=A4();let r=!0;const i=(c,u)=>{const d=wd(t,u);if(d){const{transition:h,transitionEnd:p,...g}=d;c={...c,...g,...p}}return c};function s(c){e=c(t)}function o(c,u){const d=t.getProps(),h=t.getVariantContext(!0)||{},p=[],g=new Set;let _={},b=1/0;for(let x=0;x<E4;x++){const v=_4[x],w=n[v],P=d[v]!==void 0?d[v]:h[v],O=qa(P),N=v===u?w.isActive:null;N===!1&&(b=x);let T=P===h[v]&&P!==d[v]&&O;if(T&&r&&t.manuallyAnimateOnMount&&(T=!1),w.protectedKeys={..._},!w.isActive&&N===null||!P&&!w.prevProp||md(P)||typeof P=="boolean")continue;let A=S4(w.prevProp,P)||v===u&&w.isActive&&!T&&O||x>b&&O,C=!1;const D=Array.isArray(P)?P:[P];let M=D.reduce(i,{});N===!1&&(M={});const{prevResolvedValues:R={}}=w,W={...R,...M},J=X=>{A=!0,g.has(X)&&(C=!0,g.delete(X)),w.needsAnimating[X]=!0};for(const X in W){const ee=M[X],z=R[X];if(_.hasOwnProperty(X))continue;let G=!1;_u(ee)&&_u(z)?G=!JE(ee,z):G=ee!==z,G?ee!==void 0?J(X):g.add(X):ee!==void 0&&g.has(X)?J(X):w.protectedKeys[X]=!0}w.prevProp=P,w.prevResolvedValues=M,w.isActive&&(_={..._,...M}),r&&t.blockInitialAnimation&&(A=!1),A&&(!T||C)&&p.push(...D.map(X=>({animation:X,options:{type:v,...c}})))}if(g.size){const x={};g.forEach(v=>{const w=t.getBaseTarget(v);w!==void 0&&(x[v]=w)}),p.push({animation:x})}let k=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(k=!1),r=!1,k?e(p):Promise.resolve()}function a(c,u,d){var h;if(n[c].isActive===u)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(g=>{var _;return(_=g.animationState)===null||_===void 0?void 0:_.setActive(c,u)}),n[c].isActive=u;const p=o(d,c);for(const g in n)n[g].protectedKeys={};return p}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function S4(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!JE(e,t):!1}function hi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function A4(){return{animate:hi(!0),whileInView:hi(),whileHover:hi(),whileTap:hi(),whileDrag:hi(),whileFocus:hi(),exit:hi()}}class k4 extends oi{constructor(e){super(e),e.animationState||(e.animationState=T4(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),md(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let C4=0;class I4 extends oi{constructor(){super(...arguments),this.id=C4++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e,{custom:r??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const P4={animation:{Feature:k4},exit:{Feature:I4}},c1=(t,e)=>Math.abs(t-e);function R4(t,e){const n=c1(t.x,e.x),r=c1(t.y,e.y);return Math.sqrt(n**2+r**2)}class Pb{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Kh(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=R4(h.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:_}=h,{timestamp:b}=et;this.history.push({..._,timestamp:b});const{onStart:k,onMove:x}=this.handlers;p||(k&&k(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,h)},this.handlePointerMove=(h,p)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Gh(p,this.transformPagePoint),xe.update(this.updatePoint,!0)},this.handlePointerUp=(h,p)=>{this.end();const{onEnd:g,onSessionEnd:_,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Kh(h.type==="pointercancel"?this.lastMoveEventInfo:Gh(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(h,k),_&&_(h,k)},!GE(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=vd(e),a=Gh(o,this.transformPagePoint),{point:c}=a,{timestamp:u}=et;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(e,Kh(a,this.history)),this.removeListeners=$r(er(this.contextWindow,"pointermove",this.handlePointerMove),er(this.contextWindow,"pointerup",this.handlePointerUp),er(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pn(this.updatePoint)}}function Gh(t,e){return e?{point:e(t.point)}:t}function u1(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Kh({point:t},e){return{point:t,delta:u1(t,Rb(e)),offset:u1(t,D4(e)),velocity:V4(e,.1)}}function D4(t){return t[0]}function Rb(t){return t[t.length-1]}function V4(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=Rb(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Br(e)));)n--;if(!r)return{x:0,y:0};const s=$n(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function tn(t){return t.max-t.min}function Sp(t,e=0,n=.01){return Math.abs(t-e)<=n}function d1(t,e,n,r=.5){t.origin=r,t.originPoint=Oe(e.min,e.max,t.origin),t.scale=tn(n)/tn(e),(Sp(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Oe(n.min,n.max,t.origin)-t.originPoint,(Sp(t.translate)||isNaN(t.translate))&&(t.translate=0)}function va(t,e,n,r){d1(t.x,e.x,n.x,r?r.originX:void 0),d1(t.y,e.y,n.y,r?r.originY:void 0)}function h1(t,e,n){t.min=n.min+e.min,t.max=t.min+tn(e)}function N4(t,e,n){h1(t.x,e.x,n.x),h1(t.y,e.y,n.y)}function f1(t,e,n){t.min=e.min-n.min,t.max=t.min+tn(e)}function wa(t,e,n){f1(t.x,e.x,n.x),f1(t.y,e.y,n.y)}function M4(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Oe(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Oe(n,t,r.max):Math.min(t,n)),t}function p1(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function L4(t,{top:e,left:n,bottom:r,right:i}){return{x:p1(t.x,n,i),y:p1(t.y,e,r)}}function m1(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function O4(t,e){return{x:m1(t.x,e.x),y:m1(t.y,e.y)}}function j4(t,e){let n=.5;const r=tn(t),i=tn(e);return i>r?n=Ys(e.min,e.max-r,t.min):r>i&&(n=Ys(t.min,t.max-i,e.min)),Jr(0,1,n)}function F4(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ap=.35;function $4(t=Ap){return t===!1?t=0:t===!0&&(t=Ap),{x:g1(t,"left","right"),y:g1(t,"top","bottom")}}function g1(t,e,n){return{min:y1(t,e),max:y1(t,n)}}function y1(t,e){return typeof t=="number"?t:t[e]||0}const v1=()=>({translate:0,scale:1,origin:0,originPoint:0}),As=()=>({x:v1(),y:v1()}),w1=()=>({min:0,max:0}),Qe=()=>({x:w1(),y:w1()});function on(t){return[t("x"),t("y")]}function Db({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function B4({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function z4(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Qh(t){return t===void 0||t===1}function kp({scale:t,scaleX:e,scaleY:n}){return!Qh(t)||!Qh(e)||!Qh(n)}function gi(t){return kp(t)||Vb(t)||t.z||t.rotate||t.rotateX||t.rotateY}function Vb(t){return x1(t.x)||x1(t.y)}function x1(t){return t&&t!=="0%"}function Su(t,e,n){const r=t-n,i=e*r;return n+i}function _1(t,e,n,r,i){return i!==void 0&&(t=Su(t,i,r)),Su(t,n,r)+e}function Cp(t,e=0,n=1,r,i){t.min=_1(t.min,e,n,r,i),t.max=_1(t.max,e,n,r,i)}function Nb(t,{x:e,y:n}){Cp(t.x,e.translate,e.scale,e.originPoint),Cp(t.y,n.translate,n.scale,n.originPoint)}function U4(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const c=s.instance;c&&c.style&&c.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ks(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Nb(t,o)),r&&gi(s.latestValues)&&ks(t,s.latestValues))}e.x=E1(e.x),e.y=E1(e.y)}function E1(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function br(t,e){t.min=t.min+e,t.max=t.max+e}function b1(t,e,[n,r,i]){const s=e[i]!==void 0?e[i]:.5,o=Oe(t.min,t.max,s);Cp(t,e[n],e[r],o,e.scale)}const H4=["x","scaleX","originX"],W4=["y","scaleY","originY"];function ks(t,e){b1(t.x,e,H4),b1(t.y,e,W4)}function Mb(t,e){return Db(z4(t.getBoundingClientRect(),e))}function q4(t,e,n){const r=Mb(t,n),{scroll:i}=e;return i&&(br(r.x,i.offset.x),br(r.y,i.offset.y)),r}const Lb=({current:t})=>t?t.ownerDocument.defaultView:null,G4=new WeakMap;class K4{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(vd(d,"page").point)},s=(d,h)=>{const{drag:p,dragPropagation:g,onDragStart:_}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=QE(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),on(k=>{let x=this.getAxisMotionValue(k).get()||0;if(Fn.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const w=v.layout.layoutBox[k];w&&(x=tn(w)*(parseFloat(x)/100))}}this.originPoint[k]=x}),_&&xe.update(()=>_(d,h),!1,!0);const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},o=(d,h)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:_,onDrag:b}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:k}=h;if(g&&this.currentDirection===null){this.currentDirection=Q4(k),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",h.point,k),this.updateAxis("y",h.point,k),this.visualElement.render(),b&&b(d,h)},a=(d,h)=>this.stop(d,h),c=()=>on(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Pb(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Lb(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&xe.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!ac(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=M4(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ts(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=L4(i.layoutBox,n):this.constraints=!1,this.elastic=$4(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&on(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=F4(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ts(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=q4(r,i.root,this.visualElement.getTransformPagePoint());let o=O4(i.layout.layoutBox,s);if(n){const a=n(B4(o));this.hasMutatedConstraints=!!a,a&&(o=Db(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},u=on(d=>{if(!ac(d,n,this.currentDirection))return;let h=c&&c[d]||{};o&&(h={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,_={type:"inertia",velocity:r?e[d]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(d,_)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return r.start(bg(e,r,0,n))}stopAnimation(){on(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){on(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){on(n=>{const{drag:r}=this.getProps();if(!ac(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Oe(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ts(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};on(o=>{const a=this.getAxisMotionValue(o);if(a){const c=a.get();i[o]=j4({min:c,max:c},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),on(o=>{if(!ac(o,e,null))return;const a=this.getAxisMotionValue(o),{min:c,max:u}=this.constraints[o];a.set(Oe(c,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;G4.set(this.visualElement,this);const e=this.visualElement.current,n=er(e,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Ts(c)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=Jn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(on(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Ap,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ac(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Q4(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Y4 extends oi{constructor(e){super(e),this.removeGroupControls=Ue,this.removeListeners=Ue,this.controls=new K4(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ue}unmount(){this.removeGroupControls(),this.removeListeners()}}const T1=t=>(e,n)=>{t&&xe.update(()=>t(e,n))};class X4 extends oi{constructor(){super(...arguments),this.removePointerDownListener=Ue}onPointerDown(e){this.session=new Pb(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Lb(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:T1(e),onStart:T1(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&xe.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=er(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function J4(){const t=I.useContext(fd);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=I.useId();return I.useEffect(()=>r(i),[]),!e&&n?[!1,()=>n&&n(i)]:[!0]}const Mc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function S1(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const zo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(re.test(t))t=parseFloat(t);else return t;const n=S1(t,e.target.x),r=S1(t,e.target.y);return`${n}% ${r}%`}},Z4={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Zr.parse(t);if(i.length>5)return r;const s=Zr.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,c=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=c;const u=Oe(a,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class e3 extends Ce.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;cP(t3),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Mc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||xe.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ob(t){const[e,n]=J4(),r=I.useContext(cg);return Ce.createElement(e3,{...t,layoutGroup:r,switchLayoutGroup:I.useContext(VE),isPresent:e,safeToRemove:n})}const t3={borderRadius:{...zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:zo,borderTopRightRadius:zo,borderBottomLeftRadius:zo,borderBottomRightRadius:zo,boxShadow:Z4},jb=["TopLeft","TopRight","BottomLeft","BottomRight"],n3=jb.length,A1=t=>typeof t=="string"?parseFloat(t):t,k1=t=>typeof t=="number"||re.test(t);function r3(t,e,n,r,i,s){i?(t.opacity=Oe(0,n.opacity!==void 0?n.opacity:1,i3(r)),t.opacityExit=Oe(e.opacity!==void 0?e.opacity:1,0,s3(r))):s&&(t.opacity=Oe(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<n3;o++){const a=`border${jb[o]}Radius`;let c=C1(e,a),u=C1(n,a);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||k1(c)===k1(u)?(t[a]=Math.max(Oe(A1(c),A1(u),r),0),(Fn.test(u)||Fn.test(c))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=Oe(e.rotate||0,n.rotate||0,r))}function C1(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const i3=Fb(0,.5,lb),s3=Fb(.5,.95,Ue);function Fb(t,e,n){return r=>r<t?0:r>e?1:n(Ys(t,e,r))}function I1(t,e){t.min=e.min,t.max=e.max}function sn(t,e){I1(t.x,e.x),I1(t.y,e.y)}function P1(t,e,n,r,i){return t-=e,t=Su(t,1/n,r),i!==void 0&&(t=Su(t,1/i,r)),t}function o3(t,e=0,n=1,r=.5,i,s=t,o=t){if(Fn.test(e)&&(e=parseFloat(e),e=Oe(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Oe(s.min,s.max,r);t===s&&(a-=e),t.min=P1(t.min,e,n,a,i),t.max=P1(t.max,e,n,a,i)}function R1(t,e,[n,r,i],s,o){o3(t,e[n],e[r],e[i],e.scale,s,o)}const a3=["x","scaleX","originX"],l3=["y","scaleY","originY"];function D1(t,e,n,r){R1(t.x,e,a3,n?n.x:void 0,r?r.x:void 0),R1(t.y,e,l3,n?n.y:void 0,r?r.y:void 0)}function V1(t){return t.translate===0&&t.scale===1}function $b(t){return V1(t.x)&&V1(t.y)}function c3(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Bb(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function N1(t){return tn(t.x)/tn(t.y)}class u3{constructor(){this.members=[]}add(e){Tg(this.members,e),e.scheduleRender()}remove(e){if(Sg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function M1(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:c,rotateX:u,rotateY:d}=n;c&&(r+=`rotate(${c}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const d3=(t,e)=>t.depth-e.depth;class h3{constructor(){this.children=[],this.isDirty=!1}add(e){Tg(this.children,e),this.isDirty=!0}remove(e){Sg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(d3),this.isDirty=!1,this.children.forEach(e)}}function f3(t,e){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Pn(r),t(s-e))};return xe.read(r,!0),()=>Pn(r)}function p3(t){window.MotionDebug&&window.MotionDebug.record(t)}function m3(t){return t instanceof SVGElement&&t.tagName!=="svg"}function g3(t,e,n){const r=Ct(t)?t:Tn(t);return r.start(bg("",r,e,n)),r.animation}const L1=["","X","Y","Z"],y3={visibility:"hidden"},O1=1e3;let v3=0;const yi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function zb({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=v3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,yi.totalNodes=yi.resolvedTargetDeltas=yi.recalculatedProjection=0,this.nodes.forEach(_3),this.nodes.forEach(A3),this.nodes.forEach(k3),this.nodes.forEach(E3),p3(yi)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new h3)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Ag),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const c=this.eventHandlers.get(o);c&&c.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=m3(o),this.instance=o;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||c)&&(this.isLayoutDirty=!0),t){let h;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=f3(p,250),Mc.hasAnimatedSinceResize&&(Mc.hasAnimatedSinceResize=!1,this.nodes.forEach(F1))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||d.getDefaultTransition()||D3,{onLayoutAnimationStart:k,onLayoutAnimationComplete:x}=d.getProps(),v=!this.targetLayout||!Bb(this.targetLayout,_)||g,w=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||w||p&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,w);const P={...Eg(b,"layout"),onPlay:k,onComplete:x};(d.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P)}else p||F1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(C3),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(j1);return}this.isUpdating||this.nodes.forEach(T3),this.isUpdating=!1,this.nodes.forEach(S3),this.nodes.forEach(w3),this.nodes.forEach(x3),this.clearAllSnapshots();const a=performance.now();et.delta=Jr(0,1e3/60,a-et.timestamp),et.timestamp=a,et.isProcessing=!0,Fh.update.process(et),Fh.preRender.process(et),Fh.render.process(et),et.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(b3),this.sharedNodes.forEach(I3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,xe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){xe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!$b(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(a||gi(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return o&&(c=this.removeTransform(c)),V3(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Qe();const a=o.measureViewportBox(),{scroll:c}=this.root;return c&&(br(a.x,c.offset.x),br(a.y,c.offset.y)),a}removeElementScroll(o){const a=Qe();sn(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:h}=u;if(u!==this.root&&d&&h.layoutScroll){if(d.isRoot){sn(a,o);const{scroll:p}=this.root;p&&(br(a.x,-p.offset.x),br(a.y,-p.offset.y))}br(a.x,d.offset.x),br(a.y,d.offset.y)}}return a}applyTransform(o,a=!1){const c=Qe();sn(c,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ks(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),gi(d.latestValues)&&ks(c,d.latestValues)}return gi(this.latestValues)&&ks(c,this.latestValues),c}removeTransform(o){const a=Qe();sn(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!gi(u.latestValues))continue;kp(u.latestValues)&&u.updateSnapshot();const d=Qe(),h=u.measurePageBox();sn(d,h),D1(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return gi(this.latestValues)&&D1(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==et.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:p}=this.options;if(!(!this.layout||!(h||p))){if(this.resolvedRelativeTargetAt=et.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),wa(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),N4(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):sn(this.target,this.layout.layoutBox),Nb(this.target,this.targetDelta)):sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),wa(this.relativeTargetOrigin,this.target,g.target),sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}yi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||kp(this.parent.latestValues)||Vb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),c=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===et.timestamp&&(u=!1),u)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;sn(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;U4(this.layoutCorrected,this.treeScale,this.path,c),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:_}=a;if(!_){this.projectionTransform&&(this.projectionDelta=As(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=As(),this.projectionDeltaWithTransform=As());const b=this.projectionTransform;va(this.projectionDelta,this.layoutCorrected,_,this.latestValues),this.projectionTransform=M1(this.projectionDelta,this.treeScale),(this.projectionTransform!==b||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),yi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},h=As();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Qe(),g=c?c.source:void 0,_=this.layout?this.layout.source:void 0,b=g!==_,k=this.getStack(),x=!k||k.members.length<=1,v=!!(b&&!x&&this.options.crossfade===!0&&!this.path.some(R3));this.animationProgress=0;let w;this.mixTargetDelta=P=>{const O=P/1e3;$1(h.x,o.x,O),$1(h.y,o.y,O),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wa(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),P3(this.relativeTarget,this.relativeTargetOrigin,p,O),w&&c3(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=Qe()),sn(w,this.relativeTarget)),b&&(this.animationValues=d,r3(d,u,this.latestValues,O,v,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=xe.update(()=>{Mc.hasAnimatedSinceResize=!0,this.currentAnimation=g3(0,O1,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(O1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:c,layout:u,latestValues:d}=o;if(!(!a||!c||!u)){if(this!==o&&this.layout&&u&&Ub(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||Qe();const h=tn(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+h;const p=tn(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+p}sn(a,c),ks(a,d),va(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new u3),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:c}=o;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(a=!0),!a)return;const u={};for(let d=0;d<L1.length;d++){const h="rotate"+L1[d];c[h]&&(u[h]=c[h],o.setStaticValue(h,0))}o.render();for(const d in u)o.setStaticValue(d,u[d]);o.scheduleRender()}getProjectionStyles(o){var a,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return y3;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Nc(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Nc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!gi(this.latestValues)&&(b.transform=d?d({},""):"none",this.hasProjected=!1),b}const p=h.animationValues||h.latestValues;this.applyTransformsToTarget(),u.transform=M1(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:g,y:_}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${_.origin*100}% 0`,h.animationValues?u.opacity=h===this?(c=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const b in wu){if(p[b]===void 0)continue;const{correct:k,applyTo:x}=wu[b],v=u.transform==="none"?p[b]:k(p[b],h);if(x){const w=x.length;for(let P=0;P<w;P++)u[x[P]]=v}else u[b]=v}return this.options.layoutId&&(u.pointerEvents=h===this?Nc(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(j1),this.root.sharedNodes.clear()}}}function w3(t){t.updateLayout()}function x3(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?on(h=>{const p=o?n.measuredBox[h]:n.layoutBox[h],g=tn(p);p.min=r[h].min,p.max=p.min+g}):Ub(s,n.layoutBox,r)&&on(h=>{const p=o?n.measuredBox[h]:n.layoutBox[h],g=tn(r[h]);p.max=p.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+g)});const a=As();va(a,r,n.layoutBox);const c=As();o?va(c,t.applyTransform(i,!0),n.measuredBox):va(c,r,n.layoutBox);const u=!$b(a);let d=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:p,layout:g}=h;if(p&&g){const _=Qe();wa(_,n.layoutBox,p.layoutBox);const b=Qe();wa(b,r,g.layoutBox),Bb(_,b)||(d=!0),h.options.layoutRoot&&(t.relativeTarget=b,t.relativeTargetOrigin=_,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function _3(t){yi.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function E3(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function b3(t){t.clearSnapshot()}function j1(t){t.clearMeasurements()}function T3(t){t.isLayoutDirty=!1}function S3(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function F1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function A3(t){t.resolveTargetDelta()}function k3(t){t.calcProjection()}function C3(t){t.resetRotation()}function I3(t){t.removeLeadSnapshot()}function $1(t,e,n){t.translate=Oe(e.translate,0,n),t.scale=Oe(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function B1(t,e,n,r){t.min=Oe(e.min,n.min,r),t.max=Oe(e.max,n.max,r)}function P3(t,e,n,r){B1(t.x,e.x,n.x,r),B1(t.y,e.y,n.y,r)}function R3(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const D3={duration:.45,ease:[.4,0,.1,1]},z1=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),U1=z1("applewebkit/")&&!z1("chrome/")?Math.round:Ue;function H1(t){t.min=U1(t.min),t.max=U1(t.max)}function V3(t){H1(t.x),H1(t.y)}function Ub(t,e,n){return t==="position"||t==="preserve-aspect"&&!Sp(N1(e),N1(n),.2)}const N3=zb({attachResizeListener:(t,e)=>Jn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Yh={current:void 0},Hb=zb({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Yh.current){const t=new N3({});t.mount(window),t.setOptions({layoutScroll:!0}),Yh.current=t}return Yh.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),M3={pan:{Feature:X4},drag:{Feature:Y4,ProjectionNode:Hb,MeasureLayout:Ob}},L3=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function O3(t){const e=L3.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function Ip(t,e,n=1){const[r,i]=O3(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return Ab(o)?parseFloat(o):o}else return vp(i)?Ip(i,e,n+1):i}function j3(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(i=>{const s=i.get();if(!vp(s))return;const o=Ip(s,r);o&&i.set(o)});for(const i in e){const s=e[i];if(!vp(s))continue;const o=Ip(s,r);o&&(e[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:e,transitionEnd:n}}const F3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Wb=t=>F3.has(t),$3=t=>Object.keys(t).some(Wb),W1=t=>t===Ki||t===re,q1=(t,e)=>parseFloat(t.split(", ")[e]),G1=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return q1(i[1],e);{const s=r.match(/^matrix\((.+)\)$/);return s?q1(s[1],t):0}},B3=new Set(["x","y","z"]),z3=dl.filter(t=>!B3.has(t));function U3(t){const e=[];return z3.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const Xs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:G1(4,13),y:G1(5,14)};Xs.translateX=Xs.x;Xs.translateY=Xs.y;const H3=(t,e,n)=>{const r=e.measureViewportBox(),i=e.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(u=>{a[u]=Xs[u](r,s)}),e.render();const c=e.measureViewportBox();return n.forEach(u=>{const d=e.getValue(u);d&&d.jump(a[u]),t[u]=Xs[u](c,s)}),t},W3=(t,e,n={},r={})=>{e={...e},r={...r};const i=Object.keys(e).filter(Wb);let s=[],o=!1;const a=[];if(i.forEach(c=>{const u=t.getValue(c);if(!t.hasValue(c))return;let d=n[c],h=Bo(d);const p=e[c];let g;if(_u(p)){const _=p.length,b=p[0]===null?1:0;d=p[b],h=Bo(d);for(let k=b;k<_&&p[k]!==null;k++)g?xd(Bo(p[k])===g):g=Bo(p[k])}else g=Bo(p);if(h!==g)if(W1(h)&&W1(g)){const _=u.get();typeof _=="string"&&u.set(parseFloat(_)),typeof p=="string"?e[c]=parseFloat(p):Array.isArray(p)&&g===re&&(e[c]=p.map(parseFloat))}else h!=null&&h.transform&&(g!=null&&g.transform)&&(d===0||p===0)?d===0?u.set(g.transform(d)):e[c]=h.transform(p):(o||(s=U3(t),o=!0),a.push(c),r[c]=r[c]!==void 0?r[c]:e[c],u.jump(p))}),a.length){const c=a.indexOf("height")>=0?window.pageYOffset:null,u=H3(e,t,a);return s.length&&s.forEach(([d,h])=>{t.getValue(d).set(h)}),t.render(),pd&&c!==null&&window.scrollTo({top:c}),{target:u,transitionEnd:r}}else return{target:e,transitionEnd:r}};function q3(t,e,n,r){return $3(e)?W3(t,e,n,r):{target:e,transitionEnd:r}}const G3=(t,e,n,r)=>{const i=j3(t,e,r);return e=i.target,r=i.transitionEnd,q3(t,e,n,r)},Pp={current:null},qb={current:!1};function K3(){if(qb.current=!0,!!pd)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Pp.current=t.matches;t.addListener(e),e()}else Pp.current=!1}function Q3(t,e,n){const{willChange:r}=e;for(const i in e){const s=e[i],o=n[i];if(Ct(s))t.addValue(i,s),Tu(r)&&r.add(i);else if(Ct(o))t.addValue(i,Tn(s,{owner:t})),Tu(r)&&r.remove(i);else if(o!==s)if(t.hasValue(i)){const a=t.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(i);t.addValue(i,Tn(a!==void 0?a:s,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const K1=new WeakMap,Gb=Object.keys(Ga),Y3=Gb.length,Q1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],X3=lg.length;class J3{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>xe.render(this.render,!1,!0);const{latestValues:a,renderState:c}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=gd(n),this.isVariantNode=DE(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const h in d){const p=d[h];a[h]!==void 0&&Ct(p)&&(p.set(a[h],!1),Tu(u)&&u.add(h))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,K1.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),qb.current||K3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Pp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){K1.delete(this.current),this.projection&&this.projection.unmount(),Pn(this.notifyUpdate),Pn(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=Gi.has(e),i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&xe.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{i(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,i,s){let o,a;for(let c=0;c<Y3;c++){const u=Gb[c],{isEnabled:d,Feature:h,ProjectionNode:p,MeasureLayout:g}=Ga[u];p&&(o=p),d(n)&&(!this.features[u]&&h&&(this.features[u]=new h(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:u,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g}=n;this.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||h&&Ts(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:g})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Q1.length;r++){const i=Q1[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=e["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=Q3(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<X3;r++){const i=lg[r],s=this.props[i];(qa(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Tn(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=gg(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Ct(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Ag),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Kb extends J3{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},{transformValues:i},s){let o=m4(r,e||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){f4(this,r,o);const a=G3(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:e,transitionEnd:n,...r}}}function Z3(t){return window.getComputedStyle(t)}class e6 extends Kb{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Gi.has(n)){const r=_g(n);return r&&r.default||0}else{const r=Z3(e),i=(LE(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Mb(e,n)}build(e,n,r,i){dg(e,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(e,n){return mg(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ct(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,i){zE(e,n,r,i)}}class t6 extends Kb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Gi.has(n)){const r=_g(n);return r&&r.default||0}return n=UE.has(n)?n:og(n),e.getAttribute(n)}measureInstanceViewportBox(){return Qe()}scrapeMotionValuesFromProps(e,n){return WE(e,n)}build(e,n,r,i){fg(e,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,r,i){HE(e,n,r,i)}mount(e){this.isSVGTag=pg(e.tagName),super.mount(e)}}const n6=(t,e)=>ug(t)?new t6(e,{enableHardwareAcceleration:!1}):new e6(e,{enableHardwareAcceleration:!0}),r6={layout:{ProjectionNode:Hb,MeasureLayout:Ob}},i6={...P4,...JP,...M3,...r6},se=aP((t,e)=>FP(t,e,i6,n6));function Qb(){const t=I.useRef(!1);return uo(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function s6(){const t=Qb(),[e,n]=I.useState(0),r=I.useCallback(()=>{t.current&&n(e+1)},[e]);return[I.useCallback(()=>xe.postRender(r),[r]),e]}class o6 extends I.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function a6({children:t,isPresent:e}){const n=I.useId(),r=I.useRef(null),i=I.useRef({width:0,height:0,top:0,left:0});return I.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:c}=i.current;if(e||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),I.createElement(o6,{isPresent:e,childRef:r,sizeRef:i},I.cloneElement(t,{ref:r}))}const Xh=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=pl(l6),c=I.useId(),u=I.useMemo(()=>({id:c,initial:e,isPresent:n,custom:i,onExitComplete:d=>{a.set(d,!0);for(const h of a.values())if(!h)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),s?void 0:[n]);return I.useMemo(()=>{a.forEach((d,h)=>a.set(h,!1))},[n]),I.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(t=I.createElement(a6,{isPresent:n},t)),I.createElement(fd.Provider,{value:u},t)};function l6(){return new Map}function c6(t){return I.useEffect(()=>()=>t(),[])}const vi=t=>t.key||"";function u6(t,e){t.forEach(n=>{const r=vi(n);e.set(r,n)})}function d6(t){const e=[];return I.Children.forEach(t,n=>{I.isValidElement(n)&&e.push(n)}),e}const or=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=I.useContext(cg).forceRender||s6()[0],c=Qb(),u=d6(t);let d=u;const h=I.useRef(new Map).current,p=I.useRef(d),g=I.useRef(new Map).current,_=I.useRef(!0);if(uo(()=>{_.current=!1,u6(u,g),p.current=d}),c6(()=>{_.current=!0,g.clear(),h.clear()}),_.current)return I.createElement(I.Fragment,null,d.map(v=>I.createElement(Xh,{key:vi(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},v)));d=[...d];const b=p.current.map(vi),k=u.map(vi),x=b.length;for(let v=0;v<x;v++){const w=b[v];k.indexOf(w)===-1&&!h.has(w)&&h.set(w,void 0)}return o==="wait"&&h.size&&(d=[]),h.forEach((v,w)=>{if(k.indexOf(w)!==-1)return;const P=g.get(w);if(!P)return;const O=b.indexOf(w);let N=v;if(!N){const T=()=>{h.delete(w);const E=Array.from(g.keys()).filter(A=>!k.includes(A));if(E.forEach(A=>g.delete(A)),p.current=u.filter(A=>{const C=vi(A);return C===w||E.includes(C)}),!h.size){if(c.current===!1)return;a(),r&&r()}};N=I.createElement(Xh,{key:vi(P),isPresent:!1,onExitComplete:T,custom:e,presenceAffectsLayout:s,mode:o},P),h.set(w,N)}d.splice(O,0,N)}),d=d.map(v=>{const w=v.key;return h.has(w)?v:I.createElement(Xh,{key:vi(v),isPresent:!0,presenceAffectsLayout:s,mode:o},v)}),I.createElement(I.Fragment,null,h.size?d:d.map(v=>I.cloneElement(v)))};function kg(t){const e=pl(()=>Tn(t)),{isStatic:n}=I.useContext(dd);if(n){const[,r]=I.useState(t);I.useEffect(()=>e.on("change",r),[])}return e}const h6=t=>t&&typeof t=="object"&&t.mix,f6=t=>h6(t)?t.mix:void 0;function p6(...t){const e=!Array.isArray(t[0]),n=e?0:-1,r=t[0+n],i=t[1+n],s=t[2+n],o=t[3+n],a=_d(i,s,{mixer:f6(s[0]),...o});return e?a(r):a}function Yb(t,e){const n=kg(e()),r=()=>n.set(e());return r(),uo(()=>{const i=()=>xe.update(r,!1,!0),s=t.map(o=>o.on("change",i));return()=>{s.forEach(o=>o()),Pn(r)}}),n}function m6(t){ya.current=[],t();const e=Yb(ya.current,t);return ya.current=void 0,e}function g6(t,e,n,r){if(typeof t=="function")return m6(t);const i=typeof e=="function"?e:p6(e,n,r);return Array.isArray(t)?Y1(t,i):Y1([t],([s])=>i(s))}function Y1(t,e){const n=pl(()=>[]);return Yb(t,()=>{n.length=0;const r=t.length;for(let i=0;i<r;i++)n[i]=t[i].get();return e(n)})}function y6(t,e={}){const{isStatic:n}=I.useContext(dd),r=I.useRef(null),i=kg(Ct(t)?t.get():t),s=()=>{r.current&&r.current.stop()};return I.useInsertionEffect(()=>i.attach((o,a)=>{if(n)return a(o);if(s(),r.current=Ka({keyframes:[i.get(),o],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:a}),!et.isProcessing){const c=performance.now()-et.timestamp;c<30&&(r.current.time=$n(c))}return i.get()},s),[JSON.stringify(e)]),uo(()=>{if(Ct(t))return t.on("change",o=>i.set(parseFloat(o)))},[i]),i}function v6(t,e,n){var r;if(typeof t=="string"){let i=document;e&&(xd(!!e.current),i=e.current),n?((r=n[t])!==null&&r!==void 0||(n[t]=i.querySelectorAll(t)),t=n[t]):t=i.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}const Lc=new WeakMap;let xr;function w6(t,e){if(e){const{inlineSize:n,blockSize:r}=e[0];return{width:n,height:r}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function x6({target:t,contentRect:e,borderBoxSize:n}){var r;(r=Lc.get(t))===null||r===void 0||r.forEach(i=>{i({target:t,contentSize:e,get size(){return w6(t,n)}})})}function _6(t){t.forEach(x6)}function E6(){typeof ResizeObserver>"u"||(xr=new ResizeObserver(_6))}function b6(t,e){xr||E6();const n=v6(t);return n.forEach(r=>{let i=Lc.get(r);i||(i=new Set,Lc.set(r,i)),i.add(e),xr==null||xr.observe(r)}),()=>{n.forEach(r=>{const i=Lc.get(r);i==null||i.delete(e),i!=null&&i.size||xr==null||xr.unobserve(r)})}}const Oc=new Set;let xa;function T6(){xa=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};Oc.forEach(n=>n(e))},window.addEventListener("resize",xa)}function S6(t){return Oc.add(t),xa||T6(),()=>{Oc.delete(t),!Oc.size&&xa&&(xa=void 0)}}function A6(t,e){return typeof t=="function"?S6(t):b6(t,e)}const k6=50,X1=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),C6=()=>({time:0,x:X1(),y:X1()}),I6={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function J1(t,e,n,r){const i=n[e],{length:s,position:o}=I6[e],a=i.current,c=n.time;i.current=t["scroll"+o],i.scrollLength=t["scroll"+s]-t["client"+s],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Ys(0,i.scrollLength,i.current);const u=r-c;i.velocity=u>k6?0:xg(i.current-a,u)}function P6(t,e,n){J1(t,"x",e,n),J1(t,"y",e,n),e.time=n}function R6(t,e){const n={x:0,y:0};let r=t;for(;r&&r!==e;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const s=r.getBoundingClientRect();n.x+=i.left-s.left,n.y+=i.top-s.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:s}=r.getBBox();n.x+=i,n.y+=s;let o=null,a=r.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=r.parentNode;r=o}else break;return n}const D6={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Rp={start:0,center:.5,end:1};function Z1(t,e,n=0){let r=0;if(Rp[t]!==void 0&&(t=Rp[t]),typeof t=="string"){const i=parseFloat(t);t.endsWith("px")?r=i:t.endsWith("%")?t=i/100:t.endsWith("vw")?r=i/100*document.documentElement.clientWidth:t.endsWith("vh")?r=i/100*document.documentElement.clientHeight:t=i}return typeof t=="number"&&(r=e*t),n+r}const V6=[0,0];function N6(t,e,n,r){let i=Array.isArray(t)?t:V6,s=0,o=0;return typeof t=="number"?i=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?i=t.split(" "):i=[t,Rp[t]?t:"0"]),s=Z1(i[0],n,r),o=Z1(i[1],e),s-o}const M6={x:0,y:0};function L6(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function O6(t,e,n){let{offset:r=D6.All}=n;const{target:i=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=i!==t?R6(i,t):M6,c=i===t?{width:t.scrollWidth,height:t.scrollHeight}:L6(i),u={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let d=!e[s].interpolate;const h=r.length;for(let p=0;p<h;p++){const g=N6(r[p],u[o],c[o],a[s]);!d&&g!==e[s].interpolatorOffsets[p]&&(d=!0),e[s].offset[p]=g}d&&(e[s].interpolate=_d(e[s].offset,_b(r)),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=e[s].interpolate(e[s].current)}function j6(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let r=e;for(;r&&r!==t;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function F6(t,e,n,r={}){return{measure:()=>j6(t,r.target,n),update:i=>{P6(t,n,i),(r.offset||r.target)&&O6(t,n,r)},notify:()=>e(n)}}const Uo=new WeakMap,ew=new WeakMap,Jh=new WeakMap,tw=t=>t===document.documentElement?window:t;function $6(t,{container:e=document.documentElement,...n}={}){let r=Jh.get(e);r||(r=new Set,Jh.set(e,r));const i=C6(),s=F6(e,t,i,n);if(r.add(s),!Uo.has(e)){const a=()=>{for(const p of r)p.measure()},c=()=>{for(const p of r)p.update(et.timestamp)},u=()=>{for(const p of r)p.notify()},d=()=>{xe.read(a,!1,!0),xe.read(c,!1,!0),xe.update(u,!1,!0)};Uo.set(e,d);const h=tw(e);window.addEventListener("resize",d,{passive:!0}),e!==document.documentElement&&ew.set(e,A6(e,d)),h.addEventListener("scroll",d,{passive:!0})}const o=Uo.get(e);return xe.read(o,!1,!0),()=>{var a;Pn(o);const c=Jh.get(e);if(!c||(c.delete(s),c.size))return;const u=Uo.get(e);Uo.delete(e),u&&(tw(e).removeEventListener("scroll",u),(a=ew.get(e))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function nw(t,e){ZE(!!(!e||e.current))}const B6=()=>({scrollX:Tn(0),scrollY:Tn(0),scrollXProgress:Tn(0),scrollYProgress:Tn(0)});function z6({container:t,target:e,layoutEffect:n=!0,...r}={}){const i=pl(B6);return(n?uo:I.useEffect)(()=>(nw("target",e),nw("container",t),$6(({x:o,y:a})=>{i.scrollX.set(o.current),i.scrollXProgress.set(o.progress),i.scrollY.set(a.current),i.scrollYProgress.set(a.progress)},{...r,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(r.offset)]),i}const U6={classical:"/assets/covers/classical_cover.jpg",rock:"/assets/covers/rock_cover.jpeg",pop:"/assets/covers/pop_cover.jpeg",electronic:"/assets/covers/electronic_cover.jpeg",jazz:"/assets/covers/jazz_cover.jpeg",ambient:"/assets/covers/ambient_cover.jpeg",soundtrack:"/assets/covers/galaxy_2.gif",hiphop:"/assets/covers/hiphop_cover.jpg"},Ae={chopin:"/assets/covers/chopin.jpeg",chopin_etudes:"/assets/covers/chopin_etudes.jpeg",bach:"/assets/covers/bach.jpeg",queen:"/assets/covers/rock_cover.jpg",bonJovi:"/assets/covers/bon_jovi.jpeg",rema:"/assets/covers/rema.jpg",rosalia:"/assets/covers/rosalia.jpg",eminem:"/assets/covers/eminem.jpg",liebestraume:"/assets/covers/liebestraume.jpg",rema_calm_down:"/assets/covers/rema_calm_down.jpeg",memory_reboot:"/assets/covers/memory_reboot.jpeg"},rw={Stan:"/assets/covers/stan.jpeg"},lc={urban_blues:"/assets/covers/urban_blues.jpeg",miss_g:"/assets/covers/miss_g.jpeg",十一月的萧邦:"/assets/covers/11月的萧邦.jpg"},fe={classical:"#7a1f1f",rock:"#585858",pop:"#9c27b0",electronic:"#3a1f7a",jazz:"#7a4b1f",ambient:"#2d5d2a",soundtrack:"#1f5a7a",hiphop:"#333333"},hr=[{id:"classical-1",title:"Air on G String",artist:"Johann Sebastian Bach",album:"Orchestral Suites",genre:"classical",coverArt:Ae.bach,audioSrc:"/assets/musics/single_tracks/air_on_g_string.mp3",duration:180,color:fe.classical},{id:"classical-3",title:"Etude Op. 10 No. 4",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:Ae.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_4.mp3",duration:120,color:fe.classical},{id:"classical-4",title:"Etude Op. 25 No. 11",artist:"Frédéric Chopin",album:"Etudes",genre:"classical",coverArt:Ae.chopin_etudes,audioSrc:"/assets/musics/single_tracks/etudes_no_23.mp3",duration:260,color:fe.classical},{id:"classical-5",title:"Liebestraume No. 3",artist:"Franz Liszt",album:"Piano Dreams",genre:"classical",coverArt:Ae.liebestraume,audioSrc:"/assets/musics/single_tracks/liebestraume_no_3.mp3",duration:295,color:fe.classical},{id:"nocturne-1",title:"Nocturne Op. 9 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_1.mp3",duration:310,color:fe.classical},{id:"nocturne-2",title:"Nocturne Op. 9 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_2.mp3",duration:270,color:fe.classical},{id:"nocturne-3",title:"Nocturne Op. 9 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_3.mp3",duration:330,color:fe.classical},{id:"nocturne-4",title:"Nocturne Op. 15 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_4.mp3",duration:305,color:fe.classical},{id:"nocturne-5",title:"Nocturne Op. 15 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_5.mp3",duration:315,color:fe.classical},{id:"nocturne-6",title:"Nocturne Op. 15 No. 3",artist:"Frédéric Chopin",album:"Complete Nocturnes",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_6.mp3",duration:290,color:fe.classical},{id:"nocturne-7",title:"Nocturne Op. 27 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_7.mp3",duration:340,color:fe.classical},{id:"nocturne-8",title:"Nocturne Op. 27 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_8.mp3",duration:320,color:fe.classical},{id:"nocturne-9",title:"Nocturne Op. 32 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_9.mp3",duration:280,color:fe.classical},{id:"nocturne-10",title:"Nocturne Op. 32 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_10.mp3",duration:300,color:fe.classical},{id:"nocturne-11",title:"Nocturne Op. 37 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_11.mp3",duration:325,color:fe.classical},{id:"nocturne-12",title:"Nocturne Op. 37 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 2",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_12.mp3",duration:310,color:fe.classical},{id:"nocturne-13",title:"Nocturne Op. 48 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_13.mp3",duration:350,color:fe.classical},{id:"nocturne-14",title:"Nocturne Op. 48 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_14.mp3",duration:335,color:fe.classical},{id:"nocturne-15",title:"Nocturne Op. 55 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_15.mp3",duration:295,color:fe.classical},{id:"nocturne-17",title:"Nocturne Op. 55 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_17.mp3",duration:330,color:fe.classical},{id:"nocturne-18",title:"Nocturne Op. 62 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_18.mp3",duration:360,color:fe.classical},{id:"nocturne-19",title:"Nocturne Op. 62 No. 2",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_19.mp3",duration:340,color:fe.classical},{id:"nocturne-20",title:"Nocturne Op. 72 No. 1",artist:"Frédéric Chopin",album:"Complete Nocturnes Vol. 3",genre:"classical",coverArt:Ae.chopin,audioSrc:"/assets/musics/single_tracks/nocturne_20.mp3",duration:315,color:fe.classical},{id:"rock-1",title:"Bohemian Rhapsody",artist:"Queen",album:"A Night at the Opera",genre:"rock",coverArt:U6.rock,audioSrc:"/assets/musics/single_tracks/bohemian_rhapsody.mp3",duration:355,color:fe.rock},{id:"rock-2",title:"It's My Life",artist:"Bon Jovi",album:"Crush",genre:"rock",coverArt:Ae.bonJovi,audioSrc:"/assets/musics/single_tracks/its_my_life.mp3",duration:224,color:fe.rock},{id:"pop-1",title:"Calm Down",artist:"Rema",album:"Rave & Roses",genre:"pop",coverArt:Ae.rema_calm_down,audioSrc:"/assets/musics/single_tracks/calm_down.mp3",duration:234,color:fe.pop},{id:"pop-2",title:"Candy",artist:"Naoko Gushima",album:"Motomami",genre:"pop",coverArt:lc.miss_g,audioSrc:"/assets/musics/single_tracks/candy.mp3",duration:185,color:fe.pop},{id:"pop-3",title:"Missing You",artist:"Naoko Gushima",album:"Love Stories",genre:"pop",coverArt:lc.urban_blues,audioSrc:"/assets/musics/single_tracks/missing_you.mp3",duration:210,color:fe.pop},{id:"pop-4",title:"夜曲 (Nocturne)",artist:"Jay Chou",album:"November's chopin",genre:"pop",coverArt:lc.十一月的萧邦,audioSrc:"/assets/musics/single_tracks/夜曲.mp3",duration:200,color:fe.pop},{id:"electronic-2",title:"Memory Reboot",artist:"Cyber Dreams",album:"Neural Network",genre:"electronic",coverArt:Ae.memory_reboot,audioSrc:"/assets/musics/single_tracks/memory_reboot.mp3",duration:240,color:fe.electronic},{id:"electronic-3",title:"Monochrome",artist:"Naoko Gushima",album:"Color Code",genre:"electronic",coverArt:lc.urban_blues,audioSrc:"/assets/musics/single_tracks/monochrome.mp3",duration:218,color:fe.electronic},{id:"hiphop-1",title:"Stan (Instrumental)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:rw.Stan,audioSrc:"/assets/musics/single_tracks/stan_instrumental.mp3",duration:340,color:fe.hiphop},{id:"hiphop-2",title:"Stan (MIDI Version)",artist:"Eminem",album:"The Marshall Mathers LP",genre:"hiphop",coverArt:rw.Stan,audioSrc:"/assets/musics/single_tracks/stan_midi.mp3",duration:330,color:fe.hiphop}];hr.filter(t=>t.genre==="classical");hr.filter(t=>t.genre==="rock");hr.filter(t=>t.genre==="pop");hr.filter(t=>t.genre==="electronic");hr.filter(t=>t.genre==="jazz");hr.filter(t=>t.genre==="ambient");hr.filter(t=>t.genre==="soundtrack");hr.filter(t=>t.genre==="hiphop");class Jt{static saveLastPlayed(e){localStorage.setItem(this.LAST_PLAYED_KEY,JSON.stringify(e))}static getLastPlayed(){const e=localStorage.getItem(this.LAST_PLAYED_KEY);return e?JSON.parse(e):null}static savePlaybackState(e){localStorage.setItem(this.PLAYBACK_STATE_KEY,JSON.stringify(e))}static getPlaybackState(){const e=localStorage.getItem(this.PLAYBACK_STATE_KEY);return e?JSON.parse(e):null}static saveQueue(e){localStorage.setItem(this.QUEUE_KEY,JSON.stringify(e))}static getQueue(){const e=localStorage.getItem(this.QUEUE_KEY);return e?JSON.parse(e):[]}static startNewSession(){const e=Date.now().toString();localStorage.setItem(this.SESSION_KEY,e)}static updateSession(e){const n=localStorage.getItem(this.SESSION_KEY);if(!n)return;const r=this.getHistory();r[n]=r[n]||[],r[n].push({trackId:e,timestamp:Date.now()}),localStorage.setItem(this.HISTORY_KEY,JSON.stringify(r))}static saveToHistory(e,n){const r=this.getHistory(),i=localStorage.getItem(this.SESSION_KEY);i&&(r[i]=r[i]||[],r[i].push({trackId:e.id,timestamp:Date.now(),progress:n}),localStorage.setItem(this.HISTORY_KEY,JSON.stringify(r)))}static getHistory(){const e=localStorage.getItem(this.HISTORY_KEY);return e?JSON.parse(e):{}}static cleanupOldData(e=30){const n=Date.now(),r=e*24*60*60*1e3,i=this.getHistory(),s={};Object.entries(i).forEach(([o,a])=>{const c=parseInt(o);n-c<r&&(s[o]=a)}),localStorage.setItem(this.HISTORY_KEY,JSON.stringify(s))}}Jt.LAST_PLAYED_KEY="lastPlayed";Jt.PLAYBACK_STATE_KEY="playbackState";Jt.QUEUE_KEY="queue";Jt.SESSION_KEY="currentSession";Jt.HISTORY_KEY="playHistory";const H6=()=>{const t=Jt.getLastPlayed(),e=Jt.getPlaybackState(),n=Jt.getQueue();return{currentTrack:t||null,isPlaying:!1,volume:(e==null?void 0:e.volume)??.7,progress:(e==null?void 0:e.progress)??0,duration:(t==null?void 0:t.duration)??0,isShuffling:(e==null?void 0:e.isShuffling)??!1,repeatMode:(e==null?void 0:e.repeatMode)??"off",queue:n.length>0?n:hr,visualizerActive:!0,equalizerActive:!0,sidebarMode:"manual",sidebarVisible:!1,isBuffering:!1,error:null,lastUserAction:Date.now(),lastSidebarInteraction:Date.now(),sidebarOpen:!1}},W6=(t,e)=>{switch(e.type){case"SET_TRACK":{const n=e.payload;return Jt.saveLastPlayed(n),Jt.updateSession(n.id),{...t,currentTrack:n,isPlaying:!1,progress:0,duration:n.duration||0,error:null,isBuffering:!0,lastUserAction:Date.now()}}case"PLAY":return{...t,isPlaying:!0,lastUserAction:Date.now()};case"PAUSE":return{...t,isPlaying:!1,lastUserAction:Date.now()};case"SET_VOLUME":return{...t,volume:e.payload,lastUserAction:Date.now()};case"SET_PROGRESS":{t.currentTrack&&Jt.saveToHistory(t.currentTrack,e.payload);const n=isNaN(e.payload)?t.progress:e.payload;return{...t,progress:n,isBuffering:!1}}case"SET_DURATION":{const n=isNaN(e.payload)?t.duration:e.payload;return{...t,duration:n}}case"TOGGLE_SHUFFLE":return{...t,isShuffling:!t.isShuffling,lastUserAction:Date.now()};case"SET_QUEUE":return{...t,queue:[...e.payload]};case"NEXT_TRACK":{if(!t.currentTrack||!t.activeContext)return t;const n=t.activeContext.tracks,r=n.findIndex(o=>o.id===t.currentTrack.id);let i;if(t.repeatMode==="one")i=r;else if(t.repeatMode==="all")i=(r+1)%n.length;else{if(r===n.length-1)return{...t,isPlaying:!1,progress:0};i=r+1}if(t.isShuffling&&t.repeatMode!=="one"){const o=n.filter((a,c)=>c>r);if(o.length>0){const a=o[Math.floor(Math.random()*o.length)];i=n.indexOf(a)}}const s=n[i];return{...t,currentTrack:s,isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now(),queue:n}}case"PREV_TRACK":{if(!t.currentTrack||!t.activeContext)return t;const n=t.activeContext.tracks,r=n.findIndex(s=>s.id===t.currentTrack.id);let i;if(t.repeatMode==="one")i=r;else if(t.repeatMode==="all")i=(r-1+n.length)%n.length;else{if(r===0)return{...t,progress:0};i=r-1}return{...t,currentTrack:n[i],isPlaying:!0,progress:0,isBuffering:!0,lastUserAction:Date.now()}}case"TOGGLE_VISUALIZER":return{...t,visualizerActive:!t.visualizerActive,lastUserAction:Date.now()};case"TOGGLE_EQUALIZER":return{...t,equalizerActive:!t.equalizerActive,lastUserAction:Date.now()};case"SET_BUFFERING":return{...t,isBuffering:e.payload};case"SET_ERROR":return{...t,error:e.payload,isBuffering:!1,isPlaying:!1};case"SET_SIDEBAR_MODE":return{...t,sidebarMode:e.payload,lastUserAction:Date.now(),lastSidebarInteraction:Date.now()};case"SIDEBAR_INTERACTION":return{...t,lastSidebarInteraction:Date.now()};case"USER_INTERACTION":return{...t,lastUserAction:Date.now()};case"CYCLE_REPEAT_MODE":return{...t,repeatMode:t.repeatMode==="off"?"all":t.repeatMode==="all"?"one":"off",lastUserAction:Date.now()};case"TOGGLE_SIDEBAR_VISIBILITY":{const n=!t.sidebarVisible;return console.log(`Toggling sidebar visibility from ${t.sidebarVisible} to ${n}`),t.sidebarVisible===n?t:{...t,sidebarVisible:n}}case"SET_SIDEBAR_OPEN":return{...t,sidebarOpen:e.payload};case"SET_ACTIVE_CONTEXT":return{...t,activeContext:e.payload,queue:e.payload.tracks};case"ADD_TRACK":return{...t,queue:[...t.queue,e.payload]};default:return t}},Xb=I.createContext(void 0);function q6({children:t}){const[e,n]=I.useReducer(W6,H6()),[r]=I.useState(!1);return I.useEffect(()=>{!e.currentTrack&&e.queue.length>0&&n({type:"SET_TRACK",payload:e.queue[0]})},[e.queue,e.currentTrack]),I.useEffect(()=>{Jt.startNewSession(),Jt.cleanupOldData()},[]),I.useEffect(()=>{const i=s=>{const o=s.detail;console.log("Community track added:",o),n({type:"ADD_TRACK",payload:o})};return window.addEventListener("community-track-added",i),()=>{window.removeEventListener("community-track-added",i)}},[n]),y.jsx(Xb.Provider,{value:{state:e,dispatch:n,isLoadingTracks:r},children:t})}function ai(){const t=I.useContext(Xb);if(!t)throw new Error("useMusicContext must be used within a MusicProvider");return t}const Jb={explorerVisible:!0,explorerWidth:350,mainContentWidth:"calc(100% - 350px)",horizontalControlsExpanded:!1,sidebarVisible:!1,mobileControlsVisible:!0,mobileControlsExpanded:!1,lastInteractionTime:Date.now()},G6=(t,e)=>{switch(e.type){case"TOGGLE_EXPLORER":return{...t,explorerVisible:!t.explorerVisible,mainContentWidth:t.explorerVisible?"100%":`calc(100% - ${t.explorerWidth}px)`};case"SET_EXPLORER_WIDTH":return{...t,explorerWidth:e.payload,mainContentWidth:t.explorerVisible?`calc(100% - ${e.payload}px)`:"100%"};case"SET_CONTROLS_EXPANDED":return{...t,horizontalControlsExpanded:e.payload};case"SET_SIDEBAR_VISIBLE":return{...t,sidebarVisible:e.payload};default:return t}},Zb=I.createContext({state:Jb,dispatch:()=>null}),K6=({children:t})=>{const[e,n]=I.useReducer(G6,Jb);return y.jsx(Zb.Provider,{value:{state:e,dispatch:n},children:t})},Ed=()=>I.useContext(Zb),Q6={id:"dark",name:"Dark Theme",background:{primary:"#121212",secondary:"#1E1E1E",tertiary:"#282828",hover:"rgba(255, 255, 255, 0.1)",highlight:"rgba(255, 255, 255, 0.05)",gradient:"linear-gradient(180deg, #121212 0%, #000000 100%)",nav:"rgba(18, 18, 18, 0.8)"},text:{primary:"#FFFFFF",secondary:"#B3B3B3",tertiary:"#737373"},border:{subtle:"rgba(255, 255, 255, 0.1)"},ui:{accent:"#1DB954",accentDark:"#1AA34A",secondary:"#282828",secondaryHover:"#333333",danger:"#E91429",hover:"rgba(255, 255, 255, 0.1)"}},Y6={id:"light",name:"Light Theme",background:{primary:"#FFFFFF",secondary:"#F5F5F5",tertiary:"#EEEEEE",hover:"rgba(0, 0, 0, 0.05)",highlight:"rgba(0, 0, 0, 0.03)",gradient:"linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)",nav:"rgba(255, 255, 255, 0.8)"},text:{primary:"#000000",secondary:"#6F6F6F",tertiary:"#A3A3A3"},border:{subtle:"rgba(0, 0, 0, 0.1)"},ui:{accent:"#1DB954",accentDark:"#1AA34A",secondary:"#EEEEEE",secondaryHover:"#E5E5E5",danger:"#E91429",hover:"rgba(0, 0, 0, 0.05)"}},X6={id:"space-grey",name:"Space Grey",background:{primary:"#1E2132",secondary:"#252A3F",tertiary:"#2C334D",hover:"rgba(255, 255, 255, 0.1)",highlight:"rgba(255, 255, 255, 0.05)",gradient:"linear-gradient(180deg, #1E2132 0%, #141824 100%)",nav:"rgba(30, 33, 50, 0.8)"},text:{primary:"#FFFFFF",secondary:"#B3B3B3",tertiary:"#737373"},border:{subtle:"rgba(255, 255, 255, 0.1)"},ui:{accent:"#5C6BC0",accentDark:"#3F51B5",secondary:"#2C334D",secondaryHover:"#353D5C",danger:"#EF5350",hover:"rgba(255, 255, 255, 0.1)"}},J6={id:"ocean-blue",name:"Ocean Blue",background:{primary:"#00547A",secondary:"#006994",tertiary:"#0087B8",hover:"rgba(255, 255, 255, 0.1)",highlight:"rgba(255, 255, 255, 0.05)",gradient:"linear-gradient(180deg, #00547A 0%, #004666 100%)",nav:"rgba(0, 84, 122, 0.8)"},text:{primary:"#FFFFFF",secondary:"#B3E0FF",tertiary:"#80CFFF"},border:{subtle:"rgba(255, 255, 255, 0.1)"},ui:{accent:"#00D4FF",accentDark:"#00BFFF",secondary:"#006994",secondaryHover:"#007AB8",danger:"#FF4C4C",hover:"rgba(255, 255, 255, 0.1)"}},Z6={id:"cyber-punk",name:"Cyber Punk",background:{primary:"#19002E",secondary:"#220042",tertiary:"#2C0057",hover:"rgba(255, 0, 255, 0.1)",highlight:"rgba(255, 0, 255, 0.05)",gradient:"linear-gradient(180deg, #19002E 0%, #0F001C 100%)",nav:"rgba(25, 0, 46, 0.8)"},text:{primary:"#FF00FF",secondary:"#CC00CC",tertiary:"#990099"},border:{subtle:"rgba(255, 0, 255, 0.1)"},ui:{accent:"#00FFFF",accentDark:"#00CCCC",secondary:"#2C0057",secondaryHover:"#380070",danger:"#FF003C",hover:"rgba(255, 0, 255, 0.1)"}},eD={id:"contrast-light",name:"High Contrast Light",background:{primary:"#FFFFFF",secondary:"#F0F0F0",tertiary:"#E0E0E0",hover:"rgba(0, 0, 0, 0.1)",highlight:"rgba(0, 0, 0, 0.05)",gradient:"linear-gradient(180deg, #FFFFFF 0%, #F0F0F0 100%)",nav:"rgba(255, 255, 255, 0.95)"},text:{primary:"#000000",secondary:"#1A1A1A",tertiary:"#333333"},border:{subtle:"rgba(0, 0, 0, 0.2)"},ui:{accent:"#0066CC",accentDark:"#004C99",secondary:"#E0E0E0",secondaryHover:"#D0D0D0",danger:"#CC0000",hover:"rgba(0, 0, 0, 0.1)"}},Zh={light:Y6,dark:Q6,"space-grey":X6,"ocean-blue":J6,"cyber-punk":Z6,"contrast-light":eD},tD="dark",eT=I.createContext(null),nD=({children:t})=>{const[e,n]=I.useState(()=>{const o=localStorage.getItem("theme");return o&&Zh[o]?o:tD}),r=Zh[e],i=o=>{Zh[o]&&requestAnimationFrame(()=>{n(o),localStorage.setItem("theme",o)})},s=Ce.useMemo(()=>({currentTheme:r,setTheme:i,themeId:e}),[r,e]);return y.jsx(eT.Provider,{value:s,children:y.jsx(kE,{theme:r,children:t})})},tT=()=>{const t=I.useContext(eT);if(!t)throw new Error("useThemeContext must be used within a ThemeProvider");return t},nT={optimizeElement(t){t&&(t.style.transform="translateZ(0)",t.style.backfaceVisibility="hidden",t.style.willChange="transform, opacity")},throttle(t,e){let n=0;return(...r)=>{const i=Date.now();i-n>=e&&(n=i,t(...r))}},debounce(t,e){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>t(...r),e)}}},rT=I.forwardRef(({children:t,className:e,height:n,style:r},i)=>{var A;const s=Ce.useRef(null),o=I.useRef(),[a,c]=I.useState(!1),[u,d]=I.useState(!1),[h,p]=I.useState(40),[g,_]=I.useState({top:!0,bottom:!1}),[b,k]=I.useState(!1),{scrollYProgress:x}=z6({container:s,offset:["start start","end end"]}),v=y6(x,{damping:20,stiffness:300,mass:.5,restSpeed:.001}),w=kg(1),P=g6(v,[0,1],[0,(A=s.current)!=null&&A.clientHeight?s.current.clientHeight-h:0],{clamp:!0}),O=I.useCallback(()=>{if(!s.current)return;const{clientHeight:C,scrollHeight:D}=s.current,M=C/D,R=Math.max(Math.min(M*C,C/2),40);p(R)},[]),N=I.useCallback(()=>{if(!s.current)return;const{scrollTop:C,scrollHeight:D,clientHeight:M}=s.current,R=C<=0,W=C+M>=D-1;_({top:R,bottom:W}),c(!0),(R||W)&&(w.set(.98),setTimeout(()=>w.set(1),150)),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{c(!1)},150)},[w]),T=nT.throttle(N,16);I.useEffect(()=>{const C=s.current;if(!C)return;const D=()=>T(),M=()=>O(),R=new ResizeObserver(M);return R.observe(C),C.addEventListener("scroll",D,{passive:!0}),window.addEventListener("resize",M,{passive:!0}),O(),()=>{R.disconnect(),C&&C.removeEventListener("scroll",D),window.removeEventListener("resize",M),o.current&&clearTimeout(o.current)}},[T,O]);const E=I.useCallback(C=>{if(C.preventDefault(),C.stopPropagation(),!s.current)return;d(!0);const D=C.clientY,M=s.current.scrollHeight,R=s.current.clientHeight,W=R-h,J=s.current.scrollTop,X=z=>{if(!s.current)return;const $=(z.clientY-D)/W*(M-R);s.current.scrollTop=Math.max(0,Math.min(J+$,M-R))},ee=()=>{d(!1),document.removeEventListener("pointermove",X),document.removeEventListener("pointerup",ee),document.body.style.cursor="",document.body.style.userSelect=""};document.body.style.cursor="grabbing",document.body.style.userSelect="none",document.addEventListener("pointermove",X),document.addEventListener("pointerup",ee)},[h]);return y.jsxs(rD,{ref:i,onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),children:[y.jsx(iD,{ref:s,className:e,$height:n,style:{...r,transform:`scale(${w.get()})`},children:t}),y.jsx(sD,{animate:{opacity:b||a||u?1:.3,width:b||u?"10px":"6px"},transition:{duration:.2},children:y.jsx(oD,{as:se.div,style:{height:h,y:P,scale:w},animate:{opacity:a||u||b?1:.7,width:b||u?"100%":"80%",x:"-50%"},whileHover:{scale:1.05},whileTap:{scale:.95},onPointerDown:E,transition:{opacity:{duration:.2},scale:{type:"spring",stiffness:400,damping:25}},$isDragging:u,$isHovered:b,$isAtEdge:g})})]})}),rD=V.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`,iD=V.div`
  height: ${t=>t.$height||"100%"};
  overflow-y: auto;
  padding-right: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transform-origin: center;
  transition: transform 0.2s ease;

  &::-webkit-scrollbar {
    display: none;
  }
`,sD=V(se.div)`
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
`,oD=V(se.div)`
  position: absolute;
  left: 50%;
  width: 80%;
  border-radius: inherit;
  background: ${t=>t.$isDragging?"linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)":t.$isHovered?"linear-gradient(135deg, #66bb6a 0%, #43a047 100%)":"linear-gradient(135deg, rgba(76, 175, 80, 0.8) 0%, rgba(67, 160, 71, 0.9) 100%)"};
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
    opacity: ${t=>t.$isHovered?1:0};
    transition: opacity 0.2s ease;
  }
`;rT.displayName="CustomScrollbar";const iT="/assets/covers/default_cover_2.jpeg",Ns=t=>t?(t.startsWith("http"),t):iT;var sT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iw=Ce.createContext&&Ce.createContext(sT),zr=globalThis&&globalThis.__assign||function(){return zr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},zr.apply(this,arguments)},aD=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function oT(t){return t&&t.map(function(e,n){return Ce.createElement(e.tag,zr({key:n},e.attr),oT(e.child))})}function ge(t){return function(e){return Ce.createElement(lD,zr({attr:zr({},t.attr)},e),oT(t.child))}}function lD(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=aD(t,["attr","size","title"]),a=i||n.size||"1em",c;return n.className&&(c=n.className),t.className&&(c=(c?c+" ":"")+t.className),Ce.createElement("svg",zr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:c,style:zr(zr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ce.createElement("title",null,s),t.children)};return iw!==void 0?Ce.createElement(iw.Consumer,null,function(n){return e(n)}):e(sT)}function cD(t){return ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"}}]})(t)}function uD(t){return ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(t)}function dD(t){return ge({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(t)}function hD(t){return ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"}}]})(t)}function fD(t){return ge({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"}}]})(t)}function pD(t){return ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(t)}function mD(t){return ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]})(t)}function bd(t){return ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}}]})(t)}function Td(t){return ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(t)}function gD(t){return ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}}]})(t)}function yD(t){return ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"}}]})(t)}function aT(t){return ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"}}]})(t)}function lT(t){return ge({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"}}]})(t)}function vD(t){return ge({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}function wD(t){return ge({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"}}]})(t)}function xD(t){return ge({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"}}]})(t)}function cT(t){return ge({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"}}]})(t)}const _D="/assets/icons/toggle_button.png";V.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 16px;
  gap: 2px;
  opacity: ${t=>t.$isPlaying?1:.6};
  transition: opacity 0.3s ease;
`;V.div`
  width: 3px;
  height: ${t=>t.$height*16}px;
  background: #4caf50;
  border-radius: 1px;
  transform-origin: bottom;
  animation: ${t=>`equalizer 1.2s ${t.$delay}s ease-in-out infinite alternate`};

  @keyframes equalizer {
    0% {
      height: ${t=>t.$height*5}px;
    }
    100% {
      height: ${t=>t.$height*16}px;
    }
  }
`;const sw=()=>{const{state:t,dispatch:e}=ai(),{dispatch:n}=Ed(),[r,i]=I.useState(!0),[s,o]=I.useState({}),[a,c]=I.useState({field:"title",direction:"asc"}),[u,d]=I.useState({search:"",favorites:!1,minPlays:0}),[h,p]=I.useState(!1),[g,_]=I.useState(!0),[b,k]=I.useState(null),[x,v]=I.useState(!1),[w,P]=I.useState(!0),O=I.useRef(null),N=I.useRef(null),T=I.useRef(null);I.useEffect(()=>{(async()=>{try{_(!0);const J=localStorage.getItem("trackStats");if(J){const X=JSON.parse(J);o(X)}}catch(J){console.error("Failed to load track stats:",J),o({}),k("Failed to load track statistics")}finally{_(!1)}})()},[]);const E=W=>{var J,X;try{const ee={...s,[W]:{plays:(((J=s[W])==null?void 0:J.plays)||0)+1,lastPlayed:new Date,favorite:((X=s[W])==null?void 0:X.favorite)||!1}};o(ee),localStorage.setItem("trackStats",JSON.stringify(ee))}catch(ee){console.error("Failed to update track stats:",ee)}},A=W=>{var X,ee,z;const J={...s,[W]:{...s[W],favorite:!((X=s[W])!=null&&X.favorite),lastPlayed:((ee=s[W])==null?void 0:ee.lastPlayed)||null,plays:((z=s[W])==null?void 0:z.plays)||0}};o(J);try{localStorage.setItem("trackStats",JSON.stringify(J))}catch(G){console.error("Failed to save favorites:",G)}},C=W=>[...W].sort((J,X)=>{const ee=s[J.id],z=s[X.id];switch(a.field){case"title":return a.direction==="asc"?J.title.localeCompare(X.title):X.title.localeCompare(J.title);case"artist":return a.direction==="asc"?J.artist.localeCompare(X.artist):X.artist.localeCompare(J.artist);case"album":return a.direction==="asc"?J.album.localeCompare(X.album):X.album.localeCompare(J.album);case"plays":return a.direction==="asc"?((ee==null?void 0:ee.plays)||0)-((z==null?void 0:z.plays)||0):((z==null?void 0:z.plays)||0)-((ee==null?void 0:ee.plays)||0);case"lastPlayed":const G=ee!=null&&ee.lastPlayed?new Date(ee.lastPlayed).getTime():0,F=z!=null&&z.lastPlayed?new Date(z.lastPlayed).getTime():0;return a.direction==="asc"?G-F:F-G;case"favorites":const $=(ee==null?void 0:ee.favorite)||!1,K=(z==null?void 0:z.favorite)||!1;return a.direction==="asc"?Number($)-Number(K):Number(K)-Number($);default:return 0}}),D=W=>W.filter(J=>{const X=s[J.id],ee=u.search.toLowerCase(),z=ee===""||J.title.toLowerCase().includes(ee)||J.artist.toLowerCase().includes(ee),G=!u.favorites||(X==null?void 0:X.favorite),F=((X==null?void 0:X.plays)||0)>=u.minPlays;return z&&G&&F});I.useEffect(()=>{n({type:"SET_EXPLORER_WIDTH",payload:r?350:60})},[r,n]);const M=()=>{const W=r;i(!r),P(!W),n({type:"TOGGLE_EXPLORER"}),W&&(p(!1),d({search:"",favorites:!1,minPlays:0}),c({field:"title",direction:"asc"}),v(!1))};I.useEffect(()=>{const W=J=>{var X;J.ctrlKey&&J.key==="f"&&r&&(J.preventDefault(),(X=N.current)==null||X.focus())};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[r]),I.useEffect(()=>{const W=sessionStorage.getItem("explorerScrollPosition");return W&&T.current&&(T.current.scrollTop=parseInt(W)),()=>{T.current&&sessionStorage.setItem("explorerScrollPosition",T.current.scrollTop.toString())}},[]),I.useEffect(()=>{r||(p(!1),v(!1))},[r]);const R=[{value:"title",label:"Title"},{value:"artist",label:"Artist"},{value:"album",label:"Album"},{value:"plays",label:"Plays"},{value:"lastPlayed",label:"Last Played"},{value:"favorites",label:"Favorites"}];return I.useEffect(()=>{const W=C(D(t.queue));e({type:"SET_ACTIVE_CONTEXT",payload:{id:"explorer",type:"queue",tracks:W,name:"Music Explorer"}})},[t.queue,a,u]),y.jsx(bD,{ref:O,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},$isExpanded:r,children:g?y.jsxs(XD,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[y.jsx(JD,{}),y.jsx("span",{children:"Loading music library..."})]}):y.jsxs(y.Fragment,{children:[y.jsxs(OD,{$isExpanded:r,children:[y.jsx(jD,{$isExpanded:r,animate:{scale:r?1:.9},transition:{duration:.3},children:r?"Music Explorer":"DP"}),y.jsx($D,{src:_D,alt:"Music Explorer",$isOpen:w}),y.jsx(BD,{onClick:M,whileHover:{scale:1.1},whileTap:{scale:.95},"aria-label":r?"Collapse explorer":"Expand explorer",children:r?"−":"+"})]}),b&&y.jsxs(HD,{children:[b,y.jsx(WD,{onClick:()=>window.location.reload(),children:"Retry"})]}),!b&&y.jsx(or,{children:r&&y.jsxs(DD,{children:[y.jsx(VD,{ref:N,value:u.search,onChange:W=>d(J=>({...J,search:W.target.value}))}),y.jsx(ND,{children:y.jsxs(qD,{onClick:()=>v(!x),$active:x,whileHover:{scale:1.05},whileTap:{scale:.95},children:[y.jsx(yD,{}),y.jsx(GD,{className:"tooltip",children:"Sort options"})]})})]})}),y.jsx(or,{children:x&&y.jsx(KD,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},children:y.jsx(QD,{children:R.map(W=>y.jsxs(YD,{$isActive:a.field===W.value,onClick:()=>{a.field===W.value?c(J=>({...J,direction:J.direction==="asc"?"desc":"asc"})):c({field:W.value,direction:"asc"})},whileHover:{scale:1.02},whileTap:{scale:.98},children:[y.jsx("span",{children:W.label}),a.field===W.value&&y.jsx(se.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:a.direction==="asc"?"↑":"↓"})]},W.value))})})}),h&&y.jsxs(LD,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[y.jsx(ef,{children:y.jsxs("label",{children:[y.jsx("input",{type:"checkbox",checked:u.favorites,onChange:W=>d(J=>({...J,favorites:W.target.checked}))}),"Favorites only"]})}),y.jsx(ef,{children:y.jsxs("label",{children:["Minimum plays:",y.jsx("input",{type:"number",min:"0",value:u.minPlays,onChange:W=>d(J=>({...J,minPlays:parseInt(W.target.value)||0}))})]})}),y.jsxs(ef,{children:[y.jsx("label",{htmlFor:"track-sort-select",children:"Sort tracks by:"}),y.jsxs(MD,{value:a.field,onChange:W=>c(J=>({...J,field:W.target.value})),children:[y.jsx("option",{value:"title",children:"Title"}),y.jsx("option",{value:"artist",children:"Artist"}),y.jsx("option",{value:"plays",children:"Plays"}),y.jsx("option",{value:"lastPlayed",children:"Last Played"})]})]})]}),y.jsx(zD,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:y.jsx(rT,{ref:T,children:y.jsx(UD,{$isExpanded:r,children:C(D(t.queue)).map((W,J)=>{var X;return y.jsx(ED,{track:W,stats:s[W.id],isActive:((X=t.currentTrack)==null?void 0:X.id)===W.id,onClick:()=>{e({type:"SET_TRACK",payload:W}),e({type:"PLAY"}),E(W.id)},onExpand:()=>{i(!0),n({type:"TOGGLE_EXPLORER"})},onToggleFavorite:A,onTogglePlay:()=>{e(t.isPlaying?{type:"PAUSE"}:{type:"PLAY"})}},W.id)})})})})]})})},ED=({track:t,stats:e,isActive:n,onClick:r,onExpand:i,onToggleFavorite:s,onTogglePlay:o})=>{const[a,c]=I.useState(!1),{state:u}=Ed(),{state:d}=ai(),h=u.explorerVisible,[p,g]=I.useState(!1),_=()=>{r(),h||i()},b=x=>{x.stopPropagation(),e!=null&&e.favorite||(g(!0),setTimeout(()=>g(!1),1e3)),s(t.id)},k=I.useMemo(()=>Array.from({length:12}).map((x,v)=>({id:v,angle:v*360/12,delay:v*.02})),[]);return y.jsxs(TD,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:30,mass:.8},onHoverStart:()=>c(!0),onHoverEnd:()=>c(!1),$isActive:n,$isExpanded:h,onClick:_,layout:!0,children:[y.jsxs(uT,{$isExpanded:h,$isActive:n,$isPlaying:n&&d.isPlaying,whileHover:!n||!d.isPlaying?{scale:1.05,transition:{duration:.3,ease:"easeOut"}}:{},children:[y.jsx(SD,{src:Ns(t.coverArt),alt:`${t.title} cover`,$isPlaying:n&&d.isPlaying,transition:{rotate:{duration:20,ease:"linear"}},loading:"lazy",draggable:!1}),n&&y.jsx(AD,{onClick:x=>{x.stopPropagation(),o()},$isPlaying:d.isPlaying,initial:{opacity:0},animate:{opacity:a?1:0,scale:d.isPlaying?1.1:1},transition:{duration:.2},whileHover:{scale:1.15},whileTap:{scale:.95},children:d.isPlaying?y.jsx(bd,{size:20}):y.jsx(Td,{size:20})})]}),y.jsx(or,{children:h&&y.jsxs(kD,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3,delay:.1},children:[y.jsx(CD,{$isActive:n,children:t.title}),y.jsx(ID,{children:t.artist}),y.jsxs(PD,{initial:{opacity:0},animate:{opacity:a?1:0},transition:{duration:.2},children:[y.jsxs(ow,{children:[y.jsx(aw,{children:"🎵"}),(e==null?void 0:e.plays)||0]}),(e==null?void 0:e.lastPlayed)&&y.jsxs(ow,{children:[y.jsx(aw,{children:"🕒"}),new Date(e.lastPlayed).toLocaleDateString()]})]})]})}),y.jsxs(RD,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:b,"aria-label":e!=null&&e.favorite?"Remove from favorites":"Add to favorites",children:[e!=null&&e.favorite?"❤️":"🤍",y.jsx(or,{children:p&&y.jsxs(ZD,{children:[k.map(x=>y.jsx(eV,{initial:{scale:0,opacity:1,x:0,y:0},animate:{scale:[0,1.5,0],opacity:[1,.8,0],x:[0,Math.cos(x.angle)*50],y:[0,Math.sin(x.angle)*50]},transition:{duration:.8,delay:x.delay,ease:[.2,.8,.2,1]},style:{background:"radial-gradient(circle, #4caf50 0%, rgba(76, 175, 80, 0) 70%)",boxShadow:"0 0 8px #4caf50",filter:"blur(1px)"}},x.id)),y.jsx(se.div,{initial:{scale:0,opacity:0},animate:{scale:[0,2,0],opacity:[1,0]},transition:{duration:.6,ease:"easeOut"},style:{position:"absolute",width:"20px",height:"20px",borderRadius:"50%",background:"radial-gradient(circle, rgba(76, 175, 80, 0.8) 0%, rgba(76, 175, 80, 0) 70%)",filter:"blur(2px)",transform:"translate(-50%, -50%)"}})]})})]})]})},bD=V(se.div)`
  position: relative;
  width: ${t=>t.$isExpanded?"350px":"90px"};
  height: 98%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,TD=V(se.div)`
  display: flex;
  align-items: center;
  padding: ${t=>t.$isExpanded?"12px":"4px"};
  background: ${t=>t.$isActive?"rgba(76, 175, 80, 0.1)":"transparent"};
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: ${t=>t.$isExpanded?"12px":"4px"};
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  height: ${t=>(t.$isExpanded,"auto")};
  width: ${t=>t.$isExpanded?"auto":"80px"};

  ${t=>!t.$isExpanded&&`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

  &:hover {
    background: ${t=>t.$isActive?"rgba(76, 175, 80, 0.15)":"rgba(255, 255, 255, 0.05)"};
  }
`,uT=V(se.div)`
  position: relative;
  width: ${t=>t.$isExpanded?"48px":"72px"};
  height: ${t=>t.$isExpanded?"48px":"72px"};
  border-radius: ${t=>t.$isActive&&t.$isPlaying?"50%":"8px"};
  overflow: visible; // Changed to visible to show glow
  flex-shrink: 0;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  perspective: 1000px;

  // Glowing edge effect
  ${t=>t.$isActive&&t.$isPlaying&&`
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
    opacity: ${t=>t.$isActive&&t.$isPlaying?1:0};
    transition: opacity 0.3s ease;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.6); // Added glow to center hole
  }
`,SD=V(se.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform-origin: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${t=>t.$isPlaying?"50%":"8px"};
  box-shadow: ${t=>t.$isPlaying?"0 0 15px rgba(76, 175, 80, 0.3)":"none"};

  ${t=>t.$isPlaying&&`
    animation: spin 20s linear infinite;
    filter: brightness(1.1);
  `}
`,AD=V(se.div)`
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

  // Only show hover effect when not playing
  ${t=>!t.$isPlaying&&`
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(2px);
    }
  `}

  svg {
    opacity: ${t=>t.$isPlaying?.9:1};
    transition: opacity 0.3s ease;
  }

  // Only show on hover when not playing
  ${uT}:hover & {
    opacity: ${t=>t.$isPlaying?0:1};
  }

  // Show briefly when changing play state
  &:active {
    opacity: 1;
    background: rgba(0, 0, 0, 0.4);
  }
`,kD=V(se.div)`
  flex: 1;
  min-width: 0;
`,CD=V.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${t=>t.$isActive?"#4caf50":"white"};
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ID=V.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,PD=V(se.div)`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`,ow=V.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
`,aw=V.span`
  font-size: 12px;
`,RD=V(se.button)`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 16px;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`,DD=V(se.div)`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,VD=V.input.attrs({"aria-label":"Search tracks",type:"text",placeholder:"Search tracks..."})`
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
`,ND=V.div`
  display: flex;
  gap: 4px;
`,MD=V.select.attrs({"aria-label":"Sort tracks by",title:"Sort tracks",name:"sort-tracks",id:"track-sort-select"})`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  padding: 8px;
  color: white;
  margin-top: 8px;

  option {
    background: #1a1a1a;
  }

  &:focus {
    outline: 2px solid #4caf50;
    outline-offset: 2px;
  }
`,LD=V(se.div)`
  padding: 12px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,ef=V.div`
  margin-bottom: 8px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    &:focus-visible {
      outline: 2px solid #4caf50;
      outline-offset: 2px;
    }
  }

  input[type="number"] {
    width: 60px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    color: white;
    margin-left: 8px;
    &:focus-visible {
      outline: 2px solid #4caf50;
      outline-offset: 2px;
    }
  }
`,OD=V.div`
  display: flex;
  align-items: center;
  justify-content: ${t=>t.$isExpanded?"space-between":"center"};
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,jD=V(se.div)`
  font-size: ${t=>t.$isExpanded?"1.5rem":"1rem"};
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  padding: ${t=>t.$isExpanded?"16px":"8px"};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;48
`,FD=co`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`,$D=V.img`
  width: 24px;
  height: 24px;
  transform-style: preserve-3d;
  transition: filter 0.3s ease;
  cursor: pointer;
  position: relative;

  ${t=>t.$isOpen?Qs`
          animation: ${FD} 4s linear infinite;
        `:Qs`
          filter: brightness(0.7);
          transform: rotateY(180deg);
        `}

  &:hover {
    animation: none;
    filter: drop-shadow(0 0 8px #4a9eff) brightness(1.2);
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    background: radial-gradient(
      circle,
      rgba(74, 158, 255, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }
`,BD=V(se.button)`
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
`,zD=V(se.div)`
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,UD=V.div`
  padding: ${t=>t.$isExpanded?"8px":"4px"};
  display: grid;
  grid-template-columns: ${t=>t.$isExpanded?"1fr":"repeat(auto-fill, 80px)"};
  gap: ${t=>t.$isExpanded?"8px":"4px"};
  min-height: 0;
  flex: 1;
  justify-content: center;
`,HD=V.div`
  padding: 16px;
  color: #ff5252;
  text-align: center;
  background: rgba(255, 82, 82, 0.1);
  margin: 16px;
  border-radius: 8px;
`,WD=V.button`
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
`,qD=V(se.button)`
  position: relative;
  background: ${t=>t.$active?"rgba(76, 175, 80, 0.2)":"rgba(255, 255, 255, 0.1)"};
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.$active?"#4caf50":"white"};
  cursor: pointer;

  &:hover {
    background: ${t=>t.$active?"rgba(76, 175, 80, 0.3)":"rgba(255, 255, 255, 0.2)"};
    .tooltip {
      opacity: 1;
      transform: translateY(-4px);
    }
  }
`,GD=V.span`
  position: absolute;
  top: -28px;
  left: -110%;
  transform: translateX(-50%) translateY(0);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 100;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid rgba(0, 0, 0, 0.8);
  }
`,KD=V(se.div)`
  overflow: hidden;
  background: rgba(18, 18, 18, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,QD=V(se.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 8px;
  }
`,YD=V(se.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: ${t=>t.$isActive?"rgba(76, 175, 80, 0.15)":"rgba(255, 255, 255, 0.05)"};
  border: 1px solid
    ${t=>t.$isActive?"rgba(76, 175, 80, 0.3)":"transparent"};
  border-radius: 6px;
  color: ${t=>t.$isActive?"#4caf50":"rgba(255, 255, 255, 0.8)"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${t=>t.$isActive?"rgba(76, 175, 80, 0.2)":"rgba(255, 255, 255, 0.1)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }
`,XD=V(se.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
`,JD=V(se.div)`
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
`,ZD=V(se.div)`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 2;
`,eV=V(se.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #4caf50;
  border-radius: 50%;
  transform-origin: center;
`;function tV(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}}]})(t)}function nV(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3"}},{tag:"path",attr:{d:"M3 3l18 18"}}]})(t)}function rV(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"}},{tag:"path",attr:{d:"M11 11l1 -1v4"}}]})(t)}function iV(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"}},{tag:"path",attr:{d:"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"}}]})(t)}const sV=V.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`,oV=V.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,aV=()=>{const t=I.useRef(null),{state:e}=ai(),n=I.useRef(0);return I.useEffect(()=>{if(!t.current)return;const r=t.current,i=r.getContext("2d");if(!i)return;const s=window.devicePixelRatio||1,o=r.getBoundingClientRect();r.width=o.width*s,r.height=o.height*s,i.scale(s,s);const a=()=>{var g;if(!i)return;const c=((g=e.currentTrack)==null?void 0:g.color)||"#388e3c";n.current=requestAnimationFrame(a);const u=o.width,d=o.height;i.clearRect(0,0,u,d);const h=new Array(128).fill(0).map((_,b)=>{const k=e.progress*.01+b*.01;return Math.sin(k*.5)*.3+Math.sin(k*1.5)*.2+Math.sin(k*3.5)*.1}),p=i.createLinearGradient(0,0,u,d);p.addColorStop(0,`${c}40`),p.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=p,i.beginPath(),i.moveTo(0,d);for(let _=0;_<h.length;_++){const b=_/h.length*u,k=d-d*.5*(1+h[_]);i.lineTo(b,k)}i.lineTo(u,d),i.closePath(),i.fill(),i.strokeStyle=c,i.lineWidth=2,i.beginPath();for(let _=0;_<h.length;_++){const b=_/h.length*u,k=d-d*.5*(1+h[_]);_===0?i.moveTo(b,k):i.lineTo(b,k)}i.stroke()};return a(),()=>{n.current&&cancelAnimationFrame(n.current)}},[e.currentTrack,e.progress]),y.jsx(sV,{children:y.jsx(oV,{ref:t})})},lV=co`
  /* existing animation */
`,cV=co`
  /* existing animation */
`,uV=V.div.attrs({className:"dp-equalizer-container"})`
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
`,dV=V.canvas.attrs({className:"dp-equalizer-canvas"})`
  /* existing styles */
`,hV=V.div.attrs(t=>({className:"dp-equalizer-glow",style:{opacity:t.$isPlaying?.8:.2,animationDuration:`${3-t.$intensity*1.5}s`,background:`linear-gradient(90deg, transparent, ${t.$color}20, transparent)`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  animation-name: ${lV};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  background-size: 200% 200%;
  will-change: opacity, background;
`,fV=V.div.attrs(t=>({className:"dp-equalizer-flow",style:{animationDuration:`${8-t.$intensity*4}s`}}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: 200% 200%;
  animation-name: ${cV};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  mix-blend-mode: overlay;
  will-change: transform;
`,pV=V.div.attrs(t=>({style:{height:`${t.$height}%`,backgroundColor:t.$color}}))`
  width: 4px;
  border-radius: 2px;
  transition: height 0.1s ease;
  will-change: height;
`,mV=({isPlaying:t=!1,dominantColor:e="#4CAF50",audioRef:n,onIntensityChange:r})=>{var g;const{state:i}=ai(),[s,o]=I.useState(Array(12).fill(10)),a=I.useRef(0),[c,u]=I.useState(0),d=I.useRef(0),h=I.useMemo(()=>{var _;return e||((_=i.currentTrack)==null?void 0:_.color)||"#388e3c"},[e,(g=i.currentTrack)==null?void 0:g.color]);I.useEffect(()=>{const _=s.reduce((b,k)=>b+k,0)/(s.length*100);u(_)},[s]),I.useEffect(()=>{r&&r(c)},[c,r]),I.useEffect(()=>{if(!i.isPlaying||!i.equalizerActive)return o(Array(12).fill(10)),()=>cancelAnimationFrame(a.current);const _=b=>{if(b-d.current<33){a.current=requestAnimationFrame(_);return}d.current=b,o(k=>{const x=k.map(w=>{const P=20+Math.random()*60;return w+(P-w)*.3});return x.some((w,P)=>Math.abs(w-k[P])>2)?x:k}),a.current=requestAnimationFrame(_)};return a.current=requestAnimationFrame(_),()=>{cancelAnimationFrame(a.current)}},[i.isPlaying,i.equalizerActive]);const p=I.useMemo(()=>s.map((_,b)=>y.jsx(pV,{$height:i.isPlaying?_:5,$color:h},b)),[s,i.isPlaying,h]);return y.jsxs(uV,{$isActive:t,$color:e,children:[y.jsx(dV,{ref:n,width:"280",height:"70"}),y.jsx(hV,{$intensity:c,$color:e,$isPlaying:t,children:y.jsx(fV,{$intensity:c,$color:e})}),p]})},gV=Ce.memo(mV),yV=V(se.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  z-index: 5;
  margin-left: 2px; /* Add margin to prevent slider from going too far left */
  will-change: transform, opacity;
`,vV=V(se.button).attrs(t=>({id:"music-player-volume-toggle","aria-label":t.volume===0?"Unmute":"Mute"}))`
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
`,wV=V(se.div)`
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
`,xV=V.input.attrs({type:"range",min:"0",max:"100",step:"1",id:"music-player-volume-slider"})`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${t=>`linear-gradient(
    to right,
    rgba(138, 43, 226, 0.8) 0%,
    rgba(147, 112, 219, 0.8) ${t.value}%,
    rgba(255, 255, 255, 0.2) ${t.value}%,
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
`,_V=V(se.div)`
  position: absolute;
  top: -25px;
  left: ${t=>t.$volume}%;
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
`,EV=V(se.div)`
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
`,bV=V(se.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  pointer-events: none;
  opacity: ${t=>t.$volume===0?0:.3};
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
`,TV=({volume:t,onVolumeChange:e,className:n})=>{const[r,i]=I.useState(!1),[s,o]=I.useState(!1),[a,c]=I.useState(t),[u,d]=I.useState(!1),h=I.useRef(null);I.useEffect(()=>{const k=x=>{h.current&&!h.current.contains(x.target)&&s&&o(!1)};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[s]);const p=()=>t===0?y.jsx(xD,{size:18,style:{opacity:.9,filter:"drop-shadow(0 0 2px rgba(255, 82, 82, 0.7))"}}):t<50?y.jsx(wD,{size:18,style:{opacity:t/100+.5,transform:`scale(${.9+t/200})`}}):y.jsx(cT,{size:18,style:{opacity:t/100+.5,transform:`scale(${.9+t/200})`}}),g=()=>{t===0?e(a>0?a:50):(c(t),e(0))},_=k=>{const x=parseInt(k.target.value,10);e(x)},b=I.useCallback(()=>{requestAnimationFrame(()=>{o(k=>!k)})},[]);return y.jsx(yV,{ref:h,className:n,onMouseEnter:()=>i(!0),onMouseLeave:()=>{i(!1),d(!1)},initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:y.jsx(or,{mode:"wait",initial:!1,presenceAffectsLayout:!1,children:s?y.jsxs(wV,{initial:{opacity:0,width:"40px"},animate:{opacity:1,width:"120px"},exit:{opacity:0,width:"40px"},transition:{duration:.15,ease:"easeOut",width:{duration:.2}},children:[y.jsx("div",{style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",zIndex:2,filter:"drop-shadow(0 0 3px rgba(138, 43, 226, 0.7))"},children:p()}),y.jsx(xV,{value:t,onChange:_,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1)}),y.jsxs(or,{children:[u&&t>0&&y.jsxs(_V,{$volume:t,initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:[t,"%"]},"volume-level"),t===0&&u&&y.jsx(EV,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.1},children:"Muted"},"mute-indicator")]})]},"slider-container"):y.jsxs(vV,{volume:t,onClick:b,onDoubleClick:g,whileTap:{scale:.95},title:"Open volume slider",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.15},children:[p(),y.jsx(bV,{$volume:t,initial:{opacity:0},animate:{opacity:t===0?0:r?.3:0},transition:{duration:.2}})]},"volume-button")})})},SV=V.div.attrs({className:"mp-ambient-particles"})`
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
`,AV=V.div.attrs({className:"mp-visualizer-wrapper"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,dT={sidebar:.3,buttonDelay:.15,buttonTransition:.35},hT=V(se.div).attrs(t=>({className:"mp-sidebar"}))`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 280px;
  max-width: ${t=>t.$isOpen?"85vw":"75vw"}; // Increase max width when open
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
`,kV=V.div.attrs(t=>({className:"mp-track-display"}))`
  padding: 30px;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${t=>t.$bgColor?`linear-gradient(45deg, ${t.$bgColor}40, ${t.theme.background})`:t.theme.background};
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
`,CV=V.div.attrs(t=>({className:"mp-album-bg-color"}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: ${t=>t.$bgColor||"transparent"};
  z-index: 0;
  filter: blur(50px);
  transition: background 0.5s ease;
`,IV=V.div.attrs({className:"mp-album-ripple-effect"})`
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
`,PV=V.div.attrs({className:"mp-album-artwork"})`
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
`,RV=V.img.attrs({className:"mp-album-image"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,lw=V.div.attrs({className:"mp-track-metadata"})`
  text-align: center;
  margin-top: 20px;
  z-index: 1;
  user-select: none; // Prevent selection

  @media (max-height: 700px) {
    margin-top: 12px;
  }
`,cw=V.h2.attrs({className:"mp-track-title"})`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  user-select: none; // Prevent text selection

  @media (max-height: 700px) {
    font-size: 1.2rem;
    margin: 0 0 4px 0;
  }
`,uw=V.p.attrs({className:"mp-track-artist"})`
  font-size: 1.1rem;
  color: ${t=>t.theme.textSecondary};
  margin: 0 0 5px 0;
  user-select: none; // Prevent text selection
`,DV=V.p.attrs({className:"mp-track-album"})`
  font-size: 0.9rem;
  color: ${t=>t.theme.textSecondary};
  opacity: 0.8;
  user-select: none; // Prevent text selection
`,VV=V.div.attrs({className:"mp-playback-controls"})`
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
`,Ur=V.button.attrs({className:"mp-control-button"})`
  background: transparent;
  border: none;
  color: ${t=>t.theme.text};
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, color 0.2s ease;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    color: ${t=>t.theme.primary};
    transform: scale(1.1);
  }

  @media (max-width: 380px) {
    min-width: 44px;
    min-height: 44px;
    padding: 10px;
  }
`,NV=V(Ur).attrs({className:"mp-play-pause-button"})`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${t=>t.theme.primary};
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
    background: ${t=>t.theme.primary};
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
    background: ${t=>t.theme.primaryDark||"#388e3c"};
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.7);
  }

  &.paused {
    background: ${t=>t.theme.primary};
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
      background: ${t=>t.theme.primaryDark||"#2e7d32"};
    }

    &.paused {
      background: ${t=>t.theme.primaryHover||"#43a047"};
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
`,MV=({isPlaying:t,onPlayPause:e,onPrev:n,onNext:r})=>y.jsxs(VV,{children:[y.jsx(Ur,{onClick:n,children:y.jsx(cD,{})}),y.jsx(NV,{onClick:e,className:t?"playing":"paused","aria-label":t?"Pause":"Play",children:y.jsxs("div",{className:"icon-container",children:[y.jsx(Td,{className:"play-icon"}),y.jsx(bd,{className:"pause-icon"})]})}),y.jsx(Ur,{onClick:r,children:y.jsx(hD,{})})]}),LV=V.div.attrs({className:"mp-progress-wrapper"})`
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
`,OV=V.div.attrs({className:"mp-progress-track"})`
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
`,jV=V.div.attrs(t=>({style:{width:t.$width}}))`
  height: 100%;
  border-radius: inherit;
  position: relative;
  transition: width ${t=>t.$isDragging?"0s":"0.08s"} linear;
  background: linear-gradient(
    90deg,
    ${t=>t.theme.primary} 0%,
    ${t=>t.theme.primaryHover||"#43a047"} 100%
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
    animation: ${t=>t.$isPlaying?"shimmer 3s infinite":"none"};
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
`,FV=V.div.attrs(t=>({style:{left:t.$position,transform:`translate(-50%, -50%) scale(${t.$visible?1:0})`,width:t.$isDragging?"18px":"12px",height:t.$isDragging?"18px":"12px",background:t.$isDragging?"white":t.theme.primary,boxShadow:t.$isDragging?`0 0 0 4px rgba(76, 175, 80, 0.3), 
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
    width: ${t=>t.$isDragging?"6px":"4px"};
    height: ${t=>t.$isDragging?"6px":"4px"};
    background: white;
    border-radius: 50%;
    opacity: ${t=>t.$isDragging?.9:.7};
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  }

  /* Focus ring for enhanced visibility during interaction */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${t=>t.$isDragging?"28px":"20px"};
    height: ${t=>t.$isDragging?"28px":"20px"};
    transform: translate(-50%, -50%)
      scale(${t=>t.$isDragging?1:.7});
    opacity: ${t=>t.$isDragging?.6:0};
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
  animation: ${t=>t.$isDragging?"advancedPulse 2s infinite cubic-bezier(0.66, 0, 0.34, 1)":"none"};
`,$V=V.div.attrs({className:"mp-time-display"})`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${t=>t.theme.textSecondary};
  margin-top: 10px;
  user-select: none;
  letter-spacing: 0.5px;
  font-weight: 500;
  opacity: 0.9;
  padding: 0 2px;

  /* Apply subtle highlight to current time */
  span:first-child {
    color: ${t=>t.theme.primary};
    opacity: 0.95;
  }
`,BV=V.div.attrs(t=>({style:{opacity:t.$visible?1:0,transform:`translateX(-50%) translateY(${t.$visible?0:10}px)`,left:t.$position,background:t.$isDragging?t.theme.primaryDark||"#2e7d32":"rgba(0, 0, 0, 0.75)",padding:t.$isDragging?"5px 10px":"4px 8px",fontSize:t.$isDragging?"0.85rem":"0.75rem",fontWeight:t.$isDragging?600:500}}))`
  position: absolute;
  bottom: ${t=>t.$isDragging?"28px":"24px"};
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
      ${t=>t.$isDragging?t.theme.primaryDark||"#2e7d32":"rgba(0, 0, 0, 0.75)"};
    transition: border-top-color 0.2s ease;
  }
`;class zV{constructor(e,n){this.audioRef=e,this.dispatch=n,this.lastAction=null,this.doubleClickThreshold=300,this.debounceThreshold=150,this.playPromise=null,this.handlePlayPause=()=>{var i;if(this.shouldDebounce("playPause"))return;this.lastAction={type:"playPause",time:Date.now()};const r=this.audioRef.current;if(r)if(r.paused){this.dispatch({type:"PLAY"});try{this.playPromise=r.play(),(i=this.playPromise)==null||i.catch(s=>{console.warn("Play failed:",s),this.dispatch({type:"PAUSE"}),this.playPromise=null})}catch(s){console.warn("Play operation failed:",s),this.dispatch({type:"PAUSE"})}}else this.playPromise?this.playPromise.then(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}).catch(()=>{r.pause(),this.dispatch({type:"PAUSE"}),this.playPromise=null}):(r.pause(),this.dispatch({type:"PAUSE"}))},this.handlePrev=()=>{if(this.shouldDebounce("prev"))return;const r=this.isDoubleClick("prev");this.lastAction={type:"prev",time:Date.now()};const i=this.audioRef.current;if(i){if(r){console.log("Double-click detected on prev button, skipping to previous track"),this.dispatch({type:"PREV_TRACK"});return}i.currentTime>3?i.currentTime=0:this.dispatch({type:"PREV_TRACK"})}},this.handleNext=()=>{if(this.shouldDebounce("next"))return;this.lastAction={type:"next",time:Date.now()},this.isDoubleClick("next")&&console.log("Double-click detected on next button"),this.dispatch({type:"NEXT_TRACK"})}}isDoubleClick(e){return this.lastAction?this.lastAction.type===e&&Date.now()-this.lastAction.time<this.doubleClickThreshold:!1}shouldDebounce(e){return this.lastAction?this.lastAction.type===e&&Date.now()-this.lastAction.time<this.debounceThreshold:!1}}const UV=Ce.forwardRef(({isOpen:t,toggleOpen:e,setSidebarOpen:n},r)=>{var X,ee,z,G;const{state:i,dispatch:s}=ai(),o=I.useRef(null),a=I.useRef(null),c=I.useRef(new zV(o,s)).current,u=c.handlePlayPause,d=c.handlePrev,h=()=>{if(i.repeatMode==="one"&&o.current){o.current.currentTime=0,o.current.play().catch(F=>console.warn("Couldn't restart track:",F));return}s({type:"NEXT_TRACK"})},p=((X=i.currentTrack)==null?void 0:X.color)||"#388e3c";I.useEffect(()=>{var F,$;i.isPlaying?(F=o.current)==null||F.play():($=o.current)==null||$.pause()},[i.isPlaying,i.currentTrack]),I.useEffect(()=>{o.current&&(o.current.volume=i.volume)},[i.volume]);const g=F=>{if(F&&!isNaN(F)){const $=Math.floor(F/60),K=Math.floor(F%60);return`${$}:${K<10?"0":""}${K}`}return"0:00"},_=()=>{if(o.current){const F=o.current.currentTime,$=o.current.duration;s({type:"SET_PROGRESS",payload:F}),s({type:"SET_DURATION",payload:$})}},b=F=>{if(a.current&&o.current){const $=a.current.clientWidth,K=F.nativeEvent.offsetX,te=o.current.duration;o.current.currentTime=K/$*te}};I.useEffect(()=>{if(i.isPlaying&&o.current){const F=o.current.play();F!==void 0&&F.catch($=>{console.warn("Failed to start playback:",$),s({type:"PAUSE"})})}else o.current&&o.current.pause()},[i.currentTrack,i.isPlaying,s]),I.useEffect(()=>{const F=()=>{var K;if((K=o.current)!=null&&K.error){console.error("Media error:",o.current.error);let te=0;const he=3,ye=()=>{if(te<he){te++;const Se=Math.pow(2,te)*1e3;console.log(`Retrying playback in ${Se/1e3} seconds...`),setTimeout(()=>{o.current&&(o.current.load(),o.current.play().catch(Me=>{console.warn("Retry failed:",Me),ye()}))},Se)}else console.warn("All retries failed, skipping track"),h()};ye()}},$=o.current;return $&&$.addEventListener("error",F),()=>{$&&$.removeEventListener("error",F)}},[]);const[k,x]=I.useState(!1),[v,w]=I.useState("0%"),[P,O]=I.useState(!1),[N,T]=I.useState(null),E=F=>{var $;if(a.current){const K=a.current.getBoundingClientRect(),te=(F.clientX-K.left)/K.width,he=Math.max(0,Math.min(1,te))*100;if(w(`${he.toFixed(3)}%`),($=o.current)!=null&&$.duration){const ye=he*o.current.duration/100;T(g(ye))}k||x(!0)}},A=()=>{P||x(!1)},C=F=>{O(!0),M(F)},D=F=>{if(o.current){const $=o.current.duration,K=F/100*$;return g(K)}return"0:00"},M=F=>{if(a.current){const $=a.current.getBoundingClientRect(),K=(F.clientX-$.left)/$.width,te=Math.max(0,Math.min(1,K))*100,he=`${te}%`;if(w(he),T(D(te)),P&&o.current){const ye=o.current.duration;o.current.currentTime=te/100*ye,a.current.querySelector(".mp-progress-fill")&&(a.current.querySelector(".mp-progress-fill").style.width=he)}}},R=()=>{O(!1),setTimeout(()=>{k||x(!1)},100)};I.useEffect(()=>{const F=he=>{if(P&&a.current){he.preventDefault();const ye=a.current.getBoundingClientRect(),Se=(he.clientX-ye.left)/ye.width,Me=Math.max(0,Math.min(1,Se))*100;if(w(`${Me.toFixed(3)}%`),o.current){const vn=o.current.duration;o.current.currentTime=Me/100*vn}}};let $;const K=he=>{P&&(he.preventDefault(),cancelAnimationFrame($),$=requestAnimationFrame(()=>{F(he)}))},te=()=>{P&&(R(),cancelAnimationFrame($))};return P&&(document.addEventListener("mousemove",K,{passive:!1}),document.addEventListener("mouseup",te)),()=>{document.removeEventListener("mousemove",K),document.removeEventListener("mouseup",te),cancelAnimationFrame($)}},[P]);const W=()=>{const F=qV(i.sidebarMode)?i.sidebarMode:"auto",$=["auto","always","manual"],te=($.indexOf(F)+1)%$.length,he=$[te];s({type:"SET_SIDEBAR_MODE",payload:he})},J=()=>{e(),s({type:"SET_SIDEBAR_MODE",payload:"manual"}),s({type:"SIDEBAR_INTERACTION"}),s({type:"USER_INTERACTION"})};return y.jsxs(hT,{$isOpen:t,className:"player-sidebar",ref:r,initial:{right:"-280px"},animate:{right:t?0:"-280px"},transition:{duration:dT.sidebar,ease:[.34,1.56,.64,1]},children:[y.jsx(HV,{}),y.jsxs(WV,{onClick:J,"aria-label":"Close sidebar",children:[y.jsx(vD,{}),y.jsxs("div",{className:"particles",children:[y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"}),y.jsx("div",{className:"particle"})]})]}),y.jsx("audio",{ref:o,src:(ee=i.currentTrack)==null?void 0:ee.audioSrc,onTimeUpdate:_,onEnded:h,onError:F=>{console.error("Audio error:",F),i.isPlaying&&(s({type:"PAUSE"}),setTimeout(()=>{h()},500))},onCanPlayThrough:()=>{i.isPlaying&&o.current&&o.current.play().catch(F=>{console.warn("Auto-play was prevented:",F),s({type:"PAUSE"})})}}),y.jsxs(kV,{$bgColor:p,children:[y.jsx(CV,{$bgColor:p}),i.currentTrack?y.jsxs(y.Fragment,{children:[y.jsxs(PV,{children:[y.jsx(RV,{src:Ns((z=i.currentTrack)==null?void 0:z.coverArt),alt:((G=i.currentTrack)==null?void 0:G.title)||"Album Cover"}),y.jsx(IV,{}),i.equalizerActive&&y.jsx(gV,{})]}),y.jsxs(lw,{children:[y.jsx(cw,{children:i.currentTrack.title}),y.jsx(uw,{children:i.currentTrack.artist}),y.jsx(DV,{children:i.currentTrack.album})]}),y.jsx(MV,{isPlaying:i.isPlaying,onPlayPause:u,onPrev:d,onNext:h}),y.jsxs(LV,{children:[y.jsxs(OV,{ref:a,onClick:b,onMouseMove:E,onMouseEnter:E,onMouseLeave:A,onMouseDown:C,children:[y.jsx(jV,{$width:P?v:`${i.progress/i.duration*100}%`,$isDragging:P,$isPlaying:i.isPlaying}),y.jsx(BV,{$visible:k,$position:v,$isDragging:P,children:N||g(i.progress)}),y.jsx(FV,{$visible:k||P,$position:P||k?v:`${i.progress/i.duration*100}%`,$isDragging:P})]}),y.jsxs($V,{children:[y.jsx("span",{children:g(i.progress)}),y.jsx("span",{children:g(i.duration)})]})]})]}):y.jsxs(lw,{children:[y.jsx(cw,{children:"No track selected"}),y.jsx(uw,{children:"Select a track to play"})]})]}),y.jsxs(KV,{children:[y.jsx(QV,{children:y.jsx(TV,{volume:Math.round(i.volume*100),onVolumeChange:F=>s({type:"SET_VOLUME",payload:F/100})})}),y.jsxs(YV,{children:[y.jsx(Ur,{onClick:()=>s({type:"TOGGLE_SHUFFLE"}),style:{color:i.isShuffling?"#388e3c":""},title:"Toggle shuffle mode",children:y.jsx(gD,{})}),y.jsx(JV,{onClick:()=>s({type:"CYCLE_REPEAT_MODE"}),className:`${i.repeatMode==="off"?"repeat-off":i.repeatMode==="all"?"repeat-all":"repeat-one"} ${i.repeatMode!=="off"?"active":""}`,title:`Repeat mode: ${i.repeatMode}`,"aria-label":`Repeat mode: ${i.repeatMode}`,children:y.jsxs("div",{className:"repeat-icon-container",children:[y.jsx(nV,{className:`repeat-off-icon ${i.repeatMode==="off"?"active":""}`}),y.jsx(iV,{className:`repeat-all-icon ${i.repeatMode==="all"?"active":""}`}),y.jsx(rV,{className:`repeat-one-icon ${i.repeatMode==="one"?"active":""}`}),y.jsx("span",{className:"repeat-badge",children:"1"})]})}),y.jsx(Ur,{onClick:()=>s({type:"TOGGLE_VISUALIZER"}),style:{color:i.visualizerActive?"#388e3c":""},title:"Toggle visualizer",children:y.jsx(uD,{})}),y.jsx(XV,{onClick:()=>s({type:"TOGGLE_EQUALIZER"}),className:`${i.isPlaying?"playing":""} ${i.equalizerActive?"active":""}`,style:{color:i.equalizerActive?"#388e3c":""},title:"Toggle equalizer",children:y.jsx(tV,{})}),y.jsx("div",{}),y.jsxs(Ur,{className:"sidebar-mode-button",onClick:W,style:{color:(()=>{switch(i.sidebarMode){case"auto":return"rgba(76, 175, 80, 1)";case"always":return"rgba(33, 150, 243, 1)";case"manual":return"rgba(255, 152, 0, 1)";default:return"rgba(76, 175, 80, 1)"}})()},title:`Sidebar: ${i.sidebarMode} mode`,children:[i.sidebarMode==="auto"&&y.jsx(dD,{}),i.sidebarMode==="always"&&y.jsx(pD,{}),i.sidebarMode==="manual"&&y.jsx(fD,{})]})]})]})]})}),HV=V.div.attrs({className:"mp-sidebar-ambient-effect"})`
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
`,WV=V.button.attrs({className:"mp-sidebar-close"})`
  position: absolute;
  top: ${t=>t.theme.isMobile?"10px":"15px"};
  right: ${t=>t.theme.isMobile?"10px":"15px"};
  width: ${t=>t.theme.isMobile?"40px":"36px"};
  height: ${t=>t.theme.isMobile?"40px":"36px"};
  border: none;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: ${t=>t.theme.isMobile?"1.7rem":"1.5rem"};
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
`,qV=t=>t==="auto"||t==="always"||t==="manual",GV=()=>{var u;const{state:t,dispatch:e}=ai(),[n,r]=I.useState(!1),i=I.useRef(null),s=I.useRef(null);I.useRef(null),I.useEffect(()=>{const d=()=>{try{window.removeEventListener("click",d),window.removeEventListener("touchstart",d);const h=window.AudioContext||window.webkitAudioContext;if(h){const p=new h;p.state==="suspended"&&p.resume(),console.log("Audio context initialized through user interaction")}}catch(h){console.log("Audio initialization error:",h)}};return window.addEventListener("click",d),window.addEventListener("touchstart",d),()=>{window.removeEventListener("click",d),window.removeEventListener("touchstart",d)}},[]),I.useEffect(()=>{if(t.sidebarMode==="auto"){const d=g=>{const _=window.innerWidth,b=Math.min(80,_*.08);if(g.clientX>_-b&&!n&&(r(!0),e({type:"SIDEBAR_INTERACTION"})),n){const x=_-280;g.clientX<x&&r(!1)}},h=g=>{n&&s.current&&(s.current.contains(g.target)||r(!1))},p=g=>{if(n&&g.touches.length>0){const _=g.touches[0],b=window.innerWidth,k=280;_.clientX<b-k-30&&r(!1)}};return document.addEventListener("mousemove",d),document.addEventListener("click",h),document.addEventListener("touchmove",p),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("click",h),document.removeEventListener("touchmove",p)}}t.sidebarMode==="always"&&r(!0)},[t.sidebarMode,n,e,s]);const o=d=>{if(d.current){const h=d.current.currentTime,p=d.current.duration;!isNaN(h)&&!isNaN(p)&&(e({type:"SET_PROGRESS",payload:h}),e({type:"SET_DURATION",payload:p}))}},a=()=>{e({type:"NEXT_TRACK"})},c=()=>{const d=!n;r(d),e({type:"SET_SIDEBAR_OPEN",payload:d}),e({type:"TOGGLE_SIDEBAR_VISIBILITY"}),t.sidebarMode!=="manual"&&e({type:"SET_SIDEBAR_MODE",payload:"manual"}),e({type:"SIDEBAR_INTERACTION"}),e({type:"USER_INTERACTION"})};return I.useEffect(()=>{const d=h=>{const p=h.target;p.tagName==="IMG"&&!p.src.includes("default_cover.jpeg")&&(console.log(`Image failed to load: ${p.src}, using default cover`),p.src=iT)};return document.addEventListener("error",d,!0),()=>{document.removeEventListener("error",d,!0)}},[]),I.useEffect(()=>{t.sidebarOpen!==void 0&&r(t.sidebarOpen)},[t.sidebarOpen]),y.jsxs(hT,{$isOpen:n,ref:s,initial:{right:"-280px"},animate:{right:n?0:"-280px"},transition:{duration:dT.sidebar,ease:[.34,1.56,.64,1]},children:[y.jsx(SV,{}),y.jsx("audio",{ref:i,src:(u=t.currentTrack)==null?void 0:u.audioSrc,onTimeUpdate:()=>o(i),onEnded:a}),y.jsx(AV,{children:t.visualizerActive&&y.jsx(aV,{})}),y.jsx(UV,{isOpen:n,toggleOpen:c,setSidebarOpen:r,ref:s})]})},KV=V.div.attrs({className:"mp-secondary-controls"})`
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
`,QV=V.div.attrs({className:"mp-control-group"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  padding: 0 2px;
`,YV=V.div.attrs({className:"mp-feature-toggles"})`
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
`,XV=V(Ur).attrs({className:"mp-control-button mp-equalizer-button"})`
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
    color: ${t=>{var e,n;return((e=t.style)==null?void 0:e.color)||((n=t.theme)==null?void 0:n.primary)||"#4caf50"}};
  }
`,JV=V(Ur).attrs({className:"mp-control-button mp-repeat-button"})`
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
    background: ${t=>t.theme.primary||"#4caf50"};
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
`,ZV=({isOpen:t,onToggle:e,className:n})=>y.jsxs(eN,{className:n,onClick:e,whileHover:{scale:1.05},whileTap:{scale:.95},children:[y.jsx(tN,{$isOpen:t,children:y.jsx(nN,{animate:{y:t?"0%":"-50%",rotate:t?0:-15},transition:{type:"spring",stiffness:300,damping:20}})}),y.jsx(rN,{}),y.jsx(iN,{children:y.jsx(sN,{})})]}),eN=V(se.button)`
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

  @media (max-width: 768px) {
    width: 20px; // Reduced from 24px
    height: 28px; // Reduced from 32px
  }
`,tN=V.div`
  position: absolute;
  top: 12px;
  width: 20px;
  height: 30px;
  overflow: hidden;
  border-radius: 4px;
  opacity: ${t=>t.$isOpen?.8:1};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    width: 12px; // Reduced from 16px
    height: 18px; // Reduced from 24px
    top: 8px; // Adjusted for smaller size
  }
`,nN=V(se.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
  border-radius: 4px;

  @media (max-width: 768px) {
    background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
    border-radius: 2px; // Adjusted for smaller size
  }
`,rN=V.div`
  width: 12px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px 2px 0 0;

  @media (max-width: 768px) {
    width: 8px; // Reduced from 12px
`,iN=V.div`
  width: 24px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 16px; // Reduced from 24px
`,sN=V.div`
  position: absolute;
  inset: 1px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;V.div`
  @media (max-width: 768px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;V.span`
  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 2px;
  }
`;class oN{constructor(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.canvas.width=100,this.canvas.height=100,this.imageCache=new Map}async extractColors(e){if(this.imageCache.has(e))return this.imageCache.get(e);try{const n=await this.loadImage(e);if(!this.ctx)throw new Error("Canvas context not available");this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(n,0,0,this.canvas.width,this.canvas.height);const i=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data,s=this.analyzePalette(i);return this.imageCache.set(e,s),s}catch(n){return console.error("Failed to extract colors:",n),this.getDefaultPalette()}}loadImage(e){return new Promise((n,r)=>{const i=new Image;i.crossOrigin="Anonymous",i.onload=()=>n(i),i.onerror=s=>r(new Error(`Failed to load image: ${e}`)),i.src=e})}analyzePalette(e){const n={},r=[],i=[],s=[];for(let _=0;_<e.length;_+=4){const b=e[_],k=e[_+1],x=e[_+2];if(e[_+3]<128)continue;const w=`${Math.floor(b/8)},${Math.floor(k/8)},${Math.floor(x/8)}`;n[w]?(n[w].count++,n[w].r=(n[w].r+b)/2,n[w].g=(n[w].g+k)/2,n[w].b=(n[w].b+x)/2):n[w]={count:0,r:b,g:k,b:x};const P=(b+k+x)/3,O=Math.max(b,k,x)-Math.min(b,k,x);P<80&&r.push([b,k,x]),P>200&&i.push([b,k,x]),O>100&&s.push([b,k,x])}const o=Object.values(n).sort((_,b)=>b.count-_.count),a=o[0]||{r:76,g:175,b:80},c=this.findDistinctColor(o,a)||{r:33,g:150,b:243},u=this.averageColors(r)||[23,23,23],d=this.averageColors(i)||[230,230,230],h=this.getMostVibrant(s)||[255,87,34],p=this.getMutedVersion(a),g=this.getComplementaryColor(a);return{primary:this.rgbToHex(a.r,a.g,a.b),secondary:this.rgbToHex(c.r,c.g,c.b),dark:this.rgbToHex(u[0],u[1],u[2]),light:this.rgbToHex(d[0],d[1],d[2]),vibrant:this.rgbToHex(h[0],h[1],h[2]),accent:this.rgbToHex(g.r,g.g,g.b),muted:this.rgbToHex(p.r,p.g,p.b)}}findDistinctColor(e,n){for(const i of e)if(this.getColorDistance(i,n)>80)return i}getColorDistance(e,n){const r=e.r-n.r,i=e.g-n.g,s=e.b-n.b;return Math.sqrt(r*r*.3+i*i*.59+s*s*.11)}averageColors(e){if(e.length===0)return null;let n=0,r=0,i=0;for(const s of e)n+=s[0],r+=s[1],i+=s[2];return[Math.round(n/e.length),Math.round(r/e.length),Math.round(i/e.length)]}getMostVibrant(e){if(e.length===0)return null;let n=e[0],r=this.getSaturation(n);for(const i of e){const s=this.getSaturation(i);s>r&&(r=s,n=i)}return n}getSaturation(e){const n=Math.max(...e),r=Math.min(...e);return n===0?0:(n-r)/n}getMutedVersion(e){return{r:Math.round(e.r*.7+128*(1-.7)),g:Math.round(e.g*.7+128*(1-.7)),b:Math.round(e.b*.7+128*(1-.7))}}getComplementaryColor(e){return{r:255-e.r,g:255-e.g,b:255-e.b}}rgbToHex(e,n,r){return`#${this.componentToHex(e)}${this.componentToHex(n)}${this.componentToHex(r)}`}componentToHex(e){const n=Math.round(e).toString(16);return n.length===1?"0"+n:n}getDefaultPalette(){return{primary:"#4CAF50",secondary:"#2196F3",accent:"#FF5722",dark:"#212121",light:"#F5F5F5",vibrant:"#E91E63",muted:"#7CB342"}}generateWaveEffects(e){return[{color:e.primary,amplitude:20,frequency:.02,speed:.5},{color:e.secondary,amplitude:15,frequency:.03,speed:.7},{color:e.accent,amplitude:10,frequency:.01,speed:.3}]}createGradientBackground(e){return`radial-gradient(circle at center, 
      ${this.hexToRgba(e.dark,.8)} 0%, 
      ${this.hexToRgba(e.dark,.9)} 70%, 
      ${this.hexToRgba(e.dark,1)} 100%)`}hexToRgba(e,n){const r=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return`rgba(${r}, ${i}, ${s}, ${n})`}}const jc=new oN,aN=({imageUrl:t,isPlaying:e=!1,intensity:n=.5})=>{const r=I.useRef(null),i=I.useRef(null),s=I.useRef(),[o,a]=I.useState([]),[c,u]=I.useState("");I.useEffect(()=>{if(!t)return;let h=!0;return(async()=>{try{const g=await jc.extractColors(t);if(!h)return;const _=jc.generateWaveEffects(g);a(_);const b=jc.createGradientBackground(g);u(b)}catch(g){console.error("Failed to process image colors:",g)}})(),()=>{h=!1}},[t]),I.useEffect(()=>{const h=i.current,p=r.current;if(!h||!p||o.length===0)return;const g=()=>{const{width:v,height:w}=p.getBoundingClientRect();h.width=v,h.height=w};g();const _=new ResizeObserver(nT.throttle(g,100));_.observe(p);const b={value:0};let k=0;const x=v=>{k===0&&(k=v);const w=(v-k)/1e3;k=v,e&&(b.value+=w);const P=h.getContext("2d");P&&(P.clearRect(0,0,h.width,h.height),o.forEach((O,N)=>{d(P,O,b.value,h.width,h.height,N,n)}),s.current=requestAnimationFrame(x))};return s.current=requestAnimationFrame(x),()=>{s.current&&cancelAnimationFrame(s.current),_.disconnect()}},[o,e,n]);const d=(h,p,g,_,b,k,x)=>{const{amplitude:v,frequency:w,speed:P,color:O}=p,N=v*x*(1-k*.2),T=P*(e?1:.2),E=b*(.3+k*.15);h.beginPath(),h.moveTo(0,E);for(let C=0;C<=_;C+=1){const D=E+Math.sin(C*w+g*T)*N+Math.sin(C*w*.5+g*T*.7)*(N*.5);h.lineTo(C,D)}h.lineTo(_,b),h.lineTo(0,b),h.closePath();const A=h.createLinearGradient(0,E,0,b);A.addColorStop(0,`${O}80`),A.addColorStop(1,`${O}10`),h.fillStyle=A,h.fill()};return y.jsxs(lN,{ref:r,style:{background:c},children:[y.jsx(cN,{ref:i}),y.jsx(uN,{$isPlaying:e})]})},lN=V.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  transition: background 1s ease;
`,cN=V.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,uN=V.div`
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
  opacity: ${t=>t.$isPlaying?.7:.3};
  transition: opacity 0.5s ease;
  z-index: 2;
  
  animation: ${t=>t.$isPlaying?"pulse 4s infinite alternate":"none"};
  
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
`,dN=()=>{var _,b,k;const{state:t,dispatch:e}=ai(),{state:n,dispatch:r}=Ed(),[i,s]=I.useState(!0),[o,a]=I.useState({primary:"#4caf50",vibrant:"#4caf50",accent:"#43a047"});I.useEffect(()=>{var x;(x=t.currentTrack)!=null&&x.coverArt&&(async()=>{var w;try{const P=Ns((w=t.currentTrack)==null?void 0:w.coverArt),O=await jc.extractColors(P);a({primary:O.primary,vibrant:O.vibrant,accent:O.accent})}catch(P){console.error("Failed to extract colors:",P)}})()},[t.currentTrack]);const c=I.useMemo(()=>`linear-gradient(135deg, 
      ${o.primary}22 0%, 
      ${o.vibrant}33 50%, 
      ${o.accent}22 100%)`,[o]),u=()=>{e({type:t.isPlaying?"PAUSE":"PLAY"})},d=()=>{e({type:"PREV_TRACK"})},h=()=>{e({type:"NEXT_TRACK"})},p=()=>{r({type:"TOGGLE_EXPLORER"})},g=()=>{e({type:"SET_SIDEBAR_OPEN",payload:!0}),e({type:"SET_SIDEBAR_MODE",payload:"manual"})};return I.useEffect(()=>{s(!t.sidebarOpen)},[t.sidebarOpen]),y.jsxs(y.Fragment,{children:[y.jsx(kN,{}),y.jsxs(hN,{initial:{y:100},animate:{y:0},exit:{y:100},transition:{type:"spring",damping:20},style:{background:c},className:"mobile-player-container",children:[y.jsxs(fN,{children:[((_=t.currentTrack)==null?void 0:_.coverArt)&&y.jsx(aN,{imageUrl:Ns(t.currentTrack.coverArt),isPlaying:t.isPlaying,intensity:.6}),y.jsx(pN,{$isPlaying:t.isPlaying})]}),y.jsx(mN,{children:y.jsxs(gN,{children:[y.jsxs(yN,{children:[y.jsx(SN,{isOpen:n.explorerVisible,onToggle:p}),t.currentTrack&&y.jsx(vN,{$isPlaying:t.isPlaying,children:y.jsx(wN,{src:Ns(t.currentTrack.coverArt),alt:`${t.currentTrack.title} cover art`,$isPlaying:t.isPlaying})}),y.jsxs(xN,{children:[y.jsx(_N,{children:((b=t.currentTrack)==null?void 0:b.title)||"No track"}),y.jsx(EN,{children:((k=t.currentTrack)==null?void 0:k.artist)||"No artist"})]})]}),y.jsx(or,{children:i&&y.jsx(Vp,{onClick:g,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.05},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},$accentColor:o.primary,"aria-label":"Open sidebar player",children:y.jsx(AN,{src:"/assets/icons/full_screen.png",alt:"Fullscreen"})})}),y.jsxs(bN,{children:[y.jsx(Dp,{onClick:d,"aria-label":"Previous track",children:y.jsx(aT,{})}),y.jsx(TN,{onClick:u,"aria-label":t.isPlaying?"Pause":"Play",$accentColor:o.vibrant,$isPlaying:t.isPlaying,children:t.isPlaying?y.jsx(bd,{}):y.jsx(Td,{style:{marginLeft:"2px"}})}),y.jsx(Dp,{onClick:h,"aria-label":"Next track",children:y.jsx(lT,{})})]})]})})]})]})},hN=V(se.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px;
  z-index: 1000;
  overflow: hidden;
  height: 60px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  @media (max-width: 768px) {
    height: 54px;
    padding: 4px;
  }
`,fN=V.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
`,pN=V.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 18, 18, 0.4);
  backdrop-filter: blur(${t=>t.$isPlaying?"8px":"16px"});
  z-index: 1;
  transition: backdrop-filter 1.2s ease;
`,mN=V.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,gN=V.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  height: 100%;
`,yN=V.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  margin-right: 12px;
`,vN=V.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transform: ${t=>t.$isPlaying?"scale(1.05)":"scale(1)"};
  transition: transform 0.5s ease;
`,wN=V.img.attrs({draggable:!1})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${t=>t.$isPlaying?"scale(1.1)":"scale(1)"};
  transition: transform 5s ease;
  animation: ${t=>t.$isPlaying?"subtlePulse 3s infinite alternate":"none"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  user-drag: none;
  pointer-events: none;

  @keyframes subtlePulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`,xN=V.div`
  min-width: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`,_N=V.div`
  color: white;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`,EN=V.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`,bN=V.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Dp=V.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

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

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px;
  }
`,TN=V(Dp)`
  background: ${t=>t.$accentColor||"#4caf50"};
  border-radius: 50%;
  width: 34px;
  height: 34px;
  font-size: 16px;
  box-shadow: 0 2px 12px
    ${t=>t.$isPlaying?`${t.$accentColor||"#4caf50"}90`:`${t.$accentColor||"#4caf50"}50`};
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
    opacity: ${t=>t.$isPlaying?.9:.7};
    transition: opacity 0.5s ease;
  }

  &:active {
    transform: scale(0.95);
    background: ${t=>t.$accentColor||"#43a047"};
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`,SN=V(ZV)`
  margin-right: 8px;
  transform-origin: center;
  min-width: 24px;
  height: 32px;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3));

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    min-width: 20px;
    height: 28px;
    margin-right: 6px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,Vp=V(se.button)`
  background: transparent;
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 4px;
  position: relative;
  overflow: visible;

  outline: none;
  -webkit-tap-highlight-color: transparent;

  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`,AN=V.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  filter: brightness(1.2) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
  opacity: 0.9;

  ${Vp}:hover & {
    filter: brightness(1.5) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6));
    transform: scale(1.1);
    opacity: 1;
  }

  ${Vp}:active & {
    filter: brightness(0.9) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    transform: scale(0.9);
  }
`,kN=IE`
  /* Apply to all elements in the player */
  .mobile-player-container * {
    user-select: none !important;
    -webkit-user-select: none !important;
    -webkit-touch-callout: none !important;
  }
  
  button, 
  [role="button"],
  input,
  select,
  a,
  img,
  svg {
    &:focus {
      outline: none !important;
    }
    
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  
  img {
    -webkit-user-drag: none;
    user-drag: none;
  }
`,CN=co`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`,fT=co`
  0% {
    background-position: 200% 50%;
    opacity: 0.3;
  }
  100% {
    background-position: -200% 50%;
    opacity: 0.7;
  }
`,pT=co`
  0% { filter: brightness(1) blur(8px); }
  50% { filter: brightness(1.5) blur(12px); }
  100% { filter: brightness(1) blur(8px); }
`,jt=(t="default")=>{const e={electronic:"#00ff99",rock:"#ff4444",jazz:"#4444ff",classical:"#ffaa00",pop:"#ff44ff",default:"#4caf50"};return e[t]||e.default},Qa=V.button`
  background: none;
  border: none;
  color: ${({theme:t})=>t.text.secondary};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({theme:t})=>t.text.primary};
    background: ${({theme:t})=>t.ui.hover};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,IN=V(Qa)`
  width: 40px;
  height: 40px;
  background: ${t=>jt(t.$category)};
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: ${t=>`${jt(t.$category)}ee`};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
  }
`,PN=V.div`
  width: 100%;
  height: 4px;
  background: ${({theme:t})=>t.id==="contrast-light"?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  transition: height 0.2s ease;

  &:hover {
    height: 6px;
  }
`,RN=V.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${t=>jt(t.$category)} 0%,
    ${t=>jt(t.$category)}cc 100%
  );
  border-radius: inherit;
  position: relative;
  width: ${t=>t.$width};
  transition: ${t=>t.$isDragging?"none":"width 0.1s linear"};

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
    animation: ${fT} 2s linear infinite;
    opacity: ${t=>t.$isDragging?1:.7};
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 4px;
    height: 16px;
    background: ${t=>jt(t.$category)};
    border-radius: 2px;
    transform: translate(50%, -50%);
    box-shadow: 0 0 10px ${t=>jt(t.$category)}80;
    animation: ${pT} 2s ease-in-out infinite;
  }
`,DN=V.div`
  position: absolute;
  bottom: 20px;
  left: ${t=>t.$position};
  transform: translateX(-50%);
  background: ${({theme:t})=>{var e;return t.id==="contrast-light"?"rgba(0, 0, 0, 0.8)":((e=t.player)==null?void 0:e.controls)||"rgba(0, 0, 0, 0.8)"}};
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#ffffff"}};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: ${t=>t.$visible?1:0};
  transition: opacity 0.2s ease;
  pointer-events: none;
  border: 1px solid
    ${({theme:t})=>{var e;return t.id==="contrast-light"?"transparent":((e=t.explorer)==null?void 0:e.border)||"rgba(255, 255, 255, 0.1)"}};
`,VN=V.input`
  width: 100px;
  height: 4px;
  -webkit-appearance: none;
  background: ${({theme:t})=>t.id==="contrast-light"?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: ${({theme:t})=>t.id==="contrast-light"?t.ui.accent:"white"};
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  &:hover::-webkit-slider-thumb {
    transform: scale(1.2);
    box-shadow: 0 0 8px ${({theme:t})=>t.ui.accent}80;
  }
`,NN=V(se.div)`
  position: fixed;
  bottom: -15px;
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
`,MN=V.div`
  backdrop-filter: blur(10px);
  transition: background 0.3s ease;
`,LN=V.div`
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
      ${t=>t.theme.id==="contrast-light"?`${jt(t.$category)}25`:`${jt(t.$category)}15`},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,ON=V.img`
  width: 56px;
  height: 56px;
  border-radius: 4px;
  object-fit: cover;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  ${t=>t.$isPlaying&&Qs`
      animation: ${CN} 3s ease-in-out infinite;

      &::before {
        content: "";
        position: absolute;
        inset: -15px;
        background: ${jt(t.$category)};
        animation: ${pT} 3s ease-in-out infinite;
        z-index: -1;
        opacity: 0.5;
      }

      &::after {
        content: "";
        position: absolute;
        inset: -2px;
        background: linear-gradient(
          90deg,
          ${jt(t.$category)}00,
          ${jt(t.$category)}40,
          ${jt(t.$category)}00
        );
        animation: ${fT} 3s linear infinite;
        border-radius: inherit;
      }
    `}

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 0 20px ${t=>jt(t.$category)}40,
      0 0 40px ${t=>jt(t.$category)}20;
  }
`,jN=V.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,FN=V.div`
  color: ${({theme:t})=>t.text.primary};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$N=V.div`
  color: ${({theme:t})=>t.text.secondary};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,BN=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 2;
  max-width: 600px;
`,zN=V.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,UN=V.div`
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
      ${t=>`${t.theme.primary}26`} 0%,
      transparent 70%
    );
    transform: translateY(-50%);
    filter: blur(8px);
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }
`,HN=V.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 180px;
  justify-content: flex-end;
  flex: 1;
`,WN=V.div`
  color: ${({theme:t})=>t.text.secondary};
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
    color: ${({theme:t})=>t.text.primary};
  }
`,qN=V.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,GN=V(Qa)`
  color: rgba(255, 255, 255, ${t=>t.$isMuted?.5:.8});

  &:hover {
    color: white;
  }
`,KN=V.div`
  position: relative;
`,QN=V(Qa)`
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`,YN=V(se.div)`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 8px;
  background: ${({theme:t})=>{var e,n;return((e=t.player)==null?void 0:e.controls)||((n=t.background)==null?void 0:n.secondary)||"#1a1a1a"}};
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: 220px;
  z-index: 101;
  border: 1px solid
    ${({theme:t})=>{var e;return((e=t.explorer)==null?void 0:e.border)||"rgba(255, 255, 255, 0.1)"}};

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    right: 12px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid
      ${({theme:t})=>{var e,n;return((e=t.player)==null?void 0:e.controls)||((n=t.background)==null?void 0:n.secondary)||"#1a1a1a"}};
  }
`,XN=V.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 8px;
`,JN=V(se.div)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 6px;
  border: 2px solid
    ${t=>{var e;return t.$isActive?((e=t.theme.ui)==null?void 0:e.accent)||"#007aff":"transparent"}};
  background: ${t=>t.$color};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    border-color: ${t=>{var e;return(e=t.theme.ui)!=null&&e.accent?`${t.theme.ui.accent}80`:"rgba(0, 122, 255, 0.5)"}};
  }
`,cc=t=>{const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`},ZN=[{id:"dark",name:"Dark",color:"#121212"},{id:"light",name:"Light",color:"#f5f5f5"},{id:"space-grey",name:"Space Grey",color:"#1e2132"},{id:"ocean-blue",name:"Ocean Blue",color:"#00547a"},{id:"cyber-punk",name:"Cyberpunk",color:"#19002e"},{id:"contrast-light",name:"High Contrast",color:"#ffffff"}],eM=t=>t&&typeof t=="object"&&"id"in t,tM=()=>{var M,R,W,J,X,ee,z,G;const t=QI();if(!eM(t))return console.warn("Invalid theme provided to HorizontalPlayerBar"),null;const{state:e,dispatch:n}=ai(),r=I.useRef(null),[i,s]=I.useState(!1),o=I.useRef(null),[a,c]=I.useState(!1),[u,d]=I.useState("0px"),[h,p]=I.useState("0:00"),[g,_]=I.useState(!1),b=I.useRef(e.volume),[k,x]=I.useState(!1),v=I.useRef(null),{setTheme:w,currentTheme:P}=tT();I.useEffect(()=>{const F=$=>{v.current&&!v.current.contains($.target)&&!$.target.closest('button[aria-label="Theme switcher"]')&&x(!1)};return document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}},[]);const O=()=>{n({type:e.isPlaying?"PAUSE":"PLAY"})},N=()=>{n({type:"PREV_TRACK"})},T=()=>{n({type:"NEXT_TRACK"})},E=F=>{if(!o.current||!r.current)return;const $=o.current.getBoundingClientRect(),te=(F.clientX-$.left)/$.width*r.current.duration;isNaN(te)||(d(`${F.clientX-$.left}px`),p(cc(te)),c(!0))},A=()=>{g?(n({type:"SET_VOLUME",payload:b.current}),_(!1)):(b.current=e.volume,n({type:"SET_VOLUME",payload:0}),_(!0))},C=F=>{const $=parseInt(F.target.value,10)/100;n({type:"SET_VOLUME",payload:$}),$>0&&g&&_(!1)},D=F=>{if(F.preventDefault(),s(!0),o.current&&r.current){const $=o.current.getBoundingClientRect(),te=(F.clientX-$.left)/$.width*r.current.duration;isNaN(te)||(r.current.currentTime=te,n({type:"SET_PROGRESS",payload:te}))}e.isPlaying&&r.current&&r.current.pause()};return I.useEffect(()=>{const F=K=>{if(i&&o.current&&r.current){const te=o.current.getBoundingClientRect(),ye=Math.min(Math.max((K.clientX-te.left)/te.width,0),1)*r.current.duration;isNaN(ye)||(r.current.currentTime=ye,n({type:"SET_PROGRESS",payload:ye}),d(`${K.clientX-te.left}px`),p(cc(ye)))}},$=()=>{i&&(s(!1),c(!1),e.isPlaying&&r.current&&r.current.play().catch(console.error))};return i&&(document.addEventListener("mousemove",F),document.addEventListener("mouseup",$)),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",$)}},[i,e.isPlaying,n]),y.jsx(MN,{style:{background:"rgba(0, 0, 0, 0.8)"},children:y.jsxs(NN,{$themeId:t.id,initial:{y:100,opacity:0},animate:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:30,mass:1}},exit:{y:100,opacity:0,transition:{duration:.2,ease:"easeInOut"}},children:[y.jsxs(LN,{$category:(M=e.currentTrack)==null?void 0:M.genre,children:[y.jsx(ON,{src:Ns((R=e.currentTrack)==null?void 0:R.coverArt),alt:((W=e.currentTrack)==null?void 0:W.title)||"Album art",$isPlaying:e.isPlaying,$category:(J=e.currentTrack)==null?void 0:J.genre}),y.jsxs(jN,{children:[y.jsx(FN,{children:((X=e.currentTrack)==null?void 0:X.title)||"No track"}),y.jsx($N,{children:((ee=e.currentTrack)==null?void 0:ee.artist)||"No artist"})]}),y.jsxs(WN,{children:[y.jsx("span",{children:cc(e.progress)}),y.jsx("span",{children:"/"}),y.jsx("span",{children:cc(e.duration)})]})]}),y.jsxs(BN,{children:[y.jsxs(zN,{children:[y.jsx(Qa,{onClick:N,"aria-label":"Previous track",children:y.jsx(aT,{})}),y.jsx(IN,{onClick:O,"aria-label":e.isPlaying?"Pause":"Play",$isPlaying:e.isPlaying,$category:(z=e.currentTrack)==null?void 0:z.genre,children:e.isPlaying?y.jsx(bd,{}):y.jsx(Td,{})}),y.jsx(Qa,{onClick:T,"aria-label":"Next track",children:y.jsx(lT,{})})]}),y.jsx(UN,{children:y.jsxs(PN,{ref:o,onMouseDown:D,onMouseMove:E,onMouseLeave:()=>{c(!1),i||p("0:00")},children:[y.jsx(RN,{$width:`${e.progress/e.duration*100}%`,$isDragging:i,$category:(G=e.currentTrack)==null?void 0:G.genre}),(a||i)&&y.jsx(DN,{$visible:!0,$position:u,children:h})]})})]}),y.jsxs(HN,{children:[y.jsxs(qN,{children:[y.jsx(GN,{onClick:A,$isMuted:g||e.volume===0,"aria-label":g?"Unmute":"Mute",children:y.jsx(cT,{})}),y.jsx(VN,{type:"range",min:"0",max:"100",value:Math.round(e.volume*100),onChange:C,"aria-label":"Volume"})]}),y.jsxs(KN,{children:[y.jsx(QN,{onClick:()=>x(!k),"aria-label":"Theme switcher",children:y.jsx(mD,{})}),y.jsx(or,{children:k&&y.jsx(YN,{ref:v,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},children:y.jsx(XN,{children:ZN.map(F=>y.jsx(JN,{$isActive:P.id===F.id,$color:F.color,onClick:()=>{w(F.id),x(!1)},role:"button",tabIndex:0,onKeyPress:$=>{($.key==="Enter"||$.key===" ")&&(w(F.id),x(!1))},"aria-label":`Switch to ${F.name} theme`,title:F.name},F.id))})})})]})]})]})})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ya.apply(this,arguments)}var Ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ir||(Ir={}));const dw="popstate";function nM(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Np("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Au(i)}return iM(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rM(){return Math.random().toString(36).substr(2,8)}function hw(t,e){return{usr:t.state,key:t.key,idx:e}}function Np(t,e,n,r){return n===void 0&&(n=null),Ya({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ho(e):e,{state:n,key:e&&e.key||r||rM()})}function Au(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ho(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function iM(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ir.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(Ya({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Ir.Pop;let k=d(),x=k==null?null:k-u;u=k,c&&c({action:a,location:b.location,delta:x})}function p(k,x){a=Ir.Push;let v=Np(b.location,k,x);n&&n(v,k),u=d()+1;let w=hw(v,u),P=b.createHref(v);try{o.pushState(w,"",P)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(P)}s&&c&&c({action:a,location:b.location,delta:1})}function g(k,x){a=Ir.Replace;let v=Np(b.location,k,x);n&&n(v,k),u=d();let w=hw(v,u),P=b.createHref(v);o.replaceState(w,"",P),s&&c&&c({action:a,location:b.location,delta:0})}function _(k){let x=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof k=="string"?k:Au(k);return v=v.replace(/ $/,"%20"),Ze(x,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,x)}let b={get action(){return a},get location(){return t(i,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(dw,h),c=k,()=>{i.removeEventListener(dw,h),c=null}},createHref(k){return e(i,k)},createURL:_,encodeLocation(k){let x=_(k);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:g,go(k){return o.go(k)}};return b}var fw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fw||(fw={}));function sM(t,e,n){return n===void 0&&(n="/"),oM(t,e,n,!1)}function oM(t,e,n,r){let i=typeof e=="string"?ho(e):e,s=Cg(i.pathname||"/",n);if(s==null)return null;let o=gT(t);aM(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let u=vM(s);a=gM(o[c],u,r)}return a}function gT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Ze(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Hr([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gT(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:pM(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let c of yT(s.path))i(s,o,c)}),e}function yT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=yT(r.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function aM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lM=/^:[\w-]+$/,cM=3,uM=2,dM=1,hM=10,fM=-2,pw=t=>t==="*";function pM(t,e){let n=t.split("/"),r=n.length;return n.some(pw)&&(r+=fM),e&&(r+=uM),n.filter(i=>!pw(i)).reduce((i,s)=>i+(lM.test(s)?cM:s===""?dM:hM),r)}function mM(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gM(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=mw({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!h&&u&&n&&!r[r.length-1].route.index&&(h=mw({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:Hr([s,h.pathname]),pathnameBase:EM(Hr([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=Hr([s,h.pathnameBase]))}return o}function mw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yM(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let b=a[h]||"";o=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const _=a[h];return g&&!_?u[p]=void 0:u[p]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function yM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wM(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ho(t):t;return{pathname:n?n.startsWith("/")?n:xM(n,e):e,search:bM(r),hash:TM(i)}}function xM(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _M(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vT(t,e){let n=_M(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ho(t):(i=Ya({},t),Ze(!i.pathname||!i.pathname.includes("?"),tf("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),tf("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),tf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let c=wM(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Hr=t=>t.join("/").replace(/\/\/+/g,"/"),EM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,TM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function SM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xT=["post","put","patch","delete"];new Set(xT);const AM=["get",...xT];new Set(AM);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xa.apply(this,arguments)}const Ig=I.createContext(null),kM=I.createContext(null),Qi=I.createContext(null),Sd=I.createContext(null),Yi=I.createContext({outlet:null,matches:[],isDataRoute:!1}),_T=I.createContext(null);function CM(t,e){let{relative:n}=e===void 0?{}:e;gl()||Ze(!1);let{basename:r,navigator:i}=I.useContext(Qi),{hash:s,pathname:o,search:a}=TT(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Hr([r,o])),i.createHref({pathname:c,search:a,hash:s})}function gl(){return I.useContext(Sd)!=null}function fo(){return gl()||Ze(!1),I.useContext(Sd).location}function ET(t){I.useContext(Qi).static||I.useLayoutEffect(t)}function bT(){let{isDataRoute:t}=I.useContext(Yi);return t?BM():IM()}function IM(){gl()||Ze(!1);let t=I.useContext(Ig),{basename:e,future:n,navigator:r}=I.useContext(Qi),{matches:i}=I.useContext(Yi),{pathname:s}=fo(),o=JSON.stringify(vT(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return ET(()=>{a.current=!0}),I.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=wT(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Hr([e,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[e,r,o,s,t])}function TT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(Qi),{matches:i}=I.useContext(Yi),{pathname:s}=fo(),o=JSON.stringify(vT(i,r.v7_relativeSplatPath));return I.useMemo(()=>wT(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function PM(t,e){return RM(t,e)}function RM(t,e,n,r){gl()||Ze(!1);let{navigator:i,static:s}=I.useContext(Qi),{matches:o}=I.useContext(Yi),a=o[o.length-1],c=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=fo(),h;if(e){var p;let x=typeof e=="string"?ho(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||Ze(!1),h=x}else h=d;let g=h.pathname||"/",_=g;if(u!=="/"){let x=u.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=!s&&n&&n.matches&&n.matches.length>0?n.matches:sM(t,{pathname:_}),k=LM(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:Hr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:Hr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r);return e&&k?I.createElement(Sd.Provider,{value:{location:Xa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ir.Pop}},k):k}function DM(){let t=$M(),e=SM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const VM=I.createElement(DM,null);class NM extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(Yi.Provider,{value:this.props.routeContext},I.createElement(_T.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function MM(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Ig);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Yi.Provider,{value:e},r)}function LM(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||Ze(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:p,errors:g}=n,_=h.route.loader&&p[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||_){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let g,_=!1,b=null,k=null;n&&(g=a&&h.route.id?a[h.route.id]:void 0,b=h.route.errorElement||VM,c&&(u<0&&p===0?(zM("route-fallback",!1),_=!0,k=null):u===p&&(_=!0,k=h.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,p+1)),v=()=>{let w;return g?w=b:_?w=k:h.route.Component?w=I.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=d,I.createElement(MM,{match:h,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:w})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?I.createElement(NM,{location:n.location,revalidation:n.revalidation,component:b,error:g,children:v(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):v()},null)}var ST=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ST||{}),ku=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ku||{});function OM(t){let e=I.useContext(Ig);return e||Ze(!1),e}function jM(t){let e=I.useContext(kM);return e||Ze(!1),e}function FM(t){let e=I.useContext(Yi);return e||Ze(!1),e}function AT(t){let e=FM(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function $M(){var t;let e=I.useContext(_T),n=jM(ku.UseRouteError),r=AT(ku.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function BM(){let{router:t}=OM(ST.UseNavigateStable),e=AT(ku.UseNavigateStable),n=I.useRef(!1);return ET(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Xa({fromRouteId:e},s)))},[t,e])}const gw={};function zM(t,e,n){!e&&!gw[t]&&(gw[t]=!0)}function UM(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function wi(t){Ze(!1)}function HM(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ir.Pop,navigator:s,static:o=!1,future:a}=t;gl()&&Ze(!1);let c=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:c,navigator:s,static:o,future:Xa({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof r=="string"&&(r=ho(r));let{pathname:d="/",search:h="",hash:p="",state:g=null,key:_="default"}=r,b=I.useMemo(()=>{let k=Cg(d,c);return k==null?null:{location:{pathname:k,search:h,hash:p,state:g,key:_},navigationType:i}},[c,d,h,p,g,_,i]);return b==null?null:I.createElement(Qi.Provider,{value:u},I.createElement(Sd.Provider,{children:n,value:b}))}function WM(t){let{children:e,location:n}=t;return PM(Mp(e),n)}new Promise(()=>{});function Mp(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,Mp(r.props.children,s));return}r.type!==wi&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Mp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lp(){return Lp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lp.apply(this,arguments)}function qM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function KM(t,e){return t.button===0&&(!e||e==="_self")&&!GM(t)}const QM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],YM="6";try{window.__reactRouterVersion=YM}catch{}const XM="startTransition",yw=$5[XM];function JM(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=nM({window:i,v5Compat:!0}));let o=s.current,[a,c]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=I.useCallback(h=>{u&&yw?yw(()=>c(h)):c(h)},[c,u]);return I.useLayoutEffect(()=>o.listen(d),[o,d]),I.useEffect(()=>UM(r),[r]),I.createElement(HM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const ZM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tL=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:c,to:u,preventScrollReset:d,viewTransition:h}=e,p=qM(e,QM),{basename:g}=I.useContext(Qi),_,b=!1;if(typeof u=="string"&&eL.test(u)&&(_=u,ZM))try{let w=new URL(window.location.href),P=u.startsWith("//")?new URL(w.protocol+u):new URL(u),O=Cg(P.pathname,g);P.origin===w.origin&&O!=null?u=O+P.search+P.hash:b=!0}catch{}let k=CM(u,{relative:i}),x=nL(u,{replace:o,state:a,target:c,preventScrollReset:d,relative:i,viewTransition:h});function v(w){r&&r(w),w.defaultPrevented||x(w)}return I.createElement("a",Lp({},p,{href:_||k,onClick:b||s?r:v,ref:n,target:c}))});var vw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(vw||(vw={}));var ww;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ww||(ww={}));function nL(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,c=bT(),u=fo(),d=TT(t,{relative:o});return I.useCallback(h=>{if(KM(h,n)){h.preventDefault();let p=r!==void 0?r:Au(u)===Au(d);c(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,c,d,r,i,n,t,s,o,a])}function rL(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(t)}function iL(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(t)}function sL(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(t)}function oL(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(t)}function aL(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"}},{tag:"polyline",attr:{points:"21 15 16 10 5 21"}}]})(t)}function kT(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}]})(t)}function Cu(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 18V5l12-2v13"}},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attr:{cx:"18",cy:"16",r:"3"}}]})(t)}function CT(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}function lL(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(t)}function cL(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 9.9-1"}}]})(t)}function xw(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(t)}function _w(t){return ge({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(t)}const Op={classical:"#7a1f1f",rock:"#585858",pop:"#9c27b0",electronic:"#3a1f7a",jazz:"#7a4b1f",ambient:"#2d5d2a",soundtrack:"#1f5a7a",hiphop:"#333333"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},PT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),r.push(n[d],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(IT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new dL;const p=s<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hL=function(t){const e=IT(t);return PT.encodeByteArray(e,!0)},Iu=function(t){return hL(t).replace(/\./g,"")},fL=function(t){try{return PT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL=()=>pL().__FIREBASE_DEFAULTS__,gL=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fL(t[1]);return e&&JSON.parse(e)},Pg=()=>{try{return mL()||gL()||yL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vL=t=>{var e,n;return(n=(e=Pg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RT=t=>{const e=vL(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DT=()=>{var t;return(t=Pg())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Iu(JSON.stringify(n)),Iu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _L(){var t;const e=(t=Pg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bL(){return!_L()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NT(){try{return typeof indexedDB=="object"}catch{return!1}}function MT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function TL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SL,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ad.prototype.create)}}class Ad{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AL(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fr(i,a,r)}}function AL(t,e){return t.replace(kL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kL=/\{\$([^}]+)}/g;function Pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ew(s)&&Ew(o)){if(!Pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ew(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=1e3,IL=2,PL=4*60*60*1e3,RL=.5;function bw(t,e=CL,n=IL){const r=e*Math.pow(n,t),i=Math.round(RL*r*(Math.random()-.5)*2);return Math.min(PL,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NL(e))try{this.getOrInitializeService({instanceIdentifier:xi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xi){return this.instances.has(e)}getOptions(e=xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xi){return this.component?this.component.multipleInstances?e:xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VL(t){return t===xi?void 0:t}function NL(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const LL={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},OL=pe.INFO,jL={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},FL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rg{constructor(e){this.name=e,this._logLevel=OL,this._logHandler=FL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const $L=(t,e)=>e.some(n=>t instanceof n);let Tw,Sw;function BL(){return Tw||(Tw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zL(){return Sw||(Sw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LT=new WeakMap,jp=new WeakMap,OT=new WeakMap,nf=new WeakMap,Dg=new WeakMap;function UL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&LT.set(n,t)}).catch(()=>{}),Dg.set(e,t),e}function HL(t){if(jp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jp.set(t,e)}let Fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||OT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WL(t){Fp=t(Fp)}function qL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rf(this),e,...n);return OT.set(r,e.sort?e.sort():[e]),Wr(r)}:zL().includes(t)?function(...e){return t.apply(rf(this),e),Wr(LT.get(this))}:function(...e){return Wr(t.apply(rf(this),e))}}function GL(t){return typeof t=="function"?qL(t):(t instanceof IDBTransaction&&HL(t),$L(t,BL())?new Proxy(t,Fp):t)}function Wr(t){if(t instanceof IDBRequest)return UL(t);if(nf.has(t))return nf.get(t);const e=GL(t);return e!==t&&(nf.set(t,e),Dg.set(e,t)),e}const rf=t=>Dg.get(t);function jT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wr(o.result),c.oldVersion,c.newVersion,Wr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const KL=["get","getKey","getAll","getAllKeys","count"],QL=["put","add","delete","clear"],sf=new Map;function Aw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sf.get(e))return sf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=QL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KL.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return sf.set(e,s),s}WL(t=>({...t,get:(e,n,r)=>Aw(e,n)||t.get(e,n,r),has:(e,n)=>!!Aw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $p="@firebase/app",kw="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Rg("@firebase/app"),JL="@firebase/app-compat",ZL="@firebase/analytics-compat",eO="@firebase/analytics",tO="@firebase/app-check-compat",nO="@firebase/app-check",rO="@firebase/auth",iO="@firebase/auth-compat",sO="@firebase/database",oO="@firebase/data-connect",aO="@firebase/database-compat",lO="@firebase/functions",cO="@firebase/functions-compat",uO="@firebase/installations",dO="@firebase/installations-compat",hO="@firebase/messaging",fO="@firebase/messaging-compat",pO="@firebase/performance",mO="@firebase/performance-compat",gO="@firebase/remote-config",yO="@firebase/remote-config-compat",vO="@firebase/storage",wO="@firebase/storage-compat",xO="@firebase/firestore",_O="@firebase/vertexai-preview",EO="@firebase/firestore-compat",bO="firebase",TO="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="[DEFAULT]",SO={[$p]:"fire-core",[JL]:"fire-core-compat",[eO]:"fire-analytics",[ZL]:"fire-analytics-compat",[nO]:"fire-app-check",[tO]:"fire-app-check-compat",[rO]:"fire-auth",[iO]:"fire-auth-compat",[sO]:"fire-rtdb",[oO]:"fire-data-connect",[aO]:"fire-rtdb-compat",[lO]:"fire-fn",[cO]:"fire-fn-compat",[uO]:"fire-iid",[dO]:"fire-iid-compat",[hO]:"fire-fcm",[fO]:"fire-fcm-compat",[pO]:"fire-perf",[mO]:"fire-perf-compat",[gO]:"fire-rc",[yO]:"fire-rc-compat",[vO]:"fire-gcs",[wO]:"fire-gcs-compat",[xO]:"fire-fst",[EO]:"fire-fst-compat",[_O]:"fire-vertex","fire-js":"fire-js",[bO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map,AO=new Map,zp=new Map;function Cw(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lr(t){const e=t.name;if(zp.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;zp.set(e,t);for(const n of Ru.values())Cw(n,t);for(const n of AO.values())Cw(n,t);return!0}function po(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new Ad("app","Firebase",kO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=TO;function $T(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=DT()),!n)throw qr.create("no-options");const s=Ru.get(i);if(s){if(Pu(n,s.options)&&Pu(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new ML(i);for(const c of zp.values())o.addComponent(c);const a=new CO(n,r,o);return Ru.set(i,a),a}function Vg(t=Bp){const e=Ru.get(t);if(!e&&t===Bp&&DT())return $T();if(!e)throw qr.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let i=(r=SO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}lr(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO="firebase-heartbeat-database",PO=1,Ja="firebase-heartbeat-store";let of=null;function BT(){return of||(of=jT(IO,PO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ja)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),of}async function RO(t){try{const n=(await BT()).transaction(Ja),r=await n.objectStore(Ja).get(zT(t));return await n.done,r}catch(e){if(e instanceof fr)ar.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function Iw(t,e){try{const r=(await BT()).transaction(Ja,"readwrite");await r.objectStore(Ja).put(e,zT(t)),await r.done}catch(n){if(n instanceof fr)ar.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function zT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=1024,VO=30*24*60*60*1e3;class NO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=VO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pw(),{heartbeatsToSend:r,unsentEntries:i}=MO(this._heartbeatsCache.heartbeats),s=Iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ar.warn(n),""}}}function Pw(){return new Date().toISOString().substring(0,10)}function MO(t,e=DO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NT()?MT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rw(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t){lr(new Un("platform-logger",e=>new YL(e),"PRIVATE")),lr(new Un("heartbeat",e=>new NO(e),"PRIVATE")),hn($p,kw,t),hn($p,kw,"esm2017"),hn("fire-js","")}OO("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firebasestorage.googleapis.com",HT="storageBucket",jO=2*60*1e3,FO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends fr{constructor(e,n,r=0){super(af(e),`Firebase Storage: ${n} (${af(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function af(t){return"storage/"+t}function Ng(){const t="An unknown error occurred, please check the error payload for server response.";return new We(He.UNKNOWN,t)}function $O(t){return new We(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function BO(t){return new We(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(He.UNAUTHENTICATED,t)}function UO(){return new We(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function HO(t){return new We(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function WO(){return new We(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qO(){return new We(He.CANCELED,"User canceled the upload/download.")}function GO(t){return new We(He.INVALID_URL,"Invalid URL '"+t+"'.")}function KO(t){return new We(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function QO(){return new We(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+HT+"' property when initializing the app?")}function YO(){return new We(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function XO(){return new We(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function JO(t){return new We(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Up(t){return new We(He.INVALID_ARGUMENT,t)}function WT(){return new We(He.APP_DELETED,"The Firebase app was deleted.")}function ZO(t){return new We(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _a(t,e){return new We(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ho(t){throw new We(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw KO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${i}/o${p}`,"i"),_={bucket:1,path:3},b=n===UT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",x=new RegExp(`^https?://${b}/${i}/${k}`,"i"),w=[{regex:a,indices:c,postModify:s},{regex:g,indices:_,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<w.length;P++){const O=w[P],N=O.regex.exec(e);if(N){const T=N[O.indices.bucket];let E=N[O.indices.path];E||(E=""),r=new Yt(T,E),O.postModify(r);break}}if(r==null)throw GO(e);return r}}class ej{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tj(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function d(...k){u||(u=!0,e.apply(null,k))}function h(k){i=setTimeout(()=>{i=null,t(g,c())},k)}function p(){s&&clearTimeout(s)}function g(k,...x){if(u){p();return}if(k){p(),d.call(null,k,...x);return}if(c()||o){p(),d.call(null,k,...x);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,h(w)}let _=!1;function b(k){_||(_=!0,p(),!u&&(i!==null?(k||(a=2),clearTimeout(i),h(0)):k||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function nj(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rj(t){return t!==void 0}function ij(t){return typeof t=="object"&&!Array.isArray(t)}function Mg(t){return typeof t=="string"||t instanceof String}function Dw(t){return Lg()&&t instanceof Blob}function Lg(){return typeof Blob<"u"}function Vw(t,e,n,r){if(r<e)throw Up(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Up(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ri||(Ri={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(e,n,r,i,s,o,a,c,u,d,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new uc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ri.NO_ERROR,c=s.getStatus();if(!a||sj(c,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Ri.ABORT;r(!1,new uc(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new uc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());rj(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Ng();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?WT():qO();o(c)}else{const c=WO();o(c)}};this.canceled_?n(!1,new uc(!1,null,!0)):this.backoffId_=tj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class uc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function aj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function dj(t,e,n,r,i,s,o=!0){const a=qT(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return cj(u,e),aj(u,n),lj(u,s),uj(u,r),new oj(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fj(...t){const e=hj();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Lg())return new Blob(t);throw new We(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pj(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mj(t){if(typeof atob>"u")throw JO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lf{constructor(e,n){this.data=e,this.contentType=n||null}}function gj(t,e){switch(t){case Ln.RAW:return new lf(GT(e));case Ln.BASE64:case Ln.BASE64URL:return new lf(KT(t,e));case Ln.DATA_URL:return new lf(vj(e),wj(e))}throw Ng()}function GT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function yj(t){let e;try{e=decodeURIComponent(t)}catch{throw _a(Ln.DATA_URL,"Malformed data URL.")}return GT(e)}function KT(t,e){switch(t){case Ln.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw _a(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ln.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw _a(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mj(e)}catch(i){throw i.message.includes("polyfill")?i:_a(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class QT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _a(Ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=xj(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function vj(t){const e=new QT(t);return e.base64?KT(Ln.BASE64,e.rest):yj(e.rest)}function wj(t){return new QT(t).contentType}function xj(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){let r=0,i="";Dw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Dw(this.data_)){const r=this.data_,i=pj(r,e,n);return i===null?null:new Ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ar(r,!0)}}static getBlob(...e){if(Lg()){const n=e.map(r=>r instanceof Ar?r.data_:r);return new Ar(fj.apply(null,n))}else{const n=e.map(o=>Mg(o)?gj(Ln.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ar(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t){let e;try{e=JSON.parse(t)}catch{return null}return ij(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _j(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ej(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function XT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bj(t,e){return e}class Rt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||bj}}let dc=null;function Tj(t){return!Mg(t)||t.length<2?t:XT(t)}function JT(){if(dc)return dc;const t=[];t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));function e(s,o){return Tj(o)}const n=new Rt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Rt("size");return i.xform=r,t.push(i),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),dc=t,dc}function Sj(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Yt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Aj(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Sj(r,t),r}function ZT(t,e,n){const r=YT(e);return r===null?null:Aj(t,r,n)}function kj(t,e,n,r){const i=YT(e);if(i===null||!Mg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,h=t.fullPath,p="/b/"+o(d)+"/o/"+o(h),g=Og(p,n,r),_=qT({alt:"media",token:u});return g+_})[0]}function Cj(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class eS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){if(!t)throw Ng()}function Ij(t,e){function n(r,i){const s=ZT(t,i,e);return tS(s!==null),s}return n}function Pj(t,e){function n(r,i){const s=ZT(t,i,e);return tS(s!==null),kj(s,i,t.host,t._protocol)}return n}function nS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=UO():i=zO():n.getStatus()===402?i=BO(t.bucket):n.getStatus()===403?i=HO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Rj(t){const e=nS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=$O(t.path)),s.serverResponse=i.serverResponse,s}return n}function Dj(t,e,n){const r=e.fullServerUrl(),i=Og(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new eS(i,s,Pj(t,n),o);return a.errorHandler=Rj(e),a}function Vj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Nj(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Vj(null,e)),r}function Mj(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let P=0;P<2;P++)w=w+Math.random().toString().slice(2);return w}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Nj(e,r,i),d=Cj(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",g=Ar.getBlob(h,r,p);if(g===null)throw YO();const _={name:u.fullPath},b=Og(s,t.host,t._protocol),k="POST",x=t.maxUploadRetryTime,v=new eS(b,k,Ij(t,n),x);return v.urlParams=_,v.headers=o,v.body=g.uploadData(),v.errorHandler=nS(e),v}class Lj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ho("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ho("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ho("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ho("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ho("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Oj extends Lj{initXhr(){this.xhr_.responseType="text"}}function rS(){return new Oj}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fi(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return XT(this._location.path)}get storage(){return this._service}get parent(){const e=_j(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new Fi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ZO(e)}}function jj(t,e,n){t._throwIfRoot("uploadBytes");const r=Mj(t.storage,t._location,JT(),new Ar(e,!0),n);return t.storage.makeRequestWithTokens(r,rS).then(i=>({metadata:i,ref:t}))}function Fj(t){t._throwIfRoot("getDownloadURL");const e=Dj(t.storage,t._location,JT());return t.storage.makeRequestWithTokens(e,rS).then(n=>{if(n===null)throw XO();return n})}function $j(t,e){const n=Ej(t._location.path,e),r=new Yt(t._location.bucket,n);return new Fi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bj(t){return/^[A-Za-z]+:\/\//.test(t)}function zj(t,e){return new Fi(t,e)}function iS(t,e){if(t instanceof jg){const n=t;if(n._bucket==null)throw QO();const r=new Fi(n,n._bucket);return e!=null?iS(r,e):r}else return e!==void 0?$j(t,e):t}function Uj(t,e){if(e&&Bj(e)){if(t instanceof jg)return zj(t,e);throw Up("To use ref(service, url), the first argument must be a Storage instance.")}else return iS(t,e)}function Nw(t,e){const n=e==null?void 0:e[HT];return n==null?null:Yt.makeFromBucketSpec(n,t)}function Hj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:VT(i,t.app.options.projectId))}class jg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=UT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jO,this._maxUploadRetryTime=FO,this._requests=new Set,i!=null?this._bucket=Yt.makeFromBucketSpec(i,this._host):this._bucket=Nw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=Nw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new ej(WT());{const o=dj(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Mw="@firebase/storage",Lw="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="storage";function Ow(t,e,n){return t=yn(t),jj(t,e,n)}function jw(t){return t=yn(t),Fj(t)}function Fw(t,e){return t=yn(t),Uj(t,e)}function Wj(t=Vg(),e){t=yn(t);const r=po(t,sS).getImmediate({identifier:e}),i=RT("storage");return i&&qj(r,...i),r}function qj(t,e,n,r={}){Hj(t,e,n,r)}function Gj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new jg(n,r,i,e,FT)}function Kj(){lr(new Un(sS,Gj,"PUBLIC").setMultipleInstances(!0)),hn(Mw,Lw,""),hn(Mw,Lw,"esm2017")}Kj();var $w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Di,oS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,E){function A(){}A.prototype=E.prototype,T.D=E.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(C,D,M){for(var R=Array(arguments.length-2),W=2;W<arguments.length;W++)R[W-2]=arguments[W];return E.prototype[D].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,E,A){A||(A=0);var C=Array(16);if(typeof E=="string")for(var D=0;16>D;++D)C[D]=E.charCodeAt(A++)|E.charCodeAt(A++)<<8|E.charCodeAt(A++)<<16|E.charCodeAt(A++)<<24;else for(D=0;16>D;++D)C[D]=E[A++]|E[A++]<<8|E[A++]<<16|E[A++]<<24;E=T.g[0],A=T.g[1],D=T.g[2];var M=T.g[3],R=E+(M^A&(D^M))+C[0]+3614090360&4294967295;E=A+(R<<7&4294967295|R>>>25),R=M+(D^E&(A^D))+C[1]+3905402710&4294967295,M=E+(R<<12&4294967295|R>>>20),R=D+(A^M&(E^A))+C[2]+606105819&4294967295,D=M+(R<<17&4294967295|R>>>15),R=A+(E^D&(M^E))+C[3]+3250441966&4294967295,A=D+(R<<22&4294967295|R>>>10),R=E+(M^A&(D^M))+C[4]+4118548399&4294967295,E=A+(R<<7&4294967295|R>>>25),R=M+(D^E&(A^D))+C[5]+1200080426&4294967295,M=E+(R<<12&4294967295|R>>>20),R=D+(A^M&(E^A))+C[6]+2821735955&4294967295,D=M+(R<<17&4294967295|R>>>15),R=A+(E^D&(M^E))+C[7]+4249261313&4294967295,A=D+(R<<22&4294967295|R>>>10),R=E+(M^A&(D^M))+C[8]+1770035416&4294967295,E=A+(R<<7&4294967295|R>>>25),R=M+(D^E&(A^D))+C[9]+2336552879&4294967295,M=E+(R<<12&4294967295|R>>>20),R=D+(A^M&(E^A))+C[10]+4294925233&4294967295,D=M+(R<<17&4294967295|R>>>15),R=A+(E^D&(M^E))+C[11]+2304563134&4294967295,A=D+(R<<22&4294967295|R>>>10),R=E+(M^A&(D^M))+C[12]+1804603682&4294967295,E=A+(R<<7&4294967295|R>>>25),R=M+(D^E&(A^D))+C[13]+4254626195&4294967295,M=E+(R<<12&4294967295|R>>>20),R=D+(A^M&(E^A))+C[14]+2792965006&4294967295,D=M+(R<<17&4294967295|R>>>15),R=A+(E^D&(M^E))+C[15]+1236535329&4294967295,A=D+(R<<22&4294967295|R>>>10),R=E+(D^M&(A^D))+C[1]+4129170786&4294967295,E=A+(R<<5&4294967295|R>>>27),R=M+(A^D&(E^A))+C[6]+3225465664&4294967295,M=E+(R<<9&4294967295|R>>>23),R=D+(E^A&(M^E))+C[11]+643717713&4294967295,D=M+(R<<14&4294967295|R>>>18),R=A+(M^E&(D^M))+C[0]+3921069994&4294967295,A=D+(R<<20&4294967295|R>>>12),R=E+(D^M&(A^D))+C[5]+3593408605&4294967295,E=A+(R<<5&4294967295|R>>>27),R=M+(A^D&(E^A))+C[10]+38016083&4294967295,M=E+(R<<9&4294967295|R>>>23),R=D+(E^A&(M^E))+C[15]+3634488961&4294967295,D=M+(R<<14&4294967295|R>>>18),R=A+(M^E&(D^M))+C[4]+3889429448&4294967295,A=D+(R<<20&4294967295|R>>>12),R=E+(D^M&(A^D))+C[9]+568446438&4294967295,E=A+(R<<5&4294967295|R>>>27),R=M+(A^D&(E^A))+C[14]+3275163606&4294967295,M=E+(R<<9&4294967295|R>>>23),R=D+(E^A&(M^E))+C[3]+4107603335&4294967295,D=M+(R<<14&4294967295|R>>>18),R=A+(M^E&(D^M))+C[8]+1163531501&4294967295,A=D+(R<<20&4294967295|R>>>12),R=E+(D^M&(A^D))+C[13]+2850285829&4294967295,E=A+(R<<5&4294967295|R>>>27),R=M+(A^D&(E^A))+C[2]+4243563512&4294967295,M=E+(R<<9&4294967295|R>>>23),R=D+(E^A&(M^E))+C[7]+1735328473&4294967295,D=M+(R<<14&4294967295|R>>>18),R=A+(M^E&(D^M))+C[12]+2368359562&4294967295,A=D+(R<<20&4294967295|R>>>12),R=E+(A^D^M)+C[5]+4294588738&4294967295,E=A+(R<<4&4294967295|R>>>28),R=M+(E^A^D)+C[8]+2272392833&4294967295,M=E+(R<<11&4294967295|R>>>21),R=D+(M^E^A)+C[11]+1839030562&4294967295,D=M+(R<<16&4294967295|R>>>16),R=A+(D^M^E)+C[14]+4259657740&4294967295,A=D+(R<<23&4294967295|R>>>9),R=E+(A^D^M)+C[1]+2763975236&4294967295,E=A+(R<<4&4294967295|R>>>28),R=M+(E^A^D)+C[4]+1272893353&4294967295,M=E+(R<<11&4294967295|R>>>21),R=D+(M^E^A)+C[7]+4139469664&4294967295,D=M+(R<<16&4294967295|R>>>16),R=A+(D^M^E)+C[10]+3200236656&4294967295,A=D+(R<<23&4294967295|R>>>9),R=E+(A^D^M)+C[13]+681279174&4294967295,E=A+(R<<4&4294967295|R>>>28),R=M+(E^A^D)+C[0]+3936430074&4294967295,M=E+(R<<11&4294967295|R>>>21),R=D+(M^E^A)+C[3]+3572445317&4294967295,D=M+(R<<16&4294967295|R>>>16),R=A+(D^M^E)+C[6]+76029189&4294967295,A=D+(R<<23&4294967295|R>>>9),R=E+(A^D^M)+C[9]+3654602809&4294967295,E=A+(R<<4&4294967295|R>>>28),R=M+(E^A^D)+C[12]+3873151461&4294967295,M=E+(R<<11&4294967295|R>>>21),R=D+(M^E^A)+C[15]+530742520&4294967295,D=M+(R<<16&4294967295|R>>>16),R=A+(D^M^E)+C[2]+3299628645&4294967295,A=D+(R<<23&4294967295|R>>>9),R=E+(D^(A|~M))+C[0]+4096336452&4294967295,E=A+(R<<6&4294967295|R>>>26),R=M+(A^(E|~D))+C[7]+1126891415&4294967295,M=E+(R<<10&4294967295|R>>>22),R=D+(E^(M|~A))+C[14]+2878612391&4294967295,D=M+(R<<15&4294967295|R>>>17),R=A+(M^(D|~E))+C[5]+4237533241&4294967295,A=D+(R<<21&4294967295|R>>>11),R=E+(D^(A|~M))+C[12]+1700485571&4294967295,E=A+(R<<6&4294967295|R>>>26),R=M+(A^(E|~D))+C[3]+2399980690&4294967295,M=E+(R<<10&4294967295|R>>>22),R=D+(E^(M|~A))+C[10]+4293915773&4294967295,D=M+(R<<15&4294967295|R>>>17),R=A+(M^(D|~E))+C[1]+2240044497&4294967295,A=D+(R<<21&4294967295|R>>>11),R=E+(D^(A|~M))+C[8]+1873313359&4294967295,E=A+(R<<6&4294967295|R>>>26),R=M+(A^(E|~D))+C[15]+4264355552&4294967295,M=E+(R<<10&4294967295|R>>>22),R=D+(E^(M|~A))+C[6]+2734768916&4294967295,D=M+(R<<15&4294967295|R>>>17),R=A+(M^(D|~E))+C[13]+1309151649&4294967295,A=D+(R<<21&4294967295|R>>>11),R=E+(D^(A|~M))+C[4]+4149444226&4294967295,E=A+(R<<6&4294967295|R>>>26),R=M+(A^(E|~D))+C[11]+3174756917&4294967295,M=E+(R<<10&4294967295|R>>>22),R=D+(E^(M|~A))+C[2]+718787259&4294967295,D=M+(R<<15&4294967295|R>>>17),R=A+(M^(D|~E))+C[9]+3951481745&4294967295,T.g[0]=T.g[0]+E&4294967295,T.g[1]=T.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+D&4294967295,T.g[3]=T.g[3]+M&4294967295}r.prototype.u=function(T,E){E===void 0&&(E=T.length);for(var A=E-this.blockSize,C=this.B,D=this.h,M=0;M<E;){if(D==0)for(;M<=A;)i(this,T,M),M+=this.blockSize;if(typeof T=="string"){for(;M<E;)if(C[D++]=T.charCodeAt(M++),D==this.blockSize){i(this,C),D=0;break}}else for(;M<E;)if(C[D++]=T[M++],D==this.blockSize){i(this,C),D=0;break}}this.h=D,this.o+=E},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var E=1;E<T.length-8;++E)T[E]=0;var A=8*this.o;for(E=T.length-8;E<T.length;++E)T[E]=A&255,A/=256;for(this.u(T),T=Array(16),E=A=0;4>E;++E)for(var C=0;32>C;C+=8)T[A++]=this.g[E]>>>C&255;return T};function s(T,E){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=E(T)}function o(T,E){this.h=E;for(var A=[],C=!0,D=T.length-1;0<=D;D--){var M=T[D]|0;C&&M==E||(A[D]=M,C=!1)}this.g=A}var a={};function c(T){return-128<=T&&128>T?s(T,function(E){return new o([E|0],0>E?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return h;if(0>T)return k(u(-T));for(var E=[],A=1,C=0;T>=A;C++)E[C]=T/A|0,A*=4294967296;return new o(E,0)}function d(T,E){if(T.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(T.charAt(0)=="-")return k(d(T.substring(1),E));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=u(Math.pow(E,8)),C=h,D=0;D<T.length;D+=8){var M=Math.min(8,T.length-D),R=parseInt(T.substring(D,D+M),E);8>M?(M=u(Math.pow(E,M)),C=C.j(M).add(u(R))):(C=C.j(A),C=C.add(u(R)))}return C}var h=c(0),p=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(b(this))return-k(this).m();for(var T=0,E=1,A=0;A<this.g.length;A++){var C=this.i(A);T+=(0<=C?C:4294967296+C)*E,E*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(_(this))return"0";if(b(this))return"-"+k(this).toString(T);for(var E=u(Math.pow(T,6)),A=this,C="";;){var D=P(A,E).g;A=x(A,D.j(E));var M=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=D,_(A))return M+C;for(;6>M.length;)M="0"+M;C=M+C}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function _(T){if(T.h!=0)return!1;for(var E=0;E<T.g.length;E++)if(T.g[E]!=0)return!1;return!0}function b(T){return T.h==-1}t.l=function(T){return T=x(this,T),b(T)?-1:_(T)?0:1};function k(T){for(var E=T.g.length,A=[],C=0;C<E;C++)A[C]=~T.g[C];return new o(A,~T.h).add(p)}t.abs=function(){return b(this)?k(this):this},t.add=function(T){for(var E=Math.max(this.g.length,T.g.length),A=[],C=0,D=0;D<=E;D++){var M=C+(this.i(D)&65535)+(T.i(D)&65535),R=(M>>>16)+(this.i(D)>>>16)+(T.i(D)>>>16);C=R>>>16,M&=65535,R&=65535,A[D]=R<<16|M}return new o(A,A[A.length-1]&-2147483648?-1:0)};function x(T,E){return T.add(k(E))}t.j=function(T){if(_(this)||_(T))return h;if(b(this))return b(T)?k(this).j(k(T)):k(k(this).j(T));if(b(T))return k(this.j(k(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var E=this.g.length+T.g.length,A=[],C=0;C<2*E;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var D=0;D<T.g.length;D++){var M=this.i(C)>>>16,R=this.i(C)&65535,W=T.i(D)>>>16,J=T.i(D)&65535;A[2*C+2*D]+=R*J,v(A,2*C+2*D),A[2*C+2*D+1]+=M*J,v(A,2*C+2*D+1),A[2*C+2*D+1]+=R*W,v(A,2*C+2*D+1),A[2*C+2*D+2]+=M*W,v(A,2*C+2*D+2)}for(C=0;C<E;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=E;C<2*E;C++)A[C]=0;return new o(A,0)};function v(T,E){for(;(T[E]&65535)!=T[E];)T[E+1]+=T[E]>>>16,T[E]&=65535,E++}function w(T,E){this.g=T,this.h=E}function P(T,E){if(_(E))throw Error("division by zero");if(_(T))return new w(h,h);if(b(T))return E=P(k(T),E),new w(k(E.g),k(E.h));if(b(E))return E=P(T,k(E)),new w(k(E.g),E.h);if(30<T.g.length){if(b(T)||b(E))throw Error("slowDivide_ only works with positive integers.");for(var A=p,C=E;0>=C.l(T);)A=O(A),C=O(C);var D=N(A,1),M=N(C,1);for(C=N(C,2),A=N(A,2);!_(C);){var R=M.add(C);0>=R.l(T)&&(D=D.add(A),M=R),C=N(C,1),A=N(A,1)}return E=x(T,D.j(E)),new w(D,E)}for(D=h;0<=T.l(E);){for(A=Math.max(1,Math.floor(T.m()/E.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),M=u(A),R=M.j(E);b(R)||0<R.l(T);)A-=C,M=u(A),R=M.j(E);_(M)&&(M=p),D=D.add(M),T=x(T,R)}return new w(D,T)}t.A=function(T){return P(this,T).h},t.and=function(T){for(var E=Math.max(this.g.length,T.g.length),A=[],C=0;C<E;C++)A[C]=this.i(C)&T.i(C);return new o(A,this.h&T.h)},t.or=function(T){for(var E=Math.max(this.g.length,T.g.length),A=[],C=0;C<E;C++)A[C]=this.i(C)|T.i(C);return new o(A,this.h|T.h)},t.xor=function(T){for(var E=Math.max(this.g.length,T.g.length),A=[],C=0;C<E;C++)A[C]=this.i(C)^T.i(C);return new o(A,this.h^T.h)};function O(T){for(var E=T.g.length+1,A=[],C=0;C<E;C++)A[C]=T.i(C)<<1|T.i(C-1)>>>31;return new o(A,T.h)}function N(T,E){var A=E>>5;E%=32;for(var C=T.g.length-A,D=[],M=0;M<C;M++)D[M]=0<E?T.i(M+A)>>>E|T.i(M+A+1)<<32-E:T.i(M+A);return new o(D,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,oS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Di=o}).apply(typeof $w<"u"?$w:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aS,na,lS,Fc,Hp,cS,uS,dS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var m=r;l=l.split(".");for(var S=0;S<l.length-1;S++){var L=l[S];if(!(L in m))break e;m=m[L]}l=l[l.length-1],S=m[l],f=f(S),f!=S&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var m=0,S=!1,L={next:function(){if(!S&&m<l.length){var j=m++;return{value:f(j,l[j]),done:!1}}return S=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function d(l,f,m){return l.call.apply(l.bind,arguments)}function h(l,f,m){if(!l)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,S),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function p(l,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,p.apply(null,arguments)}function g(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var S=m.slice();return S.push.apply(S,arguments),l.apply(this,S)}}function _(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(S,L,j){for(var q=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)q[Te-2]=arguments[Te];return f.prototype[L].apply(S,q)}}function b(l){const f=l.length;if(0<f){const m=Array(f);for(let S=0;S<f;S++)m[S]=l[S];return m}return[]}function k(l,f){for(let m=1;m<arguments.length;m++){const S=arguments[m];if(c(S)){const L=l.length||0,j=S.length||0;l.length=L+j;for(let q=0;q<j;q++)l[L+q]=S[q]}else l.push(S)}}class x{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function v(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function P(l){return P[" "](l),l}P[" "]=function(){};var O=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function N(l,f,m){for(const S in l)f.call(m,l[S],S,l)}function T(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function E(l){const f={};for(const m in l)f[m]=l[m];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let m,S;for(let L=1;L<arguments.length;L++){S=arguments[L];for(m in S)l[m]=S[m];for(let j=0;j<A.length;j++)m=A[j],Object.prototype.hasOwnProperty.call(S,m)&&(l[m]=S[m])}}function D(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function M(l){a.setTimeout(()=>{throw l},0)}function R(){var l=G;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class W{constructor(){this.h=this.g=null}add(f,m){const S=J.get();S.set(f,m),this.h?this.h.next=S:this.g=S,this.h=S}}var J=new x(()=>new X,l=>l.reset());class X{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,z=!1,G=new W,F=()=>{const l=a.Promise.resolve(void 0);ee=()=>{l.then($)}};var $=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){M(m)}var f=J;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}z=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var he=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function ye(l,f){if(te.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,S=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(O){e:{try{P(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Se[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ye.aa.h.call(this)}}_(ye,te);var Se={2:"touch",3:"pen",4:"mouse"};ye.prototype.h=function(){ye.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),vn=0;function Ht(l,f,m,S,L){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!S,this.ha=L,this.key=++vn,this.da=this.fa=!1}function Wt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ct(l){this.src=l,this.g={},this.h=0}ct.prototype.add=function(l,f,m,S,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var q=$d(l,f,S,L);return-1<q?(f=l[q],m||(f.fa=!1)):(f=new Ht(f,this.src,j,!!S,L),f.fa=m,l.push(f)),f};function qt(l,f){var m=f.type;if(m in l.g){var S=l.g[m],L=Array.prototype.indexOf.call(S,f,void 0),j;(j=0<=L)&&Array.prototype.splice.call(S,L,1),j&&(Wt(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function $d(l,f,m,S){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==f&&j.capture==!!m&&j.ha==S)return L}return-1}var Bd="closure_lm_"+(1e6*Math.random()|0),zd={};function T0(l,f,m,S,L){if(S&&S.once)return A0(l,f,m,S,L);if(Array.isArray(f)){for(var j=0;j<f.length;j++)T0(l,f[j],m,S,L);return null}return m=qd(m),l&&l[Me]?l.K(f,m,u(S)?!!S.capture:!!S,L):S0(l,f,m,!1,S,L)}function S0(l,f,m,S,L,j){if(!f)throw Error("Invalid event type");var q=u(L)?!!L.capture:!!L,Te=Hd(l);if(Te||(l[Bd]=Te=new ct(l)),m=Te.add(f,m,S,q,j),m.proxy)return m;if(S=QA(),m.proxy=S,S.src=l,S.listener=m,l.addEventListener)he||(L=q),L===void 0&&(L=!1),l.addEventListener(f.toString(),S,L);else if(l.attachEvent)l.attachEvent(C0(f.toString()),S);else if(l.addListener&&l.removeListener)l.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return m}function QA(){function l(m){return f.call(l.src,l.listener,m)}const f=YA;return l}function A0(l,f,m,S,L){if(Array.isArray(f)){for(var j=0;j<f.length;j++)A0(l,f[j],m,S,L);return null}return m=qd(m),l&&l[Me]?l.L(f,m,u(S)?!!S.capture:!!S,L):S0(l,f,m,!0,S,L)}function k0(l,f,m,S,L){if(Array.isArray(f))for(var j=0;j<f.length;j++)k0(l,f[j],m,S,L);else S=u(S)?!!S.capture:!!S,m=qd(m),l&&l[Me]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],m=$d(j,m,S,L),-1<m&&(Wt(j[m]),Array.prototype.splice.call(j,m,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=Hd(l))&&(f=l.g[f.toString()],l=-1,f&&(l=$d(f,m,S,L)),(m=-1<l?f[l]:null)&&Ud(m))}function Ud(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Me])qt(f.i,l);else{var m=l.type,S=l.proxy;f.removeEventListener?f.removeEventListener(m,S,l.capture):f.detachEvent?f.detachEvent(C0(m),S):f.addListener&&f.removeListener&&f.removeListener(S),(m=Hd(f))?(qt(m,l),m.h==0&&(m.src=null,f[Bd]=null)):Wt(l)}}}function C0(l){return l in zd?zd[l]:zd[l]="on"+l}function YA(l,f){if(l.da)l=!0;else{f=new ye(f,this);var m=l.listener,S=l.ha||l.src;l.fa&&Ud(l),l=m.call(S,f)}return l}function Hd(l){return l=l[Bd],l instanceof ct?l:null}var Wd="__closure_events_fn_"+(1e9*Math.random()>>>0);function qd(l){return typeof l=="function"?l:(l[Wd]||(l[Wd]=function(f){return l.handleEvent(f)}),l[Wd])}function vt(){K.call(this),this.i=new ct(this),this.M=this,this.F=null}_(vt,K),vt.prototype[Me]=!0,vt.prototype.removeEventListener=function(l,f,m,S){k0(this,l,f,m,S)};function It(l,f){var m,S=l.F;if(S)for(m=[];S;S=S.F)m.push(S);if(l=l.M,S=f.type||f,typeof f=="string")f=new te(f,l);else if(f instanceof te)f.target=f.target||l;else{var L=f;f=new te(S,l),C(f,L)}if(L=!0,m)for(var j=m.length-1;0<=j;j--){var q=f.g=m[j];L=bl(q,S,!0,f)&&L}if(q=f.g=l,L=bl(q,S,!0,f)&&L,L=bl(q,S,!1,f)&&L,m)for(j=0;j<m.length;j++)q=f.g=m[j],L=bl(q,S,!1,f)&&L}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],S=0;S<m.length;S++)Wt(m[S]);delete l.g[f],l.h--}}this.F=null},vt.prototype.K=function(l,f,m,S){return this.i.add(String(l),f,!1,m,S)},vt.prototype.L=function(l,f,m,S){return this.i.add(String(l),f,!0,m,S)};function bl(l,f,m,S){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,j=0;j<f.length;++j){var q=f[j];if(q&&!q.da&&q.capture==m){var Te=q.listener,ut=q.ha||q.src;q.fa&&qt(l.i,q),L=Te.call(ut,S)!==!1&&L}}return L&&!S.defaultPrevented}function I0(l,f,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function P0(l){l.g=I0(()=>{l.g=null,l.i&&(l.i=!1,P0(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class XA extends K{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:P0(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xo(l){K.call(this),this.h=l,this.g={}}_(xo,K);var R0=[];function D0(l){N(l.g,function(f,m){this.g.hasOwnProperty(m)&&Ud(f)},l),l.g={}}xo.prototype.N=function(){xo.aa.N.call(this),D0(this)},xo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gd=a.JSON.stringify,JA=a.JSON.parse,ZA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Kd(){}Kd.prototype.h=null;function V0(l){return l.h||(l.h=l.i())}function N0(){}var _o={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qd(){te.call(this,"d")}_(Qd,te);function Yd(){te.call(this,"c")}_(Yd,te);var li={},M0=null;function Tl(){return M0=M0||new vt}li.La="serverreachability";function L0(l){te.call(this,li.La,l)}_(L0,te);function Eo(l){const f=Tl();It(f,new L0(f))}li.STAT_EVENT="statevent";function O0(l,f){te.call(this,li.STAT_EVENT,l),this.stat=f}_(O0,te);function Pt(l){const f=Tl();It(f,new O0(f,l))}li.Ma="timingevent";function j0(l,f){te.call(this,li.Ma,l),this.size=f}_(j0,te);function bo(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function To(){this.g=!0}To.prototype.xa=function(){this.g=!1};function e5(l,f,m,S,L,j){l.info(function(){if(l.g)if(j)for(var q="",Te=j.split("&"),ut=0;ut<Te.length;ut++){var ve=Te[ut].split("=");if(1<ve.length){var wt=ve[0];ve=ve[1];var xt=wt.split("_");q=2<=xt.length&&xt[1]=="type"?q+(wt+"="+ve+"&"):q+(wt+"=redacted&")}}else q=null;else q=j;return"XMLHTTP REQ ("+S+") [attempt "+L+"]: "+f+`
`+m+`
`+q})}function t5(l,f,m,S,L,j,q){l.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+L+"]: "+f+`
`+m+`
`+j+" "+q})}function es(l,f,m,S){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+r5(l,m)+(S?" "+S:"")})}function n5(l,f){l.info(function(){return"TIMEOUT: "+f})}To.prototype.info=function(){};function r5(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var S=m[l];if(!(2>S.length)){var L=S[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var q=1;q<L.length;q++)L[q]=""}}}}return Gd(m)}catch{return f}}var Sl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},F0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xd;function Al(){}_(Al,Kd),Al.prototype.g=function(){return new XMLHttpRequest},Al.prototype.i=function(){return{}},Xd=new Al;function pr(l,f,m,S){this.j=l,this.i=f,this.l=m,this.R=S||1,this.U=new xo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $0}function $0(){this.i=null,this.g="",this.h=!1}var B0={},Jd={};function Zd(l,f,m){l.L=1,l.v=Pl(Wn(f)),l.m=m,l.P=!0,z0(l,null)}function z0(l,f){l.F=Date.now(),kl(l),l.A=Wn(l.v);var m=l.A,S=l.R;Array.isArray(S)||(S=[String(S)]),ny(m.i,"t",S),l.C=0,m=l.j.J,l.h=new $0,l.g=xy(l.j,m?f:null,!l.m),0<l.O&&(l.M=new XA(p(l.Y,l,l.g),l.O)),f=l.U,m=l.g,S=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(R0[0]=L.toString()),L=R0);for(var j=0;j<L.length;j++){var q=T0(m,L[j],S||f.handleEvent,!1,f.h||f);if(!q)break;f.g[q.key]=q}f=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Eo(),e5(l.i,l.u,l.A,l.l,l.R,l.m)}pr.prototype.ca=function(l){l=l.target;const f=this.M;f&&qn(l)==3?f.j():this.Y(l)},pr.prototype.Y=function(l){try{if(l==this.g)e:{const xt=qn(this.g);var f=this.g.Ba();const rs=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||cy(this.g)))){this.J||xt!=4||f==7||(f==8||0>=rs?Eo(3):Eo(2)),eh(this);var m=this.g.Z();this.X=m;t:if(U0(this)){var S=cy(this.g);l="";var L=S.length,j=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ci(this),So(this);var q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(S[f],{stream:!(j&&f==L-1)});S.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,t5(this.i,this.u,this.A,this.l,this.R,xt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,ut=this.g;if((Te=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Te)){var ve=Te;break t}}ve=null}if(m=ve)es(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,th(this,m);else{this.o=!1,this.s=3,Pt(12),ci(this),So(this);break e}}if(this.P){m=!0;let wn;for(;!this.J&&this.C<q.length;)if(wn=i5(this,q),wn==Jd){xt==4&&(this.s=4,Pt(14),m=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==B0){this.s=4,Pt(15),es(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else es(this.i,this.l,wn,null),th(this,wn);if(U0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||q.length!=0||this.h.h||(this.s=1,Pt(16),m=!1),this.o=this.o&&m,!m)es(this.i,this.l,q,"[Invalid Chunked Response]"),ci(this),So(this);else if(0<q.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),ah(wt),wt.M=!0,Pt(11))}}else es(this.i,this.l,q,null),th(this,q);xt==4&&ci(this),this.o&&!this.J&&(xt==4?gy(this.j,this):(this.o=!1,kl(this)))}else _5(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),ci(this),So(this)}}}catch{}finally{}};function U0(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function i5(l,f){var m=l.C,S=f.indexOf(`
`,m);return S==-1?Jd:(m=Number(f.substring(m,S)),isNaN(m)?B0:(S+=1,S+m>f.length?Jd:(f=f.slice(S,S+m),l.C=S+m,f)))}pr.prototype.cancel=function(){this.J=!0,ci(this)};function kl(l){l.S=Date.now()+l.I,H0(l,l.I)}function H0(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=bo(p(l.ba,l),f)}function eh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}pr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(n5(this.i,this.A),this.L!=2&&(Eo(),Pt(17)),ci(this),this.s=2,So(this)):H0(this,this.S-l)};function So(l){l.j.G==0||l.J||gy(l.j,l)}function ci(l){eh(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,D0(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function th(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||nh(m.h,l))){if(!l.K&&nh(m.h,l)&&m.G==3){try{var S=m.Da.g.parse(f)}catch{S=null}if(Array.isArray(S)&&S.length==3){var L=S;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Ll(m),Nl(m);else break e;oh(m),Pt(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=bo(p(m.Za,m),6e3));if(1>=G0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else di(m,11)}else if((l.K||m.g==l)&&Ll(m),!v(f))for(L=m.Da.g.parse(f),f=0;f<L.length;f++){let ve=L[f];if(m.T=ve[0],ve=ve[1],m.G==2)if(ve[0]=="c"){m.K=ve[1],m.ia=ve[2];const wt=ve[3];wt!=null&&(m.la=wt,m.j.info("VER="+m.la));const xt=ve[4];xt!=null&&(m.Aa=xt,m.j.info("SVER="+m.Aa));const rs=ve[5];rs!=null&&typeof rs=="number"&&0<rs&&(S=1.5*rs,m.L=S,m.j.info("backChannelRequestTimeoutMs_="+S)),S=m;const wn=l.g;if(wn){const jl=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jl){var j=S.h;j.g||jl.indexOf("spdy")==-1&&jl.indexOf("quic")==-1&&jl.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(rh(j,j.h),j.h=null))}if(S.D){const lh=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;lh&&(S.ya=lh,Ie(S.I,S.D,lh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),S=m;var q=l;if(S.qa=wy(S,S.J?S.ia:null,S.W),q.K){K0(S.h,q);var Te=q,ut=S.L;ut&&(Te.I=ut),Te.B&&(eh(Te),kl(Te)),S.g=q}else py(S);0<m.i.length&&Ml(m)}else ve[0]!="stop"&&ve[0]!="close"||di(m,7);else m.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?di(m,7):sh(m):ve[0]!="noop"&&m.l&&m.l.ta(ve),m.v=0)}}Eo(4)}catch{}}var s5=class{constructor(l,f){this.g=l,this.map=f}};function W0(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function q0(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function G0(l){return l.h?1:l.g?l.g.size:0}function nh(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function rh(l,f){l.g?l.g.add(f):l.h=f}function K0(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}W0.prototype.cancel=function(){if(this.i=Q0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Q0(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return b(l.i)}function o5(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],m=l.length,S=0;S<m;S++)f.push(l[S]);return f}f=[],m=0;for(S in l)f[m++]=l[S];return f}function a5(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const S in l)f[m++]=S;return f}}}function Y0(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=a5(l),S=o5(l),L=S.length,j=0;j<L;j++)f.call(void 0,S[j],m&&m[j],l)}var X0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function l5(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var S=l[m].indexOf("="),L=null;if(0<=S){var j=l[m].substring(0,S);L=l[m].substring(S+1)}else j=l[m];f(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ui(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ui){this.h=l.h,Cl(this,l.j),this.o=l.o,this.g=l.g,Il(this,l.s),this.l=l.l;var f=l.i,m=new Co;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),J0(this,m),this.m=l.m}else l&&(f=String(l).match(X0))?(this.h=!1,Cl(this,f[1]||"",!0),this.o=Ao(f[2]||""),this.g=Ao(f[3]||"",!0),Il(this,f[4]),this.l=Ao(f[5]||"",!0),J0(this,f[6]||"",!0),this.m=Ao(f[7]||"")):(this.h=!1,this.i=new Co(null,this.h))}ui.prototype.toString=function(){var l=[],f=this.j;f&&l.push(ko(f,Z0,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(ko(f,Z0,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(ko(m,m.charAt(0)=="/"?d5:u5,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",ko(m,f5)),l.join("")};function Wn(l){return new ui(l)}function Cl(l,f,m){l.j=m?Ao(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Il(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function J0(l,f,m){f instanceof Co?(l.i=f,p5(l.i,l.h)):(m||(f=ko(f,h5)),l.i=new Co(f,l.h))}function Ie(l,f,m){l.i.set(f,m)}function Pl(l){return Ie(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ao(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ko(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,c5),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function c5(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Z0=/[#\/\?@]/g,u5=/[#\?:]/g,d5=/[#\?]/g,h5=/[#\?@]/g,f5=/#/g;function Co(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function mr(l){l.g||(l.g=new Map,l.h=0,l.i&&l5(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Co.prototype,t.add=function(l,f){mr(this),this.i=null,l=ts(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function ey(l,f){mr(l),f=ts(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function ty(l,f){return mr(l),f=ts(l,f),l.g.has(f)}t.forEach=function(l,f){mr(this),this.g.forEach(function(m,S){m.forEach(function(L){l.call(f,L,S,this)},this)},this)},t.na=function(){mr(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let S=0;S<f.length;S++){const L=l[S];for(let j=0;j<L.length;j++)m.push(f[S])}return m},t.V=function(l){mr(this);let f=[];if(typeof l=="string")ty(this,l)&&(f=f.concat(this.g.get(ts(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},t.set=function(l,f){return mr(this),this.i=null,l=ts(this,l),ty(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function ny(l,f,m){ey(l,f),0<m.length&&(l.i=null,l.g.set(ts(l,f),b(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var S=f[m];const j=encodeURIComponent(String(S)),q=this.V(S);for(S=0;S<q.length;S++){var L=j;q[S]!==""&&(L+="="+encodeURIComponent(String(q[S]))),l.push(L)}}return this.i=l.join("&")};function ts(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function p5(l,f){f&&!l.j&&(mr(l),l.i=null,l.g.forEach(function(m,S){var L=S.toLowerCase();S!=L&&(ey(this,S),ny(this,L,m))},l)),l.j=f}function m5(l,f){const m=new To;if(a.Image){const S=new Image;S.onload=g(gr,m,"TestLoadImage: loaded",!0,f,S),S.onerror=g(gr,m,"TestLoadImage: error",!1,f,S),S.onabort=g(gr,m,"TestLoadImage: abort",!1,f,S),S.ontimeout=g(gr,m,"TestLoadImage: timeout",!1,f,S),a.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=l}else f(!1)}function g5(l,f){const m=new To,S=new AbortController,L=setTimeout(()=>{S.abort(),gr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:S.signal}).then(j=>{clearTimeout(L),j.ok?gr(m,"TestPingServer: ok",!0,f):gr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),gr(m,"TestPingServer: error",!1,f)})}function gr(l,f,m,S,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),S(m)}catch{}}function y5(){this.g=new ZA}function v5(l,f,m){const S=m||"";try{Y0(l,function(L,j){let q=L;u(L)&&(q=Gd(L)),f.push(S+j+"="+encodeURIComponent(q))})}catch(L){throw f.push(S+"type="+encodeURIComponent("_badmap")),L}}function Rl(l){this.l=l.Ub||null,this.j=l.eb||!1}_(Rl,Kd),Rl.prototype.g=function(){return new Dl(this.l,this.j)},Rl.prototype.i=function(l){return function(){return l}}({});function Dl(l,f){vt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Dl,vt),t=Dl.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Po(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Po(this)),this.g&&(this.readyState=3,Po(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ry(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ry(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Io(this):Po(this),this.readyState==3&&ry(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Io(this))},t.Qa=function(l){this.g&&(this.response=l,Io(this))},t.ga=function(){this.g&&Io(this)};function Io(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Po(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Po(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function iy(l){let f="";return N(l,function(m,S){f+=S,f+=":",f+=m,f+=`\r
`}),f}function ih(l,f,m){e:{for(S in m){var S=!1;break e}S=!0}S||(m=iy(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ie(l,f,m))}function Be(l){vt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Be,vt);var w5=/^https?$/i,x5=["POST","PUT"];t=Be.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,m,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xd.g(),this.v=this.o?V0(this.o):V0(Xd),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){sy(this,j);return}if(l=m||"",m=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var L in S)m.set(L,S[L]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const j of S.keys())m.set(j,S.get(j));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(m.keys()).find(j=>j.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(x5,f,void 0))||S||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,q]of m)this.g.setRequestHeader(j,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ly(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){sy(this,j)}};function sy(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,oy(l),Vl(l)}function oy(l){l.A||(l.A=!0,It(l,"complete"),It(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,It(this,"complete"),It(this,"abort"),Vl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vl(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ay(this):this.bb())},t.bb=function(){ay(this)};function ay(l){if(l.h&&typeof o<"u"&&(!l.v[1]||qn(l)!=4||l.Z()!=2)){if(l.u&&qn(l)==4)I0(l.Ea,0,l);else if(It(l,"readystatechange"),qn(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var S;if(S=q===0){var L=String(l.D).match(X0)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),S=!w5.test(L?L.toLowerCase():"")}m=S}if(m)It(l,"complete"),It(l,"success");else{l.m=6;try{var j=2<qn(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",oy(l)}}finally{Vl(l)}}}}function Vl(l,f){if(l.g){ly(l);const m=l.g,S=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||It(l,"ready");try{m.onreadystatechange=S}catch{}}}function ly(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function qn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),JA(f)}};function cy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function _5(l){const f={};l=(l.g&&2<=qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<l.length;S++){if(v(l[S]))continue;var m=D(l[S]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const j=f[L]||[];f[L]=j,j.push(m)}T(f,function(S){return S.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ro(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function uy(l){this.Aa=0,this.i=[],this.j=new To,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ro("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ro("baseRetryDelayMs",5e3,l),this.cb=Ro("retryDelaySeedMs",1e4,l),this.Wa=Ro("forwardChannelMaxRetries",2,l),this.wa=Ro("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new W0(l&&l.concurrentRequestLimit),this.Da=new y5,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=uy.prototype,t.la=8,t.G=1,t.connect=function(l,f,m,S){Pt(0),this.W=l,this.H=f||{},m&&S!==void 0&&(this.H.OSID=m,this.H.OAID=S),this.F=this.X,this.I=wy(this,null,this.W),Ml(this)};function sh(l){if(dy(l),l.G==3){var f=l.U++,m=Wn(l.I);if(Ie(m,"SID",l.K),Ie(m,"RID",f),Ie(m,"TYPE","terminate"),Do(l,m),f=new pr(l,l.j,f),f.L=2,f.v=Pl(Wn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=xy(f.j,null),f.g.ea(f.v)),f.F=Date.now(),kl(f)}vy(l)}function Nl(l){l.g&&(ah(l),l.g.cancel(),l.g=null)}function dy(l){Nl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ll(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ml(l){if(!q0(l.h)&&!l.s){l.s=!0;var f=l.Ga;ee||F(),z||(ee(),z=!0),G.add(f,l),l.B=0}}function E5(l,f){return G0(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=bo(p(l.Ga,l,f),yy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new pr(this,this.j,l);let j=this.o;if(this.S&&(j?(j=E(j),C(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var S=this.i[m];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(f+=S,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=fy(this,L,f),m=Wn(this.I),Ie(m,"RID",l),Ie(m,"CVER",22),this.D&&Ie(m,"X-HTTP-Session-Id",this.D),Do(this,m),j&&(this.O?f="headers="+encodeURIComponent(String(iy(j)))+"&"+f:this.m&&ih(m,this.m,j)),rh(this.h,L),this.Ua&&Ie(m,"TYPE","init"),this.P?(Ie(m,"$req",f),Ie(m,"SID","null"),L.T=!0,Zd(L,m,null)):Zd(L,m,f),this.G=2}}else this.G==3&&(l?hy(this,l):this.i.length==0||q0(this.h)||hy(this))};function hy(l,f){var m;f?m=f.l:m=l.U++;const S=Wn(l.I);Ie(S,"SID",l.K),Ie(S,"RID",m),Ie(S,"AID",l.T),Do(l,S),l.m&&l.o&&ih(S,l.m,l.o),m=new pr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=fy(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),rh(l.h,m),Zd(m,S,f)}function Do(l,f){l.H&&N(l.H,function(m,S){Ie(f,S,m)}),l.l&&Y0({},function(m,S){Ie(f,S,m)})}function fy(l,f,m){m=Math.min(l.i.length,m);var S=l.l?p(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const q=["count="+m];j==-1?0<m?(j=L[0].g,q.push("ofs="+j)):j=0:q.push("ofs="+j);let Te=!0;for(let ut=0;ut<m;ut++){let ve=L[ut].g;const wt=L[ut].map;if(ve-=j,0>ve)j=Math.max(0,L[ut].g-100),Te=!1;else try{v5(wt,q,"req"+ve+"_")}catch{S&&S(wt)}}if(Te){S=q.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,S}function py(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;ee||F(),z||(ee(),z=!0),G.add(f,l),l.v=0}}function oh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=bo(p(l.Fa,l),yy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,my(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=bo(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Nl(this),my(this))};function ah(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function my(l){l.g=new pr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Wn(l.qa);Ie(f,"RID","rpc"),Ie(f,"SID",l.K),Ie(f,"AID",l.T),Ie(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ie(f,"TO",l.ja),Ie(f,"TYPE","xmlhttp"),Do(l,f),l.m&&l.o&&ih(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Pl(Wn(f)),m.m=null,m.P=!0,z0(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Nl(this),oh(this),Pt(19))};function Ll(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function gy(l,f){var m=null;if(l.g==f){Ll(l),ah(l),l.g=null;var S=2}else if(nh(l.h,f))m=f.D,K0(l.h,f),S=1;else return;if(l.G!=0){if(f.o)if(S==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;S=Tl(),It(S,new j0(S,m)),Ml(l)}else py(l);else if(L=f.s,L==3||L==0&&0<f.X||!(S==1&&E5(l,f)||S==2&&oh(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),L){case 1:di(l,5);break;case 4:di(l,10);break;case 3:di(l,6);break;default:di(l,2)}}}function yy(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function di(l,f){if(l.j.info("Error code "+f),f==2){var m=p(l.fb,l),S=l.Xa;const L=!S;S=new ui(S||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Cl(S,"https"),Pl(S),L?m5(S.toString(),m):g5(S.toString(),m)}else Pt(2);l.G=0,l.l&&l.l.sa(f),vy(l),dy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function vy(l){if(l.G=0,l.ka=[],l.l){const f=Q0(l.h);(f.length!=0||l.i.length!=0)&&(k(l.ka,f),k(l.ka,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.ra()}}function wy(l,f,m){var S=m instanceof ui?Wn(m):new ui(m);if(S.g!="")f&&(S.g=f+"."+S.g),Il(S,S.s);else{var L=a.location;S=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var j=new ui(null);S&&Cl(j,S),f&&(j.g=f),L&&Il(j,L),m&&(j.l=m),S=j}return m=l.D,f=l.ya,m&&f&&Ie(S,m,f),Ie(S,"VER",l.la),Do(l,S),S}function xy(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Be(new Rl({eb:m})):new Be(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _y(){}t=_y.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ol(){}Ol.prototype.g=function(l,f){return new Gt(l,f)};function Gt(l,f){vt.call(this),this.g=new uy(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!v(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!v(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new ns(this)}_(Gt,vt),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){sh(this.g)},Gt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Gd(l),l=m);f.i.push(new s5(f.Ya++,l)),f.G==3&&Ml(f)},Gt.prototype.N=function(){this.g.l=null,delete this.j,sh(this.g),delete this.g,Gt.aa.N.call(this)};function Ey(l){Qd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}_(Ey,Qd);function by(){Yd.call(this),this.status=1}_(by,Yd);function ns(l){this.g=l}_(ns,_y),ns.prototype.ua=function(){It(this.g,"a")},ns.prototype.ta=function(l){It(this.g,new Ey(l))},ns.prototype.sa=function(l){It(this.g,new by)},ns.prototype.ra=function(){It(this.g,"b")},Ol.prototype.createWebChannel=Ol.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,dS=function(){return new Ol},uS=function(){return Tl()},cS=li,Hp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sl.NO_ERROR=0,Sl.TIMEOUT=8,Sl.HTTP_ERROR=6,Fc=Sl,F0.COMPLETE="complete",lS=F0,N0.EventType=_o,_o.OPEN="a",_o.CLOSE="b",_o.ERROR="c",_o.MESSAGE="d",vt.prototype.listen=vt.prototype.K,na=N0,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,aS=Be}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});const Bw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Rg("@firebase/firestore");function Wo(){return $i.logLevel}function Z(t,...e){if($i.logLevel<=pe.DEBUG){const n=e.map(Fg);$i.debug(`Firestore (${mo}): ${t}`,...n)}}function cr(t,...e){if($i.logLevel<=pe.ERROR){const n=e.map(Fg);$i.error(`Firestore (${mo}): ${t}`,...n)}}function Js(t,...e){if($i.logLevel<=pe.WARN){const n=e.map(Fg);$i.warn(`Firestore (${mo}): ${t}`,...n)}}function Fg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function be(t,e){t||ie()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class Yj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Xj{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new hS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Tt(e)}}class Jj{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zj{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Jj(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class e8{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t8{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new e8(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n8(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=n8(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new rt(0,0))}static max(){return new oe(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Za.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Za?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends Za{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const r8=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Za{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return r8.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Y(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(De.fromString(e))}static fromName(e){return new ne(De.fromString(e).popFirst(5))}static empty(){return new ne(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new De(e.slice()))}}function i8(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new ei(i,ne.empty(),e)}function s8(t){return new ei(t.readTime,t.key,-1)}class ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ei(oe.min(),ne.empty(),-1)}static max(){return new ei(oe.max(),ne.empty(),-1)}}function o8(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a8="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l8{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==a8)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function c8(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$g.oe=-1;function kd(t){return t==null}function Du(t){return t===0&&1/t==-1/0}function u8(t){return typeof t=="number"&&Number.isInteger(t)&&!Du(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function go(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fc(this.root,e,this.comparator,!0)}}class fc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uw(this.data.getIterator())}getIteratorFrom(e){return new Uw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class Uw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Sn([])}unionWith(e){let n=new mt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mS("Invalid base64 string: "+s):s}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const d8=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if(be(!!t),typeof t=="string"){let e=0;const n=d8.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zg(t){const e=t.mapValue.fields.__previous_value__;return Bg(e)?zg(e):e}function el(t){const e=ti(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h8{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class tl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bg(t)?4:p8(t)?9007199254740991:f8(t)?10:11:ie()}function Hn(t,e){if(t===e)return!0;const n=zi(t);if(n!==zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return el(t).isEqual(el(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ti(i.timestampValue),a=ti(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),a=qe(s.doubleValue);return o===a?Du(o)===Du(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(zw(o)!==zw(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Hn(o[c],a[c])))return!1;return!0}(t,e);default:return ie()}}function nl(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function eo(t,e){if(t===e)return 0;const n=zi(t),r=zi(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=qe(s.integerValue||s.doubleValue),c=qe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Hw(t.timestampValue,e.timestampValue);case 4:return Hw(el(t),el(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Bi(s),c=Bi(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const d=we(a[u],c[u]);if(d!==0)return d}return we(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=we(qe(s.latitude),qe(o.latitude));return a!==0?a:we(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ww(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,d;const h=s.fields||{},p=o.fields||{},g=(a=h.value)===null||a===void 0?void 0:a.arrayValue,_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,b=we(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0);return b!==0?b:Ww(g,_)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===pc.mapValue&&o===pc.mapValue)return 0;if(s===pc.mapValue)return 1;if(o===pc.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const p=we(c[h],d[h]);if(p!==0)return p;const g=eo(a[c[h]],u[d[h]]);if(g!==0)return g}return we(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ie()}}function Hw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=ti(t),r=ti(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function Ww(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=eo(n[i],r[i]);if(s)return s}return we(n.length,r.length)}function to(t){return Wp(t)}function Wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Wp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Wp(n.fields[o])}`;return i+"}"}(t.mapValue):ie()}function qw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qp(t){return!!t&&"integerValue"in t}function Ug(t){return!!t&&"arrayValue"in t}function Gw(t){return!!t&&"nullValue"in t}function Kw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $c(t){return!!t&&"mapValue"in t}function f8(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return go(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function p8(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$c(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ea(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$c(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$c(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){go(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new cn(Ea(this.value))}}function gS(t){const e=[];return go(t.fields,(n,r)=>{const i=new ft([n]);if($c(r)){const s=gS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new At(e,0,oe.min(),oe.min(),oe.min(),cn.empty(),0)}static newFoundDocument(e,n,r,i){return new At(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new At(e,2,n,oe.min(),oe.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,oe.min(),oe.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.position=e,this.inclusive=n}}function Qw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=eo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n="asc"){this.field=e,this.dir=n}}function m8(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{}class Je extends yS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new y8(e,n,r):n==="array-contains"?new x8(e,r):n==="in"?new _8(e,r):n==="not-in"?new E8(e,r):n==="array-contains-any"?new b8(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new v8(e,r):new w8(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(eo(n,this.value)):n!==null&&zi(this.value)===zi(n)&&this.matchesComparison(eo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rn extends yS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Rn(e,n)}matches(e){return vS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vS(t){return t.op==="and"}function wS(t){return g8(t)&&vS(t)}function g8(t){for(const e of t.filters)if(e instanceof Rn)return!1;return!0}function Gp(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+to(t.value);if(wS(t))return t.filters.map(e=>Gp(e)).join(",");{const e=t.filters.map(n=>Gp(n)).join(",");return`${t.op}(${e})`}}function xS(t,e){return t instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&Hn(r.value,i.value)}(t,e):t instanceof Rn?function(r,i){return i instanceof Rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&xS(o,i.filters[a]),!0):!1}(t,e):void ie()}function _S(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(t):t instanceof Rn?function(n){return n.op.toString()+" {"+n.getFilters().map(_S).join(" ,")+"}"}(t):"Filter"}class y8 extends Je{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class v8 extends Je{constructor(e,n){super(e,"in",n),this.keys=ES("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class w8 extends Je{constructor(e,n){super(e,"not-in",n),this.keys=ES("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ES(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class x8 extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ug(n)&&nl(n.arrayValue,this.value)}}class _8 extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&nl(this.value.arrayValue,n)}}class E8 extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!nl(this.value.arrayValue,n)}}class b8 extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ug(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>nl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T8{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Xw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new T8(t,e,n,r,i,s,o)}function Hg(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),kd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>to(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>to(r)).join(",")),e.ue=n}return e.ue}function Wg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!m8(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yw(t.startAt,e.startAt)&&Yw(t.endAt,e.endAt)}function Kp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function S8(t,e,n,r,i,s,o,a){return new yo(t,e,n,r,i,s,o,a)}function bS(t){return new yo(t)}function Jw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TS(t){return t.collectionGroup!==null}function ba(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new mt(ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new rl(s,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new rl(ft.keyField(),r))}return e.ce}function Bn(t){const e=ae(t);return e.le||(e.le=A8(e,ba(t))),e.le}function A8(t,e){if(t.limitType==="F")return Xw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rl(i.field,s)});const n=t.endAt?new Vu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vu(t.startAt.position,t.startAt.inclusive):null;return Xw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qp(t,e){const n=t.filters.concat([e]);return new yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yp(t,e,n){return new yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cd(t,e){return Wg(Bn(t),Bn(e))&&t.limitType===e.limitType}function SS(t){return`${Hg(Bn(t))}|lt:${t.limitType}`}function ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>_S(i)).join(", ")}]`),kd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>to(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>to(i)).join(",")),`Target(${r})`}(Bn(t))}; limitType=${t.limitType})`}function Id(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ba(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Qw(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ba(r),i)||r.endAt&&!function(o,a,c){const u=Qw(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ba(r),i))}(t,e)}function k8(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AS(t){return(e,n)=>{let r=!1;for(const i of ba(t)){const s=C8(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function C8(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?eo(c,u):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){go(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I8=new $e(ne.comparator);function ur(){return I8}const kS=new $e(ne.comparator);function ra(...t){let e=kS;for(const n of t)e=e.insert(n.key,n);return e}function CS(t){let e=kS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ai(){return Ta()}function IS(){return Ta()}function Ta(){return new vo(t=>t.toString(),(t,e)=>t.isEqual(e))}const P8=new $e(ne.comparator),R8=new mt(ne.comparator);function ue(...t){let e=R8;for(const n of t)e=e.add(n);return e}const D8=new mt(we);function V8(){return D8}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Du(e)?"-0":e}}function PS(t){return{integerValue:""+t}}function N8(t,e){return u8(e)?PS(e):qg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this._=void 0}}function M8(t,e,n){return t instanceof Nu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Bg(s)&&(s=zg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof il?DS(t,e):t instanceof sl?VS(t,e):function(i,s){const o=RS(i,s),a=Zw(o)+Zw(i.Pe);return qp(o)&&qp(i.Pe)?PS(a):qg(i.serializer,a)}(t,e)}function L8(t,e,n){return t instanceof il?DS(t,e):t instanceof sl?VS(t,e):n}function RS(t,e){return t instanceof Mu?function(r){return qp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nu extends Pd{}class il extends Pd{constructor(e){super(),this.elements=e}}function DS(t,e){const n=NS(e);for(const r of t.elements)n.some(i=>Hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class sl extends Pd{constructor(e){super(),this.elements=e}}function VS(t,e){let n=NS(e);for(const r of t.elements)n=n.filter(i=>!Hn(i,r));return{arrayValue:{values:n}}}class Mu extends Pd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Zw(t){return qe(t.integerValue||t.doubleValue)}function NS(t){return Ug(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function O8(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof il&&i instanceof il||r instanceof sl&&i instanceof sl?Zs(r.elements,i.elements,Hn):r instanceof Mu&&i instanceof Mu?Hn(r.Pe,i.Pe):r instanceof Nu&&i instanceof Nu}(t.transform,e.transform)}class j8{constructor(e,n){this.version=e,this.transformResults=n}}class tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rd{}function MS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new OS(t.key,tr.none()):new wl(t.key,t.data,tr.none());{const n=t.data,r=cn.empty();let i=new mt(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xi(t.key,r,new Sn(i.toArray()),tr.none())}}function F8(t,e,n){t instanceof wl?function(i,s,o){const a=i.value.clone(),c=tx(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xi?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=tx(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(LS(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Sa(t,e,n,r){return t instanceof wl?function(s,o,a,c){if(!Bc(s.precondition,o))return a;const u=s.value.clone(),d=nx(s.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xi?function(s,o,a,c){if(!Bc(s.precondition,o))return a;const u=nx(s.fieldTransforms,c,o),d=o.data;return d.setAll(LS(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function $8(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=RS(r.transform,i||null);s!=null&&(n===null&&(n=cn.empty()),n.set(r.field,s))}return n||null}function ex(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zs(r,i,(s,o)=>O8(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wl extends Rd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xi extends Rd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function tx(t,e,n){const r=new Map;be(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,L8(o,a,n[i]))}return r}function nx(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,M8(s,o,e))}return r}class OS extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class B8 extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z8{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&F8(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=IS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=MS(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>ex(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>ex(n,r))}}class Gg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){be(e.mutations.length===r.length);let i=function(){return P8}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U8{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H8{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,de;function W8(t){switch(t){default:return ie();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function jS(t){if(t===void 0)return cr("GRPC error has no .code"),B.UNKNOWN;switch(t){case Ke.OK:return B.OK;case Ke.CANCELLED:return B.CANCELLED;case Ke.UNKNOWN:return B.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return B.INTERNAL;case Ke.UNAVAILABLE:return B.UNAVAILABLE;case Ke.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ke.NOT_FOUND:return B.NOT_FOUND;case Ke.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ke.ABORTED:return B.ABORTED;case Ke.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ke.DATA_LOSS:return B.DATA_LOSS;default:return ie()}}(de=Ke||(Ke={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q8(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G8=new Di([4294967295,4294967295],0);function rx(t){const e=q8().encode(t),n=new oS;return n.update(e),new Uint8Array(n.digest())}function ix(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Di([n,r],0),new Di([i,s],0)]}class Kg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ia(`Invalid padding: ${n}`);if(r<0)throw new ia(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ia(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ia(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Di.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Di.fromNumber(r)));return i.compare(G8)===1&&(i=new Di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=rx(e),[r,i]=ix(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Kg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=rx(e),[r,i]=ix(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dd(oe.min(),i,new $e(we),ur(),ue())}}class xl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xl(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class FS{constructor(e,n){this.targetId=e,this.me=n}}class $S{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sx{constructor(){this.fe=0,this.ge=ax(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),n=ue(),r=ue();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new xl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ax()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class K8{constructor(e){this.Le=e,this.Be=new Map,this.ke=ur(),this.qe=ox(),this.Qe=new $e(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Kp(s))if(r===0){const o=new ne(s.path);this.Ue(n,o,At.newNoDocument(o,oe.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Bi(r).toUint8Array()}catch(c){if(c instanceof mS)return Js("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Kg(o,i,s)}catch(c){return Js(c instanceof ia?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Kp(a.target)){const c=new ne(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,At.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ue();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Dd(e,n,this.Qe,this.ke,r);return this.ke=ur(),this.qe=ox(),this.Qe=new $e(we),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new sx,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new sx),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ox(){return new $e(ne.comparator)}function ax(){return new $e(ne.comparator)}const Q8=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Y8=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),X8=(()=>({and:"AND",or:"OR"}))();class J8{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xp(t,e){return t.useProto3Json||kd(e)?e:{value:e}}function Lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Z8(t,e){return Lu(t,e.toTimestamp())}function zn(t){return be(!!t),oe.fromTimestamp(function(n){const r=ti(n);return new rt(r.seconds,r.nanos)}(t))}function Qg(t,e){return Jp(t,e).canonicalString()}function Jp(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zS(t){const e=De.fromString(t);return be(GS(e)),e}function Zp(t,e){return Qg(t.databaseId,e.path)}function cf(t,e){const n=zS(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(HS(n))}function US(t,e){return Qg(t.databaseId,e)}function eF(t){const e=zS(t);return e.length===4?De.emptyPath():HS(e)}function em(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HS(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lx(t,e,n){return{name:Zp(t,e),fields:n.value.mapValue.fields}}function tF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(be(d===void 0||typeof d=="string"),yt.fromBase64String(d||"")):(be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),yt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?B.UNKNOWN:jS(u.code);return new Y(d,u.message||"")}(o);n=new $S(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cf(t,r.document.name),s=zn(r.document.updateTime),o=r.document.createTime?zn(r.document.createTime):oe.min(),a=new cn({mapValue:{fields:r.document.fields}}),c=At.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new zc(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cf(t,r.document),s=r.readTime?zn(r.readTime):oe.min(),o=At.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cf(t,r.document),s=r.removedTargetIds||[];n=new zc([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new H8(i,s),a=r.targetId;n=new FS(a,o)}}return n}function nF(t,e){let n;if(e instanceof wl)n={update:lx(t,e.key,e.value)};else if(e instanceof OS)n={delete:Zp(t,e.key)};else if(e instanceof Xi)n={update:lx(t,e.key,e.data),updateMask:dF(e.fieldMask)};else{if(!(e instanceof B8))return ie();n={verify:Zp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Nu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof il)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof sl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Z8(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function rF(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?zn(i.updateTime):zn(s);return o.isEqual(oe.min())&&(o=zn(s)),new j8(o,i.transformResults||[])}(n,e))):[]}function iF(t,e){return{documents:[US(t,e.path)]}}function sF(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=US(t,i);const s=function(u){if(u.length!==0)return qS(Rn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(p){return{field:cs(p.field),direction:lF(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Xp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function oF(t){let e=eF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){be(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(h){const p=WS(h);return p instanceof Rn&&wS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(_){return new rl(us(_.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,kd(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,g=h.values||[];return new Vu(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,g=h.values||[];return new Vu(g,p)}(n.endAt)),S8(e,i,o,s,a,"F",c,u)}function aF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function WS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=us(n.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=us(n.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(us(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Rn.create(n.compositeFilter.filters.map(r=>WS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function lF(t){return Q8[t]}function cF(t){return Y8[t]}function uF(t){return X8[t]}function cs(t){return{fieldPath:t.canonicalString()}}function us(t){return ft.fromServerFormat(t.fieldPath)}function qS(t){return t instanceof Je?function(n){if(n.op==="=="){if(Kw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(Gw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(Gw(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:cF(n.op),value:n.value}}}(t):t instanceof Rn?function(n){const r=n.getFilters().map(i=>qS(i));return r.length===1?r[0]:{compositeFilter:{op:uF(n.op),filters:r}}}(t):ie()}function dF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function GS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=yt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e){this.ct=e}}function fF(t){const e=oF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(){this.un=new mF}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(ei.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class mF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new mt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new mt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new no(0)}static kn(){return new no(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(){this.changes=new vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Sa(r.mutation,i,Sn.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=Ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ra();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ur();const o=Ta(),a=function(){return Ta()}();return n.forEach((c,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Xi)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Sa(d.mutation,u,d.mutation.getFieldMask(),rt.now())):o.set(u.key,Sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var h;return a.set(u,new yF(d,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ta();let i=new $e((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Sn.empty();d=a.applyToLocalView(u,d),r.set(c,d);const h=(i.get(a.batchId)||ue()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,d=c.value,h=IS();d.forEach(p=>{if(!s.has(p)){const g=MS(n.get(p),r.get(p));g!==null&&h.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Ai());let a=-1,c=s;return o.next(u=>U.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{c=c.insert(d,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ue())).next(d=>({batchId:a,changes:CS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=ra();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ra();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,c=>{const u=function(h,p){return new yo(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,At.newInvalidDocument(d)))});let a=ra();return o.forEach((c,u)=>{const d=s.get(c);d!==void 0&&Sa(d.mutation,u,Sn.empty(),rt.now()),Id(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:zn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:fF(i.bundledQuery),readTime:zn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{constructor(){this.overlays=new $e(ne.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ai();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Ai(),s=n.length+1,o=new ne(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=Ai(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Ai(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new U8(n,r));let s=this.Ir.get(n);s===void 0&&(s=ue(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.Tr=new mt(it.Er),this.dr=new mt(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new it(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ne(new De([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ne(new De([])),r=new it(n,e),i=new it(n,e+1);let s=ue();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ne.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(it.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new z8(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(we);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new it(new ne(s),0);let a=new mt(we);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new it(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(e){this.Mr=e,this.docs=function(){return new $e(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():At.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ur();const o=n.path,a=new ne(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||o8(s8(d),r)<=0||(i.has(d.key)||Id(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TF(this)}getSize(e){return U.resolve(this.size)}}class TF extends gF{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF{constructor(e){this.persistence=e,this.Nr=new vo(n=>Hg(n),Wg),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Yg,this.targetCount=0,this.kr=no.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new no(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e,n){this.qr={},this.overlays={},this.Qr=new $g(0),this.Kr=!1,this.Kr=!0,this.$r=new _F,this.referenceDelegate=e(this),this.Ur=new SF(this),this.indexManager=new pF,this.remoteDocumentCache=function(i){return new bF(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new hF(n),this.Gr=new wF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new EF(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new kF(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class kF extends l8{constructor(e){super(),this.currentSequenceNumber=e}}class Xg{constructor(e){this.persistence=e,this.Jr=new Yg,this.Yr=null}static Zr(e){return new Xg(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=ne.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bL()?8:c8(xL())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new CF;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Wo()<=pe.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Wo()<=pe.DEBUG&&Z("QueryEngine","Query:",ls(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Wo()<=pe.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bn(n))):U.resolve())}Yi(e,n){if(Jw(n))return U.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yp(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,a);return this.ns(n,u,o,c.readTime)?this.Yi(e,Yp(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,i){return Jw(n)||i.isEqual(oe.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(Wo()<=pe.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ls(n)),this.rs(e,o,n,i8(i,-1)).next(a=>a))})}ts(e,n){let r=new mt(AS(e));return n.forEach((i,s)=>{Id(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Wo()<=pe.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ls(n)),this.Ji.getDocumentsMatchingQuery(e,n,ei.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(we),this._s=new vo(s=>Hg(s),Wg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vF(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function RF(t,e,n,r){return new PF(t,e,n,r)}async function KS(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ue();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function DF(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,d){const h=u.batch,p=h.keys();let g=U.resolve();return p.forEach(_=>{g=g.next(()=>d.getEntry(c,_)).next(b=>{const k=u.docVersions.get(_);be(k!==null),b.version.compareTo(k)<0&&(h.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),d.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ue();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function QS(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function VF(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,h)=>{const p=i.get(h);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,h)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(yt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),i=i.insert(h,g),function(b,k,x){return b.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,g,d)&&a.push(n.Ur.updateTargetData(s,g))});let c=ur(),u=ue();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(NF(s,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!r.isEqual(oe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(h=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.os=i,s))}function NF(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ur();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function MF(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LF(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function tm(t,e,n){const r=ae(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vl(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function cx(t,e,n){const r=ae(t);let i=oe.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const h=ae(c),p=h._s.get(d);return p!==void 0?U.resolve(h.os.get(p)):h.Ur.getTargetData(u,d)}(r,o,Bn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:ue())).next(a=>(OF(r,k8(e),a),{documents:a,Ts:s})))}function OF(t,e,n){let r=t.us.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class ux{constructor(){this.activeTargetIds=V8()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jF{constructor(){this.so=new ux,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ux,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc=null;function uf(){return mc===null?mc=function(){return 268435456+Math.round(2147483648*Math.random())}():mc++,"0x"+mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $F={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class zF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=uf(),c=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(n,c,u,i).then(d=>(Z("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Js("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",c,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=$F[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=uf();return new Promise((o,a)=>{const c=new aS;c.setWithCredentials(!0),c.listenOnce(lS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fc.NO_ERROR:const d=c.getResponseJson();Z(bt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Fc.TIMEOUT:Z(bt,`RPC '${e}' ${s} timed out`),a(new Y(B.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const h=c.getStatus();if(Z(bt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const _=function(k){const x=k.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(x)>=0?x:B.UNKNOWN}(g.status);a(new Y(_,g.message))}else a(new Y(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new Y(B.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{Z(bt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);Z(bt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const i=uf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dS(),a=uS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=s.join("");Z(bt,`Creating RPC '${e}' stream ${i}: ${d}`,c);const h=o.createWebChannel(d,c);let p=!1,g=!1;const _=new BF({Io:k=>{g?Z(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(Z(bt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),Z(bt,`RPC '${e}' stream ${i} sending:`,k),h.send(k))},To:()=>h.close()}),b=(k,x,v)=>{k.listen(x,w=>{try{v(w)}catch(P){setTimeout(()=>{throw P},0)}})};return b(h,na.EventType.OPEN,()=>{g||(Z(bt,`RPC '${e}' stream ${i} transport opened.`),_.yo())}),b(h,na.EventType.CLOSE,()=>{g||(g=!0,Z(bt,`RPC '${e}' stream ${i} transport closed`),_.So())}),b(h,na.EventType.ERROR,k=>{g||(g=!0,Js(bt,`RPC '${e}' stream ${i} transport errored:`,k),_.So(new Y(B.UNAVAILABLE,"The operation could not be completed")))}),b(h,na.EventType.MESSAGE,k=>{var x;if(!g){const v=k.data[0];be(!!v);const w=v,P=w.error||((x=w[0])===null||x===void 0?void 0:x.error);if(P){Z(bt,`RPC '${e}' stream ${i} received error:`,P);const O=P.status;let N=function(A){const C=Ke[A];if(C!==void 0)return jS(C)}(O),T=P.message;N===void 0&&(N=B.INTERNAL,T="Unknown error status: "+O+" with message "+P.message),g=!0,_.So(new Y(N,T)),h.close()}else Z(bt,`RPC '${e}' stream ${i} received:`,v),_.bo(v)}}),b(a,cS.STAT_EVENT,k=>{k.stat===Hp.PROXY?Z(bt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Hp.NOPROXY&&Z(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function df(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){return new J8(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r,i,s,o,a,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new YS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Y(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UF extends XS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=tF(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?zn(o.readTime):oe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=em(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Kp(c)?{documents:iF(s,c)}:{query:sF(s,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=BS(s,o.resumeToken);const u=Xp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=Lu(s,o.snapshotVersion.toTimestamp());const u=Xp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=aF(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=em(this.serializer),n.removeTarget=e,this.a_(n)}}class HF extends XS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=rF(e.writeResults,e.commitTime),r=zn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=em(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nF(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Jp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(B.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Jp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(B.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(cr(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ji(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ae(c);u.L_.add(4),await _l(u),u.q_.set("Unknown"),u.L_.delete(4),await Nd(u)}(this))})}),this.q_=new qF(r,i)}}async function Nd(t){if(Ji(t))for(const e of t.B_)await e(!0)}async function _l(t){for(const e of t.B_)await e(!1)}function JS(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),n0(n)?t0(n):wo(n).r_()&&e0(n,e))}function Zg(t,e){const n=ae(t),r=wo(n);n.N_.delete(e),r.r_()&&ZS(n,e),n.N_.size===0&&(r.r_()?r.o_():Ji(n)&&n.q_.set("Unknown"))}function e0(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}wo(t).A_(e)}function ZS(t,e){t.Q_.xe(e),wo(t).R_(e)}function t0(t){t.Q_=new K8({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),wo(t).start(),t.q_.v_()}function n0(t){return Ji(t)&&!wo(t).n_()&&t.N_.size>0}function Ji(t){return ae(t).L_.size===0}function eA(t){t.Q_=void 0}async function KF(t){t.q_.set("Online")}async function QF(t){t.N_.forEach((e,n)=>{e0(t,e)})}async function YF(t,e){eA(t),n0(t)?(t.q_.M_(e),t0(t)):t.q_.set("Unknown")}async function XF(t,e,n){if(t.q_.set("Online"),e instanceof $S&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ou(t,r)}else if(e instanceof zc?t.Q_.Ke(e):e instanceof FS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(oe.min()))try{const r=await QS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.N_.get(u);d&&s.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const d=s.N_.get(c);if(!d)return;s.N_.set(c,d.withResumeToken(yt.EMPTY_BYTE_STRING,d.snapshotVersion)),ZS(s,c);const h=new Pr(d.target,c,u,d.sequenceNumber);e0(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Ou(t,r)}}async function Ou(t,e,n){if(!vl(e))throw e;t.L_.add(1),await _l(t),t.q_.set("Offline"),n||(n=()=>QS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Nd(t)})}function tA(t,e){return e().catch(n=>Ou(t,n,e))}async function Md(t){const e=ae(t),n=ni(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;JF(e);)try{const i=await MF(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ZF(e,i)}catch(i){await Ou(e,i)}nA(e)&&rA(e)}function JF(t){return Ji(t)&&t.O_.length<10}function ZF(t,e){t.O_.push(e);const n=ni(t);n.r_()&&n.V_&&n.m_(e.mutations)}function nA(t){return Ji(t)&&!ni(t).n_()&&t.O_.length>0}function rA(t){ni(t).start()}async function e$(t){ni(t).p_()}async function t$(t){const e=ni(t);for(const n of t.O_)e.m_(n.mutations)}async function n$(t,e,n){const r=t.O_.shift(),i=Gg.from(r,e,n);await tA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Md(t)}async function r$(t,e){e&&ni(t).V_&&await async function(r,i){if(function(o){return W8(o)&&o!==B.ABORTED}(i.code)){const s=r.O_.shift();ni(r).s_(),await tA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Md(r)}}(t,e),nA(t)&&rA(t)}async function hx(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Ji(n);n.L_.add(3),await _l(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Nd(n)}async function i$(t,e){const n=ae(t);e?(n.L_.delete(2),await Nd(n)):e||(n.L_.add(2),await _l(n),n.q_.set("Unknown"))}function wo(t){return t.K_||(t.K_=function(n,r,i){const s=ae(n);return s.w_(),new UF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:KF.bind(null,t),Ro:QF.bind(null,t),mo:YF.bind(null,t),d_:XF.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),n0(t)?t0(t):t.q_.set("Unknown")):(await t.K_.stop(),eA(t))})),t.K_}function ni(t){return t.U_||(t.U_=function(n,r,i){const s=ae(n);return s.w_(),new HF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:e$.bind(null,t),mo:r$.bind(null,t),f_:t$.bind(null,t),g_:n$.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Md(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new r0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function i0(t,e){if(cr("AsyncQueue",`${e}: ${t}`),vl(t))return new Y(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=ra(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this.W_=new $e(ne.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ie():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ro{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ro(e,n,Ms.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class o${constructor(){this.queries=px(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=px(),s.forEach((o,a)=>{for(const c of a.j_)c.onError(r)})})(this,new Y(B.ABORTED,"Firestore shutting down"))}}function px(){return new vo(t=>SS(t),Cd)}async function a$(t,e){const n=ae(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new s$,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=i0(o,`Initialization of query '${ls(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&s0(n)}async function l$(t,e){const n=ae(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function c$(t,e){const n=ae(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&s0(n)}function u$(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function s0(t){t.Y_.forEach(e=>{e.next()})}var nm,mx;(mx=nm||(nm={})).ea="default",mx.Cache="cache";class d${constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.key=e}}class sA{constructor(e){this.key=e}}class h${constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=AS(e),this.Ra=new Ms(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new fx,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,h)=>{const p=i.get(d),g=Id(this.query,h)?h:null,_=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;p&&g?p.data.isEqual(g.data)?_!==b&&(r.track({type:3,doc:g}),k=!0):this.ga(p,g)||(r.track({type:2,doc:g}),k=!0,(c&&this.Aa(g,c)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),k=!0):p&&!g&&(r.track({type:1,doc:p}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),s=b?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,h)=>function(g,_){const b=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return b(g)-b(_)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new ro(this.query,e.Ra,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new fx,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new sA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new iA(r))}),n}ba(e){this.Ta=e.Ts,this.da=ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ro.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class f${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class p${constructor(e){this.key=e,this.va=!1}}class m${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new vo(a=>SS(a),Cd),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(ne.comparator),this.Na=new Map,this.La=new Yg,this.Ba={},this.ka=new Map,this.qa=no.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function g$(t,e,n=!0){const r=dA(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await oA(r,e,n,!0),i}async function y$(t,e){const n=dA(t);await oA(n,e,!0,!1)}async function oA(t,e,n,r){const i=await LF(t.localStore,Bn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await v$(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&JS(t.remoteStore,i),a}async function v$(t,e,n,r,i){t.Ka=(h,p,g)=>async function(b,k,x,v){let w=k.view.ma(x);w.ns&&(w=await cx(b.localStore,k.query,!1).then(({documents:T})=>k.view.ma(T,w)));const P=v&&v.targetChanges.get(k.targetId),O=v&&v.targetMismatches.get(k.targetId)!=null,N=k.view.applyChanges(w,b.isPrimaryClient,P,O);return yx(b,k.targetId,N.wa),N.snapshot}(t,h,p,g);const s=await cx(t.localStore,e,!0),o=new h$(e,s.Ts),a=o.ma(s.documents),c=xl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);yx(t,n,u.wa);const d=new f$(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function w$(t,e,n){const r=ae(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Cd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await tm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zg(r.remoteStore,i.targetId),rm(r,i.targetId)}).catch(yl)):(rm(r,i.targetId),await tm(r.localStore,i.targetId,!0))}async function x$(t,e){const n=ae(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zg(n.remoteStore,r.targetId))}async function _$(t,e,n){const r=C$(t);try{const i=await function(o,a){const c=ae(o),u=rt.now(),d=a.reduce((g,_)=>g.add(_.key),ue());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=ur(),b=ue();return c.cs.getEntries(g,d).next(k=>{_=k,_.forEach((x,v)=>{v.isValidDocument()||(b=b.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,_)).next(k=>{h=k;const x=[];for(const v of a){const w=$8(v,h.get(v.key).overlayedDocument);w!=null&&x.push(new Xi(v.key,w,gS(w.value.mapValue),tr.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,x,a)}).next(k=>{p=k;const x=k.applyToLocalDocumentSet(h,b);return c.documentOverlayCache.saveOverlays(g,k.batchId,x)})}).then(()=>({batchId:p.batchId,changes:CS(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new $e(we)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(r,i.batchId,n),await El(r,i.changes),await Md(r.remoteStore)}catch(i){const s=i0(i,"Failed to persist write");n.reject(s)}}async function aA(t,e){const n=ae(t);try{const r=await VF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?be(o.va):i.removedDocuments.size>0&&(be(o.va),o.va=!1))}),await El(n,r,e)}catch(r){await yl(r)}}function gx(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let u=!1;c.queries.forEach((d,h)=>{for(const p of h.j_)p.Z_(a)&&(u=!0)}),u&&s0(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function E$(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new $e(ne.comparator);o=o.insert(s,At.newNoDocument(s,oe.min()));const a=ue().add(s),c=new Dd(oe.min(),new Map,new $e(we),o,a);await aA(r,c),r.Oa=r.Oa.remove(s),r.Na.delete(e),o0(r)}else await tm(r.localStore,e,!1).then(()=>rm(r,e,n)).catch(yl)}async function b$(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await DF(n.localStore,e);cA(n,r,null),lA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await El(n,i)}catch(i){await yl(i)}}async function T$(t,e,n){const r=ae(t);try{const i=await function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(be(h!==null),d=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);cA(r,e,n),lA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await El(r,i)}catch(i){await yl(i)}}function lA(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function cA(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function rm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||uA(t,r)})}function uA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Zg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),o0(t))}function yx(t,e,n){for(const r of n)r instanceof iA?(t.La.addReference(r.key,e),S$(t,r)):r instanceof sA?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||uA(t,r.key)):ie()}function S$(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),o0(t))}function o0(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ne(De.fromString(e)),r=t.qa.next();t.Na.set(r,new p$(n)),t.Oa=t.Oa.insert(n,r),JS(t.remoteStore,new Pr(Bn(bS(n.path)),r,"TargetPurposeLimboResolution",$g.oe))}}async function El(t,e,n){const r=ae(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,c)=>{o.push(r.Ka(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const h=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){i.push(u);const h=Jg.Wi(c.targetId,u);s.push(h)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(c,u){const d=ae(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>U.forEach(u,p=>U.forEach(p.$i,g=>d.persistence.referenceDelegate.addReference(h,p.targetId,g)).next(()=>U.forEach(p.Ui,g=>d.persistence.referenceDelegate.removeReference(h,p.targetId,g)))))}catch(h){if(!vl(h))throw h;Z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const g=d.os.get(p),_=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(_);d.os=d.os.insert(p,b)}}}(r.localStore,s))}async function A$(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await KS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(c=>{c.reject(new Y(B.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await El(n,r.hs)}}function k$(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return ue().add(r.key);{let i=ue();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function dA(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=k$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E$.bind(null,e),e.Ca.d_=c$.bind(null,e.eventManager),e.Ca.$a=u$.bind(null,e.eventManager),e}function C$(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=b$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T$.bind(null,e),e}class ju{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return RF(this.persistence,new IF,e.initialUser,this.serializer)}Ga(e){return new AF(Xg.Zr,this.serializer)}Wa(e){return new jF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ju.provider={build:()=>new ju};class im{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gx(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=A$.bind(null,this.syncEngine),await i$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new o$}()}createDatastore(e){const n=Vd(e.databaseInfo.databaseId),r=function(s){return new zF(s)}(e.databaseInfo);return function(s,o,a,c){return new WF(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new GF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>gx(this.syncEngine,n,0),function(){return dx.D()?new dx:new FF}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,d){const h=new m$(i,s,o,a,c,u);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);Z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await _l(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}im.provider={build:()=>new im};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I${constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P${constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=fS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=i0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hf(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await KS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await R$(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hx(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hx(e.remoteStore,i)),t._onlineComponents=e}async function R$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await hf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===B.FAILED_PRECONDITION||i.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await hf(t,new ju)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await hf(t,new ju);return t._offlineComponents}async function hA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await vx(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await vx(t,new im))),t._onlineComponents}function D$(t){return hA(t).then(e=>e.syncEngine)}async function V$(t){const e=await hA(t),n=e.eventManager;return n.onListen=g$.bind(null,e.syncEngine),n.onUnlisten=w$.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=y$.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=x$.bind(null,e.syncEngine),n}function N$(t,e,n={}){const r=new Gr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const d=new I$({next:p=>{d.Za(),o.enqueueAndForget(()=>l$(s,h)),p.fromCache&&c.source==="server"?u.reject(new Y(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new d$(a,d,{includeMetadataChanges:!0,_a:!0});return a$(s,h)}(await V$(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t,e,n){if(!n)throw new Y(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function M$(t,e,n,r){if(e===!0&&r===!0)throw new Y(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xx(t){if(!ne.isDocumentKey(t))throw new Y(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _x(t){if(ne.isDocumentKey(t))throw new Y(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ld(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Fu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ld(t);throw new Y(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}M$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Od{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ex({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ex(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Qj;switch(r.type){case"firstParty":return new Zj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wx.get(n);r&&(Z("ComponentProvider","Removing Datastore"),wx.delete(n),r.terminate())}(this),Promise.resolve()}}function L$(t,e,n,r={}){var i;const s=(t=Fu(t,Od))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Tt.MOCK_USER;else{a=VT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Y(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Tt(u)}t._authCredentials=new Yj(new hS(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zi(this.firestore,e,this._query)}}class fn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class Kr extends Zi{constructor(e,n,r){super(e,n,bS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new ne(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function bx(t,e,...n){if(t=yn(t),pA("collection","path",e),t instanceof Od){const r=De.fromString(e,...n);return _x(r),new Kr(t,null,r)}{if(!(t instanceof fn||t instanceof Kr))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return _x(r),new Kr(t.firestore,null,r)}}function O$(t,e,...n){if(t=yn(t),arguments.length===1&&(e=fS.newId()),pA("doc","path",e),t instanceof Od){const r=De.fromString(e,...n);return xx(r),new fn(t,null,new ne(r))}{if(!(t instanceof fn||t instanceof Kr))throw new Y(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return xx(r),new fn(t.firestore,t instanceof Kr?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new YS(this,"async_queue_retry"),this.Vu=()=>{const r=df();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=df();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=df();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Gr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!vl(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=r0.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ie()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class a0 extends Od{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Tx,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tx(e),this._firestoreClient=void 0,await e}}}function j$(t,e){const n=typeof t=="object"?t:Vg(),r=typeof t=="string"?t:e||"(default)",i=po(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=RT("firestore");s&&L$(i,...s)}return i}function mA(t){if(t._terminated)throw new Y(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||F$(t),t._firestoreClient}function F$(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,d){return new h8(a,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fA(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new P$(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new io(yt.fromBase64String(e))}catch(n){throw new Y(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new io(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $$=/^__.*__$/;class B${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new wl(e,this.data,n,this.fieldTransforms)}}function yA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class d0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new d0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return $u(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(yA(this.Cu)&&$$.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class z${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vd(e)}Qu(e,n,r,i=!1){return new d0({Cu:e,methodName:n,qu:r,path:ft.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vA(t){const e=t._freezeSettings(),n=Vd(t._databaseId);return new z$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function U$(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);_A("Data must be an object, but it was:",o,r);const a=wA(r,o);let c,u;if(s.merge)c=new Sn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const p=W$(e,h,n);if(!o.contains(p))throw new Y(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);G$(d,p)||d.push(p)}c=new Sn(d),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new B$(new cn(a),c,u)}function H$(t,e,n,r=!1){return h0(n,t.Qu(r?4:3,e))}function h0(t,e){if(xA(t=yn(t)))return _A("Unsupported field value:",e,t),wA(t,e);if(t instanceof gA)return function(r,i){if(!yA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=h0(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=yn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return N8(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=rt.fromDate(r);return{timestampValue:Lu(i.serializer,s)}}if(r instanceof rt){const s=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lu(i.serializer,s)}}if(r instanceof c0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof io)return{bytesValue:BS(i.serializer,r._byteString)};if(r instanceof fn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof u0)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return qg(a.serializer,c)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ld(r)}`)}(t,e)}function wA(t,e){const n={};return pS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):go(t,(r,i)=>{const s=h0(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof c0||t instanceof io||t instanceof fn||t instanceof gA||t instanceof u0)}function _A(t,e,n){if(!xA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ld(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function W$(t,e,n){if((e=yn(e))instanceof l0)return e._internalPath;if(typeof e=="string")return EA(t,e);throw $u("Field path arguments must be of type string or ",t,!1,void 0,n)}const q$=new RegExp("[~\\*/\\[\\]]");function EA(t,e,n){if(e.search(q$)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new l0(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Y(B.INVALID_ARGUMENT,a+t+c)}function G$(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new K$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(f0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class K$ extends bA{data(){return super.data()}}function f0(t,e){return typeof e=="string"?EA(t,e):e instanceof l0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q$(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class p0{}class TA extends p0{}function Y$(t,e,...n){let r=[];e instanceof p0&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof g0).length,a=s.filter(c=>c instanceof m0).length;if(o>1||o>0&&a>0)throw new Y(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class m0 extends TA{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new m0(e,n,r)}_apply(e){const n=this._parse(e);return SA(e._query,n),new Zi(e.firestore,e.converter,Qp(e._query,n))}_parse(e){const n=vA(e.firestore);return function(s,o,a,c,u,d,h){let p;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ax(h,d);const g=[];for(const _ of h)g.push(Sx(c,s,_));p={arrayValue:{values:g}}}else p=Sx(c,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ax(h,d),p=H$(a,o,h,d==="in"||d==="not-in");return Je.create(u,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class g0 extends p0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new g0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)SA(o,c),o=Qp(o,c)}(e._query,n),new Zi(e.firestore,e.converter,Qp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class y0 extends TA{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new y0(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Y(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rl(s,o)}(e._query,this._field,this._direction);return new Zi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new yo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function X$(t,e="asc"){const n=e,r=f0("orderBy",t);return y0._create(r,n)}function Sx(t,e,n){if(typeof(n=yn(n))=="string"){if(n==="")throw new Y(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!TS(e)&&n.indexOf("/")!==-1)throw new Y(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!ne.isDocumentKey(r))throw new Y(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qw(t,new ne(r))}if(n instanceof fn)return qw(t,n._key);throw new Y(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ld(n)}.`)}function Ax(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class J${convertValue(e,n="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return go(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>qe(o.doubleValue));return new u0(s)}convertGeoPoint(e){return new c0(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(el(e));default:return null}}convertTimestamp(e){const n=ti(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);be(GS(r));const i=new tl(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z$(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class e9 extends bA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(f0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Uc extends e9{data(e={}){return super.data(e)}}class t9{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new gc(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uc(this._firestore,this._userDataWriter,r.key,r,new gc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gc(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gc(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:n9(a.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function n9(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}class r9 extends J${constructor(e){super(),this.firestore=e}convertBytes(e){return new io(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,n)}}function i9(t){t=Fu(t,Zi);const e=Fu(t.firestore,a0),n=mA(e),r=new r9(e);return Q$(t._query),N$(n,t._query).then(i=>new t9(e,r,t,i))}function s9(t,e){const n=Fu(t.firestore,a0),r=O$(t),i=Z$(t.converter,e);return o9(n,[U$(vA(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,tr.exists(!1))]).then(()=>r)}function o9(t,e){return function(r,i){const s=new Gr;return r.asyncQueue.enqueueAndForget(async()=>_$(await D$(r),i,s)),s.promise}(mA(t),e)}(function(e,n=!0){(function(i){mo=i})(FT),lr(new Un("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new a0(new Xj(r.getProvider("auth-internal")),new t8(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),hn(Bw,"4.7.3",e),hn(Bw,"4.7.3","esm2017")})();var a9="firebase",l9="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(a9,l9,"app");const AA="@firebase/installations",v0="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=1e4,CA=`w:${v0}`,IA="FIS_v2",c9="https://firebaseinstallations.googleapis.com/v1",u9=60*60*1e3,d9="installations",h9="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f9={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ui=new Ad(d9,h9,f9);function PA(t){return t instanceof fr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA({projectId:t}){return`${c9}/projects/${t}/installations`}function DA(t){return{token:t.token,requestStatus:2,expiresIn:m9(t.expiresIn),creationTime:Date.now()}}async function VA(t,e){const r=(await e.json()).error;return Ui.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function NA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function p9(t,{refreshToken:e}){const n=NA(t);return n.append("Authorization",g9(e)),n}async function MA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function m9(t){return Number(t.replace("s","000"))}function g9(t){return`${IA} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y9({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=RA(t),i=NA(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:IA,appId:t.appId,sdkVersion:CA},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await MA(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:DA(u.authToken)}}else throw await VA("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v9(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w9=/^[cdef][\w-]{21}$/,sm="";function x9(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_9(t);return w9.test(n)?n:sm}catch{return sm}}function _9(t){return v9(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=new Map;function jA(t,e){const n=jd(t);FA(n,e),E9(n,e)}function FA(t,e){const n=OA.get(t);if(n)for(const r of n)r(e)}function E9(t,e){const n=b9();n&&n.postMessage({key:t,fid:e}),T9()}let ki=null;function b9(){return!ki&&"BroadcastChannel"in self&&(ki=new BroadcastChannel("[Firebase] FID Change"),ki.onmessage=t=>{FA(t.data.key,t.data.fid)}),ki}function T9(){OA.size===0&&ki&&(ki.close(),ki=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S9="firebase-installations-database",A9=1,Hi="firebase-installations-store";let ff=null;function w0(){return ff||(ff=jT(S9,A9,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hi)}}})),ff}async function Bu(t,e){const n=jd(t),i=(await w0()).transaction(Hi,"readwrite"),s=i.objectStore(Hi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&jA(t,e.fid),e}async function $A(t){const e=jd(t),r=(await w0()).transaction(Hi,"readwrite");await r.objectStore(Hi).delete(e),await r.done}async function Fd(t,e){const n=jd(t),i=(await w0()).transaction(Hi,"readwrite"),s=i.objectStore(Hi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&jA(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t){let e;const n=await Fd(t.appConfig,r=>{const i=k9(r),s=C9(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===sm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function k9(t){const e=t||{fid:x9(),registrationStatus:0};return BA(e)}function C9(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ui.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=I9(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:P9(t)}:{installationEntry:e}}async function I9(t,e){try{const n=await y9(t,e);return Bu(t.appConfig,n)}catch(n){throw PA(n)&&n.customData.serverCode===409?await $A(t.appConfig):await Bu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function P9(t){let e=await kx(t.appConfig);for(;e.registrationStatus===1;)await LA(100),e=await kx(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await x0(t);return r||n}return e}function kx(t){return Fd(t,e=>{if(!e)throw Ui.create("installation-not-found");return BA(e)})}function BA(t){return R9(t)?{fid:t.fid,registrationStatus:0}:t}function R9(t){return t.registrationStatus===1&&t.registrationTime+kA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D9({appConfig:t,heartbeatServiceProvider:e},n){const r=V9(t,n),i=p9(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:CA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await MA(()=>fetch(r,a));if(c.ok){const u=await c.json();return DA(u)}else throw await VA("Generate Auth Token",c)}function V9(t,{fid:e}){return`${RA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e=!1){let n;const r=await Fd(t.appConfig,s=>{if(!zA(s))throw Ui.create("not-registered");const o=s.authToken;if(!e&&L9(o))return s;if(o.requestStatus===1)return n=N9(t,e),s;{if(!navigator.onLine)throw Ui.create("app-offline");const a=j9(s);return n=M9(t,a),a}});return n?await n:r.authToken}async function N9(t,e){let n=await Cx(t.appConfig);for(;n.authToken.requestStatus===1;)await LA(100),n=await Cx(t.appConfig);const r=n.authToken;return r.requestStatus===0?_0(t,e):r}function Cx(t){return Fd(t,e=>{if(!zA(e))throw Ui.create("not-registered");const n=e.authToken;return F9(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function M9(t,e){try{const n=await D9(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bu(t.appConfig,r),n}catch(n){if(PA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $A(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bu(t.appConfig,r)}throw n}}function zA(t){return t!==void 0&&t.registrationStatus===2}function L9(t){return t.requestStatus===2&&!O9(t)}function O9(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+u9}function j9(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function F9(t){return t.requestStatus===1&&t.requestTime+kA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $9(t){const e=t,{installationEntry:n,registrationPromise:r}=await x0(e);return r?r.catch(console.error):_0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B9(t,e=!1){const n=t;return await z9(n),(await _0(n,e)).token}async function z9(t){const{registrationPromise:e}=await x0(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U9(t){if(!t||!t.options)throw pf("App Configuration");if(!t.name)throw pf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw pf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function pf(t){return Ui.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="installations",H9="installations-internal",W9=t=>{const e=t.getProvider("app").getImmediate(),n=U9(e),r=po(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},q9=t=>{const e=t.getProvider("app").getImmediate(),n=po(e,UA).getImmediate();return{getId:()=>$9(n),getToken:i=>B9(n,i)}};function G9(){lr(new Un(UA,W9,"PUBLIC")),lr(new Un(H9,q9,"PRIVATE"))}G9();hn(AA,v0);hn(AA,v0,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="analytics",K9="firebase_id",Q9="origin",Y9=60*1e3,X9="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",E0="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Rg("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J9={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Zt=new Ad("analytics","Analytics",J9);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z9(t){if(!t.startsWith(E0)){const e=Zt.create("invalid-gtag-resource",{gtagURL:t});return Ut.warn(e.message),""}return t}function HA(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function e7(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function t7(t,e){const n=e7("firebase-js-sdk-policy",{createScriptURL:Z9}),r=document.createElement("script"),i=`${E0}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function n7(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function r7(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await HA(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){Ut.error(a)}t("config",i,s)}async function i7(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await HA(n);for(const c of o){const u=a.find(h=>h.measurementId===c),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ut.error(s)}}function s7(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await i7(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await r7(t,e,n,r,a,c)}else if(s==="consent"){const[a,c]=o;t("consent",a,c)}else if(s==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ut.error(a)}}return i}function o7(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=s7(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function a7(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(E0)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l7=30,c7=1e3;class u7{constructor(e={},n=c7){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const WA=new u7;function d7(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function h7(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:d7(r)},s=X9.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function f7(t,e=WA,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new g7;return setTimeout(async()=>{a.abort()},n!==void 0?n:Y9),qA({appId:r,apiKey:i,measurementId:s},o,a,e)}async function qA(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=WA){var s;const{appId:o,measurementId:a}=t;try{await p7(r,e)}catch(c){if(a)return Ut.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await h7(t);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!m7(u)){if(i.deleteThrottleMetadata(o),a)return Ut.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?bw(n,i.intervalMillis,l7):bw(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,h),Ut.debug(`Calling attemptFetch again in ${d} millis`),qA(t,h,r,i)}}function p7(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function m7(t){if(!(t instanceof fr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class g7{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function y7(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v7(){if(NT())try{await MT()}catch(t){return Ut.warn(Zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ut.warn(Zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function w7(t,e,n,r,i,s,o){var a;const c=f7(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ut.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ut.error(g)),e.push(c);const u=v7().then(g=>{if(g)return r.getId()}),[d,h]=await Promise.all([c,u]);a7(s)||t7(s,d.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Q9]="firebase",p.update=!0,h!=null&&(p[K9]=h),i("config",d.measurementId,p),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x7{constructor(e){this.app=e}_delete(){return delete Aa[this.app.options.appId],Promise.resolve()}}let Aa={},Ix=[];const Px={};let mf="dataLayer",_7="gtag",Rx,GA,Dx=!1;function E7(){const t=[];if(EL()&&t.push("This is a browser extension environment."),TL()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Zt.create("invalid-analytics-context",{errorInfo:e});Ut.warn(n.message)}}function b7(t,e,n){E7();const r=t.options.appId;if(!r)throw Zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ut.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Zt.create("no-api-key");if(Aa[r]!=null)throw Zt.create("already-exists",{id:r});if(!Dx){n7(mf);const{wrappedGtag:s,gtagCore:o}=o7(Aa,Ix,Px,mf,_7);GA=s,Rx=o,Dx=!0}return Aa[r]=w7(t,Ix,Px,e,Rx,mf,n),new x7(t)}function T7(t=Vg()){t=yn(t);const e=po(t,zu);return e.isInitialized()?e.getImmediate():S7(t)}function S7(t,e={}){const n=po(t,zu);if(n.isInitialized()){const i=n.getImmediate();if(Pu(e,n.getOptions()))return i;throw Zt.create("already-initialized")}return n.initialize({options:e})}function A7(t,e,n,r){t=yn(t),y7(GA,Aa[t.app.options.appId],e,n,r).catch(i=>Ut.error(i))}const Vx="@firebase/analytics",Nx="0.10.8";function k7(){lr(new Un(zu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return b7(r,i,n)},"PUBLIC")),lr(new Un("analytics-internal",t,"PRIVATE")),hn(Vx,Nx),hn(Vx,Nx,"esm2017");function t(e){try{const n=e.getProvider(zu).getImmediate();return{logEvent:(r,i,s)=>A7(n,r,i,s)}}catch(n){throw Zt.create("interop-component-reg-failed",{reason:n})}}}k7();const C7={apiKey:"AIzaSyAvys9saTxFWK9-G0yN4sdW5ZRf5UJJPVo",authDomain:"dreamingpolar.firebaseapp.com",projectId:"dreamingpolar",storageBucket:"dreamingpolar.appspot.com",messagingSenderId:"235267613970",appId:"1:235267613970:web:b8fe47a27df8f844b03fcb",measurementId:"G-KMPK5YFBR1"},b0=$T(C7);T7(b0);const Mx=Wj(b0),Lx=j$(b0);class ka{static getGenreColor(e){return Op[e]||"#333333"}static async uploadAudioFile(e){try{const r=`${Date.now()}_${e.name.replace(/\s+/g,"_")}`,i=Fw(Mx,`audio/${r}`),s=await Ow(i,e);return await jw(s.ref)}catch(n){throw console.error("Error uploading audio file:",n),new Error("Failed to upload audio file")}}static async uploadCoverArt(e){try{const r=`${Date.now()}_${e.name.replace(/\s+/g,"_")}`,i=Fw(Mx,`covers/${r}`),s=await Ow(i,e);return await jw(s.ref)}catch(n){throw console.error("Error uploading cover art:",n),new Error("Failed to upload cover art")}}static async saveTrack(e){try{await s9(bx(Lx,"communityTracks"),e)}catch(n){throw console.error("Error saving track:",n),new Error("Failed to save track metadata")}}static async getAllTracks(){try{const e=Y$(bx(Lx,"communityTracks"),X$("uploadDate","desc")),n=await i9(e),r=[];return n.forEach(i=>{const s=i.data();r.push(s)}),r}catch(e){return console.error("Error getting tracks:",e),[]}}static convertToTrack(e){return{id:e.id,title:e.title,artist:e.artist,album:e.album,genre:e.genre,coverArt:e.coverArt,audioSrc:e.audioSrc,duration:e.duration,color:e.color||ka.getGenreColor(e.genre)}}}const I7=()=>{const t=Date.now().toString(36),e=Math.random().toString(36).substring(2,8);return`${t}-${e}`},Ox={chopin:"/assets/covers/artists/chopin.jpg",chopin_etudes:"/assets/covers/artists/chopin_etudes.jpg",bach:"/assets/covers/artists/bach.jpg",queen:"/assets/covers/artists/queen.jpg",bonJovi:"/assets/covers/artists/bon_jovi.jpg",rema:"/assets/covers/artists/rema.jpg",rosalia:"/assets/covers/artists/rosalia.jpg",eminem:"/assets/covers/artists/eminem.jpg",liebestraume:"/assets/covers/artists/liebestraume.jpg",rema_calm_down:"/assets/covers/artists/rema_calm_down.jpg",memory_reboot:"/assets/covers/artists/memory_reboot.jpg"},jx={classical_collection:"/assets/covers/albums/classical_collection.jpg",rock_anthology:"/assets/covers/albums/rock_anthology.jpg",pop_hits:"/assets/covers/albums/pop_hits.jpg",electronic_beats:"/assets/covers/albums/electronic_beats.jpg",jazz_classics:"/assets/covers/albums/jazz_classics.jpg",ambient_sounds:"/assets/covers/albums/ambient_sounds.jpg",film_scores:"/assets/covers/albums/film_scores.jpg",hiphop_beats:"/assets/covers/albums/hiphop_beats.jpg"},Fx={classical:"/assets/covers/genres/classical.jpg",rock:"/assets/covers/genres/rock.jpg",pop:"/assets/covers/genres/pop.jpg",electronic:"/assets/covers/genres/electronic.jpg",jazz:"/assets/covers/genres/jazz.jpg",ambient:"/assets/covers/genres/ambient.jpg",soundtrack:"/assets/covers/genres/soundtrack.jpg",hiphop:"/assets/covers/genres/hiphop.jpg"},P7={}.VITE_ADMIN_PASSWORD||"MR1299llj",R7=IE`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`,D7=V(se.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.primary)||"#1a1a1a"}};
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#ffffff"}};
`,V7=V.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid
    ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#333"}};
`,N7=V.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
`,M7=V.button`
  background: none;
  border: none;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#aaaaaa"}};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.hover)||"rgba(255,255,255,0.1)"}};
  }
`,L7=V.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,gf=V.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
`,O7=V.section`
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.secondary)||"#222"}};
  padding: 1.5rem;
  border-radius: 0.5rem;
`,j7=V.section`
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.secondary)||"#222"}};
  padding: 1.5rem;
  border-radius: 0.5rem;
`,F7=V.section`
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.secondary)||"#222"}};
  padding: 1.5rem;
  border-radius: 0.5rem;
`,$7=V.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({theme:t})=>{var e;return((e=t.accent)==null?void 0:e.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: ${({theme:t})=>{var e;return((e=t.accent)==null?void 0:e.secondary)||"#3a5ce7"}};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,B7=V.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  max-height: 300px;
  overflow-y: auto;
`,z7=V.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${({theme:t,$active:e})=>{var n;return e?((n=t.background)==null?void 0:n.hover)||"rgba(255,255,255,0.1)":"rgba(255, 255, 255, 0.05)"}};
  border-radius: 0.25rem;
`,U7=V.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,H7=V.span`
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#aaaaaa"}};
  font-size: 0.875rem;
`,fi=V.div`
  margin-bottom: 1rem;
`,os=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#aaaaaa"}};
`,qo=V.input`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#333"}};
  border: 1px solid ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#444"}};
  border-radius: 0.25rem;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#ffffff"}};

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>{var e;return((e=t.accent)==null?void 0:e.primary)||"#4a6cf7"}};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,W7=V.select`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#333"}};
  border: 1px solid ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#444"}};
  border-radius: 0.25rem;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#ffffff"}};

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>{var e;return((e=t.accent)==null?void 0:e.primary)||"#4a6cf7"}};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,q7=V.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`,G7=V.input`
  cursor: pointer;
`,K7=V.div`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#333"}};
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,$x=V.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Q7=V.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.secondary)||"#aaaaaa"}};
`,Y7=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,X7=V.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#333"}};
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#ffffff"}};
  border: 1px solid ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#444"}};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.hover)||"rgba(255,255,255,0.1)"}};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,J7=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.5rem;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 0.5rem;
`,Z7=V.div`
  cursor: pointer;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 2px solid
    ${({theme:t,$selected:e})=>{var n;return e?((n=t.accent)==null?void 0:n.primary)||"#4a6cf7":"transparent"}};

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
  }

  span {
    display: block;
    font-size: 0.75rem;
    padding: 0.25rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.hover)||"rgba(255,255,255,0.1)"}};
  }

  &:focus {
    outline: 2px solid ${({theme:t})=>{var e;return((e=t.accent)==null?void 0:e.primary)||"#4a6cf7"}};
    outline-offset: 2px;
  }
`,eB=V.div`
  padding: 1.2rem;
  border-top: 1px solid ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#333"}};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,tB=V.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  background-color: ${({theme:t})=>{var e;return((e=t.accent)==null?void 0:e.primary)||"#4a6cf7"}};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    background-color: ${({theme:t})=>{var e;return((e=t.accent)==null?void 0:e.secondary)||"#3a5ce7"}};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,nB=V.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({theme:t})=>{var e;return((e=t.alert)==null?void 0:e.success)||"#10b981"}};
  background-color: ${({theme:t})=>{var e;return((e=t.alert)==null?void 0:e.successBg)||"rgba(16, 185, 129, 0.1)"}};
  padding: 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
`,rB=V.button`
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#333"}};
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#ffffff"}};
  border: 1px solid ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#444"}};
  padding: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.hover)||"rgba(255,255,255,0.1)"}};
  }
`;V.section`
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.secondary)||"#222"}};
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
`;V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;V.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#333"}};
  border-radius: 0.25rem;
`;V.div`
  display: flex;
  gap: 0.5rem;
`;V.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.hover)||"rgba(255,255,255,0.1)"}};
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#ffffff"}};
  cursor: pointer;

  &:hover {
    background-color: ${({theme:t})=>{var e;return((e=t.background)==null?void 0:e.tertiary)||"#444"}};
  }
`;const iB=V.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({theme:t})=>{var e;return((e=t.alert)==null?void 0:e.error)||"#ef4444"}};
  background-color: ${({theme:t})=>{var e;return((e=t.alert)==null?void 0:e.errorBg)||"rgba(239, 68, 68, 0.1)"}};
  padding: 0.75rem;
  border-radius: 0.25rem;
  text-align: center;
`,sB=V.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${({$progress:t})=>`${t}%`};
  background-color: rgba(255, 255, 255, 0.2);
  transition: width 0.3s ease;
`,oB=V.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${({theme:t})=>{var e;return(e=t.background)==null?void 0:e.primary}};
  padding: 2rem;
`,aB=V.form`
  background: ${({theme:t})=>{var e,n;return`linear-gradient(
    145deg,
    ${((e=t.background)==null?void 0:e.secondary)||"#2a2a2a"},
    ${((n=t.background)==null?void 0:n.tertiary)||"#333333"}
  )`}};
  padding: 2.5rem;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid
    ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.subtle)||"rgba(255, 255, 255, 0.05)"}};
`,lB=V.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${({theme:t})=>{var e;return(e=t.text)==null?void 0:e.primary}};
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  font-weight: 600;

  svg {
    color: ${({theme:t})=>{var e;return(e=t.accent)==null?void 0:e.primary}};
  }
`,cB=V.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
`,KA=V.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: ${({theme:t})=>{var e,n;return`linear-gradient(
    135deg,
    ${((e=t.accent)==null?void 0:e.primary)||"#4a6cf7"},
    ${((n=t.accent)==null?void 0:n.secondary)||"#3a5ce7"}
  )`}};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,uB=V(KA)`
  background: ${({theme:t})=>{var e,n;return`linear-gradient(
    135deg,
    ${((e=t.background)==null?void 0:e.tertiary)||"#333"},
    ${((n=t.background)==null?void 0:n.secondary)||"#2a2a2a"}
  )`}};
  border: 1px solid
    ${({theme:t})=>{var e;return((e=t.border)==null?void 0:e.subtle)||"rgba(255, 255, 255, 0.1)"}};
`,dB=V.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({theme:t})=>t.error||"#ef4444"};
  background: ${({theme:t})=>{var e;return((e=t.alert)==null?void 0:e.errorBg)||"rgba(239, 68, 68, 0.1)"}};
  padding: 0.75rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 0.875rem;
`,hB=()=>{const t=bT(),[e,n]=I.useState(!1),[r,i]=I.useState({files:[],currentFileIndex:0,uploading:!1,progress:0,success:!1,error:null}),[s,o]=I.useState({title:"",artist:"",album:"",genre:"pop",isOriginal:!1}),[a,c]=I.useState(""),[u,d]=I.useState(""),[h,p]=I.useState(null),[g,_]=I.useState(""),[b,k]=I.useState(""),[x,v]=I.useState(""),w=I.useRef(null),P=I.useRef(null),O=I.useCallback(()=>{a===P7?(n(!0),d("")):(d("Invalid admin password"),c(""))},[a]);return e?y.jsxs(y.Fragment,{children:[y.jsx(R7,{}),y.jsxs(D7,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[y.jsxs(V7,{children:[y.jsx(N7,{children:"Upload to Community"}),y.jsx(M7,{onClick:()=>t("/explorer"),"aria-label":"Close upload page",children:y.jsx(_w,{size:24})})]}),y.jsxs(L7,{children:[y.jsxs(O7,{children:[y.jsx(gf,{children:"Select Audio Files"}),y.jsxs($7,{onClick:()=>{var N;return(N=w.current)==null?void 0:N.click()},disabled:r.uploading,"aria-label":"Select music files to upload",children:[y.jsx(Cu,{size:20,"aria-hidden":"true"}),"Select Music Files"]}),y.jsx("input",{type:"file",ref:w,onChange:N=>{if(N.target.files&&N.target.files.length>0){const T=Array.from(N.target.files);i({...r,files:T,currentFileIndex:0,error:null})}},accept:"audio/*",multiple:!0,style:{display:"none"},"aria-label":"File input for audio files"}),r.files.length>0&&y.jsx(B7,{"aria-label":"Selected files list",children:r.files.map((N,T)=>y.jsxs(z7,{$active:T===r.currentFileIndex,children:[y.jsx(Cu,{size:16,"aria-hidden":"true"}),y.jsx(U7,{children:N.name}),y.jsxs(H7,{children:[(N.size/(1024*1024)).toFixed(2)," MB"]})]},T))})]}),y.jsxs(j7,{children:[y.jsx(gf,{children:"Track Information"}),y.jsxs(fi,{children:[y.jsx(os,{htmlFor:"title",children:"Title*"}),y.jsx(qo,{id:"title",name:"title",value:s.title,onChange:N=>o({...s,title:N.target.value}),placeholder:"Track title",disabled:r.uploading,required:!0,"aria-required":"true"})]}),y.jsxs(fi,{children:[y.jsx(os,{htmlFor:"artist",children:"Artist*"}),y.jsx(qo,{id:"artist",name:"artist",value:s.artist,onChange:N=>o({...s,artist:N.target.value}),placeholder:"Artist name",disabled:r.uploading,required:!0,"aria-required":"true"})]}),y.jsxs(fi,{children:[y.jsx(os,{htmlFor:"album",children:"Album"}),y.jsx(qo,{id:"album",name:"album",value:s.album,onChange:N=>o({...s,album:N.target.value}),placeholder:"Album name",disabled:r.uploading})]}),y.jsxs(fi,{children:[y.jsx(os,{htmlFor:"genre",id:"genre-label",children:"Genre"}),y.jsxs(W7,{id:"genre",name:"genre",value:s.genre,onChange:N=>o({...s,genre:N.target.value}),disabled:r.uploading,"aria-labelledby":"genre-label","aria-label":"Select music genre",title:"Music genre selection",children:[y.jsx("option",{value:"pop",children:"Pop"}),y.jsx("option",{value:"rock",children:"Rock"}),y.jsx("option",{value:"classical",children:"Classical"}),y.jsx("option",{value:"electronic",children:"Electronic"}),y.jsx("option",{value:"hiphop",children:"Hip Hop"}),y.jsx("option",{value:"jazz",children:"Jazz"}),y.jsx("option",{value:"blues",children:"Blues"}),y.jsx("option",{value:"country",children:"Country"}),y.jsx("option",{value:"folk",children:"Folk"}),y.jsx("option",{value:"ambient",children:"Ambient"})]})]}),y.jsx(fi,{children:y.jsxs(q7,{htmlFor:"isOriginal",children:[y.jsx(G7,{id:"isOriginal",type:"checkbox",name:"isOriginal",checked:s.isOriginal,onChange:N=>o({...s,isOriginal:N.target.checked}),disabled:r.uploading,"aria-label":"Mark as original content"}),y.jsx("span",{children:"This is my original content"})]})})]}),y.jsxs(F7,{children:[y.jsx(gf,{children:"Cover Art"}),y.jsx(K7,{children:g?y.jsx($x,{src:g,alt:"Cover Art Preview"}):x?y.jsx($x,{src:x,alt:"Selected Cover Art"}):y.jsxs(Q7,{children:[y.jsx(aL,{size:48,"aria-hidden":"true"}),y.jsx("span",{className:"sr-only",children:"No cover art selected"})]})}),y.jsxs(Y7,{children:[y.jsxs(X7,{onClick:()=>{var N;return(N=P.current)==null?void 0:N.click()},disabled:r.uploading,"aria-label":"Upload cover art",children:[y.jsx(xw,{size:16,"aria-hidden":"true"}),"Upload Cover"]}),y.jsx("input",{type:"file",ref:P,onChange:N=>{if(N.target.files&&N.target.files.length>0){const T=N.target.files[0];p(T);const E=new FileReader;E.onload=A=>{var D;const C=(D=A.target)==null?void 0:D.result;C&&typeof C=="string"&&(_(C),v(""))},E.readAsDataURL(T)}},accept:"image/*",style:{display:"none"},"aria-label":"File input for cover art"}),y.jsxs(fi,{children:[y.jsx(os,{htmlFor:"coverSearch",children:"Or search existing covers:"}),y.jsx(qo,{id:"coverSearch",value:b,onChange:N=>k(N.target.value),placeholder:"Search by artist or album",disabled:r.uploading,"aria-label":"Search existing cover art"})]}),b&&y.jsxs(J7,{"aria-label":"Cover art search results",children:[Object.entries({...Fx,...jx,...Ox}).filter(([N])=>N.toLowerCase().includes(b.toLowerCase())).map(([N,T])=>y.jsxs(Z7,{onClick:()=>{v(T),_(""),p(null)},$selected:x===T,role:"button","aria-label":`Select ${N} cover art`,"aria-pressed":x===T,tabIndex:0,onKeyDown:E=>{(E.key==="Enter"||E.key===" ")&&(v(T),_(""),p(null),E.preventDefault())},children:[y.jsx("img",{src:T,alt:`${N} cover`}),y.jsx("span",{children:N})]},N)),Object.entries({...Fx,...jx,...Ox}).filter(([N])=>N.toLowerCase().includes(b.toLowerCase())).length===0&&y.jsx("p",{children:"No covers found. Try a different search term."})]})]})]})]}),y.jsxs(eB,{children:[r.error&&y.jsx(iB,{role:"alert",children:r.error}),r.success?y.jsxs(nB,{role:"status",children:[y.jsx(rL,{size:20,"aria-hidden":"true"}),"Upload complete! Your tracks have been added to the community library."]}):y.jsx(tB,{onClick:async()=>{if(r.files.length===0){i({...r,error:"Please select at least one audio file"});return}if(!s.title||!s.artist){i({...r,error:"Title and artist are required"});return}if(!g&&!x){i({...r,error:"Please select or upload cover art"});return}i({...r,uploading:!0,progress:0,error:null});try{const N=r.files[r.currentFileIndex],T=await ka.uploadAudioFile(N);let E=x;h&&!x&&(E=await ka.uploadCoverArt(h));const A={id:`community-${I7()}`,title:s.title||N.name.replace(/\.[^/.]+$/,""),artist:s.artist||"Unknown Artist",album:s.album||"Community Uploads",genre:s.genre||"pop",coverArt:E,audioSrc:T,duration:0,color:Op[s.genre]||Op.pop,uploadedBy:"Current User",uploadDate:new Date().toISOString(),isOriginal:s.isOriginal||!1};ka.saveTrack(A);const C=r.currentFileIndex+1;C<r.files.length?i({...r,currentFileIndex:C,progress:C/r.files.length*100}):i({...r,uploading:!1,success:!0,progress:100})}catch(N){console.error("Upload failed:",N),i({...r,uploading:!1,error:"Upload failed. Please try again."})}},disabled:r.uploading||r.files.length===0,"aria-label":"Upload tracks to community",children:r.uploading?y.jsxs(y.Fragment,{children:[y.jsx(sB,{$progress:r.progress,"aria-hidden":"true"}),y.jsxs("span",{children:["Uploading... ",Math.round(r.progress),"%"]})]}):y.jsxs(y.Fragment,{children:[y.jsx(xw,{size:20,"aria-hidden":"true"}),"Upload to Community"]})}),r.success&&y.jsx(rB,{onClick:()=>t("/explorer"),"aria-label":"Go back to music explorer",children:"Go to Music Explorer"})]})]})]}):y.jsx(oB,{children:y.jsxs(aB,{onSubmit:N=>{N.preventDefault(),O()},children:[y.jsxs(lB,{children:[y.jsx(kT,{})," Admin Access"]}),y.jsxs(fi,{children:[y.jsx(os,{htmlFor:"adminPass",children:"Password"}),y.jsx(qo,{id:"adminPass",type:"password",value:a,onChange:N=>c(N.target.value),placeholder:"Enter admin password",autoComplete:"current-password","aria-label":"Admin password input"})]}),u&&y.jsxs(dB,{children:[y.jsx(_w,{}),u]}),y.jsxs(cB,{children:[y.jsxs(KA,{type:"submit",children:[y.jsx(cL,{})," Login"]}),y.jsx(uB,{type:"button",onClick:()=>t("/explorer"),children:"Back"})]})]})})},fB=()=>{const t=fo();return y.jsx(pB,{children:y.jsxs(mB,{children:[y.jsx(gB,{children:y.jsx(yB,{})}),y.jsxs(vB,{children:[y.jsx(Go,{$isActive:t.pathname==="/"||t.pathname==="/explorer",children:y.jsxs(Ko,{to:"/explorer",children:[y.jsx(oL,{size:20}),y.jsx(Qo,{children:"Home"})]})}),y.jsx(Go,{$isActive:t.pathname==="/search",children:y.jsxs(Ko,{to:"/search",children:[y.jsx(CT,{size:20}),y.jsx(Qo,{children:"Search"})]})}),y.jsx(Go,{$isActive:t.pathname==="/library",children:y.jsxs(Ko,{to:"/library",children:[y.jsx(Cu,{size:20}),y.jsx(Qo,{children:"Library"})]})}),y.jsx(Go,{children:y.jsxs(Ko,{to:"/community-upload",title:"Admin Only",children:[y.jsx(kT,{size:20}),y.jsx(Qo,{children:"Admin Upload"})]})}),y.jsx(Go,{$isActive:t.pathname==="/settings",children:y.jsxs(Ko,{to:"/settings",children:[y.jsx(lL,{size:20}),y.jsx(Qo,{children:"Settings"})]})})]})]})})},pB=V.nav`
  display: flex;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0.25rem; // Reduced padding for mobile
  }
`,mB=V.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0.25rem; // Reduced padding
    gap: 0.5rem; // Reduced gap between items
  }
`,gB=V.div`
  display: flex;
  align-items: center;
  margin-right: 5px;

  @media (max-width: 768px) {
    margin-right: 2px; // Reduced margin
  }
`,yB=V.img.attrs({src:"/assets/logos/logo_5_mini.png",alt:"Dreaming Polar",loading:"eager"})`
  height: 40px;
  width: auto;
  margin-left: 0.8rem;

  @media (max-width: 768px) {
    height: 20px; // Reduced from 24px to 20px
    margin-left: 0.4rem; // Reduced margin
  }
`,vB=V.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.5rem; // Reduced gap between nav items
  }
`,Go=V.li`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({theme:t,$isActive:e})=>{var n;return e?((n=t.accent)==null?void 0:n.primary)||"#5e35b1":"transparent"}};
    transition: background-color 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;

    svg {
      width: 14px; // Reduced from 16px
      height: 14px; // Reduced from 16px
    }
  }
`,Ko=V(tL)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: ${({theme:t})=>{var e;return((e=t.text)==null?void 0:e.primary)||"#ffffff"}};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({theme:t})=>{var e;return((e=t.accent)==null?void 0:e.primary)||"#5e35b1"}};
  }

  @media (max-width: 768px) {
    padding: 4px 6px; // Reduced padding
    gap: 4px; // Reduced gap
  }
`,Qo=V.span`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 11px;
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,wB=()=>y.jsxs(xB,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[y.jsxs(_B,{children:[y.jsx(EB,{size:24}),y.jsx(bB,{children:"Search"})]}),y.jsx(TB,{type:"text",placeholder:"Search for songs, artists, or albums...",disabled:!0}),y.jsx(SB,{children:y.jsxs(AB,{children:["🎵 Search functionality coming soon!",y.jsx("br",{}),"You'll be able to discover new music here."]})})]}),xB=V(se.div)`
  padding: 2rem;
  height: 100%;
  width: 100%;
`,_B=V.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,EB=V(CT)`
  color: ${({theme:t})=>{var e;return(e=t.text)==null?void 0:e.primary}};
`,bB=V.h1`
  color: ${({theme:t})=>{var e;return(e=t.text)==null?void 0:e.primary}};
  font-size: 2rem;
`,TB=V.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({theme:t})=>{var e;return(e=t.border)==null?void 0:e.subtle}};
  background: ${({theme:t})=>{var e;return(e=t.background)==null?void 0:e.secondary}};
  color: ${({theme:t})=>{var e;return(e=t.text)==null?void 0:e.primary}};
  font-size: 1rem;
  margin-bottom: 2rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,SB=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${({theme:t})=>{var e;return(e=t.background)==null?void 0:e.secondary}};
  border-radius: 12px;
  margin-top: 2rem;
`,AB=V.p`
  color: ${({theme:t})=>{var e;return(e=t.text)==null?void 0:e.secondary}};
  text-align: center;
  line-height: 1.6;
  font-size: 1.1rem;
`,kB=()=>y.jsxs(CB,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[y.jsx(IB,{children:y.jsx(PB,{children:"Your Library"})}),y.jsxs(RB,{children:[y.jsxs(Bx,{children:[y.jsxs(zx,{children:[y.jsx(sL,{size:20}),y.jsx(Ux,{children:"Favorites"})]}),y.jsx(Hx,{children:"No favorite tracks yet"})]}),y.jsxs(Bx,{children:[y.jsxs(zx,{children:[y.jsx(iL,{size:20}),y.jsx(Ux,{children:"Recently Played"})]}),y.jsx(Hx,{children:"No recent tracks"})]}),y.jsxs(DB,{children:[y.jsx(Cu,{size:32}),y.jsxs(VB,{children:["More library features coming soon!",y.jsx("br",{}),"Stay tuned for playlists and more."]})]})]})]}),CB=V(se.div)`
  padding: 2rem;
  height: 100%;
  width: 100%;
`,IB=V.div`
  margin-bottom: 2rem;
`,PB=V.h1`
  color: ${({theme:t})=>{var e;return(e=t.text)==null?void 0:e.primary}};
  font-size: 2rem;
`,RB=V.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Bx=V.div`
  background: ${({theme:t})=>{var e;return(e=t.background)==null?void 0:e.secondary}};
  padding: 1.5rem;
  border-radius: 12px;
`,zx=V.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({theme:t})=>{var e;return(e=t.text)==null?void 0:e.primary}};
  margin-bottom: 1rem;
`,Ux=V.h2`
  font-size: 1.2rem;
  font-weight: 600;
`,Hx=V.p`
  color: ${({theme:t})=>{var e;return(e=t.text)==null?void 0:e.secondary}};
  text-align: center;
  padding: 2rem;
`,DB=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: ${({theme:t})=>{var e;return(e=t.background)==null?void 0:e.secondary}};
  border-radius: 12px;
  color: ${({theme:t})=>{var e;return(e=t.text)==null?void 0:e.secondary}};
`,VB=V.p`
  text-align: center;
  line-height: 1.6;
  font-size: 1.1rem;
`,NB=t=>{if(!t||typeof t!="object")return!1;const e=t;return!!e.currentTheme&&typeof e.currentTheme=="object"&&"background"in e.currentTheme&&"text"in e.currentTheme&&"ui"in e.currentTheme},MB=()=>{const t=fo(),{state:e}=Ed(),n=tT(),[r,i]=I.useState(!1);return I.useEffect(()=>{const s=()=>i(window.innerWidth<=768);return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),NB(n)?y.jsx(kE,{theme:n.currentTheme,children:y.jsxs(jB,{children:[y.jsx(fB,{}),y.jsxs(FB,{$hasMobileControls:r,children:[y.jsxs(WM,{location:t,children:[y.jsx(wi,{path:"/",element:e.explorerVisible&&y.jsx(as,{style:{width:"100%"},children:y.jsx(sw,{})})}),y.jsx(wi,{path:"/explorer",element:y.jsx(as,{style:{width:"100%"},children:y.jsx(sw,{})})}),y.jsx(wi,{path:"/community-upload",element:y.jsx(as,{style:{width:"100%"},children:y.jsx(hB,{})})}),y.jsx(wi,{path:"/settings",element:y.jsx(as,{style:{width:"100%"},children:y.jsx("div",{children:"Settings Page (Coming Soon)"})})}),y.jsx(wi,{path:"/search",element:y.jsx(as,{style:{width:"100%"},children:y.jsx(wB,{})})}),y.jsx(wi,{path:"/library",element:y.jsx(as,{style:{width:"100%"},children:y.jsx(kB,{})})})]}),y.jsx($B,{children:y.jsx(GV,{})})]}),y.jsx(BB,{children:y.jsx(or,{mode:"wait",children:r?y.jsx(zB,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",damping:20},$theme:n.currentTheme,children:y.jsx(dN,{})},"mobile"):y.jsx(UB,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",damping:20},children:y.jsx(tM,{})},"desktop")})})]})}):(console.error("Theme validation failed:",JSON.stringify(n,null,2)),null)},LB=()=>y.jsx(K6,{children:y.jsx(q6,{children:y.jsx(MB,{})})}),OB=()=>y.jsx(JM,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:y.jsx(nD,{children:y.jsx(LB,{})})}),jB=V.div.attrs(({theme:t})=>({style:{background:t.background.gradient}}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,FB=V.div.attrs(({$hasMobileControls:t})=>({style:{marginBottom:t?"54.2px":"32px"}}))`
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: calc(100vh - 80px);
    padding: 0;
  }
`,as=V(se.div).attrs(()=>({initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20}}))`
  flex: 1;
  width: 100%;
  height: 92%;
  overflow: hidden;
  margin-top: 0px;
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;

  @media (max-width: 768px) {
    height: 100%;
    margin-top: 0;
    border-radius: 0px;
    border: none;
  }
`,$B=V.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  border-radius: 12px;
`,BB=V.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
`,zB=V(se.div).attrs(({$theme:t})=>{var e;return{style:{background:((e=t==null?void 0:t.background)==null?void 0:e.secondary)||"rgba(0, 0, 0, 0.8)"}}})`
  pointer-events: auto;
  width: 100%;
  padding: 0;
  backdrop-filter: blur(20px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
`,UB=V(se.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0 15px 20px;
`;yf.createRoot(document.getElementById("root")).render(y.jsx(Ce.StrictMode,{children:y.jsx(OB,{})}));
