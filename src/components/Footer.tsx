import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Share2, PlayCircle, MessageCircle, Send } from 'lucide-react';
import { BRAND, SERVICES } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 pt-32 pb-12 relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-viettel-red/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg shadow-viettel-red/20 group-hover:rotate-6 transition-transform duration-500">
                <img src="https://img-zlr3.tv360.vn/game-tet/real/im1.0/118597f64d266dc0198ad56042ee09ebd50a1513.png" alt="Viettel Đắk Lắk" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-2xl leading-none tracking-tighter uppercase">VIETTEL</span>
                <span className="text-[10px] font-black tracking-[0.4em] text-viettel-red transition-colors group-hover:text-slate-900">ĐẮK LẮK</span>
              </div>
            </Link>
            <p className="text-lg leading-relaxed text-slate-600 max-w-md">
              Tiên phong kiến tạo xã hội số tại Đắk Lắk. Chúng tôi cung cấp giải pháp viễn thông và công nghệ thông tin toàn diện nhất.
            </p>
            <div className="flex space-x-4">
              {[PlayCircle, Share2, MessageCircle, Send].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center hover:bg-viettel-red hover:text-white transition-all duration-500 border border-slate-200 hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-black mb-8 text-xs uppercase tracking-[0.2em]">Dịch vụ</h3>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="text-slate-600 hover:text-viettel-red transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-viettel-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-black mb-8 text-xs uppercase tracking-[0.2em]">Liên kết</h3>
            <ul className="space-y-4">
              {[
                { name: 'Giải pháp doanh nghiệp', path: '/business' },
                { name: 'Tin tức & Blog', path: '/blog' },
                { name: 'Liên hệ hỗ trợ', path: '/contact' },
                { name: 'Chính sách bảo mật', path: '/privacy' }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-slate-600 hover:text-viettel-red transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-viettel-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-black mb-8 text-xs uppercase tracking-[0.2em]">Liên hệ</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-viettel-red group-hover:bg-viettel-red group-hover:text-white transition-all duration-500">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Hotline</p>
                  <a href={`tel:${BRAND.phone}`} className="text-lg font-bold text-slate-900 hover:text-viettel-red transition-colors">{BRAND.phone}</a>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2 mb-1">Báo sự cố</p>
                  <a href={`tel:${BRAND.hotlineSupport}`} className="text-lg font-bold text-viettel-red hover:text-viettel-dark transition-colors">{BRAND.hotlineSupport}</a>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-viettel-red group-hover:bg-viettel-red group-hover:text-white transition-all duration-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Địa chỉ</p>
                  <p className="text-sm font-medium text-slate-900/80 leading-relaxed">{BRAND.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm text-slate-500 font-medium">© {new Date().getFullYear()} Viettel Đắk Lắk. All rights reserved.</p>
            <div className="flex space-x-8">
              <Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Điều khoản</Link>
              <Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Bảo mật</Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Đại diện kinh doanh</p>
            <p className="text-sm text-slate-900 font-black uppercase tracking-tight">
              {BRAND.representative} - <span className="text-viettel-red">{BRAND.position}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-viettel-red/5 blur-[120px] rounded-full -mr-48 -mb-48" />
    </footer>
  );
}
