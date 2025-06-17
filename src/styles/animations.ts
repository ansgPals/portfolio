import { css, keyframes } from "@emotion/react";

const shimmerEffect = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

export const skeletonAnimation = css`
  animation: ${shimmerEffect} 1.25s infinite;
`;
const fadeInUp = keyframes`
  0% {
    transform: translateY(20px); 
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fadeInUpAnimation = css`
  animation: ${fadeInUp} 0.8s ease-out forwards;
`;
