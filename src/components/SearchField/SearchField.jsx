import React, { useState } from "react";
import Icon from "../Icon/Icon";
import {
  FilterBtn,
  FormStyled,
  InputStyled,
  ResetBtn,
} from "./SearchField.styled";

export const SearchField = ({
  onFilterChange,
  onFetch,
  onPageChange,
  filterWord,
  isInFilters,
}) => {
  const [inputValue, setInputValue] = useState(filterWord || "");

  const onSubmit = (evt) => {
    evt.preventDefault();
    onFilterChange(inputValue);
    onPageChange(1);
    onFetch({ page: 1, limit: 6, filterWord: inputValue });
  };

  const onReset = (evt) => {
    evt.preventDefault();
    setInputValue("");
    onFilterChange("");
    onPageChange(1);
    onFetch({ page: 1, limit: 6, filterWord: "" });
  };

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <InputStyled
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={onInputChange}
        $isInFilters={isInFilters}
      />
      {inputValue !== "" && (
        <ResetBtn type="button" onClick={onReset}>
          <Icon height={18} width={18} name="icon-cross-small"></Icon>
        </ResetBtn>
      )}
      <FilterBtn type="submit">
        <Icon height={18} width={18} name="icon-search"></Icon>
      </FilterBtn>
    </FormStyled>
  );
};

export default SearchField;
