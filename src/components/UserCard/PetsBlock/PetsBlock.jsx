import React from "react";
import {
  AddPetBtn,
  LogOutBtn,
  PetsBlockTitle,
  PetsBlockTitleWrap,
} from "./PetsBlock.styled";
import Icon from "../../Icon/Icon";

export const PetsBlock = () => {
  return (
    <div>
      <PetsBlockTitleWrap>
        <PetsBlockTitle>My pets</PetsBlockTitle>
        <AddPetBtn>
          Add pet
          <Icon name="icon-plus" width={18} height={18} />
        </AddPetBtn>
      </PetsBlockTitleWrap>
      <LogOutBtn>LOG OUT</LogOutBtn>
    </div>
  );
};
