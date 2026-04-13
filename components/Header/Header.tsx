// "use client";
// import Link from "next/link";
// import React from "react";

// export const Header: React.FC = () => {
//   return (
//     <header className="w-screen  shadow">
//       <div className="max-w-7xl mx-auto px-6  py-6">
//         <div className="flex justify-center items-center mb-6 ">
//           <div className="">
//             <h1 className={`text-5xl font-sans text-textPrimary `}>
//               Isabella Tarquino
//             </h1>
//             <p
//               className={`flex italic text-lg justify-center item-center text-textPrimary `}
//             >
//               Nutricionista profesional
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <nav className="flex justify-between items-center w-[60%]">
//             <Link href="/" className={`Header-bottom `}>
//               Home
//             </Link>
//             <Link href="/About" className={`Header-bottom `}>
//               Sobre mí
//             </Link>
//             <Link href="/Servicios" className={`Header-bottom `}>
//               Servicios
//             </Link>
//             <Link href="/blog" className={`Header-bottom `}>
//               Blog
//             </Link>
//             <Link href="/contacto" className={`Header-bottom `}>
//               Contacto
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

"use client";
import Link from "next/link";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-screen shadow">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Título */}
        <div className="flex justify-center items-center mb-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-sans text-textPrimary text-center">
              Isabella Tarquino
            </h1>
            <p className="italic text-sm md:text-lg text-center text-textPrimary">
              Nutricionista profesional
            </p>
          </div>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <div className="flex justify-center md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            ☰
          </button>
        </div>

        {/* NAV desktop */}
        <div className="hidden md:flex justify-center items-center">
          <nav className="flex justify-between items-center w-[60%]">
            <Link href="/" className="Header-bottom">
              Home
            </Link>
            <Link href="/About" className="Header-bottom">
              Sobre mí
            </Link>
            <Link href="/Servicios" className="Header-bottom">
              Servicios
            </Link>
            <Link href="/blog" className="Header-bottom">
              Blog
            </Link>
            <Link href="/contacto" className="Header-bottom">
              Contacto
            </Link>
          </nav>
        </div>

        {/* NAV móvil desplegable */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="Header-bottom"
            >
              Home
            </Link>
            <Link
              href="/About"
              onClick={() => setMenuOpen(false)}
              className="Header-bottom"
            >
              Sobre mí
            </Link>
            <Link
              href="/Servicios"
              onClick={() => setMenuOpen(false)}
              className="Header-bottom"
            >
              Servicios
            </Link>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="Header-bottom"
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="Header-bottom"
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
