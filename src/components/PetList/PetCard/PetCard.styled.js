import styled from "styled-components";

export const PetCardWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  width: 287px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.PetCardBGColor};
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 294px;
  }
  @media screen and (min-width: 1280px) {
    width: ${(props) => (props.$profile ? "292px" : "315px")};
    padding: ${(props) => (props.$profile ? "14px 14px 18px" : "24px")};
  }
`;

export const PetCardImg = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 178px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    margin-bottom: ${(props) => (props.$profile ? "14px" : "24px")};
  }
`;

export const PetCardTextBlock = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: ${(props) => (props.$profile ? "24px" : "32px")};
  }
`;
export const PetCardTitleBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

export const PetCardTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.PetCardTitleColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const PetCardPopularWrap = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.IconStarAccentColor};
  gap: 4px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

export const PetCardPopularNumber = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(props) => props.theme.colors.PetCardPopularNumb};

  @media screen and (min-width: 768px) {
    line-height: 1.42857;
  }
`;

export const PetCardPropertyList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const PetCardProperty = styled.li`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.PetCardPropertyColor};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const PetCardAccentProperty = styled.span`
  font-size: 10px;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.PetCardAccentPropertyColor};

  @media screen and (min-width: 768px) {
  }
`;

export const PropertyText = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const PetCardComment = styled.p`
  color: ${(props) => props.theme.colors.PetCardCommentColor};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
`;

export const PetCardBtnsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PetCardButton = styled.button`
  border-radius: 30px;
  padding: ${(props) => (props.$profile ? "13px" : "14px")};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  justify-content: center;
  width: ${(props) =>
    props.$viewed ? "100%" : props.$profile ? "233px" : "231px"};
  margin: 0;
  color: ${(props) => props.theme.colors.PetCardBtnColor};
  background-color: ${(props) => props.theme.colors.PetCardBtnBGColor};
  transition: background-color 300ms linear;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: ${(props) =>
      props.$viewed ? "100%" : props.$profile ? "260px" : "236px"};
    padding: ${(props) => (props.$profile ? "12px" : "14px")};
  }
  @media screen and (min-width: 1280px) {
    width: ${(props) =>
      props.$viewed ? "100%" : props.$profile ? "238px" : "257px"};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.PetCardBtnBGHoverColor};
  }
`;

export const PetCardFavorBtn = styled.button`
  display: ${(props) => (props.$profile ? "none" : "flex")};
  border-radius: 100%;
  width: 46px;
  height: 46px;
  justify-content: center;
  margin: 0;
  color: ${(props) => props.theme.colors.PetCardFavBtnColor};
  background-color: ${(props) => props.theme.colors.PetCardFavBtnBGColor};
  transition: background-color 300ms linear;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.PetCardFavBtnBGHoverColor};
  }
`;

export const PetCardDeleteBtn = styled.button`
  display: ${(props) =>
    props.$viewed ? "none" : props.$profile ? "flex" : "none"};
  border-radius: 100%;
  width: ${(props) => (props.$profile ? "44px" : "46px")};
  height: ${(props) => (props.$profile ? "44px" : "46px")};
  justify-content: center;
  margin: 0;
  color: ${(props) => props.theme.colors.PetCardFavBtnColor};
  background-color: ${(props) => props.theme.colors.PetCardFavBtnBGColor};
  transition: background-color 300ms linear;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.$profile ? "44px" : "48px")};
    height: ${(props) => (props.$profile ? "44px" : "48px")};
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.PetCardFavBtnBGHoverColor};
  }
`;
