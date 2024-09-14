import React from "react";
import {
  UserBage,
  UserCardBageWrap,
  UserCardEditBtn,
  UserCardWrap,
} from "./UserCard.styled";
import Icon from "../Icon/Icon";
import { UserBlock } from "./UserBlock/UserBlock";
import { PetsBlock } from "./PetsBlock/PetsBlock";

export const UserCard = () => {
  return (
    <UserCardWrap>
      <UserCardBageWrap>
        <UserBage>
          User
          <Icon name="icon-user" width={18} height={18}></Icon>
        </UserBage>

        <UserCardEditBtn>
          <Icon name="icon-edit" width={18} height={18}></Icon>
        </UserCardEditBtn>
      </UserCardBageWrap>

      <UserBlock />

      <PetsBlock />
    </UserCardWrap>
  );
};
