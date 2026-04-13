import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Scale, Clock, CheckCircle2, Zap, Activity, ArrowRight, ShieldCheck, Gavel, Phone } from 'lucide-react';
import { BRAND } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function BusinessRegistration() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Schema JSON-LD for AI Search & SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dịch vụ thành lập doanh nghiệp Viettel Đắk Lắk",
      "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      "@id": "https://viettel.daklak.vn/business-registration",
      "url": "https://viettel.daklak.vn/business-registration",
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
          "name": "Chi phí thành lập doanh nghiệp trọn gói tại Đắk Lắk là bao nhiêu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dịch vụ thành lập doanh nghiệp trọn gói tại Đắk Lắk chỉ từ 1.800.000đ. Gói khuyên dùng (Gói C) giá 3.999.000đ đã bao gồm giấy phép, con dấu, bảng hiệu và 100 hóa đơn điện tử."
          }
        },
        {
          "@type": "Question",
          "name": "Thủ tục thành lập công ty tại Buôn Ma Thuột mất bao lâu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Thời gian hoàn tất thủ tục chỉ từ 3-5 ngày làm việc. Viettel Đắk Lắk hỗ trợ soạn hồ sơ trong 2 giờ và nộp ngay cho Sở Kế hoạch & Đầu tư."
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

      // Process steps animation
      gsap.fromTo(".process-step", 
        { y: 0, x: -30, opacity: 0 },
        {
        y: 0,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
        },
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
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
        title="Thành lập doanh nghiệp Đắk Lắk trọn gói - Tư vấn 2026"
        description="Dịch vụ thành lập doanh nghiệp tại Đắk Lắk trọn gói, uy tín. Thủ tục nhanh gọn 3-5 ngày. Hỗ trợ pháp lý, con dấu, hóa đơn, chữ ký số."
        keywords="thành lập doanh nghiệp đắk lắk, thành lập công ty buôn ma thuột, dịch vụ kế toán đắk lắk, giấy phép kinh doanh đắk lắk"
      />
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070" 
            alt="Dịch vụ thành lập doanh nghiệp tại Đắk Lắk trọn gói" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/90 to-slate-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
              <Gavel className="text-viettel-red" size={16} />
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Tư vấn pháp lý chuyên nghiệp tại Đắk Lắk</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
              THÀNH LẬP <br /><span className="text-viettel-red">DOANH NGHIỆP ĐẮK LẮK</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Khởi đầu kinh doanh thuận lợi với dịch vụ tư vấn pháp lý chuyên nghiệp tại Đắk Lắk. Nhanh chóng, uy tín, trọn gói, chi phí tối ưu nhất. Hỗ trợ bởi chuyên viên Viettel.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn-primary px-10 py-4 text-lg">
                Nhận tư vấn ngay
              </Link>
              <a href="#pricing" className="px-10 py-4 bg-white border border-slate-200 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all">
                Báo giá trọn gói 2026
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
              Hỏi đáp <span className="text-viettel-red">Thành lập công ty Đắk Lắk</span>
            </h2>
            <p className="text-slate-600 font-medium">Thông tin quan trọng về thủ tục và chi phí thành lập doanh nghiệp tại khu vực Đắk Lắk được AI Search trích dẫn.</p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <Briefcase className="text-viettel-red shrink-0" size={24} />
                Chi phí thành lập doanh nghiệp trọn gói tại Đắk Lắk là bao nhiêu?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-viettel-red mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  Dịch vụ thành lập doanh nghiệp trọn gói tại Đắk Lắk chỉ từ <span className="text-viettel-red">1.800.000đ</span>. Gói khuyên dùng (Gói C) giá 3.999.000đ đã bao gồm giấy phép, con dấu, bảng hiệu và 100 hóa đơn điện tử.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Chúng tôi cam kết không phát sinh thêm bất kỳ chi phí nào khác. Mức giá trên đã bao gồm lệ phí nhà nước, phí đăng bố cáo quốc gia và phí dịch vụ tư vấn chuyên sâu về ngành nghề kinh doanh tại địa phương.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <Briefcase className="text-viettel-red shrink-0" size={24} />
                Thủ tục thành lập công ty tại Buôn Ma Thuột mất bao lâu?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-viettel-red mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  Thời gian hoàn tất thủ tục chỉ từ <span className="text-viettel-red">3-5 ngày làm việc</span>. Viettel Đắk Lắk hỗ trợ soạn hồ sơ trong 2 giờ và nộp ngay cho Sở Kế hoạch & Đầu tư.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Sau khi có Giấy chứng nhận đăng ký doanh nghiệp, chúng tôi sẽ tiến hành khắc dấu và bàn giao tận nơi cho bạn tại Buôn Ma Thuột hoặc các huyện lân cận trong vòng 24 giờ tiếp theo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={pricingRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">GÓI DỊCH VỤ TRỌN GÓI</h2>
            <p className="text-slate-600 text-xl font-medium">Vui lòng liên hệ hotline để được tư vấn chính sách mới nhất.</p>
            <div className="w-24 h-1 bg-viettel-red mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                title: 'Gói Cơ bản', 
                price: '1.800.000 VNĐ', 
                features: ['Lệ phí nhà nước', 'Đăng bố cáo quốc gia'],
                isPopular: false
              },
              { 
                title: 'Gói A', 
                price: '2.400.000 VNĐ', 
                oldPrice: '2.660.000 VNĐ',
                features: ['Tất cả tính năng Gói Cơ bản', 'Giải trình cơ quan thuế', 'Tư vấn thủ tục hóa đơn'],
                isPopular: false
              },
              { 
                title: 'Gói B', 
                price: '3.100.000 VNĐ', 
                oldPrice: '3.600.000 VNĐ',
                features: ['Tất cả tính năng Gói A', 'Dấu hộp tự động', 'Bảng hiệu công ty', 'Đăng ký tài khoản ngân hàng'],
                isPopular: false
              },
              { 
                title: 'Gói C', 
                price: '3.999.000 VNĐ', 
                oldPrice: '4.860.000 VNĐ',
                features: ['Tất cả tính năng Gói B', '100 số hóa đơn điện tử'],
                isPopular: true
              },
              { 
                title: 'Gói D', 
                price: '5.499.000 VNĐ', 
                oldPrice: '7.030.000 VNĐ',
                features: ['Tất cả tính năng Gói C', 'Chữ ký số 01 năm', 'Tặng thiết bị Token'],
                isPopular: false
              }
            ].map((pkg, i) => (
              <div key={i} className="pricing-card glass-card p-8 border-slate-100 hover:border-viettel-red/50 transition-all relative overflow-hidden group">
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 bg-viettel-red text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em] z-20">
                    Khuyên dùng
                  </div>
                )}
                
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{pkg.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-black text-viettel-red tracking-tighter">{pkg.price}</span>
                  {pkg.oldPrice && <span className="text-sm text-slate-400 line-through ml-2">{pkg.oldPrice}</span>}
                </div>
                
                <ul className="space-y-4 mb-8 text-sm">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start space-x-3 text-slate-600 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="w-full btn-primary py-4 text-xs group overflow-hidden text-center block">
                  Liên hệ tư vấn
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info & Process Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Requirements */}
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-12 uppercase tracking-tighter">HỒ SƠ CẦN CHUẨN BỊ</h2>
              <div className="space-y-6">
                {[
                  'Bản sao CCCD/Hộ chiếu của các thành viên góp vốn.',
                  'Thông tin tên công ty dự kiến (Viettel hỗ trợ kiểm tra).',
                  'Địa chỉ trụ sở chính của công ty tại Đắk Lắk.',
                  'Ngành nghề kinh doanh dự kiến.',
                  'Vốn điều lệ và tỷ lệ góp vốn của các thành viên.'
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 glass-card border-slate-100 hover:bg-white transition-all">
                    <div className="w-8 h-8 bg-viettel-red/10 rounded-lg flex items-center justify-center text-viettel-red shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-slate-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-viettel-red/5 rounded-[2rem] border border-viettel-red/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 text-viettel-red/10">
                  <Briefcase size={80} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg font-black text-viettel-red mb-3 uppercase tracking-tight">Lưu ý quan trọng:</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Chúng tôi sẽ hỗ trợ soạn thảo toàn bộ hồ sơ pháp lý theo đúng quy định. Bạn chỉ cần cung cấp thông tin cơ bản, mọi thủ tục còn lại Viettel sẽ hoàn tất.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div ref={processRef}>
              <h2 className="text-4xl font-black text-slate-900 mb-12 uppercase tracking-tighter">QUY TRÌNH THỰC HIỆN</h2>
              <div className="space-y-8">
                {[
                  { title: 'Tư vấn & Tiếp nhận', desc: 'Tư vấn loại hình doanh nghiệp, tên, vốn, ngành nghề phù hợp nhất.' },
                  { title: 'Soạn thảo hồ sơ', desc: 'Hoàn thiện hồ sơ theo quy định của Sở Kế hoạch & Đầu tư Đắk Lắk.' },
                  { title: 'Nộp hồ sơ & Nhận kết quả', desc: 'Nhận Giấy chứng nhận đăng ký doanh nghiệp và con dấu pháp lý.' },
                  { title: 'Hỗ trợ sau thành lập', desc: 'Đăng ký chữ ký số, hóa đơn điện tử, khai thuế ban đầu trọn gói.' }
                ].map((item, i) => (
                  <div key={i} className="process-step flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-2xl font-black text-viettel-red group-hover:bg-viettel-red group-hover:text-white transition-all duration-500 shrink-0">
                      0{i+1}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight group-hover:text-viettel-red transition-colors">{item.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">BẮT ĐẦU <br /><span className="text-viettel-red">KHỞI NGHIỆP NGAY?</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Liên hệ ngay với chuyên viên Viettel Đắk Lắk để được tư vấn và hỗ trợ thủ tục thành lập doanh nghiệp nhanh chóng, chuyên nghiệp.
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
