import{u as o,b as m,c as g,Q as u,j as e,U as b,R as j,S as v,I as r,T as B,V as k,W as y,X as C,Y as p,a as c,P as U,Z as P,_ as T,$,r as I,a0 as L}from"./index-Bx4pz8mJ.js";import{M as z,a as N,N as h}from"./MyNotices.styled-PCojevaD.js";const A=o.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px 24px 32px;
  }
`,M=o.div`
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
  color: ${t=>t.theme.colors.UserCardBageColor};
  width: 52px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  background-color: ${t=>t.theme.colors.UserCardBageBgColor};
`,G=o.button`
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
`,O=()=>{const t=m(),i=g(u),a=i.avatar;return e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(v,{$avatarUrl:a,children:i&&i.avatar&&i.avatar.trim()!=="https://test.png"&&i.avatar.trim()!==""?null:e.jsx(r,{name:"icon-user-big",width:t==="desktop"||t==="tablet"?50:40,height:t==="desktop"||t==="tablet"?50:40})}),i.avatar&&i.avatar.trim()!==""?null:e.jsx(B,{children:"Upload photo"})]}),e.jsxs(k,{children:[e.jsx(y,{children:"My information"}),e.jsxs(C,{children:[e.jsx(p,{type:"text",value:i&&i.name&&i.name.trim()!==""?i.name:"Name",disabled:!0}),e.jsx(p,{type:"email",value:i&&i.email&&i.email.trim()!==""?i.email:"name@gmail.com",disabled:!0}),e.jsx(p,{type:"phone",value:i&&i.phone&&i.phone.trim()!==""?i.phone:"+380",disabled:!0})]})]})]})},F=o.div`
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
  color: ${t=>t.theme.colors.PetsBlockTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,D=o.button`
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
`,H=o.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`,R=o.li`
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
`,V=o.img`
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
  }
`,X=o.h3`
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
`,_=o.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`,q=o.p`
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
`,J=o.button`
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
`,K=o.button`
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
`,ee=t=>{const[i,a,s]=t.split("-");return`${s}.${a}.${i}`},te=()=>{var l;const t=m(),i=c(),a=U(),s=g(u);console.log("profile: ",s);const w=()=>{i(P())},f=()=>{a("/add-pet")};return e.jsxs("div",{children:[e.jsxs(F,{children:[e.jsx(S,{children:"My pets"}),e.jsxs(D,{onClick:f,children:["Add pet",e.jsx(r,{name:"icon-plus",width:18,height:18})]})]}),e.jsx(H,{children:(l=s==null?void 0:s.pets)==null?void 0:l.map(n=>e.jsxs(R,{children:[e.jsx(V,{src:n.imgURL,alt:"pet-photo"}),e.jsxs(Q,{children:[e.jsx(X,{children:n.title}),e.jsx(Y,{children:[{title:"Name",value:n.name},{title:"Birthday",value:n.birthday},{title:"Sex",value:n.sex},{title:"Species",value:n.species}].map(({title:d,value:x})=>e.jsxs(Z,{children:[e.jsx(_,{children:d}),e.jsx(q,{className:d==="Name"?"name":"",children:d==="Birthday"?ee(x):x})]},d))})]}),e.jsx(J,{type:"button",children:e.jsx(r,{name:"icon-trash",width:t==="desktop"||t==="tablet"?18:16,height:t==="desktop"||t==="tablet"?18:16})})]},n.name))}),e.jsx(K,{onClick:w,children:"LOG OUT"})]})},ie=()=>{const t=c();return e.jsxs(M,{children:[e.jsxs(W,{children:[e.jsxs(E,{children:["User",e.jsx(r,{name:"icon-user",width:18,height:18})]}),e.jsx(G,{onClick:()=>t(T()),children:e.jsx(r,{name:"icon-edit",width:18,height:18})})]}),e.jsx(O,{}),e.jsx(te,{})]})},oe=()=>e.jsxs(z,{children:[e.jsxs(N,{children:[e.jsx(h,{to:"favorites",children:"My favorites pets"}),e.jsx(h,{to:"viewed",children:"Viewed"})]}),e.jsx($,{})]}),ae=()=>{const t=c();return I.useEffect(()=>{t(L())},[]),e.jsxs(A,{className:"container",children:[e.jsx(ie,{}),e.jsx(oe,{})]})};export{ae as default};
