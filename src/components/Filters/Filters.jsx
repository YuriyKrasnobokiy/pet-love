import React from "react";
import {
  setCategory,
  setGender,
  setSpecie,
} from "../../redux/filters/filtersSlice";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import SearchField from "../SearchField/SearchField";
import {
  FiltersWrap,
  FirstSelectsWrap,
  SearchFieldsWrap,
  SelectsWrap,
} from "./Filters.styled";
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
  genderTerm,
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
    // dispatch(setPage(1));
  };

  return (
    <FiltersWrap>
      <SearchFieldsWrap>
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
            <CustomSelect
              options={genders}
              placeholder="By gender"
              handleOptionChange={handleGenderChange}
              selectedOpt={genderTerm}
            />
          </FirstSelectsWrap>
          <CustomSelect
            options={species}
            placeholder="By type"
            handleOptionChange={handleSpecieChange}
            selectedOpt={specieTerm}
          />
        </SelectsWrap>
      </SearchFieldsWrap>
      <RadioBtns />
    </FiltersWrap>
  );
};
