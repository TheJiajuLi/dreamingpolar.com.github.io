import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeMute,
  FaRandom,
  FaRedo,
  FaBars,
  FaTimes,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaLockOpen,
} from "react-icons/fa";
import { MdEqualizer } from "react-icons/md";
import Playlist from "./Playlist";
import Visualizer from "../Visualizer/Visualizer";
import Equalizer from "../Visualizer/Equalizer";
import StartButton from "./StartButton";
import { PlayerState, Track, SidebarMode } from "../../types/music";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 25%,
      rgba(76, 175, 80, 0.4) 50%,
      rgba(56, 142, 60, 0.2) 75%,
      transparent 100%
    );
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
    animation: flowLeft 8s infinite linear;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 25%,
      rgba(76, 175, 80, 0.4) 50%,
      rgba(56, 142, 60, 0.2) 75%,
      transparent 100%
    );
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
    animation: flowRight 8s infinite linear;
  }

  @keyframes flowLeft {
    0% {
      background-position: 0% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  @keyframes flowRight {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 0% 0;
    }
  }
`;

const MainContent = styled.div`
  flex: 1;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 25%,
      rgba(76, 175, 80, 0.4) 50%,
      rgba(56, 142, 60, 0.2) 75%,
      transparent 100%
    );
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
  }

  &::before {
    left: 0;
    animation: flowUp 12s infinite linear;
  }

  &::after {
    right: 0;
    animation: flowDown 12s infinite linear;
  }

  @keyframes flowUp {
    0% {
      background-position: 0 200%;
    }
    100% {
      background-position: 0 0;
    }
  }

  @keyframes flowDown {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 200%;
    }
  }

  @media (max-width: 600px) {
    padding: 15px 10px;
  }
`;

// Add this new component for the energy particles
const EnergyParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(76, 175, 80, 0.6);
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.8), 0 0 20px rgba(76, 175, 80, 0.4);
    opacity: 0;
  }

  &::before {
    top: 10%;
    left: 10%;
    animation: floatParticle1 15s infinite ease-in-out;
  }

  &::after {
    bottom: 20%;
    right: 15%;
    animation: floatParticle2 18s infinite ease-in-out;
  }

  @keyframes floatParticle1 {
    0%,
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    25% {
      transform: translate(30vw, 20vh);
      opacity: 0.7;
    }
    50% {
      transform: translate(60vw, 10vh);
      opacity: 0.3;
    }
    75% {
      transform: translate(80vw, 30vh);
      opacity: 0.6;
    }
  }

  @keyframes floatParticle2 {
    0%,
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    25% {
      transform: translate(-20vw, -10vh);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50vw, -30vh);
      opacity: 0.8;
    }
    75% {
      transform: translate(-70vw, -5vh);
      opacity: 0.4;
    }
  }
`;

const BackgroundVisualizer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

// Animation constants for consistent timing across components
const ANIMATION_TIMING = {
  sidebar: 0.3,
  buttonDelay: 0.15,
  buttonTransition: 0.35,
};

