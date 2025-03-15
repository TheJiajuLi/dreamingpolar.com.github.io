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

export type RepeatMode = "off" | "all" | "one";

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  isShuffling: boolean;
  repeatMode: RepeatMode;
  queue: Track[];
  visualizerActive: boolean;
  equalizerActive: boolean;
  sidebarMode: SidebarMode;
  sidebarVisible: boolean;
  isBuffering: boolean;
  error: string | null;
  lastUserAction: number;
  lastSidebarInteraction: number;
  sidebarOpen: boolean; // Add this line to include the new property
}