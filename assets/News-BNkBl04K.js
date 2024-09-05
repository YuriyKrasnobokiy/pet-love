import{u as n,j as t,a as h,c as o,r as w,f as p,L as f,e as b,g as x}from"./index-Bs-oE8v2.js";import{S as j,P as u}from"./PaginationControls-BOkVQzrW.js";const N=e=>e.newsStore.news,C=e=>e.newsStore.isLoading,S=e=>e.newsStore.error,y=e=>e.newsStore.filterTerm,P=e=>e.newsStore.page,v=e=>e.newsStore.perPage,k=e=>e.newsStore.totalPages,z=n.div`
  padding-top: 34px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
`,L=n.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
  }
`,T=n.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`,D=n.ul`
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
`,F=n.li`
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
`,$=n.h3`
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
`,E=n.p`
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
`,R=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.NwCardDateColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,I=n.a`
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
`,_=e=>{const i=new Date(e),r=i.getDate().toString().padStart(2,"0"),a=(i.getMonth()+1).toString().padStart(2,"0"),c=i.getFullYear();return`${r}/${a}/${c}`},B=({nw:e})=>t.jsxs(F,{children:[t.jsxs("div",{children:[t.jsx(W,{src:e.imgUrl,alt:"news",height:190}),t.jsx($,{children:e.title}),t.jsx(E,{children:e.text})]}),t.jsxs(M,{children:[t.jsx(R,{children:_(e.date)}),t.jsx(I,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),H=({news:e})=>t.jsx(D,{children:e.map(i=>t.jsx(B,{nw:i},i._id))}),Y=()=>{const e=h(),i=o(N),r=o(y),a=o(C),c=o(S),l=o(P),d=o(v),m=o(k);w.useEffect(()=>{e(p({page:l,limit:d,filterWord:r}))},[e,l,d,r]);const g=s=>{e(x(s)),e(p({page:s,limit:d,filterWord:r}))};return a?t.jsx(f,{}):c?t.jsx("p",{children:"Ooops...Please try to reload page"}):t.jsxs(z,{className:"container",children:[t.jsxs(L,{children:[t.jsx(T,{className:"title",children:"News"}),t.jsx(j,{onFilterChange:s=>e(b(s)),onFetch:s=>e(p(s)),onPageChange:s=>e(x(s)),filterWord:r})]}),t.jsx(H,{news:i}),m>1?t.jsx(u,{currentPage:l,totalPages:m,onPageChange:g}):null]})};export{Y as default};
