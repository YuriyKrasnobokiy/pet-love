import React, { useEffect } from "react";
import { PetList } from "../../components/PetList/PetList";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectPage,
  selectPerPage,
  selectPets,
  selectTotalPages,
} from "../../redux/pets/petsSelectors";
import { selectIsLoading } from "../../redux/pets/petsSelectors";
import { fetchPets, setPage } from "../../redux/pets/petsSlice";
import Loader from "../../components/Loader/Loader";
import { PetsHeaderWrap, PetsTitle, PetsWrap } from "./FindPet.styled";

const FindPet = () => {
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
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
