import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatMenu from './components/ZaloButton';
import SmoothScroll from './components/SmoothScroll';

const Home = lazy(() => import('./pages/Home'));
const InternetViettel = lazy(() => import('./pages/InternetViettel'));
const WifiSolution = lazy(() => import('./pages/WifiSolution'));
const DigitalSignature = lazy(() => import('./pages/DigitalSignature'));
const EInvoice = lazy(() => import('./pages/EInvoice'));
const EContract = lazy(() => import('./pages/EContract'));
const POSSoftware = lazy(() => import('./pages/POSSoftware'));
const BusinessRegistration = lazy(() => import('./pages/BusinessRegistration'));
const Business = lazy(() => import('./pages/Business'));
const Blog = lazy(() => import('./pages/Blog'));
const PostArticle = lazy(() => import('./pages/PostArticle'));
const Contact = lazy(() => import('./pages/Contact'));
const LocationArticle = lazy(() => import('./pages/LocationArticle'));
const Resources = lazy(() => import('./pages/Resources'));

export default function App() {
  // Xử lý redirect từ 404.html
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      window.history.replaceState(null, '', redirect);
    }
  }, []);

  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Đang tải...</div>}>
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
                <Route path="/resources" element={<Resources />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
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
