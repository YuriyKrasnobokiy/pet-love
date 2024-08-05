import React, { useEffect } from "react";
import { PetCard } from "./PetCard";
import { fetchPets } from "../../redux/pets/petsSlice";
import {
  selectError,
  selectIsLoading,
  selectPets,
} from "../../redux/pets/petsSelectors";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { PetsList } from "./PetList.styled";

export const PetList = () => {
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <PetsList>
          {pets.map((pet) => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </PetsList>
      )}
    </>
  );
};
