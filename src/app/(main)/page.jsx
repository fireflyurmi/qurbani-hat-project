import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/assets/banner.jpg";
import animals from "@/lib/data.json";
import { FaCanadianMapleLeaf } from "react-icons/fa";

export default function Home() {
  const featuredAnimals = animals.slice(0, 4);

  return (
    <main className="bg-[#f0f9f6] min-h-screen pb-20">
      <section className="relative w-full h-137.5 overflow-hidden">
        <Image
          src={bannerImg}
          alt="Qurbani Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 text-center">
          <div className="max-w-4xl px-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A Modern Livestock Marketplace:
              <br />
              Ethically Sourced for Qurbani
            </h1>
            <Link
              href="/all-animals"
              className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#064e3b] font-bold py-3 px-10 rounded-lg shadow-md transition-all uppercase tracking-wide inline-block"
            >
              Browse Livestock
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-10">
        <section className="py-16">
          <h3 className="text-2xl font-bold text-[#4b635a] uppercase tracking-wider mb-8">
            Featured Animals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAnimals.map((animal) => (
              <div
                key={animal.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 border border-emerald-50"
              >
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4 hover:scale-105 transition-transform duration-500">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-[#4b635a] text-lg">
                  {animal.name}
                </h4>
                <p className="text-sm text-gray-500 mb-1">{animal.breed}</p>
                <p className="text-[#fbbf24] font-bold mb-4">
                  Price: {animal.price.toLocaleString()} ৳
                </p>
                <Link
                  href={`/animal/${animal.id}`}
                  className="block w-full bg-[#fbbf24] text-[#064e3b] text-center py-2 rounded-md font-bold text-sm uppercase hover:bg-[#f59e0b]"
                >
                  Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
            <div className="w-full lg:max-w-2xl">
              <h4 className="text-xl font-bold text-gray-400 uppercase mb-6">
                Qurbani Tips
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Health Check",
                    desc: "Ensure animal is active and healthy.",
                  },
                  {
                    title: "Age Guide",
                    desc: "Confirm proper age requirements.",
                  },
                  {
                    title: "Sunnah Practices",
                    desc: "Follow ethical treatment rules.",
                  },
                  {
                    title: "Disposal Guide",
                    desc: "Proper disposal guidelines.",
                  },
                ].map((tip, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-emerald-50 shadow-sm"
                  >
                    <div className="w-8 h-8 bg-[#f0f9f6] rounded-full flex items-center justify-center mb-3">
                      <span className="text-green-400 text-xs">
                        <FaCanadianMapleLeaf />
                      </span>
                    </div>
                    <h5 className="font-bold text-[#4b635a] text-sm uppercase mb-1">
                      {tip.title}
                    </h5>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-start">
              <h4 className="text-xl font-bold text-gray-400 uppercase mb-6">
                Top Breeds
              </h4>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex gap-6">
                  {featuredAnimals.slice(0, 3).map((animal, idx) => (
                    <div key={idx} className="text-center group cursor-pointer">
                      <div className="w-24 h-24 rounded-full border-4 border-[#fbbf24] overflow-hidden mb-3 group-hover:scale-105 transition-transform shadow-sm">
                        <Image
                          src={animal.image}
                          alt={animal.breed}
                          width={100}
                          height={100}
                          className="object-cover h-full"
                        />
                      </div>
                      <p className="text-[10px] font-bold text-[#4b635a] uppercase tracking-tight">
                        {animal.breed.split(" ")[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
