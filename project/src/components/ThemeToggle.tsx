import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-4 py-2 rounded-full bg-blue-500 text-white dark:bg-white dark:text-black transition"
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle