import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, MessageCircle, Globe, PenTool, FileText, FileSignature, MonitorSmartphone, Building2 } from 'lucide-react';
import { BRAND } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Internet', path: '/internet-viettel' },
    { 
      name: 'Dịch vụ', 
      items: [
        { name: 'Chữ ký số', path: '/digital-signature', icon: PenTool },
        { name: 'Hóa đơn điện tử', path: '/e-invoice', icon: FileText },
        { name: 'Hợp đồng điện tử', path: '/e-contract', icon: FileSignature },
        { name: 'Phần mềm bán hàng', path: '/pos-software', icon: MonitorSmartphone },
        { name: 'Thành lập Doanh nghiệp', path: '/business-registration', icon: Building2 },
      ]
    },
    { name: 'Giải pháp', path: '/business' },
    { name: 'Tin tức', path: '/blog' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isHomePage = location.pathname === '/';
  const shouldShowBg = scrolled || !isHomePage;

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
      scrolled 
        ? "bg-slate-50/90 backdrop-blur-xl border-b border-slate-100 py-3 shadow-2xl" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg shadow-viettel-red/20 group-hover:rotate-6 transition-transform duration-500">
              <img src="https://img-zlr3.tv360.vn/game-tet/real/im1.0/118597f64d266dc0198ad56042ee09ebd50a1513.png" alt="Viettel Đắk Lắk" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none tracking-tighter text-slate-900 uppercase">VIETTEL</span>
              <span className={cn("text-[10px] font-black tracking-[0.3em] transition-colors", scrolled ? "text-viettel-red" : "text-slate-900/70")}>ĐẮK LẮK</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              link.items ? (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={cn(
                    "px-4 xl:px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center",
                    link.items.some(item => location.pathname === item.path)
                      ? "text-viettel-red bg-viettel-red/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white"
                  )}>
                    {link.name} <ChevronDown size={14} className={cn("ml-1.5 transition-transform duration-300", openDropdown === link.name ? "rotate-180" : "opacity-50")} />
                  </button>
                  <div className={cn(
                    "absolute top-full left-0 w-72 bg-slate-50/95 backdrop-blur-2xl shadow-2xl rounded-3xl p-3 mt-2 border border-slate-200 transition-all duration-300 transform origin-top",
                    openDropdown === link.name ? "opacity-100 scale-100 visible translate-y-0" : "opacity-0 scale-95 invisible -translate-y-2"
                  )}>
                    {link.items.map(item => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link 
                          key={item.path} 
                          to={item.path} 
                          className={cn(
                            "flex items-center px-4 py-3 rounded-2xl transition-all duration-200 group/item",
                            isActive ? "bg-viettel-red/10" : "hover:bg-white"
                          )}
                        >
                          <div className={cn(
                            "p-2 rounded-xl mr-3 transition-colors",
                            isActive ? "bg-viettel-red text-white" : "bg-white text-slate-600 group-hover/item:bg-viettel-red/20 group-hover/item:text-viettel-red"
                          )}>
                            <Icon size={16} />
                          </div>
                          <span className={cn(
                            "text-[11px] font-black uppercase tracking-widest transition-colors",
                            isActive ? "text-viettel-red" : "text-slate-900/70 group-hover/item:text-slate-900"
                          )}>
                            {item.name}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 xl:px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300",
                    location.pathname === link.path 
                      ? "text-viettel-red bg-viettel-red/10" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-white"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <div className="h-6 w-px bg-slate-100 mx-4 xl:mx-6 hidden lg:block" />

            <div className="flex flex-col items-end">
              <a 
                href={`tel:${BRAND.phone}`}
                className="text-xs font-black text-slate-900 hover:text-viettel-red transition-colors"
              >
                Hotline: {BRAND.phone}
              </a>
              <a 
                href={`tel:${BRAND.hotlineSupport}`}
                className="text-[10px] font-black text-viettel-red hover:text-viettel-dark transition-colors uppercase tracking-widest"
              >
                Báo sự cố: {BRAND.hotlineSupport}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl transition-all text-slate-900 hover:bg-slate-100"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-slate-50/95 backdrop-blur-2xl shadow-2xl border-t border-slate-100 overflow-y-auto transition-all duration-500 ease-in-out",
        isOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            link.items ? (
              <div key={link.name} className="space-y-3">
                <div className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                  {link.name}
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {link.items.map(item => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-2xl transition-all",
                          isActive 
                            ? "bg-viettel-red/10 border border-viettel-red/20" 
                            : "hover:bg-white border border-transparent"
                        )}
                      >
                        <div className={cn(
                          "p-2 rounded-xl mr-4",
                          isActive ? "bg-viettel-red text-white" : "bg-white text-slate-600"
                        )}>
                          <Icon size={18} />
                        </div>
                        <span className={cn(
                          "text-sm font-black uppercase tracking-widest",
                          isActive ? "text-viettel-red" : "text-slate-900/80"
                        )}>
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-4 text-sm font-black uppercase tracking-widest rounded-2xl transition-all",
                  location.pathname === link.path 
                    ? "text-viettel-red bg-viettel-red/10 border border-viettel-red/20" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="pt-6 mt-6 border-t border-slate-200 space-y-4">
            <a 
              href={`tel:${BRAND.phone}`}
              className="flex items-center justify-center space-x-4 bg-viettel-red text-white w-full py-4 rounded-2xl font-black text-base uppercase tracking-widest shadow-2xl shadow-viettel-red/20"
            >
              <Phone size={20} />
              <span>{BRAND.phone}</span>
            </a>
            <a 
              href="https://zalo.me/0989113602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-base uppercase tracking-widest shadow-2xl shadow-blue-600/20"
            >
              <MessageCircle size={20} />
              <span>Chat Zalo Ngay</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

