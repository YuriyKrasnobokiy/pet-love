import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
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

export const MobMenu = () => {
  const dispatch = useDispatch();

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
      <MobMenuStyled>
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
