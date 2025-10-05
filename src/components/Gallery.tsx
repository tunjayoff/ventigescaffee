const galleryImages = [
  {
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Rose petal cake with natural lighting and soft shadows',
  },
  {
    image: 'https://images.pexels.com/photos/5946971/pexels-photo-5946971.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Matcha latte in ceramic cup on rustic table',
  },
  {
    image: 'https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Iced specialty coffee drink with caramel',
  },
  {
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh artisan croissants on wooden board',
  },
  {
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cozy cafe interior with warm natural lighting',
  },
  {
    image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Minimalist cafe corner with plants and soft textures',
  },
  {
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cappuccino with delicate latte art',
  },
  {
    image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Layered dessert with cream and berries',
  },
  {
    image: 'https://images.pexels.com/photos/1788398/pexels-photo-1788398.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Espresso shot on marble counter with soft morning light',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F4EFE8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#6B3B2B] text-center mb-16">
          Gallery
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((photo, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
