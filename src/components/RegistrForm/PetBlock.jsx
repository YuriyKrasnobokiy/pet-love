import React from "react";
import { ImgBox } from "./PetBlock.styled";

export const PetBlock = ({ imageUrl }) => {
  return <ImgBox $imageUrl={imageUrl} />;
};
