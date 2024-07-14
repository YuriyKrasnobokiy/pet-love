import React from "react";
import { HeaderNavLink, HeaderNavWrap } from "./HeaderNav.styled";
import { closeMobMenu } from "../../../../redux/mob-menu/mobMenuSlice";
import { useDispatch } from "react-redux";

export const HeaderNavComponent = () => {
  const dispatch = useDispatch();
  return (
    <HeaderNavWrap>
      <HeaderNavLink to="/news" onClick={() => dispatch(closeMobMenu())}>
        News
      </HeaderNavLink>

      <HeaderNavLink to="/find-pet" onClick={() => dispatch(closeMobMenu())}>
        Find pet
      </HeaderNavLink>

      <HeaderNavLink to="/our-friends" onClick={() => dispatch(closeMobMenu())}>
        Our friends
      </HeaderNavLink>
    </HeaderNavWrap>
  );
};
