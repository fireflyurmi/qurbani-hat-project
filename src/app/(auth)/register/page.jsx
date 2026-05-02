"use client";
import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // Functionality will be added in the next step
  };

  return (
    <main className="min-h-screen bg-[#f0f9f6] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-emerald-50 overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-black text-[#2d4a3e] text-center uppercase tracking-tight mb-2">
            Sign Up
          </h2>
          <p className="text-gray-400 text-center text-sm mb-8">
            Create your account from here
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 ml-1">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 ml-1">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 ml-1">
                Photo URL
              </label>
              <input
                required
                type="url"
                placeholder="https://image-link.com"
                className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 ml-1">
                Password
              </label>
              <input
                required
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#064e3b] font-black py-4 rounded-xl uppercase tracking-widest transition-all shadow-md active:scale-95 mt-4"
            >
              Register
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400">Or join with</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-xl transition-all active:scale-95 shadow-sm">
            <FcGoogle className="text-2xl" />
            <span>Google Register</span>
          </button>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-emerald-600 font-bold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
