import{u as r,j as t,a as j,r as w,I as x,s as u,c as m,f as g,G as C,d as c,L as $}from"./index-x_FGfV5q.js";const k=e=>e.newsStore.news,N=e=>e.newsStore.isLoading,S=e=>e.newsStore.error,v=e=>e.newsStore.filterTerm,I=e=>e.newsStore.page,y=e=>e.newsStore.perPage,B=e=>e.newsStore.totalPages,P=e=>{const o=new Date(e),n=o.getDate().toString().padStart(2,"0"),l=(o.getMonth()+1).toString().padStart(2,"0"),i=o.getFullYear();return`${n}/${l}/${i}`},D=r.img`
  height: 190px;
  max-width: 335px;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  margin-bottom: 20px;
`,L=r.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
`,M=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`,F=r.div`
  display: flex;
  justify-content: space-between;
`,W=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.NwCardDateColor};
`,R=r.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.NwCardReadMoreColor};
`,T=({nw:e})=>t.jsxs("li",{children:[t.jsx(D,{src:e.imgUrl,alt:"news",height:190}),t.jsx(L,{children:e.title}),t.jsx(M,{children:e.text}),t.jsxs(F,{children:[t.jsx(W,{children:P(e.date)}),t.jsx(R,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),z=r.div`
  padding-top: 34px;
`,V=r.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
`,E=r.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
  }
`,G=r.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
`,H=r.input`
  border: 1px solid ${e=>e.theme.colors.searchInputBorderColor};
  border-radius: 30px;
  padding: 12px;
  width: 309px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputColor};

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
`,O=r.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};
`,_=r.button`
  top: 13px;
  right: 40px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};
`,U=()=>{const e=j(),[o,n]=w.useState(""),l=a=>{a.preventDefault(),e(u(o)),e(m(1)),e(g({page:1,limit:6,filterWord:o}))},i=a=>{a.preventDefault(),n(""),e(u("")),e(m(1)),e(g({page:1,limit:6,filterWord:""}))},d=a=>{n(a.target.value)};return t.jsxs(G,{onSubmit:l,children:[t.jsx(H,{type:"text",placeholder:"Search",value:o,onChange:d}),o!==""&&t.jsx(_,{type:"button",onClick:i,children:t.jsx(x,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(O,{type:"submit",children:t.jsx(x,{height:18,width:18,name:"icon-search"})})]})},Y=r.div`
  display: flex;
  justify-content: space-between;
`,h=r.button`
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

  &:first-child {
    transform: rotate(180deg);
  }

  &:nth-child(2) {
    transform: rotate(180deg);
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
`;function f(e){return C({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(e)}function b(e){return C({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(e)}const q=({currentPage:e,totalPages:o,onPageChange:n})=>{const l=()=>{const i=[],a=Math.max(1,Math.min(e-Math.floor(1),o-2+1)),p=Math.min(a+2-1,o);for(let s=a;s<=p;s++)i.push(t.jsx(h,{$isCurrentPage:e===s,onClick:()=>n(s),children:s},s));return p<o&&i.push(t.jsx(h,{disabled:!0,children:"..."},"end-ellipsis")),i};return t.jsxs(Y,{children:[t.jsx(h,{disabled:e===1,onClick:()=>n(1),children:t.jsx(f,{})}),t.jsx(h,{disabled:e===1,onClick:()=>n(e-1),children:t.jsx(b,{})}),l(),t.jsx(h,{disabled:e===o,onClick:()=>n(e+1),children:t.jsx(b,{})}),t.jsx(h,{disabled:e===o,onClick:()=>n(o),children:t.jsx(f,{})})]})},J=()=>{const e=j(),o=c(k),n=c(v),l=c(N);c(S);const i=c(I),d=c(y),a=c(B);w.useEffect(()=>{e(g({page:i,limit:d,filterWord:n}))},[e,i,d,n]);const p=s=>{e(m(s)),e(g({page:s,limit:d,filterWord:n}))};return t.jsx(t.Fragment,{children:l?t.jsx($,{}):t.jsxs(z,{className:"container",children:[t.jsx(V,{className:"title",children:"News"}),t.jsx(U,{}),t.jsx(E,{children:o.map(s=>t.jsx(T,{nw:s},s._id))}),a>1?t.jsx(q,{currentPage:i,totalPages:a,onPageChange:p}):null]})})};export{J as default};
