import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filters } from "../../components/Filters/Filters";
import Loader from "../../components/Loader/Loader";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import { PetList } from "../../components/PetList/PetList";
import {
  selectCategories,
  selectError,
  selectFilterTerm,
  selectGenders,
  selectIsLoading,
  selectPage,
  selectPerPage,
  selectPets,
  selectSpecies,
  selectTotalPages,
} from "../../redux/pets/petsSelectors";

import { PetsHeaderWrap, PetsTitle, PetsWrap } from "./FindPet.styled";
import {
  fetchCategories,
  fetchGenders,
  fetchPets,
  fetchSpecies,
} from "../../redux/pets/petsOperations";
import { setFilterTerm, setPage } from "../../redux/pets/petsSlice";
import {
  selectCategory,
  selectGender,
  selectSpecie,
} from "../../redux/filters/filtersSelectors";

const FindPet = () => {
  const categories = useSelector(selectCategories);
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const filterWord = useSelector(selectFilterTerm);
  const genders = useSelector(selectGenders);
  const isLoading = useSelector(selectIsLoading);
  const perPage = useSelector(selectPerPage);
  const pets = useSelector(selectPets);
  const species = useSelector(selectSpecies);
  const totalPages = useSelector(selectTotalPages);
  const categoryTerm = useSelector(selectCategory);
  const specieTerm = useSelector(selectSpecie);
  const genderTerm = useSelector(selectGender);

  useEffect(() => {
    dispatch(fetchGenders());
    dispatch(fetchCategories());
    dispatch(fetchSpecies());
    dispatch(setFilterTerm(""));
    dispatch(setPage(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchPets({
        page: currentPage,
        limit: perPage,
        filterWord,
        category: categoryTerm,
        gender: genderTerm,
        species: specieTerm,
      }),
    );
  }, [
    dispatch,
    currentPage,
    perPage,
    filterWord,
    categoryTerm,
    genderTerm,
    specieTerm,
  ]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    dispatch(
      fetchPets({
        page: newPage,
        limit: perPage,
        filterWord,
        category: categoryTerm,
        gender: genderTerm,
        species: specieTerm,
      }),
    );
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <p>Ooops...Please try to reload page</p>
  ) : (
    <PetsWrap className="container">
      <PetsHeaderWrap>
        <PetsTitle className="title">Find your favorite pet</PetsTitle>
      </PetsHeaderWrap>
      <Filters
        genders={genders}
        categories={categories}
        species={species}
        filterTearm={filterWord}
        onFilterChange={(term) => dispatch(setFilterTerm(term))}
        onFetch={(params) => dispatch(fetchPets(params))}
        onPageChange={(page) => dispatch(setPage(page))}
        categoryTerm={categoryTerm}
        specieTerm={specieTerm}
      />
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
