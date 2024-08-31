import styled from "styled-components";

export const PetsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 60px;
    gap: 40px 32px;
  }
`;