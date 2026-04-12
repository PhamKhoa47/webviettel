import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants';
import { LayoutDashboard, Database, Users, BarChart3, CheckCircle2, Smartphone, ShieldCheck, ShoppingCart, Bot, CreditCard, Globe, ArrowRight, Zap, Activity, Cpu, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function POSSoftware() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Schema JSON-LD for AI Search & SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Phần mềm bán hàng Viettel Đắk Lắk - Tendoo",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
      "@id": "https://viettel.daklak.vn/pos-software",
      "url": "https://viettel.daklak.vn/pos-software",
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
          "name": "Phần mềm bán hàng Viettel Tendoo tại Đắk Lắk giá bao nhiêu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Giá phần mềm bán hàng Viettel Tendoo tại Đắk Lắk chỉ từ 3.000đ/ngày. Gói cước linh hoạt theo tháng hoặc năm, phù hợp cho cả tạp hóa nhỏ và chuỗi cửa hàng lớn tại Buôn Ma Thuột."
          }
        },
        {
          "@type": "Question",
          "name": "Tendoo Viettel có hỗ trợ kết nối máy in hóa đơn và máy quét mã vạch không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Có, phần mềm Tendoo hỗ trợ kết nối đa thiết bị: máy in bill, máy quét mã vạch, ngăn kéo đựng tiền. Chuyên viên Phạm Văn Khoa sẽ hỗ trợ lắp đặt và hướng dẫn sử dụng tận nơi tại Đắk Lắk."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify([schemaData, faqSchema]);
    document.head.appendChild(script);

    const ctx = gsap.context(() => {
      // Features animation
      gsap.fromTo(".feature-card", 
        { y: 50, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }
      );

      // Pricing cards animation
      gsap.fromTo(".pricing-card", 
        { y: 0, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
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
        title="Phần mềm bán hàng Viettel Tendoo Đắk Lắk - Quản lý 2026"
        description="Giải pháp quản lý bán hàng Tendoo Viettel tại Đắk Lắk. Quản lý kho, doanh thu, khách hàng dễ dàng trên điện thoại. Hỗ trợ lắp đặt tận nơi bởi Phạm Văn Khoa."
        keywords="phần mềm bán hàng viettel đắk lắk, tendoo viettel đắk lắk, quản lý bán hàng viettel, máy in hóa đơn đắk lắk"
      />
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070" 
            alt="Phần mềm bán hàng Viettel Tendoo Đắk Lắk" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/90 to-slate-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8 backdrop-blur-md">
                <Cpu className="text-emerald-500" size={16} />
                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">Hơn 100.000+ chủ kinh doanh tin dùng tại Đắk Lắk</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase">
                PHẦN MỀM <br /><span className="text-emerald-500">TENDOO VIETTEL</span> <br />ĐẮK LẮK
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Giải pháp quản lý bán hàng toàn diện Tendoo Viettel tại Đắk Lắk. Quản lý kho, doanh thu, khách hàng dễ dàng trên điện thoại và máy tính. Hỗ trợ bởi chuyên viên <Link to="/contact" className="text-emerald-500 hover:underline">Phạm Văn Khoa</Link>.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-2xl shadow-emerald-600/20 flex items-center group">
                  Dùng thử Tendoo
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#pricing" className="px-10 py-5 bg-white border border-slate-200 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all">
                  Báo giá 2026
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="hidden lg:block relative group"
            >
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <img 
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1000" 
                alt="Phần mềm bán hàng Viettel Tendoo Đắk Lắk" 
                className="relative rounded-[2.5rem] shadow-2xl border border-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-10 -left-10 glass-card p-6 border-emerald-500/30 animate-float">
                <Activity className="text-emerald-500 mb-2" />
                <div className="text-2xl font-black text-slate-900">+25%</div>
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Doanh thu</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Search Optimized FAQ Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
              Hỏi đáp <span className="text-emerald-500">Phần mềm bán hàng Đắk Lắk</span>
            </h2>
            <p className="text-slate-600 font-medium">Thông tin hữu ích về phần mềm quản lý bán hàng Tendoo của Viettel tại khu vực Đắk Lắk.</p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <ShoppingCart className="text-emerald-500 shrink-0" size={24} />
                Phần mềm bán hàng Viettel Tendoo tại Đắk Lắk giá bao nhiêu?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500 mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  Giá phần mềm bán hàng Viettel Tendoo tại Đắk Lắk chỉ từ <span className="text-emerald-500">3.000đ/ngày</span>. Gói cước linh hoạt theo tháng hoặc năm, phù hợp cho cả tạp hóa nhỏ và chuỗi cửa hàng lớn tại Buôn Ma Thuột.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Tendoo cung cấp đầy đủ tính năng: quản lý kho, in hóa đơn, báo cáo doanh thu thời gian thực, quản lý nhân viên và chương trình khuyến mãi. Doanh nghiệp tại Đắk Lắk có thể trải nghiệm miễn phí 7 ngày trước khi quyết định đăng ký.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <ShoppingCart className="text-emerald-500 shrink-0" size={24} />
                Tendoo Viettel có hỗ trợ kết nối máy in hóa đơn và máy quét mã vạch không?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500 mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  Có, phần mềm Tendoo hỗ trợ kết nối đa thiết bị: <span className="text-emerald-500">máy in bill, máy quét mã vạch, ngăn kéo đựng tiền</span>. Chuyên viên Phạm Văn Khoa sẽ hỗ trợ lắp đặt và hướng dẫn sử dụng tận nơi tại Đắk Lắk.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Phần mềm hoạt động ổn định trên cả máy tính (Windows/Mac) và thiết bị di động (Android/iOS). Dữ liệu được đồng bộ liên tục lên Cloud của Viettel, giúp chủ cửa hàng tại Đắk Lắk có thể theo dõi kinh doanh mọi lúc mọi nơi mà không lo mất dữ liệu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Features */}
      <section ref={featuresRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">HỆ SINH THÁI TOÀN DIỆN</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Bán hàng đa kênh', icon: <ShoppingCart />, desc: 'Đồng bộ đơn hàng, kho bãi và liên kết vận chuyển thông minh trên một nền tảng duy nhất.' },
              { title: 'Trợ lý ảo AI', icon: <Bot />, desc: 'AI phân tích dữ liệu kinh doanh, dự báo xu hướng và đưa ra gợi ý tối ưu doanh thu tự động.' },
              { title: 'Hóa đơn điện tử', icon: <ShieldCheck />, desc: 'Tích hợp sẵn S-Invoice, xuất hóa đơn ngay khi bán hàng, tuân thủ 100% quy định thuế.' },
              { title: 'Thanh toán QR động', icon: <CreditCard />, desc: 'Tạo mã QR thanh toán theo từng đơn hàng, thông báo tiền về tức thì, tránh thất thoát.' },
              { title: 'Đồng bộ Sàn TMĐT', icon: <Globe />, desc: 'Kết nối trực tiếp với Shopee, Lazada, TikTok Shop để quản lý tồn kho tập trung.' },
              { title: 'Cloud Security', icon: <Database />, desc: 'Dữ liệu được bảo mật tuyệt đối trên hạ tầng Cloud của Viettel, truy cập mọi lúc mọi nơi.' }
            ].map((item, i) => (
              <div key={i} className="feature-card glass-card p-10 border-slate-100 hover:border-emerald-500/50 transition-all group">
                <div className="w-16 h-16 bg-white text-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" ref={pricingRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">BẢNG GIÁ & ƯU ĐÃI</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Đăng ký gói dài hạn nhận ưu đãi tặng thêm 25% số tháng sử dụng. Vui lòng liên hệ hotline để được tư vấn chính sách mới nhất.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { 
                name: 'Gói 7 ngày', 
                price: 'Trải nghiệm', 
                period: 'Dùng thử',
                features: ['Full tính năng quản lý', 'AI tư vấn thông minh', 'Báo cáo kinh doanh', 'Hỗ trợ 24/7'],
                popular: false
              },
              { 
                name: 'Gói 1 năm', 
                price: 'Liên hệ', 
                period: '12 tháng',
                features: ['Quản lý bán hàng toàn trình', 'Tích hợp trợ lý ảo A.I', 'Xuất hóa đơn điện tử', 'Ưu đãi tặng 25% tháng'],
                popular: false
              },
              { 
                name: 'Gói 2 năm', 
                price: 'Liên hệ', 
                period: '24 tháng',
                features: ['Quản lý bán hàng toàn trình', 'Tích hợp trợ lý ảo A.I', 'Xuất hóa đơn điện tử', 'Ưu đãi tặng 25% tháng'],
                popular: true
              },
              { 
                name: 'Gói 3 năm', 
                price: 'Liên hệ', 
                period: '36 tháng',
                features: ['Quản lý bán hàng toàn trình', 'Tích hợp trợ lý ảo A.I', 'Xuất hóa đơn điện tử', 'Ưu đãi tặng 25% tháng'],
                popular: false
              }
            ].map((plan, i) => (
              <div key={i} className={`pricing-card glass-card p-8 border-slate-100 transition-all relative overflow-hidden group ${plan.popular ? 'border-emerald-500/50 bg-emerald-500/5' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-slate-900 text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em] z-20">
                    Phổ biến nhất
                  </div>
                )}
                
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-black text-emerald-500 tracking-tighter">{plan.price}</span>
                  <span className="text-sm text-slate-500 ml-2 uppercase font-black tracking-widest">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8 text-sm">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-3 text-slate-600 font-medium">
                      <CheckCircle2 size={16} className="shrink-0 text-emerald-500 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all text-center block ${plan.popular ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-xl shadow-emerald-600/20' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-100'}`}>
                  Liên hệ tư vấn
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full -mr-48 -mb-48" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">NÂNG TẦM <br /><span className="text-emerald-500">QUẢN LÝ BÁN HÀNG?</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Liên hệ ngay với chuyên viên Viettel Đắk Lắk để được tư vấn giải pháp phần mềm quản lý bán hàng vPOS tối ưu nhất cho cửa hàng của bạn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-lg transition-all shadow-2xl shadow-emerald-600/20">
                Đăng ký ngay
              </Link>
              <a href={`tel:${BRAND.phone}`} className="px-12 py-5 rounded-2xl font-black text-lg border border-slate-200 hover:bg-white transition-all flex items-center justify-center backdrop-blur-md">
                <Phone className="mr-3 text-emerald-500" size={20} />
                {BRAND.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
