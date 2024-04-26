import React from "react";
const spriteURL = "./src/assets/sprite.svg";

const Icon = ({ name, size }) => {
  return (
    <svg width={size} height={size}>
      <use href={`${spriteURL}#${name}`}></use>
    </svg>
  );
};

export default Icon;
