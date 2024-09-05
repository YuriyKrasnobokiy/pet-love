import React from "react";
import {
  PetModalPopularityAccentItem,
  PetModalPopularityItem,
  PetModalPopularityList,
} from "../PetModal/PetModal.styled";
import Icon from "../Icon/Icon";

export const PetStars = ({ popularity }) => {
  const oneStar = 500;
  const totalStars = 5;
  const startsToShow =
    popularity < 500
      ? 1
      : Math.min(Math.round(popularity / oneStar), totalStars);
  console.log("startsToShow: ", startsToShow);
  let stars = [];
  for (let i = 0; i < startsToShow; i++) {
    stars.push(
      <PetModalPopularityAccentItem key={i}>
        <Icon name="icon-star" width="16" height="16" />
      </PetModalPopularityAccentItem>,
    );
  }

  for (let i = startsToShow; i < totalStars; i++) {
    stars.push(
      <PetModalPopularityItem key={i}>
        <Icon name="icon-star" width="16" height="16" />
      </PetModalPopularityItem>,
    );
  }

  console.log("stars: ", stars);

  return <PetModalPopularityList>{stars}</PetModalPopularityList>;
};
