import styled from "styled-components";

export const AddPetFormWrap = styled.form`
  padding: 28px 20px 20px;
  background-color: ${(props) => props.theme.colors.AddMyPetFormBG};
  /* background-color: #fff; */
  border-radius: 30px;
  border: ${(props) => props.theme.colors.AddMyPetFormBorder};
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 40px 136px;
  }
  @media screen and (min-width: 1280px) {
    border-radius: 60px;
    padding: 60px 80px;
    max-width: 592px;
  }
`;

export const AddPetTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.AddMyPetFormTitleColor};
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;
export const AddPetTitleSpan = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: ${(props) => props.theme.colors.AddMyPetFormTitleSpanCol};
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const AddPetInputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px){
    gap: 18px;
  }
`

export const AddPetInput = styled.input`
  border: ${(props) => props.theme.colors.AddMyPetFormInputBorder};
  /* border: 1px solid rgba(38, 38, 38, 0.15); */
  border-radius: 30px;
  padding: 12px;
  width: 269px;
  height: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.textColor};
  /* color:  #262626; */
  transition: border-color 300ms ease-in-out;
  outline: none;
  background-color: ${(props) => props.theme.colors.AddMyPetFormInputBGC};

  @media screen and (min-width: 768px) {
    padding: 16px;
    width: calc(432px - 16px - 16px - 2px);
    height: calc(52px - 16px - 16px - 2px);
    font-size: 16px;
    line-height: 1.25;
  }

  &.date {
    width: 88px;
    padding: 12px 42px 12px 12px;

    @media screen and (min-width: 768px) {
      padding: 16px 109px 16px 16px;
      width: calc(210px - 109px - 16px - 2px);
    }
  }

  &::placeholder{
    color: ${(props) => props.theme.colors.AddMyPetFormInputPlaceholderColor}; 
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.accentColor};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.accentColor};
    outline: none;
    caret-color: ${(props) => props.theme.colors.accentColor};
  }

  &:-webkit-autofill {
    transition: background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.colors.textColor} !important;
    /* -webkit-text-fill-color: #262626 !important; */
    caret-color: ${(props) => props.theme.colors.accentColor};
  }
`

export const DateTypeWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 11px;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    right: 16px;
    top: 16px;
  }
`;

export const BtnsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

export const AddPetFormBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 12px 34px;
  width: 100px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  margin: 0;
  opacity: 1;
  transition: background 300ms ease-in-out;

  &.back {
    color: ${(props) => props.theme.colors.AddMyPetFormBtnBackColor};
    background: ${(props) => props.theme.colors.AddMyPetFormBtnBackBGColor};
    &:hover {
      background: ${(props) => props.theme.colors.AddMyPetFormBtnBackBGHoverColor};
    }
  };

  &.submit {
    color: ${(props) => props.theme.colors.AddMyPetFormBtnSubColor};
    background: ${(props) => props.theme.colors.AddMyPetFormBtnSubBGColor};

    &:hover {
      background: ${(props) => props.theme.colors.AddMyPetFormBtnSubBGHoverColor};
    }
  };

  @media screen and (min-width: 768px) {
    padding: 14px 67px;
    width: 170px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }

`
