import { BiGitCommit } from "react-icons/bi";
import styled from "styled-components";
import Icon from "../Icon/Icon";

export const PetModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 28px;
`;

export const PetModalImgWrap = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const PetModalImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const CategoryBage = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  text-align: center;
  width: fit-content;

  padding: 8px 14px;
  border-radius: 30px;

  color: ${(props) => props.theme.colors.PetModalCategoryColor};
  background-color: ${(props) => props.theme.colors.PetModalCategoryBG};

  position: absolute;
  z-index: 10;
  top: 0;
  left: -4px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const PetModalTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

export const PetModalTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.PetModalTitleColor};
  margin-bottom: 10px;
`;

export const PetModalPopularityWrap = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
`;

export const PetModalPopularityList = styled.ul`
  display: flex;
  gap: 4px;
`;

export const PetModalPopularityItem = styled.li`
  color: ${(props) => props.theme.colors.PetModalRatingItemColor};

  &:first-child {
    color: ${(props) => props.theme.colors.IconStarAccentColor};
  }
`;

export const PetModalPopularityNumber = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #2b2b2a;
`;

export const PetModalPropertyList = styled.ul`
  display: flex;
  gap: 26px;
  margin-bottom: 18px;
`;

export const PetModalProperty = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.PetCardPropertyColor};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const PetModalAccentProperty = styled.span`
  font-size: 10px;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.PetCardAccentPropertyColor};
`;

export const PetModalPropertyText = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const PetModalComment = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.286;
  letter-spacing: -0.02em;

  color: ${(props) => props.theme.colors.PetModalCommentColor};
`;

export const PetModalBtnsWrap = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const PetModalBtn = styled.button`
  border-radius: 30px;
  padding: 12px 30px;
  width: 100%;
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  justify-content: center;
  color: ${(props) => props.theme.colors.PetModalBtnColor};
  background-color: ${(props) => props.theme.colors.PetModalBtnBGColor};
  transition: background-color 0.3s ease-in-out;
  gap: 8px;

  &:hover,
  :focus {
    background-color: ${(props) => props.theme.colors.PetModalBtnBGHoverColor};
  }

  &.contact {
    color: ${(props) => props.theme.colors.PetModalContBtnColor};
    background-color: ${(props) => props.theme.colors.PetModalContBtnBGColor};

    &:hover,
    :focus {
      background-color: ${(props) =>
        props.theme.colors.PetModalContBtnBGHoverColor};
    }
  }
`;
