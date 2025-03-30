import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { MusicProvider } from "../context/MusicContext";
import { LayoutProvider, useLayout } from "../context/LayoutContext";
import { ThemeProvider, useThemeContext } from "../context/ThemeContext";
import MusicExplorer from "./MusicExplorer/MusicExplorer";
import SideBarPlayer from "./MusicPlayer/SideBarPlayer";
import MobileMusicControls from "./MusicPlayer/MobileMusicControls";
import HorizontalPlayerBar from "./MusicPlayer/HorizontalPlayerBar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CommunityUploadPage from "./CommunityUpload/CommunityUploadPage";
import NavBar from "./NavBar/NavBar"; // Import NavBar component

// Create a separate router component to access useLocation
const AppRouter: React.FC = () => {
  const location = useLocation();
  const { state: layoutState } = useLayout();
  const { currentTheme } = useThemeContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <StyledThemeProvider theme={currentTheme}>
      <AppContainer>
        <NavBar /> {/* Add this line to include the navigation */}
        <MainLayout $hasMobileControls={isMobile}>
          {/* Explorer/Content Section */}
          <Routes location={location}>
            <Route
              path="/"
              element={
                layoutState.explorerVisible && (
                  <ExplorerSection
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    style={{ width: "100%" }}
                  >
                    <MusicExplorer />
                  </ExplorerSection>
                )
              }
            />
            <Route
              path="/explorer"
              element={
                <ExplorerSection
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  style={{ width: "100%" }}
                >
                  <MusicExplorer />
                </ExplorerSection>
              }
            />
            <Route
              path="/community-upload"
              element={
                <ExplorerSection
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  style={{ width: "100%" }}
                >
                  <CommunityUploadPage />
                </ExplorerSection>
              }
            />
            <Route
              path="/settings"
              element={
                <ExplorerSection
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  style={{ width: "100%" }}
                >
                  <div>Settings Page (Coming Soon)</div>
                </ExplorerSection>
              }
            />
          </Routes>

          {/* Hidden Player Section - Contains the audio element but visually hidden */}
          <HiddenPlayerSection>
            <SideBarPlayer />
          </HiddenPlayerSection>
        </MainLayout>
        {/* Independent Player Controls Section */}
        <PlayerControlsSection>
          <AnimatePresence mode="wait">
            {isMobile ? (
              <MobileControlsWrapper
                key="mobile"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <MobileMusicControls />
              </MobileControlsWrapper>
            ) : (
              <HorizontalControlsWrapper
                key="desktop"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <HorizontalPlayerBar />
              </HorizontalControlsWrapper>
            )}
          </AnimatePresence>
        </PlayerControlsSection>
      </AppContainer>
    </StyledThemeProvider>
  );
};

// Wrap this component to access context providers
const AppContent: React.FC = () => {
  return (
    <LayoutProvider>
      <MusicProvider>
        <AppRouter />
      </MusicProvider>
    </LayoutProvider>
  );
};

// Main App component with all providers
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
};

// Styled components that use theme props
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.gradient};
`;

const MainLayout = styled.div<{ $hasMobileControls?: boolean }>`
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 72px;
  @media (max-width: 768px) {
    height: calc(100vh - 80px); /* Adjust for mobile controls */
    padding: 0;
    margin-bottom: 90px;
  }
`;

const ExplorerSection = styled(motion.div)`
  flex: 1; // Make it take all available space
  width: 100%; // Full width
  height: 94.2%;
  overflow: hidden;
  margin-top: 40px;
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;

  @media (max-width: 768px) {
    height: 100%;
    margin-top: 0;
    border-radius: 0px;
    border-left: none;
    border-right: none;
    border-top: none;
  }
`;

// This hidden element is critical for music playback functionality
const HiddenPlayerSection = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  border-radius: 12px;
`;

const PlayerControlsSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
`;

const MobileControlsWrapper = styled(motion.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0;
  background: ${({ theme }) => theme.player.controls};
  backdrop-filter: blur(20px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
`;

const HorizontalControlsWrapper = styled(motion.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0 15px 20px;
`;

export default App;