import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, ArrowRight, MapPin, Activity, ShieldCheck, Zap, Clock } from 'lucide-react';
import { BRAND } from '../constants';
import { LOCATIONS, slugify } from '../data/locations';
import { generateArticleContent } from '../data/articleGenerator';

export default function LocationArticle() {
  const { slug } = useParams<{ slug: string }>();
  
  const locationName = LOCATIONS.find(loc => slugify(loc) === slug);

  useEffect(() => {
    if (locationName) {
      document.title = `Lắp Internet Viettel tại ${locationName} Đắk Lắk – Lắp Nhanh Trong 24h`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Lắp mạng Viettel tại ${locationName} Đắk Lắk giá rẻ, kỹ thuật lắp nhanh trong 24h. Hỗ trợ internet, phần mềm bán hàng, chữ ký số và thành lập doanh nghiệp.`);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = `Lắp mạng Viettel tại ${locationName} Đắk Lắk giá rẻ, kỹ thuật lắp nhanh trong 24h. Hỗ trợ internet, phần mềm bán hàng, chữ ký số và thành lập doanh nghiệp.`;
        document.head.appendChild(meta);
      }
    }
  }, [locationName]);

  if (!locationName) {
    return <Navigate to="/blog" replace />;
  }

  const content = generateArticleContent(locationName);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
            alt={`Lắp mạng Viettel tại ${locationName} Đắk Lắk`}
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/80 to-slate-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
              <MapPin className="text-viettel-red" size={16} />
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Chi nhánh {locationName}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter uppercase">
              Lắp Internet Viettel tại <span className="text-viettel-red">{locationName}</span> Đắk Lắk
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 border-slate-100 prose prose-invert prose-lg max-w-none">
            
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 mt-0">Giới thiệu dịch vụ Internet Viettel tại khu vực</h2>
            <p className="text-slate-700 leading-relaxed font-medium mb-8">{content.intro}</p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 mt-12">Các gói cước Internet Viettel phổ biến</h2>
            <p className="text-slate-700 leading-relaxed font-medium mb-8">{content.packages}</p>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-black text-viettel-red uppercase tracking-tight mb-4">Dịch vụ cung cấp tại {locationName}:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                {[
                  'Lắp đặt Internet Viettel',
                  'Truyền hình Viettel TV360',
                  'Phần mềm bán hàng cho hộ kinh doanh',
                  'Dịch vụ thành lập doanh nghiệp',
                  'Chữ ký số Viettel',
                  'Hóa đơn điện tử',
                  'Hợp đồng điện tử'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-slate-700 m-0">
                    <CheckCircle2 size={16} className="text-emerald-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 mt-12">Vì sao nên lắp Internet Viettel tại {locationName}</h2>
            <p className="text-slate-700 leading-relaxed font-medium mb-8">{content.whyChoose}</p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 mt-12">Các dịch vụ Viettel hỗ trợ cho hộ kinh doanh</h2>
            <p className="text-slate-700 leading-relaxed font-medium mb-8">{content.businessSupport}</p>

            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">Phần mềm bán hàng cho hộ kinh doanh</h3>
            <p className="text-slate-700 leading-relaxed font-medium mb-8">{content.posSoftware}</p>

            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">Chữ ký số và hóa đơn điện tử</h3>
            <p className="text-slate-700 leading-relaxed font-medium mb-8">{content.caInvoice}</p>

            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">Dịch vụ thành lập doanh nghiệp trọn gói</h3>
            <p className="text-slate-700 leading-relaxed font-medium mb-8">{content.bizReg}</p>

            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">Hợp đồng điện tử</h3>
            <p className="text-slate-700 leading-relaxed font-medium mb-8">{content.eContract}</p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 mt-12">Quy trình đăng ký lắp mạng Viettel</h2>
            <p className="text-slate-700 leading-relaxed font-medium mb-8">{content.process}</p>

            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 mt-12">Thông tin liên hệ</h2>
            
            <div className="bg-gradient-to-br from-viettel-red/20 to-slate-50 border border-viettel-red/30 rounded-3xl p-8 mt-8 text-center">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Liên hệ lắp đặt Internet Viettel tại Đắk Lắk</h3>
              <p className="text-slate-700 mb-6 font-medium">Hỗ trợ lắp đặt nhanh trong 24h tại tất cả xã phường trong tỉnh.</p>
              
              <a href={`tel:${BRAND.phone}`} className="inline-flex items-center justify-center bg-viettel-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg transition-all shadow-2xl shadow-viettel-red/20 hover:-translate-y-1">
                <Phone size={24} className="mr-3" />
                Hotline: {BRAND.phone}
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
