import{u as i,b as d,c,W as l,j as o,X as p,Y as x,Z as h,I as r,_ as m,$ as g,a0 as u,a1 as f,a2 as n,a as s,a3 as j,a4 as k,a5 as v,a6 as B,r as b,a7 as w}from"./index-DkhqChRq.js";const C=i.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px;
  }
`,y=i.div`
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
`,U=i.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,$=i.p`
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
`,P=i.button`
  border-radius: 30px;
  padding: 10px;
  width: 38px;
  height: 38px;
  margin: 0;
  background-color: ${e=>e.theme.colors.UserCardEditBtnBGColor};
  transition: background-color 300ms easy-in-out;

  &:hover {
    background-color: ${e=>e.theme.colors.UserCardEditBtnHoverBGColor};
  }
`,L=()=>{const e=d(),t=c(l);return console.log("userData: ",t),o.jsxs(p,{children:[o.jsxs(x,{children:[o.jsx(h,{children:t&&t.avatar&&t.avatar.trim()!==""?o.jsx("img",{src:t.avatar,alt:"avatar"}):o.jsx(r,{name:"icon-user-big",width:e==="desktop"||e==="tablet"?50:40,height:e==="desktop"||e==="tablet"?50:40})}),o.jsx(m,{children:"Upload photo"})]}),o.jsxs(g,{children:[o.jsx(u,{children:"My information"}),o.jsxs(f,{children:[o.jsx(n,{type:"text",value:t&&t.name&&t.name.trim()!==""?t.name:"Name",disabled:!0}),o.jsx(n,{type:"email",value:t&&t.email&&t.email.trim()!==""?t.email:"name@gmail.com",disabled:!0}),o.jsx(n,{type:"phone",value:t&&t.phone&&t.phone.trim()!==""?t.phone:"+380",disabled:!0})]})]})]})},M=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,N=i.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetsBlockTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,A=i.button`
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
`,G=i.button`
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
`,z=()=>{const e=s(),t=()=>{e(j())};return o.jsxs("div",{children:[o.jsxs(M,{children:[o.jsx(N,{children:"My pets"}),o.jsxs(A,{children:["Add pet",o.jsx(r,{name:"icon-plus",width:18,height:18})]})]}),o.jsx(G,{onClick:t,children:"LOG OUT"})]})},W=()=>{const e=s();return o.jsxs(y,{children:[o.jsxs(U,{children:[o.jsxs($,{children:["User",o.jsx(r,{name:"icon-user",width:18,height:18})]}),o.jsx(P,{onClick:()=>e(k()),children:o.jsx(r,{name:"icon-edit",width:18,height:18})})]}),o.jsx(L,{}),o.jsx(z,{})]})},I=i.div`
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 32px;
  }
`,O=i.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,a=i(v)`
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
`,T=i.div`
  padding: 80px 0 0;

  @media screen and (min-width: 768px) {
    padding: 180px 123px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 180px 103px 0;
  }
`,E=()=>o.jsxs(I,{children:[o.jsxs(O,{children:[o.jsx(a,{to:"favorites",children:"My favorites pets"}),o.jsx(a,{to:"viewed",children:"Viewed"})]}),o.jsx(T,{children:o.jsx(B,{})})]}),D=()=>{const e=s();return b.useEffect(()=>{e(w())},[]),o.jsxs(C,{className:"container",children:[o.jsx(W,{}),o.jsx(E,{})]})};export{D as default};
