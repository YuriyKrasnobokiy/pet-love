import{u as o,b as m,c as g,Q as u,j as t,U as b,R as j,S as B,I as a,T as v,V as k,W as y,X as C,Y as p,a as l,P,Z as U,_ as $,$ as T,a0 as I,r as L,a1 as M}from"./index-Be1neRXn.js";import{M as z,a as A,N as h}from"./MyNotices.styled-C2GNDFZ-.js";const G=o.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px 24px 32px;
  }
`,N=o.div`
  padding: 18px 20px 40px;
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.UserCardBGColor};
  height: auto;

  @media screen and (min-width: 768px) {
    position: relative;
    padding: 40px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 440px;
    /* max-height: 78vh; */
  }
`,W=o.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,E=o.p`
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 30px;
  padding: 10px 14px;
  color: ${e=>e.theme.colors.UserCardBageColor};
  width: 52px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  background-color: ${e=>e.theme.colors.UserCardBageBgColor};
`,O=o.button`
  border-radius: 30px;
  padding: 10px;
  width: 38px;
  height: 38px;
  margin: 0;
  background-color: ${e=>e.theme.colors.UserCardEditBtnBGColor};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${e=>e.theme.colors.UserCardEditBtnHoverBGColor};
  }
`,D=()=>{const e=m(),i=g(u),n=i.avatar;return t.jsxs(b,{children:[t.jsxs(j,{children:[t.jsx(B,{$avatarUrl:n,children:i&&i.avatar&&i.avatar.trim()!=="https://test.png"&&i.avatar.trim()!==""?null:t.jsx(a,{name:"icon-user-big",width:e==="desktop"||e==="tablet"?50:40,height:e==="desktop"||e==="tablet"?50:40})}),i.avatar&&i.avatar.trim()!==""?null:t.jsx(v,{children:"Upload photo"})]}),t.jsxs(k,{children:[t.jsx(y,{children:"My information"}),t.jsxs(C,{children:[t.jsx(p,{type:"text",value:i&&i.name&&i.name.trim()!==""?i.name:"Name",disabled:!0}),t.jsx(p,{type:"email",value:i&&i.email&&i.email.trim()!==""?i.email:"name@gmail.com",disabled:!0}),t.jsx(p,{type:"phone",value:i&&i.phone&&i.phone.trim()!==""?i.phone:"+380",disabled:!0})]})]})]})},F=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,S=o.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetsBlockTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,H=o.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.PetsBlockAddPetBtnColor};
  padding: 10px 16px;
  border-radius: 30px;
  width: 103px;
  margin: 0;
  justify-content: center;
  gap: 4px;
  background-color: ${e=>e.theme.colors.PetsBlockAddPetBtnBGColor};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${e=>e.theme.colors.PetsBlockAddPetBtnHoverBGColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: 118px;
  }
`,R=o.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
`,V=o.li`
  position: relative;
  display: flex;
  border: ${e=>e.theme.colors.MyPetsCardBorder};; 
  /* border: 1px solid rgba(38, 38, 38, 0.1);  */
  border-radius: 20px;
  width: calc(295px - 16px - 16px - 2px);
  max-height: calc(132px - 16px - 16px);
  padding: 16px;
  background-color: ${e=>e.theme.colors.MyPetsCardBG};
  /* background-color: transparent; */

  @media screen and (min-width: 768px) {
    width: calc(305px - 16px - 16px - 2px);
    max-height: calc(149px - 22px - 22px);
    padding: 22px 16px;
  }
  @media screen and (min-width: 1280px) {
    width: calc(440px - 40px - 2px);
    height: calc(130px - 40px);
    padding: 20px;
  }
`,_=o.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
  @media screen and (min-width: 1280px) {
    width: 90px;
    height: 90px;
    margin-right: 24px;
  }
`,Q=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 152px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    max-width: 172px;
  }
  @media screen and (min-width: 1280px) {
    gap: 12px;
    max-width: 242px;
    justify-content: center;
  }
