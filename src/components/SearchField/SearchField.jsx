import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterTerm, fetchNews, setPage } from "../../redux/news/newsSlice";
import Icon from "../Icon/Icon";
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
    dispatch(setPage(1));
    dispatch(fetchNews({ page: 1, limit: 6, filterWord: inputValue }));
  };

  const onReset = (evt) => {
    evt.preventDefault();
    setInputValue("");
    dispatch(setFilterTerm(""));
    dispatch(setPage(1));
    dispatch(fetchNews({ page: 1, limit: 6, filterWord: "" }));
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
      <FilterBtn type="submit">
        <Icon height={18} width={18} name="icon-search"></Icon>
      </FilterBtn>
    </FormStyled>
  );
};

export default SearchField;
