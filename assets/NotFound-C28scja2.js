import{u as o,J as d,b as s,j as t}from"./index-CjI_jNKf.js";const a="/pet-love/assets/404-img-2x-desc-CGetih0-.jpg",p="/pet-love/assets/404-img-2x-mob-povfoPSw.jpg",r="/pet-love/assets/404-img-2x-desc-CGetih0-.jpg",c=o.div`
  max-width: 335px;
  padding: 0 20px 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 0 32px 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1216px;
  }
`,x=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.accentColor};
  border-radius: 30px;
  padding: 245px 0;

  @media screen and (min-width: 768px) {
    padding: 221px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 109px;
  }
`,h=o.h2`
  display: flex;
  font-weight: 800;
  font-size: 120px;
  line-height: 1;
  color: ${e=>e.theme.colors.notFoundTextColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 300px;
    margin-bottom: 40px;
  }
`,l=o.div`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: ${e=>e.theme.colors.notFoundImgThumbBGC};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`,m=o.img`
  border-radius: 100%;
`,g=o.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.notFoundTextColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.167;
  }
`,u=o.button`
  border-radius: 30px;
  padding: 12px 30px;
  width: 150px;
  background-color: ${e=>e.theme.colors.notFoundBtnBGC};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.notFoundBtnColor};
  transition: background-color 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 14px 30px;
    line-height: 1.25;
    width: 162px;
  }

  &:hover {
    background-color: #fbe7c1;
  }
`,f=()=>{const e=d(),n=s(),i=()=>{e("/")};return t.jsx(c,{children:t.jsxs(x,{children:[t.jsxs(h,{children:["4",t.jsx(l,{children:t.jsx(m,{src:n==="desktop"?a:n==="tablet"?r:p,alt:"cat"})}),"4"]}),t.jsx(g,{children:"Ooops! This page not found :("}),t.jsx(u,{type:"button",onClick:i,children:"To home page"})]})})};export{f as default};
