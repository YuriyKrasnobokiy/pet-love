import React from "react";
import { RegistrWrap, CatImgThumb } from "./Registration.styled";
import { RegistrForm } from "../../components/RegistrForm/RegistrForm";

const Registration = () => {
  return (
    <RegistrWrap className="container">
      <CatImgThumb></CatImgThumb>
      <RegistrForm />
    </RegistrWrap>
  );
};

export default Registration;
