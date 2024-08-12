import React from "react";
import { FiltersWrap, FirstSelectsWrap, SelectsWrap } from "./Filters.styled";
import { CustomSelect } from "../CustomSelect/CustomSelect";

export const Filters = ({ genders, species, categories }) => {
  return (
    <FiltersWrap>
      <SelectsWrap>
        <FirstSelectsWrap>
          <CustomSelect options={categories} />
          <CustomSelect options={genders} />
        </FirstSelectsWrap>
        <CustomSelect options={species} />
      </SelectsWrap>
    </FiltersWrap>
  );
};
