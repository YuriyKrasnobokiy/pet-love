import{u as t,b as d,c as a,W as c,j as o,I as n,X as l,Y as p}from"./index-j_a7LkVU.js";const x=t.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px;
  }
`,h=t.div`
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
`,m=t.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,g=t.p`
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
`,u=t.button`
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
`,f=t.div`
  margin-bottom: 40px;
`,b=t.div`
  margin-bottom: 20px;
`,w=t.div`
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
`,B=t.button`
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
`,k=t.form`
  display: flex;
  flex-direction: column;
`,j=t.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.UserInfoFormTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,v=t.div`
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
`,C=()=>{const e=d(),i=a(c);return o.jsxs(f,{children:[o.jsxs(b,{children:[o.jsx(w,{children:o.jsx(n,{name:"icon-user-big",width:e==="desktop"||e==="tablet"?50:40,height:e==="desktop"||e==="tablet"?50:40})}),o.jsx(B,{children:"Upload photo"})]}),o.jsxs(k,{children:[o.jsx(j,{children:"My information"}),o.jsxs(v,{children:[o.jsx(r,{type:"text",value:i?i.name:"Name",disabled:!0}),o.jsx(r,{type:"email",value:i?i.email:"name@gmail.com",disabled:!0}),o.jsx(r,{type:"phone",value:"+380",disabled:!0})]})]})]})},y=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,U=t.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.PetsBlockTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,$=t.button`
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
`,P=t.button`
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
`,z=()=>o.jsxs("div",{children:[o.jsxs(y,{children:[o.jsx(U,{children:"My pets"}),o.jsxs($,{children:["Add pet",o.jsx(n,{name:"icon-plus",width:18,height:18})]})]}),o.jsx(P,{children:"LOG OUT"})]}),L=()=>o.jsxs(h,{children:[o.jsxs(m,{children:[o.jsxs(g,{children:["User",o.jsx(n,{name:"icon-user",width:18,height:18})]}),o.jsx(u,{children:o.jsx(n,{name:"icon-edit",width:18,height:18})})]}),o.jsx(C,{}),o.jsx(z,{})]}),N=t.div`
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 32px;
  }
`,G=t.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,s=t(l)`
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

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px;
    min-width: 114px;
  }

  &:last-child {
    color: ${e=>e.theme.colors.MyNoticesLinkSecColor};
    background-color: ${e=>e.theme.colors.MyNoticesLinkSecBGColor};
    &:hover {
      background-color: ${e=>e.theme.colors.MyNoticesLinkSecHoverBGColor};
    }
  }

  &:hover {
    background-color: ${e=>e.theme.colors.MyNoticesLinkHoverBGColor};
  }
`,I=t.div`
  padding: 80px 0 0;

  @media screen and (min-width: 768px) {
    padding: 180px 123px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 180px 103px 0;
  }
`,A=()=>o.jsxs(N,{children:[o.jsxs(G,{children:[o.jsx(s,{to:"favorites",children:"My favorites pets"}),o.jsx(s,{to:"viewed",children:"Viewed"})]}),o.jsx(I,{children:o.jsx(p,{})})]}),T=()=>o.jsxs(x,{className:"container",children:[o.jsx(L,{}),o.jsx(A,{})]});export{T as default};
