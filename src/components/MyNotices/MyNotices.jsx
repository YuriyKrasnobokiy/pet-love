import React from "react";
import { Outlet } from "react-router-dom";
import {
  MyNoticesList,
  MyNoticesWrap,
  NavLinkStyled,
  NoticesContainer,
} from "./MyNotices.styled";

export const MyNotices = () => {
  return (
    <MyNoticesWrap>
      <MyNoticesList>
        <NavLinkStyled to="favorites">My favorites pets</NavLinkStyled>
        <NavLinkStyled to="viewed">Viewed</NavLinkStyled>
      </MyNoticesList>

      <NoticesContainer>
        <Outlet />
      </NoticesContainer>
    </MyNoticesWrap>
  );
};
