import React from "react";
import { ResultsNotFound } from "../../ResultsNotFound/ResultsNotFound";
import { useSelector } from "react-redux";
import { selectProfile } from "../../../redux/profile/profileSelectors";
import { NoticesContainer } from "../MyNotices.styled";
import { PetList } from "../../PetList/PetList";

const Viewed = () => {
  const userData = useSelector(selectProfile);
  const viewed = userData.noticesViewed;
  return (
    <>
      <NoticesContainer $isEmpty={!viewed || viewed.length === 0}>
        {viewed && viewed.length > 0 ? (
          <PetList profile={true} pets={viewed} />
        ) : (
          <ResultsNotFound />
        )}
      </NoticesContainer>
    </>
  );
};

export default Viewed;
