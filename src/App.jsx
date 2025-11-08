import Hero from "./components/Hero";
import LunchPlans from "./components/LunchPlans";
import SwagruhaGrid from "./components/SwagruhaGrid";
import CateringForm from "./components/CateringForm";
import { Phone } from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold text-stone-900">Brahmana Vantillu</h4>
            <p className="mt-2 text-sm text-stone-600">Traditional Telugu Brahmin kitchen serving wholesome meals, Swagruha foods, and custom catering.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-stone-700">Address</h5>
            <p className="mt-2 text-sm text-stone-600">Hyderabad, Telangana<br />Open 7 days • 8 AM – 8 PM</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-stone-700">Contact</h5>
            <p className="mt-2 text-sm text-stone-600">Phone: +91 99999 99999<br />Email: hello@brahmanavantillu.com</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-stone-700">Follow</h5>
            <div className="mt-2 flex gap-3 text-stone-600">
              <a href="#" aria-label="Instagram" className="hover:text-stone-900">Instagram</a>
              <a href="#" aria-label="Facebook" className="hover:text-stone-900">Facebook</a>
              <a href="#" aria-label="YouTube" className="hover:text-stone-900">YouTube</a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-stone-500">© {new Date().getFullYear()} Brahmana Vantillu. All rights reserved.</p>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "919999999999"}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"
      >
        <Phone size={18} /> WhatsApp
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-inter text-stone-900">
      <Hero />
      <SwagruhaGrid />
      <LunchPlans />
      <CateringForm />
      <Footer />
    </div>
  );
}
