import{u as o,j as e,a as u,r as w,I as d,s as m,c as i,f as g,L as j}from"./index-Bv_LbXdZ.js";const b=t=>t.newsStore.news,C=t=>t.newsStore.isLoading,N=t=>t.newsStore.error,S=t=>t.newsStore.filterTerm,I=t=>t.newsStore.page,$=t=>t.newsStore.perPage,k=t=>t.newsStore.totalPages,y=t=>{const n=new Date(t),r=n.getDate().toString().padStart(2,"0"),l=(n.getMonth()+1).toString().padStart(2,"0"),h=n.getFullYear();return`${r}/${l}/${h}`},v=o.img`
  height: 190px;
  max-width: 335px;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  margin-bottom: 20px;
`,B=o.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
`,F=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`,D=o.div`
  display: flex;
  justify-content: space-between;
`,L=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${t=>t.theme.colors.NwCardDateColor};
`,T=o.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${t=>t.theme.colors.NwCardReadMoreColor};
`,z=({nw:t})=>e.jsxs("li",{children:[e.jsx(v,{src:t.imgUrl,alt:"news",height:190}),e.jsx(B,{children:t.title}),e.jsx(F,{children:t.text}),e.jsxs(D,{children:[e.jsx(L,{children:y(t.date)}),e.jsx(T,{href:t.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),R=o.div`
  padding-top: 34px;
`,E=o.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
`,W=o.ul`
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
`,M=o.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
`,V=o.input`
  border: 1px solid ${t=>t.theme.colors.searchInputBorderColor};
  border-radius: 30px;
  padding: 12px;
  width: 309px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  background-color: transparent;
  color: ${t=>t.theme.colors.searchInputColor};

  &::placeholder {
    color: ${t=>t.theme.colors.searchInputColor};
  }

  &:focus {
    border-color: ${t=>t.theme.colors.searchInputBorderFocus};
    outline: none;
  }

  &:hover {
    border-color: ${t=>t.theme.colors.accentColor};
    outline: none;
  }
`,_=o.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${t=>t.theme.colors.searchInputIconColor};
`,U=o.button`
  top: 13px;
  right: 40px;
  position: absolute;
  background-color: transparent;
  color: ${t=>t.theme.colors.searchInputIconColor};
`,Y=()=>{const t=u(),[n,r]=w.useState(""),l=s=>{s.preventDefault(),t(m(n))},h=s=>{s.preventDefault(),r(""),t(m(""))},p=s=>{r(s.target.value)};return e.jsxs(M,{onSubmit:l,children:[e.jsx(V,{type:"text",placeholder:"Search",value:n,onChange:p}),n!==""&&e.jsx(U,{type:"button",onClick:h,children:e.jsx(d,{height:18,width:18,name:"icon-cross-small"})}),e.jsx(_,{type:"submit",onSubmit:l,children:e.jsx(d,{height:18,width:18,name:"icon-search"})})]})},q=o.div`
  display: flex;
  justify-content: space-between;
`,a=o.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.285;
  width: 40px;
  height: 40px;
  justify-content: center;
  margin: 0;
  border: 1px solid ${t=>t.theme.colors.PaginationBtnBorderColor};
  border-radius: 50%;
  background-color: transparent;

  &:first-child {
    transform: rotate(180deg);
  }

  &:nth-child(2) {
    transform: rotate(180deg);
  }

  &:disabled {
    fill: ${t=>t.theme.colors.PaginationBtnFill};
    color: ${t=>t.theme.colors.PaginationBtnColor};
  }
`,A=({currentPage:t,totalPages:n,onPageChange:r})=>e.jsxs(q,{children:[e.jsx(a,{disabled:t===1,onClick:()=>r(t=1),children:e.jsx(d,{name:"icon-arrow",width:20,height:20})}),e.jsx(a,{disabled:t===1,onClick:()=>r(t-1),children:e.jsx(d,{name:"icon-arrow",width:20,height:20})}),e.jsx(a,{disabled:t===1,onClick:()=>r(t=1),children:"1"}),e.jsx(a,{disabled:t>2,onClick:()=>r(t=2),children:"2"}),e.jsx(a,{disabled:!0,children:"..."}),e.jsx(a,{disabled:t===n,onClick:()=>r(t+1),children:e.jsx(d,{name:"icon-arrow",width:20,height:20})}),e.jsx(a,{disabled:t===n,onClick:()=>r(t=n),children:e.jsx(d,{name:"icon-arrow",width:20,height:20})})]}),H=()=>{const t=u(),n=i(b),r=i(S),l=n.filter(c=>c.title.toLowerCase().includes(r.toLowerCase())),h=i(C);i(N);const p=i(I),s=i($),x=i(k);w.useEffect(()=>{t(g({page:p,limit:s}))},[t,p,s]);const f=c=>{t(g({page:c,limit:s}))};return e.jsx(e.Fragment,{children:h?e.jsx(j,{}):e.jsxs(R,{className:"container",children:[e.jsx(E,{className:"title",children:"News"}),e.jsx(Y,{}),e.jsx(W,{children:l.map(c=>e.jsx(z,{nw:c},c._id))}),x>1?e.jsx(A,{currentPage:p,totalPages:x,onPageChange:f}):null]})})};export{H as default};
