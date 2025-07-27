import{u as n,b as m,c as g,Q as u,j as e,U as b,R as j,S as v,I as s,T as B,V as k,W as y,X as C,Y as c,a as l,P as U,Z as P,_ as T,$,a0 as I,r as L,a1 as z}from"./index-J56aj5DR.js";import{M as A,a as N,N as h}from"./MyNotices.styled-DRF_M1yw.js";const M=n.div`
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    max-width: 1216px;
    padding: 0 32px 24px 32px;
  }
`,W=n.div`
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
`,E=n.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 40px;
    left: 40px;
  }
`,G=n.p`
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
`,O=n.button`
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
`,F=()=>{const t=m(),i=g(u),a=i.avatar;return e.jsxs(b,{children:[e.jsxs(j,{children:[e.jsx(v,{$avatarUrl:a,children:i&&i.avatar&&i.avatar.trim()!=="https://test.png"&&i.avatar.trim()!==""?null:e.jsx(s,{name:"icon-user-big",width:t==="desktop"||t==="tablet"?50:40,height:t==="desktop"||t==="tablet"?50:40})}),i.avatar&&i.avatar.trim()!==""?null:e.jsx(B,{children:"Upload photo"})]}),e.jsxs(k,{children:[e.jsx(y,{children:"My information"}),e.jsxs(C,{children:[e.jsx(c,{type:"text",value:i&&i.name&&i.name.trim()!==""?i.name:"Name",disabled:!0}),e.jsx(c,{type:"email",value:i&&i.email&&i.email.trim()!==""?i.email:"name@gmail.com",disabled:!0}),e.jsx(c,{type:"phone",value:i&&i.phone&&i.phone.trim()!==""?i.phone:"+380",disabled:!0})]})]})]})},S=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,D=n.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${t=>t.theme.colors.PetsBlockTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,H=n.button`
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
`,R=n.ul`
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
`,V=n.li`
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
`,_=n.img`
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
`,Q=n.div`
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
`,X=n.h3`
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
`,Y=n.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (min-width: 1280px) {
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
  }
`,Z=n.li`
display: flex;
flex-direction: column;
gap: 4px;
`,q=n.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`,J=n.p`
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
`,K=n.button`
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
`,ee=n.button`
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
`,te=t=>{const[i,a,r]=t.split("-");return`${r}.${a}.${i}`};function p(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}const ie=()=>{const t=m(),i=l(),a=U(),r=g(u),f=()=>{i(T())},w=()=>{a("/add-pet")};return e.jsxs("div",{children:[e.jsxs(S,{children:[e.jsx(D,{children:"My pets"}),e.jsxs(H,{onClick:w,children:["Add pet",e.jsx(s,{name:"icon-plus",width:18,height:18})]})]}),e.jsx(R,{children:((r==null?void 0:r.pets)??[]).map(o=>e.jsxs(V,{children:[e.jsx(_,{src:o.imgURL,alt:"pet-photo"}),e.jsxs(Q,{children:[e.jsx(X,{children:p(o.title)}),e.jsx(Y,{children:[{title:"Name",value:p(o.name)},{title:"Birthday",value:o.birthday},{title:"Sex",value:p(o.sex)},{title:"Species",value:p(o.species)}].map(({title:d,value:x})=>e.jsxs(Z,{children:[e.jsx(q,{children:d}),e.jsx(J,{className:d==="Name"?"name":"",children:d==="Birthday"?te(x):x})]},d))})]}),e.jsx(K,{onClick:()=>i(P({_id:o._id})),type:"button",children:e.jsx(s,{name:"icon-trash",width:t==="desktop"||t==="tablet"?18:16,height:t==="desktop"||t==="tablet"?18:16})})]},o.name))}),e.jsx(ee,{onClick:f,children:"LOG OUT"})]})},ne=()=>{const t=l();return e.jsxs(W,{children:[e.jsxs(E,{children:[e.jsxs(G,{children:["User",e.jsx(s,{name:"icon-user",width:18,height:18})]}),e.jsx(O,{onClick:()=>t($()),children:e.jsx(s,{name:"icon-edit",width:18,height:18})})]}),e.jsx(F,{}),e.jsx(ie,{})]})},oe=()=>e.jsxs(A,{children:[e.jsxs(N,{children:[e.jsx(h,{to:"favorites",children:"My favorites pets"}),e.jsx(h,{to:"viewed",children:"Viewed"})]}),e.jsx(I,{})]}),se=()=>{const t=l();return L.useEffect(()=>{t(z())},[]),e.jsxs(M,{className:"container",children:[e.jsx(ne,{}),e.jsx(oe,{})]})};export{se as default};
