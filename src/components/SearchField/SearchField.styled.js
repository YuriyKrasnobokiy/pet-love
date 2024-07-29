import styled from "styled-components";

export const FormStyled = styled.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 230px;
    margin: 0;
  }
`;

export const InputStyled = styled.input`
  border: 1px solid ${(props) => props.theme.colors.searchInputBorderColor};
  border-radius: 30px;
  padding: 11px 12px;
  width: calc(100% - 26px);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  background-color: transparent;
  color: ${(props) => props.theme.colors.searchInputColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 13px;
    width: calc(100% - 28px);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.searchInputColor};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.searchInputBorderFocus};
    outline: none;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.accentColor};
    outline: none;
  }
`;

export const FilterBtn = styled.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
  color: ${(props) => props.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 14px;
  }
`;

export const ResetBtn = styled.button`
  top: 13px;
  right: 36px;
  position: absolute;
  background-color: transparent;
  color: ${(props) => props.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: 15px;
  }
`;
