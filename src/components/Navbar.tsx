import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { BRAND } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { 
      name: 'Dịch vụ', 
      items: [
        { name: 'Internet', path: '/internet-viettel' },
        { name: 'Chữ ký số', path: '/digital-signature' },
        { name: 'Hóa đơn', path: '/e-invoice' },
        { name: 'Hợp đồng', path: '/e-contract' },
        { name: 'Bán hàng', path: '/pos-software' },
        { name: 'Thành lập DN', path: '/business-registration' },
      ]
    },
    { name: 'Giải pháp', path: '/business' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isHomePage = location.pathname === '/';
  const shouldShowBg = scrolled || !isHomePage;

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
      shouldShowBg 
        ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-viettel-red p-2 rounded-xl group-hover:rotate-3 transition-transform">
              <span className="text-white font-bold text-xl tracking-tighter">V</span>
            </div>
            <div className="flex flex-col">
              <span className={cn("font-bold text-lg leading-none transition-colors", shouldShowBg ? "text-slate-900" : "text-white")}>VIETTEL</span>
              <span className={cn("text-[10px] font-medium tracking-widest transition-colors", shouldShowBg ? "text-slate-500" : "text-white/70")}>ĐẮK LẮK</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.items ? (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={cn(
                    "px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:bg-viettel-red/10 flex items-center",
                    shouldShowBg ? "text-slate-700" : "text-white/90 hover:text-white"
                  )}>
                    {link.name} <ChevronDown size={14} className="ml-1" />
                  </button>
                  <div className={cn(
                    "absolute top-full left-0 w-56 bg-white shadow-xl rounded-2xl py-2 mt-2 transition-all duration-300",
                    openDropdown === link.name ? "opacity-100 visible" : "opacity-0 invisible"
                  )}>
                    {link.items.map(item => (
                      <Link key={item.path} to={item.path} className="block px-6 py-2 text-sm text-slate-700 hover:text-viettel-red hover:bg-slate-50">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:bg-viettel-red/10",
                    location.pathname === link.path 
                      ? "text-viettel-red bg-viettel-red/10" 
                      : shouldShowBg ? "text-slate-700" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href="https://zalo.me/0989113602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              <span>Zalo</span>
            </a>
            <a 
              href={`tel:${BRAND.phone}`}
              className="ml-4 flex items-center space-x-2 bg-viettel-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-viettel-dark transition-all shadow-lg hover:shadow-viettel-red/30 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span>{BRAND.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn("p-2 rounded-lg transition-colors", shouldShowBg ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10")}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            link.items ? (
              <div key={link.name} className="space-y-1">
                <div className="px-4 py-3 text-base font-semibold text-slate-900">
                  {link.name}
                </div>
                {link.items.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block pl-8 pr-4 py-2 text-sm font-medium rounded-xl transition-colors",
                      location.pathname === item.path 
                        ? "text-viettel-red bg-viettel-red/10" 
                        : "text-slate-600 hover:text-viettel-red hover:bg-slate-50"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-semibold rounded-xl transition-colors",
                  location.pathname === link.path 
                    ? "text-viettel-red bg-viettel-red/10" 
                    : "text-slate-700 hover:text-viettel-red hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="pt-4 space-y-2">
            <a 
              href="https://zalo.me/0989113602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-blue-500 text-white w-full py-4 rounded-xl font-bold text-lg"
            >
              <MessageCircle size={20} />
              <span>Chat Zalo</span>
            </a>
            <a 
              href={`tel:${BRAND.phone}`}
              className="flex items-center justify-center space-x-2 bg-viettel-red text-white w-full py-4 rounded-xl font-bold text-lg"
            >
              <Phone size={20} />
              <span>{BRAND.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

