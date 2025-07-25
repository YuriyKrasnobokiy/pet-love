import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const AuthFormWrap = styled.div`
  padding: ${(props) => (props.$login ? "59px 19px" : "26px 19px")};
  border-radius: 30px;
  width: 295px;
  background-color: ${(props) => props.theme.colors.RegistrFormBG};
  border: 1px solid ${(props) => props.theme.colors.AuthWrapBorderColor};

  @media screen and (min-width: 768px) {
    padding: ${(props) => (props.$login ? "70px 139px" : "29px 139px")};
    width: 424px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    padding: ${(props) => (props.$login ? "117px 83px" : "76px 83px")};
    width: 424px;
    border-radius: 60px;
  }
`;

export const AuthTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    margin-bottom: 16px;
  }
`;

export const AuthDescr = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22222;
    margin-bottom: 32px;
  }
`;

export const AuthInputWrap = styled.div`
  position: relative;
  margin-bottom: 14px;
  &:last-of-type {
    margin-bottom: ${(props) => (props.$login ? "40px" : "24px")};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    &:last-of-type {
      margin-bottom: ${(props) => (props.$login ? "64px" : "32px")};
    }
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  border: ${(props) => props.theme.colors.FormInputBorder};
  border-radius: 30px;
  padding: 12px 60px 12px 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  box-sizing: border-box;
  background-color: transparent;
  transition: border-color 0.3s linear;
  color: ${(props) => props.theme.colors.FormInputColor};

  @media screen and (min-width: 768px) {
    padding: 15px 60px 15px 16px;
    font-size: 16px;
    line-height: 1.25;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.accentColor};
  }

  &:focus {
    outline: none;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.accentColor};

    caret-color: ${(props) => props.theme.colors.accentColor};
  }

  ${(props) =>
    props.$isInvalid &&
    css`
      border-color: ${(props) => props.theme.colors.Error};

      &:focus {
        border-color: ${(props) => props.theme.colors.Error};
      }
    `}

  ${(props) =>
    props.$isValid &&
    css`
      border-color: ${(props) => props.theme.colors.Success};

      &:focus {
        border-color: ${(props) => props.theme.colors.Success};
      }
    `}

    &:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus {
  -webkit-text-fill-color: ${({ theme }) => theme.colors.textColor};
  transition: background-color 9999s ease-in-out 0s;
  caret-color: ${({ theme }) => theme.colors.accentColor};
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  outline: none;
}
`;

export const AuthPasswordBtn = styled.button`
  background-color: transparent;
  position: absolute;
  top: 12px;
  right: 12px;

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 16px;
  }
`;

export const AuthInputIcon = styled.div`
  position: absolute;
  top: 12px;
  right: ${(props) => (props.$isPassword ? "38px" : "12px")};
  color: ${(props) =>
    props.$isValid ? props.theme.colors.Success : props.theme.colors.Error};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: ${(props) => (props.$isPassword ? "50px" : "16px")};
  }
`;

export const AuthBtn = styled.button`
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

  @media screen and (min-width: 768px) {
    padding: 16px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 44px;
  left: 14px;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.Error};

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.16667;
    top: 53px;
    left: 16px;
  }

  &.addPet {
      font-size: 12px;
      line-height: 1.16667;
      top: 40px;
      left: 14px;
      
      @media screen and (min-width: 768px) {
      top: 41px;
      left: 16px;
    }

    &.photo {
      top: 34px;
      left: 14px;
    }
  }

  &.avatar {
    top: 40px;
    @media screen and (min-width: 768px) {
      top: 44px;
    }
  }

  &.edit {
    top: 40px;
    @media screen and (min-width: 768px) {
      top: 52px;
    }
  }
`;

export const AuthFormBottomText = styled.p`
  margin-top: 12px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.FormBottomTextColor};

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.42857;
  }
`;

export const AuthFormBottomLink = styled(Link)`
  color: ${(props) => props.theme.colors.accentColor};
  text-decoration: underline;
  margin-left: 4px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.FormBtnBgHover};
  }
`;
