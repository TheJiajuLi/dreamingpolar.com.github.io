import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import { useMusicContext } from "../../context/MusicContext";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { getSafeCoverArt } from "../../utils/imageUtils";
import { useLayout } from "../../context/LayoutContext";

// Move ButtonIcon outside the component
const ButtonIcon = styled.img<{ $active?: boolean }>`
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: ${(props) =>
    props.$active
      ? "brightness(1.2) drop-shadow(0 0 3px rgba(76, 175, 80, 0.5))"
      : "brightness(0.9)"};
  opacity: ${(props) => (props.$active ? 1 : 0.8)};
  transition: all 0.3s ease;

  ${(props) =>
    props.$active &&
    `
  transform: scale(1.1);
`}
`;

const HorizontalMusicControls: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const { state: layoutState, dispatch: layoutDispatch } = useLayout();
  const [expanded, setExpanded] = useState(false);
  const [isHoveringProgress, setIsHoveringProgress] = useState(false);
  const [hoverPosition, setHoverPosition] = useState("0%");
  const [hoverTime, setHoverTime] = useState<string | null>(null);
  const [volumeVisible, setVolumeVisible] = useState(false);

  const progressBarRef = useRef<HTMLDivElement>(null);

  // Create separate animation controls for container and content
  const containerControls = useAnimation();
  const contentControls = useAnimation();

  // React to sidebar visibility changes for container animation
  useEffect(() => {
    if (state.sidebarVisible) {
      // When sidebar appears, hide the horizontal controls
      containerControls.start({
        y: 100,
        opacity: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30,
        },
      });
    } else {
      // When sidebar disappears, show the horizontal controls
      containerControls.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 26,
          delay: 0.2, // Slight delay for a better sequenced animation
        },
      });
    }
  }, [state.sidebarVisible, containerControls]);

  // React to expanded state changes for content animation
  useEffect(() => {
    contentControls.start({
      height: expanded ? "80px" : "60px",
      paddingTop: expanded ? "8px" : "0px",
      transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
    });
  }, [expanded, contentControls]);

  useEffect(() => {
    layoutDispatch({
      type: "SET_CONTROLS_EXPANDED",
      payload: expanded,
    });
  }, [expanded, layoutDispatch]);

  // Format time helper function
  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
    return "0:00";
  };

  // Handle progress bar interactions
  const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const position = (e.clientX - rect.left) / rect.width;
      const positionPercent = Math.max(0, Math.min(1, position)) * 100;
      setHoverPosition(`${positionPercent}%`);

      if (state.duration) {
        const timeAtPosition = position * state.duration;
        setHoverTime(formatTime(timeAtPosition));
      }

      setIsHoveringProgress(true);
    }
  };

  const handleProgressLeave = () => {
    setIsHoveringProgress(false);
  };

  const setProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const position = (e.clientX - rect.left) / rect.width;
      const newTime = Math.max(0, Math.min(1, position)) * state.duration;

      dispatch({ type: "SET_PROGRESS", payload: newTime });

      // Find the audio element and update it
      const audioElement = document.querySelector("audio");
      if (audioElement) {
        audioElement.currentTime = newTime;
      }
    }
  };

  // Playback control handlers
  const togglePlay = () => {
    dispatch({ type: state.isPlaying ? "PAUSE" : "PLAY" });
  };

  const nextTrack = () => {
    if (state.repeatMode === "one") {
      const audioElement = document.querySelector("audio");
      if (audioElement) {
        audioElement.currentTime = 0;
        if (audioElement.paused && state.isPlaying) {
          audioElement.play().catch((err) => console.warn(err));
        }
      }
      return;
    }
    dispatch({ type: "NEXT_TRACK" });
  };

  const prevTrack = () => {
    const audioElement = document.querySelector("audio");
    if (audioElement && audioElement.currentTime > 3) {
      audioElement.currentTime = 0;
      return;
    }
    dispatch({ type: "PREV_TRACK" });
  };

  const toggleShuffle = () => {
    dispatch({ type: "TOGGLE_SHUFFLE" });
  };

  const cycleRepeatMode = () => {
    dispatch({ type: "CYCLE_REPEAT_MODE" });
  };

  const toggleSidebar = () => {
    console.log("Opening sidebar from horizontal controls");

    // Always set sidebar to visible in the music context
    dispatch({ type: "SET_SIDEBAR_OPEN", payload: true });

    // If the horizontal controls are currently visible, hide them
    if (!state.sidebarVisible) {
      dispatch({ type: "TOGGLE_SIDEBAR_VISIBILITY" });
    }

    // If in another mode, switch to manual mode
    if (state.sidebarMode !== "manual") {
      dispatch({ type: "SET_SIDEBAR_MODE", payload: "manual" });
    }

    // Record interactions for analytics
    dispatch({ type: "SIDEBAR_INTERACTION" });
    dispatch({ type: "USER_INTERACTION" });
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value) / 100;
    dispatch({ type: "SET_VOLUME", payload: volume });
  };

  const containerStyle = {
    paddingLeft: layoutState.explorerVisible ? "350px" : "60px",
    transition: "padding-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <Container
      animate={containerControls} // Use containerControls for position/visibility
      initial={{ y: 0, opacity: 1 }}
      className="horizontal-music-controls"
      data-testid="horizontal-music-controls"
      data-sidebar-visible={state.sidebarVisible} // For debugging
      style={containerStyle}
    >
      <ExpandToggle
        onClick={() => setExpanded(!expanded)}
        animate={{ rotate: expanded ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <MdExpandMore />
      </ExpandToggle>

      <ContentWrapper
        animate={contentControls} // Use contentControls for height/padding
        className="hmc-content-wrapper"
      >
        <ProgressBarContainer>
          <ProgressBar
            ref={progressBarRef}
            onClick={setProgress}
            onMouseMove={handleProgressHover}
            onMouseEnter={handleProgressHover}
            onMouseLeave={handleProgressLeave}
          >
            <Progress $width={`${(state.progress / state.duration) * 100}%`} />
            <ProgressHandle
              $visible={isHoveringProgress}
              $position={
                isHoveringProgress
                  ? hoverPosition
                  : `${(state.progress / state.duration) * 100}%`
              }
            />
            <TimeTooltip
              $visible={isHoveringProgress}
              $position={hoverPosition}
            >
              {hoverTime || formatTime(state.progress)}
            </TimeTooltip>
          </ProgressBar>
        </ProgressBarContainer>

        <ContentContainer $explorerVisible={layoutState.explorerVisible}>
          <TrackInfoSection>
            {state.currentTrack && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <AlbumArt
                  src={getSafeCoverArt(state.currentTrack.coverArt)}
                  alt="Album Art"
                />
                <TrackDetails>
                  <TrackTitle>{state.currentTrack.title}</TrackTitle>
                  <TrackArtist>{state.currentTrack.artist}</TrackArtist>
                </TrackDetails>
              </motion.div>
            )}
          </TrackInfoSection>

          <ControlsSection>
            <ShuffleButton
              $active={state.isShuffling}
              onClick={toggleShuffle}
              aria-label="Toggle shuffle"
            >
              <ButtonIcon
                src="/assets/icons/shuffle_track.png"
                alt="Shuffle"
                $active={state.isShuffling}
              />
            </ShuffleButton>

            <ControlButton onClick={prevTrack} aria-label="Previous track">
              <ButtonIcon
                src="/assets/icons/play_back.png"
                alt="Previous track"
              />
            </ControlButton>

            <PlayButton
              onClick={togglePlay}
              aria-label={state.isPlaying ? "Pause" : "Play"}
            >
              {state.isPlaying ? <FaPause /> : <FaPlay />}
            </PlayButton>

            <ControlButton onClick={nextTrack} aria-label="Next track">
              <ButtonIcon src="/assets/icons/play_next.png" alt="Next track" />
            </ControlButton>

            <RepeatButton
              $mode={state.repeatMode}
              onClick={cycleRepeatMode}
              aria-label={`Repeat mode: ${state.repeatMode}`}
            >
              <ButtonIcon
                src="/assets/icons/repeat_track.png"
                alt={`Repeat mode: ${state.repeatMode}`}
                $active={state.repeatMode !== "off"}
              />
            </RepeatButton>
          </ControlsSection>

          <ExtraControlsSection>
            <TimeDisplay>
              {formatTime(state.progress)} / {formatTime(state.duration)}
            </TimeDisplay>

            <VolumeContainer
              onMouseEnter={() => setVolumeVisible(true)}
              onMouseLeave={() => setVolumeVisible(false)}
            >
              <VolumeButton aria-label="Volume">
                {state.volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
              </VolumeButton>

              <VolumeSliderContainer $visible={volumeVisible}>
                <VolumeSlider
                  type="range"
                  min="0"
                  max="100"
                  value={Math.round(state.volume * 100)}
                  onChange={changeVolume}
                />
              </VolumeSliderContainer>
            </VolumeContainer>

            <SidebarButton
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
              data-testid="sidebar-toggle-button"
            >
              <ButtonIcon
                src="/assets/icons/switch_to_side_bar.png"
                alt="Toggle sidebar"
              />
            </SidebarButton>
          </ExtraControlsSection>
        </ContentContainer>
      </ContentWrapper>
    </Container>
  );
};

// New component to separate animations
const ContentWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Styled Components
const Container = styled(motion.div)`
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(10px);
  color: white;
  z-index: 9999 !important; /* Using the same high z-index that worked for the test element */
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(76, 175, 80, 0.3);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  user-select: none;

  /* Subtle highlight glow at the top */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(76, 175, 80, 0) 0%,
      rgba(76, 175, 80, 0.6) 50%,
      rgba(76, 175, 80, 0) 100%
    );
  }
`;

const ExpandToggle = styled(motion.button)`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: rgba(76, 175, 80, 0.9);
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &:hover {
    background: rgba(76, 175, 80, 1);
  }

  svg {
    font-size: 20px;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  padding: 0;
  margin-bottom: 6px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  &:hover {
    height: 8px;
    margin-top: -1px;
    margin-bottom: -1px;
  }
`;

const Progress = styled.div<{ $width: string }>`
  height: 100%;
  background: linear-gradient(90deg, #4caf50 0%, #3f9142 100%);
  border-radius: inherit;
  width: ${(props) => props.$width};
  transition: width 0.1s linear;
`;

const ProgressHandle = styled.div.attrs<{
  $visible: boolean;
  $position: string;
}>((props) => ({
  style: {
    left: props.$position,
    opacity: props.$visible ? 1 : 0,
    transform: `translate(-50%, -50%) scale(${props.$visible ? 1 : 0})`,
  },
}))`
  position: absolute;
  top: 50%;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  z-index: 2;
  transition: transform 0.15s ease, opacity 0.15s ease;
`;

const TimeTooltip = styled.div.attrs<{ $visible: boolean; $position: string }>(
  (props) => ({
    style: {
      left: props.$position,
      opacity: props.$visible ? 1 : 0,
      transform: `translateX(-50%) translateY(${
        props.$visible ? "-28px" : "-20px"
      })`,
    },
  })
)`
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 12px;
  pointer-events: none;
  z-index: 3;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  transition: opacity 0.15s ease, transform 0.15s ease;
`;

const ContentContainer = styled.div<{ $explorerVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: 0 ${({ $explorerVisible }) => ($explorerVisible ? "12px" : "20px")};
  transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const TrackInfoSection = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1;
  max-width: 30%;

  @media (max-width: 768px) {
    max-width: 40%;
  }

  @media (max-width: 480px) {
    max-width: 35%;
  }
`;

const AlbumArt = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-right: 12px;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
`;

const TrackDetails = styled.div`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const TrackArtist = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const ControlsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex: 1;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const ControlButton = styled.button`
  background: rgba(30, 30, 30, 0.6);
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  /* Gradient highlight effect */
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 50%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 50% 50% 0 0;
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    background: rgba(40, 40, 40, 0.8);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

    ${ButtonIcon} {
      filter: brightness(1.2);
      transform: scale(1.2);
    }
  }

  &:active {
    transform: scale(0.92);
  }
`;

const PlayButton = styled(ControlButton)`
  background: rgba(76, 175, 80, 0.9);
  color: white;
  width: 36px;
  height: 36px;

  &:hover {
    background: rgba(76, 175, 80, 1);
    color: white;
  }
`;

const ShuffleButton = styled(ControlButton)<{ $active: boolean }>`
  background: ${(props) =>
    props.$active
      ? "linear-gradient(145deg, rgba(76, 175, 80, 0.7) 0%, rgba(46, 125, 50, 0.8) 100%)"
      : "rgba(30, 30, 30, 0.6)"};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$active
        ? "linear-gradient(145deg, rgba(76, 175, 80, 0.85) 0%, rgba(56, 142, 60, 0.95) 100%)"
        : "rgba(40, 40, 40, 0.8)"};
    box-shadow: ${(props) =>
      props.$active
        ? "0 4px 12px rgba(76, 175, 80, 0.4)"
        : "0 4px 8px rgba(0, 0, 0, 0.3)"};
  }
