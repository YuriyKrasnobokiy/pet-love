import React from "react";
import Icon from "../Icon/Icon";
import { useDeviceType } from "../../hooks/useDeviceType";

const FormIcon = ({ name }) => {
  const deviceType = useDeviceType();
  const size =
    deviceType === "desktop" ? "22" : deviceType === "tablet" ? "22" : "18";

  return <Icon name={name} width={size} height={size} />;
};

export default FormIcon;
