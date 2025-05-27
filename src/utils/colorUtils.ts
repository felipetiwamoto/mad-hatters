
import { useEffect, useState } from 'react';

export type ColorProps = {
  color?: string;
};

export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  // Remove the hash character if it exists
  hex = hex.replace(/^#/, '');

  // Parse the hex values
  const bigint = parseInt(hex, 16);
  
  // Check if the hex is valid
  if (isNaN(bigint)) {
    return null;
  }
  
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  
  return { r, g, b };
};

export const getColorStyle = (color?: string, opacity: number = 1): React.CSSProperties => {
  if (!color) return {};
  
  const rgb = hexToRgb(color);
  if (!rgb) return {};
  
  return {
    backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`,
  };
};

export const getTextColorStyle = (color?: string, opacity: number = 1): React.CSSProperties => {
  if (!color) return {};
  
  const rgb = hexToRgb(color);
  if (!rgb) return {};
  
  return {
    color: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`,
  };
};

export const getBorderColorStyle = (color?: string, opacity: number = 1): React.CSSProperties => {
  if (!color) return {};
  
  const rgb = hexToRgb(color);
  if (!rgb) return {};
  
  return {
    borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`,
  };
};

export const getGradientStyle = (color?: string, startOpacity: number = 0.05, endOpacity: number = 0.9): React.CSSProperties => {
  if (!color) return {};
  
  const rgb = hexToRgb(color);
  if (!rgb) return {};
  
  return {
    background: `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${startOpacity}) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${endOpacity}) 100%)`,
  };
};

export const useIsDarkMode = (): boolean => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches || document.documentElement.classList.contains('dark'));

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isDarkMode;
};

export const isColorLight = (color?: string): boolean => {
  if (!color) return true;
  
  const rgb = hexToRgb(color);
  if (!rgb) return true;
  
  // Calculate the perceived brightness using the formula
  // (0.299*R + 0.587*G + 0.114*B)
  const brightness = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  
  // If brightness is greater than 0.5, color is considered light
  return brightness > 0.5;
};

export const getContrastColor = (color?: string): string => {
  return isColorLight(color) ? '#000000' : '#ffffff';
};
