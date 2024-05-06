import{u as o,j as e,a as h,r as x,I as d,s as p,b as l,f as m,L as g}from"./index-BQRM7_YT.js";const u=t=>t.newsStore.news,w=t=>t.newsStore.isLoading,f=t=>t.newsStore.error,j=t=>t.newsStore.filterTerm,b=t=>{const r=new Date(t),s=r.getDate().toString().padStart(2,"0"),i=(r.getMonth()+1).toString().padStart(2,"0"),a=r.getFullYear();return`${s}/${i}/${a}`},N=o.img`
  height: 190px;
  max-width: 335px;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  margin-bottom: 20px;
`,C=o.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
`,S=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`,y=o.div`
  display: flex;
  justify-content: space-between;
`,I=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${t=>t.theme.colors.NwCardDateColor};
`,v=o.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${t=>t.theme.colors.NwCardReadMoreColor};
`,D=({nw:t})=>e.jsxs("li",{children:[e.jsx(N,{src:t.imgUrl,alt:"news",height:190}),e.jsx(C,{children:t.title}),e.jsx(S,{children:t.text}),e.jsxs(y,{children:[e.jsx(I,{children:b(t.date)}),e.jsx(v,{href:t.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),L=o.div`
  padding-top: 34px;
`,F=o.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
`,$=o.ul`
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
`,k=o.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
`,T=o.input`
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
`,z=o.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
`,E=o.button`
  top: 13px;
  right: 40px;
  position: absolute;
  color: red;
  background-color: transparent;
`,R=()=>{const t=h(),[r,s]=x.useState(""),i=c=>{c.preventDefault(),t(p(r))},a=c=>{c.preventDefault(),s(""),t(p(""))},n=c=>{s(c.target.value)};return e.jsxs(k,{onSubmit:i,children:[e.jsx(T,{type:"text",placeholder:"Enter filter word",value:r,onChange:n}),r!==""&&e.jsx(E,{type:"button",onClick:a,children:e.jsx(d,{height:18,width:18,name:"icon-cross-small"})}),e.jsx(z,{type:"submit",children:e.jsx(d,{height:18,width:18,name:"icon-search"})})]})},M=()=>{const t=h(),r=l(u),s=l(j),i=r.filter(n=>n.title.toLowerCase().includes(s.toLowerCase())),a=l(w);return l(f),x.useEffect(()=>{t(m())},[t]),e.jsx(e.Fragment,{children:a?e.jsx(g,{}):e.jsxs(L,{className:"container",children:[e.jsx(F,{className:"title",children:"News"}),e.jsx(R,{}),e.jsx($,{children:i.map(n=>e.jsx(D,{nw:n},n._id))})]})})};export{M as default};
