// src/components/ThemeToggle.jsx
import { useThemeStore } from '../store/useThemeStore';

export default function ThemeToggle() {
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
    >
      {isDark ? <i class='bx bxs-sun'></i> : <i class='bx bxs-moon'></i>}
    </button>
  );
}