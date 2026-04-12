import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Activity } from 'lucide-react';
import { BRAND } from '../constants';
import { useForm, ValidationError } from '@formspree/react';
import SEO from '../components/SEO';

export default function Contact() {
  const [state, handleSubmit] = useForm("mvzwqwnv");

  React.useEffect(() => {
    // Schema JSON-LD for AI Search & SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Viettel Đắk Lắk - Chuyên viên Phạm Văn Khoa",
        "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        "@id": "https://viettel.daklak.vn/contact",
        "url": "https://viettel.daklak.vn/contact",
        "telephone": "0989113602",
        "email": "khoapv47@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Số 48 Lý Tự Trọng, Phường Tân An",
          "addressLocality": "Buôn Ma Thuột",
          "addressRegion": "Đắk Lắk",
          "postalCode": "63000",
          "addressCountry": "VN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.6841,
          "longitude": 108.0543
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (state.succeeded) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 glass-card max-w-lg mx-auto"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-8">
            <Send size={40} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Cảm ơn bạn!</h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Yêu cầu của bạn đã được gửi thành công vào hệ thống. Đội ngũ chuyên viên Viettel Đắk Lắk sẽ liên hệ lại với bạn trong thời gian sớm nhất.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-10 btn-primary px-8 py-4"
          >
            Quay lại trang chủ
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SEO 
        title="Liên hệ Viettel Đắk Lắk - Hỗ trợ khách hàng 24/7"
        description="Liên hệ chuyên viên Viettel Đắk Lắk - Phạm Văn Khoa. Hỗ trợ lắp mạng Internet, Chữ ký số, Hóa đơn điện tử. Tư vấn tận nơi tại Buôn Ma Thuột và các huyện."
        keywords="liên hệ viettel đắk lắk, tổng đài viettel đắk lắk, số điện thoại viettel buôn ma thuột, phạm văn khoa viettel"
      />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.1)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
              <Activity className="text-viettel-red animate-pulse" size={16} />
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Hỗ trợ khách hàng 24/7</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
              KẾT NỐI VỚI <br /><span className="text-viettel-red">CHÚNG TÔI</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn. Hãy để lại thông tin để nhận tư vấn chuyên sâu.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight">Thông tin liên hệ</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Phone, title: 'Hotline', value: BRAND.phone, color: 'text-viettel-red', bg: 'bg-viettel-red/10', href: `tel:${BRAND.phone}` },
                    { icon: Mail, title: 'Email', value: BRAND.email, color: 'text-blue-400', bg: 'bg-blue-400/10', href: `mailto:${BRAND.email}` },
                    { icon: MapPin, title: 'Địa chỉ', value: BRAND.address, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                    { icon: Clock, title: 'Giờ làm việc', value: BRAND.workingHours, color: 'text-purple-400', bg: 'bg-purple-400/10' }
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-6 border-slate-100 group hover:border-slate-300 transition-all duration-500">
                      <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon size={24} />
                      </div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-slate-900 font-bold text-sm leading-relaxed hover:text-viettel-red transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-slate-900 font-bold text-sm leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-viettel-red to-red-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative h-80 bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.680000000000!2d108.05679715027108!3d12.695234618245056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQxJzQyLjgiTiAxMDjCsDAzJzI0LjUiRQ!5e0!3m2!1svi!2s!4v1710630000000!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Viettel Đắk Lắk Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 md:p-12 border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-viettel-red/5 blur-[100px] rounded-full -mr-32 -mt-32" />
              
              <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight relative z-10">Gửi yêu cầu tư vấn</h2>
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Họ và tên khách hàng</label>
                    <input id="name" name="name" type="text" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-slate-900 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all font-bold placeholder:text-slate-600" placeholder="Nguyễn Văn A" required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Số điện thoại liên hệ</label>
                    <input id="phone" name="phone" type="tel" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-slate-900 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all font-bold placeholder:text-slate-600" placeholder="0989xxxxxx" required />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Địa chỉ Email</label>
                  <input id="email" name="email" type="email" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-slate-900 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all font-bold placeholder:text-slate-600" placeholder="email@example.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="space-y-3">
                  <label htmlFor="service" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Dịch vụ bạn quan tâm</label>
                  <select id="service" name="service" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-slate-900 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all font-bold appearance-none cursor-pointer">
                    <option className="bg-slate-50">Internet Viettel</option>
                    <option className="bg-slate-50">Chữ ký số (CA)</option>
                    <option className="bg-slate-50">Hóa đơn điện tử</option>
                    <option className="bg-slate-50">Giải pháp doanh nghiệp</option>
                    <option className="bg-slate-50">Khác</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Nội dung cần hỗ trợ</label>
                  <textarea id="message" name="message" rows={4} className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl text-slate-900 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all font-bold placeholder:text-slate-600 resize-none" placeholder="Hãy cho chúng tôi biết nhu cầu của bạn..." required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting} 
                  className="w-full btn-primary py-5 text-lg group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {state.submitting ? 'Đang xử lý...' : 'Gửi yêu cầu ngay'}
                    <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
