import{getCurrentScope as P,onScopeDispose as S,isRef as d,reactive as x,unref as b,onMounted as C,nextTick as v,getCurrentInstance as F,watch as _,toValue as h}from"vue";function j(e){return P()?(S(e),!0):!1}function G(e){if(!d(e))return x(e);const n=new Proxy({},{get(r,t,i){return b(Reflect.get(e.value,t,i))},set(r,t,i){return d(e.value[t])&&!d(i)?e.value[t].value=i:e.value[t]=i,!0},deleteProperty(r,t){return Reflect.deleteProperty(e.value,t)},has(r,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return x(n)}const L=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const V=e=>e!=null,k=Object.prototype.toString,E=e=>k.call(e)==="[object Object]",p=()=>{};function D(e,n){function r(...t){return new Promise((i,u)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(i).catch(u)})}return r}function A(e,n={}){let r,t,i=p;const u=o=>{clearTimeout(o),i(),i=p};let a;return o=>{const s=h(e),l=h(n.maxWait);return r&&u(r),s<=0||l!==void 0&&l<=0?(t&&(u(t),t=null),Promise.resolve(o())):new Promise((f,y)=>{i=n.rejectOnCancel?y:f,a=o,l&&!t&&(t=setTimeout(()=>{r&&u(r),t=null,f(a())},l)),r=setTimeout(()=>{t&&u(t),t=null,f(o())},s)})}}function W(...e){let n=0,r,t=!0,i=p,u,a,c,o,s;!d(e[0])&&typeof e[0]=="object"?{delay:a,trailing:c=!0,leading:o=!0,rejectOnCancel:s=!1}=e[0]:[a,c=!0,o=!0,s=!1]=e;const l=()=>{r&&(clearTimeout(r),r=void 0,i(),i=p)};return y=>{const m=h(a),g=Date.now()-n,w=()=>u=y();return l(),m<=0?(n=Date.now(),w()):(g>m&&(o||!t)?(n=Date.now(),w()):c&&(u=new Promise((T,O)=>{i=s?O:T,r=setTimeout(()=>{n=Date.now(),t=!0,T(w()),l()},Math.max(0,m-g))})),!o&&!r&&(r=setTimeout(()=>t=!0,m)),t=!1,u)}}function K(e){return Array.isArray(e)?e:[e]}function I(e){return F()}function N(e,n=200,r={}){return D(A(n,r),e)}function q(e,n=200,r=!1,t=!0,i=!1){return D(W(n,r,t,i),e)}function z(e,n=!0,r){I()?C(e,r):n?e():v(e)}function B(e,n,r){return _(e,n,{...r,immediate:!0})}export{K as a,p as b,j as c,q as d,z as e,E as f,L as i,V as n,G as t,N as u,B as w};
