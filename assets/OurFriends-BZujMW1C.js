import{u as t,j as i,a as p,c as o,r as h,h as x,L as m}from"./index-BPlzuOoa.js";const g=e=>e.friendsStore.friends,w=e=>e.friendsStore.isLoading,u=e=>e.friendsStore.error,f=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 34px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 64px;
  }
`,j=t.ul`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 28px 20px;
  }
`,b=t.div`
  display: flex;
  position: relative;
  padding: 40px 25px 40px 20px;
  border-radius: 15px;
  background-color: ${e=>e.theme.colors.friendCardBGColor};

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 20px;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`,F=t.p`
  position: absolute;
  top: 12px;
  right: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.FriendWorkHoursColor};
  padding: 8px;
  border-radius: 30px;
  text-align: center;
  background-color: ${e=>e.theme.colors.FriendWorkHoursBGColor};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.286;
  }
`,y=t.div`
  width: 80px;
  height: 80px;
  margin-right: 14px;
  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
    margin-right: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 20px;
  }
`,v=t.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.04em;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 20px;
  }
`,d=t.li`
  max-width: 194px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 300ms ease-in-out;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover {
    cursor: pointer;
    color: ${e=>e.theme.colors.accentColor};
  }
`,a=t.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l=t.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>e.theme.colors.FriendDescrTextAccentColor};
`,$=({friend:e})=>{const r=e.workDays||[],n=r.filter(c=>c.isOpen),s=n.length>0?`${n[0].from} - ${n[0].to}`:"Open day and night";return i.jsxs(b,{children:[i.jsx(F,{children:r.length===0?"Day and night":s}),i.jsx(y,{children:i.jsx("img",{src:e.imageUrl,alt:"vet"})}),i.jsxs("div",{children:[i.jsx(v,{children:e.title}),i.jsxs("ul",{children:[i.jsx(d,{children:i.jsxs(a,{href:`mailto:${e.email}`,children:[i.jsx(l,{children:"Email: "}),e.email?e.email:"website only"]})}),i.jsx(d,{children:i.jsxs(a,{href:`https://www.google.com/maps?q=${encodeURIComponent(e.address)}`,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(l,{children:"Address: "}),e.address?e.address:"website only"]})}),i.jsx(d,{children:i.jsxs(a,{href:`tel:${e.phone}`,children:[i.jsx(l,{children:"Phone: "}),e.phone?e.phone:e.email?"email only":" website only"]})})]})]})]})},C=()=>{const e=p(),r=o(g),n=o(w);return o(u),h.useEffect(()=>{e(x())},[e]),i.jsx(i.Fragment,{children:n?i.jsx(m,{}):i.jsxs(f,{className:"container",children:[i.jsx("h2",{className:"title",children:"Our Friends"}),i.jsx(j,{children:r.map(s=>i.jsx($,{friend:s},s._id))})]})})};export{C as default};
