"use client"
import Link from 'next/link';
import React from 'react';
// import { Great_Vibes } from "next/font/google";
// import { Playfair_Display } from 'next/font/google';


// const greatVibes = Great_Vibes({
//   weight: "400",
//   subsets: ["latin"],
// });

// const playfairDisplay = Playfair_Display({
//   weight: "400",
//   subsets: ["latin"],
// });

// ${greatVibes.className}

export const Header: React.FC = () => {
    return (
        <header className="w-screen bg-pageBase shadow">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex justify-center items-center mb-6 ">
                    <div className=''>
                        <h1 className={`text-5xl font-bold font-sans text-textPrimary `}>Isabella Tarquino</h1>
                        <p className={`flex italic text-lg justify-center item-center text-textPrimary `}>Nutricionista profesional</p>
                    </div>
                </div>
                <nav className="flex justify-between items-center">
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
        </header>
    );
}