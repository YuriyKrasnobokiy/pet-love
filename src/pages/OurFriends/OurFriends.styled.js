import styled from "styled-components";

export const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 34px;
  padding-bottom: 80px;
`;

// export const FriendsTitle = styled.h2`
//   font-weight: 700;
//   font-size: 28px;
//   line-height: 1;
//   letter-spacing: -0.03em;
//   margin-bottom: 40px;
// `;

export const FriendsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    /* grid-template-columns: 342px 342px; */
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    /* grid-template-columns: 342px 342px; */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;
