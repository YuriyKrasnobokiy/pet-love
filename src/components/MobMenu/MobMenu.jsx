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
import { toast } from "react-toastify";

export const MobMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [changeColor, setChangeColor] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    switch (location.pathname) {
      case "/login":
        setChangeColor(true);
        break;
      case "/register":
        setChangeColor(true);
        break;
      default:
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

  const handleNavClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast.warning("You need to be logged in 😕");
      dispatch(closeMobMenu());
    } else {
      dispatch(closeMobMenu());
    }
  };

  return (
    <MobMenuOverlay onClick={handleOverlayClick}>
      <MobMenuStyled $changeColor={changeColor}>
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
            onClick={handleNavClick}
          >
            News
          </MobNavLink>

          <MobNavLink
            to="/find-pet"
            $changeColor={changeColor}
            onClick={handleNavClick}
          >
            Find pet
          </MobNavLink>

          <MobNavLink
            to="/our-friends"
            $changeColor={changeColor}
            onClick={handleNavClick}
          >
            Our friends
          </MobNavLink>
        </MobNavWrap>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </MobMenuStyled>
    </MobMenuOverlay>
  );
};
