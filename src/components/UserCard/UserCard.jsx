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
import { useDispatch } from "react-redux";
import { openModalEditUser } from "../../redux/modal/modalSlice";

export const UserCard = () => {
  const dispatch = useDispatch();
  return (
    <UserCardWrap>
      <UserCardBageWrap>
        <UserBage>
          User
          <Icon name="icon-user" width={18} height={18}></Icon>
        </UserBage>

        <UserCardEditBtn onClick={() => dispatch(openModalEditUser())}>
          <Icon name="icon-edit" width={18} height={18}></Icon>
        </UserCardEditBtn>
      </UserCardBageWrap>

      <UserBlock />

      <PetsBlock />
    </UserCardWrap>
  );
};
