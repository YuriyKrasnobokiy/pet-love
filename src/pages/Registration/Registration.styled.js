import styled from "styled-components";
import catImg from "../../assets/imgs/mobile/registr-img-1x-mob.jpg";

export const RegistrWrap = styled.div`
  padding: 6px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CatImgThumb = styled.div`
  background-color: ${(props) => props.theme.colors.accentColor};
  border-radius: 30px;
  width: 335px;
  height: 280px;
  background-image: url(${catImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;
