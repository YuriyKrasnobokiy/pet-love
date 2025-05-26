import{u as s,r as t,j as e}from"./index-D_EJOTRS.js";const l=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background: rgba(12, 12, 12, 1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 9999;
`,h=s.div`
  position: relative;
  width: 292px;
  height: 292px;
`,p=s.svg`
  transform: rotate(-90deg);
`,u=()=>{const[o,n]=t.useState(0),[i,a]=t.useState(!1);return t.useEffect(()=>{a(!0);const c=setInterval(()=>{n(d=>{const r=d+25;return r>100?0:r})},200);return()=>clearInterval(c)},[]),e.jsx(l,{children:e.jsx(h,{children:e.jsxs(p,{width:"292",height:"292",viewBox:"0 0 292 292",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"strokeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(255, 255, 255, 1)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(255, 255, 255, 0.1)"})]})}),i&&e.jsx("circle",{cx:"146",cy:"146",r:"146",stroke:"url(#strokeGradient)",strokeWidth:"1",fill:"none",strokeDasharray:2*Math.PI*146,strokeDashoffset:(1-o/100)*(2*Math.PI*146),style:{transition:"stroke-dashoffset 0.2s ease-in-out"}})]})})})};export{u as S};
