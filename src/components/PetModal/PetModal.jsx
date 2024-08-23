import React from "react";
import { useSelector } from "react-redux";
import { selectPet } from "../../redux/pets/petsSelectors";
import { CategoryBage } from "./PetModal.styled";

export const PetModal = () => {
  const pet = useSelector(selectPet);

  return (
    <div>
      <div>
        <CategoryBage>{pet.category}</CategoryBage>
        <img src={pet.imgURL} alt="pet" />
      </div>
      <h2 style={{ color: "black" }}>{pet.title} </h2>
    </div>
  );
};
