import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useMusicContext } from "../../context/MusicContext";

interface EqualizerProps {
  isPlaying?: boolean;
  dominantColor?: string;
  audioRef?: React.RefObject<HTMLAudioElement>;
  onIntensityChange?: (intensity: number) => void;
}

const EqualizerContainer = styled.div`
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
    <EqualizerContainer>
      {bars.map((height, i) => (
        <Bar key={i} $height={state.isPlaying ? height : 5} $color={color} />
      ))}
    </EqualizerContainer>
  );
};

export default Equalizer;
