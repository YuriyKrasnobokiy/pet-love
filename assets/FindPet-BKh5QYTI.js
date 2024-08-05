import{u as r,j as e,a,c as n,r as x,i as h,L as p}from"./index-r0SON_hS.js";const m=r.li`
  padding: 24px;
  max-width: 287px;
  border-radius: 16px;
  background-color: ${t=>t.theme.colors.white};
`,j=r.img`
  border-radius: 16px;
  max-width: 287px;
  width: 100%;
  height: 178px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: top;
`,g=r.div`
  margin-bottom: 42px;
`,u=r.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 8px;
  color: ${t=>t.theme.colors.PetCardTitleColor};
`,P=r.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`,s=r.li`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: -0.02em;
  color: ${t=>t.theme.colors.PetCardPropertyColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,o=r.span`
  font-size: 10px;
  line-height: 1.4;
  color: ${t=>t.theme.colors.PetCardAccentPropertyColor};
`,f=r.p`
  color: ${t=>t.theme.colors.PetCardCommentColor};
`,C=r.button`
  border-radius: 30px;
  padding: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  justify-content: center;
  width: 231px;
`,i=r.p`
  &::first-letter {
    text-transform: uppercase;
  }
`,y=({pet:t})=>e.jsxs(m,{children:[e.jsx("div",{children:e.jsx(j,{src:t.imgURL,alt:"pet"})}),e.jsxs(g,{children:[e.jsx(u,{children:t.title}),e.jsxs(P,{children:[e.jsxs(s,{children:[e.jsx(o,{children:"Name"}),e.jsx(i,{children:t.name})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Birthday"}),e.jsx(i,{children:t.birthday})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Sex"}),e.jsx(i,{children:t.sex})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Species"}),e.jsx(i,{children:t.species})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Category"}),e.jsx(i,{children:t.category})]})]}),e.jsx(f,{children:t.comment})]}),e.jsx(C,{type:"button",children:"Learn more"})]}),b=t=>t.petsStore.pets,w=t=>t.petsStore.isLoading,L=t=>t.petsStore.error,S=()=>{const t=a(),c=n(b),l=n(w);return n(L),console.log("pets: ",c),x.useEffect(()=>{t(h())},[t]),e.jsx(e.Fragment,{children:l?e.jsx(p,{}):e.jsx("div",{children:e.jsx("ul",{children:c.map(d=>e.jsx(y,{pet:d},d._id))})})})},v=()=>e.jsx(S,{});export{v as default};
