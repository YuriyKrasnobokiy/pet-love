import React from "react";
import { RadioButton, RadioLabel, RadioWrap } from "./CustomRadioButton.styled";

export const CustomRadioButton = ({ id, name, label }) => {
  return (
    <RadioWrap>
      <RadioButton id={id} type="radio" name={name} value="1" />
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioWrap>
  );
};
