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
import { selectIsOpenModal } from "../../../redux/modal/modalSelectors";
import { Modal } from "../../Modal/Modal";
import { PetModal } from "../../PetModal/PetModal";
import { selectIsLoggedIn } from "../../../redux/auth/authSelectors";
import { fetchPetsById } from "../../../redux/pets/petsOperations";

export const PetCard = ({ pet }) => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsOpenModal);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = () => {
    if (isLoggedIn) {
      dispatch(openModal(pet._id));
      dispatch(fetchPetsById({ _id: pet._id }));
    }
    dispatch(openModal());
  };

  return (
    <>
      <PetCardWrap>
        <div>
          <div>
            <PetCardImg src={pet.imgURL} alt="pet" />
          </div>
          <PetCardTextBlock>
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
          <PetCardButton type="button" onClick={handleClick}>
            Learn more
          </PetCardButton>
          <PetCardFavorBtn>
            <Icon name="icon-heart" width={18} height={18} />
          </PetCardFavorBtn>
        </PetCardBtnsWrap>
        {isOpenModal && (
          <Modal>
            <PetModal />
          </Modal>
        )}
      </PetCardWrap>
    </>
  );
};
