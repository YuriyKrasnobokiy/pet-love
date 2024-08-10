import{u as o,a as w,r as u,j as t,I as x,e as g,f as p,g as d,c as s,L as b}from"./index-DnHFJQkp.js";import{P as j}from"./PaginationControls-YO89no_d.js";const C=e=>e.newsStore.news,N=e=>e.newsStore.isLoading,S=e=>e.newsStore.error,y=e=>e.newsStore.filterTerm,v=e=>e.newsStore.page,I=e=>e.newsStore.perPage,k=e=>e.newsStore.totalPages,P=o.div`
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
`,T=()=>{const e=w(),[n,r]=u.useState(""),a=i=>{i.preventDefault(),e(g(n)),e(p(1)),e(d({page:1,limit:6,filterWord:n}))},c=i=>{i.preventDefault(),r(""),e(g("")),e(p(1)),e(d({page:1,limit:6,filterWord:""}))},l=i=>{r(i.target.value)};return t.jsxs(D,{onSubmit:a,children:[t.jsx(W,{type:"text",placeholder:"Search",value:n,onChange:l}),n!==""&&t.jsx(L,{type:"button",onClick:c,children:t.jsx(x,{height:18,width:18,name:"icon-cross-small"})}),t.jsx(F,{type:"submit",children:t.jsx(x,{height:18,width:18,name:"icon-search"})})]})},B=o.ul`
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
`,U=o.a`
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
`,Y=e=>{const n=new Date(e),r=n.getDate().toString().padStart(2,"0"),a=(n.getMonth()+1).toString().padStart(2,"0"),c=n.getFullYear();return`${r}/${a}/${c}`},q=({nw:e})=>t.jsxs(R,{children:[t.jsxs("div",{children:[t.jsx(E,{src:e.imgUrl,alt:"news",height:190}),t.jsx(M,{children:e.title}),t.jsx(V,{children:e.text})]}),t.jsxs(_,{children:[t.jsx(H,{children:Y(e.date)}),t.jsx(U,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),A=({news:e})=>t.jsx(B,{children:e.map(n=>t.jsx(q,{nw:n},n._id))}),K=()=>{const e=w(),n=s(C),r=s(y),a=s(N),c=s(S),l=s(v),i=s(I),m=s(k);u.useEffect(()=>{e(d({page:l,limit:i,filterWord:r}))},[e,l,i,r]);const f=h=>{e(p(h)),e(d({page:h,limit:i,filterWord:r}))};return a?t.jsx(b,{}):c?null:t.jsxs(P,{className:"container",children:[t.jsxs($,{children:[t.jsx(z,{className:"title",children:"News"}),t.jsx(T,{})]}),t.jsx(A,{news:n}),m>1?t.jsx(j,{currentPage:l,totalPages:m,onPageChange:f}):null]})};export{K as default};
