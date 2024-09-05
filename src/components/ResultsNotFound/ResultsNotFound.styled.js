import styled from "styled-components";

export const NotFoundTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(props) => props.theme.colors.ResultsNotFoundColor};
  padding: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const NotFoundAccentText = styled.span`
  color: ${(props) => props.theme.colors.ResultsNotFoundAccentColor};
`;
