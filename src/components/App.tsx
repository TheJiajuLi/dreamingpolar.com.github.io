import React from "react";
import { ThemeProvider } from "styled-components";
import { MusicProvider } from "../context/MusicContext";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import HorizontalMusicControls from "./MusicPlayer/HorizontalMusicControls";
import { forestTheme } from "../styles/themes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={forestTheme}>
      <MusicProvider>
        <MusicPlayer />
        <HorizontalMusicControls />
      </MusicProvider>
    </ThemeProvider>
  );
};

export default App;