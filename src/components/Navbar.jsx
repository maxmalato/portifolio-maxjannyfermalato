import { useState } from "react";
import { navItems } from "../data/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  const toggleAside = () => setIsAsideVisible((visible) => !visible);
  const closeAside = () => setIsAsideVisible(false);

  return (
    <header className="sticky top-8 drop-shadow-md z-10 bg-white/75 rounded-lg dark:bg-slate-700/75">
      <div className="flex justify-between items-center p-2">
        <button
          type="button"
          className="cursor-pointer hover:text-orange-400"
          onClick={toggleAside}
          aria-label="Abrir menu de navegação"
          aria-expanded={isAsideVisible}
          aria-controls="menu-lateral"
        >
          <i className="bx bx-menu bx-md"></i>
        </button>
        <a href="#home" aria-label="Voltar ao início">
          <i className="bx bx-home-alt bx-tada-hover bx-sm"></i>
        </a>
        <ThemeToggle />
      </div>

      {/* Navegação lateral */}
      <aside
        id="menu-lateral"
        inert={!isAsideVisible}
        className={`absolute left-0 top-16 w-40 bg-white/75 drop-shadow-lg p-2 rounded-md transition-all duration-300 dark:bg-slate-700 ${
          isAsideVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <nav aria-label="Menu Lateral" className="flex flex-col items-start gap-2 p-1">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-orange-400" onClick={closeAside}>
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;
