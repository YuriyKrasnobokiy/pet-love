import React, { useEffect } from "react";
import { PetList } from "../../components/PetList/PetList";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  selectError,
  selectGenders,
  selectPage,
  selectPerPage,
  selectPets,
  selectSpecies,
  selectTotalPages,
} from "../../redux/pets/petsSelectors";
import { selectIsLoading } from "../../redux/pets/petsSelectors";
import {
  fetchCategories,
  fetchGenders,
  fetchPets,
  // fetchPetsById,
  fetchSpecies,
  setPage,
} from "../../redux/pets/petsSlice";
import Loader from "../../components/Loader/Loader";
import { PetsHeaderWrap, PetsTitle, PetsWrap } from "./FindPet.styled";
import { Filters } from "../../components/Filters/Filters";
// import { selectModalData } from "../../redux/modal/modalSelectors";

const FindPet = () => {
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const totalPages = useSelector(selectTotalPages);
  const genders = useSelector(selectGenders);
  const categories = useSelector(selectCategories);
  const species = useSelector(selectSpecies);
  // const petId = useSelector(selectModalData);

  useEffect(() => {
    dispatch(fetchGenders());
    dispatch(fetchCategories());
    dispatch(fetchSpecies());
    // dispatch(fetchPetsById({ id: petId }));
    dispatch(fetchPets({ page: currentPage, limit: perPage }));
  }, [dispatch, currentPage, perPage]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    dispatch(fetchPets({ page: newPage, limit: perPage }));
  };

  return isLoading ? (
    <Loader />
  ) : error ? null : (
    <PetsWrap className="container">
      <PetsHeaderWrap>
        <PetsTitle className="title">Find your favorite pet</PetsTitle>
      </PetsHeaderWrap>
      <Filters genders={genders} categories={categories} species={species} />
      <PetList pets={pets} />
      {totalPages > 1 ? (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : null}
    </PetsWrap>
  );
};
export default FindPet;
