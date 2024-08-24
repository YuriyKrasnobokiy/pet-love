import styled from "styled-components";

export const ModalApproveWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 28px;
  width: calc(335px - 28px - 28px);

  @media screen and (min-width: 768px) {
    padding: 80px;
    width: calc(448px - 160px);
  }
`;

export const ModalApproveImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 30px;
  margin-bottom: 20px;
`;

export const ModalApproveTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 28px;
  color: ${(props) => props.theme.colors.modalApproveTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.167;
  }
`;

export const ModalApproveBtnsWrap = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const ModalApproveBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  padding: 12px;
  border-radius: 30px;
  justify-content: center;
  width: 100%;
  margin: 0;
  color: ${(props) =>
    props.$cancel
      ? props.theme.colors.ModalApproveCancelBtnColor
      : props.theme.colors.ModalApproveBtnColor};
  background-color: ${(props) =>
    props.$cancel
      ? props.theme.colors.ModalApproveCancelBtnBGColor
      : props.theme.colors.ModalApproveBtnBGColor};
  transition: background-color 300ms ease-in-out;

  &:hover,
  :focus {
    background-color: ${(props) =>
      props.$cancel
        ? props.theme.colors.ModalApproveCancelBtnBGHoverColor
        : props.theme.colors.ModalApproveBtnBGHoverColor};
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
