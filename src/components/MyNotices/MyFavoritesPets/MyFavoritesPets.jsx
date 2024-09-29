import React from "react";
import { ResultsNotFound } from "../../ResultsNotFound/ResultsNotFound";
import { useSelector } from "react-redux";
import { selectProfile } from "../../../redux/profile/profileSelectors";
import { NoticesContainer } from "../MyNotices.styled";
import { PetList } from "../../PetList/PetList";

const MyFavoritesPets = () => {
  const userData = useSelector(selectProfile);
  const favorite = userData.noticesFavorites;
  return (
    <>
      <NoticesContainer $isEmpty={!favorite || favorite.length === 0}>
        {favorite && favorite.length > 0 ? (
          <PetList profile={true} pets={favorite} />
        ) : (
          <ResultsNotFound />
        )}
      </NoticesContainer>
    </>
  );
};

export default MyFavoritesPets;
