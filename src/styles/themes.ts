export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  error: string;
  success: string;
}

export const forestTheme: Theme = {
  name: 'forest',
  primary: '#2d5d2a',
  secondary: '#3b8c37',
  accent: '#68bf63',
  background: '#0f1d0e',
  surface: '#182f17',
  text: '#ffffff',
  textSecondary: '#c0c0c0',
  error: '#e57373',
  success: '#81c784'
};