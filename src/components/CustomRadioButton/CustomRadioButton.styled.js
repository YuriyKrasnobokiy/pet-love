import styled from "styled-components";

export const RadioWrap = styled.div``;

export const LabelBtn = styled.button`
  display: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.RadioBtnLabelColorHover};
  width: 18px;
  height: 18px;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 0;
  height: 0;
  position: absolute;

  &.pop-radio-btn + label {
    color: ${(props) => props.theme.colors.RadioBtnLabelColorHover};
    background-color: ${(props) =>
      props.theme.colors.RadioBtnLabelBGColorHover};
  }

  &.pop-radio-btn + label ${LabelBtn} {
    display: block;
  }

  &.price-radio-btn + label {
    color: ${(props) => props.theme.colors.RadioBtnLabelColorHover};
    background-color: ${(props) =>
      props.theme.colors.RadioBtnLabelBGColorHover};
  }

  &.price-radio-btn + label ${LabelBtn} {
    display: block;
  }
`;

export const RadioLabel = styled.label`
  display: inline-block;
  padding: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  border-radius: 30px;
  color: ${(props) => props.theme.colors.RadioBtnLabelColor};
  background-color: ${(props) => props.theme.colors.RadioBtnLabelBGColor};
  cursor: pointer;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.RadioBtnLabelColorHover};
    background-color: ${(props) =>
      props.theme.colors.RadioBtnLabelBGColorHover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px;
  }
`;

export const LabelContentWrap = styled.div`
  display: flex;
  gap: 6px;
`;
