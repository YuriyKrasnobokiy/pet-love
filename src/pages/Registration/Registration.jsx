import React from "react";
import catRegImg from "../../assets/imgs/mobile/registr-img-2x-mob.jpg";
import { PetBlock } from "../../components/Auth/PetBlock/PetBlock";
import { RegistrWrap } from "./Registration.styled";
import { RegistrForm } from "../../components/Auth/RegistrForm/RegistrForm";
import DesrImg from "../../assets/imgs/tablet/register-descr-img-2x-tablet.jpg";

const Registration = () => {
  return (
    <RegistrWrap className="container">
      <PetBlock
        imageUrl={catRegImg}
        descrImg={DesrImg}
        descrTitle="Jack"
        descrText="Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
        descrDate="18.10.2021"
      ></PetBlock>
      <RegistrForm />
    </RegistrWrap>
  );
};

export default Registration;
