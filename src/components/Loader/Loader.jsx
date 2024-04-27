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
        <CircleStyled width="292" height="292" viewBox="0 0 292 292">
          {/* Додаємо елемент defs для створення градієнта */}
          <defs>
            <linearGradient
              id="strokeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
            </linearGradient>
          </defs>

          {/* Коло з градієнтним кольором stroke */}
          <circle
            cx="146"
            cy="146"
            r="146"
            stroke="url(#strokeGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray={2 * Math.PI * 146}
            strokeDashoffset={(1 - progress / 100) * (2 * Math.PI * 146)}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontWeight="700"
            fontSize="50"
            letterSpacing="-0.04em"
            fill="#fff"
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
