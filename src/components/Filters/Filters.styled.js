import styled from "styled-components";

export const FiltersWrap = styled.div`
  padding: 20px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.FiltersWrapBGColor};
  margin-bottom: 40px;
`;

export const SearchFieldsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const SelectsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 20px;
  margin-top: 0;
  gap: 12px 8px;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }
`;

export const FirstSelectsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* margin-bottom: 12px; */
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const RadioWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.RadioBtnsBorderColor};
`;

export const ResetBtn = styled.button`
  padding: 12px;
  margin: 0;
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
