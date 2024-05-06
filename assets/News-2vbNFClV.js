import{u as s,j as e,a as m,r as g,I as p,s as h,b as i,f as x,L as f}from"./index-BBbibxJV.js";const j=t=>t.newsStore.news,b=t=>t.newsStore.isLoading,C=t=>t.newsStore.error,N=t=>t.newsStore.filterTerm,S=t=>t.newsStore.page,y=t=>t.newsStore.perPage,k=t=>t.newsStore.totalPages,v=t=>{const o=new Date(t),n=o.getDate().toString().padStart(2,"0"),c=(o.getMonth()+1).toString().padStart(2,"0"),l=o.getFullYear();return`${n}/${c}/${l}`},I=s.img`
  height: 190px;
  max-width: 335px;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  margin-bottom: 20px;
`,D=s.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
`,L=s.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`,F=s.div`
  display: flex;
  justify-content: space-between;
`,T=s.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${t=>t.theme.colors.NwCardDateColor};
`,$=s.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${t=>t.theme.colors.NwCardReadMoreColor};
`,z=({nw:t})=>e.jsxs("li",{children:[e.jsx(I,{src:t.imgUrl,alt:"news",height:190}),e.jsx(D,{children:t.title}),e.jsx(L,{children:t.text}),e.jsxs(F,{children:[e.jsx(T,{children:v(t.date)}),e.jsx($,{href:t.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),E=s.div`
  padding-top: 34px;
`,R=s.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
`,B=s.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
  }
`,M=s.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
`,W=s.input`
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
`,V=s.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
`,_=s.button`
  top: 13px;
  right: 40px;
  position: absolute;
  color: red;
  background-color: transparent;
`,U=()=>{const t=m(),[o,n]=g.useState(""),c=r=>{r.preventDefault(),t(h(o))},l=r=>{r.preventDefault(),n(""),t(h(""))},d=r=>{n(r.target.value)};return e.jsxs(M,{onSubmit:c,children:[e.jsx(W,{type:"text",placeholder:"Enter filter word",value:o,onChange:d}),o!==""&&e.jsx(_,{type:"button",onClick:l,children:e.jsx(p,{height:18,width:18,name:"icon-cross-small"})}),e.jsx(V,{type:"submit",children:e.jsx(p,{height:18,width:18,name:"icon-search"})})]})},Y=({currentPage:t,totalPages:o,onPageChange:n})=>e.jsxs("div",{children:[e.jsx("button",{disabled:t===1,onClick:()=>n(t=1),children:"Перша"}),e.jsx("button",{disabled:t===1,onClick:()=>n(t-1),children:"Попередня"}),e.jsxs("span",{children:[t," з ",o]}),e.jsx("button",{disabled:t===o,onClick:()=>n(t+1),children:"Наступна"}),e.jsx("button",{disabled:t===o,onClick:()=>n(t=o),children:"Остання"})]}),A=()=>{const t=m(),o=i(j),n=i(N),c=o.filter(a=>a.title.toLowerCase().includes(n.toLowerCase())),l=i(b);i(C);const d=i(S),r=i(y),u=i(k);g.useEffect(()=>{t(x({page:d,limit:r}))},[t,d,r]);const w=a=>{t(x({page:a,limit:r}))};return e.jsx(e.Fragment,{children:l?e.jsx(f,{}):e.jsxs(E,{className:"container",children:[e.jsx(R,{className:"title",children:"News"}),e.jsx(U,{}),e.jsx(B,{children:c.map(a=>e.jsx(z,{nw:a},a._id))}),e.jsx(Y,{currentPage:d,totalPages:u,onPageChange:w})]})})};export{A as default};
