import React from "react";
import { formatDate } from "../../helpers/dateFunc";

export const NwCard = ({ nw }) => {
  return (
    <li>
      <img src={nw.imgUrl} alt="news" height={190} />
      <h3>{nw.title}</h3>
      <p>{nw.text}</p>
      <p>{formatDate(nw.date)}</p>
      <a href={nw.url} target="_blank" rel="noopener noreferrer">
        read more
      </a>
    </li>
  );
};
