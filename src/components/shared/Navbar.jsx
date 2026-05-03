"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { GiCow } from "react-icons/gi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ALL ANIMALS", path: "/all-animals" },
  ];

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully");
          router.push("/login");
        },
      },
    });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getLinkStyle = (path) => {
    return `${
      pathname === path ? "text-[#fbbf24]" : "hover:text-[#fbbf24]"
    } transition-colors uppercase`;
  };

  return (
    <nav className="bg-[#064e3b] text-white py-5 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <GiCow className="text-3xl text-[#fbbf24]" />
          <span className="text-2xl font-bold tracking-tight">
            Qurbani<span className="text-[#fbbf24]">Hat</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-bold tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={getLinkStyle(link.path)}
            >
              {link.name}
            </Link>
          ))}

          {!isPending && (
            <>
              {session ? (
                <div className="flex items-center gap-6">
                  <Link
                    href="/my-profile"
                    className={getLinkStyle("/my-profile")}
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="hover:text-[#fbbf24] transition-colors uppercase cursor-pointer"
                  >
                    Logout
                  </button>

                  {/* Profile Avatar */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#fbbf24] overflow-hidden">
                    <Image
                      src={
                        session.user.image ||
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt="User"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/register" className={getLinkStyle("/register")}>
                    Register
                  </Link>
                  <Link href="/login" className={getLinkStyle("/login")}>
                    Login
                  </Link>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-[#fbbf24] z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
        <div
          className={`fixed inset-0 bg-[#064e3b] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out z-40 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={toggleMenu}
              className={`text-xl font-bold tracking-widest ${pathname === link.path ? "text-[#fbbf24]" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col items-center gap-6 mt-4 border-t border-emerald-800 pt-6 w-1/2">
            {session ? (
              <>
                <Link
                  href="/my-profile"
                  onClick={toggleMenu}
                  className={`text-lg font-bold tracking-widest ${pathname === "/my-profile" ? "text-[#fbbf24]" : "text-white"}`}
                >
                  MY PROFILE
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="text-lg font-bold tracking-widest text-white"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  onClick={toggleMenu}
                  className={`text-lg font-bold tracking-widest ${pathname === "/register" ? "text-[#fbbf24]" : "text-white"}`}
                >
                  REGISTER
                </Link>
                <Link
                  href="/login"
                  onClick={toggleMenu}
                  className={`text-lg font-bold tracking-widest ${pathname === "/login" ? "text-[#fbbf24]" : "text-white"}`}
                >
                  LOGIN
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
