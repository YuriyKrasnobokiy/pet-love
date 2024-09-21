import{u as i,b as c,c as l,W as p,j as t,X as h,Y as x,Z as m,I as r,_ as g,$ as u,a0 as v,a1 as f,a2 as n,a as s,a3 as j,a4 as k,a5 as B,a6 as b,r as w,a7 as C}from"./index-aBmdSf1m.js";const y=i.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px;
  }
`,U=i.div`
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
`,$=i.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,P=i.p`
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
`,L=i.button`
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
`,M=()=>{const e=c(),o=l(p),d=o.avatar;return t.jsxs(h,{children:[t.jsxs(x,{children:[t.jsx(m,{$avatarUrl:d,children:o&&o.avatar&&o.avatar.trim()!=="https://test.png"&&o.avatar.trim()!==""?null:t.jsx(r,{name:"icon-user-big",width:e==="desktop"||e==="tablet"?50:40,height:e==="desktop"||e==="tablet"?50:40})}),o.avatar&&o.avatar.trim()!==""?null:t.jsx(g,{children:"Upload photo"})]}),t.jsxs(u,{children:[t.jsx(v,{children:"My information"}),t.jsxs(f,{children:[t.jsx(n,{type:"text",value:o&&o.name&&o.name.trim()!==""?o.name:"Name",disabled:!0}),t.jsx(n,{type:"email",value:o&&o.email&&o.email.trim()!==""?o.email:"name@gmail.com",disabled:!0}),t.jsx(n,{type:"phone",value:o&&o.phone&&o.phone.trim()!==""?o.phone:"+380",disabled:!0})]})]})]})},N=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,A=i.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetsBlockTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,G=i.button`
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
`,z=i.button`
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
`,W=()=>{const e=s(),o=()=>{e(j())};return t.jsxs("div",{children:[t.jsxs(N,{children:[t.jsx(A,{children:"My pets"}),t.jsxs(G,{children:["Add pet",t.jsx(r,{name:"icon-plus",width:18,height:18})]})]}),t.jsx(z,{onClick:o,children:"LOG OUT"})]})},I=()=>{const e=s();return t.jsxs(U,{children:[t.jsxs($,{children:[t.jsxs(P,{children:["User",t.jsx(r,{name:"icon-user",width:18,height:18})]}),t.jsx(L,{onClick:()=>e(k()),children:t.jsx(r,{name:"icon-edit",width:18,height:18})})]}),t.jsx(M,{}),t.jsx(W,{})]})},O=i.div`
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 32px;
  }
`,T=i.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,a=i(B)`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571;
  border-radius: 30px;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.MyNoticesLinkColor};
  padding: 12px;
  min-width: 99px;
  background-color: ${e=>e.theme.colors.MyNoticesLinkBGColor};
  transition: background-color 300ms ease-in-out;

  &.active {
    background-color: ${e=>e.theme.colors.MyNoticesLinkActiveBGColor};
    color: ${e=>e.theme.colors.MyNoticesLinkActiveColor};

    &:hover {
      background-color: ${e=>e.theme.colors.MyNoticesLinkActiveHoverBGColor};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px;
    min-width: 114px;
  }

  &:hover {
    background-color: ${e=>e.theme.colors.MyNoticesLinkHoverBGColor};
  }
`,E=i.div`
  padding: 80px 0 0;

  @media screen and (min-width: 768px) {
    padding: 180px 123px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 180px 103px 0;
  }
`,H=()=>t.jsxs(O,{children:[t.jsxs(T,{children:[t.jsx(a,{to:"favorites",children:"My favorites pets"}),t.jsx(a,{to:"viewed",children:"Viewed"})]}),t.jsx(E,{children:t.jsx(b,{})})]}),F=()=>{const e=s();return w.useEffect(()=>{e(C())},[]),t.jsxs(y,{className:"container",children:[t.jsx(I,{}),t.jsx(H,{})]})};export{F as default};
