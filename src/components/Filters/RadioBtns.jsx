import React from "react";
import { RadioWrap } from "./Filters.styled";
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton";
import { setExpensive, setPopular } from "../../redux/filters/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsExpensive,
  selectIsPopular,
} from "../../redux/filters/filtersSelectors";

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
    </RadioWrap>
  );
};
