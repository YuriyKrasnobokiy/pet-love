import React, { useEffect, useState } from "react";
import Select from "react-select";
import { customStyles } from "./customStyles";

export const CustomSelect = ({
  options,
  placeholder,
  handleOptionChange,
  selectedOpt,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const initialOption = options.find((option) => option === selectedOpt);
    if (initialOption) {
      setSelectedOption({
        value: initialOption,
        label: initialOption.charAt(0).toUpperCase() + initialOption.slice(1),
      });
    }
  }, [selectedOpt, options]);

  const selectOptions = [
    { value: "", label: "Show all" },
    ...options.map((option) => ({
      value: option,
      label: option.charAt(0).toUpperCase() + option.slice(1),
    })),
  ];

  const handleChange = (selected) => {
    setSelectedOption(selected);
    handleOptionChange(selected);
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
