import styled from "styled-components";

export const PetCardWrap = styled.li`
  padding: 24px;
  max-width: 287px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const PetCardImg = styled.img`
  border-radius: 16px;
  max-width: 287px;
  width: 100%;
  height: 178px;
  margin-bottom: 24px;
  object-fit: cover;
  object-position: top;
`;

export const PetCardTextBlock = styled.div`
  margin-bottom: 42px;
`;

export const PetCardTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.PetCardTitleColor};
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
`;

export const PetCardComment = styled.p`
  color: ${(props) => props.theme.colors.PetCardCommentColor};
`;

export const PetCardButton = styled.button`
  border-radius: 30px;
  padding: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  justify-content: center;
  width: 231px;
`;

export const PropertyText = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;
