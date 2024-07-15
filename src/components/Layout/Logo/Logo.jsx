import React from "react";
import { LogoLink } from "./Logo.styled";
import { useDeviceType } from "../../../hooks/useDeviceType";
import Icon from "../../Icon/Icon";

export const Logo = ({ isHome, currentTheme }) => {
  const deviceType = useDeviceType();
  return (
    <LogoLink $isHome={isHome} to="/home">
      {deviceType === "tablet" || deviceType === "desktop" ? (
        isHome ? (
          <Icon height={28} width={105} name="icon-logo-white-big" />
        ) : currentTheme === "dark" ? (
          <Icon height={28} width={105} name="icon-logo-white-big" />
        ) : (
          <Icon height={28} width={105} name="icon-logo-big" />
        )
      ) : isHome ? (
        <Icon height={20} width={76} name="icon-logo-white-small" />
      ) : currentTheme === "dark" ? (
        <Icon height={20} width={76} name="icon-logo-white-small" />
      ) : (
        <Icon height={20} width={76} name="icon-logo-small" />
      )}
    </LogoLink>
  );
};
