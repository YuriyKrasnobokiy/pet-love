import styled from "styled-components";

export const RegFormWrap = styled.div`
  padding: 28px 20px;
  border-radius: 30px;
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

export const RegInput = styled.input`
  border: ${(props) => props.theme.colors.FormInputBorder};
  border-radius: 30px;
  padding: 12px;
  width: 100%;
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
  }

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
