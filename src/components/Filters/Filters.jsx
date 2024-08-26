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
      <SelectsWrap>
        <SearchField
          onFilterChange={onFilterChange}
          onFetch={onFetch}
          onPageChange={onPageChange}
          filterWord={filterTearm}
        />
        <FirstSelectsWrap>
          <CustomSelect options={categories} />
          <CustomSelect options={genders} />
        </FirstSelectsWrap>
        <CustomSelect options={species} />
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
