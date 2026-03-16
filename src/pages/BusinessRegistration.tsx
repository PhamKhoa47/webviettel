import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Scale, Clock, CheckCircle2, Zap, Activity, ArrowRight, ShieldCheck, Gavel, Phone } from 'lucide-react';
import { BRAND } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BusinessRegistration() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070" 
            alt="Thành lập doanh nghiệp" 
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
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Tư vấn pháp lý chuyên nghiệp</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
              THÀNH LẬP <br /><span className="text-viettel-red">DOANH NGHIỆP</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Khởi đầu kinh doanh thuận lợi với dịch vụ tư vấn pháp lý chuyên nghiệp. Nhanh chóng, uy tín, trọn gói, chi phí tối ưu nhất tại Đắk Lắk.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn-primary px-10 py-4 text-lg">
                Nhận tư vấn ngay
              </Link>
              <a href="#pricing" className="px-10 py-4 bg-white border border-slate-200 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all">
                Xem bảng giá trọn gói
              </a>
            </div>
          </motion.div>
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
