const cafeMenu = [
  { name: 'Espresso', price: '2.7' },
  { name: 'Allongé', price: '3' },
  { name: 'Double Espresso', price: '3.3' },
  { name: 'Americano', price: '3.5' },
  { name: 'Cappuccino', price: '4.5' },
  { name: 'Café Oriental', price: '3.8', note: 'traditional spiced coffee' },
  { name: 'Décaféiné Menengic Café', price: '4', note: 'pistachier turc' },
  { name: 'Latte', price: '5/6' },
  { name: 'Iced Latte Vanille Tahini', price: '7.3' },
  { name: 'Iced Latte Framboise Cannelle', price: '7.3' },
];

const teaMenu = [
  { name: 'Matcha Latte', price: '6' },
  { name: 'Dirty Matcha', price: '7' },
  { name: 'Iced Matcha Latte Figue Rose', price: '7.3' },
  { name: 'Iced Matcha Latte Framboise Pistache', price: '7.3' },
  { name: 'Mûre Matcha Fizz', price: '7.3' },
  { name: 'Thé Noir parfumé à la bergamote', price: '4' },
  { name: 'Infusion Cannelle', price: '2.5' },
  { name: 'Hosaf', price: '5', note: 'jus à base de fruits secs' },
  { name: 'Limonade Cannelle Rose', price: '5' },
  { name: 'Limonade Pamplemousse Citron', price: '5' },
  { name: 'Smoothie', price: '7.3', note: 'banane, datte, tahini, cannelle' },
];

interface MenuItem {
  name: string;
  price: string;
  note?: string;
}

function MenuSection({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-[#6B3B2B] mb-6 border-b-2 border-[#D99CA1] pb-3">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-baseline hover:bg-[#CDAF8B]/10 p-3 rounded transition-colors duration-200"
          >
            <span className="text-lg text-[#6B3B2B] font-medium">
              {item.name}
              {item.note && (
                <span className="text-sm text-[#CDAF8B] italic ml-2">
                  ({item.note})
                </span>
              )}
            </span>
            <div className="menu-dotted" />
            <span className="text-lg text-[#6B3B2B] font-semibold">
              €{item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-6 md:px-12 lg:px-24 bg-[#F4EFE8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#6B3B2B] text-center mb-4">
          Notre Menu
        </h2>
        <p className="text-center text-[#CDAF8B] mb-12 italic">
          Extra size +1
        </p>

        <MenuSection title="CAFÉ" items={cafeMenu} />
        <MenuSection title="THÉ" items={teaMenu} />
      </div>
    </section>
  );
}
