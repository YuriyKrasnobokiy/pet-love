import{u as t,b as d,c as a,X as l,j as o,I as n,Y as s,Z as c}from"./index-DZzPhIgR.js";const p=t.div``,h=t.div`
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
`,x=t.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,m=t.p`
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
`,g=t.button`
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
`,u=t.div`
  margin-bottom: 40px;
`,f=t.div`
  margin-bottom: 20px;
`,b=t.div`
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
`,j=t.button`
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
`,B=t.form`
  display: flex;
  flex-direction: column;
`,v=t.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.UserInfoFormTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,w=t.div`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`,i=t.input`
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
`,k=()=>{const e=d(),r=a(l);return o.jsxs(u,{children:[o.jsxs(f,{children:[o.jsx(b,{children:o.jsx(n,{name:"icon-user-big",width:e==="desktop"||e==="tablet"?50:40,height:e==="desktop"||e==="tablet"?50:40})}),o.jsx(j,{children:"Upload photo"})]}),o.jsxs(B,{children:[o.jsx(v,{children:"My information"}),o.jsxs(w,{children:[o.jsx(i,{type:"text",value:r?r.name:"Name",disabled:!0}),o.jsx(i,{type:"email",value:r?r.email:"name@gmail.com",disabled:!0}),o.jsx(i,{type:"phone",value:"+380",disabled:!0})]})]})]})},U=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,C=t.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetsBlockTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,y=t.button`
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
`,$=t.button`
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
`,P=()=>o.jsxs("div",{children:[o.jsxs(U,{children:[o.jsx(C,{children:"My pets"}),o.jsxs(y,{children:["Add pet",o.jsx(n,{name:"icon-plus",width:18,height:18})]})]}),o.jsx($,{children:"LOG OUT"})]}),z=()=>o.jsxs(h,{children:[o.jsxs(x,{children:[o.jsxs(m,{children:["User",o.jsx(n,{name:"icon-user",width:18,height:18})]}),o.jsx(g,{children:o.jsx(n,{name:"icon-edit",width:18,height:18})})]}),o.jsx(k,{}),o.jsx(P,{})]}),I=()=>o.jsxs("div",{children:[o.jsx("nav",{children:o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(s,{to:"favorites",children:"My favorites pets"})}),o.jsx("li",{children:o.jsx(s,{to:"viewed",children:"Viewed"})})]})}),o.jsx("div",{children:o.jsx(c,{})})]}),G=()=>o.jsxs(p,{className:"container",children:[o.jsx(z,{}),o.jsx(I,{})]});export{G as default};
