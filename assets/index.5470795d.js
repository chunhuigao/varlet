import{F as C,u as G}from"./provide.02108c43.js";import{b as H,e as J,u as S,a as L,f as Q}from"./components.fe85d05d.js";import{_ as E}from"./elevation.6b325341.js";import{q as p,b as w,y as T,d as z,o as B,c as N,a as A,O as $,m as k,h as D,z as j,r as F,e as X,i as Z,n as x,P as ee}from"./vendor.cfbfc887.js";import{R as ae}from"./index.20a388b7.js";import{I as K}from"./index.670ac4ea.js";function oe(e){return["horizontal","vertical"].includes(e)}const re={modelValue:{default:void 0},direction:{type:String,default:"horizontal",validator:oe},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},W=Symbol("RADIO_GROUP_BIND_RADIO_KEY"),Y=Symbol("RADIO_GROUP_COUNT_RADIO_KEY");function ne(){const{bindChildren:e,childProviders:o}=H(W),{length:t}=J(Y);return{length:t,radios:o,bindRadios:e}}const ie=p({name:"VarRadioGroup",components:{[C.name]:C},props:re,setup(e){const{length:o,radios:t,bindRadios:h}=ne(),{bindForm:n}=G(),{errorMessage:d,validateWithTrigger:a,validate:c,resetValidation:u}=S(),y=w(()=>d.value),O=i=>{j(()=>{const{validateTrigger:v,rules:f,modelValue:b}=e;a(v,i,f,b)})},g=()=>t.forEach(({sync:i})=>i(e.modelValue)),I=i=>{var v,f;(v=e["onUpdate:modelValue"])==null||v.call(e,i),(f=e.onChange)==null||f.call(e,i),O("onChange")},_=()=>c(e.rules,e.modelValue),V=()=>{var i;(i=e["onUpdate:modelValue"])==null||i.call(e,void 0),u()};T(()=>e.modelValue,g),T(()=>o.value,g);const R={onToggle:I,validate:_,reset:V,resetValidation:u,errorMessage:y};return n==null||n(R),h(R),{errorMessage:d,reset:V,validate:_,resetValidation:u}}}),le={class:"var-radio-group__wrap"};function se(e,o,t,h,n,d){const a=z("var-form-details");return B(),N("div",le,[A("div",{class:k(["var-radio-group",[`var-radio-group--${e.direction}`]])},[$(e.$slots,"default")],2),D(a,{"error-message":e.errorMessage},null,8,["error-message"])])}var M=E(ie,[["render",se]]);M.install=function(e){e.component(M.name,M)};const te={modelValue:{default:!1},checkedValue:{default:!0},uncheckedValue:{default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},checkedColor:{type:String},uncheckedColor:{type:String},iconSize:{type:[String,Number]},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array},onClick:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};function de(){const{bindParent:e,parentProvider:o}=L(W),{index:t}=Q(Y);return{index:t,radioGroup:o,bindRadioGroup:e}}const ce=p({name:"VarRadio",directives:{Ripple:ae},components:{[K.name]:K,[C.name]:C},inheritAttrs:!1,props:te,setup(e){const o=F(!1),t=w(()=>o.value===e.checkedValue),h=F(!1),{radioGroup:n,bindRadioGroup:d}=de(),{form:a,bindForm:c}=G(),{errorMessage:u,validateWithTrigger:y,validate:O,resetValidation:g}=S(),I=r=>{j(()=>{const{validateTrigger:l,rules:s,modelValue:m}=e;y(l,r,s,m)})},_=r=>{var m;const{checkedValue:l,onChange:s}=e;n&&o.value===l||(o.value=r,(m=e["onUpdate:modelValue"])==null||m.call(e,o.value),s==null||s(o.value),n==null||n.onToggle(l),I("onChange"))},V=r=>{const{disabled:l,readonly:s,uncheckedValue:m,checkedValue:q,onClick:P}=e;(a==null?void 0:a.disabled.value)||l||(P==null||P(r),!((a==null?void 0:a.readonly.value)||s)&&(h.value=!0,_(t.value?m:q)))},R=r=>{const{checkedValue:l,uncheckedValue:s}=e;o.value=r===l?l:s},i=()=>{var r;(r=e["onUpdate:modelValue"])==null||r.call(e,e.uncheckedValue),g()},v=()=>O(e.rules,e.modelValue),f=r=>{const{uncheckedValue:l,checkedValue:s}=e;![l,s].includes(r)&&(r=t.value?l:s),_(r)};T(()=>e.modelValue,r=>{o.value=r},{immediate:!0});const b={sync:R,validate:v,resetValidation:g,reset:i};return d==null||d(b),c==null||c(b),{withAnimation:h,checked:t,errorMessage:u,radioGroupErrorMessage:n==null?void 0:n.errorMessage,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,handleClick:V,toggle:f,reset:i,validate:v,resetValidation:g}}}),ue={class:"var-radio__wrap"};function ve(e,o,t,h,n,d){const a=z("var-icon"),c=z("var-form-details"),u=X("ripple");return B(),N("div",ue,[A("div",ee({class:"var-radio",onClick:o[0]||(o[0]=(...y)=>e.handleClick&&e.handleClick(...y))},e.$attrs),[Z(A("div",{class:k(["var-radio__action",[e.checked?"var-radio--checked":"var-radio--unchecked",e.errorMessage||e.radioGroupErrorMessage?"var-radio--error":null,e.formDisabled||e.disabled?"var-radio--disabled":null]]),style:x({color:e.checked?e.checkedColor:e.uncheckedColor})},[e.checked?$(e.$slots,"checked-icon",{key:0},()=>[D(a,{class:k(["var-radio__icon",[e.withAnimation?"var-radio--with-animation":null]]),"var-radio-cover":"",name:"radio-marked",size:e.iconSize},null,8,["class","size"])]):$(e.$slots,"unchecked-icon",{key:1},()=>[D(a,{class:k(["var-radio__icon",[e.withAnimation?"var-radio--with-animation":null]]),"var-radio-cover":"",name:"radio-blank",size:e.iconSize},null,8,["class","size"])])],6),[[u,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]]),A("div",{class:k(["var-radio__text",[e.errorMessage||e.radioGroupErrorMessage?"var-radio--error":null,e.formDisabled||e.disabled?"var-radio--disabled":null]])},[$(e.$slots,"default")],2)],16),D(c,{"error-message":e.errorMessage},null,8,["error-message"])])}var U=E(ce,[["render",ve]]);U.install=function(e){e.component(U.name,U)};export{M as R,U as a};
