"use strict";(self.webpackChunkDF_Telegram_VueApp=self.webpackChunkDF_Telegram_VueApp||[]).push([[335],{7462:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(87650),o=n(43019),i=n(90254),l=n(50461),s=n(26670),a=n(41627),c=[r.ElInfiniteScroll,o.ElLoading,i.ElMessage,l.ElMessageBox,s.ElNotification,a.ElPopoverDirective];t.default=c},46011:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(59323);Object.defineProperty(t,"ensureArray",{enumerable:!0,get:function(){return r.castArray}}),t.castArray=e=>e||0===e?Array.isArray(e)?e:[e]:[],t.unique=e=>[...new Set(e)]},96956:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(59797);Object.defineProperty(t,"isClient",{enumerable:!0,get:function(){return r.isClient}}),Object.defineProperty(t,"isIOS",{enumerable:!0,get:function(){return r.isIOS}}),t.isFirefox=()=>r.isClient&&/firefox/i.test(window.navigator.userAgent)},92115:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=e=>"fixed"!==getComputedStyle(e).position&&null!==e.offsetParent,r=e=>{if(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex"))return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&"ignore"!==e.rel;case"INPUT":return!("hidden"===e.type||"file"===e.type);case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},o=e=>!e.getAttribute("aria-owns");t.attemptFocus=e=>{var t;return!!r(e)&&(null==(t=e.focus)||t.call(e),document.activeElement===e)},t.focusNode=e=>{e&&(e.focus(),!o(e)&&e.click())},t.getSibling=(e,t,n)=>{const{parentNode:r}=e;if(!r)return null;const o=r.querySelectorAll(n);return o[Array.prototype.indexOf.call(o,e)+t]||null},t.isFocusable=r,t.isLeaf=o,t.isVisible=n,t.obtainAllFocusableElements=e=>Array.from(e.querySelectorAll('a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])')).filter((e=>r(e)&&n(e))),t.triggerEvent=function(e,t,...n){let r;r=t.includes("mouse")||t.includes("click")?"MouseEvents":t.includes("key")?"KeyboardEvent":"HTMLEvents";const o=document.createEvent(r);return o.initEvent(t,...n),e.dispatchEvent(o),e}},80960:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.composeEventHandlers=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const o=null==e?void 0:e(r);if(!1===n||!o)return null==t?void 0:t(r)},t.whenMouse=e=>t=>"mouse"===t.pointerType?e(t):void 0},9410:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(92115),o=n(80960),i=n(81150),l=n(69563),s=n(99197);t.attemptFocus=r.attemptFocus,t.focusNode=r.focusNode,t.getSibling=r.getSibling,t.isFocusable=r.isFocusable,t.isLeaf=r.isLeaf,t.isVisible=r.isVisible,t.obtainAllFocusableElements=r.obtainAllFocusableElements,t.triggerEvent=r.triggerEvent,t.composeEventHandlers=o.composeEventHandlers,t.whenMouse=o.whenMouse,t.getClientXY=i.getClientXY,t.getOffsetTop=i.getOffsetTop,t.getOffsetTopDistance=i.getOffsetTopDistance,t.isInContainer=i.isInContainer,t.getScrollBarWidth=l.getScrollBarWidth,t.getScrollContainer=l.getScrollContainer,t.isScroll=l.isScroll,t.scrollIntoView=l.scrollIntoView,t.addClass=s.addClass,t.addUnit=s.addUnit,t.classNameToArray=s.classNameToArray,t.getStyle=s.getStyle,t.hasClass=s.hasClass,t.removeClass=s.removeClass,t.removeStyle=s.removeStyle,t.setStyle=s.setStyle},81150:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(96956);var r=n(59797);const o=e=>{let t=0,n=e;for(;n;)t+=n.offsetTop,n=n.offsetParent;return t};t.getClientXY=e=>{let t,n;return"touchend"===e.type?(n=e.changedTouches[0].clientY,t=e.changedTouches[0].clientX):e.type.startsWith("touch")?(n=e.touches[0].clientY,t=e.touches[0].clientX):(n=e.clientY,t=e.clientX),{clientX:t,clientY:n}},t.getOffsetTop=o,t.getOffsetTopDistance=(e,t)=>Math.abs(o(e)-o(t)),t.isInContainer=(e,t)=>{if(!r.isClient||!e||!t)return!1;const n=e.getBoundingClientRect();let o;return o=t instanceof Element?t.getBoundingClientRect():{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<o.bottom&&n.bottom>o.top&&n.right>o.left&&n.left<o.right}},69563:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(96956);var r=n(99197),o=n(59797);const i=(e,t)=>{if(!o.isClient)return!1;const n={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],i=r.getStyle(e,n);return["scroll","auto","overlay"].some((e=>i.includes(e)))};let l;t.getScrollBarWidth=e=>{var t;if(!o.isClient)return 0;if(void 0!==l)return l;const n=document.createElement("div");n.className=`${e}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const r=n.offsetWidth;n.style.overflow="scroll";const i=document.createElement("div");i.style.width="100%",n.appendChild(i);const s=i.offsetWidth;return null==(t=n.parentNode)||t.removeChild(n),l=r-s,l},t.getScrollContainer=(e,t)=>{if(!o.isClient)return;let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(i(n,t))return n;n=n.parentNode}return n},t.isScroll=i,t.scrollIntoView=function(e,t){if(!o.isClient)return;if(!t)return void(e.scrollTop=0);const n=[];let r=t.offsetParent;for(;null!==r&&e!==r&&e.contains(r);)n.push(r),r=r.offsetParent;const i=t.offsetTop+n.reduce(((e,t)=>e+t.offsetTop),0),l=i+t.offsetHeight,s=e.scrollTop,a=s+e.clientHeight;i<s?e.scrollTop=i:l>a&&(e.scrollTop=l-e.clientHeight)}},99197:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(97387);n(96956),n(95676);var o=n(43358),i=n(31617),l=n(59797),s=n(3577);const a=(e="")=>e.split(" ").filter((e=>!!e.trim())),c=(e,t,n)=>{if(e&&t)if(s.isObject(t))o.entriesOf(t).forEach((([t,n])=>c(e,t,n)));else{const r=s.camelize(t);e.style[r]=n}},u=(e,t)=>{e&&t&&(s.isObject(t)?o.keysOf(t).forEach((t=>u(e,t))):c(e,t,""))};t.addClass=(e,t)=>{e&&t.trim()&&e.classList.add(...a(t))},t.addUnit=function(e,t="px"){return e?r.isNumber(e)||r.isStringNumber(e)?`${e}${t}`:s.isString(e)?e:void i.debugWarn("utils/dom/style","binding value must be a string or number"):""},t.classNameToArray=a,t.getStyle=(e,t)=>{var n;if(!l.isClient||!e||!t)return"";let r=s.camelize(t);"float"===r&&(r="cssFloat");try{const t=e.style[r];if(t)return t;const o=null==(n=document.defaultView)?void 0:n.getComputedStyle(e,"");return o?o[r]:""}catch(t){return e.style[r]}},t.hasClass=(e,t)=>{if(!e||!t)return!1;if(t.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(t)},t.removeClass=(e,t)=>{e&&t.trim()&&e.classList.remove(...a(t))},t.removeStyle=u,t.setStyle=c},31617:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(97387),n(3577);class r extends Error{constructor(e){super(e),this.name="ElementPlusError"}}t.debugWarn=function(e,t){},t.throwError=function(e,t){throw new r(`[${e}] ${t}`)}},3584:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(3577);Object.defineProperty(t,"NOOP",{enumerable:!0,get:function(){return r.NOOP}})},91064:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isKorean=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e)},80466:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(9410),n(64230);var r=n(46011),o=n(96956),i=n(31617);n(3584);var l=n(91064),s=n(43358),a=n(49346),c=n(1067),u=n(95676),d=n(97387),p=n(86610),f=n(92115),m=n(80960),b=n(81150),y=n(69563),g=n(99197),P=n(56270),h=n(4164),v=n(1162),O=n(26389),C=n(81979),T=n(8633),E=n(39410),N=n(26900),S=n(59323),_=n(59797),j=n(3577),F=n(76765);t.castArray=r.castArray,t.unique=r.unique,t.isFirefox=o.isFirefox,t.debugWarn=i.debugWarn,t.throwError=i.throwError,t.isKorean=l.isKorean,t.entriesOf=s.entriesOf,t.getProp=s.getProp,t.keysOf=s.keysOf,t.cAF=a.cAF,t.rAF=a.rAF,t.generateId=c.generateId,t.getRandomInt=c.getRandomInt,t.capitalize=u.capitalize,t.escapeStringRegexp=u.escapeStringRegexp,t.isBoolean=d.isBoolean,t.isElement=d.isElement,t.isEmpty=d.isEmpty,t.isNumber=d.isNumber,t.isPropAbsent=d.isPropAbsent,t.isStringNumber=d.isStringNumber,t.isUndefined=d.isUndefined,t.mutable=p.mutable,t.attemptFocus=f.attemptFocus,t.focusNode=f.focusNode,t.getSibling=f.getSibling,t.isFocusable=f.isFocusable,t.isLeaf=f.isLeaf,t.isVisible=f.isVisible,t.obtainAllFocusableElements=f.obtainAllFocusableElements,t.triggerEvent=f.triggerEvent,t.composeEventHandlers=m.composeEventHandlers,t.whenMouse=m.whenMouse,t.getClientXY=b.getClientXY,t.getOffsetTop=b.getOffsetTop,t.getOffsetTopDistance=b.getOffsetTopDistance,t.isInContainer=b.isInContainer,t.getScrollBarWidth=y.getScrollBarWidth,t.getScrollContainer=y.getScrollContainer,t.isScroll=y.isScroll,t.scrollIntoView=y.scrollIntoView,t.addClass=g.addClass,t.addUnit=g.addUnit,t.classNameToArray=g.classNameToArray,t.getStyle=g.getStyle,t.hasClass=g.hasClass,t.removeClass=g.removeClass,t.removeStyle=g.removeStyle,t.setStyle=g.setStyle,t.changeGlobalNodesTarget=P.changeGlobalNodesTarget,t.createGlobalNode=P.createGlobalNode,t.removeGlobalNode=P.removeGlobalNode,t.CloseComponents=h.CloseComponents,t.TypeComponents=h.TypeComponents,t.TypeComponentsMap=h.TypeComponentsMap,t.ValidateComponentsMap=h.ValidateComponentsMap,t.iconPropType=h.iconPropType,t.withInstall=v.withInstall,t.withInstallDirective=v.withInstallDirective,t.withInstallFunction=v.withInstallFunction,t.withNoopInstall=v.withNoopInstall,t.buildProp=O.buildProp,t.buildProps=O.buildProps,t.definePropType=O.definePropType,t.epPropKey=O.epPropKey,t.isEpProp=O.isEpProp,t.composeRefs=C.composeRefs,t.getComponentSize=T.getComponentSize,t.isValidComponentSize=E.isValidComponentSize,t.isValidDatePickType=E.isValidDatePickType,t.PatchFlags=N.PatchFlags,t.ensureOnlyChild=N.ensureOnlyChild,t.flattedChildren=N.flattedChildren,t.getFirstValidNode=N.getFirstValidNode,t.getNormalizedProps=N.getNormalizedProps,t.isComment=N.isComment,t.isFragment=N.isFragment,t.isTemplate=N.isTemplate,t.isText=N.isText,t.isValidElementNode=N.isValidElementNode,t.renderBlock=N.renderBlock,t.renderIf=N.renderIf,Object.defineProperty(t,"ensureArray",{enumerable:!0,get:function(){return S.castArray}}),Object.defineProperty(t,"isClient",{enumerable:!0,get:function(){return _.isClient}}),Object.defineProperty(t,"isIOS",{enumerable:!0,get:function(){return _.isIOS}}),Object.defineProperty(t,"NOOP",{enumerable:!0,get:function(){return j.NOOP}}),Object.defineProperty(t,"camelize",{enumerable:!0,get:function(){return j.camelize}}),Object.defineProperty(t,"hasOwn",{enumerable:!0,get:function(){return j.hasOwn}}),Object.defineProperty(t,"hyphenate",{enumerable:!0,get:function(){return j.hyphenate}}),Object.defineProperty(t,"isArray",{enumerable:!0,get:function(){return j.isArray}}),Object.defineProperty(t,"isDate",{enumerable:!0,get:function(){return j.isDate}}),Object.defineProperty(t,"isFunction",{enumerable:!0,get:function(){return j.isFunction}}),Object.defineProperty(t,"isObject",{enumerable:!0,get:function(){return j.isObject}}),Object.defineProperty(t,"isPromise",{enumerable:!0,get:function(){return j.isPromise}}),Object.defineProperty(t,"isString",{enumerable:!0,get:function(){return j.isString}}),Object.defineProperty(t,"isSymbol",{enumerable:!0,get:function(){return j.isSymbol}}),Object.defineProperty(t,"kebabCase",{enumerable:!0,get:function(){return j.hyphenate}}),Object.defineProperty(t,"isVNode",{enumerable:!0,get:function(){return F.isVNode}})},43358:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(59323),o=n(3577);Object.defineProperty(t,"hasOwn",{enumerable:!0,get:function(){return o.hasOwn}}),t.entriesOf=e=>Object.entries(e),t.getProp=(e,t,n)=>({get value(){return r.get(e,t,n)},set value(n){r.set(e,t,n)}}),t.keysOf=e=>Object.keys(e)},49346:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(96956);var r=n(59797);t.cAF=e=>r.isClient?window.cancelAnimationFrame(e):clearTimeout(e),t.rAF=e=>r.isClient?window.requestAnimationFrame(e):setTimeout(e,16)},1067:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateId=()=>Math.floor(1e4*Math.random()),t.getRandomInt=e=>Math.floor(Math.random()*Math.floor(e))},95676:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(3577);Object.defineProperty(t,"camelize",{enumerable:!0,get:function(){return r.camelize}}),Object.defineProperty(t,"hyphenate",{enumerable:!0,get:function(){return r.hyphenate}}),Object.defineProperty(t,"kebabCase",{enumerable:!0,get:function(){return r.hyphenate}}),t.capitalize=e=>r.capitalize(e),t.escapeStringRegexp=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")},97387:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(3577),o=n(59323),i=n(76765);Object.defineProperty(t,"isArray",{enumerable:!0,get:function(){return r.isArray}}),Object.defineProperty(t,"isDate",{enumerable:!0,get:function(){return r.isDate}}),Object.defineProperty(t,"isFunction",{enumerable:!0,get:function(){return r.isFunction}}),Object.defineProperty(t,"isObject",{enumerable:!0,get:function(){return r.isObject}}),Object.defineProperty(t,"isPromise",{enumerable:!0,get:function(){return r.isPromise}}),Object.defineProperty(t,"isString",{enumerable:!0,get:function(){return r.isString}}),Object.defineProperty(t,"isSymbol",{enumerable:!0,get:function(){return r.isSymbol}}),Object.defineProperty(t,"isVNode",{enumerable:!0,get:function(){return i.isVNode}}),t.isBoolean=e=>"boolean"==typeof e,t.isElement=e=>"undefined"!=typeof Element&&e instanceof Element,t.isEmpty=e=>!e&&0!==e||r.isArray(e)&&0===e.length||r.isObject(e)&&!Object.keys(e).length,t.isNumber=e=>"number"==typeof e,t.isPropAbsent=e=>o.isNil(e),t.isStringNumber=e=>!!r.isString(e)&&!Number.isNaN(Number(e)),t.isUndefined=e=>void 0===e},86610:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mutable=e=>e},56270:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(96956);var r=n(59797);const o=[];let i=r.isClient?document.body:void 0;t.changeGlobalNodesTarget=function(e){e!==i&&(i=e,o.forEach((e=>{!1===e.contains(i)&&i.appendChild(e)})))},t.createGlobalNode=function(e){const t=document.createElement("div");return void 0!==e&&t.setAttribute("id",e),i.appendChild(t),o.push(t),t},t.removeGlobalNode=function(e){o.splice(o.indexOf(e),1),e.remove()}},4164:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(98097);n(62677);const o=n(26389).definePropType([String,Object,Function]),i={Close:r.Close},l={Close:r.Close,SuccessFilled:r.SuccessFilled,InfoFilled:r.InfoFilled,WarningFilled:r.WarningFilled,CircleCloseFilled:r.CircleCloseFilled},s={success:r.SuccessFilled,warning:r.WarningFilled,error:r.CircleCloseFilled,info:r.InfoFilled},a={validating:r.Loading,success:r.CircleCheck,error:r.CircleClose};t.CloseComponents=i,t.TypeComponents=l,t.TypeComponentsMap=s,t.ValidateComponentsMap=a,t.iconPropType=o},64230:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(56270),o=n(4164),i=n(1162);n(62677);var l=n(81979),s=n(8633);n(8411);var a=n(39410),c=n(26900),u=n(26389);t.changeGlobalNodesTarget=r.changeGlobalNodesTarget,t.createGlobalNode=r.createGlobalNode,t.removeGlobalNode=r.removeGlobalNode,t.CloseComponents=o.CloseComponents,t.TypeComponents=o.TypeComponents,t.TypeComponentsMap=o.TypeComponentsMap,t.ValidateComponentsMap=o.ValidateComponentsMap,t.iconPropType=o.iconPropType,t.withInstall=i.withInstall,t.withInstallDirective=i.withInstallDirective,t.withInstallFunction=i.withInstallFunction,t.withNoopInstall=i.withNoopInstall,t.composeRefs=l.composeRefs,t.getComponentSize=s.getComponentSize,t.isValidComponentSize=a.isValidComponentSize,t.isValidDatePickType=a.isValidDatePickType,t.PatchFlags=c.PatchFlags,t.ensureOnlyChild=c.ensureOnlyChild,t.flattedChildren=c.flattedChildren,t.getFirstValidNode=c.getFirstValidNode,t.getNormalizedProps=c.getNormalizedProps,t.isComment=c.isComment,t.isFragment=c.isFragment,t.isTemplate=c.isTemplate,t.isText=c.isText,t.isValidElementNode=c.isValidElementNode,t.renderBlock=c.renderBlock,t.renderIf=c.renderIf,t.buildProp=u.buildProp,t.buildProps=u.buildProps,t.definePropType=u.definePropType,t.epPropKey=u.epPropKey,t.isEpProp=u.isEpProp},1162:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(3577);t.withInstall=(e,t)=>{if(e.install=n=>{for(const r of[e,...Object.values(null!=t?t:{})])n.component(r.name,r)},t)for(const[n,r]of Object.entries(t))e[n]=r;return e},t.withInstallDirective=(e,t)=>(e.install=n=>{n.directive(t,e)},e),t.withInstallFunction=(e,t)=>(e.install=n=>{e._context=n._context,n.config.globalProperties[t]=e},e),t.withNoopInstall=e=>(e.install=r.NOOP,e)},62677:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(10577),n(52491);var r=n(26389);t.buildProp=r.buildProp,t.buildProps=r.buildProps,t.definePropType=r.definePropType,t.epPropKey=r.epPropKey,t.isEpProp=r.isEpProp},26389:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(76765),o=n(59323);n(97387),n(43358);var i=n(3577);const l="__epPropKey",s=e=>i.isObject(e)&&!!e[l],a=(e,t)=>{if(!i.isObject(e)||s(e))return e;const{values:n,required:o,default:a,type:c,validator:u}=e,d={type:c,required:!!o,validator:n||u?o=>{let l=!1,s=[];if(n&&(s=Array.from(n),i.hasOwn(e,"default")&&s.push(a),l||(l=s.includes(o))),u&&(l||(l=u(o))),!l&&s.length>0){const e=[...new Set(s)].map((e=>JSON.stringify(e))).join(", ");r.warn(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${e}], got value ${JSON.stringify(o)}.`)}return l}:void 0,[l]:!0};return i.hasOwn(e,"default")&&(d.default=a),d};t.buildProp=a,t.buildProps=e=>o.fromPairs(Object.entries(e).map((([e,t])=>[e,a(t,e)]))),t.definePropType=e=>e,t.epPropKey=l,t.isEpProp=s},52491:()=>{},10577:()=>{},81979:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(97387);var r=n(3577);t.composeRefs=(...e)=>t=>{e.forEach((e=>{r.isFunction(e)?e(t):e.value=t}))}},8633:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(60785);var r=n(33658);t.getComponentSize=e=>r.componentSizeMap[e||"default"]},8411:()=>{},39410:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(60785);var r=n(33658),o=n(67146);t.isValidComponentSize=e=>["",...r.componentSizes].includes(e),t.isValidDatePickType=e=>[...o.datePickTypes].includes(e)},26900:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(76765),o=n(3577);n(43358);var i=n(31617),l=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(l||{});function s(e){return r.isVNode(e)&&e.type===r.Fragment}function a(e){return r.isVNode(e)&&e.type===r.Comment}const c="template";function u(e){return r.isVNode(e)&&e.type===c}function d(e,t){if(!a(e))return s(e)||u(e)?t>0?p(e.children,t-1):void 0:e}const p=(e,t=3)=>Array.isArray(e)?d(e[0],t):d(e,t);function f(...e){return r.openBlock(),r.createBlock(...e)}const m=e=>{const t=o.isArray(e)?e:[e],n=[];return t.forEach((e=>{var t;o.isArray(e)?n.push(...m(e)):r.isVNode(e)&&o.isArray(e.children)?n.push(...m(e.children)):(n.push(e),r.isVNode(e)&&(null==(t=e.component)?void 0:t.subTree)&&n.push(...m(e.component.subTree)))})),n};t.PatchFlags=l,t.ensureOnlyChild=e=>{if(!o.isArray(e)||e.length>1)throw new Error("expect to receive a single Vue element child");return e[0]},t.flattedChildren=m,t.getFirstValidNode=p,t.getNormalizedProps=e=>{if(!r.isVNode(e))return i.debugWarn("utils/vue/vnode","[getNormalizedProps] must be a VNode"),{};const t=e.props||{},n=(r.isVNode(e.type)?e.type.props:void 0)||{},l={};return Object.keys(n).forEach((e=>{o.hasOwn(n[e],"default")&&(l[e]=n[e].default)})),Object.keys(t).forEach((e=>{l[o.camelize(e)]=t[e]})),l},t.isComment=a,t.isFragment=s,t.isTemplate=u,t.isText=function(e){return r.isVNode(e)&&e.type===r.Text},t.isValidElementNode=function(e){return r.isVNode(e)&&!s(e)&&!a(e)},t.renderBlock=f,t.renderIf=function(e,...t){return e?f(...t):r.createCommentVNode("v-if",!0)}},62042:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.version="2.4.4"}}]);