import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const MobMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  overflow-y: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const MobMenuStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 40px 20px;
  background: white;
  cursor: auto;
  height: 100vh;
  max-width: 218px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 28px;
  right: 20px;
  font-size: 30px;
  background-color: transparent;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const MobNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 236px;
`;

export const MobNavLink = styled(NavLink)`
  border: ${(props) => props.theme.colors.MobNavLinkBorder};
  border-radius: 30px;
  padding: 15px;
  width: 87px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.MobNavLinkColor};
  transition: border-color 300ms ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.colors.accentColor};
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const MobAuthWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobLoginBtn = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #fff;
  border-radius: 30px;
  padding: 12px 68px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.mobLoginBtnColor};
  background-color: ${(props) => props.theme.colors.mobLoginBtnBGColor};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.mobLoginBtnBGHover};
  }
`;

export const MobRegBtn = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  border-radius: 30px;
  padding: 12px 42px;
  color: ${(props) => props.theme.colors.mobRegBtnColor};
  background-color: ${(props) => props.theme.colors.mobRegBtnBG};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.mobRegBtnBGHover};
  }
`;
