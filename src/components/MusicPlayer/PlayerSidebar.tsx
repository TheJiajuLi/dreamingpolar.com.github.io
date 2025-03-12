import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import PlayerControls from "./PlayerControls";
import TrackInfo from "./TrackInfo";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const SidebarContainer = styled(motion.div)<{ $isOpen: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: ${(props) => (props.$isOpen ? "380px" : "60px")};
  background: ${(props) => props.theme.surface};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.primary};
  border-radius: 50%;
  color: ${(props) => props.theme.text};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 101;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.accent};
  }
`;

const SidebarContent = styled(motion.div)`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;

const AlbumArt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Cover = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const PlayerSidebar: React.FC<SidebarProps> = ({ isOpen, toggleOpen }) => {
  const { state } = useMusicContext();

  return (
    <SidebarContainer
      $isOpen={isOpen}
      initial={{ x: isOpen ? 0 : 320 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <ToggleButton onClick={toggleOpen}>
        {isOpen ? <FaCaretRight /> : <FaCaretLeft />}
      </ToggleButton>

      {isOpen && (
        <SidebarContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <AlbumArt>
            <Cover
              src={getSafeCoverArt(state.currentTrack?.coverArt)}
              alt={state.currentTrack?.title || "Album Cover"}
            />
            {/* Remove or comment out the Equalizer component here */}
            {/* {state.equalizerActive && <Equalizer />} */}
          </AlbumArt>
          <TrackInfo track={state.currentTrack} />
          <PlayerControls />
        </SidebarContent>
      )}
    </SidebarContainer>
  );
};

export default PlayerSidebar;
