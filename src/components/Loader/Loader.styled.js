import styled from "styled-components";
import loaderImgMobile from "../../assets/imgs/mobile/start-screen-2x-mob.jpg";
import loaderImgTablet from "../../assets/imgs/tablet/start-screen-img-2x-tablet.jpg";
import loaderImgDesktop from "../../assets/imgs/desctop/start-screen-img-2x-desc.jpg";

export const LoaderContainer = styled.div`
position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${loaderImgMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 9999;

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${loaderImgTablet});
  }

  @media screen and (min-width: 1280px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${loaderImgDesktop});
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 292px;
  height: 292px;
`;
export const CircleStyled = styled.svg`
  transform: rotate(-90deg);
`;
