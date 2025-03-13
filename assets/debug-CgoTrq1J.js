import{g as O}from"./ajv-keywords-DJWKfJAw.js";import{r as q}from"./ms-CzQ2E3wO.js";var m={exports:{}},A,I;function _(){if(I)return A;I=1;function f(s){e.debug=e,e.default=e,e.coerce=r,e.disable=w,e.enable=b,e.enabled=y,e.humanize=q(),e.destroy=l,Object.keys(s).forEach(n=>{e[n]=s[n]}),e.names=[],e.skips=[],e.formatters={};function p(n){let t=0;for(let o=0;o<n.length;o++)t=(t<<5)-t+n.charCodeAt(o),t|=0;return e.colors[Math.abs(t)%e.colors.length]}e.selectColor=p;function e(n){let t,o=null,i,a;function C(...c){if(!C.enabled)return;const u=C,F=Number(new Date),E=F-(t||F);u.diff=E,u.prev=t,u.curr=F,t=F,c[0]=e.coerce(c[0]),typeof c[0]!="string"&&c.unshift("%O");let g=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,(v,j)=>{if(v==="%%")return"%";g++;const x=e.formatters[j];if(typeof x=="function"){const D=c[g];v=x.call(u,D),c.splice(g,1),g--}return v}),e.formatArgs.call(u,c),(u.log||e.log).apply(u,c)}return C.namespace=n,C.useColors=e.useColors(),C.color=e.selectColor(n),C.extend=h,C.destroy=e.destroy,Object.defineProperty(C,"enabled",{enumerable:!0,configurable:!1,get:()=>o!==null?o:(i!==e.namespaces&&(i=e.namespaces,a=e.enabled(n)),a),set:c=>{o=c}}),typeof e.init=="function"&&e.init(C),C}function h(n,t){const o=e(this.namespace+(typeof t>"u"?":":t)+n);return o.log=this.log,o}function b(n){e.save(n),e.namespaces=n,e.names=[],e.skips=[];const t=(typeof n=="string"?n:"").trim().replace(" ",",").split(",").filter(Boolean);for(const o of t)o[0]==="-"?e.skips.push(o.slice(1)):e.names.push(o)}function d(n,t){let o=0,i=0,a=-1,C=0;for(;o<n.length;)if(i<t.length&&(t[i]===n[o]||t[i]==="*"))t[i]==="*"?(a=i,C=o,i++):(o++,i++);else if(a!==-1)i=a+1,C++,o=C;else return!1;for(;i<t.length&&t[i]==="*";)i++;return i===t.length}function w(){const n=[...e.names,...e.skips.map(t=>"-"+t)].join(",");return e.enable(""),n}function y(n){for(const t of e.skips)if(d(n,t))return!1;for(const t of e.names)if(d(n,t))return!0;return!1}function r(n){return n instanceof Error?n.stack||n.message:n}function l(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}return A=f,A}var k;function z(){return k||(k=1,function(f,s){var p={};s.formatArgs=h,s.save=b,s.load=d,s.useColors=e,s.storage=w(),s.destroy=(()=>{let r=!1;return()=>{r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),s.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function e(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let r;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(r=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(r[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function h(r){if(r[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+r[0]+(this.useColors?"%c ":" ")+"+"+f.exports.humanize(this.diff),!this.useColors)return;const l="color: "+this.color;r.splice(1,0,l,"color: inherit");let n=0,t=0;r[0].replace(/%[a-zA-Z%]/g,o=>{o!=="%%"&&(n++,o==="%c"&&(t=n))}),r.splice(t,0,l)}s.log=console.debug||console.log||(()=>{});function b(r){try{r?s.storage.setItem("debug",r):s.storage.removeItem("debug")}catch{}}function d(){let r;try{r=s.storage.getItem("debug")}catch{}return!r&&typeof process<"u"&&"env"in process&&(r=p.DEBUG),r}function w(){try{return localStorage}catch{}}f.exports=_()(s);const{formatters:y}=f.exports;y.j=function(r){try{return JSON.stringify(r)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}}}(m,m.exports)),m.exports}var B=z();const J=O(B);export{J as c};
