import { ShoppingBasket } from "lucide-react";

const categories = [
  {
    key: "sweets",
    title: "Sweets",
    img: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1932&auto=format&fit=crop",
    desc: "Laddu, Bobbatlu, Ariselu and festive specials",
  },
  {
    key: "pickles",
    title: "Pickles",
    img: "https://images.unsplash.com/photo-1625944528087-74ccfb7a5f6f?q=80&w=1932&auto=format&fit=crop",
    desc: "Avakaya, Gongura, Tomato, Allam",
  },
  {
    key: "namkeens",
    title: "Namkeens",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop",
    desc: "Mixtures, Murukulu, Boondi",
  },
  {
    key: "powders",
    title: "Premix Powders",
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop",
    desc: "Kandi podi, Karivepaku, Idli karam",
  },
];

export default function SwagruhaGrid() {
  return (
    <section id="swagruha" className="bg-amber-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Swagruha Foods</h2>
            <p className="mt-2 max-w-2xl text-stone-700">
              Explore our handmade sweets, pickles, and namkeens prepared with age-old recipes. Order online and get them delivered fresh.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 font-semibold text-white shadow hover:bg-stone-800">
            <ShoppingBasket size={18} /> View All
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a key={cat.key} href="#contact" className="group overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={cat.img} alt={cat.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-stone-900">{cat.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{cat.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
