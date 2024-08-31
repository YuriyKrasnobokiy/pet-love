import React, { useState } from "react";
import { RadioWrap } from "./Filters.styled";
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton";

export const RadioBtns = () => {
  const [popRadioBtn, setPopRadioBtn] = useState(null);
  const [priceRadioBtn, setPriceRadioBtn] = useState(null);

  const handlePopRadioBtnClick = (label) => {
    setPopRadioBtn(label);
  };

  const handlePopDeleteClick = () => {
    setPopRadioBtn(null);
  };

  const handlePriceRadioBtnClick = (label) => {
    setPriceRadioBtn(label);
  };

  const handlePriceDeleteClick = () => {
    setPriceRadioBtn(null);
  };

  return (
    <RadioWrap>
      <CustomRadioButton
        handleDeleteClick={handlePopDeleteClick}
        handleClick={handlePopRadioBtnClick}
        id="0"
        name="pop"
        label="Popular"
        className={popRadioBtn === "Popular" ? "pop-radio-btn" : ""}
      />
      <CustomRadioButton
        handleDeleteClick={handlePopDeleteClick}
        handleClick={handlePopRadioBtnClick}
        id="1"
        name="pop"
        label="Unpopular"
        className={popRadioBtn === "Unpopular" ? "pop-radio-btn" : ""}
      />
      <CustomRadioButton
        handleDeleteClick={handlePriceDeleteClick}
        handleClick={handlePriceRadioBtnClick}
        id="2"
        name="price"
        label="Cheap"
        className={priceRadioBtn === "Cheap" ? "price-radio-btn" : ""}
      />
      <CustomRadioButton
        handleDeleteClick={handlePriceDeleteClick}
        handleClick={handlePriceRadioBtnClick}
        id="3"
        name="price"
        label="Expensive"
        className={priceRadioBtn === "Expensive" ? "price-radio-btn" : ""}
      />
    </RadioWrap>
  );
};
