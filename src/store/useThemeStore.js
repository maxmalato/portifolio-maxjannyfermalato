import { create } from 'zustand';

const STORAGE_KEY = 'theme';

// Storage pode lançar exceção (modo privado, dados de site bloqueados).
const readSavedTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const saveTheme = (isDark) => {
  try {
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  } catch {
    // Sem storage o tema vale apenas para esta sessão.
  }
};

const applyTheme = (isDark) => {
  document.documentElement.classList.toggle('dark', isDark);
};

export const useThemeStore = create((set, get) => ({
  isDark: false,
  toggleTheme: () => {
    const isDark = !get().isDark;
    applyTheme(isDark);
    saveTheme(isDark);
    set({ isDark });
  },
  // Mantenha em sincronia com o script inline do index.html.
  setInitialTheme: () => {
    const savedTheme = readSavedTheme();
    const isDark = savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(isDark);
    set({ isDark });
  },
}));
