import{u as l,a as S,c as v,r as f,U as B,e as u,j as t,I as $,V as I,b as y}from"./index-C8SbqSzV.js";const D=e=>e.newsStore.news,E=e=>e.newsStore.isLoading,V=e=>e.newsStore.error,W=e=>e.newsStore.filterTerm,U=e=>e.newsStore.page,G=e=>e.newsStore.perPage,H=e=>e.newsStore.totalPages,P=l.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: ${e=>e.$isInFilters?"12px":"20px"};
  width: 100%;

  @media screen and (min-width: 768px) {
    width: ${e=>e.$isInFilters?"265px":"230px"};
    margin: 0;
  }
`,z=l.input`
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
  transition: border-color 300ms ease-in-out;
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
`,L=l.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.$isInFilters?`${e.theme.colors.searchFiltersInputIconColor}`:`${e.theme.colors.searchInputIconColor}`};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 14px;
  }
`,R=l.button`
  top: ${e=>e.$location?"11px":"13px"};
  right: 36px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: ${e=>e.$location?"14px":"15px"};
  }
`,O=({onFilterChange:e,onFetch:r,onPageChange:s,isInFilters:x})=>{const a=S(),c=v(W),[n,d]=f.useState(c||""),[h,i]=B();f.useEffect(()=>{const o=h.get("filterWord")||"";d(o),o!==c&&(a(u(o)),r({page:1,limit:6,filterWord:o}))},[h,a,c]);const g=o=>{const m=new URLSearchParams(h.toString());o?m.set("filterWord",o):m.delete("filterWord"),i(m)},j=o=>{o.preventDefault(),g(n),a(u(n)),s(1),r({page:1,limit:6,filterWord:n})},F=o=>{o.preventDefault(),g(""),d(""),a(u("")),s(1),r({page:1,limit:6,filterWord:""})},k=o=>{d(o.target.value)};return t.jsxs(P,{$isInFilters:x,onSubmit:j,children:[t.jsx(z,{type:"text",placeholder:"Search",value:n,onChange:k,$isInFilters:x}),n!==""&&t.jsx(R,{type:"button",onClick:F,children:t.jsx($,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(L,{type:"submit",children:t.jsx($,{height:18,width:18,name:"icon-search"})})]})};function b(e){return I({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(e)}function w(e){return I({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(e)}const M=l.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 446px;
    margin: 0 auto;
  }
`,C=l.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,N=l.div`
  display: flex;
  gap: 10px;
`,p=l.button`
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
`,q=({currentPage:e,totalPages:r,onPageChange:s})=>{const x=()=>{const a=y(),c=[],n=a==="desktop"||a==="tablet"?3:2,d=Math.max(1,Math.min(e-Math.floor(n/2),r-n+1)),h=Math.min(d+n-1,r);for(let i=d;i<=h;i++)c.push(t.jsx(p,{$isCurrentPage:e===i,onClick:()=>s(i),children:i},i));return h<r&&c.push(t.jsx(p,{disabled:!0,children:"..."},"end-ellipsis")),c};return t.jsxs(M,{children:[t.jsxs(C,{children:[t.jsx(p,{className:"left icon",disabled:e===1,onClick:()=>s(1),children:t.jsx(b,{})}),t.jsx(p,{className:"left icon",disabled:e===1,onClick:()=>s(e-1),children:t.jsx(w,{})})]}),t.jsx(N,{children:x()}),t.jsxs(C,{children:[t.jsx(p,{className:"icon",disabled:e===r,onClick:()=>s(e+1),children:t.jsx(w,{})}),t.jsx(p,{className:"icon",disabled:e===r,onClick:()=>s(r),children:t.jsx(b,{})})]})]})};export{q as P,R,O as S,W as a,E as b,V as c,U as d,G as e,H as f,D as s};
