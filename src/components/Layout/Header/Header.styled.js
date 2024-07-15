import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: ${(props) => (props.$isHome ? "absolute" : "static")};
  width: ${(props) => (props.$isHome ? "100%" : "inherit")};
`;

export const HeaderWrapper = styled.div`
  position: ${(props) => (props.$isHome ? "relative" : "static")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 20px 20px;
  /* padding-top: 28px;
  padding-bottom: 20px; */
  max-width: ${(props) => (props.$isHome ? "295px" : "335px")};
  margin: 0 auto;
  /* @media screen and (min-width: 1280px) {
    max-width: 1152px;
    padding: 32px 64px;
  } */

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1152px;
    padding: 32px 64px;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondTextColor};
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
  display: inline-flex;
  transition: color 0.3s linear;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }

  &.active {
    color: ${(props) => props.theme.colors.secondAccentColor};
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ThemeBtn = styled.button`
  font-size: 24px;
  width: 40px;
  height: 40px;
  justify-content: center;
  background-color: transparent;
  color: ${(props) =>
    props.$isHome
      ? props.theme.colors.HomeTextColor
      : props.theme.colors.textColor};
  margin: 0;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) =>
      props.$isHome
        ? props.theme.colors.HomeTextAccentColor
        : props.theme.colors.accentColor};
  }
`;

export const BurgerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: transparent;
  color: ${(props) =>
    props.$isHome
      ? props.theme.colors.HomeTextColor
      : props.theme.colors.textColor};
  transition: color 0.3s linear;
  &:hover {
    color: ${(props) =>
      props.$isHome
        ? props.theme.colors.HomeTextAccentColor
        : props.theme.colors.accentColor};
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const UserBtn = styled.button`
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.UserBtnBgColor};
  transition: background-color 0.3s linear;
  margin: 0;
  margin-right: 12px;

  &:hover {
    background-color: ${(props) => props.theme.colors.UserBtnBgColorHover};
  }
`;
