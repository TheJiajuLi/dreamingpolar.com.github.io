import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import CustomScrollbar from "../shared/CustomScrollbar";
import { Track } from "../../types/music";
import { getSafeCoverArt } from "../../utils/imageUtils";
import {
  FaSort,
  FaFilter,
  FaSortAlphaDown,
  FaSortAmountDown,
  FaClock,
  FaMusic,
  FaHeart,
  FaInfoCircle,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { useLayout } from "../../context/LayoutContext";

interface TrackStats {
  plays: number;
  lastPlayed: Date | null;
  favorite: boolean;
}

interface TrackItemProps {
  track: Track;
  stats: TrackStats | undefined;
  isActive: boolean;
  onClick: () => void;
  onExpand: () => void;
  onToggleFavorite: (trackId: string) => void; // Add this
  onTogglePlay: () => void; // Add this prop
}

interface SortOptions {
  field: "title" | "artist" | "plays" | "lastPlayed";
  direction: "asc" | "desc";
}

interface FilterOptions {
  search: string;
  favorites: boolean;
  minPlays: number;
}

const MusicExplorer: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const { dispatch: layoutDispatch } = useLayout();
  const [isExpanded, setIsExpanded] = useState(true);
  const [trackStats, setTrackStats] = useState<Record<string, TrackStats>>({});
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    field: "title",
    direction: "asc",
  });
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    search: "",
    favorites: false,
    minPlays: 0,
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Track statistics management
  useEffect(() => {
    const loadTrackStats = async () => {
      try {
        setIsLoading(true);
        const savedStats = localStorage.getItem("trackStats");
        if (savedStats) {
          const parsed = JSON.parse(savedStats);
          setTrackStats(parsed);
        }
      } catch (error) {
        console.error("Failed to load track stats:", error);
        setTrackStats({});
        setError("Failed to load track statistics");
      } finally {
        setIsLoading(false);
      }
    };

    loadTrackStats();
  }, []);

  const updateTrackStats = (trackId: string) => {
    try {
      const newStats = {
        ...trackStats,
        [trackId]: {
          plays: (trackStats[trackId]?.plays || 0) + 1,
          lastPlayed: new Date(),
          favorite: trackStats[trackId]?.favorite || false,
        },
      };
      setTrackStats(newStats);
      localStorage.setItem("trackStats", JSON.stringify(newStats));
    } catch (error) {
      console.error("Failed to update track stats:", error);
    }
  };

  const toggleFavorite = (trackId: string) => {
    const newStats = {
      ...trackStats,
      [trackId]: {
        ...trackStats[trackId],
        favorite: !trackStats[trackId]?.favorite,
        lastPlayed: trackStats[trackId]?.lastPlayed || null,
        plays: trackStats[trackId]?.plays || 0,
      },
    };
    setTrackStats(newStats);

    try {
      localStorage.setItem("trackStats", JSON.stringify(newStats));
    } catch (error) {
      console.error("Failed to save favorites:", error);
    }
  };

  const sortTracks = (tracks: Track[]) => {
    return [...tracks].sort((a, b) => {
      const stats1 = trackStats[a.id];
      const stats2 = trackStats[b.id];

      switch (sortOptions.field) {
        case "title":
          return sortOptions.direction === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        case "artist":
          return sortOptions.direction === "asc"
            ? a.artist.localeCompare(b.artist)
            : b.artist.localeCompare(a.artist);
        case "plays":
          return sortOptions.direction === "asc"
            ? (stats1?.plays || 0) - (stats2?.plays || 0)
            : (stats2?.plays || 0) - (stats1?.plays || 0);
        case "lastPlayed":
          const date1 = stats1?.lastPlayed
            ? new Date(stats1.lastPlayed).getTime()
            : 0;
          const date2 = stats2?.lastPlayed
            ? new Date(stats2.lastPlayed).getTime()
            : 0;
          return sortOptions.direction === "asc"
            ? date1 - date2
            : date2 - date1;
        default:
          return 0;
      }
    });
  };

  const filterTracks = (tracks: Track[]) => {
    return tracks.filter((track) => {
      const stats = trackStats[track.id];
      const searchLower = filterOptions.search.toLowerCase();

      const matchesSearch =
        searchLower === "" ||
        track.title.toLowerCase().includes(searchLower) ||
        track.artist.toLowerCase().includes(searchLower);

      const matchesFavorites = !filterOptions.favorites || stats?.favorite;
      const matchesPlays = (stats?.plays || 0) >= filterOptions.minPlays;

      return matchesSearch && matchesFavorites && matchesPlays;
    });
  };

  useEffect(() => {
    layoutDispatch({
      type: "SET_EXPLORER_WIDTH",
      payload: isExpanded ? 350 : 60,
    });
  }, [isExpanded, layoutDispatch]);

  return (
    <ExplorerContainer
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      $isExpanded={isExpanded}
    >
      {isLoading ? (
        <LoadingContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoadingSpinner />
          <span>Loading music library...</span>
        </LoadingContainer>
      ) : (
        <>
          <Header $isExpanded={isExpanded}>
            <Title
              $isExpanded={isExpanded}
              initial={false}
              animate={{
                scale: isExpanded ? 1 : 0.9,
              }}
            >
              {isExpanded ? "Music Explorer" : "DP"}
            </Title>
            <ExpandButton
              onClick={() => {
                setIsExpanded(!isExpanded);
                layoutDispatch({ type: "TOGGLE_EXPLORER" });
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isExpanded ? "Collapse explorer" : "Expand explorer"}
            >
              {isExpanded ? "−" : "+"}
            </ExpandButton>
          </Header>

          {error && (
            <ErrorMessage>
              {error}
              <RetryButton onClick={() => window.location.reload()}>
                Retry
              </RetryButton>
            </ErrorMessage>
          )}

          {!error && (
            <AnimatePresence>
              {isExpanded && (
                <Controls
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <SearchInput
                    type="text"
                    placeholder="Search tracks..."
                    value={filterOptions.search}
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        search: e.target.value,
                      }))
                    }
                  />

                  <ControlButtons>
                    <IconButtonWithTooltip
                      onClick={() => setShowFilters(!showFilters)}
                      $active={showFilters}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaFilter />
                      <Tooltip className="tooltip">
                        {showFilters ? "Hide filters" : "Show filters"}
                        <FaInfoCircle
                          style={{ marginLeft: "4px", fontSize: "10px" }}
                        />
                      </Tooltip>
                    </IconButtonWithTooltip>

                    <IconButtonWithTooltip
                      onClick={() =>
                        setSortOptions((prev) => ({
                          ...prev,
                          direction: prev.direction === "asc" ? "desc" : "asc",
                        }))
                      }
                      $active={sortOptions.direction === "desc"}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {sortOptions.field === "title" ||
                      sortOptions.field === "artist" ? (
                        <FaSortAlphaDown
                          style={{
                            transform: `rotate(${
                              sortOptions.direction === "desc" ? 180 : 0
                            }deg)`,
                            transition: "transform 0.3s ease",
                          }}
                        />
                      ) : sortOptions.field === "plays" ? (
                        <FaMusic />
                      ) : (
                        <FaClock />
                      )}
                      <Tooltip className="tooltip">
                        Sort{" "}
                        {sortOptions.direction === "asc"
                          ? "ascending"
                          : "descending"}
                        {sortOptions.field === "title" && " by title"}
                        {sortOptions.field === "artist" && " by artist"}
                        {sortOptions.field === "plays" && " by plays"}
                        {sortOptions.field === "lastPlayed" &&
                          " by last played"}
                      </Tooltip>
                    </IconButtonWithTooltip>
                  </ControlButtons>
                </Controls>
              )}
            </AnimatePresence>
          )}

          {showFilters && (
            <FilterPanel
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <FilterOption>
                <label>
                  <input
                    type="checkbox"
                    checked={filterOptions.favorites}
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        favorites: e.target.checked,
                      }))
                    }
                  />
                  Favorites only
                </label>
              </FilterOption>

              <FilterOption>
                <label>
                  Minimum plays:
                  <input
                    type="number"
                    min="0"
                    value={filterOptions.minPlays}
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        minPlays: parseInt(e.target.value) || 0,
                      }))
                    }
                  />
                </label>
              </FilterOption>

              <SortSelect
                value={sortOptions.field}
                onChange={(e) =>
                  setSortOptions((prev) => ({
                    ...prev,
                    field: e.target.value as SortOptions["field"],
                  }))
                }
              >
                <option value="title">Sort by Title</option>
                <option value="artist">Sort by Artist</option>
                <option value="plays">Sort by Plays</option>
                <option value="lastPlayed">Sort by Last Played</option>
              </SortSelect>
            </FilterPanel>
          )}

          <ContentContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CustomScrollbar>
              <TrackList $isExpanded={isExpanded}>
                {sortTracks(filterTracks(state.queue)).map((track, index) => (
                  <TrackItem
                    key={track.id}
                    track={track}
                    stats={trackStats[track.id]}
                    isActive={state.currentTrack?.id === track.id}
                    onClick={() => {
                      dispatch({ type: "SET_TRACK", payload: track }); // Pass the full track object
                      // Then start playing
                      dispatch({ type: "PLAY" });
                      updateTrackStats(track.id);
                    }}
                    onExpand={() => {
                      setIsExpanded(true);
                      layoutDispatch({ type: "TOGGLE_EXPLORER" });
                    }}
                    onToggleFavorite={toggleFavorite} // Add this
                    onTogglePlay={() => {
                      dispatch(
                        state.isPlaying ? { type: "PAUSE" } : { type: "PLAY" }
                      );
                    }} // Add this
                  />
                ))}
              </TrackList>
            </CustomScrollbar>
          </ContentContainer>
        </>
      )}
    </ExplorerContainer>
  );
};

