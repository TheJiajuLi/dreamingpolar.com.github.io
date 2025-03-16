import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { MusicProvider } from "../context/MusicContext";
import { LayoutProvider, useLayout } from "../context/LayoutContext";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import MusicExplorer from "./MusicExplorer/MusicExplorer";
import { motion } from "framer-motion";
import { forestTheme } from "../styles/themes";

const App: React.FC = () => {
  const { state: layoutState } = useLayout();

  return (
    <ThemeProvider theme={forestTheme}>
      <MusicProvider>
        <LayoutProvider>
          <AppContainer>
            <MainLayout>
              {layoutState.explorerVisible && (
                <ExplorerSection
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <MusicExplorer />
                </ExplorerSection>
              )}
              <PlayerSection $expanded={!layoutState.explorerVisible}>
                <MusicPlayer />
              </PlayerSection>
            </MainLayout>
          </AppContainer>
        </LayoutProvider>
      </MusicProvider>
    </ThemeProvider>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
`;

const MainLayout = styled.div`
  display: flex;
  height: 100vh;
  gap: 20px;
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const ExplorerSection = styled(motion.div)`
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3);
`;

const PlayerSection = styled.div<{ $expanded: boolean }>`
  flex: 1;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: ${(props) => (props.$expanded ? "0" : "20px")};
`;

export default App;
