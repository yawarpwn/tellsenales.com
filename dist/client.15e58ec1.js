import{h as u,P as _}from"./chunks/preact.module.0b8ca6e8.js";const S="modulepreload",v=function(e){return"/"+e},d={},p=function(s,n,i){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=v(r),r in d)return;d[r]=!0;const l=r.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const t=document.createElement("link");if(t.rel=l?"stylesheet":S,l||(t.as="script",t.crossOrigin=""),t.href=r,document.head.appendChild(t),l)return new Promise((c,o)=>{t.addEventListener("load",c),t.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())},h=({value:e,name:s})=>e?u("astro-slot",{name:s,dangerouslySetInnerHTML:{__html:e}}):null;h.shouldComponentUpdate=()=>!1;var m=h;const f=new Map;var y=e=>async(s,n,{default:i,...r})=>{if(!e.hasAttribute("ssr"))return;for(const[a,t]of Object.entries(r))n[a]=u(m,{value:t,name:a});if(e.dataset.preactSignals){const{signal:a}=await p(()=>import("./chunks/signals.module.4c20ea2a.js"),["chunks/signals.module.4c20ea2a.js","chunks/preact.module.0b8ca6e8.js","chunks/hooks.module.58270b13.js"]);let t=JSON.parse(e.dataset.preactSignals);for(const[c,o]of Object.entries(t)){if(!f.has(o)){const g=a(n[c]);f.set(o,g)}n[c]=f.get(o)}}_(u(s,n,i!=null?u(m,{value:i}):i),e)};export{y as default};
