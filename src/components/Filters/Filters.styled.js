import styled from "styled-components";

export const FiltersWrap = styled.div`
  /* display: flex;
  flex-direction: "column"; */
  padding: 20px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.FiltersWrapBGColor};
  /* gap: 20px; */
`;

export const SelectsWrap = styled.div``;

export const FirstSelectsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
`;
