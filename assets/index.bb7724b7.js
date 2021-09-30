import{q as g,r as y,x as h,L as B,d as i,o as m,c as u,O as x,m as j,V as C,h as d,w as f,F as S,j as T,k as $,l as w,t as E}from"./vendor.cfbfc887.js";import{B as _}from"./index.c01af851.js";import{I as v}from"./index.670ac4ea.js";import{_ as b,D as L,E as V,F as N,G as F,H,J as I,j as M}from"./elevation.6b325341.js";import{C as k}from"./index.4974dd34.js";import"./index.20a388b7.js";import"./index.fba1babd.js";import"./components.fe85d05d.js";const q={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},target:{type:String},onClick:{type:Function}};const D=g({name:"VarBackTop",components:{[_.name]:_,[v.name]:v},props:q,setup(t){let e=window;const s=y(!1),c=()=>{var n;(n=t.onClick)==null||n.call(t);const o=L(e);V(e,{left:o,duration:t.duration,animation:N})},l=F(()=>{s.value=I(e)>=M(t.visibilityHeight)},200),a=()=>{if(!H(t.target))throw Error('[Varlet] BackTop: type of prop "target" should be a string');const o=document.querySelector(t.target);if(!o)throw Error('[Varlet] BackTop: "target" should be a selector');return o};return h(()=>{t.target&&(e=a()),e.addEventListener("scroll",l)}),B(()=>{e.removeEventListener("scroll",l)}),{show:s,click:c}}});function O(t,e,s,c,p,l){const a=i("var-icon"),o=i("var-button");return m(),u("div",{class:j(["var-back-top",[t.show?"var-back-top--active":null]]),onClick:e[0]||(e[0]=C((...n)=>t.click&&t.click(...n),["stop"]))},[x(t.$slots,"default",{},()=>[d(o,{type:"primary",round:"",class:"var-back-top__button"},{default:f(()=>[d(a,{name:"chevron-up"})]),_:1})])],2)}var r=b(D,[["render",O]]);r.install=function(t){t.component(r.name,r)};const z=[...Array(100).keys()],A={name:"BackTopExample",components:{[r.name]:r,[k.name]:k},setup(){return{lists:z}}};function G(t,e,s,c,p,l){const a=i("var-cell"),o=i("var-back-top");return m(),u("div",null,[(m(!0),u(S,null,T(c.lists,n=>(m(),$(a,{key:n},{default:f(()=>[w("Scroll to bottom "+E(n),1)]),_:2},1024))),128)),d(o,{duration:300})])}var Y=b(A,[["render",G]]);export{Y as default};
