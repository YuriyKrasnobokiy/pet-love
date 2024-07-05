import React from "react";
import catRegImg from "../../assets/imgs/mobile/registr-img-2x-mob.jpg";
import { PetBlock } from "../../components/Auth/PetBlock/PetBlock";
import { RegistrWrap } from "./Registration.styled";
import { RegistrForm } from "../../components/Auth/RegistrForm/RegistrForm";
const Registration = () => {
  return (
    <RegistrWrap className="container">
      <PetBlock imageUrl={catRegImg}></PetBlock>
      <RegistrForm />
    </RegistrWrap>
  );
};

export default Registration;
