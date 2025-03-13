import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { useMusicContext } from "../../context/MusicContext";

interface EqualizerProps {
  isPlaying?: boolean;
  dominantColor?: string;
  audioRef?: React.RefObject<HTMLAudioElement>;
  onIntensityChange?: (intensity: number) => void;
}

// Define animations
const pulseAnimation = keyframes`
  /* existing animation */
`;

const flowAnimation = keyframes`
  /* existing animation */
`;

// Update your styled components
const EqualizerContainer = styled.div.attrs({
  className: "dp-equalizer-container",
})<{ $isActive: boolean; $color: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
`;

const Canvas = styled.canvas.attrs({
  className: "dp-equalizer-canvas",
})`
  /* existing styles */
`;

// Fix the animation issue with the css helper
const GlowOverlay = styled.div.attrs({
  className: "dp-equalizer-glow",
})<{ $intensity: number; $color: string; $isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  opacity: ${(props) => (props.$isPlaying ? 0.8 : 0.2)};

  /* Use the css helper for the pulse animation */
  animation: ${(props) =>
    css`
      ${pulseAnimation} ${3 - props.$intensity * 1.5}s infinite ease-in-out
    `};

  background: linear-gradient(
    90deg,
    transparent,
    ${(props) => props.$color}20,
    transparent
  );
  background-size: 200% 200%;
`;

// Add a separate element for the second animation
const FlowEffect = styled.div.attrs({
  className: "dp-equalizer-flow",
})<{ $intensity: number; $color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: 200% 200%;
  /* Use the css helper for the flow animation */
  animation: ${(props) =>
    css`
      ${flowAnimation} ${8 - props.$intensity * 4}s infinite linear
    `};
  mix-blend-mode: overlay;
`;

const Bar = styled.div<{ $height: number; $color: string }>`
  width: 4px;
  height: ${(props) => props.$height}%;
  background-color: ${(props) => props.$color};
  border-radius: 2px;
  transition: height 0.1s ease;
`;

const Equalizer: React.FC<EqualizerProps> = ({
  isPlaying = false,
  dominantColor = "#4CAF50",
  audioRef,
  onIntensityChange,
}) => {
  const { state } = useMusicContext();
  const [bars, setBars] = useState<number[]>(Array(12).fill(10));
  const animationRef = useRef<number>(0);
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    if (!state.isPlaying || !state.equalizerActive) {
      setBars(Array(12).fill(10));
      return;
    }

    const updateBars = () => {
      setBars((prev) =>
        prev.map((height) => {
          // Add some randomness but maintain continuity
          const targetHeight = 20 + Math.random() * 60;
          return height + (targetHeight - height) * 0.3;
        })
      );

      animationRef.current = requestAnimationFrame(updateBars);
    };

    updateBars();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [state.isPlaying, state.equalizerActive]);

  useEffect(() => {
    if (onIntensityChange) {
      onIntensityChange(intensity);
    }
  }, [intensity, onIntensityChange]);

  const color = dominantColor || state.currentTrack?.color || "#388e3c";

  return (
    <EqualizerContainer $isActive={isPlaying} $color={dominantColor}>
      <Canvas ref={audioRef} width="280" height="70" />
      <GlowOverlay
        $intensity={intensity}
        $color={dominantColor}
        $isPlaying={isPlaying}
      >
        <FlowEffect $intensity={intensity} $color={dominantColor} />
      </GlowOverlay>
      {bars.map((height, i) => (
        <Bar key={i} $height={state.isPlaying ? height : 5} $color={color} />
      ))}
    </EqualizerContainer>
  );
};

export default Equalizer;
