import React from "react";
import Icon from "../../../components/Icon/Icon";
import styled from "styled-components";
import { useDeviceType } from "../../../hooks/useDeviceType";

const AddPetPhotoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;
const PetPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 10px;
  width: 48px;
  height: 48px;
  background: #fff4df;
  margin: 0 auto 16px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
    margin: 0 auto 12px;
  }
`;
const InputBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
const UrlInput = styled.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 9px 19px 8px 9px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
  width: 140px;
  /* height: 36px; */
  transition: all 300ms ease-in-out;
  outline: none;

  &:hover {
    border-color: ${(props) => props.theme.colors.accentColor};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.accentColor};
    outline: none;
    caret-color: ${(props) => props.theme.colors.accentColor};
  }

  &::placeholder {
    font-style: 14px;
    align-items: center;
    justify-content: center;
    color: inherit;
  }
`;
const UploadBtn = styled.button`
  display: flex;
  border-radius: 30px;
  padding: 10px;
  width: 117px;
  height: 36px;
  background: #fff4df;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #262626;
  transition: background 300ms ease-in-out;

  &:hover {
    background: #fbe7c1;
  }
`;

export const AddPetPhoto = () => {
  const deviceType = useDeviceType();
  return (
    <AddPetPhotoWrap>
      <PetPhoto>
        <Icon
          width={deviceType === 'desktop' ? 44 : deviceType === 'tablet' ? 44 : 34}
          height={deviceType === 'desktop' ? 44 : deviceType === 'tablet' ? 44 : 34}
          name="icon-paw"
        />
      </PetPhoto>
      <InputBtnWrap>
        <UrlInput name="url" placeholder="Enter URL" type="text" />
        <UploadBtn>
          Upload photo <Icon width={16} height={16} name="icon-cloud" />
        </UploadBtn>
      </InputBtnWrap>
    </AddPetPhotoWrap>
  );
};