// Update the PlayerSidebarContainer to use framer-motion consistently
const PlayerSidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 280px;
  max-width: 75vw;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(56, 142, 60, 0.1);
  overflow: hidden; // Important for containing the animated line

  /* Animated divider line with water-like effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 20%,
      rgba(76, 175, 80, 0.6) 50%,
      rgba(56, 142, 60, 0.2) 80%,
      transparent 100%
    );
    animation: waterFlowAnimation 3s ease-in-out infinite;
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
  }

  /* Animated glow effect */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 5px;
    height: 150px;
    transform: translateY(-50%);
    background: radial-gradient(
      ellipse at left,
      rgba(76, 175, 80, 0.6) 0%,
      transparent 70%
    );
    filter: blur(5px);
    animation: pulseGlow 2s ease-in-out infinite;
  }

  @keyframes waterFlowAnimation {
    0% {
      background-position: 0 0%;
      background-size: 100% 100%;
    }
    25% {
      background-size: 100% 90%;
    }
    50% {
      background-position: 0 100%;
      background-size: 100% 110%;
    }
    75% {
      background-size: 100% 90%;
    }
    100% {
      background-position: 0 0%;
      background-size: 100% 100%;
    }
  }

  @keyframes pulseGlow {
    0%,
    100% {
      opacity: 0.7;
      height: 150px;
    }
    50% {
      opacity: 0.9;
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    width: 260px;
  }

  @media (max-width: 380px) {
    width: 100%; /* Full width sidebar for very small screens */
    max-width: none;
    border-left: none;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    /* Special treatment for landscape orientation on small devices */
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;

    & > div:first-of-type {
      grid-column: 1;
    }

    & > div:last-of-type {
      grid-column: 2;
      padding-left: 0;
    }
  }
`;

// Rename the button and update position
const MusicControlButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  right: ${(props) => (props.$isOpen ? "330px" : "20px")};
  top: 20px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.5), 0 0 20px rgba(76, 175, 80, 0.3);
  transform: scale(${(props) => (props.$isOpen ? 1 : 0.9)});

  &:hover {
    transform: scale(1.1);
    background: ${(props) => props.theme.primaryHover};
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.7), 0 0 30px rgba(76, 175, 80, 0.4);
  }

  @media (max-width: 600px) {
    right: ${(props) => (props.$isOpen ? "290px" : "10px")};
    width: 40px;
    height: 40px;
    top: 10px;
  }
`;

// Update SidebarIndicator to work with Framer Motion for smoother transitions
const SidebarIndicator = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 50%;
  width: 4px;
  height: 100px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(76, 175, 80, 0.3) 20%,
    rgba(76, 175, 80, 0.7) 50%,
    rgba(76, 175, 80, 0.3) 80%,
    transparent 100%
  );
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  cursor: pointer;
  z-index: 999;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(76, 175, 80, 0.4);
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.7), 0 0 20px rgba(76, 175, 80, 0.4);
    opacity: 0.6;
    animation: waterBounce 2.5s ease-in-out infinite;
  }

  @keyframes waterBounce {
    0%,
    100% {
      transform: scaleY(1);
      opacity: 0.6;
    }
    50% {
      transform: scaleY(1.2) translateY(-5px);
      opacity: 0.8;
    }
  }

  @media (max-width: 380px) {
    height: 120px;

    &::before {
      opacity: 0.8;
    }
  }
`;

// Update AlbumSection for better small screen support
const AlbumSection = styled.div<{ $bgColor?: string }>`
  padding: 30px;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.$bgColor
      ? `linear-gradient(45deg, ${props.$bgColor}40, ${props.theme.background})`
      : props.theme.background};
  overflow: hidden;

  @media (max-width: 380px) {
    padding: 20px 15px;
  }

  @media (max-height: 600px) {
    padding: 15px 10px;
    justify-content: flex-start;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    padding: 10px;
    justify-content: center;

    & > div {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`;

const AlbumBackground = styled.div<{ $bgColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: ${(props) => props.$bgColor || "transparent"};
  z-index: 0;
  filter: blur(50px);
  transition: background 0.5s ease;
`;

// Water ripple effect for the album art
const AlbumArtRipple = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
    border: 2px solid rgba(76, 175, 80, 0.3);
    transform: translate(-50%, -50%) scale(0);
    animation: rippleEffect 5s infinite ease-out;
  }

  &::after {
    animation-delay: 2.5s;
  }

  @keyframes rippleEffect {
    0% {
      transform: translate(-50%, -50%) scale(0.3);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
  }
`;

// Update the AlbumArt component to include the ripple
// Update AlbumArt to be more responsive
const AlbumArt = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  max-width: calc(100% - 40px);
  max-height: calc(100vw - 120px);
  margin: 40px auto 15px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
  z-index: 1;

  @media (max-height: 700px) {
    width: 180px;
    height: 180px;
    margin: 30px auto 10px;
  }

  @media (max-height: 600px) {
    width: 140px;
    height: 140px;
    margin: 15px auto 10px;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    width: 120px;
    height: 120px;
    margin: 5px auto;
  }

  @media (max-width: 380px) {
    margin-top: 60px; /* Extra space for the control buttons at the top */
  }
`;

// Update the Cover component
const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TrackInfo = styled.div`
  text-align: center;
  margin-top: 20px;
  z-index: 1;

  @media (max-height: 700px) {
    margin-top: 12px;
  }
`;

const TrackTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 6px 0;

  @media (max-height: 700px) {
    font-size: 1.2rem;
    margin: 0 0 4px 0;
  }
`;

const TrackArtist = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.textSecondary};
  margin: 0 0 5px 0;
`;

const TrackAlbum = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textSecondary};
  opacity: 0.8;
`;

// Make controls more touch-friendly on small screens
const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  gap: 15px;
  z-index: 1;
  padding: 8px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    border: 1px solid rgba(76, 175, 80, 0.3);
    box-shadow: inset 0 0 10px rgba(76, 175, 80, 0.1);
    pointer-events: none;
  }

  @media (max-height: 700px) {
    margin-top: 15px;
    gap: 10px;
  }

  @media (max-height: 600px) {
    margin-top: 10px;
    padding: 6px;
  }

  @media (max-width: 380px) {
    width: 90%;
    justify-content: space-around;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    margin-top: 5px;
    padding: 5px;
  }
`;

// Make control buttons larger on small screens for better touch targets
const ControlButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, color 0.2s ease;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    color: ${(props) => props.theme.primary};
    transform: scale(1.1);
  }

  @media (max-width: 380px) {
    min-width: 44px;
    min-height: 44px;
    padding: 10px;
  }
