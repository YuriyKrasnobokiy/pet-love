import styled from "styled-components";

export const FormStyled = styled.form`
  position: relative;
  margin: 0 auto;
  margin-bottom: ${(props) => (props.$isInFilters ? "12px" : "20px")};
  width: 100%;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.$isInFilters ? "265px" : "230px")};
    margin: 0;
  }
`;

export const InputStyled = styled.input`
  border: ${(props) =>
    props.$isInFilters
      ? `1px solid ${props.theme.colors.searchFiltersInputBorderColor}`
      : `1px solid  ${props.theme.colors.searchInputBorderColor}`};
  border-radius: 30px;
  padding: 11px 12px;
  width: calc(100% - 26px);
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  background-color: ${(props) =>
    props.$isInFilters
      ? `${props.theme.colors.searchFiltersInputBGColor}`
      : "transparent"};
  color: ${(props) =>
    props.$isInFilters
      ? `${props.theme.colors.searchFiltersInputColor}`
      : `${props.theme.colors.searchInputColor}`};
  transition: border-color 300ms ease-in-out;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 13px;
    width: calc(100% - 28px);
  }

  &::placeholder {
    color: ${(props) =>
      props.$isInFilters
        ? `${props.theme.colors.searchFiltersInputColor}`
        : `${props.theme.colors.searchInputColor}`};
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.03em;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
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
  color: ${(props) =>
    props.$isInFilters
      ? `${props.theme.colors.searchFiltersInputIconColor}`
      : `${props.theme.colors.searchInputIconColor}`};

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 14px;
  }
`;

export const ResetBtn = styled.button`
  top: ${(props) => (props.$location ? "11px" : "13px")};
  right: 36px;
  position: absolute;
  background-color: transparent;
  color: ${(props) => props.theme.colors.searchInputIconColor};

  @media screen and (min-width: 768px) {
    top: ${(props) => (props.$location ? "14px" : "15px")};
  }
`;
