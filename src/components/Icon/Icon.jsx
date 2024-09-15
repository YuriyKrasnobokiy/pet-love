import React from "react";
const spriteURL = "/pet-love/sprite.svg";
// const spriteURL = "./sprite.svg";
const Icon = ({ name, width, height }) => {
  return (
    <svg width={width} height={height}>
      {/* <use href={`${spriteURL}#${name}`}></use> */}
      <use href={`${window.location.origin}${spriteURL}#${name}`}></use>
    </svg>
  );
};

export default Icon;
