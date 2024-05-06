import React from "react";
import { formatDate } from "../../helpers/dateFunc";
import {
  NwCardBottomWrap,
  NwCardDate,
  NwCardReadMore,
  NwCardText,
  NwCardTitle,
  NwImgStyled,
} from "./NwCard.styled";

export const NwCard = ({ nw }) => {
  return (
    <li>
      <NwImgStyled src={nw.imgUrl} alt="news" height={190} />
      <NwCardTitle>{nw.title}</NwCardTitle>
      <NwCardText>{nw.text}</NwCardText>
      <NwCardBottomWrap>
        <NwCardDate>{formatDate(nw.date)}</NwCardDate>
        <NwCardReadMore href={nw.url} target="_blank" rel="noopener noreferrer">
          read more
        </NwCardReadMore>
      </NwCardBottomWrap>
    </li>
  );
};
