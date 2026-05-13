import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';

const WA = "https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar!%20I%27d%20like%20to%20order%20a%20hamper.%20Can%20you%20help%20me%20choose%3F";

const collections = [
  {
    slug: 'fathers-day',
    name: "Father's Day",
    emoji: '👔',
    date: 'June 21, 2026',
    urgency: '⏰ Order by June 18',
    desc: 'Curated hampers for Dad — chocolates, gourmet treats, whiskey glass sets and more. Starting ₹999.',
    badge: 'Happening Now',
    badgeColor: 'bg-rose-brand text-white',
  },
  {
    slug: 'rakhi',
    name: 'Rakhi',
    emoji: '🪢',
    date: 'August 9, 2026',
    urgency: 'Pre-order open',
    desc: 'Sweet hampers and luxury gift sets for your brother and bhaiya. Make this Rakhi memorable.',
    badge: 'Coming Soon',
    badgeColor: 'bg-gold-pale text-gold-brand border border-gold-light',
  },
  {
    slug: 'diwali',
    name: 'Diwali',
    emoji: '🪔',
    date: 'November 8, 2026',
    urgency: 'Corporate orders open',
    desc: 'Premium festive hampers — dry fruits, sweets, candles, and luxury gifting for Diwali 2026.',
    badge: 'Pre-Book',
    badgeColor: 'bg-gold-pale text-gold-brand border border-gold-light',
  },
  {
    slug: 'karwa-chauth',
    name: 'Karwa Chauth',
    emoji: '🌙',
    date: 'October 12, 2026',
    urgency: 'Accepting orders',
    desc: 'Thoughtful hampers for the woman you love. Skincare, sweets, and keepsake gifts.',
    badge: 'Available',
    badgeColor: 'bg-cream-300 text-navy-mid',
  },
  {
    slug: 'wedding',
    name: 'Wedding',
    emoji: '💍',
    date: 'Year-round',
    urgency: 'Always available',
    desc: 'Elegant wedding hampers and return gifts. Perfect for mehendi, sangeet, or as bridal party gifts.',
    badge: 'Year-round',
    badgeColor: 'bg-cream-300 text-navy-mid',
  },
  {
    slug: 'baby-shower',
    name: 'Baby Shower',
    emoji: '🍼',
    date: 'Year-round',
    urgency: 'Always available',
    desc: 'Celebrate the new arrival with sweet hampers for the mum-to-be and the little one.',
    badge: 'Year-round',
    badgeColor: 'bg-cream-300 text-navy-mid',
  },
  {
    slug: 'christmas',
    name: 'Christmas',
    emoji: '🎄',
    date: 'December 25, 2026',
    urgency: 'Holiday orders open',
    desc: 'Festive Christmas hampers with chocolates, cookies, candles, and holiday cheer.',
    badge: 'Holiday',
    badgeColor: 'bg-cream-300 text-navy-mid',
  },
];

export default function Collections() {
  return (
    <>
      <SEOHead
        title="Festive Gift Hampers India — All Collections | Tyoohar Ghar"
        description="Browse all Tyoohar Ghar festive gift hampers — Father's Day, Rakhi, Diwali, Karwa Chauth, Wedding, Christmas. Premium hampers from ₹999 with free PAN India delivery."
        canonical="/collections"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-cream-200 via-cream-100 to-rose-pale py-14 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-4 leading-tight">
            All Gift Collections
          </h1>
          <p className="font-body text-lg text-navy-mid mb-6 leading-relaxed">
            Every occasion deserves a beautiful hamper. Browse our curated collections for every
            festival, celebration, and milestone — all starting at ₹999 with free PAN India delivery.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-7 py-3.5 text-base">
            WhatsApp to Order
          </a>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="bg-cream-100 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map(c => (
              <Link
                key={c.slug}
                to={`/collections/${c.slug}`}
                className="card flex flex-col hover:border-rose-brand border border-transparent transition-all duration-200 group"
              >
                <div className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale h-44 flex items-center justify-center rounded-t-2xl">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-200">{c.emoji}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="font-display text-xl text-navy-brand">{c.name}</h2>
                    <span className={`font-body text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2 ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                  </div>
                  <p className="font-body text-xs text-navy-light mb-1">{c.date} · {c.urgency}</p>
                  <p className="font-body text-sm text-navy-mid leading-relaxed flex-1">{c.desc}</p>
                  <p className="font-body text-sm text-rose-brand font-semibold mt-4 group-hover:underline">
                    Shop {c.name} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate strip */}
      <section className="bg-navy-brand py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-cream-300 text-sm mb-2">Ordering for your team or clients?</p>
          <Link to="/corporate-gifting" className="font-display text-2xl text-white hover:text-rose-light transition-colors">
            See Corporate Gifting →
          </Link>
          <p className="font-body text-cream-300 text-sm mt-3">Bulk pricing · Custom branding · Dedicated account manager</p>
        </div>
      </section>
    </>
  );
}
