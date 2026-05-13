import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const WA_BASE = "https://wa.me/919599004265?text=";

const hampers = [
  {
    name: "Diwali Mithai Box",
    price: '₹1,199',
    items: 'Assorted premium mithai · Dry fruits mix · Tealight candle · Personalised card',
    tag: 'Classic Gift',
    emoji: '🍮',
    wa: "Hi Tyoohar Ghar! I'd like to order the Diwali Mithai Box (₹1,199). Can you share details?",
  },
  {
    name: "Festival Luxury Hamper",
    price: '₹2,299',
    items: 'Premium nuts & dates · Artisan chocolates · Scented candle · Dry fruits · Personalised card in keepsake box',
    tag: 'Most Popular',
    emoji: '🪔',
    wa: "Hi Tyoohar Ghar! I'd like to order the Festival Luxury Hamper (₹2,299) for Diwali. Can you share details?",
  },
  {
    name: "Grand Diwali Hamper",
    price: '₹3,499',
    items: 'Luxury dry fruits & dates · Fine Belgian chocolates · Saffron · Premium scented candle set · Crystal diyas · Personalised keepsake box',
    tag: 'Premium Gift',
    emoji: '✨',
    wa: "Hi Tyoohar Ghar! I'd like to order the Grand Diwali Hamper (₹3,499). Can you share details?",
  },
];

export default function Diwali() {
  return (
    <>
      <SEOHead
        title="Diwali Gift Hampers India 2026 — Premium Festive Hampers"
        description="Premium Diwali gift hampers India 2026. Curated festive hampers with dry fruits, sweets, candles from ₹1,199. Corporate Diwali gifts available. Free PAN India delivery. Diwali is November 8, 2026."
        canonical="/collections/diwali"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-gold-brand text-white font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            🪔 Diwali — November 8, 2026
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            Diwali Gift Hampers 2026
          </h1>
          <p className="font-body text-lg text-navy-mid max-w-2xl mx-auto mb-8 leading-relaxed">
            Light up Diwali for the people who matter most. Our premium festive hampers are crafted
            to delight — family gifts, corporate hampers, and everything in between.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_BASE + encodeURIComponent("Hi Tyoohar Ghar! I'd like to order a Diwali hamper. Can you help me choose?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-3.5"
            >
              Order Diwali Hamper
            </a>
            <Link to="/corporate-gifting" className="btn-outline text-base px-7 py-3.5">
              Corporate Orders →
            </Link>
          </div>
          <p className="font-body text-sm text-navy-light mt-5">
            📦 Free PAN India delivery · ✍️ Handwritten card included · 🏢 Bulk pricing available
          </p>
        </div>
      </section>

      {/* Hampers */}
      <section id="hampers" className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-3">Choose Your Diwali Hamper</h2>
          <p className="font-body text-navy-mid text-center mb-10 max-w-xl mx-auto">
            Every hamper includes a personalised handwritten card with your message.
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

      {/* Corporate */}
      <section className="bg-navy-brand py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-white mb-4">Corporate Diwali Gifting</h2>
          <p className="font-body text-cream-300 mb-6 max-w-xl mx-auto leading-relaxed">
            Sending hampers to your team, clients, or partners? We handle bulk orders — custom branded boxes,
            personalised notes, and coordinated delivery across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_BASE + encodeURIComponent("Hi Tyoohar Ghar! I'm interested in corporate Diwali hampers. Can you share bulk pricing?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp px-7 py-3.5 text-base"
            >
              Get Bulk Pricing
            </a>
            <Link to="/corporate-gifting" className="btn-outline text-base px-7 py-3.5 border-white text-white hover:bg-white hover:text-navy-brand">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-cream-200 py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-navy-light mb-3">Also planning for</p>
          <Link to="/collections/karwa-chauth" className="font-display text-xl text-navy-brand hover:text-rose-brand transition-colors">
            Karwa Chauth Hampers — October 12 →
          </Link>
        </div>
      </section>
    </>
  );
}
