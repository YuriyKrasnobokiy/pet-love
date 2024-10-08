import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { emailRegExp } from "../../../helpers/emailRegExp";
import { login } from "../../../redux/auth/authOperations";
import FormIcon from "../FormIcon";
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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };

  // Since it is necessary to wait for a response from the backend, and then redirect to the user profile, we perform
  const handleFormSubmit = async (data) => {
    const { email, password } = data;
    try {
      await dispatch(login({ email, password })).unwrap();
      reset();
      navigate("/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AuthFormWrap $login="true">
      <AuthTitle>Login</AuthTitle>
      <AuthDescr>
        Welcome! Please enter your credentials to login to the platform:
      </AuthDescr>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <AuthInputWrap $login="true">
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
              <FormIcon name="icon-cross-small" />
            </AuthInputIcon>
          )}
          {!errors.email && watch("email") && (
            <AuthInputIcon $isPassword={false}>
              <FormIcon name="icon-check" />
            </AuthInputIcon>
          )}
        </AuthInputWrap>
        <AuthInputWrap $login="true">
          <AuthInput
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="true"
            $isValid={!errors.password && watch("password")}
            $isInvalid={errors.password && watch("password")}
          />
          <AuthPasswordBtn type="button" onClick={handlePasswordClick}>
            <FormIcon name={showPassword ? "icon-eye-off" : "icon-eye"} />
          </AuthPasswordBtn>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          {errors.password && (
            <AuthInputIcon $isPassword={true}>
              <FormIcon name="icon-cross-small" />
            </AuthInputIcon>
          )}
          {!errors.password && watch("password") && (
            <AuthInputIcon $isPassword={true}>
              <FormIcon name="icon-check" />
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
