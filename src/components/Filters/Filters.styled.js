import styled from "styled-components";

export const FiltersWrap = styled.div`
  padding: 20px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.FiltersWrapBGColor};
`;

export const SelectsWrap = styled.div`
  padding-bottom: 20px;
  margin-top: 12px;
`;

export const FirstSelectsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 12px;
`;

export const RadioWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.RadioBtnsBorderColor};
`;
