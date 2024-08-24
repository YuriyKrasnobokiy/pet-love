import React from "react";
import {
  ModalApproveBtn,
  ModalApproveBtnsWrap,
  ModalApproveImg,
  ModalApproveTitle,
  ModalApproveWrap,
} from "./ModalApproveAction.styled";
import CatImg from "../../assets/leaving.png";

export const ModalApproveAction = () => {
  return (
    <ModalApproveWrap>
      <ModalApproveImg src={CatImg} alt="cat" />
      <ModalApproveTitle>Already leaving?</ModalApproveTitle>
      <ModalApproveBtnsWrap>
        <ModalApproveBtn>Yes</ModalApproveBtn>
        <ModalApproveBtn $cancel>Cancel</ModalApproveBtn>
      </ModalApproveBtnsWrap>
    </ModalApproveWrap>
  );
};
