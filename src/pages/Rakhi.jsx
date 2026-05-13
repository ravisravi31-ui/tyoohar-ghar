import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const WA_BASE = "https://wa.me/919599004265?text=";

const hampers = [
  {
    name: "Rakhi Sweet Box",
    price: '₹899',
    items: 'Artisan rakhi · Assorted mithai · Mixed dry fruits · Personalised card',
    tag: 'Best Value',
    emoji: '🍬',
    wa: "Hi Tyoohar Ghar! I'd like to order the Rakhi Sweet Box (₹899). Can you share details?",
  },
  {
    name: "Bhaiya's Treat Hamper",
    price: '₹1,599',
    items: 'Premium rakhi · Gourmet chocolates · Cashews & almonds · Candle · Personalised card',
    tag: 'Most Popular',
    emoji: '🎁',
    wa: "Hi Tyoohar Ghar! I'd like to order Bhaiya's Treat Hamper (₹1,599) for Rakhi. Can you share details?",
  },
  {
    name: "Royal Rakhi Box",
    price: '₹2,499',
    items: 'Designer rakhi · Premium dry fruits & dates · Fine chocolates · Keepsake box · Personalised leather tag · Handwritten card',
    tag: 'Premium Gift',
    emoji: '👑',
    wa: "Hi Tyoohar Ghar! I'd like to order the Royal Rakhi Box (₹2,499). Can you share details?",
  },
];

export default function Rakhi() {
  return (
    <>
      <SEOHead
        title="Rakhi Gift Hampers India 2026 — Raksha Bandhan Hampers"
        description="Premium Rakhi gift hampers India 2026. Curated Raksha Bandhan hampers for your brother — sweets, chocolates, dry fruits. Starting ₹899, free PAN India delivery. Rakhi is August 9, 2026."
        canonical="/collections/rakhi"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-gold-brand text-white font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            🪢 Raksha Bandhan — August 9, 2026
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            Rakhi Gift Hampers 2026
          </h1>
          <p className="font-body text-lg text-navy-mid max-w-2xl mx-auto mb-8 leading-relaxed">
            Make this Raksha Bandhan special with a curated hamper your brother will love. Premium
            sweets, chocolates, dry fruits, and a personalised handwritten card — delivered free anywhere in India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_BASE + encodeURIComponent("Hi Tyoohar Ghar! I'd like to order a Rakhi hamper. Can you help me choose?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-3.5"
            >
              Order Rakhi Hamper
            </a>
            <a href="#hampers" className="btn-outline text-base px-7 py-3.5">See Hampers ↓</a>
          </div>
          <p className="font-body text-sm text-navy-light mt-5">
            📦 Free PAN India delivery · ✍️ Handwritten card included · ⏱ Dispatched in 24–48 hrs
          </p>
        </div>
      </section>

      {/* Hampers */}
      <section id="hampers" className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-3">Choose Your Rakhi Hamper</h2>
          <p className="font-body text-navy-mid text-center mb-10 max-w-xl mx-auto">
            Every hamper includes a personalised handwritten card. Tell us what you'd like us to write.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hampers.map(h => (
              <div key={h.name} className="card flex flex-col">
                <div className="bg-gradient-to-br from-gold-pale to-rose-pale h-52 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl">{h.emoji}</span>
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
                    href={WA_BASE + encodeURIComponent(h.wa)}
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
            <h2 className="font-display text-3xl text-navy-brand mb-4">Why Tyoohar Ghar for Rakhi?</h2>
            <ul className="space-y-4 font-body text-navy-mid">
              {[
                ['🪢', 'Hampers curated especially for Raksha Bandhan'],
                ['✍️', 'Handwritten card — tell us what you want it to say'],
                ['🚚', 'Free delivery anywhere in India — even outstation'],
                ['🎁', 'Beautiful premium packaging your brother will keep'],
                ['💬', 'Order in 3 minutes on WhatsApp — no checkout hassle'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-xl text-navy-brand mb-4">Need a Custom Rakhi Hamper?</h3>
            <p className="font-body text-navy-mid mb-6 text-sm leading-relaxed">
              Tell us your budget and what he loves — we'll build a hamper just for him.
            </p>
            <a
              href={WA_BASE + encodeURIComponent("Hi Tyoohar Ghar! I'd like a custom Rakhi hamper. Can you help?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              Request Custom Hamper
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-navy-brand py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-cream-300 mb-3">Planning ahead?</p>
          <Link to="/collections/diwali" className="font-display text-xl text-white hover:text-rose-light transition-colors">
            See Diwali Hampers 2026 →
          </Link>
          <p className="font-body text-cream-300 text-sm mt-2">November 8, 2026 · Corporate orders open</p>
        </div>
      </section>
    </>
  );
}
