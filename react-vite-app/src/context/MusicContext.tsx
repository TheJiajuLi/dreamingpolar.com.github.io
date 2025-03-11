import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { PlayerState, Track, SidebarMode } from "../types/music";
import musicLibrary from "../data/musicLibrary";
import sampleTracks from "../data/sampleTracks";

// Initial state for the player
const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  duration: 0,
  isShuffling: false,
  isRepeating: false,
  queue: musicLibrary, // Use the full library here
  visualizerActive: true,
  equalizerActive: true,
  sidebarMode: "auto", // TypeScript can infer this since "auto" is a valid SidebarMode
  isBuffering: false,
  error: null,
  lastUserAction: Date.now(),
  lastSidebarInteraction: Date.now(),
};

type MusicAction =
  | { type: "SET_TRACK"; payload: Track }
  | { type: "PLAY" }
  | { type: "PAUSE" }
  | { type: "SET_VOLUME"; payload: number }
  | { type: "SET_PROGRESS"; payload: number }
  | { type: "SET_DURATION"; payload: number }
  | { type: "TOGGLE_SHUFFLE" }
  | { type: "TOGGLE_REPEAT" }
  | { type: "SET_QUEUE"; payload: Track[] }
  | { type: "NEXT_TRACK" }
  | { type: "PREV_TRACK" }
  | { type: "TOGGLE_VISUALIZER" }
  | { type: "TOGGLE_EQUALIZER" }
  | { type: "SET_BUFFERING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_SIDEBAR_MODE"; payload: SidebarMode }
  | { type: "SIDEBAR_INTERACTION" } // Track when user interacts with sidebar
  | { type: "USER_INTERACTION" }; // Track general user interactions

// Reducer to handle state changes
const musicReducer = (state: PlayerState, action: MusicAction): PlayerState => {
  switch (action.type) {
    case "SET_TRACK":
      return {
        ...state,
        currentTrack: action.payload,
        isPlaying: true,
        progress: 0,
        error: null,
        isBuffering: true,
        lastUserAction: Date.now(),
      };
    case "PLAY":
      return {
        ...state,
        isPlaying: true,
        lastUserAction: Date.now(),
      };
    case "PAUSE":
      return {
        ...state,
        isPlaying: false,
        lastUserAction: Date.now(),
      };
    case "SET_VOLUME":
      return {
        ...state,
        volume: action.payload,
        lastUserAction: Date.now(),
      };
    case "SET_PROGRESS":
      return { ...state, progress: action.payload };
    case "SET_DURATION":
      return { ...state, duration: action.payload };
    case "TOGGLE_SHUFFLE":
      return {
        ...state,
        isShuffling: !state.isShuffling,
        lastUserAction: Date.now(),
      };
    case "TOGGLE_REPEAT":
      return {
        ...state,
        isRepeating: !state.isRepeating,
        lastUserAction: Date.now(),
      };
    case "SET_QUEUE":
      return { ...state, queue: [...action.payload] }; // Create a new array to ensure immutability
    case "NEXT_TRACK": {
      if (!state.currentTrack || state.queue.length === 0) return state;

      const currentIndex = state.queue.findIndex(
        (track) => track.id === state.currentTrack!.id
      );
      const nextIndex = (currentIndex + 1) % state.queue.length;

      return {
        ...state,
        currentTrack: state.queue[nextIndex],
        isPlaying: true,
        progress: 0,
        isBuffering: true,
        lastUserAction: Date.now(),
      };
    }
    case "PREV_TRACK": {
      if (!state.currentTrack || state.queue.length === 0) return state;

      // If we're more than 3 seconds into the track, just restart it
      if (state.progress > 3) {
        return {
          ...state,
          progress: 0,
          lastUserAction: Date.now(),
        };
      }

      const currentIndex = state.queue.findIndex(
        (track) => track.id === state.currentTrack!.id
      );
      const prevIndex =
        (currentIndex - 1 + state.queue.length) % state.queue.length;

      return {
        ...state,
        currentTrack: state.queue[prevIndex],
        isPlaying: true,
        progress: 0,
        isBuffering: true,
        lastUserAction: Date.now(),
      };
    }
    case "TOGGLE_VISUALIZER":
      return {
        ...state,
        visualizerActive: !state.visualizerActive,
        lastUserAction: Date.now(),
      };
    case "TOGGLE_EQUALIZER":
      return {
        ...state,
        equalizerActive: !state.equalizerActive,
        lastUserAction: Date.now(),
      };
    case "SET_BUFFERING":
      return { ...state, isBuffering: action.payload };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        isBuffering: false,
        // Add this to potentially retry or recover from errors
        isPlaying: false, // Pause on error
      };
    case "SET_SIDEBAR_MODE":
      return {
        ...state,
        sidebarMode: action.payload,
        lastUserAction: Date.now(),
        lastSidebarInteraction: Date.now(),
      };
    case "SIDEBAR_INTERACTION":
      return {
        ...state,
        lastSidebarInteraction: Date.now(),
      };
    case "USER_INTERACTION":
      return {
        ...state,
        lastUserAction: Date.now(),
      };
    default:
      return state;
  }
};

// Create the context
interface MusicContextType {
  state: PlayerState;
  dispatch: React.Dispatch<MusicAction>;
  isLoadingTracks: boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

// Provider component
export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(musicReducer, initialState);
  const [isLoadingTracks, setIsLoadingTracks] = useState(false);

  // Set the first track as current if none is selected
  useEffect(() => {
    if (!state.currentTrack && state.queue.length > 0) {
      dispatch({ type: "SET_TRACK", payload: state.queue[0] });
    }
  }, [state.queue, state.currentTrack]);

  return (
    <MusicContext.Provider value={{ state, dispatch, isLoadingTracks }}>
      {children}
    </MusicContext.Provider>
  );
}

// Custom hook for using the music context
export function useMusicContext() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicContext must be used within a MusicProvider");
  }
  return context;
}
