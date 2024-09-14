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
import { selectUser } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";

export const UserBlock = () => {
  const deviceType = useDeviceType();
  const userData = useSelector(selectUser);
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
          <UserInfoFormInput
            type="text"
            value={userData ? userData.name : "Name"}
            disabled
          />
          <UserInfoFormInput
            type="email"
            value={userData ? userData.email : "name@gmail.com"}
            disabled
          />
          <UserInfoFormInput type="phone" value="+380" disabled />
        </UserInfoInputsWrap>
      </UserInfoForm>
    </UserBlockWrap>
  );
};
