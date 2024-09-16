import{u as t,b as d,c as a,W as c,j as o,I as n,a as l,X as p,Y as x,Z as h}from"./index-CQ5QWlwV.js";const m=t.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px;
  }
`,g=t.div`
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
`,u=t.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,f=t.p`
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
`,b=t.button`
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
`,k=t.div`
  margin-bottom: 40px;
`,w=t.div`
  margin-bottom: 20px;
`,B=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.UserBlockAvatarBGColor};
  margin: 0 auto;
  color: ${e=>e.theme.colors.UserBlockAvatarColor};

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`,v=t.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${e=>e.theme.colors.UserBlockAvatarBtnColor};
  background-color: transparent;
  padding: 8px 10px;
  transition: color 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }

  &:hover {
    color: ${e=>e.theme.colors.UserBlockAvatarBtnHoverColor};
  }
`,j=t.form`
  display: flex;
  flex-direction: column;
`,C=t.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.UserInfoFormTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,y=t.div`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`,r=t.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.UserInfoFormInputColor};
  padding: 12px;
  border-radius: 30px;
  border: ${e=>e.theme.colors.UserInfoFormInputBorderColor};
  background-color: transparent;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 16px;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`,U=()=>{const e=d(),i=a(c);return o.jsxs(k,{children:[o.jsxs(w,{children:[o.jsx(B,{children:o.jsx(n,{name:"icon-user-big",width:e==="desktop"||e==="tablet"?50:40,height:e==="desktop"||e==="tablet"?50:40})}),o.jsx(v,{children:"Upload photo"})]}),o.jsxs(j,{children:[o.jsx(C,{children:"My information"}),o.jsxs(y,{children:[o.jsx(r,{type:"text",value:i?i.name:"Name",disabled:!0}),o.jsx(r,{type:"email",value:i?i.email:"name@gmail.com",disabled:!0}),o.jsx(r,{type:"phone",value:"+380",disabled:!0})]})]})]})},$=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,A=t.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetsBlockTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,P=t.button`
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
`,z=t.button`
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
`,L=()=>{const e=l(),i=()=>{e(p())};return o.jsxs("div",{children:[o.jsxs($,{children:[o.jsx(A,{children:"My pets"}),o.jsxs(P,{children:["Add pet",o.jsx(n,{name:"icon-plus",width:18,height:18})]})]}),o.jsx(z,{onClick:i,children:"LOG OUT"})]})},N=()=>o.jsxs(g,{children:[o.jsxs(u,{children:[o.jsxs(f,{children:["User",o.jsx(n,{name:"icon-user",width:18,height:18})]}),o.jsx(b,{children:o.jsx(n,{name:"icon-edit",width:18,height:18})})]}),o.jsx(U,{}),o.jsx(L,{})]}),G=t.div`
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 32px;
  }
`,I=t.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,s=t(x)`
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
`,M=t.div`
  padding: 80px 0 0;

  @media screen and (min-width: 768px) {
    padding: 180px 123px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 180px 103px 0;
  }
`,T=()=>o.jsxs(G,{children:[o.jsxs(I,{children:[o.jsx(s,{to:"favorites",children:"My favorites pets"}),o.jsx(s,{to:"viewed",children:"Viewed"})]}),o.jsx(M,{children:o.jsx(h,{})})]}),O=()=>o.jsxs(m,{className:"container",children:[o.jsx(N,{}),o.jsx(T,{})]});export{O as default};
