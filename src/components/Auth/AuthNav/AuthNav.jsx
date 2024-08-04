import React from "react";
import { MobAuthWrap, MobLoginBtn, MobRegBtn } from "./AuthNav.styled";
import { useDispatch } from "react-redux";
import { closeMobMenu } from "../../../redux/mob-menu/mobMenuSlice";

export const AuthNav = ({ burger }) => {
  const dispatch = useDispatch();
  return (
    <MobAuthWrap $isBurger={burger}>
      <MobLoginBtn to="/login" onClick={() => dispatch(closeMobMenu())}>
        Login
      </MobLoginBtn>
      <MobRegBtn to="/register" onClick={() => dispatch(closeMobMenu())}>
        Registration
      </MobRegBtn>
    </MobAuthWrap>
  );
};
