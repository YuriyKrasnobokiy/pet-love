import{u as e,j as t,i as n}from"./index-C30zw_TH.js";const r=e.div`
  width: 335px;
  padding: 0 20px 20px;
  margin: 0 auto;
`,i=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${o=>o.theme.colors.accentColor};
  border-radius: 30px;
  padding: 245px 0;
`,s=e.h2`
  display: flex;
  font-weight: 800;
  font-size: 120px;
  line-height: 1;
  color: ${o=>o.theme.colors.notFoundTextColor};
  margin-bottom: 20px;
`,d=e.div`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: ${o=>o.theme.colors.notFoundImgThumbBGC};
  text-align: center;
`,c=e.img`
  border-radius: 100%;
`,l=e.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${o=>o.theme.colors.notFoundTextColor};
  margin-bottom: 20px;
`,a=e.button`
  border-radius: 30px;
  padding: 12px 30px;
  width: 150px;
  height: 42px;
  background-color: ${o=>o.theme.colors.notFoundBtnBGC};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  color: ${o=>o.theme.colors.notFoundBtnColor};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: #fbe7c1;
  }
`,h=()=>t.jsx(r,{children:t.jsxs(i,{children:[t.jsxs(s,{children:["4",t.jsx(d,{children:t.jsx(c,{src:"./src/assets/imgs/mobile/404-img-1x-mob.jpg",alt:"cat"})}),"4"]}),t.jsx(l,{children:"Ooops! This page not found :("}),t.jsx(n,{to:"/",children:t.jsx(a,{type:"button",children:"To home page"})})]})});export{h as default};
