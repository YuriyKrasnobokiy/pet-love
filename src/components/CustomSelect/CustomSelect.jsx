import React, { useState } from "react";
import Select from "react-select";
import { customStyles } from "./customStyles";

export const CustomSelect = ({ options, placeholder, handleOptionChange }) => {
  const selectOptions = [
    { value: "", label: "Show all" },
    ...options.map((option) => ({
      value: option,
      label: option.charAt(0).toUpperCase() + option.slice(1),
    })),
  ];

  ////TO DO: fix bug with selected option////

  const [selectedOption, setSelectedOption] = useState(selectOptions[0]);

  const handleChange = (selected) => {
    handleOptionChange(selected);
    setSelectedOption(selected);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={selectOptions}
      styles={customStyles}
      isSearchable={false}
      placeholder={placeholder}
    />
  );
};
