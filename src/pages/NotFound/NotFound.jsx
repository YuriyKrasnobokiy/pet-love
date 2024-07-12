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
