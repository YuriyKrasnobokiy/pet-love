import{u as n,j as t,a as b,r as j,I as g,s as u,d as x,f as m,G as C,e as c,L as k}from"./index-CROutAZa.js";const v=e=>e.newsStore.news,$=e=>e.newsStore.isLoading,y=e=>e.newsStore.error,N=e=>e.newsStore.filterTerm,S=e=>e.newsStore.page,I=e=>e.newsStore.perPage,B=e=>e.newsStore.totalPages,P=e=>{const o=new Date(e),i=o.getDate().toString().padStart(2,"0"),l=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getFullYear();return`${i}/${l}/${s}`},z=n.li`
  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,W=n.img`
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
`,D=n.h3`
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
`,L=n.p`
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
`,M=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,F=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.NwCardDateColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,R=n.a`
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
`,T=({nw:e})=>t.jsxs(z,{children:[t.jsxs("div",{children:[t.jsx(W,{src:e.imgUrl,alt:"news",height:190}),t.jsx(D,{children:e.title}),t.jsx(L,{children:e.text})]}),t.jsxs(M,{children:[t.jsx(F,{children:P(e.date)}),t.jsx(R,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),V=n.div`
  padding-top: 34px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
`,E=n.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
  }
`,H=n.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`,G=n.ul`
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
`,O=n.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 230px;
    margin: 0;
  }
`,_=n.input`
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
`,U=n.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 14px;
  }
`,Y=n.button`
  top: 13px;
  right: 36px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
  }
`,q=()=>{const e=b(),[o,i]=j.useState(""),l=a=>{a.preventDefault(),e(u(o)),e(x(1)),e(m({page:1,limit:6,filterWord:o}))},s=a=>{a.preventDefault(),i(""),e(u("")),e(x(1)),e(m({page:1,limit:6,filterWord:""}))},d=a=>{i(a.target.value)};return t.jsxs(O,{onSubmit:l,children:[t.jsx(_,{type:"text",placeholder:"Search",value:o,onChange:d}),o!==""&&t.jsx(Y,{type:"button",onClick:s,children:t.jsx(g,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(U,{type:"submit",children:t.jsx(g,{height:18,width:18,name:"icon-search"})})]})},A=n.div`
  display: flex;
  justify-content: space-between;
`,p=n.button`
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
`;function w(e){return C({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},child:[]}]})(e)}function f(e){return C({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(e)}const J=({currentPage:e,totalPages:o,onPageChange:i})=>{const l=()=>{const s=[],a=Math.max(1,Math.min(e-Math.floor(1),o-2+1)),h=Math.min(a+2-1,o);for(let r=a;r<=h;r++)s.push(t.jsx(p,{$isCurrentPage:e===r,onClick:()=>i(r),children:r},r));return h<o&&s.push(t.jsx(p,{disabled:!0,children:"..."},"end-ellipsis")),s};return t.jsxs(A,{children:[t.jsx(p,{disabled:e===1,onClick:()=>i(1),children:t.jsx(w,{})}),t.jsx(p,{disabled:e===1,onClick:()=>i(e-1),children:t.jsx(f,{})}),l(),t.jsx(p,{disabled:e===o,onClick:()=>i(e+1),children:t.jsx(f,{})}),t.jsx(p,{disabled:e===o,onClick:()=>i(o),children:t.jsx(w,{})})]})},Q=()=>{const e=b(),o=c(v),i=c(N),l=c($);c(y);const s=c(S),d=c(I),a=c(B);j.useEffect(()=>{e(m({page:s,limit:d,filterWord:i}))},[e,s,d,i]);const h=r=>{e(x(r)),e(m({page:r,limit:d,filterWord:i}))};return t.jsx(t.Fragment,{children:l?t.jsx(k,{}):t.jsxs(V,{className:"container",children:[t.jsxs(E,{children:[t.jsx(H,{className:"title",children:"News"}),t.jsx(q,{})]}),t.jsx(G,{children:o.map(r=>t.jsx(T,{nw:r},r._id))}),a>1?t.jsx(J,{currentPage:s,totalPages:a,onPageChange:h}):null]})})};export{Q as default};