`;

const RepeatButton = styled(ControlButton)<{ $mode: string }>`
  background: ${(props) => {
    if (props.$mode === "off") return "rgba(30, 30, 30, 0.6)";
    if (props.$mode === "one")
      return "linear-gradient(145deg, rgba(63, 81, 181, 0.7) 0%, rgba(48, 63, 159, 0.8) 100%)";
    return "linear-gradient(145deg, rgba(76, 175, 80, 0.7) 0%, rgba(46, 125, 50, 0.8) 100%)";
  }};

  /* Add visual indicator for one mode */
  ${(props) =>
    props.$mode === "one" &&
    `
    &::after {
      content: "1";
      position: absolute;
      top: 0;
      right: 0;
      width: 14px;
      height: 14px;
      background: #3f51b5;
      color: white;
      font-size: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid white;
    }
  `}

  &:hover {
    background: ${(props) => {
      if (props.$mode === "off") return "rgba(40, 40, 40, 0.8)";
      if (props.$mode === "one")
        return "linear-gradient(145deg, rgba(63, 81, 181, 0.85) 0%, rgba(48, 63, 159, 0.95) 100%)";
      return "linear-gradient(145deg, rgba(76, 175, 80, 0.85) 0%, rgba(56, 142, 60, 0.95) 100%)";
    }};
  }
`;

const ExtraControlsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex: 1;
  max-width: 30%;

  @media (max-width: 768px) {
    max-width: 25%;
    gap: 8px;
  }

  @media (max-width: 480px) {
    max-width: 30%;
    gap: 4px;
  }
`;

const TimeDisplay = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const VolumeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const VolumeButton = styled(ControlButton)`
  margin-right: 0;
`;

const VolumeSliderContainer = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: -110px;
  left: 50%;
  transform: translateX(-50%)
    ${(props) => (props.$visible ? "scale(1)" : "scale(0)")};
  background: #1a1a1a;
  border-radius: 12px;
  padding: 8px;
  width: 32px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: transform 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #1a1a1a;
  }
`;

const VolumeSlider = styled.input`
  -webkit-appearance: none;
  width: 80px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  transform: rotate(-90deg);
  transform-origin: center;
  position: relative;
  top: 38px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

const SidebarButton = styled(ControlButton)`
  &:hover ${ButtonIcon} {
    animation: slideRight 0.5s ease-out;
  }

  @keyframes slideRight {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 480px) {
    margin-left: auto;
  }
`;

export default HorizontalMusicControls;
