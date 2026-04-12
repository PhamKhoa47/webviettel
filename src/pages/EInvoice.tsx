import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, LayoutDashboard, Database, Activity, Phone, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_EINVOICE, BRAND } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function EInvoice() {
  const tableRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Schema JSON-LD for AI Search & SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Hóa đơn điện tử Viettel Đắk Lắk - S-Invoice",
      "image": "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&q=80&w=1200",
      "@id": "https://vietteldaklak.vn/e-invoice",
      "url": "https://vietteldaklak.vn/e-invoice",
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
          "name": "Báo giá hóa đơn điện tử Viettel tại Đắk Lắk mới nhất?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Giá hóa đơn điện tử Viettel (S-Invoice) tại Đắk Lắk chỉ từ 429.000đ cho gói 100 hóa đơn. Phí khởi tạo hệ thống là 1.000.000đ (chỉ đóng 1 lần duy nhất)."
          }
        },
        {
          "@type": "Question",
          "name": "Tại sao nên dùng hóa đơn điện tử Viettel S-Invoice tại Đắk Lắk?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S-Invoice của Viettel đảm bảo an toàn dữ liệu tuyệt đối trên hạ tầng Cloud Tier 3. Hỗ trợ kết nối trực tiếp với Tổng cục Thuế theo Thông tư 78 và Nghị định 123."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify([schemaData, faqSchema]);
    document.head.appendChild(script);

    const ctx = gsap.context(() => {
      // Table rows animation
      gsap.fromTo("tbody tr", 
        { y: 0, x: -20, opacity: 0 },
        {
        y: 0,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 80%",
        },
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
      }
      );

      // Benefits cards animation
      gsap.fromTo(".benefit-card", 
        { y: 40, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
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
        title="Hóa đơn điện tử Viettel S-Invoice Đắk Lắk - Báo giá 2026"
        description="Dịch vụ Hóa đơn điện tử Viettel S-Invoice tại Đắk Lắk. Tuân thủ Thông tư 78, Nghị định 123. Hỗ trợ doanh nghiệp Buôn Ma Thuột chuyển đổi số nhanh chóng."
        keywords="hóa đơn điện tử viettel đắk lắk, s-invoice viettel đắk lắk, phần mềm hóa đơn điện tử viettel, báo giá s-invoice"
      />
      {/* Hero */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.1)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
                <Activity className="text-viettel-red" size={16} />
                <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Hệ thống hóa đơn thông minh tại Đắk Lắk</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
                HÓA ĐƠN <br /><span className="text-viettel-red">S-INVOICE VIETTEL</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Giải pháp hóa đơn điện tử Viettel S-Invoice tại Đắk Lắk uy tín, an toàn. Tuân thủ Thông tư 78 & Nghị định 123. Hỗ trợ doanh nghiệp Buôn Ma Thuột chuyển đổi số nhanh chóng cùng chuyên viên <Link to="/contact" className="text-viettel-red hover:underline">Phạm Văn Khoa</Link>.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="btn-primary px-10 py-4 text-lg">
                  Báo giá S-Invoice
                </Link>
                <button className="px-10 py-4 bg-white border border-slate-200 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all">
                  Demo hệ thống
                </button>
              </div>
            </motion.div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-viettel-red to-red-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hóa đơn điện tử Viettel S-Invoice Đắk Lắk" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Optimized FAQ Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
              Hỏi đáp <span className="text-viettel-red">Hóa đơn điện tử Đắk Lắk</span>
            </h2>
            <p className="text-slate-600 font-medium">Giải đáp thắc mắc về dịch vụ hóa đơn điện tử S-Invoice của Viettel tại khu vực Đắk Lắk.</p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <HelpCircle className="text-viettel-red shrink-0" size={24} />
                Báo giá hóa đơn điện tử Viettel tại Đắk Lắk mới nhất?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-viettel-red mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  Giá hóa đơn điện tử Viettel (S-Invoice) tại Đắk Lắk chỉ từ <span className="text-viettel-red">429.000đ</span> cho gói 100 hóa đơn. Phí khởi tạo hệ thống là 1.000.000đ (chỉ đóng 1 lần duy nhất).
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Gói cước hóa đơn điện tử Viettel không giới hạn thời gian sử dụng. Doanh nghiệp tại Đắk Lắk có thể mua gói lớn để tiết kiệm chi phí trên mỗi hóa đơn. Đặc biệt, Viettel hỗ trợ thiết kế mẫu hóa đơn cơ bản hoàn toàn miễn phí.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <HelpCircle className="text-viettel-red shrink-0" size={24} />
                Tại sao nên dùng hóa đơn điện tử Viettel S-Invoice tại Đắk Lắk?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-viettel-red mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  S-Invoice của Viettel đảm bảo an toàn dữ liệu tuyệt đối trên hạ tầng Cloud Tier 3. Hỗ trợ kết nối trực tiếp với Tổng cục Thuế theo <span className="text-viettel-red">Thông tư 78 và Nghị định 123</span>.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Viettel Đắk Lắk có đội ngũ chuyên viên hỗ trợ trực tiếp 24/7. Khi gặp sự cố về ký hóa đơn hoặc lỗi hệ thống thuế, bạn sẽ được xử lý ngay lập tức thông qua UltraView hoặc hỗ trợ tận nơi tại Buôn Ma Thuột.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">LỢI ÍCH DOANH NGHIỆP</h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Tiết kiệm chi phí', desc: 'Giảm 90% chi phí in ấn, vận chuyển và lưu trữ hóa đơn giấy truyền thống.', icon: Zap, color: 'text-orange-400', bg: 'bg-orange-400/10' },
              { title: 'An toàn bảo mật', desc: 'Lưu trữ trên hạ tầng Data Center đạt chuẩn quốc tế Tier 3 của Viettel.', icon: Shield, color: 'text-blue-400', bg: 'bg-blue-400/10' },
              { title: 'Dễ dàng quản lý', desc: 'Tra cứu, báo cáo tình hình sử dụng hóa đơn nhanh chóng, chính xác 24/7.', icon: LayoutDashboard, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
              { title: 'Tích hợp linh hoạt', desc: 'Dễ dàng kết nối với các phần mềm kế toán, ERP, bán hàng hiện có.', icon: Database, color: 'text-purple-400', bg: 'bg-purple-400/10' }
            ].map((item, i) => (
              <div key={i} className="benefit-card glass-card p-10 border-slate-100 hover:border-slate-300 transition-all duration-500 group">
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">BẢNG GIÁ DỊCH VỤ</h2>
            <p className="text-slate-600 font-medium uppercase tracking-widest text-sm">Hệ thống Vinvoice 2.0 - Đắk Lắk</p>
          </div>
          
          <div ref={tableRef} className="glass-card border-slate-200 overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white text-slate-900 border-b border-slate-200">
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest">STT</th>
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest">Gói cước</th>
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest">Số lượng hoá đơn</th>
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-right">Giá bán (VNĐ)</th>
                    <th className="py-6 px-8 text-[10px] font-black uppercase tracking-widest text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {PRICING_EINVOICE.map((plan, i) => (
                    <tr key={i} className="hover:bg-white transition-colors group">
                      <td className="py-6 px-8 text-slate-500 font-bold">{i + 1}</td>
                      <td className="py-6 px-8 font-black text-slate-900 uppercase tracking-tight">{plan.package}</td>
                      <td className="py-6 px-8 text-slate-600 font-medium">{plan.quantity}</td>
                      <td className="py-6 px-8 font-black text-viettel-red text-right text-xl tracking-tighter">{plan.price}</td>
                      <td className="py-6 px-8 text-center">
                        <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-viettel-red text-viettel-red hover:text-white text-xs font-black uppercase tracking-widest rounded-xl border border-slate-200 hover:border-viettel-red transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(238,0,0,0.3)]">
                          Đăng ký
                        </Link>
                      </td>
                    </tr>
                  ))}
                  <tr className="hover:bg-white transition-colors">
                    <td className="py-6 px-8 text-slate-500 font-bold">7</td>
                    <td className="py-6 px-8 font-black text-slate-900 uppercase tracking-tight">SL &gt; 5000</td>
                    <td colSpan={2} className="py-6 px-8 text-slate-500 text-center italic font-medium">
                      Xin vui lòng liên hệ nhân viên kinh doanh để nhận báo giá ưu đãi nhất
                    </td>
                    <td className="py-6 px-8 text-center">
                      <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-viettel-red/20 hover:bg-viettel-red text-viettel-red hover:text-white text-xs font-black uppercase tracking-widest rounded-xl border border-viettel-red/30 hover:border-viettel-red transition-all duration-300">
                        Liên hệ
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-emerald-50 p-10 text-center border-t border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
              <div className="relative z-10">
                <p className="text-emerald-600 font-black text-xl uppercase tracking-tight">
                  Phí khởi tạo hoá đơn trên hệ thống: <span className="text-3xl text-slate-900 ml-2">1.000.000đ</span>
                </p>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-4">
                  * Giá trên đã bao gồm VAT. Hỗ trợ kỹ thuật trọn đời.
                </p>
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
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">SẴN SÀNG <br /><span className="text-viettel-red">SỬ DỤNG HÓA ĐƠN ĐIỆN TỬ?</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Liên hệ ngay với chuyên viên Viettel Đắk Lắk để được tư vấn giải pháp hóa đơn điện tử tối ưu nhất cho doanh nghiệp của bạn.
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
