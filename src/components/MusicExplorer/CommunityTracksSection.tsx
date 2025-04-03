import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../../context/ThemeContext";
import { CommunityTrack } from "../../utils/CommunityStorage";
import { useMusicContext } from "../../context/MusicContext";

// Define interfaces
interface Props {
  tracks: CommunityTrack[];
}

// Styled components
const Container = styled.div`
  color: ${(props) => props.theme.text?.primary || "white"};
  padding: 20px;
  user-select: none;
`;

const TracksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  user-select: none;
`;

const TrackItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const CoverArt = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 6px;
  object-fit: cover;
`;

const TrackInfo = styled.div`
  flex: 1;
`;

const TrackTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;

const TrackArtist = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const GenreBadge = styled.span`
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 12px;
  background: rgba(76, 175, 80, 0.3);
  color: white;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  color: rgba(255, 255, 255, 0.5);

  h3 {
    margin-bottom: 10px;
  }
`;

// Component
const CommunityTracksSection: React.FC<Props> = ({ tracks }) => {
  const { currentTheme } = useThemeContext();
  const { dispatch } = useMusicContext();

  if (tracks.length === 0) {
    return (
      <Container theme={currentTheme}>
        <EmptyState>
          <h3>No Community Tracks</h3>
          <p>Be the first to upload a track to the community!</p>
        </EmptyState>
      </Container>
    );
  }

  const handlePlayTrack = (track: CommunityTrack) => {
    // Convert CommunityTrack to Track for the player
    const playerTrack = {
      id: track.id,
      title: track.title,
      artist: track.artist,
      album: track.album,
      coverArt: track.coverArt,
      audioSrc: track.audioSrc,
      duration: track.duration,
    };

    dispatch({ type: "SET_TRACK", payload: playerTrack });
    dispatch({ type: "PLAY" });
  };

  return (
    <Container theme={currentTheme}>
      <h2>Community Uploads</h2>
      <TracksList>
        {tracks.map((track) => (
          <TrackItem key={track.id} onClick={() => handlePlayTrack(track)}>
            <CoverArt src={track.coverArt} alt={`${track.title} cover`} />
            <TrackInfo>
              <TrackTitle>{track.title}</TrackTitle>
              <TrackArtist>{track.artist}</TrackArtist>
            </TrackInfo>
            <GenreBadge>{track.genre}</GenreBadge>
          </TrackItem>
        ))}
      </TracksList>
    </Container>
  );
};

export default CommunityTracksSection;
