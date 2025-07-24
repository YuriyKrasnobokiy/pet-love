import React from "react";
import {
  DescriptionBirth,
  DescriptionBirthDate,
  DescriptionBlock,
  DescriptionImg,
  DescriptionText,
  DescriptionTextWrap,
  DescriptionTitle,
  ImgBox,
} from "./PetBlock.styled";

export const PetBlock = ({
  imageUrl,
  descrImg,
  descrTitle,
  descrText,
  descrDate,
}) => {

  const showDescription = descrImg || descrTitle || descrText || descrDate;

  return (
    <>
      <ImgBox $position={!showDescription} $imageUrl={imageUrl}>
        {showDescription ? 
        <DescriptionBlock>
          <DescriptionImg width="60" src={descrImg} alt="descr-img" />
          <DescriptionTextWrap>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <DescriptionTitle>{descrTitle}</DescriptionTitle>
              <DescriptionBirth>
                Birthday:{" "}
                <DescriptionBirthDate>{descrDate}</DescriptionBirthDate>
              </DescriptionBirth>
            </div>
            <DescriptionText>{descrText}</DescriptionText>
          </DescriptionTextWrap>
        </DescriptionBlock> : null }
      </ImgBox>
    </>
  );
};
