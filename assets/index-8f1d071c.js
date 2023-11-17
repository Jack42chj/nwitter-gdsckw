function VS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function FS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tw={exports:{}},Lc={},nw={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),US=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),jS=Symbol.for("react.strict_mode"),BS=Symbol.for("react.profiler"),zS=Symbol.for("react.provider"),HS=Symbol.for("react.context"),WS=Symbol.for("react.forward_ref"),qS=Symbol.for("react.suspense"),KS=Symbol.for("react.memo"),GS=Symbol.for("react.lazy"),Vy=Symbol.iterator;function QS(t){return t===null||typeof t!="object"?null:(t=Vy&&t[Vy]||t["@@iterator"],typeof t=="function"?t:null)}var rw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iw=Object.assign,sw={};function ao(t,e,n){this.props=t,this.context=e,this.refs=sw,this.updater=n||rw}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ow(){}ow.prototype=ao.prototype;function Wp(t,e,n){this.props=t,this.context=e,this.refs=sw,this.updater=n||rw}var qp=Wp.prototype=new ow;qp.constructor=Wp;iw(qp,ao.prototype);qp.isPureReactComponent=!0;var Fy=Array.isArray,aw=Object.prototype.hasOwnProperty,Kp={current:null},lw={key:!0,ref:!0,__self:!0,__source:!0};function uw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)aw.call(e,r)&&!lw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:el,type:t,key:s,ref:o,props:i,_owner:Kp.current}}function YS(t,e){return{$$typeof:el,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gp(t){return typeof t=="object"&&t!==null&&t.$$typeof===el}function XS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uy=/\/+/g;function Qh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XS(""+t.key):e.toString(36)}function cu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case el:case US:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Qh(o,0):r,Fy(i)?(n="",t!=null&&(n=t.replace(Uy,"$&/")+"/"),cu(i,e,n,"",function(u){return u})):i!=null&&(Gp(i)&&(i=YS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Qh(s,a);o+=cu(s,e,n,l,i)}else if(l=QS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Qh(s,a++),o+=cu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return cu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},hu={transition:null},ZS={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:hu,ReactCurrentOwner:Kp};ie.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!Gp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=ao;ie.Fragment=$S;ie.Profiler=BS;ie.PureComponent=Wp;ie.StrictMode=jS;ie.Suspense=qS;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)aw.call(e,l)&&!lw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:el,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:HS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zS,_context:t},t.Consumer=t};ie.createElement=uw;ie.createFactory=function(t){var e=uw.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:WS,render:t}};ie.isValidElement=Gp;ie.lazy=function(t){return{$$typeof:GS,_payload:{_status:-1,_result:t},_init:JS}};ie.memo=function(t,e){return{$$typeof:KS,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=hu.transition;hu.transition={};try{t()}finally{hu.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ie.useContext=function(t){return Nt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ie.useId=function(){return Nt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ie.useRef=function(t){return Nt.current.useRef(t)};ie.useState=function(t){return Nt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Nt.current.useTransition()};ie.version="18.2.0";nw.exports=ie;var k=nw.exports;const _n=FS(k),eA=VS({__proto__:null,default:_n},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tA=k,nA=Symbol.for("react.element"),rA=Symbol.for("react.fragment"),iA=Object.prototype.hasOwnProperty,sA=tA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oA={key:!0,ref:!0,__self:!0,__source:!0};function cw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iA.call(e,r)&&!oA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nA,type:t,key:s,ref:o,props:i,_owner:sA.current}}Lc.Fragment=rA;Lc.jsx=cw;Lc.jsxs=cw;tw.exports=Lc;var R=tw.exports,tf={},hw={exports:{}},Yt={},dw={exports:{}},fw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var z=O.length;O.push($);e:for(;0<z;){var ge=z-1>>>1,Se=O[ge];if(0<i(Se,$))O[ge]=$,O[z]=Se,z=ge;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var $=O[0],z=O.pop();if(z!==$){O[0]=z;e:for(var ge=0,Se=O.length,dn=Se>>>1;ge<dn;){var ae=2*(ge+1)-1,Lt=O[ae],dt=ae+1,bt=O[dt];if(0>i(Lt,z))dt<Se&&0>i(bt,Lt)?(O[ge]=bt,O[dt]=z,ge=dt):(O[ge]=Lt,O[ae]=z,ge=ae);else if(dt<Se&&0>i(bt,z))O[ge]=bt,O[dt]=z,ge=dt;else break e}}return $}function i(O,$){var z=O.sortIndex-$.sortIndex;return z!==0?z:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=O)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function g(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,st(E);else{var $=n(u);$!==null&&qe(g,$.startTime-O)}}function E(O,$){v=!1,_&&(_=!1,m(N),N=-1),p=!0;var z=d;try{for(y($),h=n(l);h!==null&&(!(h.expirationTime>$)||O&&!Ue());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var Se=ge(h.expirationTime<=$);$=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),y($)}else r(l);h=n(l)}if(h!==null)var dn=!0;else{var ae=n(u);ae!==null&&qe(g,ae.startTime-$),dn=!1}return dn}finally{h=null,d=z,p=!1}}var A=!1,S=null,N=-1,Z=5,B=-1;function Ue(){return!(t.unstable_now()-B<Z)}function fe(){if(S!==null){var O=t.unstable_now();B=O;var $=!0;try{$=S(!0,O)}finally{$?Zt():(A=!1,S=null)}}else A=!1}var Zt;if(typeof f=="function")Zt=function(){f(fe)};else if(typeof MessageChannel<"u"){var Cn=new MessageChannel,kn=Cn.port2;Cn.port1.onmessage=fe,Zt=function(){kn.postMessage(null)}}else Zt=function(){w(fe,0)};function st(O){S=O,A||(A=!0,Zt())}function qe(O,$){N=w(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,st(E))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var z=d;d=$;try{return O()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=d;d=O;try{return $()}finally{d=z}},t.unstable_scheduleCallback=function(O,$,z){var ge=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ge+z:ge):z=ge,O){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=z+Se,O={id:c++,callback:$,priorityLevel:O,startTime:z,expirationTime:Se,sortIndex:-1},z>ge?(O.sortIndex=z,e(u,O),n(l)===null&&O===n(u)&&(_?(m(N),N=-1):_=!0,qe(g,z-ge))):(O.sortIndex=Se,e(l,O),v||p||(v=!0,st(E))),O},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(O){var $=d;return function(){var z=d;d=$;try{return O.apply(this,arguments)}finally{d=z}}}})(fw);dw.exports=fw;var aA=dw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pw=k,Gt=aA;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mw=new Set,ma={};function Wi(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(ma[t]=e,t=0;t<e.length;t++)mw.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nf=Object.prototype.hasOwnProperty,lA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$y={},jy={};function uA(t){return nf.call(jy,t)?!0:nf.call($y,t)?!1:lA.test(t)?jy[t]=!0:($y[t]=!0,!1)}function cA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hA(t,e,n,r){if(e===null||typeof e>"u"||cA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qp=/[\-:]([a-z])/g;function Yp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qp,Yp);ht[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qp,Yp);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qp,Yp);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xp(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hA(e,n,i,r)&&(n=null),r||i===null?uA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gr=pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Jp=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),gw=Symbol.for("react.provider"),yw=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),em=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),vw=Symbol.for("react.offscreen"),By=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=By&&t[By]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Yh;function $o(t){if(Yh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yh=e&&e[1]||""}return`
`+Yh+t}var Xh=!1;function Jh(t,e){if(!t||Xh)return"";Xh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function dA(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=Jh(t.type,!1),t;case 11:return t=Jh(t.type.render,!1),t;case 1:return t=Jh(t.type,!0),t;default:return""}}function af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case rf:return"Profiler";case Jp:return"StrictMode";case sf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yw:return(t.displayName||"Context")+".Consumer";case gw:return(t._context.displayName||"Context")+".Provider";case Zp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case em:return e=t.displayName||null,e!==null?e:af(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return af(t(e))}catch{}}return null}function fA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return af(e);case 8:return e===Jp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _w(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pA(t){var e=_w(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bl(t){t._valueTracker||(t._valueTracker=pA(t))}function ww(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_w(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ew(t,e){e=e.checked,e!=null&&Xp(t,"checked",e,!1)}function uf(t,e){Ew(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&cf(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cf(t,e,n){(e!=="number"||bu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jo=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(jo(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function Tw(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,Rw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mA=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(t){mA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Jo[e]=Jo[t]})});function Sw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Jo.hasOwnProperty(t)&&Jo[t]?(""+e).trim():e+"px"}function Aw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gA=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ff(t,e){if(e){if(gA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=null;function tm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,Is=null,Rs=null;function Ky(t){if(t=rl(t)){if(typeof gf!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Uc(e),gf(t.stateNode,t.type,e))}}function Cw(t){Is?Rs?Rs.push(t):Rs=[t]:Is=t}function kw(){if(Is){var t=Is,e=Rs;if(Rs=Is=null,Ky(t),e)for(t=0;t<e.length;t++)Ky(e[t])}}function Pw(t,e){return t(e)}function xw(){}var Zh=!1;function Dw(t,e,n){if(Zh)return t(e,n);Zh=!0;try{return Pw(t,e,n)}finally{Zh=!1,(Is!==null||Rs!==null)&&(xw(),kw())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var r=Uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var yf=!1;if(ar)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{yf=!1}function yA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Zo=!1,Mu=null,Vu=!1,vf=null,vA={onError:function(t){Zo=!0,Mu=t}};function _A(t,e,n,r,i,s,o,a,l){Zo=!1,Mu=null,yA.apply(vA,arguments)}function wA(t,e,n,r,i,s,o,a,l){if(_A.apply(this,arguments),Zo){if(Zo){var u=Mu;Zo=!1,Mu=null}else throw Error(x(198));Vu||(Vu=!0,vf=u)}}function qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gy(t){if(qi(t)!==t)throw Error(x(188))}function EA(t){var e=t.alternate;if(!e){if(e=qi(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gy(i),t;if(s===r)return Gy(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Ow(t){return t=EA(t),t!==null?Lw(t):null}function Lw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lw(t);if(e!==null)return e;t=t.sibling}return null}var bw=Gt.unstable_scheduleCallback,Qy=Gt.unstable_cancelCallback,TA=Gt.unstable_shouldYield,IA=Gt.unstable_requestPaint,Fe=Gt.unstable_now,RA=Gt.unstable_getCurrentPriorityLevel,nm=Gt.unstable_ImmediatePriority,Mw=Gt.unstable_UserBlockingPriority,Fu=Gt.unstable_NormalPriority,SA=Gt.unstable_LowPriority,Vw=Gt.unstable_IdlePriority,bc=null,Fn=null;function AA(t){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:PA,CA=Math.log,kA=Math.LN2;function PA(t){return t>>>=0,t===0?32:31-(CA(t)/kA|0)|0}var Vl=64,Fl=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Bo(a):(s&=o,s!==0&&(r=Bo(s)))}else o=n&~i,o!==0?r=Bo(o):s!==0&&(r=Bo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function xA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=xA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fw(){var t=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),t}function ed(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function NA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Uw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $w,im,jw,Bw,zw,wf=!1,Ul=[],Mr=null,Vr=null,Fr=null,va=new Map,_a=new Map,Cr=[],OA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yy(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Co(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rl(e),e!==null&&im(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LA(t,e,n,r,i){switch(e){case"focusin":return Mr=Co(Mr,t,e,n,r,i),!0;case"dragenter":return Vr=Co(Vr,t,e,n,r,i),!0;case"mouseover":return Fr=Co(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return va.set(s,Co(va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_a.set(s,Co(_a.get(s)||null,t,e,n,r,i)),!0}return!1}function Hw(t){var e=mi(t.target);if(e!==null){var n=qi(e);if(n!==null){if(e=n.tag,e===13){if(e=Nw(n),e!==null){t.blockedOn=e,zw(t.priority,function(){jw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mf=r,n.target.dispatchEvent(r),mf=null}else return e=rl(n),e!==null&&im(e),t.blockedOn=n,!1;e.shift()}return!0}function Xy(t,e,n){du(t)&&n.delete(e)}function bA(){wf=!1,Mr!==null&&du(Mr)&&(Mr=null),Vr!==null&&du(Vr)&&(Vr=null),Fr!==null&&du(Fr)&&(Fr=null),va.forEach(Xy),_a.forEach(Xy)}function ko(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,bA)))}function wa(t){function e(i){return ko(i,t)}if(0<Ul.length){ko(Ul[0],t);for(var n=1;n<Ul.length;n++){var r=Ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mr!==null&&ko(Mr,t),Vr!==null&&ko(Vr,t),Fr!==null&&ko(Fr,t),va.forEach(e),_a.forEach(e),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)Hw(n),n.blockedOn===null&&Cr.shift()}var Ss=gr.ReactCurrentBatchConfig,$u=!0;function MA(t,e,n,r){var i=he,s=Ss.transition;Ss.transition=null;try{he=1,sm(t,e,n,r)}finally{he=i,Ss.transition=s}}function VA(t,e,n,r){var i=he,s=Ss.transition;Ss.transition=null;try{he=4,sm(t,e,n,r)}finally{he=i,Ss.transition=s}}function sm(t,e,n,r){if($u){var i=Ef(t,e,n,r);if(i===null)cd(t,e,r,ju,n),Yy(t,r);else if(LA(i,t,e,n,r))r.stopPropagation();else if(Yy(t,r),e&4&&-1<OA.indexOf(t)){for(;i!==null;){var s=rl(i);if(s!==null&&$w(s),s=Ef(t,e,n,r),s===null&&cd(t,e,r,ju,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cd(t,e,r,null,n)}}var ju=null;function Ef(t,e,n,r){if(ju=null,t=tm(r),t=mi(t),t!==null)if(e=qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Nw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ju=t,null}function Ww(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RA()){case nm:return 1;case Mw:return 4;case Fu:case SA:return 16;case Vw:return 536870912;default:return 16}default:return 16}}var Or=null,om=null,fu=null;function qw(){if(fu)return fu;var t,e=om,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fu=i.slice(t,1<r?1-r:void 0)}function pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Jy(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:Jy,this.isPropagationStopped=Jy,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},am=Xt(lo),nl=xe({},lo,{view:0,detail:0}),FA=Xt(nl),td,nd,Po,Mc=xe({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Po&&(Po&&t.type==="mousemove"?(td=t.screenX-Po.screenX,nd=t.screenY-Po.screenY):nd=td=0,Po=t),td)},movementY:function(t){return"movementY"in t?t.movementY:nd}}),Zy=Xt(Mc),UA=xe({},Mc,{dataTransfer:0}),$A=Xt(UA),jA=xe({},nl,{relatedTarget:0}),rd=Xt(jA),BA=xe({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),zA=Xt(BA),HA=xe({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WA=Xt(HA),qA=xe({},lo,{data:0}),ev=Xt(qA),KA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QA[t])?!!e[t]:!1}function lm(){return YA}var XA=xe({},nl,{key:function(t){if(t.key){var e=KA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lm,charCode:function(t){return t.type==="keypress"?pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JA=Xt(XA),ZA=xe({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tv=Xt(ZA),eC=xe({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lm}),tC=Xt(eC),nC=xe({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rC=Xt(nC),iC=xe({},Mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sC=Xt(iC),oC=[9,13,27,32],um=ar&&"CompositionEvent"in window,ea=null;ar&&"documentMode"in document&&(ea=document.documentMode);var aC=ar&&"TextEvent"in window&&!ea,Kw=ar&&(!um||ea&&8<ea&&11>=ea),nv=String.fromCharCode(32),rv=!1;function Gw(t,e){switch(t){case"keyup":return oC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function lC(t,e){switch(t){case"compositionend":return Qw(e);case"keypress":return e.which!==32?null:(rv=!0,nv);case"textInput":return t=e.data,t===nv&&rv?null:t;default:return null}}function uC(t,e){if(ls)return t==="compositionend"||!um&&Gw(t,e)?(t=qw(),fu=om=Or=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kw&&e.locale!=="ko"?null:e.data;default:return null}}var cC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cC[t.type]:e==="textarea"}function Yw(t,e,n,r){Cw(r),e=Bu(e,"onChange"),0<e.length&&(n=new am("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ta=null,Ea=null;function hC(t){aE(t,0)}function Vc(t){var e=hs(t);if(ww(e))return t}function dC(t,e){if(t==="change")return e}var Xw=!1;if(ar){var id;if(ar){var sd="oninput"in document;if(!sd){var sv=document.createElement("div");sv.setAttribute("oninput","return;"),sd=typeof sv.oninput=="function"}id=sd}else id=!1;Xw=id&&(!document.documentMode||9<document.documentMode)}function ov(){ta&&(ta.detachEvent("onpropertychange",Jw),Ea=ta=null)}function Jw(t){if(t.propertyName==="value"&&Vc(Ea)){var e=[];Yw(e,Ea,t,tm(t)),Dw(hC,e)}}function fC(t,e,n){t==="focusin"?(ov(),ta=e,Ea=n,ta.attachEvent("onpropertychange",Jw)):t==="focusout"&&ov()}function pC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vc(Ea)}function mC(t,e){if(t==="click")return Vc(e)}function gC(t,e){if(t==="input"||t==="change")return Vc(e)}function yC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:yC;function Ta(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nf.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lv(t,e){var n=av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=av(n)}}function Zw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function eE(){for(var t=window,e=bu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bu(t.document)}return e}function cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vC(t){var e=eE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zw(n.ownerDocument.documentElement,n)){if(r!==null&&cm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lv(n,s);var o=lv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _C=ar&&"documentMode"in document&&11>=document.documentMode,us=null,Tf=null,na=null,If=!1;function uv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||us==null||us!==bu(r)||(r=us,"selectionStart"in r&&cm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),na&&Ta(na,r)||(na=r,r=Bu(Tf,"onSelect"),0<r.length&&(e=new am("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=us)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},od={},tE={};ar&&(tE=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Fc(t){if(od[t])return od[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tE)return od[t]=e[n];return t}var nE=Fc("animationend"),rE=Fc("animationiteration"),iE=Fc("animationstart"),sE=Fc("transitionend"),oE=new Map,cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){oE.set(t,e),Wi(e,[t])}for(var ad=0;ad<cv.length;ad++){var ld=cv[ad],wC=ld.toLowerCase(),EC=ld[0].toUpperCase()+ld.slice(1);ni(wC,"on"+EC)}ni(nE,"onAnimationEnd");ni(rE,"onAnimationIteration");ni(iE,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(sE,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TC=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function hv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wA(r,e,void 0,t),t.currentTarget=null}function aE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;hv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;hv(i,a,u),s=l}}}if(Vu)throw t=vf,Vu=!1,vf=null,t}function _e(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var r=t+"__bubble";n.has(r)||(lE(e,t,2,!1),n.add(r))}function ud(t,e,n){var r=0;e&&(r|=4),lE(n,t,r,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Bl]){t[Bl]=!0,mw.forEach(function(n){n!=="selectionchange"&&(TC.has(n)||ud(n,!1,t),ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,ud("selectionchange",!1,e))}}function lE(t,e,n,r){switch(Ww(e)){case 1:var i=MA;break;case 4:i=VA;break;default:i=sm}n=i.bind(null,e,n,t),i=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Dw(function(){var u=s,c=tm(n),h=[];e:{var d=oE.get(t);if(d!==void 0){var p=am,v=t;switch(t){case"keypress":if(pu(n)===0)break e;case"keydown":case"keyup":p=JA;break;case"focusin":v="focus",p=rd;break;case"focusout":v="blur",p=rd;break;case"beforeblur":case"afterblur":p=rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$A;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=tC;break;case nE:case rE:case iE:p=zA;break;case sE:p=rC;break;case"scroll":p=FA;break;case"wheel":p=sC;break;case"copy":case"cut":case"paste":p=WA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tv}var _=(e&4)!==0,w=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var g=y.stateNode;if(y.tag===5&&g!==null&&(y=g,m!==null&&(g=ya(f,m),g!=null&&_.push(Ra(f,g,y)))),w)break;f=f.return}0<_.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==mf&&(v=n.relatedTarget||n.fromElement)&&(mi(v)||v[lr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?mi(v):null,v!==null&&(w=qi(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=Zy,g="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=tv,g="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?d:hs(p),y=v==null?d:hs(v),d=new _(g,f+"leave",p,n,c),d.target=w,d.relatedTarget=y,g=null,mi(c)===u&&(_=new _(m,f+"enter",v,n,c),_.target=y,_.relatedTarget=w,g=_),w=g,p&&v)t:{for(_=p,m=v,f=0,y=_;y;y=es(y))f++;for(y=0,g=m;g;g=es(g))y++;for(;0<f-y;)_=es(_),f--;for(;0<y-f;)m=es(m),y--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=es(_),m=es(m)}_=null}else _=null;p!==null&&dv(h,d,p,_,!1),v!==null&&w!==null&&dv(h,w,v,_,!0)}}e:{if(d=u?hs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var E=dC;else if(iv(d))if(Xw)E=gC;else{E=pC;var A=fC}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=mC);if(E&&(E=E(t,u))){Yw(h,E,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&cf(d,"number",d.value)}switch(A=u?hs(u):window,t){case"focusin":(iv(A)||A.contentEditable==="true")&&(us=A,Tf=u,na=null);break;case"focusout":na=Tf=us=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,uv(h,n,c);break;case"selectionchange":if(_C)break;case"keydown":case"keyup":uv(h,n,c)}var S;if(um)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ls?Gw(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Kw&&n.locale!=="ko"&&(ls||N!=="onCompositionStart"?N==="onCompositionEnd"&&ls&&(S=qw()):(Or=c,om="value"in Or?Or.value:Or.textContent,ls=!0)),A=Bu(u,N),0<A.length&&(N=new ev(N,t,null,n,c),h.push({event:N,listeners:A}),S?N.data=S:(S=Qw(n),S!==null&&(N.data=S)))),(S=aC?lC(t,n):uC(t,n))&&(u=Bu(u,"onBeforeInput"),0<u.length&&(c=new ev("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=S))}aE(h,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ya(t,n),s!=null&&r.unshift(Ra(t,s,i)),s=ya(t,e),s!=null&&r.push(Ra(t,s,i))),t=t.return}return r}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ya(n,s),l!=null&&o.unshift(Ra(n,l,a))):i||(l=ya(n,s),l!=null&&o.push(Ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var IC=/\r\n?/g,RC=/\u0000|\uFFFD/g;function fv(t){return(typeof t=="string"?t:""+t).replace(IC,`
`).replace(RC,"")}function zl(t,e,n){if(e=fv(e),fv(t)!==e&&n)throw Error(x(425))}function zu(){}var Rf=null,Sf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,SC=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,AC=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(t){return pv.resolve(null).then(t).catch(CC)}:Cf;function CC(t){setTimeout(function(){throw t})}function hd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wa(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),On="__reactFiber$"+uo,Sa="__reactProps$"+uo,lr="__reactContainer$"+uo,kf="__reactEvents$"+uo,kC="__reactListeners$"+uo,PC="__reactHandles$"+uo;function mi(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mv(t);t!==null;){if(n=t[On])return n;t=mv(t)}return e}t=n,n=t.parentNode}return null}function rl(t){return t=t[On]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Uc(t){return t[Sa]||null}var Pf=[],ds=-1;function ri(t){return{current:t}}function Ie(t){0>ds||(t.current=Pf[ds],Pf[ds]=null,ds--)}function ve(t,e){ds++,Pf[ds]=t.current,t.current=e}var Yr={},St=ri(Yr),Ut=ri(!1),xi=Yr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Hu(){Ie(Ut),Ie(St)}function gv(t,e,n){if(St.current!==Yr)throw Error(x(168));ve(St,e),ve(Ut,n)}function uE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,fA(t)||"Unknown",i));return xe({},n,r)}function Wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,xi=St.current,ve(St,t),ve(Ut,Ut.current),!0}function yv(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=uE(t,e,xi),r.__reactInternalMemoizedMergedChildContext=t,Ie(Ut),Ie(St),ve(St,t)):Ie(Ut),ve(Ut,n)}var Xn=null,$c=!1,dd=!1;function cE(t){Xn===null?Xn=[t]:Xn.push(t)}function xC(t){$c=!0,cE(t)}function ii(){if(!dd&&Xn!==null){dd=!0;var t=0,e=he;try{var n=Xn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,$c=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(t+1)),bw(nm,ii),i}finally{he=e,dd=!1}}return null}var fs=[],ps=0,qu=null,Ku=0,nn=[],rn=0,Di=null,Zn=1,er="";function di(t,e){fs[ps++]=Ku,fs[ps++]=qu,qu=t,Ku=e}function hE(t,e,n){nn[rn++]=Zn,nn[rn++]=er,nn[rn++]=Di,Di=t;var r=Zn;t=er;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zn=1<<32-wn(e)+i|n<<i|r,er=s+t}else Zn=1<<s|n<<i|r,er=t}function hm(t){t.return!==null&&(di(t,1),hE(t,1,0))}function dm(t){for(;t===qu;)qu=fs[--ps],fs[ps]=null,Ku=fs[--ps],fs[ps]=null;for(;t===Di;)Di=nn[--rn],nn[rn]=null,er=nn[--rn],nn[rn]=null,Zn=nn[--rn],nn[rn]=null}var Kt=null,Ht=null,Ce=!1,vn=null;function dE(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Di!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Ht=null,!0):!1;default:return!1}}function xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Df(t){if(Ce){var e=Ht;if(e){var n=e;if(!vv(t,e)){if(xf(t))throw Error(x(418));e=Ur(n.nextSibling);var r=Kt;e&&vv(t,e)?dE(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Kt=t)}}else{if(xf(t))throw Error(x(418));t.flags=t.flags&-4097|2,Ce=!1,Kt=t}}}function _v(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function Hl(t){if(t!==Kt)return!1;if(!Ce)return _v(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=Ht)){if(xf(t))throw fE(),Error(x(418));for(;e;)dE(t,e),e=Ur(e.nextSibling)}if(_v(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Kt?Ur(t.stateNode.nextSibling):null;return!0}function fE(){for(var t=Ht;t;)t=Ur(t.nextSibling)}function Us(){Ht=Kt=null,Ce=!1}function fm(t){vn===null?vn=[t]:vn.push(t)}var DC=gr.ReactCurrentBatchConfig;function mn(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Gu=ri(null),Qu=null,ms=null,pm=null;function mm(){pm=ms=Qu=null}function gm(t){var e=Gu.current;Ie(Gu),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function As(t,e){Qu=t,pm=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(pm!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(Qu===null)throw Error(x(308));ms=t,Qu.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var gi=null;function ym(t){gi===null?gi=[t]:gi.push(t)}function pE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ym(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function vm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,ym(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rm(t,n)}}function wv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yu(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=xe({},h,d);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Oi|=o,t.lanes=o,t.memoizedState=h}}function Ev(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var gE=new pw.Component().refs;function Of(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jc={isMounted:function(t){return(t=t._reactInternals)?qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Br(t),s=sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(En(e,t,i,r),mu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Br(t),s=sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(En(e,t,i,r),mu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=Br(t),i=sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=$r(t,i,r),e!==null&&(En(e,t,r,n),mu(e,t,r))}};function Tv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,r)||!Ta(i,s):!0}function yE(t,e,n){var r=!1,i=Yr,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(i=$t(e)?xi:St.current,r=e.contextTypes,s=(r=r!=null)?Fs(t,i):Yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Iv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jc.enqueueReplaceState(e,e.state,null)}function Lf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=gE,vm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ln(s):(s=$t(e)?xi:St.current,i.context=Fs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jc.enqueueReplaceState(i,i.state,null),Yu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===gE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rv(t){var e=t._init;return e(t._payload)}function vE(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=zr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,y,g){return f===null||f.tag!==6?(f=_d(y,m.mode,g),f.return=m,f):(f=i(f,y),f.return=m,f)}function l(m,f,y,g){var E=y.type;return E===as?c(m,f,y.props.children,g,y.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Sr&&Rv(E)===f.type)?(g=i(f,y.props),g.ref=xo(m,f,y),g.return=m,g):(g=Eu(y.type,y.key,y.props,null,m.mode,g),g.ref=xo(m,f,y),g.return=m,g)}function u(m,f,y,g){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=wd(y,m.mode,g),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,g,E){return f===null||f.tag!==7?(f=Si(y,m.mode,g,E),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=_d(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ll:return y=Eu(f.type,f.key,f.props,null,m.mode,y),y.ref=xo(m,null,f),y.return=m,y;case os:return f=wd(f,m.mode,y),f.return=m,f;case Sr:var g=f._init;return h(m,g(f._payload),y)}if(jo(f)||So(f))return f=Si(f,m.mode,y,null),f.return=m,f;Wl(m,f)}return null}function d(m,f,y,g){var E=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(m,f,""+y,g);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ll:return y.key===E?l(m,f,y,g):null;case os:return y.key===E?u(m,f,y,g):null;case Sr:return E=y._init,d(m,f,E(y._payload),g)}if(jo(y)||So(y))return E!==null?null:c(m,f,y,g,null);Wl(m,y)}return null}function p(m,f,y,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(y)||null,a(f,m,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ll:return m=m.get(g.key===null?y:g.key)||null,l(f,m,g,E);case os:return m=m.get(g.key===null?y:g.key)||null,u(f,m,g,E);case Sr:var A=g._init;return p(m,f,y,A(g._payload),E)}if(jo(g)||So(g))return m=m.get(y)||null,c(f,m,g,E,null);Wl(f,g)}return null}function v(m,f,y,g){for(var E=null,A=null,S=f,N=f=0,Z=null;S!==null&&N<y.length;N++){S.index>N?(Z=S,S=null):Z=S.sibling;var B=d(m,S,y[N],g);if(B===null){S===null&&(S=Z);break}t&&S&&B.alternate===null&&e(m,S),f=s(B,f,N),A===null?E=B:A.sibling=B,A=B,S=Z}if(N===y.length)return n(m,S),Ce&&di(m,N),E;if(S===null){for(;N<y.length;N++)S=h(m,y[N],g),S!==null&&(f=s(S,f,N),A===null?E=S:A.sibling=S,A=S);return Ce&&di(m,N),E}for(S=r(m,S);N<y.length;N++)Z=p(S,m,N,y[N],g),Z!==null&&(t&&Z.alternate!==null&&S.delete(Z.key===null?N:Z.key),f=s(Z,f,N),A===null?E=Z:A.sibling=Z,A=Z);return t&&S.forEach(function(Ue){return e(m,Ue)}),Ce&&di(m,N),E}function _(m,f,y,g){var E=So(y);if(typeof E!="function")throw Error(x(150));if(y=E.call(y),y==null)throw Error(x(151));for(var A=E=null,S=f,N=f=0,Z=null,B=y.next();S!==null&&!B.done;N++,B=y.next()){S.index>N?(Z=S,S=null):Z=S.sibling;var Ue=d(m,S,B.value,g);if(Ue===null){S===null&&(S=Z);break}t&&S&&Ue.alternate===null&&e(m,S),f=s(Ue,f,N),A===null?E=Ue:A.sibling=Ue,A=Ue,S=Z}if(B.done)return n(m,S),Ce&&di(m,N),E;if(S===null){for(;!B.done;N++,B=y.next())B=h(m,B.value,g),B!==null&&(f=s(B,f,N),A===null?E=B:A.sibling=B,A=B);return Ce&&di(m,N),E}for(S=r(m,S);!B.done;N++,B=y.next())B=p(S,m,N,B.value,g),B!==null&&(t&&B.alternate!==null&&S.delete(B.key===null?N:B.key),f=s(B,f,N),A===null?E=B:A.sibling=B,A=B);return t&&S.forEach(function(fe){return e(m,fe)}),Ce&&di(m,N),E}function w(m,f,y,g){if(typeof y=="object"&&y!==null&&y.type===as&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ll:e:{for(var E=y.key,A=f;A!==null;){if(A.key===E){if(E=y.type,E===as){if(A.tag===7){n(m,A.sibling),f=i(A,y.props.children),f.return=m,m=f;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Sr&&Rv(E)===A.type){n(m,A.sibling),f=i(A,y.props),f.ref=xo(m,A,y),f.return=m,m=f;break e}n(m,A);break}else e(m,A);A=A.sibling}y.type===as?(f=Si(y.props.children,m.mode,g,y.key),f.return=m,m=f):(g=Eu(y.type,y.key,y.props,null,m.mode,g),g.ref=xo(m,f,y),g.return=m,m=g)}return o(m);case os:e:{for(A=y.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=wd(y,m.mode,g),f.return=m,m=f}return o(m);case Sr:return A=y._init,w(m,f,A(y._payload),g)}if(jo(y))return v(m,f,y,g);if(So(y))return _(m,f,y,g);Wl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=_d(y,m.mode,g),f.return=m,m=f),o(m)):n(m,f)}return w}var $s=vE(!0),_E=vE(!1),il={},Un=ri(il),Aa=ri(il),Ca=ri(il);function yi(t){if(t===il)throw Error(x(174));return t}function _m(t,e){switch(ve(Ca,e),ve(Aa,t),ve(Un,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=df(e,t)}Ie(Un),ve(Un,e)}function js(){Ie(Un),Ie(Aa),Ie(Ca)}function wE(t){yi(Ca.current);var e=yi(Un.current),n=df(e,t.type);e!==n&&(ve(Aa,t),ve(Un,n))}function wm(t){Aa.current===t&&(Ie(Un),Ie(Aa))}var ke=ri(0);function Xu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fd=[];function Em(){for(var t=0;t<fd.length;t++)fd[t]._workInProgressVersionPrimary=null;fd.length=0}var gu=gr.ReactCurrentDispatcher,pd=gr.ReactCurrentBatchConfig,Ni=0,Pe=null,Qe=null,et=null,Ju=!1,ra=!1,ka=0,NC=0;function pt(){throw Error(x(321))}function Tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function Im(t,e,n,r,i,s){if(Ni=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gu.current=t===null||t.memoizedState===null?MC:VC,t=n(r,i),ra){s=0;do{if(ra=!1,ka=0,25<=s)throw Error(x(301));s+=1,et=Qe=null,e.updateQueue=null,gu.current=FC,t=n(r,i)}while(ra)}if(gu.current=Zu,e=Qe!==null&&Qe.next!==null,Ni=0,et=Qe=Pe=null,Ju=!1,e)throw Error(x(300));return t}function Rm(){var t=ka!==0;return ka=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Pe.memoizedState=et=t:et=et.next=t,et}function un(){if(Qe===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=et===null?Pe.memoizedState:et.next;if(e!==null)et=e,Qe=t;else{if(t===null)throw Error(x(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?Pe.memoizedState=et=t:et=et.next=t}return et}function Pa(t,e){return typeof e=="function"?e(t):e}function md(t){var e=un(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ni&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Pe.lanes|=c,Oi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gd(t){var e=un(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function EE(){}function TE(t,e){var n=Pe,r=un(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,Sm(SE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,xa(9,RE.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(x(349));Ni&30||IE(n,e,i)}return i}function IE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function RE(t,e,n,r){e.value=n,e.getSnapshot=r,AE(e)&&CE(t)}function SE(t,e,n){return n(function(){AE(e)&&CE(t)})}function AE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function CE(t){var e=ur(t,1);e!==null&&En(e,t,1,-1)}function Sv(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=bC.bind(null,Pe,t),[e.memoizedState,t]}function xa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kE(){return un().memoizedState}function yu(t,e,n,r){var i=Dn();Pe.flags|=t,i.memoizedState=xa(1|e,n,void 0,r===void 0?null:r)}function Bc(t,e,n,r){var i=un();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&Tm(r,o.deps)){i.memoizedState=xa(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=xa(1|e,n,s,r)}function Av(t,e){return yu(8390656,8,t,e)}function Sm(t,e){return Bc(2048,8,t,e)}function PE(t,e){return Bc(4,2,t,e)}function xE(t,e){return Bc(4,4,t,e)}function DE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function NE(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,DE.bind(null,e,t),n)}function Am(){}function OE(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function LE(t,e){var n=un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bE(t,e,n){return Ni&21?(Rn(n,e)||(n=Fw(),Pe.lanes|=n,Oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function OC(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=pd.transition;pd.transition={};try{t(!1),e()}finally{he=n,pd.transition=r}}function ME(){return un().memoizedState}function LC(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},VE(t))FE(e,n);else if(n=pE(t,e,n,r),n!==null){var i=Dt();En(n,t,r,i),UE(n,e,r)}}function bC(t,e,n){var r=Br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(VE(t))FE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(i.next=i,ym(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=pE(t,e,i,r),n!==null&&(i=Dt(),En(n,t,r,i),UE(n,e,r))}}function VE(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function FE(t,e){ra=Ju=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function UE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rm(t,n)}}var Zu={readContext:ln,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},MC={readContext:ln,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:Av,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yu(4194308,4,DE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yu(4194308,4,t,e)},useInsertionEffect:function(t,e){return yu(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LC.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Dn();return t={current:t},e.memoizedState=t},useState:Sv,useDebugValue:Am,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=Sv(!1),e=t[0];return t=OC.bind(null,t[1]),Dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Dn();if(Ce){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),nt===null)throw Error(x(349));Ni&30||IE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Av(SE.bind(null,r,s,t),[t]),r.flags|=2048,xa(9,RE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dn(),e=nt.identifierPrefix;if(Ce){var n=er,r=Zn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VC={readContext:ln,useCallback:OE,useContext:ln,useEffect:Sm,useImperativeHandle:NE,useInsertionEffect:PE,useLayoutEffect:xE,useMemo:LE,useReducer:md,useRef:kE,useState:function(){return md(Pa)},useDebugValue:Am,useDeferredValue:function(t){var e=un();return bE(e,Qe.memoizedState,t)},useTransition:function(){var t=md(Pa)[0],e=un().memoizedState;return[t,e]},useMutableSource:EE,useSyncExternalStore:TE,useId:ME,unstable_isNewReconciler:!1},FC={readContext:ln,useCallback:OE,useContext:ln,useEffect:Sm,useImperativeHandle:NE,useInsertionEffect:PE,useLayoutEffect:xE,useMemo:LE,useReducer:gd,useRef:kE,useState:function(){return gd(Pa)},useDebugValue:Am,useDeferredValue:function(t){var e=un();return Qe===null?e.memoizedState=t:bE(e,Qe.memoizedState,t)},useTransition:function(){var t=gd(Pa)[0],e=un().memoizedState;return[t,e]},useMutableSource:EE,useSyncExternalStore:TE,useId:ME,unstable_isNewReconciler:!1};function Bs(t,e){try{var n="",r=e;do n+=dA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UC=typeof WeakMap=="function"?WeakMap:Map;function $E(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tc||(tc=!0,Wf=r),bf(t,e)},n}function jE(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZC.bind(null,t,e,n),e.then(t,t))}function kv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,$r(n,e,1))),n.lanes|=1),t)}var $C=gr.ReactCurrentOwner,Ft=!1;function Pt(t,e,n,r){e.child=t===null?_E(e,null,n,r):$s(e,t.child,n,r)}function xv(t,e,n,r,i){n=n.render;var s=e.ref;return As(e,i),r=Im(t,e,n,r,s,i),n=Rm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Ce&&n&&hm(e),e.flags|=1,Pt(t,e,r,i),e.child)}function Dv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,BE(t,e,s,r,i)):(t=Eu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function BE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ta(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,cr(t,e,i)}return Mf(t,e,n,r,i)}function zE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ys,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(ys,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(ys,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(ys,zt),zt|=r;return Pt(t,e,i,n),e.child}function HE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,r,i){var s=$t(n)?xi:St.current;return s=Fs(e,s),As(e,i),n=Im(t,e,n,r,s,i),r=Rm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Ce&&r&&hm(e),e.flags|=1,Pt(t,e,n,i),e.child)}function Nv(t,e,n,r,i){if($t(n)){var s=!0;Wu(e)}else s=!1;if(As(e,i),e.stateNode===null)vu(t,e),yE(e,n,r),Lf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ln(u):(u=$t(n)?xi:St.current,u=Fs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Iv(e,o,r,u),Ar=!1;var d=e.memoizedState;o.state=d,Yu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ut.current||Ar?(typeof c=="function"&&(Of(e,n,c,r),l=e.memoizedState),(a=Ar||Tv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ln(l):(l=$t(n)?xi:St.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Iv(e,o,r,l),Ar=!1,d=e.memoizedState,o.state=d,Yu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Ut.current||Ar?(typeof p=="function"&&(Of(e,n,p,r),v=e.memoizedState),(u=Ar||Tv(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Vf(t,e,n,r,s,i)}function Vf(t,e,n,r,i,s){HE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yv(e,n,!1),cr(t,e,s);r=e.stateNode,$C.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&yv(e,n,!0),e.child}function WE(t){var e=t.stateNode;e.pendingContext?gv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gv(t,e.context,!1),_m(t,e.containerInfo)}function Ov(t,e,n,r,i){return Us(),fm(i),e.flags|=256,Pt(t,e,n,r),e.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function Uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function qE(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(ke,i&1),t===null)return Df(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wc(o,r,0,null),t=Si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uf(n),e.memoizedState=Ff,t):Cm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return jC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=zr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=zr(a,s):(s=Si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ff,r}return s=t.child,t=s.sibling,r=zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cm(t,e){return e=Wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ql(t,e,n,r){return r!==null&&fm(r),$s(e,t.child,null,n),t=Cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=yd(Error(x(422))),ql(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wc({mode:"visible",children:r.children},i,0,null),s=Si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=Uf(o),e.memoizedState=Ff,s);if(!(e.mode&1))return ql(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=yd(s,r,void 0),ql(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),En(r,t,i,-1))}return Om(),r=yd(Error(x(421))),ql(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ek.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=Ur(i.nextSibling),Kt=e,Ce=!0,vn=null,t!==null&&(nn[rn++]=Zn,nn[rn++]=er,nn[rn++]=Di,Zn=t.id,er=t.overflow,Di=e),e=Cm(e,r.children),e.flags|=4096,e)}function Lv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nf(t.return,e,n)}function vd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function KE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lv(t,n,e);else if(t.tag===19)Lv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vd(e,!0,n,null,s);break;case"together":vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BC(t,e,n){switch(e.tag){case 3:WE(e),Us();break;case 5:wE(e);break;case 1:$t(e.type)&&Wu(e);break;case 4:_m(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Gu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?qE(t,e,n):(ve(ke,ke.current&1),t=cr(t,e,n),t!==null?t.sibling:null);ve(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return KE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,zE(t,e,n)}return cr(t,e,n)}var GE,$f,QE,YE;GE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};QE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yi(Un.current);var s=null;switch(n){case"input":i=lf(t,i),r=lf(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=hf(t,i),r=hf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=zu)}ff(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};YE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Do(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zC(t,e,n){var r=e.pendingProps;switch(dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return $t(e.type)&&Hu(),mt(e),null;case 3:return r=e.stateNode,js(),Ie(Ut),Ie(St),Em(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(Gf(vn),vn=null))),$f(t,e),mt(e),null;case 5:wm(e);var i=yi(Ca.current);if(n=e.type,t!==null&&e.stateNode!=null)QE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return mt(e),null}if(t=yi(Un.current),Hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[On]=e,r[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<zo.length;i++)_e(zo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":zy(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Wy(r,s),_e("invalid",r)}ff(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zl(r.textContent,a,t),i=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":bl(r),Hy(r,s,!0);break;case"textarea":bl(r),qy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[Sa]=r,GE(t,e,!1,!1),e.stateNode=t;e:{switch(o=pf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<zo.length;i++)_e(zo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":zy(t,r),i=lf(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Wy(t,r),i=hf(t,r),_e("invalid",t);break;default:i=r}ff(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Aw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Xp(t,s,l,o))}switch(n){case"input":bl(t),Hy(t,r,!1);break;case"textarea":bl(t),qy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)YE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=yi(Ca.current),yi(Un.current),Hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:zl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return mt(e),null;case 13:if(Ie(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Ht!==null&&e.mode&1&&!(e.flags&128))fE(),Us(),e.flags|=98560,s=!1;else if(s=Hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[On]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else vn!==null&&(Gf(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ye===0&&(Ye=3):Om())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return js(),$f(t,e),t===null&&Ia(e.stateNode.containerInfo),mt(e),null;case 10:return gm(e.type._context),mt(e),null;case 17:return $t(e.type)&&Hu(),mt(e),null;case 19:if(Ie(ke),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Do(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xu(t),o!==null){for(e.flags|=128,Do(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>zs&&(e.flags|=128,r=!0,Do(s,!1),e.lanes=4194304)}else{if(!r)if(t=Xu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return mt(e),null}else 2*Fe()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=ke.current,ve(ke,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Nm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function HC(t,e){switch(dm(e),e.tag){case 1:return $t(e.type)&&Hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),Ie(Ut),Ie(St),Em(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wm(e),null;case 13:if(Ie(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(ke),null;case 4:return js(),null;case 10:return gm(e.type._context),null;case 22:case 23:return Nm(),null;case 24:return null;default:return null}}var Kl=!1,vt=!1,WC=typeof WeakSet=="function"?WeakSet:Set,M=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function jf(t,e,n){try{n()}catch(r){Le(t,e,r)}}var bv=!1;function qC(t,e){if(Rf=$u,t=eE(),cm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},$u=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:mn(e.type,_),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(g){Le(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=bv,bv=!1,v}function ia(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jf(e,n,s)}i=i.next}while(i!==r)}}function zc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function XE(t){var e=t.alternate;e!==null&&(t.alternate=null,XE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[Sa],delete e[kf],delete e[kC],delete e[PC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function JE(t){return t.tag===5||t.tag===3||t.tag===4}function Mv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||JE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zu));else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function Hf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}var ot=null,gn=!1;function Tr(t,e,n){for(n=n.child;n!==null;)ZE(t,e,n),n=n.sibling}function ZE(t,e,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:vt||gs(n,e);case 6:var r=ot,i=gn;ot=null,Tr(t,e,n),ot=r,gn=i,ot!==null&&(gn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(gn?(t=ot,n=n.stateNode,t.nodeType===8?hd(t.parentNode,n):t.nodeType===1&&hd(t,n),wa(t)):hd(ot,n.stateNode));break;case 4:r=ot,i=gn,ot=n.stateNode.containerInfo,gn=!0,Tr(t,e,n),ot=r,gn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jf(n,e,o),i=i.next}while(i!==r)}Tr(t,e,n);break;case 1:if(!vt&&(gs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Tr(t,e,n),vt=r):Tr(t,e,n);break;default:Tr(t,e,n)}}function Vv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WC),e.forEach(function(r){var i=tk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,gn=!1;break e;case 3:ot=a.stateNode.containerInfo,gn=!0;break e;case 4:ot=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(ot===null)throw Error(x(160));ZE(s,o,i),ot=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)e1(e,t),e=e.sibling}function e1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),xn(t),r&4){try{ia(3,t,t.return),zc(3,t)}catch(_){Le(t,t.return,_)}try{ia(5,t,t.return)}catch(_){Le(t,t.return,_)}}break;case 1:pn(e,t),xn(t),r&512&&n!==null&&gs(n,n.return);break;case 5:if(pn(e,t),xn(t),r&512&&n!==null&&gs(n,n.return),t.flags&32){var i=t.stateNode;try{ga(i,"")}catch(_){Le(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ew(i,s),pf(a,o);var u=pf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Aw(i,h):c==="dangerouslySetInnerHTML"?Rw(i,h):c==="children"?ga(i,h):Xp(i,c,h,u)}switch(a){case"input":uf(i,s);break;case"textarea":Tw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ts(i,!!s.multiple,s.defaultValue,!0):Ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[Sa]=s}catch(_){Le(t,t.return,_)}}break;case 6:if(pn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Le(t,t.return,_)}}break;case 3:if(pn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(_){Le(t,t.return,_)}break;case 4:pn(e,t),xn(t);break;case 13:pn(e,t),xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xm=Fe())),r&4&&Vv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(u=vt)||c,pn(e,t),vt=u):pn(e,t),xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,p=d.child,d.tag){case 0:case 11:case 14:case 15:ia(4,d,d.return);break;case 1:gs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Le(r,n,_)}}break;case 5:gs(d,d.return);break;case 22:if(d.memoizedState!==null){Uv(h);continue}}p!==null?(p.return=d,M=p):Uv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sw("display",o))}catch(_){Le(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Le(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pn(e,t),xn(t),r&4&&Vv(t);break;case 21:break;default:pn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(JE(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ga(i,""),r.flags&=-33);var s=Mv(t);Hf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Mv(t);zf(t,a,o);break;default:throw Error(x(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KC(t,e,n){M=t,t1(t)}function t1(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Kl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=Kl;var u=vt;if(Kl=o,(vt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?$v(i):l!==null?(l.return=o,M=l):$v(i);for(;s!==null;)M=s,t1(s),s=s.sibling;M=i,Kl=a,vt=u}Fv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Fv(t)}}function Fv(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||zc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ev(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ev(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}vt||e.flags&512&&Bf(e)}catch(d){Le(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Uv(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function $v(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zc(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{Bf(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{Bf(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var GC=Math.ceil,ec=gr.ReactCurrentDispatcher,km=gr.ReactCurrentOwner,an=gr.ReactCurrentBatchConfig,oe=0,nt=null,He=null,ut=0,zt=0,ys=ri(0),Ye=0,Da=null,Oi=0,Hc=0,Pm=0,sa=null,Mt=null,xm=0,zs=1/0,Qn=null,tc=!1,Wf=null,jr=null,Gl=!1,Lr=null,nc=0,oa=0,qf=null,_u=-1,wu=0;function Dt(){return oe&6?Fe():_u!==-1?_u:_u=Fe()}function Br(t){return t.mode&1?oe&2&&ut!==0?ut&-ut:DC.transition!==null?(wu===0&&(wu=Fw()),wu):(t=he,t!==0||(t=window.event,t=t===void 0?16:Ww(t.type)),t):1}function En(t,e,n,r){if(50<oa)throw oa=0,qf=null,Error(x(185));tl(t,n,r),(!(oe&2)||t!==nt)&&(t===nt&&(!(oe&2)&&(Hc|=n),Ye===4&&kr(t,ut)),jt(t,r),n===1&&oe===0&&!(e.mode&1)&&(zs=Fe()+500,$c&&ii()))}function jt(t,e){var n=t.callbackNode;DA(t,e);var r=Uu(t,t===nt?ut:0);if(r===0)n!==null&&Qy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qy(n),e===1)t.tag===0?xC(jv.bind(null,t)):cE(jv.bind(null,t)),AC(function(){!(oe&6)&&ii()}),n=null;else{switch(Uw(r)){case 1:n=nm;break;case 4:n=Mw;break;case 16:n=Fu;break;case 536870912:n=Vw;break;default:n=Fu}n=u1(n,n1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function n1(t,e){if(_u=-1,wu=0,oe&6)throw Error(x(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=Uu(t,t===nt?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=rc(t,r);else{e=r;var i=oe;oe|=2;var s=i1();(nt!==t||ut!==e)&&(Qn=null,zs=Fe()+500,Ri(t,e));do try{XC();break}catch(a){r1(t,a)}while(1);mm(),ec.current=s,oe=i,He!==null?e=0:(nt=null,ut=0,e=Ye)}if(e!==0){if(e===2&&(i=_f(t),i!==0&&(r=i,e=Kf(t,i))),e===1)throw n=Da,Ri(t,0),kr(t,r),jt(t,Fe()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!QC(i)&&(e=rc(t,r),e===2&&(s=_f(t),s!==0&&(r=s,e=Kf(t,s))),e===1))throw n=Da,Ri(t,0),kr(t,r),jt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:fi(t,Mt,Qn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=xm+500-Fe(),10<e)){if(Uu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cf(fi.bind(null,t,Mt,Qn),e);break}fi(t,Mt,Qn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GC(r/1960))-r,10<r){t.timeoutHandle=Cf(fi.bind(null,t,Mt,Qn),r);break}fi(t,Mt,Qn);break;case 5:fi(t,Mt,Qn);break;default:throw Error(x(329))}}}return jt(t,Fe()),t.callbackNode===n?n1.bind(null,t):null}function Kf(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(Ri(t,e).flags|=256),t=rc(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&Gf(e)),t}function Gf(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function QC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~Pm,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function jv(t){if(oe&6)throw Error(x(327));Cs();var e=Uu(t,0);if(!(e&1))return jt(t,Fe()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var r=_f(t);r!==0&&(e=r,n=Kf(t,r))}if(n===1)throw n=Da,Ri(t,0),kr(t,e),jt(t,Fe()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fi(t,Mt,Qn),jt(t,Fe()),null}function Dm(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(zs=Fe()+500,$c&&ii())}}function Li(t){Lr!==null&&Lr.tag===0&&!(oe&6)&&Cs();var e=oe;oe|=1;var n=an.transition,r=he;try{if(an.transition=null,he=1,t)return t()}finally{he=r,an.transition=n,oe=e,!(oe&6)&&ii()}}function Nm(){zt=ys.current,Ie(ys)}function Ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SC(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(dm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hu();break;case 3:js(),Ie(Ut),Ie(St),Em();break;case 5:wm(r);break;case 4:js();break;case 13:Ie(ke);break;case 19:Ie(ke);break;case 10:gm(r.type._context);break;case 22:case 23:Nm()}n=n.return}if(nt=t,He=t=zr(t.current,null),ut=zt=e,Ye=0,Da=null,Pm=Hc=Oi=0,Mt=sa=null,gi!==null){for(e=0;e<gi.length;e++)if(n=gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gi=null}return t}function r1(t,e){do{var n=He;try{if(mm(),gu.current=Zu,Ju){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ju=!1}if(Ni=0,et=Qe=Pe=null,ra=!1,ka=0,km.current=null,n===null||n.return===null){Ye=1,Da=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=kv(o);if(p!==null){p.flags&=-257,Pv(p,o,a,s,e),p.mode&1&&Cv(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Cv(s,u,e),Om();break e}l=Error(x(426))}}else if(Ce&&a.mode&1){var w=kv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Pv(w,o,a,s,e),fm(Bs(l,a));break e}}s=l=Bs(l,a),Ye!==4&&(Ye=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=$E(s,l,e);wv(s,m);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(jr===null||!jr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=jE(s,a,e);wv(s,g);break e}}s=s.return}while(s!==null)}o1(n)}catch(E){e=E,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function i1(){var t=ec.current;return ec.current=Zu,t===null?Zu:t}function Om(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!(Oi&268435455)&&!(Hc&268435455)||kr(nt,ut)}function rc(t,e){var n=oe;oe|=2;var r=i1();(nt!==t||ut!==e)&&(Qn=null,Ri(t,e));do try{YC();break}catch(i){r1(t,i)}while(1);if(mm(),oe=n,ec.current=r,He!==null)throw Error(x(261));return nt=null,ut=0,Ye}function YC(){for(;He!==null;)s1(He)}function XC(){for(;He!==null&&!TA();)s1(He)}function s1(t){var e=l1(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?o1(t):He=e,km.current=null}function o1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HC(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}else if(n=zC(n,e,zt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function fi(t,e,n){var r=he,i=an.transition;try{an.transition=null,he=1,JC(t,e,n,r)}finally{an.transition=i,he=r}return null}function JC(t,e,n,r){do Cs();while(Lr!==null);if(oe&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NA(t,s),t===nt&&(He=nt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gl||(Gl=!0,u1(Fu,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=an.transition,an.transition=null;var o=he;he=1;var a=oe;oe|=4,km.current=null,qC(t,n),e1(n,t),vC(Sf),$u=!!Rf,Sf=Rf=null,t.current=n,KC(n),IA(),oe=a,he=o,an.transition=s}else t.current=n;if(Gl&&(Gl=!1,Lr=t,nc=i),s=t.pendingLanes,s===0&&(jr=null),AA(n.stateNode),jt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tc)throw tc=!1,t=Wf,Wf=null,t;return nc&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===qf?oa++:(oa=0,qf=t):oa=0,ii(),null}function Cs(){if(Lr!==null){var t=Uw(nc),e=an.transition,n=he;try{if(an.transition=null,he=16>t?16:t,Lr===null)var r=!1;else{if(t=Lr,Lr=null,nc=0,oe&6)throw Error(x(331));var i=oe;for(oe|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:ia(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,p=c.return;if(XE(c),c===u){M=null;break}if(d!==null){d.return=p,M=d;break}M=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ia(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zc(9,a)}}catch(E){Le(a,a.return,E)}if(a===o){M=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,M=g;break e}M=a.return}}if(oe=i,ii(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(bc,t)}catch{}r=!0}return r}finally{he=n,an.transition=e}}return!1}function Bv(t,e,n){e=Bs(n,e),e=$E(t,e,1),t=$r(t,e,1),e=Dt(),t!==null&&(tl(t,1,e),jt(t,e))}function Le(t,e,n){if(t.tag===3)Bv(t,t,n);else for(;e!==null;){if(e.tag===3){Bv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Bs(n,t),t=jE(e,t,1),e=$r(e,t,1),t=Dt(),e!==null&&(tl(e,1,t),jt(e,t));break}}e=e.return}}function ZC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(ut&n)===n&&(Ye===4||Ye===3&&(ut&130023424)===ut&&500>Fe()-xm?Ri(t,0):Pm|=n),jt(t,e)}function a1(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=Dt();t=ur(t,e),t!==null&&(tl(t,e,n),jt(t,n))}function ek(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),a1(t,n)}function tk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),a1(t,n)}var l1;l1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,BC(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,Ce&&e.flags&1048576&&hE(e,Ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vu(t,e),t=e.pendingProps;var i=Fs(e,St.current);As(e,n),i=Im(null,e,r,t,i,n);var s=Rm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,Wu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vm(e),i.updater=jc,e.stateNode=i,i._reactInternals=e,Lf(e,r,t,n),e=Vf(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&hm(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rk(r),t=mn(r,t),i){case 0:e=Mf(null,e,r,t,n);break e;case 1:e=Nv(null,e,r,t,n);break e;case 11:e=xv(null,e,r,t,n);break e;case 14:e=Dv(null,e,r,mn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Mf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Nv(t,e,r,i,n);case 3:e:{if(WE(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,mE(t,e),Yu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bs(Error(x(423)),e),e=Ov(t,e,r,n,i);break e}else if(r!==i){i=Bs(Error(x(424)),e),e=Ov(t,e,r,n,i);break e}else for(Ht=Ur(e.stateNode.containerInfo.firstChild),Kt=e,Ce=!0,vn=null,n=_E(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=cr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return wE(e),t===null&&Df(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Af(r,i)?o=null:s!==null&&Af(r,s)&&(e.flags|=32),HE(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Df(e),null;case 13:return qE(t,e,n);case 4:return _m(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),xv(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Gu,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Ut.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,As(e,n),i=ln(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),Dv(t,e,r,i,n);case 15:return BE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),vu(t,e),e.tag=1,$t(r)?(t=!0,Wu(e)):t=!1,As(e,n),yE(e,r,i),Lf(e,r,i,n),Vf(null,e,r,!0,t,n);case 19:return KE(t,e,n);case 22:return zE(t,e,n)}throw Error(x(156,e.tag))};function u1(t,e){return bw(t,e)}function nk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new nk(t,e,n,r)}function Lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rk(t){if(typeof t=="function")return Lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zp)return 11;if(t===em)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Eu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return Si(n.children,i,s,e);case Jp:o=8,i|=8;break;case rf:return t=on(12,n,e,i|2),t.elementType=rf,t.lanes=s,t;case sf:return t=on(13,n,e,i),t.elementType=sf,t.lanes=s,t;case of:return t=on(19,n,e,i),t.elementType=of,t.lanes=s,t;case vw:return Wc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gw:o=10;break e;case yw:o=9;break e;case Zp:o=11;break e;case em:o=14;break e;case Sr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Si(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function Wc(t,e,n,r){return t=on(22,t,r,e),t.elementType=vw,t.lanes=n,t.stateNode={isHidden:!1},t}function _d(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function wd(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ik(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ed(0),this.expirationTimes=ed(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ed(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bm(t,e,n,r,i,s,o,a,l){return t=new ik(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vm(s),t}function sk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function c1(t){if(!t)return Yr;t=t._reactInternals;e:{if(qi(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if($t(n))return uE(t,n,e)}return e}function h1(t,e,n,r,i,s,o,a,l){return t=bm(n,r,!0,t,i,s,o,a,l),t.context=c1(null),n=t.current,r=Dt(),i=Br(n),s=sr(r,i),s.callback=e??null,$r(n,s,i),t.current.lanes=i,tl(t,i,r),jt(t,r),t}function qc(t,e,n,r){var i=e.current,s=Dt(),o=Br(i);return n=c1(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$r(i,e,o),t!==null&&(En(t,i,o,s),mu(t,i,o)),o}function ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mm(t,e){zv(t,e),(t=t.alternate)&&zv(t,e)}function ok(){return null}var d1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vm(t){this._internalRoot=t}Kc.prototype.render=Vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));qc(t,e,null,null)};Kc.prototype.unmount=Vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Li(function(){qc(null,t,null,null)}),e[lr]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&Hw(t)}};function Fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hv(){}function ak(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ic(o);s.call(u)}}var o=h1(e,r,t,0,null,!1,!1,"",Hv);return t._reactRootContainer=o,t[lr]=o.current,Ia(t.nodeType===8?t.parentNode:t),Li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ic(l);a.call(u)}}var l=bm(t,0,!1,null,null,!1,!1,"",Hv);return t._reactRootContainer=l,t[lr]=l.current,Ia(t.nodeType===8?t.parentNode:t),Li(function(){qc(e,l,n,r)}),l}function Qc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ic(o);a.call(l)}}qc(e,o,t,i)}else o=ak(n,e,t,i,r);return ic(o)}$w=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(rm(e,n|1),jt(e,Fe()),!(oe&6)&&(zs=Fe()+500,ii()))}break;case 13:Li(function(){var r=ur(t,1);if(r!==null){var i=Dt();En(r,t,1,i)}}),Mm(t,1)}};im=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Dt();En(e,t,134217728,n)}Mm(t,134217728)}};jw=function(t){if(t.tag===13){var e=Br(t),n=ur(t,e);if(n!==null){var r=Dt();En(n,t,e,r)}Mm(t,e)}};Bw=function(){return he};zw=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};gf=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uc(r);if(!i)throw Error(x(90));ww(r),uf(r,i)}}}break;case"textarea":Tw(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Pw=Dm;xw=Li;var lk={usingClientEntryPoint:!1,Events:[rl,hs,Uc,Cw,kw,Dm]},No={findFiberByHostInstance:mi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uk={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ow(t),t===null?null:t.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||ok,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{bc=Ql.inject(uk),Fn=Ql}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fm(e))throw Error(x(200));return sk(t,e,null,n)};Yt.createRoot=function(t,e){if(!Fm(t))throw Error(x(299));var n=!1,r="",i=d1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bm(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,Ia(t.nodeType===8?t.parentNode:t),new Vm(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=Ow(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Li(t)};Yt.hydrate=function(t,e,n){if(!Gc(e))throw Error(x(200));return Qc(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Fm(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=d1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h1(e,null,t,1,n??null,i,!1,s,o),t[lr]=e.current,Ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kc(e)};Yt.render=function(t,e,n){if(!Gc(e))throw Error(x(200));return Qc(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(x(40));return t._reactRootContainer?(Li(function(){Qc(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Dm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gc(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Qc(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function f1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f1)}catch(t){console.error(t)}}f1(),hw.exports=Yt;var ck=hw.exports,Wv=ck;tf.createRoot=Wv.createRoot,tf.hydrateRoot=Wv.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ae.apply(this,arguments)}var je;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(je||(je={}));const qv="popstate";function hk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Na("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bi(i)}return fk(e,n,null,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dk(){return Math.random().toString(36).substr(2,8)}function Kv(t,e){return{usr:t.state,key:t.key,idx:e}}function Na(t,e,n,r){return n===void 0&&(n=null),Ae({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yr(e):e,{state:n,key:e&&e.key||r||dk()})}function bi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=je.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ae({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=je.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:m})}function d(w,m){a=je.Push;let f=Na(_.location,w,m);n&&n(f,w),u=c()+1;let y=Kv(f,u),g=_.createHref(f);try{o.pushState(y,"",g)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(g)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,m){a=je.Replace;let f=Na(_.location,w,m);n&&n(f,w),u=c();let y=Kv(f,u),g=_.createHref(f);o.replaceState(y,"",g),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:bi(w);return ne(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(qv,h),l=w,()=>{i.removeEventListener(qv,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(w){return o.go(w)}};return _}var Ge;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ge||(Ge={}));const pk=new Set(["lazy","caseSensitive","path","id","index","children"]);function mk(t){return t.index===!0}function Qf(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ne(i.index!==!0||!i.children,"Cannot specify children on an index route"),ne(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),mk(i)){let l=Ae({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ae({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Qf(i.children,e,o,r)),l}})}function vs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?yr(e):e,i=co(r.pathname||"/",n);if(i==null)return null;let s=p1(t);gk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Sk(s[a],kk(i));return o}function p1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=or([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),p1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ik(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of m1(s.path))i(s,o,l)}),e}function m1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=m1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function gk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Rk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yk=/^:\w+$/,vk=3,_k=2,wk=1,Ek=10,Tk=-2,Gv=t=>t==="*";function Ik(t,e){let n=t.split("/"),r=n.length;return n.some(Gv)&&(r+=Tk),e&&(r+=_k),n.filter(i=>!Gv(i)).reduce((i,s)=>i+(yk.test(s)?vk:s===""?wk:Ek),r)}function Rk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Sk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Ak({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:or([i,c.pathname]),pathnameBase:Nk(or([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=or([i,c.pathnameBase]))}return s}function Ak(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ck(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Pk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ck(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Hs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kk(t){try{return decodeURI(t)}catch(e){return Hs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pk(t,e){try{return decodeURIComponent(t)}catch(n){return Hs(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function co(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yr(t):t;return{pathname:n?n.startsWith("/")?n:Dk(n,e):e,search:Ok(r),hash:Lk(i)}}function Dk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ed(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sl(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Yc(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yr(t):(i=Ae({},t),ne(!i.pathname||!i.pathname.includes("?"),Ed("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Ed("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Ed("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=xk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const or=t=>t.join("/").replace(/\/\/+/g,"/"),Nk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ok=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Lk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Um{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function g1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const y1=["post","put","patch","delete"],bk=new Set(y1),Mk=["get",...y1],Vk=new Set(Mk),Fk=new Set([301,302,303,307,308]),Uk=new Set([307,308]),Td={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},$k={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Oo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},v1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jk=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function Bk(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ne(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let T=t.detectErrorBoundary;i=I=>({hasErrorBoundary:T(I)})}else i=jk;let s={},o=Qf(t.routes,i,void 0,s),a,l=t.basename||"/",u=Ae({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,p=null,v=null,_=t.hydrationData!=null,w=vs(o,t.history.location,l),m=null;if(w==null){let T=tn(404,{pathname:t.history.location.pathname}),{matches:I,route:P}=n_(o);w=I,m={[P.id]:T}}let f=!w.some(T=>T.route.lazy)&&(!w.some(T=>T.route.loader)||t.hydrationData!=null),y,g={historyAction:t.history.action,location:t.history.location,matches:w,initialized:f,navigation:Td,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},E=je.Pop,A=!1,S,N=!1,Z=!1,B=[],Ue=[],fe=new Map,Zt=0,Cn=-1,kn=new Map,st=new Set,qe=new Map,O=new Map,$=new Map,z=!1;function ge(){return c=t.history.listen(T=>{let{action:I,location:P,delta:V}=T;if(z){z=!1;return}Hs($.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let J=Oy({currentLocation:g.location,nextLocation:P,historyAction:I});if(J&&V!=null){z=!0,t.history.go(V*-1),Dl(J,{state:"blocked",location:P,proceed(){Dl(J,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go(V)},reset(){let G=new Map(g.blockers);G.set(J,Oo),ae({blockers:G})}});return}return en(I,P)}),g.initialized||en(je.Pop,g.location),y}function Se(){c&&c(),h.clear(),S&&S.abort(),g.fetchers.forEach((T,I)=>Bh(I)),g.blockers.forEach((T,I)=>Ny(I))}function dn(T){return h.add(T),()=>h.delete(T)}function ae(T){g=Ae({},g,T),h.forEach(I=>I(g))}function Lt(T,I){var P,V;let J=g.actionData!=null&&g.navigation.formMethod!=null&&yn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((P=T.state)==null?void 0:P._isRedirect)!==!0,G;I.actionData?Object.keys(I.actionData).length>0?G=I.actionData:G=null:J?G=g.actionData:G=null;let Y=I.loaderData?t_(g.loaderData,I.loaderData,I.matches||[],I.errors):g.loaderData,H=g.blockers;H.size>0&&(H=new Map(H),H.forEach((ye,ft)=>H.set(ft,Oo)));let U=A===!0||g.navigation.formMethod!=null&&yn(g.navigation.formMethod)&&((V=T.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),N||E===je.Pop||(E===je.Push?t.history.push(T,T.state):E===je.Replace&&t.history.replace(T,T.state)),ae(Ae({},I,{actionData:G,loaderData:Y,historyAction:E,location:T,initialized:!0,navigation:Td,revalidation:"idle",restoreScrollPosition:by(T,I.matches||g.matches),preventScrollReset:U,blockers:H})),E=je.Pop,A=!1,N=!1,Z=!1,B=[],Ue=[]}async function dt(T,I){if(typeof T=="number"){t.history.go(T);return}let P=Yf(g.location,g.matches,l,u.v7_prependBasename,T,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:V,submission:J,error:G}=Qv(u.v7_normalizeFormMethod,!1,P,I),Y=g.location,H=Na(g.location,V,I&&I.state);H=Ae({},H,t.history.encodeLocation(H));let U=I&&I.replace!=null?I.replace:void 0,ye=je.Push;U===!0?ye=je.Replace:U===!1||J!=null&&yn(J.formMethod)&&J.formAction===g.location.pathname+g.location.search&&(ye=je.Replace);let ft=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,pe=Oy({currentLocation:Y,nextLocation:H,historyAction:ye});if(pe){Dl(pe,{state:"blocked",location:H,proceed(){Dl(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),dt(T,I)},reset(){let Ve=new Map(g.blockers);Ve.set(pe,Oo),ae({blockers:Ve})}});return}return await en(ye,H,{submission:J,pendingError:G,preventScrollReset:ft,replace:I&&I.replace})}function bt(){if(jh(),ae({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){en(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}en(E||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function en(T,I,P){S&&S.abort(),S=null,E=T,N=(P&&P.startUninterruptedRevalidation)===!0,LS(g.location,g.matches),A=(P&&P.preventScrollReset)===!0;let V=a||o,J=P&&P.overrideNavigation,G=vs(V,I,l);if(!G){let Ve=tn(404,{pathname:I.pathname}),{matches:Je,route:ci}=n_(V);zh(),Lt(I,{matches:Je,loaderData:{},errors:{[ci.id]:Ve}});return}if(g.initialized&&!Z&&Kk(g.location,I)&&!(P&&P.submission&&yn(P.submission.formMethod))){Lt(I,{matches:G});return}S=new AbortController;let Y=bo(t.history,I,S.signal,P&&P.submission),H,U;if(P&&P.pendingError)U={[_s(G).route.id]:P.pendingError};else if(P&&P.submission&&yn(P.submission.formMethod)){let Ve=await Zi(Y,I,P.submission,G,{replace:P.replace});if(Ve.shortCircuited)return;H=Ve.pendingActionData,U=Ve.pendingActionError,J=Yl(I,P.submission),Y=new Request(Y.url,{signal:Y.signal})}let{shortCircuited:ye,loaderData:ft,errors:pe}=await Pn(Y,I,G,J,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,H,U);ye||(S=null,Lt(I,Ae({matches:G},H?{actionData:H}:{},{loaderData:ft,errors:pe})))}async function Zi(T,I,P,V,J){J===void 0&&(J={}),jh();let G=Jk(I,P);ae({navigation:G});let Y,H=Jf(V,I);if(!H.route.action&&!H.route.lazy)Y={type:Ge.error,error:tn(405,{method:T.method,pathname:I.pathname,routeId:H.route.id})};else if(Y=await Lo("action",T,H,V,s,i,l),T.signal.aborted)return{shortCircuited:!0};if(ks(Y)){let U;return J&&J.replace!=null?U=J.replace:U=Y.location===g.location.pathname+g.location.search,await To(g,Y,{submission:P,replace:U}),{shortCircuited:!0}}if(aa(Y)){let U=_s(V,H.route.id);return(J&&J.replace)!==!0&&(E=je.Push),{pendingActionData:{},pendingActionError:{[U.route.id]:Y.error}}}if(vi(Y))throw tn(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:Y.data}}}async function Pn(T,I,P,V,J,G,Y,H,U){let ye=V||Yl(I,J),ft=J||G||s_(ye),pe=a||o,[Ve,Je]=Yv(t.history,g,P,ft,I,Z,B,Ue,qe,st,pe,l,H,U);if(zh(me=>!(P&&P.some(fn=>fn.route.id===me))||Ve&&Ve.some(fn=>fn.route.id===me)),Cn=++Zt,Ve.length===0&&Je.length===0){let me=xy();return Lt(I,Ae({matches:P,loaderData:{},errors:U||null},H?{actionData:H}:{},me?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!N){Je.forEach(fn=>{let Er=g.fetchers.get(fn.key),Gh=Mo(void 0,Er?Er.data:void 0);g.fetchers.set(fn.key,Gh)});let me=H||g.actionData;ae(Ae({navigation:ye},me?Object.keys(me).length===0?{actionData:null}:{actionData:me}:{},Je.length>0?{fetchers:new Map(g.fetchers)}:{}))}Je.forEach(me=>{fe.has(me.key)&&wr(me.key),me.controller&&fe.set(me.key,me.controller)});let ci=()=>Je.forEach(me=>wr(me.key));S&&S.signal.addEventListener("abort",ci);let{results:hi,loaderResults:Io,fetcherResults:Hh}=await ky(g.matches,P,Ve,Je,T);if(T.signal.aborted)return{shortCircuited:!0};S&&S.signal.removeEventListener("abort",ci),Je.forEach(me=>fe.delete(me.key));let Kn=r_(hi);if(Kn){if(Kn.idx>=Ve.length){let me=Je[Kn.idx-Ve.length].key;st.add(me)}return await To(g,Kn.result,{replace:Y}),{shortCircuited:!0}}let{loaderData:Gn,errors:Nl}=e_(g,P,Ve,Io,U,Je,Hh,O);O.forEach((me,fn)=>{me.subscribe(Er=>{(Er||me.done)&&O.delete(fn)})});let Wh=xy(),qh=Dy(Cn),Kh=Wh||qh||Je.length>0;return Ae({loaderData:Gn,errors:Nl},Kh?{fetchers:new Map(g.fetchers)}:{})}function Cy(T){return g.fetchers.get(T)||$k}function PS(T,I,P,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");fe.has(T)&&wr(T);let J=a||o,G=Yf(g.location,g.matches,l,u.v7_prependBasename,P,I,V==null?void 0:V.relative),Y=vs(J,G,l);if(!Y){xl(T,I,tn(404,{pathname:G}));return}let{path:H,submission:U,error:ye}=Qv(u.v7_normalizeFormMethod,!0,G,V);if(ye){xl(T,I,ye);return}let ft=Jf(Y,H);if(A=(V&&V.preventScrollReset)===!0,U&&yn(U.formMethod)){xS(T,I,H,ft,Y,U);return}qe.set(T,{routeId:I,path:H}),DS(T,I,H,ft,Y,U)}async function xS(T,I,P,V,J,G){if(jh(),qe.delete(T),!V.route.action&&!V.route.lazy){let Ke=tn(405,{method:G.formMethod,pathname:P,routeId:I});xl(T,I,Ke);return}let Y=g.fetchers.get(T),H=Zk(G,Y);g.fetchers.set(T,H),ae({fetchers:new Map(g.fetchers)});let U=new AbortController,ye=bo(t.history,P,U.signal,G);fe.set(T,U);let ft=Zt,pe=await Lo("action",ye,V,J,s,i,l);if(ye.signal.aborted){fe.get(T)===U&&fe.delete(T);return}if(ks(pe))if(fe.delete(T),Cn>ft){let Ke=rs(void 0);g.fetchers.set(T,Ke),ae({fetchers:new Map(g.fetchers)});return}else{st.add(T);let Ke=Mo(G);return g.fetchers.set(T,Ke),ae({fetchers:new Map(g.fetchers)}),To(g,pe,{submission:G,isFetchActionRedirect:!0})}if(aa(pe)){xl(T,I,pe.error);return}if(vi(pe))throw tn(400,{type:"defer-action"});let Ve=g.navigation.location||g.location,Je=bo(t.history,Ve,U.signal),ci=a||o,hi=g.navigation.state!=="idle"?vs(ci,g.navigation.location,l):g.matches;ne(hi,"Didn't find any matches after fetcher action");let Io=++Zt;kn.set(T,Io);let Hh=Mo(G,pe.data);g.fetchers.set(T,Hh);let[Kn,Gn]=Yv(t.history,g,hi,G,Ve,Z,B,Ue,qe,st,ci,l,{[V.route.id]:pe.data},void 0);Gn.filter(Ke=>Ke.key!==T).forEach(Ke=>{let Ro=Ke.key,My=g.fetchers.get(Ro),MS=Mo(void 0,My?My.data:void 0);g.fetchers.set(Ro,MS),fe.has(Ro)&&wr(Ro),Ke.controller&&fe.set(Ro,Ke.controller)}),ae({fetchers:new Map(g.fetchers)});let Nl=()=>Gn.forEach(Ke=>wr(Ke.key));U.signal.addEventListener("abort",Nl);let{results:Wh,loaderResults:qh,fetcherResults:Kh}=await ky(g.matches,hi,Kn,Gn,Je);if(U.signal.aborted)return;U.signal.removeEventListener("abort",Nl),kn.delete(T),fe.delete(T),Gn.forEach(Ke=>fe.delete(Ke.key));let me=r_(Wh);if(me){if(me.idx>=Kn.length){let Ke=Gn[me.idx-Kn.length].key;st.add(Ke)}return To(g,me.result)}let{loaderData:fn,errors:Er}=e_(g,g.matches,Kn,qh,void 0,Gn,Kh,O);if(g.fetchers.has(T)){let Ke=rs(pe.data);g.fetchers.set(T,Ke)}let Gh=Dy(Io);g.navigation.state==="loading"&&Io>Cn?(ne(E,"Expected pending action"),S&&S.abort(),Lt(g.navigation.location,{matches:hi,loaderData:fn,errors:Er,fetchers:new Map(g.fetchers)})):(ae(Ae({errors:Er,loaderData:t_(g.loaderData,fn,hi,Er)},Gh||Gn.length>0?{fetchers:new Map(g.fetchers)}:{})),Z=!1)}async function DS(T,I,P,V,J,G){let Y=g.fetchers.get(T),H=Mo(G,Y?Y.data:void 0);g.fetchers.set(T,H),ae({fetchers:new Map(g.fetchers)});let U=new AbortController,ye=bo(t.history,P,U.signal);fe.set(T,U);let ft=Zt,pe=await Lo("loader",ye,V,J,s,i,l);if(vi(pe)&&(pe=await E1(pe,ye.signal,!0)||pe),fe.get(T)===U&&fe.delete(T),ye.signal.aborted)return;if(ks(pe))if(Cn>ft){let Je=rs(void 0);g.fetchers.set(T,Je),ae({fetchers:new Map(g.fetchers)});return}else{st.add(T),await To(g,pe);return}if(aa(pe)){let Je=_s(g.matches,I);g.fetchers.delete(T),ae({fetchers:new Map(g.fetchers),errors:{[Je.route.id]:pe.error}});return}ne(!vi(pe),"Unhandled fetcher deferred data");let Ve=rs(pe.data);g.fetchers.set(T,Ve),ae({fetchers:new Map(g.fetchers)})}async function To(T,I,P){let{submission:V,replace:J,isFetchActionRedirect:G}=P===void 0?{}:P;I.revalidate&&(Z=!0);let Y=Na(T.location,I.location,Ae({_isRedirect:!0},G?{_isFetchActionRedirect:!0}:{}));if(ne(Y,"Expected a location on the redirect navigation"),v1.test(I.location)&&n){let ye=t.history.createURL(I.location),ft=co(ye.pathname,l)==null;if(e.location.origin!==ye.origin||ft){J?e.location.replace(I.location):e.location.assign(I.location);return}}S=null;let H=J===!0?je.Replace:je.Push,U=V||s_(T.navigation);if(Uk.has(I.status)&&U&&yn(U.formMethod))await en(H,Y,{submission:Ae({},U,{formAction:I.location}),preventScrollReset:A});else if(G)await en(H,Y,{overrideNavigation:Yl(Y),fetcherSubmission:U,preventScrollReset:A});else{let ye=Yl(Y,U);await en(H,Y,{overrideNavigation:ye,preventScrollReset:A})}}async function ky(T,I,P,V,J){let G=await Promise.all([...P.map(U=>Lo("loader",J,U,I,s,i,l)),...V.map(U=>U.matches&&U.match&&U.controller?Lo("loader",bo(t.history,U.path,U.controller.signal),U.match,U.matches,s,i,l):{type:Ge.error,error:tn(404,{pathname:U.path})})]),Y=G.slice(0,P.length),H=G.slice(P.length);return await Promise.all([i_(T,P,Y,Y.map(()=>J.signal),!1,g.loaderData),i_(T,V.map(U=>U.match),H,V.map(U=>U.controller?U.controller.signal:null),!0)]),{results:G,loaderResults:Y,fetcherResults:H}}function jh(){Z=!0,B.push(...zh()),qe.forEach((T,I)=>{fe.has(I)&&(Ue.push(I),wr(I))})}function xl(T,I,P){let V=_s(g.matches,I);Bh(T),ae({errors:{[V.route.id]:P},fetchers:new Map(g.fetchers)})}function Bh(T){let I=g.fetchers.get(T);fe.has(T)&&!(I&&I.state==="loading"&&kn.has(T))&&wr(T),qe.delete(T),kn.delete(T),st.delete(T),g.fetchers.delete(T)}function wr(T){let I=fe.get(T);ne(I,"Expected fetch controller: "+T),I.abort(),fe.delete(T)}function Py(T){for(let I of T){let P=Cy(I),V=rs(P.data);g.fetchers.set(I,V)}}function xy(){let T=[],I=!1;for(let P of st){let V=g.fetchers.get(P);ne(V,"Expected fetcher: "+P),V.state==="loading"&&(st.delete(P),T.push(P),I=!0)}return Py(T),I}function Dy(T){let I=[];for(let[P,V]of kn)if(V<T){let J=g.fetchers.get(P);ne(J,"Expected fetcher: "+P),J.state==="loading"&&(wr(P),kn.delete(P),I.push(P))}return Py(I),I.length>0}function NS(T,I){let P=g.blockers.get(T)||Oo;return $.get(T)!==I&&$.set(T,I),P}function Ny(T){g.blockers.delete(T),$.delete(T)}function Dl(T,I){let P=g.blockers.get(T)||Oo;ne(P.state==="unblocked"&&I.state==="blocked"||P.state==="blocked"&&I.state==="blocked"||P.state==="blocked"&&I.state==="proceeding"||P.state==="blocked"&&I.state==="unblocked"||P.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+I.state);let V=new Map(g.blockers);V.set(T,I),ae({blockers:V})}function Oy(T){let{currentLocation:I,nextLocation:P,historyAction:V}=T;if($.size===0)return;$.size>1&&Hs(!1,"A router only supports one blocker at a time");let J=Array.from($.entries()),[G,Y]=J[J.length-1],H=g.blockers.get(G);if(!(H&&H.state==="proceeding")&&Y({currentLocation:I,nextLocation:P,historyAction:V}))return G}function zh(T){let I=[];return O.forEach((P,V)=>{(!T||T(V))&&(P.cancel(),I.push(V),O.delete(V))}),I}function OS(T,I,P){if(d=T,v=I,p=P||null,!_&&g.navigation===Td){_=!0;let V=by(g.location,g.matches);V!=null&&ae({restoreScrollPosition:V})}return()=>{d=null,v=null,p=null}}function Ly(T,I){return p&&p(T,I.map(V=>Xk(V,g.loaderData)))||T.key}function LS(T,I){if(d&&v){let P=Ly(T,I);d[P]=v()}}function by(T,I){if(d){let P=Ly(T,I),V=d[P];if(typeof V=="number")return V}return null}function bS(T){s={},a=Qf(T,i,void 0,s)}return y={get basename(){return l},get state(){return g},get routes(){return o},initialize:ge,subscribe:dn,enableScrollRestoration:OS,navigate:dt,fetch:PS,revalidate:bt,createHref:T=>t.history.createHref(T),encodeLocation:T=>t.history.encodeLocation(T),getFetcher:Cy,deleteFetcher:Bh,dispose:Se,getBlocker:NS,deleteBlocker:Ny,_internalFetchControllers:fe,_internalActiveDeferreds:O,_internalSetRoutes:bS},y}function zk(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Yf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=Yc(i||".",sl(a).map(c=>c.pathnameBase),co(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!$m(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:or([n,u.pathname])),bi(u)}function Qv(t,e,n,r){if(!r||!zk(r))return{path:n};if(r.formMethod&&!Yk(r.formMethod))return{path:n,error:tn(405,{method:r.formMethod})};let i=()=>({path:n,error:tn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=w1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!yn(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,v)=>{let[_,w]=v;return""+p+_+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!yn(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}ne(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Xf(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Xf(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Zv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Zv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(yn(c.formMethod))return{path:n,submission:c};let h=yr(n);return e&&h.search&&$m(h.search)&&l.append("index",""),h.search="?"+l,{path:bi(h),submission:c}}function Hk(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Yv(t,e,n,r,i,s,o,a,l,u,c,h,d,p){let v=p?Object.values(p)[0]:d?Object.values(d)[0]:void 0,_=t.createURL(e.location),w=t.createURL(i),m=p?Object.keys(p)[0]:void 0,y=Hk(n,m).filter((E,A)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(Wk(e.loaderData,e.matches[A],E)||o.some(Z=>Z===E.route.id))return!0;let S=e.matches[A],N=E;return Xv(E,Ae({currentUrl:_,currentParams:S.params,nextUrl:w,nextParams:N.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===w.pathname+w.search||_.search!==w.search||_1(S,N)}))}),g=[];return l.forEach((E,A)=>{if(!n.some(Ue=>Ue.route.id===E.routeId))return;let S=vs(c,E.path,h);if(!S){g.push({key:A,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(A),Z=Jf(S,E.path),B=!1;u.has(A)?B=!1:a.includes(A)?B=!0:N&&N.state!=="idle"&&N.data===void 0?B=s:B=Xv(Z,Ae({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),B&&g.push({key:A,routeId:E.routeId,path:E.path,matches:S,match:Z,controller:new AbortController})}),[y,g]}function Wk(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function _1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Xv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Jv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ne(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Hs(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!pk.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ae({},e(i),{lazy:void 0}))}async function Lo(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=v=>{let _,w=new Promise((m,f)=>_=f);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),w])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([h(v),Jv(n.route,s,i)]))[0];else if(await Jv(n.route,s,i),v=n.route[t],v)u=await h(v);else if(t==="action"){let _=new URL(e.url),w=_.pathname+_.search;throw tn(405,{method:e.method,pathname:w,routeId:n.route.id})}else return{type:Ge.data,data:void 0};else if(v)u=await h(v);else{let _=new URL(e.url),w=_.pathname+_.search;throw tn(404,{pathname:w})}ne(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Ge.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(Qk(u)){let v=u.status;if(Fk.has(v)){let m=u.headers.get("Location");if(ne(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!v1.test(m))m=Yf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!a.isStaticRequest){let f=new URL(e.url),y=m.startsWith("//")?new URL(f.protocol+m):new URL(m),g=co(y.pathname,o)!=null;y.origin===f.origin&&g&&(m=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Ge.redirect,status:v,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||Ge.data,response:u};let _,w=u.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?_=await u.json():_=await u.text(),l===Ge.error?{type:l,error:new Um(v,u.statusText,_),headers:u.headers}:{type:Ge.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ge.error)return{type:l,error:u};if(Gk(u)){var d,p;return{type:Ge.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((p=u.init)==null?void 0:p.headers)&&new Headers(u.init.headers)}}return{type:Ge.data,data:u}}function bo(t,e,n,r){let i=t.createURL(w1(e)).toString(),s={signal:n};if(r&&yn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Xf(r.formData):s.body=r.formData}return new Request(i,s)}function Xf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Zv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function qk(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(ne(!ks(c),"Cannot handle redirect results in processLoaderData"),aa(c)){let p=_s(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=v),s[d]=void 0,l||(l=!0,a=g1(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else vi(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function e_(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=qk(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:p}=s[c];ne(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(p&&p.signal.aborted))if(aa(v)){let _=_s(t.matches,d==null?void 0:d.route.id);u&&u[_.route.id]||(u=Ae({},u,{[_.route.id]:v.error})),t.fetchers.delete(h)}else if(ks(v))ne(!1,"Unhandled fetcher revalidation redirect");else if(vi(v))ne(!1,"Unhandled fetcher deferred data");else{let _=rs(v.data);t.fetchers.set(h,_)}}return{loaderData:l,errors:u}}function t_(t,e,n,r){let i=Ae({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function _s(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function n_(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function tn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Um(t||500,o,new Error(a),!0)}function r_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ks(n))return{result:n,idx:e}}}function w1(t){let e=typeof t=="string"?yr(t):t;return bi(Ae({},e,{hash:""}))}function Kk(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function vi(t){return t.type===Ge.deferred}function aa(t){return t.type===Ge.error}function ks(t){return(t&&t.type)===Ge.redirect}function Gk(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function Qk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Yk(t){return Vk.has(t.toLowerCase())}function yn(t){return bk.has(t.toLowerCase())}async function i_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!_1(u,l)&&(s&&s[l.route.id])!==void 0;if(vi(a)&&(i||c)){let h=r[o];ne(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await E1(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function E1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ge.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ge.error,error:i}}return{type:Ge.data,data:t.deferredData.data}}}function $m(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Xk(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Jf(t,e){let n=typeof e=="string"?yr(e).search:e.search;if(t[t.length-1].route.index&&$m(n||""))return t[t.length-1];let r=sl(t);return r[r.length-1]}function s_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Yl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Jk(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Mo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function Zk(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function rs(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sc.apply(this,arguments)}const Xc=k.createContext(null),T1=k.createContext(null),ho=k.createContext(null),Jc=k.createContext(null),vr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),I1=k.createContext(null);function eP(t,e){let{relative:n}=e===void 0?{}:e;fo()||ne(!1);let{basename:r,navigator:i}=k.useContext(ho),{hash:s,pathname:o,search:a}=S1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:or([r,o])),i.createHref({pathname:l,search:a,hash:s})}function fo(){return k.useContext(Jc)!=null}function ol(){return fo()||ne(!1),k.useContext(Jc).location}function R1(t){k.useContext(ho).static||k.useLayoutEffect(t)}function Ki(){let{isDataRoute:t}=k.useContext(vr);return t?pP():tP()}function tP(){fo()||ne(!1);let t=k.useContext(Xc),{basename:e,navigator:n}=k.useContext(ho),{matches:r}=k.useContext(vr),{pathname:i}=ol(),s=JSON.stringify(sl(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return R1(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Yc(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:or([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const nP=k.createContext(null);function rP(t){let e=k.useContext(vr).outlet;return e&&k.createElement(nP.Provider,{value:t},e)}function S1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(vr),{pathname:i}=ol(),s=JSON.stringify(sl(r).map(o=>o.pathnameBase));return k.useMemo(()=>Yc(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function iP(t,e,n){fo()||ne(!1);let{navigator:r}=k.useContext(ho),{matches:i}=k.useContext(vr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ol(),u;if(e){var c;let _=typeof e=="string"?yr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ne(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=vs(t,{pathname:d}),v=uP(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:or([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:or([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?k.createElement(Jc.Provider,{value:{location:sc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:je.Pop}},v):v}function sP(){let t=fP(),e=g1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}const oP=k.createElement(sP,null);class aP extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(vr.Provider,{value:this.props.routeContext},k.createElement(I1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lP(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Xc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(vr.Provider,{value:e},r)}function uP(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||oP);let d=e.concat(s.slice(0,u+1)),p=()=>{let v;return c?v=h:l.route.Component?v=k.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,k.createElement(lP,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(aP,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Zf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Zf||(Zf={}));var Oa;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Oa||(Oa={}));function cP(t){let e=k.useContext(Xc);return e||ne(!1),e}function hP(t){let e=k.useContext(T1);return e||ne(!1),e}function dP(t){let e=k.useContext(vr);return e||ne(!1),e}function A1(t){let e=dP(),n=e.matches[e.matches.length-1];return n.route.id||ne(!1),n.route.id}function fP(){var t;let e=k.useContext(I1),n=hP(Oa.UseRouteError),r=A1(Oa.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function pP(){let{router:t}=cP(Zf.UseNavigateStable),e=A1(Oa.UseNavigateStable),n=k.useRef(!1);return R1(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,sc({fromRouteId:e},s)))},[t,e])}const mP="startTransition",o_=eA[mP];function gP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=k.useState(n.state),{v7_startTransition:o}=r||{},a=k.useCallback(h=>{o&&o_?o_(()=>s(h)):s(h)},[s,o]);k.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,p)=>n.navigate(h,{state:d,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(h,d,p)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),u=n.basename||"/",c=k.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return k.createElement(k.Fragment,null,k.createElement(Xc.Provider,{value:c},k.createElement(T1.Provider,{value:i},k.createElement(wP,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?k.createElement(yP,{routes:n.routes,state:i}):e))),null)}function yP(t){let{routes:e,state:n}=t;return iP(e,void 0,n)}function vP(t){let{to:e,replace:n,state:r,relative:i}=t;fo()||ne(!1);let{matches:s}=k.useContext(vr),{pathname:o}=ol(),a=Ki(),l=Yc(e,sl(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return k.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function _P(t){return rP(t.context)}function wP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=je.Pop,navigator:s,static:o=!1}=t;fo()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=yr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,v=k.useMemo(()=>{let _=co(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return v==null?null:k.createElement(ho.Provider,{value:l},k.createElement(Jc.Provider,{children:n,value:v}))}var a_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(a_||(a_={}));new Promise(()=>{});function EP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:k.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:k.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},La.apply(this,arguments)}function TP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function IP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RP(t,e){return t.button===0&&(!e||e==="_self")&&!IP(t)}const SP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function AP(t,e){return Bk({basename:e==null?void 0:e.basename,future:La({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:hk({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||CP(),routes:t,mapRouteProperties:EP}).initialize()}function CP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=La({},e,{errors:kP(e.errors)})),e}function kP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Um(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const PP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xr=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=TP(e,SP),{basename:d}=k.useContext(ho),p,v=!1;if(typeof u=="string"&&xP.test(u)&&(p=u,PP))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),g=co(y.pathname,d);y.origin===f.origin&&g!=null?u=g+y.search+y.hash:v=!0}catch{}let _=eP(u,{relative:i}),w=DP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||w(f)}return k.createElement("a",La({},h,{href:p||_,onClick:v||s?r:m,ref:n,target:l}))});var l_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(l_||(l_={}));var u_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(u_||(u_={}));function DP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ki(),l=ol(),u=S1(t,{relative:o});return k.useCallback(c=>{if(RP(c,n)){c.preventDefault();let h=r!==void 0?r:bi(l)===bi(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Et=function(){return Et=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Et.apply(this,arguments)};function jm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ba(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var we="-ms-",la="-moz-",ce="-webkit-",C1="comm",Zc="rule",Bm="decl",NP="@import",k1="@keyframes",OP="@layer",LP=Math.abs,zm=String.fromCharCode,ep=Object.assign;function bP(t,e){return tt(t,0)^45?(((e<<2^tt(t,0))<<2^tt(t,1))<<2^tt(t,2))<<2^tt(t,3):0}function P1(t){return t.trim()}function Yn(t,e){return(t=e.exec(t))?t[0]:t}function te(t,e,n){return t.replace(e,n)}function Tu(t,e){return t.indexOf(e)}function tt(t,e){return t.charCodeAt(e)|0}function Ws(t,e,n){return t.slice(e,n)}function Nn(t){return t.length}function x1(t){return t.length}function Ho(t,e){return e.push(t),t}function MP(t,e){return t.map(e).join("")}function c_(t,e){return t.filter(function(n){return!Yn(n,e)})}var eh=1,qs=1,D1=0,cn=0,ze=0,po="";function th(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:eh,column:qs,length:o,return:"",siblings:a}}function Rr(t,e){return ep(th("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ts(t){for(;t.root;)t=Rr(t.root,{children:[t]});Ho(t,t.siblings)}function VP(){return ze}function FP(){return ze=cn>0?tt(po,--cn):0,qs--,ze===10&&(qs=1,eh--),ze}function Tn(){return ze=cn<D1?tt(po,cn++):0,qs++,ze===10&&(qs=1,eh++),ze}function Ai(){return tt(po,cn)}function Iu(){return cn}function nh(t,e){return Ws(po,t,e)}function tp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function UP(t){return eh=qs=1,D1=Nn(po=t),cn=0,[]}function $P(t){return po="",t}function Id(t){return P1(nh(cn-1,np(t===91?t+2:t===40?t+1:t)))}function jP(t){for(;(ze=Ai())&&ze<33;)Tn();return tp(t)>2||tp(ze)>3?"":" "}function BP(t,e){for(;--e&&Tn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return nh(t,Iu()+(e<6&&Ai()==32&&Tn()==32))}function np(t){for(;Tn();)switch(ze){case t:return cn;case 34:case 39:t!==34&&t!==39&&np(ze);break;case 40:t===41&&np(t);break;case 92:Tn();break}return cn}function zP(t,e){for(;Tn()&&t+ze!==47+10;)if(t+ze===42+42&&Ai()===47)break;return"/*"+nh(e,cn-1)+"*"+zm(t===47?t:Tn())}function HP(t){for(;!tp(Ai());)Tn();return nh(t,cn)}function WP(t){return $P(Ru("",null,null,null,[""],t=UP(t),0,[0],t))}function Ru(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,p=0,v=0,_=1,w=1,m=1,f=0,y="",g=i,E=s,A=r,S=y;w;)switch(v=f,f=Tn()){case 40:if(v!=108&&tt(S,h-1)==58){Tu(S+=te(Id(f),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:S+=Id(f);break;case 9:case 10:case 13:case 32:S+=jP(v);break;case 92:S+=BP(Iu()-1,7);continue;case 47:switch(Ai()){case 42:case 47:Ho(qP(zP(Tn(),Iu()),e,n,l),l);break;default:S+="/"}break;case 123*_:a[u++]=Nn(S)*m;case 125*_:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+c:m==-1&&(S=te(S,/\f/g,"")),p>0&&Nn(S)-h&&Ho(p>32?d_(S+";",r,n,h-1,l):d_(te(S," ","")+";",r,n,h-2,l),l);break;case 59:S+=";";default:if(Ho(A=h_(S,e,n,u,c,i,a,y,g=[],E=[],h,s),s),f===123)if(c===0)Ru(S,e,A,A,g,s,h,a,E);else switch(d===99&&tt(S,3)===110?100:d){case 100:case 108:case 109:case 115:Ru(t,A,A,r&&Ho(h_(t,A,A,0,0,i,a,y,i,g=[],h,E),E),i,E,h,a,r?g:E);break;default:Ru(S,A,A,A,[""],E,0,a,E)}}u=c=p=0,_=m=1,y=S="",h=o;break;case 58:h=1+Nn(S),p=v;default:if(_<1){if(f==123)--_;else if(f==125&&_++==0&&FP()==125)continue}switch(S+=zm(f),f*_){case 38:m=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(Nn(S)-1)*m,m=1;break;case 64:Ai()===45&&(S+=Id(Tn())),d=Ai(),c=h=Nn(y=S+=HP(Iu())),f++;break;case 45:v===45&&Nn(S)==2&&(_=0)}}return s}function h_(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,p=i===0?s:[""],v=x1(p),_=0,w=0,m=0;_<r;++_)for(var f=0,y=Ws(t,d+1,d=LP(w=o[_])),g=t;f<v;++f)(g=P1(w>0?p[f]+" "+y:te(y,/&\f/g,p[f])))&&(l[m++]=g);return th(t,e,n,i===0?Zc:a,l,u,c,h)}function qP(t,e,n,r){return th(t,e,n,C1,zm(VP()),Ws(t,2,-2),0,r)}function d_(t,e,n,r,i){return th(t,e,n,Bm,Ws(t,0,r),Ws(t,r+1,-1),r,i)}function N1(t,e,n){switch(bP(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return la+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+la+t+we+t+t;case 5936:switch(tt(t,e+11)){case 114:return ce+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+we+te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+we+t+t;case 6165:return ce+t+we+"flex-"+t+t;case 5187:return ce+t+te(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return ce+t+we+"flex-item-"+te(t,/flex-|-self/g,"")+(Yn(t,/flex-|baseline/)?"":we+"grid-row-"+te(t,/flex-|-self/g,""))+t;case 4675:return ce+t+we+"flex-line-pack"+te(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+we+te(t,"shrink","negative")+t;case 5292:return ce+t+we+te(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+te(t,"-grow","")+ce+t+we+te(t,"grow","positive")+t;case 4554:return ce+te(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return te(te(te(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return te(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return te(te(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!Yn(t,/flex-|baseline/))return we+"grid-column-align"+Ws(t,e)+t;break;case 2592:case 3360:return we+te(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Yn(r.props,/grid-\w+-end/)})?~Tu(t+(n=n[e].value),"span")?t:we+te(t,"-start","")+t+we+"grid-row-span:"+(~Tu(n,"span")?Yn(n,/\d+/):+Yn(n,/\d+/)-+Yn(t,/\d+/))+";":we+te(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Yn(r.props,/grid-\w+-start/)})?t:we+te(te(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return te(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nn(t)-1-e>6)switch(tt(t,e+1)){case 109:if(tt(t,e+4)!==45)break;case 102:return te(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+la+(tt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Tu(t,"stretch")?N1(te(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return te(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return we+i+":"+s+u+(o?we+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(tt(t,e+6)===121)return te(t,":",":"+ce)+t;break;case 6444:switch(tt(t,tt(t,14)===45?18:11)){case 120:return te(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(tt(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+we+"$2box$3")+t;case 100:return te(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(t,"scroll-","scroll-snap-")+t}return t}function oc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function KP(t,e,n,r){switch(t.type){case OP:if(t.children.length)break;case NP:case Bm:return t.return=t.return||t.value;case C1:return"";case k1:return t.return=t.value+"{"+oc(t.children,r)+"}";case Zc:if(!Nn(t.value=t.props.join(",")))return""}return Nn(n=oc(t.children,r))?t.return=t.value+"{"+n+"}":""}function GP(t){var e=x1(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function QP(t){return function(e){e.root||(e=e.return)&&t(e)}}function YP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Bm:t.return=N1(t.value,t.length,n);return;case k1:return oc([Rr(t,{value:te(t.value,"@","@"+ce)})],r);case Zc:if(t.length)return MP(n=t.props,function(i){switch(Yn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ts(Rr(t,{props:[te(i,/:(read-\w+)/,":"+la+"$1")]})),ts(Rr(t,{props:[i]})),ep(t,{props:c_(n,r)});break;case"::placeholder":ts(Rr(t,{props:[te(i,/:(plac\w+)/,":"+ce+"input-$1")]})),ts(Rr(t,{props:[te(i,/:(plac\w+)/,":"+la+"$1")]})),ts(Rr(t,{props:[te(i,/:(plac\w+)/,we+"input-$1")]})),ts(Rr(t,{props:[i]})),ep(t,{props:c_(n,r)});break}return""})}}var XP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ks=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Hm=typeof window<"u"&&"HTMLElement"in window,JP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),ZP={},rh=Object.freeze([]),Gs=Object.freeze({});function O1(t,e,n){return n===void 0&&(n=Gs),t.theme!==n.theme&&t.theme||e||n.theme}var L1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ex=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tx=/(^-|-$)/g;function f_(t){return t.replace(ex,"-").replace(tx,"")}var nx=/(a)(d)/gi,p_=function(t){return String.fromCharCode(t+(t>25?39:97))};function rp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=p_(e%52)+n;return(p_(e%52)+n).replace(nx,"$1-$2")}var Rd,ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},b1=function(t){return ws(5381,t)};function M1(t){return rp(b1(t)>>>0)}function rx(t){return t.displayName||t.name||"Component"}function Sd(t){return typeof t=="string"&&!0}var V1=typeof Symbol=="function"&&Symbol.for,F1=V1?Symbol.for("react.memo"):60115,ix=V1?Symbol.for("react.forward_ref"):60112,sx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ox={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ax=((Rd={})[ix]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rd[F1]=U1,Rd);function m_(t){return("type"in(e=t)&&e.type.$$typeof)===F1?U1:"$$typeof"in t?ax[t.$$typeof]:sx;var e}var lx=Object.defineProperty,ux=Object.getOwnPropertyNames,g_=Object.getOwnPropertySymbols,cx=Object.getOwnPropertyDescriptor,hx=Object.getPrototypeOf,y_=Object.prototype;function $1(t,e,n){if(typeof e!="string"){if(y_){var r=hx(e);r&&r!==y_&&$1(t,r,n)}var i=ux(e);g_&&(i=i.concat(g_(e)));for(var s=m_(t),o=m_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in ox||n&&n[l]||o&&l in o||s&&l in s)){var u=cx(e,l);try{lx(t,l,u)}catch{}}}}return t}function Qs(t){return typeof t=="function"}function Wm(t){return typeof t=="object"&&"styledComponentId"in t}function _i(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ip(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Ma(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function sp(t,e,n){if(n===void 0&&(n=!1),!n&&!Ma(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=sp(t[r],e[r]);else if(Ma(e))for(var r in e)t[r]=sp(t[r],e[r]);return t}function qm(t,e){Object.defineProperty(t,"toString",{value:e})}function al(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var dx=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw al(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Su=new Map,ac=new Map,Ad=1,Xl=function(t){if(Su.has(t))return Su.get(t);for(;ac.has(Ad);)Ad++;var e=Ad++;return Su.set(t,e),ac.set(e,t),e},fx=function(t,e){Su.set(t,e),ac.set(e,t)},px="style[".concat(Ks,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),mx=new RegExp("^".concat(Ks,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gx=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},yx=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(mx);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(fx(c,u),gx(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function vx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var j1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ks,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ks,"active"),r.setAttribute("data-styled-version","6.0.7");var o=vx();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},_x=function(){function t(e){this.element=j1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw al(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),wx=function(){function t(e){this.element=j1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Ex=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),v_=Hm,Tx={isServer:!Hm,useCSSOMInjection:!JP},lc=function(){function t(e,n,r){e===void 0&&(e=Gs),n===void 0&&(n={});var i=this;this.options=Et(Et({},Tx),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Hm&&v_&&(v_=!1,function(s){for(var o=document.querySelectorAll(px),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ks)!=="active"&&(yx(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),qm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(m){return ac.get(m)}(h);if(d===void 0)return"continue";var p=s.names.get(d),v=o.getGroup(h);if(p===void 0||v.length===0)return"continue";var _="".concat(Ks,".g").concat(h,'[id="').concat(d,'"]'),w="";p!==void 0&&p.forEach(function(m){m.length>0&&(w+="".concat(m,","))}),l+="".concat(v).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Xl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Et(Et({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ex(i):r?new _x(i):new wx(i)}(this.options),new dx(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Xl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Xl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Xl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Ix=/&/g,Rx=/^\s*\/\/.*$/gm;function B1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=B1(n.children,e)),n})}function Sx(t){var e,n,r,i=t===void 0?Gs:t,s=i.options,o=s===void 0?Gs:s,a=i.plugins,l=a===void 0?rh:a,u=function(d,p,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===Zc&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Ix,n).replace(r,u))}),o.prefix&&c.push(YP),c.push(KP);var h=function(d,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=d.replace(Rx,""),m=WP(v||p?"".concat(v," ").concat(p," { ").concat(w," }"):w);o.namespace&&(m=B1(m,o.namespace));var f=[];return oc(m,GP(c.concat(QP(function(y){return f.push(y)})))),f};return h.hash=l.length?l.reduce(function(d,p){return p.name||al(15),ws(d,p.name)},5381).toString():"",h}var Ax=new lc,op=Sx(),z1=_n.createContext({shouldForwardProp:void 0,styleSheet:Ax,stylis:op});z1.Consumer;_n.createContext(void 0);function ap(){return k.useContext(z1)}var Cx=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=op);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,qm(this,function(){throw al(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=op),this.name+e.hash},t}(),kx=function(t){return t>="A"&&t<="Z"};function __(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;kx(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var H1=function(t){return t==null||t===!1||t===""},W1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!H1(s)&&(Array.isArray(s)&&s.isCss||Qs(s)?r.push("".concat(__(i),":"),s,";"):Ma(s)?r.push.apply(r,ba(ba(["".concat(i," {")],W1(s),!1),["}"],!1)):r.push("".concat(__(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in XP||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Hr(t,e,n,r){if(H1(t))return[];if(Wm(t))return[".".concat(t.styledComponentId)];if(Qs(t)){if(!Qs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Hr(i,e,n,r)}var s;return t instanceof Cx?n?(t.inject(n,r),[t.getName(r)]):[t]:Ma(t)?W1(t):Array.isArray(t)?Array.prototype.concat.apply(rh,t.map(function(o){return Hr(o,e,n,r)})):[t.toString()]}function q1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Qs(n)&&!Wm(n))return!1}return!0}var Px=b1("6.0.7"),xx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&q1(e),this.componentId=n,this.baseHash=ws(Px,n),this.baseStyle=r,lc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=_i(i,this.staticRulesId);else{var s=ip(Hr(this.rules,e,n,r)),o=rp(ws(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=_i(i,o),this.staticRulesId=o}else{for(var l=ws(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=ip(Hr(h,e,n,r));l=ws(l,d),u+=d}}if(u){var p=rp(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=_i(i,p)}}return i},t}(),Km=_n.createContext(void 0);Km.Consumer;var Cd={};function Dx(t,e,n){var r=Wm(t),i=t,s=!Sd(t),o=e.attrs,a=o===void 0?rh:o,l=e.componentId,u=l===void 0?function(y,g){var E=typeof y!="string"?"sc":f_(y);Cd[E]=(Cd[E]||0)+1;var A="".concat(E,"-").concat(M1("6.0.7"+E+Cd[E]));return g?"".concat(g,"-").concat(A):A}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(y){return Sd(y)?"styled.".concat(y):"Styled(".concat(rx(y),")")}(t);var h=e.displayName&&e.componentId?"".concat(f_(e.displayName),"-").concat(e.componentId):e.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;p=function(y,g){return v(y,g)&&_(y,g)}}else p=v}var w=new xx(n,h,r?i.componentStyle:void 0);function m(y,g){return function(E,A,S){var N=E.attrs,Z=E.componentStyle,B=E.defaultProps,Ue=E.foldedComponentIds,fe=E.styledComponentId,Zt=E.target,Cn=_n.useContext(Km),kn=ap(),st=E.shouldForwardProp||kn.shouldForwardProp,qe=function(dn,ae,Lt){for(var dt,bt=Et(Et({},ae),{className:void 0,theme:Lt}),en=0;en<dn.length;en+=1){var Zi=Qs(dt=dn[en])?dt(bt):dt;for(var Pn in Zi)bt[Pn]=Pn==="className"?_i(bt[Pn],Zi[Pn]):Pn==="style"?Et(Et({},bt[Pn]),Zi[Pn]):Zi[Pn]}return ae.className&&(bt.className=_i(bt.className,ae.className)),bt}(N,A,O1(A,Cn,B)||Gs),O=qe.as||Zt,$={};for(var z in qe)qe[z]===void 0||z[0]==="$"||z==="as"||z==="theme"||(z==="forwardedAs"?$.as=qe.forwardedAs:st&&!st(z,O)||($[z]=qe[z]));var ge=function(dn,ae){var Lt=ap(),dt=dn.generateAndInjectStyles(ae,Lt.styleSheet,Lt.stylis);return dt}(Z,qe),Se=_i(Ue,fe);return ge&&(Se+=" "+ge),qe.className&&(Se+=" "+qe.className),$[Sd(O)&&!L1.has(O)?"class":"className"]=Se,$.ref=S,k.createElement(O,$)}(f,y,g)}var f=_n.forwardRef(m);return f.attrs=d,f.componentStyle=w,f.shouldForwardProp=p,f.foldedComponentIds=r?_i(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=h,f.target=r?i.target:t,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(g){for(var E=[],A=1;A<arguments.length;A++)E[A-1]=arguments[A];for(var S=0,N=E;S<N.length;S++)sp(g,N[S],!0);return g}({},i.defaultProps,y):y}}),qm(f,function(){return".".concat(f.styledComponentId)}),s&&$1(f,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function w_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var E_=function(t){return Object.assign(t,{isCss:!0})};function Gm(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Qs(t)||Ma(t)){var r=t;return E_(Hr(w_(rh,ba([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Hr(i):E_(Hr(w_(i,e)))}function lp(t,e,n){if(n===void 0&&(n=Gs),!e)throw al(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Gm.apply(void 0,ba([i],s,!1)))};return r.attrs=function(i){return lp(t,e,Et(Et({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return lp(t,e,Et(Et({},n),i))},r}var K1=function(t){return lp(Dx,t)},q=K1;L1.forEach(function(t){q[t]=K1(t)});var Nx=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=q1(e),lc.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(ip(Hr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&lc.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function G1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Gm.apply(void 0,ba([t],e,!1)),i="sc-global-".concat(M1(JSON.stringify(r))),s=new Nx(r,i),o=function(l){var u=ap(),c=_n.useContext(Km),h=_n.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),_n.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(s.isStatic)s.renderStyles(l,ZP,c,d);else{var p=Et(Et({},u),{theme:O1(u,h,o.defaultProps)});s.renderStyles(l,p,c,d)}}return _n.memo(o)}/**
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
 */const Q1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ox=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Y1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Q1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ox(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Lx;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bx=function(t){const e=Q1(t);return Y1.encodeByteArray(e,!0)},uc=function(t){return bx(t).replace(/\./g,"")},X1=function(t){try{return Y1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vx=()=>Mx().__FIREBASE_DEFAULTS__,Fx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ux=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&X1(t[1]);return e&&JSON.parse(e)},ih=()=>{try{return Vx()||Fx()||Ux()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},J1=t=>{var e,n;return(n=(e=ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Z1=t=>{const e=J1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eT=()=>{var t;return(t=ih())===null||t===void 0?void 0:t.config},tT=t=>{var e;return(e=ih())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $x{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[uc(JSON.stringify(n)),uc(JSON.stringify(o)),a].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Bx(){var t;const e=(t=ih())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wx(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qx(){try{return typeof indexedDB=="object"}catch{return!1}}function Kx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Gx="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gx,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ll.prototype.create)}}class ll{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Qx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,r)}}function Qx(t,e){return t.replace(Yx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Yx=/\{\$([^}]+)}/g;function Xx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(T_(s)&&T_(o)){if(!cc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function T_(t){return t!==null&&typeof t=="object"}/**
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
 */function ul(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jx(t,e){const n=new Zx(t,e);return n.subscribe.bind(n)}class Zx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");e2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kd),i.error===void 0&&(i.error=kd),i.complete===void 0&&(i.complete=kd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kd(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pi="[DEFAULT]";/**
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
 */class t2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $x;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(r2(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n2(t){return t===pi?void 0:t}function r2(t){return t.instantiationMode==="EAGER"}/**
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
 */class i2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const s2={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},o2=le.INFO,a2={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},l2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=a2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qm{constructor(e){this.name=e,this._logLevel=o2,this._logHandler=l2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const u2=(t,e)=>e.some(n=>t instanceof n);let I_,R_;function c2(){return I_||(I_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h2(){return R_||(R_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rT=new WeakMap,up=new WeakMap,iT=new WeakMap,Pd=new WeakMap,Ym=new WeakMap;function d2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rT.set(n,t)}).catch(()=>{}),Ym.set(e,t),e}function f2(t){if(up.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});up.set(t,e)}let cp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return up.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p2(t){cp=t(cp)}function m2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xd(this),e,...n);return iT.set(r,e.sort?e.sort():[e]),Wr(r)}:h2().includes(t)?function(...e){return t.apply(xd(this),e),Wr(rT.get(this))}:function(...e){return Wr(t.apply(xd(this),e))}}function g2(t){return typeof t=="function"?m2(t):(t instanceof IDBTransaction&&f2(t),u2(t,c2())?new Proxy(t,cp):t)}function Wr(t){if(t instanceof IDBRequest)return d2(t);if(Pd.has(t))return Pd.get(t);const e=g2(t);return e!==t&&(Pd.set(t,e),Ym.set(e,t)),e}const xd=t=>Ym.get(t);function y2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wr(o.result),l.oldVersion,l.newVersion,Wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const v2=["get","getKey","getAll","getAllKeys","count"],_2=["put","add","delete","clear"],Dd=new Map;function S_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Dd.set(e,s),s}p2(t=>({...t,get:(e,n,r)=>S_(e,n)||t.get(e,n,r),has:(e,n)=>!!S_(e,n)||t.has(e,n)}));/**
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
 */class w2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hp="@firebase/app",A_="0.9.15";/**
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
 */const Mi=new Qm("@firebase/app"),T2="@firebase/app-compat",I2="@firebase/analytics-compat",R2="@firebase/analytics",S2="@firebase/app-check-compat",A2="@firebase/app-check",C2="@firebase/auth",k2="@firebase/auth-compat",P2="@firebase/database",x2="@firebase/database-compat",D2="@firebase/functions",N2="@firebase/functions-compat",O2="@firebase/installations",L2="@firebase/installations-compat",b2="@firebase/messaging",M2="@firebase/messaging-compat",V2="@firebase/performance",F2="@firebase/performance-compat",U2="@firebase/remote-config",$2="@firebase/remote-config-compat",j2="@firebase/storage",B2="@firebase/storage-compat",z2="@firebase/firestore",H2="@firebase/firestore-compat",W2="firebase",q2="10.1.0";/**
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
 */const dp="[DEFAULT]",K2={[hp]:"fire-core",[T2]:"fire-core-compat",[R2]:"fire-analytics",[I2]:"fire-analytics-compat",[A2]:"fire-app-check",[S2]:"fire-app-check-compat",[C2]:"fire-auth",[k2]:"fire-auth-compat",[P2]:"fire-rtdb",[x2]:"fire-rtdb-compat",[D2]:"fire-fn",[N2]:"fire-fn-compat",[O2]:"fire-iid",[L2]:"fire-iid-compat",[b2]:"fire-fcm",[M2]:"fire-fcm-compat",[V2]:"fire-perf",[F2]:"fire-perf-compat",[U2]:"fire-rc",[$2]:"fire-rc-compat",[j2]:"fire-gcs",[B2]:"fire-gcs-compat",[z2]:"fire-fst",[H2]:"fire-fst-compat","fire-js":"fire-js",[W2]:"fire-js-all"};/**
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
 */const hc=new Map,fp=new Map;function G2(t,e){try{t.container.addComponent(e)}catch(n){Mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vi(t){const e=t.name;if(fp.has(e))return Mi.debug(`There were multiple attempts to register component ${e}.`),!1;fp.set(e,t);for(const n of hc.values())G2(n,t);return!0}function sh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Q2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qr=new ll("app","Firebase",Q2);/**
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
 */class Y2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Gi=q2;function sT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=eT()),!n)throw qr.create("no-options");const s=hc.get(i);if(s){if(cc(n,s.options)&&cc(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new i2(i);for(const l of fp.values())o.addComponent(l);const a=new Y2(n,r,o);return hc.set(i,a),a}function Xm(t=dp){const e=hc.get(t);if(!e&&t===dp&&eT())return sT();if(!e)throw qr.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let i=(r=K2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mi.warn(a.join(" "));return}Vi(new Jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const X2="firebase-heartbeat-database",J2=1,Va="firebase-heartbeat-store";let Nd=null;function oT(){return Nd||(Nd=y2(X2,J2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Va)}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),Nd}async function Z2(t){try{return await(await oT()).transaction(Va).objectStore(Va).get(aT(t))}catch(e){if(e instanceof Jt)Mi.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mi.warn(n.message)}}}async function C_(t,e){try{const r=(await oT()).transaction(Va,"readwrite");await r.objectStore(Va).put(e,aT(t)),await r.done}catch(n){if(n instanceof Jt)Mi.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mi.warn(r.message)}}}function aT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eD=1024,tD=30*24*60*60*1e3;class nD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=k_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=k_(),{heartbeatsToSend:n,unsentEntries:r}=rD(this._heartbeatsCache.heartbeats),i=uc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function k_(){return new Date().toISOString().substring(0,10)}function rD(t,e=eD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),P_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),P_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qx()?Kx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Z2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return C_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return C_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function P_(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sD(t){Vi(new Jr("platform-logger",e=>new w2(e),"PRIVATE")),Vi(new Jr("heartbeat",e=>new nD(e),"PRIVATE")),$n(hp,A_,t),$n(hp,A_,"esm2017"),$n("fire-js","")}sD("");var oD="firebase",aD="10.1.0";/**
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
 */$n(oD,aD,"app");function lT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lD=lT,uT=new ll("auth","Firebase",lT());/**
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
 */const dc=new Qm("@firebase/auth");function uD(t,...e){dc.logLevel<=le.WARN&&dc.warn(`Auth (${Gi}): ${t}`,...e)}function Au(t,...e){dc.logLevel<=le.ERROR&&dc.error(`Auth (${Gi}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw Jm(t,...e)}function jn(t,...e){return Jm(t,...e)}function cT(t,e,n){const r=Object.assign(Object.assign({},lD()),{[e]:n});return new ll("auth","Firebase",r).create(e,{appName:t.name})}function cD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),cT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uT.create(t,...e)}function W(t,e,...n){if(!t)throw Jm(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Au(e),new Error(e)}function hr(t,e){t||tr(e)}/**
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
 */function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hD(){return x_()==="http:"||x_()==="https:"}function x_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hD()||zx()||"connection"in navigator)?navigator.onLine:!0}function fD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=jx()||Hx()}get(){return dD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zm(t,e){hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mD=new cl(3e4,6e4);function Qi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function si(t,e,n,r,i={}){return dT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ul(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),hT.fetch()(fT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function dT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pD),e);try{const i=new gD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Jl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cT(t,c,u);hn(t,c)}}catch(i){if(i instanceof Jt)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function hl(t,e,n,r,i={}){const s=await si(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function fT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zm(t.config,i):`${t.config.apiScheme}://${i}`}class gD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jn(this.auth,"network-request-failed")),mD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function yD(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function vD(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ua(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _D(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=eg(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ua(Od(i.auth_time)),issuedAtTime:ua(Od(i.iat)),expirationTime:ua(Od(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Od(t){return Number(t)*1e3}function eg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Au("JWT malformed, contained fewer than 3 sections"),null;try{const i=X1(n);return i?JSON.parse(i):(Au("Failed to decode base64 JWT payload"),null)}catch(i){return Au("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wD(t){const e=eg(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&ED(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ED({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ua(this.lastLoginAt),this.creationTime=ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ys(t,vD(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SD(s.providerUserInfo):[],a=RD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ID(t){const e=De(t);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SD(t){return t.map(e=>{var{providerId:n}=e,r=jm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AD(t,e){const n=await dT(t,{},async()=>{const r=ul({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=fT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Fa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fa;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fa,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
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
 */function Ir(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ci{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _D(this,e)}reload(){return ID(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ys(this,yD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:g,isAnonymous:E,providerData:A,stsTokenManager:S}=n;W(y&&S,e,"internal-error");const N=Fa.fromJSON(this.name,S);W(typeof y=="string",e,"internal-error"),Ir(h,e.name),Ir(d,e.name),W(typeof g=="boolean",e,"internal-error"),W(typeof E=="boolean",e,"internal-error"),Ir(p,e.name),Ir(v,e.name),Ir(_,e.name),Ir(w,e.name),Ir(m,e.name),Ir(f,e.name);const Z=new Ci({uid:y,auth:e,email:d,emailVerified:g,displayName:h,isAnonymous:E,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:N,createdAt:m,lastLoginAt:f});return A&&Array.isArray(A)&&(Z.providerData=A.map(B=>Object.assign({},B))),w&&(Z._redirectEventId=w),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fa;i.updateFromServerResponse(n);const s=new Ci({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fc(s),s}}/**
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
 */const D_=new Map;function nr(t){hr(t instanceof Function,"Expected a class definition");let e=D_.get(t);return e?(hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,D_.set(t,e),e)}/**
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
 */class mT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mT.type="NONE";const N_=mT;/**
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
 */function Cu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Cu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Cu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ps(nr(N_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||nr(N_);const o=Cu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ci._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ps(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ps(s,e,r))}}/**
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
 */function O_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wT(e))return"Blackberry";if(ET(e))return"Webos";if(tg(e))return"Safari";if((e.includes("chrome/")||yT(e))&&!e.includes("edge/"))return"Chrome";if(_T(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gT(t=At()){return/firefox\//i.test(t)}function tg(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yT(t=At()){return/crios\//i.test(t)}function vT(t=At()){return/iemobile/i.test(t)}function _T(t=At()){return/android/i.test(t)}function wT(t=At()){return/blackberry/i.test(t)}function ET(t=At()){return/webos/i.test(t)}function oh(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CD(t=At()){var e;return oh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kD(){return Wx()&&document.documentMode===10}function TT(t=At()){return oh(t)||_T(t)||ET(t)||wT(t)||/windows phone/i.test(t)||vT(t)}function PD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function IT(t,e=[]){let n;switch(t){case"Browser":n=O_(At());break;case"Worker":n=`${O_(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gi}/${r}`}async function RT(t,e){return si(t,"GET","/v2/recaptchaConfig",Qi(t,e))}function L_(t){return t!==void 0&&t.enterprise!==void 0}class ST{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function xD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function AT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=jn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xD().appendChild(r)})}function DD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ND="https://www.google.com/recaptcha/enterprise.js?render=",OD="recaptcha-enterprise",LD="NO_RECAPTCHA";class CT{constructor(e){this.type=OD,this.auth=oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{RT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ST(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;L_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(LD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&L_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}AT(ND+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Xs(t,e,n,r=!1){const i=new CT(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class bD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class MD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new b_(this),this.idTokenSubscription=new b_(this),this.beforeStateQueue=new bD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}async initializeRecaptchaConfig(){const e=await RT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ST(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new CT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ll("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oi(t){return De(t)}class b_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jx(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function VD(t,e){const n=sh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cc(s,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function FD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UD(t,e,n){const r=oi(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kT(e),{host:o,port:a}=$D(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jD()}function kT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $D(t){const e=kT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:M_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:M_(o)}}}function M_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ng{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function BD(t,e){return si(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ld(t,e){return hl(t,"POST","/v1/accounts:signInWithPassword",Qi(t,e))}async function zD(t,e){return si(t,"POST","/v1/accounts:sendOobCode",Qi(t,e))}async function bd(t,e){return zD(t,e)}/**
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
 */async function HD(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",Qi(t,e))}async function WD(t,e){return hl(t,"POST","/v1/accounts:signInWithEmailLink",Qi(t,e))}/**
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
 */class Ua extends ng{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ua(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ua(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Xs(e,r,"signInWithPassword");return Ld(e,i)}else return Ld(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Xs(e,r,"signInWithPassword");return Ld(e,s)}else return Promise.reject(i)});case"emailLink":return HD(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return BD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return WD(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xs(t,e){return hl(t,"POST","/v1/accounts:signInWithIdp",Qi(t,e))}/**
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
 */const qD="http://localhost";class Fi extends ng{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:qD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ul(n)}return e}}/**
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
 */function KD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GD(t){const e=Wo(qo(t)).link,n=e?Wo(qo(e)).deep_link_id:null,r=Wo(qo(t)).deep_link_id;return(r?Wo(qo(r)).link:null)||r||n||e||t}class rg{constructor(e){var n,r,i,s,o,a;const l=Wo(qo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=KD((i=l.mode)!==null&&i!==void 0?i:null);W(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GD(e);try{return new rg(n)}catch{return null}}}/**
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
 */class mo{constructor(){this.providerId=mo.PROVIDER_ID}static credential(e,n){return Ua._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rg.parseLink(n);return W(r,"argument-error"),Ua._fromEmailAndCode(e,r.code,r.tenantId)}}mo.PROVIDER_ID="password";mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ig{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dl extends ig{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pr extends dl{constructor(){super("facebook.com")}static credential(e){return Fi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
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
 */class xr extends dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
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
 */class Jn extends dl{constructor(){super("github.com")}static credential(e){return Fi._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Dr extends dl{constructor(){super("twitter.com")}static credential(e,n){return Fi._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
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
 */async function Md(t,e){return hl(t,"POST","/v1/accounts:signUp",Qi(t,e))}/**
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
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ci._fromIdTokenResponse(e,r,i),o=V_(r);return new Ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=V_(r);return new Ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function V_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pc extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pc(e,n,r,i)}}function PT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(t,s,e,r):s})}async function QD(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
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
 */async function YD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ys(t,PT(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=eg(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),s}}/**
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
 */async function xT(t,e,n=!1){const r="signIn",i=await PT(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function XD(t,e){return xT(oi(t),e)}/**
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
 */function Vd(t,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function JD(t,e,n){var r;const i=oi(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Xs(i,s,"getOobCode",!0);n&&Vd(i,o,n),await bd(i,o)}else n&&Vd(i,s,n),await bd(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Xs(i,s,"getOobCode",!0);n&&Vd(i,a,n),await bd(i,a)}else return Promise.reject(o)})}async function ZD(t,e,n){var r;const i=oi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Xs(i,s,"signUpPassword");o=Md(i,u)}else o=Md(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Xs(i,s,"signUpPassword");return Md(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ui._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function eN(t,e,n){return XD(De(t),mo.credential(e,n))}/**
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
 */async function tN(t,e){return si(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=De(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ys(r,tN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function nN(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function rN(t,e,n){return De(t).beforeAuthStateChanged(e,n)}const mc="__sak";/**
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
 */class DT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function iN(){const t=At();return tg(t)||oh(t)}const sN=1e3,oN=10;class NT extends DT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iN()&&PD(),this.fallbackToPolling=TT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NT.type="LOCAL";const aN=NT;/**
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
 */class OT extends DT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OT.type="SESSION";const LT=OT;/**
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
 */function lN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ah(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await lN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ah.receivers=[];/**
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
 */function sg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=sg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bn(){return window}function cN(t){Bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function bT(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function hN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fN(){return bT()?self:null}/**
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
 */const MT="firebaseLocalStorageDb",pN=1,gc="firebaseLocalStorage",VT="fbase_key";class fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lh(t,e){return t.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function mN(){const t=indexedDB.deleteDatabase(MT);return new fl(t).toPromise()}function gp(){const t=indexedDB.open(MT,pN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gc,{keyPath:VT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gc)?e(r):(r.close(),await mN(),e(await gp()))})})}async function F_(t,e,n){const r=lh(t,!0).put({[VT]:e,value:n});return new fl(r).toPromise()}async function gN(t,e){const n=lh(t,!1).get(e),r=await new fl(n).toPromise();return r===void 0?null:r.value}function U_(t,e){const n=lh(t,!0).delete(e);return new fl(n).toPromise()}const yN=800,vN=3;class FT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ah._getInstance(fN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hN(),!this.activeServiceWorker)return;this.sender=new uN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gp();return await F_(e,mc,"1"),await U_(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>F_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>U_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lh(i,!1).getAll();return new fl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FT.type="LOCAL";const _N=FT;new cl(3e4,6e4);/**
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
 */function UT(t,e){return e?nr(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class og extends ng{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wN(t){return xT(t.auth,new og(t),t.bypassAuthState)}function EN(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),YD(n,new og(t),t.bypassAuthState)}async function TN(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),QD(n,new og(t),t.bypassAuthState)}/**
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
 */class $T{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wN;case"linkViaPopup":case"linkViaRedirect":return TN;case"reauthViaPopup":case"reauthViaRedirect":return EN;default:hn(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IN=new cl(2e3,1e4);async function RN(t,e,n){const r=oi(t);cD(t,e,ig);const i=UT(r,n);return new wi(r,"signInViaPopup",e,i).executeNotNull()}class wi extends $T{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=sg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IN.get())};e()}}wi.currentPopupAction=null;/**
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
 */const SN="pendingRedirect",ku=new Map;class AN extends $T{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const r=await CN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CN(t,e){const n=xN(e),r=PN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kN(t,e){ku.set(t._key(),e)}function PN(t){return nr(t._redirectPersistence)}function xN(t){return Cu(SN,t.config.apiKey,t.name)}async function DN(t,e,n=!1){const r=oi(t),i=UT(r,e),o=await new AN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const NN=10*60*1e3;class ON{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NN&&this.cachedEventUids.clear(),this.cachedEventUids.has($_(e))}saveEventToCache(e){this.cachedEventUids.add($_(e)),this.lastProcessedEventTime=Date.now()}}function $_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jT(t);default:return!1}}/**
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
 */async function bN(t,e={}){return si(t,"GET","/v1/projects",e)}/**
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
 */const MN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VN=/^https?/;async function FN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bN(t);for(const n of e)try{if(UN(n))return}catch{}hn(t,"unauthorized-domain")}function UN(t){const e=pp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VN.test(n))return!1;if(MN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $N=new cl(3e4,6e4);function j_(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jN(t){return new Promise((e,n)=>{var r,i,s;function o(){j_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{j_(),n(jn(t,"network-request-failed"))},timeout:$N.get()})}if(!((i=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bn().gapi)===null||s===void 0)&&s.load)o();else{const a=DD("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},AT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function BN(t){return Pu=Pu||jN(t),Pu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const zN=new cl(5e3,15e3),HN="__/auth/iframe",WN="emulator/auth/iframe",qN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GN(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zm(e,WN):`https://${t.config.authDomain}/${HN}`,r={apiKey:e.apiKey,appName:t.name,v:Gi},i=KN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ul(r).slice(1)}`}async function QN(t){const e=await BN(t),n=Bn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:GN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=Bn().setTimeout(()=>{s(o)},zN.get());function l(){Bn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const YN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XN=500,JN=600,ZN="_blank",eO="http://localhost";class B_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tO(t,e,n,r=XN,i=JN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();n&&(a=yT(u)?ZN:n),gT(u)&&(e=e||eO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(CD(u)&&a!=="_self")return nO(e||"",a),new B_(null);const h=window.open(e||"",a,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new B_(h)}function nO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rO="__/auth/handler",iO="emulator/auth/handler",sO=encodeURIComponent("fac");async function z_(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gi,eventId:i};if(e instanceof ig){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof dl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${sO}=${encodeURIComponent(l)}`:"";return`${oO(t)}?${ul(a).slice(1)}${u}`}function oO({config:t}){return t.emulator?Zm(t,iO):`https://${t.authDomain}/${rO}`}/**
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
 */const Fd="webStorageSupport";class aO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LT,this._completeRedirectFn=DN,this._overrideRedirectResult=kN}async _openPopup(e,n,r,i){var s;hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await z_(e,n,r,pp(),i);return tO(e,o,sg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await z_(e,n,r,pp(),i);return cN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QN(e),r=new ON(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fd,{type:Fd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fd];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return TT()||tg()||oh()}}const lO=aO;var H_="@firebase/auth",W_="1.1.0";/**
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
 */class uO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hO(t){Vi(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IT(t)},u=new MD(r,i,s,l);return FD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vi(new Jr("auth-internal",e=>{const n=oi(e.getProvider("auth").getImmediate());return(r=>new uO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(H_,W_,cO(t)),$n(H_,W_,"esm2017")}/**
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
 */const dO=5*60,fO=tT("authIdTokenMaxAge")||dO;let q_=null;const pO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fO)return;const i=n==null?void 0:n.token;q_!==i&&(q_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mO(t=Xm()){const e=sh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VD(t,{popupRedirectResolver:lO,persistence:[_N,aN,LT]}),r=tT("authTokenSyncURL");if(r){const s=pO(r);rN(n,s,()=>s(n.currentUser)),nN(n,o=>s(o))}const i=J1("auth");return i&&UD(n,`http://${i}`),n}hO("Browser");/**
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
 */const BT="firebasestorage.googleapis.com",zT="storageBucket",gO=2*60*1e3,yO=10*60*1e3;/**
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
 */class Oe extends Jt{constructor(e,n,r=0){super(Ud(e),`Firebase Storage: ${n} (${Ud(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ud(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Ud(t){return"storage/"+t}function ag(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(be.UNKNOWN,t)}function vO(t){return new Oe(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function _O(t){return new Oe(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(be.UNAUTHENTICATED,t)}function EO(){return new Oe(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TO(t){return new Oe(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IO(){return new Oe(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RO(){return new Oe(be.CANCELED,"User canceled the upload/download.")}function SO(t){return new Oe(be.INVALID_URL,"Invalid URL '"+t+"'.")}function AO(t){return new Oe(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function CO(){return new Oe(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zT+"' property when initializing the app?")}function kO(){return new Oe(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PO(){return new Oe(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xO(t){return new Oe(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yp(t){return new Oe(be.INVALID_ARGUMENT,t)}function HT(){return new Oe(be.APP_DELETED,"The Firebase app was deleted.")}function DO(t){return new Oe(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ca(t,e){return new Oe(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Vo(t){throw new Oe(be.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw AO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},_=n===BT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<y.length;g++){const E=y[g],A=E.regex.exec(e);if(A){const S=A[E.indices.bucket];let N=A[E.indices.path];N||(N=""),r=new Wt(S,N),E.postModify(r);break}}if(r==null)throw SO(e);return r}}class NO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function OO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(w){v||(v=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function LO(t){t(!1)}/**
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
 */function bO(t){return t!==void 0}function MO(t){return typeof t=="object"&&!Array.isArray(t)}function lg(t){return typeof t=="string"||t instanceof String}function K_(t){return ug()&&t instanceof Blob}function ug(){return typeof Blob<"u"&&!Bx()}function G_(t,e,n,r){if(r<e)throw yp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw yp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function uh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function WT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ki;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ki||(ki={}));/**
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
 */function VO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class FO{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Zl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ki.NO_ERROR,l=s.getStatus();if(!a||VO(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ki.ABORT;r(!1,new Zl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Zl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());bO(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ag();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?HT():RO();o(l)}else{const l=IO();o(l)}};this.canceled_?n(!1,new Zl(!1,null,!0)):this.backoffId_=OO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&LO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function UO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $O(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zO(t,e,n,r,i,s,o=!0){const a=WT(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return jO(u,e),UO(u,n),$O(u,s),BO(u,r),new FO(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function HO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WO(...t){const e=HO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ug())return new Blob(t);throw new Oe(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function KO(t){if(typeof atob>"u")throw xO("base-64");return atob(t)}/**
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
 */const bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $d{constructor(e,n){this.data=e,this.contentType=n||null}}function GO(t,e){switch(t){case bn.RAW:return new $d(qT(e));case bn.BASE64:case bn.BASE64URL:return new $d(KT(t,e));case bn.DATA_URL:return new $d(YO(e),XO(e))}throw ag()}function qT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function QO(t){let e;try{e=decodeURIComponent(t)}catch{throw ca(bn.DATA_URL,"Malformed data URL.")}return qT(e)}function KT(t,e){switch(t){case bn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ca(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case bn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ca(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KO(e)}catch(i){throw i.message.includes("polyfill")?i:ca(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class GT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ca(bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function YO(t){const e=new GT(t);return e.base64?KT(bn.BASE64,e.rest):QO(e.rest)}function XO(t){return new GT(t).contentType}function JO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Nr{constructor(e,n){let r=0,i="";K_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(K_(this.data_)){const r=this.data_,i=qO(r,e,n);return i===null?null:new Nr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Nr(r,!0)}}static getBlob(...e){if(ug()){const n=e.map(r=>r instanceof Nr?r.data_:r);return new Nr(WO.apply(null,n))}else{const n=e.map(o=>lg(o)?GO(bn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Nr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function QT(t){let e;try{e=JSON.parse(t)}catch{return null}return MO(e)?e:null}/**
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
 */function ZO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function YT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function tL(t,e){return e}class kt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||tL}}let eu=null;function nL(t){return!lg(t)||t.length<2?t:YT(t)}function XT(){if(eu)return eu;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(s,o){return nL(o)}const n=new kt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new kt("size");return i.xform=r,t.push(i),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),eu=t,eu}function rL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Wt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function iL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return rL(r,t),r}function JT(t,e,n){const r=QT(e);return r===null?null:iL(t,r,n)}function sL(t,e,n,r){const i=QT(e);if(i===null||!lg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=uh(d,n,r),v=WT({alt:"media",token:u});return p+v})[0]}function oL(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class cg{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ZT(t){if(!t)throw ag()}function aL(t,e){function n(r,i){const s=JT(t,i,e);return ZT(s!==null),s}return n}function lL(t,e){function n(r,i){const s=JT(t,i,e);return ZT(s!==null),sL(s,i,t.host,t._protocol)}return n}function eI(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=EO():i=wO():n.getStatus()===402?i=_O(t.bucket):n.getStatus()===403?i=TO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function tI(t){const e=eI(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=vO(t.path)),s.serverResponse=i.serverResponse,s}return n}function uL(t,e,n){const r=e.fullServerUrl(),i=uh(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new cg(i,s,lL(t,n),o);return a.errorHandler=tI(e),a}function cL(t,e){const n=e.fullServerUrl(),r=uh(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new cg(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=tI(e),a}function hL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function dL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=hL(null,e)),r}function fL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let g=0;g<2;g++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=dL(e,r,i),c=oL(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=Nr.getBlob(h,r,d);if(p===null)throw kO();const v={name:u.fullPath},_=uh(s,t.host,t._protocol),w="POST",m=t.maxUploadRetryTime,f=new cg(_,w,aL(t,n),m);return f.urlParams=v,f.headers=o,f.body=p.uploadData(),f.errorHandler=eI(e),f}class pL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ki.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ki.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ki.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Vo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mL extends pL{initXhr(){this.xhr_.responseType="text"}}function hg(){return new mL}/**
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
 */class $i{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $i(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YT(this._location.path)}get storage(){return this._service}get parent(){const e=ZO(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new $i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DO(e)}}function gL(t,e,n){t._throwIfRoot("uploadBytes");const r=fL(t.storage,t._location,XT(),new Nr(e,!0),n);return t.storage.makeRequestWithTokens(r,hg).then(i=>({metadata:i,ref:t}))}function yL(t){t._throwIfRoot("getDownloadURL");const e=uL(t.storage,t._location,XT());return t.storage.makeRequestWithTokens(e,hg).then(n=>{if(n===null)throw PO();return n})}function vL(t){t._throwIfRoot("deleteObject");const e=cL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,hg)}function _L(t,e){const n=eL(t._location.path,e),r=new Wt(t._location.bucket,n);return new $i(t.storage,r)}/**
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
 */function wL(t){return/^[A-Za-z]+:\/\//.test(t)}function EL(t,e){return new $i(t,e)}function nI(t,e){if(t instanceof dg){const n=t;if(n._bucket==null)throw CO();const r=new $i(n,n._bucket);return e!=null?nI(r,e):r}else return e!==void 0?_L(t,e):t}function TL(t,e){if(e&&wL(e)){if(t instanceof dg)return EL(t,e);throw yp("To use ref(service, url), the first argument must be a Storage instance.")}else return nI(t,e)}function Q_(t,e){const n=e==null?void 0:e[zT];return n==null?null:Wt.makeFromBucketSpec(n,t)}function IL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:nT(i,t.app.options.projectId))}class dg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=BT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gO,this._maxUploadRetryTime=yO,this._requests=new Set,i!=null?this._bucket=Wt.makeFromBucketSpec(i,this._host):this._bucket=Q_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=Q_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $i(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new NO(HT());{const o=zO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Y_="@firebase/storage",X_="0.11.2";/**
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
 */const rI="storage";function fg(t,e,n){return t=De(t),gL(t,e,n)}function pg(t){return t=De(t),yL(t)}function J_(t){return t=De(t),vL(t)}function yc(t,e){return t=De(t),TL(t,e)}function RL(t=Xm(),e){t=De(t);const r=sh(t,rI).getImmediate({identifier:e}),i=Z1("storage");return i&&SL(r,...i),r}function SL(t,e,n,r={}){IL(t,e,n,r)}function AL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new dg(n,r,i,e,Gi)}function CL(){Vi(new Jr(rI,AL,"PUBLIC").setMultipleInstances(!0)),$n(Y_,X_,""),$n(Y_,X_,"esm2017")}CL();var kL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,mg=mg||{},Q=kL||self;function ch(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function PL(t){return Object.prototype.hasOwnProperty.call(t,jd)&&t[jd]||(t[jd]=++xL)}var jd="closure_uid_"+(1e9*Math.random()>>>0),xL=0;function DL(t,e,n){return t.call.apply(t.bind,arguments)}function NL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=DL:Tt=NL,Tt.apply(null,arguments)}function tu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ai(){this.s=this.s,this.o=this.o}var OL=0;ai.prototype.s=!1;ai.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),OL!=0)&&PL(this)};ai.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const iI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Z_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ch(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var LL=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function $a(t){return/^[\s\xa0]*$/.test(t)}function hh(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Ln(t){return hh().indexOf(t)!=-1}function yg(t){return yg[" "](t),t}yg[" "]=function(){};function bL(t,e){var n=Cb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ML=Ln("Opera"),Js=Ln("Trident")||Ln("MSIE"),sI=Ln("Edge"),vp=sI||Js,oI=Ln("Gecko")&&!(hh().toLowerCase().indexOf("webkit")!=-1&&!Ln("Edge"))&&!(Ln("Trident")||Ln("MSIE"))&&!Ln("Edge"),VL=hh().toLowerCase().indexOf("webkit")!=-1&&!Ln("Edge");function aI(){var t=Q.document;return t?t.documentMode:void 0}var _p;e:{var Bd="",zd=function(){var t=hh();if(oI)return/rv:([^\);]+)(\)|;)/.exec(t);if(sI)return/Edge\/([\d\.]+)/.exec(t);if(Js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VL)return/WebKit\/(\S+)/.exec(t);if(ML)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zd&&(Bd=zd?zd[1]:""),Js){var Hd=aI();if(Hd!=null&&Hd>parseFloat(Bd)){_p=String(Hd);break e}}_p=Bd}var wp;if(Q.document&&Js){var e0=aI();wp=e0||parseInt(_p,10)||void 0}else wp=void 0;var FL=wp;function ja(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(oI){e:{try{yg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ja.$.h.call(this)}}it(ja,It);var UL={2:"touch",3:"pen",4:"mouse"};ja.prototype.h=function(){ja.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ml="closure_listenable_"+(1e6*Math.random()|0),$L=0;function jL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++$L,this.fa=this.ia=!1}function dh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function vg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function BL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function lI(t){const e={};for(const n in t)e[n]=t[n];return e}const t0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<t0.length;s++)n=t0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fh(t){this.src=t,this.g={},this.h=0}fh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Tp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new jL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ep(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=iI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var _g="closure_lm_"+(1e6*Math.random()|0),Wd={};function cI(t,e,n,r,i){if(r&&r.once)return dI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)cI(t,e[s],n,r,i);return null}return n=Tg(n),t&&t[ml]?t.O(e,n,pl(r)?!!r.capture:!!r,i):hI(t,e,n,!1,r,i)}function hI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=pl(i)?!!i.capture:!!i,a=Eg(t);if(a||(t[_g]=a=new fh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=zL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)LL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(pI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zL(){function t(n){return e.call(t.src,t.listener,n)}const e=HL;return t}function dI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dI(t,e[s],n,r,i);return null}return n=Tg(n),t&&t[ml]?t.P(e,n,pl(r)?!!r.capture:!!r,i):hI(t,e,n,!0,r,i)}function fI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)fI(t,e[s],n,r,i);else r=pl(r)?!!r.capture:!!r,n=Tg(n),t&&t[ml]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Tp(s,n,r,i),-1<n&&(dh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tp(e,n,r,i)),(n=-1<t?e[t]:null)&&wg(n))}function wg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ml])Ep(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Eg(e))?(Ep(n,t),n.h==0&&(n.src=null,e[_g]=null)):dh(t)}}}function pI(t){return t in Wd?Wd[t]:Wd[t]="on"+t}function HL(t,e){if(t.fa)t=!0;else{e=new ja(e,this);var n=t.listener,r=t.la||t.src;t.ia&&wg(t),t=n.call(r,e)}return t}function Eg(t){return t=t[_g],t instanceof fh?t:null}var qd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tg(t){return typeof t=="function"?t:(t[qd]||(t[qd]=function(e){return t.handleEvent(e)}),t[qd])}function rt(){ai.call(this),this.i=new fh(this),this.S=this,this.J=null}it(rt,ai);rt.prototype[ml]=!0;rt.prototype.removeEventListener=function(t,e,n,r){fI(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),uI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=nu(o,r,!0,e)&&i}if(o=e.g=t,i=nu(o,r,!0,e)&&i,i=nu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=nu(o,r,!1,e)&&i}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dh(n[r]);delete t.g[e],t.h--}}this.J=null};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function nu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ep(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ig=Q.JSON.stringify;class WL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qL(){var t=Rg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class KL{constructor(){this.h=this.g=null}add(e,n){const r=mI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var mI=new WL(()=>new GL,t=>t.reset());class GL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function YL(t){Q.setTimeout(()=>{throw t},0)}let Ba,za=!1,Rg=new KL,gI=()=>{const t=Q.Promise.resolve(void 0);Ba=()=>{t.then(XL)}};var XL=()=>{for(var t;t=qL();){try{t.h.call(t.g)}catch(n){YL(n)}var e=mI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}za=!1};function ph(t,e){rt.call(this),this.h=t||1,this.g=e||Q,this.j=Tt(this.qb,this),this.l=Date.now()}it(ph,rt);L=ph.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(Sg(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){ph.$.N.call(this),Sg(this),delete this.g};function Ag(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function yI(t){t.g=Ag(()=>{t.g=null,t.i&&(t.i=!1,yI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JL extends ai{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yI(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ha(t){ai.call(this),this.h=t,this.g={}}it(Ha,ai);var n0=[];function vI(t,e,n,r){Array.isArray(n)||(n&&(n0[0]=n.toString()),n=n0);for(var i=0;i<n.length;i++){var s=cI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function _I(t){vg(t.g,function(e,n){this.g.hasOwnProperty(n)&&wg(e)},t),t.g={}}Ha.prototype.N=function(){Ha.$.N.call(this),_I(this)};Ha.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mh(){this.g=!0}mh.prototype.Ea=function(){this.g=!1};function ZL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function eb(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nb(t,n)+(r?" "+r:"")})}function tb(t,e){t.info(function(){return"TIMEOUT: "+e})}mh.prototype.info=function(){};function nb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ig(n)}catch{return e}}var Yi={},r0=null;function gh(){return r0=r0||new rt}Yi.Ta="serverreachability";function wI(t){It.call(this,Yi.Ta,t)}it(wI,It);function Wa(t){const e=gh();ct(e,new wI(e))}Yi.STAT_EVENT="statevent";function EI(t,e){It.call(this,Yi.STAT_EVENT,t),this.stat=e}it(EI,It);function xt(t){const e=gh();ct(e,new EI(e,t))}Yi.Ua="timingevent";function TI(t,e){It.call(this,Yi.Ua,t),this.size=e}it(TI,It);function gl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var yh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},II={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cg(){}Cg.prototype.h=null;function i0(t){return t.h||(t.h=t.i())}function RI(){}var yl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function kg(){It.call(this,"d")}it(kg,It);function Pg(){It.call(this,"c")}it(Pg,It);var Ip;function vh(){}it(vh,Cg);vh.prototype.g=function(){return new XMLHttpRequest};vh.prototype.i=function(){return{}};Ip=new vh;function vl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ha(this),this.P=rb,t=vp?125:void 0,this.V=new ph(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new SI}function SI(){this.i=null,this.g="",this.h=!1}var rb=45e3,Rp={},vc={};L=vl.prototype;L.setTimeout=function(t){this.P=t};function Sp(t,e,n){t.L=1,t.v=wh(dr(e)),t.s=n,t.S=!0,AI(t,null)}function AI(t,e){t.G=Date.now(),_l(t),t.A=dr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),LI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new SI,t.g=tR(t.l,n?e:null,!t.s),0<t.O&&(t.M=new JL(Tt(t.Pa,t,t.g),t.O)),vI(t.U,t.g,"readystatechange",t.nb),e=t.I?lI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Wa(),ZL(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&Mn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=Mn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||vp||this.g&&(this.h.h||this.g.ja()||l0(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Wa(3):Wa(2)),_h(this);var n=this.g.da();this.ca=n;t:if(CI(this)){var r=l0(this.g);t="";var i=r.length,s=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ei(this),ha(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,eb(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$a(a)){var u=a;break t}}u=null}if(n=u)Es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ap(this,n);else{this.i=!1,this.o=3,xt(12),Ei(this),ha(this);break e}}this.S?(kI(this,c,o),vp&&this.i&&c==3&&(vI(this.U,this.V,"tick",this.mb),this.V.start())):(Es(this.j,this.m,o,null),Ap(this,o)),c==4&&Ei(this),this.i&&!this.J&&(c==4?XI(this.l,this):(this.i=!1,_l(this)))}else Rb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),Ei(this),ha(this)}}}catch{}finally{}};function CI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function kI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=ib(t,n),i==vc){e==4&&(t.o=4,xt(14),r=!1),Es(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Rp){t.o=4,xt(15),Es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Es(t.j,t.m,i,null),Ap(t,i);CI(t)&&i!=vc&&i!=Rp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),bg(e),e.M=!0,xt(11))):(Es(t.j,t.m,n,"[Invalid Chunked Response]"),Ei(t),ha(t))}L.mb=function(){if(this.g){var t=Mn(this.g),e=this.g.ja();this.C<e.length&&(_h(this),kI(this,t,e),this.i&&t!=4&&_l(this))}};function ib(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?vc:(n=Number(e.substring(n,r)),isNaN(n)?Rp:(r+=1,r+n>e.length?vc:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,Ei(this)};function _l(t){t.Y=Date.now()+t.P,PI(t,t.P)}function PI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=gl(Tt(t.lb,t),e)}function _h(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(tb(this.j,this.A),this.L!=2&&(Wa(),xt(17)),Ei(this),this.o=2,ha(this)):PI(this,this.Y-t)};function ha(t){t.l.H==0||t.J||XI(t.l,t)}function Ei(t){_h(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Sg(t.V),_I(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ap(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Cp(n.i,t))){if(!t.K&&Cp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ec(n),Ih(n);else break e;Lg(n),xt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=gl(Tt(n.ib,n),6e3));if(1>=VI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ti(n,11)}else if((t.K||n.g==t)&&Ec(n),!$a(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(xg(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Ee(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=eR(r,r.J?r.pa:null,r.Y),o.K){FI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(_h(a),_l(a)),r.g=o}else QI(r);0<n.j.length&&Rh(n)}else u[0]!="stop"&&u[0]!="close"||Ti(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ti(n,7):Og(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Wa(4)}catch{}}function sb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ch(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ob(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ch(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ch(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ob(t),r=sb(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var DI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ab(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pi){this.h=t.h,_c(this,t.j),this.s=t.s,this.g=t.g,wc(this,t.m),this.l=t.l;var e=t.i,n=new qa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),s0(this,n),this.o=t.o}else t&&(e=String(t).match(DI))?(this.h=!1,_c(this,e[1]||"",!0),this.s=Ko(e[2]||""),this.g=Ko(e[3]||"",!0),wc(this,e[4]),this.l=Ko(e[5]||"",!0),s0(this,e[6]||"",!0),this.o=Ko(e[7]||"")):(this.h=!1,this.i=new qa(null,this.h))}Pi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Go(e,o0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Go(e,o0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Go(n,n.charAt(0)=="/"?cb:ub,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Go(n,db)),t.join("")};function dr(t){return new Pi(t)}function _c(t,e,n){t.j=n?Ko(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function s0(t,e,n){e instanceof qa?(t.i=e,fb(t.i,t.h)):(n||(e=Go(e,hb)),t.i=new qa(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function wh(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ko(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Go(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var o0=/[#\/\?@]/g,ub=/[#\?:]/g,cb=/[#\?]/g,hb=/[#\?@]/g,db=/#/g;function qa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function li(t){t.g||(t.g=new Map,t.h=0,t.i&&ab(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=qa.prototype;L.add=function(t,e){li(this),this.i=null,t=go(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function NI(t,e){li(t),e=go(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function OI(t,e){return li(t),e=go(t,e),t.g.has(e)}L.forEach=function(t,e){li(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){li(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){li(this);let e=[];if(typeof t=="string")OI(this,t)&&(e=e.concat(this.g.get(go(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return li(this),this.i=null,t=go(this,t),OI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function LI(t,e,n){NI(t,e),0<n.length&&(t.i=null,t.g.set(go(t,e),gg(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function go(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fb(t,e){e&&!t.j&&(li(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(NI(this,r),LI(this,i,n))},t)),t.j=e}var pb=class{constructor(t,e){this.g=t,this.map=e}};function bI(t){this.l=t||mb,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mb=10;function MI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function VI(t){return t.h?1:t.g?t.g.size:0}function Cp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xg(t,e){t.g?t.g.add(e):t.h=e}function FI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bI.prototype.cancel=function(){if(this.i=UI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function UI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return gg(t.i)}var gb=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function yb(){this.g=new gb}function vb(t,e,n){const r=n||"";try{xI(t,function(i,s){let o=i;pl(i)&&(o=Ig(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _b(t,e){const n=new mh;if(Q.Image){const r=new Image;r.onload=tu(ru,n,r,"TestLoadImage: loaded",!0,e),r.onerror=tu(ru,n,r,"TestLoadImage: error",!1,e),r.onabort=tu(ru,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=tu(ru,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ru(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wl(t){this.l=t.fc||null,this.j=t.ob||!1}it(wl,Cg);wl.prototype.g=function(){return new Eh(this.l,this.j)};wl.prototype.i=function(t){return function(){return t}}({});function Eh(t,e){rt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Dg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Eh,rt);var Dg=0;L=Eh.prototype;L.open=function(t,e){if(this.readyState!=Dg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ka(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,El(this)),this.readyState=Dg};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ka(this)),this.g&&(this.readyState=3,Ka(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$I(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function $I(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?El(this):Ka(this),this.readyState==3&&$I(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,El(this))};L.Ya=function(t){this.g&&(this.response=t,El(this))};L.ka=function(){this.g&&El(this)};function El(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ka(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ka(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Eh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wb=Q.JSON.parse;function Me(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jI,this.L=this.M=!1}it(Me,rt);var jI="",Eb=/^https?$/i,Tb=["POST","PUT"];L=Me.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ip.g(),this.C=this.u?i0(this.u):i0(Ip),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){a0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=iI(Tb,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{HI(this),0<this.B&&((this.L=Ib(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=Ag(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){a0(this,s)}};function Ib(t){return Js&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof mg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function a0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,BI(t),Th(t)}function BI(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Th(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Th(this,!0)),Me.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?zI(this):this.kb())};L.kb=function(){zI(this)};function zI(t){if(t.h&&typeof mg<"u"&&(!t.C[1]||Mn(t)!=4||t.da()!=2)){if(t.v&&Mn(t)==4)Ag(t.La,0,t);else if(ct(t,"readystatechange"),Mn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(DI)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!Eb.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<Mn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",BI(t)}}finally{Th(t)}}}}function Th(t,e){if(t.g){HI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function HI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function Mn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wb(e)}};function l0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Rb(t){const e={};t=(t.g&&2<=Mn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if($a(t[r]))continue;var n=QL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}BL(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function WI(t){let e="";return vg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ng(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=WI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Fo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qI(t){this.Ga=0,this.j=[],this.l=new mh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fo("baseRetryDelayMs",5e3,t),this.hb=Fo("retryDelaySeedMs",1e4,t),this.eb=Fo("forwardChannelMaxRetries",2,t),this.xa=Fo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new bI(t&&t.concurrentRequestLimit),this.Ja=new yb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=qI.prototype;L.ra=8;L.H=1;function Og(t){if(KI(t),t.H==3){var e=t.W++,n=dr(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Tl(t,n),e=new vl(t,t.l,e),e.L=2,e.v=wh(dr(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=tR(e.l,null),e.g.ha(e.v)),e.G=Date.now(),_l(e)}ZI(t)}function Ih(t){t.g&&(bg(t),t.g.cancel(),t.g=null)}function KI(t){Ih(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Ec(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Rh(t){if(!MI(t.i)&&!t.m){t.m=!0;var e=t.Na;Ba||gI(),za||(Ba(),za=!0),Rg.add(e,t),t.C=0}}function Sb(t,e){return VI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=gl(Tt(t.Na,t,e),JI(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new vl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=lI(s),uI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=GI(this,i,e),n=dr(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),Tl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(WI(s)))+"&"+e:this.o&&Ng(n,this.o,s)),xg(this.i,i),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),i.aa=!0,Sp(i,n,null)):Sp(i,n,e),this.H=2}}else this.H==3&&(t?u0(this,t):this.j.length==0||MI(this.i)||u0(this))};function u0(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),Tl(t,r),t.o&&t.s&&Ng(r,t.o,t.s),n=new vl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=GI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xg(t.i,n),Sp(n,r,e)}function Tl(t,e){t.na&&vg(t.na,function(n,r){Ee(e,r,n)}),t.h&&xI({},function(n,r){Ee(e,r,n)})}function GI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Tt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{vb(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function QI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ba||gI(),za||(Ba(),za=!0),Rg.add(e,t),t.A=0}}function Lg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=gl(Tt(t.Ma,t),JI(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,YI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=gl(Tt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xt(10),Ih(this),YI(this))};function bg(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function YI(t){t.g=new vl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),Tl(t,e),t.o&&t.s&&Ng(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=wh(dr(e)),n.s=null,n.S=!0,AI(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Ih(this),Lg(this),xt(19))};function Ec(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function XI(t,e){var n=null;if(t.g==e){Ec(t),bg(t),t.g=null;var r=2}else if(Cp(t.i,e))n=e.F,FI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=gh(),ct(r,new TI(r,n)),Rh(t)}else QI(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Sb(t,e)||r==2&&Lg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ti(t,5);break;case 4:Ti(t,10);break;case 3:Ti(t,6);break;default:Ti(t,2)}}}function JI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ti(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Tt(t.pb,t);n||(n=new Pi("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||_c(n,"https"),wh(n)),_b(n.toString(),r)}else xt(2);t.H=0,t.h&&t.h.za(e),ZI(t),KI(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),xt(2)):(this.l.info("Failed to ping google.com"),xt(1))};function ZI(t){if(t.H=0,t.ma=[],t.h){const e=UI(t.i);(e.length!=0||t.j.length!=0)&&(Z_(t.ma,e),Z_(t.ma,t.j),t.i.i.length=0,gg(t.j),t.j.length=0),t.h.ya()}}function eR(t,e,n){var r=n instanceof Pi?dr(n):new Pi(n);if(r.g!="")e&&(r.g=e+"."+r.g),wc(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pi(null);r&&_c(s,r),e&&(s.g=e),i&&wc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),Tl(t,r),r}function tR(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Me(new wl({ob:!0})):new Me(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function nR(){}L=nR.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Tc(){if(Js&&!(10<=Number(FL)))throw Error("Environmental error: no available transport.")}Tc.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){rt.call(this),this.g=new qI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!$a(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$a(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yo(this)}it(Qt,rt);Qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=eR(t,null,t.Y),Rh(t)};Qt.prototype.close=function(){Og(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ig(t),t=n);e.j.push(new pb(e.fb++,t)),e.H==3&&Rh(e)};Qt.prototype.N=function(){this.g.h=null,delete this.j,Og(this.g),delete this.g,Qt.$.N.call(this)};function rR(t){kg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(rR,kg);function iR(){Pg.call(this),this.status=1}it(iR,Pg);function yo(t){this.g=t}it(yo,nR);yo.prototype.Ba=function(){ct(this.g,"a")};yo.prototype.Aa=function(t){ct(this.g,new rR(t))};yo.prototype.za=function(t){ct(this.g,new iR)};yo.prototype.ya=function(){ct(this.g,"b")};function Ab(){this.blockSize=-1}function Sn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(Sn,Ab);Sn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Kd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Sn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Kd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Kd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Kd(this,r),i=0;break}}this.h=i,this.i+=e};Sn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var Cb={};function Mg(t){return-128<=t&&128>t?bL(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Vn(t){if(isNaN(t)||!isFinite(t))return Ds;if(0>t)return lt(Vn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=kp;return new de(e,0)}function sR(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(sR(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Vn(Math.pow(e,8)),r=Ds,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Vn(Math.pow(e,s)),r=r.R(s).add(Vn(o))):(r=r.R(n),r=r.add(Vn(o)))}return r}var kp=4294967296,Ds=Mg(0),Pp=Mg(1),c0=Mg(16777216);L=de.prototype;L.ea=function(){if(sn(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:kp+r)*e,e*=kp}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(rr(this))return"0";if(sn(this))return"-"+lt(this).toString(t);for(var e=Vn(Math.pow(t,6)),n=this,r="";;){var i=Rc(n,e).g;n=Ic(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,rr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function rr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function sn(t){return t.h==-1}L.X=function(t){return t=Ic(this,t),sn(t)?-1:rr(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(Pp)}L.abs=function(){return sn(this)?lt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new de(n,n[n.length-1]&-2147483648?-1:0)};function Ic(t,e){return t.add(lt(e))}L.R=function(t){if(rr(this)||rr(t))return Ds;if(sn(this))return sn(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(sn(t))return lt(this.R(lt(t)));if(0>this.X(c0)&&0>t.X(c0))return Vn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,iu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,iu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,iu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,iu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function iu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Uo(t,e){this.g=t,this.h=e}function Rc(t,e){if(rr(e))throw Error("division by zero");if(rr(t))return new Uo(Ds,Ds);if(sn(t))return e=Rc(lt(t),e),new Uo(lt(e.g),lt(e.h));if(sn(e))return e=Rc(t,lt(e)),new Uo(lt(e.g),e.h);if(30<t.g.length){if(sn(t)||sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Pp,r=e;0>=r.X(t);)n=h0(n),r=h0(r);var i=ns(n,1),s=ns(r,1);for(r=ns(r,2),n=ns(n,2);!rr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ns(r,1),n=ns(n,1)}return e=Ic(t,i.R(e)),new Uo(i,e)}for(i=Ds;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Vn(n),o=s.R(e);sn(o)||0<o.X(t);)n-=r,s=Vn(n),o=s.R(e);rr(s)&&(s=Pp),i=i.add(s),t=Ic(t,o)}return new Uo(i,t)}L.gb=function(t){return Rc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function h0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function ns(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new de(i,t.h)}Tc.prototype.createWebChannel=Tc.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;yh.NO_ERROR=0;yh.TIMEOUT=8;yh.HTTP_ERROR=6;II.COMPLETE="complete";RI.EventType=yl;yl.OPEN="a";yl.CLOSE="b";yl.ERROR="c";yl.MESSAGE="d";rt.prototype.listen=rt.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;Sn.prototype.digest=Sn.prototype.l;Sn.prototype.reset=Sn.prototype.reset;Sn.prototype.update=Sn.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Vn;de.fromString=sR;var kb=function(){return new Tc},Pb=function(){return gh()},Gd=yh,xb=II,Db=Yi,d0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Nb=wl,su=RI,Ob=Me,Lb=Sn,Ns=de;const f0="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let vo="10.1.0";/**
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
 */const ji=new Qm("@firebase/firestore");function p0(){return ji.logLevel}function F(t,...e){if(ji.logLevel<=le.DEBUG){const n=e.map(Vg);ji.debug(`Firestore (${vo}): ${t}`,...n)}}function fr(t,...e){if(ji.logLevel<=le.ERROR){const n=e.map(Vg);ji.error(`Firestore (${vo}): ${t}`,...n)}}function Zs(t,...e){if(ji.logLevel<=le.WARN){const n=e.map(Vg);ji.warn(`Firestore (${vo}): ${t}`,...n)}}function Vg(t){if(typeof t=="string")return t;try{/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Re(t,e){t||K()}function ee(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class oR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class Mb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vb{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new oR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new yt(e)}}class Fb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ub{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Fb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new $b(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Bb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class aR{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Bb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Xe(0,0))}static max(){return new X(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ga{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ga.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ga?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ga{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const zb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Ga{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return zb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Te.fromString(e))}static fromName(e){return new j(Te.fromString(e).popFirst(5))}static empty(){return new j(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Te(e.slice()))}}function Hb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Zr(i,j.empty(),e)}function Wb(t){return new Zr(t.readTime,t.key,-1)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(X.min(),j.empty(),-1)}static max(){return new Zr(X.max(),j.empty(),-1)}}function qb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const Kb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Il(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==Kb)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Rl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Fg.ae=-1;function Sh(t){return t==null}function Sc(t){return t===0&&1/t==-1/0}function Qb(t){return typeof t=="number"&&Number.isInteger(t)&&!Sc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function m0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ou(this.root,e,this.comparator,!0)}}class ou{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new g0(this.data.getIterator())}getIteratorFrom(e){return new g0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class g0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new Rt(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class uR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new uR("Invalid base64 string: "+s):s}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const Yb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ei(t){if(Re(!!t),typeof t=="string"){let e=0;const n=Yb.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
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
 */function Ug(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $g(t){const e=t.mapValue.fields.__previous_value__;return Ug(e)?$g(e):e}function Qa(t){const e=ei(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class Xb{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ya{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ya("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ya&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const au={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ug(t)?4:Jb(t)?9007199254740991:10:K()}function Wn(t,e){if(t===e)return!0;const n=zi(t);if(n!==zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qa(t).isEqual(Qa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ei(i.timestampValue),a=ei(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?Sc(o)===Sc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return eo(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(m0(o)!==m0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wn(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function Xa(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function to(t,e){if(t===e)return 0;const n=zi(t),r=zi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return y0(t.timestampValue,e.timestampValue);case 4:return y0(Qa(t),Qa(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Bi(s),l=Bi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ue(a[u],l[u]);if(c!==0)return c}return ue(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Be(s.latitude),Be(o.latitude));return a!==0?a:ue(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=to(a[u],l[u]);if(c)return c}return ue(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===au.mapValue&&o===au.mapValue)return 0;if(s===au.mapValue)return 1;if(o===au.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ue(l[h],c[h]);if(d!==0)return d;const p=to(a[l[h]],u[c[h]]);if(p!==0)return p}return ue(l.length,c.length)}(t.mapValue,e.mapValue);default:throw K()}}function y0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=ei(t),r=ei(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function no(t){return xp(t)}function xp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=xp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xp(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function v0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dp(t){return!!t&&"integerValue"in t}function jg(t){return!!t&&"arrayValue"in t}function _0(t){return!!t&&"nullValue"in t}function w0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xu(t){return!!t&&"mapValue"in t}function da(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=da(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Jb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=da(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=da(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(da(this.value))}}function cR(t){const e=[];return Xi(t.fields,(n,r)=>{const i=new wt([n]);if(xu(r)){const s=cR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,X.min(),X.min(),X.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,X.min(),X.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,X.min(),X.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ac{constructor(e,n){this.position=e,this.inclusive=n}}function E0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=to(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function T0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Os{constructor(e,n="asc"){this.field=e,this.dir=n}}function Zb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hR{}class We extends hR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tM(e,n,r):n==="array-contains"?new iM(e,r):n==="in"?new sM(e,r):n==="not-in"?new oM(e,r):n==="array-contains-any"?new aM(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nM(e,r):new rM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(to(n,this.value)):n!==null&&zi(this.value)===zi(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class An extends hR{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new An(e,n)}matches(e){return dR(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function dR(t){return t.op==="and"}function fR(t){return eM(t)&&dR(t)}function eM(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function Np(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+no(t.value);if(fR(t))return t.filters.map(e=>Np(e)).join(",");{const e=t.filters.map(n=>Np(n)).join(",");return`${t.op}(${e})`}}function pR(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Wn(r.value,i.value)}(t,e):t instanceof An?function(r,i){return i instanceof An&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&pR(o,i.filters[a]),!0):!1}(t,e):void K()}function mR(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${no(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(mR).join(" ,")+"}"}(t):"Filter"}class tM extends We{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class nM extends We{constructor(e,n){super(e,"in",n),this.keys=gR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rM extends We{constructor(e,n){super(e,"not-in",n),this.keys=gR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class iM extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jg(n)&&Xa(n.arrayValue,this.value)}}class sM extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xa(this.value.arrayValue,n)}}class oM extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xa(this.value.arrayValue,n)}}class aM extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xa(this.value.arrayValue,r))}}/**
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
 */class lM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function I0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lM(t,e,n,r,i,s,o)}function Bg(t){const e=ee(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Np(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>no(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>no(r)).join(",")),e.he=n}return e.he}function zg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!T0(t.startAt,e.startAt)&&T0(t.endAt,e.endAt)}function Op(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class _o{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function uM(t,e,n,r,i,s,o,a){return new _o(t,e,n,r,i,s,o,a)}function Hg(t){return new _o(t)}function R0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ah(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function yR(t){return t.collectionGroup!==null}function Ls(t){const e=ee(t);if(e.Pe===null){e.Pe=[];const n=Ah(e),r=Wg(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Os(n)),e.Pe.push(new Os(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Os(wt.keyField(),s))}}}return e.Pe}function pr(t){const e=ee(t);if(!e.Ie)if(e.limitType==="F")e.Ie=I0(e.path,e.collectionGroup,Ls(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ls(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Os(s.field,o))}const r=e.endAt?new Ac(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ac(e.startAt.position,e.startAt.inclusive):null;e.Ie=I0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function Lp(t,e){e.getFirstInequalityField(),Ah(t);const n=t.filters.concat([e]);return new _o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Cc(t,e,n){return new _o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ch(t,e){return zg(pr(t),pr(e))&&t.limitType===e.limitType}function vR(t){return`${Bg(pr(t))}|lt:${t.limitType}`}function bp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>mR(i)).join(", ")}]`),Sh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>no(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>no(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function kh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=E0(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ls(r),i)||r.endAt&&!function(o,a,l){const u=E0(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ls(r),i))}(t,e)}function cM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _R(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const s=hM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hM(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?to(l,u):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class wo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lR(this.inner)}size(){return this.innerSize}}/**
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
 */const dM=new Ne(j.comparator);function mr(){return dM}const wR=new Ne(j.comparator);function Qo(...t){let e=wR;for(const n of t)e=e.insert(n.key,n);return e}function ER(t){let e=wR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ii(){return fa()}function TR(){return fa()}function fa(){return new wo(t=>t.toString(),(t,e)=>t.isEqual(e))}const fM=new Ne(j.comparator),pM=new Rt(j.comparator);function re(...t){let e=pM;for(const n of t)e=e.add(n);return e}const mM=new Rt(ue);function gM(){return mM}/**
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
 */function IR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function RR(t){return{integerValue:""+t}}function yM(t,e){return Qb(e)?RR(e):IR(t,e)}/**
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
 */class Ph{constructor(){this._=void 0}}function vM(t,e,n){return t instanceof kc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ug(s)&&(s=$g(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ja?AR(t,e):t instanceof Za?CR(t,e):function(i,s){const o=SR(i,s),a=S0(o)+S0(i.Te);return Dp(o)&&Dp(i.Te)?RR(a):IR(i.serializer,a)}(t,e)}function _M(t,e,n){return t instanceof Ja?AR(t,e):t instanceof Za?CR(t,e):n}function SR(t,e){return t instanceof Pc?function(r){return Dp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class kc extends Ph{}class Ja extends Ph{constructor(e){super(),this.elements=e}}function AR(t,e){const n=kR(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Za extends Ph{constructor(e){super(),this.elements=e}}function CR(t,e){let n=kR(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class Pc extends Ph{constructor(e,n){super(),this.serializer=e,this.Te=n}}function S0(t){return Be(t.integerValue||t.doubleValue)}function kR(t){return jg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ja&&i instanceof Ja||r instanceof Za&&i instanceof Za?eo(r.elements,i.elements,Wn):r instanceof Pc&&i instanceof Pc?Wn(r.Te,i.Te):r instanceof kc&&i instanceof kc}(t.transform,e.transform)}class EM{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Du(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xh{}function PR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qg(t.key,In.none()):new Sl(t.key,t.data,In.none());{const n=t.data,r=Vt.empty();let i=new Rt(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new qt(i.toArray()),In.none())}}function TM(t,e,n){t instanceof Sl?function(i,s,o){const a=i.value.clone(),l=C0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!Du(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=C0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(xR(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pa(t,e,n,r){return t instanceof Sl?function(s,o,a,l){if(!Du(s.precondition,o))return a;const u=s.value.clone(),c=k0(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,a,l){if(!Du(s.precondition,o))return a;const u=k0(s.fieldTransforms,l,o),c=o.data;return c.setAll(xR(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Du(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function IM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=SR(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function A0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&eo(r,i,(s,o)=>wM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Sl extends xh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends xh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function C0(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_M(o,a,n[i]))}return r}function k0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vM(s,o,e))}return r}class qg extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RM extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=TR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=PR(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,(n,r)=>A0(n,r))&&eo(this.baseMutations,e.baseMutations,(n,r)=>A0(n,r))}}class Kg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=function(){return fM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kg(e,n,r,i)}}/**
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
 */class AM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,se;function kM(t){switch(t){default:return K();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function DR(t){if(t===void 0)return fr("GRPC error has no .code"),C.UNKNOWN;switch(t){case $e.OK:return C.OK;case $e.CANCELLED:return C.CANCELLED;case $e.UNKNOWN:return C.UNKNOWN;case $e.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case $e.INTERNAL:return C.INTERNAL;case $e.UNAVAILABLE:return C.UNAVAILABLE;case $e.UNAUTHENTICATED:return C.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case $e.NOT_FOUND:return C.NOT_FOUND;case $e.ALREADY_EXISTS:return C.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return C.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case $e.ABORTED:return C.ABORTED;case $e.OUT_OF_RANGE:return C.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return C.UNIMPLEMENTED;case $e.DATA_LOSS:return C.DATA_LOSS;default:return K()}}(se=$e||($e={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Gg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return lu}static getOrCreateInstance(){return lu===null&&(lu=new Gg),lu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let lu=null;/**
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
 */function PM(){return new TextEncoder}/**
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
 */const xM=new Ns([4294967295,4294967295],0);function P0(t){const e=PM().encode(t),n=new Lb;return n.update(e),new Uint8Array(n.digest())}function x0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ns([n,r],0),new Ns([i,s],0)]}class Qg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yo(`Invalid padding: ${n}`);if(r<0)throw new Yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yo(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ns.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ns.fromNumber(r)));return i.compare(xM)===1&&(i=new Ns([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=P0(e),[r,i]=x0(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=P0(e),[r,i]=x0(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Dh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dh(X.min(),i,new Ne(ue),mr(),re())}}class Al{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Al(r,n,re(),re(),re())}}/**
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
 */class Nu{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class NR{constructor(e,n){this.targetId=e,this.pe=n}}class OR{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class D0{constructor(){this.ye=0,this.we=O0(),this.Se=Ct.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=re(),n=re(),r=re();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Al(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=O0()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class DM{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=mr(),this.$e=N0(),this.Ue=new Ne(ue)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Op(a))if(s===0){const l=new j(a.path);this.ze(i,l,_t.newNoDocument(l,X.min()))}else Re(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Gg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,v){var _,w,m,f,y,g;const E={localCacheCount:p,existenceFilterCount:v.count},A=v.unchangedNames;return A&&(E.bloomFilter={applied:h===0,hashCount:(_=A==null?void 0:A.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(m=(w=A==null?void 0:A.bits)===null||w===void 0?void 0:w.bitmap)===null||m===void 0?void 0:m.length)!==null&&f!==void 0?f:0,padding:(g=(y=A==null?void 0:A.bits)===null||y===void 0?void 0:y.padding)!==null&&g!==void 0?g:0},d&&(E.bloomFilter.mightContain=d)),E}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Bi(s).toUint8Array()}catch(h){if(h instanceof uR)return Zs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Qg(l,o,a)}catch(h){return Zs(h instanceof Yo?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Op(a.target)){const l=new j(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,_t.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=re();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Dh(e,n,this.Ue,this.Ke,r);return this.Ke=mr(),this.$e=N0(),this.Ue=new Ne(ue),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new D0,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Rt(ue),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new D0),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function N0(){return new Ne(j.comparator)}function O0(){return new Ne(j.comparator)}const NM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),OM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LM=(()=>({and:"AND",or:"OR"}))();class bM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mp(t,e){return t.useProto3Json||Sh(e)?e:{value:e}}function xc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MM(t,e){return xc(t,e.toTimestamp())}function zn(t){return Re(!!t),X.fromTimestamp(function(n){const r=ei(n);return new Xe(r.seconds,r.nanos)}(t))}function Yg(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function bR(t){const e=Te.fromString(t);return Re(UR(e)),e}function Vp(t,e){return Yg(t.databaseId,e.path)}function Qd(t,e){const n=bR(e);if(n.get(1)!==t.databaseId.projectId)throw new b(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(MR(n))}function Fp(t,e){return Yg(t.databaseId,e)}function VM(t){const e=bR(t);return e.length===4?Te.emptyPath():MR(e)}function Up(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MR(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function L0(t,e,n){return{name:Vp(t,e),fields:n.value.mapValue.fields}}function FM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Re(c===void 0||typeof c=="string"),Ct.fromBase64String(c||"")):(Re(c===void 0||c instanceof Uint8Array),Ct.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?C.UNKNOWN:DR(u.code);return new b(c,u.message||"")}(o);n=new OR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qd(t,r.document.name),s=zn(r.document.updateTime),o=r.document.createTime?zn(r.document.createTime):X.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Nu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qd(t,r.document),s=r.readTime?zn(r.readTime):X.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Nu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qd(t,r.document),s=r.removedTargetIds||[];n=new Nu([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CM(i,s),a=r.targetId;n=new NR(a,o)}}return n}function UM(t,e){let n;if(e instanceof Sl)n={update:L0(t,e.key,e.value)};else if(e instanceof qg)n={delete:Vp(t,e.key)};else if(e instanceof ui)n={update:L0(t,e.key,e.data),updateMask:GM(e.fieldMask)};else{if(!(e instanceof RM))return K();n={verify:Vp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof kc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Za)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function $M(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?zn(i.updateTime):zn(s);return o.isEqual(X.min())&&(o=zn(s)),new EM(o,i.transformResults||[])}(n,e))):[]}function jM(t,e){return{documents:[Fp(t,e.path)]}}function BM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return FR(An.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:is(h.field),direction:WM(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Mp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function zM(t){let e=VM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=VR(h);return d instanceof An&&fR(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Os(ss(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Sh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Ac(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new Ac(p,d)}(n.endAt)),uM(e,i,o,s,a,"F",l,u)}function HM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function VR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ss(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ss(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return We.create(ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>VR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function WM(t){return NM[t]}function qM(t){return OM[t]}function KM(t){return LM[t]}function is(t){return{fieldPath:t.canonicalString()}}function ss(t){return wt.fromServerFormat(t.fieldPath)}function FR(t){return t instanceof We?function(n){if(n.op==="=="){if(w0(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NAN"}};if(_0(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(w0(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NAN"}};if(_0(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(n.field),op:qM(n.op),value:n.value}}}(t):t instanceof An?function(n){const r=n.getFilters().map(i=>FR(i));return r.length===1?r[0]:{compositeFilter:{op:KM(n.op),filters:r}}}(t):K()}function GM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function UR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class br{constructor(e,n,r,i,s=X.min(),o=X.min(),a=Ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QM{constructor(e){this.ct=e}}function YM(t){const e=zM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cc(e,e.limit,"L"):e}/**
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
 */class XM{constructor(){this.sn=new JM}addToCollectionParentIndex(e,n){return this.sn.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(Zr.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class JM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Rt(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Rt(Te.comparator)).toArray()}}/**
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
 */class ro{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new ro(0)}static On(){return new ro(-1)}}/**
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
 */class ZM{constructor(){this.changes=new wo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pa(r.mutation,i,qt.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Ii();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ii();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=mr();const o=fa(),a=function(){return fa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ui)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),pa(c.mutation,u,c.mutation.getFieldMask(),Xe.now())):o.set(u.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new eV(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fa();let i=new Ne((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||qt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=TR();c.forEach(d=>{if(!s.has(d)){const p=PR(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(Ii());let a=-1,l=s;return o.next(u=>D.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?D.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,re())).next(c=>({batchId:a,changes:ER(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=Qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Qo();return this.indexManager.getCollectionParents(e,i).next(o=>D.forEach(o,a=>{const l=function(c,h){return new _o(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,_t.newInvalidDocument(u)))});let o=Qo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&pa(u.mutation,l,qt.empty(),Xe.now()),kh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class nV{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return D.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:zn(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:YM(i.bundledQuery),readTime:zn(i.readTime)}}(n)),D.resolve()}}/**
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
 */class rV{constructor(){this.overlays=new Ne(j.comparator),this.cr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ii();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=Ii(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ii(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ii(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AM(n,r));let s=this.cr.get(n);s===void 0&&(s=re(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class Xg{constructor(){this.lr=new Rt(Ze.hr),this.Pr=new Rt(Ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ze(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new j(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new j(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=re();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return j.comparator(e.key,n.key)||ue(e.mr,n.mr)}static Ir(e,n){return ue(e.mr,n.mr)||j.comparator(e.key,n.key)}}/**
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
 */class iV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Rt(Ze.hr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(ue);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),D.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new j(s),0);let a=new Rt(ue);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),D.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return D.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.pr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sV{constructor(e){this.Dr=e,this.docs=function(){return new Ne(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=mr();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qb(Wb(c),r)<=0||(i.has(c.key)||kh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}vr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oV(this)}getSize(e){return D.resolve(this.size)}}class oV extends ZM{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class aV{constructor(e){this.persistence=e,this.Cr=new wo(n=>Bg(n),zg),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Xg,this.targetCount=0,this.Or=ro.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),D.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Ln(n),D.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Mr.containsKey(n))}}/**
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
 */class lV{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Fg(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new aV(this),this.indexManager=new XM,this.remoteDocumentCache=function(i){return new sV(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new QM(n),this.Qr=new nV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new iV(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new uV(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return D.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class uV extends Gb{constructor(e){super(),this.currentSequenceNumber=e}}class Jg{constructor(e){this.persistence=e,this.Wr=new Xg,this.Gr=null}static zr(e){return new Jg(e)}get jr(){if(this.Gr)return this.Gr;throw K()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.jr,r=>{const i=j.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return D.or([()=>D.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class Zg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zg(e,n.fromCache,r,i)}}/**
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
 */class cV{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(R0(n))return D.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Cc(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,Cc(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return R0(n)||i.isEqual(X.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(p0()<=le.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bp(n)),this.ji(e,o,n,Hb(i,-1)))})}Gi(e,n){let r=new Rt(_R(e));return n.forEach((i,s)=>{kh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return p0()<=le.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",bp(n)),this.Ki.getDocumentsMatchingQuery(e,n,Zr.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class hV{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ne(ue),this.Yi=new wo(s=>Bg(s),zg),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tV(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function dV(t,e,n,r){return new hV(t,e,n,r)}async function $R(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function fV(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=D.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);Re(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jR(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function pV(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ct.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(_,w,m){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,c)&&a.push(n.kr.updateTargetData(s,p))});let l=mr(),u=re();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(mV(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(X.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function mV(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=mr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function gV(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yV(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function $p(t,e,n){const r=ee(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rl(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function b0(t,e,n){const r=ee(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=ee(l),d=h.Yi.get(c);return d!==void 0?D.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(a=>(vV(r,cM(e),a),{documents:a,ss:s})))}function vV(t,e,n){let r=t.Zi.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class M0{constructor(){this.activeTargetIds=gM()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _V{constructor(){this.Hs=new M0,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new M0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wV{Ys(e){}shutdown(){}}/**
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
 */class V0{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uu=null;function Yd(){return uu===null?uu=function(){return 268435456+Math.round(2147483648*Math.random())}():uu++,"0x"+uu.toString(16)}/**
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
 */const EV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class TV{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const gt="WebChannelConnection";class IV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Yd(),l=this.mo(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(F("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Zs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=EV[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=Yd();return new Promise((o,a)=>{const l=new Ob;l.setWithCredentials(!0),l.listenOnce(xb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Gd.NO_ERROR:const c=l.getResponseJson();F(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Gd.TIMEOUT:F(gt,`RPC '${e}' ${s} timed out`),a(new b(C.DEADLINE_EXCEEDED,"Request time out"));break;case Gd.HTTP_ERROR:const h=l.getStatus();if(F(gt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(m)>=0?m:C.UNKNOWN}(p.status);a(new b(v,p.message))}else a(new b(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(C.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F(gt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Yd(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kb(),a=Pb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Nb({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");F(gt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const v=new TV({so:w=>{p?F(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(F(gt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),F(gt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),_=(w,m,f)=>{w.listen(m,y=>{try{f(y)}catch(g){setTimeout(()=>{throw g},0)}})};return _(h,su.EventType.OPEN,()=>{p||F(gt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,su.EventType.CLOSE,()=>{p||(p=!0,F(gt,`RPC '${e}' stream ${i} transport closed`),v.Po())}),_(h,su.EventType.ERROR,w=>{p||(p=!0,Zs(gt,`RPC '${e}' stream ${i} transport errored:`,w),v.Po(new b(C.UNAVAILABLE,"The operation could not be completed")))}),_(h,su.EventType.MESSAGE,w=>{var m;if(!p){const f=w.data[0];Re(!!f);const y=f,g=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(g){F(gt,`RPC '${e}' stream ${i} received error:`,g);const E=g.status;let A=function(Z){const B=$e[Z];if(B!==void 0)return DR(B)}(E),S=g.message;A===void 0&&(A=C.INTERNAL,S="Unknown error status: "+E+" with message "+g.message),p=!0,v.Po(new b(A,S)),h.close()}else F(gt,`RPC '${e}' stream ${i} received:`,f),v.Io(f)}}),_(a,Db.STAT_EVENT,w=>{w.stat===d0.PROXY?F(gt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===d0.NOPROXY&&F(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function Xd(){return typeof document<"u"?document:null}/**
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
 */function Nh(t){return new bM(t,!0)}/**
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
 */class BR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class zR{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new BR(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new b(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RV extends zR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=FM(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?zn(o.readTime):X.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Up(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Op(l)?{documents:jM(s,l)}:{query:BM(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=LR(s,o.resumeToken);const u=Mp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=xc(s,o.snapshotVersion.toTimestamp());const u=Mp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=HM(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Up(this.serializer),n.removeTarget=e,this.Ho(n)}}class SV extends zR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=$M(e.writeResults,e.commitTime),r=zn(e.commitTime);return this.listener.u_(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Up(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UM(this.serializer,r))};this.Ho(n)}}/**
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
 */class AV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new b(C.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(C.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(C.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class CV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(fr(n),this.d_=!1):F("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class kV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Ji(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ee(l);u.y_.add(4),await Cl(u),u.b_.set("Unknown"),u.y_.delete(4),await Oh(u)}(this))})}),this.b_=new CV(r,i)}}async function Oh(t){if(Ji(t))for(const e of t.w_)await e(!0)}async function Cl(t){for(const e of t.w_)await e(!1)}function HR(t,e){const n=ee(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),ny(n)?ty(n):Eo(n).Uo()&&ey(n,e))}function WR(t,e){const n=ee(t),r=Eo(n);n.p_.delete(e),r.Uo()&&qR(n,e),n.p_.size===0&&(r.Uo()?r.zo():Ji(n)&&n.b_.set("Unknown"))}function ey(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Eo(t).i_(e)}function qR(t,e){t.D_.Be(e),Eo(t).s_(e)}function ty(t){t.D_=new DM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Eo(t).start(),t.b_.A_()}function ny(t){return Ji(t)&&!Eo(t).$o()&&t.p_.size>0}function Ji(t){return ee(t).y_.size===0}function KR(t){t.D_=void 0}async function PV(t){t.p_.forEach((e,n)=>{ey(t,e)})}async function xV(t,e){KR(t),ny(t)?(t.b_.m_(e),ty(t)):t.b_.set("Unknown")}async function DV(t,e,n){if(t.b_.set("Online"),e instanceof OR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dc(t,r)}else if(e instanceof Nu?t.D_.We(e):e instanceof NR?t.D_.Ze(e):t.D_.je(e),!n.isEqual(X.min()))try{const r=await jR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(Ct.EMPTY_BYTE_STRING,c.snapshotVersion)),qR(s,l);const h=new br(c.target,l,u,c.sequenceNumber);ey(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Dc(t,r)}}async function Dc(t,e,n){if(!Rl(e))throw e;t.y_.add(1),await Cl(t),t.b_.set("Offline"),n||(n=()=>jR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Oh(t)})}function GR(t,e){return e().catch(n=>Dc(t,n,e))}async function Lh(t){const e=ee(t),n=ti(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;NV(e);)try{const i=await gV(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,OV(e,i)}catch(i){await Dc(e,i)}QR(e)&&YR(e)}function NV(t){return Ji(t)&&t.g_.length<10}function OV(t,e){t.g_.push(e);const n=ti(t);n.Uo()&&n.__&&n.a_(e.mutations)}function QR(t){return Ji(t)&&!ti(t).$o()&&t.g_.length>0}function YR(t){ti(t).start()}async function LV(t){ti(t).l_()}async function bV(t){const e=ti(t);for(const n of t.g_)e.a_(n.mutations)}async function MV(t,e,n){const r=t.g_.shift(),i=Kg.from(r,e,n);await GR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lh(t)}async function VV(t,e){e&&ti(t).__&&await async function(r,i){if(function(o){return kM(o)&&o!==C.ABORTED}(i.code)){const s=r.g_.shift();ti(r).Go(),await GR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lh(r)}}(t,e),QR(t)&&YR(t)}async function F0(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Ji(n);n.y_.add(3),await Cl(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Oh(n)}async function FV(t,e){const n=ee(t);e?(n.y_.delete(2),await Oh(n)):e||(n.y_.add(2),await Cl(n),n.b_.set("Unknown"))}function Eo(t){return t.v_||(t.v_=function(n,r,i){const s=ee(n);return s.P_(),new RV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:PV.bind(null,t),uo:xV.bind(null,t),r_:DV.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),ny(t)?ty(t):t.b_.set("Unknown")):(await t.v_.stop(),KR(t))})),t.v_}function ti(t){return t.C_||(t.C_=function(n,r,i){const s=ee(n);return s.P_(),new SV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:LV.bind(null,t),uo:VV.bind(null,t),c_:bV.bind(null,t),u_:MV.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Lh(t)):(await t.C_.stop(),t.g_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class ry{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ry(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iy(t,e){if(fr("AsyncQueue",`${e}: ${t}`),Rl(t))return new b(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Qo(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class U0{constructor(){this.F_=new Ne(j.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):K():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new io(e,n,bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ch(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class UV{constructor(){this.x_=void 0,this.listeners=[]}}class $V{constructor(){this.queries=new wo(e=>vR(e),Ch),this.onlineState="Unknown",this.O_=new Set}}async function XR(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new UV),i)try{s.x_=await n.onListen(r)}catch(o){const a=iy(o,`Initialization of query '${bp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&sy(n)}async function JR(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function jV(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&sy(n)}function BV(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function sy(t){t.O_.forEach(e=>{e.next()})}class ZR{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class eS{constructor(e){this.key=e}}class tS{constructor(e){this.key=e}}class zV{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=re(),this.mutatedKeys=re(),this.na=_R(e),this.ra=new bs(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new U0,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=kh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),w=!0):this._a(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.na(p,l)>0||u&&this.na(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return v(d)-v(p)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new io(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new U0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=re(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new tS(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new eS(r))}),n}ha(e){this.X_=e.ss,this.ta=re();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return io.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class HV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class WV{constructor(e){this.key=e,this.Ia=!1}}class qV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new wo(a=>vR(a),Ch),this.da=new Map,this.Aa=new Set,this.Ra=new Ne(j.comparator),this.Va=new Map,this.ma=new Xg,this.fa={},this.ga=new Map,this.pa=ro.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function KV(t,e){const n=r4(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await yV(n.localStore,pr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await GV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&HR(n.remoteStore,o)}return i}async function GV(t,e,n,r,i){t.wa=(h,d,p)=>async function(_,w,m,f){let y=w.view.sa(m);y.zi&&(y=await b0(_.localStore,w.query,!1).then(({documents:A})=>w.view.sa(A,y)));const g=f&&f.targetChanges.get(w.targetId),E=w.view.applyChanges(y,_.isPrimaryClient,g);return j0(_,w.targetId,E.ca),E.snapshot}(t,h,d,p);const s=await b0(t.localStore,e,!0),o=new zV(e,s.ss),a=o.sa(s.documents),l=Al.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);j0(t,n,u.ca);const c=new HV(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function QV(t,e){const n=ee(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Ch(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $p(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),WR(n.remoteStore,r.targetId),jp(n,r.targetId)}).catch(Il)):(jp(n,r.targetId),await $p(n.localStore,r.targetId,!0))}async function YV(t,e,n){const r=i4(t);try{const i=await function(o,a){const l=ee(o),u=Xe.now(),c=a.reduce((p,v)=>p.add(v.key),re());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=mr(),_=re();return l.Xi.getEntries(p,c).next(w=>{v=w,v.forEach((m,f)=>{f.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(w=>{h=w;const m=[];for(const f of a){const y=IM(f,h.get(f.key).overlayedDocument);y!=null&&m.push(new ui(f.key,y,cR(y.value.mapValue),In.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(w=>{d=w;const m=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,m)})}).then(()=>({batchId:d.batchId,changes:ER(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new Ne(ue)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await kl(r,i.changes),await Lh(r.remoteStore)}catch(i){const s=iy(i,"Failed to persist write");n.reject(s)}}async function nS(t,e){const n=ee(t);try{const r=await pV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Re(o.Ia):i.removedDocuments.size>0&&(Re(o.Ia),o.Ia=!1))}),await kl(n,r,e)}catch(r){await Il(r)}}function $0(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&sy(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XV(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new Ne(j.comparator);o=o.insert(s,_t.newNoDocument(s,X.min()));const a=re().add(s),l=new Dh(X.min(),new Map,new Ne(ue),o,a);await nS(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),oy(r)}else await $p(r.localStore,e,!1).then(()=>jp(r,e,n)).catch(Il)}async function JV(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await fV(n.localStore,e);iS(n,r,null),rS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kl(n,i)}catch(i){await Il(i)}}async function ZV(t,e,n){const r=ee(t);try{const i=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Re(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);iS(r,e,n),rS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await kl(r,i)}catch(i){await Il(i)}}function rS(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function iS(t,e,n){const r=ee(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function jp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||sS(t,r)})}function sS(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(WR(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),oy(t))}function j0(t,e,n){for(const r of n)r instanceof eS?(t.ma.addReference(r.key,e),e4(t,r)):r instanceof tS?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||sS(t,r.key)):K()}function e4(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(F("SyncEngine","New document in limbo: "+n),t.Aa.add(r),oy(t))}function oy(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new j(Te.fromString(e)),r=t.pa.next();t.Va.set(r,new WV(n)),t.Ra=t.Ra.insert(n,r),HR(t.remoteStore,new br(pr(Hg(n.path)),r,"TargetPurposeLimboResolution",Fg.ae))}}async function kl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Zg.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=ee(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>D.forEach(u,d=>D.forEach(d.Li,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>D.forEach(d.ki,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Rl(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Ji.get(d),v=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function t4(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await $R(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new b(C.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kl(n,r.ts)}}function n4(t,e){const n=ee(t),r=n.Va.get(e);if(r&&r.Ia)return re().add(r.key);{let i=re();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function r4(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=n4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XV.bind(null,e),e.Ta.r_=jV.bind(null,e.eventManager),e.Ta.Sa=BV.bind(null,e.eventManager),e}function i4(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZV.bind(null,e),e}class B0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Nh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dV(this.persistence,new cV,e.initialUser,this.serializer)}createPersistence(e){return new lV(Jg.zr,this.serializer)}createSharedClientState(e){return new _V}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class s4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=t4.bind(null,this.syncEngine),await FV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $V}()}createDatastore(e){const n=Nh(e.databaseInfo.databaseId),r=function(s){return new IV(s)}(e.databaseInfo);return function(s,o,a,l){return new AV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new kV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$0(this.syncEngine,n,0),function(){return V0.v()?new V0:new wV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new qV(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ee(n);F("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Cl(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class oS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class o4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=aR.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=iy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jd(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $R(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function z0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await l4(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>F0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>F0(e.remoteStore,s)),t._onlineComponents=e}function a4(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function l4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!a4(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await Jd(t,new B0)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Jd(t,new B0);return t._offlineComponents}async function aS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await z0(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await z0(t,new s4))),t._onlineComponents}function u4(t){return aS(t).then(e=>e.syncEngine)}async function Bp(t){const e=await aS(t),n=e.eventManager;return n.onListen=KV.bind(null,e.syncEngine),n.onUnlisten=QV.bind(null,e.syncEngine),n}function c4(t,e,n={}){const r=new Kr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new oS({next:d=>{o.enqueueAndForget(()=>JR(s,h)),d.fromCache&&l.source==="server"?u.reject(new b(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new ZR(a,c,{includeMetadataChanges:!0,W_:!0});return XR(s,h)}(await Bp(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function lS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const H0=new Map;/**
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
 */function uS(t,e,n){if(!n)throw new b(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function h4(t,e,n,r){if(e===!0&&r===!0)throw new b(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function W0(t){if(!j.isDocumentKey(t))throw new b(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q0(t){if(j.isDocumentKey(t))throw new b(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bh(t);throw new b(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function d4(t,e){if(e<=0)throw new b(C.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class K0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}h4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bb;switch(r.type){case"firstParty":return new Ub(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=H0.get(n);r&&(F("ComponentProvider","Removing Datastore"),H0.delete(n),r.terminate())}(this),Promise.resolve()}}function f4(t,e,n,r={}){var i;const s=(t=Hn(t,Mh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=nT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new Mb(new oR(a,l))}}/**
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
 */class _r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Gr extends _r{constructor(e,n,r){super(e,n,Hg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new j(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function ay(t,e,...n){if(t=De(t),uS("collection","path",e),t instanceof Mh){const r=Te.fromString(e,...n);return q0(r),new Gr(t,null,r)}{if(!(t instanceof Bt||t instanceof Gr))throw new b(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return q0(r),new Gr(t.firestore,null,r)}}function Ou(t,e,...n){if(t=De(t),arguments.length===1&&(e=aR.V()),uS("doc","path",e),t instanceof Mh){const r=Te.fromString(e,...n);return W0(r),new Bt(t,null,new j(r))}{if(!(t instanceof Bt||t instanceof Gr))throw new b(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return W0(r),new Bt(t.firestore,t instanceof Gr?t.converter:null,new j(r))}}/**
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
 */class p4{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new BR(this,"async_queue_retry"),this.Xa=()=>{const n=Xd();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Xd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Kr;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Rl(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=ry.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&K()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function G0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Hi extends Mh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new p4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cS(this),this._firestoreClient.terminate()}}function m4(t,e){const n=typeof t=="object"?t:Xm(),r=typeof t=="string"?t:e||"(default)",i=sh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Z1("firestore");s&&f4(i,...s)}return i}function ly(t){return t._firestoreClient||cS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Xb(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,lS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new o4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class so{constructor(e){this._byteString=e}static fromBase64String(e){try{return new so(Ct.fromBase64String(e))}catch(n){throw new b(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new so(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class uy{constructor(e){this._methodName=e}}/**
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
 */class cy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const g4=/^__.*__$/;class y4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new Sl(e,this.data,n,this.fieldTransforms)}}class hS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class hy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new hy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Nc(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(dS(this.uu)&&g4.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class v4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nh(e)}Ru(e,n,r,i=!1){return new hy({uu:e,methodName:n,Au:r,path:wt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dy(t){const e=t._freezeSettings(),n=Nh(t._databaseId);return new v4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _4(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);fy("Data must be an object, but it was:",o,r);const a=fS(r,o);let l,u;if(s.merge)l=new qt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=zp(e,h,n);if(!o.contains(d))throw new b(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);mS(c,d)||c.push(d)}l=new qt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new y4(new Vt(a),l,u)}class Fh extends uy{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fh}}function w4(t,e,n,r){const i=t.Ru(1,e,n);fy("Data must be an object, but it was:",i,r);const s=[],o=Vt.empty();Xi(r,(l,u)=>{const c=py(e,l,n);u=De(u);const h=i.Iu(c);if(u instanceof Fh)s.push(c);else{const d=Pl(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new qt(s);return new hS(o,a,i.fieldTransforms)}function E4(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[zp(e,r,n)],l=[i];if(s.length%2!=0)throw new b(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(zp(e,s[d])),l.push(s[d+1]);const u=[],c=Vt.empty();for(let d=a.length-1;d>=0;--d)if(!mS(u,a[d])){const p=a[d];let v=l[d];v=De(v);const _=o.Iu(p);if(v instanceof Fh)u.push(p);else{const w=Pl(v,_);w!=null&&(u.push(p),c.set(p,w))}}const h=new qt(u);return new hS(c,h,o.fieldTransforms)}function T4(t,e,n,r=!1){return Pl(n,t.Ru(r?4:3,e))}function Pl(t,e){if(pS(t=De(t)))return fy("Unsupported field value:",e,t),fS(t,e);if(t instanceof uy)return function(r,i){if(!dS(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Pl(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:xc(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xc(i.serializer,s)}}if(r instanceof cy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof so)return{bytesValue:LR(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${bh(r)}`)}(t,e)}function fS(t,e){const n={};return lR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,(r,i)=>{const s=Pl(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof cy||t instanceof so||t instanceof Bt||t instanceof uy)}function fy(t,e,n){if(!pS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=bh(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function zp(t,e,n){if((e=De(e))instanceof Vh)return e._internalPath;if(typeof e=="string")return py(t,e);throw Nc("Field path arguments must be of type string or ",t,!1,void 0,n)}const I4=new RegExp("[~\\*/\\[\\]]");function py(t,e,n){if(e.search(I4)>=0)throw Nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vh(...e.split("."))._internalPath}catch{throw Nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(C.INVALID_ARGUMENT,a+t+l)}function mS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class gS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new R4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R4 extends gS{data(){return super.data()}}function Uh(t,e){return typeof e=="string"?py(t,e):e instanceof Vh?e._internalPath:e._delegate._internalPath}/**
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
 */function yS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new b(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class my{}class gy extends my{}function vS(t,e,...n){let r=[];e instanceof my&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof yy).length,a=s.filter(l=>l instanceof $h).length;if(o>1||o>0&&a>0)throw new b(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class $h extends gy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $h(e,n,r)}_apply(e){const n=this._parse(e);return ES(e._query,n),new _r(e.firestore,e.converter,Lp(e._query,n))}_parse(e){const n=dy(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new b(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Y0(h,c);const p=[];for(const v of h)p.push(Q0(l,s,v));d={arrayValue:{values:p}}}else d=Q0(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Y0(h,c),d=T4(a,o,h,c==="in"||c==="not-in");return We.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function S4(t,e,n){const r=e,i=Uh("where",t);return $h._create(i,r,n)}class yy extends my{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:An.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ES(o,l),o=Lp(o,l)}(e._query,n),new _r(e.firestore,e.converter,Lp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vy extends gy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new b(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Os(s,o);return function(u,c){if(Wg(u)===null){const h=Ah(u);h!==null&&TS(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new _r(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new _o(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function _S(t,e="asc"){const n=e,r=Uh("orderBy",t);return vy._create(r,n)}class _y extends gy{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new _y(e,n,r)}_apply(e){return new _r(e.firestore,e.converter,Cc(e._query,this._limit,this._limitType))}}function wS(t){return d4("limit",t),_y._create("limit",t,"F")}function Q0(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new b(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yR(e)&&n.indexOf("/")!==-1)throw new b(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!j.isDocumentKey(r))throw new b(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return v0(t,new j(r))}if(n instanceof Bt)return v0(t,n._key);throw new b(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bh(n)}.`)}function Y0(t,e){if(!Array.isArray(t)||t.length===0)throw new b(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ES(t,e){if(e.isInequality()){const r=Ah(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new b(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Wg(t);s!==null&&TS(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new b(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function TS(t,e,n){if(!n.isEqual(e))throw new b(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class A4{convertValue(e,n="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new cy(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$g(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qa(e));default:return null}}convertTimestamp(e){const n=ei(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Re(UR(r));const i=new Ya(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function C4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Xo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class IS extends gS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lu extends IS{data(e={}){return super.data(e)}}class RS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lu(this._firestore,this._userDataWriter,r.key,r,new Xo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Lu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:k4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function k4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class wy extends A4{constructor(e){super(),this.firestore=e}convertBytes(e){return new so(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function P4(t){t=Hn(t,_r);const e=Hn(t.firestore,Hi),n=ly(e),r=new wy(e);return yS(t._query),c4(n,t._query).then(i=>new RS(e,r,t,i))}function Hp(t,e,n,...r){t=Hn(t,Bt);const i=Hn(t.firestore,Hi),s=dy(i);let o;return o=typeof(e=De(e))=="string"||e instanceof Vh?E4(s,"updateDoc",t._key,e,n,r):w4(s,"updateDoc",t._key,e),Ey(i,[o.toMutation(t._key,In.exists(!0))])}function x4(t){return Ey(Hn(t.firestore,Hi),[new qg(t._key,In.none())])}function D4(t,e){const n=Hn(t.firestore,Hi),r=Ou(t),i=C4(t.converter,e);return Ey(n,[_4(dy(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,In.exists(!1))]).then(()=>r)}function N4(t,...e){var n,r,i;t=De(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||G0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(G0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Bt)u=Hn(t.firestore,Hi),c=Hg(t._key.path),l={next:h=>{e[o]&&e[o](O4(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Hn(t,_r);u=Hn(h.firestore,Hi),c=h._query;const d=new wy(u);l={next:p=>{e[o]&&e[o](new RS(u,d,h,p))},error:e[o+1],complete:e[o+2]},yS(t._query)}return function(d,p,v,_){const w=new oS(_),m=new ZR(p,w,v);return d.asyncQueue.enqueueAndForget(async()=>XR(await Bp(d),m)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>JR(await Bp(d),m))}}(ly(u),c,a,l)}function Ey(t,e){return function(r,i){const s=new Kr;return r.asyncQueue.enqueueAndForget(async()=>YV(await u4(r),i,s)),s.promise}(ly(t),e)}function O4(t,e,n){const r=n.docs.get(e._key),i=new wy(t);return new IS(t,i,e._key,r,new Xo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){vo=i})(Gi),Vi(new Jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Hi(new Vb(r.getProvider("auth-internal")),new jb(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new b(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ya(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),$n(f0,"4.1.0",e),$n(f0,"4.1.0","esm2017")})();const L4={apiKey:"AIzaSyDNQdIcnHAatVR3cDS8WKmXo_s8zs5MBz8",authDomain:"nwitter-gdsc.firebaseapp.com",projectId:"nwitter-gdsc",storageBucket:"nwitter-gdsc.appspot.com",messagingSenderId:"279627711130",appId:"1:279627711130:web:76f3807adec594fc68d523"},Ty=sT(L4),qn=mO(Ty),Oc=RL(Ty),Ms=m4(Ty),b4=q.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 4fr;
    padding: 50px 0px;
    width: 100%;
    max-width: 860px;
    height: 100%;
`,M4=q.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`,Zd=q.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #FCFCFC;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    svg {
        width: 30px;
        fill: #FCFCFC;
    }
    &.log-out {
        border-color: #F24C3D;
        svg {
            fill: #F24C3D;
        }
    }
`;function V4(){const t=Ki(),e=async()=>{confirm("Are you sure you want to log out?")&&(await qn.signOut(),t("/login"))};return R.jsxs(b4,{children:[R.jsxs(M4,{children:[R.jsx(Xr,{to:"/",children:R.jsx(Zd,{children:R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:[R.jsx("path",{d:"M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"}),R.jsx("path",{d:"M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"})]})})}),R.jsx(Xr,{to:"/profile",children:R.jsx(Zd,{children:R.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:R.jsx("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",clipRule:"evenodd"})})})}),R.jsx(Zd,{onClick:e,className:"log-out",children:R.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:R.jsx("path",{fillRule:"evenodd",d:"M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z",clipRule:"evenodd"})})})]}),R.jsx(_P,{})]})}const F4=q.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,U4=q.textarea`
    border: 3px solid #FCFCFC;
    padding: 20px;
    border-radius: 20px;
    font-size: 18px;
    font-family: 'Patua One', serif;
    color: #494949;
    background-color: #FCFCFC;
    width: 100%;
    resize: none;
    &::placeholder {
        font-size: 18px;
    }
    &:focus {
        outline: none;
        border-color: #540375;
    }
`,$4=q.label`
    padding: 15px 0px;
    color: #F2BE22;
    text-align: center;
    border-radius: 50px;
    border: 3px solid #F2BE22;
    font-size: 16px;
    cursor: pointer;
`,j4=q.input`
    display: none;
`,B4=q.input`
    background-color: #F29727;
    color: #FCFCFC;
    border: none;
    padding: 15px 0px;
    border-radius: 50px;
    font-family: 'Patua One', serif;
    font-size: 18px;
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.8;
    }
`;function z4(){const[t,e]=k.useState(!1),[n,r]=k.useState(""),[i,s]=k.useState(null),o=u=>{r(u.target.value)},a=u=>{const{files:c}=u.target,h=1024*1024;c&&c.length===1&&(c[0].size<h?s(c[0]):alert("Maximum File Size Exceeded!"))},l=async u=>{u.preventDefault();const c=qn.currentUser;if(!(!c||t||n===""||n.length>180))try{e(!0);const h=await D4(ay(Ms,"tweets"),{tweet:n,createdAt:Date.now(),username:c.displayName||"Anonymous",userId:c.uid});if(i){const d=yc(Oc,`tweets/${c.uid}/${h.id}`),p=await fg(d,i),v=await pg(p.ref);await Hp(h,{photo:v})}r(""),s(null)}catch(h){console.log(h)}finally{e(!1)}};return R.jsxs(F4,{onSubmit:l,children:[R.jsx(U4,{rows:5,maxLength:180,onChange:o,value:n,placeholder:"What is happening?!"}),R.jsx($4,{htmlFor:"file",children:i?"Photo Added":"Add Photo"}),R.jsx(j4,{onChange:a,type:"file",id:"file",accept:"image/*"}),R.jsx(B4,{type:"submit",value:t?"Posting...":"Post Tweet"})]})}const H4=q.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 20px;
    border: 3px solid #4C4C6D;
    border-radius: 15px;
`,X0=q.div`

`,ef=q.div`
    display: flex;
    flex-direction: row;
    vertical-align: center;
    gap: 10px;
    &.EditBtn {
        border-top: 2px solid #D0D0D0;
        padding-top: 10px;
        justify-content: flex-end;
    }
`,W4=q.span`
    font-family: 'BMJUA';
    font-weight: 300;
    font-size: 16px;
    display: flex;
    align-items: flex-end;
`,q4=q.p`
    margin: 10px 0px;
    font-size: 18px;
`,J0=q.img`
    width: 100px;
    height: 100px;
    border-radius: 15px;
`,K4=q.button`
    background-color: #F24C3D;
    color: #FCFCFC;
    border: 0;
    font-size: 14px;
    padding: 5px 10px;
    text-transform: uppercase;
    font-family: 'Patua One', serif;
    border-radius: 5px;
    cursor: pointer;
`,G4=q.div`
    cursor: pointer;
    height: 18px;
    width: 18px;
`,Q4=q.form`
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    background-color: #FCFCFC;
    border-radius: 10px;
    padding: 10px;
`,Y4=q.textarea`
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-family: 'Patua One', serif;
    color: #494949;
    background-color: #FCFCFC;
    width: 100%;
    resize: none;
    &::placeholder {
        font-size: 18px;
    }
    &:focus {
        outline: none;
    }
`,X4=q.input`
    background-color: #F29727;
    color: #FCFCFC;
    border: none;
    border-radius: 50px;
    font-size: 14px;
    padding: 10px 10px;
    font-family: 'Patua One', serif;
    cursor: pointer;
`,J4=q.button`
    background-color: #494949;
    color: #FCFCFC;
    border: none;
    font-size: 14px;
    padding: 10px 10px;
    text-transform: uppercase;
    font-family: 'Patua One', serif;
    border-radius: 50px;
    cursor: pointer;
`,Z4=q.input`
    display: none;
`,eF=q.label`
    font-family: 'Patua One', serif;
    font-size: 14px;
    border: 3px solid #F2BE22;
    color: #F2BE22;
    background-color: none;
    padding: 10px 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 50px;
`;function SS({username:t,photo:e,tweet:n,userId:r,id:i}){const s=qn.currentUser,[o,a]=k.useState(!1),[l,u]=k.useState(""),[c,h]=k.useState(null),d=w=>{const{target:{value:m}}=w;u(m)},p=w=>{const{files:m}=w.target,f=1024*1024;m&&m.length===1&&(m[0].size<f?h(m[0]):alert("Maximum File Size Exceeded!"))},v=async()=>{if(!(!confirm("Are you sure you want to delete this tweet?")||(s==null?void 0:s.uid)!==r))try{if(await x4(Ou(Ms,"tweets",i)),e){const m=yc(Oc,`tweets/${s.uid}/${i}`);await J_(m)}}catch(m){console.log(m)}finally{}},_=async w=>{if(w.preventDefault(),!((s==null?void 0:s.uid)!==r||l===""))try{await Hp(Ou(Ms,"tweets",i),{tweet:l});const m=yc(Oc,`tweets/${s.uid}/${i}`);try{await J_(m)}catch(f){if(!(f instanceof Oe&&f.code==="storage/object-not-found"))throw f}if(c){const f=await fg(m,c),y=await pg(f.ref);await Hp(Ou(Ms,"tweets",i),{photo:y})}a(!1),h(null)}catch(m){console.log(m)}finally{}};return R.jsxs(H4,{children:[R.jsxs(X0,{children:[R.jsxs(ef,{children:[R.jsx(W4,{children:t}),(s==null?void 0:s.uid)===r?R.jsx(G4,{onClick:()=>{a(!0),u(n),h(null)},children:R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:[R.jsx("path",{d:"M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"}),R.jsx("path",{d:"M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"})]})}):null]}),o?R.jsxs(Q4,{onSubmit:_,children:[R.jsxs(ef,{children:[R.jsx(Y4,{rows:5,maxLength:180,placeholder:"Edit Text...",value:l,onChange:d}),e?R.jsx(J0,{src:e}):null]}),R.jsxs(ef,{className:"EditBtn",children:[R.jsx(eF,{htmlFor:"newFile",children:e?"Edit Photo":"Add Photo"}),R.jsx(Z4,{onChange:p,type:"file",id:"newFile",accept:"image/*"}),R.jsx(X4,{type:"submit",value:"Re Tweet"}),R.jsx(J4,{onClick:()=>{a(!1),u(""),h(null)},children:"Cancel"})]})]}):R.jsx(q4,{children:n}),(s==null?void 0:s.uid)===r?R.jsx(K4,{onClick:v,children:"Delete"}):null]}),R.jsx(X0,{children:e&&!o?R.jsx(J0,{src:e}):null})]})}const tF=q.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    overflow-y: scroll;
`;function nF(){const[t,e]=k.useState([]);return k.useEffect(()=>{let n=null;return(async()=>{const i=vS(ay(Ms,"tweets"),_S("createdAt","desc"),wS(25));n=await N4(i,s=>{const o=s.docs.map(a=>{const{tweet:l,createdAt:u,userId:c,username:h,photo:d}=a.data();return{tweet:l,createdAt:u,userId:c,username:h,photo:d,id:a.id}});e(o)})})(),()=>{n&&n()}},[]),R.jsx(tF,{children:t.map(n=>R.jsx(SS,{...n},n.id))})}const rF=q.div`
    display: grid;
    gap: 50px;
    overflow-y: scroll;
    grid-template-rows: 1fr 5fr;
`;function iF(){return R.jsxs(rF,{children:[R.jsx(z4,{}),R.jsx(nF,{})]})}const sF=q.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`,oF=q.label`
    width: 80px;
    overflow: hidden;
    height: 80px;
    border-radius: 50%;
    background-color: #98D8AA;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 50px;
    }
`,aF=q.img`
    width: 100%;
`,lF=q.input`
    display: none;
`,uF=q.span`
    font-size: 22px;
    font-family: 'BMJUA';
`,cF=q.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`,hF=q.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`,dF=q.div`
    cursor: pointer;
    height: 22px;
    width: 22px;
`,fF=q.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`,pF=q.input`
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    width: 40%;
    font-size: 18px;
    font-family: 'BMJUA';
    outline: none;
    &:focus {
        border: 3px solid #98D8AA;
    }
`,mF=q.button`
    cursor: pointer;
    height: 28px;
    width: 28px;
    border: none;
    background-color: #98D8AA;
    color: #FCFCFC;
    border-radius: 5px;
    border: none;  
`,gF=q.button`
    cursor: pointer;
    height: 28px;
    width: 28px;
    border: none;
    background-color: #F24C3D;
    color: #FCFCFC;
    border-radius: 5px;
    border: none;
`;function yF(){const t=qn.currentUser,[e,n]=k.useState(t==null?void 0:t.photoURL),[r,i]=k.useState([]),[s,o]=k.useState(!1),[a,l]=k.useState(""),u=p=>{l(p.target.value)},c=async p=>{if(p.preventDefault(),!!t)try{await mp(t,{displayName:a})}catch(v){console.log(v)}finally{o(!1)}},h=async p=>{const{files:v}=p.target;if(t&&v&&v.length===1){const _=v[0],w=yc(Oc,`avatars/${t==null?void 0:t.uid}`),m=await fg(w,_),f=await pg(m.ref);n(f),await mp(t,{photoURL:f})}},d=async()=>{const p=vS(ay(Ms,"tweets"),S4("userId","==",t==null?void 0:t.uid),_S("createdAt","desc"),wS(25)),_=(await P4(p)).docs.map(w=>{const{tweet:m,createdAt:f,userId:y,username:g,photo:E}=w.data();return{tweet:m,createdAt:f,userId:y,username:g,photo:E,id:w.id}});i(_)};return k.useEffect(()=>{d()},[]),R.jsxs(sF,{children:[R.jsx(oF,{htmlFor:"avatar",children:e?R.jsx(aF,{src:e}):R.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:R.jsx("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",clipRule:"evenodd"})})}),R.jsx(lF,{onChange:h,id:"avatar",type:"file",accept:"image/*"}),s?R.jsxs(fF,{onSubmit:c,children:[R.jsx(pF,{type:"text",name:"name",placeholder:"Name",value:a,onChange:u}),R.jsx(mF,{type:"submit",children:R.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:R.jsx("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",clipRule:"evenodd"})})}),R.jsx(gF,{onClick:()=>{o(!1),l("")},children:R.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:R.jsx("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"})})})]}):R.jsxs(hF,{children:[R.jsx(uF,{children:(t==null?void 0:t.displayName)??"Anonymous"}),R.jsx(dF,{onClick:()=>{o(!0),l((t==null?void 0:t.displayName)??"")},children:R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:[R.jsx("path",{d:"M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"}),R.jsx("path",{d:"M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"})]})})]}),R.jsx(cF,{children:r.map(p=>R.jsx(SS,{...p},p.id))})]})}const Iy=q.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 50px 0px;
`,Ry=q.h1`
    font-size: 42px;
`,Sy=q.form`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`,ir=q.input`
    padding: 15px 20px;
    margin: 5px 0px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 18px;
    &[type="submit"] {
        background-color: #F29727;
        font-family: 'Patua One';
        font-size: 18px;
        color: #FCFCFC;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`,Ay=q.span`
    color: #F24C3D;
`,oo=q.span`
    margin-top: 20px;
    font-size: 18px;
    a {
        color: #2b2929;
        font-weight: 500;
    }
`,vF=q.span`
    margin-top: 30px;
    background-color: #F2BE22;
    width: 100%;
    color: #FCFCFC;
    font-size: 18px;
    padding: 15px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,_F=q.img`
    height: 25px;
`;function AS(){const t=Ki(),e=async()=>{try{const n=new Jn;await RN(qn,n),t("/")}catch(n){console.error(n)}};return R.jsxs(vF,{onClick:e,children:[R.jsx(_F,{src:"/github-logo.svg"}),"Continue with Github"]})}function wF(){const t=Ki(),[e,n]=k.useState(!1),[r,i]=k.useState(""),[s,o]=k.useState(""),[a,l]=k.useState(""),u=h=>{const{target:{name:d,value:p}}=h;d==="email"?i(p):d==="password"&&o(p)},c=async h=>{if(h.preventDefault(),l(""),!(e||r===""||s===""))try{n(!0),await eN(qn,r,s),t("/")}catch(d){d instanceof Jt&&l(d.message)}finally{n(!1)}};return R.jsxs(Iy,{children:[R.jsx(Ry,{children:"Log into X"}),R.jsxs(Sy,{onSubmit:c,children:[R.jsx(ir,{onChange:u,name:"email",value:r,placeholder:"Email",type:"email",required:!0}),R.jsx(ir,{onChange:u,name:"password",value:s,placeholder:"Password",type:"password",required:!0}),R.jsx(ir,{type:"submit",value:e?"Loading...":"Log in"})]}),a!==""?R.jsx(Ay,{children:a}):null,R.jsxs(oo,{children:["Don't have an account?  ",R.jsx(Xr,{to:"/create-account",children:"Create one →"})]}),R.jsxs(oo,{children:["Forgot Password?  ",R.jsx(Xr,{to:"/reset-password",children:"Reset Password"})]}),R.jsx(AS,{})]})}function EF(){const t=Ki(),[e,n]=k.useState(!1),[r,i]=k.useState(""),[s,o]=k.useState(""),[a,l]=k.useState(""),[u,c]=k.useState(""),h=p=>{const{target:{name:v,value:_}}=p;v==="name"?i(_):v==="email"?o(_):v==="password"&&l(_)},d=async p=>{if(p.preventDefault(),c(""),!(e||r===""||s===""||a===""))try{n(!0);const v=await ZD(qn,s,a);console.log(v.user),await mp(v.user,{displayName:r}),t("/")}catch(v){v instanceof Jt&&c(v.message)}finally{n(!1)}};return R.jsxs(Iy,{children:[R.jsx(Ry,{children:"Join X"}),R.jsxs(Sy,{onSubmit:d,children:[R.jsx(ir,{onChange:h,name:"name",value:r,placeholder:"Name",type:"text",required:!0}),R.jsx(ir,{onChange:h,name:"email",value:s,placeholder:"Email",type:"email",required:!0}),R.jsx(ir,{onChange:h,name:"password",value:a,placeholder:"Password",type:"password",required:!0}),R.jsx(ir,{type:"submit",value:e?"Loading...":"Create Account"})]}),u!==""?R.jsx(Ay,{children:u}):null,R.jsxs(oo,{children:["Already have an account?  ",R.jsx(Xr,{to:"/login",children:"Log in →"})]}),R.jsxs(oo,{children:["Forgot Password?  ",R.jsx(Xr,{to:"/reset-password",children:"Reset Password"})]}),R.jsx(AS,{})]})}var CS=globalThis&&globalThis.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},kS=Gm(Z0||(Z0=CS([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));G1(ew||(ew=CS(["",""],["",""])),kS);var Z0,ew;const TF=q.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`,IF=q.span`
    font-size: 24px;
`;function RF(){return R.jsx(TF,{children:R.jsx(IF,{children:"Loading..."})})}function SF({children:t}){return qn.currentUser?t:R.jsx(vP,{to:"/login"})}function AF(){const t=Ki(),[e,n]=k.useState(!1),[r,i]=k.useState(""),[s,o]=k.useState(""),a=u=>{const{target:{value:c}}=u;i(c)},l=async u=>{if(u.preventDefault(),o(""),!(e||r===""))try{await JD(qn,r),alert("We have e-mailed your Password Reset link!"),t("/")}catch(c){c instanceof Jt&&o(c.message)}finally{n(!1)}};return R.jsxs(Iy,{children:[R.jsx(Ry,{children:"Reset Password"}),R.jsxs(Sy,{onSubmit:l,children:[R.jsx(ir,{onChange:a,name:"email",value:r,placeholder:"Email",type:"email",required:!0}),R.jsx(ir,{type:"submit",value:e?"Loading...":"Reset Password"})]}),s!==""?R.jsx(Ay,{children:s}):null,R.jsxs(oo,{children:["Already have an account?  ",R.jsx(Xr,{to:"/login",children:"Log in →"})]}),R.jsxs(oo,{children:["Don't have an account?  ",R.jsx(Xr,{to:"/create-account",children:"Create one →"})]})]})}const CF=AP([{path:"/",element:R.jsx(SF,{children:R.jsx(V4,{})}),children:[{path:"",element:R.jsx(iF,{})},{path:"profile",element:R.jsx(yF,{})}]},{path:"login",element:R.jsx(wF,{})},{path:"/create-account",element:R.jsx(EF,{})},{path:"/reset-password",element:R.jsx(AF,{})}]),kF=G1`
  ${kS};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #22A699;
    color: white;
    font-family: 'Patua One', serif;
  }
  &::-webkit-scrollbar {
      width: 8px;  
  }
  &::-webkit-scrollbar-thumb {
      background: #98D8AA; /* 스크롤바 색상 */
      border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  &::-webkit-scrollbar-track {
      background: rgba(220, 20, 60, 0.1);  /*스크롤바 뒷 배경 색상*/
  }
`,PF=q.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;function xF(){const[t,e]=k.useState(!0),n=async()=>{await qn.authStateReady(),e(!1)};return k.useEffect(()=>{n()},[]),R.jsxs(PF,{children:[R.jsx(kF,{}),t?R.jsx(RF,{}):R.jsx(gP,{router:CF})]})}tf.createRoot(document.getElementById("root")).render(R.jsx(_n.StrictMode,{children:R.jsx(xF,{})}));
