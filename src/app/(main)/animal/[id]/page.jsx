"use client";
import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import animals from "@/lib/data.json";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AnimalDetailsPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const { id } = params;
  const animal = animals.find((a) => a.id === parseInt(id));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (!animal) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#f0f9f6]">
        <h1 className="text-2xl font-bold text-gray-500 mb-4">
          Animal not found.
        </h1>
        <Link href="/all-animals" className="text-emerald-600 underline">
          Back to All Animals
        </Link>
      </main>
    );
  }
  const handleBooking = (data) => {
    toast.success(`Booking request for ${animal.name} sent successfully!`, {
      theme: "colored",
    });
    reset();
  };

  return (
    <main className="bg-[#f0f9f6] min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-emerald-50">
          <div className="relative h-96 w-full rounded-xl overflow-hidden mb-6">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-[#2d4a3e]">{animal.name}</h1>
            <p className="text-emerald-600 italic text-lg font-medium">
              {animal.breed}
            </p>

            <div className="h-px bg-emerald-100 w-full my-6"></div>

            <div className="grid grid-cols-3 gap-6 justify-between items-center">
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">
                  Weight
                </p>
                <p className="text-[#4b635a] font-semibold">{animal.weight}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">
                  Age
                </p>
                <p className="text-[#4b635a] font-semibold">{animal.age}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">
                  Location
                </p>
                <p className="text-[#4b635a] font-semibold">
                  {animal.location}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-[#2d4a3e] mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                This {animal.breed} is ethically sourced and healthy for
                Qurbani. It has been raised on natural fodder in a stress-free
                environment.
              </p>
            </div>

            <div className="pt-6">
              <p className="text-2xl font-black text-[#064e3b]">
                Price: {animal.price.toLocaleString()} ৳
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: BOOKING FORM */}
        <div className="w-full lg:w-100">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#fbbf24] sticky top-10">
            <h2 className="text-2xl font-bold text-[#2d4a3e] mb-6 uppercase tracking-tight">
              Booking Form
            </h2>

            <form onSubmit={handleSubmit(handleBooking)} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your mail"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="+8801XXXXXXXXX"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[0-9]{11,14}$/,
                      message:
                        "Enter a valid phone number",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">
                  Address
                </label>
                <textarea
                  rows="3"
                  placeholder="Your delivery address"
                  {...register("address", { required: "Address is required" })}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all resize-none"
                ></textarea>
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#064e3b] hover:bg-[#043d2e] text-white font-bold py-4 rounded-xl uppercase tracking-widest transition-all shadow-md active:scale-95"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimalDetailsPage;
