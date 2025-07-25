import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../../../components/Icon/Icon";
import { useDeviceType } from "../../../hooks/useDeviceType";

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px){
    margin-bottom: -20px;
  }
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const RoundLabel = styled.label`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$opt === "female"
      ? "rgba(244, 63, 94, 0.1)"
      : props.$opt === "male"
      ? "rgba(84, 173, 255, 0.1)"
      : "#fff4df"};
  color: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.8s ease;

  &:hover {
    background-color: ${(props) =>
      props.$opt === "female"
        ? "#F43F5E"
        : props.$opt === "male"
        ? "#54adff"
        : "#f6b83d"};
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const StyledRadioWrapper = styled.div`
  ${HiddenRadio}:checked + ${RoundLabel} {
    background-color: ${(props) =>
      props.$opt === "female"
        ? "#F43F5E"
        : props.$opt === "male"
        ? "#54adff"
        : "#f6b83d"};
  }
`;

const addPetRadioOpts = [
  { name: "female", value: "female" },
  { name: "male", value: "male" },
  { name: "multiple", value: "multiple" },
];

const AddPetRadioGroup = ({setValue, watch}) => {
  const deviceType = useDeviceType();
  const selected = watch("sex");
  const [hovered, setHovered] = useState(false);

  return (
    <RadioGroup role="radiogroup" aria-label="Select option">
      {addPetRadioOpts.map((opt) => (
        <StyledRadioWrapper $opt={opt.name} key={opt.name}>
          <HiddenRadio
            id={`radio-${opt.name}`}
            name="sex"
            value={opt.value}
            checked={selected === opt.value}
            // onChange={() => setValue("sex", opt.value)}
            onChange={() => {
              setValue("sex", opt.value, { shouldValidate: true });
            }}
          />

          <RoundLabel
            onMouseEnter={() => setHovered(opt.name)}
            onMouseLeave={() => setHovered(null)}
            $opt={opt.name}
            htmlFor={`radio-${opt.name}`}
          >
            <Icon
              name={
                selected === opt.name || hovered === opt.name
                  ? `icon-${opt.name}`
                  : `icon-sex-${opt.name}`
              }
              width={
                deviceType === "desktop"
                  ? 24
                  : deviceType === "tablet"
                  ? 24
                  : 20
              }
              height={
                deviceType === "desktop"
                  ? 24
                  : deviceType === "tablet"
                  ? 24
                  : 20
              }
            />
          </RoundLabel>
        </StyledRadioWrapper>
      ))}
    </RadioGroup>
  );
};

export default AddPetRadioGroup;
