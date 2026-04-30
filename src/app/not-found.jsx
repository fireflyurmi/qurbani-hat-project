import Link from 'next/link';
import { GiCow } from 'react-icons/gi';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-center">
            <div className="relative mb-4 md:mb-8">
                <GiCow className="text-7xl md:text-9xl text-emerald-900 opacity-10 absolute -top-8 md:-top-10 -left-8 md:-left-10 rotate-12" />
                <h1 className="text-7xl md:text-9xl font-extrabold text-[#064e3b] tracking-tighter relative">
                    404
                </h1>
            </div>
            <div className="max-w-md space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight px-2">
                    Oops! This Animal has Grazed Away.
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    The page you are looking for doesn&apos;t exist or has been moved to a different pasture. Let&apos;s get you back to the herd!
                </p>
            </div>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
                <Link 
                    href="/" 
                    className="w-full sm:w-auto px-8 py-3 bg-[#fbbf24] text-[#064e3b] font-bold rounded-lg hover:bg-[#eab308] transition-all shadow-md active:scale-95 text-sm md:text-base"
                >
                    BACK TO HOME
                </Link>
                <Link 
                    href="/all-animals" 
                    className="w-full sm:w-auto px-8 py-3 border-2 border-[#064e3b] text-[#064e3b] font-bold rounded-lg hover:bg-[#064e3b] hover:text-white transition-all active:scale-95 text-sm md:text-base"
                >
                    BROWSE LIVESTOCK
                </Link>
            </div>

            <div className="mt-12 md:mt-16 flex items-center gap-2 opacity-50">
                <GiCow className="text-lg md:text-xl text-[#064e3b]" />
                <span className="text-xs md:text-sm font-semibold text-[#064e3b] tracking-widest uppercase">
                    QurbaniHat
                </span>
            </div>
        </div>
    );
};

export default NotFoundPage;