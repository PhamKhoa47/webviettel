import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, MessageCircle, Globe, PenTool, FileText, FileSignature, MonitorSmartphone, Building2, Wifi, Cpu, BookOpen, Newspaper, Headset } from 'lucide-react';
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
      name: 'Cá nhân', 
      items: [
        { name: 'Internet Cáp Quang', path: '/internet-viettel', icon: Wifi, desc: 'Tốc độ cao, ổn định' },
        { name: 'Giải pháp Wifi Mesh', path: '/wifi-solution', icon: Cpu, desc: 'Phủ sóng toàn bộ nhà' },
      ]
    },
    { 
      name: 'Doanh nghiệp', 
      items: [
        { name: 'Chữ ký số CA', path: '/digital-signature', icon: PenTool, desc: 'Kê khai thuế, BHXH' },
        { name: 'Hóa đơn điện tử', path: '/e-invoice', icon: FileText, desc: 'S-Invoice thông minh' },
        { name: 'Hợp đồng điện tử', path: '/e-contract', icon: FileSignature, desc: 'Ký kết không chạm' },
        { name: 'Phần mềm bán hàng', path: '/pos-software', icon: MonitorSmartphone, desc: 'Quản lý kinh doanh' },
        { name: 'Thành lập Doanh nghiệp', path: '/business-registration', icon: Building2, desc: 'Tư vấn pháp lý trọn gói' },
        { name: 'Giải pháp số', path: '/business', icon: Globe, desc: 'Chuyển đổi số toàn diện' },
      ]
    },
    { 
      name: 'Hỗ trợ', 
      items: [
        { name: 'Tin tức & Ưu đãi', path: '/blog', icon: Newspaper, desc: 'Cập nhật mới nhất' },
        { name: 'Tài nguyên & HDSD', path: '/resources', icon: BookOpen, desc: 'Tài liệu hướng dẫn' },
        { name: 'Liên hệ hỗ trợ', path: '/contact', icon: Headset, desc: 'Gặp chuyên viên ngay' },
      ]
    },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
      scrolled 
        ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-2 shadow-sm" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-viettel-red/10 group-hover:scale-110 transition-transform duration-500">
              <img src="https://img-zlr3.tv360.vn/game-tet/real/im1.0/118597f64d266dc0198ad56042ee09ebd50a1513.png" alt="Viettel Đắk Lắk" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg leading-none tracking-tighter text-slate-900 uppercase">VIETTEL</span>
              <span className={cn("text-[8px] font-black tracking-[0.4em] transition-colors", scrolled ? "text-viettel-red" : "text-slate-900/70")}>ĐẮK LẮK</span>
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
                    "px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center",
                    link.items.some(item => location.pathname === item.path)
                      ? "text-viettel-red bg-viettel-red/5"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  )}>
                    {link.name} <ChevronDown size={12} className={cn("ml-1 transition-transform duration-300", openDropdown === link.name ? "rotate-180" : "opacity-40")} />
                  </button>
                  <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white shadow-2xl rounded-3xl p-4 mt-2 border border-slate-100 transition-all duration-300 transform origin-top grid grid-cols-2 gap-2",
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
                            "flex items-start p-3 rounded-2xl transition-all duration-200 group/item",
                            isActive ? "bg-viettel-red/5" : "hover:bg-slate-50"
                          )}
                        >
                          <div className={cn(
                            "p-2.5 rounded-xl mr-3 transition-all",
                            isActive ? "bg-viettel-red text-white" : "bg-slate-100 text-slate-500 group-hover/item:bg-viettel-red/10 group-hover/item:text-viettel-red"
                          )}>
                            <Icon size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className={cn(
                              "text-[10px] font-black uppercase tracking-widest transition-colors",
                              isActive ? "text-viettel-red" : "text-slate-900"
                            )}>
                              {item.name}
                            </span>
                            <span className="text-[9px] text-slate-500 font-medium mt-0.5">{item.desc}</span>
                          </div>
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
                    "px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all duration-300",
                    location.pathname === link.path 
                      ? "text-viettel-red bg-viettel-red/5" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <div className="h-4 w-px bg-slate-200 mx-4" />

            <a 
              href={`tel:${BRAND.phone}`}
              className="flex items-center space-x-2 px-4 py-2 bg-viettel-red text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-viettel-dark transition-all shadow-lg shadow-viettel-red/20"
            >
              <Phone size={14} />
              <span>{BRAND.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl transition-all text-slate-900 hover:bg-slate-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 overflow-y-auto transition-all duration-500 ease-in-out",
        isOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            link.items ? (
              <div key={link.name} className="space-y-2">
                <div className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  {link.name}
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {link.items.map(item => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl transition-all",
                          isActive 
                            ? "bg-viettel-red/5 border-l-4 border-viettel-red" 
                            : "hover:bg-slate-50 border-l-4 border-transparent"
                        )}
                      >
                        <div className={cn(
                          "p-2 rounded-lg mr-4",
                          isActive ? "bg-viettel-red text-white" : "bg-slate-100 text-slate-500"
                        )}>
                          <Icon size={16} />
                        </div>
                        <div className="flex flex-col">
                          <span className={cn(
                            "text-xs font-black uppercase tracking-widest",
                            isActive ? "text-viettel-red" : "text-slate-900"
                          )}>
                            {item.name}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium">{item.desc}</span>
                        </div>
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
                  "block px-4 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all",
                  location.pathname === link.path 
                    ? "text-viettel-red bg-viettel-red/5 border-l-4 border-viettel-red" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-l-4 border-transparent"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
            <a 
              href={`tel:${BRAND.phone}`}
              className="flex items-center justify-center space-x-3 bg-viettel-red text-white w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-viettel-red/10"
            >
              <Phone size={18} />
              <span>{BRAND.phone}</span>
            </a>
            <a 
              href="https://zalo.me/0989113602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-blue-600 text-white w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-600/10"
            >
              <MessageCircle size={18} />
              <span>Chat Zalo</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

