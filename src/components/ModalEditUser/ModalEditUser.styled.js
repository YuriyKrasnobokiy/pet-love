import styled from "styled-components";

export const ModalEditUserWrap = styled.div`
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const EditUserTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  color: ${(props) => props.theme.colors.ModalEditUserTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const EditUserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 12px;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`;

export const AvatarUploadWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const EditUserAvatarInput = styled.input`
  padding: 12px 40px 12px 12px;
  width: 107px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.ModalEditUserAvatarColor};
  border: ${(props) => props.theme.colors.ModalEditUserAvatarInputBorder};
  border-radius: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
    padding: 11px 20px 11px 12px;
    width: 192px;
  }
`;

export const AvatarUploadBtn = styled.button`
  border-radius: 30px;
  padding: 12px;
  font-weight: 500;
  font-size: 12px;
  width: 126px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.ModalEditUserAvatarColor};
  justify-content: center;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.AvatarUploadBtnBGColor};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.AvatarUploadBtnBGHoverColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
    padding: 12px 16px;
    width: 146px;
  }
`;

export const InputsWrap = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    gap: 14px;
    margin-bottom: 40px;
  }
`;

export const EditUserInput = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.ModalEditUserAvatarColor};
  border: ${(props) => props.theme.colors.ModalEditUserInputBorder};
  border-radius: 30px;
  padding: 11px 12px;
  width: 269px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 15px 16px;
    width: 346px;
  }
`;

export const EditUserSubmitBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: #fff;
  border-radius: 30px;
  padding: 12px;
  width: 100%;
  background: #f6b83d;
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 16px;
  }
`;
