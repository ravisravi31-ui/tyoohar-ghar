import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const hampers = [
  {
    name: "The Dad's Treat",
    price: '₹999',
    items: 'Premium mixed nuts · Dark chocolates · Assorted cookies · Personalised card',
    tag: 'Best Value',
    wa: "Hi Tyoohar Ghar! I'd like to order The Dad's Treat hamper (₹999) for Father's Day. Can you share the order details?",
  },
  {
    name: "The Cool Dad Box",
    price: '₹1,799',
    items: 'Artisan coffee · Premium tea · Gourmet snacks · Scented candle · Personalised card',
    tag: 'Most Popular',
    wa: "Hi Tyoohar Ghar! I'd like to order The Cool Dad Box (₹1,799) for Father's Day. Can you share details?",
  },
  {
    name: "The Grand Dad Hamper",
    price: '₹2,999',
    items: 'Luxury nuts & dates · Fine chocolates · Premium whiskey glass set · Personalised leather tag · Keepsake box · Handwritten card',
    tag: 'Premium Gift',
    wa: "Hi Tyoohar Ghar! I'd like to order The Grand Dad Hamper (₹2,999) for Father's Day. Can you share details?",
  },
];

export default function FathersDay() {
  return (
    <>
      <SEOHead
        title="Father's Day Gift Hampers India 2026 — Order by June 18"
        description="Best Father's Day gift hampers in India 2026. Premium curated hampers starting ₹999 — chocolates, gourmet treats, personalised card. Free PAN India delivery. Order by June 18."
        canonical="/collections/fathers-day"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-rose-brand text-white font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5 animate-pulse">
            🔥 Order by June 18 for on-time delivery
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            Father's Day Gift Hampers India 2026
          </h1>
          <p className="font-body text-lg text-navy-mid max-w-2xl mx-auto mb-8 leading-relaxed">
            Give Dad more than a card this Father's Day (June 21, 2026). Our premium curated hampers start at ₹999, come
            with a personalised handwritten card, and deliver free across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20order%20a%20Father%27s%20Day%20hamper.%20Can%20you%20help%20me%20choose?"
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-3.5"
            >
              Order Now — Father's Day
            </a>
            <a href="#hampers" className="btn-outline text-base px-7 py-3.5">
              See Hampers ↓
            </a>
          </div>
          <p className="font-body text-sm text-navy-light mt-5">
            📦 Free PAN India delivery · ✍️ Handwritten card included · ⏱ Dispatched in 24–48 hrs
          </p>
        </div>
      </section>

      {/* Hampers */}
      <section id="hampers" className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-3">
            Choose Your Father's Day Hamper
          </h2>
          <p className="font-body text-navy-mid text-center mb-10 max-w-xl mx-auto">
            All hampers include a personalised handwritten card with your message. Just tell us what you'd like it to say.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hampers.map(h => (
              <div key={h.name} className="card flex flex-col">
                <div className="bg-gradient-to-br from-gold-pale to-rose-pale h-52 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl">👔</span>
                    <p className="font-body text-xs text-rose-brand mt-2">Add product photo</p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl text-navy-brand">{h.name}</h3>
                    <span className="font-body text-xs bg-gold-pale text-gold-brand px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2 border border-gold-light">
                      {h.tag}
                    </span>
                  </div>
                  <p className="font-display text-2xl text-rose-brand mb-3">{h.price}</p>
                  <p className="font-body text-sm text-navy-mid mb-2 font-semibold">Inside the box:</p>
                  <p className="font-body text-sm text-navy-mid leading-relaxed mb-5 flex-1">{h.items}</p>
                  <a
                    href={`https://wa.me/919599004265?text=${encodeURIComponent(h.wa)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-whatsapp justify-center"
                  >
                    Order This Hamper
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="bg-cream-200 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl text-navy-brand mb-4">Why Order from Tyoohar Ghar?</h2>
            <ul className="space-y-4 font-body text-navy-mid">
              {[
                ['🎁', 'Every hamper is curated around Dad — not a random assortment'],
                ['✍️', 'Handwritten card included — tell us what to write'],
                ['🚚', 'Free delivery anywhere in India'],
                ['⏱', 'Order by June 18 for guaranteed Father\'s Day delivery'],
                ['📦', 'Premium packaging — the unboxing is part of the gift'],
                ['💬', 'Order in 3 minutes via WhatsApp — no complicated checkout'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-xl text-navy-brand mb-4">Custom Hamper?</h3>
            <p className="font-body text-navy-mid mb-6 text-sm leading-relaxed">
              Have a specific budget or know what Dad loves? We'll build a custom hamper just for him. WhatsApp us with
              your budget and preferences.
            </p>
            <a
              href="https://wa.me/919599004265?text=Hi!%20I%27d%20like%20a%20custom%20Father%27s%20Day%20hamper.%20Can%20you%20help?"
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              Request Custom Hamper
            </a>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="bg-navy-brand py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-cream-300 mb-3">Not sure what to pick?</p>
          <Link
            to="/blog/fathers-day-gift-hampers-india-2026"
            className="font-display text-xl text-white hover:text-rose-light transition-colors"
          >
            Read our Father's Day Gift Guide 2026 →
          </Link>
        </div>
      </section>
    </>
  );
}
