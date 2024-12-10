import type { ColorMode, ColorTheme } from '../types';

export const COLOR_MODES: Record<ColorMode, ColorTheme> = {
  default: {
    name: 'Default',
    icon: '🎨',
    background: '#013220',
    surface: '#014028',
    text: '#F2F2F2',
    textSecondary: '#B4B4B4',
    accent: '#FF6700',
    border: '#014830'
  },
  light: {
    name: 'Light',
    icon: '☀️',
    background: '#F8F5E4',
    surface: '#FFFFFF',
    text: '#333333',
    textSecondary: '#666666',
    accent: '#5B8BB2',
    border: '#E4DCCF'
  },
  dark: {
    name: 'Dark',
    icon: '🌙',
    background: '#1E1E1E',
    surface: '#2A2A2A',
    text: '#D4D4D4',
    textSecondary: '#A0A0A0',
    accent: '#56B3D1',
    border: '#2F2F2F'
  },
  sepia: {
    name: 'Sepia',
    icon: '📖',
    background: '#FAE3D9',
    surface: '#FFF5F0',
    text: '#5A4638',
    textSecondary: '#8A7468',
    accent: '#A17A4A',
    border: '#EEE1D1'
  }
};

export const getStoredColorMode = (): ColorMode => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = localStorage.getItem('colorMode') as ColorMode;
    return stored && stored in COLOR_MODES ? stored : 'default';
  }
  return 'default';
};

export const setColorMode = (mode: ColorMode) => {
  if (typeof window === 'undefined') return;
  if (!(mode in COLOR_MODES)) return;
  
  const theme = COLOR_MODES[mode];
  const root = document.documentElement;
  
  root.style.setProperty('--color-bg-primary', theme.background);
  root.style.setProperty('--color-surface', theme.surface);
  root.style.setProperty('--color-text-primary', theme.text);
  root.style.setProperty('--color-text-secondary', theme.textSecondary);
  root.style.setProperty('--color-accent-primary', theme.accent);
  root.style.setProperty('--color-border', theme.border);
  
  localStorage.setItem('colorMode', mode);
  root.setAttribute('data-color-mode', mode);
};