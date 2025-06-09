import{u as r,b as c,c as l,S as p,j as t,U as h,T as x,V as m,I as s,W as u,X as g,Y as j,Z as f,_ as i,a as n,$ as B,a0 as b,a1 as v,r as k,a2 as w}from"./index-B3_NTCBV.js";import{M as U,a as C,N as a}from"./MyNotices.styled-9SYzXwIg.js";const y=r.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px;
  }
`,P=r.div`
  padding: 18px 20px 40px;
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.UserCardBGColor};

  @media screen and (min-width: 768px) {
    position: relative;
    padding: 40px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 440px;
  }
`,$=r.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,A=r.p`
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
`,M=r.button`
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
`,T=()=>{const e=c(),o=l(p),d=o.avatar;return t.jsxs(h,{children:[t.jsxs(x,{children:[t.jsx(m,{$avatarUrl:d,children:o&&o.avatar&&o.avatar.trim()!=="https://test.png"&&o.avatar.trim()!==""?null:t.jsx(s,{name:"icon-user-big",width:e==="desktop"||e==="tablet"?50:40,height:e==="desktop"||e==="tablet"?50:40})}),o.avatar&&o.avatar.trim()!==""?null:t.jsx(u,{children:"Upload photo"})]}),t.jsxs(g,{children:[t.jsx(j,{children:"My information"}),t.jsxs(f,{children:[t.jsx(i,{type:"text",value:o&&o.name&&o.name.trim()!==""?o.name:"Name",disabled:!0}),t.jsx(i,{type:"email",value:o&&o.email&&o.email.trim()!==""?o.email:"name@gmail.com",disabled:!0}),t.jsx(i,{type:"phone",value:o&&o.phone&&o.phone.trim()!==""?o.phone:"+380",disabled:!0})]})]})]})},W=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,G=r.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetsBlockTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,I=r.button`
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
`,L=r.button`
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
`,O=()=>{const e=n(),o=()=>{e(B())};return t.jsxs("div",{children:[t.jsxs(W,{children:[t.jsx(G,{children:"My pets"}),t.jsxs(I,{children:["Add pet",t.jsx(s,{name:"icon-plus",width:18,height:18})]})]}),t.jsx(L,{onClick:o,children:"LOG OUT"})]})},z=()=>{const e=n();return t.jsxs(P,{children:[t.jsxs($,{children:[t.jsxs(A,{children:["User",t.jsx(s,{name:"icon-user",width:18,height:18})]}),t.jsx(M,{onClick:()=>e(b()),children:t.jsx(s,{name:"icon-edit",width:18,height:18})})]}),t.jsx(T,{}),t.jsx(O,{})]})},E=()=>t.jsxs(U,{children:[t.jsxs(C,{children:[t.jsx(a,{to:"favorites",children:"My favorites pets"}),t.jsx(a,{to:"viewed",children:"Viewed"})]}),t.jsx(v,{})]}),F=()=>{const e=n();return k.useEffect(()=>{e(w())},[]),t.jsxs(y,{className:"container",children:[t.jsx(z,{}),t.jsx(E,{})]})};export{F as default};
