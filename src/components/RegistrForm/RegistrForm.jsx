import React, { useState } from "react";
import {
  ErrorMessage,
  FormBottomLink,
  FormBottomText,
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
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/authOperations";

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
    watch,
    reset,
  } = useForm({ resolver: yupResolver(RegisterSchema), mode: "onChange" });

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordClick = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFormSubmit = (data) => {
    const { name, email, password } = data;
    dispatch(registration({ name, email, password }));
    reset();
  };

  return (
    <RegFormWrap>
      <RegTitle>Registration</RegTitle>
      <RegDescr>Thank you for your interest in our platform</RegDescr>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <RegInputWrap>
          <RegInput
            placeholder="Name"
            type="text"
            {...register("name")}
            $isValid={!errors.name && watch("name")}
            $isInvalid={errors.name && watch("name")}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </RegInputWrap>
        <RegInputWrap>
          <RegInput
            {...register("email")}
            type="email"
            placeholder="Email"
            $isValid={!errors.email && watch("email")}
            $isInvalid={errors.email && watch("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </RegInputWrap>
        <RegInputWrap>
          <RegInput
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="true"
            $isValid={!errors.password && watch("password")}
            $isInvalid={errors.password && watch("password")}
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
            $isValid={!errors.confirmPassword && watch("confirmPassword")}
            $isInvalid={errors.confirmPassword && watch("confirmPassword")}
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

        <RegBtn type="submit" onSubmit={handleSubmit(handleFormSubmit)}>
          registration
        </RegBtn>
      </form>
      <FormBottomText>
        Already have an account?
        <FormBottomLink to="/login">Login</FormBottomLink>
      </FormBottomText>
    </RegFormWrap>
  );
};
