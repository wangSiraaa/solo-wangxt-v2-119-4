(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Hv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fm={exports:{}},Ol={},Om={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),Vv=Symbol.for("react.portal"),Gv=Symbol.for("react.fragment"),Wv=Symbol.for("react.strict_mode"),jv=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),$v=Symbol.for("react.context"),Yv=Symbol.for("react.forward_ref"),qv=Symbol.for("react.suspense"),Kv=Symbol.for("react.memo"),Zv=Symbol.for("react.lazy"),gh=Symbol.iterator;function Qv(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zm=Object.assign,Bm={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||km}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hm(){}Hm.prototype=Fs.prototype;function td(t,e,n){this.props=t,this.context=e,this.refs=Bm,this.updater=n||km}var nd=td.prototype=new Hm;nd.constructor=td;zm(nd,Fs.prototype);nd.isPureReactComponent=!0;var _h=Array.isArray,Vm=Object.prototype.hasOwnProperty,id={current:null},Gm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vm.call(e,i)&&!Gm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ko,type:t,key:s,ref:o,props:r,_owner:id.current}}function Jv(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function e0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vh=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e0(""+t.key):e.toString(36)}function Oa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case Vv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+uc(o,0):i,_h(r)?(n="",t!=null&&(n=t.replace(vh,"$&/")+"/"),Oa(r,e,n,"",function(c){return c})):r!=null&&(rd(r)&&(r=Jv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",_h(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+uc(s,a);o+=Oa(s,e,n,l,r)}else if(l=Qv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+uc(s,a++),o+=Oa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ko(t,e,n){if(t==null)return t;var i=[],r=0;return Oa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function t0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},ka={transition:null},n0={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:ka,ReactCurrentOwner:id};function jm(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:Ko,forEach:function(t,e,n){Ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ko(t,function(){e++}),e},toArray:function(t){return Ko(t,function(e){return e})||[]},only:function(t){if(!rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Fs;ke.Fragment=Gv;ke.Profiler=jv;ke.PureComponent=td;ke.StrictMode=Wv;ke.Suspense=qv;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;ke.act=jm;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=id.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Vm.call(e,l)&&!Gm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ko,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:$v,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xv,_context:t},t.Consumer=t};ke.createElement=Wm;ke.createFactory=function(t){var e=Wm.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:Yv,render:t}};ke.isValidElement=rd;ke.lazy=function(t){return{$$typeof:Zv,_payload:{_status:-1,_result:t},_init:t0}};ke.memo=function(t,e){return{$$typeof:Kv,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};ke.unstable_act=jm;ke.useCallback=function(t,e){return qt.current.useCallback(t,e)};ke.useContext=function(t){return qt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return qt.current.useEffect(t,e)};ke.useId=function(){return qt.current.useId()};ke.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return qt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};ke.useRef=function(t){return qt.current.useRef(t)};ke.useState=function(t){return qt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return qt.current.useTransition()};ke.version="18.3.1";Om.exports=ke;var Le=Om.exports;const i0=Hv(Le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=Le,s0=Symbol.for("react.element"),o0=Symbol.for("react.fragment"),a0=Object.prototype.hasOwnProperty,l0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)a0.call(e,i)&&!c0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:s0,type:t,key:s,ref:o,props:r,_owner:l0.current}}Ol.Fragment=o0;Ol.jsx=Xm;Ol.jsxs=Xm;Fm.exports=Ol;var W=Fm.exports,xu={},$m={exports:{}},yn={},Ym={exports:{}},qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var Z=L.length;L.push(Y);e:for(;0<Z;){var se=Z-1>>>1,Ee=L[se];if(0<r(Ee,Y))L[se]=Y,L[Z]=Ee,Z=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Y=L[0],Z=L.pop();if(Z!==Y){L[0]=Z;e:for(var se=0,Ee=L.length,ze=Ee>>>1;se<ze;){var $=2*(se+1)-1,J=L[$],ae=$+1,ce=L[ae];if(0>r(J,Z))ae<Ee&&0>r(ce,J)?(L[se]=ce,L[ae]=Z,se=ae):(L[se]=J,L[$]=Z,se=$);else if(ae<Ee&&0>r(ce,Z))L[se]=ce,L[ae]=Z,se=ae;else break e}}return Y}function r(L,Y){var Z=L.sortIndex-Y.sortIndex;return Z!==0?Z:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=L)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(L){if(v=!1,x(L),!g)if(n(l)!==null)g=!0,F(C);else{var Y=n(c);Y!==null&&ee(S,Y.startTime-L)}}function C(L,Y){g=!1,v&&(v=!1,u(P),P=-1),p=!0;var Z=d;try{for(x(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||L&&!E());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var Ee=se(h.expirationTime<=Y);Y=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&i(l),x(Y)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var $=n(c);$!==null&&ee(S,$.startTime-Y),ze=!1}return ze}finally{h=null,d=Z,p=!1}}var T=!1,A=null,P=-1,H=5,y=-1;function E(){return!(t.unstable_now()-y<H)}function G(){if(A!==null){var L=t.unstable_now();y=L;var Y=!0;try{Y=A(!0,L)}finally{Y?B():(T=!1,A=null)}}else T=!1}var B;if(typeof _=="function")B=function(){_(G)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,V=X.port2;X.port1.onmessage=G,B=function(){V.postMessage(null)}}else B=function(){m(G,0)};function F(L){A=L,T||(T=!0,B())}function ee(L,Y){P=m(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,F(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var Z=d;d=Y;try{return L()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=d;d=L;try{return Y()}finally{d=Z}},t.unstable_scheduleCallback=function(L,Y,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,L){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Z+Ee,L={id:f++,callback:Y,priorityLevel:L,startTime:Z,expirationTime:Ee,sortIndex:-1},Z>se?(L.sortIndex=Z,e(c,L),n(l)===null&&L===n(c)&&(v?(u(P),P=-1):v=!0,ee(S,Z-se))):(L.sortIndex=Ee,e(l,L),g||p||(g=!0,F(C))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var Y=d;return function(){var Z=d;d=Y;try{return L.apply(this,arguments)}finally{d=Z}}}})(qm);Ym.exports=qm;var u0=Ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=Le,xn=u0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Km=new Set,_o={};function Ir(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(_o[t]=e,t=0;t<e.length;t++)Km.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=Object.prototype.hasOwnProperty,d0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xh={},yh={};function h0(t){return yu.call(yh,t)?!0:yu.call(xh,t)?!1:d0.test(t)?yh[t]=!0:(xh[t]=!0,!1)}function p0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function m0(t,e,n,i){if(e===null||typeof e>"u"||p0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sd=/[\-:]([a-z])/g;function od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sd,od);Ot[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sd,od);Ot[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sd,od);Ot[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ad(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(m0(e,n,r,i)&&(n=null),i||r===null?h0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Zm=Symbol.for("react.provider"),Qm=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),Mu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),Sh=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Sh&&t[Sh]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,fc;function no(t){if(fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fc=e&&e[1]||""}return`
`+fc+t}var dc=!1;function hc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?no(t):""}function g0(t){switch(t.tag){case 5:return no(t.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case Su:return"Profiler";case ld:return"StrictMode";case Mu:return"Suspense";case Eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qm:return(t.displayName||"Context")+".Consumer";case Zm:return(t._context.displayName||"Context")+".Provider";case cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ud:return e=t.displayName||null,e!==null?e:wu(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return wu(t(e))}catch{}}return null}function _0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(e);case 8:return e===ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function eg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v0(t){var e=eg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=v0(t))}function tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=eg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ng(t,e){e=e.checked,e!=null&&ad(t,"checked",e,!1)}function Au(t,e){ng(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cu(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Eh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cu(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(io(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function ig(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Th(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},x0=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){x0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function ag(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var y0=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(t,e){if(e){if(y0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=null;function fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Iu=null,ms=null,gs=null;function Ah(t){if(t=Ho(t)){if(typeof Iu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Vl(e),Iu(t.stateNode,t.type,e))}}function lg(t){ms?gs?gs.push(t):gs=[t]:ms=t}function cg(){if(ms){var t=ms,e=gs;if(gs=ms=null,Ah(t),e)for(t=0;t<e.length;t++)Ah(e[t])}}function ug(t,e){return t(e)}function fg(){}var pc=!1;function dg(t,e,n){if(pc)return t(e,n);pc=!0;try{return ug(t,e,n)}finally{pc=!1,(ms!==null||gs!==null)&&(fg(),cg())}}function xo(t,e){var n=t.stateNode;if(n===null)return null;var i=Vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Uu=!1;if(vi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Uu=!1}function S0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var lo=!1,rl=null,sl=!1,Nu=null,M0={onError:function(t){lo=!0,rl=t}};function E0(t,e,n,i,r,s,o,a,l){lo=!1,rl=null,S0.apply(M0,arguments)}function w0(t,e,n,i,r,s,o,a,l){if(E0.apply(this,arguments),lo){if(lo){var c=rl;lo=!1,rl=null}else throw Error(ne(198));sl||(sl=!0,Nu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(Ur(t)!==t)throw Error(ne(188))}function T0(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ch(r),t;if(s===i)return Ch(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function pg(t){return t=T0(t),t!==null?mg(t):null}function mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mg(t);if(e!==null)return e;t=t.sibling}return null}var gg=xn.unstable_scheduleCallback,Rh=xn.unstable_cancelCallback,A0=xn.unstable_shouldYield,C0=xn.unstable_requestPaint,vt=xn.unstable_now,R0=xn.unstable_getCurrentPriorityLevel,dd=xn.unstable_ImmediatePriority,_g=xn.unstable_UserBlockingPriority,ol=xn.unstable_NormalPriority,P0=xn.unstable_LowPriority,vg=xn.unstable_IdlePriority,kl=null,ei=null;function b0(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:I0,L0=Math.log,D0=Math.LN2;function I0(t){return t>>>=0,t===0?32:31-(L0(t)/D0|0)|0}var ea=64,ta=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ro(a):(s&=o,s!==0&&(i=ro(s)))}else o=n&~r,o!==0?i=ro(o):s!==0&&(i=ro(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function U0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=U0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xg(){var t=ea;return ea<<=1,!(ea&4194240)&&(ea=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function F0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function yg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sg,pd,Mg,Eg,wg,Ou=!1,na=[],Hi=null,Vi=null,Gi=null,yo=new Map,So=new Map,Ni=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ph(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ho(e),e!==null&&pd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function k0(t,e,n,i,r){switch(e){case"focusin":return Hi=Gs(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=Gs(Vi,t,e,n,i,r),!0;case"mouseover":return Gi=Gs(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return yo.set(s,Gs(yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,So.set(s,Gs(So.get(s)||null,t,e,n,i,r)),!0}return!1}function Tg(t){var e=_r(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=hg(n),e!==null){t.blockedOn=e,wg(t.priority,function(){Mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Du=i,n.target.dispatchEvent(i),Du=null}else return e=Ho(n),e!==null&&pd(e),t.blockedOn=n,!1;e.shift()}return!0}function bh(t,e,n){za(t)&&n.delete(e)}function z0(){Ou=!1,Hi!==null&&za(Hi)&&(Hi=null),Vi!==null&&za(Vi)&&(Vi=null),Gi!==null&&za(Gi)&&(Gi=null),yo.forEach(bh),So.forEach(bh)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Ou||(Ou=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,z0)))}function Mo(t){function e(r){return Ws(r,t)}if(0<na.length){Ws(na[0],t);for(var n=1;n<na.length;n++){var i=na[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&Ws(Hi,t),Vi!==null&&Ws(Vi,t),Gi!==null&&Ws(Gi,t),yo.forEach(e),So.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Tg(n),n.blockedOn===null&&Ni.shift()}var _s=Ei.ReactCurrentBatchConfig,ll=!0;function B0(t,e,n,i){var r=Je,s=_s.transition;_s.transition=null;try{Je=1,md(t,e,n,i)}finally{Je=r,_s.transition=s}}function H0(t,e,n,i){var r=Je,s=_s.transition;_s.transition=null;try{Je=4,md(t,e,n,i)}finally{Je=r,_s.transition=s}}function md(t,e,n,i){if(ll){var r=ku(t,e,n,i);if(r===null)Tc(t,e,i,cl,n),Ph(t,i);else if(k0(r,t,e,n,i))i.stopPropagation();else if(Ph(t,i),e&4&&-1<O0.indexOf(t)){for(;r!==null;){var s=Ho(r);if(s!==null&&Sg(s),s=ku(t,e,n,i),s===null&&Tc(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tc(t,e,i,null,n)}}var cl=null;function ku(t,e,n,i){if(cl=null,t=fd(i),t=_r(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function Ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R0()){case dd:return 1;case _g:return 4;case ol:case P0:return 16;case vg:return 536870912;default:return 16}default:return 16}}var ki=null,gd=null,Ba=null;function Cg(){if(Ba)return Ba;var t,e=gd,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ba=r.slice(t,1<i?1-i:void 0)}function Ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function Lh(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:Lh,this.isPropagationStopped=Lh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=Sn(Os),Bo=ht({},Os,{view:0,detail:0}),V0=Sn(Bo),gc,_c,js,zl=ht({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(gc=t.screenX-js.screenX,_c=t.screenY-js.screenY):_c=gc=0,js=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),Dh=Sn(zl),G0=ht({},zl,{dataTransfer:0}),W0=Sn(G0),j0=ht({},Bo,{relatedTarget:0}),vc=Sn(j0),X0=ht({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=Sn(X0),Y0=ht({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q0=Sn(Y0),K0=ht({},Os,{data:0}),Ih=Sn(K0),Z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=J0[t])?!!e[t]:!1}function vd(){return ex}var tx=ht({},Bo,{key:function(t){if(t.key){var e=Z0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Q0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(t){return t.type==="keypress"?Ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nx=Sn(tx),ix=ht({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=Sn(ix),rx=ht({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),sx=Sn(rx),ox=ht({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=Sn(ox),lx=ht({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Sn(lx),ux=[9,13,27,32],xd=vi&&"CompositionEvent"in window,co=null;vi&&"documentMode"in document&&(co=document.documentMode);var fx=vi&&"TextEvent"in window&&!co,Rg=vi&&(!xd||co&&8<co&&11>=co),Nh=" ",Fh=!1;function Pg(t,e){switch(t){case"keyup":return ux.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function dx(t,e){switch(t){case"compositionend":return bg(e);case"keypress":return e.which!==32?null:(Fh=!0,Nh);case"textInput":return t=e.data,t===Nh&&Fh?null:t;default:return null}}function hx(t,e){if(ts)return t==="compositionend"||!xd&&Pg(t,e)?(t=Cg(),Ba=gd=ki=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rg&&e.locale!=="ko"?null:e.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!px[t.type]:e==="textarea"}function Lg(t,e,n,i){lg(i),e=ul(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var uo=null,Eo=null;function mx(t){Vg(t,0)}function Bl(t){var e=rs(t);if(tg(e))return t}function gx(t,e){if(t==="change")return e}var Dg=!1;if(vi){var xc;if(vi){var yc="oninput"in document;if(!yc){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),yc=typeof kh.oninput=="function"}xc=yc}else xc=!1;Dg=xc&&(!document.documentMode||9<document.documentMode)}function zh(){uo&&(uo.detachEvent("onpropertychange",Ig),Eo=uo=null)}function Ig(t){if(t.propertyName==="value"&&Bl(Eo)){var e=[];Lg(e,Eo,t,fd(t)),dg(mx,e)}}function _x(t,e,n){t==="focusin"?(zh(),uo=e,Eo=n,uo.attachEvent("onpropertychange",Ig)):t==="focusout"&&zh()}function vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(Eo)}function xx(t,e){if(t==="click")return Bl(e)}function yx(t,e){if(t==="input"||t==="change")return Bl(e)}function Sx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Sx;function wo(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hh(t,e){var n=Bh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bh(n)}}function Ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ng(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mx(t){var e=Ng(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ug(n.ownerDocument.documentElement,n)){if(i!==null&&yd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hh(n,s);var o=Hh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ex=vi&&"documentMode"in document&&11>=document.documentMode,ns=null,zu=null,fo=null,Bu=!1;function Vh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||ns==null||ns!==il(i)||(i=ns,"selectionStart"in i&&yd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fo&&wo(fo,i)||(fo=i,i=ul(zu,"onSelect"),0<i.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Sc={},Fg={};vi&&(Fg=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Hl(t){if(Sc[t])return Sc[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fg)return Sc[t]=e[n];return t}var Og=Hl("animationend"),kg=Hl("animationiteration"),zg=Hl("animationstart"),Bg=Hl("transitionend"),Hg=new Map,Gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){Hg.set(t,e),Ir(e,[t])}for(var Mc=0;Mc<Gh.length;Mc++){var Ec=Gh[Mc],wx=Ec.toLowerCase(),Tx=Ec[0].toUpperCase()+Ec.slice(1);tr(wx,"on"+Tx)}tr(Og,"onAnimationEnd");tr(kg,"onAnimationIteration");tr(zg,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(Bg,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Wh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,w0(i,e,void 0,t),t.currentTarget=null}function Vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wh(r,a,c),s=l}}}if(sl)throw t=Nu,sl=!1,Nu=null,t}function ot(t,e){var n=e[ju];n===void 0&&(n=e[ju]=new Set);var i=t+"__bubble";n.has(i)||(Gg(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),Gg(n,t,i,e)}var sa="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[sa]){t[sa]=!0,Km.forEach(function(n){n!=="selectionchange"&&(Ax.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sa]||(e[sa]=!0,wc("selectionchange",!1,e))}}function Gg(t,e,n,i){switch(Ag(e)){case 1:var r=B0;break;case 4:r=H0;break;default:r=md}n=r.bind(null,e,n,t),r=void 0,!Uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=_r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dg(function(){var c=s,f=fd(n),h=[];e:{var d=Hg.get(t);if(d!==void 0){var p=_d,g=t;switch(t){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":p=nx;break;case"focusin":g="focus",p=vc;break;case"focusout":g="blur",p=vc;break;case"beforeblur":case"afterblur":p=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sx;break;case Og:case kg:case zg:p=$0;break;case Bg:p=ax;break;case"scroll":p=V0;break;case"wheel":p=cx;break;case"copy":case"cut":case"paste":p=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Uh}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var _=c,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=xo(_,u),S!=null&&v.push(Ao(_,S,x)))),m)break;_=_.return}0<v.length&&(d=new p(d,g,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Du&&(g=n.relatedTarget||n.fromElement)&&(_r(g)||g[xi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?_r(g):null,g!==null&&(m=Ur(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=Dh,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Uh,S="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?d:rs(p),x=g==null?d:rs(g),d=new v(S,_+"leave",p,n,f),d.target=m,d.relatedTarget=x,S=null,_r(f)===c&&(v=new v(u,_+"enter",g,n,f),v.target=x,v.relatedTarget=m,S=v),m=S,p&&g)t:{for(v=p,u=g,_=0,x=v;x;x=kr(x))_++;for(x=0,S=u;S;S=kr(S))x++;for(;0<_-x;)v=kr(v),_--;for(;0<x-_;)u=kr(u),x--;for(;_--;){if(v===u||u!==null&&v===u.alternate)break t;v=kr(v),u=kr(u)}v=null}else v=null;p!==null&&jh(h,d,p,v,!1),g!==null&&m!==null&&jh(h,m,g,v,!0)}}e:{if(d=c?rs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=gx;else if(Oh(d))if(Dg)C=yx;else{C=vx;var T=_x}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=xx);if(C&&(C=C(t,c))){Lg(h,C,n,f);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Cu(d,"number",d.value)}switch(T=c?rs(c):window,t){case"focusin":(Oh(T)||T.contentEditable==="true")&&(ns=T,zu=c,fo=null);break;case"focusout":fo=zu=ns=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Vh(h,n,f);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Vh(h,n,f)}var A;if(xd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ts?Pg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Rg&&n.locale!=="ko"&&(ts||P!=="onCompositionStart"?P==="onCompositionEnd"&&ts&&(A=Cg()):(ki=f,gd="value"in ki?ki.value:ki.textContent,ts=!0)),T=ul(c,P),0<T.length&&(P=new Ih(P,t,null,n,f),h.push({event:P,listeners:T}),A?P.data=A:(A=bg(n),A!==null&&(P.data=A)))),(A=fx?dx(t,n):hx(t,n))&&(c=ul(c,"onBeforeInput"),0<c.length&&(f=new Ih("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=A))}Vg(h,e)})}function Ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xo(t,n),s!=null&&i.unshift(Ao(t,s,r)),s=xo(t,e),s!=null&&i.push(Ao(t,s,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=xo(n,s),l!=null&&o.unshift(Ao(n,l,a))):r||(l=xo(n,s),l!=null&&o.push(Ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Cx=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Xh(t){return(typeof t=="string"?t:""+t).replace(Cx,`
`).replace(Rx,"")}function oa(t,e,n){if(e=Xh(e),Xh(t)!==e&&n)throw Error(ne(425))}function fl(){}var Hu=null,Vu=null;function Gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(t){return $h.resolve(null).then(t).catch(Lx)}:Wu;function Lx(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Mo(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Qn="__reactFiber$"+ks,Co="__reactProps$"+ks,xi="__reactContainer$"+ks,ju="__reactEvents$"+ks,Dx="__reactListeners$"+ks,Ix="__reactHandles$"+ks;function _r(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yh(t);t!==null;){if(n=t[Qn])return n;t=Yh(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[Qn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Vl(t){return t[Co]||null}var Xu=[],ss=-1;function nr(t){return{current:t}}function lt(t){0>ss||(t.current=Xu[ss],Xu[ss]=null,ss--)}function it(t,e){ss++,Xu[ss]=t.current,t.current=e}var Qi={},Gt=nr(Qi),rn=nr(!1),Tr=Qi;function ws(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function dl(){lt(rn),lt(Gt)}function qh(t,e,n){if(Gt.current!==Qi)throw Error(ne(168));it(Gt,e),it(rn,n)}function Wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,_0(t)||"Unknown",r));return ht({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Tr=Gt.current,it(Gt,t),it(rn,rn.current),!0}function Kh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Wg(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,lt(rn),lt(Gt),it(Gt,t)):lt(rn),it(rn,n)}var fi=null,Gl=!1,Cc=!1;function jg(t){fi===null?fi=[t]:fi.push(t)}function Ux(t){Gl=!0,jg(t)}function ir(){if(!Cc&&fi!==null){Cc=!0;var t=0,e=Je;try{var n=fi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Gl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),gg(dd,ir),r}finally{Je=e,Cc=!1}}return null}var os=[],as=0,pl=null,ml=0,Tn=[],An=0,Ar=null,di=1,hi="";function dr(t,e){os[as++]=ml,os[as++]=pl,pl=t,ml=e}function Xg(t,e,n){Tn[An++]=di,Tn[An++]=hi,Tn[An++]=Ar,Ar=t;var i=di;t=hi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,di=1<<32-jn(e)+r|n<<r|i,hi=s+t}else di=1<<s|n<<r|i,hi=t}function Sd(t){t.return!==null&&(dr(t,1),Xg(t,1,0))}function Md(t){for(;t===pl;)pl=os[--as],os[as]=null,ml=os[--as],os[as]=null;for(;t===Ar;)Ar=Tn[--An],Tn[An]=null,hi=Tn[--An],Tn[An]=null,di=Tn[--An],Tn[An]=null}var _n=null,mn=null,ct=!1,Hn=null;function $g(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,mn=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:di,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,mn=null,!0):!1;default:return!1}}function $u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(ct){var e=mn;if(e){var n=e;if(!Zh(t,e)){if($u(t))throw Error(ne(418));e=Wi(n.nextSibling);var i=_n;e&&Zh(t,e)?$g(i,n):(t.flags=t.flags&-4097|2,ct=!1,_n=t)}}else{if($u(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,_n=t}}}function Qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function aa(t){if(t!==_n)return!1;if(!ct)return Qh(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gu(t.type,t.memoizedProps)),e&&(e=mn)){if($u(t))throw Yg(),Error(ne(418));for(;e;)$g(t,e),e=Wi(e.nextSibling)}if(Qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=_n?Wi(t.stateNode.nextSibling):null;return!0}function Yg(){for(var t=mn;t;)t=Wi(t.nextSibling)}function Ts(){mn=_n=null,ct=!1}function Ed(t){Hn===null?Hn=[t]:Hn.push(t)}var Nx=Ei.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function la(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jh(t){var e=t._init;return e(t._payload)}function qg(t){function e(u,_){if(t){var x=u.deletions;x===null?(u.deletions=[_],u.flags|=16):x.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Yi(u,_),u.index=0,u.sibling=null,u}function s(u,_,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<_?(u.flags|=2,_):x):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,x,S){return _===null||_.tag!==6?(_=Uc(x,u.mode,S),_.return=u,_):(_=r(_,x),_.return=u,_)}function l(u,_,x,S){var C=x.type;return C===es?f(u,_,x.props.children,S,x.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Di&&Jh(C)===_.type)?(S=r(_,x.props),S.ref=Xs(u,_,x),S.return=u,S):(S=Ya(x.type,x.key,x.props,null,u.mode,S),S.ref=Xs(u,_,x),S.return=u,S)}function c(u,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Nc(x,u.mode,S),_.return=u,_):(_=r(_,x.children||[]),_.return=u,_)}function f(u,_,x,S,C){return _===null||_.tag!==7?(_=Er(x,u.mode,S,C),_.return=u,_):(_=r(_,x),_.return=u,_)}function h(u,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Uc(""+_,u.mode,x),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:return x=Ya(_.type,_.key,_.props,null,u.mode,x),x.ref=Xs(u,null,_),x.return=u,x;case Jr:return _=Nc(_,u.mode,x),_.return=u,_;case Di:var S=_._init;return h(u,S(_._payload),x)}if(io(_)||Hs(_))return _=Er(_,u.mode,x,null),_.return=u,_;la(u,_)}return null}function d(u,_,x,S){var C=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(u,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zo:return x.key===C?l(u,_,x,S):null;case Jr:return x.key===C?c(u,_,x,S):null;case Di:return C=x._init,d(u,_,C(x._payload),S)}if(io(x)||Hs(x))return C!==null?null:f(u,_,x,S,null);la(u,x)}return null}function p(u,_,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,a(_,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Zo:return u=u.get(S.key===null?x:S.key)||null,l(_,u,S,C);case Jr:return u=u.get(S.key===null?x:S.key)||null,c(_,u,S,C);case Di:var T=S._init;return p(u,_,x,T(S._payload),C)}if(io(S)||Hs(S))return u=u.get(x)||null,f(_,u,S,C,null);la(_,S)}return null}function g(u,_,x,S){for(var C=null,T=null,A=_,P=_=0,H=null;A!==null&&P<x.length;P++){A.index>P?(H=A,A=null):H=A.sibling;var y=d(u,A,x[P],S);if(y===null){A===null&&(A=H);break}t&&A&&y.alternate===null&&e(u,A),_=s(y,_,P),T===null?C=y:T.sibling=y,T=y,A=H}if(P===x.length)return n(u,A),ct&&dr(u,P),C;if(A===null){for(;P<x.length;P++)A=h(u,x[P],S),A!==null&&(_=s(A,_,P),T===null?C=A:T.sibling=A,T=A);return ct&&dr(u,P),C}for(A=i(u,A);P<x.length;P++)H=p(A,u,P,x[P],S),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?P:H.key),_=s(H,_,P),T===null?C=H:T.sibling=H,T=H);return t&&A.forEach(function(E){return e(u,E)}),ct&&dr(u,P),C}function v(u,_,x,S){var C=Hs(x);if(typeof C!="function")throw Error(ne(150));if(x=C.call(x),x==null)throw Error(ne(151));for(var T=C=null,A=_,P=_=0,H=null,y=x.next();A!==null&&!y.done;P++,y=x.next()){A.index>P?(H=A,A=null):H=A.sibling;var E=d(u,A,y.value,S);if(E===null){A===null&&(A=H);break}t&&A&&E.alternate===null&&e(u,A),_=s(E,_,P),T===null?C=E:T.sibling=E,T=E,A=H}if(y.done)return n(u,A),ct&&dr(u,P),C;if(A===null){for(;!y.done;P++,y=x.next())y=h(u,y.value,S),y!==null&&(_=s(y,_,P),T===null?C=y:T.sibling=y,T=y);return ct&&dr(u,P),C}for(A=i(u,A);!y.done;P++,y=x.next())y=p(A,u,P,y.value,S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?P:y.key),_=s(y,_,P),T===null?C=y:T.sibling=y,T=y);return t&&A.forEach(function(G){return e(u,G)}),ct&&dr(u,P),C}function m(u,_,x,S){if(typeof x=="object"&&x!==null&&x.type===es&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Zo:e:{for(var C=x.key,T=_;T!==null;){if(T.key===C){if(C=x.type,C===es){if(T.tag===7){n(u,T.sibling),_=r(T,x.props.children),_.return=u,u=_;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Di&&Jh(C)===T.type){n(u,T.sibling),_=r(T,x.props),_.ref=Xs(u,T,x),_.return=u,u=_;break e}n(u,T);break}else e(u,T);T=T.sibling}x.type===es?(_=Er(x.props.children,u.mode,S,x.key),_.return=u,u=_):(S=Ya(x.type,x.key,x.props,null,u.mode,S),S.ref=Xs(u,_,x),S.return=u,u=S)}return o(u);case Jr:e:{for(T=x.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(u,_.sibling),_=r(_,x.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Nc(x,u.mode,S),_.return=u,u=_}return o(u);case Di:return T=x._init,m(u,_,T(x._payload),S)}if(io(x))return g(u,_,x,S);if(Hs(x))return v(u,_,x,S);la(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,x),_.return=u,u=_):(n(u,_),_=Uc(x,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return m}var As=qg(!0),Kg=qg(!1),gl=nr(null),_l=null,ls=null,wd=null;function Td(){wd=ls=_l=null}function Ad(t){var e=gl.current;lt(gl),t._currentValue=e}function qu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){_l=t,wd=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(wd!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(_l===null)throw Error(ne(308));ls=t,_l.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var vr=null;function Cd(t){vr===null?vr=[t]:vr.push(t)}function Zg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Cd(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function Rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Cd(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hd(t,n)}}function ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=ht({},h,d);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=o,t.lanes=o,t.memoizedState=h}}function tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Vo={},ti=nr(Vo),Ro=nr(Vo),Po=nr(Vo);function xr(t){if(t===Vo)throw Error(ne(174));return t}function Pd(t,e){switch(it(Po,e),it(Ro,t),it(ti,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}lt(ti),it(ti,e)}function Cs(){lt(ti),lt(Ro),lt(Po)}function Jg(t){xr(Po.current);var e=xr(ti.current),n=Pu(e,t.type);e!==n&&(it(Ro,t),it(ti,n))}function bd(t){Ro.current===t&&(lt(ti),lt(Ro))}var ft=nr(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function Ld(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var Ga=Ei.ReactCurrentDispatcher,Pc=Ei.ReactCurrentBatchConfig,Cr=0,dt=null,Tt=null,Lt=null,yl=!1,ho=!1,bo=0,Fx=0;function kt(){throw Error(ne(321))}function Dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Id(t,e,n,i,r,s){if(Cr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=t===null||t.memoizedState===null?Bx:Hx,t=n(i,r),ho){s=0;do{if(ho=!1,bo=0,25<=s)throw Error(ne(301));s+=1,Lt=Tt=null,e.updateQueue=null,Ga.current=Vx,t=n(i,r)}while(ho)}if(Ga.current=Sl,e=Tt!==null&&Tt.next!==null,Cr=0,Lt=Tt=dt=null,yl=!1,e)throw Error(ne(300));return t}function Ud(){var t=bo!==0;return bo=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?dt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Dn(){if(Tt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Lt===null?dt.memoizedState:Lt.next;if(e!==null)Lt=e,Tt=t;else{if(t===null)throw Error(ne(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Lt===null?dt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Lo(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Cr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,dt.lanes|=f,Rr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Rr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function e_(){}function t_(t,e){var n=dt,i=Dn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Nd(r_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Do(9,i_.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ne(349));Cr&30||n_(n,e,r)}return r}function n_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i_(t,e,n,i){e.value=n,e.getSnapshot=i,s_(e)&&o_(t)}function r_(t,e,n){return n(function(){s_(e)&&o_(t)})}function s_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function o_(t){var e=yi(t,1);e!==null&&Xn(e,t,1,-1)}function np(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=zx.bind(null,dt,t),[e.memoizedState,t]}function Do(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function a_(){return Dn().memoizedState}function Wa(t,e,n,i){var r=Kn();dt.flags|=t,r.memoizedState=Do(1|e,n,void 0,i===void 0?null:i)}function Wl(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&Dd(i,o.deps)){r.memoizedState=Do(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Do(1|e,n,s,i)}function ip(t,e){return Wa(8390656,8,t,e)}function Nd(t,e){return Wl(2048,8,t,e)}function l_(t,e){return Wl(4,2,t,e)}function c_(t,e){return Wl(4,4,t,e)}function u_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f_(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,u_.bind(null,e,t),n)}function Fd(){}function d_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function h_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function p_(t,e,n){return Cr&21?(Yn(n,e)||(n=xg(),dt.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function Ox(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Pc.transition;Pc.transition={};try{t(!1),e()}finally{Je=n,Pc.transition=i}}function m_(){return Dn().memoizedState}function kx(t,e,n){var i=$i(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},g_(t))__(e,n);else if(n=Zg(t,e,n,i),n!==null){var r=$t();Xn(n,t,i,r),v_(n,e,i)}}function zx(t,e,n){var i=$i(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(g_(t))__(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Cd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Zg(t,e,r,i),n!==null&&(r=$t(),Xn(n,t,i,r),v_(n,e,i))}}function g_(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function __(t,e){ho=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hd(t,n)}}var Sl={readContext:Ln,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Bx={readContext:Ln,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:ip,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4194308,4,u_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wa(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kx.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:np,useDebugValue:Fd,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=np(!1),e=t[0];return t=Ox.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Kn();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));Cr&30||n_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ip(r_.bind(null,i,s,t),[t]),i.flags|=2048,Do(9,i_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Dt.identifierPrefix;if(ct){var n=hi,i=di;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hx={readContext:Ln,useCallback:d_,useContext:Ln,useEffect:Nd,useImperativeHandle:f_,useInsertionEffect:l_,useLayoutEffect:c_,useMemo:h_,useReducer:bc,useRef:a_,useState:function(){return bc(Lo)},useDebugValue:Fd,useDeferredValue:function(t){var e=Dn();return p_(e,Tt.memoizedState,t)},useTransition:function(){var t=bc(Lo)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:e_,useSyncExternalStore:t_,useId:m_,unstable_isNewReconciler:!1},Vx={readContext:Ln,useCallback:d_,useContext:Ln,useEffect:Nd,useImperativeHandle:f_,useInsertionEffect:l_,useLayoutEffect:c_,useMemo:h_,useReducer:Lc,useRef:a_,useState:function(){return Lc(Lo)},useDebugValue:Fd,useDeferredValue:function(t){var e=Dn();return Tt===null?e.memoizedState=t:p_(e,Tt.memoizedState,t)},useTransition:function(){var t=Lc(Lo)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:e_,useSyncExternalStore:t_,useId:m_,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ku(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=$i(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Xn(e,t,r,i),Va(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=$i(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Xn(e,t,r,i),Va(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=$i(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(Xn(e,t,i,n),Va(e,t,i))}};function rp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!wo(n,i)||!wo(r,s):!0}function x_(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=sn(e)?Tr:Gt.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=sn(e)?Tr:Gt.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ku(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",i=e;do n+=g0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gx=typeof WeakMap=="function"?WeakMap:Map;function y_(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){El||(El=!0,cf=i),Qu(t,e)},n}function S_(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qu(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function op(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iy.bind(null,t,e,n),e.then(t,t))}function ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var Wx=Ei.ReactCurrentOwner,nn=!1;function jt(t,e,n,i){e.child=t===null?Kg(e,null,n,i):As(e,t.child,n,i)}function cp(t,e,n,i,r){n=n.render;var s=e.ref;return vs(e,r),i=Id(t,e,n,i,s,r),n=Ud(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ct&&n&&Sd(e),e.flags|=1,jt(t,e,i,r),e.child)}function up(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M_(t,e,s,i,r)):(t=Ya(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(o,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function M_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wo(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Si(t,e,r)}return Ju(t,e,n,i,r)}function E_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(us,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(us,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(us,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(us,hn),hn|=i;return jt(t,e,r,n),e.child}function w_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ju(t,e,n,i,r){var s=sn(n)?Tr:Gt.current;return s=ws(e,s),vs(e,r),n=Id(t,e,n,i,s,r),i=Ud(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ct&&i&&Sd(e),e.flags|=1,jt(t,e,n,r),e.child)}function fp(t,e,n,i,r){if(sn(n)){var s=!0;hl(e)}else s=!1;if(vs(e,r),e.stateNode===null)ja(t,e),x_(e,n,i),Zu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=sn(n)?Tr:Gt.current,c=ws(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&sp(e,o,i,c),Ii=!1;var d=e.memoizedState;o.state=d,vl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||rn.current||Ii?(typeof f=="function"&&(Ku(e,n,f,i),l=e.memoizedState),(a=Ii||rp(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Qg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:kn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=sn(n)?Tr:Gt.current,l=ws(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&sp(e,o,i,l),Ii=!1,d=e.memoizedState,o.state=d,vl(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||rn.current||Ii?(typeof p=="function"&&(Ku(e,n,p,i),g=e.memoizedState),(c=Ii||rp(e,n,c,i,d,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ef(t,e,n,i,s,r)}function ef(t,e,n,i,r,s){w_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kh(e,n,!1),Si(t,e,s);i=e.stateNode,Wx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&Kh(e,n,!0),e.child}function T_(t){var e=t.stateNode;e.pendingContext?qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qh(t,e.context,!1),Pd(t,e.containerInfo)}function dp(t,e,n,i,r){return Ts(),Ed(r),e.flags|=256,jt(t,e,n,i),e.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function A_(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return Yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yl(o,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nf(n),e.memoizedState=tf,t):Od(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yi(a,s):(s=Er(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=tf,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Od(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ca(t,e,n,i){return i!==null&&Ed(i),As(e,t.child,null,n),t=Od(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Dc(Error(ne(422))),ca(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yl({mode:"visible",children:i.children},r,0,null),s=Er(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=nf(o),e.memoizedState=tf,s);if(!(e.mode&1))return ca(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Dc(s,i,void 0),ca(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Xn(i,t,r,-1))}return Gd(),i=Dc(Error(ne(421))),ca(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Wi(r.nextSibling),_n=e,ct=!0,Hn=null,t!==null&&(Tn[An++]=di,Tn[An++]=hi,Tn[An++]=Ar,di=t.id,hi=t.overflow,Ar=e),e=Od(e,i.children),e.flags|=4096,e)}function hp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),qu(t.return,e,n)}function Ic(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function C_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hp(t,n,e);else if(t.tag===19)hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ic(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Xx(t,e,n){switch(e.tag){case 3:T_(e),Ts();break;case 5:Jg(e);break;case 1:sn(e.type)&&hl(e);break;case 4:Pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?A_(t,e,n):(it(ft,ft.current&1),t=Si(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return C_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,E_(t,e,n)}return Si(t,e,n)}var R_,rf,P_,b_;R_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rf=function(){};P_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(ti.current);var s=null;switch(n){case"input":r=Tu(t,r),i=Tu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Ru(t,r),i=Ru(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fl)}bu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};b_=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $x(t,e,n){var i=e.pendingProps;switch(Md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&dl(),zt(e),null;case 3:return i=e.stateNode,Cs(),lt(rn),lt(Gt),Ld(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(df(Hn),Hn=null))),rf(t,e),zt(e),null;case 5:bd(e);var r=xr(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)P_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return zt(e),null}if(t=xr(ti.current),aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Co]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<so.length;r++)ot(so[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Mh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":wh(i,s),ot("invalid",i)}bu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&oa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oa(i.textContent,a,t),r=["children",""+a]):_o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":Qo(i),Eh(i,s,!0);break;case"textarea":Qo(i),Th(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Co]=i,R_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<so.length;r++)ot(so[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Mh(t,i),r=Tu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),ot("invalid",t);break;case"textarea":wh(t,i),r=Ru(t,i),ot("invalid",t);break;default:r=i}bu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ag(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vo(t,l):typeof l=="number"&&vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&ad(t,s,l,o))}switch(n){case"input":Qo(t),Eh(t,i,!1);break;case"textarea":Qo(t),Th(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)b_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=xr(Po.current),xr(ti.current),aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:oa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return zt(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&mn!==null&&e.mode&1&&!(e.flags&128))Yg(),Ts(),e.flags|=98560,s=!1;else if(s=aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Qn]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Hn!==null&&(df(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?At===0&&(At=3):Gd())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Cs(),rf(t,e),t===null&&To(e.stateNode.containerInfo),zt(e),null;case 10:return Ad(e.type._context),zt(e),null;case 17:return sn(e.type)&&dl(),zt(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$s(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xl(t),o!==null){for(e.flags|=128,$s(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Ps&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return zt(e),null}else 2*vt()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Vd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Yx(t,e){switch(Md(e),e.tag){case 1:return sn(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),lt(rn),lt(Gt),Ld(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bd(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return Cs(),null;case 10:return Ad(e.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var ua=!1,Vt=!1,qx=typeof WeakSet=="function"?WeakSet:Set,pe=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function sf(t,e,n){try{n()}catch(i){mt(t,e,i)}}var pp=!1;function Kx(t,e){if(Hu=ll,t=Ng(),yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},ll=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:kn(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return g=pp,pp=!1,g}function po(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&sf(e,n,s)}r=r.next}while(r!==i)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L_(t){var e=t.alternate;e!==null&&(t.alternate=null,L_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Co],delete e[ju],delete e[Dx],delete e[Ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function D_(t){return t.tag===5||t.tag===3||t.tag===4}function mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}function lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}var Nt=null,zn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Vt||cs(n,e);case 6:var i=Nt,r=zn;Nt=null,Ti(t,e,n),Nt=i,zn=r,Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(zn?(t=Nt,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),Mo(t)):Ac(Nt,n.stateNode));break;case 4:i=Nt,r=zn,Nt=n.stateNode.containerInfo,zn=!0,Ti(t,e,n),Nt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sf(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Vt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ti(t,e,n),Vt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qx),e.forEach(function(i){var r=sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,zn=!1;break e;case 3:Nt=a.stateNode.containerInfo,zn=!0;break e;case 4:Nt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Nt===null)throw Error(ne(160));I_(s,o,r),Nt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U_(e,t),e=e.sibling}function U_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),qn(t),i&4){try{po(3,t,t.return),Xl(3,t)}catch(v){mt(t,t.return,v)}try{po(5,t,t.return)}catch(v){mt(t,t.return,v)}}break;case 1:Un(e,t),qn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(Un(e,t),qn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{vo(r,"")}catch(v){mt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ng(r,s),Lu(a,o);var c=Lu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?ag(r,h):f==="dangerouslySetInnerHTML"?sg(r,h):f==="children"?vo(r,h):ad(r,f,h,c)}switch(a){case"input":Au(r,s);break;case"textarea":ig(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ps(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ps(r,!!s.multiple,s.defaultValue,!0):ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Co]=s}catch(v){mt(t,t.return,v)}}break;case 6:if(Un(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){mt(t,t.return,v)}}break;case 3:if(Un(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(v){mt(t,t.return,v)}break;case 4:Un(e,t),qn(t);break;case 13:Un(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Bd=vt())),i&4&&gp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||f,Un(e,t),Vt=c):Un(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(h=pe=f;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:po(4,d,d.return);break;case 1:cs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){mt(i,n,v)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){vp(h);continue}}p!==null?(p.return=d,pe=p):vp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=og("display",o))}catch(v){mt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){mt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Un(e,t),qn(t),i&4&&gp(t);break;case 21:break;default:Un(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(D_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(vo(r,""),i.flags&=-33);var s=mp(t);lf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=mp(t);af(t,a,o);break;default:throw Error(ne(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zx(t,e,n){pe=t,N_(t)}function N_(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ua;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=ua;var c=Vt;if(ua=o,(Vt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?xp(r):l!==null?(l.return=o,pe=l):xp(r);for(;s!==null;)pe=s,N_(s),s=s.sibling;pe=r,ua=a,Vt=c}_p(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):_p(t)}}function _p(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Mo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Vt||e.flags&512&&of(e)}catch(d){mt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function vp(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function xp(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{of(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{of(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var Qx=Math.ceil,Ml=Ei.ReactCurrentDispatcher,kd=Ei.ReactCurrentOwner,bn=Ei.ReactCurrentBatchConfig,je=0,Dt=null,St=null,Ft=0,hn=0,us=nr(0),At=0,Io=null,Rr=0,$l=0,zd=0,mo=null,tn=null,Bd=0,Ps=1/0,ui=null,El=!1,cf=null,Xi=null,fa=!1,zi=null,wl=0,go=0,uf=null,Xa=-1,$a=0;function $t(){return je&6?vt():Xa!==-1?Xa:Xa=vt()}function $i(t){return t.mode&1?je&2&&Ft!==0?Ft&-Ft:Nx.transition!==null?($a===0&&($a=xg()),$a):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Ag(t.type)),t):1}function Xn(t,e,n,i){if(50<go)throw go=0,uf=null,Error(ne(185));zo(t,n,i),(!(je&2)||t!==Dt)&&(t===Dt&&(!(je&2)&&($l|=n),At===4&&Fi(t,Ft)),on(t,i),n===1&&je===0&&!(e.mode&1)&&(Ps=vt()+500,Gl&&ir()))}function on(t,e){var n=t.callbackNode;N0(t,e);var i=al(t,t===Dt?Ft:0);if(i===0)n!==null&&Rh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rh(n),e===1)t.tag===0?Ux(yp.bind(null,t)):jg(yp.bind(null,t)),bx(function(){!(je&6)&&ir()}),n=null;else{switch(yg(i)){case 1:n=dd;break;case 4:n=_g;break;case 16:n=ol;break;case 536870912:n=vg;break;default:n=ol}n=G_(n,F_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F_(t,e){if(Xa=-1,$a=0,je&6)throw Error(ne(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var i=al(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tl(t,i);else{e=i;var r=je;je|=2;var s=k_();(Dt!==t||Ft!==e)&&(ui=null,Ps=vt()+500,Mr(t,e));do try{ty();break}catch(a){O_(t,a)}while(!0);Td(),Ml.current=s,je=r,St!==null?e=0:(Dt=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=Fu(t),r!==0&&(i=r,e=ff(t,r))),e===1)throw n=Io,Mr(t,0),Fi(t,i),on(t,vt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Jx(r)&&(e=Tl(t,i),e===2&&(s=Fu(t),s!==0&&(i=s,e=ff(t,s))),e===1))throw n=Io,Mr(t,0),Fi(t,i),on(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:hr(t,tn,ui);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Bd+500-vt(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Wu(hr.bind(null,t,tn,ui),e);break}hr(t,tn,ui);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Qx(i/1960))-i,10<i){t.timeoutHandle=Wu(hr.bind(null,t,tn,ui),i);break}hr(t,tn,ui);break;case 5:hr(t,tn,ui);break;default:throw Error(ne(329))}}}return on(t,vt()),t.callbackNode===n?F_.bind(null,t):null}function ff(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=tn,tn=n,e!==null&&df(e)),t}function df(t){tn===null?tn=t:tn.push.apply(tn,t)}function Jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~zd,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function yp(t){if(je&6)throw Error(ne(327));xs();var e=al(t,0);if(!(e&1))return on(t,vt()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var i=Fu(t);i!==0&&(e=i,n=ff(t,i))}if(n===1)throw n=Io,Mr(t,0),Fi(t,e),on(t,vt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,tn,ui),on(t,vt()),null}function Hd(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Ps=vt()+500,Gl&&ir())}}function Pr(t){zi!==null&&zi.tag===0&&!(je&6)&&xs();var e=je;je|=1;var n=bn.transition,i=Je;try{if(bn.transition=null,Je=1,t)return t()}finally{Je=i,bn.transition=n,je=e,!(je&6)&&ir()}}function Vd(){hn=us.current,lt(us)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Px(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Md(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dl();break;case 3:Cs(),lt(rn),lt(Gt),Ld();break;case 5:bd(i);break;case 4:Cs();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:Ad(i.type._context);break;case 22:case 23:Vd()}n=n.return}if(Dt=t,St=t=Yi(t.current,null),Ft=hn=e,At=0,Io=null,zd=$l=Rr=0,tn=mo=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vr=null}return t}function O_(t,e){do{var n=St;try{if(Td(),Ga.current=Sl,yl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yl=!1}if(Cr=0,Lt=Tt=dt=null,ho=!1,bo=0,kd.current=null,n===null||n.return===null){At=1,Io=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=ap(o);if(p!==null){p.flags&=-257,lp(p,o,a,s,e),p.mode&1&&op(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){op(s,c,e),Gd();break e}l=Error(ne(426))}}else if(ct&&a.mode&1){var m=ap(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),lp(m,o,a,s,e),Ed(Rs(l,a));break e}}s=l=Rs(l,a),At!==4&&(At=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=y_(s,l,e);ep(s,u);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Xi===null||!Xi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=S_(s,a,e);ep(s,S);break e}}s=s.return}while(s!==null)}B_(n)}catch(C){e=C,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function k_(){var t=Ml.current;return Ml.current=Sl,t===null?Sl:t}function Gd(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(Rr&268435455)&&!($l&268435455)||Fi(Dt,Ft)}function Tl(t,e){var n=je;je|=2;var i=k_();(Dt!==t||Ft!==e)&&(ui=null,Mr(t,e));do try{ey();break}catch(r){O_(t,r)}while(!0);if(Td(),je=n,Ml.current=i,St!==null)throw Error(ne(261));return Dt=null,Ft=0,At}function ey(){for(;St!==null;)z_(St)}function ty(){for(;St!==null&&!A0();)z_(St)}function z_(t){var e=V_(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?B_(t):St=e,kd.current=null}function B_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,St=null;return}}else if(n=$x(n,e,hn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);At===0&&(At=5)}function hr(t,e,n){var i=Je,r=bn.transition;try{bn.transition=null,Je=1,ny(t,e,n,i)}finally{bn.transition=r,Je=i}return null}function ny(t,e,n,i){do xs();while(zi!==null);if(je&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F0(t,s),t===Dt&&(St=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fa||(fa=!0,G_(ol,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=Je;Je=1;var a=je;je|=4,kd.current=null,Kx(t,n),U_(n,t),Mx(Vu),ll=!!Hu,Vu=Hu=null,t.current=n,Zx(n),C0(),je=a,Je=o,bn.transition=s}else t.current=n;if(fa&&(fa=!1,zi=t,wl=r),s=t.pendingLanes,s===0&&(Xi=null),b0(n.stateNode),on(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(El)throw El=!1,t=cf,cf=null,t;return wl&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===uf?go++:(go=0,uf=t):go=0,ir(),null}function xs(){if(zi!==null){var t=yg(wl),e=bn.transition,n=Je;try{if(bn.transition=null,Je=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,wl=0,je&6)throw Error(ne(331));var r=je;for(je|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:po(8,f,s)}var h=f.child;if(h!==null)h.return=f,pe=h;else for(;pe!==null;){f=pe;var d=f.sibling,p=f.return;if(L_(f),f===c){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,pe=x;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xl(9,a)}}catch(C){mt(a,a.return,C)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(je=r,ir(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{Je=n,bn.transition=e}}return!1}function Sp(t,e,n){e=Rs(n,e),e=y_(t,e,1),t=ji(t,e,1),e=$t(),t!==null&&(zo(t,1,e),on(t,e))}function mt(t,e,n){if(t.tag===3)Sp(t,t,n);else for(;e!==null;){if(e.tag===3){Sp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=Rs(n,t),t=S_(e,t,1),e=ji(e,t,1),t=$t(),e!==null&&(zo(e,1,t),on(e,t));break}}e=e.return}}function iy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(At===4||At===3&&(Ft&130023424)===Ft&&500>vt()-Bd?Mr(t,0):zd|=n),on(t,e)}function H_(t,e){e===0&&(t.mode&1?(e=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):e=1);var n=$t();t=yi(t,e),t!==null&&(zo(t,e,n),on(t,n))}function ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H_(t,n)}function sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),H_(t,n)}var V_;V_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,Xx(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ct&&e.flags&1048576&&Xg(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ja(t,e),t=e.pendingProps;var r=ws(e,Gt.current);vs(e,n),r=Id(null,e,i,t,r,n);var s=Ud();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rd(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,Zu(e,i,t,n),e=ef(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Sd(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ay(i),t=kn(i,t),r){case 0:e=Ju(null,e,i,t,n);break e;case 1:e=fp(null,e,i,t,n);break e;case 11:e=cp(null,e,i,t,n);break e;case 14:e=up(null,e,i,kn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Ju(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),fp(t,e,i,r,n);case 3:e:{if(T_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qg(t,e),vl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Rs(Error(ne(423)),e),e=dp(t,e,i,n,r);break e}else if(i!==r){r=Rs(Error(ne(424)),e),e=dp(t,e,i,n,r);break e}else for(mn=Wi(e.stateNode.containerInfo.firstChild),_n=e,ct=!0,Hn=null,n=Kg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===r){e=Si(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return Jg(e),t===null&&Yu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Gu(i,r)?o=null:s!==null&&Gu(i,s)&&(e.flags|=32),w_(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Yu(e),null;case 13:return A_(t,e,n);case 4:return Pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),cp(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(gl,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!rn.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vs(e,n),r=Ln(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),up(t,e,i,r,n);case 15:return M_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),ja(t,e),e.tag=1,sn(i)?(t=!0,hl(e)):t=!1,vs(e,n),x_(e,i,r),Zu(e,i,r,n),ef(null,e,i,!0,t,n);case 19:return C_(t,e,n);case 22:return E_(t,e,n)}throw Error(ne(156,e.tag))};function G_(t,e){return gg(t,e)}function oy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new oy(t,e,n,i)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ay(t){if(typeof t=="function")return Wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cd)return 11;if(t===ud)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ya(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return Er(n.children,r,s,e);case ld:o=8,r|=8;break;case Su:return t=Rn(12,n,e,r|2),t.elementType=Su,t.lanes=s,t;case Mu:return t=Rn(13,n,e,r),t.elementType=Mu,t.lanes=s,t;case Eu:return t=Rn(19,n,e,r),t.elementType=Eu,t.lanes=s,t;case Jm:return Yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zm:o=10;break e;case Qm:o=9;break e;case cd:o=11;break e;case ud:o=14;break e;case Di:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Yl(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Jm,t.lanes=n,t.stateNode={isHidden:!1},t}function Uc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jd(t,e,n,i,r,s,o,a,l){return t=new ly(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rd(s),t}function cy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function W_(t){if(!t)return Qi;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(sn(n))return Wg(t,n,e)}return e}function j_(t,e,n,i,r,s,o,a,l){return t=jd(n,i,!0,t,r,s,o,a,l),t.context=W_(null),n=t.current,i=$t(),r=$i(n),s=gi(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,zo(t,r,i),on(t,i),t}function ql(t,e,n,i){var r=e.current,s=$t(),o=$i(r);return n=W_(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,o),t!==null&&(Xn(t,r,o,s),Va(t,r,o)),o}function Al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xd(t,e){Mp(t,e),(t=t.alternate)&&Mp(t,e)}function uy(){return null}var X_=typeof reportError=="function"?reportError:function(t){console.error(t)};function $d(t){this._internalRoot=t}Kl.prototype.render=$d.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));ql(t,e,null,null)};Kl.prototype.unmount=$d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){ql(null,t,null,null)}),e[xi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Tg(t)}};function Yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ep(){}function fy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Al(o);s.call(c)}}var o=j_(e,i,t,0,null,!1,!1,"",Ep);return t._reactRootContainer=o,t[xi]=o.current,To(t.nodeType===8?t.parentNode:t),Pr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Al(l);a.call(c)}}var l=jd(t,0,!1,null,null,!1,!1,"",Ep);return t._reactRootContainer=l,t[xi]=l.current,To(t.nodeType===8?t.parentNode:t),Pr(function(){ql(e,l,n,i)}),l}function Ql(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Al(o);a.call(l)}}ql(e,o,t,r)}else o=fy(n,e,t,r,i);return Al(o)}Sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(hd(e,n|1),on(e,vt()),!(je&6)&&(Ps=vt()+500,ir()))}break;case 13:Pr(function(){var i=yi(t,1);if(i!==null){var r=$t();Xn(i,t,1,r)}}),Xd(t,1)}};pd=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=$t();Xn(e,t,134217728,n)}Xd(t,134217728)}};Mg=function(t){if(t.tag===13){var e=$i(t),n=yi(t,e);if(n!==null){var i=$t();Xn(n,t,e,i)}Xd(t,e)}};Eg=function(){return Je};wg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Iu=function(t,e,n){switch(e){case"input":if(Au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vl(i);if(!r)throw Error(ne(90));tg(i),Au(i,r)}}}break;case"textarea":ig(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};ug=Hd;fg=Pr;var dy={usingClientEntryPoint:!1,Events:[Ho,rs,Vl,lg,cg,Hd]},Ys={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hy={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!da.isDisabled&&da.supportsFiber)try{kl=da.inject(hy),ei=da}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dy;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(e))throw Error(ne(200));return cy(t,e,null,n)};yn.createRoot=function(t,e){if(!Yd(t))throw Error(ne(299));var n=!1,i="",r=X_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jd(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,To(t.nodeType===8?t.parentNode:t),new $d(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=pg(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Pr(t)};yn.hydrate=function(t,e,n){if(!Zl(e))throw Error(ne(200));return Ql(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Yd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=X_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=j_(e,null,t,1,n??null,r,!1,s,o),t[xi]=e.current,To(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kl(e)};yn.render=function(t,e,n){if(!Zl(e))throw Error(ne(200));return Ql(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(ne(40));return t._reactRootContainer?(Pr(function(){Ql(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};yn.unstable_batchedUpdates=Hd;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Ql(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function $_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($_)}catch(t){console.error(t)}}$_(),$m.exports=yn;var py=$m.exports,wp=py;xu.createRoot=wp.createRoot,xu.hydrateRoot=wp.hydrateRoot;function my(t,e="model.obj"){const n=[],i=[],r=[],s=[],o=[],a=[];let l="default";const c=t.split(/\r?\n/);for(const p of c){const g=p.trim();if(!g||g.startsWith("#"))continue;const v=g.split(/\s+/),m=v[0];if(m==="v"&&v.length>=4)n.push(Number(v[1]),Number(v[2]),Number(v[3]));else if(m==="vt"&&v.length>=3)i.push(Number(v[1]),Number(v[2]));else if(m==="vn"&&v.length>=4)r.push(Number(v[1]),Number(v[2]),Number(v[3]));else if(m==="o"||m==="g")l=v.slice(1).join(" ")||"default";else if(m==="f"&&v.length>=4){const u=s.length,_=[];for(let S=1;S<v.length;S++){const C=v[S],T=C.split("/"),A=Fc(T[0],n.length/3),P=T[1]!==void 0&&T[1]!==""?Fc(T[1],i.length/2):-1,H=T[2]!==void 0&&T[2]!==""?Fc(T[2],r.length/3):-1;if(A<0)throw new Error(`面 #${u+1} 存在无法解析的顶点引用: "${C}"`);_.push(o.length),o.push({v:A,vt:P,vn:H})}for(const S of _){const C=o[S],T=n.length/3,A=i.length/2,P=r.length/3;if(C.v>=T)throw new Error(`面 #${u+1} 引用了不存在的 v ${C.v+1}`);if(C.vt>=A)throw new Error(`面 #${u+1} 引用了不存在的 vt ${C.vt+1}`);if(C.vn>=P)throw new Error(`面 #${u+1} 引用了不存在的 vn ${C.vn+1}`)}const x={id:u,cornerIds:_,group:l};s.push(x);for(let S=1;S+1<_.length;S++)a.push({id:a.length,faceId:u,corners:[_[0],_[S],_[S+1]]})}}if(s.length===0)throw new Error("OBJ 中没有任何面（至少需要一行 f）");const f=Float64Array.from(n),h=i.length>=2,d=h?Float64Array.from(i):_y(f);if(!h)for(const p of o)p.vt=p.v;return{sourceObj:t,fileName:e,positions:f,uvs:d,normals:Float64Array.from(r),faces:s,corners:o,triangles:a,cornerTri:gy(a,o.length),vertexCount:f.length/3,uvCount:d.length/2,hasUv:h,uvOrigin:h?"obj":"planar-fallback"}}function gy(t,e){const n=new Int32Array(e).fill(-1);for(const i of t)n[i.corners[0]]=i.id,n[i.corners[1]]=i.id,n[i.corners[2]]=i.id;return n}function Fc(t,e){const n=parseInt(t,10);return Number.isFinite(n)?n>0?n-1:e+n:-1}function _y(t){let e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let g=0;g<t.length;g+=3){const v=t[g],m=t[g+1],u=t[g+2];e=Math.min(e,v),r=Math.max(r,v),n=Math.min(n,m),s=Math.max(s,m),i=Math.min(i,u),o=Math.max(o,u)}const a={x:r-e||1,y:s-n||1,z:o-i||1},l={x:e,y:n,z:i},c=["x","y","z"].map(g=>({a:g,s:a[g]})).sort((g,v)=>v.s-g.s).map(g=>g.a),f=c[0],h=c[1],d={x:0,y:1,z:2},p=new Float64Array(t.length/3*2);for(let g=0,v=0;g<t.length;g+=3,v+=2)p[v]=(t[g+d[f]]-l[f])/a[f],p[v+1]=1-(t[g+d[h]]-l[h])/a[h];return p}function $n(t,e){const n=t.corners[e],i=n.vt>=0?n.vt:n.v;return[t.uvs[i*2],t.uvs[i*2+1]]}function wr(t,e){const n=t.corners[e].v;return{x:t.positions[n*3],y:t.positions[n*3+1],z:t.positions[n*3+2]}}const Cl=1e-10;function Jn(t,e){return{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z}}function Y_(t,e){return{x:t.y*e.z-t.z*e.y,y:t.z*e.x-t.x*e.z,z:t.x*e.y-t.y*e.x}}function vy(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}function Bi(t){return Math.hypot(t.x,t.y,t.z)}function hf(t){const e=t.triangles.length,n=new Array(e);let i={x:1/0,y:1/0,z:1/0},r={x:-1/0,y:-1/0,z:-1/0};for(let m=0;m<t.positions.length;m+=3){const u={x:t.positions[m],y:t.positions[m+1],z:t.positions[m+2]};i={x:Math.min(i.x,u.x),y:Math.min(i.y,u.y),z:Math.min(i.z,u.z)},r={x:Math.max(r.x,u.x),y:Math.max(r.y,u.y),z:Math.max(r.z,u.z)}}const s=Math.max(Bi(Jn(r,i)),Cl);let o=1/0,a=1/0,l=-1/0,c=-1/0;for(let m=0;m<t.uvs.length;m+=2)o=Math.min(o,t.uvs[m]),l=Math.max(l,t.uvs[m]),a=Math.min(a,t.uvs[m+1]),c=Math.max(c,t.uvs[m+1]);const f=Math.max(Math.hypot(l-o,c-a),Cl),h=[];for(const m of t.triangles){const[u,_,x]=m.corners,S=wr(t,u),C=wr(t,_),T=wr(t,x),[A,P]=$n(t,u),[H,y]=$n(t,_),[E,G]=$n(t,x),B=Jn(C,S),X=Jn(T,S),V=Y_(B,X),F=Bi(V)/2,ee=((H-A)*(G-P)-(E-A)*(y-P))/2,L=Math.abs(ee),Y=xy(S,C,T,s)<1e-7,Z=yy(A,P,H,y,E,G,f)<1e-7,se=!Y&&!Z&&ee<0;!Y&&!Z&&h.push(F/L);let Ee=null;if(!Y&&!Z){const ze=My(S,C,T),$=Ey(A,P,H,y,E,G);let J=0;for(let ae=0;ae<3;ae++)J=Math.max(J,Math.abs(ze[ae]-$[ae]));Ee=J*180/Math.PI}n[m.id]={area3d:F,areaUv:L,signed3d:1,signedUv:ee,degenerate3d:Y,degenerateUv:Z,flipped:se,areaRatio:null,angleDistortion:Ee}}const d=Sy(h)||1;for(const m of n)!m.degenerate3d&&!m.degenerateUv&&(m.areaRatio=Math.sqrt(m.area3d/m.areaUv/d));const p=wy(t,s),g=Ay(t,n,s),v=Cy(t,g,n);for(const m of g){let u=0;for(const _ of m.triIds)v[_]&&u++;m.overlapTriCount=u}return{metrics:n,edges:p,islands:g,overlap:v,globalScale:Math.sqrt(d),bounds3d:{min:i,max:r}}}function q_(t,e){const n=Math.max(...e);return n===0?0:2*t/(n*n)}function xy(t,e,n,i){const r=Bi(Y_(Jn(e,t),Jn(n,t)))/2,s=[Bi(Jn(t,e)),Bi(Jn(e,n)),Bi(Jn(n,t))];return Math.min(...s)<=1e-9*i?0:q_(r,s)}function yy(t,e,n,i,r,s,o){const a=Math.abs((n-t)*(s-e)-(r-t)*(i-e))/2,l=[Math.hypot(n-t,i-e),Math.hypot(r-n,s-i),Math.hypot(t-r,e-s)];return Math.min(...l)<=1e-9*o?0:q_(a,l)}function Sy(t){if(t.length===0)return 0;const e=[...t].sort((i,r)=>i-r),n=e.length>>1;return e.length%2?e[n]:(e[n-1]+e[n])/2}function My(t,e,n){return[Oc(t,e,n),Oc(e,t,n),Oc(n,t,e)]}function Oc(t,e,n){const i=Jn(e,t),r=Jn(n,t),s=vy(i,r)/(Bi(i)*Bi(r));return Math.acos(Math.min(1,Math.max(-1,s)))}function Ey(t,e,n,i,r,s){const o=(a,l,c,f,h,d)=>{const p=(c*h+f*d)/(Math.hypot(c,f)*Math.hypot(h,d));return Math.acos(Math.min(1,Math.max(-1,p))+0*a+0*l)};return[o(t,e,n-t,i-e,r-t,s-e),o(n,i,t-n,e-i,r-n,s-i),o(r,s,t-r,e-s,n-r,i-s)]}function wy(t,e){const n=1e-7*e,i=n*n,r=Ty(t,i),s=new Map;for(const a of t.triangles){const l=[[a.corners[0],a.corners[1]],[a.corners[1],a.corners[2]],[a.corners[2],a.corners[0]]];for(const[c,f]of l){const h=t.corners[c].v,d=t.corners[f].v,p=r[h],g=r[d],v=Math.min(p,g),m=Math.max(p,g),u=`${v}_${m}`;let _=s.get(u);_||(_=[],s.set(u,_)),_.push(p===v?{tri:a.id,ca:c,cb:f,va:h,vb:d}:{tri:a.id,ca:f,cb:c,va:d,vb:h})}}const o=[];for(const[a,l]of s){const[c,f]=a.split("_").map(Number),h=l.length===1,d=l.length>=3;let p=!1;if(l.length===2){const g=l[0].va!==l[1].va||l[0].vb!==l[1].vb,v=Tp(t,l[0].ca,l[1].ca)||Tp(t,l[0].cb,l[1].cb);p=g||v}o.push({key:a,a:c,b:f,occurrences:l.map(g=>({tri:g.tri,ca:g.ca,cb:g.cb})),boundary:h,nonManifold:d,seam:p})}return o}function Ty(t,e){const n=t.vertexCount,i=new Int32Array(n);for(let a=0;a<n;a++)i[a]=a;const r=a=>{let l=a;for(;i[l]!==l;)l=i[l];for(;i[a]!==l;){const c=i[a];i[a]=l,a=c}return l},s=(a,l)=>{i[r(a)]=r(l)};for(let a=0;a<n;a++)for(let l=a+1;l<n;l++){const c=t.positions[a*3]-t.positions[l*3],f=t.positions[a*3+1]-t.positions[l*3+1],h=t.positions[a*3+2]-t.positions[l*3+2];c*c+f*f+h*h<=e&&s(a,l)}const o=new Int32Array(n);for(let a=0;a<n;a++)o[a]=r(a);return o}function Tp(t,e,n){const i=t.corners[e],r=t.corners[n];if(i.vt>=0&&r.vt>=0&&i.vt===r.vt)return!1;const[s,o]=$n(t,e),[a,l]=$n(t,n);return Math.hypot(s-a,o-l)>1e-6}function Ay(t,e,n){const i=g=>{const[v,m]=$n(t,g);return`p${v.toFixed(6)}_${m.toFixed(6)}`},r=new Int32Array(t.triangles.length);for(let g=0;g<r.length;g++)r[g]=g;const s=g=>{let v=g;for(;r[v]!==v;)v=r[v];for(;r[g]!==v;){const m=r[g];r[g]=v,g=m}return v},o=(g,v)=>{r[s(g)]=s(v)},a=1e-7*n,l=a*a,c=(g,v)=>{const m=t.corners[g].v,u=t.corners[v].v;if(m===u)return!0;const _=t.positions[m*3]-t.positions[u*3],x=t.positions[m*3+1]-t.positions[u*3+1],S=t.positions[m*3+2]-t.positions[u*3+2];return _*_+x*x+S*S<=l},f=new Map;for(const g of t.triangles){const v=[[g.corners[0],g.corners[1]],[g.corners[1],g.corners[2]],[g.corners[2],g.corners[0]]];for(const[m,u]of v){const _=wr(t,m),x=wr(t,u),S=[Ap(_,a),Ap(x,a)].sort().join("|"),C=f.get(S);C?C.push({tri:g.id,ca:m,cb:u}):f.set(S,[{tri:g.id,ca:m,cb:u}])}}for(const g of f.values())for(let v=0;v<g.length;v++)for(let m=v+1;m<g.length;m++){const u=g[v],_=g[m],x=c(u.ca,_.ca)&&c(u.cb,_.cb),S=c(u.ca,_.cb)&&c(u.cb,_.ca);if(!x&&!S)continue;const C=(A,P)=>{const H=t.corners[A],y=t.corners[P];return H.vt>=0&&y.vt>=0&&H.vt===y.vt?!0:i(A)===i(P)};(x?C(u.ca,_.ca)&&C(u.cb,_.cb):C(u.ca,_.cb)&&C(u.cb,_.ca))&&o(u.tri,_.tri)}const h=new Map;for(const g of t.triangles){const v=s(g.id),m=h.get(v);m?m.push(g.id):h.set(v,[g.id])}const d=[];let p=0;for(const[,g]of h){let v=0;for(const m of g){const u=e[m];!u.degenerate3d&&!u.degenerateUv&&u.flipped&&v++}d.push({id:p++,triIds:g,mirrored:v>0,overlapTriCount:0})}return d}function Ap(t,e){const n=i=>Math.round(i/e).toString();return`${n(t.x)},${n(t.y)},${n(t.z)}`}function Cy(t,e,n){const i=t.triangles.length,r=new Uint8Array(i),s=[];let o=1/0,a=1/0,l=-1/0,c=-1/0;for(const v of e)for(const m of v.triIds){const u=n[m];if(u.degenerate3d||u.degenerateUv)continue;const _=t.triangles[m],x=[0,1,2].map(y=>$n(t,_.corners[y])),S=[x[0][0],x[1][0],x[2][0]],C=[x[0][1],x[1][1],x[2][1]],T=Math.min(...S),A=Math.max(...S),P=Math.min(...C),H=Math.max(...C);o=Math.min(o,T),l=Math.max(l,A),a=Math.min(a,P),c=Math.max(c,H),s.push({id:m,island:v.id,u:S,v:C,minU:T,minV:P,maxU:A,maxV:H})}const f=32,h=Math.max(l-o,Cl),d=Math.max(c-a,Cl),p=Array.from({length:f*f},()=>[]);for(const v of s){const m=Math.min(f-1,Math.max(0,Math.floor((v.minU-o)/h*f))),u=Math.min(f-1,Math.max(0,Math.floor((v.maxU-o)/h*f))),_=Math.min(f-1,Math.max(0,Math.floor((v.minV-a)/d*f))),x=Math.min(f-1,Math.max(0,Math.floor((v.maxV-a)/d*f)));for(let S=m;S<=u;S++)for(let C=_;C<=x;C++)p[C*f+S].push(v)}const g=new Set;for(const v of p)for(let m=0;m<v.length;m++)for(let u=m+1;u<v.length;u++){const _=v[m],x=v[u];if(_.island===x.island)continue;const S=_.id<x.id?_.id*i+x.id:x.id*i+_.id;if(g.has(S)||(g.add(S),_.maxU<x.minU||x.maxU<_.minU||_.maxV<x.minV||x.maxV<_.minV))continue;by(_,x)>1e-9&&(r[_.id]=1,r[x.id]=1)}return r}function Ry(t,e){const i=(e.u[1]-e.u[0])*(e.v[2]-e.v[0])-(e.u[2]-e.u[0])*(e.v[1]-e.v[0])>=0?[0,1,2]:[0,2,1];let r=t;for(let s=0;s<3;s++){const o=i[s],a=i[(s+1)%3],l=[e.u[o],e.v[o]],c=[e.u[a],e.v[a]],f=[],h=d=>(c[0]-l[0])*(d[1]-l[1])-(c[1]-l[1])*(d[0]-l[0])>=0;for(let d=0;d<r.length;d++){const p=r[d],g=r[(d+r.length-1)%r.length],v=h(p),m=h(g);v?(m||f.push(Cp(g,p,l,c)),f.push(p)):m&&f.push(Cp(g,p,l,c))}if(r=f,r.length===0)break}return r}function Cp(t,e,n,i){const r=[e[0]-t[0],e[1]-t[1]],s=[i[0]-n[0],i[1]-n[1]],o=((n[0]-t[0])*s[1]-(n[1]-t[1])*s[0])/(r[0]*s[1]-r[1]*s[0]);return[t[0]+o*r[0],t[1]+o*r[1]]}function Py(t){let e=0;for(let n=0;n<t.length;n++){const i=t[n],r=t[(n+1)%t.length];e+=i[0]*r[1]-r[0]*i[1]}return Math.abs(e)/2}function by(t,e){const n=[[t.u[0],t.v[0]],[t.u[1],t.v[1]],[t.u[2],t.v[2]]];return Py(Ry(n,e))}function Rp(t){var a;const e=[];e.push("# 低模 UV 检查器导出"),e.push(`# 来源: ${t.fileName}`),e.push(`# 三角面: ${t.triangles.length}  原始面: ${t.faces.length}`),e.push(`# UV 来源: ${t.uvOrigin==="obj"?"OBJ/编辑后":"平面回退"}`),e.push("o LowpolyUVExport");const n=l=>{const c=l.toFixed(6);return c==="-0.000000"?"0.000000":c},i=new Map,r=[],s=new Int32Array(t.corners.length);for(let l=0;l<t.corners.length;l++){const c=t.corners[l],f=c.vt>=0?c.vt:c.v,h=t.uvs[f*2],d=t.uvs[f*2+1],p=`${n(h)}/${n(d)}`;let g=i.get(p);g===void 0&&(g=r.length+1,i.set(p,g),r.push([h,d])),s[l]=g}for(let l=0;l<t.corners.length;l++){const c=t.corners[l];e.push(`v ${n(t.positions[c.v*3])} ${n(t.positions[c.v*3+1])} ${n(t.positions[c.v*3+2])}`)}for(const[l,c]of r)e.push(`vt ${n(l)} ${n(c)}`);let o=null;for(const l of t.triangles){const c=(a=t.faces[l.faceId])==null?void 0:a.group;c!==void 0&&c!==o&&(e.push(`g ${c}`),o=c);const f=l.corners.map(h=>`${h+1}/${s[h]}`);e.push(`f ${f.join(" ")}`)}return e.join(`
`)+`
`}const Ly="modulepreload",Dy=function(t){return"/"+t},Pp={},Iy=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=Dy(l),l in Pp)return;Pp[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Ly,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let kc=null;function Uy(){return kc||(kc=Iy(()=>import("./index-DpDOvC7f.js"),[]).then(t=>(t.default??t)())),kc}const Ny=1e-12;async function Fy(t){const e=await Uy(),n=new Int32Array(t.corners.length),i=[];for(let l=0;l<t.corners.length;l++){const c=wr(t,l);let f=-1;for(let h=0;h<i.length;h+=3){const d=i[h]-c.x,p=i[h+1]-c.y,g=i[h+2]-c.z;if(d*d+p*p+g*g<=Ny){f=h/3;break}}f<0&&(f=i.length/3,i.push(c.x,c.y,c.z)),n[l]=f}const r=t.triangles.length,s=new Uint32Array(r*3);for(const l of t.triangles)s[l.id*3]=n[l.corners[0]],s[l.id*3+1]=n[l.corners[1]],s[l.id*3+2]=n[l.corners[2]];const o=Float32Array.from(i),a=e.createAtlas();try{const l=a.addMesh({positions:o,indices:s});if(l!==e.AddMeshError.Success)throw new Error(`xatlas 拒绝该网格：${e.addMeshErrorString(l)}（非流形或索引非法）`);a.addMeshJoin(),a.generate({normalSeamWeight:4,textureSeamWeight:.5,fixWinding:!1,maxIterations:2},{padding:4,bilinear:!0,rotateCharts:!0});const c=a.getMesh(0);if(c.indexCount!==s.length)throw new Error(`xatlas 输出三角形数变化（${s.length/3} -> ${c.indexCount/3}），放弃映射`);const f=Math.max(1,a.width),h=Math.max(1,a.height),d=new Array(i.length/3).fill(null);for(const v of c.vertices){if(v.xref<0||v.xref>=d.length)continue;const m=v.uv[0]/f,u=v.uv[1]/h;d[v.xref]===null&&(d[v.xref]=[m,u])}const p=new Float64Array(t.corners.length*2);for(let v=0;v<r;v++){const m=t.triangles[v];for(let u=0;u<3;u++){const _=c.indices[v*3+u],x=c.vertices[_],S=x.uv[0]/f,C=x.uv[1]/h,T=m.corners[u];p[T*2]=S,p[T*2+1]=C}}for(let v=0;v<t.corners.length;v++)if(!Number.isFinite(p[v*2])){const m=n[v],u=d[m];u&&(p[v*2]=u[0],p[v*2+1]=u[1])}const g=a.getUtilization(0);return{uvs:p,chartCount:a.chartCount,utilization:g}}finally{a.destroy()}}const Oy="lowpoly-uv-inspector",Rl="projects",ky=1;function zy(){return new Promise((t,e)=>{const n=indexedDB.open(Oy,ky);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(Rl)||i.createObjectStore(Rl,{keyPath:"id"}).createIndex("updatedAt","updatedAt")},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}function Jl(t,e){return zy().then(n=>new Promise((i,r)=>{const s=n.transaction(Rl,t),o=e(s.objectStore(Rl));o.onsuccess=()=>{s.oncomplete=()=>{n.close(),i(o.result)}},o.onerror=()=>{n.close(),r(o.error)}}))}function By(t){return Jl("readwrite",e=>e.put({...t,updatedAt:Date.now()})).then(()=>{})}function Hy(){return Jl("readonly",t=>t.index("updatedAt").getAll()).then(t=>t.reverse())}function Vy(t){return Jl("readonly",e=>e.get(t))}function Gy(t){return Jl("readwrite",e=>e.delete(t)).then(()=>{})}function Wy(){return`p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}function jy(t,e){switch(e.type){case"load":return{...t,mesh:e.mesh,stats:e.stats,objText:e.objText,fileName:e.fileName,projectId:e.projectId,selectedFaceIds:new Set,activeGroup:null,unwrapping:!1,history:[],notice:null};case"replace-mesh":return{...t,mesh:e.mesh,stats:e.stats,activeGroup:null,history:t.mesh?[...t.history,t.mesh].slice(-10):t.history,notice:e.notice??t.notice};case"select":return{...t,selectedFaceIds:e.faceIds};case"toggle-face":{const n=new Set(t.selectedFaceIds);return n.has(e.faceId)?n.delete(e.faceId):n.add(e.faceId),{...t,selectedFaceIds:n}}case"set-group":return{...t,activeGroup:e.group,selectedFaceIds:new Set};case"set-checker":return{...t,checkerOn:e.on,checkerScale:e.scale??t.checkerScale};case"toggle-flag":return{...t,[e.key]:!t[e.key]};case"unwrapping":return{...t,unwrapping:e.on};case"notice":return{...t,notice:e.notice};case"project-id":return{...t,projectId:e.id};case"undo":{if(t.history.length===0)return t;const n=t.history[t.history.length-1];return{...t,mesh:n,stats:hf(n),activeGroup:null,selectedFaceIds:new Set,history:t.history.slice(0,-1),notice:{kind:"info",text:"已撤销上一次 UV 替换"}}}default:return t}}const K_=Le.createContext(null);function Xy({children:t}){const[e,n]=Le.useReducer(jy,void 0,()=>({mesh:null,stats:null,objText:"",fileName:"",projectId:null,selectedFaceIds:new Set,activeGroup:null,checkerOn:!0,checkerScale:8,showFlipped:!0,showOverlap:!0,unwrapping:!1,notice:null,history:[]})),i=Le.useRef(e);i.current=e;const[r,s]=Le.useReducer((C,T)=>T,[]),o=Le.useCallback(async()=>{try{s(await Hy())}catch{}},[]);Le.useEffect(()=>{o()},[o]);const a=Le.useCallback(C=>{n({type:"notice",notice:C})},[]),l=Le.useCallback((C,T,A=null)=>{try{const P=my(C,T),H=hf(P);n({type:"load",mesh:P,stats:H,objText:C,fileName:T,projectId:A})}catch(P){n({type:"notice",notice:{kind:"error",text:`解析失败：${P instanceof Error?P.message:String(P)}`}})}},[]),c=Le.useCallback(C=>{n({type:"select",faceIds:C})},[]),f=Le.useCallback(C=>{n({type:"toggle-face",faceId:C})},[]),h=Le.useCallback(C=>{n({type:"set-group",group:C})},[]),d=Le.useCallback((C,T)=>{n({type:"set-checker",on:C,scale:T})},[]),p=Le.useCallback(C=>{n({type:"toggle-flag",key:C})},[]),g=Le.useCallback(async()=>{const C=i.current.mesh;if(!(!C||i.current.unwrapping)){n({type:"unwrapping",on:!0}),n({type:"notice",notice:{kind:"info",text:"xatlas WASM 展开中…"}});try{const T=await Fy(C);if(!Number.isFinite(T.utilization)||T.uvs.length!==C.corners.length*2)throw new Error("xatlas 返回结果不完整");const A={...C,uvs:T.uvs,uvCount:T.uvs.length/2,hasUv:!0,uvOrigin:"obj",corners:C.corners.map((H,y)=>({...H,vt:y}))};A.uvs=T.uvs;const P=hf(A);n({type:"replace-mesh",mesh:A,stats:P,notice:{kind:"success",text:`自动展开完成：${T.chartCount} 个图，利用率 ${(T.utilization*100).toFixed(0)}%`}})}catch(T){n({type:"notice",notice:{kind:"error",text:`自动展开失败，已保留原模型：${T instanceof Error?T.message:String(T)}`}})}finally{n({type:"unwrapping",on:!1})}}},[]),v=Le.useCallback(()=>{const C=i.current.mesh;if(!C)return;const T=Rp(C),A=new Blob([T],{type:"text/plain;charset=utf-8"}),P=URL.createObjectURL(A),H=document.createElement("a");H.href=P,H.download=C.fileName.replace(/\.obj$/i,"")+"_uv.obj",document.body.appendChild(H),H.click(),H.remove(),setTimeout(()=>URL.revokeObjectURL(P),1e3),n({type:"notice",notice:{kind:"success",text:"已导出 OBJ，可用 Blender/Maya 等重新载入验证"}})},[]),m=Le.useCallback(async()=>{const C=i.current.mesh;if(!C)return;const T=i.current.projectId??Wy(),A=Rp(C),P={id:T,name:C.fileName,updatedAt:Date.now(),objText:A,fileName:C.fileName};try{await By(P),n({type:"project-id",id:T}),n({type:"notice",notice:{kind:"success",text:`工程已存入 IndexedDB（${T}）`}}),await o()}catch(H){n({type:"notice",notice:{kind:"error",text:`保存失败：${H instanceof Error?H.message:String(H)}`}})}},[o]),u=Le.useCallback(async C=>{try{const T=await Vy(C);if(!T)return;l(T.objText,T.fileName,C)}catch(T){n({type:"notice",notice:{kind:"error",text:`打开工程失败：${T instanceof Error?T.message:String(T)}`}})}},[l]),_=Le.useCallback(async C=>{await Gy(C),i.current.projectId===C&&n({type:"project-id",id:null}),await o()},[o]),x=Le.useCallback(()=>n({type:"undo"}),[]),S=Le.useMemo(()=>({state:e,loadObjText:l,selectFaces:c,toggleFace:f,setActiveGroup:h,setChecker:d,toggleFlag:p,runUnwrap:g,exportCurrent:v,saveCurrent:m,projects:r,refreshProjects:o,openProject:u,removeProject:_,notify:a,undo:x}),[e,r,l,c,f,h,d,p,g,v,m,o,u,_,a,x]);return W.jsx(K_.Provider,{value:S,children:t})}function Nr(){const t=Le.useContext(K_);if(!t)throw new Error("useApp must be used within AppProvider");return t}const Go=(t,e)=>`# ${t}
# ${e}
`,$y=`${Go("镜像岛样例","折边两侧映射到同一 UV 区域，第二片 UV 反向")}
v -1 0 0
v  0 0 0
v  0 1 0
v  0 0 0
v  1 0 0
v  0 1 0
vt 0 0
vt 1 0
vt 1 1
f 1/1 2/2 3/3
f 4/1 5/3 6/2
`;function Yy(){const t=[Go("共享边接缝样例","立方体：相邻面顶点独立、每面独占 UV 格子，共享边均为接缝")],e=(r,s,o)=>[r,s,o],n=[[e(-1,-1,-1),e(1,-1,-1),e(1,1,-1),e(-1,1,-1)],[e(1,-1,1),e(-1,-1,1),e(-1,1,1),e(1,1,1)],[e(1,-1,-1),e(1,-1,1),e(1,1,1),e(1,1,-1)],[e(-1,-1,1),e(-1,-1,-1),e(-1,1,-1),e(-1,1,1)],[e(-1,1,-1),e(1,1,-1),e(1,1,1),e(-1,1,1)],[e(-1,-1,1),e(1,-1,1),e(1,-1,-1),e(-1,-1,-1)]];for(const r of n)for(const[s,o,a]of r)t.push(`v ${s*.5} ${o*.5} ${a*.5}`);const i=[[0,0],[2,0],[4,0],[0,2],[2,2],[4,2]];for(const[r,s]of i)for(const[o,a]of[[0,0],[1,0],[1,1],[0,1]])t.push(`vt ${r+o} ${s+a}`);return n.forEach((r,s)=>{const o=s*4+1,a=s*4+1;t.push(`f ${o}/${a} ${o+1}/${a+1} ${o+2}/${a+2}`),t.push(`f ${o}/${a} ${o+2}/${a+2} ${o+3}/${a+3}`)}),t.join(`
`)+`
`}const qy=`${Go("非流形边样例","三个三角形共享同一条 3D 边（鳍片结构）")}
v -1 0 0
v  1 0 0
v  0 0 -1
v  0 1 0
v  0 -1 0
vt 0 0
vt 1 0
vt 0.5 1
vt 2 0
vt 3 0
vt 2.5 1
vt 4 0
vt 5 0
vt 4.5 1
f 1/1 2/2 3/3
f 1/4 2/5 4/6
f 1/7 2/8 5/9
`,Ky=`${Go("退化/拉伸/重叠混合样例","A 正常, B 3D退化(共线), C UV拉伸, D 与 A 岛间重叠")}
v 0 0 0
v 1 0 0
v 1 1 0
v 0 0 0
v 0.5 0 0
v 1 0 0
v 2 0 0
v 3 0 0
v 3 1 0
v 0 -1 0
v 1 -1 0
v 1 0 0
vt 0 0
vt 1 0
vt 1 1
vt 2 0
vt 2.5 0
vt 3 0
vt 0 0
vt 1 0
vt 1 0.02
f 1/1 2/2 3/3
f 4/4 5/5 6/6
f 7/7 8/8 9/9
f 10/1 11/2 12/3
`,Zy=`${Go("分组异常对照样例","Part_A 翻转 / Part_B UV 退化，中间一个 UV 岛跨两组")}
v 0 0 0
v 1 0 0
v 1 1 0
v 0 1 0
v 0 -1 0
v 1 -1 0
v 1 -0.6 0
v 2 0 0
v 2 1 0
v 3 0 0
v 4 0 0
v 4 1 0
vt 0 0
vt 1 0
vt 1 1
vt 0 1
vt 2 0
vt 2 1
vt 3 1
vt 2 0
vt 2 1
vt 3.6 0
vt 3.7 0
vt 3.75 0
g Part_A
f 1/1 2/2 3/3
f 1/1 3/3 4/4
f 5/5 6/6 7/7
g Part_B
f 2/2 8/8 9/9 3/3
f 10/10 11/11 12/12
`,Z_=[{id:"mirrored",label:"镜像岛",description:"折边两侧映射到同一 UV 区域，绕序相反",obj:$y},{id:"seams",label:"共享边接缝",description:"立方体：每面顶点独立、UV 各占一格，共享边全为接缝",obj:Yy()},{id:"nonmanifold",label:"非流形边",description:"三个三角形共享一条 3D 边",obj:qy},{id:"degenerate",label:"退化/拉伸/重叠",description:"退化面不计比率，另有强拉伸与岛间重叠",obj:Ky},{id:"grouped",label:"分组异常对照",description:"两组各带不同异常，另含一个跨组 UV 岛",obj:Zy}];function Qy(){const{state:t,loadObjText:e,runUnwrap:n,exportCurrent:i,saveCurrent:r,projects:s,openProject:o,removeProject:a,setChecker:l,toggleFlag:c,undo:f}=Nr(),h=Le.useRef(null),d=async p=>{const g=await p.text();e(g,p.name)};return W.jsxs("header",{className:"toolbar",children:[W.jsx("div",{className:"brand",children:"低模 UV 检查器"}),W.jsx("button",{onClick:()=>{var p;return(p=h.current)==null?void 0:p.click()},children:"载入 OBJ"}),W.jsx("input",{ref:h,type:"file",accept:".obj,text/plain",style:{display:"none"},onChange:p=>{var v;const g=(v=p.target.files)==null?void 0:v[0];g&&d(g),p.target.value=""}}),W.jsx("span",{className:"sep"}),W.jsxs("div",{className:"dropdown",children:[W.jsx("button",{children:"样例 ▾"}),W.jsx("div",{className:"menu",children:Z_.map(p=>W.jsx("button",{title:p.description,onClick:()=>e(p.obj,`${p.id}.obj`),children:p.label},p.id))})]}),W.jsx("button",{className:"primary",disabled:!t.mesh||t.unwrapping,onClick:()=>void n(),title:"调用 xatlas WASM 重新展开；失败时自动保留原模型",children:t.unwrapping?"展开中…":"xatlas 自动展开"}),W.jsxs("button",{disabled:t.history.length===0,onClick:f,children:["撤销 (",t.history.length,")"]}),W.jsx("span",{className:"sep"}),W.jsxs("label",{className:"chk",children:[W.jsx("input",{type:"checkbox",checked:t.checkerOn,onChange:p=>l(p.target.checked)}),"棋盘"]}),W.jsx("select",{value:t.checkerScale,onChange:p=>l(t.checkerOn,Number(p.target.value)),title:"0..1 UV 内棋盘格数",children:[4,8,16,32].map(p=>W.jsxs("option",{value:p,children:[p,"×",p]},p))}),W.jsxs("label",{className:"chk",children:[W.jsx("input",{type:"checkbox",checked:t.showFlipped,onChange:()=>c("showFlipped")}),"翻转"]}),W.jsxs("label",{className:"chk",children:[W.jsx("input",{type:"checkbox",checked:t.showOverlap,onChange:()=>c("showOverlap")}),"重叠"]}),W.jsx("span",{className:"sep"}),W.jsx("button",{disabled:!t.mesh,onClick:i,title:"导出非索引 v/vt OBJ，标准工具可重新载入验证",children:"导出 UV OBJ"}),W.jsx("button",{disabled:!t.mesh,onClick:()=>void r(),children:"存工程"}),W.jsx("div",{className:"spacer"}),W.jsxs("div",{className:"dropdown align-right",children:[W.jsxs("button",{children:["工程库 (",s.length,") ▾"]}),W.jsxs("div",{className:"menu",children:[s.length===0&&W.jsx("div",{className:"menu-empty",children:"IndexedDB 暂无存档"}),s.map(p=>W.jsxs("div",{className:"menu-item",children:[W.jsxs("button",{className:"proj-open",title:`${new Date(p.updatedAt).toLocaleString()}
${p.id}`,onClick:()=>void o(p.id),children:[p.name,W.jsx("small",{children:new Date(p.updatedAt).toLocaleString()})]}),W.jsx("button",{className:"proj-del",onClick:()=>void a(p.id),children:"×"})]},p.id))]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="169",_i={ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jy=0,bp=1,eS=2,Q_=1,tS=2,ci=3,Ji=0,an=1,pn=2,qi=0,ys=1,Lp=2,Dp=3,Ip=4,nS=5,mr=100,iS=101,rS=102,sS=103,oS=104,aS=200,lS=201,cS=202,uS=203,pf=204,mf=205,fS=206,dS=207,hS=208,pS=209,mS=210,gS=211,_S=212,vS=213,xS=214,gf=0,_f=1,vf=2,bs=3,xf=4,yf=5,Sf=6,Mf=7,J_=0,yS=1,SS=2,Ki=0,MS=1,ES=2,wS=3,TS=4,AS=5,CS=6,RS=7,ev=300,Ls=301,Ds=302,Ef=303,wf=304,ec=306,Uo=1e3,yr=1001,Tf=1002,Pn=1003,PS=1004,ha=1005,Vn=1006,zc=1007,Sr=1008,Mi=1009,tv=1010,nv=1011,No=1012,Kd=1013,br=1014,pi=1015,Wo=1016,Zd=1017,Qd=1018,Is=1020,iv=35902,rv=1021,sv=1022,Wn=1023,ov=1024,av=1025,Ss=1026,Us=1027,lv=1028,Jd=1029,cv=1030,eh=1031,th=1033,qa=33776,Ka=33777,Za=33778,Qa=33779,Af=35840,Cf=35841,Rf=35842,Pf=35843,bf=36196,Lf=37492,Df=37496,If=37808,Uf=37809,Nf=37810,Ff=37811,Of=37812,kf=37813,zf=37814,Bf=37815,Hf=37816,Vf=37817,Gf=37818,Wf=37819,jf=37820,Xf=37821,Ja=36492,$f=36494,Yf=36495,uv=36283,qf=36284,Kf=36285,Zf=36286,bS=3200,LS=3201,fv=0,DS=1,Oi="",Bn="srgb",rr="srgb-linear",nh="display-p3",tc="display-p3-linear",Pl="linear",at="srgb",bl="rec709",Ll="p3",zr=7680,Up=519,IS=512,US=513,NS=514,dv=515,FS=516,OS=517,kS=518,zS=519,Np=35044,Fp="300 es",mi=2e3,Dl=2001;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=Math.PI/180,Qf=180/Math.PI;function jo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function BS(t,e){return(t%e+e)%e}function Bc(t,e,n){return(1-n)*t+n*e}function qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const HS={DEG2RAD:el};class De{constructor(e=0,n=0){De.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],u=r[6],_=r[1],x=r[4],S=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*v+a*_+l*C,s[3]=o*m+a*x+l*T,s[6]=o*u+a*S+l*A,s[1]=c*v+f*_+h*C,s[4]=c*m+f*x+h*T,s[7]=c*u+f*S+h*A,s[2]=d*v+p*_+g*C,s[5]=d*m+p*x+g*T,s[8]=d*u+p*S+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,p=c*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hc.makeScale(e,n)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new Fe;function hv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VS(){const t=Il("canvas");return t.style.display="block",t}const Op={};function tl(t){t in Op||(Op[t]=!0,console.warn(t))}function GS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function WS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const kp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[rr]:{transfer:Pl,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Bn]:{transfer:at,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tc]:{transfer:Pl,primaries:Ll,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(zp),fromReference:t=>t.applyMatrix3(kp)},[nh]:{transfer:at,primaries:Ll,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(zp),fromReference:t=>t.applyMatrix3(kp).convertLinearToSRGB()}},XS=new Set([rr,tc]),Ze={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!XS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ks[e].toReference,r=Ks[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ks[t].primaries},getTransfer:function(t){return t===Oi?Pl:Ks[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ks[e].luminanceCoefficients)}};function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class $S{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Il("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YS=0;class pv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gc(r[o].image)):s.push(Gc(r[o]))}else s=Gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$S.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qS=0;class Yt extends Fr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=yr,r=yr,s=Vn,o=Sr,a=Wn,l=Mi,c=Yt.DEFAULT_ANISOTROPY,f=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=jo(),this.name="",this.source=new pv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uo:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uo:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=ev;Yt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,C=(u+1)/2,T=(f+d)/4,A=(h+v)/4,P=(g+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(d-f)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KS extends Fr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new pv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends KS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mv extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZS extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h!==v||l!==d||c!==p||f!==g){let m=1-a;const u=l*d+c*p+f*g+h*v,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,u*_);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*_;if(l=l*m+d*S,c=c*m+p*S,f=f*m+g*S,h=h*m+v*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=C,c*=C,f*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+f*h+l*p-c*d,e[n+1]=l*g+f*d+c*h-a*p,e[n+2]=c*g+f*p+a*d-l*h,e[n+3]=f*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"YXZ":this._x=d*f*h+c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"ZXY":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h-d*p*g;break;case"ZYX":this._x=d*f*h-c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h+d*p*g;break;case"YZX":this._x=d*f*h+c*p*g,this._y=c*p*h+d*f*g,this._z=c*f*g-d*p*h,this._w=c*f*h-d*p*g;break;case"XZY":this._x=d*f*h-c*p*g,this._y=c*p*h-d*f*g,this._z=c*f*g+d*p*h,this._w=c*f*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new N,Bp=new Dr;class Xo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),ma.subVectors(this.max,Zs),Hr.subVectors(e.a,Zs),Vr.subVectors(e.b,Zs),Gr.subVectors(e.c,Zs),Ai.subVectors(Vr,Hr),Ci.subVectors(Gr,Vr),or.subVectors(Hr,Gr);let n=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-or.z,or.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,or.z,0,-or.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-or.y,or.x,0];return!jc(n,Hr,Vr,Gr,ma)||(n=[1,0,0,0,1,0,0,0,1],!jc(n,Hr,Vr,Gr,ma))?!1:(ga.crossVectors(Ai,Ci),n=[ga.x,ga.y,ga.z],jc(n,Hr,Vr,Gr,ma))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new N,new N,new N,new N,new N,new N,new N,new N],Nn=new N,pa=new Xo,Hr=new N,Vr=new N,Gr=new N,Ai=new N,Ci=new N,or=new N,Zs=new N,ma=new N,ga=new N,ar=new N;function jc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ar.fromArray(t,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),c=n.dot(ar),f=i.dot(ar);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const QS=new Xo,Qs=new N,Xc=new N;class nc{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):QS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Xc)),this.expandByPoint(Qs.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new N,$c=new N,_a=new N,Ri=new N,Yc=new N,va=new N,qc=new N;class ic{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$c.copy(e).add(n).multiplyScalar(.5),_a.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub($c);const s=e.distanceTo(n)*.5,o=-this.direction.dot(_a),a=Ri.dot(this.direction),l=-Ri.dot(_a),c=Ri.lengthSq(),f=Math.abs(1-o*o);let h,d,p,g;if(f>0)if(h=o*l-a,d=o*a-l,g=s*f,h>=0)if(d>=-g)if(d<=g){const v=1/f;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($c).addScaledVector(_a,d),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){Yc.subVectors(n,e),va.subVectors(i,e),qc.crossVectors(Yc,va);let o=this.direction.dot(qc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(Ri,va));if(l<0)return null;const c=a*this.direction.dot(Yc.cross(Ri));if(c<0||l+c>o)return null;const f=-a*Ri.dot(qc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,c,f,h,d,p,g,v,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,f,h,d,p,g,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,g=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,g=c*f,v=c*h;n[0]=d+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,g=c*f,v=c*h;n[0]=d-v*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,g=a*f,v=a*h;n[0]=l*f,n[4]=g*c-p,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*f,n[4]=v-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+g,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+v,n[5]=o*f,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JS,e,eM)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Pi.crossVectors(i,fn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Pi.crossVectors(i,fn)),Pi.normalize(),xa.crossVectors(fn,Pi),r[0]=Pi.x,r[4]=xa.x,r[8]=fn.x,r[1]=Pi.y,r[5]=xa.y,r[9]=fn.y,r[2]=Pi.z,r[6]=xa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],u=i[14],_=i[3],x=i[7],S=i[11],C=i[15],T=r[0],A=r[4],P=r[8],H=r[12],y=r[1],E=r[5],G=r[9],B=r[13],X=r[2],V=r[6],F=r[10],ee=r[14],L=r[3],Y=r[7],Z=r[11],se=r[15];return s[0]=o*T+a*y+l*X+c*L,s[4]=o*A+a*E+l*V+c*Y,s[8]=o*P+a*G+l*F+c*Z,s[12]=o*H+a*B+l*ee+c*se,s[1]=f*T+h*y+d*X+p*L,s[5]=f*A+h*E+d*V+p*Y,s[9]=f*P+h*G+d*F+p*Z,s[13]=f*H+h*B+d*ee+p*se,s[2]=g*T+v*y+m*X+u*L,s[6]=g*A+v*E+m*V+u*Y,s[10]=g*P+v*G+m*F+u*Z,s[14]=g*H+v*B+m*ee+u*se,s[3]=_*T+x*y+S*X+C*L,s[7]=_*A+x*E+S*V+C*Y,s[11]=_*P+x*G+S*F+C*Z,s[15]=_*H+x*B+S*ee+C*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*f-s*l*f)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],u=e[15],_=h*m*c-v*d*c+v*l*p-a*m*p-h*l*u+a*d*u,x=g*d*c-f*m*c-g*l*p+o*m*p+f*l*u-o*d*u,S=f*v*c-g*h*c+g*a*p-o*v*p-f*a*u+o*h*u,C=g*h*l-f*v*l-g*a*d+o*v*d+f*a*m-o*h*m,T=n*_+i*x+r*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(v*d*s-h*m*s-v*r*p+i*m*p+h*r*u-i*d*u)*A,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(f*m*s-g*d*s+g*r*p-n*m*p-f*r*u+n*d*u)*A,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*A,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(g*h*s-f*v*s-g*i*p+n*v*p+f*i*u-n*h*u)*A,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*u+n*a*u)*A,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(f*v*r-g*h*r+g*i*d-n*v*d-f*i*m+n*h*m)*A,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,p=s*f,g=s*h,v=o*f,m=o*h,u=a*h,_=l*c,x=l*f,S=l*h,C=i.x,T=i.y,A=i.z;return r[0]=(1-(v+u))*C,r[1]=(p+S)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+u))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(g+x)*A,r[9]=(m-_)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Wr.set(r[0],r[1],r[2]).length();const o=Wr.set(r[4],r[5],r[6]).length(),a=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,f=1/o,h=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=f,Fn.elements[5]*=f,Fn.elements[6]*=f,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=mi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===mi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Dl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=mi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*f;let g,v;if(a===mi)g=(o+s)*h,v=-2*h;else if(a===Dl)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Wr=new N,Fn=new ut,JS=new N(0,0,0),eM=new N(1,1,1),Pi=new N,xa=new N,fn=new N,Hp=new ut,Vp=new Dr;class ni{constructor(e=0,n=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const Gp=new N,jr=new Dr,oi=new ut,ya=new N,Js=new N,nM=new N,iM=new Dr,Wp=new N(1,0,0),jp=new N(0,1,0),Xp=new N(0,0,1),$p={type:"added"},rM={type:"removed"},Xr={type:"childadded",child:null},Kc={type:"childremoved",child:null};class It extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new N,n=new ni,i=new Dr,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Fe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ya.copy(e):ya.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Js,ya,this.up):oi.lookAt(ya,Js,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(oi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($p),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rM),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($p),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new N(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new N,ai=new N,Zc=new N,li=new N,$r=new N,Yr=new N,Yp=new N,Qc=new N,Jc=new N,eu=new N,tu=new gt,nu=new gt,iu=new gt;class Gn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),ai.subVectors(i,n),Zc.subVectors(e,n);const o=On.dot(On),a=On.dot(ai),l=On.dot(Zc),c=ai.dot(ai),f=ai.dot(Zc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*f)*d,g=(o*f-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return tu.setScalar(0),nu.setScalar(0),iu.setScalar(0),tu.fromBufferAttribute(e,n),nu.fromBufferAttribute(e,i),iu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tu,s.x),o.addScaledVector(nu,s.y),o.addScaledVector(iu,s.z),o}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),ai.subVectors(e,n),On.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),Yr.subVectors(s,i),Qc.subVectors(e,i);const l=$r.dot(Qc),c=Yr.dot(Qc);if(l<=0&&c<=0)return n.copy(i);Jc.subVectors(e,r);const f=$r.dot(Jc),h=Yr.dot(Jc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector($r,o);eu.subVectors(e,s);const p=$r.dot(eu),g=Yr.dot(eu);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Yr,a);const m=f*g-p*h;if(m<=0&&h-f>=0&&p-g>=0)return Yp.subVectors(s,r),a=(h-f)/(h-f+(p-g)),n.copy(r).addScaledVector(Yp,a);const u=1/(m+v+d);return o=v*u,a=d*u,n.copy(i).addScaledVector($r,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=BS(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ru(o,s,e+1/3),this.g=ru(o,s,e),this.b=ru(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=gv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Ze.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Xt(Ht.r*255,0,255))*65536+Math.round(Xt(Ht.g*255,0,255))*256+Math.round(Xt(Ht.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Bn){Ze.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(Sa);const i=Bc(bi.h,Sa.h,n),r=Bc(bi.s,Sa.s,n),s=Bc(bi.l,Sa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Oe;Oe.NAMES=gv;let sM=0;class zs extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=ys,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pf&&(i.blendSrc=this.blendSrc),this.blendDst!==mf&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fo extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=J_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new N,Ma=new De;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Np,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ma.fromBufferAttribute(this,n),Ma.applyMatrix3(e),this.setXY(n,Ma.x,Ma.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class _v extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vv extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ct extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oM=0;const En=new ut,su=new It,qr=new N,dn=new Xo,eo=new Xo,bt=new N;class Mt extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hv(e)?vv:_v)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(dn.min,eo.min),dn.expandByPoint(bt),bt.addVectors(dn.max,eo.max),dn.expandByPoint(bt)):(dn.expandByPoint(eo.min),dn.expandByPoint(eo.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)bt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),bt.add(qr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const c=new N,f=new N,h=new N,d=new De,p=new De,g=new De,v=new N,m=new N;function u(P,H,y){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,H),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,H),g.fromBufferAttribute(s,y),f.sub(c),h.sub(c),p.sub(d),g.sub(d);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(E),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(E),a[P].add(v),a[H].add(v),a[y].add(v),l[P].add(m),l[H].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,H=_.length;P<H;++P){const y=_[P],E=y.start,G=y.count;for(let B=E,X=E+G;B<X;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new N,S=new N,C=new N,T=new N;function A(P){C.fromBufferAttribute(r,P),T.copy(C);const H=a[P];x.copy(H),x.sub(C.multiplyScalar(C.dot(H))).normalize(),S.crossVectors(T,H);const E=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,E)}for(let P=0,H=_.length;P<H;++P){const y=_[P],E=y.start,G=y.count;for(let B=E,X=E+G;B<X;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,f=new N,h=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*f;for(let u=0;u<f;u++)d[g++]=c[p++]}return new vn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new ut,lr=new ic,Ea=new nc,Kp=new N,wa=new N,Ta=new N,Aa=new N,ou=new N,Ca=new N,Zp=new N,Ra=new N;class gn extends It{constructor(e=new Mt,n=new Fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(ou.fromBufferAttribute(h,e),o?Ca.addScaledVector(ou,f):Ca.addScaledVector(ou.sub(n),f))}n.add(Ca)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Ea.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Ea,Kp)===null||lr.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(qp.copy(s).invert(),lr.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,C=x;S<C;S+=3){const T=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=Pa(this,u,e,i,c,f,h,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const _=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Pa(this,o,e,i,c,f,h,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,C=x;S<C;S+=3){const T=S,A=S+1,P=S+2;r=Pa(this,u,e,i,c,f,h,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const _=m,x=m+1,S=m+2;r=Pa(this,o,e,i,c,f,h,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aM(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ra);return c<n.near||c>n.far?null:{distance:c,point:Ra.clone(),object:t}}function Pa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,wa),t.getVertexPosition(l,Ta),t.getVertexPosition(c,Aa);const f=aM(t,e,n,i,wa,Ta,Aa,Zp);if(f){const h=new N;Gn.getBarycoord(Zp,wa,Ta,Aa,h),r&&(f.uv=Gn.getInterpolatedAttribute(r,a,l,c,h,new De)),s&&(f.uv1=Gn.getInterpolatedAttribute(s,a,l,c,h,new De)),o&&(f.normal=Gn.getInterpolatedAttribute(o,a,l,c,h,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Gn.getNormal(wa,Ta,Aa,d.normal),f.face=d,f.barycoord=h}return f}class $o extends Mt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(h,2));function g(v,m,u,_,x,S,C,T,A,P,H){const y=S/A,E=C/P,G=S/2,B=C/2,X=T/2,V=A+1,F=P+1;let ee=0,L=0;const Y=new N;for(let Z=0;Z<F;Z++){const se=Z*E-B;for(let Ee=0;Ee<V;Ee++){const ze=Ee*y-G;Y[v]=ze*_,Y[m]=se*x,Y[u]=X,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[u]=T>0?1:-1,f.push(Y.x,Y.y,Y.z),h.push(Ee/A),h.push(1-Z/P),ee+=1}}for(let Z=0;Z<P;Z++)for(let se=0;se<A;se++){const Ee=d+se+V*Z,ze=d+se+V*(Z+1),$=d+(se+1)+V*(Z+1),J=d+(se+1)+V*Z;l.push(Ee,ze,J),l.push(ze,$,J),L+=6}a.addGroup(p,L,H),p+=L,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function lM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const cM={clone:Ns,merge:Wt};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=lM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yv extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new N,Qp=new De,Jp=new De;class Cn extends yv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,Jp),n.subVectors(Jp,Qp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(el*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Kr=-90,Zr=1;class dM extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(Kr,Zr,e,n);r.layers=this.layers,this.add(r);const s=new Cn(Kr,Zr,e,n);s.layers=this.layers,this.add(s);const o=new Cn(Kr,Zr,e,n);o.layers=this.layers,this.add(o);const a=new Cn(Kr,Zr,e,n);a.layers=this.layers,this.add(a);const l=new Cn(Kr,Zr,e,n);l.layers=this.layers,this.add(l);const c=new Cn(Kr,Zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sv extends Yt{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ls,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hM extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $o(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:qi});s.uniforms.tEquirect.value=n;const o=new gn(r,s),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=Vn),new dM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const au=new N,pM=new N,mM=new Fe;class Ui{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(pM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mM.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new nc,ba=new N;class rh{constructor(e=new Ui,n=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],u=r[12],_=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-u).normalize(),i[1].setComponents(l+s,d+c,m+p,S+u).normalize(),i[2].setComponents(l+o,d+f,m+g,S+_).normalize(),i[3].setComponents(l-o,d-f,m-g,S-_).normalize(),i[4].setComponents(l-a,d-h,m-v,S-x).normalize(),n===mi)i[5].setComponents(l+a,d+h,m+v,S+x).normalize();else if(n===Dl)i[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gM(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];t.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class rc extends Mt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,p=[],g=[],v=[],m=[];for(let u=0;u<f;u++){const _=u*d-o;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const x=_+c*u,S=_+c*(u+1),C=_+1+c*(u+1),T=_+1+c*u;p.push(x,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var _M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,AM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,BM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",YM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:_M,alphahash_pars_fragment:vM,alphamap_fragment:xM,alphamap_pars_fragment:yM,alphatest_fragment:SM,alphatest_pars_fragment:MM,aomap_fragment:EM,aomap_pars_fragment:wM,batching_pars_vertex:TM,batching_vertex:AM,begin_vertex:CM,beginnormal_vertex:RM,bsdfs:PM,iridescence_fragment:bM,bumpmap_pars_fragment:LM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:UM,clipping_planes_vertex:NM,color_fragment:FM,color_pars_fragment:OM,color_pars_vertex:kM,color_vertex:zM,common:BM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:VM,displacementmap_pars_vertex:GM,displacementmap_vertex:WM,emissivemap_fragment:jM,emissivemap_pars_fragment:XM,colorspace_fragment:$M,colorspace_pars_fragment:YM,envmap_fragment:qM,envmap_common_pars_fragment:KM,envmap_pars_fragment:ZM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:cE,envmap_vertex:JM,fog_vertex:eE,fog_pars_vertex:tE,fog_fragment:nE,fog_pars_fragment:iE,gradientmap_pars_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:aE,lights_pars_begin:lE,lights_toon_fragment:uE,lights_toon_pars_fragment:fE,lights_phong_fragment:dE,lights_phong_pars_fragment:hE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:_E,lights_fragment_end:vE,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:wE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:RE,morphinstance_vertex:PE,morphcolor_vertex:bE,morphnormal_vertex:LE,morphtarget_pars_vertex:DE,morphtarget_vertex:IE,normal_fragment_begin:UE,normal_fragment_maps:NE,normal_pars_fragment:FE,normal_pars_vertex:OE,normal_vertex:kE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:BE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:GE,opaque_fragment:WE,packing:jE,premultiplied_alpha_fragment:XE,project_vertex:$E,dithering_fragment:YE,dithering_pars_fragment:qE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:JE,shadowmap_vertex:e1,shadowmask_pars_fragment:t1,skinbase_vertex:n1,skinning_pars_vertex:i1,skinning_vertex:r1,skinnormal_vertex:s1,specularmap_fragment:o1,specularmap_pars_fragment:a1,tonemapping_fragment:l1,tonemapping_pars_fragment:c1,transmission_fragment:u1,transmission_pars_fragment:f1,uv_pars_fragment:d1,uv_pars_vertex:h1,uv_vertex:p1,worldpos_vertex:m1,background_vert:g1,background_frag:_1,backgroundCube_vert:v1,backgroundCube_frag:x1,cube_vert:y1,cube_frag:S1,depth_vert:M1,depth_frag:E1,distanceRGBA_vert:w1,distanceRGBA_frag:T1,equirect_vert:A1,equirect_frag:C1,linedashed_vert:R1,linedashed_frag:P1,meshbasic_vert:b1,meshbasic_frag:L1,meshlambert_vert:D1,meshlambert_frag:I1,meshmatcap_vert:U1,meshmatcap_frag:N1,meshnormal_vert:F1,meshnormal_frag:O1,meshphong_vert:k1,meshphong_frag:z1,meshphysical_vert:B1,meshphysical_frag:H1,meshtoon_vert:V1,meshtoon_frag:G1,points_vert:W1,points_frag:j1,shadow_vert:X1,shadow_frag:$1,sprite_vert:Y1,sprite_frag:q1},oe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Zn={basic:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Wt([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Wt([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Wt([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Wt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Wt([oe.lights,oe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Zn.physical={uniforms:Wt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const La={r:0,b:0,g:0},ur=new ni,K1=new ut;function Z1(t,e,n,i,r,s,o){const a=new Oe(0);let l=s===!0?0:1,c,f,h=null,d=0,p=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function v(_){let x=!1;const S=g(_);S===null?u(a,l):S&&S.isColor&&(u(S,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===ec)?(f===void 0&&(f=new gn(new $o(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Ns(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ur.copy(x.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(ur)),f.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,(h!==S||d!==S.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new gn(new rc(2,2),new er({name:"BackgroundMaterial",uniforms:Ns(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,x){_.getRGB(La,xv(t)),i.buffers.color.setClear(La.r,La.g,La.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:v,addToRenderList:m}}function Q1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,E,G,B,X){let V=!1;const F=h(B,G,E);s!==F&&(s=F,c(s.object)),V=p(y,B,G,X),V&&g(y,B,G,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(y,E,G,B),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function h(y,E,G){const B=G.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let V=X[E.id];V===void 0&&(V={},X[E.id]=V);let F=V[B];return F===void 0&&(F=d(l()),V[B]=F),F}function d(y){const E=[],G=[],B=[];for(let X=0;X<n;X++)E[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:G,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,E,G,B){const X=s.attributes,V=E.attributes;let F=0;const ee=G.getAttributes();for(const L in ee)if(ee[L].location>=0){const Z=X[L];let se=V[L];if(se===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;F++}return s.attributesNum!==F||s.index!==B}function g(y,E,G,B){const X={},V=E.attributes;let F=0;const ee=G.getAttributes();for(const L in ee)if(ee[L].location>=0){let Z=V[L];Z===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),X[L]=se,F++}s.attributes=X,s.attributesNum=F,s.index=B}function v(){const y=s.newAttributes;for(let E=0,G=y.length;E<G;E++)y[E]=0}function m(y){u(y,0)}function u(y,E){const G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),X[y]!==E&&(t.vertexAttribDivisor(y,E),X[y]=E)}function _(){const y=s.newAttributes,E=s.enabledAttributes;for(let G=0,B=E.length;G<B;G++)E[G]!==y[G]&&(t.disableVertexAttribArray(G),E[G]=0)}function x(y,E,G,B,X,V,F){F===!0?t.vertexAttribIPointer(y,E,G,X,V):t.vertexAttribPointer(y,E,G,B,X,V)}function S(y,E,G,B){v();const X=B.attributes,V=G.getAttributes(),F=E.defaultAttributeValues;for(const ee in V){const L=V[ee];if(L.location>=0){let Y=X[ee];if(Y===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const Z=Y.normalized,se=Y.itemSize,Ee=e.get(Y);if(Ee===void 0)continue;const ze=Ee.buffer,$=Ee.type,J=Ee.bytesPerElement,ae=$===t.INT||$===t.UNSIGNED_INT||Y.gpuType===Kd;if(Y.isInterleavedBufferAttribute){const ce=Y.data,Ie=ce.stride,Te=Y.offset;if(ce.isInstancedInterleavedBuffer){for(let Ve=0;Ve<L.locationSize;Ve++)u(L.location+Ve,ce.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ve=0;Ve<L.locationSize;Ve++)m(L.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ve=0;Ve<L.locationSize;Ve++)x(L.location+Ve,se/L.locationSize,$,Z,Ie*J,(Te+se/L.locationSize*Ve)*J,ae)}else{if(Y.isInstancedBufferAttribute){for(let ce=0;ce<L.locationSize;ce++)u(L.location+ce,Y.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ce=0;ce<L.locationSize;ce++)m(L.location+ce);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ce=0;ce<L.locationSize;ce++)x(L.location+ce,se/L.locationSize,$,Z,se*J,se/L.locationSize*ce*J,ae)}}else if(F!==void 0){const Z=F[ee];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}_()}function C(){P();for(const y in i){const E=i[y];for(const G in E){const B=E[G];for(const X in B)f(B[X].object),delete B[X];delete E[G]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const G in E){const B=E[G];for(const X in B)f(B[X].object),delete B[X];delete E[G]}delete i[y.id]}function A(y){for(const E in i){const G=i[E];if(G[y.id]===void 0)continue;const B=G[y.id];for(const X in B)f(B[X].object),delete B[X];delete G[y.id]}}function P(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:H,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function J1(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let g=0;g<h;g++)p+=f[g];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];for(let v=0;v<d.length;v++)n.update(g,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ew(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Wn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Mi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pi&&!P)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:T}}function tw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ui,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const _=s?0:i,x=_*4;let S=u.clippingState||null;l.value=S,S=f(g,d,x,p);for(let C=0;C!==x;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,S=p;x!==v;++x,S+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function nw(t){let e=new WeakMap;function n(o,a){return a===Ef?o.mapping=Ls:a===wf&&(o.mapping=Ds),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ef||a===wf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sh extends yv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,em=[.125,.215,.35,.446,.526,.582],gr=20,lu=new sh,tm=new Oe;let cu=null,uu=0,fu=0,du=!1;const pr=(1+Math.sqrt(5))/2,Qr=1/pr,nm=[new N(-pr,Qr,0),new N(pr,Qr,0),new N(-Qr,0,pr),new N(Qr,0,pr),new N(0,pr,-Qr),new N(0,pr,Qr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,uu,fu),this._renderer.xr.enabled=du,e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Wo,format:Wn,colorSpace:rr,depthBuffer:!1},r=rm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iw(s)),this._blurMaterial=rw(s,e,n)}return r}_compileMaterial(e){const n=new gn(this._lodPlanes[0],e);this._renderer.compile(n,lu)}_sceneToCubeUV(e,n,i,r){const a=new Cn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(tm),f.toneMapping=Ki,f.autoClear=!1;const p=new Fo({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new gn(new $o,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(tm),v=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Da(r,_*x,u>2?x:0,x,x),f.setRenderTarget(r),v&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ls||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Da(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,lu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nm[(r-s-1)%nm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new gn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gr-1),v=s/g,m=isFinite(s)?1+Math.floor(f*v):gr;m>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);const u=[];let _=0;for(let A=0;A<gr;++A){const P=A/v,H=Math.exp(-P*P/2);u.push(H),A===0?_+=H:A<m&&(_+=2*H)}for(let A=0;A<u.length;A++)u[A]=u[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-ds?r-x+ds:0),T=4*(this._cubeSize-S);Da(n,C,T,3*S,2*S),l.setRenderTarget(n),l.render(h,lu)}}function iw(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+em.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ds?l=em[o-t+ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,v=3,m=2,u=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),S=new Float32Array(u*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,H=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(H,v*g*T),x.set(d,m*g*T);const y=[T,T,T,T,T,T];S.set(y,u*g*T)}const C=new Mt;C.setAttribute("position",new vn(_,v)),C.setAttribute("uv",new vn(x,m)),C.setAttribute("faceIndex",new vn(S,u)),e.push(C),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function rm(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Da(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rw(t,e,n){const i=new Float32Array(gr),r=new N(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function sm(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function om(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ef||l===wf,f=l===Ls||l===Ds;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new im(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new im(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ow(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&tl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aw(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,u=v.length;m<u;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,S=_.length;x<S;x+=3){const C=_[x+0],T=_[x+1],A=_[x+2];d.push(C,T,T,A,A,C)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const C=x+0,T=x+1,A=x+2;d.push(C,T,T,A,A,C)}}else return;const m=new(hv(d)?vv:_v)(d,1);m.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function lw(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function f(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function h(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_];for(let _=0;_<v.length;_++)n.update(u,i,v[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function cw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function uw(t,e,n){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let H=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let S=a.attributes.position.count*x,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*C*4*h),A=new mv(T,S,C,h);A.type=pi,A.needsUpdate=!0;const P=x*4;for(let y=0;y<h;y++){const E=m[y],G=u[y],B=_[y],X=S*C*4*y;for(let V=0;V<E.count;V++){const F=V*P;p===!0&&(r.fromBufferAttribute(E,V),T[X+F+0]=r.x,T[X+F+1]=r.y,T[X+F+2]=r.z,T[X+F+3]=0),g===!0&&(r.fromBufferAttribute(G,V),T[X+F+4]=r.x,T[X+F+5]=r.y,T[X+F+6]=r.z,T[X+F+7]=0),v===!0&&(r.fromBufferAttribute(B,V),T[X+F+8]=r.x,T[X+F+9]=r.y,T[X+F+10]=r.z,T[X+F+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new De(S,C)},i.set(a,d),a.addEventListener("dispose",H)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function fw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ev extends Yt{constructor(e,n,i,r,s,o,a,l,c,f=Ss){if(f!==Ss&&f!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ss&&(i=br),i===void 0&&f===Us&&(i=Is),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const wv=new Yt,am=new Ev(1,1),Tv=new mv,Av=new ZS,Cv=new Sv,lm=[],cm=[],um=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=lm[r];if(s===void 0&&(s=new Float32Array(r),lm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;dm.set(i),t.uniformMatrix2fv(this.addr,!1,dm),Pt(n,i)}}function _w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;fm.set(i),t.uniformMatrix3fv(this.addr,!1,fm),Pt(n,i)}}function vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;um.set(i),t.uniformMatrix4fv(this.addr,!1,um),Pt(n,i)}}function xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function Ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function Cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(am.compareFunction=dv,s=am):s=wv,n.setTexture2D(e||s,r)}function Rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Av,r)}function Pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Cv,r)}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Tv,r)}function Lw(t){switch(t){case 5126:return dw;case 35664:return hw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return _w;case 35676:return vw;case 5124:case 35670:return xw;case 35667:case 35671:return yw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return ww;case 36295:return Tw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return bw}}function Dw(t,e){t.uniform1fv(this.addr,e)}function Iw(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function Uw(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function Nw(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function Fw(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ow(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function kw(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zw(t,e){t.uniform1iv(this.addr,e)}function Bw(t,e){t.uniform2iv(this.addr,e)}function Hw(t,e){t.uniform3iv(this.addr,e)}function Vw(t,e){t.uniform4iv(this.addr,e)}function Gw(t,e){t.uniform1uiv(this.addr,e)}function Ww(t,e){t.uniform2uiv(this.addr,e)}function jw(t,e){t.uniform3uiv(this.addr,e)}function Xw(t,e){t.uniform4uiv(this.addr,e)}function $w(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||wv,s[o])}function Yw(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Av,s[o])}function qw(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Cv,s[o])}function Kw(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Tv,s[o])}function Zw(t){switch(t){case 5126:return Dw;case 35664:return Iw;case 35665:return Uw;case 35666:return Nw;case 35674:return Fw;case 35675:return Ow;case 35676:return kw;case 5124:case 35670:return zw;case 35667:case 35671:return Bw;case 35668:case 35672:return Hw;case 35669:case 35673:return Vw;case 5125:return Gw;case 36294:return Ww;case 36295:return jw;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return Kw}}class Qw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Lw(n.type)}}class Jw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Zw(n.type)}}class eT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function hm(t,e){t.seq.push(e),t.map[e.id]=e}function tT(t,e,n){const i=t.name,r=i.length;for(hu.lastIndex=0;;){const s=hu.exec(i),o=hu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hm(n,c===void 0?new Qw(a,t,e):new Jw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new eT(a),hm(n,h)),n=h}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);tT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function pm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nT=37297;let iT=0;function rT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function sT(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===Ll&&n===bl?i="LinearDisplayP3ToLinearSRGB":e===bl&&n===Ll&&(i="LinearSRGBToLinearDisplayP3"),t){case rr:case tc:return[i,"LinearTransferOETF"];case Bn:case nh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rT(t.getShaderSource(e),o)}else return r}function oT(t,e){const n=sT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function aT(t,e){let n;switch(e){case MS:n="Linear";break;case ES:n="Reinhard";break;case wS:n="Cineon";break;case TS:n="ACESFilmic";break;case CS:n="AgX";break;case RS:n="Neutral";break;case AS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ia=new N;function lT(){Ze.getLuminanceCoefficients(Ia);const t=Ia.x.toFixed(4),e=Ia.y.toFixed(4),n=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function uT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function oo(t){return t!==""}function gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _m(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(t){return t.replace(dT,pT)}const hT=new Map;function pT(t,e){let n=Ne[e];if(n===void 0){const i=hT.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jf(n)}const mT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(t){return t.replace(mT,gT)}function gT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _T(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Q_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===tS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function vT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ls:case Ds:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function yT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case J_:e="ENVMAP_BLENDING_MULTIPLY";break;case yS:e="ENVMAP_BLENDING_MIX";break;case SS:e="ENVMAP_BLENDING_ADD";break}return e}function ST(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function MT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_T(n),c=vT(n),f=xT(n),h=yT(n),d=ST(n),p=cT(n),g=uT(s),v=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(oo).join(`
`),u.length>0&&(u+=`
`)):(m=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),u=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Ki?aT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,oT("linearToOutputTexel",n.outputColorSpace),lT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oo).join(`
`)),o=Jf(o),o=gm(o,n),o=_m(o,n),a=Jf(a),a=gm(a,n),a=_m(a,n),o=vm(o),a=vm(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=_+m+o,S=_+u+a,C=pm(r,r.VERTEX_SHADER,x),T=pm(r,r.FRAGMENT_SHADER,S);r.attachShader(v,C),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(E){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(T).trim();let V=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,T);else{const ee=mm(r,C,"vertex"),L=mm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+G+`
`+ee+`
`+L)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||X==="")&&(F=!1);F&&(E.diagnostics={runnable:V,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:u}})}r.deleteShader(C),r.deleteShader(T),P=new nl(r,v),H=fT(r,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let H;this.getAttributes=function(){return H===void 0&&A(this),H};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,nT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let ET=0;class wT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TT(e),n.set(e,i)),i}}class TT{constructor(e){this.id=ET++,this.code=e,this.usedTimes=0}}function AT(t,e,n,i,r,s,o){const a=new ih,l=new wT,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,E,G,B,X){const V=B.fog,F=X.geometry,ee=y.isMeshStandardMaterial?B.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||ee),Y=L&&L.mapping===ec?L.image.height:null,Z=v[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ee=se!==void 0?se.length:0;let ze=0;F.morphAttributes.position!==void 0&&(ze=1),F.morphAttributes.normal!==void 0&&(ze=2),F.morphAttributes.color!==void 0&&(ze=3);let $,J,ae,ce;if(Z){const Qt=Zn[Z];$=Qt.vertexShader,J=Qt.fragmentShader}else $=y.vertexShader,J=y.fragmentShader,l.update(y),ae=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const Ie=t.getRenderTarget(),Te=X.isInstancedMesh===!0,Ve=X.isBatchedMesh===!0,et=!!y.map,Ge=!!y.matcap,b=!!L,ln=!!y.aoMap,Be=!!y.lightMap,Xe=!!y.bumpMap,Ce=!!y.normalMap,rt=!!y.displacementMap,be=!!y.emissiveMap,R=!!y.metalnessMap,M=!!y.roughnessMap,O=y.anisotropy>0,K=y.clearcoat>0,te=y.dispersion>0,q=y.iridescence>0,ye=y.sheen>0,le=y.transmission>0,me=O&&!!y.anisotropyMap,$e=K&&!!y.clearcoatMap,ie=K&&!!y.clearcoatNormalMap,ge=K&&!!y.clearcoatRoughnessMap,Re=q&&!!y.iridescenceMap,Pe=q&&!!y.iridescenceThicknessMap,_e=ye&&!!y.sheenColorMap,He=ye&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,nt=!!y.specularColorMap,D=!!y.specularIntensityMap,de=le&&!!y.transmissionMap,j=le&&!!y.thicknessMap,Q=!!y.gradientMap,ue=!!y.alphaMap,he=y.alphaTest>0,We=!!y.alphaHash,xt=!!y.extensions;let Zt=Ki;y.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Zt=t.toneMapping);const Ye={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:J,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&X._colorsTexture!==null,instancing:Te,instancingColor:Te&&X.instanceColor!==null,instancingMorph:Te&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:rr,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:Ge,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:Y,aoMap:ln,lightMap:Be,bumpMap:Xe,normalMap:Ce,displacementMap:p&&rt,emissiveMap:be,normalMapObjectSpace:Ce&&y.normalMapType===DS,normalMapTangentSpace:Ce&&y.normalMapType===fv,metalnessMap:R,roughnessMap:M,anisotropy:O,anisotropyMap:me,clearcoat:K,clearcoatMap:$e,clearcoatNormalMap:ie,clearcoatRoughnessMap:ge,dispersion:te,iridescence:q,iridescenceMap:Re,iridescenceThicknessMap:Pe,sheen:ye,sheenColorMap:_e,sheenRoughnessMap:He,specularMap:Ue,specularColorMap:nt,specularIntensityMap:D,transmission:le,transmissionMap:de,thicknessMap:j,gradientMap:Q,opaque:y.transparent===!1&&y.blending===ys&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:he,alphaHash:We,combine:y.combine,mapUv:et&&m(y.map.channel),aoMapUv:ln&&m(y.aoMap.channel),lightMapUv:Be&&m(y.lightMap.channel),bumpMapUv:Xe&&m(y.bumpMap.channel),normalMapUv:Ce&&m(y.normalMap.channel),displacementMapUv:rt&&m(y.displacementMap.channel),emissiveMapUv:be&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:me&&m(y.anisotropyMap.channel),clearcoatMapUv:$e&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(y.sheenRoughnessMap.channel),specularMapUv:Ue&&m(y.specularMap.channel),specularColorMapUv:nt&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:de&&m(y.transmissionMap.channel),thicknessMapUv:j&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ce||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!F.attributes.uv&&(et||ue),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:Zt,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&y.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)E.push(G),E.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(x(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const E=v[y.type];let G;if(E){const B=Zn[E];G=cM.clone(B.uniforms)}else G=y.uniforms;return G}function T(y,E){let G;for(let B=0,X=f.length;B<X;B++){const V=f[B];if(V.cacheKey===E){G=V,++G.usedTimes;break}}return G===void 0&&(G=new MT(t,E,y,s),f.push(G)),G}function A(y){if(--y.usedTimes===0){const E=f.indexOf(y);f[E]=f[f.length-1],f.pop(),y.destroy()}}function P(y){l.remove(y)}function H(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:C,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:f,dispose:H}}function CT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function RT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,g,v,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=v,u.group=m),e++,u}function a(h,d,p,g,v,m){const u=o(h,d,p,g,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,d,p,g,v,m){const u=o(h,d,p,g,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||RT),i.length>1&&i.sort(d||ym),r.length>1&&r.sort(d||ym)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function PT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Sm,t.set(i,[o])):r>=s.length?(o=new Sm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function bT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Oe};break;case"SpotLight":n={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function LT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DT=0;function IT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UT(t){const e=new bT,n=LT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ut,o=new ut;function a(c){let f=0,h=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,_=0,x=0,S=0,C=0,T=0,A=0;c.sort(IT);for(let H=0,y=c.length;H<y;H++){const E=c[H],G=E.color,B=E.intensity,X=E.distance,V=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=G.r*B,h+=G.g*B,d+=G.b*B;else if(E.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(E.sh.coefficients[F],B);A++}else if(E.isDirectionalLight){const F=e.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ee=E.shadow,L=n.get(E);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=E.shadow.matrix,_++}i.directional[p]=F,p++}else if(E.isSpotLight){const F=e.get(E);F.position.setFromMatrixPosition(E.matrixWorld),F.color.copy(G).multiplyScalar(B),F.distance=X,F.coneCos=Math.cos(E.angle),F.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),F.decay=E.decay,i.spot[v]=F;const ee=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,ee.updateMatrices(E),E.castShadow&&T++),i.spotLightMatrix[v]=ee.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=V,S++}v++}else if(E.isRectAreaLight){const F=e.get(E);F.color.copy(G).multiplyScalar(B),F.halfWidth.set(E.width*.5,0,0),F.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=F,m++}else if(E.isPointLight){const F=e.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),F.distance=E.distance,F.decay=E.decay,E.castShadow){const ee=E.shadow,L=n.get(E);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,L.shadowCameraNear=ee.camera.near,L.shadowCameraFar=ee.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=E.shadow.matrix,x++}i.point[g]=F,g++}else if(E.isHemisphereLight){const F=e.get(E);F.skyColor.copy(E.color).multiplyScalar(B),F.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[u]=F,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==_||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=_,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=A,i.version=DT++)}function l(c,f){let h=0,d=0,p=0,g=0,v=0;const m=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Mm(t){const e=new UT(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function NT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Mm(t),e.set(r,[a])):s>=o.length?(a=new Mm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class FT extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OT extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BT(t,e,n){let i=new rh;const r=new De,s=new De,o=new gt,a=new FT({depthPacking:LS}),l=new OT,c={},f=n.maxTextureSize,h={[Ji]:an,[an]:Ji,[pn]:pn},d=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:kT,fragmentShader:zT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new gn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q_;let u=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const H=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),G=t.state;G.setBlending(qi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=u!==ci&&this.type===ci,X=u===ci&&this.type!==ci;for(let V=0,F=T.length;V<F;V++){const ee=T[V],L=ee.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Y=L.getFrameExtents();if(r.multiply(Y),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,L.mapSize.y=s.y)),L.map===null||B===!0||X===!0){const se=this.type!==ci?{minFilter:Pn,magFilter:Pn}:{};L.map!==null&&L.map.dispose(),L.map=new Lr(r.x,r.y,se),L.map.texture.name=ee.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let se=0;se<Z;se++){const Ee=L.getViewport(se);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),G.viewport(o),L.updateMatrices(ee,se),i=L.getFrustum(),S(A,P,L.camera,ee,this.type)}L.isPointLightShadow!==!0&&this.type===ci&&_(L,P),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(H,y,E)};function _(T,A){const P=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Lr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,p,v,null)}function x(T,A,P,H){let y=null;const E=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)y=E;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=y.uuid,B=A.uuid;let X=c[G];X===void 0&&(X={},c[G]=X);let V=X[B];V===void 0&&(V=y.clone(),X[B]=V,A.addEventListener("dispose",C)),y=V}if(y.visible=A.visible,y.wireframe=A.wireframe,H===ci?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=t.properties.get(y);G.light=P}return y}function S(T,A,P,H,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ci)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const B=e.update(T),X=T.material;if(Array.isArray(X)){const V=B.groups;for(let F=0,ee=V.length;F<ee;F++){const L=V[F],Y=X[L.materialIndex];if(Y&&Y.visible){const Z=x(T,Y,H,y);T.onBeforeShadow(t,T,A,P,B,Z,L),t.renderBufferDirect(P,null,B,Z,T,L),T.onAfterShadow(t,T,A,P,B,Z,L)}}}else if(X.visible){const V=x(T,X,H,y);T.onBeforeShadow(t,T,A,P,B,V,null),t.renderBufferDirect(P,null,B,V,T,null),T.onAfterShadow(t,T,A,P,B,V,null)}}const G=T.children;for(let B=0,X=G.length;B<X;B++)S(G[B],A,P,H,y)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const H=c[P],y=T.target.uuid;y in H&&(H[y].dispose(),delete H[y])}}}const HT={[gf]:_f,[vf]:Sf,[xf]:Mf,[bs]:yf,[_f]:gf,[Sf]:vf,[Mf]:xf,[yf]:bs};function VT(t){function e(){let D=!1;const de=new gt;let j=null;const Q=new gt(0,0,0,0);return{setMask:function(ue){j!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),j=ue)},setLocked:function(ue){D=ue},setClear:function(ue,he,We,xt,Zt){Zt===!0&&(ue*=xt,he*=xt,We*=xt),de.set(ue,he,We,xt),Q.equals(de)===!1&&(t.clearColor(ue,he,We,xt),Q.copy(de))},reset:function(){D=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,j=null,Q=null,ue=null;return{setReversed:function(he){de=he},setTest:function(he){he?ae(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(he){j!==he&&!D&&(t.depthMask(he),j=he)},setFunc:function(he){if(de&&(he=HT[he]),Q!==he){switch(he){case gf:t.depthFunc(t.NEVER);break;case _f:t.depthFunc(t.ALWAYS);break;case vf:t.depthFunc(t.LESS);break;case bs:t.depthFunc(t.LEQUAL);break;case xf:t.depthFunc(t.EQUAL);break;case yf:t.depthFunc(t.GEQUAL);break;case Sf:t.depthFunc(t.GREATER);break;case Mf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=he}},setLocked:function(he){D=he},setClear:function(he){ue!==he&&(t.clearDepth(he),ue=he)},reset:function(){D=!1,j=null,Q=null,ue=null}}}function i(){let D=!1,de=null,j=null,Q=null,ue=null,he=null,We=null,xt=null,Zt=null;return{setTest:function(Ye){D||(Ye?ae(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ye){de!==Ye&&!D&&(t.stencilMask(Ye),de=Ye)},setFunc:function(Ye,Qt,ii){(j!==Ye||Q!==Qt||ue!==ii)&&(t.stencilFunc(Ye,Qt,ii),j=Ye,Q=Qt,ue=ii)},setOp:function(Ye,Qt,ii){(he!==Ye||We!==Qt||xt!==ii)&&(t.stencilOp(Ye,Qt,ii),he=Ye,We=Qt,xt=ii)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Zt!==Ye&&(t.clearStencil(Ye),Zt=Ye)},reset:function(){D=!1,de=null,j=null,Q=null,ue=null,he=null,We=null,xt=null,Zt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,u=null,_=null,x=null,S=null,C=null,T=new Oe(0,0,0),A=0,P=!1,H=null,y=null,E=null,G=null,B=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,F=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ee)[1]),V=F>=1):ee.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),V=F>=2);let L=null,Y={};const Z=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Ee=new gt().fromArray(Z),ze=new gt().fromArray(se);function $(D,de,j,Q){const ue=new Uint8Array(4),he=t.createTexture();t.bindTexture(D,he),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<j;We++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(de+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return he}const J={};J[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),s.setFunc(bs),Be(!1),Xe(bp),ae(t.CULL_FACE),b(qi);function ae(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ce(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ie(D,de){return f[D]!==de?(t.bindFramebuffer(D,de),f[D]=de,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Te(D,de){let j=d,Q=!1;if(D){j=h.get(de),j===void 0&&(j=[],h.set(de,j));const ue=D.textures;if(j.length!==ue.length||j[0]!==t.COLOR_ATTACHMENT0){for(let he=0,We=ue.length;he<We;he++)j[he]=t.COLOR_ATTACHMENT0+he;j.length=ue.length,Q=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,Q=!0);Q&&t.drawBuffers(j)}function Ve(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const et={[mr]:t.FUNC_ADD,[iS]:t.FUNC_SUBTRACT,[rS]:t.FUNC_REVERSE_SUBTRACT};et[sS]=t.MIN,et[oS]=t.MAX;const Ge={[aS]:t.ZERO,[lS]:t.ONE,[cS]:t.SRC_COLOR,[pf]:t.SRC_ALPHA,[mS]:t.SRC_ALPHA_SATURATE,[hS]:t.DST_COLOR,[fS]:t.DST_ALPHA,[uS]:t.ONE_MINUS_SRC_COLOR,[mf]:t.ONE_MINUS_SRC_ALPHA,[pS]:t.ONE_MINUS_DST_COLOR,[dS]:t.ONE_MINUS_DST_ALPHA,[gS]:t.CONSTANT_COLOR,[_S]:t.ONE_MINUS_CONSTANT_COLOR,[vS]:t.CONSTANT_ALPHA,[xS]:t.ONE_MINUS_CONSTANT_ALPHA};function b(D,de,j,Q,ue,he,We,xt,Zt,Ye){if(D===qi){g===!0&&(ce(t.BLEND),g=!1);return}if(g===!1&&(ae(t.BLEND),g=!0),D!==nS){if(D!==v||Ye!==P){if((m!==mr||x!==mr)&&(t.blendEquation(t.FUNC_ADD),m=mr,x=mr),Ye)switch(D){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.ONE,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,_=null,S=null,C=null,T.set(0,0,0),A=0,v=D,P=Ye}return}ue=ue||de,he=he||j,We=We||Q,(de!==m||ue!==x)&&(t.blendEquationSeparate(et[de],et[ue]),m=de,x=ue),(j!==u||Q!==_||he!==S||We!==C)&&(t.blendFuncSeparate(Ge[j],Ge[Q],Ge[he],Ge[We]),u=j,_=Q,S=he,C=We),(xt.equals(T)===!1||Zt!==A)&&(t.blendColor(xt.r,xt.g,xt.b,Zt),T.copy(xt),A=Zt),v=D,P=!1}function ln(D,de){D.side===pn?ce(t.CULL_FACE):ae(t.CULL_FACE);let j=D.side===an;de&&(j=!j),Be(j),D.blending===ys&&D.transparent===!1?b(qi):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Q=D.stencilWrite;o.setTest(Q),Q&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){H!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),H=D)}function Xe(D){D!==Jy?(ae(t.CULL_FACE),D!==y&&(D===bp?t.cullFace(t.BACK):D===eS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),y=D}function Ce(D){D!==E&&(V&&t.lineWidth(D),E=D)}function rt(D,de,j){D?(ae(t.POLYGON_OFFSET_FILL),(G!==de||B!==j)&&(t.polygonOffset(de,j),G=de,B=j)):ce(t.POLYGON_OFFSET_FILL)}function be(D){D?ae(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+X-1),L!==D&&(t.activeTexture(D),L=D)}function M(D,de,j){j===void 0&&(L===null?j=t.TEXTURE0+X-1:j=L);let Q=Y[j];Q===void 0&&(Q={type:void 0,texture:void 0},Y[j]=Q),(Q.type!==D||Q.texture!==de)&&(L!==j&&(t.activeTexture(j),L=j),t.bindTexture(D,de||J[D]),Q.type=D,Q.texture=de)}function O(){const D=Y[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){Ee.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ee.copy(D))}function _e(D){ze.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ze.copy(D))}function He(D,de){let j=l.get(de);j===void 0&&(j=new WeakMap,l.set(de,j));let Q=j.get(D);Q===void 0&&(Q=t.getUniformBlockIndex(de,D.name),j.set(D,Q))}function Ue(D,de){const Q=l.get(de).get(D);a.get(de)!==Q&&(t.uniformBlockBinding(de,Q,D.__bindingPointIndex),a.set(de,Q))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,Y={},f={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,u=null,_=null,x=null,S=null,C=null,T=new Oe(0,0,0),A=0,P=!1,H=null,y=null,E=null,G=null,B=null,Ee.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ae,disable:ce,bindFramebuffer:Ie,drawBuffers:Te,useProgram:Ve,setBlending:b,setMaterial:ln,setFlipSided:Be,setCullFace:Xe,setLineWidth:Ce,setPolygonOffset:rt,setScissorTest:be,activeTexture:R,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:ge,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:$e,texStorage3D:ie,texSubImage2D:q,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Pe,viewport:_e,reset:nt}}function Em(t,e,n,i){const r=GT(i);switch(n){case rv:return t*e;case ov:return t*e;case av:return t*e*2;case lv:return t*e/r.components*r.byteLength;case Jd:return t*e/r.components*r.byteLength;case cv:return t*e*2/r.components*r.byteLength;case eh:return t*e*2/r.components*r.byteLength;case sv:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case th:return t*e*4/r.components*r.byteLength;case qa:case Ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Za:case Qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:case Pf:return Math.max(t,16)*Math.max(e,8)/4;case Af:case Rf:return Math.max(t,8)*Math.max(e,8)/2;case bf:case Lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ja:case $f:case Yf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case uv:case qf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GT(t){switch(t){case Mi:case tv:return{byteLength:1,components:1};case No:case nv:case Wo:return{byteLength:2,components:1};case Zd:case Qd:return{byteLength:2,components:4};case br:case Kd:case pi:return{byteLength:4,components:1};case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function WT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Il("canvas")}function v(R,M,O){let K=1;const te=be(R);if((te.width>O||te.height>O)&&(K=O/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(K*te.width),ye=Math.floor(K*te.height);h===void 0&&(h=g(q,ye));const le=M?g(q,ye):h;return le.width=q,le.height=ye,le.getContext("2d").drawImage(R,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+ye+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Pn&&R.minFilter!==Vn}function u(R){t.generateMipmap(R)}function _(R,M,O,K,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),M===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),M===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),M===t.RGBA){const ye=te?Pl:Ze.getTransfer(K);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=ye===at?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(R,M){let O;return R?M===null||M===br||M===Is?O=t.DEPTH24_STENCIL8:M===pi?O=t.DEPTH32F_STENCIL8:M===No&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===br||M===Is?O=t.DEPTH_COMPONENT24:M===pi?O=t.DEPTH_COMPONENT32F:M===No&&(O=t.DEPTH_COMPONENT16),O}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pn&&R.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&f.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),H(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const O=R.source,K=d.get(O);if(K){const te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(R),Object.keys(K).length===0&&d.delete(O)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const O=R.source,K=d.get(O);delete K[M.__cacheKey],o.memory.textures--}function H(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[K][te]);else t.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)t.deleteFramebuffer(M.__webglFramebuffer[K]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let K=0,te=O.length;K<te;K++){const q=i.get(O[K]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[K])}i.remove(R)}let y=0;function E(){y=0}function G(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const O=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(O,R,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function V(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){ze(O,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function F(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){ze(O,R,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function ee(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){$(O,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const L={[Uo]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[Tf]:t.MIRRORED_REPEAT},Y={[Pn]:t.NEAREST,[PS]:t.NEAREST_MIPMAP_NEAREST,[ha]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[zc]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},Z={[IS]:t.NEVER,[zS]:t.ALWAYS,[US]:t.LESS,[dv]:t.LEQUAL,[NS]:t.EQUAL,[kS]:t.GEQUAL,[FS]:t.GREATER,[OS]:t.NOTEQUAL};function se(R,M){if(M.type===pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===zc||M.magFilter===ha||M.magFilter===Sr||M.minFilter===Vn||M.minFilter===zc||M.minFilter===ha||M.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,L[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==ha&&M.minFilter!==Sr||M.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ee(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const K=M.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const q=B(M);if(q!==R.__cacheKey){te[q]===void 0&&(te[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[q].usedTimes++;const ye=te[R.__cacheKey];ye!==void 0&&(te[R.__cacheKey].usedTimes--,ye.usedTimes===0&&P(M)),R.__cacheKey=q,R.__webglTexture=te[q].texture}return O}function ze(R,M,O){let K=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=t.TEXTURE_3D);const te=Ee(R,M),q=M.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+O);const ye=i.get(q);if(q.version!==ye.__version||te===!0){n.activeTexture(t.TEXTURE0+O);const le=Ze.getPrimaries(Ze.workingColorSpace),me=M.colorSpace===Oi?null:Ze.getPrimaries(M.colorSpace),$e=M.colorSpace===Oi||le===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ie=v(M.image,!1,r.maxTextureSize);ie=rt(M,ie);const ge=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let Pe=_(M.internalFormat,ge,Re,M.colorSpace,M.isVideoTexture);se(K,M);let _e;const He=M.mipmaps,Ue=M.isVideoTexture!==!0,nt=ye.__version===void 0||te===!0,D=q.dataReady,de=S(M,ie);if(M.isDepthTexture)Pe=x(M.format===Us,M.type),nt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,Pe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ge,Re,null));else if(M.isDataTexture)if(He.length>0){Ue&&nt&&n.texStorage2D(t.TEXTURE_2D,de,Pe,He[0].width,He[0].height);for(let j=0,Q=He.length;j<Q;j++)_e=He[j],Ue?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,Re,_e.data):n.texImage2D(t.TEXTURE_2D,j,Pe,_e.width,_e.height,0,ge,Re,_e.data);M.generateMipmaps=!1}else Ue?(nt&&n.texStorage2D(t.TEXTURE_2D,de,Pe,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Re,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ge,Re,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Pe,He[0].width,He[0].height,ie.depth);for(let j=0,Q=He.length;j<Q;j++)if(_e=He[j],M.format!==Wn)if(ge!==null)if(Ue){if(D)if(M.layerUpdates.size>0){const ue=Em(_e.width,_e.height,M.format,M.type);for(const he of M.layerUpdates){const We=_e.data.subarray(he*ue/_e.data.BYTES_PER_ELEMENT,(he+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,he,_e.width,_e.height,1,ge,We,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ie.depth,ge,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Pe,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,ie.depth,ge,Re,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Pe,_e.width,_e.height,ie.depth,0,ge,Re,_e.data)}else{Ue&&nt&&n.texStorage2D(t.TEXTURE_2D,de,Pe,He[0].width,He[0].height);for(let j=0,Q=He.length;j<Q;j++)_e=He[j],M.format!==Wn?ge!==null?Ue?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e.width,_e.height,ge,Re,_e.data):n.texImage2D(t.TEXTURE_2D,j,Pe,_e.width,_e.height,0,ge,Re,_e.data)}else if(M.isDataArrayTexture)if(Ue){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Pe,ie.width,ie.height,ie.depth),D)if(M.layerUpdates.size>0){const j=Em(ie.width,ie.height,M.format,M.type);for(const Q of M.layerUpdates){const ue=ie.data.subarray(Q*j/ie.data.BYTES_PER_ELEMENT,(Q+1)*j/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,ge,Re,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(M.isData3DTexture)Ue?(nt&&n.texStorage3D(t.TEXTURE_3D,de,Pe,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Re,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,ge,Re,ie.data);else if(M.isFramebufferTexture){if(nt)if(Ue)n.texStorage2D(t.TEXTURE_2D,de,Pe,ie.width,ie.height);else{let j=ie.width,Q=ie.height;for(let ue=0;ue<de;ue++)n.texImage2D(t.TEXTURE_2D,ue,Pe,j,Q,0,ge,Re,null),j>>=1,Q>>=1}}else if(He.length>0){if(Ue&&nt){const j=be(He[0]);n.texStorage2D(t.TEXTURE_2D,de,Pe,j.width,j.height)}for(let j=0,Q=He.length;j<Q;j++)_e=He[j],Ue?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge,Re,_e):n.texImage2D(t.TEXTURE_2D,j,Pe,ge,Re,_e);M.generateMipmaps=!1}else if(Ue){if(nt){const j=be(ie);n.texStorage2D(t.TEXTURE_2D,de,Pe,j.width,j.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Re,ie)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ge,Re,ie);m(M)&&u(K),ye.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function $(R,M,O){if(M.image.length!==6)return;const K=Ee(R,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const q=i.get(te);if(te.version!==q.__version||K===!0){n.activeTexture(t.TEXTURE0+O);const ye=Ze.getPrimaries(Ze.workingColorSpace),le=M.colorSpace===Oi?null:Ze.getPrimaries(M.colorSpace),me=M.colorSpace===Oi||ye===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!$e&&!ie?ge[Q]=v(M.image[Q],!0,r.maxCubemapSize):ge[Q]=ie?M.image[Q].image:M.image[Q],ge[Q]=rt(M,ge[Q]);const Re=ge[0],Pe=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),He=_(M.internalFormat,Pe,_e,M.colorSpace),Ue=M.isVideoTexture!==!0,nt=q.__version===void 0||K===!0,D=te.dataReady;let de=S(M,Re);se(t.TEXTURE_CUBE_MAP,M);let j;if($e){Ue&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,He,Re.width,Re.height);for(let Q=0;Q<6;Q++){j=ge[Q].mipmaps;for(let ue=0;ue<j.length;ue++){const he=j[ue];M.format!==Wn?Pe!==null?Ue?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,he.width,he.height,Pe,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,He,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,he.width,he.height,Pe,_e,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,He,he.width,he.height,0,Pe,_e,he.data)}}}else{if(j=M.mipmaps,Ue&&nt){j.length>0&&de++;const Q=be(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,He,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Pe,_e,ge[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,ge[Q].width,ge[Q].height,0,Pe,_e,ge[Q].data);for(let ue=0;ue<j.length;ue++){const We=j[ue].image[Q].image;Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,We.width,We.height,Pe,_e,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,He,We.width,We.height,0,Pe,_e,We.data)}}else{Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,_e,ge[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,Pe,_e,ge[Q]);for(let ue=0;ue<j.length;ue++){const he=j[ue];Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,Pe,_e,he.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,He,Pe,_e,he.image[Q])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),q.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,O,K,te,q){const ye=s.convert(O.format,O.colorSpace),le=s.convert(O.type),me=_(O.internalFormat,ye,le,O.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>q),ge=Math.max(1,M.height>>q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,q,me,ie,ge,M.depth,0,ye,le,null):n.texImage2D(te,q,me,ie,ge,0,ye,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,te,i.get(O).__webglTexture,0,Be(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,te,i.get(O).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(R,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,q=x(M.stencilBuffer,te),ye=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Be(M);Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,q,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,R)}else{const K=M.textures;for(let te=0;te<K.length;te++){const q=K[te],ye=s.convert(q.format,q.colorSpace),le=s.convert(q.type),me=_(q.internalFormat,ye,le,q.colorSpace),$e=Be(M);O&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,me,M.width,M.height):Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const K=i.get(M.depthTexture).__webglTexture,te=Be(M);if(M.depthTexture.format===Ss)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(M.depthTexture.format===Us)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const M=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=t.createRenderbuffer(),ae(M.__webglDepthbuffer[K],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ae(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(R,M,O){const K=i.get(R);M!==void 0&&J(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ie(R)}function Ve(R){const M=R.texture,O=i.get(R),K=i.get(M);R.addEventListener("dispose",T);const te=R.textures,q=R.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=M.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let me=0;me<M.mipmaps.length;me++)O.__webglFramebuffer[le][me]=t.createFramebuffer()}else O.__webglFramebuffer[le]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)O.__webglFramebuffer[le]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ye)for(let le=0,me=te.length;le<me;le++){const $e=i.get(te[le]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Xe(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const me=te[le];O.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const $e=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=_(me.internalFormat,$e,ie,me.colorSpace,R.isXRRenderTarget===!0),Re=Be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,O.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)J(O.__webglFramebuffer[le][me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else J(O.__webglFramebuffer[le],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let le=0,me=te.length;le<me;le++){const $e=te[le],ie=i.get($e);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),se(t.TEXTURE_2D,$e),J(O.__webglFramebuffer,R,$e,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m($e)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,K.__webglTexture),se(le,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)J(O.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,le,me);else J(O.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,le,0);m(M)&&u(le),n.unbindTexture()}R.depthBuffer&&Ie(R)}function et(R){const M=R.textures;for(let O=0,K=M.length;O<K;O++){const te=M[O];if(m(te)){const q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(te).__webglTexture;n.bindTexture(q,ye),u(q),n.unbindTexture()}}}const Ge=[],b=[];function ln(R){if(R.samples>0){if(Xe(R)===!1){const M=R.textures,O=R.width,K=R.height;let te=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(R),le=M.length>1;if(le)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<M.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const $e=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,O,K,0,0,O,K,te,t.NEAREST),l===!0&&(Ge.length=0,b.length=0,Ge.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ge.push(q),b.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const $e=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Be(R){return Math.min(r.maxSamples,R.samples)}function Xe(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ce(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function rt(R,M){const O=R.colorSpace,K=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==rr&&O!==Oi&&(Ze.getTransfer(O)===at?(K!==Wn||te!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=F,this.setTextureCube=ee,this.rebindTextures=Te,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Xe}function jT(t,e){function n(i,r=Oi){let s;const o=Ze.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===Zd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===iv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===tv)return t.BYTE;if(i===nv)return t.SHORT;if(i===No)return t.UNSIGNED_SHORT;if(i===Kd)return t.INT;if(i===br)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===Wo)return t.HALF_FLOAT;if(i===rv)return t.ALPHA;if(i===sv)return t.RGB;if(i===Wn)return t.RGBA;if(i===ov)return t.LUMINANCE;if(i===av)return t.LUMINANCE_ALPHA;if(i===Ss)return t.DEPTH_COMPONENT;if(i===Us)return t.DEPTH_STENCIL;if(i===lv)return t.RED;if(i===Jd)return t.RED_INTEGER;if(i===cv)return t.RG;if(i===eh)return t.RG_INTEGER;if(i===th)return t.RGBA_INTEGER;if(i===qa||i===Ka||i===Za||i===Qa)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Af||i===Cf||i===Rf||i===Pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Af)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bf||i===Lf||i===Df)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bf||i===Lf)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Df)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===If||i===Uf||i===Nf||i===Ff||i===Of||i===kf||i===zf||i===Bf||i===Hf||i===Vf||i===Gf||i===Wf||i===jf||i===Xf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===If)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ff)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Of)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===$f||i===Yf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ja)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$f)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uv||i===qf||i===Kf||i===Zf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class XT extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hs extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $T={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($T)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const YT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new er({vertexShader:YT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gn(new rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZT extends Fr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,g=null;const v=new KT,m=n.getContextAttributes();let u=null,_=null;const x=[],S=[],C=new De;let T=null;const A=new Cn;A.layers.enable(1),A.viewport=new gt;const P=new Cn;P.layers.enable(2),P.viewport=new gt;const H=[A,P],y=new XT;y.layers.enable(1),y.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=x[$];return J===void 0&&(J=new pu,x[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=x[$];return J===void 0&&(J=new pu,x[$]=J),J.getGripSpace()},this.getHand=function($){let J=x[$];return J===void 0&&(J=new pu,x[$]=J),J.getHandSpace()};function B($){const J=S.indexOf($.inputSource);if(J===-1)return;const ae=x[J];ae!==void 0&&(ae.update($.inputSource,$.frame,c||o),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",V);for(let $=0;$<x.length;$++){const J=S[$];J!==null&&(S[$]=null,x[$].disconnect(J))}E=null,G=null,v.reset(),e.setRenderTarget(u),p=null,d=null,h=null,r=null,_=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Lr(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ae=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?Us:Ss,ae=m.stencil?Is:br);const Ie={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Lr(d.textureWidth,d.textureHeight,{format:Wn,type:Mi,depthTexture:new Ev(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V($){for(let J=0;J<$.removed.length;J++){const ae=$.removed[J],ce=S.indexOf(ae);ce>=0&&(S[ce]=null,x[ce].disconnect(ae))}for(let J=0;J<$.added.length;J++){const ae=$.added[J];let ce=S.indexOf(ae);if(ce===-1){for(let Te=0;Te<x.length;Te++)if(Te>=S.length){S.push(ae),ce=Te;break}else if(S[Te]===null){S[Te]=ae,ce=Te;break}if(ce===-1)break}const Ie=x[ce];Ie&&Ie.connect(ae)}}const F=new N,ee=new N;function L($,J,ae){F.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);const ce=F.distanceTo(ee),Ie=J.projectionMatrix.elements,Te=ae.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),et=Ie[14]/(Ie[10]+1),Ge=(Ie[9]+1)/Ie[5],b=(Ie[9]-1)/Ie[5],ln=(Ie[8]-1)/Ie[0],Be=(Te[8]+1)/Te[0],Xe=Ve*ln,Ce=Ve*Be,rt=ce/(-ln+Be),be=rt*-ln;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(be),$.translateZ(rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const R=Ve+rt,M=et+rt,O=Xe-be,K=Ce+(ce-be),te=Ge*et/M*R,q=b*et/M*R;$.projectionMatrix.makePerspective(O,K,te,q,R,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Y($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let J=$.near,ae=$.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ae=v.depthFar)),y.near=P.near=A.near=J,y.far=P.far=A.far=ae,(E!==y.near||G!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,G=y.far);const ce=$.parent,Ie=y.cameras;Y(y,ce);for(let Te=0;Te<Ie.length;Te++)Y(Ie[Te],ce);Ie.length===2?L(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),Z($,y,ce)};function Z($,J,ae){ae===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let se=null;function Ee($,J){if(f=J.getViewerPose(c||o),g=J,f!==null){const ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ce=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Te=0;Te<ae.length;Te++){const Ve=ae[Te];let et=null;if(p!==null)et=p.getViewport(Ve);else{const b=h.getViewSubImage(d,Ve);et=b.viewport,Te===0&&(e.setRenderTargetTextures(_,b.colorTexture,d.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let Ge=H[Te];Ge===void 0&&(Ge=new Cn,Ge.layers.enable(Te),Ge.viewport=new gt,H[Te]=Ge),Ge.matrix.fromArray(Ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(et.x,et.y,et.width,et.height),Te===0&&(y.matrix.copy(Ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Te=h.getDepthInformation(ae[0]);Te&&Te.isValid&&Te.texture&&v.init(e,Te,r.renderState)}}for(let ae=0;ae<x.length;ae++){const ce=S[ae],Ie=x[ae];ce!==null&&Ie!==void 0&&Ie.update(ce,J,c||o)}se&&se($,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const ze=new Mv;ze.setAnimationLoop(Ee),this.setAnimationLoop=function($){se=$},this.dispose=function(){}}}const fr=new ni,QT=new ut;function JT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,xv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===an&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===an&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),x=_.envMap,S=_.envMapRotation;x&&(m.envMap.value=x,fr.copy(S),fr.x*=-1,fr.y*=-1,fr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(QT.makeRotationFromEuler(fr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(g(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(_,C);const T=e.render.frame;s[_.id]!==T&&(d(_),s[_.id]=T)}function f(_){const x=h();_.__bindingPointIndex=x;const S=t.createBuffer(),C=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],S=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,A=S.length;T<A;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let H=0,y=P.length;H<y;H++){const E=P[H];if(p(E,T,H,C)===!0){const G=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let V=0;V<B.length;V++){const F=B[V],ee=v(F);typeof F=="number"||typeof F=="boolean"?(E.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,G+X,E.__data)):F.isMatrix3?(E.__data[0]=F.elements[0],E.__data[1]=F.elements[1],E.__data[2]=F.elements[2],E.__data[3]=0,E.__data[4]=F.elements[3],E.__data[5]=F.elements[4],E.__data[6]=F.elements[5],E.__data[7]=0,E.__data[8]=F.elements[6],E.__data[9]=F.elements[7],E.__data[10]=F.elements[8],E.__data[11]=0):(F.toArray(E.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,S,C){const T=_.value,A=x+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(_){const x=_.uniforms;let S=0;const C=16;for(let A=0,P=x.length;A<P;A++){const H=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,E=H.length;y<E;y++){const G=H[y],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,V=B.length;X<V;X++){const F=B[X],ee=v(F),L=S%C,Y=L%ee.boundary,Z=L+Y;S+=Y,Z!==0&&C-Z<ee.storage&&(S+=C-Z),G.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=ee.storage}}}const T=S%C;return T>0&&(S+=C-T),_.__size=S,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Rv{constructor(e={}){const{canvas:n=VS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Ki,this.toneMappingExposure=1;const x=this;let S=!1,C=0,T=0,A=null,P=-1,H=null;const y=new gt,E=new gt;let G=null;const B=new Oe(0);let X=0,V=n.width,F=n.height,ee=1,L=null,Y=null;const Z=new gt(0,0,V,F),se=new gt(0,0,V,F);let Ee=!1;const ze=new rh;let $=!1,J=!1;const ae=new ut,ce=new ut,Ie=new N,Te=new gt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Ge(){return A===null?ee:1}let b=i;function ln(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qd}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",he,!1),b===null){const I="webgl2";if(b=ln(I,w),b===null)throw ln(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,Xe,Ce,rt,be,R,M,O,K,te,q,ye,le,me,$e,ie,ge,Re,Pe,_e,He,Ue,nt,D;function de(){Be=new ow(b),Be.init(),Ue=new jT(b,Be),Xe=new ew(b,Be,e,Ue),Ce=new VT(b),Xe.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),rt=new cw(b),be=new CT,R=new WT(b,Be,Ce,be,Xe,Ue,rt),M=new nw(x),O=new sw(x),K=new gM(b),nt=new Q1(b,K),te=new aw(b,K,rt,nt),q=new fw(b,te,K,rt),Pe=new uw(b,Xe,R),ie=new tw(be),ye=new AT(x,M,O,Be,Xe,nt,ie),le=new JT(x,be),me=new PT,$e=new NT(Be),Re=new Z1(x,M,O,Ce,q,d,l),ge=new BT(x,q,Xe),D=new eA(b,rt,Xe,Ce),_e=new J1(b,Be,rt),He=new lw(b,Be,rt),rt.programs=ye.programs,x.capabilities=Xe,x.extensions=Be,x.properties=be,x.renderLists=me,x.shadowMap=ge,x.state=Ce,x.info=rt}de();const j=new ZT(x,b);this.xr=j,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(V,F,!1))},this.getSize=function(w){return w.set(V,F)},this.setSize=function(w,I,k=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,F=I,n.width=Math.floor(w*ee),n.height=Math.floor(I*ee),k===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(V*ee,F*ee).floor()},this.setDrawingBufferSize=function(w,I,k){V=w,F=I,ee=k,n.width=Math.floor(w*k),n.height=Math.floor(I*k),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,I,k,z){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,I,k,z),Ce.viewport(y.copy(Z).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,I,k,z){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,I,k,z),Ce.scissor(E.copy(se).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(w){Ce.setScissorTest(Ee=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(w=!0,I=!0,k=!0){let z=0;if(w){let U=!1;if(A!==null){const re=A.texture.format;U=re===th||re===eh||re===Jd}if(U){const re=A.texture.type,fe=re===Mi||re===br||re===No||re===Is||re===Zd||re===Qd,ve=Re.getClearColor(),xe=Re.getClearAlpha(),we=ve.r,Ae=ve.g,Se=ve.b;fe?(p[0]=we,p[1]=Ae,p[2]=Se,p[3]=xe,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=we,g[1]=Ae,g[2]=Se,g[3]=xe,b.clearBufferiv(b.COLOR,0,g))}else z|=b.COLOR_BUFFER_BIT}I&&(z|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",he,!1),me.dispose(),$e.dispose(),be.dispose(),M.dispose(),O.dispose(),q.dispose(),nt.dispose(),D.dispose(),ye.dispose(),j.dispose(),j.removeEventListener("sessionstart",lh),j.removeEventListener("sessionend",ch),sr.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=rt.autoReset,I=ge.enabled,k=ge.autoUpdate,z=ge.needsUpdate,U=ge.type;de(),rt.autoReset=w,ge.enabled=I,ge.autoUpdate=k,ge.needsUpdate=z,ge.type=U}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function We(w){const I=w.target;I.removeEventListener("dispose",We),xt(I)}function xt(w){Zt(w),be.remove(w)}function Zt(w){const I=be.get(w).programs;I!==void 0&&(I.forEach(function(k){ye.releaseProgram(k)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,k,z,U,re){I===null&&(I=Ve);const fe=U.isMesh&&U.matrixWorld.determinant()<0,ve=Ov(w,I,k,z,U);Ce.setMaterial(z,fe);let xe=k.index,we=1;if(z.wireframe===!0){if(xe=te.getWireframeAttribute(k),xe===void 0)return;we=2}const Ae=k.drawRange,Se=k.attributes.position;let Qe=Ae.start*we,st=(Ae.start+Ae.count)*we;re!==null&&(Qe=Math.max(Qe,re.start*we),st=Math.min(st,(re.start+re.count)*we)),xe!==null?(Qe=Math.max(Qe,0),st=Math.min(st,xe.count)):Se!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Se.count));const pt=st-Qe;if(pt<0||pt===1/0)return;nt.setup(U,z,ve,k,xe);let cn,qe=_e;if(xe!==null&&(cn=K.get(xe),qe=He,qe.setIndex(cn)),U.isMesh)z.wireframe===!0?(Ce.setLineWidth(z.wireframeLinewidth*Ge()),qe.setMode(b.LINES)):qe.setMode(b.TRIANGLES);else if(U.isLine){let Me=z.linewidth;Me===void 0&&(Me=1),Ce.setLineWidth(Me*Ge()),U.isLineSegments?qe.setMode(b.LINES):U.isLineLoop?qe.setMode(b.LINE_LOOP):qe.setMode(b.LINE_STRIP)}else U.isPoints?qe.setMode(b.POINTS):U.isSprite&&qe.setMode(b.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,Ut=U._multiDrawCounts,Ke=U._multiDrawCount,In=xe?K.get(xe).bytesPerElement:1,Or=be.get(z).currentProgram.getUniforms();for(let un=0;un<Ke;un++)Or.setValue(b,"_gl_DrawID",un),qe.render(Me[un]/In,Ut[un])}else if(U.isInstancedMesh)qe.renderInstances(Qe,pt,U.count);else if(k.isInstancedBufferGeometry){const Me=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ut=Math.min(k.instanceCount,Me);qe.renderInstances(Qe,pt,Ut)}else qe.render(Qe,pt)};function Ye(w,I,k){w.transparent===!0&&w.side===pn&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,qo(w,I,k),w.side=Ji,w.needsUpdate=!0,qo(w,I,k),w.side=pn):qo(w,I,k)}this.compile=function(w,I,k=null){k===null&&(k=w),m=$e.get(k),m.init(I),_.push(m),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),w!==k&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const z=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const ve=re[fe];Ye(ve,k,U),z.add(ve)}else Ye(re,k,U),z.add(re)}),_.pop(),m=null,z},this.compileAsync=function(w,I,k=null){const z=this.compile(w,I,k);return new Promise(U=>{function re(){if(z.forEach(function(fe){be.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){U(w);return}setTimeout(re,10)}Be.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Qt=null;function ii(w){Qt&&Qt(w)}function lh(){sr.stop()}function ch(){sr.start()}const sr=new Mv;sr.setAnimationLoop(ii),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(w){Qt=w,j.setAnimationLoop(w),w===null?sr.stop():sr.start()},j.addEventListener("sessionstart",lh),j.addEventListener("sessionend",ch),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,I,A),m=$e.get(w,_.length),m.init(I),_.push(m),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ze.setFromProjectionMatrix(ce),J=this.localClippingEnabled,$=ie.init(this.clippingPlanes,J),v=me.get(w,u.length),v.init(),u.push(v),j.enabled===!0&&j.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&oc(re,I,-1/0,x.sortObjects)}oc(w,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(L,Y),et=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,et&&Re.addToRenderList(v,w),this.info.render.frame++,$===!0&&ie.beginShadows();const k=m.state.shadowsArray;ge.render(k,w,I),$===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=v.opaque,U=v.transmissive;if(m.setupLights(),I.isArrayCamera){const re=I.cameras;if(U.length>0)for(let fe=0,ve=re.length;fe<ve;fe++){const xe=re[fe];fh(z,U,w,xe)}et&&Re.render(w);for(let fe=0,ve=re.length;fe<ve;fe++){const xe=re[fe];uh(v,w,xe,xe.viewport)}}else U.length>0&&fh(z,U,w,I),et&&Re.render(w),uh(v,w,I);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,I),nt.resetDefaultState(),P=-1,H=null,_.pop(),_.length>0?(m=_[_.length-1],$===!0&&ie.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function oc(w,I,k,z){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){z&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const fe=q.update(w),ve=w.material;ve.visible&&v.push(w,fe,ve,k,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const fe=q.update(w),ve=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Te.copy(fe.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(ve)){const xe=fe.groups;for(let we=0,Ae=xe.length;we<Ae;we++){const Se=xe[we],Qe=ve[Se.materialIndex];Qe&&Qe.visible&&v.push(w,fe,Qe,k,Te.z,Se)}}else ve.visible&&v.push(w,fe,ve,k,Te.z,null)}}const re=w.children;for(let fe=0,ve=re.length;fe<ve;fe++)oc(re[fe],I,k,z)}function uh(w,I,k,z){const U=w.opaque,re=w.transmissive,fe=w.transparent;m.setupLightsView(k),$===!0&&ie.setGlobalState(x.clippingPlanes,k),z&&Ce.viewport(y.copy(z)),U.length>0&&Yo(U,I,k),re.length>0&&Yo(re,I,k),fe.length>0&&Yo(fe,I,k),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function fh(w,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Lr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Wo:Mi,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=m.state.transmissionRenderTarget[z.id],fe=z.viewport||y;re.setSize(fe.z,fe.w);const ve=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(B),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),et&&Re.render(k);const xe=x.toneMapping;x.toneMapping=Ki;const we=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),$===!0&&ie.setGlobalState(x.clippingPlanes,z),Yo(w,k,z),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Se=0,Qe=I.length;Se<Qe;Se++){const st=I[Se],pt=st.object,cn=st.geometry,qe=st.material,Me=st.group;if(qe.side===pn&&pt.layers.test(z.layers)){const Ut=qe.side;qe.side=an,qe.needsUpdate=!0,dh(pt,k,z,cn,qe,Me),qe.side=Ut,qe.needsUpdate=!0,Ae=!0}}Ae===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}x.setRenderTarget(ve),x.setClearColor(B,X),we!==void 0&&(z.viewport=we),x.toneMapping=xe}function Yo(w,I,k){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,re=w.length;U<re;U++){const fe=w[U],ve=fe.object,xe=fe.geometry,we=z===null?fe.material:z,Ae=fe.group;ve.layers.test(k.layers)&&dh(ve,I,k,xe,we,Ae)}}function dh(w,I,k,z,U,re){w.onBeforeRender(x,I,k,z,U,re),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,I,k,z,w,re),U.transparent===!0&&U.side===pn&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,x.renderBufferDirect(k,I,z,U,w,re),U.side=Ji,U.needsUpdate=!0,x.renderBufferDirect(k,I,z,U,w,re),U.side=pn):x.renderBufferDirect(k,I,z,U,w,re),w.onAfterRender(x,I,k,z,U,re)}function qo(w,I,k){I.isScene!==!0&&(I=Ve);const z=be.get(w),U=m.state.lights,re=m.state.shadowsArray,fe=U.state.version,ve=ye.getParameters(w,U.state,re,I,k),xe=ye.getProgramCacheKey(ve);let we=z.programs;z.environment=w.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(w.isMeshStandardMaterial?O:M).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,we===void 0&&(w.addEventListener("dispose",We),we=new Map,z.programs=we);let Ae=we.get(xe);if(Ae!==void 0){if(z.currentProgram===Ae&&z.lightsStateVersion===fe)return ph(w,ve),Ae}else ve.uniforms=ye.getUniforms(w),w.onBeforeCompile(ve,x),Ae=ye.acquireProgram(ve,xe),we.set(xe,Ae),z.uniforms=ve.uniforms;const Se=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=ie.uniform),ph(w,ve),z.needsLights=zv(w),z.lightsStateVersion=fe,z.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ae,z.uniformsList=null,Ae}function hh(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=nl.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function ph(w,I){const k=be.get(w);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Ov(w,I,k,z,U){I.isScene!==!0&&(I=Ve),R.resetTextureUnits();const re=I.fog,fe=z.isMeshStandardMaterial?I.environment:null,ve=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rr,xe=(z.isMeshStandardMaterial?O:M).get(z.envMap||fe),we=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ae=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,st=!!k.morphAttributes.color;let pt=Ki;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=x.toneMapping);const cn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qe=cn!==void 0?cn.length:0,Me=be.get(z),Ut=m.state.lights;if($===!0&&(J===!0||w!==H)){const Mn=w===H&&z.id===P;ie.setState(z,w,Mn)}let Ke=!1;z.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ut.state.version||Me.outputColorSpace!==ve||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==xe||z.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ie.numPlanes||Me.numIntersection!==ie.numIntersection)||Me.vertexAlphas!==we||Me.vertexTangents!==Ae||Me.morphTargets!==Se||Me.morphNormals!==Qe||Me.morphColors!==st||Me.toneMapping!==pt||Me.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Me.__version=z.version);let In=Me.currentProgram;Ke===!0&&(In=qo(z,I,U));let Or=!1,un=!1,ac=!1;const _t=In.getUniforms(),wi=Me.uniforms;if(Ce.useProgram(In.program)&&(Or=!0,un=!0,ac=!0),z.id!==P&&(P=z.id,un=!0),Or||H!==w){Xe.reverseDepthBuffer?(ae.copy(w.projectionMatrix),WS(ae),jS(ae),_t.setValue(b,"projectionMatrix",ae)):_t.setValue(b,"projectionMatrix",w.projectionMatrix),_t.setValue(b,"viewMatrix",w.matrixWorldInverse);const Mn=_t.map.cameraPosition;Mn!==void 0&&Mn.setValue(b,Ie.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,un=!0,ac=!0)}if(U.isSkinnedMesh){_t.setOptional(b,U,"bindMatrix"),_t.setOptional(b,U,"bindMatrixInverse");const Mn=U.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),_t.setValue(b,"boneTexture",Mn.boneTexture,R))}U.isBatchedMesh&&(_t.setOptional(b,U,"batchingTexture"),_t.setValue(b,"batchingTexture",U._matricesTexture,R),_t.setOptional(b,U,"batchingIdTexture"),_t.setValue(b,"batchingIdTexture",U._indirectTexture,R),_t.setOptional(b,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(b,"batchingColorTexture",U._colorsTexture,R));const lc=k.morphAttributes;if((lc.position!==void 0||lc.normal!==void 0||lc.color!==void 0)&&Pe.update(U,k,In),(un||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,_t.setValue(b,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(wi.envMap.value=xe,wi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(wi.envMapIntensity.value=I.environmentIntensity),un&&(_t.setValue(b,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&kv(wi,ac),re&&z.fog===!0&&le.refreshFogUniforms(wi,re),le.refreshMaterialUniforms(wi,z,ee,F,m.state.transmissionRenderTarget[w.id]),nl.upload(b,hh(Me),wi,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(nl.upload(b,hh(Me),wi,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(b,"center",U.center),_t.setValue(b,"modelViewMatrix",U.modelViewMatrix),_t.setValue(b,"normalMatrix",U.normalMatrix),_t.setValue(b,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Mn=z.uniformsGroups;for(let cc=0,Bv=Mn.length;cc<Bv;cc++){const mh=Mn[cc];D.update(mh,In),D.bind(mh,In)}}return In}function kv(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function zv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,I,k){be.get(w.texture).__webglTexture=I,be.get(w.depthTexture).__webglTexture=k;const z=be.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const k=be.get(w);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,k=0){A=w,C=I,T=k;let z=!0,U=null,re=!1,fe=!1;if(w){const xe=be.get(w);if(xe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(b.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(xe.__hasExternalTextures)R.rebindTextures(w,be.get(w.texture).__webglTexture,be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Se=w.depthTexture;if(xe.__boundDepthTexture!==Se){if(Se!==null&&be.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(fe=!0);const Ae=be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?U=Ae[I][k]:U=Ae[I],re=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?U=be.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[k]:U=Ae,y.copy(w.viewport),E.copy(w.scissor),G=w.scissorTest}else y.copy(Z).multiplyScalar(ee).floor(),E.copy(se).multiplyScalar(ee).floor(),G=Ee;if(Ce.bindFramebuffer(b.FRAMEBUFFER,U)&&z&&Ce.drawBuffers(w,U),Ce.viewport(y),Ce.scissor(E),Ce.setScissorTest(G),re){const xe=be.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,k)}else if(fe){const xe=be.get(w.texture),we=I||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,xe.__webglTexture,k||0,we)}P=-1},this.readRenderTargetPixels=function(w,I,k,z,U,re,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Ce.bindFramebuffer(b.FRAMEBUFFER,ve);try{const xe=w.texture,we=xe.format,Ae=xe.type;if(!Xe.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-z&&k>=0&&k<=w.height-U&&b.readPixels(I,k,z,U,Ue.convert(we),Ue.convert(Ae),re)}finally{const xe=A!==null?be.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,I,k,z,U,re,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){const xe=w.texture,we=xe.format,Ae=xe.type;if(!Xe.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-z&&k>=0&&k<=w.height-U){Ce.bindFramebuffer(b.FRAMEBUFFER,ve);const Se=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Se),b.bufferData(b.PIXEL_PACK_BUFFER,re.byteLength,b.STREAM_READ),b.readPixels(I,k,z,U,Ue.convert(we),Ue.convert(Ae),0);const Qe=A!==null?be.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,Qe);const st=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await GS(b,st,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Se),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,re),b.deleteBuffer(Se),b.deleteSync(st),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,k=0){w.isTexture!==!0&&(tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(w.image.width*z),re=Math.floor(w.image.height*z),fe=I!==null?I.x:0,ve=I!==null?I.y:0;R.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,k,0,0,fe,ve,U,re),Ce.unbindTexture()},this.copyTextureToTexture=function(w,I,k=null,z=null,U=0){w.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,k=null);let re,fe,ve,xe,we,Ae;k!==null?(re=k.max.x-k.min.x,fe=k.max.y-k.min.y,ve=k.min.x,xe=k.min.y):(re=w.image.width,fe=w.image.height,ve=0,xe=0),z!==null?(we=z.x,Ae=z.y):(we=0,Ae=0);const Se=Ue.convert(I.format),Qe=Ue.convert(I.type);R.setTexture2D(I,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const st=b.getParameter(b.UNPACK_ROW_LENGTH),pt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),cn=b.getParameter(b.UNPACK_SKIP_PIXELS),qe=b.getParameter(b.UNPACK_SKIP_ROWS),Me=b.getParameter(b.UNPACK_SKIP_IMAGES),Ut=w.isCompressedTexture?w.mipmaps[U]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Ut.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ut.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ve),b.pixelStorei(b.UNPACK_SKIP_ROWS,xe),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,U,we,Ae,re,fe,Se,Qe,Ut.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,U,we,Ae,Ut.width,Ut.height,Se,Ut.data):b.texSubImage2D(b.TEXTURE_2D,U,we,Ae,re,fe,Se,Qe,Ut),b.pixelStorei(b.UNPACK_ROW_LENGTH,st),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,pt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,cn),b.pixelStorei(b.UNPACK_SKIP_ROWS,qe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Me),U===0&&I.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,I,k=null,z=null,U=0){w.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0);let re,fe,ve,xe,we,Ae,Se,Qe,st;const pt=w.isCompressedTexture?w.mipmaps[U]:w.image;k!==null?(re=k.max.x-k.min.x,fe=k.max.y-k.min.y,ve=k.max.z-k.min.z,xe=k.min.x,we=k.min.y,Ae=k.min.z):(re=pt.width,fe=pt.height,ve=pt.depth,xe=0,we=0,Ae=0),z!==null?(Se=z.x,Qe=z.y,st=z.z):(Se=0,Qe=0,st=0);const cn=Ue.convert(I.format),qe=Ue.convert(I.type);let Me;if(I.isData3DTexture)R.setTexture3D(I,0),Me=b.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),Me=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const Ut=b.getParameter(b.UNPACK_ROW_LENGTH),Ke=b.getParameter(b.UNPACK_IMAGE_HEIGHT),In=b.getParameter(b.UNPACK_SKIP_PIXELS),Or=b.getParameter(b.UNPACK_SKIP_ROWS),un=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,pt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,pt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xe),b.pixelStorei(b.UNPACK_SKIP_ROWS,we),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ae),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Me,U,Se,Qe,st,re,fe,ve,cn,qe,pt.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(Me,U,Se,Qe,st,re,fe,ve,cn,pt.data):b.texSubImage3D(Me,U,Se,Qe,st,re,fe,ve,cn,qe,pt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ut),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ke),b.pixelStorei(b.UNPACK_SKIP_PIXELS,In),b.pixelStorei(b.UNPACK_SKIP_ROWS,Or),b.pixelStorei(b.UNPACK_SKIP_IMAGES,un),U===0&&I.generateMipmaps&&b.generateMipmap(Me),Ce.unbindTexture()},this.initRenderTarget=function(w){be.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,Ce.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===nh?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===tc?"display-p3":"srgb"}}class Pv extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Oo extends zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new N,Nl=new N,wm=new ut,to=new ic,Ua=new nc,mu=new N,Tm=new N;class tA extends It{constructor(e=new Mt,n=new Oo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ul.fromBufferAttribute(n,r-1),Nl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ul.distanceTo(Nl);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;wm.copy(r).invert(),to.copy(e.ray).applyMatrix4(wm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const u=f.getX(v),_=f.getX(v+1),x=Na(this,e,to,l,u,_);x&&n.push(x)}if(this.isLineLoop){const v=f.getX(g-1),m=f.getX(p),u=Na(this,e,to,l,v,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const u=Na(this,e,to,l,v,v+1);u&&n.push(u)}if(this.isLineLoop){const v=Na(this,e,to,l,g-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Na(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Ul.fromBufferAttribute(o,r),Nl.fromBufferAttribute(o,s),n.distanceSqToSegment(Ul,Nl,mu,Tm)>i)return;mu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(mu);if(!(l<e.near||l>e.far))return{distance:l,point:Tm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Am=new N,Cm=new N;class Fl extends tA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Am.fromBufferAttribute(n,r),Cm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Am.distanceTo(Cm);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nA extends Yt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class iA extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fv,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bv extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class rA extends bv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const gu=new ut,Rm=new N,Pm=new N;class sA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rm),Pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pm),n.updateMatrixWorld(),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oA extends sA{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bm extends bv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new oA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Lm=new ut;class Lv{constructor(e,n,i=0,r=1/0){this.ray=new ic(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Lm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lm),this}intersectObject(e,n=!0,i=[]){return ed(e,this,i,n),i.sort(Dm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ed(e[r],this,i,n);return i.sort(Dm),i}}function Dm(t,e){return t.distance-e.distance}function ed(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ed(s[o],e,n,!0)}}class Im{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class aA extends Fr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);const Um={type:"change"},ah={type:"start"},Dv={type:"end"},Fa=new ic,Nm=new Ui,lA=Math.cos(70*HS.DEG2RAD),Et=new N,en=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_u=1e-6;class Iv extends aA{constructor(e,n=null){super(e,n),this.state=tt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Dr,this._lastTargetPosition=new N,this._quat=new Dr().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Im,this._sphericalDelta=new Im,this._scale=1,this._panOffset=new N,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new N,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uA.bind(this),this._onPointerDown=cA.bind(this),this._onPointerUp=fA.bind(this),this._onContextMenu=vA.bind(this),this._onMouseWheel=pA.bind(this),this._onKeyDown=mA.bind(this),this._onTouchStart=gA.bind(this),this._onTouchMove=_A.bind(this),this._onMouseDown=dA.bind(this),this._onMouseMove=hA.bind(this),this._interceptControlDown=xA.bind(this),this._interceptControlUp=yA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Um),this.update(),this.state=tt.NONE}update(e=null){const n=this.object.position;Et.copy(n).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),n.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Et.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fa.origin.copy(this.object.position),Fa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fa.direction))<lA?this.object.lookAt(this.target):(Nm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fa.intersectPlane(Nm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_u||this._lastTargetPosition.distanceToSquared(this.target)>_u?(this.dispatchEvent(Um),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Et.setFromMatrixColumn(n,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,n){this.screenSpacePanning===!0?Et.setFromMatrixColumn(n,1):(Et.setFromMatrixColumn(n,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Et.copy(r).sub(this.target);let s=Et.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new De,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function cA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function uA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function fA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dv),this.state=tt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function dA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=tt.DOLLY;break;case _i.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=tt.ROTATE}break;case _i.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(ah)}function hA(t){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function pA(t){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(t.preventDefault(),this.dispatchEvent(ah),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Dv))}function mA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function gA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=tt.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=tt.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(ah)}function _A(t){switch(this._trackPointer(t),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=tt.NONE}}function vA(t){this.enabled!==!1&&t.preventDefault()}function xA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SA(t){const e=new Float32Array(t.triangles.length*9);let n=0;for(const i of t.triangles)for(const r of i.corners){const s=wr(t,r);e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return e}function Uv(t){const e=new Oe(t);return[e.r,e.g,e.b]}const Nv=Uv(3356223),MA=Uv(2303277);function EA(t,e,n,i,r=null){const s=new Float32Array(t.triangles.length*9).fill(1);for(const o of t.triangles){const a=e.metrics[o.id];let l=null;if(r&&!r[o.id]?l=Nv:a.degenerate3d||a.degenerateUv?l=[.35,.35,.4]:i&&e.overlap[o.id]?l=[1,.55,.05]:n&&a.flipped&&(l=[1,.25,.35]),l)for(let c=0;c<3;c++)s[o.id*9+c*3]=l[0],s[o.id*9+c*3+1]=l[1],s[o.id*9+c*3+2]=l[2]}return s}function wA(t,e,n){const i=new Mt,r=[];for(const s of t.triangles)if(e.has(s.faceId))for(let o=0;o<3;o++)r.push(n[s.id*9+o*3],n[s.id*9+o*3+1],n[s.id*9+o*3+2]);return i.setAttribute("position",new Ct(r,3)),i}function TA(t,e){const n=[],i=[],r=new Oe(1776932),s=[r.r,r.g,r.b];for(const a of t.triangles){const l=a.corners.map(p=>{const g=t.corners[p];return[t.positions[g.v*3],t.positions[g.v*3+1],t.positions[g.v*3+2]]}),[c,f,h]=e&&!e[a.id]?MA:s,d=(p,g)=>{n.push(...p,...g),i.push(c,f,h,c,f,h)};d(l[0],l[1]),d(l[1],l[2]),d(l[2],l[0])}const o=new Mt;return o.setAttribute("position",new Ct(n,3)),o.setAttribute("color",new Ct(i,3)),o}function AA(t,e,n=null){const i={boundary:[],seam:[],nonManifold:[],regular:[]},r=c=>{const f=new Oe(c);return[f.r,f.g,f.b]},s={regular:r(3027264),boundary:r(14672878),seam:r(16756782),nonManifold:r(16726876)},o=c=>[c[0]*.25,c[1]*.25,c[2]*.25],a={boundary:[],seam:[],nonManifold:[],regular:[]};for(const c of e.edges)for(const{tri:f,ca:h,cb:d}of c.occurrences){const[p,g]=$n(t,h),[v,m]=$n(t,d);let u;c.nonManifold?u="nonManifold":c.boundary?u="boundary":c.seam?u="seam":u="regular",i[u].push(p,g,0,v,m,0);const _=n&&!n[f]?o(s[u]):s[u];a[u].push(_[0],_[1],_[2],_[0],_[1],_[2])}const l=(c,f)=>{const h=new Mt;return h.setAttribute("position",new Ct(c,3)),h.setAttribute("color",new Ct(f,3)),h};return{boundary:l(i.boundary,a.boundary),seam:l(i.seam,a.seam),nonManifold:l(i.nonManifold,a.nonManifold),regular:l(i.regular,a.regular)}}function CA(t,e){const n=[];for(const r of t.triangles)if(e.has(r.faceId))for(let s=0;s<3;s++){const[o,a]=$n(t,r.corners[s]);n.push(o,a,0)}const i=new Mt;return i.setAttribute("position",new Ct(n,3)),i}function RA(t,e,n){const i=[],r=[],s=new Int32Array(t.triangles.length).fill(-1);e.islands.forEach(l=>{for(const c of l.triIds)s[c]=l.id});const o=n.activeMask??null;for(const l of t.triangles){const c=e.metrics[l.id];let f;o&&!o[l.id]?f=Nv:c.degenerate3d||c.degenerateUv?f=[.32,.32,.38]:n.showOverlap&&e.overlap[l.id]?f=[1,.55,.1]:n.showFlipped&&c.flipped?f=[1,.35,.45]:f=PA(s[l.id]);for(let h=0;h<3;h++){const[d,p]=$n(t,l.corners[h]);i.push(d,p,0),r.push(f[0],f[1],f[2])}}const a=new Mt;return a.setAttribute("position",new Ct(i,3)),a.setAttribute("color",new Ct(r,3)),a.computeBoundingBox(),a}function PA(t){const e=t*.61803398875%1,n=new Oe().setHSL(e,.45,.72);return[n.r,n.g,n.b]}function bA(t){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d"),r=256/t;for(let o=0;o<t;o++)for(let a=0;a<t;a++)i.fillStyle=(a+o)%2===0?"#e8e8ee":"#5a5f72",i.fillRect(a*r,o*r,Math.ceil(r),Math.ceil(r));i.strokeStyle="#3a3d49",i.lineWidth=2,i.strokeRect(1,1,254,254);const s=new nA(n);return s.wrapS=Uo,s.wrapT=Uo,s.colorSpace=Bn,s.anisotropy=8,s}function LA(t){const e=new Map;for(const n of t.faces){let i=e.get(n.group);i||(i={name:n.group,faceIds:[],triIds:[]},e.set(n.group,i)),i.faceIds.push(n.id)}for(const n of t.triangles)e.get(t.faces[n.faceId].group).triIds.push(n.id);return[...e.values()]}function Fv(t,e){if(e===null)return null;const n=new Uint8Array(t.triangles.length);for(const i of t.triangles)t.faces[i.faceId].group===e&&(n[i.id]=1);return n}function DA(t,e,n){const i=t.triangles.length,r=new Uint8Array(i),s=new Uint8Array(t.faces.length);t.faces.forEach(y=>{y.group===n&&(s[y.id]=1)});for(const y of t.triangles)s[y.faceId]&&(r[y.id]=1);let o=0;for(let y=0;y<s.length;y++)s[y]&&o++;let a=0,l=0,c=0,f=0,h=0,d=1/0,p=-1/0,g=-1/0,v=0,m=0;const u=new Set,_=new Set,x=new Set;for(const y of t.triangles){if(!r[y.id])continue;a++;const E=e.metrics[y.id];v+=E.area3d,m+=E.areaUv,E.degenerate3d&&(f++,x.add(y.faceId)),E.degenerateUv&&(h++,x.add(y.faceId)),E.flipped&&(l++,u.add(y.faceId)),e.overlap[y.id]&&(c++,_.add(y.faceId)),E.areaRatio!==null&&(d=Math.min(d,E.areaRatio),p=Math.max(p,E.areaRatio)),E.angleDistortion!==null&&(g=Math.max(g,E.angleDistortion))}let S=0,C=0,T=0;for(const y of e.edges)y.occurrences.some(E=>r[E.tri])&&(y.nonManifold?T++:y.boundary?S++:y.seam&&C++);let A=0,P=0,H=0;for(const y of e.islands){let E=!1,G=!1;for(const B of y.triIds)r[B]?E=!0:G=!0;E&&(A++,G&&P++,y.mirrored&&H++)}return{name:n,faceCount:o,triCount:a,flipped:l,overlap:c,deg3:f,degUv:h,minR:d===1/0?null:d,maxR:p===-1/0?null:p,maxAngle:g===-1/0?null:g,area3dSum:v,areaUvSum:m,boundary:S,seam:C,nonManifold:T,islandsTouched:A,islandsSpanned:P,mirroredTouched:H,flippedFaces:u,overlapFaces:_,degFaces:x}}function IA(){const{state:t,selectFaces:e,toggleFace:n}=Nr(),i=Le.useRef(null),r=Le.useRef(null);Le.useEffect(()=>{const l=i.current,c=new Rv({antialias:!0});c.setPixelRatio(Math.min(devicePixelRatio,2)),c.setSize(l.clientWidth,l.clientHeight),l.appendChild(c.domElement);const f=new Pv;f.background=new Oe("#20222a");const h=new Cn(45,l.clientWidth/l.clientHeight,.01,1e3);h.position.set(2.4,1.8,3.2);const d=new Iv(h,c.domElement);d.enableDamping=!0,f.add(new rA(16777215,3355460,1.2));const p=new bm(16777215,1.6);p.position.set(3,5,4),f.add(p);const g=new bm(11191551,.5);g.position.set(-3,-1,-2),f.add(g);const v=new Mt,m=new iA({vertexColors:!0,side:pn,roughness:.75,metalness:0,flatShading:!0}),u=new gn(v,m);f.add(u);const _=new gn(new Mt,new Fo({color:4376575,transparent:!0,opacity:.45,side:pn,depthTest:!1,polygonOffset:!0,polygonOffsetFactor:-2}));_.renderOrder=2,f.add(_);const x=new Fl(new Mt,new Oo({color:16777215,vertexColors:!0}));f.add(x);const S=new Lv,C=new De,T={renderer:c,scene:f,camera:h,controls:d,mesh:u,overlay:_,wire:x,raycaster:S,pointer:C,positions:null,frame:0,downX:0,downY:0,meshData:null};r.current=T;const A=()=>{T.frame=requestAnimationFrame(A),d.update(),c.render(f,h)};A();const P=()=>{const y=l.clientWidth,E=l.clientHeight;h.aspect=y/E,h.updateProjectionMatrix(),c.setSize(y,E)},H=new ResizeObserver(P);return H.observe(l),()=>{cancelAnimationFrame(T.frame),H.disconnect(),d.dispose(),v.dispose(),m.dispose(),c.dispose(),c.domElement.remove(),r.current=null}},[]);const{mesh:s,stats:o}=t;Le.useEffect(()=>{var u;const l=r.current;if(!l||!s||!o)return;const c=SA(s);l.positions=c,l.meshData=s;const f=l.mesh.geometry;f.setAttribute("position",new vn(c,3));const h=Fv(s,t.activeGroup),d=EA(s,o,t.showFlipped,t.showOverlap,h);f.setAttribute("color",new vn(d,3));const p=l.mesh.material;if((u=p.map)==null||u.dispose(),p.map=null,t.checkerOn){const _=bA(t.checkerScale),x=new Float32Array(c.length/3*2);let S=0;for(const C of s.triangles)for(const T of C.corners){const A=s.corners[T],P=A.vt>=0?A.vt:A.v;x[S++]=s.uvs[P*2],x[S++]=s.uvs[P*2+1]}f.setAttribute("uv",new vn(x,2)),p.map=_,p.vertexColors=t.activeGroup!==null,p.color.set(16777215),p.needsUpdate=!0}else p.vertexColors=!0,p.needsUpdate=!0;f.computeVertexNormals(),f.computeBoundingSphere(),f.computeBoundingBox(),l.wire.geometry.dispose(),l.wire.geometry=TA(s,h);const g=f.boundingBox,v=g.getCenter(new N),m=g.getSize(new N).length()/2||1;l.camera.position.copy(v).add(new N(1.6*m,1.1*m,2*m)),l.camera.near=m/100,l.camera.far=m*100,l.camera.updateProjectionMatrix(),l.controls.target.copy(v),l.controls.update()},[s,o,t.checkerOn,t.checkerScale,t.showFlipped,t.showOverlap,t.activeGroup]),Le.useEffect(()=>{const l=r.current;if(!l||!s||!l.positions)return;const c=wA(s,t.selectedFaceIds,l.positions);l.overlay.geometry.dispose(),l.overlay.geometry=c},[t.selectedFaceIds,s]),Le.useEffect(()=>{const l=r.current,c=l==null?void 0:l.renderer.domElement;if(!l||!c)return;const f=p=>{const g=c.getBoundingClientRect();l.pointer.x=(p.clientX-g.left)/g.width*2-1,l.pointer.y=-((p.clientY-g.top)/g.height)*2+1},h=p=>{l.downX=p.clientX,l.downY=p.clientY},d=p=>{var _;if(Math.hypot(p.clientX-l.downX,p.clientY-l.downY)>4)return;const g=l.meshData;if(!g)return;f(p),l.raycaster.setFromCamera(l.pointer,l.camera);const v=l.raycaster.intersectObject(l.mesh,!1);if(v.length===0){e(new Set);return}const m=v[0].faceIndex,u=(_=g.triangles[m])==null?void 0:_.faceId;u!==void 0&&(p.shiftKey?n(u):e(new Set([u])))};return c.addEventListener("pointerdown",h),c.addEventListener("pointerup",d),()=>{c.removeEventListener("pointerdown",h),c.removeEventListener("pointerup",d)}},[e,n]);const a=Le.useMemo(()=>{if(!s)return"未载入模型";const l=`${s.fileName} · ${s.faces.length} 面 / ${s.triangles.length} 三角 / ${s.vertexCount} 顶点身份`;return t.activeGroup?`检查组 ${t.activeGroup}（其他组淡化）— ${l}`:l},[s,t.activeGroup]);return W.jsx("div",{className:"view view3d",ref:i,children:W.jsxs("div",{className:"view-label",children:["3D 模型 — ",a]})})}function UA(){const{state:t,selectFaces:e,toggleFace:n}=Nr(),i=Le.useRef(null),r=Le.useRef(null);Le.useEffect(()=>{const a=i.current,l=new Rv({antialias:!0});l.setPixelRatio(Math.min(devicePixelRatio,2)),l.setSize(a.clientWidth,a.clientHeight),a.appendChild(l.domElement);const c=new Pv;c.background=new Oe("#17181e");const f=a.clientWidth/a.clientHeight,h=2.6,d=new sh(-h*f,h*f,h,-h,-10,10);d.position.set(.5,.5,5),d.lookAt(.5,.5,0),d.zoom=.9,d.updateProjectionMatrix();const p=new Iv(d,l.domElement);p.enableRotate=!1,p.enableDamping=!0,p.target.set(.5,.5,0),p.mouseButtons={LEFT:_i.PAN,MIDDLE:_i.DOLLY,RIGHT:_i.PAN};const g=NA(1,10);c.add(g);const v=new Mt,m=new gn(v,new Fo({vertexColors:!0,side:pn,transparent:!0,opacity:.55}));c.add(m);const u=new hs;c.add(u);const _=new gn(new Mt,new Fo({color:4376575,transparent:!0,opacity:.5,side:pn,depthTest:!1}));_.renderOrder=3,c.add(_);const x=new Lv,S=new De,C=()=>{const y=m.geometry.boundingBox;if(!y||!isFinite(y.min.x))return;const E=(y.min.x+y.max.x)/2,G=(y.min.y+y.max.y)/2,B=Math.max(y.max.x-y.min.x,.2),X=Math.max(y.max.y-y.min.y,.2),V=a.clientWidth/a.clientHeight,F=Math.min(2*h/(B*1.3),2*h*V/(X*1.3),40);d.zoom=Math.max(.05,F),p.target.set(E,G,0),d.position.set(E,G,5),d.updateProjectionMatrix(),p.update()},T={renderer:l,scene:c,camera:d,controls:p,fills:m,edgeLayer:u,selection:_,raycaster:x,pointer:S,meshData:null,frame:0,downX:0,downY:0,zoomFit:C,lastFitMesh:null};r.current=T,l.domElement.addEventListener("dblclick",C);const A=()=>{T.frame=requestAnimationFrame(A),p.update(),l.render(c,d)};A();const P=()=>{const y=a.clientWidth,E=a.clientHeight,G=y/E;d.left=-h*G,d.right=h*G,d.top=h,d.bottom=-h,d.updateProjectionMatrix(),l.setSize(y,E)},H=new ResizeObserver(P);return H.observe(a),()=>{cancelAnimationFrame(T.frame),H.disconnect(),l.domElement.removeEventListener("dblclick",C),p.dispose(),l.dispose(),l.domElement.remove(),r.current=null}},[]);const{mesh:s,stats:o}=t;return Le.useEffect(()=>{const a=r.current;if(!a||!s||!o)return;a.meshData=s;const l=Fv(s,t.activeGroup),c=RA(s,o,{showFlipped:t.showFlipped,showOverlap:t.showOverlap,activeMask:l});a.fills.geometry.dispose(),a.fills.geometry=c;const f=a.edgeLayer;f.children.forEach(p=>{var g;(g=p.geometry)==null||g.dispose()}),f.clear();const h=AA(s,o,l),d=(p,g,v)=>{const m=new Fl(p,new Oo({vertexColors:!0,transparent:g<1,opacity:g,depthTest:!1}));m.renderOrder=v,f.add(m)};d(h.regular,.55,1),d(h.boundary,.9,2),d(h.seam,1,2),d(h.nonManifold,1,3),a.lastFitMesh!==s&&(a.lastFitMesh=s,a.zoomFit())},[s,o,t.showFlipped,t.showOverlap,t.activeGroup]),Le.useEffect(()=>{const a=r.current;!a||!s||(a.selection.geometry.dispose(),a.selection.geometry=CA(s,t.selectedFaceIds))},[t.selectedFaceIds,s]),Le.useEffect(()=>{const a=r.current,l=a==null?void 0:a.renderer.domElement;if(!a||!l)return;const c=d=>{const p=l.getBoundingClientRect();a.pointer.x=(d.clientX-p.left)/p.width*2-1,a.pointer.y=-((d.clientY-p.top)/p.height)*2+1},f=d=>{a.downX=d.clientX,a.downY=d.clientY},h=d=>{var u;if(Math.hypot(d.clientX-a.downX,d.clientY-a.downY)>4)return;const p=a.meshData;if(!p)return;c(d),a.raycaster.setFromCamera(a.pointer,a.camera);const g=a.raycaster.intersectObject(a.fills,!1);if(g.length===0){e(new Set);return}const v=g[0].faceIndex,m=(u=p.triangles[v])==null?void 0:u.faceId;m!==void 0&&(d.shiftKey?n(m):e(new Set([m])))};return l.addEventListener("pointerdown",f),l.addEventListener("pointerup",h),()=>{l.removeEventListener("pointerdown",f),l.removeEventListener("pointerup",h)}},[e,n]),W.jsx("div",{className:"view view2d",ref:i,children:W.jsxs("div",{className:"view-label",children:["2D UV — V 向上（OBJ 原生方向）· 双击自适应 · 拖动平移/滚轮缩放",t.activeGroup?` · 检查组「${t.activeGroup}」，其他组淡化`:""]})})}function NA(t,e){const n=new hs,i=[];for(let o=0;o<=e;o++){const a=o/e*t;i.push(0,a,0,t,a,0),i.push(a,0,0,a,t,0)}const r=new Fl(new Mt().setAttribute("position",new Ct(i,3)),new Oo({color:2763830,transparent:!0,opacity:.7})),s=new Fl(new Mt().setAttribute("position",new Ct([0,0,0,t,0,0,t,0,0,t,t,0,t,t,0,0,t,0,0,t,0,0,0,0],3)),new Oo({color:5660800}));return n.add(r,s),n}function wn(t,e=3){return t==null||!Number.isFinite(t)?"—":t.toFixed(e)}function FA(t){if(t===null)return"退化";const e=(t-1)*100;return`${e>=0?"+":""}${e.toFixed(0)}%`}function OA(t){const e=t.filter(r=>r.areaRatio!==null);if(e.length===0)return{count:t.length,valid:0,maxRatio:null,maxAngle:null};let n=0,i=0;for(const r of e)n=Math.max(n,r.areaRatio),i=Math.max(i,r.angleDistortion??0);return{count:t.length,valid:e.length,maxRatio:n,maxAngle:i}}function kA(){const{state:t,selectFaces:e,setActiveGroup:n}=Nr(),{mesh:i,stats:r,selectedFaceIds:s,activeGroup:o}=t,a=Le.useMemo(()=>i?LA(i):[],[i]),l=Le.useMemo(()=>{if(!i||!r)return null;const p=new Map;i.triangles.forEach(V=>{const F=p.get(V.faceId);F?F.push(V.id):p.set(V.faceId,[V.id])});let g=0,v=0,m=0,u=0,_=1/0,x=-1/0,S=-1/0,C=0,T=0;for(const V of r.metrics)C+=V.area3d,T+=V.areaUv,V.degenerate3d&&g++,V.degenerateUv&&v++,V.flipped&&m++,V.areaRatio!==null&&(_=Math.min(_,V.areaRatio),x=Math.max(x,V.areaRatio)),V.angleDistortion!==null&&(S=Math.max(S,V.angleDistortion));for(let V=0;V<r.overlap.length;V++)r.overlap[V]&&u++;const A=r.edges.filter(V=>V.boundary).length,P=r.edges.filter(V=>V.seam).length,H=r.edges.filter(V=>V.nonManifold).length,y=r.islands.filter(V=>V.mirrored).length,E=V=>{const F=new Set;return V.forEach(ee=>F.add(i.triangles[ee].faceId)),F},G=r.metrics.map((V,F)=>V.flipped?F:-1).filter(V=>V>=0),B=[...r.overlap].map((V,F)=>V?F:-1).filter(V=>V>=0),X=r.metrics.map((V,F)=>V.degenerate3d||V.degenerateUv?F:-1).filter(V=>V>=0);return{triInFace:p,deg3:g,degUv:v,flipped:m,overlap:u,area3dSum:C,areaUvSum:T,minR:_===1/0?null:_,maxR:x===-1/0?null:x,maxAngle:S===-1/0?null:S,boundary:A,seam:P,nonManifold:H,mirroredIsl:y,islands:r.islands.length,flippedFaces:E(G),overlapFaces:E(B),degFaces:E(X)}},[i,r]),c=Le.useMemo(()=>!i||!r||o===null?null:DA(i,r,o),[i,r,o]),f=Le.useMemo(()=>{if(!i||!r||s.size===0)return null;const p=[];i.faces.forEach(m=>{s.has(m.id)&&i.triangles.forEach(u=>{u.faceId===m.id&&p.push(u.id)})});const g=OA(p.map(m=>r.metrics[m])),v=p.length===1?r.metrics[p[0]]:null;return{agg:g,one:v,triCount:p.length}},[i,r,s]);if(!i||!r||!l)return W.jsx("aside",{className:"panel",children:"尚未载入模型。"});const h=p=>p?"bad":"ok",d=c??l;return W.jsxs("aside",{className:"panel",children:[W.jsxs("section",{className:"group-filter",children:[W.jsx("h3",{children:"检查组（按 OBJ o / g 面组）"}),W.jsxs("select",{className:"group-select","data-testid":"group-select",value:o??"",onChange:p=>n(p.target.value===""?null:p.target.value),children:[W.jsxs("option",{value:"",children:["全部（",i.faces.length," 面 / ",i.triangles.length," 三角）"]}),a.map(p=>W.jsxs("option",{value:p.name,children:[p.name,"（",p.faceIds.length," 面 / ",p.triIds.length," 三角）"]},p.name))]}),c?W.jsxs(W.Fragment,{children:[W.jsxs("p",{className:"hint filter-note","data-testid":"filter-note",children:["当前数字仅按组内 ",c.faceCount," 面 / ",c.triCount," 三角形统计； 其他组在二维与三维视图中淡化显示，模型本身未被裁剪—— 不删面、不改 UV、不改接缝，导出与存档始终是完整模型。"]}),c.islandsSpanned>0&&W.jsxs("p",{className:"hint filter-warn","data-testid":"spanning-note",children:[c.islandsTouched," 个触及的 UV 岛中有 ",c.islandsSpanned," 个跨多个组： 岛连通/镜像按整网格拓扑计算（岛内其他组的三角形也计入该岛）， 仅三角形级数字是组内统计。"]})]}):W.jsx("p",{className:"hint",children:"选择单个 o/g 面组：问题清单与面积/角度汇总只计组内面， 两视图淡化其他组；选“全部”恢复完整统计。"})]}),W.jsxs("section",{children:[W.jsx("h3",{children:"拓扑"}),W.jsx(wt,{k:"顶点身份 (v)",v:i.vertexCount}),W.jsx(wt,{k:"角点 (corner)",v:i.corners.length,hint:"接缝两侧可为同 v 不同 vt"}),W.jsx(wt,{k:c?"组内 / 全部 面与三角形":"原始面 / 三角形",v:c?`${c.faceCount} / ${i.faces.length} · ${c.triCount} / ${i.triangles.length}`:`${i.faces.length} / ${i.triangles.length}`}),W.jsx(wt,{k:"UV 顶点 (vt)",v:i.uvCount}),W.jsx(wt,{k:"UV 来源",v:i.uvOrigin==="obj"?"OBJ/编辑":"平面回退"})]}),W.jsxs("section",{children:[W.jsx("h3",{children:"边（按顶点身份+空间近邻）"}),W.jsx(wt,{k:c?"触及 UV 岛（整网格拓扑）":"UV 岛",v:c?`${c.islandsTouched} / ${l.islands}`:l.islands,hint:c?"分母为整网格岛数；跨组岛不拆分":void 0}),W.jsx(wt,{k:"边界边",v:d.boundary,hint:c?"边的任一侧属于本组即计入；分类仍按整网格":void 0}),W.jsx(wt,{k:"共享边接缝",v:d.seam,cls:d.seam?"warn":"ok",hint:c?"接缝由整网格拓扑判定，过滤不改变接缝":void 0}),W.jsx(wt,{k:"非流形边",v:d.nonManifold,cls:h(d.nonManifold===0),hint:"≥3 个三角形共享的 3D 边"})]}),W.jsxs("section",{children:[W.jsxs("h3",{children:["UV 健康",c?`（组「${c.name}」内）`:""]}),W.jsx(vu,{label:"翻转三角形 / 镜像岛",value:c?`${c.flipped} / ${c.mirroredTouched}`:`${l.flipped} / ${l.mirroredIsl}`,bad:d.flipped>0,onLocate:()=>d.flippedFaces.size&&e(d.flippedFaces),hint:c?"镜像岛按整网格判定：组内三角翻转即令该岛镜像":void 0}),W.jsx(vu,{label:"岛间重叠三角形",value:d.overlap,bad:d.overlap>0,onLocate:()=>d.overlapFaces.size&&e(d.overlapFaces),hint:c?"重叠按整网格岛拓扑检测，只数组内被标记三角":void 0}),W.jsx(vu,{label:"退化（3D / UV）",value:`${d.deg3} / ${d.degUv}`,bad:d.deg3+d.degUv>0,onLocate:()=>d.degFaces.size&&e(d.degFaces),hint:"退化面不参与比率与角度计算"})]}),W.jsxs("section",{children:[W.jsx("h3",{children:"面积畸变（纹素密度）"}),W.jsx(wt,{k:"全局相对尺度",v:wn(r.globalScale,4),hint:c?"中位 3D/UV 面积比（整网格）；过滤不改变归一基准":"中位 3D/UV 面积比"}),W.jsx(wt,{k:"最小 / 最大比率",v:`${wn(d.minR)}× / ${wn(d.maxR)}×`,cls:d.maxR!==null&&(d.maxR>2||d.minR<.5)?"warn":"ok"}),W.jsx(wt,{k:c?"组内 3D / UV 面积合计":"3D / UV 面积合计",v:`${wn(d.area3dSum,5)} / ${wn(d.areaUvSum,5)}`,hint:c?"仅组内三角形之和；跨组岛其余部分不计入":"全部三角形之和"}),W.jsxs("p",{className:"hint",children:["比率 1× = 与整网格中位密度一致；0.5× 偏稀，2× 偏密。",c?" 过滤时比率仍按整网格中位归一，跨组可直接比较。":""]})]}),W.jsxs("section",{children:[W.jsx("h3",{children:"角度畸变"}),W.jsx(wt,{k:c?"组内最大内角偏差":"全模型最大内角偏差",v:`${wn(d.maxAngle,1)}°`,cls:d.maxAngle!==null&&d.maxAngle>15?"warn":"ok"}),W.jsx("p",{className:"hint",children:"对应 3D/UV 内角最大差值；0° 为保角映射。"})]}),W.jsxs("section",{children:[W.jsxs("h3",{children:["选中面",s.size>0?`（${s.size} 面 / ${(f==null?void 0:f.triCount)??0} 三角）`:""]}),!f&&W.jsx("p",{className:"hint",children:"在任一视图点选面；Shift+点击加选。"}),(f==null?void 0:f.one)&&W.jsxs(W.Fragment,{children:[W.jsx(wt,{k:"面积畸变比率",v:f.one.areaRatio===null?"退化":`${wn(f.one.areaRatio)}×`,hint:FA(f.one.areaRatio)}),W.jsx(wt,{k:"角度畸变",v:f.one.angleDistortion===null?"退化":`${wn(f.one.angleDistortion,1)}°`}),W.jsx(wt,{k:"3D / UV 面积",v:`${wn(f.one.area3d,5)} / ${wn(f.one.areaUv,5)}`}),W.jsx(wt,{k:"翻转",v:f.one.flipped?"是":"否",cls:f.one.flipped?"bad":"ok"})]}),f&&!f.one&&W.jsxs(W.Fragment,{children:[W.jsx(wt,{k:"最大面积比率",v:`${wn(f.agg.maxRatio)}×`}),W.jsx(wt,{k:"最大角度畸变",v:`${wn(f.agg.maxAngle,1)}°`}),W.jsx("p",{className:"hint",children:"多选显示聚合峰值；点单一面查看个体数值。"})]})]})]})}function wt({k:t,v:e,cls:n,hint:i}){return W.jsxs("div",{className:`row ${n??""}`,children:[W.jsx("span",{className:"k",children:t}),W.jsx("span",{className:"v",title:i,children:e})]})}function vu({label:t,value:e,bad:n,onLocate:i,hint:r}){return W.jsxs("div",{className:`row issue ${n?"bad":"ok"}`,title:r,children:[W.jsx("span",{className:"k",children:t}),W.jsxs("span",{className:"v",children:[e,n&&W.jsx("button",{className:"locate",onClick:i,children:"定位"})]})]})}function zA(){const{state:t,notify:e}=Nr();return Le.useEffect(()=>{if(!t.notice)return;const n=setTimeout(()=>e(null),t.notice.kind==="error"?6e3:3500);return()=>clearTimeout(n)},[t.notice,e]),t.notice?W.jsx("div",{className:`notice ${t.notice.kind}`,children:t.notice.text}):null}function BA(){return W.jsxs("div",{className:"legend",children:[W.jsxs("span",{children:[W.jsx("i",{className:"sw boundary"})," 边界"]}),W.jsxs("span",{children:[W.jsx("i",{className:"sw seam"})," 共享边接缝"]}),W.jsxs("span",{children:[W.jsx("i",{className:"sw nonmanifold"})," 非流形边"]}),W.jsxs("span",{children:[W.jsx("i",{className:"sw flipped"})," 翻转"]}),W.jsxs("span",{children:[W.jsx("i",{className:"sw overlap"})," 岛间重叠"]}),W.jsxs("span",{children:[W.jsx("i",{className:"sw selected"})," 选中"]})]})}function HA(){const{loadObjText:t}=Nr();return W.jsxs("div",{className:"empty",children:[W.jsx("h2",{children:"本地低模 UV 检查"}),W.jsx("p",{children:"载入一个 OBJ 子集（v / vt / vn / f，支持 n 边形与负索引）， 或从样例开始。顶点身份来自 v 行，接缝两侧角点可共享顶点但带不同 UV， 工具绝不会按空间位置合并顶点。"}),W.jsx("div",{className:"sample-grid",children:Z_.map(e=>W.jsxs("button",{onClick:()=>t(e.obj,`${e.id}.obj`),children:[W.jsx("b",{children:e.label}),W.jsx("small",{children:e.description})]},e.id))}),W.jsx("p",{className:"hint",children:"xatlas WASM 自动展开为可选项，失败时原模型与原 UV 原样保留； 工程存于浏览器 IndexedDB，无后端。导出的 OBJ 可在 Blender/Maya 等 标准工具中重新载入验证。"})]})}function VA(){const{state:t}=Nr();return t.mesh?W.jsxs("div",{className:"workspace",children:[W.jsxs("div",{className:"views",children:[W.jsx(IA,{}),W.jsx(UA,{}),W.jsx(BA,{})]}),W.jsx(kA,{})]}):W.jsx(HA,{})}function GA(){return W.jsx(Xy,{children:W.jsxs("div",{className:"app",children:[W.jsx(Qy,{}),W.jsx(VA,{}),W.jsx(zA,{})]})})}xu.createRoot(document.getElementById("root")).render(W.jsx(i0.StrictMode,{children:W.jsx(GA,{})}));export{Iy as _};
