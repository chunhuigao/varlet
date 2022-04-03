import{F as z,u as E}from"./provide.515f51d9.js";import{a as W}from"./components.38f1d302.js";import{u as B}from"./index.3ef9e403.js";import{u as C}from"./shared.506a394a.js";import{_ as N}from"./elevation.229458c1.js";import{d as S,b as s,y as b,e as w,o as D,c as q,a as P,G as j,p as H,i as I,z as J}from"./vendor.49f89f0d.js";function K(e){return["horizontal","vertical"].includes(e)}const L={modelValue:{type:Array,default:()=>[]},max:{type:[String,Number]},direction:{type:String,default:"horizontal",validator:K},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const O=S({name:"VarCheckboxGroup",components:{VarFormDetails:z},props:L,setup(e){const u=s(()=>e.max),d=s(()=>e.modelValue.length),{length:m,checkboxes:c,bindCheckboxes:h}=B(),{bindForm:r}=E(),{errorMessage:v,validateWithTrigger:y,validate:A,resetValidation:l}=W(),G=s(()=>v.value),U=a=>{J(()=>{const{validateTrigger:t,rules:o,modelValue:n}=e;y(t,a,o,n)})},g=a=>{var t,o;(t=e["onUpdate:modelValue"])==null||t.call(e,a),(o=e.onChange)==null||o.call(e,a),U("onChange")},$=a=>{const{modelValue:t}=e;t.includes(a)||g([...t,a])},F=a=>{const{modelValue:t}=e;!t.includes(a)||g(t.filter(o=>o!==a))},f=()=>c.forEach(({sync:a})=>a(e.modelValue)),k=()=>{c.forEach(a=>a.resetWithAnimation())},M=()=>{var o;const a=c.map(({checkedValue:n})=>n.value),t=C(a);return k(),(o=e["onUpdate:modelValue"])==null||o.call(e,t),t},T=()=>{var o;const a=c.filter(({checked:n})=>!n.value).map(({checkedValue:n})=>n.value),t=C(a);return k(),(o=e["onUpdate:modelValue"])==null||o.call(e,t),t},V=()=>{var a;(a=e["onUpdate:modelValue"])==null||a.call(e,[]),l()},_=()=>A(e.rules,e.modelValue);b(()=>e.modelValue,f,{deep:!0}),b(()=>m.value,f);const x={max:u,checkedCount:d,onChecked:$,onUnchecked:F,validate:_,resetValidation:l,reset:V,errorMessage:G};return h(x),r==null||r(x),{errorMessage:v,checkAll:M,inverseAll:T,reset:V,validate:_,resetValidation:l}}}),Q={class:"var-checkbox-group__wrap"};function R(e,u,d,m,c,h){const r=w("var-form-details");return D(),q("div",Q,[P("div",{class:H(["var-checkbox-group",[`var-checkbox-group--${e.direction}`]])},[j(e.$slots,"default")],2),I(r,{"error-message":e.errorMessage},null,8,["error-message"])])}var i=N(O,[["render",R]]);i.install=function(e){e.component(i.name,i)};export{i as C};
