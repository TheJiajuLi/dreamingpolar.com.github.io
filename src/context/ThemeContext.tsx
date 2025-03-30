import React, { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AppTheme, ThemeType, themes, classicalTheme } from "../styles/themes";

interface ThemeContextType {
  currentTheme: AppTheme;
  setTheme: (themeId: ThemeType) => void;
  themeId: ThemeType;
}

const defaultThemeId: ThemeType = "classical";

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: classicalTheme,
  setTheme: () => {},
  themeId: defaultThemeId,
});

// Export both hook names for backwards compatibility
export const useTheme = useThemeContext;
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeId, setThemeId] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("theme") as ThemeType;
    return saved && themes[saved] ? saved : defaultThemeId;
  });

  const currentTheme = themes[themeId];

  const setTheme = (newThemeId: ThemeType) => {
    if (themes[newThemeId]) {
      setThemeId(newThemeId);
      localStorage.setItem("theme", newThemeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themeId }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
