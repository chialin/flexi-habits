import React, { ReactNode, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextType>(undefined!);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (currentTheme: Theme) => {
    const root = document.documentElement;
    if (currentTheme === 'light') {
      root.style.setProperty('--background-color', '#ffffff');
      root.style.setProperty('--text-color', '#333333');
      root.style.setProperty('--header-bg-color', '#3498db');
      root.style.setProperty('--header-text-color', '#ffffff');
      root.style.setProperty('--button-bg-color', '#2980b9');
      root.style.setProperty('--button-text-color', '#ffffff');
      root.style.setProperty('--item-bg-color', '#f9f9f9');
      root.style.setProperty('--item-border-color', '#e0e0e0');
    } else {
      root.style.setProperty('--background-color', '#333333');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--header-bg-color', '#2c3e50');
      root.style.setProperty('--header-text-color', '#ecf0f1'); // 更改為淺灰色
      root.style.setProperty('--button-bg-color', '#f39c12');
      root.style.setProperty('--button-text-color', '#333333');
      root.style.setProperty('--item-bg-color', '#666666');
      root.style.setProperty('--item-border-color', '#555555');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
