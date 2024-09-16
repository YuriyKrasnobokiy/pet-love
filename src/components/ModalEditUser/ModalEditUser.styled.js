import styled from "styled-components";

export const ModalEditUserWrap = styled.div`
  padding: 40px 20px;
`;

export const EditUserTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  color: ${(props) => props.theme.colors.ModalEditUserTitleColor};
  margin-bottom: 20px;
`;

export const EditUserImg = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  margin: 0 auto 12px;
`;

export const AvatarUploadWrap = styled.div`
  display: flex;
  gap: 8px;
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
  background-color: ${(props) => props.theme.colors.AvatarUploadBtnBGColor};
`;

export const InputsWrap = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 20px;
`;

export const EditUserInput = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.ModalEditUserAvatarColor};
  border: ${(props) => props.theme.colors.ModalEditUserInputBorder};
  border-radius: 30px;
  padding: 12px;
  width: 269px;
`;

export const EditUserSubmitBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: #fff;
  border-radius: 30px;
  padding: 12px;
  width: 295px;
  background: #f6b83d;
  justify-content: center;
`;
