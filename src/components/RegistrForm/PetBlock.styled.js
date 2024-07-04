import styled from "styled-components";

export const ImgBox = styled.div`
  background-color: ${(props) => props.theme.colors.accentColor};
  border-radius: 30px;
  width: 335px;
  height: 280px;
  background-image: url(${(props) => props.$imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;
