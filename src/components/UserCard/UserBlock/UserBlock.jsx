import React from "react";
import {
  UserAvatarBtn,
  UserAvatarThumb,
  UserAvatarWrap,
  UserBlockWrap,
  UserInfoForm,
  UserInfoFormInput,
  UserInfoFormTitle,
  UserInfoInputsWrap,
} from "./UserBlock.styled";
import Icon from "../../Icon/Icon";
import { useDeviceType } from "../../../hooks/useDeviceType";

export const UserBlock = () => {
  const deviceType = useDeviceType();
  return (
    <UserBlockWrap>
      <UserAvatarWrap>
        <UserAvatarThumb>
          <Icon
            name="icon-user-big"
            width={
              deviceType === "desktop" ? 50 : deviceType === "tablet" ? 50 : 40
            }
            height={
              deviceType === "desktop" ? 50 : deviceType === "tablet" ? 50 : 40
            }
          />
        </UserAvatarThumb>
        <UserAvatarBtn>Upload photo</UserAvatarBtn>
      </UserAvatarWrap>

      <UserInfoForm>
        <UserInfoFormTitle>My information</UserInfoFormTitle>
        <UserInfoInputsWrap>
          <UserInfoFormInput type="text" value="Name" disabled />
          <UserInfoFormInput type="email" value="name@gmail.com" disabled />
          <UserInfoFormInput type="phone" value="+380" disabled />
        </UserInfoInputsWrap>
      </UserInfoForm>
    </UserBlockWrap>
  );
};
