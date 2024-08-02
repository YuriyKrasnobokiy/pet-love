import React from "react";
import dogLoginImgDesktop from "../../assets/imgs/desctop/login-img-2x-desc.jpg";
import dogLoginImgTablet from "../../assets/imgs/tablet/login-img-2x-tablet.jpg";
import dogLoginImg from "../../assets/imgs/mobile/login-img-2x-mob.jpg";
import { LoginForm } from "../../components/Auth/LoginForm/LoginForm";
import { PetBlock } from "../../components/Auth/PetBlock/PetBlock";
import { useDeviceType } from "../../hooks/useDeviceType";
import { LoginWrap } from "../Login/Login.styled";
import DesrImg from "../../assets/imgs/tablet/login-descr-img-1x-tablet.jpg";

const Login = () => {
  const deviceType = useDeviceType();
  return (
    <LoginWrap className="container-auth">
      <PetBlock
        imageUrl={
          deviceType === "desktop"
            ? dogLoginImgDesktop
            : deviceType === "tablet"
            ? dogLoginImgTablet
            : dogLoginImg
        }
        descrImg={DesrImg}
        descrTitle="Rich"
        descrText="Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"
        descrDate="21.09.2020"
      ></PetBlock>
      <LoginForm />
    </LoginWrap>
  );
};

export default Login;
