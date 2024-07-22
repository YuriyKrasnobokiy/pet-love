import styled from "styled-components";

export const ImgBox = styled.div`
  background-color: ${(props) => props.theme.colors.accentColor};
  border-radius: 30px;
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.$imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  position: relative;

  @media screen and (min-width: 768px) {
    height: 302px;
    background-position: right;
    background-size: contain;
  }
`;

export const DescriptionBlock = styled.div`
  display: none;
  border-radius: 20px;
  background-color: #fff;
  gap: 8px;
  padding: 18px 16px;
  width: 262px;
  color: rgba(38, 38, 38, 0.8);
  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    bottom: 32px;
    left: 32px;
  }
`;

export const DescriptionImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const DescriptionTextWrap = styled.div`
  display: block;
`;

export const DescriptionTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.LoginDescrTitleColor};
`;

export const DescriptionBirth = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.LoginDescrBirthTitleColor};
`;

export const DescriptionBirthDate = styled.span`
  color: ${(props) => props.theme.colors.LoginDescrBirthColor};
`;

export const DescriptionText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.LoginDescrTextColor};
`;
