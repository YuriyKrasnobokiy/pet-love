import{u as o,j as e,a as w,r as f,I as c,s as m,c as r,f as g,L as j}from"./index-B1QbnIFc.js";const b=t=>t.newsStore.news,C=t=>t.newsStore.isLoading,N=t=>t.newsStore.error,S=t=>t.newsStore.filterTerm,y=t=>t.newsStore.page,k=t=>t.newsStore.perPage,$=t=>t.newsStore.totalPages,v=t=>{const s=new Date(t),n=s.getDate().toString().padStart(2,"0"),d=(s.getMonth()+1).toString().padStart(2,"0"),h=s.getFullYear();return`${n}/${d}/${h}`},B=o.img`
  height: 190px;
  max-width: 335px;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  margin-bottom: 20px;
`,I=o.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
`,D=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`,F=o.div`
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
`,z=({nw:t})=>e.jsxs("li",{children:[e.jsx(B,{src:t.imgUrl,alt:"news",height:190}),e.jsx(I,{children:t.title}),e.jsx(D,{children:t.text}),e.jsxs(F,{children:[e.jsx(L,{children:v(t.date)}),e.jsx(T,{href:t.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),E=o.div`
  padding-top: 34px;
`,R=o.h2`
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

  &::placeholder {
    color: ${t=>t.theme.colors.searchInputColor};
  }
`,_=o.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
`,U=o.button`
  top: 13px;
  right: 40px;
  position: absolute;
  background-color: transparent;
`,Y=()=>{const t=w(),[s,n]=f.useState(""),d=i=>{i.preventDefault(),t(m(s))},h=i=>{i.preventDefault(),n(""),t(m(""))},p=i=>{n(i.target.value)};return e.jsxs(M,{onSubmit:d,children:[e.jsx(V,{type:"text",placeholder:"Enter filter word",value:s,onChange:p}),s!==""&&e.jsx(U,{type:"button",onClick:h,children:e.jsx(c,{height:18,width:18,name:"icon-cross-small"})}),e.jsx(_,{type:"submit",children:e.jsx(c,{height:18,width:18,name:"icon-search"})})]})},q=o.div`
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
`,A=({currentPage:t,totalPages:s,onPageChange:n})=>e.jsxs(q,{children:[e.jsx(a,{disabled:t===1,onClick:()=>n(t=1),children:e.jsx(c,{name:"icon-arrow",width:20,height:20})}),e.jsx(a,{disabled:t===1,onClick:()=>n(t-1),children:e.jsx(c,{name:"icon-arrow",width:20,height:20})}),e.jsx(a,{disabled:t===1,onClick:()=>n(t=1),children:"1"}),e.jsx(a,{disabled:t>2,onClick:()=>n(t=2),children:"2"}),e.jsx(a,{disabled:!0,children:"..."}),e.jsx(a,{disabled:t===s,onClick:()=>n(t+1),children:e.jsx(c,{name:"icon-arrow",width:20,height:20})}),e.jsx(a,{disabled:t===s,onClick:()=>n(t=s),children:e.jsx(c,{name:"icon-arrow",width:20,height:20})})]}),H=()=>{const t=w(),s=r(b),n=r(S),d=s.filter(l=>l.title.toLowerCase().includes(n.toLowerCase())),h=r(C);r(N);const p=r(y),i=r(k),x=r($);f.useEffect(()=>{t(g({page:p,limit:i}))},[t,p,i]);const u=l=>{t(g({page:l,limit:i}))};return e.jsx(e.Fragment,{children:h?e.jsx(j,{}):e.jsxs(E,{className:"container",children:[e.jsx(R,{className:"title",children:"News"}),e.jsx(Y,{}),e.jsx(W,{children:d.map(l=>e.jsx(z,{nw:l},l._id))}),x>1?e.jsx(A,{currentPage:p,totalPages:x,onPageChange:u}):null]})})};export{H as default};
