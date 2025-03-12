import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";

// Container for the animated equalizer bars
const EqualizerContainer = styled(motion.div)`
  display: inline-flex;
  align-items: flex-end;
  height: 20px;
  gap: 2px;
  margin-left: 10px;
  vertical-align: middle;
`;

// Individual bars with dynamic color
const Bar = styled(motion.div)<{ $color?: string }>`
  width: 3px;
  background-color: ${(props) =>
    props.$color || props.theme.primary || "#4CAF50"};
  border-radius: 1px;
`;

const TitleEqualizer: React.FC = () => {
  const { state } = useMusicContext();

  // Get color from current track if available
  const color = state.currentTrack?.color || "#4CAF50";

  return (
    <EqualizerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Multiple bars with different animations */}
      {[0, 1, 2, 3].map((i) => (
        <Bar
          key={i}
          $color={color}
          initial={{ height: 5 }}
          animate={{
            height: [
              4 + Math.random() * 3,
              10 + Math.random() * 6,
              6 + Math.random() * 4,
              12 + Math.random() * 4,
              4 + Math.random() * 3,
            ],
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </EqualizerContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin-right: 10px;
`;

const Playlist: React.FC = () => {
  return (
    <TitleContainer>
      <TitleEqualizer />
    </TitleContainer>
  );
};

export default Playlist;
