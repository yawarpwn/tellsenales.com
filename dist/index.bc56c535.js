import{y as h,s as n}from"./chunks/hooks.module.58270b13.js";/* empty css                          */import{o as t}from"./chunks/jsxRuntime.module.4e005c74.js";import"./chunks/preact.module.0b8ca6e8.js";const i=["light","dark"],d=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"})}),t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})],w=({isInsideHeader:r})=>{const[a,s]=h(()=>document.documentElement.classList.contains("dark")?"dark":"light");return n(()=>{const e=document.documentElement;a==="light"?e.classList.remove("dark"):e.classList.add("dark")},[a]),t("div",{class:`theme-toggle ${r?"hide-toggle-on-smaller-screens":""}`,children:i.map((e,c)=>{const m=d[c],l=e===a;return t("label",{class:l?"checked":"",children:[m,t("input",{type:"radio",name:"theme-toggle",checked:l,value:e,onChange:()=>{const o=window.matchMedia("(prefers-color-scheme: dark)").matches;o&&e==="dark"||!o&&e==="light"?localStorage.removeItem("theme"):localStorage.setItem("theme",e),s(e)}})]})})})};export{w as default};
