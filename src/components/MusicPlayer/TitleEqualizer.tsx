import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import TitleEqualizer from "./TitleEqualizer";

const EqualizerImage = styled(motion.img)`
  height: 20px;
  width: auto;
  vertical-align: middle;
`;

const EqualizerContainer = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  height: 20px;
`;

// Fallback animation in case GIF doesn't load
const FallbackAnimation = styled.div`
  display: inline-flex;
  align-items: flex-end;
  height: 20px;
  gap: 2px;
`;

const Bar = styled(motion.div)`
  width: 2px;
  background: white;
  border-radius: 1px;
`;

const TitleEqualizer: React.FC = () => {
  const { state } = useMusicContext();
  
  if (!state.isPlaying || !state.equalizerActive) {
    return null;
  }
  
  return (
    <EqualizerContainer
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "auto" }}
      exit={{ opacity: 0, width: 0 }}
      transition={{ duration: 0.3 }}
    >
      <EqualizerImage
        src="/assets/covers/equalizer_small.gif"
        alt="Now Playing"
        onError={(e) => {
          // If GIF fails to load, show fallback
          e.currentTarget.style.display = "none";
          document.getElementById("fallback-equalizer")?.style.setProperty("display", "inline-flex");
        }}
      />
      <FallbackAnimation id="fallback-equalizer" style={{ display: "none" }}>
        {[0, 1, 2, 3].map((i) => (
          <Bar
            key={i}
            initial={{ height: 5 }}
            animate={{ height: [5, 15, 10, 18, 5] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.1,
            }}
          />
        ))}
      </FallbackAnimation>
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
      <Title>Music Explorer</Title>
      <TitleEqualizer />
    </TitleContainer>
  );
};

export default Playlist;