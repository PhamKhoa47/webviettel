import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatMenu from './components/ZaloButton';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import InternetViettel from './pages/InternetViettel';
import WifiSolution from './pages/WifiSolution';
import DigitalSignature from './pages/DigitalSignature';
import EInvoice from './pages/EInvoice';
import EContract from './pages/EContract';
import POSSoftware from './pages/POSSoftware';
import BusinessRegistration from './pages/BusinessRegistration';
import Business from './pages/Business';
import Blog from './pages/Blog';
import PostArticle from './pages/PostArticle';
import Contact from './pages/Contact';
import LocationArticle from './pages/LocationArticle';

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/internet-viettel" element={<InternetViettel />} />
              <Route path="/wifi-solution" element={<WifiSolution />} />
              <Route path="/digital-signature" element={<DigitalSignature />} />
              <Route path="/e-invoice" element={<EInvoice />} />
              <Route path="/e-contract" element={<EContract />} />
              <Route path="/pos-software" element={<POSSoftware />} />
              <Route path="/business-registration" element={<BusinessRegistration />} />
              <Route path="/business" element={<Business />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/post/:slug" element={<PostArticle />} />
              <Route path="/blog/:slug" element={<LocationArticle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Floating Buttons */}
          <ChatMenu />
          <a 
            href="tel:0989113602" 
            className="fixed bottom-24 right-6 z-50 bg-viettel-red text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
          >
            <Phone size={24} />
          </a>
        </div>
      </SmoothScroll>
    </Router>
  );
}
