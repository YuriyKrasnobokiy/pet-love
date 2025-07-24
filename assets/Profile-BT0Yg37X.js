import{u as s,b as l,c as p,Q as h,j as t,U as x,R as m,S as g,I as r,T as u,V as j,W as f,X as v,Y as n,a,P as B,Z as b,_ as k,$ as w,r as C,a0 as U}from"./index-BkMkcFRi.js";import{M as y,a as P,N as d}from"./MyNotices.styled-hoEB4n_F.js";const $=s.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px 24px 32px;
  }
`,A=s.div`
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
    max-height: 78vh;
  }
`,M=s.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,T=s.p`
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
`,W=s.button`
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
`,G=()=>{const e=l(),o=p(h),i=o.avatar;return t.jsxs(x,{children:[t.jsxs(m,{children:[t.jsx(g,{$avatarUrl:i,children:o&&o.avatar&&o.avatar.trim()!=="https://test.png"&&o.avatar.trim()!==""?null:t.jsx(r,{name:"icon-user-big",width:e==="desktop"||e==="tablet"?50:40,height:e==="desktop"||e==="tablet"?50:40})}),o.avatar&&o.avatar.trim()!==""?null:t.jsx(u,{children:"Upload photo"})]}),t.jsxs(j,{children:[t.jsx(f,{children:"My information"}),t.jsxs(v,{children:[t.jsx(n,{type:"text",value:o&&o.name&&o.name.trim()!==""?o.name:"Name",disabled:!0}),t.jsx(n,{type:"email",value:o&&o.email&&o.email.trim()!==""?o.email:"name@gmail.com",disabled:!0}),t.jsx(n,{type:"phone",value:o&&o.phone&&o.phone.trim()!==""?o.phone:"+380",disabled:!0})]})]})]})},I=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,L=s.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetsBlockTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,N=s.button`
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
`,O=s.button`
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
`,z=()=>{const e=a(),o=B(),i=()=>{e(b())},c=()=>{o("/add-pet")};return t.jsxs("div",{children:[t.jsxs(I,{children:[t.jsx(L,{children:"My pets"}),t.jsxs(N,{onClick:c,children:["Add pet",t.jsx(r,{name:"icon-plus",width:18,height:18})]})]}),t.jsx(O,{onClick:i,children:"LOG OUT"})]})},E=()=>{const e=a();return t.jsxs(A,{children:[t.jsxs(M,{children:[t.jsxs(T,{children:["User",t.jsx(r,{name:"icon-user",width:18,height:18})]}),t.jsx(W,{onClick:()=>e(k()),children:t.jsx(r,{name:"icon-edit",width:18,height:18})})]}),t.jsx(G,{}),t.jsx(z,{})]})},D=()=>t.jsxs(y,{children:[t.jsxs(P,{children:[t.jsx(d,{to:"favorites",children:"My favorites pets"}),t.jsx(d,{to:"viewed",children:"Viewed"})]}),t.jsx(w,{})]}),S=()=>{const e=a();return C.useEffect(()=>{e(U())},[]),t.jsxs($,{className:"container",children:[t.jsx(E,{}),t.jsx(D,{})]})};export{S as default};
