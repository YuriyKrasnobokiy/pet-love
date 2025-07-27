import{u as r,r as s,v as h,j as e}from"./index-obbgT2kB.js";const x=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background: ${t=>t.theme.colors.mainBgColor};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 9999;
`,p=r.div`
  position: relative;
  width: 292px;
  height: 292px;
`,u=r.svg`
  transform: rotate(-90deg);
  color: red;
`,g=()=>{const[t,i]=s.useState(0),[a,c]=s.useState(!1),o=h();return s.useEffect(()=>{c(!0);const l=setInterval(()=>{i(d=>{const n=d+25;return n>100?0:n})},200);return()=>clearInterval(l)},[]),e.jsx(x,{children:e.jsx(p,{children:e.jsxs(u,{width:"292",height:"292",viewBox:"0 0 292 292",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"strokeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:o.colors.textColor}),e.jsx("stop",{offset:"100%",stopColor:o.colors.accentColor})]})}),a&&e.jsx("circle",{cx:"146",cy:"146",r:"146",stroke:"url(#strokeGradient)",strokeWidth:"1",fill:"none",strokeDasharray:2*Math.PI*146,strokeDashoffset:(1-t/100)*(2*Math.PI*146),style:{transition:"stroke-dashoffset 0.2s ease-in-out"}})]})})})};export{g as S};
