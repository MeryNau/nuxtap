import{d as F,r as c,G as A,o as u,c as i,e as l,q as m,w as N,H as y,b as o,$ as C,f as g,g as D,h as _,F as E,i as I,a as L,j as R}from"./Mp65wXyo.js";import{u as B}from"./nyRWTbR-.js";const S={class:"border-4"},G=F({__name:"WatchEffect",setup(V){const p=c(""),d=c(0),h=c(!1);return A(async()=>{h.value=p.value=="klaus"&&d.value==17}),(r,t)=>(u(),i("div",S,[l("p",null,[m("String (klaus): "),N(l("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>C(p)?p.value=n:null),placeholder:"name 'klaus' eingeben"},null,512),[[y,o(p)]])]),l("p",null,[m("Number (17): "),N(l("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>C(d)?d.value=n:null),placeholder:"nummer '17' eingeben"},null,512),[[y,o(d),void 0,{number:!0}]])]),l("p",null,"IsValid? "+g(o(h)),1)]))}}),W={class:"text-xl text-blue-500"},M={key:0,class:"text-2xl"},O={key:1,class:"text-xl"},P={key:2},j={class:"list-inside list-disc hover:list-decimal"},q=["onClick"],H=l("hr",null,null,-1),z=l("h2",null,"WatchEffect test component",-1),X=F({__name:"testUpload",setup(V){const p=R(),{blineApiClient:d,newConfiguration:h}=B(),r={anchorName:"Roof1-01"},t=c(!0),n=c(""),s=c([]),x=new d.FilesApi(h(p.public.baseUrl));function b(){s.value=[],n.value="",t.value=!0,x.getFiles({anchor:r.anchorName}).then(a=>{s.value=a}).catch(a=>{n.value=a}).finally(()=>{t.value=!1})}const f=c(null),k=c();function T(a){var e;(e=k.value)!=null&&e.files?f.value=k.value.files[0]:f.value=null}function U(a){console.log("POSTING: "+a.name+" to "+r.anchorName+" ..."),s.value=[],n.value="",t.value=!0,x.uploadFile({anchor:r.anchorName,file:a}).then(e=>{s.value.push(e)}).catch(e=>{n.value=e}).finally(()=>{t.value=!1,b()})}function $(a){console.log("DELETING: "+a+" of "+r.anchorName+" ..."),s.value=[],n.value="",t.value=!0,x.deleteFile({anchor:r.anchorName,name:a}).then(e=>{s.value.push(e)}).catch(e=>{n.value=e}).finally(()=>{t.value=!1,b()})}return D(()=>{b()}),(a,e)=>{const w=G;return u(),i(E,null,[l("div",null,[m(" UploadsApi Test page "),l("p",W,g(r.anchorName),1),o(t)?(u(),i("p",M," Loading ... ")):_("",!0),o(n)?(u(),i("p",O," Error: "+g(o(n)),1)):_("",!0),o(s)?(u(),i("form",P,[l("ul",j,[(u(!0),i(E,null,I(o(s),v=>(u(),i("li",{key:v.name},[m(g(v)+" ",1),l("input",{type:"button",value:"DELETE",class:"text-red-500",onClick:J=>$(v)},null,8,q)]))),128))])])):_("",!0),H,l("label",null,[m("Select file to upload: "),l("input",{ref_key:"fileInputRef",ref:k,type:"file",accept:"text/*|image/*",onChange:e[0]||(e[0]=v=>T())},null,544)]),o(f)&&o(f).name?(u(),i("button",{key:3,onClick:e[1]||(e[1]=v=>U(o(f))),class:"text-blue-500 text-xl"},"UPLOAD!")):_("",!0)]),l("div",null,[z,L(w)])],64)}}});export{X as default};
