import React from "react";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { FiltersWrap, FirstSelectsWrap, SelectsWrap } from "./Filters.styled";
import SearchField from "../SearchField/SearchField";
import { RadioBtns } from "./RadioBtns";

export const Filters = ({
  genders,
  species,
  categories,
  filterTearm,
  onFilterChange,
  onFetch,
  onPageChange,
}) => {
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
          <CustomSelect options={categories} placeholder="Categories" />
          <CustomSelect options={genders} placeholder="By genders" />
        </FirstSelectsWrap>
        <CustomSelect options={species} placeholder="By type" />
      </SelectsWrap>
      <RadioBtns />
    </FiltersWrap>
  );
};
