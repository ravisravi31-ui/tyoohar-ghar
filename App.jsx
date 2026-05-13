import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar          from './components/Navbar.jsx';
import Footer          from './components/Footer.jsx';
import WhatsAppButton  from './components/WhatsAppButton.jsx';
import Home            from './pages/Home.jsx';
import Collections     from './pages/Collections.jsx';
import FathersDay      from './pages/FathersDay.jsx';
import Rakhi           from './pages/Rakhi.jsx';
import Diwali          from './pages/Diwali.jsx';
import GenericFestival from './pages/GenericFestival.jsx';
import Corporate       from './pages/Corporate.jsx';
import About           from './pages/About.jsx';
import FAQ             from './pages/FAQ.jsx';
import Blog            from './pages/Blog.jsx';
import BlogFathersDay  from './pages/BlogFathersDay.jsx';
import Contact         from './pages/Contact.jsx';
import NotFound        from './pages/NotFound.jsx';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Routes>
          <Route path="/"                                         element={<Home />} />
          <Route path="/collections"                              element={<Collections />} />
          <Route path="/collections/fathers-day"                  element={<FathersDay />} />
          <Route path="/collections/rakhi"                        element={<Rakhi />} />
          <Route path="/collections/diwali"                       element={<Diwali />} />
          <Route path="/collections/karwa-chauth"                 element={<GenericFestival festival="Karwa Chauth" emoji="🌙" date="October 12, 2026" />} />
          <Route path="/collections/christmas"                    element={<GenericFestival festival="Christmas" emoji="🎄" date="December 25, 2026" />} />
          <Route path="/collections/wedding"                      element={<GenericFestival festival="Wedding" emoji="💍" date="Year-round" />} />
          <Route path="/collections/baby-shower"                  element={<GenericFestival festival="Baby Shower" emoji="🍼" date="Year-round" />} />
          <Route path="/corporate-gifting"                        element={<Corporate />} />
          <Route path="/about"                                    element={<About />} />
          <Route path="/faq"                                      element={<FAQ />} />
          <Route path="/blog"                                     element={<Blog />} />
          <Route path="/blog/fathers-day-gift-hampers-india-2026" element={<BlogFathersDay />} />
          <Route path="/contact"                                  element={<Contact />} />
          <Route path="*"                                         element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
