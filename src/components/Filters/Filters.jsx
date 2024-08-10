import React from "react";
import { FiltersWrap } from "./Filters.styled";
import { CustomSelect } from "../CustomSelect/CustomSelect";

export const Filters = ({ filterSets }) => {
  return (
    <FiltersWrap>
      {filterSets.map((filterSet, index) => {
        const options = filterSet.map((filterOption) => ({
          value: filterOption,
          label: filterOption.charAt(0).toUpperCase() + filterOption.slice(1),
        }));

        return <CustomSelect key={index} options={options} />;
      })}
    </FiltersWrap>
  );
};
