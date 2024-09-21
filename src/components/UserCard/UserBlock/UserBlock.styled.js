import styled from "styled-components";

export const UserBlockWrap = styled.div`
  margin-bottom: 40px;
`;

export const UserAvatarWrap = styled.div`
  margin-bottom: 20px;
`;

export const UserAvatarThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: ${(props) => (props.$isEditModal ? "60px" : "74px")};
  height: ${(props) => (props.$isEditModal ? "60px" : "74px")};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.UserBlockAvatarBGColor};
  background-size: cover;
  background-position: center;
  background-image: ${(props) =>
    props.$avatarUrl ? `url(${props.$avatarUrl})` : "none"};
  margin: ${(props) => (props.$isEditModal ? "0 auto 12px" : "0 auto")};
  color: ${(props) => props.theme.colors.UserBlockAvatarColor};

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.$isEditModal ? "66px" : "90px")};
    height: ${(props) => (props.$isEditModal ? "66px" : "90px")};
  }
`;

export const UserAvatarBtn = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(props) => props.theme.colors.UserBlockAvatarBtnColor};
  background-color: transparent;
  padding: 8px 10px;
  transition: color 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }

  &:hover {
    color: ${(props) => props.theme.colors.UserBlockAvatarBtnHoverColor};
  }
`;

export const UserInfoForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const UserInfoFormTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.UserInfoFormTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const UserInfoInputsWrap = styled.div`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const UserInfoFormInput = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.UserInfoFormInputColor};
  padding: 12px;
  border-radius: 30px;
  border: ${(props) => props.theme.colors.UserInfoFormInputBorderColor};
  background-color: transparent;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 16px;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