// Update TrackItem component with enhanced interactions
const TrackItem: React.FC<TrackItemProps> = ({
  track,
  stats,
  isActive,
  onClick,
  onExpand,
  onToggleFavorite,
  onTogglePlay,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { state: layoutState } = useLayout();
  const { state: musicState, dispatch } = useMusicContext();
  const isExpanded = layoutState.explorerVisible;

  const handleClick = () => {
    onClick();
    if (!isExpanded) {
      onExpand();
    }
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(track.id);
  };

  return (
    <TrackItemContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      $isActive={isActive}
      $isExpanded={isExpanded}
      onClick={handleClick}
      layout
    >
      <CoverArtWrapper
        $isExpanded={isExpanded}
        $isActive={isActive}
        $isPlaying={isActive && musicState.isPlaying}
        whileHover={
          !isActive || !musicState.isPlaying
            ? {
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }
            : {}
        }
      >
        <CoverArt
          src={getSafeCoverArt(track.coverArt)}
          alt={`${track.title} cover`}
          $isPlaying={isActive && musicState.isPlaying}
          transition={{
            rotate: {
              duration: 20,
              ease: "linear",
            },
          }}
          loading="lazy"
          draggable={false}
        />
        {isActive && (
          <PlayingIndicator
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click
              onTogglePlay(); // Use the prop instead of direct dispatch
            }}
            $isPlaying={musicState.isPlaying}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: musicState.isPlaying ? 1.1 : 1,
            }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            {musicState.isPlaying ? (
              <FaPause size={20} />
            ) : (
              <FaPlay size={20} />
            )}
          </PlayingIndicator>
        )}
      </CoverArtWrapper>

      <AnimatePresence>
        {isExpanded && (
          <TrackInfo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TrackTitle $isActive={isActive}>{track.title}</TrackTitle>
            <TrackArtist>{track.artist}</TrackArtist>
            <StatsContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <StatItem>
                <StatIcon>🎵</StatIcon>
                {stats?.plays || 0}
              </StatItem>
              {stats?.lastPlayed && (
                <StatItem>
                  <StatIcon>🕒</StatIcon>
                  {new Date(stats.lastPlayed).toLocaleDateString()}
                </StatItem>
              )}
            </StatsContainer>
          </TrackInfo>
        )}
      </AnimatePresence>
      <FavoriteButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggleFavorite}
        aria-label={
          stats?.favorite ? "Remove from favorites" : "Add to favorites"
        }
      >
        {stats?.favorite ? "❤️" : "🤍"}
      </FavoriteButton>
    </TrackItemContainer>
  );
};

