import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0 20px 10px;
`;

export const HomeTextCont = styled.div`
  padding: 50px 20px;
  border-radius: 30px;
  text-align: start;
  background-color: ${(props) => props.theme.colors.HomeBgColor};
`;

export const HomeText = styled.h1`
  font-weight: 700;
  font-size: 50px;
  line-height: 0.96;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.HomeTextColor};
  margin-bottom: 24px;
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
`;

export const HomeImgStyled = styled.img`
  border-radius: 30px;
`;
