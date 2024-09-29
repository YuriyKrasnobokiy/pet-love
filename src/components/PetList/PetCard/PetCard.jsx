import React from "react";
import {
  PetCardAccentProperty,
  PetCardBtnsWrap,
  PetCardButton,
  PetCardComment,
  PetCardFavorBtn,
  PetCardImg,
  PetCardPopularNumber,
  PetCardPopularWrap,
  PetCardProperty,
  PetCardPropertyList,
  PetCardTextBlock,
  PetCardTitle,
  PetCardTitleBlock,
  PetCardWrap,
  PropertyText,
} from "./PetCard.styled";
import Icon from "../../Icon/Icon";
import { openModal } from "../../../redux/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
} from "../../../redux/auth/authSelectors";
import {
  addToFavorites,
  fetchPetsById,
} from "../../../redux/pets/petsOperations";
import { toast } from "react-toastify";

export const PetCard = ({ pet, profile }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUser);
  const favorites = userData.noticesFavorites;

  const handleClick = () => {
    if (isLoggedIn) {
      dispatch(openModal());
      dispatch(fetchPetsById({ _id: pet._id }));
    }
    dispatch(openModal());
  };

  const handleAddToFavorites = () => {
    if (!isLoggedIn) {
      dispatch(openModal());
    } else if (favorites.includes(pet._id)) {
      toast.error("This pet has already been added to favorites");
      return;
    } else {
      dispatch(addToFavorites({ _id: pet._id }));
    }
  };

  return (
    <>
      <PetCardWrap $profile={profile}>
        <div>
          <div>
            <PetCardImg $profile={profile} src={pet.imgURL} alt="pet" />
          </div>
          <PetCardTextBlock $profile={profile}>
            <PetCardTitleBlock>
              <PetCardTitle>{pet.title}</PetCardTitle>
              <PetCardPopularWrap>
                <Icon name="icon-star" width={16} height={16} />
                <PetCardPopularNumber>{pet.popularity}</PetCardPopularNumber>
              </PetCardPopularWrap>
            </PetCardTitleBlock>

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
        </div>

        <PetCardBtnsWrap>
          <PetCardButton $profile={profile} type="button" onClick={handleClick}>
            Learn more
          </PetCardButton>
          <PetCardFavorBtn onClick={handleAddToFavorites} $profile={profile}>
            <Icon name="icon-heart" width={18} height={18} />
          </PetCardFavorBtn>
        </PetCardBtnsWrap>
      </PetCardWrap>
    </>
  );
};
