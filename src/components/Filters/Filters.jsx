import React from "react";
import {
  setCategory,
  setGender,
  setSpecie,
} from "../../redux/filters/filtersSlice";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import SearchField from "../SearchField/SearchField";
import { FiltersWrap, FirstSelectsWrap, SelectsWrap } from "./Filters.styled";
import { RadioBtns } from "./RadioBtns";

import { useDispatch } from "react-redux";
import { setPage } from "../../redux/pets/petsSlice";

export const Filters = ({
  genders,
  species,
  categories,
  filterTearm,
  onFilterChange,
  onFetch,
  onPageChange,
  categoryTerm,
  specieTerm,
}) => {
  const dispatch = useDispatch();

  const handleCategoryChange = (selectedOption) => {
    dispatch(setCategory(selectedOption.value));
    dispatch(setPage(1));
  };

  const handleSpecieChange = (selectedOption) => {
    dispatch(setSpecie(selectedOption.value));
    dispatch(setPage(1));
  };

  const handleGenderChange = (selectedOption) => {
    dispatch(setGender(selectedOption.value));
    dispatch(setPage(1));
  };

  return (
    <FiltersWrap>
      <SearchField
        onFilterChange={onFilterChange}
        onFetch={onFetch}
        onPageChange={onPageChange}
        filterWord={filterTearm}
        isInFilters
      />
      <SelectsWrap>
        <FirstSelectsWrap>
          <CustomSelect
            options={categories}
            placeholder="Categories"
            handleOptionChange={handleCategoryChange}
            selectedOpt={categoryTerm}
          />
          {/* ////TO DO: write function to filter by gender on client side// */}
          <CustomSelect
            options={genders}
            placeholder="By genders"
            handleOptionChange={handleGenderChange}
          />
        </FirstSelectsWrap>
        <CustomSelect
          options={species}
          placeholder="By type"
          handleOptionChange={handleSpecieChange}
          selectedOpt={specieTerm}
        />
      </SelectsWrap>
      <RadioBtns />
    </FiltersWrap>
  );
};
