import styled from "styled-components";

export const ResNotFoundWrap = styled.div`
  padding: ${(props) => (props.$isProfile ? 0 : "20px")};
`;
export const ResNotFoundImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
`;

export const NotFoundTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(props) => props.theme.colors.ResultsNotFoundColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1250px) {
    width: 456px;
  }
`;

export const NotFoundAccentText = styled.span`
  color: ${(props) => props.theme.colors.ResultsNotFoundAccentColor};
`;
