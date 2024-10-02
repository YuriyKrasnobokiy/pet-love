import React from "react";
import { PetsList } from "./PetList.styled";
import { PetCard } from "./PetCard/PetCard";

export const PetList = ({ pets, profile, viewed }) => {
  return (
    <>
      <PetsList $profile={profile} $viewed={viewed}>
        {pets.map((pet, index) => (
          <PetCard
            viewed={viewed}
            profile={profile}
            key={`${pet._id} + ${index}`}
            pet={pet}
          />
        ))}
      </PetsList>
    </>
  );
};
