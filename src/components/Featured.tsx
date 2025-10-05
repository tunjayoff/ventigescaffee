const featuredItems = [
  {
    name: 'Rose Petal Cake',
    description: 'Delicate vanilla sponge with rose-infused cream',
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Rose petal decorated cake with soft pink drizzle on vintage plate',
  },
  {
    name: 'Matcha Latte',
    description: 'Premium ceremonial grade matcha with oat milk',
    image: 'https://images.pexels.com/photos/5946971/pexels-photo-5946971.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Creamy matcha latte with artistic foam in ceramic cup',
  },
  {
    name: 'Tahini Vanilla Iced Latte',
    description: 'Smooth espresso, tahini, and vanilla over ice',
    image: 'https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Iced coffee drink with caramel swirl in tall glass',
  },
];

export default function Featured() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#6B3B2B] text-center mb-16">
          Featured Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="overflow-hidden rounded-lg shadow-lg mb-4 aspect-square">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#6B3B2B] mb-2">
                {item.name}
              </h3>
              <p className="text-[#CDAF8B] text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
