export interface AppTheme {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    hover: string;
    highlight: string;
    gradient: string;
    nav: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: {
    subtle: string;
  };
  ui: {
    accent: string;
    accentDark: string;
    secondary: string;
    secondaryHover: string;
    danger: string;
  };
}

export const darkTheme: AppTheme = {
  background: {
    primary: '#121212',
    secondary: '#1E1E1E',
    tertiary: '#282828',
    hover: 'rgba(255, 255, 255, 0.1)',
    highlight: 'rgba(255, 255, 255, 0.05)',
    gradient: 'linear-gradient(180deg, #121212 0%, #000000 100%)',
    nav: 'rgba(18, 18, 18, 0.8)'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    tertiary: '#737373'
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.1)'
  },
  ui: {
    accent: '#1DB954',
    accentDark: '#1AA34A',
    secondary: '#282828',
    secondaryHover: '#333333',
    danger: '#E91429'
  }
};

export const lightTheme: AppTheme = {
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#EEEEEE',
    hover: 'rgba(0, 0, 0, 0.05)',
    highlight: 'rgba(0, 0, 0, 0.03)',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)',
    nav: 'rgba(255, 255, 255, 0.8)'
  },
  text: {
    primary: '#000000',
    secondary: '#6F6F6F',
    tertiary: '#A3A3A3'
  },
  border: {
    subtle: 'rgba(0, 0, 0, 0.1)'
  },
  ui: {
    accent: '#1DB954',
    accentDark: '#1AA34A',
    secondary: '#EEEEEE',
    secondaryHover: '#E5E5E5',
    danger: '#E91429'
  }
};

export const classicalTheme: AppTheme = {
  background: {
    primary: '#1A1A1A',
    secondary: '#252525',
    tertiary: '#2F2F2F',
    hover: 'rgba(255, 255, 255, 0.1)',
    highlight: 'rgba(255, 255, 255, 0.05)',
    gradient: 'linear-gradient(180deg, #1A1A1A 0%, #000000 100%)',
    nav: 'rgba(26, 26, 26, 0.8)'
  },
  text: {
    primary: '#E6C87A',
    secondary: '#B3B3B3',
    tertiary: '#737373'
  },
  border: {
    subtle: 'rgba(230, 200, 122, 0.1)'
  },
  ui: {
    accent: '#E6C87A',
    accentDark: '#C6A94E',
    secondary: '#2F2F2F',
    secondaryHover: '#3A3A3A',
    danger: '#E91429'
  }
};

export type ThemeType = 'light' | 'dark' | 'classical';

export const themes: Record<ThemeType, AppTheme> = {
  light: lightTheme,
  dark: darkTheme,
  classical: classicalTheme
};

export default themes;