import styled from "styled-components";

export const RadioWrap = styled.div``;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 0;
  height: 0;
  position: absolute;

  &:checked + label {
    color: ${(props) => props.theme.colors.RadioBtnLabelColorHover};
    background-color: ${(props) =>
      props.theme.colors.RadioBtnLabelBGColorHover};
  }
`;

export const RadioLabel = styled.label`
  display: inline-block;
  padding: 12px;
  border-radius: 30px;
  color: ${(props) => props.theme.colors.RadioBtnLabelColor};
  background-color: ${(props) => props.theme.colors.RadioBtnLabelBGColor};
  cursor: pointer;
  transition: all 300ms linear;

  &:hover {
    color: ${(props) => props.theme.colors.RadioBtnLabelColorHover};
    background-color: ${(props) =>
      props.theme.colors.RadioBtnLabelBGColorHover};
  }

  &:checked {
    color: ${(props) => props.theme.colors.RadioBtnLabelColorHover};
    background-color: ${(props) =>
      props.theme.colors.RadioBtnLabelBGColorHover};
  }
`;
