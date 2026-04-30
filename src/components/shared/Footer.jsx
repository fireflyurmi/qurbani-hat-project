import Link from "next/link";
import { GiCow } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#064e3b] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-10"> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <GiCow className="text-3xl text-[#fbbf24]" />
              <span className="text-3xl font-bold tracking-tight">Qurbani<span className="text-[#fbbf24]">Hat</span></span>
            </div>
            <p className="text-emerald-100/90 text-sm leading-relaxed">
              A modern livestock marketplace where tradition meets technology. Ethically sourced animals for your sacred sacrifice.
            </p>
          </div>

          <div className="lg:pl-10">
            <h4 className="text-[#fbbf24] text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-emerald-50/90">
              <li><Link href="/" className="hover:text-[#fbbf24] transition-colors">Home</Link></li>
              <li><Link href="/all-animals" className="hover:text-[#fbbf24] transition-colors">All Animals</Link></li>
              <li><Link href="/about" className="hover:text-[#fbbf24] transition-colors">About Us</Link></li>
              <li><Link href="/tips" className="hover:text-[#fbbf24] transition-colors">Qurbani Tips</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#fbbf24] text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-emerald-50/90 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#fbbf24]" /> 
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#fbbf24]" /> 
                <span>support@qurbanihat.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#fbbf24]" /> 
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div className="lg:text-right">
            <h4 className="text-[#fbbf24] text-xl font-bold mb-6 lg:pr-2">Follow Us</h4>
            <div className="flex gap-4 justify-start lg:justify-end">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-800/50 hover:bg-[#fbbf24] hover:text-[#064e3b] transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-800/50 hover:bg-[#fbbf24] hover:text-[#064e3b] transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-800/50 hover:bg-[#fbbf24] hover:text-[#064e3b] transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-emerald-800/50 text-center">
          <p className="text-emerald-100/40 text-xs uppercase tracking-widest">
            © 2026 QurbaniHat. All rights reserved. Designed with care for your journey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;