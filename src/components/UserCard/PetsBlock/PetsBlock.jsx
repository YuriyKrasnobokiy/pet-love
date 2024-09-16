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

export const PetsBlock = () => {
  const dispatch = useDispatch();
  const handleLogOutClick = () => {
    dispatch(openApproveModal());
  };
  return (
    <div>
      <PetsBlockTitleWrap>
        <PetsBlockTitle>My pets</PetsBlockTitle>
        <AddPetBtn>
          Add pet
          <Icon name="icon-plus" width={18} height={18} />
        </AddPetBtn>
      </PetsBlockTitleWrap>
      <LogOutBtn onClick={handleLogOutClick}>LOG OUT</LogOutBtn>
    </div>
  );
};
