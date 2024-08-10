import React from "react";
import { PetsList } from "./PetList.styled";
import { PetCard } from "./PetCard/PetCard";

export const PetList = ({ pets }) => {
  return (
    <>
      <PetsList>
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </PetsList>
    </>
  );
};
