"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaUser, FaLink } from "react-icons/fa";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f9f6]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  const user = session?.user;

  return (
    <main className="min-h-screen bg-[#f0f9f6] py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-lg border border-emerald-50 overflow-hidden text-center pb-10">
          <div className="h-32 bg-[#064e3b]"></div>
          <div className="px-8 flex flex-col items-center">
            <div className="relative -mt-16 mb-4">
              <div className="relative h-32 w-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                <Image
                  src={
                    user?.image ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt={user?.name || "User"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#2d4a3e] mb-1">
                {user?.name || "Guest User"}
              </h1>
              <p className="text-gray-400 font-medium text-lg">
                {user?.email || "No email available"}
              </p>
            </div>
            <div className="w-full space-y-4 mb-8">
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-emerald-600">
                  <FaUser size={14} />
                </span>
                <input
                  type="text"
                  readOnly
                  value={user?.name || ""}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-emerald-100 bg-gray-50 text-sm text-gray-600 cursor-default outline-none"
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-emerald-600">
                  <FaLink size={14} />
                </span>
                <input
                  type="text"
                  readOnly
                  value={user?.image || ""}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-emerald-100 bg-gray-50 text-sm text-gray-600 cursor-default outline-none overflow-hidden text-ellipsis"
                />
              </div>
            </div>

            <Link
              href="/update-info"
              className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#064e3b] font-bold py-4 rounded-full transition-all shadow-md active:scale-95 uppercase tracking-widest text-xs block"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProfilePage;
