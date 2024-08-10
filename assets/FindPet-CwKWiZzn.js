import{u as r,j as t,I as x,a as j,c as o,r as u,i as h,L as C,k as f}from"./index-Dd2x60IO.js";import{P as b}from"./PaginationControls-BszvuZ_D.js";const y=r.li`
  padding: 24px;
  max-width: 287px;
  border-radius: 16px;
  background-color: ${e=>e.theme.colors.PetCardBGColor};
  margin: 0 auto;
`,w=r.img`
  border-radius: 16px;
  max-width: 287px;
  width: 100%;
  height: 178px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: center;
`,v=r.div`
  margin-bottom: 42px;
`,B=r.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 8px;
`,k=r.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetCardTitleColor};
`,$=r.div`
  display: flex;
`,L=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${e=>e.theme.colors.PetCardPopularNumb};
`,S=r.ul`
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
  color: ${e=>e.theme.colors.PetCardPropertyColor};

  &::first-letter {
    text-transform: uppercase;
  }
`,n=r.span`
  font-size: 10px;
  line-height: 1.4;
  color: ${e=>e.theme.colors.PetCardAccentPropertyColor};
`,i=r.p`
  &::first-letter {
    text-transform: uppercase;
  }
`,T=r.p`
  color: ${e=>e.theme.colors.PetCardCommentColor};
`,F=r.div`
  display: flex;
  justify-content: space-between;
`,z=r.button`
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
`,G=r.button`
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
`,N=({pet:e})=>t.jsxs(y,{children:[t.jsx("div",{children:t.jsx(w,{src:e.imgURL,alt:"pet"})}),t.jsxs(v,{children:[t.jsxs(B,{children:[t.jsx(k,{children:e.title}),t.jsxs($,{children:[t.jsx(x,{name:"icon-star",width:16,height:16}),t.jsx(L,{children:e.popularity})]})]}),t.jsxs(S,{children:[t.jsxs(s,{children:[t.jsx(n,{children:"Name"}),t.jsx(i,{children:e.name})]}),t.jsxs(s,{children:[t.jsx(n,{children:"Birthday"}),t.jsx(i,{children:e.birthday})]}),t.jsxs(s,{children:[t.jsx(n,{children:"Sex"}),t.jsx(i,{children:e.sex})]}),t.jsxs(s,{children:[t.jsx(n,{children:"Species"}),t.jsx(i,{children:e.species})]}),t.jsxs(s,{children:[t.jsx(n,{children:"Category"}),t.jsx(i,{children:e.category})]})]}),t.jsx(T,{children:e.comment})]}),t.jsxs(F,{children:[t.jsx(z,{type:"button",children:"Learn more"}),t.jsx(G,{children:t.jsx(x,{name:"icon-heart",width:18,height:18})})]})]}),W=r.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 44px;
`,E=({pets:e})=>t.jsx(t.Fragment,{children:t.jsx(W,{children:e.map(a=>t.jsx(N,{pet:a},a._id))})}),I=e=>e.petsStore.pets,H=e=>e.petsStore.isLoading,A=e=>e.petsStore.error,R=e=>e.petsStore.page,D=e=>e.petsStore.perPage,U=e=>e.petsStore.totalPages,_=r.div`
  padding-top: 34px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
`,q=r.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
  }
`,J=r.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`,O=()=>{const e=j(),a=o(I),m=o(H),g=o(A),c=o(R),l=o(D),d=o(U);u.useEffect(()=>{e(h({page:c,limit:l}))},[e,c,l]);const P=p=>{e(f(p)),e(h({page:p,limit:l}))};return m?t.jsx(C,{}):g?null:t.jsxs(_,{className:"container",children:[t.jsx(q,{children:t.jsx(J,{className:"title",children:"Find your favorite pet"})}),t.jsx(E,{pets:a}),d>1?t.jsx(b,{currentPage:c,totalPages:d,onPageChange:P}):null]})};export{O as default};
