import{u as n,b as h,c as m,Q as g,j as e,U as w,R as b,S as j,I as r,T as v,V as B,W as k,X as y,Y as p,a as c,P as C,Z as U,_ as P,$ as T,a0 as $,r as I,a1 as L}from"./index-VcmNEm7X.js";import{M as z,a as N,N as x}from"./MyNotices.styled-CxUzXCZG.js";const A=n.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px 24px 32px;
  }
`,M=n.div`
  padding: 18px 20px 40px;
  border-radius: 30px;
  background-color: ${t=>t.theme.colors.UserCardBGColor};
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
`,W=n.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,E=n.p`
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 30px;
  padding: 10px 14px;
  color: ${t=>t.theme.colors.UserCardBageColor};
  width: 52px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  background-color: ${t=>t.theme.colors.UserCardBageBgColor};
`,G=n.button`
  border-radius: 30px;
  padding: 10px;
  width: 38px;
  height: 38px;
  margin: 0;
  background-color: ${t=>t.theme.colors.UserCardEditBtnBGColor};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${t=>t.theme.colors.UserCardEditBtnHoverBGColor};
  }
`,O=()=>{const t=h(),i=m(g),s=i.avatar;return e.jsxs(w,{children:[e.jsxs(b,{children:[e.jsx(j,{$avatarUrl:s,children:i&&i.avatar&&i.avatar.trim()!=="https://test.png"&&i.avatar.trim()!==""?null:e.jsx(r,{name:"icon-user-big",width:t==="desktop"||t==="tablet"?50:40,height:t==="desktop"||t==="tablet"?50:40})}),i.avatar&&i.avatar.trim()!==""?null:e.jsx(v,{children:"Upload photo"})]}),e.jsxs(B,{children:[e.jsx(k,{children:"My information"}),e.jsxs(y,{children:[e.jsx(p,{type:"text",value:i&&i.name&&i.name.trim()!==""?i.name:"Name",disabled:!0}),e.jsx(p,{type:"email",value:i&&i.email&&i.email.trim()!==""?i.email:"name@gmail.com",disabled:!0}),e.jsx(p,{type:"phone",value:i&&i.phone&&i.phone.trim()!==""?i.phone:"+380",disabled:!0})]})]})]})},F=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,S=n.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${t=>t.theme.colors.PetsBlockTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,D=n.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: ${t=>t.theme.colors.PetsBlockAddPetBtnColor};
  padding: 10px 16px;
  border-radius: 30px;
  width: 103px;
  margin: 0;
  justify-content: center;
  gap: 4px;
  background-color: ${t=>t.theme.colors.PetsBlockAddPetBtnBGColor};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${t=>t.theme.colors.PetsBlockAddPetBtnHoverBGColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: 118px;
  }
`,H=n.ul`
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
`,R=n.li`
  position: relative;
  display: flex;
  border: 1px solid rgba(38, 38, 38, 0.1);
  border-radius: 20px;
  width: calc(295px - 16px - 16px);
  max-height: calc(132px - 16px - 16px);
  padding: 16px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: calc(303px - 16px - 16px);
    max-height: calc(149px - 22px - 22px);
    padding: 22px 16px;
  }
  @media screen and (min-width: 1280px) {
    width: calc(440px - 42px);
    height: calc(130px - 40px);
    padding: 20px;
  }
`,V=n.img`
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
`,_=n.div`
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
`,Q=n.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: #2b2b2a;
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
`,X=n.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (min-width: 1280px) {
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
  }
`,Y=n.li`
display: flex;
flex-direction: column;
gap: 4px;
`,Z=n.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`,q=n.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: #262626;
  max-width: 64px;

  overflow: hidden;
  white-space: nowrap;

  &.name {
    max-width: 40px;
    text-overflow: ellipsis;
  }
`,J=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  background: #fff4df;
  transition: background 0.3ms ease-in-out;
  top: 12px;
  right: 12px;

  &:hover {
    background: #FBE7C1;
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
`,K=n.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: ${t=>t.theme.colors.PetsBlockLogOutBtnColor};
  border-radius: 30px;
  padding: 12px;
  width: 114px;
  justify-content: center;
  background-color: ${t=>t.theme.colors.PetsBlockLogOutBtnBGColor};
  margin: 0;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${t=>t.theme.colors.PetsBlockLogOutBtnBGHoverColor};
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
    width: 136px;
    font-size: 16px;
    line-height: 1.25;
  }
`,ee=t=>{const[i,s,a]=t.split("-");return`${a}.${s}.${i}`},te=()=>{const t=h(),i=c(),s=C(),a=m(g),u=()=>{i(P())},f=()=>{s("/add-pet")};return e.jsxs("div",{children:[e.jsxs(F,{children:[e.jsx(S,{children:"My pets"}),e.jsxs(D,{onClick:f,children:["Add pet",e.jsx(r,{name:"icon-plus",width:18,height:18})]})]}),e.jsx(H,{children:((a==null?void 0:a.pets)??[]).map(o=>e.jsxs(R,{children:[e.jsx(V,{src:o.imgURL,alt:"pet-photo"}),e.jsxs(_,{children:[e.jsx(Q,{children:o.title}),e.jsx(X,{children:[{title:"Name",value:o.name},{title:"Birthday",value:o.birthday},{title:"Sex",value:o.sex},{title:"Species",value:o.species}].map(({title:d,value:l})=>e.jsxs(Y,{children:[e.jsx(Z,{children:d}),e.jsx(q,{className:d==="Name"?"name":"",children:d==="Birthday"?ee(l):l})]},d))})]}),e.jsx(J,{onClick:()=>i(U({_id:o._id})),type:"button",children:e.jsx(r,{name:"icon-trash",width:t==="desktop"||t==="tablet"?18:16,height:t==="desktop"||t==="tablet"?18:16})})]},o.name))}),e.jsx(K,{onClick:u,children:"LOG OUT"})]})},ie=()=>{const t=c();return e.jsxs(M,{children:[e.jsxs(W,{children:[e.jsxs(E,{children:["User",e.jsx(r,{name:"icon-user",width:18,height:18})]}),e.jsx(G,{onClick:()=>t(T()),children:e.jsx(r,{name:"icon-edit",width:18,height:18})})]}),e.jsx(O,{}),e.jsx(te,{})]})},ne=()=>e.jsxs(z,{children:[e.jsxs(N,{children:[e.jsx(x,{to:"favorites",children:"My favorites pets"}),e.jsx(x,{to:"viewed",children:"Viewed"})]}),e.jsx($,{})]}),ae=()=>{const t=c();return I.useEffect(()=>{t(L())},[]),e.jsxs(A,{className:"container",children:[e.jsx(ie,{}),e.jsx(ne,{})]})};export{ae as default};
