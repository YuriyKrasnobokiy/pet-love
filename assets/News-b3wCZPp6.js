import{u as r,j as t,a as c,b as i,r as l,f as d,L as p}from"./index-CML2P0Ss.js";const h=e=>e.newsStore.news,x=e=>e.newsStore.isLoading,g=e=>e.newsStore.error,m=e=>{const s=new Date(e),n=s.getDate().toString().padStart(2,"0"),o=(s.getMonth()+1).toString().padStart(2,"0"),a=s.getFullYear();return`${n}/${o}/${a}`},w=r.img`
  height: 190px;
  max-width: 335px;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
  margin-bottom: 20px;
`,f=r.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
`,u=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`,j=r.div`
  display: flex;
  justify-content: space-between;
`,N=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.NwCardDateColor};
`,C=r.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.NwCardReadMoreColor};
`,b=({nw:e})=>t.jsxs("li",{children:[t.jsx(w,{src:e.imgUrl,alt:"news",height:190}),t.jsx(f,{children:e.title}),t.jsx(u,{children:e.text}),t.jsxs(j,{children:[t.jsx(N,{children:m(e.date)}),t.jsx(C,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"read more"})]})]}),S=r.ul`
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
`,D=()=>{const e=c(),s=i(h);console.log("news: ",s);const n=i(x);return i(g),l.useEffect(()=>{e(d())},[e]),t.jsx(t.Fragment,{children:n?t.jsx(p,{}):t.jsxs("div",{className:"container",children:[t.jsx("h2",{className:"title",children:"News"}),t.jsx(S,{children:s.map(o=>t.jsx(b,{nw:o},o._id))})]})})};export{D as default};
