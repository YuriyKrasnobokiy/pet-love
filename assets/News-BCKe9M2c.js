import{u as n,j as t,a as f,c as s,r as b,f as p,e as x,g}from"./index-D_EJOTRS.js";import{S as j}from"./SimpleLoader-DbY4rQIh.js";import{S as u,P as N}from"./SearchField-DeARJ0wb.js";const S=n.ul`
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
`,C=n.li`
  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,y=n.img`
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
`,P=n.h3`
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
`,v=n.p`
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
`,k=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,z=n.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.NwCardDateColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,T=n.a`
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
`,D=e=>{const i=new Date(e),r=i.getDate().toString().padStart(2,"0"),a=(i.getMonth()+1).toString().padStart(2,"0"),c=i.getFullYear();return`${r}/${a}/${c}`},F=({nw:e})=>t.jsxs(C,{children:[t.jsxs("div",{children:[t.jsx(y,{src:e.imgUrl,alt:"news",height:190}),t.jsx(P,{children:e.title}),t.jsx(v,{children:e.text})]}),t.jsxs(k,{children:[t.jsx(z,{children:D(e.date)}),t.jsx(T,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),L=({news:e})=>t.jsx(S,{children:e.map(i=>t.jsx(F,{nw:i},i._id))}),W=e=>e.newsStore.news,$=e=>e.newsStore.isLoading,E=e=>e.newsStore.error,h=e=>e.newsStore.filterTerm,M=e=>e.newsStore.page,R=e=>e.newsStore.perPage,I=e=>e.newsStore.totalPages,_=n.div`
  padding-top: 34px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
`,B=n.div`
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
`,q=()=>{const e=f(),i=s(W),r=s(h),a=s($),c=s(E),l=s(M),d=s(R),m=s(I);b.useEffect(()=>{e(p({page:l,limit:d,filterWord:r}))},[e,l,d,r]);const w=o=>{e(g(o)),e(p({page:o,limit:d,filterWord:r}))};return a?t.jsx(j,{}):c?t.jsx("p",{children:"Ooops...Please try to reload page"}):t.jsxs(_,{className:"container",children:[t.jsxs(B,{children:[t.jsx(H,{className:"title",children:"News"}),t.jsx(u,{onFilterChange:o=>e(x(o)),onFetch:o=>e(p(o)),onPageChange:o=>e(g(o)),filterWord:r,setFilterTerm:x,selectFilterTerm:h})]}),t.jsx(L,{news:i}),m>1?t.jsx(N,{currentPage:l,totalPages:m,onPageChange:w}):null]})};export{q as default};
