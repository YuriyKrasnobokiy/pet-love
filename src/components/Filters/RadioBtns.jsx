import React from "react";
import { RadioWrap, ResetBtn } from "./Filters.styled";
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton";
import {
  setCategory,
  setExpensive,
  setGender,
  setPopular,
  setSpecie,
} from "../../redux/filters/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsExpensive,
  selectIsPopular,
} from "../../redux/filters/filtersSelectors";
import { setFilterTerm, setPage } from "../../redux/pets/petsSlice";

export const RadioBtns = () => {
  const isExpensive = useSelector(selectIsExpensive);
  const isPopular = useSelector(selectIsPopular);
  const dispatch = useDispatch();

  const handlePopRadioBtnClick = (label) => {
    dispatch(setPopular(label.toLowerCase() !== "popular"));
  };

  const handlePopDeleteClick = () => {
    dispatch(setPopular(null));
  };

  const handlePriceRadioBtnClick = (label) => {
    dispatch(setExpensive(label.toLowerCase() === "expensive"));
  };

  const handlePriceDeleteClick = () => {
    dispatch(setExpensive(null));
  };

  const handleResetClick = () => {
    dispatch(setExpensive(null));
    dispatch(setPopular(null));
    dispatch(setFilterTerm(""));
    dispatch(setPage(1));
    dispatch(setCategory(""));
    dispatch(setGender(""));
    dispatch(setSpecie(""));
  };

  return (
    <RadioWrap>
      <CustomRadioButton
        handleDeleteClick={handlePopDeleteClick}
        handleClick={handlePopRadioBtnClick}
        id="0"
        name="pop"
        label="Popular"
        className={isPopular === false ? "pop-radio-btn" : ""}
      />
      <CustomRadioButton
        handleDeleteClick={handlePopDeleteClick}
        handleClick={handlePopRadioBtnClick}
        id="1"
        name="pop"
        label="Unpopular"
        className={isPopular === true ? "pop-radio-btn" : ""}
      />
      <CustomRadioButton
        handleDeleteClick={handlePriceDeleteClick}
        handleClick={handlePriceRadioBtnClick}
        id="2"
        name="price"
        label="Cheap"
        className={isExpensive === false ? "price-radio-btn" : ""}
      />
      <CustomRadioButton
        handleDeleteClick={handlePriceDeleteClick}
        handleClick={handlePriceRadioBtnClick}
        id="3"
        name="price"
        label="Expensive"
        className={isExpensive === true ? "price-radio-btn" : ""}
      />
      <ResetBtn type="button" onClick={handleResetClick}>
        Reset Filters
      </ResetBtn>
    </RadioWrap>
  );
};