// Styled components
const ExplorerContainer = styled(motion.div)<{ $isExpanded: boolean }>`
  position: relative;
  width: ${(props) => (props.$isExpanded ? "350px" : "90px")};
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TrackItemContainer = styled(motion.div)<{
  $isActive: boolean;
  $isExpanded: boolean;
}>`
  display: flex;
  align-items: center;
  padding: ${(props) => (props.$isExpanded ? "12px" : "4px")};
  background: ${(props) =>
    props.$isActive ? "rgba(76, 175, 80, 0.1)" : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: ${(props) => (props.$isExpanded ? "12px" : "0")};
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);

  ${(props) =>
    !props.$isExpanded &&
    `
    justify-content: center;
    flex-direction: column;
    transform-origin: center;
    `}

  // Remove the hover scale effect
  &:hover {
    background: ${(props) =>
      props.$isActive
        ? "rgba(76, 175, 80, 0.15)"
        : "rgba(255, 255, 255, 0.05)"};
  }
`;

// Update CoverArtWrapper to ensure circular shape when playing
const CoverArtWrapper = styled(motion.div)<{
  $isExpanded: boolean;
  $isActive: boolean;
  $isPlaying: boolean;
}>`
  position: relative;
  width: ${(props) => (props.$isExpanded ? "48px" : "80px")};
  height: ${(props) => (props.$isExpanded ? "48px" : "80px")};
  border-radius: ${(props) =>
    props.$isActive && props.$isPlaying ? "50%" : "8px"};
  overflow: visible; // Changed to visible to show glow
  flex-shrink: 0;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  perspective: 1000px;

  // Glowing edge effect
  ${(props) =>
    props.$isActive &&
    props.$isPlaying &&
    `
    &::after {
      content: '';
      position: absolute;
      inset: -2px; // Slightly larger than container
      background: conic-gradient(
        from 0deg,
        rgba(76, 175, 80, 0.8),
        rgba(76, 175, 80, 0.2),
        rgba(76, 175, 80, 0.8),
        rgba(76, 175, 80, 0.2),
        rgba(76, 175, 80, 0.8)
      );
      border-radius: 50%;
      animation: glowSpin 3s linear infinite;
      z-index: -1;
      filter: blur(4px);
    }

    @keyframes glowSpin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}

  // CD center hole
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: ${(props) => (props.$isActive && props.$isPlaying ? 1 : 0)};
    transition: opacity 0.3s ease;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.6); // Added glow to center hole
  }
`;

// Enhanced CoverArt component
const CoverArt = styled(motion.img)<{ $isPlaying: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform-origin: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${(props) => (props.$isPlaying ? "50%" : "8px")};
  box-shadow: ${(props) =>
    props.$isPlaying ? "0 0 15px rgba(76, 175, 80, 0.3)" : "none"};

  ${(props) =>
    props.$isPlaying &&
    `
    animation: spin 20s linear infinite;
    filter: brightness(1.1);
  `}
`;

// Update PlayingIndicator styled component
const PlayingIndicator = styled(motion.div)<{ $isPlaying: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0;
  border-radius: 50%; // Match parent's circular shape
  transition: all 0.3s ease;

  // Only show hover effect when not playing
  ${(props) =>
    !props.$isPlaying &&
    `
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(2px);
    }
  `}

  svg {
    opacity: ${(props) => (props.$isPlaying ? 0.9 : 1)};
    transition: opacity 0.3s ease;
  }

  // Only show on hover when not playing
  ${CoverArtWrapper}:hover & {
    opacity: ${(props) => (props.$isPlaying ? 0 : 1)};
  }

  // Show briefly when changing play state
  &:active {
    opacity: 1;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const TrackInfo = styled(motion.div)`
  flex: 1;
  min-width: 0;
`;

const TrackTitle = styled.h3<{ $isActive: boolean }>`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.$isActive ? "#4caf50" : "white")};
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackArtist = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
`;

const StatIcon = styled.span`
  font-size: 12px;
