import React, { useState } from "react";
import Select from "react-select";
import { customStyles } from "./customStyles";

export const CustomSelect = ({ options, placeholder }) => {
  const selectOptions = [
    { value: "All", label: "Show all" },
    ...options.map((option) => ({
      value: option,
      label: option.charAt(0).toUpperCase() + option.slice(1),
    })),
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={selectOptions}
      styles={customStyles}
      isSearchable={false}
      placeholder={placeholder}
    />
  );
};
