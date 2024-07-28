import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderNavWrap = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  border: ${(props) =>
    props.$isHome
      ? props.theme.colors.HeaderNavLinkBorderSecondary
      : props.theme.colors.HeaderNavLinkBorder};
  border-radius: 30px;
  padding: 14px 20px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${(props) =>
    props.$isHome
      ? props.theme.colors.HeaderNavLinkColorSecondary
      : props.theme.colors.HeaderNavLinkColor};
  transition: border-color 300ms ease-in-out;

  &:hover {
    border-color: ${(props) =>
      props.$isHome
        ? props.theme.colors.HeaderNavLinkColorSecondary
        : props.theme.colors.accentColor};
  }

  &.active {
    border-color: ${(props) => props.theme.colors.accentColor};
  }
`;
