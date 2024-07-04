import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { emailRegExp } from "../../helpers/emailRegExp";
import {
  ErrorMessage,
  FormBottomLink,
  FormBottomText,
  LoginBtn,
  LoginDescr,
  LoginFormWrap,
  LoginInput,
  LoginInputWrap,
  LoginTitle,
  PasswordBtn,
} from "./LoginForm.styled";
import Icon from "../Icon/Icon";
import { login } from "../../redux/auth/authOperations";

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
    <LoginFormWrap>
      <LoginTitle>Login</LoginTitle>
      <LoginDescr>
        Welcome! Please enter your credentials to login to the platform:
      </LoginDescr>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <LoginInputWrap>
          <LoginInput
            {...register("email")}
            type="email"
            placeholder="Email"
            $isValid={!errors.email && watch("email")}
            $isInvalid={errors.email && watch("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </LoginInputWrap>
        <LoginInputWrap>
          <LoginInput
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
        </LoginInputWrap>

        <LoginBtn type="submit" onSubmit={handleSubmit(handleFormSubmit)}>
          login
        </LoginBtn>
      </form>
      <FormBottomText>
        Don`t have an account?
        <FormBottomLink to="/register">Register</FormBottomLink>
      </FormBottomText>
    </LoginFormWrap>
  );
};
