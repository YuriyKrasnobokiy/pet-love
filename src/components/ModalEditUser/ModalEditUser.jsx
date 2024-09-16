import React from "react";
import { EditUserTitle, ModalEditUserWrap } from "./ModalEditUser.styled";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(EditUserSchema), mode: "onChange" });

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

  return (
    <ModalEditUserWrap>
      <EditUserTitle>Edit information</EditUserTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <UserAvatarThumb $isEditModal>
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
        <div>
          <input
            {...register("avatar")}
            type="avatar"
            placeholder="Avatar URL"
          />
          <p>{errors.avatar?.message}</p>
        </div>
        <div>
          <input {...register("name")} type="text" placeholder="Name" />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input {...register("email")} type="email" placeholder="Email" />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input {...register("phone")} type="text" placeholder="phone" />
          <p>{errors.phone?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </ModalEditUserWrap>
  );
};
