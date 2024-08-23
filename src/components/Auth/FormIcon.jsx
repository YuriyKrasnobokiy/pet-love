import React from "react";
import { useDeviceType } from "../../hooks/useDeviceType";
import Icon from "../Icon/Icon";

const FormIcon = ({ name }) => {
  const deviceType = useDeviceType();
  const size =
    deviceType === "desktop" ? "22" : deviceType === "tablet" ? "22" : "18";

  return <Icon name={name} width={size} height={size} />;
};

export default FormIcon;
