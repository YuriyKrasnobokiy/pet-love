import{u as I,a as $,r as y,j as s,I as t,l as b}from"./index-8Pj2LHtV.js";import{c as k,a as h,e as L,u as S,A as v,d as F,f as E,g as m,h as p,E as u,i as o,j as B,k as C,l as W,m as D,o as R,P as q}from"./AuthForm.styled-Cw3jF4-3.js";const T="/pet-love/assets/login-img-2x-mob-CPFyprLk.jpg",V=I.div`
  padding: 6px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,M=k().shape({email:h().matches(L,"Invalid email").required(),password:h().min(7,"Password must be at least 7 characters").required()}),N=()=>{var c,d;const{register:r,handleSubmit:n,formState:{errors:e},watch:a,reset:x}=S({resolver:R(M),mode:"onChange"}),g=$(),[i,j]=y.useState(!1),w=()=>{j(!i)},l=f=>{const{email:P,password:A}=f;g(b({email:P,password:A})),x()};return s.jsxs(v,{children:[s.jsx(F,{children:"Login"}),s.jsx(E,{children:"Welcome! Please enter your credentials to login to the platform:"}),s.jsxs("form",{onSubmit:n(l),children:[s.jsxs(m,{children:[s.jsx(p,{...r("email"),type:"email",placeholder:"Email",$isValid:!e.email&&a("email"),$isInvalid:e.email&&a("email")}),s.jsx(u,{children:(c=e.email)==null?void 0:c.message}),e.email&&s.jsx(o,{$isPassword:!1,children:s.jsx(t,{name:"icon-cross-small",width:"18",height:"18"})}),!e.email&&a("email")&&s.jsx(o,{$isPassword:!1,children:s.jsx(t,{name:"icon-check",width:"18",height:"18"})})]}),s.jsxs(m,{children:[s.jsx(p,{...r("password"),type:i?"text":"password",placeholder:"Password",autoComplete:"true",$isValid:!e.password&&a("password"),$isInvalid:e.password&&a("password")}),s.jsx(B,{type:"button",onClick:w,children:s.jsx(t,{height:18,width:18,name:i?"icon-eye-off":"icon-eye"})}),s.jsx(u,{children:(d=e.password)==null?void 0:d.message}),e.password&&s.jsx(o,{$isPassword:!0,children:s.jsx(t,{name:"icon-cross-small",width:"18",height:"18"})}),!e.password&&a("password")&&s.jsx(o,{$isPassword:!0,children:s.jsx(t,{name:"icon-check",width:"18",height:"18"})})]}),s.jsx(C,{type:"submit",onSubmit:n(l),children:"login"})]}),s.jsxs(W,{children:["Don`t have an account?",s.jsx(D,{to:"/register",children:"Register"})]})]})},G=()=>s.jsxs(V,{className:"container",children:[s.jsx(q,{imageUrl:T}),s.jsx(N,{})]});export{G as default};