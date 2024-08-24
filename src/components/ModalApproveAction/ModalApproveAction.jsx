import React from "react";
import {
  ModalApproveBtn,
  ModalApproveBtnsWrap,
  ModalApproveImg,
  ModalApproveTitle,
  ModalApproveWrap,
} from "./ModalApproveAction.styled";
import CatImg from "../../assets/leaving.png";
import { closeModal } from "../../redux/modal/modalSlice";
import { logout } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ModalApproveAction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerLogOut = () => {
    dispatch(logout());
    dispatch(closeModal());
    navigate("/");
  };
  return (
    <ModalApproveWrap>
      <ModalApproveImg src={CatImg} alt="cat" />
      <ModalApproveTitle>Already leaving?</ModalApproveTitle>
      <ModalApproveBtnsWrap>
        <ModalApproveBtn onClick={handlerLogOut}>Yes</ModalApproveBtn>
        <ModalApproveBtn onClick={() => dispatch(closeModal())} $cancel>
          Cancel
        </ModalApproveBtn>
      </ModalApproveBtnsWrap>
    </ModalApproveWrap>
  );
};