`;

const PlayPauseButton = styled(ControlButton)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  color: white;
  font-size: 1.4rem;
  position: relative;
  overflow: hidden;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: ${(props) => props.theme.primary};
    opacity: 0.4;
    z-index: -1;
    animation: pulse 2s infinite ease-out;
  }

  &:hover {
    background: ${(props) => props.theme.primaryHover};
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.7);

    &::before {
      animation: pulse 1s infinite ease-out;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.5;
    }
  }

  @media (max-height: 700px) {
    width: 46px;
    height: 46px;
    font-size: 1.2rem;
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  padding: 0 15px;
  z-index: 1;

  @media (max-height: 700px) {
    margin-top: 15px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  position: relative;
  cursor: pointer;
`;

const Progress = styled.div<{ $width: string }>`
  height: 100%;
  background: ${(props) => props.theme.primary};
  border-radius: 2px;
  width: ${(props) => props.$width};
  transition: width 0.1s linear;
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${(props) => props.theme.textSecondary};
  margin-top: 10px;
`;

// Update ExtraControls to be more touch-friendly
const ExtraControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media (max-width: 380px) {
    padding: 15px;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    padding: 10px 20px;
  }
`;

// Improve the VolumeControl for smaller screens
const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 380px) {
    flex: 1;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    width: 100px;
  }
`;

// Make volume slider more touch-friendly
const VolumeSlider = styled.input.attrs({
  type: "range",
  min: 0,
  max: 1,
  step: 0.01,
})`
  width: 80px;
  height: 4px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => props.theme.primary};
    cursor: pointer;
  }

  @media (max-width: 380px) {
    flex: 1;
    height: 6px;

    &::-webkit-slider-thumb {
      width: 16px;
      height: 16px;
    }
  }
`;

const ToggleButtons = styled.div`
  display: flex;
  gap: 15px;
`;

// PlayerSidebar Component
const PlayerSidebar = React.forwardRef<
  HTMLDivElement,
  { isOpen: boolean; toggleOpen: () => void }
