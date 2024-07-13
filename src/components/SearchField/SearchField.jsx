import React, { useState } from "react";
import { setFilterTerm } from "../../redux/news/newsSlice";
import Icon from "../Icon/Icon";
import { useDispatch } from "react-redux";
import {
  FilterBtn,
  FormStyled,
  InputStyled,
  ResetBtn,
} from "./SearchField.styled";

export const SearchField = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setFilterTerm(inputValue));
  };

  const onReset = (evt) => {
    evt.preventDefault();
    setInputValue("");
    dispatch(setFilterTerm(""));
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
      />

      {inputValue !== "" && (
        <ResetBtn type="button" onClick={onReset}>
          <Icon height={18} width={18} name="icon-cross-small"></Icon>
        </ResetBtn>
      )}

      <FilterBtn type="submit" onSubmit={onSubmit}>
        <Icon height={18} width={18} name="icon-search"></Icon>
      </FilterBtn>
    </FormStyled>
  );
};

export default SearchField;
