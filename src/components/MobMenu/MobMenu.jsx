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
import { useTheme } from "styled-components";

export const MobMenu = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();
  const [bg, setBg] = useState("white");
  // const [borderColor, setBorderColor] = useState("rgba(38, 38, 38, 0.15)");

  useEffect(() => {
    switch (location.pathname) {
      case "/login":
        setBg(theme.colors.accentColor);
        // setBorderColor("rgba(255, 255, 255, 0.15)");
        break;
      case "/register":
        setBg(theme.colors.accentColor);
        // setBorderColor("rgba(255, 255, 255, 0.15)");
        break;
      default:
        setBg("#ffffff");
        // setBorderColor("rgba(38, 38, 38, 0.15)");
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
          <MobLoginBtn to="/login" onClick={() => dispatch(closeMobMenu())}>
            Login
          </MobLoginBtn>
          <MobRegBtn to="/register" onClick={() => dispatch(closeMobMenu())}>
            Registration
          </MobRegBtn>
        </MobAuthWrap>
      </MobMenuStyled>
    </MobMenuOverlay>
  );
};
