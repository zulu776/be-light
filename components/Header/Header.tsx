"use client";
import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="w-screen  shadow">
      <div className="max-w-7xl mx-auto px-6  py-6">
        <div className="flex justify-center items-center mb-6 ">
          <div className="">
            <h1 className={`text-5xl font-sans text-textPrimary `}>
              Isabella Tarquino
            </h1>
            <p
              className={`flex italic text-lg justify-center item-center text-textPrimary `}
            >
              Nutricionista profesional
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <nav className="flex justify-between items-center w-[60%]">
            <Link href="/" className={`Header-bottom `}>
              Home
            </Link>
            <Link href="/About" className={`Header-bottom `}>
              Sobre mí
            </Link>
            <Link href="/Servicios" className={`Header-bottom `}>
              Servicios
            </Link>
            <Link href="/blog" className={`Header-bottom `}>
              Blog
            </Link>
            <Link href="/contacto" className={`Header-bottom `}>
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
