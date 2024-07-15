import { Link } from "react-router-dom";
import styled from "styled-components";

export const MobAuthWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-right: 16px;
  }
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
  color: ${(props) => props.theme.colors.mobLoginBtnColor};
  background-color: ${(props) => props.theme.colors.mobLoginBtnBGColor};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.mobLoginBtnBGHover};
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
    padding: 15px 37px;
    font-size: 16px;
    line-height: 1.25;
    border: none;
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

  @media (min-width: 768px) {
    padding: 15px 20px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
