import React from "react";
import {
  UserAvatarBtn,
  UserAvatarThumb,
  UserAvatarWrap,
  UserBlockWrap,
  UserInfoForm,
  UserInfoFormInput,
  UserInfoFormTitle,
} from "./UserBlock.styled";
import Icon from "../../Icon/Icon";

export const UserBlock = () => {
  return (
    <UserBlockWrap>
      <UserAvatarWrap>
        <UserAvatarThumb>
          <Icon name="icon-user-big" width={40} height={40}></Icon>
        </UserAvatarThumb>
        <UserAvatarBtn>Upload photo</UserAvatarBtn>
      </UserAvatarWrap>

      <UserInfoForm>
        <UserInfoFormTitle>My information</UserInfoFormTitle>
        <UserInfoFormInput type="text" value="Name" disabled />
        <UserInfoFormInput type="email" value="name@gmail.com" disabled />
        <UserInfoFormInput type="phone" value="+380" disabled />
      </UserInfoForm>
    </UserBlockWrap>
  );
};
