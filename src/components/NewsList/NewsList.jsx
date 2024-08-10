import React from "react";
import { NewsListStyled } from "./NewsList.styled";
import { NwCard } from "./NwCard/NwCard";

export const NewsList = ({ news }) => {
  return (
    <NewsListStyled>
      {news.map((nw) => (
        <NwCard nw={nw} key={nw._id} />
      ))}
    </NewsListStyled>
  );
};
