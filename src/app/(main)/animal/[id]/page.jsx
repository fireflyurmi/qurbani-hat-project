"use client";
import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import animals from "@/lib/data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AnimalDetailsPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const { id } = params;
  const animal = animals.find((a) => a.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

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

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success(`Booking request for ${animal.name} sent successfully!`, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });

    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <main className="bg-[#f0f9f6] min-h-screen py-12 px-6">
      <ToastContainer />
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

            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  required
                  type="text"
                  pattern="[0-9]{11}"
                  value={formData.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setFormData({ ...formData, phone: val });
                    e.target.setCustomValidity("");
                  }}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "invalid phone number, please enter 11 digit valid number",
                    )
                  }
                  placeholder="01XXXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">
                  Address
                </label>
                <textarea
                  required
                  rows="3"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder="Your delivery address"
                  className="w-full px-4 py-3 rounded-xl border border-emerald-100 outline-none focus:ring-2 focus:ring-[#fbbf24] bg-gray-50 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#064e3b] hover:bg-[#043d2e] text-white font-bold py-4 rounded-xl uppercase tracking-widest transition-all shadow-md active:scale-95"
              >
                Book Now
              </button>
            </form>

            <p className="text-[10px] text-gray-400 text-center mt-4 italic">
              * Private route: You must be logged in to complete booking.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimalDetailsPage;
