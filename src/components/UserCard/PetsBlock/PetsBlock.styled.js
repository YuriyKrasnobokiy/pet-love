import styled from "styled-components";

export const PetsBlockTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PetsBlockTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.PetsBlockTitleColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const AddPetBtn = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.PetsBlockAddPetBtnColor};
  padding: 10px 16px;
  border-radius: 30px;
  width: 103px;
  margin: 0;
  justify-content: center;
  gap: 4px;
  background-color: ${(props) => props.theme.colors.PetsBlockAddPetBtnBGColor};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.PetsBlockAddPetBtnHoverBGColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: 118px;
  }
`;

export const PetsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`

export const PetListItem = styled.li`
  position: relative;
  display: flex;
  border: 1px solid rgba(38, 38, 38, 0.1);
  border-radius: 20px;
  width: calc(295px - 16px - 16px);
  max-height: calc(132px - 16px - 16px);
  padding: 16px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: calc(303px - 16px - 16px);
    max-height: calc(149px - 22px - 22px);
    padding: 22px 16px;
  }
  @media screen and (min-width: 1280px) {
    width: calc(440px - 42px);
    height: calc(130px - 40px);
    padding: 20px;
  }
`

export const PetItemImg = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
  @media screen and (min-width: 1280px) {
    width: 90px;
    height: 90px;
    margin-right: 24px;
  }
`

export const ItemTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 152px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    max-width: 172px;
  }
  @media screen and (min-width: 1280px) {
    gap: 12px;
    max-width: 242px;
  }
`

export const PetTitle = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: #2b2b2a;
  max-width: 100%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`

export const ItemTextBlockList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (min-width: 1280px) {
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
  }
`

export const TextBlockListItem = styled.li`
display: flex;
flex-direction: column;
gap: 4px;
`

export const TextBlockListItemTitle = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`
export const TextBlockListItemValue = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: #262626;
  max-width: 64px;

  overflow: hidden;
  white-space: nowrap;

  &.name {
    max-width: 40px;
    text-overflow: ellipsis;
  }
`

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  background: #fff4df;
  transition: background 0.3ms ease-in-out;
  top: 12px;
  right: 12px;

  &:hover {
    background: #FBE7C1;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 38px;
    height: 38px;
    top: 20px;
    right: 20px;
  }
`

export const LogOutBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.PetsBlockLogOutBtnColor};
  border-radius: 30px;
  padding: 12px;
  width: 114px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.PetsBlockLogOutBtnBGColor};
  margin: 0;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.PetsBlockLogOutBtnBGHoverColor};
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
    width: 136px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
