import{A as y}from"./AppType.6775b756.js";import{L as f}from"./index.9e43ebc8.js";import{B as v}from"./index.0eaab664.js";import{C as g}from"./index.df631d65.js";import{u as C,a as p,_ as F,b as k,c as E}from"./en-US.628e0d34.js";import{w as z,a as b}from"./utils.3a4595f4.js";import{d as h}from"./index.9b1139e6.js";import{_ as B}from"./elevation.229458c1.js";import{r as x,e as n,o as V,c as w,a as t,i as e,j as r,m as i,t as c}from"./vendor.49f89f0d.js";import"./shared.506a394a.js";import"./index.f8492b74.js";import"./index.48ee5316.js";import"./elements.92736b4e.js";import"./components.38f1d302.js";var D={type:"\u7C7B\u578B",size:"\u5927\u5C0F",color:"\u989C\u8272",wrap:"\u5305\u88F9\u5185\u5BB9",open:"\u6253\u5F00",close:"\u5173\u95ED",cardTitle:"\u4ECB\u7ECD",cardDesc:"Varlet \u662F\u4E00\u4E2A\u57FA\u4E8EVue3\u5F00\u53D1\u7684 Material \u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\uFF0C\u5168\u9762\u62E5\u62B1Vue3\u751F\u6001\uFF0C\u7531\u793E\u533A\u7684\u5C0F\u4F19\u4F34\u5F00\u53D1\u548C\u7EF4\u62A4\u3002"},A={type:"Type",size:"Size",color:"Color",wrap:"Wrap",open:"Open",close:"Close",cardTitle:"Intro",cardDesc:"Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community."};const{add:u,use:N,pack:L,packs:le,merge:ne}=C(),T=s=>{E(s),N(s)};p("zh-CN",F);p("en-US",k);u("zh-CN",D);u("en-US",A);const S={name:"LoadingExample",components:{VarLoading:f,VarButton:v,VarCard:g,AppType:y},setup(){const s=x(!1);return z(T),b(h),{pack:L,loading:s}}},U={class:"loading-demo"},M={class:"loading-demo__type"},I={class:"loading-demo__type-block"},j={class:"loading-demo__type"},O={class:"loading-demo__type-block"},W={class:"loading-demo__size"},q={class:"loading-demo__size-block"};function G(s,d,H,o,J,K){const l=n("app-type"),a=n("var-loading"),_=n("var-button"),m=n("var-card");return V(),w("div",U,[t("div",M,[e(l,null,{default:r(()=>[i(c(o.pack.type),1)]),_:1}),t("div",I,[e(a,{type:"circle"}),e(a,{type:"cube"}),e(a,{type:"wave"}),e(a,{type:"rect"}),e(a,{type:"disappear"})])]),t("div",j,[e(l,null,{default:r(()=>[i(c(o.pack.color),1)]),_:1}),t("div",O,[e(a,{type:"circle",color:"#2979ff"}),e(a,{type:"cube",color:"#2979ff"}),e(a,{type:"wave",color:"#2979ff"}),e(a,{type:"rect",color:"#2979ff"}),e(a,{type:"disappear",color:"#2979ff"})])]),t("div",W,[e(l,null,{default:r(()=>[i(c(o.pack.size),1)]),_:1}),t("div",q,[e(a,{type:"circle",size:"small"}),e(a,{type:"cube",size:"small"}),e(a,{type:"wave",size:"small"}),e(a,{type:"rect",size:"small"}),e(a,{type:"disappear",size:"small"})])]),t("div",null,[e(l,null,{default:r(()=>[i(c(o.pack.wrap),1)]),_:1}),e(_,{onClick:d[0]||(d[0]=P=>o.loading=!o.loading),style:{"margin-bottom":"8px"}},{default:r(()=>[i(c(o.loading?o.pack.close:o.pack.open),1)]),_:1}),e(a,{description:"loading....",type:"circle",loading:o.loading},{default:r(()=>[e(m,{title:o.pack.cardTitle,description:o.pack.cardDesc},null,8,["title","description"])]),_:1},8,["loading"])])])}var de=B(S,[["render",G],["__scopeId","data-v-17ad58e8"]]);export{de as default};
