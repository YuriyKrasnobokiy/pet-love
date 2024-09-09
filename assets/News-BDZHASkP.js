import{u as i,j as t,a as h,c as a,r as w,f as p,L as f,e as b,g as x}from"./index-C8SbqSzV.js";import{s as j,a as u,b as N,c as C,d as y,e as P,f as v,S as k,P as S}from"./PaginationControls-Cyz871jf.js";const z=i.div`
  padding-top: 34px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
`,D=i.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
  }
`,F=i.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`,L=i.ul`
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
`,T=i.li`
  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,W=i.img`
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
`,$=i.h3`
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
`,E=i.p`
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
`,M=i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,R=i.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.NwCardDateColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,I=i.a`
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
`,_=e=>{const n=new Date(e),o=n.getDate().toString().padStart(2,"0"),r=(n.getMonth()+1).toString().padStart(2,"0"),d=n.getFullYear();return`${o}/${r}/${d}`},B=({nw:e})=>t.jsxs(T,{children:[t.jsxs("div",{children:[t.jsx(W,{src:e.imgUrl,alt:"news",height:190}),t.jsx($,{children:e.title}),t.jsx(E,{children:e.text})]}),t.jsxs(M,{children:[t.jsx(R,{children:_(e.date)}),t.jsx(I,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),H=({news:e})=>t.jsx(L,{children:e.map(n=>t.jsx(B,{nw:n},n._id))}),Y=()=>{const e=h(),n=a(j),o=a(u),r=a(N),d=a(C),l=a(y),c=a(P),m=a(v);w.useEffect(()=>{e(p({page:l,limit:c,filterWord:o}))},[e,l,c,o]);const g=s=>{e(x(s)),e(p({page:s,limit:c,filterWord:o}))};return r?t.jsx(f,{}):d?t.jsx("p",{children:"Ooops...Please try to reload page"}):t.jsxs(z,{className:"container",children:[t.jsxs(D,{children:[t.jsx(F,{className:"title",children:"News"}),t.jsx(k,{onFilterChange:s=>e(b(s)),onFetch:s=>e(p(s)),onPageChange:s=>e(x(s)),filterWord:o})]}),t.jsx(H,{news:n}),m>1?t.jsx(S,{currentPage:l,totalPages:m,onPageChange:g}):null]})};export{Y as default};
