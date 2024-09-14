import React, { useEffect, useState } from "react";
import {
  NotFoundAccentText,
  NotFoundTitle,
  ResNotFoundImg,
  ResNotFoundWrap,
} from "./ResultsNotFound.styled";
import DogImg from "../../assets/attention.png";
import { useLocation } from "react-router-dom";

export const ResultsNotFound = () => {
  const [isProfile, setIsProfile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/profile":
        setIsProfile(true);
        break;

      case "/profile/favorites":
        setIsProfile(true);
        break;

      case "/profile/viewed":
        setIsProfile(true);
        break;

      default:
        setIsProfile(false);
        break;
    }
  }, [location.pathname]);

  return (
    <ResNotFoundWrap $isProfile={isProfile}>
      {isProfile ? null : <ResNotFoundImg src={DogImg} alt="dog" />}
      <NotFoundTitle>
        Oops, it looks like
        <NotFoundAccentText>
          {" "}
          there aren't any furry results{" "}
        </NotFoundAccentText>
        on our adorable page.{" "}
        {isProfile
          ? 'Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.'
          : `Don't worry! Please try selecting a different
        filter or adjust your filtering settings.`}
      </NotFoundTitle>
    </ResNotFoundWrap>
  );
};
