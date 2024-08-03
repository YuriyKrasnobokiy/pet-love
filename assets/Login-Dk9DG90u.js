import{a as b,r as I,j as s,l as P,u as $,b as k}from"./index-BOwNCE4v.js";import{c as A,a as m,e as L,u as F,A as S,d as T,f as C,g as p,h,E as g,i,F as o,j as D,k as E,l as B,m as R,o as W,P as V}from"./FormIcon-DL4Q7Eji.js";const q="/pet-love/assets/login-img-2x-desc-Cwl20Q5L.jpg",Q="/pet-love/assets/login-img-2x-tablet-9uVImwQU.jpg",U="/pet-love/assets/login-img-2x-mob-CPFyprLk.jpg",z=A().shape({email:m().matches(L,"Invalid email").required(),password:m().min(7,"Password must be at least 7 characters").required()}),M=()=>{var d,c;const{register:t,handleSubmit:n,formState:{errors:e},watch:a,reset:u}=F({resolver:W(z),mode:"onChange"}),x=b(),[r,j]=I.useState(!1),w=()=>{j(!r)},l=f=>{const{email:v,password:y}=f;x(P({email:v,password:y})),u()};return s.jsxs(S,{$login:"true",children:[s.jsx(T,{children:"Login"}),s.jsx(C,{children:"Welcome! Please enter your credentials to login to the platform:"}),s.jsxs("form",{onSubmit:n(l),children:[s.jsxs(p,{$login:"true",children:[s.jsx(h,{...t("email"),type:"email",placeholder:"Email",$isValid:!e.email&&a("email"),$isInvalid:e.email&&a("email")}),s.jsx(g,{children:(d=e.email)==null?void 0:d.message}),e.email&&s.jsx(i,{$isPassword:!1,children:s.jsx(o,{name:"icon-cross-small"})}),!e.email&&a("email")&&s.jsx(i,{$isPassword:!1,children:s.jsx(o,{name:"icon-check"})})]}),s.jsxs(p,{$login:"true",children:[s.jsx(h,{...t("password"),type:r?"text":"password",placeholder:"Password",autoComplete:"true",$isValid:!e.password&&a("password"),$isInvalid:e.password&&a("password")}),s.jsx(D,{type:"button",onClick:w,children:s.jsx(o,{name:r?"icon-eye-off":"icon-eye"})}),s.jsx(g,{children:(c=e.password)==null?void 0:c.message}),e.password&&s.jsx(i,{$isPassword:!0,children:s.jsx(o,{name:"icon-cross-small"})}),!e.password&&a("password")&&s.jsx(i,{$isPassword:!0,children:s.jsx(o,{name:"icon-check"})})]}),s.jsx(E,{type:"submit",onSubmit:n(l),children:"login"})]}),s.jsxs(B,{children:["Don`t have an account?",s.jsx(R,{to:"/register",children:"Register"})]})]})},N=$.div`
  padding: 6px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0 0 32px;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`,O="/pet-love/assets/login-descr-img-1x-tablet-CacwTZOz.jpg",H=()=>{const t=k();return s.jsxs(N,{className:"container-auth",children:[s.jsx(V,{imageUrl:t==="desktop"?q:t==="tablet"?Q:U,descrImg:O,descrTitle:"Rich",descrText:"Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!",descrDate:"21.09.2020"}),s.jsx(M,{})]})};export{H as default};
