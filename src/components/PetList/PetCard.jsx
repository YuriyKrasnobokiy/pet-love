import React from "react";
import {
  PetCardAccentProperty,
  PetCardButton,
  PetCardComment,
  PetCardImg,
  PetCardProperty,
  PetCardPropertyList,
  PetCardTextBlock,
  PetCardTitle,
  PetCardWrap,
  PropertyText,
} from "./PetCard.styled";

export const PetCard = ({ pet }) => {
  return (
    <PetCardWrap>
      <div>
        <PetCardImg src={pet.imgURL} alt="pet" />
      </div>

      <PetCardTextBlock>
        <PetCardTitle>{pet.title}</PetCardTitle>

        <PetCardPropertyList>
          <PetCardProperty>
            <PetCardAccentProperty>Name</PetCardAccentProperty>
            <PropertyText>{pet.name}</PropertyText>
          </PetCardProperty>
          <PetCardProperty>
            <PetCardAccentProperty>Birthday</PetCardAccentProperty>
            <PropertyText>{pet.birthday}</PropertyText>
          </PetCardProperty>
          <PetCardProperty>
            <PetCardAccentProperty>Sex</PetCardAccentProperty>
            <PropertyText>{pet.sex}</PropertyText>
          </PetCardProperty>
          <PetCardProperty>
            <PetCardAccentProperty>Species</PetCardAccentProperty>
            <PropertyText>{pet.species}</PropertyText>
          </PetCardProperty>
          <PetCardProperty>
            <PetCardAccentProperty>Category</PetCardAccentProperty>
            <PropertyText>{pet.category}</PropertyText>
          </PetCardProperty>
        </PetCardPropertyList>

        <PetCardComment>{pet.comment}</PetCardComment>
      </PetCardTextBlock>

      <PetCardButton type="button">Learn more</PetCardButton>
    </PetCardWrap>
  );
};
