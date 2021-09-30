var S=Object.defineProperty;var b=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(a,u,c)=>u in a?S(a,u,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[u]=c,f=(a,u)=>{for(var c in u||(u={}))U.call(u,c)&&v(a,c,u[c]);if(b)for(var c of b(u))A.call(u,c)&&v(a,c,u[c]);return a};import{S as k}from"./index.2760fbcf.js";import{O as V}from"./index.15b7e623.js";import{I as h}from"./index.670ac4ea.js";import{A as F}from"./AppType.058b8a71.js";import{u as _,a as C,_ as g,b as j,c as M,w as I}from"./en-US.fed517a7.js";import{_ as B}from"./elevation.6b325341.js";import{p as T,a2 as P,d as s,o as N,c as w,h as e,w as n,a as E,t as p,F as D,S as R,U as z,l as t}from"./vendor.cfbfc887.js";import"./index.24997ce1.js";import"./zIndex.a6f89f9c.js";import"./index.20a388b7.js";import"./index.be31ac5c.js";import"./components.fe85d05d.js";import"./provide.02108c43.js";import"./index.e8302c55.js";var L={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5355\u9009\u503C\u6821\u9A8C",multipleValidate:"\u591A\u9009\u503C\u6821\u9A8C",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",multiplePlaceholder:"\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879",clearableText:"\u53EF\u6E05\u9664\u6587\u672C",relation:"\u6587\u672C\u5173\u8054\u503C",multiple:"\u591A\u9009",chipMultiple:"\u7EB8\u7247\u98CE\u683C\u7684\u591A\u9009",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",coding:"\u5199\u4EE3\u7801",rest:"\u6478\u9C7C",currentSelect:"\u5F53\u524D\u9009\u62E9\u7684\u662F:",mustSelectRest:"\u60A8\u4E00\u5B9A\u5F97\u9009\u62E9\u6478\u9C7C",mustSelectMoreThan:"\u60A8\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u9009\u9879"},O={basicUsage:"Basic Usage",plainMode:"Plain Mode",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",multipleValidate:"Multiple Validate",placeholder:"Please select one the options",multiplePlaceholder:"Please select multiple options",clearableText:"Clearable Text",relation:"Label relation value",multiple:"Multiple Selection",chipMultiple:"Multiple choice of paper style",eat:"Eat",sleep:"Sleep",play:"Play game",coding:"Coding",rest:"Rest",currentSelect:"The current selection is:",mustSelectRest:"You must choose to rest",mustSelectMoreThan:"You select at least two options"};const{add:y,use:Y,pack:q,packs:ml,merge:bl}=_(),G=a=>{M(a),Y(a)};C("zh-CN",g);C("en-US",j);y("zh-CN",L);y("en-US",O);const H={name:"SelectExample",components:{[k.name]:k,[V.name]:V,[h.name]:h,AppType:F},setup(){const a=T({value:void 0,value2:void 0,value3:void 0,value4:void 0,value5:[],value6:void 0,value7:[],value8:void 0,value9:void 0,value10:[],value11:void 0});return I(u=>{G(u),a.value=void 0,a.value2=void 0,a.value3=void 0,a.value4=void 0,a.value6=void 0,a.value5=[],a.value7=[],a.value8=void 0,a.value9=void 0,a.value10=[],a.value11=void 0}),f({pack:q},P(a))}},J=a=>(R("data-v-0c6e80f1"),a=a(),z(),a),K={class:"relation"},Q=J(()=>E("div",{class:"space"},null,-1));function W(a,u,c,l,X,Z){const i=s("app-type"),d=s("var-option"),r=s("var-select"),m=s("var-icon");return N(),w(D,null,[e(i,null,{default:n(()=>[t(p(l.pack.basicUsage),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=o=>a.value=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.plainMode),1)]),_:1}),e(r,{hint:!1,line:!1,placeholder:l.pack.placeholder,modelValue:a.value2,"onUpdate:modelValue":u[1]||(u[1]=o=>a.value2=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.relation),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,modelValue:a.value6,"onUpdate:modelValue":u[2]||(u[2]=o=>a.value6=o)},{default:n(()=>[e(d,{label:l.pack.eat,value:1},null,8,["label"]),e(d,{label:l.pack.sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),E("div",K,p(l.pack.currentSelect)+" "+p(a.value6),1),e(i,null,{default:n(()=>[t(p(l.pack.disabled),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,disabled:"",modelValue:a.value4,"onUpdate:modelValue":u[3]||(u[3]=o=>a.value4=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.readonly),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,readonly:"",modelValue:a.value3,"onUpdate:modelValue":u[4]||(u[4]=o=>a.value3=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.clearable),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,clearable:"",modelValue:a.value8,"onUpdate:modelValue":u[5]||(u[5]=o=>a.value8=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.displayIcon),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,modelValue:a.value11,"onUpdate:modelValue":u[6]||(u[6]=o=>a.value11=o)},{"prepend-icon":n(()=>[e(m,{class:"prepend-icon",name:"plus"})]),"append-icon":n(()=>[e(m,{class:"append-icon",name:"minus"})]),default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.multiple),1)]),_:1}),e(r,{placeholder:l.pack.multiplePlaceholder,multiple:"",modelValue:a.value5,"onUpdate:modelValue":u[7]||(u[7]=o=>a.value5=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"]),e(d,{label:l.pack.play},null,8,["label"]),e(d,{label:l.pack.coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.chipMultiple),1)]),_:1}),e(r,{placeholder:l.pack.multiplePlaceholder,chip:"",multiple:"",modelValue:a.value7,"onUpdate:modelValue":u[8]||(u[8]=o=>a.value7=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"]),e(d,{label:l.pack.play},null,8,["label"]),e(d,{label:l.pack.coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.validate),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,rules:[o=>o===l.pack.rest||l.pack.mustSelectRest],modelValue:a.value9,"onUpdate:modelValue":u[9]||(u[9]=o=>a.value9=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"]),e(d,{label:l.pack.rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.multipleValidate),1)]),_:1}),e(r,{placeholder:l.pack.multiplePlaceholder,multiple:"",rules:[o=>o.length>=2||l.pack.mustSelectMoreThan],modelValue:a.value10,"onUpdate:modelValue":u[10]||(u[10]=o=>a.value10=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"]),e(d,{label:l.pack.play},null,8,["label"]),e(d,{label:l.pack.coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),Q],64)}var vl=B(H,[["render",W],["__scopeId","data-v-0c6e80f1"]]);export{vl as default};
