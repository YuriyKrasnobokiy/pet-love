import styled from "styled-components";

export const FormStyled = styled.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const InputStyled = styled.input`
  border: 1px solid ${(props) => props.theme.colors.searchInputBorderColor};
  border-radius: 30px;
  padding: 12px;
  width: 309px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  background-color: transparent;
  color: ${(props) => props.theme.colors.searchInputColor};

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
`;

export const ResetBtn = styled.button`
  top: 13px;
  right: 40px;
  position: absolute;
  background-color: transparent;
  color: ${(props) => props.theme.colors.searchInputIconColor};
`;
