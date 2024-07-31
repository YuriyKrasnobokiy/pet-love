import styled from "styled-components";

export const PagContrlsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 446px;
    margin: 0 auto;
  }
`;

export const ArrowBtnsWrap = styled.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const NumberBtnsWrap = styled.div`
  display: flex;
  gap: 10px;
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

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 18px;
    line-height: 1.22222;
  }

  &.left {
    transform: rotate(180deg);
  }

  &.icon {
    font-size: 20px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
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
