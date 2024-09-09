import styled from "styled-components";

export const LocationSelectIconWrap = styled.div`
  display: flex;
  margin-right: 12px;
  align-items: "center";
  color: ${(props) => props.theme.colors.LocationSelectWrapColor};

  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`;
