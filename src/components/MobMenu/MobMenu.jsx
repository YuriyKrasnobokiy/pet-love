import React, { useEffect, useState } from "react";
import {
  CloseBtn,
  MobMenuOverlay,
  MobMenuStyled,
  MobNavLink,
  MobNavWrap,
} from "./MobMenu.styled";
import { useDispatch, useSelector } from "react-redux";
import { closeMobMenu } from "../../redux/mob-menu/mobMenuSlice";
import Icon from "../Icon/Icon";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { AuthNav } from "../Auth/AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

export const MobMenu = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();
  const [bg, setBg] = useState("white");
  const [changeColor, setChangeColor] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    switch (location.pathname) {
      case "/login":
        setBg(theme.colors.accentColor);
        setChangeColor(true);
        break;
      case "/register":
        setBg(theme.colors.accentColor);
        setChangeColor(true);
        break;
      default:
        setBg("#ffffff");
        setChangeColor(false);
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
      <MobMenuStyled $bg={bg}>
        <CloseBtn
          $changeColor={changeColor}
          onClick={handleCloseClick}
          type="button"
        >
          <Icon width={32} height={32} name="icon-cross-small" />
        </CloseBtn>
        <MobNavWrap>
          <MobNavLink
            to="/news"
            $changeColor={changeColor}
            onClick={() => dispatch(closeMobMenu())}
          >
            News
          </MobNavLink>

          <MobNavLink
            to="/find-pet"
            $changeColor={changeColor}
            onClick={() => dispatch(closeMobMenu())}
          >
            Find pet
          </MobNavLink>

          <MobNavLink
            to="/our-friends"
            $changeColor={changeColor}
            onClick={() => dispatch(closeMobMenu())}
          >
            Our friends
          </MobNavLink>
        </MobNavWrap>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </MobMenuStyled>
    </MobMenuOverlay>
  );
};
