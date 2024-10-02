import{u as o,a as f,c as u,a4 as $,j as t,I as p,a5 as c,a6 as C,a7 as j,a8 as w,r as h,a9 as P,aa as b}from"./index-lgZKK4Ib.js";const y=o.ul`
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
`,v=o.li`
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
`,B=o.img`
  border-radius: 16px;
  width: 100%;
  height: 178px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    margin-bottom: ${e=>e.$profile?"14px":"24px"};
  }
`,k=o.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${e=>e.$profile?"24px":"32px"};
  }
`,F=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,I=o.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetCardTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,z=o.div`
  display: flex;
  color: ${e=>e.theme.colors.IconStarAccentColor};
  gap: 4px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,N=o.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.PetCardPopularNumb};

  @media screen and (min-width: 768px) {
    line-height: 1.42857;
  }
`,T=o.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`,a=o.li`
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
`,d=o.span`
  font-size: 10px;
  line-height: 1.4;
  color: ${e=>e.theme.colors.PetCardAccentPropertyColor};

  @media screen and (min-width: 768px) {
  }
`,l=o.p`
  &::first-letter {
    text-transform: uppercase;
  }
`,L=o.p`
  color: ${e=>e.theme.colors.PetCardCommentColor};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
`,R=o.div`
  display: flex;
  justify-content: space-between;
`,G=o.button`
  border-radius: 30px;
  padding: ${e=>e.$profile?"13px":"14px"};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  justify-content: center;
  width: ${e=>e.$viewed?"100%":e.$profile?"233px":"231px"};
  margin: 0;
  color: ${e=>e.theme.colors.PetCardBtnColor};
  background-color: ${e=>e.theme.colors.PetCardBtnBGColor};
  transition: background-color 300ms linear;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: ${e=>e.$viewed?"100%":e.$profile?"260px":"236px"};
    padding: ${e=>e.$profile?"12px":"14px"};
  }
  @media screen and (min-width: 1280px) {
    width: ${e=>e.$viewed?"100%":e.$profile?"238px":"257px"};
  }

  &:hover {
    background-color: ${e=>e.theme.colors.PetCardBtnBGHoverColor};
  }
`,_=o.button`
  display: ${e=>e.$profile?"none":"flex"};
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
`,A=o.button`
  display: ${e=>e.$viewed?"none":e.$profile?"flex":"none"};
  border-radius: 100%;
  width: ${e=>e.$profile?"44px":"46px"};
  height: ${e=>e.$profile?"44px":"46px"};
  justify-content: center;
  margin: 0;
  color: ${e=>e.theme.colors.PetCardFavBtnColor};
  background-color: ${e=>e.theme.colors.PetCardFavBtnBGColor};
  transition: background-color 300ms linear;

  @media screen and (min-width: 768px) {
    width: ${e=>e.$profile?"44px":"48px"};
    height: ${e=>e.$profile?"44px":"48px"};
  }

  &:hover {
    background-color: ${e=>e.theme.colors.PetCardFavBtnBGHoverColor};
  }
`,D=({pet:e,profile:r,viewed:n})=>{const i=f(),s=u($),x=()=>{s&&(i(c()),i(C({_id:e._id}))),i(c())},m=()=>{s||i(c()),i(j({_id:e._id}))},g=()=>{s||i(c()),console.log("clicked"),i(w({_id:e._id}))};return t.jsx(t.Fragment,{children:t.jsxs(v,{$viewed:n,$profile:r,children:[t.jsxs("div",{children:[t.jsx("div",{children:t.jsx(B,{$profile:r,src:e.imgURL,alt:"pet"})}),t.jsxs(k,{$profile:r,children:[t.jsxs(F,{children:[t.jsx(I,{children:e.title}),t.jsxs(z,{children:[t.jsx(p,{name:"icon-star",width:16,height:16}),t.jsx(N,{children:e.popularity})]})]}),t.jsxs(T,{children:[t.jsxs(a,{children:[t.jsx(d,{children:"Name"}),t.jsx(l,{children:e.name})]}),t.jsxs(a,{children:[t.jsx(d,{children:"Birthday"}),t.jsx(l,{children:e.birthday})]}),t.jsxs(a,{children:[t.jsx(d,{children:"Sex"}),t.jsx(l,{children:e.sex})]}),t.jsxs(a,{children:[t.jsx(d,{children:"Species"}),t.jsx(l,{children:e.species})]}),t.jsxs(a,{children:[t.jsx(d,{children:"Category"}),t.jsx(l,{children:e.category})]})]}),t.jsx(L,{children:e.comment})]})]}),t.jsxs(R,{children:[t.jsx(G,{$viewed:n,$profile:r,type:"button",onClick:x,children:"Learn more"}),t.jsx(_,{onClick:m,$profile:r,children:t.jsx(p,{name:"icon-heart",width:18,height:18})}),t.jsx(A,{$viewed:n,onClick:g,$profile:r,children:t.jsx(p,{name:"icon-trash",width:18,height:18})})]})]})})},O=({pets:e,profile:r,viewed:n})=>t.jsx(t.Fragment,{children:t.jsx(y,{$profile:r,$viewed:n,children:e.map((i,s)=>t.jsx(D,{viewed:n,profile:r,pet:i},`${i._id} + ${s}`))})}),S=o.div`
  padding: ${e=>e.$isProfile?0:"20px"};
`,W=o.img`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
`,E=o.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${e=>e.theme.colors.ResultsNotFoundColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1250px) {
    width: 456px;
  }
`,H=o.span`
  color: ${e=>e.theme.colors.ResultsNotFoundAccentColor};
`,U=()=>{const[e,r]=h.useState(!1),n=P();return h.useEffect(()=>{switch(n.pathname){case"/profile":r(!0);break;case"/profile/favorites":r(!0);break;case"/profile/viewed":r(!0);break;default:r(!1);break}},[n.pathname]),t.jsxs(S,{$isProfile:e,children:[e?null:t.jsx(W,{src:b,alt:"dog"}),t.jsxs(E,{children:["Oops, it looks like",t.jsxs(H,{children:[" ","there aren't any furry results"," "]}),"on our adorable page."," ",e?'Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.':`Don't worry! Please try selecting a different
        filter or adjust your filtering settings.`]})]})};export{O as P,U as R};
