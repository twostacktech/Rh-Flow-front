import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // Verifica se o usuário já tem uma preferência de tema no sistema ou se a classe dark está ativa
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        }
    };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/70 backdrop-blur-xl dark:border-gray-800/50 dark:bg-zinc-950/70 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-5">

          <img
            src="/RH_FLOW-semfundo.png"
            alt="RH Flow"
            className="h-11 w-11 rounded-md object-contain"
          />

          <span className="text-lg font-bold tracking-tight text-gray-950 dark:text-white">
            RH Flow
          </span>
        </Link>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav className="hidden items-center gap-1 md:flex">

          <Link
            to="/"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/sobre"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            Sobre nós
          </Link>

          <Link
            to="/funcionarios"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            Funcionários
          </Link>

        </nav>

        {/* BOTÕES DA DIREITA (TEMA E CADASTRO) */}
        <div className="flex items-center gap-3">
          {/* Botão de Tema (Sol / Lua feito em SVG puro para não precisar instalar biblioteca) */}
          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-700 transition-colors hover:bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-gray-300 dark:hover:bg-zinc-800"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              // Ícone de Sol
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            ) : (
              // Ícone de Lua
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
          
          {/* Botão Cadastrar */}
          <Link
            to="/funcionarios/novo"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Cadastrar
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;



//     return (
//         <>
//             <div className="w-full flex justify-center py-4 bg-indigo-500 text-white">
//                 <div className="container flex justify-between text-lg mx-8">
//                     RH Flow

//                     <div className="flex gap-4">
//                         <span>Home</span>
//                         <span>Sobre Nós</span>
//                         <span>Funcionários</span>
//                         <span>Cadastrar</span>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar