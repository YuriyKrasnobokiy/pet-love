import React from "react";
import {
  NotFoundAccentText,
  NotFoundTitle,
  ResNotFoundImg,
  ResNotFoundWrap,
} from "./ResultsNotFound.styled";
import DogImg from "../../assets/attention.png";

export const ResultsNotFound = () => {
  return (
    <ResNotFoundWrap>
      <ResNotFoundImg src={DogImg} alt="dog" />
      <NotFoundTitle>
        Oops, it looks like
        <NotFoundAccentText>
          {" "}
          there aren't any furry results{" "}
        </NotFoundAccentText>
        on our adorable page. Don't worry! Please try selecting a different
        filter or adjust your filtering settings.
      </NotFoundTitle>
    </ResNotFoundWrap>
  );
};
