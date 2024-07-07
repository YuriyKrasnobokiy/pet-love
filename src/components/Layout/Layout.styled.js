import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;
  padding-bottom: 20px;
  max-width: 335px;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    display: flex;
    /* width: 1200px; */
    padding: 20px 40px;

    align-items: center;
  }
`;

export const HeaderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
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
  color: ${(props) => props.theme.colors.textColor};
  margin: 0;
`;

export const BurgerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.textColor};
`;

//FOOTER//

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const SocialItem = styled.li`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 18px;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const AdressList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  flex-direction: column;
`;

export const AddressItem = styled.li`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.03em;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.03em;
`;
