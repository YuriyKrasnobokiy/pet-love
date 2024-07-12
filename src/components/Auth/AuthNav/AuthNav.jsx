import React from "react";
import { MobAuthWrap, MobLoginBtn, MobRegBtn } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <MobAuthWrap>
      <MobLoginBtn to="/login" onClick={() => dispatch(closeMobMenu())}>
        Login
      </MobLoginBtn>
      <MobRegBtn to="/register" onClick={() => dispatch(closeMobMenu())}>
        Registration
      </MobRegBtn>
    </MobAuthWrap>
  );
};
