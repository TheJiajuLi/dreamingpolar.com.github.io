export type SidebarMode = "auto" | "always" | "manual";

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  coverArt: string;
  audioSrc: string;
  duration: number;
  color: string;
}

export type Genre = 'all' | 'rock' | 'jazz' | 'electronic' | 'classical' | 'pop' | 'ambient';

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  isShuffling: boolean;
  isRepeating: boolean;
  queue: Track[];
  visualizerActive: boolean;
  equalizerActive: boolean;
  sidebarMode: SidebarMode;
  isBuffering: boolean;
  error: string | null;
  lastUserAction: number;
  lastSidebarInteraction: number;
}