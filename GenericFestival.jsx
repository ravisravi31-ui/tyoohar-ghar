import SEOHead from '../components/SEOHead.jsx';

const WA_BASE = "https://wa.me/919599004265?text=";

const festivalMeta = {
  'Karwa Chauth': {
    description: "Beautiful Karwa Chauth gift hampers for the woman you love. Premium skincare, sweets, and keepsake gifts. Free PAN India delivery.",
    heroDesc: "A thoughtful hamper is the most beautiful way to say you've been thinking of her. Skincare, sweets, candles, and personalised notes — delivered free across India.",
    hampers: [
      { name: 'Her Sweet Box', price: '₹999', items: 'Assorted mithai · Dry fruits · Rose candle · Personalised card', emoji: '🌸' },
      { name: 'The Love Hamper', price: '₹1,799', items: 'Premium skincare duo · Artisan chocolates · Scented candle · Personalised card in keepsake box', emoji: '💕' },
      { name: 'The Grand Gesture', price: '₹2,999', items: 'Luxury skincare set · Fine chocolates · Premium perfume · Crystal diya · Keepsake box · Handwritten card', emoji: '✨' },
    ],
  },
  'Christmas': {
    description: "Festive Christmas gift hampers India 2026. Premium holiday hampers with chocolates, cookies, candles. Free PAN India delivery.",
    heroDesc: "Spread holiday cheer with a beautifully curated Christmas hamper. Chocolates, cookies, candles, and personalised notes — the perfect gift for everyone on your list.",
    hampers: [
      { name: 'Christmas Cheer Box', price: '₹999', items: 'Assorted cookies · Dark chocolates · Cinnamon candle · Christmas card', emoji: '🎁' },
      { name: 'Holiday Luxe Hamper', price: '₹1,899', items: 'Gourmet cookies · Belgian chocolates · Premium mulled wine spices · Holiday candle · Personalised card', emoji: '🎄' },
      { name: 'Grand Christmas Hamper', price: '₹2,999', items: 'Luxury chocolates · Artisan cookies · Festive candle set · Premium tea · Keepsake box · Handwritten card', emoji: '⭐' },
    ],
  },
  'Wedding': {
    description: "Elegant wedding gift hampers and return gifts India. Premium wedding hampers for mehendi, sangeet, and bridal parties. Free PAN India delivery.",
    heroDesc: "From mehendi to the big day — a curated hamper is the most thoughtful wedding gift or return gift. Premium, personal, and delivered beautifully.",
    hampers: [
      { name: 'Wedding Favour Box', price: '₹799', items: 'Artisan sweets · Candle · Personalised card — minimum 20 units', emoji: '💍' },
      { name: 'Bridal Party Hamper', price: '₹1,999', items: 'Skincare duo · Chocolates · Scented candle · Personalised keepsake box with note', emoji: '💐' },
      { name: 'Wedding Gift Hamper', price: '₹3,499', items: 'Luxury skincare set · Fine chocolates · Premium candle · Personalised leather tag · Keepsake box', emoji: '✨' },
    ],
  },
  'Baby Shower': {
    description: "Sweet baby shower gift hampers India. Premium hampers for the mum-to-be — skincare, chocolates, and keepsake gifts. Free PAN India delivery.",
    heroDesc: "Celebrate the new arrival with a hamper that makes mum feel as special as the moment. Curated with love for mum-to-be.",
    hampers: [
      { name: 'Mum-to-Be Box', price: '₹1,299', items: 'Pregnancy-safe skincare duo · Herbal teas · Artisan chocolates · Baby shower card', emoji: '🍼' },
      { name: 'Baby Joy Hamper', price: '₹2,199', items: 'Premium skincare · Chocolates · Scented candle · Baby milestone keepsake card set · Personalised note', emoji: '👶' },
      { name: 'Grand Baby Shower', price: '₹3,299', items: 'Luxury skincare set · Fine chocolates · Baby keepsake box · Premium candle · Personalised photo frame · Handwritten card', emoji: '💕' },
    ],
  },
};

export default function GenericFestival({ festival, emoji, date }) {
  const meta = festivalMeta[festival] || {
    description: `Premium ${festival} gift hampers India. Curated hampers starting ₹999 with free PAN India delivery.`,
    heroDesc: `Beautiful curated hampers for ${festival}. Premium, personalised, and delivered free across India.`,
    hampers: [
      { name: 'Classic Hamper', price: '₹999', items: 'Premium treats · Personalised card', emoji: '🎁' },
      { name: 'Luxury Hamper', price: '₹1,999', items: 'Gourmet treats · Candle · Personalised card in keepsake box', emoji: '✨' },
      { name: 'Grand Hamper', price: '₹2,999', items: 'Luxury treats · Premium gifts · Keepsake box · Handwritten card', emoji: '👑' },
    ],
  };

  const slug = festival.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <SEOHead
        title={`${festival} Gift Hampers India 2026 | Tyoohar Ghar`}
        description={meta.description}
        canonical={`/collections/${slug}`}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-gold-brand text-white font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            {emoji} {festival} — {date}
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            {festival} Gift Hampers 2026
          </h1>
          <p className="font-body text-lg text-navy-mid max-w-2xl mx-auto mb-8 leading-relaxed">
            {meta.heroDesc}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_BASE + encodeURIComponent(`Hi Tyoohar Ghar! I'd like to order a ${festival} hamper. Can you help me choose?`)}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-3.5"
            >
              Order {festival} Hamper
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
          <h2 className="font-display text-3xl text-navy-brand text-center mb-10">
            Choose Your {festival} Hamper
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meta.hampers.map(h => (
              <div key={h.name} className="card flex flex-col">
                <div className="bg-gradient-to-br from-gold-pale to-rose-pale h-52 flex items-center justify-center">
                  <span className="text-6xl">{h.emoji}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-navy-brand mb-1">{h.name}</h3>
                  <p className="font-display text-2xl text-rose-brand mb-3">{h.price}</p>
                  <p className="font-body text-sm text-navy-mid mb-2 font-semibold">Inside the box:</p>
                  <p className="font-body text-sm text-navy-mid leading-relaxed mb-5 flex-1">{h.items}</p>
                  <a
                    href={WA_BASE + encodeURIComponent(`Hi Tyoohar Ghar! I'd like to order the ${h.name} (${h.price}) for ${festival}. Can you share details?`)}
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

      {/* Custom + Why */}
      <section className="bg-cream-200 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl text-navy-brand mb-4">Why Tyoohar Ghar?</h2>
            <ul className="space-y-4 font-body text-navy-mid">
              {[
                ['🎁', `Every hamper curated for ${festival}`],
                ['✍️', 'Handwritten card — you tell us what to write'],
                ['🚚', 'Free delivery anywhere in India'],
                ['📦', 'Premium packaging that makes unboxing special'],
                ['💬', 'Order in 3 minutes on WhatsApp'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-xl text-navy-brand mb-4">Need Something Custom?</h3>
            <p className="font-body text-navy-mid mb-6 text-sm leading-relaxed">
              Tell us your budget and preferences and we'll build a hamper just for the occasion.
            </p>
            <a
              href={WA_BASE + encodeURIComponent(`Hi Tyoohar Ghar! I'd like a custom ${festival} hamper. Can you help?`)}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              Request Custom Hamper
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
