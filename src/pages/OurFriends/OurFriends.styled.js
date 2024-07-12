import styled from "styled-components";

export const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 34px;
  padding-bottom: 80px;
`;

export const FriendsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;
