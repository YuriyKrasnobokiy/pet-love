import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filters } from "../../components/Filters/Filters";
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
  selectTotalPages
} from "../../redux/pets/petsSelectors";

import SimpleLoader from "../../components/Loader/SimpleLoader";
import { ResultsNotFound } from "../../components/ResultsNotFound/ResultsNotFound";
import {
  selectCategory,
  selectGender,
  selectIsExpensive,
  selectIsPopular,
  selectLocationId,
  selectSpecie,
} from "../../redux/filters/filtersSelectors";
import {
  fetchCategories,
  fetchGenders,
  fetchPets,
  fetchSpecies,
} from "../../redux/pets/petsOperations";
import { setFilterTerm, setPage } from "../../redux/pets/petsSlice";
import { PetsHeaderWrap, PetsTitle, PetsWrap } from "./FindPet.styled";

const FindPet = () => {
  const categories = useSelector(selectCategories);
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const filterWord = useSelector(selectFilterTerm);
  const genders = useSelector(selectGenders);
  const isLoading = useSelector(selectIsLoading);
  const perPage = useSelector(selectPerPage);
  const genderTerm = useSelector(selectGender);
  const pets = useSelector(selectPets);
  const species = useSelector(selectSpecies);
  const totalPages = useSelector(selectTotalPages);
  const categoryTerm = useSelector(selectCategory);
  const specieTerm = useSelector(selectSpecie);
  const isExpensive = useSelector(selectIsExpensive);
  const isPopular = useSelector(selectIsPopular);
  const locationId = useSelector(selectLocationId);

  const filteredPets = genderTerm
    ? pets.filter((pet) => pet.sex === genderTerm)
    : pets;

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
        species: specieTerm,
        sex: genderTerm,
        isPopular,
        isExpensive,
        locationId,
        location,
      }),
    );
  }, [
    dispatch,
    currentPage,
    perPage,
    filterWord,
    categoryTerm,
    specieTerm,
    genderTerm,
    isPopular,
    isExpensive,
    locationId,
    location,
  ]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return isLoading ? (
    <SimpleLoader />
  ) : (
    // ) : error ? (
    //   <p>Ooops...Please try to reload page</p>
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
        genderTerm={genderTerm}
      />
      {/* {pets.length !== 0 ? ( */}
      {filteredPets.length !== 0 ? (
        <>
          {/* <PetList pets={pets} /> */}
          <PetList pets={filteredPets} />
          {/* {totalPages > 1 ? ( */}
          {genderTerm !== "" ? (
            filteredPets.length > perPage
          ) : totalPages > 1 ? (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          ) : null}
        </>
      ) : (
        <ResultsNotFound />
      )}
    </PetsWrap>
  );
};
export default FindPet;
