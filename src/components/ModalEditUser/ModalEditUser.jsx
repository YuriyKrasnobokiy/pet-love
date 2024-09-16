import React, { useState } from "react";
import {
  AvatarUploadBtn,
  AvatarUploadWrap,
  EditUserAvatarInput,
  EditUserImg,
  EditUserInput,
  EditUserSubmitBtn,
  EditUserTitle,
  InputsWrap,
  ModalEditUserWrap,
} from "./ModalEditUser.styled";
import { UserAvatarThumb } from "../UserCard/UserBlock/UserBlock.styled";
import Icon from "../Icon/Icon";
import { useDeviceType } from "../../hooks/useDeviceType";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile } from "../../redux/profile/profileSelectors";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { emailRegExp } from "../../helpers/emailRegExp";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfile } from "../../redux/profile/profileSlice";
import { closeModal } from "../../redux/modal/modalSlice";
import { phoneRegExp } from "../../helpers/phoneRegExp";
import { avatarUrlRegExp } from "../../helpers/avatarUrlRegExp";

const EditUserSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().matches(emailRegExp, "Invalid email"),
  phone: Yup.string().matches(phoneRegExp, "Invalid phone"),
  avatar: Yup.string().matches(avatarUrlRegExp, "Invalid URL or file format"),
});

export const ModalEditUser = () => {
  const deviceType = useDeviceType();
  const userData = useSelector(selectProfile);
  const dispatch = useDispatch();

  const [previewAvatar, setPreviewAvatar] = useState(userData.avatar || "");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(EditUserSchema),
    mode: "onChange",
    defaultValues: {
      name: userData.name || "Name",
      email: userData.email || "name@gmail.com",
      phone: userData.phone || "",
      avatar: userData.avatar || "",
    },
  });

  const handleFormSubmit = (data) => {
    const { name, email, phone, avatar } = data;

    try {
      dispatch(updateProfile({ name, email, phone, avatar }));
      reset();
      dispatch(closeModal());
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUploadPhoto = () => {
    const avatarUrl = watch("avatar");
    if (avatarUrl && avatarUrl.trim() !== "") {
      setPreviewAvatar(avatarUrl);
    }
  };

  return (
    <ModalEditUserWrap>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <EditUserTitle>Edit information</EditUserTitle>
        {previewAvatar.trim() !== "" ? (
          <EditUserImg src={previewAvatar} alt="avatar" />
        ) : (
          <UserAvatarThumb $isEditModal>
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
          </UserAvatarThumb>
        )}
        <InputsWrap>
          <AvatarUploadWrap>
            <div>
              <EditUserAvatarInput
                {...register("avatar")}
                type="avatar"
                placeholder="https://test.png"
              />
              <p>{errors.avatar?.message}</p>
            </div>
            <AvatarUploadBtn type="button" onClick={handleUploadPhoto}>
              Upload photo
            </AvatarUploadBtn>
          </AvatarUploadWrap>

          <div>
            <EditUserInput
              {...register("name")}
              type="text"
              placeholder="Name"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <EditUserInput
              {...register("email")}
              type="email"
              placeholder="Email"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <EditUserInput
              {...register("phone")}
              type="text"
              placeholder="phone"
            />
            <p>{errors.phone?.message}</p>
          </div>
        </InputsWrap>
        <EditUserSubmitBtn type="submit">Go to profile</EditUserSubmitBtn>
      </form>
    </ModalEditUserWrap>
  );
};
