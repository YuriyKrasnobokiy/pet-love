import{u as o,r as w,j as t,I as x,a as u,c as a,f as h,L as f,e as b,g}from"./index-7A1JQRtv.js";import{P as j}from"./PaginationControls-DrOUMVg0.js";const C=e=>e.newsStore.news,N=e=>e.newsStore.isLoading,y=e=>e.newsStore.error,S=e=>e.newsStore.filterTerm,v=e=>e.newsStore.page,I=e=>e.newsStore.perPage,k=e=>e.newsStore.totalPages,P=o.div`
  padding-top: 34px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
`,$=o.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
  }
`,z=o.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`,D=o.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 230px;
    margin: 0;
  }
`,W=o.input`
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
`,F=o.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 14px;
  }
`,L=o.button`
  top: 13px;
  right: 36px;
  position: absolute;
  background-color: transparent;
  color: ${e=>e.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
  }
`,T=({onFilterChange:e,onFetch:i,onPageChange:r,filterWord:l})=>{const[s,c]=w.useState(l||""),p=n=>{n.preventDefault(),e(s),r(1),i({page:1,limit:6,filterWord:s})},d=n=>{n.preventDefault(),c(""),e(""),r(1),i({page:1,limit:6,filterWord:""})},m=n=>{c(n.target.value)};return t.jsxs(D,{onSubmit:p,children:[t.jsx(W,{type:"text",placeholder:"Search",value:s,onChange:m}),s!==""&&t.jsx(L,{type:"button",onClick:d,children:t.jsx(x,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(F,{type:"submit",children:t.jsx(x,{height:18,width:18,name:"icon-search"})})]})},B=o.ul`
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
`,R=o.li`
  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,E=o.img`
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
`,M=o.h3`
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
`,V=o.p`
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
`,_=o.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,H=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.NwCardDateColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,O=o.a`
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
`,U=e=>{const i=new Date(e),r=i.getDate().toString().padStart(2,"0"),l=(i.getMonth()+1).toString().padStart(2,"0"),s=i.getFullYear();return`${r}/${l}/${s}`},Y=({nw:e})=>t.jsxs(R,{children:[t.jsxs("div",{children:[t.jsx(E,{src:e.imgUrl,alt:"news",height:190}),t.jsx(M,{children:e.title}),t.jsx(V,{children:e.text})]}),t.jsxs(_,{children:[t.jsx(H,{children:U(e.date)}),t.jsx(O,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),q=({news:e})=>t.jsx(B,{children:e.map(i=>t.jsx(Y,{nw:i},i._id))}),J=()=>{const e=u(),i=a(C),r=a(S),l=a(N),s=a(y),c=a(v),p=a(I),d=a(k);w.useEffect(()=>{e(h({page:c,limit:p,filterWord:r}))},[e,c,p,r]);const m=n=>{e(g(n)),e(h({page:n,limit:p,filterWord:r}))};return l?t.jsx(f,{}):s?t.jsx("p",{children:"Ooops...Please try to reload page"}):t.jsxs(P,{className:"container",children:[t.jsxs($,{children:[t.jsx(z,{className:"title",children:"News"}),t.jsx(T,{onFilterChange:n=>e(b(n)),onFetch:n=>e(h(n)),onPageChange:n=>e(g(n)),filterWord:r})]}),t.jsx(q,{news:i}),d>1?t.jsx(j,{currentPage:c,totalPages:d,onPageChange:m}):null]})};export{J as default};
