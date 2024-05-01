import React from "react";
import { Link } from "react-router-dom";
import {
  ImgStyled,
  ImgThumb,
  NotFoundBtn,
  NotFoundCont,
  NotFoundDescr,
  NotFoundTextWrap,
  NotFoundTitle,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundCont>
      <NotFoundTextWrap>
        <NotFoundTitle>
          4
          <ImgThumb>
            <ImgStyled
              src="./src/assets/imgs/mobile/404-img-1x-mob.jpg"
              alt="cat"
            />
          </ImgThumb>
          4
        </NotFoundTitle>
        <NotFoundDescr>Ooops! This page not found :(</NotFoundDescr>
        <Link to="/">
          <NotFoundBtn type="button">To home page</NotFoundBtn>
        </Link>
      </NotFoundTextWrap>
    </NotFoundCont>
  );
};

export default NotFound;

{
  /* <picture>
  <source
    srcset="./images/desktop/teamcard1-desktop-1x.jpg 1x, 
      ./images/desktop/teamcard1-desktop-2x.jpg 2x"
    media="(min-width:1200px)"
  />

  <source
    srcset="./images/tablet/teamcard1-tablet-1x.jpg 1x, 
      ./images/tablet/teamcard1-tablet-2x.jpg 2x"
    media="(min-width:768px)"
  />

  <source
    srcset="./images/mobile/teamcard1-mobile-1x.jpg 1x, 
      ./images/mobile/teamcard1-mobile-2x.jpg 2x"
    media="(min-width:320px)"
  />

  <img
    csrc="./images/desktop/teamcard1-desktop-1x.jpg"
    alt="Игорь Демьяненко"
  />
</picture>; */
}
