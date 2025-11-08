import { useState } from "react";
import { Calendar, MapPin, Send } from "lucide-react";

export default function CateringForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    venue: "",
    packageType: "Standard",
    menu: {
      dal: "",
      curry: "",
      rice: "",
      sambar: "",
      sweet: "",
      snack: "",
    },
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("menu.")) {
      const key = name.split(".")[1];
      setForm((p) => ({ ...p, menu: { ...p.menu, [key]: value } }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `Catering Inquiry - Brahmana Vantillu`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Date: ${form.date} Time: ${form.time}`,
      `Venue: ${form.venue}`,
      `Package: ${form.packageType}`,
      `Menu:`,
      `• Dal: ${form.menu.dal}`,
      `• Curry: ${form.menu.curry}`,
      `• Rice: ${form.menu.rice}`,
      `• Sambar: ${form.menu.sambar}`,
      `• Sweet: ${form.menu.sweet}`,
      `• Snack: ${form.menu.snack}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ];
    return encodeURIComponent(lines.filter(Boolean).join("\n"));
  };

  const handleWhatsApp = () => {
    const phone = import.meta.env.VITE_WHATSAPP_NUMBER || "919999999999"; // with country code
    const url = `https://wa.me/${phone}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="catering" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Catering Request</h2>
          <p className="mt-3 text-stone-600">Plan your pooja, small gathering, or large event with a custom Telugu satvik menu. Share details on WhatsApp to get a quick quote.</p>
        </div>

        <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-stone-700">Your Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">Event Date</label>
              <div className="mt-1 flex items-center gap-2">
                <Calendar size={18} className="text-stone-500" />
                <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full rounded-lg border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">Event Time</label>
              <input type="time" name="time" value={form.time} onChange={handleChange} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-stone-700">Venue</label>
              <div className="mt-1 flex items-center gap-2">
                <MapPin size={18} className="text-stone-500" />
                <input name="venue" value={form.venue} onChange={handleChange} className="w-full rounded-lg border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700">Package</label>
              <select name="packageType" value={form.packageType} onChange={handleChange} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Standard</option>
                <option>Premium</option>
                <option>Custom</option>
              </select>
            </div>
            <div className="sm:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["dal", "Dal"],
                ["curry", "Curry"],
                ["rice", "Rice"],
                ["sambar", "Sambar"],
                ["sweet", "Sweet"],
                ["snack", "Snack"],
              ].map(([key, label]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-stone-700">{label}</label>
                  <input name={`menu.${key}`} value={form.menu[key]} onChange={handleChange} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
              ))}
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-stone-700">Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button onClick={handleWhatsApp} className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white shadow transition hover:bg-green-700">
              <Send size={18} /> Send to WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