`;

const FavoriteButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  font-size: 16px;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const Controls = styled(motion.div)`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const SearchInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 4px;
`;

const IconButton = styled.button<{ $active: boolean }>`
  background: ${(props) =>
    props.$active ? "rgba(76, 175, 80, 0.2)" : "rgba(255, 255, 255, 0.1)"};
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$active ? "#4caf50" : "white")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$active ? "rgba(76, 175, 80, 0.3)" : "rgba(255, 255, 255, 0.2)"};
  }
`;

const FilterPanel = styled(motion.div)`
  padding: 12px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const FilterOption = styled.div`
  margin-bottom: 8px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
  }

  input[type="number"] {
    width: 60px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    color: white;
    margin-left: 8px;
  }
`;

const SortSelect = styled.select`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  padding: 8px;
  color: white;
  margin-top: 8px;

  option {
    background: #1a1a1a;
  }
`;

// Add these styled components after the existing ones
const Header = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$isExpanded ? "space-between" : "center"};
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled(motion.h2)<{ $isExpanded: boolean }>`
  margin: 0;
  font-size: ${(props) => (props.$isExpanded ? "18px" : "14px")};
  font-weight: 600;
  color: ${(props) => (props.$isExpanded ? "white" : "#4caf50")};
  letter-spacing: ${(props) => (props.$isExpanded ? "normal" : "1px")};
`;

