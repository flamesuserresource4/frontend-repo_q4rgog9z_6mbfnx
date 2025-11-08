import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Weekly Tiffin",
    price: 899,
    features: [
      "5 wholesome satvik meals",
      "Veg / Jain menu options",
      "1 sweet day",
      "Hygienic, home-style cooking",
    ],
  },
  {
    name: "Monthly Tiffin",
    price: 3299,
    features: [
      "22 nourishing meals",
      "Skip a day flexibility",
      "Free buttermilk on Fridays",
      "Renewal reminders on WhatsApp",
    ],
    highlight: true,
  },
  {
    name: "Custom Plan",
    price: 0,
    features: [
      "Choose dishes & quantities",
      "Add-ons: sweet, extra curry",
      "No onion & garlic available",
      "Delivery window selection",
    ],
  },
];

export default function LunchPlans() {
  return (
    <section id="lunch" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-4xl">Lunch Box Subscriptions</h2>
          <p className="mt-2 text-sm text-stone-600 sm:mt-3 sm:text-base">Simple, flexible, and wholesome tiffin plans crafted with love every morning.</p>
        </div>
        <div className="mt-6 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-5 shadow-sm ${
                plan.highlight ? "border-amber-400 bg-amber-50" : "border-stone-200 bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white shadow">Best Value</span>
              )}
              <h3 className="text-lg font-semibold text-stone-900 sm:text-xl">{plan.name}</h3>
              <p className="mt-2 text-2xl font-extrabold text-amber-700 sm:text-3xl">
                {plan.price > 0 ? `₹${plan.price}` : "Custom"}
                {plan.price > 0 && <span className="text-xs font-medium text-stone-500 sm:text-sm"> / plan</span>}
              </p>
              <ul className="mt-3 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-stone-700 sm:text-base">
                    <CheckCircle2 className="mt-0.5 text-green-600" size={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
