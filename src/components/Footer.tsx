import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Send, Youtube, MessageCircle } from 'lucide-react';
import { BRAND, SERVICES } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-viettel-red p-1.5 rounded-lg">
                <span className="text-white font-bold text-xl tracking-tighter">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">VIETTEL</span>
                <span className="text-[10px] font-medium tracking-widest text-slate-400">ĐẮK LẮK</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Đây là trang web giới thiệu sản phẩm và hỗ trợ khách hàng của Viettel Đắk Lắk. Trang web chính thức: <a href="https://viettel.vn" className="text-viettel-red hover:underline" target="_blank" rel="noopener noreferrer">viettel.vn</a>
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-slate-900 p-2.5 rounded-full hover:bg-viettel-red hover:text-white transition-all border border-slate-800">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-900 p-2.5 rounded-full hover:bg-viettel-red hover:text-white transition-all border border-slate-800">
                <Youtube size={18} />
              </a>
              <a href="#" className="bg-slate-900 p-2.5 rounded-full hover:bg-viettel-red hover:text-white transition-all border border-slate-800">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="bg-slate-900 p-2.5 rounded-full hover:bg-viettel-red hover:text-white transition-all border border-slate-800">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Dịch vụ</h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="hover:text-viettel-red transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Liên kết</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/business" className="hover:text-viettel-red transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>Giải pháp doanh nghiệp</Link></li>
              <li><Link to="/blog" className="hover:text-viettel-red transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>Tin tức & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-viettel-red transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>Liên hệ hỗ trợ</Link></li>
              <li><Link to="/privacy" className="hover:text-viettel-red transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-2"></span>Chính sách bảo mật</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Liên hệ</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-viettel-red shrink-0 mt-0.5" />
                <span className="hover:text-white cursor-pointer">{BRAND.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-viettel-red shrink-0 mt-0.5" />
                <span className="hover:text-white cursor-pointer">{BRAND.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-viettel-red shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Viettel Đắk Lắk. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Điều khoản sử dụng</Link>
            <Link to="/privacy" className="hover:text-white">Chính sách bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
