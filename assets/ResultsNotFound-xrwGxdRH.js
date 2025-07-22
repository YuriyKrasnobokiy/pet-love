import{u as r,a as u,c as $,a3 as w,j as t,I as p,a4 as c,a5 as C,a6 as j,a7 as P,r as h,a8 as b,a9 as y}from"./index-DZW3vZ0g.js";const v=r.ul`
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
`,B=r.li`
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
`,k=r.img`
  border-radius: 16px;
  width: 100%;
  height: 178px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    margin-bottom: ${e=>e.$profile?"14px":"24px"};
  }
`,F=r.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${e=>e.$profile?"24px":"32px"};
  }
`,I=r.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,z=r.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetCardTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,N=r.div`
  display: flex;
  color: ${e=>e.theme.colors.IconStarAccentColor};
  gap: 4px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,T=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.PetCardPopularNumb};

  @media screen and (min-width: 768px) {
    line-height: 1.42857;
  }
`,L=r.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`,a=r.li`
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
`,d=r.span`
  font-size: 10px;
  line-height: 1.4;
  color: ${e=>e.theme.colors.PetCardAccentPropertyColor};

  @media screen and (min-width: 768px) {
  }
`,l=r.p`
  &::first-letter {
    text-transform: uppercase;
  }
`,R=r.p`
  color: ${e=>e.theme.colors.PetCardCommentColor};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
`,G=r.div`
  display: flex;
  justify-content: space-between;
`,_=r.button`
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
`,A=r.button`
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
`,D=r.button`
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
`,S=({pet:e,profile:o,viewed:n})=>{const i=u(),s=$(w),x=()=>{s&&(i(c()),i(C({_id:e._id}))),i(c())},m=()=>{s||i(c()),i(j({_id:e._id}))},g=async()=>{if(!s){i(c());return}try{await i(P({_id:e._id})).unwrap()}catch(f){console.error("Error deleting pet:",f)}};return t.jsx(t.Fragment,{children:t.jsxs(B,{$viewed:n,$profile:o,children:[t.jsxs("div",{children:[t.jsx("div",{children:t.jsx(k,{$profile:o,src:e.imgURL,alt:"pet"})}),t.jsxs(F,{$profile:o,children:[t.jsxs(I,{children:[t.jsx(z,{children:e.title}),t.jsxs(N,{children:[t.jsx(p,{name:"icon-star",width:16,height:16}),t.jsx(T,{children:e.popularity})]})]}),t.jsxs(L,{children:[t.jsxs(a,{children:[t.jsx(d,{children:"Name"}),t.jsx(l,{children:e.name})]}),t.jsxs(a,{children:[t.jsx(d,{children:"Birthday"}),t.jsx(l,{children:e.birthday})]}),t.jsxs(a,{children:[t.jsx(d,{children:"Sex"}),t.jsx(l,{children:e.sex})]}),t.jsxs(a,{children:[t.jsx(d,{children:"Species"}),t.jsx(l,{children:e.species})]}),t.jsxs(a,{children:[t.jsx(d,{children:"Category"}),t.jsx(l,{children:e.category})]})]}),t.jsx(R,{children:e.comment})]})]}),t.jsxs(G,{children:[t.jsx(_,{$viewed:n,$profile:o,type:"button",onClick:x,children:"Learn more"}),t.jsx(A,{onClick:m,$profile:o,children:t.jsx(p,{name:"icon-heart",width:18,height:18})}),t.jsx(D,{$viewed:n,onClick:g,$profile:o,children:t.jsx(p,{name:"icon-trash",width:18,height:18})})]})]})})},U=({pets:e,profile:o,viewed:n})=>t.jsx(t.Fragment,{children:t.jsx(v,{$profile:o,$viewed:n,children:e.map((i,s)=>t.jsx(S,{viewed:n,profile:o,pet:i},`${i._id} + ${s}`))})}),E=r.div`
  padding: ${e=>e.$isProfile?0:"20px"};
`,W=r.img`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
`,H=r.h3`
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
`,M=r.span`
  color: ${e=>e.theme.colors.ResultsNotFoundAccentColor};
`,V=()=>{const[e,o]=h.useState(!1),n=b();return h.useEffect(()=>{switch(n.pathname){case"/profile":o(!0);break;case"/profile/favorites":o(!0);break;case"/profile/viewed":o(!0);break;default:o(!1);break}},[n.pathname]),t.jsxs(E,{$isProfile:e,children:[e?null:t.jsx(W,{src:y,alt:"dog"}),t.jsxs(H,{children:["Oops, it looks like",t.jsxs(M,{children:[" ","there aren't any furry results"," "]}),"on our adorable page."," ",e?'Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.':`Don't worry! Please try selecting a different
        filter or adjust your filtering settings.`]})]})};export{U as P,V as R};
