import React, { useEffect, useState } from "react";
import {
  CloseBtn,
  MobAuthWrap,
  MobLoginBtn,
  MobMenuOverlay,
  MobMenuStyled,
  MobNavLink,
  MobNavWrap,
  MobRegBtn,
} from "./MobMenu.styled";
import { useDispatch } from "react-redux";
import { closeMobMenu } from "../../redux/mob-menu/mobMenuSlice";
import Icon from "../Icon/Icon";
import { useLocation } from "react-router-dom";

export const MobMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [bg, setBg] = useState("white");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBg("orange");
        break;
      default:
        setBg("red");
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        dispatch(closeMobMenu());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      // componentWillUnmount(
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [dispatch]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      dispatch(closeMobMenu());
    }
  };

  const handleCloseClick = () => {
    dispatch(closeMobMenu());
  };
  return (
    <MobMenuOverlay onClick={handleOverlayClick}>
      <MobMenuStyled style={{ background: bg }}>
        <CloseBtn onClick={handleCloseClick} type="button">
          <Icon width={32} height={32} name="icon-cross-small" />
        </CloseBtn>
        <MobNavWrap>
          <MobNavLink to="/news" onClick={() => dispatch(closeMobMenu())}>
            News
          </MobNavLink>

          <MobNavLink to="/find-pet" onClick={() => dispatch(closeMobMenu())}>
            Find pet
          </MobNavLink>

          <MobNavLink
            to="/our-friends"
            onClick={() => dispatch(closeMobMenu())}
          >
            Our friends
          </MobNavLink>
        </MobNavWrap>
        <MobAuthWrap>
          <MobLoginBtn>Login</MobLoginBtn>
          <MobRegBtn>Registration</MobRegBtn>
        </MobAuthWrap>
      </MobMenuStyled>
    </MobMenuOverlay>
  );
};
