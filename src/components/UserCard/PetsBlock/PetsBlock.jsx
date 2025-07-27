import React from "react";
import {
  AddPetBtn,
  DeleteBtn,
  ItemTextBlock,
  ItemTextBlockList,
  LogOutBtn,
  PetItemImg,
  PetListItem,
  PetsBlockTitle,
  PetsBlockTitleWrap,
  PetsList,
  PetTitle,
  TextBlockListItem,
  TextBlockListItemTitle,
  TextBlockListItemValue,
} from "./PetsBlock.styled";
import Icon from "../../Icon/Icon";
import { openApproveModal } from "../../../redux/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectProfile } from "../../../redux/profile/profileSelectors";
import { birthdateFormat } from "../../../helpers/birthdateFormat";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { deletePet } from "../../../redux/profile/profileSlice";
import { capitalizeFirstLetter } from "../../../helpers/capitalizeFirstLetter";

export const PetsBlock = () => {
  const deviceType = useDeviceType();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(selectProfile);

  const handleLogOutClick = () => {
    dispatch(openApproveModal());
  };
  const handleAddPetClick = () => {
    navigate("/add-pet");
  };
  return (
    <div>
      <PetsBlockTitleWrap>
        <PetsBlockTitle>My pets</PetsBlockTitle>
        <AddPetBtn onClick={handleAddPetClick}>
          Add pet
          <Icon name="icon-plus" width={18} height={18} />
        </AddPetBtn>
      </PetsBlockTitleWrap>

      <PetsList>
        {(profile?.pets ?? []).map((item) => (
          <PetListItem key={item.name}>
            <PetItemImg src={item.imgURL} alt="pet-photo" />
            <ItemTextBlock>
              <PetTitle>{capitalizeFirstLetter(item.title)}</PetTitle>
              <ItemTextBlockList>
                {[
                  { title: "Name", value: capitalizeFirstLetter(item.name) },
                  { title: "Birthday", value: item.birthday },
                  { title: "Sex", value: capitalizeFirstLetter(item.sex)  },
                  { title: "Species", value: capitalizeFirstLetter(item.species)  },
                ].map(({ title, value }) => (
                  <TextBlockListItem key={title}>
                    <TextBlockListItemTitle>{title}</TextBlockListItemTitle>
                    <TextBlockListItemValue className={title === "Name" ? 'name' : ''}>{title === "Birthday" ? birthdateFormat(value) : value}</TextBlockListItemValue>
                  </TextBlockListItem>
                ))}
              </ItemTextBlockList>
            </ItemTextBlock>
            <DeleteBtn onClick={()=>dispatch(deletePet({ _id: item._id }))} type='button'><Icon name='icon-trash' width={deviceType === 'desktop' ? 18 : deviceType === 'tablet' ? 18 : 16} height={deviceType === 'desktop' ? 18 : deviceType === 'tablet' ? 18 : 16} /></DeleteBtn>
          </PetListItem>
        ))}
      </PetsList>
      <LogOutBtn onClick={handleLogOutClick}>LOG OUT</LogOutBtn>
    </div>
  );
};
