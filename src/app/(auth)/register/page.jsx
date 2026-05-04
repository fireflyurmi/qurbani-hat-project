"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import LottieAnimation from "@/components/shared/LottieAnimation";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegister = async (formData) => {
    const { email, name, photo, password } = formData;
    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
    });

    if (error) {
      toast.error(error.message || "Registration failed");
    } else {
      toast.success("Account created! Please login.");
      router.push("/login");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <main className="min-h-screen bg-[#f0f9f6] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-emerald-50 overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center -mt-4 mb-2">
            <LottieAnimation
              animationPath="/animations/cow.json"
              width="150px"
            />
          </div>

          <h2 className="text-3xl font-black text-[#2d4a3e] text-center tracking-tight mb-2">
            Registration Form
          </h2>
          <p className="text-gray-400 text-center text-sm mb-8">
            Create your account from here
          </p>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name field is required" })}
                className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
              />
              {errors.name && (
                <p className="text-red-500 font-mono text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
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
                <p className="text-red-500 font-mono text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 ml-1">
                Photo URL
              </label>
              <input
                type="url"
                placeholder="https://image-link.com"
                {...register("photo", { required: "URL field is required" })}
                className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
              />
              {errors.photo && (
                <p className="text-red-500 font-mono text-xs mt-1">
                  {errors.photo.message}
                </p>
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
              <span
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="absolute right-4 top-10 cursor-pointer text-gray-400"
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (
                <p className="text-red-500 font-mono text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
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

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-xl transition-all active:scale-95 shadow-sm"
          >
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
