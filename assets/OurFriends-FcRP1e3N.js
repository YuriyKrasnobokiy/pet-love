import{u as r,j as s,a as p,c as i,r as h,d as x,L as m}from"./index-CP-t0tfJ.js";const g=e=>e.friendsStore.friends,u=e=>e.friendsStore.isLoading,w=e=>e.friendsStore.error,f=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 34px;
  padding-bottom: 80px;
`,j=r.ul`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`,F=r.div`
  display: flex;
  position: relative;
  padding: 40px 25px 40px 20px;
  border-radius: 15px;
  background-color: ${e=>e.theme.colors.friendCardBGColor};

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 22px 40px 20px;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`,b=r.p`
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
`,y=r.div`
  width: 80px;
  height: 80px;
  margin-right: 14px;
`,v=r.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.04em;
  margin-bottom: 14px;
`,l=r.li`
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
`,a=r.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,c=r.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>e.theme.colors.FriendDescrTextAccentColor};
`,$=({friend:e})=>{const t=e.workDays||[],o=t.filter(d=>d.isOpen),n=o.length>0?`${o[0].from} - ${o[0].to}`:"Open day and night";return s.jsxs(F,{children:[s.jsx(b,{children:t.length===0?"Day and night":n}),s.jsx(y,{children:s.jsx("img",{src:e.imageUrl,alt:""})}),s.jsxs("div",{children:[s.jsx(v,{children:e.title}),s.jsxs("ul",{children:[s.jsx(l,{children:s.jsxs(a,{href:`mailto:${e.email}`,children:[s.jsx(c,{children:"Email: "}),e.email?e.email:"website only"]})}),s.jsx(l,{children:s.jsxs(a,{href:`https://www.google.com/maps?q=${encodeURIComponent(e.address)}`,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(c,{children:"Address: "}),e.address?e.address:"website only"]})}),s.jsx(l,{children:s.jsxs(a,{href:`tel:${e.phone}`,children:[s.jsx(c,{children:"Phone: "}),e.phone?e.phone:e.email?"email only":" website only"]})})]})]})]})},C=()=>{const e=p(),t=i(g),o=i(u);return i(w),h.useEffect(()=>{e(x())},[e]),s.jsx(s.Fragment,{children:o?s.jsx(m,{}):s.jsxs(f,{className:"container",children:[s.jsx("h2",{className:"title",children:"Our Friends"}),s.jsx(j,{children:t.map(n=>s.jsx($,{friend:n},n._id))})]})})};export{C as default};
