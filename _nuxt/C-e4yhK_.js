import{d as y,r as _,D as C,g as k,o as e,c as t,e as s,f as i,b as a,h as l,F as m,i as w,j as N}from"./Mp65wXyo.js";import{u as B}from"./nyRWTbR-.js";const j={class:"flex-auto items-left justify-center container mx-auto"},A={class:"w-100 h-30 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"},D={class:"border-b-2 font-bold border-neutral-100 py-1"},E={class:"p-2"},F={key:0,class:"mb-1 text-base text-neutral-600 dark:text-neutral-200"},L={key:1,class:"text-xs text-red-600 mb-1 font-bold leading-tight"},V={class:"text-s key mr-4 underline"},M={class:"text-s value"},q=y({__name:"Node",props:{mac:{}},setup(x){const f=N(),{blineApiClient:h,newConfiguration:b}=B(),c=x,u=_(!0),n=_(""),o=_(null),g=new h.NodesApi(b(f.public.baseUrl));C(c,p);function p(){o.value=null,n.value="",u.value=!0,g.getNode({mac:c.mac}).then(r=>{o.value=r}).catch(r=>{n.value=r}).finally(()=>{u.value=!1})}return k(()=>{p()}),(r,R)=>(e(),t("div",j,[s("div",A,[s("div",D,i(c.mac),1),s("div",E,[a(u)?(e(),t("p",F," > Loading ... ")):l("",!0),a(n)?(e(),t("p",L," > Error: "+i(a(n)),1)):l("",!0),a(o)?(e(!0),t(m,{key:2},w(a(o),(v,d)=>(e(),t(m,null,[d!="name"?(e(),t("p",{key:d,class:"text-left text-xs justify-right"},[s("span",V,i(d)+":",1),s("span",M,i(v),1)])):l("",!0)],64))),256)):l("",!0)])])]))}});export{q as _};