`,X=o.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: ${e=>e.theme.colors.MyPetsCardTitleColor};
  /* color: #2b2b2a; */
  max-width: 100%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`,Y=o.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (min-width: 1280px) {
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
  }
`,Z=o.li`
display: flex;
flex-direction: column;
gap: 4px;
`,q=o.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.MyPetsCardSecondColor};
  /* color: rgba(38, 38, 38, 0.5); */
`,J=o.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  /* color: #262626; */
  color:${e=>e.theme.colors.MyPetsCardColor};
  max-width: 64px;

  overflow: hidden;
  white-space: nowrap;

  &.name {
    max-width: 40px;
    text-overflow: ellipsis;
  }
`,K=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  /* background: #fff4df; */
  background: ${e=>e.theme.colors.MyPetsCardDelBtnBG};
  transition: background 300ms ease-in-out;
  top: 12px;
  right: 12px;

  &:hover {
    /* background: #FBE7C1; */
    background:${e=>e.theme.colors.MyPetsCardDelHoverBtnBG}
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 38px;
    height: 38px;
    top: 20px;
    right: 20px;
  }
`,ee=o.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.PetsBlockLogOutBtnColor};
  border-radius: 30px;
  padding: 12px;
  width: 114px;
  justify-content: center;
  background-color: ${e=>e.theme.colors.PetsBlockLogOutBtnBGColor};
  margin: 0;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${e=>e.theme.colors.PetsBlockLogOutBtnBGHoverColor};
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
    width: 136px;
    font-size: 16px;
    line-height: 1.25;
  }
`,te=e=>{const[i,n,s]=e.split("-");return`${s}.${n}.${i}`};function c(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const ie=()=>{const e=m(),i=l(),n=P(),s=g(u),f=()=>{i($())},w=()=>{n("/add-pet")};return t.jsxs("div",{children:[t.jsxs(F,{children:[t.jsx(S,{children:"My pets"}),t.jsxs(H,{onClick:w,children:["Add pet",t.jsx(a,{name:"icon-plus",width:18,height:18})]})]}),t.jsx(R,{children:((s==null?void 0:s.pets)??[]).map(r=>t.jsxs(V,{children:[t.jsx(_,{src:r.imgURL,alt:"pet-photo"}),t.jsxs(Q,{children:[t.jsx(X,{children:c(r.title)}),t.jsx(Y,{children:[{title:"Name",value:c(r.name)},{title:"Birthday",value:r.birthday},{title:"Sex",value:c(r.sex)},{title:"Species",value:c(r.species)}].map(({title:d,value:x})=>t.jsxs(Z,{children:[t.jsx(q,{children:d}),t.jsx(J,{className:d==="Name"?"name":"",children:d==="Birthday"?te(x):x})]},d))})]}),t.jsx(K,{onClick:()=>i(U({_id:r._id})),type:"button",children:t.jsx(a,{name:"icon-trash",width:e==="desktop"||e==="tablet"?18:16,height:e==="desktop"||e==="tablet"?18:16})})]},r.name))}),t.jsx(ee,{onClick:f,children:"LOG OUT"})]})},oe=()=>{const e=l();return t.jsxs(N,{children:[t.jsxs(W,{children:[t.jsxs(E,{children:["User",t.jsx(a,{name:"icon-user",width:18,height:18})]}),t.jsx(O,{onClick:()=>e(T()),children:t.jsx(a,{name:"icon-edit",width:18,height:18})})]}),t.jsx(D,{}),t.jsx(ie,{})]})},re=()=>t.jsxs(z,{children:[t.jsxs(A,{children:[t.jsx(h,{to:"favorites",children:"My favorites pets"}),t.jsx(h,{to:"viewed",children:"Viewed"})]}),t.jsx(I,{})]}),ae=()=>{const e=l();return L.useEffect(()=>{e(M())},[]),t.jsxs(G,{className:"container",children:[t.jsx(oe,{}),t.jsx(re,{})]})};export{ae as default};
