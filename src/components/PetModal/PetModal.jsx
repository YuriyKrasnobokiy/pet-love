import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import {
  selectIsLoading,
  selectPet,
  selectError,
} from "../../redux/pets/petsSelectors";
import Icon from "../Icon/Icon";
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
import AttentionImg from "../../assets/attention.png";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../../redux/modal/modalSlice";

export const PetModal = () => {
  const pet = useSelector(selectPet);
  const stars = Array(5).fill("icon-star");
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    console.log("ADDED!");
  };
  const handleContactClick = () => {
    console.log("We will send you contact information soon...loading...");
  };
  const handleLoginClick = () => {
    navigate("/login");
    dispatch(closeModal());
  };
  const handleRegisterClick = () => {
    navigate("/register");
    dispatch(closeModal());
  };

  return (
    !isLoading &&
    !isError && (
      <PetModalWrap $isLoggedIn={isLoggedIn}>
        <PetModalImgWrap $isLoggedIn={isLoggedIn}>
          {isLoggedIn && <CategoryBage>{pet.category}</CategoryBage>}
          <PetModalImg
            $isLoggedIn={isLoggedIn}
            src={isLoggedIn ? pet.imgURL : AttentionImg}
            alt="dog"
          />
        </PetModalImgWrap>

        <PetModalTextBlock $isLoggedIn={isLoggedIn}>
          <PetModalTitle $isLoggedIn={isLoggedIn}>
            {isLoggedIn ? pet.title : "Attention"}
          </PetModalTitle>

          {isLoggedIn && (
            <>
              <PetModalPopularityWrap>
                <PetModalPopularityList>
                  {stars.map((star, index) => (
                    <PetModalPopularityItem key={index}>
                      <Icon name={star} width="16" height="16" />
                    </PetModalPopularityItem>
                  ))}
                </PetModalPopularityList>
                <PetModalPopularityNumber>
                  {pet.popularity}
                </PetModalPopularityNumber>
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
            </>
          )}

          <PetModalComment>
            {isLoggedIn
              ? pet.comment
              : "We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}
          </PetModalComment>
        </PetModalTextBlock>

        <PetModalBtnsWrap $isLoggedIn={isLoggedIn}>
          <PetModalBtn
            onClick={isLoggedIn ? handleAddToFavorites : handleLoginClick}
            $isLoggedIn={isLoggedIn}
          >
            {isLoggedIn ? (
              <>
                Add to
                <Icon name="icon-heart" width={18} height={18} />
              </>
            ) : (
              "Login"
            )}
          </PetModalBtn>
          <PetModalBtn
            onClick={isLoggedIn ? handleContactClick : handleRegisterClick}
            $isLoggedIn={isLoggedIn}
            className="contact"
          >
            {isLoggedIn ? "Contact" : "Register"}
          </PetModalBtn>
        </PetModalBtnsWrap>
      </PetModalWrap>
    )
  );
};
