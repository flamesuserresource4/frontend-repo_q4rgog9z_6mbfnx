import { ShoppingCart, Utensils, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 sm:pt-20 sm:pb-14 lg:flex lg:items-center lg:gap-12">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 sm:text-sm">Authentic Telugu Brahmin Kitchen</span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-stone-900 sm:mt-6 sm:text-5xl md:text-6xl">
            Brahmana Vantillu
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-700 sm:mt-4 sm:text-lg">
            Pure, satvik, and freshly prepared meals from a traditional home kitchen. Explore our lunch box subscriptions, Swagruha sweets & pickles, and custom catering for poojas and events.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#swagruha"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:w-auto"
            >
              <ShoppingCart size={20} /> Order Swagruha Foods
            </a>
            <a
              href="#lunch"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 shadow-sm transition hover:border-stone-400 sm:w-auto"
            >
              <Utensils size={20} /> View Lunch Plans
            </a>
            <a
              href="#catering"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-green-600 bg-green-50 px-5 py-3 text-sm font-semibold text-green-800 shadow-sm transition hover:bg-green-100 sm:w-auto"
            >
              <MessageCircle size={20} /> Catering Inquiry
            </a>
          </div>
        </div>

        <div className="relative mt-10 w-full flex-1 sm:mt-12 lg:mt-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,200,100,0.2),transparent_60%)]" />
          <div className="relative mx-auto max-w-sm rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-xl backdrop-blur sm:max-w-md sm:rounded-3xl sm:p-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1604908554049-29f4b8db8a4b?q=80&w=1932&auto=format&fit=crop"
                alt="Traditional Telugu meal served on banana leaf"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-3 text-center sm:mt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-700 sm:text-sm">Made fresh daily</p>
              <p className="mt-1 text-xs text-stone-600 sm:text-sm">Satvik vegetarian | No onion & garlic options available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
