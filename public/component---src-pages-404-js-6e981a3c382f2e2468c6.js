(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[883],{242:function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.Z=f;var l,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=l?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(7294)),o=(l=r(5697))&&l.__esModule?l:{default:l};function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,l=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){l=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(l)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e){var t=e.title,r=e.src,n=function(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,["title","src"]),l=(0,a.useRef)(),o=c((0,a.useState)(500),2),i=o[0],s=o[1],f=(0,a.useCallback)((function(e){var t=e.data,r=void 0===t?{}:t;e.source===l.current.contentWindow&&"string"!=typeof r&&r["datawrapper-height"]&&s(Object.values(r["datawrapper-height"])[0])}),[s,l]);return(0,a.useEffect)((function(){return window.addEventListener("message",f),function(){return window.removeEventListener("message",f)}}),[i,s,f]),a.default.createElement("iframe",u({ref:l,scrolling:"no",frameBorder:"0",width:"100%"},n,{title:t,src:r,height:i}))}f.propTypes={title:o.default.string.isRequired,src:o.default.string.isRequired,loading:o.default.oneOf(["eager","lazy"])}},313:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),l=r(4983),a=r(5444),o=r(242),i=r(5072);function u(){return n.createElement("footer",null,n.createElement("nav",null,n.createElement("ol",null,n.createElement(a.Link,{to:"/om-meg"},n.createElement("li",null,n.createElement("h3",null,"Om meg"),n.createElement("p",null,"Mer om meg og hva jeg gjør."))),n.createElement(a.Link,{to:"/diskusjon"},n.createElement("li",null,n.createElement("h3",null,"Diskusjon"),n.createElement("p",null,"Tekster om forskjellige temaer."))),n.createElement(a.Link,{to:"/journalistikk"},n.createElement("li",null,n.createElement("h3",null,"Journalistikk"),n.createElement("p",null,"Artikler og reportasjer jeg har lagd."))),n.createElement(a.Link,{to:"/foto"},n.createElement("li",null,n.createElement("h3",null,"Foto"),n.createElement("p",null,"En samling av bilder jeg har tatt."))))))}var c=function(e){var t=e.source,r=e.size,l=e.caption,a=e.photographer;return n.createElement("figure",{className:r},n.createElement("img",{src:t,alt:l}),n.createElement("figcaption",null,n.createElement("span",null,l),n.createElement("span",null,a)))},s={Link:a.Link,DWChart:o.Z,Figure:c};function f(e){var t=e.children;return n.createElement("div",{className:"layout-wrapper"},n.createElement(i.Z,null),n.createElement("main",null,n.createElement(l.MDXProvider,{components:s},t)),n.createElement(u,null))}},6179:function(e,t,r){"use strict";var n=r(7294),l=r(5414),a=r(5444),o=function(e){var t,r=e.description,o=e.lang,i=e.meta,u=e.title,c=(0,a.useStaticQuery)("2774968152").site,s=r||c.siteMetadata.description,f=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(l.q,{htmlAttributes:{lang:o},title:u,titleTemplate:f?"%s • "+f:null,meta:[{name:"description",content:s},{property:"og:title",content:u},{property:"og:description",content:s},{property:"og:type",content:"website"}].concat(i)})};o.defaultProps={lang:"no",meta:[],description:"Artikler og foto av Magnus R. Kolstad, journalistikkstudent på Universitetet i Stavanger."},t.Z=o},9616:function(e,t,r){"use strict";r.r(t);var n=r(7294),l=r(313),a=r(6179);t.default=function(e){var t=e.location;return n.createElement(l.Z,{location:t},n.createElement(a.Z,{title:"Ikke funnet (404)"}),n.createElement("article",{className:"post"},n.createElement("h1",null,"Ikke funnet (404)"),n.createElement("p",null,"Beklager det.")),n.createElement("br",null),n.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-6e981a3c382f2e2468c6.js.map