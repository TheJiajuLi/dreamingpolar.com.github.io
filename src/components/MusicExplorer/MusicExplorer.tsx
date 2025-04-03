import React, { useState, useRef, useEffect, useMemo } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion, AnimatePresence, m } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import CustomScrollbar from "../shared/CustomScrollbar";
import { Track } from "../../types/music";
import { getSafeCoverArt } from "../../utils/imageUtils";
import { FaSortAlphaDown, FaPause, FaPlay } from "react-icons/fa";
import { useLayout } from "../../context/LayoutContext";
import toggleIcon from "/assets/icons/toggle_button.png";

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

// Update the SortOptions interface
interface SortOptions {
  field: "title" | "artist" | "album" | "plays" | "lastPlayed" | "favorites";
  direction: "asc" | "desc";
}

interface FilterOptions {
  search: string;
  favorites: boolean;
  minPlays: number;
}

// Animated equalizer component that activates when music is playing
const EqualizerContainer = styled.div<{ $isPlaying: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 16px;
  gap: 2px;
  opacity: ${(props) => (props.$isPlaying ? 1 : 0.6)};
  transition: opacity 0.3s ease;
`;

const EqualizerBar = styled.div<{ $delay: number; $height: number }>`
  width: 3px;
  height: ${(props) => props.$height * 16}px;
  background: #4caf50;
  border-radius: 1px;
  transform-origin: bottom;
  animation: ${(props) =>
    `equalizer 1.2s ${props.$delay}s ease-in-out infinite alternate`};

  @keyframes equalizer {
    0% {
      height: ${(props) => props.$height * 5}px;
    }
    100% {
      height: ${(props) => props.$height * 16}px;
    }
  }
`;

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
  const [showSortPanel, setShowSortPanel] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  // Add refs for element references
  const explorerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // Update the sortTracks function
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
        case "album":
          return sortOptions.direction === "asc"
            ? a.album.localeCompare(b.album)
            : b.album.localeCompare(a.album);
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
        case "favorites":
          const fav1 = stats1?.favorite || false;
          const fav2 = stats2?.favorite || false;
          return sortOptions.direction === "asc"
            ? Number(fav1) - Number(fav2)
            : Number(fav2) - Number(fav1);
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

  // Handle explorer collapse/expand
  const handleExplorerToggle = () => {
    const willCollapse = isExpanded;
    setIsExpanded(!isExpanded);
    setIsOpen(!willCollapse); // Update isOpen state
    layoutDispatch({ type: "TOGGLE_EXPLORER" });

    // Reset all expanded states when collapsing
    if (willCollapse) {
      // Reset filter states
      setShowFilters(false);
      setFilterOptions({
        search: "",
        favorites: false,
        minPlays: 0,
      });
      setSortOptions({
        field: "title",
        direction: "asc",
      });
      // Close sorting panel
      setShowSortPanel(false);
    }
  };

  // Add useEffect for keyboard shortcuts
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "f" && isExpanded) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [isExpanded]);

  // Add scroll restoration
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("explorerScrollPosition");
    if (savedScroll && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = parseInt(savedScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        sessionStorage.setItem(
          "explorerScrollPosition",
          scrollContainerRef.current.scrollTop.toString()
        );
      }
    };
  }, []);

  // Also add an effect to auto-collapse panels on width change
  useEffect(() => {
    if (!isExpanded) {
      setShowFilters(false);
      setShowSortPanel(false);
    }
  }, [isExpanded]);

  // Update the sortOptionsList array
  const sortOptionsList = [
    { value: "title", label: "Title" },
    { value: "artist", label: "Artist" },
    { value: "album", label: "Album" },
    { value: "plays", label: "Plays" },
    { value: "lastPlayed", label: "Last Played" },
    { value: "favorites", label: "Favorites" },
  ];

  useEffect(() => {
    // Get the current filtered and sorted tracks
    const currentTracks = sortTracks(filterTracks(state.queue));

    dispatch({
      type: "SET_ACTIVE_CONTEXT",
      payload: {
        id: "explorer",
        type: "queue", // Changed from "explorer" to "queue" which is a valid type
        tracks: currentTracks,
        name: "Music Explorer",
      },
    });
  }, [state.queue, sortOptions, filterOptions]); // Update when tracks, sorting, or filtering changes

  return (
    <ExplorerContainer
      ref={explorerRef}
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
              animate={{
                scale: isExpanded ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? "Music Explorer" : "DP"}
            </Title>
            <TitleIcon src={toggleIcon} alt="Music Explorer" $isOpen={isOpen} />
            <ExpandButton
              onClick={handleExplorerToggle}
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
                <Controls>
                  <SearchInput
                    ref={searchInputRef}
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
                      onClick={() => setShowSortPanel(!showSortPanel)}
                      $active={showSortPanel}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaSortAlphaDown />
                      <Tooltip className="tooltip">Sort options</Tooltip>
                    </IconButtonWithTooltip>
                  </ControlButtons>
                </Controls>
              )}
            </AnimatePresence>
          )}

          <AnimatePresence>
            {showSortPanel && (
              <SortingSection
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <SortOptionList>
                  {sortOptionsList.map((option) => (
                    <SortOptionItem
                      key={option.value}
                      $isActive={sortOptions.field === option.value}
                      onClick={() => {
                        if (sortOptions.field === option.value) {
                          setSortOptions((prev) => ({
                            ...prev,
                            direction:
                              prev.direction === "asc" ? "desc" : "asc",
                          }));
                        } else {
                          setSortOptions({
                            field: option.value as SortOptions["field"],
                            direction: "asc",
                          });
                        }
                        // Optional: keep the panel open for better UX
                        // setShowSortPanel(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{option.label}</span>
                      {sortOptions.field === option.value && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {sortOptions.direction === "asc" ? "↑" : "↓"}
                        </motion.span>
                      )}
                    </SortOptionItem>
                  ))}
                </SortOptionList>
              </SortingSection>
            )}
          </AnimatePresence>

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

              <FilterOption>
                <label htmlFor="track-sort-select">Sort tracks by:</label>
                <SortSelect
                  value={sortOptions.field}
                  onChange={(e) =>
                    setSortOptions((prev) => ({
                      ...prev,
                      field: e.target.value as SortOptions["field"],
                    }))
                  }
                >
                  <option value="title">Title</option>
                  <option value="artist">Artist</option>
                  <option value="plays">Plays</option>
                  <option value="lastPlayed">Last Played</option>
                </SortSelect>
              </FilterOption>
            </FilterPanel>
          )}

          <ContentContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CustomScrollbar ref={scrollContainerRef}>
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
  const { state: musicState } = useMusicContext();
  const isExpanded = layoutState.explorerVisible;
  const [showExplosion, setShowExplosion] = useState(false);

  const handleClick = () => {
    onClick();
    if (!isExpanded) {
      onExpand();
    }
  };

  // Update the handleToggleFavorite function in TrackItem component
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Only trigger animation when adding to favorites (not currently favorite)
    if (!stats?.favorite) {
      setShowExplosion(true);
      // Reset explosion state after animation
      setTimeout(() => setShowExplosion(false), 1000);
    }
    onToggleFavorite(track.id);
  };

  // Create particles for the explosion
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      angle: (i * 360) / 12,
      delay: i * 0.02,
    }));
  }, []);

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

        <AnimatePresence>
          {showExplosion && (
            <FavoriteExplosion>
              {particles.map((particle) => (
                <SparkParticle
                  key={particle.id}
                  initial={{
                    scale: 0,
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [1, 0.8, 0],
                    x: [0, Math.cos(particle.angle) * 50],
                    y: [0, Math.sin(particle.angle) * 50],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: particle.delay,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  style={{
                    background: `radial-gradient(circle, #4caf50 0%, rgba(76, 175, 80, 0) 70%)`,
                    boxShadow: "0 0 8px #4caf50",
                    filter: "blur(1px)",
                  }}
                />
              ))}

              {/* Add central burst */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 2, 0],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(76, 175, 80, 0.8) 0%, rgba(76, 175, 80, 0) 70%)",
                  filter: "blur(2px)",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </FavoriteExplosion>
          )}
        </AnimatePresence>
      </FavoriteButton>
    </TrackItemContainer>
  );
};

