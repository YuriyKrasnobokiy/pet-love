import styled from "styled-components";

// export const ImgLoaderThumb = styled.div`
//   width: 100%;
//   height: 100hv;
//   background-image: url(/assets/imgs/mobile/start-screen-1x-mob);
//   background-size: cover;
// `;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("./src/assets/imgs/mobile/start-screen-1x-mob.jpg");
  background-size: cover;
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 292px;
  height: 292px;
`;
export const CircleStyled = styled.svg`
  /* width: 100%;
  height: 100%; */
  transform: rotate(-90deg);
`;
