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

  &::placeholder {
    color: ${(props) => props.theme.colors.searchInputColor};
  }
`;

export const FilterBtn = styled.button`
  top: 13px;
  right: 12px;
  position: absolute;
  background-color: transparent;
`;

export const ResetBtn = styled.button`
  top: 13px;
  right: 40px;
  position: absolute;
  background-color: transparent;
`;
