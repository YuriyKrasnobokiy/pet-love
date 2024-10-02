import React, { useEffect } from "react";
import { ResultsNotFound } from "../../ResultsNotFound/ResultsNotFound";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile } from "../../../redux/profile/profileSelectors";
import { NoticesContainer } from "../MyNotices.styled";
import { PetList } from "../../PetList/PetList";
import { fetchProfile } from "../../../redux/profile/profileSlice";

const MyFavoritesPets = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectProfile);
  const favorite = userData.noticesFavorites;

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch, favorite]);

  return (
    <>
      <NoticesContainer $isEmpty={!favorite || favorite.length === 0}>
        {favorite && favorite.length > 0 ? (
          <PetList viewed={false} profile={true} pets={favorite} />
        ) : (
          <ResultsNotFound />
        )}
      </NoticesContainer>
    </>
  );
};

export default MyFavoritesPets;
