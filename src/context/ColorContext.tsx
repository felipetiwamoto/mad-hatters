
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ColorContextType = {
  color: string;
  setColor: (color: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

type ColorProviderProps = {
  children: ReactNode;
  defaultColor?: string;
};

export const ColorProvider: React.FC<ColorProviderProps> = ({ 
  children, 
  defaultColor = '#8cb964' 
}) => {
  const [color, setColor] = useState<string>(defaultColor);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
