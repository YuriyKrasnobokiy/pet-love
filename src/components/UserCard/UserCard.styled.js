import styled from "styled-components";

export const UserCardWrap = styled.div`
  max-width: 335px;
  padding: 18px 20px 40px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.UserCardBGColor};
`;

export const UserCardBageWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserBage = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 30px;
  padding: 10px 14px;
  color: ${(props) => props.theme.colors.UserCardBageColor};
  width: 52px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  background-color: ${(props) => props.theme.colors.UserCardBageBgColor};
`;

export const UserCardEditBtn = styled.button`
  border-radius: 30px;
  padding: 10px;
  width: 38px;
  height: 38px;
  margin: 0;
  background-color: ${(props) => props.theme.colors.UserCardEditBtnBGColor};
  transition: background-color 300ms easy-in-out;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.UserCardEditBtnHoverBGColor};
  }
`;
