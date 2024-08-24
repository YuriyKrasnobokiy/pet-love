import styled from "styled-components";

export const ModalApproveWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 28px;
`;

export const ModalApproveImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 30px;
  margin-bottom: 30px;
`;

export const ModalApproveTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 28px;
  color: ${(props) => props.theme.colors.modalApproveTitleColor};
`;

export const ModalApproveBtnsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalApproveBtn = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  padding: 14px;
  border-radius: 30px;
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
`;
