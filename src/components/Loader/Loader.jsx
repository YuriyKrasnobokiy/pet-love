import { useState, useEffect } from "react";
import { CircleStyled, LoaderContainer, ProgressBar } from "./Loader.styled";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 25;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoaderContainer>
      <ProgressBar>
        <CircleStyled width="292" height="292" viewBox="0 0 292 292">
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

          {isMounted && (
            <>
              <circle
                cx="146"
                cy="146"
                r="146"
                stroke="url(#strokeGradient)"
                strokeWidth="1"
                fill="none"
                strokeDasharray={2 * Math.PI * 146}
                strokeDashoffset={(1 - progress / 100) * (2 * Math.PI * 146)}
                style={{
                  transition: "stroke-dashoffset 0.2s ease-in-out",
                }}
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
            </>
          )}
        </CircleStyled>
      </ProgressBar>
    </LoaderContainer>
  );
};

export default Loader;
