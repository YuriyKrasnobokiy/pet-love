import styled from "styled-components";

export const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 34px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 64px;
  }
`;

export const FriendsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 28px 20px;
  }
`;
