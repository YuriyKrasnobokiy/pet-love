import{u as s,r as i,a8 as n,j as o,a9 as a}from"./index-C_zgXe52.js";const l=s.div`
  padding: ${e=>e.$isProfile?0:"20px"};
`,c=s.img`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
`,d=s.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${e=>e.theme.colors.ResultsNotFoundColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1250px) {
    width: 456px;
  }
`,u=s.span`
  color: ${e=>e.theme.colors.ResultsNotFoundAccentColor};
`,f=()=>{const[e,t]=i.useState(!1),r=n();return i.useEffect(()=>{switch(r.pathname){case"/profile":t(!0);break;case"/profile/favorites":t(!0);break;case"/profile/viewed":t(!0);break;default:t(!1);break}},[r.pathname]),o.jsxs(l,{$isProfile:e,children:[e?null:o.jsx(c,{src:a,alt:"dog"}),o.jsxs(d,{children:["Oops, it looks like",o.jsxs(u,{children:[" ","there aren't any furry results"," "]}),"on our adorable page."," ",e?'Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.':`Don't worry! Please try selecting a different
        filter or adjust your filtering settings.`]})]})};export{f as R};
