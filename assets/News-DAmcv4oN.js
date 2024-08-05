import{u as n,j as t,a as C,r as k,I as u,e as w,f as g,g as m,G as v,b as N,c as d,L as y}from"./index-BSPl3Dk5.js";const $=e=>e.newsStore.news,S=e=>e.newsStore.isLoading,B=e=>e.newsStore.error,I=e=>e.newsStore.filterTerm,z=e=>e.newsStore.page,W=e=>e.newsStore.perPage,D=e=>e.newsStore.totalPages,L=e=>{const o=new Date(e),i=o.getDate().toString().padStart(2,"0"),c=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getFullYear();return`${i}/${c}/${s}`},M=n.li`
  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,P=n.img`
  height: 190px;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    height: 226px;
    margin-bottom: 28px;
  }
`,F=n.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 14px;
  }
`,T=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 28px;
  }
`,R=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,E=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.NwCardDateColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,H=n.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.NwCardReadMoreColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,V=({nw:e})=>t.jsxs(M,{children:[t.jsxs("div",{children:[t.jsx(P,{src:e.imgUrl,alt:"news",height:190}),t.jsx(F,{children:e.title}),t.jsx(T,{children:e.text})]}),t.jsxs(R,{children:[t.jsx(E,{children:L(e.date)}),t.jsx(H,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),G=n.div`
  padding-top: 34px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
`,O=n.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
  }
`,_=n.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`,A=n.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px 35px;
  }
`,U=n.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 230px;
    margin: 0;
  }
`,Y=n.input`
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
`,q=n.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 14px;
  }
`,J=n.button`
  top: 13px;
  right: 36px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
  }
`,K=()=>{const e=C(),[o,i]=k.useState(""),c=r=>{r.preventDefault(),e(w(o)),e(g(1)),e(m({page:1,limit:6,filterWord:o}))},s=r=>{r.preventDefault(),i(""),e(w("")),e(g(1)),e(m({page:1,limit:6,filterWord:""}))},a=r=>{i(r.target.value)};return t.jsxs(U,{onSubmit:c,children:[t.jsx(Y,{type:"text",placeholder:"Search",value:o,onChange:a}),o!==""&&t.jsx(J,{type:"button",onClick:s,children:t.jsx(u,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(q,{type:"submit",children:t.jsx(u,{height:18,width:18,name:"icon-search"})})]})},Q=n.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 446px;
    margin: 0 auto;
  }
`,f=n.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,X=n.div`
  display: flex;
  gap: 10px;
`,h=n.button`
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
`;function b(e){return v({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(e)}function j(e){return v({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(e)}const Z=({currentPage:e,totalPages:o,onPageChange:i})=>{const c=()=>{const s=N(),a=[],r=s==="desktop"||s==="tablet"?3:2,x=Math.max(1,Math.min(e-Math.floor(r/2),o-r+1)),l=Math.min(x+r-1,o);for(let p=x;p<=l;p++)a.push(t.jsx(h,{$isCurrentPage:e===p,onClick:()=>i(p),children:p},p));return l<o&&a.push(t.jsx(h,{disabled:!0,children:"..."},"end-ellipsis")),a};return t.jsxs(Q,{children:[t.jsxs(f,{children:[t.jsx(h,{className:"left icon",disabled:e===1,onClick:()=>i(1),children:t.jsx(b,{})}),t.jsx(h,{className:"left icon",disabled:e===1,onClick:()=>i(e-1),children:t.jsx(j,{})})]}),t.jsx(X,{children:c()}),t.jsxs(f,{children:[t.jsx(h,{className:"icon",disabled:e===o,onClick:()=>i(e+1),children:t.jsx(j,{})}),t.jsx(h,{className:"icon",disabled:e===o,onClick:()=>i(o),children:t.jsx(b,{})})]})]})},te=()=>{const e=C(),o=d($),i=d(I),c=d(S);d(B);const s=d(z),a=d(W),r=d(D);k.useEffect(()=>{e(m({page:s,limit:a,filterWord:i}))},[e,s,a,i]);const x=l=>{e(g(l)),e(m({page:l,limit:a,filterWord:i}))};return t.jsx(t.Fragment,{children:c?t.jsx(y,{}):t.jsxs(G,{className:"container",children:[t.jsxs(O,{children:[t.jsx(_,{className:"title",children:"News"}),t.jsx(K,{})]}),t.jsx(A,{children:o.map(l=>t.jsx(V,{nw:l},l._id))}),r>1?t.jsx(Z,{currentPage:s,totalPages:r,onPageChange:x}):null]})})};export{te as default};
