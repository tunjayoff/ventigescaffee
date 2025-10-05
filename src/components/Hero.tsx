import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(107, 59, 43, 0.3), rgba(107, 59, 43, 0.3)), url('https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
        aria-label="Artisan rose-drizzled cake on rustic table with soft natural lighting"
      />

      <div className="relative z-10 text-center text-white px-6 fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Vestiges Café
        </h1>
        <p className="text-xl md:text-3xl mb-4 font-light tracking-wide">
          Artisan Coffee & Patisserie in Paris
        </p>
        <p className="text-lg md:text-xl mb-12 italic opacity-90">
          Sıcak tatlılar, yavaş kahve ve küçük anlar.
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-[#D99CA1] hover:bg-[#c88a90] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View Menu
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8 opacity-70" />
      </div>
    </section>
  );
}
