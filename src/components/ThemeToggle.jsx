import { useThemeStore } from "../store/useThemeStore";

export default function ThemeToggle() {
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="cursor-pointer"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      <i className={`bx ${isDark ? "bxs-sun" : "bxs-moon"} bx-sm bx-tada-hover`}></i>
    </button>
  );
}
