import React from "react";
import { useNavigate } from "react-router-dom";
import CatDesk from "../../assets/imgs/desctop/404-img-2x-desc.jpg";
import CatMob from "../../assets/imgs/mobile/404-img-2x-mob.jpg";
import CatTab from "../../assets/imgs/tablet/404-img-2x-tablet.jpg";
import { useDeviceType } from "../../hooks/useDeviceType";
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
  const navigate = useNavigate();
  const deviceType = useDeviceType();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <NotFoundCont>
      <NotFoundTextWrap>
        <NotFoundTitle>
          4
          <ImgThumb>
            <ImgStyled
              src={
                deviceType === "desktop"
                  ? CatDesk
                  : deviceType === "tablet"
                  ? CatTab
                  : CatMob
              }
              alt="cat"
            />
          </ImgThumb>
          4
        </NotFoundTitle>
        <NotFoundDescr>Ooops! This page not found :(</NotFoundDescr>
        <NotFoundBtn type="button" onClick={handleClick}>
          To home page
        </NotFoundBtn>
      </NotFoundTextWrap>
    </NotFoundCont>
  );
};

export default NotFound;
