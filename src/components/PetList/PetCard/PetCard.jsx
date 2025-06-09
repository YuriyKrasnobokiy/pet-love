import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/authSelectors";
import { openModal } from "../../../redux/modal/modalSlice";
import {
  fetchPetsById,
} from "../../../redux/pets/petsOperations";
import Icon from "../../Icon/Icon";
import {
  PetCardAccentProperty,
  PetCardBtnsWrap,
  PetCardButton,
  PetCardComment,
  PetCardDeleteBtn,
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
import { addToFavorites, deleteFromFavorites } from "../../../redux/profile/profileSlice";

export const PetCard = ({ pet, profile, viewed }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
    }
    dispatch(addToFavorites({ _id: pet._id }));
  };

  const handleDeletePet = async () => {
    if (!isLoggedIn) {
      dispatch(openModal());
      return;
    }
    try {
      await dispatch(deleteFromFavorites({ _id: pet._id })).unwrap();
      // await dispatch(deleteFromFavorites({ _id: pet._id })).unwrap();
      // dispatch(fetchProfile());
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  return (
    <>
      <PetCardWrap $viewed={viewed} $profile={profile}>
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
          <PetCardButton
            $viewed={viewed}
            $profile={profile}
            type="button"
            onClick={handleClick}
          >
            Learn more
          </PetCardButton>
          <PetCardFavorBtn onClick={handleAddToFavorites} $profile={profile}>
            <Icon name="icon-heart" width={18} height={18} />
          </PetCardFavorBtn>
          <PetCardDeleteBtn
            $viewed={viewed}
            onClick={handleDeletePet}
            $profile={profile}
          >
            <Icon name="icon-trash" width={18} height={18} />
          </PetCardDeleteBtn>
        </PetCardBtnsWrap>
      </PetCardWrap>
    </>
  );
};
