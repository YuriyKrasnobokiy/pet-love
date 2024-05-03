import React from "react";
import {
  FriendCarWrap,
  FriendDescrListLi,
  FriendDescrText,
  FriendDescrTextAccent,
  FriendTitleStyled,
  ImgThumb,
  WorkHoursBage,
} from "./FriendsCard.styled";

export const FriendsCard = ({ friend }) => {
  const workDays = friend.workDays || [];
  const openDays = workDays.filter((day) => day.isOpen);
  const workHours =
    openDays.length > 0
      ? `${openDays[0].from} - ${openDays[0].to}`
      : "Open day and night";

  return (
    <FriendCarWrap>
      <WorkHoursBage>
        {workDays.length === 0 ? "Day and night" : workHours}
      </WorkHoursBage>
      <ImgThumb>
        <img src={friend.imageUrl} alt="" />
      </ImgThumb>
      <div>
        <FriendTitleStyled>{friend.title}</FriendTitleStyled>
        <ul>
          <FriendDescrListLi>
            <FriendDescrText href={`mailto:${friend.email}`}>
              <FriendDescrTextAccent>Email: </FriendDescrTextAccent>
              {friend.email ? friend.email : "website only"}
            </FriendDescrText>
          </FriendDescrListLi>
          <FriendDescrListLi>
            <FriendDescrText
              href={`https://www.google.com/maps?q=${encodeURIComponent(
                friend.address,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FriendDescrTextAccent>Address: </FriendDescrTextAccent>
              {friend.address ? friend.address : "website only"}
            </FriendDescrText>
          </FriendDescrListLi>
          <FriendDescrListLi>
            <FriendDescrText href={`tel:${friend.phone}`}>
              <FriendDescrTextAccent>Phone: </FriendDescrTextAccent>
              {friend.phone
                ? friend.phone
                : friend.email
                ? "email only"
                : " website only"}
            </FriendDescrText>
          </FriendDescrListLi>
        </ul>
      </div>
    </FriendCarWrap>
  );
};
