import{u as s,r as $,j as t,I as m,K as f,b as C}from"./index-CHkt6cmi.js";const j=s.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: ${e=>e.$isInFilters?"265px":"230px"};
    margin: 0;
  }
`,w=s.input`
  border: ${e=>e.$isInFilters?`1px solid ${e.theme.colors.searchFiltersInputBorderColor}`:`1px solid  ${e.theme.colors.searchInputBorderColor}`};
  border-radius: 30px;
  padding: 11px 12px;
  width: calc(100% - 26px);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  background-color: ${e=>e.$isInFilters?`${e.theme.colors.searchFiltersInputBGColor}`:"transparent"};
  color: ${e=>e.$isInFilters?`${e.theme.colors.searchFiltersInputColor}`:`${e.theme.colors.searchInputColor}`};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 13px;
    width: calc(100% - 28px);
  }

  &::placeholder {
    color: ${e=>e.$isInFilters?`${e.theme.colors.searchFiltersInputColor}`:`${e.theme.colors.searchInputColor}`};
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.03em;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }

  &:focus {
    border-color: ${e=>e.theme.colors.searchInputBorderFocus};
    outline: none;
  }

  &:hover {
    border-color: ${e=>e.theme.colors.accentColor};
    outline: none;
  }
`,I=s.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 14px;
  }
`,k=s.button`
  top: 13px;
  right: 36px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
  }
`,y=({onFilterChange:e,onFetch:o,onPageChange:i,filterWord:x,isInFilters:a})=>{const[n,l]=$.useState(x||""),h=d=>{d.preventDefault(),e(n),i(1),o({page:1,limit:6,filterWord:n})},p=d=>{d.preventDefault(),l(""),e(""),i(1),o({page:1,limit:6,filterWord:""})},r=d=>{l(d.target.value)};return t.jsxs(j,{$isInFilters:a,onSubmit:h,children:[t.jsx(w,{type:"text",placeholder:"Search",value:n,onChange:r,$isInFilters:a}),n!==""&&t.jsx(k,{type:"button",onClick:p,children:t.jsx(m,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(I,{type:"submit",children:t.jsx(m,{height:18,width:18,name:"icon-search"})})]})};function u(e){return f({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(e)}function g(e){return f({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(e)}const v=s.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 446px;
    margin: 0 auto;
  }
`,b=s.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,B=s.div`
  display: flex;
  gap: 10px;
`,c=s.button`
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
`,z=({currentPage:e,totalPages:o,onPageChange:i})=>{const x=()=>{const a=C(),n=[],l=a==="desktop"||a==="tablet"?3:2,h=Math.max(1,Math.min(e-Math.floor(l/2),o-l+1)),p=Math.min(h+l-1,o);for(let r=h;r<=p;r++)n.push(t.jsx(c,{$isCurrentPage:e===r,onClick:()=>i(r),children:r},r));return p<o&&n.push(t.jsx(c,{disabled:!0,children:"..."},"end-ellipsis")),n};return t.jsxs(v,{children:[t.jsxs(b,{children:[t.jsx(c,{className:"left icon",disabled:e===1,onClick:()=>i(1),children:t.jsx(u,{})}),t.jsx(c,{className:"left icon",disabled:e===1,onClick:()=>i(e-1),children:t.jsx(g,{})})]}),t.jsx(B,{children:x()}),t.jsxs(b,{children:[t.jsx(c,{className:"icon",disabled:e===o,onClick:()=>i(e+1),children:t.jsx(g,{})}),t.jsx(c,{className:"icon",disabled:e===o,onClick:()=>i(o),children:t.jsx(u,{})})]})]})};export{z as P,y as S};
