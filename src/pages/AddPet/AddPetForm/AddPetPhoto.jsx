import Icon from "../../../components/Icon/Icon";
import styled from "styled-components";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { ErrorMessage } from "../../../components/Auth/RegistrForm/AuthForm.styled";
import { useEffect, useState } from "react";

const AddPetPhotoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    /* align-items: start; */
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
  background: ${(props) => props.theme.colors.AddMyPetPhotoImgBGC};
  margin: 0 auto 16px;
  background-image: ${({ $imgPreview }) => ($imgPreview ? `url(${$imgPreview})` : 'none')};
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 66px;
    height: 66px;
    margin: 0 auto 12px;
  }
`;

const InputBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const UrlInput = styled.input`
  border: ${(props) => props.theme.colors.AddMyPetPhotoUrlInputBorder};
  border-radius: 30px;
  padding: 9px 18px 9px 10px;
  height: 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.textColor};
  width: 140px;
  transition: all 300ms ease-in-out;
  outline: none;
  background-color: ${(props) => props.theme.colors.AddMyPetPhotoUrlInputBGC};

  @media screen and (min-width: 768px) {
    padding: 12px 20px 12px 12px;
    width: calc(278px - 20px - 12px - 2px);
    font-size: 14px;
  }

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
    color: ${(props) => props.theme.colors.AddMyPetPhotoUrlInputPlaceholderColor};
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:-webkit-autofill {
    transition: background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.colors.textColor} !important;
    caret-color: ${(props) => props.theme.colors.accentColor};
  }
`;

const UploadBtn = styled.button`
  display: flex;
  border-radius: 30px;
  padding: 10px;
  width: 117px;
  height: 36px;
  background: ${(props) => props.theme.colors.AddMyPetPhotoUploadBtnBGC};
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.AddMyPetPhotoUploadBtnColor};
  transition: background 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 12px 16px;
    width: 146px;
    height: 42px;
    font-size: 14px;
    line-height: 1.28;
  }

  &:hover {
    background: ${(props) => props.theme.colors.AddMyPetPhotoUploadBtnHoverBGC};
  }
`;

export const AddPetPhoto = ({watch, register, errors }) => {
  const deviceType = useDeviceType();
  const [imgPreview, setImgPreview] = useState(null);
  const imgURL = watch("imgURL");

  const onUploadClick = () => {
    if (!imgURL) {
      setImgPreview(null);
      return;
    }
    setImgPreview(imgURL.trim());
  };

  useEffect(() => {
  if (!imgURL?.trim()) {
    setImgPreview(null);
  }
}, [imgURL]);
  
  return (
    <AddPetPhotoWrap>
      <PetPhoto $imgPreview={imgPreview}>
        {imgPreview ? null : <Icon
          width={deviceType === 'desktop' ? 44 : deviceType === 'tablet' ? 44 : 34}
          height={deviceType === 'desktop' ? 44 : deviceType === 'tablet' ? 44 : 34}
          name="icon-paw"
        />}
      </PetPhoto>
      <InputBtnWrap>
        <UrlInput {...register("imgURL")} name="imgURL" placeholder="Enter URL" type="text" />
        <UploadBtn type="button" onClick={onUploadClick}>
          Upload photo <Icon width={deviceType === 'desktop' ? 18 : deviceType === 'tablet' ? 18 : 16} height={deviceType === 'desktop' ? 18 : deviceType === 'tablet' ? 18 : 16} name="icon-cloud" />
        </UploadBtn>
      <ErrorMessage className="addPet photo">{errors.imgURL?.message}</ErrorMessage>
      </InputBtnWrap>
    </AddPetPhotoWrap>
  );
};
