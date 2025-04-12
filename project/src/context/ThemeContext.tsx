import React, { createContext, useState, useEffect, useContext } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: true, // Default to dark theme
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with dark theme
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    // Default to dark theme if no preference is saved
    if (savedTheme === 'light') {
      setIsDarkTheme(false);
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    } else {
      // Ensure dark theme is applied
      setIsDarkTheme(true);
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
      // Save preference if not already saved
      if (!savedTheme) {
        localStorage.setItem('portfolio-theme', 'dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      
      if (newTheme) {
        // Dark theme
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        // Light theme
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-theme');
        localStorage.setItem('portfolio-theme', 'light');
      }
      
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);