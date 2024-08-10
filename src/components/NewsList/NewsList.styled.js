import styled from "styled-components";

export const NewsListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px 35px;
  }
`;
