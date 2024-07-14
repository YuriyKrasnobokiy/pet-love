import styled from "styled-components";

export const PagContrlsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaginationBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.285;
  width: 40px;
  height: 40px;
  justify-content: center;
  margin: 0;
  border: 1px solid
    ${(props) =>
      props.$isCurrentPage
        ? "none"
        : props.theme.colors.PaginationBtnBorderColor};
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isCurrentPage ? props.theme.colors.accentColor : "transparent"};
  color: ${(props) =>
    props.$isCurrentPage
      ? props.theme.colors.white
      : props.theme.colors.textColor};

  &:first-child {
    transform: rotate(180deg);
  }

  &:nth-child(2) {
    transform: rotate(180deg);
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.accentColor};
  }

  &:disabled {
    fill: ${(props) => props.theme.colors.PaginationBtnFill};
    color: ${(props) => props.theme.colors.PaginationBtnColor};
    border: 1px solid
      ${(props) => props.theme.colors.PaginationBtnBorderColorDisabled};
  }
`;