>(({ isOpen, toggleOpen }, ref) => {
  const { state, dispatch } = useMusicContext();
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const bgColor = state.currentTrack?.color || "#388e3c";

  useEffect(() => {
    if (state.isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [state.isPlaying, state.currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume;
    }
  }, [state.volume]);

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
    return "0:00";
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      dispatch({ type: "SET_PROGRESS", payload: currentTime });
      dispatch({ type: "SET_DURATION", payload: duration });
    }
  };

  const setProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current) {
      const width = progressBarRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      const duration = audioRef.current.duration;
      audioRef.current.currentTime = (clickX / width) * duration;
    }
  };

  const togglePlay = () => {
    if (state.isPlaying) {
      dispatch({ type: "PAUSE" });
    } else {
      dispatch({ type: "PLAY" });
    }
  };

  const nextTrack = () => {
    dispatch({ type: "NEXT_TRACK" });
  };

  const prevTrack = () => {
    dispatch({ type: "PREV_TRACK" });
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type: "SET_VOLUME", payload: value });
  };

  return (
    <PlayerSidebarContainer
      $isOpen={isOpen}
      className="player-sidebar"
      ref={ref}
      initial={{ right: "-280px" }}
      animate={{ right: isOpen ? 0 : "-280px" }}
      transition={{
        duration: ANIMATION_TIMING.sidebar,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      <SidebarGlow />

      <CloseButton onClick={toggleOpen} aria-label="Close music player">
        <FaTimes />
      </CloseButton>

      {/* Add Sidebar Mode Indicator with clear letter indicators */}
      <SidebarModeIndicator
        $mode={
          isValidSidebarMode(state.sidebarMode) ? state.sidebarMode : "auto"
        }
      >
        {state.sidebarMode === "auto" && (
          <>
            <span className="mode-letter">A</span>
            <FaEye />
            <span className="mode-name">Auto-hide</span>
          </>
        )}
        {state.sidebarMode === "always" && (
          <>
            <span className="mode-letter">S</span>
            <FaLock />
            <span className="mode-name">Stay visible</span>
          </>
        )}
        {state.sidebarMode === "manual" && (
          <>
            <span className="mode-letter">M</span>
            <FaLockOpen />
            <span className="mode-name">Manual control</span>
          </>
        )}
        {/* Add a default case to handle unexpected values */}
        {!["auto", "always", "manual"].includes(state.sidebarMode) && (
          <>
            <span className="mode-letter">A</span>
            <FaEye />
            <span className="mode-name">Auto-hide</span>
          </>
        )}
      </SidebarModeIndicator>

      <audio
        ref={audioRef}
        src={state.currentTrack?.audioSrc}
        onTimeUpdate={updateProgress}
        onEnded={nextTrack}
      />

      <AlbumSection $bgColor={bgColor}>
        <AlbumBackground $bgColor={bgColor} />

        {state.currentTrack ? (
          <>
            <AlbumArt>
              <Cover
                src={state.currentTrack.coverArt}
                alt={state.currentTrack.title}
              />
              <AlbumArtRipple />
              {state.equalizerActive && <Equalizer />}
            </AlbumArt>

            <TrackInfo>
              <TrackTitle>{state.currentTrack.title}</TrackTitle>
              <TrackArtist>{state.currentTrack.artist}</TrackArtist>
              <TrackAlbum>{state.currentTrack.album}</TrackAlbum>
            </TrackInfo>

            <Controls>
              <ControlButton onClick={prevTrack}>
                <FaBackward />
              </ControlButton>

              <PlayPauseButton onClick={togglePlay}>
                {state.isPlaying ? <FaPause /> : <FaPlay />}
              </PlayPauseButton>

              <ControlButton onClick={nextTrack}>
                <FaForward />
              </ControlButton>
            </Controls>

            <ProgressContainer>
              <ProgressBar ref={progressBarRef} onClick={setProgress}>
                <Progress
                  $width={`${(state.progress / state.duration) * 100}%`}
                />
              </ProgressBar>
              <TimeInfo>
                <span>{formatTime(state.progress)}</span>
                <span>{formatTime(state.duration)}</span>
              </TimeInfo>
            </ProgressContainer>
          </>
        ) : (
          <TrackInfo>
            <TrackTitle>No track selected</TrackTitle>
            <TrackArtist>Select a track to play</TrackArtist>
          </TrackInfo>
        )}
      </AlbumSection>

      <ExtraControls>
        <VolumeControl>
          {state.volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
          <VolumeSlider value={state.volume} onChange={handleVolumeChange} />
        </VolumeControl>

        <ToggleButtons>
          <ControlButton
            onClick={() => dispatch({ type: "TOGGLE_SHUFFLE" })}
            style={{ color: state.isShuffling ? "#388e3c" : "" }}
          >
            <FaRandom />
          </ControlButton>

          <ControlButton
            onClick={() => dispatch({ type: "TOGGLE_REPEAT" })}
            style={{ color: state.isRepeating ? "#388e3c" : "" }}
          >
            <FaRedo />
          </ControlButton>

          <ControlButton
            onClick={() => dispatch({ type: "TOGGLE_EQUALIZER" })}
            style={{ color: state.equalizerActive ? "#388e3c" : "" }}
          >
            <MdEqualizer />
          </ControlButton>

          <ControlButton
            onClick={() => dispatch({ type: "TOGGLE_VISUALIZER" })}
            style={{ color: state.visualizerActive ? "#388e3c" : "" }}
          >
            <FaBars />
          </ControlButton>
        </ToggleButtons>
      </ExtraControls>
    </PlayerSidebarContainer>
  );
});

// Add this styled component definition before it's referenced
const SidebarGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.1) 0%,
      rgba(76, 175, 80, 0) 70%
    );
    opacity: 0.7;
    animation: rotateGradient 15s infinite linear;
  }

  @keyframes rotateGradient {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Add this before the CloseButton definition
const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

// Update SidebarModeIndicator to be more visible on small screens
const SidebarModeIndicator = styled.div<{ $mode: SidebarMode }>`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  color: ${(props) => {
    switch (props.$mode) {
      case "auto":
        return "rgba(76, 175, 80, 1)";
      case "always":
        return "rgba(33, 150, 243, 1)";
      case "manual":
        return "rgba(255, 152, 0, 1)";
      default:
        return "rgba(76, 175, 80, 1)";
    }
  }};
  font-size: 0.75rem;
  user-select: none;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 10;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  span {
    display: none;
  }

  &:hover span {
    display: inline;
  }

  @media (max-width: 380px) {
    padding: 6px 10px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

// Add proper type guard function to validate sidebarMode values
const isValidSidebarMode = (mode: any): mode is SidebarMode => {
  return mode === "auto" || mode === "always" || mode === "manual";
};

// Update the MusicPlayer component to use framer-motion for animations
const MusicPlayer: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // Handle sidebar behavior based on the selected mode
  useEffect(() => {
    // No need to handle sidebar if audio isn't enabled yet
    if (!audioEnabled) return;

    // Logic for automatic mode
    if (state.sidebarMode === "auto") {
      // Function to handle mouse movements
      const handleMouseMove = (e: MouseEvent) => {
        const screenWidth = window.innerWidth;
        const edgeThreshold = Math.min(80, screenWidth * 0.08);

        // Open sidebar when mouse is near the edge
        if (e.clientX > screenWidth - edgeThreshold && !isSidebarOpen) {
          setSidebarOpen(true);
          dispatch({ type: "SIDEBAR_INTERACTION" });
        }

        // Close sidebar when mouse leaves the sidebar area completely
        if (isSidebarOpen) {
          // Calculate sidebar boundaries
          const sidebarWidth = 280; // Match your sidebar width
          const sidebarLeft = screenWidth - sidebarWidth;

          // Check if mouse is outside the sidebar area
          if (e.clientX < sidebarLeft) {
            // Close immediately when cursor leaves sidebar area
            setSidebarOpen(false);
          }
        }
      };

      // Function to handle clicks outside for both desktop and mobile
      const handleClickOutside = (e: MouseEvent) => {
        if (isSidebarOpen && sidebarRef.current) {
          // Check if click is outside the sidebar
          if (!sidebarRef.current.contains(e.target as Node)) {
            setSidebarOpen(false);
          }
        }
      };

      // Function to handle touch events for mobile
      const handleTouchMove = (e: TouchEvent) => {
        if (isSidebarOpen && e.touches.length > 0) {
          const touch = e.touches[0];
          const screenWidth = window.innerWidth;
          const sidebarWidth = 280; // Match your sidebar width

          // Close sidebar if touch is clearly outside the sidebar area
          if (touch.clientX < screenWidth - sidebarWidth - 30) {
            setSidebarOpen(false);
          }
        }
      };

      // Add event listeners
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("touchmove", handleTouchMove);

      // Cleanup
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("touchmove", handleTouchMove);
      };
    }

    // Logic for always-visible mode
    if (state.sidebarMode === "always") {
      setSidebarOpen(true);
    }

    // Manual mode doesn't need any auto-behavior
  }, [state.sidebarMode, isSidebarOpen, audioEnabled, dispatch, sidebarRef]);

  // Handle track changes
  const updateProgress = (audio: React.RefObject<HTMLAudioElement>) => {
    if (audio.current) {
      const currentTime = audio.current.currentTime;
      const duration = audio.current.duration;

      if (!isNaN(currentTime) && !isNaN(duration)) {
        dispatch({ type: "SET_PROGRESS", payload: currentTime });
        dispatch({ type: "SET_DURATION", payload: duration });
      }
    }
  };

  const nextTrack = () => {
    dispatch({ type: "NEXT_TRACK" });
  };

  // Toggle sidebar visibility manually
  const toggleSidebar = () => {
    // If in manual mode, just toggle
    if (state.sidebarMode === "manual") {
      setSidebarOpen(!isSidebarOpen);
      dispatch({ type: "SIDEBAR_INTERACTION" });
    }
    // In other modes, also switch to manual mode
    else {
      dispatch({ type: "SET_SIDEBAR_MODE", payload: "manual" });
      setSidebarOpen(!isSidebarOpen);
      dispatch({ type: "SIDEBAR_INTERACTION" });
    }
  };

  // Add this near the top of the component to ensure sidebarMode is valid
  useEffect(() => {
    if (!isValidSidebarMode(state.sidebarMode)) {
      // If sidebarMode is invalid, reset it to a default value
      console.warn(
        `Invalid sidebarMode: ${state.sidebarMode}, resetting to "auto"`
      );
      dispatch({ type: "SET_SIDEBAR_MODE", payload: "auto" });
    }
  }, [state.sidebarMode, dispatch]);

  // Refactor the cycleSidebarMode function to be more resilient
  const cycleSidebarMode = () => {
    let nextMode: SidebarMode = "auto"; // Default fallback

    // Use a more defensive approach with explicit type checking
    if (state.sidebarMode === "auto") {
      nextMode = "always";
      setSidebarOpen(true);
    } else if (state.sidebarMode === "always") {
      nextMode = "manual";
    } else if (state.sidebarMode === "manual") {
      nextMode = "auto";
    }

    dispatch({ type: "SET_SIDEBAR_MODE", payload: nextMode });
  };

  return (
    <Container>
      <EnergyParticles />

      <AnimatePresence>
        {!audioEnabled && (
          <StartButton
            onStart={() => {
              setAudioEnabled(true);
              // Make a deliberate user interaction for audio context
              const unlockAudio = new Audio();
              unlockAudio.src =
                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
              unlockAudio.volume = 0.1; // Very quiet
              const playPromise = unlockAudio.play();
              if (playPromise !== undefined) {
                playPromise.catch((e) =>
                  console.log("Audio context setup:", e)
                );
              }
            }}
          />
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src={state.currentTrack?.audioSrc}
        onTimeUpdate={() => updateProgress(audioRef)}
        onEnded={nextTrack}
        preload="auto"
      />

      <MainContent>
        <BackgroundVisualizer>
          {state.visualizerActive && <Visualizer />}
        </BackgroundVisualizer>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Playlist />
        </motion.div>
      </MainContent>

      {/* Visual indicator when sidebar is closed - synchronized with animations */}
      <AnimatePresence>
        {!isSidebarOpen && audioEnabled && (
          <SidebarIndicator
            ref={indicatorRef}
            onClick={toggleSidebar}
            initial={{ opacity: 0, scaleY: 0.7 }}
            animate={{ opacity: 0.8, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.7 }}
            transition={{
              duration: ANIMATION_TIMING.buttonTransition,
              delay: ANIMATION_TIMING.buttonDelay,
              ease: [0.2, 0.8, 0.2, 1.2],
            }}
            style={{ transformOrigin: "center" }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar with synchronized animations */}
      <PlayerSidebarContainer
        ref={sidebarRef}
        initial={{ right: "-280px" }}
        animate={{ right: isSidebarOpen ? 0 : "-280px" }}
        transition={{
          duration: ANIMATION_TIMING.sidebar,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <SidebarGlow />
        <CloseButton onClick={toggleSidebar} aria-label="Close music player">
          <FaTimes />
        </CloseButton>

        {/* SidebarModeIndicator and other sidebar elements... */}
        {/* The rest of your sidebar content... */}
      </PlayerSidebarContainer>

      {/* Sidebar mode toggle button with enhanced animations */}
      <AnimatePresence initial={false}>
        <SidebarModeButton
          onClick={cycleSidebarMode}
          aria-label={`Current sidebar mode: ${
            isValidSidebarMode(state.sidebarMode) ? state.sidebarMode : "auto"
          }`}
          $mode={
            isValidSidebarMode(state.sidebarMode) ? state.sidebarMode : "auto"
          }
          $isOpen={isSidebarOpen}
          key="mode-button"
          initial={{ scale: 0.9, opacity: 0.8 }}
          animate={{
            scale: 1,
            opacity: 1,
            right: isSidebarOpen ? "290px" : "20px",
            x: 0, // Reset any transform from hover
          }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{
            duration: ANIMATION_TIMING.buttonTransition,
            delay: ANIMATION_TIMING.buttonDelay,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {state.sidebarMode === "auto" && (
            <motion.div
              initial={{ rotate: -15, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaEye />
            </motion.div>
          )}
          {state.sidebarMode === "always" && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaLock />
            </motion.div>
          )}
          {state.sidebarMode === "manual" && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaLockOpen />
            </motion.div>
          )}
        </SidebarModeButton>
      </AnimatePresence>

      <PlayerSidebar
        isOpen={isSidebarOpen}
        toggleOpen={toggleSidebar}
        ref={sidebarRef}
      />
    </Container>
  );
};

// Add this new styled component
// Update SidebarModeButton for better positioning on different screen sizes
const SidebarModeButton = styled(motion.button)<{
  $mode: SidebarMode;
  $isOpen: boolean;
}>`
  position: fixed;
  bottom: 80px;
  right: ${(props) => (props.$isOpen ? "290px" : "20px")};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid
    ${(props) => {
      switch (props.$mode) {
        case "auto":
          return "rgba(76, 175, 80, 0.7)";
        case "always":
          return "rgba(33, 150, 243, 0.7)";
        case "manual":
          return "rgba(255, 152, 0, 0.7)";
        default:
          return "rgba(76, 175, 80, 0.7)";
      }
    }};
  color: ${(props) => {
    switch (props.$mode) {
      case "auto":
        return "rgba(76, 175, 80, 1)";
      case "always":
        return "rgba(33, 150, 243, 1)";
      case "manual":
        return "rgba(255, 152, 0, 1)";
      default:
        return "rgba(76, 175, 80, 1)";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 990;
  font-weight: bold;
  transition: none; /* Remove default transitions, we'll use framer-motion */

  svg {
    width: 18px;
    height: 18px;
    transform-origin: center;
  }

  @media (max-width: 600px) {
    bottom: 30px;
    width: 36px;
    height: 36px;
  }

  @media (max-width: 380px) {
    bottom: 25px;
    right: ${(props) => (props.$mode === "always" ? "auto" : "20px")};
    left: ${(props) => (props.$mode === "always" ? "20px" : "auto")};
    width: 36px;
    height: 36px;
  }

  @media (max-height: 500px) {
    bottom: 20px;
  }
`;

export default MusicPlayer;
