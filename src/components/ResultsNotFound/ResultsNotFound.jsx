import React from "react";
import { NotFoundAccentText, NotFoundTitle } from "./ResultsNotFound.styled";

export const ResultsNotFound = () => {
  return (
    <>
      <NotFoundTitle>
        Oops, it looks like
        <NotFoundAccentText>
          {" "}
          there aren't any furry results{" "}
        </NotFoundAccentText>
        on our adorable page. Don't worry! Please try selecting a different
        filter or adjust your filtering settings.
      </NotFoundTitle>
    </>
  );
};
