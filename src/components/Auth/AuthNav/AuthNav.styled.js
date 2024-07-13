import { Link } from "react-router-dom";
import styled from "styled-components";

export const MobAuthWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobLoginBtn = styled(Link)`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #fff;
  border-radius: 30px;
  border: ${(props) =>
    props.$changeColor
      ? props.theme.colors.mobLoginBtnBorder
      : props.theme.colors.mobLoginBtnBorderSecondary};
  padding: 12px 42px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.mobLoginBtnColor};
  background-color: ${(props) => props.theme.colors.mobLoginBtnBGColor};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.mobLoginBtnBGHover};
  }
`;

export const MobRegBtn = styled(Link)`
  display: flex;
  justify-content: center;
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
