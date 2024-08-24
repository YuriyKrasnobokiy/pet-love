import{G as u,u as s,j as i,b}from"./index-CAIcYVaW.js";function x(e){return u({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(e)}function p(e){return u({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(e)}const j=s.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 446px;
    margin: 0 auto;
  }
`,m=s.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,C=s.div`
  display: flex;
  gap: 10px;
`,o=s.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.285;
  width: 40px;
  height: 40px;
  justify-content: center;
  margin: 0;
  border: 1px solid
    ${e=>e.$isCurrentPage?"none":e.theme.colors.PaginationBtnBorderColor};
  border-radius: 50%;
  background-color: ${e=>e.$isCurrentPage?e.theme.colors.accentColor:"transparent"};
  color: ${e=>e.$isCurrentPage?e.theme.colors.white:e.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 18px;
    line-height: 1.22222;
  }

  &.left {
    transform: rotate(180deg);
  }

  &.icon {
    font-size: 20px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  &:hover {
    border-color: ${e=>e.theme.colors.accentColor};
  }

  &:disabled {
    fill: ${e=>e.theme.colors.PaginationBtnFill};
    color: ${e=>e.theme.colors.PaginationBtnColor};
    border: 1px solid
      ${e=>e.theme.colors.PaginationBtnBorderColorDisabled};
  }
`,k=({currentPage:e,totalPages:t,onPageChange:r})=>{const f=()=>{const a=b(),l=[],d=a==="desktop"||a==="tablet"?3:2,c=Math.max(1,Math.min(e-Math.floor(d/2),t-d+1)),h=Math.min(c+d-1,t);for(let n=c;n<=h;n++)l.push(i.jsx(o,{$isCurrentPage:e===n,onClick:()=>r(n),children:n},n));return h<t&&l.push(i.jsx(o,{disabled:!0,children:"..."},"end-ellipsis")),l};return i.jsxs(j,{children:[i.jsxs(m,{children:[i.jsx(o,{className:"left icon",disabled:e===1,onClick:()=>r(1),children:i.jsx(x,{})}),i.jsx(o,{className:"left icon",disabled:e===1,onClick:()=>r(e-1),children:i.jsx(p,{})})]}),i.jsx(C,{children:f()}),i.jsxs(m,{children:[i.jsx(o,{className:"icon",disabled:e===t,onClick:()=>r(e+1),children:i.jsx(p,{})}),i.jsx(o,{className:"icon",disabled:e===t,onClick:()=>r(t),children:i.jsx(x,{})})]})]})};export{k as P};
