import styled from "styled-components";

export const AddPetFormWrap = styled.form`
  padding: 28px 20px 20px;
  background-color: #fff;
  border-radius: 30px;
`;

export const AddPetTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #262626;
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
  color: rgba(43, 43, 42, 0.4);
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const AddPetInputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const AddPetInput = styled.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 12px;
  width: 269px;
  height: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color:  #262626;
  transition: border-color 300ms ease-in-out;
  outline: none;

  &.date {
    width: 88px;
    padding: 12px 42px 12px 12px;
  }

  &::placeholder{
    color: rgba(38, 38, 38, 0.5);
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.accentColor};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.accentColor};
    outline: none;
    caret-color: ${(props) => props.theme.colors.accentColor};
  }
`

export const DateTypeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 32px;
`

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 11px;
  pointer-events: none;
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
    color: #262626;
    background: rgba(38, 38, 38, 0.05);
    &:hover {
    background: rgba(38, 38, 38, 0.08);
  }
  };

  &.submit {
    color: #fff;
    background: #f6b83d;

    &:hover {
    background: #f9b020;;
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
