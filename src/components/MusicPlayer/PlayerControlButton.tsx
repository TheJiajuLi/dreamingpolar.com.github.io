import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import { useMusicContext } from "../../context/MusicContext";

interface ButtonProps {
  $isPlaying?: boolean;
  $color?: string;
  $variant?: "filled" | "outlined";
  $size?: "small" | "medium" | "large";
}

const StyledButton = styled(motion.button)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) =>
    props.$size === "small"
      ? "6px 10px"
      : props.$size === "large"
      ? "10px 16px"
      : "8px 12px"};
  border-radius: 20px;
  background: ${(props) =>
    props.$isPlaying
      ? props.$variant === "outlined"
        ? "transparent"
        : `rgba(${props.$color || "76, 175, 80"}, 0.2)`
      : props.$variant === "outlined"
      ? "transparent"
      : `linear-gradient(135deg, ${props.$color || "#4CAF50"} 0%, ${
          props.$color ? props.$color + "90" : "#388e3c"
        } 100%)`};
  color: ${(props) =>
    props.$variant === "outlined" ? props.$color || "#4CAF50" : "white"};
  border: 2px solid ${(props) => props.$color || "#4CAF50"};
  cursor: pointer;
  font-size: ${(props) =>
    props.$size === "small"
      ? "12px"
      : props.$size === "large"
      ? "16px"
      : "14px"};
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: ${(props) =>
    props.$variant === "outlined" ? "none" : "0 2px 8px rgba(0, 0, 0, 0.2)"};

  &:hover {
    box-shadow: ${(props) =>
      props.$variant === "outlined"
        ? "0 2px 8px rgba(0, 0, 0, 0.1)"
        : "0 4px 12px rgba(0, 0, 0, 0.25)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  /* Icon and text layout */
  svg {
    margin-right: 6px;
    font-size: ${(props) =>
      props.$size === "small"
        ? "10px"
        : props.$size === "large"
        ? "18px"
        : "14px"};
  }
`;

interface PlayerControlButtonProps {
  variant?: "filled" | "outlined";
  size?: "small" | "medium" | "large";
  color?: string;
  hideText?: boolean;
  className?: string;
  onClick?: () => void;
}

const PlayerControlButton: React.FC<PlayerControlButtonProps> = ({
  variant = "filled",
  size = "medium",
  color,
  hideText = false,
  className,
  onClick,
}) => {
  const { state, dispatch } = useMusicContext();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      dispatch({ type: state.isPlaying ? "PAUSE" : "PLAY" });
    }
  };

  return (
    <StyledButton
      $isPlaying={state.isPlaying}
      $color={color || state.currentTrack?.color}
      $variant={variant}
      $size={size}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {state.isPlaying ? (
        <>
          <FaPause />
          {!hideText && "Pause"}
        </>
      ) : (
        <>
          <FaPlay />
          {!hideText && "Play"}
        </>
      )}
    </StyledButton>
  );
};

export default PlayerControlButton;
