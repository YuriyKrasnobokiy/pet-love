import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { emailRegExp } from "../../../helpers/emailRegExp";
import { registration } from "../../../redux/auth/authOperations";
import Icon from "../../Icon/Icon";
import {
  AuthBtn,
  AuthDescr,
  AuthFormBottomLink,
  AuthFormBottomText,
  AuthFormWrap,
  AuthInput,
  AuthInputIcon,
  AuthInputWrap,
  AuthPasswordBtn,
  AuthTitle,
  ErrorMessage,
} from "./AuthForm.styled";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name must be at least 2 characters").required(),
  email: Yup.string().matches(emailRegExp, "Invalid email").required(),
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
    <AuthFormWrap>
      <AuthTitle>Registration</AuthTitle>
      <AuthDescr>Thank you for your interest in our platform</AuthDescr>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <AuthInputWrap>
          <AuthInput
            placeholder="Name"
            type="text"
            {...register("name")}
            $isValid={!errors.name && watch("name")}
            $isInvalid={errors.name && watch("name")}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          {errors.name && (
            <AuthInputIcon $isPassword={false}>
              <Icon name="icon-cross-small" width="18" height="18" />
            </AuthInputIcon>
          )}
          {!errors.name && watch("name") && (
            <AuthInputIcon $isPassword={false}>
              <Icon name="icon-check" width="18" height="18" />
            </AuthInputIcon>
          )}
        </AuthInputWrap>
        <AuthInputWrap>
          <AuthInput
            {...register("email")}
            type="email"
            placeholder="Email"
            $isValid={!errors.email && watch("email")}
            $isInvalid={errors.email && watch("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          {errors.email && (
            <AuthInputIcon $isPassword={false}>
              <Icon name="icon-cross-small" width="18" height="18" />
            </AuthInputIcon>
          )}
          {!errors.email && watch("email") && (
            <AuthInputIcon $isPassword={false}>
              <Icon name="icon-check" width="18" height="18" />
            </AuthInputIcon>
          )}
        </AuthInputWrap>
        <AuthInputWrap>
          <AuthInput
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="true"
            $isValid={!errors.password && watch("password")}
            $isInvalid={errors.password && watch("password")}
          />
          <AuthPasswordBtn type="button" onClick={handlePasswordClick}>
            <Icon
              height={18}
              width={18}
              name={showPassword ? "icon-eye-off" : "icon-eye"}
            ></Icon>
          </AuthPasswordBtn>
          {errors.password && (
            <AuthInputIcon $isPassword={true}>
              <Icon name="icon-cross-small" width="18" height="18" />
            </AuthInputIcon>
          )}
          {!errors.password && watch("password") && (
            <AuthInputIcon $isPassword={true}>
              <Icon name="icon-check" width="18" height="18" />
            </AuthInputIcon>
          )}
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </AuthInputWrap>
        <AuthInputWrap>
          <AuthInput
            {...register("confirmPassword")}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            autoComplete="true"
            $isValid={!errors.confirmPassword && watch("confirmPassword")}
            $isInvalid={errors.confirmPassword && watch("confirmPassword")}
          />
          <AuthPasswordBtn type="button" onClick={handleConfirmPasswordClick}>
            <Icon
              height={18}
              width={18}
              name={showConfirmPassword ? "icon-eye-off" : "icon-eye"}
            ></Icon>
          </AuthPasswordBtn>
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          {errors.confirmPassword && (
            <AuthInputIcon $isPassword={true}>
              <Icon name="icon-cross-small" width="18" height="18" />
            </AuthInputIcon>
          )}
          {!errors.confirmPassword && watch("confirmPassword") && (
            <AuthInputIcon $isPassword={true}>
              <Icon name="icon-check" width="18" height="18" />
            </AuthInputIcon>
          )}
        </AuthInputWrap>

        <AuthBtn type="submit" onSubmit={handleSubmit(handleFormSubmit)}>
          registration
        </AuthBtn>
      </form>
      <AuthFormBottomText>
        Already have an account?
        <AuthFormBottomLink to="/login">Login</AuthFormBottomLink>
      </AuthFormBottomText>
    </AuthFormWrap>
  );
};
