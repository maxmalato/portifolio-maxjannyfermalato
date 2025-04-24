import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [isAsideVisible, setIsAsideVisible] = useState(false);

    const toggleAside = () => {
        setIsAsideVisible(!isAsideVisible)
    };

    return (
        <header className="sticky top-8 drop-shadow-md z-10 bg-white/75 rounded-lg dark:bg-slate-700/75">
            <div className="flex justify-between items-center p-2">
                {/* Botão acessível para o menu */}
                <button
                    className="cursor-pointer hover:text-orange-400 dark:text-white"
                    onClick={toggleAside}
                    aria-label="Abrir menu de navegação"
                    aria-expanded={isAsideVisible}
                >
                    <i className='bx bx-menu bx-md'></i>
                </button>
                <a href="#home">
                    <i className='bx bx-home-alt bx-tada-hover bx-sm dark:text-white' ></i>
                </a>
                <ThemeToggle />
            </div>


            {/* Navegação lateral */}
            <aside
                className={`absolute left-0 top-16 w-40 bg-white/75 drop-shadow-lg p-2 rounded-md transition-all duration-300 dark:bg-slate-700 ${isAsideVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <nav aria-label="Menu Lateral" className="flex flex-col items-start gap-2 p-1">
                    <a href="#aboutMe" className="hover:text-orange-400 dark:text-white" onClick={() => setIsAsideVisible(false)}>Sobre Mim</a>
                    <a href="#skills " className="hover:text-orange-400 dark:text-white" onClick={() => setIsAsideVisible(false)}>Habilidades</a>
                    <a href="#projects" className="hover:text-orange-400 dark:text-white" onClick={() => setIsAsideVisible(false)}>Projetos</a>
                    <a href="#feedbacks" className="hover:text-orange-400 dark:text-white" onClick={() => setIsAsideVisible(false)}>Comentários</a>
                </nav>

                
            </aside>
        </header>
    );
};

export default Navbar;