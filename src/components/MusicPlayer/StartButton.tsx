import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const StartOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const Button = styled(motion.button)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${(props) => props.theme.primary || "#4CAF50"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(76, 175, 80, 0.5);
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: white;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;

interface StartButtonProps {
  onStart: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStart }) => {
  return (
    <StartOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Button
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPlay />
      </Button>
      <Text>Click to start audio playback</Text>
    </StartOverlay>
  );
};

export default StartButton;
