import React from "react";
import {
  LabelBtn,
  LabelContentWrap,
  RadioButton,
  RadioLabel,
  RadioWrap,
} from "./CustomRadioButton.styled";
import Icon from "../Icon/Icon";

export const CustomRadioButton = ({
  id,
  name,
  label,
  className,
  handleClick,
  handleDeleteClick,
}) => {
  return (
    <RadioWrap>
      <RadioButton
        id={id}
        type="radio"
        name={name}
        onClick={() => handleClick(label)}
        className={className}
      />
      <RadioLabel htmlFor={id}>
        <LabelContentWrap>
          {label}
          <LabelBtn onClick={handleDeleteClick}>
            <Icon name="icon-cross-small" width={18} height={18}></Icon>
          </LabelBtn>
        </LabelContentWrap>
      </RadioLabel>
    </RadioWrap>
  );
};
