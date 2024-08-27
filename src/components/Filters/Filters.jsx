import React from "react";
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import {
  FiltersWrap,
  FirstSelectsWrap,
  RadioWrap,
  SelectsWrap,
} from "./Filters.styled";
import SearchField from "../SearchField/SearchField";

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
      />
      <SelectsWrap>
        <FirstSelectsWrap>
          <CustomSelect options={categories} placeholder="Categories" />
          <CustomSelect options={genders} placeholder="By genders" />
        </FirstSelectsWrap>
        <CustomSelect options={species} placeholder="By type" />
      </SelectsWrap>
      <RadioWrap>
        <CustomRadioButton id="0" name="rbtn" label="Popular" />
        <CustomRadioButton id="1" name="rbtn" label="Unpopular" />
        <CustomRadioButton id="2" name="rbtn" label="Cheap" />
        <CustomRadioButton id="3" name="rbtn" label="Expensive" />
      </RadioWrap>
    </FiltersWrap>
  );
};
