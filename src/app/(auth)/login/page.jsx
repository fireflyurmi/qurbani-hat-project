"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLogin = () => {};

  const handleGoogleLogin = () => {
    // Functionality will be added in the next step
  };

  return (
    <main className="min-h-screen bg-[#f0f9f6] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-emerald-50 overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-black text-[#2d4a3e] text-center tracking-tight mb-2">
            User Login
          </h2>
          <p className="text-gray-400 text-center text-sm mb-8">
            Welcome back to QurbaniHat
          </p>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email field is required" })}
                className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
              />
              {errors.email && (
                <p className="text-red-500 font-mono">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 ml-1">
                Password
              </label>
              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password field is required",
                })}
                className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
              />
              <span onClick={()=> setIsShowPassword(!isShowPassword)} className="absolute right-2 top-10 cursor-pointer">
                { isShowPassword ? <FaEye/> : <FaEyeSlash/>}
              </span>
              {errors.password && (
                <p className="text-red-500 font-mono">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#064e3b] hover:bg-[#043d2e] text-white font-bold py-4 rounded-xl uppercase tracking-widest transition-all shadow-md active:scale-95"
            >
              Login
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-xl transition-all active:scale-95 shadow-sm"
          >
            <FcGoogle className="text-2xl" />
            <span>Google Login</span>
          </button>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don&apos; have an account?{" "}
            <Link
              href="/register"
              className="text-emerald-600 font-bold hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
