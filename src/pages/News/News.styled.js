import styled from "styled-components";

export const NewsWrap = styled.div`
  padding-top: 34px;
`;

export const NewsTitle = styled.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
`;

export const NewsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
  }
`;
