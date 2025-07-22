import{O as I,u as a,j as t,b as B,a as F,c as y,r as $,P as S,I as g}from"./index-BeJ_uTVy.js";function f(e){return I({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(e)}function b(e){return I({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(e)}const W=a.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 446px;
    margin: 0 auto;
  }
`,C=a.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,z=a.div`
  display: flex;
  gap: 10px;
`,h=a.button`
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
`,P=({currentPage:e,totalPages:n,onPageChange:r})=>{const p=()=>{const x=B(),s=[],c=x==="desktop"||x==="tablet"?3:2,l=Math.max(1,Math.min(e-Math.floor(c/2),n-c+1)),d=Math.min(l+c-1,n);for(let i=l;i<=d;i++)s.push(t.jsx(h,{$isCurrentPage:e===i,onClick:()=>r(i),children:i},i));return d<n&&s.push(t.jsx(h,{disabled:!0,children:"..."},"end-ellipsis")),s};return t.jsxs(W,{children:[t.jsxs(C,{children:[t.jsx(h,{className:"left icon",disabled:e===1,onClick:()=>r(1),children:t.jsx(f,{})}),t.jsx(h,{className:"left icon",disabled:e===1,onClick:()=>r(e-1),children:t.jsx(b,{})})]}),t.jsx(z,{children:p()}),t.jsxs(C,{children:[t.jsx(h,{className:"icon",disabled:e===n,onClick:()=>r(e+1),children:t.jsx(b,{})}),t.jsx(h,{className:"icon",disabled:e===n,onClick:()=>r(n),children:t.jsx(f,{})})]})]})},R=a.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: ${e=>e.$isInFilters?"12px":"20px"};
  width: 100%;

  @media screen and (min-width: 768px) {
    width: ${e=>e.$isInFilters?"265px":"230px"};
    margin: 0;
  }
`,M=a.input`
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
`,D=a.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.$isInFilters?`${e.theme.colors.searchFiltersInputIconColor}`:`${e.theme.colors.searchInputIconColor}`};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 14px;
  }
`,L=a.button`
  top: ${e=>e.$location?"11px":"13px"};
  right: 36px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: ${e=>e.$location?"14px":"15px"};
  }
`,E=({onFetch:e,onPageChange:n,isInFilters:r,setFilterTerm:p,selectFilterTerm:x})=>{const s=F(),c=y(x),[l,d]=$.useState(c||""),[i,w]=S();$.useEffect(()=>{const o=i.get("filterWord")||"";d(o),o!==c&&(s(p(o)),e({page:1,limit:6,filterWord:o}))},[i,s,c]);const m=o=>{const u=new URLSearchParams(i.toString());o?u.set("filterWord",o):u.delete("filterWord"),w(u)},j=o=>{o.preventDefault(),m(l),s(p(l)),n(1),e({page:1,limit:6,filterWord:l})},k=o=>{o.preventDefault(),m(""),d(""),s(p("")),n(1),e({page:1,limit:6,filterWord:""})},v=o=>{d(o.target.value)};return t.jsxs(R,{$isInFilters:r,onSubmit:j,children:[t.jsx(M,{type:"text",placeholder:"Search",value:l,onChange:v,$isInFilters:r}),l!==""&&t.jsx(L,{type:"button",onClick:k,children:t.jsx(g,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(D,{type:"submit",children:t.jsx(g,{height:18,width:18,name:"icon-search"})})]})};export{P,L as R,E as S};