// Styled components
const ExplorerContainer = styled(motion.div)<{ $isExpanded: boolean }>`
  position: relative;
  width: ${(props) => (props.$isExpanded ? "350px" : "90px")};
  height: 98%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// Update the TrackItemContainer styled component
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
  gap: ${(props) => (props.$isExpanded ? "12px" : "4px")};
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  height: ${(props) => (props.$isExpanded ? "auto" : "auto")};
  width: ${(props) => (props.$isExpanded ? "auto" : "80px")};

  ${(props) =>
    !props.$isExpanded &&
    `
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

  &:hover {
    background: ${(props) =>
      props.$isActive
        ? "rgba(76, 175, 80, 0.15)"
        : "rgba(255, 255, 255, 0.05)"};
  }
`;

// Update CoverArtWrapper to ensure circular shape when playing
// Update the CoverArtWrapper dimensions
const CoverArtWrapper = styled(motion.div)<{
  $isExpanded: boolean;
  $isActive: boolean;
  $isPlaying: boolean;
}>`
  position: relative;
  width: ${(props) => (props.$isExpanded ? "48px" : "72px")};
  height: ${(props) => (props.$isExpanded ? "48px" : "72px")};
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

const SearchInput = styled.input.attrs({
  "aria-label": "Search tracks",
  type: "text",
  placeholder: "Search tracks...",
})`
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

// Update the SortSelect styled component with proper accessibility attributes
const SortSelect = styled.select.attrs({
  "aria-label": "Sort tracks by",
  title: "Sort tracks",
  name: "sort-tracks",
  id: "track-sort-select",
})`
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

  &:focus {
    outline: 2px solid #4caf50;
    outline-offset: 2px;
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
    &:focus-visible {
      outline: 2px solid #4caf50;
      outline-offset: 2px;
    }
  }

  input[type="number"] {
    width: 60px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    color: white;
    margin-left: 8px;
    &:focus-visible {
      outline: 2px solid #4caf50;
      outline-offset: 2px;
    }
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

// Update the Title styled component
const Title = styled(motion.div)<{ $isExpanded: boolean }>`
  font-size: ${(props) => (props.$isExpanded ? "1.5rem" : "1rem")};
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  padding: ${(props) => (props.$isExpanded ? "16px" : "8px")};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;48
`;
48;

// Define the rotation animation separately
const rotateY = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

// Update the TitleIcon component
const TitleIcon = styled.img<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  transform-style: preserve-3d;
  transition: filter 0.3s ease;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$isOpen
      ? css`
          animation: ${rotateY} 4s linear infinite;
        `
      : css`
          filter: brightness(0.7);
          transform: rotateY(180deg);
        `}

  &:hover {
    animation: none;
    filter: drop-shadow(0 0 8px #4a9eff) brightness(1.2);
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    background: radial-gradient(
      circle,
      rgba(74, 158, 255, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }
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

// Update the TrackList styled component
const TrackList = styled.div<{ $isExpanded: boolean }>`
  padding: ${(props) => (props.$isExpanded ? "8px" : "4px")};
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isExpanded ? "1fr" : "repeat(auto-fill, 80px)"};
  gap: ${(props) => (props.$isExpanded ? "8px" : "4px")};
  min-height: 0;
  flex: 1;
  justify-content: center;
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
  left: -110%;
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
const SortingSection = styled(motion.div)`
  overflow: hidden;
  background: rgba(18, 18, 18, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const SortOptionList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 8px;
  }
`;

const SortOptionItem = styled(motion.button)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: ${(props) =>
    props.$isActive ? "rgba(76, 175, 80, 0.15)" : "rgba(255, 255, 255, 0.05)"};
  border: 1px solid
    ${(props) => (props.$isActive ? "rgba(76, 175, 80, 0.3)" : "transparent")};
  border-radius: 6px;
  color: ${(props) =>
    props.$isActive ? "#4caf50" : "rgba(255, 255, 255, 0.8)"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$isActive ? "rgba(76, 175, 80, 0.2)" : "rgba(255, 255, 255, 0.1)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }
`;

// Add these new styled components after the existing ones
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

// Add these new styled components after your existing ones
const FavoriteExplosion = styled(motion.div)`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 2;
`;

const SparkParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #4caf50;
  border-radius: 50%;
  transform-origin: center;
`;

export default MusicExplorer;
