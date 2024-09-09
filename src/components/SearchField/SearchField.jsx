import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import {
  FilterBtn,
  FormStyled,
  InputStyled,
  ResetBtn,
} from "./SearchField.styled";
import { useSearchParams } from "react-router-dom";
import { setFilterTerm } from "../../redux/news/newsSlice";
import { selectFilterTerm } from "../../redux/news/newsSelectors";
import { useDispatch, useSelector } from "react-redux";

export const SearchField = ({
  onFilterChange,
  onFetch,
  onPageChange,
  isInFilters,
}) => {
  const dispatch = useDispatch();
  const currentFilterTerm = useSelector(selectFilterTerm);
  const [inputValue, setInputValue] = useState(currentFilterTerm || "");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryFilterWord = searchParams.get("filterWord") || "";
    setInputValue(queryFilterWord);
    if (queryFilterWord !== currentFilterTerm) {
      dispatch(setFilterTerm(queryFilterWord));
      onFetch({ page: 1, limit: 6, filterWord: queryFilterWord });
    }
  }, [searchParams, dispatch, currentFilterTerm]);

  const updateURL = (filterWord) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (filterWord) {
      newParams.set("filterWord", filterWord);
    } else {
      newParams.delete("filterWord");
    }

    setSearchParams(newParams);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    updateURL(inputValue);
    dispatch(setFilterTerm(inputValue));
    onPageChange(1);
    onFetch({ page: 1, limit: 6, filterWord: inputValue });
  };

  const onReset = (evt) => {
    evt.preventDefault();
    updateURL(""); // Pass empty string to remove the filter
    setInputValue("");
    dispatch(setFilterTerm(""));
    onPageChange(1);
    onFetch({ page: 1, limit: 6, filterWord: "" });
  };

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <FormStyled $isInFilters={isInFilters} onSubmit={onSubmit}>
      <InputStyled
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={onInputChange}
        $isInFilters={isInFilters}
      />
      {inputValue !== "" && (
        <ResetBtn type="button" onClick={onReset}>
          <Icon height={18} width={18} name="icon-cross-small" />
        </ResetBtn>
      )}
      <FilterBtn type="submit">
        <Icon height={18} width={18} name="icon-search" />
      </FilterBtn>
    </FormStyled>
  );
};

export default SearchField;
