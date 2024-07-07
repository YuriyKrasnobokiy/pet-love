import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { emailRegExp } from "../../../helpers/emailRegExp";
import Icon from "../../Icon/Icon";
import { login } from "../../../redux/auth/authOperations";
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
} from "../RegistrForm/AuthForm.styled";

const LoginSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegExp, "Invalid email").required(),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required(),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({ resolver: yupResolver(LoginSchema), mode: "onChange" });

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (data) => {
    const { email, password } = data;
    dispatch(login({ email, password }));
    reset();
  };

  return (
    <AuthFormWrap>
      <AuthTitle>Login</AuthTitle>
      <AuthDescr>
        Welcome! Please enter your credentials to login to the platform:
      </AuthDescr>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
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
        </AuthInputWrap>

        <AuthBtn type="submit" onSubmit={handleSubmit(handleFormSubmit)}>
          login
        </AuthBtn>
      </form>
      <AuthFormBottomText>
        Don`t have an account?
        <AuthFormBottomLink to="/register">Register</AuthFormBottomLink>
      </AuthFormBottomText>
    </AuthFormWrap>
  );
};
