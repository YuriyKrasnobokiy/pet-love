import React from "react";
import { useDispatch } from "react-redux";
import { closeMobMenu } from "../../../../redux/mob-menu/mobMenuSlice";
import { HeaderNavLink, HeaderNavWrap } from "./HeaderNav.styled";

export const HeaderNavComponent = ({ isHome }) => {
  const dispatch = useDispatch();
  return (
    <HeaderNavWrap>
      <HeaderNavLink
        to="/news"
        $isHome={isHome}
        onClick={() => dispatch(closeMobMenu())}
      >
        News
      </HeaderNavLink>

      <HeaderNavLink
        to="/find-pet"
        $isHome={isHome}
        onClick={() => dispatch(closeMobMenu())}
      >
        Find pet
      </HeaderNavLink>

      <HeaderNavLink
        to="/our-friends"
        $isHome={isHome}
        onClick={() => dispatch(closeMobMenu())}
      >
        Our friends
      </HeaderNavLink>
    </HeaderNavWrap>
  );
};
