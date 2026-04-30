"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiCow } from "react-icons/gi";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ALL ANIMALS", path: "/all-animals" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#064e3b] text-white py-5 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 z-50">
          <GiCow className="text-3xl text-[#fbbf24]" />
          <span className="text-2xl font-bold tracking-tight">
            Qurbani<span className="text-[#fbbf24]">Hat</span>
          </span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-bold tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`${
                pathname === link.path ? "text-[#fbbf24]" : "hover:text-[#fbbf24]"
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/register" className="hover:text-[#fbbf24] transition-colors uppercase">Register</Link>
          <Link href="/login" className="hover:text-[#fbbf24] transition-colors uppercase">Login</Link>
        </div>

        {/* Mobile Toggle Button (Hidden on Desktop) */}
        <button 
          className="md:hidden text-3xl text-[#fbbf24] z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Mobile Sidebar Overlay */}
        <div className={`
          fixed inset-0 bg-[#064e3b] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out z-40 md:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={toggleMenu}
              className={`text-xl font-bold tracking-widest ${
                pathname === link.path ? "text-[#fbbf24]" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-6 mt-4 border-t border-emerald-800 pt-6 w-1/2">
            <Link href="/register" onClick={toggleMenu} className="text-lg font-bold tracking-widest text-white">REGISTER</Link>
            <Link href="/login" onClick={toggleMenu} className="text-lg font-bold tracking-widest text-white">LOGIN</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;