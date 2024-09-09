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
import { setPage } from "../../redux/pets/petsSlice";
import {
  selectLocation,
  selectLocationId,
} from "../../redux/filters/filtersSelectors";
import { LocationSelect } from "../LocationSelect/LocationSelect";

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
  const location = useSelector(selectLocation);
  const locationID = useSelector(selectLocationId);
  console.log("locationID: ", locationID);

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
            onFilterChange={onFilterChange}
            onFetch={onFetch}
            onPageChange={onPageChange}
            filterWord={filterTearm}
            isInFilters
          />
          {/* <SelectsWrap> */}

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
        {/* </SelectsWrap> */}
      </SearchFieldsWrap>
      <RadioBtns />
    </FiltersWrap>
  );
};
