import React from "react";
import {
  AddPetBtn,
  LogOutBtn,
  PetsBlockTitle,
  PetsBlockTitleWrap,
} from "./PetsBlock.styled";
import Icon from "../../Icon/Icon";
import { openApproveModal } from "../../../redux/modal/modalSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PetsBlock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOutClick = () => {
    dispatch(openApproveModal());
  };
  const handleAddPetClick = () => {
    navigate("/add-pet");
  }
  return (
    <div>
      <PetsBlockTitleWrap>
        <PetsBlockTitle>My pets</PetsBlockTitle>
        <AddPetBtn onClick={handleAddPetClick}>
          Add pet
          <Icon name="icon-plus" width={18} height={18} />
        </AddPetBtn>
      </PetsBlockTitleWrap>
      <LogOutBtn onClick={handleLogOutClick}>LOG OUT</LogOutBtn>
    </div>
  );
};
