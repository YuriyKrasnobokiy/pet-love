import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 10px 20px 10px;
`;

export const HomeTextCont = styled.div`
  padding: 118px 20px 50px;
  border-radius: 30px;
  text-align: start;
  background-color: ${(props) => props.theme.colors.HomeBgColor};

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 178px 32px 44px;
  }

  @media screen and (min-width: 1280px) {
    padding: 178px 64px 32px;
    display: flex;
    align-items: flex-end;
    gap: 73px;
  }
`;

export const HomeText = styled.h1`
  font-weight: 700;
  font-size: 50px;
  line-height: 0.96;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.HomeTextColor};
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 0.9625;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 90px;
    line-height: 0.96667;
    margin-bottom: 0;
    width: 760px;
  }
`;

export const HomeTextAccent = styled.span`
  color: ${(props) => props.theme.colors.HomeTextAccentColor};
`;

export const HomeDescr = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.HomeTextColor};

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.22222;
    letter-spacing: -0.02em;
    width: 255px;
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.22222;
    letter-spacing: -0.02em;
  }
`;

export const HomeImgStyled = styled.img`
  border-radius: 30px;
`;
