import React from "react";
import {
  setCategory,
  setGender,
  setLocation,
  setLocationId,
  setSpecie,
} from "../../redux/filters/filtersSlice";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import SearchField from "../SearchField/SearchField";
import {
  FiltersWrap,
  FirstSelectsWrap,
  FirstWrap,
  SearchFieldsWrap,
  SecondWrap,
} from "./Filters.styled";
import { RadioBtns } from "./RadioBtns";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/filters/filtersSelectors";
import { setFilterTerm, setPage } from "../../redux/pets/petsSlice";
import { LocationSelect } from "../LocationSelect/LocationSelect";
import { selectFilterTerm } from "../../redux/pets/petsSelectors";

export const Filters = ({
  genders,
  species,
  categories,
  filterTearm,
  onFetch,
  onPageChange,
  categoryTerm,
  specieTerm,
  genderTerm,
}) => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

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
  const handleLocationChange = (selectedOption) => {
    dispatch(setLocationId(selectedOption.value));
    dispatch(setLocation(selectedOption));
    dispatch(setPage(1));
  };

  return (
    <FiltersWrap>
      <SearchFieldsWrap>
        <FirstWrap>
          <SearchField
            // onFilterChange={onFilterChange}
            onFetch={onFetch}
            setFilterTerm={setFilterTerm}
            selectFilterTerm={selectFilterTerm}
            onPageChange={onPageChange}
            filterWord={filterTearm}
            isInFilters
          />

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
        </FirstWrap>
        <SecondWrap>
          <CustomSelect
            options={species}
            placeholder="By type"
            handleOptionChange={handleSpecieChange}
            selectedOpt={specieTerm}
          />
          <LocationSelect
            handleOptionChange={handleLocationChange}
            selectedOpt={location}
          />
        </SecondWrap>
      </SearchFieldsWrap>
      <RadioBtns />
    </FiltersWrap>
  );
};
