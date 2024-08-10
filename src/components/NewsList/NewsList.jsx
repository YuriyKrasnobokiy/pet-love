import React from "react";
import { NwCard } from "../../components/NwCard/NwCard";
import { NewsListStyled } from "./NewsList.styled";

export const NewsList = ({ news }) => {
  return (
    <NewsListStyled>
      {news.map((nw) => (
        <NwCard nw={nw} key={nw._id} />
      ))}
    </NewsListStyled>
  );
};
