import{u as r,a as h,c as x,a4 as m,j as t,I as c,a5 as l,a6 as g}from"./index-DpkvdkQU.js";const f=r.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: ${e=>e.$profile?"1fr 1fr":"repeat(3, 1fr)"};
    margin-bottom: 60px;
    gap: ${e=>e.$profile?"24px":"40px 32px"};
  }
`,j=r.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  width: 287px;
  border-radius: 16px;
  background-color: ${e=>e.theme.colors.PetCardBGColor};
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 294px;
  }
  @media screen and (min-width: 1280px) {
    width: ${e=>e.$profile?"292px":"315px"};
    padding: ${e=>e.$profile?"14px 14px 18px":"24px"};
  }
`,u=r.img`
  border-radius: 16px;
  width: 100%;
  height: 178px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    margin-bottom: ${e=>e.$profile?"14px":"24px"};
  }
`,C=r.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${e=>e.$profile?"24px":"32px"};
  }
`,$=r.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,P=r.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetCardTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,w=r.div`
  display: flex;
  color: ${e=>e.theme.colors.IconStarAccentColor};
  gap: 4px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,b=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.PetCardPopularNumb};

  @media screen and (min-width: 768px) {
    line-height: 1.42857;
  }
`,y=r.ul`
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

  @media screen and (min-width: 768px) {
  }
`,d=r.p`
  &::first-letter {
    text-transform: uppercase;
  }
`,B=r.p`
  color: ${e=>e.theme.colors.PetCardCommentColor};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
`,v=r.div`
  display: flex;
  justify-content: space-between;
`,k=r.button`
  border-radius: 30px;
  padding: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  justify-content: center;
  width: ${e=>e.$profile?"100%":"231px"};
  margin: 0;
  color: ${e=>e.theme.colors.PetCardBtnColor};
  background-color: ${e=>e.theme.colors.PetCardBtnBGColor};
  transition: background-color 300ms linear;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: ${e=>e.$profile?"100%":"236px"};
  }
  @media screen and (min-width: 1280px) {
    width: ${e=>e.$profile?"100%":"257px"};
  }

  &:hover {
    background-color: ${e=>e.theme.colors.PetCardBtnBGHoverColor};
  }
`,z=r.button`
  display: ${e=>e.$profile?"none":"block"};
  border-radius: 100%;
  width: 46px;
  height: 46px;
  justify-content: center;
  margin: 0;
  color: ${e=>e.theme.colors.PetCardFavBtnColor};
  background-color: ${e=>e.theme.colors.PetCardFavBtnBGColor};
  transition: background-color 300ms linear;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  &:hover {
    background-color: ${e=>e.theme.colors.PetCardFavBtnBGHoverColor};
  }
`,I=({pet:e,profile:i})=>{const n=h(),a=x(m),p=()=>{a&&(n(l()),n(g({_id:e._id}))),n(l())};return t.jsx(t.Fragment,{children:t.jsxs(j,{$profile:i,children:[t.jsxs("div",{children:[t.jsx("div",{children:t.jsx(u,{$profile:i,src:e.imgURL,alt:"pet"})}),t.jsxs(C,{$profile:i,children:[t.jsxs($,{children:[t.jsx(P,{children:e.title}),t.jsxs(w,{children:[t.jsx(c,{name:"icon-star",width:16,height:16}),t.jsx(b,{children:e.popularity})]})]}),t.jsxs(y,{children:[t.jsxs(o,{children:[t.jsx(s,{children:"Name"}),t.jsx(d,{children:e.name})]}),t.jsxs(o,{children:[t.jsx(s,{children:"Birthday"}),t.jsx(d,{children:e.birthday})]}),t.jsxs(o,{children:[t.jsx(s,{children:"Sex"}),t.jsx(d,{children:e.sex})]}),t.jsxs(o,{children:[t.jsx(s,{children:"Species"}),t.jsx(d,{children:e.species})]}),t.jsxs(o,{children:[t.jsx(s,{children:"Category"}),t.jsx(d,{children:e.category})]})]}),t.jsx(B,{children:e.comment})]})]}),t.jsxs(v,{children:[t.jsx(k,{$profile:i,type:"button",onClick:p,children:"Learn more"}),t.jsx(z,{$profile:i,children:t.jsx(c,{name:"icon-heart",width:18,height:18})})]})]})})},F=({pets:e,profile:i})=>t.jsx(t.Fragment,{children:t.jsx(f,{$profile:i,children:e.map((n,a)=>t.jsx(I,{profile:i,pet:n},`${n._id} + ${a}`))})});export{F as P};
