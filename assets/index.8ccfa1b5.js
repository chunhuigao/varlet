import{a as u,t as o}from"./shared.506a394a.js";import{t as p}from"./elements.92736b4e.js";import{_ as c}from"./elevation.229458c1.js";import{d as f,r as l,y as g,o as y,l as v,p as h,n as z,Q as d,z as S}from"./vendor.49f89f0d.js";const k={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:{type:Function}};const U=f({name:"VarIcon",props:k,setup(n){const e=l(""),a=l(!1);return g(()=>n.name,async(i,s)=>{const{transition:t}=n;if(s==null||o(t)===0){e.value=i;return}a.value=!0,await S(),setTimeout(()=>{s!=null&&(e.value=i),a.value=!1},o(t))},{immediate:!0}),{nextName:e,shrinking:a,isURL:u,toNumber:o,toSizeUnit:p}}});function C(n,e,a,m,i,s){return y(),v(d(n.isURL(n.name)?"img":"i"),{class:h(["var-icon",[`${n.namespace}--set`,n.isURL(n.name)?"var-icon__image":`${n.namespace}-${n.nextName}`,n.shrinking?"var-icon--shrinking":null]]),style:z({color:n.color,transition:`transform ${n.toNumber(n.transition)}ms`,width:n.isURL(n.name)?n.toSizeUnit(n.size):null,height:n.isURL(n.name)?n.toSizeUnit(n.size):null,fontSize:n.toSizeUnit(n.size)}),src:n.isURL(n.name)?n.nextName:null,onClick:n.onClick},null,8,["class","style","src","onClick"])}var r=c(U,[["render",C]]);r.install=function(n){n.component(r.name,r)};export{r as I,k as p};
