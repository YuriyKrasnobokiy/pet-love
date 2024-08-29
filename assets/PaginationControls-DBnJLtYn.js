import{u as s,r as $,j as t,I as u,H as f,b as C}from"./index-CjI_jNKf.js";const j=s.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 230px;
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
`,F=({onFilterChange:e,onFetch:o,onPageChange:n,filterWord:x,isInFilters:d})=>{const[i,l]=$.useState(x||""),h=a=>{a.preventDefault(),e(i),n(1),o({page:1,limit:6,filterWord:i})},p=a=>{a.preventDefault(),l(""),e(""),n(1),o({page:1,limit:6,filterWord:""})},r=a=>{l(a.target.value)};return t.jsxs(j,{onSubmit:h,children:[t.jsx(w,{type:"text",placeholder:"Search",value:i,onChange:r,$isInFilters:d}),i!==""&&t.jsx(k,{type:"button",onClick:p,children:t.jsx(u,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(I,{type:"submit",children:t.jsx(u,{height:18,width:18,name:"icon-search"})})]})};function m(e){return f({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(e)}function b(e){return f({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(e)}const v=s.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 446px;
    margin: 0 auto;
  }
`,g=s.div`
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
`,z=({currentPage:e,totalPages:o,onPageChange:n})=>{const x=()=>{const d=C(),i=[],l=d==="desktop"||d==="tablet"?3:2,h=Math.max(1,Math.min(e-Math.floor(l/2),o-l+1)),p=Math.min(h+l-1,o);for(let r=h;r<=p;r++)i.push(t.jsx(c,{$isCurrentPage:e===r,onClick:()=>n(r),children:r},r));return p<o&&i.push(t.jsx(c,{disabled:!0,children:"..."},"end-ellipsis")),i};return t.jsxs(v,{children:[t.jsxs(g,{children:[t.jsx(c,{className:"left icon",disabled:e===1,onClick:()=>n(1),children:t.jsx(m,{})}),t.jsx(c,{className:"left icon",disabled:e===1,onClick:()=>n(e-1),children:t.jsx(b,{})})]}),t.jsx(B,{children:x()}),t.jsxs(g,{children:[t.jsx(c,{className:"icon",disabled:e===o,onClick:()=>n(e+1),children:t.jsx(b,{})}),t.jsx(c,{className:"icon",disabled:e===o,onClick:()=>n(o),children:t.jsx(m,{})})]})]})};export{z as P,F as S};
