import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Clock, CheckCircle2, FileText, Briefcase, Activity, Lock, Cpu, ArrowRight, Phone, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_CA, BRAND } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function DigitalSignature() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Schema JSON-LD for AI Search & SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Chữ ký số Viettel Đắk Lắk - Phạm Văn Khoa",
      "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
      "@id": "https://viettel.daklak.vn/digital-signature",
      "url": "https://viettel.daklak.vn/digital-signature",
      "telephone": "0989113602",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Số 48 Lý Tự Trọng, Phường Tân An",
        "addressLocality": "Buôn Ma Thuột",
        "addressRegion": "Đắk Lắk",
        "postalCode": "63000",
        "addressCountry": "VN"
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Bảng giá chữ ký số Viettel tại Đắk Lắk là bao nhiêu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Giá chữ ký số Viettel tại Đắk Lắk chỉ từ 1.826.000đ cho gói 3 năm (đăng ký mới). Đối với khách hàng gia hạn, mức phí ưu đãi hơn chỉ từ 1.276.000đ cho 3 năm sử dụng."
          }
        },
        {
          "@type": "Question",
          "name": "Đăng ký chữ ký số Viettel tại Buôn Ma Thuột mất bao lâu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Viettel Đắk Lắk cam kết bàn giao thiết bị USB Token và kích hoạt chứng thư số ngay trong ngày. Chuyên viên Phạm Văn Khoa sẽ hỗ trợ cài đặt tận nơi trong vòng 2 giờ."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify([schemaData, faqSchema]);
    document.head.appendChild(script);

    const ctx = gsap.context(() => {
      // Pricing cards animation
      gsap.fromTo(".pricing-card", 
        { y: 60, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
      );

      // Features animation
      gsap.fromTo(".feature-item", 
        { y: 0, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
      );
    });

    return () => {
      ctx.revert();
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SEO 
        title="Chữ ký số Viettel-CA Đắk Lắk - Đăng ký & Gia hạn 2026"
        description="Dịch vụ Chữ ký số Viettel-CA tại Đắk Lắk uy tín, bảo mật. Hỗ trợ kê khai thuế, hải quan, BHXH. Bàn giao USB Token tận nơi trong 2h bởi chuyên viên Phạm Văn Khoa."
        keywords="chữ ký số viettel đắk lắk, viettel-ca đắk lắk, gia hạn chữ ký số viettel đắk lắk, usb token viettel"
      />
      {/* Header */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070" 
            alt="Dịch vụ Chữ ký số Viettel tại Đắk Lắk uy tín" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/90 to-slate-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
              <Lock className="text-viettel-red" size={16} />
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Chứng thực số quốc gia tại Đắk Lắk</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
              CHỮ KÝ SỐ <br /><span className="text-viettel-red">VIETTEL-CA ĐẮK LẮK</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Giải pháp chữ ký số Viettel-CA tại Đắk Lắk cho doanh nghiệp, cá nhân. Kê khai thuế, hải quan, BHXH an toàn tuyệt đối. Hỗ trợ cài đặt tận nơi bởi chuyên viên <Link to="/contact" className="text-viettel-red hover:underline">Phạm Văn Khoa</Link>.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn-primary px-10 py-4 text-lg">
                Đăng ký ngay
              </Link>
              <a href="#pricing" className="px-10 py-4 bg-white border border-slate-200 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all">
                Báo giá 2026
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Search Optimized FAQ Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
              Hỏi đáp <span className="text-viettel-red">Chữ ký số Viettel Đắk Lắk</span>
            </h2>
            <p className="text-slate-600 font-medium">Thông tin quan trọng về dịch vụ chứng thực chữ ký số tại khu vực Đắk Lắk được AI Search trích dẫn.</p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <HelpCircle className="text-viettel-red shrink-0" size={24} />
                Bảng giá chữ ký số Viettel tại Đắk Lắk là bao nhiêu?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-viettel-red mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  Giá chữ ký số Viettel tại Đắk Lắk chỉ từ <span className="text-viettel-red">1.826.000đ</span> cho gói 3 năm (đăng ký mới). Đối với khách hàng gia hạn, mức phí ưu đãi hơn chỉ từ 1.276.000đ cho 3 năm sử dụng.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Mức giá trên đã bao gồm thiết bị USB Token và thuế VAT. Viettel Đắk Lắk thường xuyên có chương trình khuyến mãi tặng thêm 6-12 tháng sử dụng cho doanh nghiệp thành lập mới tại Buôn Ma Thuột và các huyện lân cận.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <HelpCircle className="text-viettel-red shrink-0" size={24} />
                Đăng ký chữ ký số Viettel tại Buôn Ma Thuột mất bao lâu?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-viettel-red mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  Viettel Đắk Lắk cam kết bàn giao thiết bị USB Token và kích hoạt chứng thư số <span className="text-viettel-red">ngay trong ngày</span>. Chuyên viên Phạm Văn Khoa sẽ hỗ trợ cài đặt tận nơi trong vòng 2 giờ.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Quy trình đăng ký cực kỳ nhanh gọn. Bạn chỉ cần gửi ảnh chụp CCCD và Giấy phép kinh doanh qua Zalo 0989113602, chúng tôi sẽ soạn hồ sơ và cử nhân viên đến tận địa chỉ của bạn tại Đắk Lắk để ký hợp đồng và bàn giao thiết bị.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: 'Bảo mật tuyệt đối', 
                desc: 'Sử dụng công nghệ mã hóa RSA 2048-bit tiên tiến nhất, đảm bảo tính toàn vẹn của dữ liệu.',
                color: 'text-blue-400',
                bg: 'bg-blue-400/10'
              },
              { 
                icon: Zap, 
                title: 'Tiết kiệm thời gian', 
                desc: 'Ký kết văn bản, kê khai thuế, bảo hiểm xã hội mọi lúc mọi nơi mà không cần gặp mặt trực tiếp.',
                color: 'text-orange-400',
                bg: 'bg-orange-400/10'
              },
              { 
                icon: Clock, 
                title: 'Hỗ trợ 24/7', 
                desc: 'Đội ngũ chuyên gia Viettel Đắk Lắk luôn sẵn sàng hỗ trợ kỹ thuật bất cứ khi nào bạn cần.',
                color: 'text-emerald-400',
                bg: 'bg-emerald-400/10'
              }
            ].map((item, i) => (
              <div key={i} className="feature-item glass-card p-10 border-slate-100 group hover:border-slate-300 transition-all duration-500">
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">ỨNG DỤNG ĐA NỀN TẢNG</h2>
            <p className="text-slate-600 font-medium">Chữ ký số Viettel-CA tương thích với mọi hệ thống hành chính công</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Kê khai Thuế', icon: FileText, desc: 'Tổng cục Thuế' },
              { title: 'Hải quan điện tử', icon: Briefcase, desc: 'Tổng cục Hải quan' },
              { title: 'Bảo hiểm xã hội', icon: ShieldCheck, desc: 'BHXH Việt Nam' },
              { title: 'Giao dịch Ngân hàng', icon: Zap, desc: 'Internet Banking' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 border-slate-100 flex flex-col items-center text-center group hover:bg-slate-100 transition-all duration-500">
                <div className="w-14 h-14 bg-viettel-red/10 text-viettel-red rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <item.icon size={28} />
                </div>
                <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" ref={pricingRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">BẢNG GIÁ DỊCH VỤ</h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_CA.map((plan, i) => (
              <div key={i} className="pricing-card glass-card p-10 border-slate-100 hover:border-viettel-red/50 transition-all relative overflow-hidden group flex flex-col">
                {i === 2 && (
                  <div className="absolute top-0 right-0 bg-viettel-red text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em] z-20">
                    Phổ biến nhất
                  </div>
                )}
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Gói {plan.duration}</h3>
                  
                  <div className="mb-8 p-6 bg-white rounded-2xl border border-slate-100">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Đăng ký mới</div>
                    <div className="text-4xl font-black text-viettel-red tracking-tighter">{plan.price}</div>
                  </div>

                  <div className="mb-8 space-y-2">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gia hạn dịch vụ</div>
                    <div className="text-xl font-bold text-slate-900/80">{plan.renewalPrice}</div>
                  </div>

                  <div className="mb-10 py-3 px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <p className="text-emerald-400 font-black text-xs uppercase tracking-wider text-center">{plan.promo}</p>
                  </div>

                  <ul className="space-y-5 mb-12">
                    {[
                      'Hỗ trợ cài đặt tận nơi',
                      'Bảo hành Token trọn đời',
                      'Hỗ trợ kỹ thuật 24/7',
                      'Tương thích mọi HĐH'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm font-medium text-slate-600">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto relative z-10">
                  <Link to="/contact" className="w-full btn-primary py-5 text-lg group overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      Đăng ký ngay
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-viettel-red/5 blur-[100px] rounded-full group-hover:bg-viettel-red/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-viettel-red/10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-viettel-red/20 blur-[120px] rounded-full -mr-48 -mb-48" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">SẴN SÀNG <br /><span className="text-viettel-red">CHUYỂN ĐỔI SỐ?</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Liên hệ ngay với chuyên viên Viettel Đắk Lắk để được tư vấn giải pháp chữ ký số tối ưu nhất cho doanh nghiệp của bạn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="btn-primary px-12 py-5 text-lg">
                Đăng ký ngay
              </Link>
              <a href={`tel:${BRAND.phone}`} className="px-12 py-5 rounded-2xl font-black text-lg border border-slate-200 hover:bg-white transition-all flex items-center justify-center backdrop-blur-md">
                <Phone className="mr-3 text-viettel-red" size={20} />
                {BRAND.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
