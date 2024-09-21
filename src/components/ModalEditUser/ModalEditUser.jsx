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
  InputWrap,
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
import { ErrorMessage } from "../Auth/RegistrForm/AuthForm.styled";

const EditUserSchema = Yup.object().shape({
  name: Yup.string().min(2),
  email: Yup.string().matches(emailRegExp, "Invalid email"),
  phone: Yup.string().matches(phoneRegExp, "Invalid phone"),
  avatar: Yup.string().matches(avatarUrlRegExp, "Invalid URL or file format"),
});

export const ModalEditUser = () => {
  const deviceType = useDeviceType();
  const userData = useSelector(selectProfile);
  const viewed = userData.noticesViewed;
  console.log("viewed: ", viewed);
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
        <UserAvatarThumb $avatarUrl={previewAvatar} $isEditModal>
          {previewAvatar.trim() !== "" &&
          previewAvatar.trim() !== "https://test.png" ? null : (
            // <EditUserImg src={previewAvatar} alt="avatar" />
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

        <AvatarUploadWrap>
          <InputWrap>
            <EditUserAvatarInput
              {...register("avatar")}
              type="avatar"
              placeholder="https://test.png"
            />
            <ErrorMessage className="avatar">
              {errors.avatar?.message}
            </ErrorMessage>
          </InputWrap>
          <AvatarUploadBtn type="button" onClick={handleUploadPhoto}>
            Upload photo
            <Icon name="icon-cloud" width={18} height={18} />
          </AvatarUploadBtn>
        </AvatarUploadWrap>

        <InputsWrap>
          <InputWrap>
            <EditUserInput
              {...register("name")}
              type="text"
              placeholder="Name"
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </InputWrap>
          <InputWrap>
            <EditUserInput
              {...register("email")}
              type="email"
              placeholder="Email"
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </InputWrap>
          <InputWrap>
            <EditUserInput
              {...register("phone")}
              type="text"
              placeholder="phone"
            />
            <ErrorMessage>{errors.phone?.message}</ErrorMessage>
          </InputWrap>
        </InputsWrap>
        <EditUserSubmitBtn type="submit">Save</EditUserSubmitBtn>
      </form>
    </ModalEditUserWrap>
  );
};
