import styled from "styled-components";

export const FriendCarWrap = styled.div`
  display: flex;
  position: relative;
  padding: 40px 25px 40px 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.friendCardBGColor};

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 22px 40px 20px;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const WorkHoursBage = styled.p`
  position: absolute;
  top: 12px;
  right: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.FriendWorkHoursColor};
  padding: 8px;
  border-radius: 30px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.FriendWorkHoursBGColor};
`;

export const ImgThumb = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 14px;
`;

export const FriendTitleStyled = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.04em;
  margin-bottom: 14px;
`;

export const FriendDescrListLi = styled.li`
  max-width: 194px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 300ms ease-in-out;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const FriendDescrText = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.285;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FriendDescrTextAccent = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.FriendDescrTextAccentColor};
`;
