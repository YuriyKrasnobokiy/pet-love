import styled from "styled-components";

export const NotFoundCont = styled.div`
  max-width: 335px;
  padding: 0 20px 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 0 32px 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1216px;
  }
`;

export const NotFoundTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.accentColor};
  border-radius: 30px;
  padding: 245px 0;

  @media screen and (min-width: 768px) {
    padding: 221px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 109px;
  }
`;

export const NotFoundTitle = styled.h2`
  display: flex;
  font-weight: 800;
  font-size: 120px;
  line-height: 1;
  color: ${(props) => props.theme.colors.notFoundTextColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 300px;
    margin-bottom: 40px;
  }
`;

export const ImgThumb = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.notFoundImgThumbBGC};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const ImgStyled = styled.img`
  border-radius: 100%;
`;

export const NotFoundDescr = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.notFoundTextColor};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.167;
  }
`;

export const NotFoundBtn = styled.button`
  border-radius: 30px;
  padding: 12px 30px;
  width: 150px;
  background-color: ${(props) => props.theme.colors.notFoundBtnBGC};
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.notFoundBtnColor};
  transition: background-color 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 14px 30px;
    line-height: 1.25;
    width: 162px;
  }

  &:hover {
    background-color: #fbe7c1;
  }
`;
