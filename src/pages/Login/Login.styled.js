import styled from "styled-components";

export const LoginWrap = styled.div`
  padding: 6px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0 0 32px;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;
