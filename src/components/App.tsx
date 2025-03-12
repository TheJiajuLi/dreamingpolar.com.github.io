import React from "react";
import { ThemeProvider } from "styled-components";
import { MusicProvider } from "../context/MusicContext";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import { GlobalStyles } from "../styles/GlobalStyles";
import { forestTheme } from "../styles/themes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={forestTheme}>
      <GlobalStyles />
      <MusicProvider>
        <MusicPlayer />
      </MusicProvider>
    </ThemeProvider>
  );
};

export default App;
