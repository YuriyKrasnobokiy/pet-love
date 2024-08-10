import React from "react";
import { PetCard } from "./PetCard";
import { PetsList } from "./PetList.styled";

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
