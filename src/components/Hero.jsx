import { ShoppingCart, Utensils, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:flex lg:items-center lg:gap-12">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">Authentic Telugu Brahmin Kitchen</span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
            Brahmana Vantillu
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-700">
            Pure, satvik, and freshly prepared meals from a traditional home kitchen. Explore our lunch box subscriptions, Swagruha sweets & pickles, and custom catering for poojas and events.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#swagruha"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <ShoppingCart size={20} /> Order Swagruha Foods
            </a>
            <a
              href="#lunch"
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-3 font-semibold text-stone-800 shadow-sm transition hover:border-stone-400"
            >
              <Utensils size={20} /> View Lunch Plans
            </a>
            <a
              href="#catering"
              className="inline-flex items-center gap-2 rounded-lg border border-green-600 bg-green-50 px-5 py-3 font-semibold text-green-800 shadow-sm transition hover:bg-green-100"
            >
              <MessageCircle size={20} /> Catering Inquiry
            </a>
          </div>
        </div>

        <div className="relative mt-12 w-full flex-1 lg:mt-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,200,100,0.2),transparent_60%)]" />
          <div className="relative mx-auto max-w-md rounded-3xl border border-amber-100 bg-white/80 p-6 shadow-xl backdrop-blur">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1604908554049-29f4b8db8a4b?q=80&w=1932&auto=format&fit=crop"
                alt="Traditional Telugu meal served on banana leaf"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-amber-700">Made fresh daily</p>
              <p className="mt-1 text-sm text-stone-600">Satvik vegetarian | No onion & garlic options available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
