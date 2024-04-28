import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MobMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  /* background-color: ${(props) => props.theme.colors.ModalBgColor}; */
  &:hover {
    cursor: pointer;
  }
`;

export const MobMenuStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 40px 50px;
  background: white;
  cursor: auto;
  overflow-y: auto;
  height: 100vh;
  max-width: 218px;
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
  margin-top: 196px;
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
