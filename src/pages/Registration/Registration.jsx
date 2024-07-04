import React from "react";
import { RegistrWrap } from "./Registration.styled";
import { RegistrForm } from "../../components/RegistrForm/RegistrForm";
import { PetBlock } from "../../components/RegistrForm/PetBlock";
import catRegImg from "../../assets/imgs/mobile/registr-img-2x-mob.jpg";

const Registration = () => {
  return (
    <RegistrWrap className="container">
      <PetBlock imageUrl={catRegImg}></PetBlock>
      <RegistrForm />
    </RegistrWrap>
  );
};

export default Registration;
