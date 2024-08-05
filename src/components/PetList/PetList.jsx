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

export const PetList = () => {
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log("pets: ", pets);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ul>
            {pets.map((pet) => (
              <PetCard key={pet._id} pet={pet} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
