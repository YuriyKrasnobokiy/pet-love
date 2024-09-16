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
import { useSelector } from "react-redux";
import { selectProfile } from "../../../redux/profile/profileSelectors";

export const UserBlock = () => {
  const deviceType = useDeviceType();
  const userData = useSelector(selectProfile);
  console.log("userData: ", userData);
  return (
    <UserBlockWrap>
      <UserAvatarWrap>
        <UserAvatarThumb>
          {userData && userData.avatar && userData.avatar.trim() !== "" ? (
            <img src={userData.avatar} alt="avatar" />
          ) : (
            <Icon
              name="icon-user-big"
              width={
                deviceType === "desktop"
                  ? 50
                  : deviceType === "tablet"
                  ? 50
                  : 40
              }
              height={
                deviceType === "desktop"
                  ? 50
                  : deviceType === "tablet"
                  ? 50
                  : 40
              }
            />
          )}
        </UserAvatarThumb>
        {userData.avatar && userData.avatar.trim() !== "" ? null : (
          <UserAvatarBtn>Upload photo</UserAvatarBtn>
        )}
      </UserAvatarWrap>

      <UserInfoForm>
        <UserInfoFormTitle>My information</UserInfoFormTitle>
        <UserInfoInputsWrap>
          <UserInfoFormInput
            type="text"
            value={
              userData && userData.name && userData.name.trim() !== ""
                ? userData.name
                : "Name"
            }
            disabled
          />
          <UserInfoFormInput
            type="email"
            value={
              userData && userData.email && userData.email.trim() !== ""
                ? userData.email
                : "name@gmail.com"
            }
            disabled
          />
          <UserInfoFormInput
            type="phone"
            value={
              userData && userData.phone && userData.phone.trim() !== ""
                ? userData.phone
                : "+380"
            }
            disabled
          />
        </UserInfoInputsWrap>
      </UserInfoForm>
    </UserBlockWrap>
  );
};
