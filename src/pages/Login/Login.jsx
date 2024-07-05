import React from "react";
import dogLoginImg from "../../assets/imgs/mobile/login-img-2x-mob.jpg";
import { PetBlock } from "../../components/Auth/PetBlock/PetBlock";
import { LoginWrap } from "../Login/Login.styled";
import { LoginForm } from "../../components/Auth/LoginForm/LoginForm";

const Login = () => {
  return (
    <LoginWrap className="container">
      <PetBlock imageUrl={dogLoginImg}></PetBlock>
      <LoginForm />
    </LoginWrap>
  );
};

export default Login;
