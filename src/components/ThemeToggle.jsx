// src/components/ThemeToggle.jsx
import { useThemeStore } from '../store/useThemeStore';

export default function ThemeToggle() {
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      className="text-black dark:text-white cursor-pointer"
    >
      {isDark ? <i class='bx bxs-sun bx-sm bx-tada-hover'></i> : <i class='bx bxs-moon bx-sm bx-tada-hover'></i>}
    </button>
  );
}