import styled from "styled-components";

export const RadioWrap = styled.div``;

export const LabelBtn = styled.button`
  display: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
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

  &:checked + label {
    color: ${(props) => props.theme.colors.RadioBtnLabelColorHover};
    background-color: ${(props) =>
      props.theme.colors.RadioBtnLabelBGColorHover};
  }

  &:checked + label ${LabelBtn} {
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
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.RadioBtnLabelColorHover};
    background-color: ${(props) =>
      props.theme.colors.RadioBtnLabelBGColorHover};
  }
`;

export const LabelContentWrap = styled.div`
  display: flex;
  gap: 6px;
`;
