import styled from "styled-components";

export const PetModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => (props.$isLoggedIn ? "40px 28px " : "40px 20px")};
`;

export const PetModalImgWrap = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const PetModalImg = styled.img`
  width: ${(props) => (props.$isLoggedIn ? "120px" : "80px")};
  height: ${(props) => (props.$isLoggedIn ? "120px" : "80px")};
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
  margin-bottom: ${(props) => (props.$isLoggedIn ? "40px" : "24px")};
`;

export const PetModalTitle = styled.h2`
  font-weight: 700;
  font-size: ${(props) => (props.$isLoggedIn ? "16px" : "20px")};
  line-height: ${(props) => (props.$isLoggedIn ? 1.25 : 1)};
  letter-spacing: ${(props) => (props.$isLoggedIn ? "unset" : "-0.03em")};
  color: ${(props) =>
    props.$isLoggedIn
      ? props.theme.colors.PetModalTitleColor
      : props.theme.colors.PetModalAttentionTitleColor};
  margin-bottom: ${(props) => (props.$isLoggedIn ? "10px" : "20px")};
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
  gap: ${(props) => (props.$isLoggedIn ? "10px" : "8px")};
  width: ${(props) => (props.$isLoggedIn ? "100%" : "272px")};
`;

export const PetModalBtn = styled.button`
  border-radius: 30px;
  padding: ${(props) => (props.$isLoggedIn ? "12px 30px" : "12px 24px")};
  width: 100%;
  margin: 0;
  font-weight: ${(props) => (props.$isLoggedIn ? 500 : 700)};
  font-size: ${(props) => (props.$isLoggedIn ? "16px" : "14px")};
  line-height: ${(props) => (props.$isLoggedIn ? 1.25 : 1.286)};
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
