import React from "react";
import { RadioWrap } from "./Filters.styled";
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton";

export const RadioBtns = () => {
  return (
    <RadioWrap>
      <CustomRadioButton id="0" name="pop" label="Popular" />
      <CustomRadioButton id="1" name="pop" label="Unpopular" />
      <CustomRadioButton id="2" name="price" label="Cheap" />
      <CustomRadioButton id="3" name="price" label="Expensive" />
    </RadioWrap>
  );
};
