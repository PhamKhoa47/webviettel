import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FileCheck, ShieldCheck, Zap, CheckCircle2, Clock, Smartphone, Globe, Lock, ArrowRight, Activity, Cpu, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

export default function EContract() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Schema JSON-LD for AI Search & SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Hợp đồng điện tử Viettel Đắk Lắk - vContract",
      "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
      "@id": "https://viettel.daklak.vn/e-contract",
      "url": "https://viettel.daklak.vn/e-contract",
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
          "name": "Hợp đồng điện tử Viettel vContract tại Đắk Lắk có giá bao nhiêu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Giá hợp đồng điện tử Viettel tại Đắk Lắk chỉ từ 1.000.000đ cho gói khởi đầu. Phí duy trì hệ thống hàng năm cực thấp, giúp doanh nghiệp tiết kiệm 90% chi phí in ấn và chuyển phát."
          }
        },
        {
          "@type": "Question",
          "name": "Tính pháp lý của hợp đồng điện tử Viettel tại Việt Nam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "vContract của Viettel tuân thủ đầy đủ Luật Giao dịch điện tử, có giá trị pháp lý tương đương hợp đồng giấy. Được Bộ Công Thương cấp phép trục phát triển hợp đồng điện tử quốc gia."
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
        title="Hợp đồng điện tử Viettel vContract Đắk Lắk - Giải pháp ký số 2026"
        description="Dịch vụ Hợp đồng điện tử Viettel vContract tại Đắk Lắk. Tiết kiệm 90% chi phí in ấn, chuyển phát. Ký kết an toàn, pháp lý đầy đủ. Tư vấn bởi Phạm Văn Khoa."
        keywords="hợp đồng điện tử viettel đắk lắk, vcontract viettel đắk lắk, ký hợp đồng điện tử viettel, báo giá vcontract"
      />
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070" 
            alt="Hợp đồng điện tử Viettel vContract Đắk Lắk" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/90 to-slate-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
                <FileCheck className="text-viettel-red" size={16} />
                <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Giải pháp ký kết số tại Đắk Lắk</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
                HỢP ĐỒNG <br /><span className="text-viettel-red">V-CONTRACT VIETTEL</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl">
                Ký kết hợp đồng mọi lúc, mọi nơi với vContract Viettel tại Đắk Lắk. Tiết kiệm thời gian, chi phí và nâng cao hiệu quả quản trị doanh nghiệp Buôn Ma Thuột cùng chuyên viên <Link to="/contact" className="text-viettel-red hover:underline">Phạm Văn Khoa</Link>.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="btn-primary px-10 py-5 text-lg group">
                  <span className="flex items-center">
                    Tư vấn vContract
                    <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button className="px-10 py-5 bg-white border border-slate-200 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all">
                  Báo giá 2026
                </button>
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
              Hỏi đáp <span className="text-viettel-red">Hợp đồng điện tử Đắk Lắk</span>
            </h2>
            <p className="text-slate-600 font-medium">Thông tin chi tiết về dịch vụ hợp đồng điện tử vContract của Viettel dành cho doanh nghiệp Đắk Lắk.</p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <FileText className="text-viettel-red shrink-0" size={24} />
                Hợp đồng điện tử Viettel vContract tại Đắk Lắk có giá bao nhiêu?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-viettel-red mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  Giá hợp đồng điện tử Viettel tại Đắk Lắk chỉ từ <span className="text-viettel-red">1.000.000đ</span> cho gói khởi đầu. Phí duy trì hệ thống hàng năm cực thấp, giúp doanh nghiệp tiết kiệm 90% chi phí in ấn và chuyển phát.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Viettel cung cấp nhiều gói cước linh hoạt dựa trên số lượng hợp đồng ký kết hàng năm. Doanh nghiệp tại Đắk Lắk có thể bắt đầu với gói nhỏ và nâng cấp dễ dàng khi quy mô mở rộng. Liên hệ Phạm Văn Khoa 0989113602 để nhận báo giá chi tiết theo nhu cầu.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <FileText className="text-viettel-red shrink-0" size={24} />
                Tính pháp lý của hợp đồng điện tử Viettel tại Việt Nam?
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-viettel-red mb-4">
                <p className="text-slate-900 font-black text-lg leading-relaxed">
                  vContract của Viettel tuân thủ đầy đủ <span className="text-viettel-red">Luật Giao dịch điện tử</span>, có giá trị pháp lý tương đương hợp đồng giấy. Được Bộ Công Thương cấp phép trục phát triển hợp đồng điện tử quốc gia.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Hợp đồng điện tử Viettel sử dụng công nghệ ký số an toàn, chống giả mạo và có bằng chứng điện tử rõ ràng. Điều này giúp các doanh nghiệp tại Đắk Lắk hoàn toàn yên tâm khi thực hiện các giao dịch kinh tế, dân sự trên môi trường số.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section ref={featuresRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">TÍNH NĂNG NỔI BẬT</h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Pháp lý đảm bảo', desc: 'Tuân thủ Luật Giao dịch điện tử 2005 và Nghị định 130/2018/NĐ-CP của Chính phủ.', icon: <ShieldCheck /> },
              { title: 'Ký kết đa nền tảng', desc: 'Hỗ trợ ký trên máy tính, máy tính bảng và smartphone thông qua App Viettel-CA.', icon: <Smartphone /> },
              { title: 'Bảo mật tuyệt đối', desc: 'Mã hóa dữ liệu chuẩn quốc tế, chống giả mạo và thay đổi nội dung hợp đồng.', icon: <Lock /> },
              { title: 'Hạ tầng Data Center', desc: 'Lưu trữ an toàn trên hạ tầng Data Center chuẩn Tier III quốc tế của Viettel.', icon: <Globe /> }
            ].map((item, i) => (
              <div key={i} className="feature-card glass-card p-10 border-slate-100 hover:border-viettel-red/50 transition-all group">
                <div className="w-16 h-16 bg-white text-viettel-red rounded-2xl flex items-center justify-center mb-8 group-hover:bg-viettel-red group-hover:text-white transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-viettel-red transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Benefits */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div ref={processRef}>
              <h2 className="text-4xl font-black text-slate-900 mb-16 uppercase tracking-tighter leading-none">
                QUY TRÌNH KÝ KẾT <br /><span className="text-viettel-red">4 BƯỚC</span> ĐƠN GIẢN
              </h2>
              <div className="space-y-10">
                {[
                  { title: 'Khởi tạo hợp đồng', desc: 'Tải lên file hợp đồng (PDF, Word) hoặc sử dụng mẫu có sẵn trên hệ thống vContract.' },
                  { title: 'Thiết lập luồng ký', desc: 'Xác định thứ tự người ký, vị trí ký và gửi thông báo tự động qua Email/SMS.' },
                  { title: 'Ký số trực tuyến', desc: 'Đối tác xem xét và thực hiện ký bằng Chữ ký số USB Token, Cloud-CA hoặc OTP.' },
                  { title: 'Hoàn thành & Lưu trữ', desc: 'Hợp đồng có hiệu lực tức thì và được lưu trữ an toàn, dễ dàng tra cứu 24/7.' }
                ].map((item, i) => (
                  <div key={i} className="process-step flex items-start space-x-8 group">
                    <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-2xl font-black text-viettel-red group-hover:bg-viettel-red group-hover:text-white transition-all duration-500 shrink-0">
                      0{i+1}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight group-hover:text-viettel-red transition-colors">{item.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-12 border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 text-viettel-red/5 group-hover:text-viettel-red/10 transition-colors">
                <ShieldCheck size={200} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">LỢI ÍCH VƯỢT TRỘI</h3>
                <ul className="space-y-8">
                  {[
                    'Tiết kiệm 90% chi phí in ấn, chuyển phát và lưu kho.',
                    'Rút ngắn thời gian ký kết từ vài ngày xuống chỉ còn vài phút.',
                    'Xóa bỏ khoảng cách địa lý, ký kết với đối tác toàn cầu.',
                    'Tra cứu và quản lý tập trung, không lo thất lạc, hư hỏng.',
                    'Nâng cao hình ảnh doanh nghiệp chuyên nghiệp, hiện đại.'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start space-x-5">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 shrink-0 mt-1">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-700 text-lg font-medium leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-16 p-8 bg-white rounded-3xl border border-slate-200 backdrop-blur-md">
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-tech-dark bg-slate-800 flex items-center justify-center text-[10px] font-black">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-slate-600">
                      Hơn <span className="text-viettel-red font-black text-xl">100.000+</span> doanh nghiệp đã tin dùng vContract
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">BẢNG GIÁ <span className="text-viettel-red">VCONTRACT</span></h2>
            <p className="text-slate-600 text-xl font-medium">Liên hệ ngay để nhận chính sách ưu đãi mới nhất.</p>
          </div>

          <div className="overflow-x-auto glass-card border-slate-100 p-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-6 text-left font-black uppercase">Gói</th>
                  <th className="py-4 px-6 text-left font-black uppercase">Số lượng</th>
                  <th className="py-4 px-6 text-left font-black uppercase">Đơn giá</th>
                  <th className="py-4 px-6 text-left font-black uppercase">Giá khuyến mãi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Contract.100', qty: '100', price: '6.050', promo: '1.605.000' },
                  { name: 'Contract.500', qty: '500', price: '5.610', promo: '3.805.000' },
                  { name: 'Contract.1K', qty: '1.000', price: '5.170', promo: '6.170.000' },
                  { name: 'Contract.5K', qty: '5.000', price: '4.400', promo: '23.000.000' },
                  { name: 'Contract.10K', qty: '10.000', price: '4.180', promo: '42.800.000' },
                ].map((plan, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold">{plan.name}</td>
                    <td className="py-4 px-6">{plan.qty} hợp đồng</td>
                    <td className="py-4 px-6">{plan.price}đ/hợp đồng</td>
                    <td className="py-4 px-6 font-black text-viettel-red">{plan.promo}đ</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-center text-slate-500 mt-8 italic">
              * Phí khởi tạo & duy trì: 1.000.000đ/năm. Vui lòng liên hệ hotline <strong>{BRAND.phone}</strong> để được tư vấn chính sách mới nhất.
            </p>
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
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">SỐ HÓA <br /><span className="text-viettel-red">QUY TRÌNH KÝ KẾT</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Liên hệ ngay để được chuyên viên Viettel Đắk Lắk tư vấn giải pháp hợp đồng điện tử vContract tối ưu nhất cho doanh nghiệp của bạn.
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
