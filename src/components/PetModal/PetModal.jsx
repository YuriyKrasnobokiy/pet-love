import React from "react";
import { useSelector } from "react-redux";
import { selectPet } from "../../redux/pets/petsSelectors";
import {
  CategoryBage,
  PetModalAccentProperty,
  PetModalBtn,
  PetModalBtnsWrap,
  PetModalComment,
  PetModalImg,
  PetModalImgWrap,
  PetModalPopularityItem,
  PetModalPopularityList,
  PetModalPopularityNumber,
  PetModalPopularityWrap,
  PetModalProperty,
  PetModalPropertyList,
  PetModalPropertyText,
  PetModalTextBlock,
  PetModalTitle,
  PetModalWrap,
} from "./PetModal.styled";
import Icon from "../Icon/Icon";

export const PetModal = () => {
  const pet = useSelector(selectPet);
  const stars = Array(5).fill("icon-star");

  return (
    <PetModalWrap>
      <PetModalImgWrap>
        <CategoryBage>{pet.category}</CategoryBage>
        <PetModalImg src={pet.imgURL} alt="pet" />
      </PetModalImgWrap>

      <PetModalTextBlock>
        <PetModalTitle>{pet.title} </PetModalTitle>

        <PetModalPopularityWrap>
          <PetModalPopularityList>
            {stars.map((star, index) => (
              <PetModalPopularityItem key={index}>
                <Icon name={star} width="16" height="16" />
              </PetModalPopularityItem>
            ))}
          </PetModalPopularityList>
          <PetModalPopularityNumber>{pet.popularity}</PetModalPopularityNumber>
        </PetModalPopularityWrap>

        <PetModalPropertyList>
          <PetModalProperty>
            <PetModalAccentProperty>Name</PetModalAccentProperty>
            <PetModalPropertyText>{pet.name}</PetModalPropertyText>
          </PetModalProperty>
          <PetModalProperty>
            <PetModalAccentProperty>Birthday</PetModalAccentProperty>
            <PetModalPropertyText>{pet.birthday}</PetModalPropertyText>
          </PetModalProperty>
          <PetModalProperty>
            <PetModalAccentProperty>Sex</PetModalAccentProperty>
            <PetModalPropertyText>{pet.sex}</PetModalPropertyText>
          </PetModalProperty>
          <PetModalProperty>
            <PetModalAccentProperty>Species</PetModalAccentProperty>
            <PetModalPropertyText>{pet.species}</PetModalPropertyText>
          </PetModalProperty>
        </PetModalPropertyList>
        <PetModalComment>{pet.comment}</PetModalComment>
      </PetModalTextBlock>

      <PetModalBtnsWrap>
        <PetModalBtn>
          Add to
          <Icon name="icon-heart" width={18} height={18} />
        </PetModalBtn>
        <PetModalBtn className="contact">Contact</PetModalBtn>
      </PetModalBtnsWrap>
    </PetModalWrap>
  );
};
