import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { PlayerState, Track, SidebarMode } from "../types/music";
import musicLibrary from "../data/musicLibrary";
import sampleTracks from "../data/sampleTracks";

// Add favorites field to the initialState
const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  duration: 0,
  isShuffling: false,
  isRepeating: false,
  isRepeatingOne: false,
  queue: musicLibrary,
  visualizerActive: true,
  equalizerActive: true,
  sidebarMode: "auto",
  isBuffering: false,
  error: null,
  lastUserAction: Date.now(),
  lastSidebarInteraction: Date.now(),
  favorites: [], // Add this field
};

// Add the TOGGLE_FAVORITE action type
type MusicAction =
  | { type: "SET_TRACK"; payload: Track }
  | { type: "PLAY" }
  | { type: "PAUSE" }
  | { type: "SET_VOLUME"; payload: number }
  | { type: "SET_PROGRESS"; payload: number }
  | { type: "SET_DURATION"; payload: number }
  | { type: "TOGGLE_SHUFFLE" }
  | { type: "TOGGLE_REPEAT" }
  | { type: "TOGGLE_REPEAT_ONE" }
  | { type: "SET_QUEUE"; payload: Track[] }
  | { type: "NEXT_TRACK" }
  | { type: "PREV_TRACK" }
  | { type: "TOGGLE_VISUALIZER" }
  | { type: "TOGGLE_EQUALIZER" }
  | { type: "SET_BUFFERING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_SIDEBAR_MODE"; payload: SidebarMode }
  | { type: "SIDEBAR_INTERACTION" }
  | { type: "USER_INTERACTION" }
  | { type: "TOGGLE_FAVORITE"; payload: { id: string } }
  | {
      type: "UPDATE_PROGRESS";
      payload: { currentTime: number; duration: number };
    };

// Context types
interface MusicContextType {
  state: PlayerState;
  dispatch: React.Dispatch<MusicAction>;
}

// Create the context
const MusicContext = createContext<MusicContextType | undefined>(undefined);

// Provider component
interface MusicProviderProps {
  children: ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  // Reducer function
  const playerReducer = (
    state: PlayerState,
    action: MusicAction
  ): PlayerState => {
    switch (action.type) {
      case "SET_TRACK":
        return {
          ...state,
          currentTrack: action.payload,
          progress: 0,
          duration: action.payload.duration || 0,
        };
      case "PLAY":
        return {
          ...state,
          isPlaying: true,
          isBuffering: false,
          error: null,
        };
      case "PAUSE":
        return {
          ...state,
          isPlaying: false,
        };
      case "SET_VOLUME":
        return {
          ...state,
          volume: action.payload,
        };
      case "SET_PROGRESS":
        return {
          ...state,
          progress: action.payload,
        };
      case "SET_DURATION":
        return {
          ...state,
          duration: action.payload,
        };
      case "TOGGLE_SHUFFLE":
        return {
          ...state,
          isShuffling: !state.isShuffling,
        };
      case "TOGGLE_REPEAT":
        return {
          ...state,
          isRepeating: !state.isRepeating,
        };
      case "TOGGLE_REPEAT_ONE":
        return {
          ...state,
          isRepeatingOne: !state.isRepeatingOne,
        };
      case "SET_QUEUE":
        return {
          ...state,
          queue: action.payload,
        };
      case "NEXT_TRACK": {
        if (!state.currentTrack) return state;

        const currentIndex = state.queue.findIndex(
          (track) => track.id === state.currentTrack!.id
        );

        if (currentIndex === -1 || currentIndex === state.queue.length - 1) {
          // Return to the first track
          return {
            ...state,
            currentTrack: state.queue[0],
            progress: 0,
            duration: state.queue[0].duration || 0,
          };
        } else {
          // Go to the next track
          return {
            ...state,
            currentTrack: state.queue[currentIndex + 1],
            progress: 0,
            duration: state.queue[currentIndex + 1].duration || 0,
          };
        }
      }
      case "PREV_TRACK": {
        if (!state.currentTrack) return state;

        const currentIndex = state.queue.findIndex(
          (track) => track.id === state.currentTrack!.id
        );

        if (currentIndex <= 0) {
          // Go to the last track
          const lastTrack = state.queue[state.queue.length - 1];
          return {
            ...state,
            currentTrack: lastTrack,
            progress: 0,
            duration: lastTrack.duration || 0,
          };
        } else {
          // Go to the previous track
          return {
            ...state,
            currentTrack: state.queue[currentIndex - 1],
            progress: 0,
            duration: state.queue[currentIndex - 1].duration || 0,
          };
        }
      }
      case "TOGGLE_VISUALIZER":
        return {
          ...state,
          visualizerActive: !state.visualizerActive,
        };
      case "TOGGLE_EQUALIZER":
        return {
          ...state,
          equalizerActive: !state.equalizerActive,
        };
      case "SET_BUFFERING":
        return {
          ...state,
          isBuffering: action.payload,
        };
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload,
          isPlaying: false,
          isBuffering: false,
        };
      case "SET_SIDEBAR_MODE":
        return {
          ...state,
          sidebarMode: action.payload,
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
      case "UPDATE_PROGRESS":
        return {
          ...state,
          progress: action.payload.currentTime,
          duration: action.payload.duration,
        };
      case "TOGGLE_FAVORITE": {
        const { id } = action.payload;
        const isFavorite = state.favorites.includes(id);

        return {
          ...state,
          favorites: isFavorite
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id],
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Provider value
  const value = { state, dispatch };

  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
};

// Custom hook to use the context
export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusicContext must be used within a MusicProvider");
  }
  return context;
};
