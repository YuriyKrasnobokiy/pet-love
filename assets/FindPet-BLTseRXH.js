import{u as r,j as t,I as d,a as x,c,r as h,i as p,L as m}from"./index-Bb3MiMD0.js";const j=r.li`
  padding: 24px;
  max-width: 287px;
  border-radius: 16px;
  background-color: ${e=>e.theme.colors.PetCardBGColor};
  margin: 0 auto;
`,g=r.img`
  border-radius: 16px;
  max-width: 287px;
  width: 100%;
  height: 178px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: top;
`,u=r.div`
  margin-bottom: 42px;
`,C=r.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 8px;
  color: ${e=>e.theme.colors.PetCardTitleColor};
`,P=r.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`,o=r.li`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.PetCardPropertyColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,s=r.span`
  font-size: 10px;
  line-height: 1.4;
  color: ${e=>e.theme.colors.PetCardAccentPropertyColor};
`,n=r.p`
  &::first-letter {
    text-transform: uppercase;
  }
`,f=r.p`
  color: ${e=>e.theme.colors.PetCardCommentColor};
`,b=r.div`
  display: flex;
  justify-content: space-between;
`,y=r.button`
  border-radius: 30px;
  padding: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  justify-content: center;
  width: 231px;
  margin: 0;
  color: ${e=>e.theme.colors.PetCardBtnColor};
  background-color: ${e=>e.theme.colors.PetCardBtnBGColor};
  transition: background-color 300ms linear;

  &:hover {
    background-color: ${e=>e.theme.colors.PetCardBtnBGHoverColor};
  }
`,B=r.button`
  border-radius: 100%;
  width: 46px;
  height: 46px;
  justify-content: center;
  margin: 0;
  background-color: ${e=>e.theme.colors.PetCardFavBtnBGColor};
  transition: background-color 300ms linear;

  &:hover {
    background-color: ${e=>e.theme.colors.PetCardFavBtnBGHoverColor};
  }
`,v=({pet:e})=>t.jsxs(j,{children:[t.jsx("div",{children:t.jsx(g,{src:e.imgURL,alt:"pet"})}),t.jsxs(u,{children:[t.jsx(C,{children:e.title}),t.jsxs(P,{children:[t.jsxs(o,{children:[t.jsx(s,{children:"Name"}),t.jsx(n,{children:e.name})]}),t.jsxs(o,{children:[t.jsx(s,{children:"Birthday"}),t.jsx(n,{children:e.birthday})]}),t.jsxs(o,{children:[t.jsx(s,{children:"Sex"}),t.jsx(n,{children:e.sex})]}),t.jsxs(o,{children:[t.jsx(s,{children:"Species"}),t.jsx(n,{children:e.species})]}),t.jsxs(o,{children:[t.jsx(s,{children:"Category"}),t.jsx(n,{children:e.category})]})]}),t.jsx(f,{children:e.comment})]}),t.jsxs(b,{children:[t.jsx(y,{type:"button",children:"Learn more"}),t.jsx(B,{children:t.jsx(d,{name:"icon-heart",width:18,height:18})})]})]}),w=e=>e.petsStore.pets,L=e=>e.petsStore.isLoading,$=e=>e.petsStore.error,k=r.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,S=()=>{const e=x(),a=c(w),l=c(L);return c($),h.useEffect(()=>{e(p())},[e]),t.jsx(t.Fragment,{children:l?t.jsx(m,{}):t.jsx(k,{children:a.map(i=>t.jsx(v,{pet:i},i._id))})})},G=()=>t.jsx(S,{});export{G as default};
