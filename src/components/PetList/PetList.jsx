import React from "react";
import { PetsList } from "./PetList.styled";
import { PetCard } from "./PetCard/PetCard";

export const PetList = ({ pets, profile }) => {
  return (
    <>
      <PetsList $profile={profile}>
        {pets.map((pet, index) => (
          <PetCard profile={profile} key={`${pet._id} + ${index}`} pet={pet} />
        ))}
      </PetsList>
    </>
  );
};
