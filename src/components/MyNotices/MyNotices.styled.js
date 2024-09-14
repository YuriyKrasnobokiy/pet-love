import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MyNoticesWrap = styled.div`
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 32px;
  }
`;

export const MyNoticesList = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571;
  border-radius: 30px;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.MyNoticesLinkColor};
  padding: 12px;
  min-width: 99px;
  background-color: ${(props) => props.theme.colors.MyNoticesLinkBGColor};
  transition: background-color 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px;
    min-width: 114px;
  }

  &:last-child {
    color: ${(props) => props.theme.colors.MyNoticesLinkSecColor};
    background-color: ${(props) => props.theme.colors.MyNoticesLinkSecBGColor};
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.MyNoticesLinkSecHoverBGColor};
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.MyNoticesLinkHoverBGColor};
  }
`;

export const NoticesContainer = styled.div`
  padding: 80px 0 0;

  @media screen and (min-width: 768px) {
    padding: 180px 123px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 180px 103px 0;
  }
`;
