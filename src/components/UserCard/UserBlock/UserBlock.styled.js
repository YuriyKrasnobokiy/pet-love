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
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.UserBlockAvatarBGColor};
  margin: 0 auto;
  color: ${(props) => props.theme.colors.UserBlockAvatarColor};
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

  &:hover {
    color: ${(props) => props.theme.colors.UserBlockAvatarBtnHoverColor};
  }
`;

export const UserInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 295px;
`;

export const UserInfoFormTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.UserInfoFormTitleColor};
  margin-bottom: 20px;
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

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
