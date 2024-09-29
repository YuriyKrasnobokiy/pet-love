import{u as r,a as f,c as l,a4 as u,a5 as j,j as t,I as p,a6 as c,a7 as C,a8 as $,a9 as P,r as h,aa as w,ab as b}from"./index-B1UJ5AVf.js";const y=r.ul`
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
`,v=r.li`
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
`,B=r.img`
  border-radius: 16px;
  width: 100%;
  height: 178px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    margin-bottom: ${e=>e.$profile?"14px":"24px"};
  }
`,k=r.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${e=>e.$profile?"24px":"32px"};
  }
`,F=r.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,I=r.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetCardTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,z=r.div`
  display: flex;
  color: ${e=>e.theme.colors.IconStarAccentColor};
  gap: 4px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`,N=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.PetCardPopularNumb};

  @media screen and (min-width: 768px) {
    line-height: 1.42857;
  }
`,T=r.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`,n=r.li`
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
`,a=r.p`
  &::first-letter {
    text-transform: uppercase;
  }
`,L=r.p`
  color: ${e=>e.theme.colors.PetCardCommentColor};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
`,R=r.div`
  display: flex;
  justify-content: space-between;
`,A=r.button`
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
`,D=r.button`
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
`,_=({pet:e,profile:o})=>{const i=f(),d=l(u),x=l(j).noticesFavorites,m=()=>{d&&(i(c()),i(C({_id:e._id}))),i(c())},g=()=>{if(!d)i(c());else if(x.includes(e._id)){$.error("This pet has already been added to favorites");return}else i(P({_id:e._id}))};return t.jsx(t.Fragment,{children:t.jsxs(v,{$profile:o,children:[t.jsxs("div",{children:[t.jsx("div",{children:t.jsx(B,{$profile:o,src:e.imgURL,alt:"pet"})}),t.jsxs(k,{$profile:o,children:[t.jsxs(F,{children:[t.jsx(I,{children:e.title}),t.jsxs(z,{children:[t.jsx(p,{name:"icon-star",width:16,height:16}),t.jsx(N,{children:e.popularity})]})]}),t.jsxs(T,{children:[t.jsxs(n,{children:[t.jsx(s,{children:"Name"}),t.jsx(a,{children:e.name})]}),t.jsxs(n,{children:[t.jsx(s,{children:"Birthday"}),t.jsx(a,{children:e.birthday})]}),t.jsxs(n,{children:[t.jsx(s,{children:"Sex"}),t.jsx(a,{children:e.sex})]}),t.jsxs(n,{children:[t.jsx(s,{children:"Species"}),t.jsx(a,{children:e.species})]}),t.jsxs(n,{children:[t.jsx(s,{children:"Category"}),t.jsx(a,{children:e.category})]})]}),t.jsx(L,{children:e.comment})]})]}),t.jsxs(R,{children:[t.jsx(A,{$profile:o,type:"button",onClick:m,children:"Learn more"}),t.jsx(D,{onClick:g,$profile:o,children:t.jsx(p,{name:"icon-heart",width:18,height:18})})]})]})})},M=({pets:e,profile:o})=>t.jsx(t.Fragment,{children:t.jsx(y,{$profile:o,children:e.map((i,d)=>t.jsx(_,{profile:o,pet:i},`${i._id} + ${d}`))})}),G=r.div`
  padding: ${e=>e.$isProfile?0:"20px"};
`,S=r.img`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
`,W=r.h3`
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
`,E=r.span`
  color: ${e=>e.theme.colors.ResultsNotFoundAccentColor};
`,O=()=>{const[e,o]=h.useState(!1),i=w();return h.useEffect(()=>{switch(i.pathname){case"/profile":o(!0);break;case"/profile/favorites":o(!0);break;case"/profile/viewed":o(!0);break;default:o(!1);break}},[i.pathname]),t.jsxs(G,{$isProfile:e,children:[e?null:t.jsx(S,{src:b,alt:"dog"}),t.jsxs(W,{children:["Oops, it looks like",t.jsxs(E,{children:[" ","there aren't any furry results"," "]}),"on our adorable page."," ",e?'Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.':`Don't worry! Please try selecting a different
        filter or adjust your filtering settings.`]})]})};export{M as P,O as R};
