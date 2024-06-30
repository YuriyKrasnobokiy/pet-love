import styled from "styled-components";

export const RegFormWrap = styled.div`
  padding: 28px 20px;
  border-radius: 30px;
  width: 295px;
  background-color: ${(props) => props.theme.colors.RegistrFormBG};
`;

export const RegTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
`;

export const RegDescr = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const RegInputWrap = styled.div`
  position: relative;
  margin-bottom: 14px;
  &:last-of-type {
    margin-bottom: 32px;
  }
`;

export const RegInput = styled.input`
  width: 100%;
  border: ${(props) => props.theme.colors.FormInputBorder};
  border-radius: 30px;
  padding: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  box-sizing: border-box;
  background-color: transparent;
  transition: border-color 0.3s linear;

  &:hover {
    border-color: ${(props) => props.theme.colors.accentColor};
  }

  &:focus {
    outline: none;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.accentColor};

    caret-color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const PasswordBtn = styled.button`
  background-color: transparent;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const RegBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  border-radius: 30px;
  padding: 12px 42px;
  width: 100%;
  justify-content: center;
  color: ${(props) => props.theme.colors.FormBtnColor};
  background-color: ${(props) => props.theme.colors.accentColor};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.FormBtnBgHover};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 44px;
  left: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.ErrorMessageColor};
`;
