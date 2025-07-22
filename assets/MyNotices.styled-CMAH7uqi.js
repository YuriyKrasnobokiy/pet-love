import{u as o,aa as e}from"./index-C9JVkwoR.js";const t=o.div`
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 32px;
  }
`,d=o.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,a=o(e)`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571;
  border-radius: 30px;
  letter-spacing: -0.03em;
  color: ${i=>i.theme.colors.MyNoticesLinkColor};
  padding: 12px;
  min-width: 99px;
  background-color: ${i=>i.theme.colors.MyNoticesLinkBGColor};
  transition: background-color 300ms ease-in-out;

  &.active {
    background-color: ${i=>i.theme.colors.MyNoticesLinkActiveBGColor};
    color: ${i=>i.theme.colors.MyNoticesLinkActiveColor};

    &:hover {
      background-color: ${i=>i.theme.colors.MyNoticesLinkActiveHoverBGColor};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px;
    min-width: 114px;
  }

  &:hover {
    background-color: ${i=>i.theme.colors.MyNoticesLinkHoverBGColor};
  }
`,p=o.div`
  padding: ${i=>i.$isEmpty?"80px 0 0":"20px 0 0"};

  @media screen and (min-width: 768px) {
    padding: ${i=>i.$isEmpty?"180px 123px 0":"20px 0 0"};
  }
  @media screen and (min-width: 1280px) {
    padding: ${i=>i.$isEmpty?"180px 103px 0":"32px 0 0"};
  }
`;export{t as M,a as N,d as a,p as b};
