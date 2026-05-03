"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaUser, FaLink } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const UpdateInfoPage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: session?.user?.name || "",
      image: session?.user?.image || "",
    },
  });

  const onUpdate = async (formData) => {
    const { data, error } = await authClient.updateUser({
      name: formData.name,
      image: formData.image,
    });

    if (error) {
      toast.error(error.message || "Update failed");
    } else {
      toast.success("Information updated successfully!");
      router.push("/my-profile");
    }
  };

  return (
    <main className="min-h-screen bg-[#f0f9f6] flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl border-t-8 border-[#064e3b] p-8">
          <h2 className="text-2xl font-bold text-[#2d4a3e] uppercase tracking-tight text-center mb-8">
            Update Information
          </h2>

          <form onSubmit={handleSubmit(onUpdate)} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Photo URL
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                  <FaLink />
                </span>
                <input
                  type="text"
                  {...register("image", { required: "Photo URL is required" })}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
                />
              </div>
              {errors.image && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#064e3b] hover:bg-[#043d2e] text-white font-bold py-4 rounded-xl uppercase tracking-widest transition-all shadow-md active:scale-95"
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default UpdateInfoPage;
