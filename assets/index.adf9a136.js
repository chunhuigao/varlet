import{F as e,u as l}from"./provide.92d12d40.js";import{I as a}from"./index.5f8c0dc7.js";import{l as n,f as r,t as o}from"./shared.6d6b25a1.js";import{b as t}from"./components.0481fe69.js";import{_ as s}from"./IconSfc.fde87e76.js";import{q as u,r as i,D as d,b as p,d as c,o as v,c as m,a as h,m as y,O as f,f as g,k as b,n as C,R as x,t as _,h as F,z as V}from"./vendor.85536c59.js";const k={modelValue:{type:[String,Number]},type:{type:String,default:"text",validator:function(e){return["text","password"].includes(e)}},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onInput:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const B=u({name:"VarInput",components:{[a.name]:a,[e.name]:e},props:k,setup(e){const a=i(`var-input-${d().uid}`),s=i(null),u=i(!1),c=p((()=>r(e.modelValue))),v=p((()=>{const{type:l}=e;return"password"===l?l:c.value?"number":"text"})),m=p((()=>{const{maxlength:l,modelValue:a}=e;return l?n(a)?`0 / ${l}`:`${String(a).length}/${l}`:""})),{bindForm:h,form:y}=l(),{errorMessage:f,validateWithTrigger:g,validate:b,resetValidation:C}=t(),x=l=>{V((()=>{const{validateTrigger:a,rules:n,modelValue:r}=e;g(a,l,n,r)}))},_=e=>c.value?o(e):e,F=()=>{var l;null==(l=e["onUpdate:modelValue"])||l.call(e,c.value?0:""),C()},k=()=>b(e.rules,e.modelValue);return null==h||h({reset:F,validate:k,resetValidation:C}),{el:s,type:v,id:a,isFocus:u,errorMessage:f,maxlengthText:m,formDisabled:null==y?void 0:y.disabled,formReadonly:null==y?void 0:y.readonly,isEmpty:n,computePlaceholderState:()=>{const{hint:l,modelValue:a}=e;return l||n(a)?!l||n(a)&&!u.value?void 0:"var-input--placeholder-hint":"var-input--placeholder-hidden"},handleFocus:l=>{var a;u.value=!0,null==(a=e.onFocus)||a.call(e,l),x("onFocus")},handleBlur:l=>{var a;u.value=!1,null==(a=e.onBlur)||a.call(e,l),x("onBlur")},handleInput:l=>{var a,n;const{value:r}=l.target,o=_(r);null==(a=e["onUpdate:modelValue"])||a.call(e,o),null==(n=e.onInput)||n.call(e,o,l),x("onInput")},handleChange:l=>{var a;const{value:n}=l.target;null==(a=e.onChange)||a.call(e,_(n),l),x("onChange")},handleClear:()=>{var l;const{disabled:a,readonly:n,clearable:r,onClear:o}=e;if((null==y?void 0:y.disabled.value)||(null==y?void 0:y.readonly.value)||a||n||!r)return;const t=c.value?0:"";null==(l=e["onUpdate:modelValue"])||l.call(e,t),null==o||o(t),x("onClear")},handleClick:l=>{const{disabled:a,onClick:n}=e;(null==y?void 0:y.disabled.value)||a||(null==n||n(l),x("onClick"))},validate:k,resetValidation:C,reset:F,focus:()=>{s.value.focus()},blur:()=>{s.value.blur()}}}}),I={key:0,class:"var-input__autocomplete"},S=["for"];var M=s(B,[["render",function(e,l,a,n,r,o){const t=c("var-icon"),s=c("var-form-details");return v(),m("div",{class:y(["var-input var--box",[e.disabled?"var-input--disabled":null]]),onClick:l[0]||(l[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[h("div",{class:y(["var-input__controller",[e.isFocus?"var-input--focus":null,e.errorMessage?"var-input--error":null,e.formDisabled||e.disabled?"var-input--disabled":null]]),style:C({color:e.errorMessage?null:e.isFocus?e.focusColor:e.blurColor})},[h("div",{class:y(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[f(e.$slots,"prepend-icon")],2),h("div",{class:y(["var-input__wrap",[e.hint?null:"var-input--non-hint"]])},["password"===e.type?(v(),m("input",I)):g("v-if",!0),(v(),b(x(e.textarea?"textarea":"input"),{class:y(["var-input__input",[e.formDisabled||e.disabled?"var-input--disabled":null,e.textarea?"var-input--textarea":null,e.errorMessage?"var-input--caret-error":null]]),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:C({color:e.textColor,caretColor:e.errorMessage?null:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.handleInput,onChange:e.handleChange},null,8,["id","disabled","type","value","maxlength","rows","class","style","onFocus","onBlur","onInput","onChange"])),h("label",{class:y([e.textarea?"var-input__textarea-placeholder":"var-input__placeholder",e.computePlaceholderState(),e.hint?null:"var-input--placeholder-non-hint"]),for:e.id},_(e.placeholder),11,S)],2),h("div",{class:y(["var-input__icon",[e.hint?null:"var-input--non-hint"]])},[f(e.$slots,"append-icon",{},(()=>[e.clearable&&!e.isEmpty(e.modelValue)?(v(),b(t,{key:0,class:"var-input__clear-icon","var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["onClick"])):g("v-if",!0)]))],2)],6),e.line?(v(),m("div",{key:0,class:y(["var-input__line",[e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:C({background:e.errorMessage?null:e.blurColor})},[h("div",{class:y(["var-input__dot",[e.isFocus?"var-input--spread":null,e.formDisabled||e.disabled?"var-input--line-disabled":null,e.errorMessage?"var-input--line-error":null]]),style:C({background:e.errorMessage?null:e.focusColor})},null,6)],6)):g("v-if",!0),F(s,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"])],2)}]]);M.install=function(e){e.component(M.name,M)};export{M as I};
