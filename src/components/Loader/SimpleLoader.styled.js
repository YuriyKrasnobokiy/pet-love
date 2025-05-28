import styled from "styled-components";

export const SimpleLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background: ${(props) => props.theme.colors.mainBgColor};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 9999;
`;

export const SimpleProgressBar = styled.div`
  position: relative;
  width: 292px;
  height: 292px;
`;
export const SimpleCircleStyled = styled.svg`
  transform: rotate(-90deg);
  color: red;
`;