const ExpandButton = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const ContentContainer = styled(motion.div)`
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TrackList = styled.div<{ $isExpanded: boolean }>`
  padding: ${(props) => (props.$isExpanded ? "8px" : "6px")};
  display: grid;
  grid-template-columns: ${(props) => (props.$isExpanded ? "1fr" : "1fr")};
  gap: 8px;
  min-height: 0;
  flex: 1;
`;

const ErrorMessage = styled.div`
  padding: 16px;
  color: #ff5252;
  text-align: center;
  background: rgba(255, 82, 82, 0.1);
  margin: 16px;
  border-radius: 8px;
`;

const RetryButton = styled.button`
  background: #ff5252;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    background: #ff6b6b;
  }
`;

const IconButtonWithTooltip = styled(motion.button)<{ $active: boolean }>`
  position: relative;
  background: ${(props) =>
    props.$active ? "rgba(76, 175, 80, 0.2)" : "rgba(255, 255, 255, 0.1)"};
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$active ? "#4caf50" : "white")};
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.$active ? "rgba(76, 175, 80, 0.3)" : "rgba(255, 255, 255, 0.2)"};
    .tooltip {
      opacity: 1;
      transform: translateY(-4px);
    }
  }
`;

const Tooltip = styled.span`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 100;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid rgba(0, 0, 0, 0.8);
  }
`;

// Add these styled components
const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
`;

const LoadingSpinner = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(76, 175, 80, 0.3);
  border-top-color: #4caf50;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default MusicExplorer;
