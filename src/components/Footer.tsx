import { Instagram, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#6B3B2B] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Vestiges Café
            </h3>
            <p className="text-white/80 flex items-center gap-2 justify-center md:justify-start">
              © 2025 Vestiges Café — Crafted with <Heart className="w-4 h-4 fill-[#D99CA1] text-[#D99CA1]" /> in Paris
            </p>
          </div>

          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D99CA1] transition-colors"
              aria-label="Visit our Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@vestigescafe.fr"
              className="hover:text-[#D99CA1] transition-colors"
              aria-label="Send us an email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
