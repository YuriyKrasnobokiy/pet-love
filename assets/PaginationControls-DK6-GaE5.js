import{u as r,r as f,j as t,I as x,H as g,b as j}from"./index-UdeZ2oTT.js";const w=r.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 230px;
    margin: 0;
  }
`,C=r.input`
  border: 1px solid ${e=>e.theme.colors.searchInputBorderColor};
  border-radius: 30px;
  padding: 11px 12px;
  width: calc(100% - 26px);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 13px;
    width: calc(100% - 28px);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.searchInputColor};
  }

  &:focus {
    border-color: ${e=>e.theme.colors.searchInputBorderFocus};
    outline: none;
  }

  &:hover {
    border-color: ${e=>e.theme.colors.accentColor};
    outline: none;
  }
`,k=r.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 14px;
  }
`,v=r.button`
  top: 13px;
  right: 36px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
  }
`,y=({onFilterChange:e,onFetch:n,onPageChange:i,filterWord:p})=>{const[s,l]=f.useState(p||""),c=o=>{o.preventDefault(),e(s),i(1),n({page:1,limit:6,filterWord:s})},d=o=>{o.preventDefault(),l(""),e(""),i(1),n({page:1,limit:6,filterWord:""})},h=o=>{l(o.target.value)};return t.jsxs(w,{onSubmit:c,children:[t.jsx(C,{type:"text",placeholder:"Search",value:s,onChange:h}),s!==""&&t.jsx(v,{type:"button",onClick:d,children:t.jsx(x,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(k,{type:"submit",children:t.jsx(x,{height:18,width:18,name:"icon-search"})})]})};function u(e){return g({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(e)}function m(e){return g({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(e)}const $=r.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 446px;
    margin: 0 auto;
  }
`,b=r.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,B=r.div`
  display: flex;
  gap: 10px;
`,a=r.button`
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
`,M=({currentPage:e,totalPages:n,onPageChange:i})=>{const p=()=>{const s=j(),l=[],c=s==="desktop"||s==="tablet"?3:2,d=Math.max(1,Math.min(e-Math.floor(c/2),n-c+1)),h=Math.min(d+c-1,n);for(let o=d;o<=h;o++)l.push(t.jsx(a,{$isCurrentPage:e===o,onClick:()=>i(o),children:o},o));return h<n&&l.push(t.jsx(a,{disabled:!0,children:"..."},"end-ellipsis")),l};return t.jsxs($,{children:[t.jsxs(b,{children:[t.jsx(a,{className:"left icon",disabled:e===1,onClick:()=>i(1),children:t.jsx(u,{})}),t.jsx(a,{className:"left icon",disabled:e===1,onClick:()=>i(e-1),children:t.jsx(m,{})})]}),t.jsx(B,{children:p()}),t.jsxs(b,{children:[t.jsx(a,{className:"icon",disabled:e===n,onClick:()=>i(e+1),children:t.jsx(m,{})}),t.jsx(a,{className:"icon",disabled:e===n,onClick:()=>i(n),children:t.jsx(u,{})})]})]})};export{M as P,y as S};
