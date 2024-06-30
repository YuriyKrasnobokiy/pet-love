import React, { useState } from "react";
import {
  ErrorMessage,
  PasswordBtn,
  RegBtn,
  RegDescr,
  RegFormWrap,
  RegInput,
  RegInputWrap,
  RegTitle,
} from "./RegistrForm.styled";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from "../Icon/Icon";

const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name must be at least 2 characters").required(),
  email: Yup.string().matches(emailPattern, "Invalid email").required(),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const RegistrForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordClick = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <RegFormWrap>
      <RegTitle>Registration</RegTitle>
      <RegDescr>Thank you for your interest in our platform</RegDescr>
      <form>
        <RegInputWrap>
          <RegInput {...register("name")} type="text" placeholder="Name" />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </RegInputWrap>
        <RegInputWrap>
          <RegInput {...register("email")} type="email" placeholder="Email" />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </RegInputWrap>
        <RegInputWrap>
          <RegInput
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="true"
          />
          <PasswordBtn type="button" onClick={handlePasswordClick}>
            <Icon
              height={18}
              width={18}
              name={showPassword ? "icon-eye-off" : "icon-eye"}
            ></Icon>
          </PasswordBtn>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </RegInputWrap>
        <RegInputWrap>
          <RegInput
            {...register("confirmPassword")}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            autoComplete="true"
          />
          <PasswordBtn type="button" onClick={handleConfirmPasswordClick}>
            <Icon
              height={18}
              width={18}
              name={showConfirmPassword ? "icon-eye-off" : "icon-eye"}
            ></Icon>
          </PasswordBtn>
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        </RegInputWrap>

        <RegBtn
          type="submit"
          onClick={handleSubmit((data) => console.log(data))}
        >
          registration
        </RegBtn>
      </form>
    </RegFormWrap>
  );
};
