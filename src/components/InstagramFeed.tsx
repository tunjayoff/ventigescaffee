import { Instagram } from 'lucide-react';

const instagramPhotos = [
  {
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Rose decorated cake slice on vintage plate',
  },
  {
    image: 'https://images.pexels.com/photos/5946971/pexels-photo-5946971.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Matcha latte with artistic foam',
  },
  {
    image: 'https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Iced coffee with caramel drizzle',
  },
  {
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Fresh croissants on wooden board',
  },
  {
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Cappuccino with latte art',
  },
  {
    image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Cozy cafe interior with natural lighting',
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-[#D99CA1]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#6B3B2B]">
              @vestiges.cafe
            </h2>
          </div>
          <p className="text-[#CDAF8B] text-lg">
            Follow us for daily inspiration
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPhotos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/vestiges.cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D99CA1] hover:text-[#c88a90] transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            View on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
