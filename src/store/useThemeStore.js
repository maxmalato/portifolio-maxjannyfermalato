import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  isDark: false,
  toggleTheme: () =>
    set((state) => {
      const newIsDark = !state.isDark;
      const root = document.documentElement;

      if (newIsDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

      return { isDark: newIsDark };
    }),
  setInitialTheme: () => {
    const savedTheme = localStorage.getItem('theme');
    const root = document.documentElement;
    if (savedTheme === 'dark') {
      root.classList.add('dark');
      return set({ isDark: true });
    } else {
      root.classList.remove('dark');
      return set({ isDark: false });
    }
  },
}));
