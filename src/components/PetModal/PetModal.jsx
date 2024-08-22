import React from "react";
import { selectModalData } from "../../redux/modal/modalSelectors";
import { useSelector } from "react-redux";
import { selectPets } from "../../redux/pets/petsSelectors";

export const PetModal = () => {
  const petId = useSelector(selectModalData);
  // const pets = useSelector(selectPets);
  // const pet = pets.find((pet) => pet._id === petId);
  // const pet = useSelector(selectPet);

  return (
    <div>
      <h3>{petId}</h3>
      {/* <p>{pet.name}</p> */}
    </div>
  );
};
