import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const MobMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  &:hover {
    cursor: pointer;
  }
`;

export const MobMenuStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 40px 20px;
  background: ${(props) =>
    props.$changeColor
      ? props.theme.colors.accentColor
      : props.theme.colors.BurgerBgColor};
  cursor: auto;
  height: -webkit-fill-available;
  max-width: 218px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;

  transform: translateX(0%);
  transition: transform 0.5s ease;
  &.open {
    transform: translateX(100%);
  }

  @media screen and (min-width: 768px) {
    max-width: 276px;
    padding: 40px 49px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 28px;
  right: 20px;
  font-size: 30px;
  background-color: transparent;
  transition: color 0.3s linear;
  color: ${(props) =>
    props.$changeColor
      ? props.theme.colors.mobCloseColorSecondary
      : props.theme.colors.mobCloseColorPrimary};

  &:hover {
    color: ${(props) =>
      props.$changeColor
        ? props.theme.colors.mobCloseColorHoverSec
        : props.theme.colors.accentColor};
  }
`;

export const MobNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 236px;
`;

export const MobNavLink = styled(NavLink)`
  border: ${(props) =>
    props.$changeColor
      ? props.theme.colors.MobNavLinkBorderSecondary
      : props.theme.colors.MobNavLinkBorder};
  border-radius: 30px;
  padding: 15px;
  width: 87px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  color: ${(props) =>
    props.$changeColor
      ? props.theme.colors.MobNavLinkColorSecondary
      : props.theme.colors.MobNavLinkColor};
  transition: border-color 300ms ease-in-out;

  &:hover {
    border-color: ${(props) =>
      props.$changeColor
        ? props.theme.colors.MobNavLinkBorderHover
        : props.theme.colors.accentColor};
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &.active {
    border-color: ${(props) => props.theme.colors.accentColor};
  }
`;
