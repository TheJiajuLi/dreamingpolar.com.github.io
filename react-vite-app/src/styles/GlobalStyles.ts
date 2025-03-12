import { createGlobalStyle } from 'styled-components';
import { Theme } from './themes';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.5;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: inherit;
    color: inherit;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  input, select {
    font-family: inherit;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  /* Dreaming Polar Semantic Classes */
  .dp-player-container {
    /* Additional styling that complements your styled components */
  }
  
  .dp-album-cover {
    /* Additional styling */
  }
  
  .dp-control-btn {
    /* Additional styling */
  }
  
  .dp-equalizer-container {
    /* Additional styling */
  }
  
  /* Accessibility improvements */
  .dp-player-container:focus-within {
    outline: 2px solid rgba(76, 175, 80, 0.5);
  }
  
  .dp-control-btn:focus {
    outline: 2px solid rgba(76, 175, 80, 0.5);
  }
  
  /* Animation classes */
  .pulse {
    animation: pulse 2s infinite ease-in-out;
  }
  
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
  
  /* Responsive classes */
  @media (max-width: 768px) {
    .dp-player-container {
      /* Mobile-specific adjustments */
    }
  }
`;