import React from "react";
import { LoginWrap } from "./Login.styled";
import { PetBlock } from "../../components/RegistrForm/PetBlock";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import dogLoginImg from "../../assets/imgs/mobile/login-img-2x-mob.jpg";

const Login = () => {
  return (
    <LoginWrap className="container">
      <PetBlock imageUrl={dogLoginImg}></PetBlock>
      <LoginForm />
    </LoginWrap>
  );
};

export default Login;
