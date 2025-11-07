
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Booking from './pages/Booking';
import Requirements from './pages/Requirements';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-white text-gray-800">
        <div className="bg-blue-600 text-white text-center py-2 text-sm">
          <p>🌟 Special Offer: First Month Free for New Practices</p>
        </div>
        <div className="bg-gray-100 text-gray-600 text-center py-1 text-xs md:text-sm font-medium">
          <p>HIPAA Compliant | 95% Clean Claim Rate | 24/7 Support</p>
        </div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWidgets />
      </div>
    </HashRouter>
  );
}
