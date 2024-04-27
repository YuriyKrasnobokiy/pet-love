import React, { useState, useEffect } from "react";
import { CircleStyled, LoaderContainer, ProgressBar } from "./Loader.styled";

const Loader = () => {
  // Стан для прогрес-бару
  const [progress, setProgress] = useState(0);

  // Імітація збільшення прогрес-бару
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 25;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoaderContainer>
      <ProgressBar>
        <CircleStyled width="294" height="294">
          <circle
            cx="146"
            cy="146"
            r="146"
            stroke="gray"
            strokeWidth="2"
            fill="none"
            strokeDasharray={2 * Math.PI * 146}
            strokeDashoffset={(1 - progress / 100) * (2 * Math.PI * 146)}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
            fontSize="20"
            transform="rotate(90 146 146)"
          >
            {progress}%
          </text>
        </CircleStyled>
      </ProgressBar>
    </LoaderContainer>
  );
};

export default Loader;
