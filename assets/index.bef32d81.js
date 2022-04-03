import{u as _}from"./provide.78f62b24.js";import{n as x,i as ee}from"./elements.92736b4e.js";import{t as M,i as te}from"./shared.506a394a.js";import{_ as ae}from"./elevation.229458c1.js";import{d as le,r as h,b as ne,y as oe,x as re,C as ue,o as g,c as k,a as ie,G as V,p as X,n as W,F as se,k as ve,h as ce}from"./vendor.49f89f0d.js";const de={loop:{type:Boolean,default:!0},autoplay:{type:[String,Number]},duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:{type:String},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:{type:Function}};const fe=250,pe=20,me=le({name:"VarSwipe",props:de,setup(t){const v=h(null),u=h(0),L=ne(()=>t.vertical),s=h(0),r=h(0),i=h(!1),n=h(0),{swipeItems:I,bindSwipeItems:q,length:l}=_();let w=!1,$=-1,T,y,P,f,p;const c=e=>I.find(({index:a})=>a.value===e),R=()=>{!t.loop||(r.value>=0&&c(l.value-1).setTranslate(-s.value),r.value<=-(s.value-u.value)&&c(0).setTranslate(s.value),r.value>-(s.value-u.value)&&r.value<0&&(c(l.value-1).setTranslate(0),c(0).setTranslate(0)))},z=e=>{const a=te(e)?e:Math.floor((r.value-u.value/2)/-u.value),{loop:o}=t;return a<=-1?o?-1:0:a>=l.value?o?l.value:l.value-1:a},G=e=>{const{loop:a}=t;return e===-1?a?l.value-1:0:e===l.value?a?0:l.value-1:e},E=e=>{const{loop:a}=t;return e<0?a?l.value-1:0:e>l.value-1?a?0:l.value-1:e},D=e=>{const a=r.value>=u.value,o=r.value<=-s.value,d=0,m=-(s.value-u.value);i.value=!0,(a||o)&&(i.value=!0,r.value=o?d:m,c(0).setTranslate(0),c(l.value-1).setTranslate(0)),x(()=>{i.value=!1,e==null||e()})},H=()=>{n.value=E(M(t.initialIndex))},N=()=>{const{autoplay:e}=t;!e||l.value<=1||(B(),$=window.setTimeout(()=>{Y(),N()},M(e)))},B=()=>{$&&clearTimeout($)},U=(e,a)=>{if(e>a&&e>10)return"horizontal";if(a>e&&a>10)return"vertical"},j=e=>{if(l.value<=1||!t.touchable)return;const{clientX:a,clientY:o}=e.touches[0];T=a,y=o,P=performance.now(),w=!0,B(),D(()=>{i.value=!0})},J=e=>{const{touchable:a,vertical:o}=t;if(!w||!a)return;const{clientX:d,clientY:m}=e.touches[0],b=Math.abs(d-T),C=Math.abs(m-y);if(U(b,C)===(o?"vertical":"horizontal")){e.preventDefault();const Q=f!==void 0?d-f:0,Z=p!==void 0?m-p:0;f=d,p=m,r.value+=o?Z:Q,R()}},K=()=>{if(!w)return;const{vertical:e,onChange:a}=t,o=e?p<y:f<T,d=Math.abs(e?y-p:T-f),b=performance.now()-P<=fe&&d>=pe?z(o?n.value+1:n.value-1):z();w=!1,i.value=!1,f=void 0,p=void 0,r.value=b*-u.value;const C=n.value;n.value=G(b),N(),C!==n.value&&(a==null||a(n.value))},S=()=>{i.value=!0,u.value=t.vertical?v.value.offsetHeight:v.value.offsetWidth,s.value=u.value*l.value,r.value=n.value*-u.value,I.forEach(e=>{e.setTranslate(0)}),N(),setTimeout(()=>{i.value=!1})},Y=()=>{if(l.value<=1)return;const{loop:e,onChange:a}=t,o=n.value;n.value=E(o+1),a==null||a(n.value),D(()=>{if(o===l.value-1&&e){c(0).setTranslate(s.value),r.value=l.value*-u.value;return}o!==l.value-1&&(r.value=n.value*-u.value)})},F=()=>{if(l.value<=1)return;const{loop:e,onChange:a}=t,o=n.value;n.value=E(o-1),a==null||a(n.value),D(()=>{if(o===0&&e){c(l.value-1).setTranslate(-s.value),r.value=u.value;return}o!==0&&(r.value=n.value*-u.value)})},O=e=>{if(l.value<=1||e===n.value)return;e=e<0?0:e,e=e>=l.value?l.value:e;const a=e>n.value?Y:F;Array.from({length:Math.abs(e-n.value)}).forEach(a)};return q({size:u,vertical:L}),oe(()=>l.value,async()=>{await ee(),H(),S()}),re(()=>{window.addEventListener("resize",S)}),ue(()=>{window.removeEventListener("resize",S),B()}),{length:l,index:n,swipeEl:v,trackSize:s,translate:r,lockDuration:i,handleTouchstart:j,handleTouchmove:J,handleTouchend:K,next:Y,prev:F,to:O,resize:S,toNumber:M}}}),he={class:"var-swipe",ref:"swipeEl"},we=["onClick"];function Te(t,v,u,L,s,r){return g(),k("div",he,[ie("div",{class:X(["var-swipe__track",[t.vertical?"var-swipe--vertical":null]]),style:W({width:t.vertical?void 0:`${t.trackSize}px`,height:t.vertical?`${t.trackSize}px`:void 0,transform:`translate${t.vertical?"Y":"X"}(${t.translate}px)`,transitionDuration:t.lockDuration?"0ms":`${t.toNumber(t.duration)}ms`}),onTouchstart:v[0]||(v[0]=(...i)=>t.handleTouchstart&&t.handleTouchstart(...i)),onTouchmove:v[1]||(v[1]=(...i)=>t.handleTouchmove&&t.handleTouchmove(...i)),onTouchend:v[2]||(v[2]=(...i)=>t.handleTouchend&&t.handleTouchend(...i))},[V(t.$slots,"default")],38),V(t.$slots,"indicator",{index:t.index,length:t.length},()=>[t.indicator&&t.length?(g(),k("div",{key:0,class:X(["var-swipe__indicators",[t.vertical?"var-swipe--indicators-vertical":null]])},[(g(!0),k(se,null,ve(t.length,(i,n)=>(g(),k("div",{class:X(["var-swipe__indicator",[t.index===n?"var-swipe--indicator-active":null,t.vertical?"var-swipe--indicator-vertical":null]]),style:W({background:t.indicatorColor}),key:i,onClick:I=>t.to(n)},null,14,we))),128))],2)):ce("v-if",!0)])],512)}var A=ae(me,[["render",Te]]);A.install=function(t){t.component(A.name,A)};export{A as S,de as p};
